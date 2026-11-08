"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The lesson's contents, readings, and recordings, kept out of the way of the
 * lecture: a quiet button opens them in a panel from the left. Escape, the
 * scrim, or choosing a page closes it.
 */
export function LessonDrawer({ title, label, count = 0, children }: { title: string; label: string; count?: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = button.current;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    panel.current?.querySelector<HTMLElement>("button, a")?.focus();
    const was = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = was;
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button type="button" ref={button} className="lesson-contents-btn" onClick={() => setOpen(true)}
        aria-expanded={open} aria-controls="lesson-drawer">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        {label}
        {count > 0 && <span className="lesson-contents-count" title={`${count} readings and recordings`}>{count}</span>}
      </button>
      {open && <div className="lesson-drawer-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
      <div id="lesson-drawer" ref={panel} className={open ? "lesson-drawer is-open" : "lesson-drawer"}
        role="dialog" aria-modal="true" aria-label={`${title}: contents and readings`} hidden={!open}
        onClick={(e) => { if ((e.target as HTMLElement).closest("a[href^='/']")) setOpen(false); }}>
        <div className="lesson-drawer-head">
          <p className="lesson-drawer-title">{title}</p>
          <button type="button" className="lesson-drawer-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
        </div>
        {children}
      </div>
    </>
  );
}
