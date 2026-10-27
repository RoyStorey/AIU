"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { Activity, GradeData } from "@/lib/schema";
import { XP } from "@/lib/game";
import { play } from "@/lib/sound";
import { burst } from "../Celebrations";
import type { ActivityProps } from "./Activity";

const DRAFT_KEY = (id: string) => `aiu-draft-${id}`;

function readDraft(id: string) {
  try {
    return localStorage.getItem(DRAFT_KEY(id)) ?? "";
  } catch {
    return "";
  }
}

export function Essay({ activity, onResult, previous, context }: ActivityProps & { activity: Activity }) {
  const [text, setText] = useState(() => previous?.answer ?? readDraft(activity.id));
  const [grade, setGrade] = useState<GradeData | null>(previous?.grade ?? null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [offline, setOffline] = useState(false);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const pct = Math.min(1, words / activity.minWords);
  const ready = words >= Math.round(activity.minWords * 0.8);

  async function submit() {
    setBusy(true);
    setError("");
    play("click");
    try {
      const res = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          course: context.courseTitle,
          lesson: context.lessonTitle,
          prompt: activity.prompt,
          rubric: activity.rubric,
          keyIdeas: context.keyIdeas,
          answer: text,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setGrade(data.grade);
      setOffline(!!data.offline);
      if (data.grade.stars >= 2) burst(data.grade.stars / 2);
      play(data.grade.stars >= 2 ? "correct" : "flip");
      onResult({ score: data.grade.score, answer: text, grade: data.grade }, XP.essay(data.grade.score), "Essay graded");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't reach the grader.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <p className="font-serif text-lg">{activity.prompt}</p>
      {activity.rubric.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {activity.rubric.map((r) => (
            <li key={r} className="chip bg-grape-soft text-xs">
              ☐ {r}
            </li>
          ))}
        </ul>
      )}
      <div className="relative mt-4">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            try {
              localStorage.setItem(DRAFT_KEY(activity.id), e.target.value);
            } catch {
              /* drafts are a convenience */
            }
          }}
          rows={9}
          placeholder="Put pen to (digital) paper…"
          className="w-full resize-y rounded-xl border-[3px] border-ink bg-[repeating-linear-gradient(transparent,transparent_31px,#e9dcc4_32px)] bg-card p-4 font-serif text-lg leading-8 shadow-pop-sm outline-none focus:bg-sun-soft/30"
        />
        <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border-2 border-ink bg-card px-2 py-1">
          <svg width="22" height="22" viewBox="0 0 36 36" className="-rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="#e9dcc4" strokeWidth="6" />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke={pct >= 1 ? "#2ed59a" : "#ffcb2e"}
              strokeWidth="6"
              strokeDasharray={`${pct * 94.2} 94.2`}
              className="transition-all duration-300"
            />
          </svg>
          <span className="font-mono text-xs font-bold">
            {words}/{activity.minWords}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <button className="btn bg-tomato text-white" disabled={!ready || busy} onClick={submit}>
          {busy ? "The grader is reading… 🧐" : grade ? "Resubmit for a fresh look" : "Hand it in ✍️"}
        </button>
        {!ready && <span className="font-mono text-xs opacity-60">~{Math.round(activity.minWords * 0.8)} words to unlock</span>}
      </div>
      {error && <p className="mt-2 font-bold text-tomato">{error}</p>}

      {grade && (
        <motion.div initial={{ scale: 0.9, opacity: 0, rotate: -2 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} className="mt-6 rounded-2xl border-[3px] border-ink bg-sun-soft p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-1 text-3xl">
              {[1, 2, 3].map((s) => (
                <motion.span
                  key={s}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 * s, type: "spring" }}
                  className={s <= grade.stars ? "" : "opacity-20 grayscale"}
                >
                  ⭐
                </motion.span>
              ))}
            </div>
            <div className="rounded-xl border-[3px] border-ink bg-card px-3 py-1 font-mono text-2xl font-black">{grade.score}</div>
          </div>
          <h4 className="mt-2 text-2xl font-black">{grade.headline}</h4>
          <p className="mt-2 font-serif">
            <b>What sang:</b> {grade.praise}
          </p>
          <p className="mt-2 font-serif">
            <b>Go deeper:</b> {grade.growth}
          </p>
          <p className="mt-3 rounded-xl border-2 border-dashed border-ink bg-card p-3 font-serif italic">🤔 {grade.followUp}</p>
          {offline && (
            <p className="mt-2 font-mono text-[10px] uppercase opacity-60">
              Graded by the offline heuristic. Add an Anthropic API key for real feedback.
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}
