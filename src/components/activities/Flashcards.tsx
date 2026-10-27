"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Activity } from "@/lib/schema";
import { XP } from "@/lib/game";
import { play } from "@/lib/sound";
import { burst } from "../Celebrations";
import type { ActivityProps } from "./Activity";

const FACES = ["bg-sun", "bg-bubblegum", "bg-sky", "bg-mint", "bg-grape", "bg-tomato"];

export function Flashcards({ activity, onResult }: ActivityProps & { activity: Activity }) {
  const [queue, setQueue] = useState(() => activity.cards.map((_, i) => i));
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [misses, setMisses] = useState(0);

  const current = queue[0];
  const card = current !== undefined ? activity.cards[current] : null;

  function answer(gotIt: boolean) {
    setFlipped(false);
    if (gotIt) {
      play("correct");
      setKnown((k) => k + 1);
      const rest = queue.slice(1);
      setQueue(rest);
      if (!rest.length) {
        burst(0.7);
        const score = Math.round((activity.cards.length / (activity.cards.length + misses)) * 100);
        onResult({ score }, XP.flashcards, "Deck mastered");
      }
    } else {
      play("flip");
      setMisses((m) => m + 1);
      setQueue([...queue.slice(1), current]);
    }
  }

  if (!card) {
    return (
      <div className="text-center">
        <div className="text-6xl">🏰</div>
        <div className="mt-2 text-2xl font-black">Deck mastered!</div>
        <p className="font-serif italic">All {activity.cards.length} cards now live in your memory palace.</p>
        <button
          className="btn mt-4 bg-card"
          onClick={() => {
            setQueue(activity.cards.map((_, i) => i));
            setKnown(0);
            setMisses(0);
          }}
        >
          ↻ Shuffle again
        </button>
      </div>
    );
  }

  return (
    <div>
      {activity.prompt && <p className="font-serif text-lg">{activity.prompt}</p>}
      <div className="mt-2 flex justify-between font-mono text-xs font-bold uppercase">
        <span>
          ✓ {known}/{activity.cards.length} known
        </span>
        <span>{queue.length} left</span>
      </div>
      <div className="relative mt-3 h-64 [perspective:1200px]">
        {/* Decorative stack behind the active card */}
        {queue.length > 1 && <div className="absolute inset-0 translate-x-2 translate-y-2 rotate-2 rounded-2xl border-[3px] border-ink bg-card" />}
        <AnimatePresence mode="popLayout">
          <motion.button
            key={`${current}-${known}-${misses}`}
            initial={{ x: 120, opacity: 0, rotate: 8 }}
            animate={{ x: 0, opacity: 1, rotate: 0, rotateY: flipped ? 180 : 0 }}
            exit={{ x: -160, opacity: 0, rotate: -12 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => {
              setFlipped((f) => !f);
              play("flip");
            }}
            className="absolute inset-0 [transform-style:preserve-3d]"
            aria-label="Flip card"
          >
            <div className={`absolute inset-0 grid place-items-center rounded-2xl border-[3px] border-ink p-6 shadow-pop [backface-visibility:hidden] ${FACES[current % FACES.length]}`}>
              <div className="text-center text-3xl font-black leading-tight">{card.front}</div>
              <span className="absolute bottom-3 font-mono text-[10px] uppercase opacity-60">tap to flip</span>
            </div>
            <div className="absolute inset-0 grid place-items-center rounded-2xl border-[3px] border-ink bg-card p-6 shadow-pop [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <p className="text-center font-serif text-xl leading-snug">{card.back}</p>
            </div>
          </motion.button>
        </AnimatePresence>
      </div>
      <div className="mt-5 flex justify-center gap-3">
        <button className="btn bg-card" onClick={() => answer(false)}>
          🔁 Again
        </button>
        <button className="btn bg-mint" onClick={() => answer(true)}>
          ✓ Got it
        </button>
      </div>
    </div>
  );
}
