"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useStore } from "@/lib/store";
import { play } from "@/lib/sound";
import type { Course } from "@/lib/schema";
import { Hydrating, NotFound } from "@/components/Empty";
import { burst } from "@/components/Celebrations";
import { useQuip } from "@/components/Loading";

type FeedItem = { id: number; icon: string; text: string };
type Phase = "research" | "write" | "verify" | "done" | "error";

const PHASES: { key: Phase; label: string; icon: string }[] = [
  { key: "research", label: "Research", icon: "🔎" },
  { key: "write", label: "Write", icon: "🪶" },
  { key: "verify", label: "Verify", icon: "✅" },
];

function Forge() {
  const params = useSearchParams();
  const router = useRouter();
  const hydrated = useStore((s) => s.hydrated);
  const topicId = params.get("topic") ?? "";
  const optionId = params.get("option") ?? "";
  const topic = useStore((s) => s.topics[topicId]);
  const option = topic?.options.find((o) => o.id === optionId);
  const addCourse = useStore((s) => s.addCourse);

  const [phase, setPhase] = useState<Phase>("research");
  const [message, setMessage] = useState("Lighting the forge…");
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [lessons, setLessons] = useState<string[]>([]);
  const [searches, setSearches] = useState(0);
  const [sources, setSources] = useState(0);
  const [chars, setChars] = useState(0);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const quip = useQuip(phase !== "done" && phase !== "error");

  useEffect(() => {
    // Read from the store directly so later store updates (e.g. addCourse) don't restart or abort the stream.
    const topic = useStore.getState().topics[topicId];
    const option = topic?.options.find((o) => o.id === optionId);
    if (!hydrated || !topic || !option) return;
    if (option.courseId) return router.replace(`/course/${option.courseId}`);
    let n = 0;
    const push = (icon: string, text: string) => setFeed((f) => [{ id: ++n, icon, text }, ...f].slice(0, 12));
    const ctrl = new AbortController();

    // Deferred a tick so React's dev double-mount cancels the first run before it costs an API call.
    const timer = setTimeout(async () => {
      try {
        const res = await fetch("/api/forge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ topicId: topic.id, topicTitle: topic.title, option }),
          signal: ctrl.signal,
        });
        if (!res.ok || !res.body) throw new Error((await res.json().catch(() => null))?.error ?? "The forge wouldn't light.");
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buf = "";
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });
          const chunks = buf.split("\n\n");
          buf = chunks.pop() ?? "";
          for (const chunk of chunks) {
            const line = chunk.split("\n").find((l) => l.startsWith("data: "));
            if (!line) continue;
            const e = JSON.parse(line.slice(6));
            switch (e.type) {
              case "status":
                setPhase(e.phase);
                setMessage(e.message);
                break;
              case "search":
                setSearches((s) => s + 1);
                push("🔎", `Searching “${e.query}”`);
                play("click");
                break;
              case "found":
                setSources((s) => s + e.count);
                if (e.titles.length) push("📚", e.titles[0]);
                break;
              case "lesson":
                setLessons((l) => [...l, e.title]);
                play("xp");
                break;
              case "progress":
                setChars(e.chars);
                break;
              case "done": {
                const course = e.course as Course;
                setPhase("done");
                addCourse(course);
                play("fanfare");
                burst(1.5);
                setTimeout(() => router.replace(`/course/${course.id}`), 1400);
                break;
              }
              case "error":
                throw new Error(e.message);
            }
          }
        }
      } catch (err) {
        if (ctrl.signal.aborted) return;
        setPhase("error");
        setError(err instanceof Error ? err.message : "The forge sputtered out.");
        play("wrong");
      }
    }, 30);
    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
  }, [hydrated, topicId, optionId, attempt, addCourse, router]);

  if (!hydrated) return <Hydrating />;
  if (!topic || !option) return <NotFound what="course" />;

  const phaseIndex = PHASES.findIndex((p) => p.key === phase);
  const estimated = option.lessonCount * 6500;

  return (
    <div className="mx-auto max-w-3xl pt-10">
      <div className="text-center">
        <span className="sticker bg-bubblegum">now forging</span>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          {option.emoji} {option.title}
        </h1>
        <p className="mt-2 font-serif text-lg italic">{option.tagline}</p>
      </div>

      {/* phase track */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {PHASES.map((p, i) => {
          const state = phase === "done" || i < phaseIndex ? "done" : i === phaseIndex ? "active" : "todo";
          return (
            <div key={p.key} className="flex items-center gap-2">
              <motion.div
                animate={state === "active" ? { scale: [1, 1.1, 1] } : {}}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className={`flex items-center gap-2 rounded-full border-[3px] border-ink px-4 py-2 font-black ${
                  state === "done" ? "bg-mint" : state === "active" ? "bg-sun shadow-pop-sm" : "bg-card opacity-50"
                }`}
              >
                <span>{state === "done" ? "✓" : p.icon}</span>
                <span className="hidden sm:inline">{p.label}</span>
              </motion.div>
              {i < PHASES.length - 1 && <div className="h-1 w-6 rounded bg-ink sm:w-12" />}
            </div>
          );
        })}
      </div>

      {phase === "error" ? (
        <div className="card mt-10 bg-tomato-soft p-8 text-center">
          <div className="text-6xl">🫠</div>
          <h2 className="mt-3 text-2xl font-black">The forge sputtered.</h2>
          <p className="mt-2 font-serif">{error}</p>
          <div className="mt-5 flex justify-center gap-3">
            <button
              className="btn bg-sun"
              onClick={() => {
                setPhase("research");
                setFeed([]);
                setLessons([]);
                setSearches(0);
                setSources(0);
                setChars(0);
                setAttempt((a) => a + 1);
              }}
            >
              ↻ Try again
            </button>
            <Link href={`/topic/${topic.id}`} className="btn bg-card">
              Back to courses
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="card mt-10 overflow-hidden bg-ink p-6 text-paper">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: phase === "done" ? 0 : [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                className="text-5xl"
              >
                {phase === "done" ? "🎉" : "⚒️"}
              </motion.div>
              <div>
                <div className="text-xl font-black">{phase === "done" ? "Your course is ready!" : message}</div>
                <motion.div key={quip} initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} className="font-serif italic">
                  {phase === "done" ? "Opening the doors…" : quip}
                </motion.div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                [searches, "searches"],
                [sources, "sources found"],
                [lessons.length, "lessons written"],
              ].map(([n, label]) => (
                <div key={label} className="rounded-xl border-2 border-paper/30 p-3">
                  <motion.div key={n} initial={{ scale: 1.4, color: "#ffcb2e" }} animate={{ scale: 1, color: "#fff4e0" }} className="font-mono text-3xl font-black">
                    {n}
                  </motion.div>
                  <div className="font-mono text-[10px] uppercase opacity-70">{label}</div>
                </div>
              ))}
            </div>
            {phase !== "research" && (
              <div className="mt-4 h-3 overflow-hidden rounded-full border-2 border-paper/40">
                <motion.div
                  className="h-full bg-sun"
                  animate={{ width: `${phase === "done" ? 100 : Math.min(96, (chars / estimated) * 100)}%` }}
                />
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest">Scouts' reports</h3>
              <ul className="mt-2 space-y-2">
                <AnimatePresence initial={false}>
                  {feed.map((f) => (
                    <motion.li
                      key={f.id}
                      layout
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-2 rounded-lg border-2 border-ink bg-card px-3 py-2 text-sm"
                    >
                      <span>{f.icon}</span>
                      <span className="line-clamp-1">{f.text}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
                {!feed.length && <li className="font-serif text-sm italic opacity-60">Scouts are lacing their boots…</li>}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest">Table of contents</h3>
              <ol className="mt-2 space-y-2">
                {lessons.map((t, i) => (
                  <motion.li
                    key={t}
                    initial={{ scale: 0.6, opacity: 0, rotate: -6 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    className="flex items-center gap-3 rounded-lg border-[3px] border-ink bg-sun-soft px-3 py-2 font-bold shadow-pop-sm"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-card font-mono text-xs">{i + 1}</span>
                    {t}
                  </motion.li>
                ))}
                {Array.from({ length: Math.max(0, option.lessonCount - lessons.length) }).map((_, i) => (
                  <li key={`ghost-${i}`} className="h-11 animate-pulse rounded-lg border-2 border-dashed border-ink/30" />
                ))}
              </ol>
            </div>
          </div>
          <p className="mt-8 text-center font-mono text-xs opacity-60">
            Real research takes a few minutes. Every link is checked against live search results.
          </p>
        </>
      )}
    </div>
  );
}

export default function ForgePage() {
  return (
    <Suspense fallback={<Hydrating />}>
      <Forge />
    </Suspense>
  );
}
