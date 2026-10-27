"use client";

import type { Activity as ActivityT } from "@/lib/schema";
import { useStore, type ActivityResult } from "@/lib/store";
import { Quiz } from "./Quiz";
import { Essay } from "./Essay";
import { Timeline } from "./Timeline";
import { Flashcards } from "./Flashcards";
import { ChessPuzzle } from "./ChessPuzzle";

export type ActivityContext = { courseTitle: string; lessonTitle: string; keyIdeas: string[] };

export type ActivityProps = {
  activity: ActivityT;
  previous?: ActivityResult;
  context: ActivityContext;
  onResult: (result: Omit<ActivityResult, "at">, xp: number, reason: string) => void;
};

const META: Record<ActivityT["type"], { icon: string; label: string; bg: string }> = {
  quiz: { icon: "🎯", label: "Quick quiz", bg: "bg-sky-soft" },
  essay: { icon: "🪶", label: "Written homework", bg: "bg-bubblegum-soft" },
  timeline: { icon: "⏳", label: "Timeline challenge", bg: "bg-sun-soft" },
  flashcards: { icon: "🃏", label: "Flashcards", bg: "bg-mint-soft" },
  chess: { icon: "♞", label: "Chess puzzle", bg: "bg-grape-soft" },
};

export function ActivityCard({ activity, courseId, context }: { activity: ActivityT; courseId: string; context: ActivityContext }) {
  const previous = useStore((s) => s.progress[courseId]?.activities[activity.id]);
  const record = useStore((s) => s.recordActivity);
  const meta = META[activity.type];
  const props: ActivityProps = {
    activity,
    previous,
    context,
    onResult: (result, xp, reason) => record(courseId, activity.id, result, xp, reason),
  };

  return (
    <section className={`card relative p-5 sm:p-7 ${meta.bg}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl border-[3px] border-ink bg-card text-2xl shadow-pop-sm">
            {meta.icon}
          </span>
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-70">{meta.label}</div>
            <h3 className="text-xl font-black leading-tight">{activity.title}</h3>
          </div>
        </div>
        {previous && (
          <span className="sticker rotate-3 bg-mint">
            ✓ done · best {previous.score}
            {activity.type === "quiz" || activity.type === "timeline" ? "%" : ""}
          </span>
        )}
      </div>
      {activity.type === "quiz" && <Quiz {...props} />}
      {activity.type === "essay" && <Essay {...props} />}
      {activity.type === "timeline" && <Timeline {...props} />}
      {activity.type === "flashcards" && <Flashcards {...props} />}
      {activity.type === "chess" && <ChessPuzzle {...props} />}
    </section>
  );
}
