/*
 * Cornerstone's narration service worker. It does one thing: when a lesson has
 * been saved for offline listening, it answers requests for that lesson's
 * narration from the saved copy, including the byte-range requests that audio
 * players make when they start and seek. Every other request goes to the network
 * untouched.
 */
const CACHE = "cornerstone-narration-v1";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || event.request.method !== "GET" || !url.pathname.startsWith("/api/narration/")) return;
  event.respondWith(url.pathname.startsWith("/api/narration/audio/") ? audio(event.request) : plan(event.request));
});

/** Narration plans: fresh from the network when possible, the saved copy when not. */
async function plan(request) {
  try {
    return await fetch(request);
  } catch (error) {
    const saved = await (await caches.open(CACHE)).match(request.url);
    if (saved) return saved;
    throw error;
  }
}

/** Audio: the saved copy if there is one (its path names the exact words, so it never goes stale). */
async function audio(request) {
  const saved = await (await caches.open(CACHE)).match(request.url, { ignoreSearch: true });
  if (!saved) return fetch(request);
  const range = request.headers.get("range");
  const match = range && /^bytes=(\d*)-(\d*)$/.exec(range);
  if (!match) return saved;
  const body = await saved.arrayBuffer();
  const size = body.byteLength;
  let start = match[1] ? Number(match[1]) : size - Number(match[2]);
  let end = match[1] && match[2] ? Number(match[2]) : size - 1;
  start = Math.max(0, start);
  end = Math.min(end, size - 1);
  if (start > end) return new Response(null, { status: 416, headers: { "content-range": `bytes */${size}` } });
  return new Response(body.slice(start, end + 1), {
    status: 206,
    headers: {
      "content-type": saved.headers.get("content-type") || "audio/mpeg",
      "content-range": `bytes ${start}-${end}/${size}`,
      "content-length": String(end - start + 1),
      "accept-ranges": "bytes",
    },
  });
}
