"use client";

import Link from "next/link";
import { useState } from "react";
import { backronym, BACKRONYM_COUNT, levelInfo } from "@/lib/game";
import { useStore } from "@/lib/store";
import { play } from "@/lib/sound";

export function Logo() {
  const [i, setI] = useState(0);
  const [a, b, c] = backronym(i);
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/"
        className="grid h-12 w-12 place-items-center rounded-xl border-[3px] border-ink bg-sun text-xl font-black shadow-pop-sm transition-transform hover:-rotate-6"
        aria-label="AIU home"
      >
        ?!
      </Link>
      <button
        onClick={() => {
          setI((n) => (n + 1 + Math.floor(Math.random() * (BACKRONYM_COUNT - 1))) % BACKRONYM_COUNT);
          play("click");
        }}
        className="group hidden text-left leading-none sm:block"
        title="What does AIU stand for? Click to find out (again)."
      >
        <span className="block text-2xl font-black tracking-tight">AIU</span>
        <span key={i} className="block animate-pop-in font-mono text-[10px] font-bold uppercase tracking-wider opacity-70">
          {a} <span className="text-tomato">{b}</span> {c}
        </span>
      </button>
    </div>
  );
}

export function Nav() {
  const { xp, streak, sound, name } = useStore((s) => s.profile);
  const hydrated = useStore((s) => s.hydrated);
  const toggleSound = useStore((s) => s.toggleSound);
  const lv = levelInfo(xp);

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Logo />
        {hydrated && (
          <nav className="flex items-center gap-2 sm:gap-3">
            <div
              className="chip bg-tomato-soft"
              title={streak ? `${streak}-day learning streak` : "Learn something today to start a streak"}
            >
              <span className={streak ? "animate-wiggle" : "grayscale"}>🔥</span>
              <span className="font-mono">{streak}</span>
            </div>
            <Link href="/me" className="group flex items-center gap-2" title={`${lv.into}/${lv.span} XP to next level`}>
              <div className="hidden w-36 sm:block">
                <div className="flex justify-between font-mono text-[10px] font-bold uppercase">
                  <span className="truncate">{lv.rank}</span>
                  <span>{xp} xp</span>
                </div>
                <div className="mt-0.5 h-3 overflow-hidden rounded-full border-2 border-ink bg-card">
                  <div
                    className="h-full rounded-full bg-mint transition-all duration-700"
                    style={{ width: `${Math.max(4, lv.pct * 100)}%` }}
                  />
                </div>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-ink bg-grape font-black text-white shadow-pop-sm transition-transform group-hover:rotate-12">
                {lv.level}
              </div>
              <span className="sr-only">{name || "Your profile"}</span>
            </Link>
            <button
              onClick={toggleSound}
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-card text-lg"
              aria-label={sound ? "Mute sounds" : "Unmute sounds"}
            >
              {sound ? "🔊" : "🔇"}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
