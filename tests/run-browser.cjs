// Local browser tests: no SDK/CDN requests and no real Supabase connection.
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawn } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const output = fs.mkdtempSync(path.join(os.tmpdir(), 'mis-gastos-tests-'));
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    const chrome = spawn(process.env.CHROME_BIN || '/usr/bin/google-chrome', [
        '--headless', '--no-sandbox', '--disable-gpu', '--disable-background-networking',
        '--no-first-run', '--remote-debugging-port=0', '--user-data-dir=' + path.join(output, 'profile'),
        'about:blank'
    ], { stdio: 'ignore' });
    let socket;
    try {
        let port;
        for (let i = 0; i < 100; i++) {
            try { port = fs.readFileSync(path.join(output, 'profile', 'DevToolsActivePort'), 'utf8').split('\n')[0]; break; }
            catch { await delay(100); }
        }
        if (!port) throw new Error('Chrome no arrancó. Revisa CHROME_BIN y los permisos del entorno.');
        const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
        socket = new WebSocket(tabs.find(tab => tab.type === 'page').webSocketDebuggerUrl);
        await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }));
        let id = 0;
        const callbacks = new Map();
        socket.addEventListener('message', event => {
            const message = JSON.parse(event.data);
            if (message.id) { callbacks.get(message.id)(message); callbacks.delete(message.id); }
        });
        const send = (method, params = {}) => new Promise((resolve, reject) => {
            const requestId = ++id;
            callbacks.set(requestId, reply => reply.error ? reject(reply.error) : resolve(reply.result));
            socket.send(JSON.stringify({ id: requestId, method, params }));
        });
        const evaluate = async expression => (await send('Runtime.evaluate', {
            expression, returnByValue: true, awaitPromise: true
        })).result.value;
        await send('Page.enable');
        await send('Runtime.enable');
        const markup = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
            .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
            .replace(/<link\b[^>]*>/g, '')
            .replace('</head>', '<style>' + fs.readFileSync(path.join(root, 'styles.css'), 'utf8')
                + '\n#test-results { display:none; }</style></head>');
        const mock = fs.readFileSync(path.join(__dirname, 'mock-supabase.js'), 'utf8');
        // Only intercept page reload to inspect success without losing assertions.
        const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8')
            .replace('window.location.reload();', 'window.testReloads = (window.testReloads || 0) + 1;');
        let failures = 0;
        const suites = process.argv.slice(2).length ? process.argv.slice(2)
            : ['categories', 'payments', 'reset', 'regressions'];
        for (const width of [390, 1440]) {
            await send('Emulation.setDeviceMetricsOverride', {
                width, height: 900, deviceScaleFactor: 1, mobile: width < 700
            });
            for (const suite of suites) {
                const test = fs.readFileSync(path.join(__dirname, suite + '.test.js'), 'utf8');
                const file = path.join(output, suite + '-' + width + '.html');
                fs.writeFileSync(file, markup.replace('</body>', () =>
                    '<script>' + mock + '</script><script>' + app + '</script><script>' + test + '</script></body>'));
                await send('Page.navigate', { url: 'file://' + file });
                let result;
                for (let i = 0; i < 300; i++) {
                    result = await evaluate('document.getElementById("test-results")?.textContent');
                    if (result) break;
                    await delay(50);
                }
                const errors = await evaluate('window.testErrors');
                const passed = result && !result.includes('FAIL') && !errors?.length;
                console.log(`${suite} ${width}px: ${passed ? 'PASS' : 'FAIL'} (${result?.split('\n').length || 0} checks)`);
                if (!passed) { console.log(result, errors); failures++; }
                fs.writeFileSync(path.join(output, suite + '-' + width + '.txt'), result || 'TIMEOUT');
                const screenshot = await send('Page.captureScreenshot', { format: 'png' });
                fs.writeFileSync(path.join(output, suite + '-' + width + '.png'), Buffer.from(screenshot.data, 'base64'));
            }
        }
        console.log('Artifacts:', output);
        if (failures) process.exitCode = 1;
    } catch (error) { console.error(error); process.exitCode = 1; }
    finally { socket?.close(); chrome.kill(); }
})();
