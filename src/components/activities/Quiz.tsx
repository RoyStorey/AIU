"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { Activity } from "@/lib/schema";
import { XP } from "@/lib/game";
import { play } from "@/lib/sound";
import { burst } from "../Celebrations";
import type { ActivityProps } from "./Activity";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export function Quiz({ activity, onResult }: ActivityProps & { activity: Activity }) {
  const qs = activity.questions;
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const q = qs[i];

  function choose(idx: number) {
    if (chosen !== null) return;
    setChosen(idx);
    if (idx === q.answer) {
      setCorrect((c) => c + 1);
      play("correct");
      burst(0.25);
    } else play("wrong");
  }

  function next() {
    if (i + 1 < qs.length) {
      setI(i + 1);
      setChosen(null);
      play("click");
      return;
    }
    setDone(true);
    const score = Math.round((correct / qs.length) * 100);
    onResult({ score }, correct * XP.quizCorrect + (score === 100 ? XP.quizPerfect : 0), score === 100 ? "Flawless quiz!" : "Quiz complete");
  }

  if (done) {
    const perfect = correct === qs.length;
    return (
      <div className="text-center">
        <div className="text-6xl">{perfect ? "💎" : correct / qs.length >= 0.6 ? "🎯" : "🌱"}</div>
        <div className="mt-2 text-3xl font-black">
          {correct} / {qs.length}
        </div>
        <p className="font-serif text-lg italic">
          {perfect ? "Not a single slip. Magnificent." : "Every wrong answer is a door you now know how to open."}
        </p>
        <button
          className="btn mt-4 bg-card"
          onClick={() => {
            setI(0);
            setChosen(null);
            setCorrect(0);
            setDone(false);
          }}
        >
          ↻ Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex gap-1.5">
        {qs.map((_, n) => (
          <div key={n} className={`h-2.5 flex-1 rounded-full border-2 border-ink ${n < i ? "bg-mint" : n === i ? "bg-sun" : "bg-card"}`} />
        ))}
      </div>
      <motion.div key={i} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        <div className="font-mono text-xs font-bold uppercase opacity-60">
          Question {i + 1} of {qs.length}
        </div>
        <h4 className="mt-1 text-xl font-black leading-snug">{q.q}</h4>
        <div className="mt-4 grid gap-3">
          {q.options.map((opt, idx) => {
            const state =
              chosen === null ? "idle" : idx === q.answer ? "right" : idx === chosen ? "wrong" : "dim";
            return (
              <motion.button
                key={idx}
                onClick={() => choose(idx)}
                animate={state === "wrong" ? { x: [0, -8, 8, -6, 6, 0] } : state === "right" ? { scale: [1, 1.04, 1] } : {}}
                className={`flex items-center gap-3 rounded-xl border-[3px] border-ink px-4 py-3 text-left font-bold transition-colors ${
                  state === "right"
                    ? "bg-mint shadow-pop-sm"
                    : state === "wrong"
                      ? "bg-tomato text-white"
                      : state === "dim"
                        ? "bg-card opacity-50"
                        : "bg-card shadow-pop-sm hover:bg-sun-soft"
                }`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border-2 border-ink bg-paper font-mono text-sm text-ink">
                  {state === "right" ? "✓" : state === "wrong" ? "✗" : LETTERS[idx]}
                </span>
                {opt}
              </motion.button>
            );
          })}
        </div>
        {chosen !== null && (
          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-4 rounded-xl border-2 border-dashed border-ink bg-sun-soft p-4">
            <div className="font-black">{chosen === q.answer ? "Yes! 🎉" : "Not quite!"}</div>
            <p className="font-serif">{q.explain}</p>
            <button className="btn mt-3 bg-ink text-paper" onClick={next}>
              {i + 1 < qs.length ? "Next question →" : "See results →"}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
