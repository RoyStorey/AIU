"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { computeStats, useStore } from "@/lib/store";
import { BADGES, levelInfo, xpForLevel } from "@/lib/game";
import { play } from "@/lib/sound";
import { Crest, MOTTOS } from "@/components/Crest";
import { Hydrating } from "@/components/Empty";

export default function ProfilePage() {
  const state = useStore();
  const { profile, hydrated, setName, setMotto } = state;
  if (!hydrated) return <Hydrating />;

  const stats = computeStats(state);
  const lv = levelInfo(profile.xp);
  const diplomas = Object.entries(state.progress)
    .filter(([cid, p]) => p.completedAt && state.courses[cid])
    .map(([cid, p]) => ({ course: state.courses[cid], at: p.completedAt! }));
  const inProgress = Object.values(state.courses).filter((c) => {
    const p = state.progress[c.id];
    return p && p.lessonsDone.length > 0 && !p.completedAt;
  });

  return (
    <div className="pt-10">
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
        <motion.div initial={{ rotate: -10, scale: 0.8 }} animate={{ rotate: -3, scale: 1 }} className="mx-auto">
          <Crest seed={profile.name} motto={profile.motto} size={200} />
        </motion.div>
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] opacity-60">Library card of</div>
          <input
            value={profile.name}
            onChange={(e) => setName(e.target.value.slice(0, 40))}
            placeholder="Your name, scholar"
            className="w-full border-b-[3px] border-dashed border-ink bg-transparent text-4xl font-black outline-none placeholder:text-ink/30 sm:text-6xl"
            aria-label="Your name"
          />
          <p className="mt-2 font-serif text-sm italic opacity-70">Your crest is woven from your name. Change it and see who you become.</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase">Motto:</span>
            <button
              className="chip bg-sun hover:bg-sun-soft"
              onClick={() => {
                setMotto((profile.motto + 1) % MOTTOS.length);
                play("flip");
              }}
            >
              “{MOTTOS[profile.motto % MOTTOS.length]}” ↻
            </button>
          </div>
        </div>
      </div>

      {/* level */}
      <section className="card mt-10 bg-grape p-6 text-white sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-widest opacity-80">Level {lv.level}</div>
            <div className="text-4xl font-black sm:text-5xl">{lv.rank}</div>
          </div>
          <div className="font-mono text-lg font-bold">{profile.xp} xp</div>
        </div>
        <div className="mt-4 h-6 overflow-hidden rounded-full border-[3px] border-ink bg-card">
          <motion.div className="h-full bg-sun" initial={{ width: 0 }} animate={{ width: `${lv.pct * 100}%` }} transition={{ duration: 1 }} />
        </div>
        <div className="mt-2 font-mono text-xs opacity-80">
          {xpForLevel(lv.level + 1) - profile.xp} xp to level {lv.level + 1}
        </div>
      </section>

      {/* stats */}
      <section className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          ["🔥", profile.streak, "day streak"],
          ["📖", stats.lessonsDone, "lessons done"],
          ["🎓", stats.coursesDone, "courses finished"],
          ["🪶", stats.essays, "essays written"],
          ["🗺️", stats.topics, "subjects"],
          ["♞", stats.chess, "puzzles solved"],
          ["✨", stats.sparks, "sparks caught"],
          ["🏅", profile.badges.length, "badges"],
        ].map(([icon, n, label], i) => (
          <motion.div
            key={label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className={`card p-4 ${["bg-tomato-soft", "bg-sun-soft", "bg-mint-soft", "bg-sky-soft"][i % 4]}`}
          >
            <div className="text-2xl">{icon}</div>
            <div className="font-mono text-3xl font-black">{n}</div>
            <div className="font-mono text-[10px] font-bold uppercase opacity-70">{label}</div>
          </motion.div>
        ))}
      </section>

      {/* badges */}
      <section className="mt-12">
        <h2 className="text-3xl font-black">The trophy cabinet</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {BADGES.map((b) => {
            const got = profile.badges.includes(b.id);
            return (
              <div key={b.id} title={b.desc} className={`flex flex-col items-center text-center ${got ? "" : "opacity-40"}`}>
                <motion.div
                  whileHover={got ? { rotate: [0, -10, 10, 0], scale: 1.1 } : {}}
                  className={`grid h-20 w-20 place-items-center rounded-full border-[3px] border-ink text-4xl shadow-pop-sm ${got ? "bg-sun" : "bg-card grayscale"}`}
                >
                  {got ? b.emoji : "?"}
                </motion.div>
                <div className="mt-2 text-sm font-black leading-tight">{b.name}</div>
                <div className="text-xs opacity-70">{b.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* diplomas */}
      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black">Diplomas</h2>
          <div className="mt-4 space-y-4">
            {diplomas.length ? (
              diplomas.map(({ course, at }) => (
                <Link key={course.id} href={`/course/${course.id}`} className="card lift block border-double bg-card p-5 text-center">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em]">AIU hereby certifies that</div>
                  <div className="mt-1 font-serif text-2xl italic">{profile.name || "a mysterious scholar"}</div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em]">has completed</div>
                  <div className="mt-1 text-2xl font-black">
                    {course.emoji} {course.title}
                  </div>
                  <div className="mt-2 font-mono text-xs opacity-60">{new Date(at).toLocaleDateString()}</div>
                </Link>
              ))
            ) : (
              <p className="font-serif italic opacity-70">No diplomas yet. Every great library begins with a single book.</p>
            )}
            {inProgress.map((c) => (
              <Link key={c.id} href={`/course/${c.id}`} className="card lift flex items-center justify-between bg-sun-soft p-4">
                <span className="font-black">
                  {c.emoji} {c.title}
                </span>
                <span className="chip bg-card text-xs">
                  {state.progress[c.id].lessonsDone.length}/{c.lessons.length} · continue →
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-black">The jar of sparks</h2>
          <div className="relative mt-4 rounded-[2.5rem] border-[3px] border-ink bg-sky-soft/60 p-5 shadow-pop">
            <div className="absolute -top-4 left-1/2 h-6 w-28 -translate-x-1/2 rounded-lg border-[3px] border-ink bg-tomato" />
            {profile.sparks.length ? (
              <ul className="max-h-96 space-y-3 overflow-y-auto pt-3">
                {profile.sparks.map((s, i) => (
                  <li key={i} className={`rounded-xl border-2 border-ink bg-card p-3 font-serif text-sm ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                    ✨ {s}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-10 text-center font-serif italic opacity-70">Empty, for now. Sparks hide in every lesson.</p>
            )}
          </div>
        </div>
      </section>

      <section className="mt-16 border-t-[3px] border-dashed border-ink pt-6">
        <button
          className="font-mono text-xs underline opacity-60 hover:opacity-100"
          onClick={() => {
            if (confirm("Erase all subjects, courses, XP and badges from this browser? This can't be undone.")) {
              useStore.persist.clearStorage();
              try {
                localStorage.removeItem("aiu-seeded-v1");
              } catch {
                /* ignore */
              }
              location.href = "/";
            }
          }}
        >
          Burn the library card (reset everything)
        </button>
      </section>
    </div>
  );
}
