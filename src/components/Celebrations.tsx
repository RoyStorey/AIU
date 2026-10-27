"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import confetti from "canvas-confetti";
import { BADGES } from "@/lib/game";
import { useStore, type Fx } from "@/lib/store";
import { play } from "@/lib/sound";

const COLORS = ["#ff5a36", "#ffcb2e", "#2ed59a", "#4d8bff", "#9b5de5", "#ff7ccf"];

export function burst(power = 1) {
  confetti({ particleCount: Math.round(90 * power), spread: 80, origin: { y: 0.7 }, colors: COLORS, scalar: 1.1 });
}

function bigBurst() {
  const end = Date.now() + 1200;
  (function frame() {
    confetti({ particleCount: 6, angle: 60, spread: 60, origin: { x: 0 }, colors: COLORS });
    confetti({ particleCount: 6, angle: 120, spread: 60, origin: { x: 1 }, colors: COLORS });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

const dismissLater = (id: number, ms: number) => {
  const t = setTimeout(() => useStore.getState().dismissFx(id), ms);
  return () => clearTimeout(t);
};

function XpToast({ fx }: { fx: Extract<Fx, { kind: "xp" }> }) {
  useEffect(() => {
    play("xp");
    return dismissLater(fx.id, 2200);
  }, [fx.id]);
  return (
    <motion.div
      layout
      initial={{ y: 40, opacity: 0, scale: 0.6, rotate: -8 }}
      animate={{ y: 0, opacity: 1, scale: 1, rotate: -2 }}
      exit={{ y: -40, opacity: 0, scale: 0.8 }}
      className="flex items-center gap-2 rounded-xl border-[3px] border-ink bg-mint px-4 py-2 font-black shadow-pop"
    >
      <span className="text-2xl">+{fx.amount}</span>
      <span className="font-mono text-xs uppercase">xp · {fx.reason}</span>
    </motion.div>
  );
}

function BadgeToast({ fx }: { fx: Extract<Fx, { kind: "badge" }> }) {
  const badge = BADGES.find((b) => b.id === fx.badgeId);
  useEffect(() => {
    play("spark");
    burst(0.5);
    return dismissLater(fx.id, 3800);
  }, [fx.id]);
  if (!badge) return null;
  return (
    <motion.div
      layout
      initial={{ x: 80, opacity: 0, rotate: 10 }}
      animate={{ x: 0, opacity: 1, rotate: 1 }}
      exit={{ x: 80, opacity: 0 }}
      className="flex items-center gap-3 rounded-2xl border-[3px] border-ink bg-sun px-4 py-3 shadow-pop"
    >
      <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-ink bg-card text-2xl">
        {badge.emoji}
      </span>
      <div>
        <div className="font-mono text-[10px] font-bold uppercase tracking-widest">Badge unlocked!</div>
        <div className="text-lg font-black leading-tight">{badge.name}</div>
        <div className="text-sm opacity-75">{badge.desc}</div>
      </div>
    </motion.div>
  );
}

function BigModal({ fx, onDone }: { fx: Extract<Fx, { kind: "level" | "course" }>; onDone: () => void }) {
  useEffect(() => {
    play(fx.kind === "course" ? "fanfare" : "levelUp");
    bigBurst();
  }, [fx.id, fx.kind]);
  return (
    <motion.div
      className="fixed inset-0 z-[60] grid place-items-center bg-ink/50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onDone}
    >
      <motion.div
        initial={{ scale: 0.4, rotate: -12 }}
        animate={{ scale: 1, rotate: -2 }}
        exit={{ scale: 0.6, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
        className="card relative max-w-md bg-sun p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-float text-6xl">
          {fx.kind === "course" ? "🎓" : "🚀"}
        </div>
        <div className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.3em]">
          {fx.kind === "course" ? "Course complete" : "Level up"}
        </div>
        {fx.kind === "level" ? (
          <>
            <div className="my-2 text-8xl font-black leading-none">{fx.level}</div>
            <div className="text-2xl font-black">You are now a {fx.rank}!</div>
          </>
        ) : (
          <>
            <div className="my-3 text-3xl font-black leading-tight">{fx.title}</div>
            <div className="font-serif text-lg italic">Diploma earned. Your shelf grows heavier and your mind lighter.</div>
          </>
        )}
        <button className="btn mt-6 bg-card" onClick={onDone}>
          Onward! ✨
        </button>
      </motion.div>
    </motion.div>
  );
}

export function Celebrations() {
  const fx = useStore((s) => s.fx);
  const dismiss = useStore((s) => s.dismissFx);
  const toasts = fx.filter((f) => f.kind === "xp" || f.kind === "badge").slice(0, 4);
  const modal = fx.find((f) => f.kind === "level" || f.kind === "course") as
    | Extract<Fx, { kind: "level" | "course" }>
    | undefined;

  return (
    <>
      <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {toasts.map((f) =>
            f.kind === "xp" ? (
              <XpToast key={f.id} fx={f} />
            ) : f.kind === "badge" ? (
              <BadgeToast key={f.id} fx={f} />
            ) : null,
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>{modal && <BigModal key={modal.id} fx={modal} onDone={() => dismiss(modal.id)} />}</AnimatePresence>
    </>
  );
}
