"use client";

import { useState } from "react";

/** The Wikimedia Commons description page for a Special:FilePath image URL, if it is one. */
export function sourcePage(src: string): string | undefined {
  const m = src.match(/^https:\/\/commons\.wikimedia\.org\/wiki\/Special:FilePath\/([^?#]+)/);
  return m ? `https://commons.wikimedia.org/wiki/File:${m[1]}` : undefined;
}

/** Captions may set titles in *italics*; render just that much Markdown. */
function emphasize(text: string) {
  return text.split(/(\*[^*]+\*)/).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") && part.length > 2 ? <em key={i}>{part.slice(1, -1)}</em> : part);
}

/** Commons serves resized copies on request; ask for one suited to the reading column. */
function sized(src: string, width: number) {
  if (!sourcePage(src)) return src;
  const base = src.replace(/[?#].*$/, "");
  return `${base}?width=${width}`;
}

/**
 * A lesson illustration: the image, its caption and credit, and a link to its
 * source page. If the image cannot be fetched, the figure quietly steps aside.
 */
export function Figure({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  const source = sourcePage(src);
  return (
    <figure className="lesson-figure">
      <a href={source ?? src} target="_blank" rel="noopener noreferrer" className="lesson-figure-frame" aria-label={`${alt} (opens the source page)`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- remote archival scans, sized by the host */}
        <img
          src={sized(src, 1000)}
          srcSet={source ? `${sized(src, 640)} 640w, ${sized(src, 1000)} 1000w, ${sized(src, 1600)} 1600w` : undefined}
          sizes="(max-width: 44rem) 100vw, 40rem"
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      </a>
      {(caption || source) && (
        <figcaption>
          {caption && emphasize(caption)}
          {source && <> <a href={source} target="_blank" rel="noopener noreferrer" className="lesson-figure-source">Source</a></>}
        </figcaption>
      )}
    </figure>
  );
}
