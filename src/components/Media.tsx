"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Media } from "@/lib/schema";
import { isDirectAudio, youtubeId, youtubeSearchLink } from "@/lib/links";
import { play } from "@/lib/sound";

/* ------------------------------------------------------- Wikimedia Commons */

type CommonsFile = { title: string; thumb: string; full: string; page: string; mime: string; artist: string; license: string };

const commonsCache = new Map<string, Promise<CommonsFile[]>>();

const stripHtml = (s = "") => s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

function searchCommons(query: string, kind: "image" | "audio"): Promise<CommonsFile[]> {
  const key = `${kind}:${query}`;
  if (!commonsCache.has(key)) {
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",
      generator: "search",
      gsrnamespace: "6",
      gsrlimit: "8",
      gsrsearch: `${kind === "image" ? "filetype:bitmap" : "filetype:audio"} ${query}`,
      prop: "imageinfo",
      iiprop: "url|extmetadata|mime",
      iiurlwidth: "1000",
    });
    commonsCache.set(
      key,
      fetch(`https://commons.wikimedia.org/w/api.php?${params}`)
        .then((r) => r.json())
        .then((d) => {
          const pages = Object.values((d?.query?.pages ?? {}) as Record<string, any>); // eslint-disable-line @typescript-eslint/no-explicit-any
          return pages
            .sort((x, y) => x.index - y.index)
            .map((p) => {
              const ii = p.imageinfo?.[0] ?? {};
              const meta = ii.extmetadata ?? {};
              return {
                title: String(p.title).replace(/^File:/, "").replace(/\.[a-z0-9]+$/i, ""),
                thumb: ii.thumburl ?? ii.url,
                full: ii.url,
                page: ii.descriptionurl,
                mime: ii.mime ?? "",
                artist: stripHtml(meta.Artist?.value).slice(0, 80),
                license: stripHtml(meta.LicenseShortName?.value),
              } satisfies CommonsFile;
            })
            .filter((f) => f.full);
        })
        .catch(() => []),
    );
  }
  return commonsCache.get(key)!;
}

function useCommons(query: string, kind: "image" | "audio", enabled = true) {
  const [files, setFiles] = useState<CommonsFile[] | null>(null);
  useEffect(() => {
    if (!enabled || !query) return;
    let live = true;
    searchCommons(query, kind).then((f) => live && setFiles(f));
    return () => {
      live = false;
    };
  }, [query, kind, enabled]);
  return files;
}

const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export function ImageMedia({ media, index = 0 }: { media: Media; index?: number }) {
  const files = useCommons(media.query, "image");
  const [open, setOpen] = useState(false);
  const [pick, setPick] = useState(0);
  const file = files?.[pick];

  if (files && !files.length) return <SearchCard media={media} label="Image search" icon="🖼️" />;

  return (
    <figure className={`card overflow-hidden bg-card p-3 transition-transform hover:rotate-0 ${TILTS[index % 4]}`}>
      <button
        className="block aspect-[4/3] w-full overflow-hidden rounded-lg border-2 border-ink bg-sun-soft"
        onClick={() => file && setOpen(true)}
        aria-label={`Enlarge: ${media.title}`}
      >
        {file ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={file.thumb} alt={media.title} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="grid h-full w-full animate-pulse place-items-center text-4xl">🖼️</div>
        )}
      </button>
      <figcaption className="mt-3 px-1">
        <div className="font-black leading-tight">{media.title}</div>
        <div className="mt-1 font-serif text-sm leading-snug opacity-80">{media.caption}</div>
        {file && (
          <div className="mt-2 flex items-center justify-between gap-2 font-mono text-[10px] uppercase opacity-60">
            <a href={file.page} target="_blank" rel="noreferrer" className="truncate underline">
              {file.artist || "Wikimedia Commons"} {file.license && `· ${file.license}`}
            </a>
            {files && files.length > 1 && (
              <button
                className="shrink-0 rounded border border-ink px-1.5 py-0.5 font-bold opacity-100 hover:bg-sun"
                onClick={() => {
                  setPick((p) => (p + 1) % files.length);
                  play("flip");
                }}
              >
                another ↻
              </button>
            )}
          </div>
        )}
      </figcaption>
      <AnimatePresence>
        {open && file && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.figure initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="max-h-full max-w-5xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={file.thumb} alt={media.title} className="max-h-[80vh] rounded-xl border-[3px] border-ink" />
              <figcaption className="mt-3 text-center font-bold text-paper">
                {file.title} ·{" "}
                <a href={file.page} target="_blank" rel="noreferrer" className="underline" onClick={(e) => e.stopPropagation()}>
                  source
                </a>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </figure>
  );
}

/* ------------------------------------------------------------------ audio */

