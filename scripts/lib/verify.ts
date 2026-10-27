import type { Resource } from "../../src/lib/content/schema";

/**
 * Checks recommended resources against public catalogs so the site never
 * presents an invented book or link:
 *
 * - books are looked up in Open Library by title and author; matches gain an
 *   ISBN (for direct store and library links and a cover), non-matches are dropped
 * - video links are checked with YouTube's oEmbed endpoint; a bad link is
 *   removed and the resource falls back to a YouTube search link
 * - documentaries must have a Wikipedia article with a matching title
 * - website links must load
 *
 * If the network is unavailable the resources are kept, unverified, and the
 * caller is told so it can retry later with `npm run resources:verify`.
 */

export type VerifyReport = { kept: number; verified: number; dropped: string[]; offline: boolean };

const UA = "AIU-curriculum-bot/1.0 (resource verification)";

async function getJson(url: string): Promise<unknown | null> {
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" }, signal: AbortSignal.timeout(15000) });
  if (res.status === 404 || res.status === 400 || res.status === 401) return null;
  if (!res.ok) throw new Error(`HTTP ${res.status} from ${new URL(url).host}`);
  return res.json();
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\b(the|a|an)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const titleMatches = (a: string, b: string) => {
  const [x, y] = [norm(a), norm(b)];
  return x === y || x.startsWith(y) || y.startsWith(x);
};

const surname = (name: string) => norm(name.split(/,|&| and /)[0]).split(" ").at(-1) ?? "";

type OLDoc = { title: string; author_name?: string[]; isbn?: string[]; first_publish_year?: number };

async function verifyBook(r: Resource): Promise<Resource | null> {
  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(r.title)}&author=${encodeURIComponent(r.creator)}&limit=10&fields=title,author_name,isbn,first_publish_year`;
  const data = (await getJson(url)) as { docs?: OLDoc[] } | null;
  const last = surname(r.creator);
  const match = data?.docs?.find(
    (d) => titleMatches(d.title, r.title) && (d.author_name ?? []).some((a) => norm(a).includes(last)),
  );
  if (!match) return null;
  const isbn = match.isbn?.find((i) => i.length === 13 && i.startsWith("978")) ?? match.isbn?.find((i) => i.length === 10) ?? null;
  return { ...r, isbn: r.isbn ?? isbn, year: r.year ?? match.first_publish_year ?? null, verified: true };
}

async function verifyYouTube(r: Resource): Promise<Resource> {
  if (!r.url) return r;
  const data = await getJson(`https://www.youtube.com/oembed?url=${encodeURIComponent(r.url)}&format=json`);
  // An unknown video id falls back to a search link rather than a dead link.
  return data ? { ...r, verified: true } : { ...r, url: null, verified: false };
}

async function verifyDocumentary(r: Resource): Promise<Resource | null> {
  const data = (await getJson(
    `https://en.wikipedia.org/w/api.php?action=opensearch&limit=5&format=json&search=${encodeURIComponent(r.title)}`,
  )) as [string, string[]] | null;
  const hit = data?.[1]?.some((t) => titleMatches(t.replace(/\s*\([^)]*\)\s*$/, ""), r.title));
  return hit ? { ...r, verified: true } : null;
}

async function verifyWebsite(r: Resource): Promise<Resource | null> {
  if (!r.url) return null;
  const res = await fetch(r.url, { headers: { "User-Agent": UA }, redirect: "follow", signal: AbortSignal.timeout(15000) });
  return res.ok ? { ...r, verified: true } : null;
}

async function verifyOne(r: Resource): Promise<Resource | null> {
  switch (r.kind) {
    case "book":
      return verifyBook(r);
    case "video":
    case "lecture":
      return r.url && /youtube\.com|youtu\.be/.test(r.url) ? verifyYouTube(r) : r;
    case "documentary":
      return verifyDocumentary(r);
    case "website":
      return verifyWebsite(r);
    default:
      return r;
  }
}

export async function verifyResources(resources: Resource[], opts: { recheck?: boolean } = {}) {
  const report: VerifyReport = { kept: 0, verified: 0, dropped: [], offline: false };
  const out: Resource[] = [];
  for (const r of resources) {
    if (r.verified && !opts.recheck) {
      out.push(r);
      continue;
    }
    try {
      const checked = await verifyOne(r);
      if (checked) out.push(checked);
      else report.dropped.push(`${r.kind}: ${r.title} (${r.creator})`);
    } catch {
      // Network trouble is not evidence the resource is fake; keep it and flag it.
      report.offline = true;
      out.push(r);
    }
  }
  report.kept = out.length;
  report.verified = out.filter((r) => r.verified).length;
  return { resources: out, report };
}
