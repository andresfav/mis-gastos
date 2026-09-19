const CACHE_NAME =
    "mis-gastos-v1";


const APP_FILES = [
    "./",
    "./index.html",
    "./styles.css",
    "./app.js",
    "./manifest.json",
    "./icons/icon.svg"
];


// =========================
// INSTALACIÓN
// =========================

self.addEventListener(
    "install",
    (event) => {

        event.waitUntil(

            caches
                .open(CACHE_NAME)
                .then(
                    (cache) =>
                        cache.addAll(
                            APP_FILES
                        )
                )
        );


        self.skipWaiting();
    }
);


// =========================
// ACTIVACIÓN
// =========================

self.addEventListener(
    "activate",
    (event) => {

        event.waitUntil(

            caches
                .keys()
                .then(
                    (cacheNames) => {

                        return Promise.all(

                            cacheNames
                                .filter(
                                    (cacheName) =>
                                        cacheName
                                        !== CACHE_NAME
                                )
                                .map(
                                    (cacheName) =>
                                        caches.delete(
                                            cacheName
                                        )
                                )
                        );
                    }
                )
        );


        self.clients.claim();
    }
);


// =========================
// PETICIONES
// =========================

self.addEventListener(
    "fetch",
    (event) => {

        const request =
            event.request;


        if (
            request.method !== "GET"
        ) {

            return;
        }


        const requestUrl =
            new URL(
                request.url
            );


        // No interferimos con Supabase
        // ni con servicios externos.

        if (
            requestUrl.origin
            !== self.location.origin
        ) {

            return;
        }


        event.respondWith(

            fetch(request)

                .then(
                    (response) => {

                        const responseCopy =
                            response.clone();


                        caches
                            .open(
                                CACHE_NAME
                            )
                            .then(
                                (cache) => {

                                    cache.put(
                                        request,
                                        responseCopy
                                    );
                                }
                            );


                        return response;
                    }
                )

                .catch(
                    async () => {

                        const cachedResponse =
                            await caches.match(
                                request
                            );


                        if (cachedResponse) {

                            return cachedResponse;
                        }


                        if (
                            request.mode
                            === "navigate"
                        ) {

                            return caches.match(
                                "./index.html"
                            );
                        }
                    }
                )
        );
    }
);