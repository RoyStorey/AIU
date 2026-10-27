"use client";

import { useMemo, useState } from "react";
import { Reorder } from "motion/react";
import type { Activity } from "@/lib/schema";
import { XP } from "@/lib/game";
import { hashString } from "@/lib/links";
import { play } from "@/lib/sound";
import { burst } from "../Celebrations";
import type { ActivityProps } from "./Activity";

const fmtYear = (y: number) => (y < 0 ? `${-y} BCE` : `${y}`);

function shuffled<T>(items: T[], seed: number): T[] {
  const a = [...items];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  // Never hand over an already-solved puzzle.
  return a.every((e, i) => e === items[i]) ? [...a.slice(1), a[0]] : a;
}

export function Timeline({ activity, onResult }: ActivityProps & { activity: Activity }) {
  const sorted = useMemo(() => [...activity.events].sort((a, b) => a.year - b.year), [activity.events]);
  const [order, setOrder] = useState(() => shuffled(sorted, hashString(activity.id)));
  const [checked, setChecked] = useState(false);
  const [paid, setPaid] = useState(false);

  const rightCount = order.filter((e, i) => e === sorted[i]).length;

  function check() {
    setChecked(true);
    const score = Math.round((rightCount / sorted.length) * 100);
    if (score === 100) {
      play("correct");
      burst(0.8);
    } else play("wrong");
    if (score === 100 || !paid) {
      onResult({ score }, score === 100 ? XP.timeline : 10, score === 100 ? "Timeline mastered" : "Timeline attempt");
      setPaid(true);
    }
  }

  return (
    <div>
      <p className="font-serif text-lg">{activity.prompt}</p>
      <p className="mt-1 font-mono text-xs uppercase opacity-60">Drag to reorder: earliest at the top</p>
      <Reorder.Group axis="y" values={order} onReorder={(o) => (setOrder(o), setChecked(false))} className="relative mt-4 space-y-3 pl-8">
        <div className="absolute bottom-2 left-3 top-2 w-1 rounded-full bg-ink" />
        {order.map((e, i) => {
          const ok = checked && e === sorted[i];
          const bad = checked && e !== sorted[i];
          return (
            <Reorder.Item
              key={e.label}
              value={e}
              onDragStart={() => play("click")}
              className={`relative cursor-grab touch-none rounded-xl border-[3px] border-ink p-3 shadow-pop-sm active:cursor-grabbing ${
                ok ? "bg-mint" : bad ? "bg-tomato-soft" : "bg-card"
              }`}
            >
              <span className="absolute -left-[30px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-[3px] border-ink bg-sun" />
              <div className="flex items-center justify-between gap-2">
                <span className="font-black">{e.label}</span>
                {checked && <span className="shrink-0 font-mono text-sm font-bold">{ok ? fmtYear(e.year) : "?"}</span>}
                {!checked && <span className="opacity-40">⠿</span>}
              </div>
              {checked && ok && <p className="mt-1 font-serif text-sm">{e.detail}</p>}
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button className="btn bg-sky text-white" onClick={check}>
          Check my timeline ⏳
        </button>
        {checked && (
          <span className="font-black">
            {rightCount === sorted.length ? "Perfect chronology! 🎉" : `${rightCount} of ${sorted.length} in place. Shuffle the red ones!`}
          </span>
        )}
      </div>
    </div>
  );
}
