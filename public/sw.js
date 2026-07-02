// Service worker Gardienne — cache « app shell » pour un fonctionnement hors-ligne.
// La détection et le scellement de preuve tournent déjà en local ; ce cache
// permet d'ouvrir l'app même sans connexion (utile en zone à faible réseau).

const CACHE = "gardienne-v1";
const SHELL = ["/", "/analyser", "/aide", "/preuve", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  // Stratégie « réseau d'abord, cache en secours » : on reste à jour quand il y a
  // du réseau, et on garde l'app utilisable hors-ligne.
  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(request).then((cached) => cached || caches.match("/"))),
  );
});
