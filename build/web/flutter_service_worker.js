'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1cd1508b52c31b5d8a8ca6cfd50d8bc7",
"assets/assets/fonts/Montserrat-Bold.ttf": "d3085f686df272f9e1a267cc69b2d24f",
"assets/assets/fonts/Montserrat-Regular.ttf": "07689d4eaaa3d530d58826b5d7f84735",
"assets/assets/images/hc_black_trans.png": "10571bd9f4a1b898a61631372290360a",
"assets/assets/images/hc_white_trans.png": "1d44f06e7b93d66cec6695cb9b098a35",
"assets/assets/images/HeyCodeComp.png": "c53dbabb4a37d91b47c1218b837a79ce",
"assets/assets/images/HeyCode_blackbg.png": "2bb47116dfbe4a747701199f361f4674",
"assets/assets/images/lp_image.png": "5aad4d4216174954f5228d7d268546e8",
"assets/FontManifest.json": "957423d262d0760a97e6d1ba8e4280e1",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "cb0933e0467317aa492e24c19e7bf37b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5aad4d4216174954f5228d7d268546e8",
"icons/Icon-192.png": "1e09bed4d17114794d391f16ee86aaef",
"icons/Icon-512.png": "1e09bed4d17114794d391f16ee86aaef",
"index.html": "1e08ab1b1a21252ccdf688a276e6bed5",
"/": "1e08ab1b1a21252ccdf688a276e6bed5",
"main.dart.js": "6bb966f4fc636076f01ea8822a821ecd",
"manifest.json": "ba539ccf0d1e5496b52a639a3a2f7141"
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
