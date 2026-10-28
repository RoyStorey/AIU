import "server-only";
import { db } from "@/lib/db";
import type { Resource } from "@/lib/schema";

/**
 * Finding copies of books. Every book Cornerstone names should come with a way
 * to obtain it. Books are looked up in Open Library's catalogue in the
 * background, one at a time, and the result is kept: a record (with whether the
 * book can be read or borrowed free), or a note that no copy could be found and
 * the student will need to find one elsewhere. Until a book has been looked up,
 * students are given searches of libraries and booksellers.
 */

export type BookRef = { title: string; author?: string };

export type Access = "public" | "borrowable" | "printdisabled" | "no_ebook";

export type BookSource =
  | { status: "found"; key: string; title: string; year?: number; isbn?: string; access: Access }
  | { status: "not_found" }
  | { status: "pending" };

/** Removes editorial roles and subtitles so a catalogue search finds the work. */
export function cleanRef(ref: BookRef): { title: string; author: string } {
  const title = ref.title.replace(/\s*[:(].*$/, "").replace(/[“”"]/g, "").trim();
  const author = (ref.author ?? "")
    .split(/;| and |&/)[0]
    .replace(/\b(trans|tr|ed|eds|gen\. ed|comp)\.?(\s|,|$)/gi, " ")
    .replace(/,.*$/, "")
    .replace(/\s+/g, " ")
    .trim();
  return { title, author };
}

export function bookKey(ref: BookRef): string {
  const { title, author } = cleanRef(ref);
  const norm = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
  return `${norm(title)}|${norm(author)}`;
}

/** Whether a resource is a book that needs a way to obtain it: a book, or an edition with no link of its own. */
export function needsSource(resource: Resource): boolean {
  return resource.kind === "book" || (resource.kind === "edition" && !resource.url);
}

/** A core text written as "Title — Author" (or "Title — trans. Translator"). */
export function parseText(text: string): BookRef {
  const [title, author] = text.split(" — ");
  return { title: title.trim(), author: author?.trim() };
}

type Row = { key: string; status: string; data: string | null; checked_at: string };

/** Looks up the stored source of each book, and queues the ones not yet checked. */
export function sourcesFor(refs: BookRef[]): Map<string, BookSource> {
  const result = new Map<string, BookSource>();
  if (refs.length === 0) return result;
  const get = db.prepare("SELECT key, status, data, checked_at FROM book_sources WHERE key = ?");
  for (const ref of refs) {
    const key = bookKey(ref);
    if (result.has(key)) continue;
    const row = get.get(key) as Row | undefined;
    if (row?.status === "found" && row.data) result.set(key, { status: "found", ...JSON.parse(row.data) });
    else if (row?.status === "not_found") result.set(key, { status: "not_found" });
    else {
      result.set(key, { status: "pending" });
      const stale = !row || Date.now() - Date.parse(row.checked_at.replace(" ", "T") + "Z") > 86_400_000;
      if (stale) enqueue(key, ref);
    }
  }
  return result;
}

// ——— The lookup queue ———

const lookupEnabled = () => process.env.AIU_BOOK_LOOKUP !== "off";
/** The catalogue searched; a different server can stand in for Open Library in testing. */
const CATALOGUE = process.env.AIU_OPEN_LIBRARY_URL ?? "https://openlibrary.org";

const globalQueue = globalThis as unknown as { aiuBookQueue?: { pending: Map<string, BookRef>; running: boolean } };
const queue = (globalQueue.aiuBookQueue ??= { pending: new Map(), running: false });

function enqueue(key: string, ref: BookRef) {
  if (!lookupEnabled() || queue.pending.has(key)) return;
  queue.pending.set(key, ref);
  if (!queue.running) void drain();
}

async function drain() {
  queue.running = true;
  try {
    while (queue.pending.size > 0) {
      const [key, ref] = queue.pending.entries().next().value as [string, BookRef];
      queue.pending.delete(key);
      await lookUp(key, ref);
      await new Promise((r) => setTimeout(r, 1200)); // a polite pace for a free public service
    }
  } finally {
    queue.running = false;
  }
}

type SearchDoc = { key: string; title: string; first_publish_year?: number; isbn?: string[]; ebook_access?: Access };

async function lookUp(key: string, ref: BookRef) {
  const { title, author } = cleanRef(ref);
  const store = (status: string, data: object | null) =>
    db.prepare(`
      INSERT INTO book_sources (key, title, author, status, data) VALUES (?, ?, ?, ?, ?)
      ON CONFLICT (key) DO UPDATE SET status = excluded.status, data = excluded.data, checked_at = datetime('now')
    `).run(key, title, author, status, data ? JSON.stringify(data) : null);

  try {
    const params = new URLSearchParams({ title, limit: "5", fields: "key,title,first_publish_year,isbn,ebook_access" });
    if (author) params.set("author", author);
    const response = await fetch(`${CATALOGUE}/search.json?${params}`, {
      headers: { "User-Agent": "Cornerstone academy (book lookup)" },
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) throw new Error(`Open Library answered ${response.status}`);
    const { docs = [] } = (await response.json()) as { docs?: SearchDoc[] };
    const doc = docs[0];
    if (!doc) {
      store("not_found", null);
      return;
    }
    // Prefer an edition that can be read or borrowed free.
    const best = docs.find((d) => d.ebook_access === "public") ?? docs.find((d) => d.ebook_access === "borrowable") ?? doc;
    const isbn = best.isbn?.find((i) => i.length === 13) ?? best.isbn?.[0];
    store("found", {
      key: best.key,
      title: best.title,
      year: best.first_publish_year,
      isbn,
      access: best.ebook_access ?? "no_ebook",
    });
  } catch (error) {
    console.error(`Book lookup failed for “${title}”:`, error instanceof Error ? error.message : error);
    store("error", null);
  }
}

// ——— Links ———

export type Link = { label: string; url: string };

const q = encodeURIComponent;

export function searchLinks(ref: BookRef): Link[] {
  const { title, author } = cleanRef(ref);
  const query = [title, author].filter(Boolean).join(" ");
  return [
    { label: "Libraries (WorldCat)", url: `https://search.worldcat.org/search?q=${q(query)}` },
    { label: "Open Library", url: `https://openlibrary.org/search?${new URLSearchParams(author ? { title, author } : { title })}` },
    { label: "New (Bookshop.org)", url: `https://bookshop.org/search?keywords=${q(query)}` },
    { label: "Secondhand (AbeBooks)", url: `https://www.abebooks.com/servlet/SearchResults?${new URLSearchParams({ tn: title, an: author })}` },
  ];
}

const ACCESS_LABEL: Record<Access, string> = {
  public: "Read free at Open Library",
  borrowable: "Borrow free from Open Library",
  printdisabled: "Open Library (print-disabled access)",
  no_ebook: "Catalogue record at Open Library",
};

export function foundLinks(ref: BookRef, source: Extract<BookSource, { status: "found" }>): Link[] {
  const { title, author } = cleanRef(ref);
  const query = [title, author].filter(Boolean).join(" ");
  return [
    { label: ACCESS_LABEL[source.access], url: `https://openlibrary.org${source.key}` },
    { label: "Find in a library (WorldCat)", url: `https://search.worldcat.org/search?q=${q(source.isbn ? `bn:${source.isbn}` : query)}` },
    { label: "Buy new (Bookshop.org)", url: `https://bookshop.org/search?keywords=${q(source.isbn ?? query)}` },
    { label: "Buy secondhand (AbeBooks)", url: `https://www.abebooks.com/servlet/SearchResults?${new URLSearchParams(source.isbn ? { isbn: source.isbn } : { tn: title, an: author })}` },
  ];
}

/** For each resource, the source of the book if it needs one, or null. */
export function resourceSources(resources: Resource[]): (BookSource | null)[] {
  const refs = resources.filter(needsSource).map((r) => ({ title: r.title, author: r.author }));
  const sources = sourcesFor(refs);
  return resources.map((r) => (needsSource(r) ? sources.get(bookKey(r)) ?? { status: "pending" } : null));
}
