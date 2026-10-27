"use client";

import { useState } from "react";
import type { Resource } from "@/lib/schema";
import { amazonBookLink, bookshopLink, hashString, libraryLink, openLibraryCover } from "@/lib/links";
import { useStore } from "@/lib/store";

const KIND_ICON: Record<Resource["kind"], string> = {
  book: "📕",
  article: "📰",
  video: "📺",
  podcast: "🎙️",
  website: "🌐",
  museum: "🏛️",
  audio: "🎧",
  film: "🎬",
  course: "🎓",
  "primary-source": "📜",
};

const COVER_BG = ["bg-tomato", "bg-sky", "bg-grape", "bg-mint", "bg-bubblegum", "bg-sun"];

function BookCover({ r }: { r: Resource }) {
  const [failed, setFailed] = useState(!r.isbn);
  const bg = COVER_BG[hashString(r.title) % COVER_BG.length];
  return (
    <div className="relative h-36 w-24 shrink-0 -rotate-3 overflow-hidden rounded-r-lg rounded-l-sm border-[3px] border-ink shadow-pop-sm">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={openLibraryCover(r.isbn)} alt={`Cover of ${r.title}`} className="h-full w-full object-cover" onError={() => setFailed(true)} />
      ) : (
        <div className={`flex h-full w-full flex-col justify-between p-2 ${bg}`}>
          <div className="text-[11px] font-black leading-tight">{r.title}</div>
          <div className="font-mono text-[8px] uppercase">{r.creator}</div>
        </div>
      )}
      <div className="absolute inset-y-0 left-1.5 w-[3px] bg-ink/20" />
    </div>
  );
}

export function ResourceCard({ r, compact = false }: { r: Resource; compact?: boolean }) {
  const click = useStore((s) => s.clickLibrary);
  const ext = { target: "_blank", rel: "noreferrer", onClick: click } as const;

  if (r.kind === "book") {
    return (
      <div className="card flex gap-4 bg-card p-4">
        <BookCover r={r} />
        <div className="flex min-w-0 flex-col">
          <span className="sticker w-fit bg-tomato-soft">📕 Book{r.year && ` · ${r.year}`}</span>
          <div className="mt-2 text-lg font-black leading-tight">{r.title}</div>
          <div className="text-sm font-bold opacity-70">{r.creator}</div>
          {!compact && <p className="mt-1 font-serif text-sm leading-snug">{r.why}</p>}
          <div className="mt-auto flex flex-wrap gap-2 pt-3">
            <a {...ext} href={amazonBookLink(r.title, r.creator)} className="btn bg-sun px-3 py-1 text-sm">
              🛒 Amazon
            </a>
            <a {...ext} href={bookshopLink(r.title, r.creator)} className="btn bg-card px-3 py-1 text-sm">
              Bookshop
            </a>
            <a {...ext} href={libraryLink(r.title, r.creator)} className="btn bg-card px-3 py-1 text-sm">
              Borrow
            </a>
            {r.verified && r.href && !r.href.includes("amazon.") && (
              <a {...ext} href={r.href} className="btn bg-mint-soft px-3 py-1 text-sm">
                ✓ Source
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <a {...ext} href={r.href} className="card lift flex flex-col bg-card p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="sticker bg-sky-soft">
          {KIND_ICON[r.kind]} {r.kind.replace("-", " ")}
        </span>
        {r.verified ? (
          <span className="sticker bg-mint" title="This exact link appeared in live web research">
            ✓ verified
          </span>
        ) : (
          <span className="sticker bg-card" title="No exact link was confirmed, so this opens a search">
            🔎 search
          </span>
        )}
      </div>
      <div className="mt-3 text-lg font-black leading-tight">{r.title}</div>
      <div className="text-sm font-bold opacity-70">
        {r.creator}
        {r.year && ` · ${r.year}`}
      </div>
      {!compact && <p className="mt-1 font-serif text-sm leading-snug">{r.why}</p>}
    </a>
  );
}
