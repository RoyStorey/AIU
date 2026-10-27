"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";
import { useStore } from "@/lib/store";
import { useLive } from "@/lib/hooks";
import { play } from "@/lib/sound";
import type { CourseOption } from "@/lib/schema";
import { Hydrating, NotFound } from "@/components/Empty";
import { LoadingOverlay } from "@/components/Loading";

const BG: Record<CourseOption["color"], string> = {
  tomato: "bg-tomato-soft",
  sun: "bg-sun",
  mint: "bg-mint-soft",
  sky: "bg-sky-soft",
  grape: "bg-grape-soft",
  bubblegum: "bg-bubblegum-soft",
};
const ACCENT: Record<CourseOption["color"], string> = {
  tomato: "bg-tomato",
  sun: "bg-card",
  mint: "bg-mint",
  sky: "bg-sky",
  grape: "bg-grape",
  bubblegum: "bg-bubblegum",
};
const LEVEL_PIPS = { Dabbler: 1, Devotee: 2, "Deep Diver": 3 } as const;

function OptionCard({ option, i, onEnroll, live }: { option: CourseOption; i: number; onEnroll: () => void; live: boolean | null }) {
  const course = useStore((s) => (option.courseId ? s.courses[option.courseId] : undefined));
  const done = useStore((s) => (option.courseId ? s.progress[option.courseId]?.lessonsDone.length ?? 0 : 0));
  const canForge = !!course || live !== false;
  return (
    <motion.article
      initial={{ y: 30, opacity: 0, rotate: 0 }}
      animate={{ y: 0, opacity: 1, rotate: [-1.5, 1, -0.5, 1.5, 0, -1][i % 6] }}
      transition={{ delay: i * 0.07, type: "spring", stiffness: 180, damping: 16 }}
      whileHover={{ rotate: 0, y: -6 }}
      className={`card flex flex-col p-6 ${BG[option.color]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`grid h-16 w-16 place-items-center rounded-2xl border-[3px] border-ink text-4xl shadow-pop-sm ${ACCENT[option.color]}`}>
          {option.emoji}
        </span>
        <div className="flex flex-col items-end gap-1.5">
          <span className="sticker bg-card">{option.vibe}</span>
          <span className="font-mono text-xs font-bold" title={option.level}>
            {"●".repeat(LEVEL_PIPS[option.level])}
            <span className="opacity-25">{"●".repeat(3 - LEVEL_PIPS[option.level])}</span> {option.level}
          </span>
        </div>
      </div>
      <h3 className="mt-4 text-2xl font-black leading-tight">{option.title}</h3>
      <p className="mt-1 font-serif text-lg italic leading-snug">{option.tagline}</p>
      <p className="mt-3 text-sm">{option.hook}</p>
      <div className="mt-4 flex gap-2 font-mono text-xs font-bold">
        <span className="chip bg-card">📚 {course?.lessons.length ?? option.lessonCount} lessons</span>
        <span className="chip bg-card">⏱ ~{option.hours}h</span>
      </div>
      <div className="mt-auto pt-5">
        {course ? (
          <Link href={`/course/${course.id}`} className="btn w-full bg-mint" onClick={() => play("click")}>
            {done ? `Continue · ${done}/${course.lessons.length} done →` : "Open course →"}
          </Link>
        ) : (
          <button className="btn w-full bg-ink text-paper" onClick={onEnroll} disabled={!canForge}>
            {canForge ? "Enroll & forge this course ⚒️" : "Needs an API key to forge"}
          </button>
        )}
      </div>
    </motion.article>
  );
}

export default function TopicPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const live = useLive();
  const hydrated = useStore((s) => s.hydrated);
  const topic = useStore((s) => s.topics[id]);
  const addOptions = useStore((s) => s.addOptions);
  const removeTopic = useStore((s) => s.removeTopic);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  if (!hydrated) return <Hydrating />;
  if (!topic) return <NotFound what="subject" />;

  async function moreIdeas() {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/explore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: topic.query, avoid: topic.options.map((o) => o.title) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      addOptions(topic.id, data.topic.options);
      play("spark");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't think of more right now.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="pt-10">
      <LoadingOverlay active={busy} title="Brainstorming fresh angles" />
      <Link href="/" className="font-mono text-sm font-bold underline">
        ← all subjects
      </Link>
      <header className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="grid h-28 w-28 shrink-0 animate-float place-items-center rounded-3xl border-[3px] border-ink bg-sun text-6xl shadow-pop-lg">
          {topic.emoji}
        </div>
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] opacity-60">The department of</div>
          <h1 className="text-5xl font-black leading-none tracking-tight sm:text-6xl">{topic.title}</h1>
          <p className="mt-3 max-w-2xl font-serif text-xl">{topic.blurb}</p>
        </div>
      </header>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-3xl font-black">Choose your adventure</h2>
        <span className="font-mono text-sm opacity-60">enroll in as many as you like</span>
      </div>
      <div className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {topic.options.map((o, i) => (
          <OptionCard
            key={o.id}
            option={o}
            i={i}
            live={live}
            onEnroll={() => {
              play("click");
              router.push(`/forge?topic=${topic.id}&option=${o.id}`);
            }}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        {live && (
          <button className="btn bg-bubblegum" onClick={moreIdeas} disabled={busy}>
            🎲 Six more ideas
          </button>
        )}
        {!topic.sample && (
          <button
            className="btn bg-card text-sm"
            onClick={() => {
              if (confirm(`Remove ${topic.title} from your shelf? Courses you've forged stay in your profile.`)) {
                removeTopic(topic.id);
                router.push("/");
              }
            }}
          >
            Remove subject
          </button>
        )}
        {error && <span className="font-bold text-tomato">{error}</span>}
      </div>
    </div>
  );
}
