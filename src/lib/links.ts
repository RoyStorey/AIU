/* Link helpers shared by the server (verification) and client (shop/library links). */

export function uid(prefix = ""): string {
  return prefix + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
}

export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Canonical form used to compare a generated URL against URLs seen in search results. */
export function canonicalUrl(raw: string): string | null {
  try {
    const u = new URL(raw.trim());
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    const host = u.hostname.toLowerCase().replace(/^(www\.|m\.)/, "");
    const yt = youtubeId(raw);
    if (yt) return `youtube:${yt}`;
    const path = decodeURIComponent(u.pathname).replace(/\/+$/, "").toLowerCase();
    return host + path;
  } catch {
    return null;
  }
}

export function youtubeId(raw: string): string | null {
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^(www\.|m\.)/, "");
    if (host === "youtu.be") return u.pathname.slice(1) || null;
    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      if (u.pathname === "/watch") return u.searchParams.get("v");
      const m = u.pathname.match(/^\/(embed|shorts|live)\/([\w-]{6,})/);
      if (m) return m[2];
    }
  } catch {
    /* not a URL */
  }
  return null;
}

export const isDirectAudio = (url: string) => /\.(mp3|ogg|oga|wav|m4a|flac|opus)(\?|$)/i.test(url);

const q = (s: string) => encodeURIComponent(s.trim().replace(/\s+/g, " "));

export const amazonBookLink = (title: string, author: string) =>
  `https://www.amazon.com/s?k=${q(`${title} ${author}`)}&i=stripbooks`;

export const bookshopLink = (title: string, author: string) =>
  `https://bookshop.org/search?keywords=${q(`${title} ${author}`)}`;

export const libraryLink = (title: string, author: string) =>
  `https://www.worldcat.org/search?q=${q(`${title} ${author}`)}`;

export const openLibraryCover = (isbn: string) =>
  `https://covers.openlibrary.org/b/isbn/${isbn.replace(/[^0-9X]/gi, "")}-M.jpg?default=false`;

export const youtubeSearchLink = (terms: string) => `https://www.youtube.com/results?search_query=${q(terms)}`;

export const webSearchLink = (terms: string) => `https://duckduckgo.com/?q=${q(terms)}`;
