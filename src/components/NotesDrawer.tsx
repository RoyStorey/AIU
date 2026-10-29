"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { saveNote } from "@/app/actions";

const OPEN_KEY = "cornerstone-margin-open";
const draftKey = (course: string, lesson: number, page: number) => `cornerstone-draft:${course}/${lesson}/${page}`;
type Status = "idle" | "dirty" | "saving" | "saved" | "error";

/**
 * The student's margin: a notes panel that stays within reach while reading.
 * A quill tab sits at the screen's edge; the panel opens beside the text on
 * wide screens and as a sheet on phones, and saves as the student writes.
 */
export function NotesDrawer({ courseId, lessonIndex, pageIndex, pageTitle, body }: {
  courseId: string;
  lessonIndex: number;
  pageIndex: number;
  pageTitle: string;
  body: string;
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(body);
  const [status, setStatus] = useState<Status>(body ? "saved" : "idle");
  const [error, setError] = useState<string>();
  const saved = useRef(body);
  const latest = useRef(body);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const area = useRef<HTMLTextAreaElement>(null);
  const key = draftKey(courseId, lessonIndex, pageIndex);

  const flush = useCallback(async () => {
    clearTimeout(timer.current);
    const value = latest.current;
    if (value === saved.current) return;
    setStatus("saving");
    const form = new FormData();
    form.set("course", courseId);
    form.set("lesson", String(lessonIndex));
    form.set("page", String(pageIndex));
    form.set("body", value);
    try {
      const result = await saveNote(undefined, form);
      if (result?.error) { setStatus("error"); setError(result.error); return; }
      saved.current = value;
      try { if (localStorage.getItem(key) === value) localStorage.removeItem(key); } catch {}
      setError(undefined);
      setStatus(latest.current === value ? "saved" : "dirty");
    } catch {
      setStatus("error");
      setError("Could not save just now. Your words are still here; try again in a moment.");
    }
  }, [courseId, lessonIndex, pageIndex, key]);

  // Remember whether the margin was open, so it stays open from page to page,
  // and recover any words written just before the page was reloaded or closed.
  useEffect(() => {
    try {
      if (localStorage.getItem(OPEN_KEY) === "1") setOpen(true);
      const draft = localStorage.getItem(key);
      if (draft !== null && draft !== saved.current) {
        setText(draft);
        latest.current = draft;
        setStatus("dirty");
        timer.current = setTimeout(() => { void flush(); }, 300);
      } else if (draft !== null) localStorage.removeItem(key);
    } catch {}
  }, [key, flush]);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.dataset.margin = "open"; else delete root.dataset.margin;
    try { localStorage.setItem(OPEN_KEY, open ? "1" : "0"); } catch {}
    return () => { delete root.dataset.margin; };
  }, [open]);

  // Keyboard: "n" opens the margin (when not typing elsewhere); Escape closes it.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const typing = target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
      if (e.key === "Escape" && open) { setOpen(false); return; }
      if (!typing && !e.metaKey && !e.ctrlKey && !e.altKey && e.key.toLowerCase() === "n") {
        e.preventDefault();
        setOpen(true);
        requestAnimationFrame(() => area.current?.focus());
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Save anything pending when leaving the page.
  useEffect(() => {
    const leave = () => { void flush(); };
    window.addEventListener("pagehide", leave);
    return () => { window.removeEventListener("pagehide", leave); leave(); };
  }, [flush]);

  function onChange(value: string) {
    setText(value);
    latest.current = value;
    try { localStorage.setItem(key, value); } catch {}
    setStatus("dirty");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => { void flush(); }, 1200);
  }

  function toggle() {
    if (open) void flush();
    setOpen(!open);
    if (!open) requestAnimationFrame(() => area.current?.focus());
  }

  const label = { idle: "", dirty: "Writing…", saving: "Saving…", saved: "Saved", error: "Not saved" }[status];
  const hasNote = text.trim().length > 0;

  return (
    <>
      <button
        type="button"
        className={`margin-tab${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls="margin-panel"
        onClick={toggle}
        title={open ? "Close your notes (Esc)" : "Write in the margin (N)"}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 4c-6 0-11 4-13 11l-2 5" />
          <path d="M20 4c0 6-4 10-10 11" />
          <path d="M9 12l4-1" />
        </svg>
        <span className="margin-tab-label">{open ? "Close" : "Notes"}</span>
        {hasNote && !open && <span className="margin-tab-dot" aria-label="This page has a note" />}
      </button>

      <aside id="margin-panel" className={`margin-panel${open ? " is-open" : ""}`} aria-label="Your notes on this page" aria-hidden={!open}>
        <header className="margin-head">
          <div>
            <p className="eyebrow">In the margin</p>
            <h2 className="margin-title">{pageTitle}</h2>
          </div>
          <button type="button" className="margin-close" onClick={toggle} aria-label="Close notes">×</button>
        </header>
        <label htmlFor="margin-note" className="visually-hidden">Your notes on this page</label>
        <textarea
          id="margin-note"
          ref={area}
          value={text}
          tabIndex={open ? 0 : -1}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => { void flush(); }}
          placeholder="Lines worth keeping, questions, connections. Only you can see these."
        />
        <footer className="margin-foot">
          <span className={`margin-status${status === "error" ? " is-error" : ""}`} role="status">{error ?? label}</span>
          <Link href="/study/notes" tabIndex={open ? 0 : -1}>Commonplace book →</Link>
        </footer>
      </aside>
    </>
  );
}
