const CACHE_NAME = 'kuchapka-v7';
const ASSETS = [
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Network first: vždy se nejdřív zkusí čerstvá kopie, cache slouží jen offline.
// Cache-first by znamenala, že se nová verze po nasazení nikdy neprojeví.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  // cizí adresy (ntfy.sh — položky z hodin) jdou vždy rovnou na síť, nekešují se
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(e.request).then((cached) => cached || caches.match('./index.html')))
  );
});
