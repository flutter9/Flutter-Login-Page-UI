'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/light-1.png": "6c8ba31eab30d40b5ce914be52ca484e",
"/assets/assets/images/light-2.png": "82bff49a319cf52b57967f67ead32154",
"/assets/assets/images/background.png": "97bcdff34666d1b3e9ccbac7b1a58d95",
"/assets/assets/images/clock.png": "c0091febbdfb94bacb488b00f4521d5a",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "980ddac0e87b96b72ea1dc8c0507a0c3",
"/assets/LICENSE": "86ed68af45587fbe062baf0749fd1d90",
"/main.dart.js": "5c9c7b5bde871b79abc621fc0ffd97ee"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