export function AudioMedia({ media }: { media: Media }) {
  const direct = media.verified && isDirectAudio(media.url) ? media.url : "";
  const files = useCommons(media.query, "audio", !direct);
  const file = files?.find((f) => f.mime.startsWith("audio/") || f.mime === "application/ogg") ?? files?.[0];
  const src = direct || file?.full;

  if (media.verified && !direct) return <LinkCard media={media} icon="🎧" label="Listen" />;
  if (files && !files.length && !direct) return <SearchCard media={media} label="Listen" icon="🎧" />;

  return (
    <div className="card -rotate-1 bg-grape-soft p-4">
      <div className="flex items-center gap-3">
        <div className="grid h-14 w-14 shrink-0 animate-spin-slow place-items-center rounded-full border-[3px] border-ink bg-ink text-2xl">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-sun text-[10px]">♪</span>
        </div>
        <div className="min-w-0">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest">Listen</div>
          <div className="font-black leading-tight">{media.title}</div>
          <div className="font-serif text-sm opacity-80">{media.caption}</div>
        </div>
      </div>
      {src ? (
        <>
          <audio controls preload="none" src={src} className="mt-3 w-full" />
          {file && !direct && (
            <a href={file.page} target="_blank" rel="noreferrer" className="mt-1 block truncate font-mono text-[10px] uppercase underline opacity-60">
              {file.title} · Wikimedia Commons
            </a>
          )}
        </>
      ) : (
        <div className="mt-3 h-10 animate-pulse rounded-full bg-card" />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ video */

export function VideoMedia({ media }: { media: Media }) {
  const id = media.verified ? youtubeId(media.url) : null;
  const [playing, setPlaying] = useState(false);
  if (!id) {
    return media.verified ? (
      <LinkCard media={media} icon="📺" label="Watch" />
    ) : (
      <SearchCard media={media} label="Watch on YouTube" icon="📺" />
    );
  }
  return (
    <div className="card rotate-1 overflow-hidden bg-ink p-2 sm:col-span-2">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={media.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className="group h-full w-full" onClick={() => setPlaying(true)} aria-label={`Play ${media.title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" className="h-full w-full object-cover opacity-90" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-20 w-20 place-items-center rounded-full border-[3px] border-ink bg-tomato text-3xl text-white shadow-pop transition-transform group-hover:scale-110">
                ▶
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="px-2 py-2 text-paper">
        <div className="font-black">{media.title}</div>
        <div className="font-serif text-sm opacity-80">{media.caption}</div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- wikipedia */

type WikiSummary = { title: string; extract: string; thumbnail?: { source: string }; content_urls?: { desktop: { page: string } } };

export function WikiMedia({ media }: { media: Media }) {
  const [data, setData] = useState<WikiSummary | null | "missing">(null);
  useEffect(() => {
    let live = true;
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(media.query.replace(/ /g, "_"))}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => live && setData(d?.extract ? d : "missing"))
      .catch(() => live && setData("missing"));
    return () => {
      live = false;
    };
  }, [media.query]);

  if (data === "missing") return <SearchCard media={media} label="Look it up" icon="📖" />;
  return (
    <a
      href={data?.content_urls?.desktop.page ?? "#"}
      target="_blank"
      rel="noreferrer"
      className="card lift block bg-sky-soft p-4"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="sticker bg-card">📖 Wikipedia</span>
        <span className="font-mono text-xs">↗</span>
      </div>
      {data ? (
        <div className="flex gap-3">
          {data.thumbnail && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.thumbnail.source} alt="" className="h-20 w-20 shrink-0 rounded-lg border-2 border-ink object-cover" />
          )}
          <div>
            <div className="font-black leading-tight">{data.title}</div>
            <p className="mt-1 line-clamp-4 font-serif text-sm leading-snug">{data.extract}</p>
          </div>
        </div>
      ) : (
        <div className="h-20 animate-pulse rounded-lg bg-card" />
      )}
    </a>
  );
}

/* --------------------------------------------------------------- fallbacks */

function LinkCard({ media, icon, label }: { media: Media; icon: string; label: string }) {
  return (
    <a href={media.url} target="_blank" rel="noreferrer" className="card lift block bg-mint-soft p-4">
      <div className="flex items-center justify-between">
        <span className="sticker bg-card">
          {icon} {label}
        </span>
        <span className="sticker bg-mint">✓ verified</span>
      </div>
      <div className="mt-3 font-black leading-tight">{media.title}</div>
      <div className="font-serif text-sm opacity-80">{media.caption}</div>
    </a>
  );
}

function SearchCard({ media, icon, label }: { media: Media; icon: string; label: string }) {
  const href =
    media.kind === "video"
      ? youtubeSearchLink(media.query || media.title)
      : media.kind === "wiki"
        ? `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(media.query)}`
        : `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(media.query)}`;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="card lift block bg-card p-4">
      <span className="sticker bg-sun-soft">
        {icon} {label}
      </span>
      <div className="mt-3 font-black leading-tight">{media.title}</div>
      <div className="font-serif text-sm opacity-80">{media.caption}</div>
      <div className="mt-2 font-mono text-[10px] uppercase opacity-60">🔎 opens a search for “{media.query || media.title}”</div>
    </a>
  );
}

export function MediaItem({ media, index }: { media: Media; index: number }) {
  switch (media.kind) {
    case "image":
      return <ImageMedia media={media} index={index} />;
    case "audio":
      return <AudioMedia media={media} />;
    case "video":
      return <VideoMedia media={media} />;
    case "wiki":
      return <WikiMedia media={media} />;
  }
}

export function MediaGallery({ media }: { media: Media[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {media.map((m, i) => (
        <MediaItem key={`${m.kind}-${m.query}-${i}`} media={m} index={i} />
      ))}
    </div>
  );
}
