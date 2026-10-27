"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const QUIPS = [
  "Dusting off the card catalogue…",
  "Bribing a librarian with biscuits…",
  "Consulting the owl in the attic…",
  "Untangling footnotes…",
  "Polishing the reading lamps…",
  "Arguing with a medievalist…",
  "Sharpening very small pencils…",
  "Alphabetising the rabbit holes…",
  "Asking the professor emeritus (he's napping)…",
  "Reticulating syllabi…",
];

export function useQuip(active: boolean) {
  const [i, setI] = useState(() => Math.floor(Math.random() * QUIPS.length));
  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setI((n) => (n + 1) % QUIPS.length), 2200);
    return () => clearInterval(t);
  }, [active]);
  return QUIPS[i];
}

export function BookStack({ size = 90 }: { size?: number }) {
  const colors = ["bg-tomato", "bg-sun", "bg-sky", "bg-mint", "bg-grape"];
  return (
    <div className="flex items-end gap-1" style={{ height: size }}>
      {colors.map((c, i) => (
        <motion.div
          key={c}
          className={`w-5 rounded-t-sm border-[3px] border-ink ${c}`}
          animate={{ height: [size * 0.5, size, size * 0.6, size * 0.85, size * 0.5] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function LoadingOverlay({ title, active }: { title: string; active: boolean }) {
  const quip = useQuip(active);
  if (!active) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 grid place-items-center bg-paper/95 p-6">
      <div className="text-center">
        <div className="flex justify-center">
          <BookStack />
        </div>
        <h2 className="mt-6 text-4xl font-black">{title}</h2>
        <motion.p key={quip} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-2 font-serif text-xl italic">
          {quip}
        </motion.p>
      </div>
    </motion.div>
  );
}
