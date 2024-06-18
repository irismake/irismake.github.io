'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0d5305042ffe92082ac2eadeed5b6fec",
"index.html": "f902a92fcb0a7e39d929b8bd723bf7e4",
"/": "f902a92fcb0a7e39d929b8bd723bf7e4",
"main.dart.js": "9afc8983dfdcf239ee82058f3e2f4061",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "452c4bed383467f35db5afee5e1bc2c5",
"assets/AssetManifest.json": "f5efbe38a9055226c3b4bb212db49ae0",
"assets/NOTICES": "d5f708503972fcda6e0c0e78d07ba5a8",
"assets/FontManifest.json": "697486c74b2a5eabe279077ab0f37ebf",
"assets/AssetManifest.bin.json": "15eac32f8ab721654c43751dd5da6c1e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "13b2def17a46296f06b8b9ac01c32eb8",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/image_google.svg": "dadfdae03196204e8cde6dabc30f87b3",
"assets/assets/images/image_logo_name.svg": "289cb2b82bec0105438927f438c49cf7",
"assets/assets/images/image_google.png": "192aebcf109b39191f166f04660efe26",
"assets/assets/images/image_vertical_line.svg": "dc3f5d369c3583b7d1b0f0aa05306ba0",
"assets/assets/images/image_welcome.svg": "6a6511cc9f8021eb4d0a3a7a4a829158",
"assets/assets/images/image_user_profile.svg": "61bee763e90a484767d5f4a50b94e3c0",
"assets/assets/icons/button_bookmark_fill_black.svg": "e15bf5c8e6f740568538285e4c166c34",
"assets/assets/icons/button_hamburger.svg": "506d6953260a3217c358c243cb296bb1",
"assets/assets/icons/button_plus.svg": "d95cefb12819c8ede88d7346582ccb91",
"assets/assets/icons/tab_home.svg": "8eada86117b0afd241eecd30a1cfe545",
"assets/assets/icons/icon_close_black.svg": "1fa76fb7a6d0f2006df9acaac0ff1076",
"assets/assets/icons/tab_user.svg": "918ee208e78b6e65a838dccbe674acbc",
"assets/assets/icons/button_upload_test.svg": "9d5fa8a435b9082949bedb8aa898ed2e",
"assets/assets/icons/tab_search.svg": "ae42701a0ebcfcf6098f8636952535db",
"assets/assets/icons/icon_search_grey.svg": "755e5345777ba8c6392969d36f0e11df",
"assets/assets/icons/icon_close.svg": "e59e6cdca1713f24849dad0ceb30e9d0",
"assets/assets/icons/icon_plus_image.svg": "e8c07da48b3ff2e94dd8f6a58caf0495",
"assets/assets/icons/button_bookmark_empty_white.svg": "d998af1bab7be7e5eb090fbfad85ab96",
"assets/assets/icons/button_bookmark_fill_white.svg": "ab1b29513f141df6fb3e312a9e9c032a",
"assets/assets/icons/tab_book_mark.svg": "d998af1bab7be7e5eb090fbfad85ab96",
"assets/assets/icons/tab_edit.svg": "c18fd245423f057f3aa8108277648976",
"assets/assets/icons/icon_arrow_bottom.svg": "78c3735e2695fdea0df9e45f24ea854d",
"assets/assets/icons/button_go_back.svg": "e9b7db24cb6f6f444bab0547087e60dd",
"assets/assets/icons/button_more.svg": "c41a52eda785e8a53243a365d38e9cee",
"assets/assets/icons/icon_circle_plus.svg": "eeb869aa64bad6ac5fc81f1788c393a0",
"assets/assets/icons/button_bookmark_empty_black.svg": "fbec746cd43c9aef736a17aec3b2d1e7",
"assets/assets/fonts/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/assets/fonts/Pretendard-Light.otf": "de308b576c70af4871d436e89918fdf6",
"assets/assets/fonts/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/assets/fonts/Pretendard-Thin.otf": "32c8b7e405cd546866e5ef1d33179cba",
"assets/assets/fonts/Pretendard-ExtraLight.otf": "049bb07edff45e5817fa4f892ebabe98",
"assets/assets/fonts/Pretendard-SemiBold.otf": "6fe301765c4f438e2034a0a47b609c61",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
