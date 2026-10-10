// Root service worker: makes the site installable. Network first (every build is new), a tiny offline page as fallback.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    "<!doctype html><meta charset=utf-8><body style='background:#000;color:#c9b98a;font:18px serif;display:grid;place-items:center;height:100vh;margin:0'>The Litany needs a connection.",
    { headers: { "Content-Type": "text/html" } })));
});
