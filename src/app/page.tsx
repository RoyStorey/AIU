"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { useStore } from "@/lib/store";
import { useLive, useTypewriter } from "@/lib/hooks";
import { play } from "@/lib/sound";
import { SUGGESTIONS } from "@/data/samples";
import { LoadingOverlay } from "@/components/Loading";
import type { Topic } from "@/lib/schema";

const CARD_BG = ["bg-sun", "bg-sky-soft", "bg-bubblegum-soft", "bg-mint-soft", "bg-grape-soft", "bg-tomato-soft"];
const TILT = ["-rotate-1", "rotate-1", "rotate-0", "-rotate-2", "rotate-2"];

function TopicCard({ topic, i }: { topic: Topic; i: number }) {
  const courses = useStore((s) => s.courses);
  const progress = useStore((s) => s.progress);
  const enrolled = topic.options.filter((o) => o.courseId && courses[o.courseId]);
  const lessons = enrolled.reduce((n, o) => n + (courses[o.courseId!]?.lessons.length ?? 0), 0);
  const done = enrolled.reduce((n, o) => n + (progress[o.courseId!]?.lessonsDone.length ?? 0), 0);

  return (
    <Link href={`/topic/${topic.id}`} className={`card lift group relative block p-5 ${CARD_BG[i % CARD_BG.length]} ${TILT[i % TILT.length]}`}>
      {topic.sample && <span className="sticker absolute -right-2 -top-3 rotate-6 bg-card">sample</span>}
      <div className="text-5xl transition-transform group-hover:scale-110 group-hover:-rotate-6">{topic.emoji}</div>
      <h3 className="mt-3 text-2xl font-black leading-tight">{topic.title}</h3>
      <p className="mt-1 line-clamp-2 font-serif text-sm opacity-80">{topic.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs font-bold">
        <span className="chip bg-card">{topic.options.length} courses</span>
        {enrolled.length > 0 && (
          <span className="chip bg-mint">
            {done}/{lessons} lessons
          </span>
        )}
      </div>
    </Link>
  );
}

export default function Home() {
  const router = useRouter();
  const live = useLive();
  const hydrated = useStore((s) => s.hydrated);
  const topics = useStore((s) => s.topics);
  const addTopic = useStore((s) => s.addTopic);
  const [query, setQuery] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const placeholder = useTypewriter(SUGGESTIONS, !query);
  const marquee = useMemo(() => [...SUGGESTIONS, ...SUGGESTIONS], []);

  const shelf = Object.values(topics).sort((a, b) => b.createdAt - a.createdAt);

  async function explore(q: string) {
    const subject = q.trim();
    if (!subject || busy) return;
    const existing = shelf.find((t) => t.query.toLowerCase() === subject.toLowerCase() || t.title.toLowerCase() === subject.toLowerCase());
    if (existing) return router.push(`/topic/${existing.id}`);
    setBusy(true);
    setError("");
    play("click");
    try {
      const res = await fetch("/api/explore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: subject }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      addTopic(data.topic);
      router.push(`/topic/${data.topic.id}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went sideways.");
      setBusy(false);
      play("wrong");
    }
  }

  return (
    <div className="pt-10 sm:pt-16">
      <LoadingOverlay active={busy} title={`Designing courses on ${query}`} />

      {/* ---------------------------------------------------------------- hero */}
      <section className="relative">
        <div className="pointer-events-none absolute -right-2 -top-6 hidden animate-float text-7xl sm:block">🦉</div>
        <div className="pointer-events-none absolute -left-6 top-40 hidden animate-float text-5xl [animation-delay:1.5s] lg:block">📜</div>
        <span className="sticker -rotate-2 bg-bubblegum">✶ a school of one, for anything ✶</span>
        <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          I want to
          <br />
          learn about
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void explore(query);
          }}
          className="mt-6"
        >
          <div className="card flex flex-col gap-3 bg-card p-3 sm:flex-row sm:items-center">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder || " "}
              aria-label="What do you want to learn about?"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 font-serif text-3xl italic outline-none placeholder:text-ink/30 sm:text-5xl"
            />
            <div className="flex gap-2">
              <button
                type="button"
                className="btn bg-sun px-4 text-2xl"
                title="Surprise me"
                onClick={() => {
                  const pick = SUGGESTIONS[Math.floor(Math.random() * SUGGESTIONS.length)];
                  setQuery(pick);
                  play("flip");
                  inputRef.current?.focus();
                }}
              >
                🎲
              </button>
              <button type="submit" disabled={!query.trim() || busy} className="btn flex-1 bg-tomato text-lg text-white sm:flex-none sm:text-xl">
                Build my courses →
              </button>
            </div>
          </div>
        </form>
        {error && (
          <motion.p initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-3 font-bold text-tomato">
            {error}
          </motion.p>
        )}
        {live === false && (
          <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-xl border-2 border-dashed border-ink bg-sun-soft px-4 py-2 text-sm">
            <b>Demo mode.</b> Add <code className="font-mono">ANTHROPIC_API_KEY</code> to <code className="font-mono">.env.local</code> to
            build courses on anything. The sample subjects below are fully playable.
          </div>
        )}
      </section>

      {/* -------------------------------------------------------------- marquee */}
      <section className="relative -mx-4 mt-12 overflow-hidden border-y-[3px] border-ink bg-ink py-3 sm:-mx-6">
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {marquee.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setQuery(s);
                play("click");
                inputRef.current?.focus();
              }}
              className={`chip whitespace-nowrap border-paper text-base ${["bg-sun", "bg-mint", "bg-sky", "bg-bubblegum", "bg-tomato", "bg-grape"][i % 6]} ${i % 6 === 5 || i % 6 === 4 ? "text-white" : ""}`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- how it works */}
      <section className="mt-14 grid gap-5 sm:grid-cols-3">
        {[
          ["🔭", "Name your curiosity", "Anything: Gothic Architecture, Romantic Poetry, mushrooms, chess."],
          ["🗺️", "Pick a course", "Six different angles on your subject, from gentle on-ramps to deep dives."],
          ["🏆", "Learn, play, level up", "Lessons with real books, images, audio and video, plus homework that fights back."],
        ].map(([icon, title, body], i) => (
          <div key={title} className={`card p-5 ${["bg-sky-soft", "bg-sun-soft", "bg-mint-soft"][i]}`}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border-[3px] border-ink bg-card font-black">{i + 1}</span>
              <span className="text-3xl">{icon}</span>
            </div>
            <h3 className="mt-3 text-xl font-black">{title}</h3>
            <p className="font-serif">{body}</p>
          </div>
        ))}
      </section>

      {/* ---------------------------------------------------------------- shelf */}
      {hydrated && shelf.length > 0 && (
        <section className="mt-16">
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-black">Your shelf</h2>
            <span className="font-mono text-sm font-bold opacity-60">{shelf.length} subjects</span>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shelf.map((t, i) => (
              <TopicCard key={t.id} topic={t} i={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
