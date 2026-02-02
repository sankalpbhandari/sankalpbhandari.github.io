/**
 * Service Worker for Sankalp Bhandari's Portfolio
 * Implements caching strategies for improved performance
 * 
 * Cache Strategy:
 * - Static assets (CSS, JS, images): Cache First
 * - HTML: Network First (for fresh content)
 * - External resources: Stale While Revalidate
 */

const CACHE_NAME = 'portfolio-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/images/me-v2.jpg',
  '/images/utdallas_blur.jpg',
  '/images/logo.jpeg',
  '/Resume_Sankalp_Bhandari.pdf'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Removing old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with different strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Strategy for same-origin requests
  if (url.origin === location.origin) {
    // HTML files: Network first, fallback to cache
    if (request.destination === 'document' || url.pathname.endsWith('.html')) {
      event.respondWith(networkFirst(request));
      return;
    }

    // Static assets: Cache first, fallback to network
    event.respondWith(cacheFirst(request));
    return;
  }

  // External resources: Stale while revalidate
  event.respondWith(staleWhileRevalidate(request));
});

/**
 * Cache First Strategy
 * Best for: Static assets that rarely change
 */
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network request failed:', error);
    // Return a fallback if available
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

/**
 * Network First Strategy
 * Best for: HTML pages that need fresh content
 */
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network request failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Return offline page or error
    return new Response('You are offline', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

/**
 * Stale While Revalidate Strategy
 * Best for: External resources where some staleness is acceptable
 */
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        const cache = caches.open(CACHE_NAME);
        cache.then((c) => c.put(request, networkResponse.clone()));
      }
      return networkResponse;
    })
    .catch((error) => {
      console.log('[SW] Network request failed for external resource:', error);
      return cachedResponse || new Response('Offline', { status: 503 });
    });

  return cachedResponse || fetchPromise;
}
