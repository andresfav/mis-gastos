const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
function worker() {
    const handlers = {}, stores = new Map(), writes = [], requests = [];
    const base = 'https://andresfav.github.io/mis-gastos/service-worker.js';
    const key = request => new URL(typeof request === 'string' ? request : request.url, base).href;
    const open = async name => {
        if (!stores.has(name)) stores.set(name, new Map());
        const store = stores.get(name);
        return {
            match: async request => store.get(key(request))?.clone(),
            put: async (request, response) => { writes.push({ name, status: response.status }); store.set(key(request), response); },
            addAll: async files => { for (const request of files) { requests.push(request); store.set(key(request), new Response('PRECACHE')); } }
        };
    };
    const state = { network: async () => new Response('NEW'), claimed: false, skipped: false };
    const sandbox = { URL, Request, Response,
        self: { location: new URL(base), addEventListener: (name, handler) => handlers[name] = handler,
            skipWaiting: async () => { state.skipped = true; }, clients: { claim: async () => { state.claimed = true; } } },
        caches: { open, keys: async () => [...stores.keys()], delete: async name => stores.delete(name) },
        fetch: (request, options) => state.network(request, options)
    };
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../service-worker.js'), 'utf8'), sandbox);
    const lifecycle = async name => {
        const waits = []; handlers[name]({ waitUntil: promise => waits.push(promise) }); await Promise.all(waits);
    };
    const fetch = async (url = 'app.js', { mode = 'cors', method = 'GET' } = {}) => {
        let response; const waits = [];
        handlers.fetch({ request: { url: new URL(url, base).href, mode, method },
            respondWith: promise => { response = promise; }, waitUntil: promise => waits.push(promise) });
        const result = await response; await Promise.all(waits);
        return { response: result, waits: waits.length };
    };
    return { lifecycle, fetch, open, stores, writes, requests, state, base };
}
test('v3 precache revalida HTTP y mantiene /mis-gastos/', async () => {
    const w = worker(); await w.lifecycle('install');
    assert.ok(w.stores.has('mis-gastos-v3')); assert.equal(w.requests.length, 6);
    assert.ok(w.requests.every(request => request.url.startsWith('https://andresfav.github.io/mis-gastos/') && request.cache === 'reload'));
    assert.equal(w.state.skipped, true);
});
test('activación elimina solo cachés propias antiguas', async () => {
    const w = worker(); for (const name of ['mis-gastos-v1', 'mis-gastos-v2', 'mis-gastos-v3', 'other-app-v1']) await w.open(name);
    await w.lifecycle('activate');
    assert.deepEqual([...w.stores.keys()], ['mis-gastos-v3', 'other-app-v1']); assert.equal(w.state.claimed, true);
});
test('HTML, JS y CSS de red se revalidan y actualizan dentro de waitUntil', async () => {
    const w = worker();
    w.state.network = async (request, options) => { assert.equal(options.cache, 'no-cache'); return new Response('NEW'); };
    for (const file of ['index.html', 'app.js', 'styles.css']) {
        const result = await w.fetch(file); assert.equal(await result.response.text(), 'NEW'); assert.equal(result.waits, 1);
        assert.equal(await (await (await w.open('mis-gastos-v3')).match(new URL(file, w.base).href)).text(), 'NEW');
    }
});
test('404/500 nunca reemplazan una copia válida ni entran en la caché', async () => {
    const w = worker(); await w.fetch('app.js'); const count = w.writes.length;
    for (const status of [404, 500]) {
        w.state.network = async () => new Response('ERROR', { status });
        assert.equal(await (await w.fetch('app.js')).response.text(), 'NEW');
        assert.equal((await w.fetch('missing.js')).response.status, status);
        assert.equal(w.writes.length, count);
    }
});
test('sin red ni caché responde 503; navegación usa index de esta versión', async () => {
    const w = worker(); w.state.network = async () => { throw Error('offline'); };
    assert.equal((await w.fetch()).response.status, 503);
    await w.lifecycle('install'); assert.equal(await (await w.fetch('page?recovery=1', { mode: 'navigate' })).response.text(), 'PRECACHE');
});
test('excluye Supabase, otros proyectos y POST', async () => {
    const w = worker();
    for (const url of ['https://example.supabase.co/rest/v1/expenses', '/another-project/app.js']) {
        const result = await w.fetch(url); assert.equal(result.response, undefined); assert.equal(result.waits, 0);
    }
    assert.equal((await w.fetch('app.js', { method: 'POST' })).response, undefined);
});
