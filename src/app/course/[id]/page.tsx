"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";
import { useProgress, useStore } from "@/lib/store";
import { BANNER } from "@/lib/ui";
import { Hydrating, NotFound } from "@/components/Empty";
import { Guide } from "@/components/Guide";
import { ResourceCard } from "@/components/ResourceCard";

const NODE_BG = ["bg-sun", "bg-sky", "bg-bubblegum", "bg-mint", "bg-grape", "bg-tomato"];

function Ring({ pct }: { pct: number }) {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90">
      <circle cx="60" cy="60" r="50" fill="#fffaf0" stroke="#16130f" strokeWidth="6" />
      <motion.circle
        cx="60"
        cy="60"
        r="44"
        fill="none"
        stroke="#2ed59a"
        strokeWidth="14"
        strokeLinecap="round"
        initial={{ strokeDasharray: "0 276" }}
        animate={{ strokeDasharray: `${pct * 276} 276` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <text x="60" y="68" textAnchor="middle" className="font-mono text-2xl font-black" transform="rotate(90 60 60)" fill="#16130f">
        {Math.round(pct * 100)}%
      </text>
    </svg>
  );
}

export default function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const hydrated = useStore((s) => s.hydrated);
  const course = useStore((s) => s.courses[id]);
  const progress = useProgress(id);
  if (!hydrated) return <Hydrating />;
  if (!course) return <NotFound what="course" />;

  const done = new Set(progress.lessonsDone);
  const nextIndex = course.lessons.findIndex((l) => !done.has(l.id));
  const pct = done.size / course.lessons.length;
  const verified = [...course.library, ...course.lessons.flatMap((l) => l.resources)].filter((r) => r.verified).length;

  return (
    <div className="pt-8">
      <Link href={`/topic/${course.topicId}`} className="font-mono text-sm font-bold underline">
        ← all courses in this subject
      </Link>

      {/* banner */}
      <header className={`card relative mt-5 overflow-hidden p-6 sm:p-10 ${BANNER[course.color]}`}>
        <div className="pointer-events-none absolute -right-6 -top-10 select-none text-[11rem] leading-none opacity-20">{course.emoji}</div>
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2">
              <span className="sticker bg-card text-ink">{course.lessons.length} lessons</span>
              {verified > 0 && <span className="sticker bg-mint text-ink">✓ {verified} verified sources</span>}
              {progress.completedAt && <span className="sticker rotate-3 bg-sun text-ink">🎓 graduated</span>}
            </div>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-tight sm:text-6xl">
              {course.emoji} {course.title}
            </h1>
            <p className="mt-3 font-serif text-xl italic">{course.tagline}</p>
          </div>
          <Ring pct={pct} />
        </div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
        <div>
          <Guide name={course.guideName}>{course.guideIntro}</Guide>
          <div className="prose-aiu mt-8 [&>:first-child::first-letter]:text-inherit">
            <ReactMarkdown>{course.overview}</ReactMarkdown>
          </div>

          {/* lesson path */}
          <h2 className="mt-12 text-3xl font-black">The path</h2>
          <ol className="relative mt-6 space-y-6">
            <div className="absolute bottom-6 left-[27px] top-6 w-0 border-l-[4px] border-dashed border-ink" />
            {course.lessons.map((l, i) => {
              const isDone = done.has(l.id);
              const isNext = i === nextIndex;
              return (
                <motion.li
                  key={l.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="relative flex gap-5"
                >
                  <div
                    className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-[3px] border-ink text-xl font-black shadow-pop-sm ${
                      isDone ? "bg-mint" : isNext ? NODE_BG[i % NODE_BG.length] : "bg-card"
                    } ${isNext ? "animate-bounce" : ""}`}
                  >
                    {isDone ? "✓" : i + 1}
                  </div>
                  <Link
                    href={`/course/${course.id}/lesson/${i + 1}`}
                    className={`card lift block flex-1 p-5 ${isNext ? "bg-sun-soft" : "bg-card"} ${i % 2 ? "sm:ml-8" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-black leading-tight">{l.title}</h3>
                      {isNext && <span className="sticker shrink-0 bg-tomato text-white">{done.size ? "up next" : "start here"}</span>}
                    </div>
                    <p className="mt-1 font-serif italic opacity-80">{l.hook}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5 text-sm">
                      {l.activities.map((a) => (
                        <span key={a.id} className={`chip text-xs ${progress.activities[a.id] ? "bg-mint" : "bg-paper"}`}>
                          {{ quiz: "🎯", essay: "🪶", timeline: "⏳", flashcards: "🃏", chess: "♞" }[a.type]} {a.title}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.li>
              );
            })}
            <li className="relative flex gap-5">
              <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-[3px] border-ink bg-grape text-2xl shadow-pop-sm">
                🎓
              </div>
              <div className="card flex-1 bg-grape-soft p-5">
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest">Capstone · optional, glorious</div>
                <p className="mt-1 font-serif text-lg">{course.capstone}</p>
              </div>
            </li>
          </ol>
        </div>

        {/* library */}
        <aside>
          <div className="lg:sticky lg:top-24">
            <h2 className="text-2xl font-black">📚 The course library</h2>
            <p className="font-serif text-sm opacity-70">Books to buy or borrow, and the best of the web.</p>
            <div className="mt-4 space-y-4">
              {course.library.map((r, i) => (
                <ResourceCard key={`${r.title}-${i}`} r={r} compact />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
