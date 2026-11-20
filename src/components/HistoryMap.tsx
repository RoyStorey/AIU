"use client";

import { useEffect, useRef, useState } from "react";
import { MAPS } from "@/content/maps";
import { emphasize } from "@/components/Figure";

/** Light or dark chrome for the map, read from the page's own paper colour (so every house theme works). */
function scheme(): "light" | "dark" {
  const paper = getComputedStyle(document.documentElement).getPropertyValue("--paper").trim();
  const m = paper.match(/^#([0-9a-f]{6})$/i);
  if (!m) return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.45 ? "dark" : "light";
}

/**
 * An interactive map in a lesson page: the map, a timeline the reader can drag, and a few
 * chapters to step through. Written in a page as `![Alt text](map:<id> "Caption.")`, or as
 * `map:<id>#4-7` to show only some chapters beside the section they illustrate.
 *
 * The map's code (map-widget) and its data are fetched only when the reader scrolls near it,
 * and everything is torn down when the page changes.
 */
export function HistoryMap({ id, alt, caption, chapters }: { id: string; alt: string; caption?: string; chapters?: [number, number] }) {
  const frame = useRef<HTMLDivElement>(null);
  const [first, last] = chapters ?? [];
  const [error, setError] = useState<string | null>(MAPS[id] ? null : `There is no map named “${id}”.`);

  useEffect(() => {
    const el = frame.current;
    const load = MAPS[id];
    if (!el || !load) return;
    let cancelled = false;
    let handle: { destroy(): void; setTheme(t: "light" | "dark"): void } | undefined;
    const follow = () => handle?.setTheme(scheme());
    const themeWatch = new MutationObserver(follow);
    const media = matchMedia("(prefers-color-scheme: dark)");

    const near = new IntersectionObserver(async (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      near.disconnect();
      try {
        const [{ mountMap }, spec] = await Promise.all([import("map-widget/embed"), load().then((m) => m.default)]);
        if (cancelled) return;
        handle = mountMap(el, spec, {
          theme: scheme(),
          label: alt,
          lazy: false,
          chapters: first !== undefined && last !== undefined ? [first, last] : undefined,
          onReady: (err) => err && !cancelled && setError("The map could not be shown."),
        });
        themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        media.addEventListener("change", follow);
      } catch (err) {
        console.error(err);
        if (!cancelled) setError("The map could not be loaded.");
      }
    }, { rootMargin: "600px 0px" });
    near.observe(el);

    return () => {
      cancelled = true;
      near.disconnect();
      themeWatch.disconnect();
      media.removeEventListener("change", follow);
      handle?.destroy();
    };
  }, [id, alt, first, last]);

  return (
    <figure className="lesson-map">
      {/* the map mounts into this element; React leaves its contents alone */}
      <div ref={frame} className="lesson-map-frame" aria-label={alt} data-map={id} />
      {error && <p className="lesson-map-error">{error}</p>}
      {caption && <figcaption>{emphasize(caption)}</figcaption>}
    </figure>
  );
}
