"use client";

import { useEffect, useState } from "react";
import { useNarration, type Manifest } from "@/components/narration/NarrationProvider";
import { store, stored } from "@/components/narration/device";

const CACHE = "cornerstone-narration-v1";
type Saved = { count: number; bytes: number; at: number; missing: number };
const savedKey = (course: string, lesson: number, voice: string) => `cornerstone-offline:${course}:${lesson}:${voice}`;

/** Registers the narration service worker, which plays saved lessons without a connection. */
export function useNarrationWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("/narration-sw.js").catch(() => {});
  }, []);
}

/** Saves every passage of the current lesson, in the current studio voice, for listening offline (on the Tube, on a plane). */
export function OfflineSave() {
  const n = useNarration()!;
  const m = n.state.manifest!;
  const voice = m.voice ?? "";
  const key = savedKey(m.course.id, m.lesson.number, voice);
  const [saved, setSaved] = useState<Saved | null>(null);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const supported = typeof window !== "undefined" && "caches" in window && "serviceWorker" in navigator;

  useEffect(() => { setSaved(stored<Saved>(key)); }, [key]);
  if (!supported || !voice) return null;

  const manifestUrl = (page: number) => `/api/narration/${m.course.id}/${m.lesson.number}/${page}?voice=${encodeURIComponent(voice)}`;

  const save = async () => {
    setError(null);
    try {
      await navigator.serviceWorker.ready;
      const cache = await caches.open(CACHE);
      const pages: Manifest[] = [];
      for (let p = 1; p <= m.lesson.pages; p++) {
        const res = await fetch(manifestUrl(p));
        if (!res.ok) throw new Error("A page of this lesson could not be loaded.");
        await cache.put(manifestUrl(p), res.clone());
        pages.push(await res.json());
      }
      const canRender = pages[0].studio.canRender;
      const blocks = pages.flatMap((pg) => pg.blocks).filter((b) => b.url && (b.ready || canRender));
      const missing = pages.flatMap((pg) => pg.blocks).length - blocks.length;
      let bytes = 0;
      setProgress({ done: 0, total: blocks.length });
      for (const [i, b] of blocks.entries()) {
        if (!(await cache.match(b.url!, { ignoreSearch: true }))) {
          const res = await fetch(b.url!);
          if (!res.ok) throw new Error("Some passages could not be recorded. Try again later.");
          bytes += Number(res.headers.get("content-length") ?? 0);
          await cache.put(b.url!, res);
        }
        setProgress({ done: i + 1, total: blocks.length });
      }
      const record = { count: blocks.length, bytes, at: Date.now(), missing };
      store(key, record);
      setSaved(record);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Saving failed.");
    } finally {
      setProgress(null);
    }
  };

  const remove = async () => {
    const cache = await caches.open(CACHE);
    for (let p = 1; p <= m.lesson.pages; p++) {
      const res = await cache.match(manifestUrl(p));
      if (res) {
        const pg = (await res.json()) as Manifest;
        for (const b of pg.blocks) if (b.url) await cache.delete(b.url, { ignoreSearch: true });
        await cache.delete(manifestUrl(p));
      }
    }
    store(key, null);
    setSaved(null);
  };

  return (
    <fieldset className="np-group">
      <legend>Offline</legend>
      {progress ? (
        <p className="np-note">Saving Lesson {m.lesson.number}… {progress.done} of {progress.total} passages{m.studio.canRender ? " (passages not yet recorded are recorded first, which takes a while)" : ""}.</p>
      ) : saved ? (
        <p className="np-note">
          Lesson {m.lesson.number} is saved on this device for listening without a connection{saved.missing ? ` (except ${saved.missing} passages not yet recorded)` : ""}.{" "}
          <button type="button" className="btn-link" onClick={remove}>Remove it</button>
        </p>
      ) : (
        <button type="button" className="np-chip" onClick={save}>Save Lesson {m.lesson.number} for listening offline</button>
      )}
      {error && <p className="np-note np-error">{error}</p>}
    </fieldset>
  );
}

