const CACHE_NAME = "mis-gastos-v3";
const CACHE_PREFIX = "mis-gastos-";
const APP_FILES = [
    "./", "./index.html", "./styles.css", "./app.js",
    "./manifest.json", "./icons/icon.svg"
];
const APP_BASE = new URL("./", self.location.href);

self.addEventListener("install", event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        // Renovar también la caché HTTP al precargar una versión nueva.
        await cache.addAll(APP_FILES.map(file => new Request(
            new URL(file, APP_BASE), { cache: "reload" }
        )));
        await self.skipWaiting();
    })());
});

self.addEventListener("activate", event => {
    event.waitUntil((async () => {
        const names = await caches.keys();
        await Promise.all(names
            .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
            .map(name => caches.delete(name)));
        await self.clients.claim();
    })());
});

async function fetchAppFile(request) {
    let response;
    try {
        // Red primero, revalidando HTML/JS/CSS incluso con caché HTTP reciente.
        response = await fetch(request, { cache: "no-cache" });
        if (response.ok) return { response, fresh: true };
    } catch {
        // La red no está disponible: consultar solo la caché de esta versión.
    }

    try {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(request);
        if (cached?.ok) return { response: cached, fresh: false };
        if (request.mode === "navigate") {
            const page = await cache.match(new URL("./index.html", APP_BASE).href);
            if (page?.ok) return { response: page, fresh: false };
        }
    } catch {
        // Un fallo de almacenamiento tampoco debe impedir responder.
    }

    return {
        response: response || new Response("Sin conexión. Vuelve a intentarlo cuando tengas red.", {
            status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" }
        }),
        fresh: false
    };
}

self.addEventListener("fetch", event => {
    const request = event.request;
    const url = new URL(request.url);
    // No interceptar Supabase, CDN ni otros proyectos del mismo dominio.
    if (request.method !== "GET" || url.origin !== APP_BASE.origin
        || !url.pathname.startsWith(APP_BASE.pathname)) return;

    const result = fetchAppFile(request);
    event.respondWith(result.then(({ response }) => response));
    event.waitUntil(result.then(async ({ response, fresh }) => {
        if (!fresh) return;
        try {
            const copy = response.clone();
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, copy);
        } catch {
            // La respuesta de red sigue siendo válida si falla la caché.
        }
    }));
});
