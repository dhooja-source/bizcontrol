// v2 - clear all caches
var CACHE = ‘shifty-v2’;

self.addEventListener(‘install’, function(e) {
self.skipWaiting();
});

self.addEventListener(‘activate’, function(e) {
e.waitUntil(
caches.keys().then(function(keys) {
return Promise.all(keys.map(function(k) { return caches.delete(k); }));
}).then(function() { return self.clients.claim(); })
);
});

self.addEventListener(‘fetch’, function(event) {
event.respondWith(fetch(event.request));
});
