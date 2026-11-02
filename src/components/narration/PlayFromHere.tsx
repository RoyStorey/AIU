"use client";

import { useEffect, useRef, useState } from "react";
import { useNarration } from "@/components/narration/NarrationProvider";

type Spot = { id: string; top: number; left: number };

/**
 * On a narrated page, hovering over a passage (or tapping it, on a phone) offers
 * a small "Listen from here" button beside it.
 */
export function PlayFromHere() {
  const n = useNarration();
  const [spot, setSpot] = useState<Spot | null>(null);
  const hide = useRef<number | undefined>(undefined);
  const nRef = useRef(n);
  nRef.current = n;

  useEffect(() => {
    const blockOf = (t: EventTarget | null) => (t instanceof Element ? t.closest<HTMLElement>(".prose > [data-block]") : null);
    const show = (el: HTMLElement, linger: number) => {
      if (!nRef.current?.getHere() || el.tagName === "FIGURE" || !el.textContent?.trim()) return;
      const r = el.getBoundingClientRect();
      const roomy = r.left > 52;
      setSpot({
        id: el.dataset.block!,
        top: r.top + window.scrollY + (roomy ? 2 : -30),
        left: roomy ? r.left + window.scrollX - 44 : r.left + window.scrollX,
      });
      window.clearTimeout(hide.current);
      hide.current = window.setTimeout(() => setSpot(null), linger);
    };
    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const el = blockOf(e.target);
      if (el) show(el, 2500);
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t || t.closest("a, button, input, select, textarea, label, .np-from")) return;
      if (window.getSelection()?.toString()) return;
      const el = blockOf(t);
      if (el && window.matchMedia("(hover: none)").matches) show(el, 5000);
    };
    document.addEventListener("pointerover", onOver);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("click", onClick);
      window.clearTimeout(hide.current);
    };
  }, []);

  if (!spot || !n?.getHere()) return null;
  return (
    <button
      type="button"
      className="np-from"
      style={{ top: spot.top, left: spot.left }}
      onMouseEnter={() => window.clearTimeout(hide.current)}
      onMouseLeave={() => { hide.current = window.setTimeout(() => setSpot(null), 800); }}
      onClick={() => { const here = n.getHere(); if (here) n.start({ ...here, block: spot.id }); setSpot(null); }}
      aria-label="Listen from this passage"
      title="Listen from here"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
      <span>Listen from here</span>
    </button>
  );
}
