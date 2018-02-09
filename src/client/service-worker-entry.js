// Set this to true for production
var doCache = true;

// Name our cache
var CACHE_NAME = 'hash-pwa-4';

// Delete old caches that are not our current one!
self.addEventListener('activate', event => {
  event.waitUntil(checkAndDeleteOlderCaches())
});
 
function checkAndDeleteOlderCaches() {
  const cacheWhitelist = [CACHE_NAME];
  caches.keys()
    .then(keyList =>
      Promise.all(keyList.map(key => {
        if (!cacheWhitelist.includes(key)) {
          console.log('Deleting cache: ' + key)
          return caches.delete(key);
        }
      }))
    )
}

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function (event) {
  if (doCache) event.waitUntil(registerCaches());
});

function registerCaches() {
  checkAndDeleteOlderCaches()
  caches.open(CACHE_NAME)
  .then(function (cache) {
    // Get the assets manifest so we can see what our js file is named
    // This is because webpack hashes it
    const urlsToCache = [
      '/',
      '/index.html',
      '/app.bundle.js',
      '/vendor.85582fe1889cbb931439.js',
      '/css/style.css',
      '/font/MuseoSans-100.otf',
      '/font/MuseoSans-300.otf',
      '/font/MuseoSans-500.otf',
      '/font/MuseoSans-700.otf',
      '/font/MuseoSans-900.otf',
    ]

    cache.addAll(urlsToCache)
    console.log('cached');
  })
}

let routers = ['/home', '/promo', '/disukai', '/chat', '/account'] 

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
function fetchData(event) {
  let path = new URL(event.request.url).pathname

  if (path.indexOf('/api') !== 0) 
  for (let i in routers) if (path.indexOf(routers[i]) === 0 ) return caches.match('/')
  console.log(path)
  return caches.match(event.request).then(function (response) {
    //response can be undefined if no cache found
    // if (response) {
    //   console.log('result:', event.request, response)
    //   caches.open(CACHE_NAME)
    //   .then(function (cache) {
    //     cache.keys().then(function(keys) {
    //       console.log('CACHE: ', keys);
    //     })
    //   })
    // }

    console.log(path, response)
    return response || fetch(event.request);
  }).catch(err => {
    //console.log('error', event.request, err)
  })
}

self.addEventListener('fetch', function (event) {
  if (doCache) event.respondWith(fetchData(event))
});

// self.addEventListener('push', function(event) {
//   var payload = event.data ? event.data.text() : 'no payload'
//   event.waitUntil(
//     self.registration.showNotification('New Notification', {
//       body: payload
//     })
//   )
// })

self.addEventListener('push', function(e) {
  var options = {
    body: 'This notification was generated from a push!',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close',
        icon: 'images/xmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});