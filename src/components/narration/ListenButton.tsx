"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/narration/NarrationProvider";
import { resumeKey, stored, type ResumePoint } from "@/components/narration/device";

/**
 * "Listen" on a narrated lesson page or overview. On a page, it reads from the
 * top of that page; on the overview, from where the student left off, or from
 * the beginning. It also tells the player which page is open, for "Listen from here".
 */
export function ListenButton({ courseId, lesson, page, minutes }: { courseId: string; lesson: number; page?: number; minutes?: number }) {
  const n = useNarration();
  const [resume, setResume] = useState<ResumePoint | null>(null);

  useEffect(() => {
    if (!n) return;
    if (page) n.setHere({ courseId, lesson, page });
    setResume(stored<ResumePoint>(resumeKey(courseId, lesson)));
    return () => n.setHere(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, lesson, page]);

  if (!n) return null;
  const m = n.state.manifest;
  const thisPage = m && m.course.id === courseId && m.lesson.number === lesson && (!page || m.page.number === page);
  const resumeHere = resume && (!page || resume.page === page) && !(resume.page === 1 && resume.block === "title" && !resume.offset);

  if (thisPage && m) {
    return (
      <div className="listen-row">
        <button type="button" className="listen-btn" onClick={n.toggle} aria-label={n.state.playing ? "Pause the narration" : "Play the narration"}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            {n.state.playing
              ? <><rect x="6.5" y="5" width="4" height="14" rx="1" fill="currentColor" /><rect x="13.5" y="5" width="4" height="14" rx="1" fill="currentColor" /></>
              : <path d="M8 5.5v13l11-6.5z" fill="currentColor" />}
          </svg>
          {n.state.playing ? "Pause" : "Resume"}
        </button>
        <span className="listen-hint">Now playing{page ? "" : `: ${m.page.title}`}</span>
      </div>
    );
  }

  const go = (fromResume: boolean) => {
    if (fromResume && resume) n.start({ courseId, lesson, page: resume.page, block: resume.block, offset: resume.offset });
    else n.start({ courseId, lesson, page: page ?? 1 });
  };

  return (
    <div className="listen-row">
      <button type="button" className="listen-btn" onClick={() => go(Boolean(resumeHere))}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M4 13v-1a8 8 0 0 1 16 0v1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="3" y="13" width="4.5" height="7" rx="1.5" fill="currentColor" /><rect x="16.5" y="13" width="4.5" height="7" rx="1.5" fill="currentColor" />
        </svg>
        {resumeHere ? (page ? "Resume listening" : `Resume listening: ${resume!.title}`) : page ? "Listen to this page" : "Listen to this lesson"}
      </button>
      {resumeHere && (
        <button type="button" className="btn-link listen-restart" onClick={() => go(false)}>
          {page ? "from the top" : "from the beginning"}
        </button>
      )}
      {!resumeHere && minutes ? <span className="listen-hint">about {minutes} min · keeps going page to page</span> : null}
    </div>
  );
}
