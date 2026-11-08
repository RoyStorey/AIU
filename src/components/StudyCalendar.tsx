"use client";

import Link from "next/link";
import { useMemo, useState, useTransition } from "react";
import { choosePace } from "@/app/actions";
import { PACES, dayKey, type PaceId } from "@/lib/pace";
import type { Plans } from "@/lib/dashboard";

type CourseInfo = { id: string; code: string; title: string; completed: number; open: number };

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const longDay = (key: string) =>
  new Date(`${key}T12:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
const shortDay = (key: string, today: Date) => {
  const d = new Date(`${key}T12:00:00`);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", ...(d.getFullYear() !== today.getFullYear() ? { year: "numeric" } : {}) });
};

/**
 * A month calendar of the student's lessons to come: each pace sets lessons on
 * its own study days, the active courses taking turns, and marks the day each
 * course would be finished. Switching pace previews it and keeps it as the
 * student's pace.
 */
export function StudyCalendar({ courses, plans, chosen }: { courses: CourseInfo[]; plans: Plans; chosen: PaceId }) {
  const [pace, setPace] = useState<PaceId>(chosen);
  const [offset, setOffset] = useState(0);
  const [, startTransition] = useTransition();
  const today = useMemo(() => new Date(), []);
  const plan = plans[pace];

  const byDay = useMemo(() => {
    const map = new Map<string, { course: number; lesson: number }[]>();
    for (const s of plan.sessions) map.set(s.day, [...(map.get(s.day) ?? []), s]);
    return map;
  }, [plan]);
  const finishes = useMemo(() => {
    const map = new Map<string, number[]>();
    plan.finish.forEach((day, c) => { if (day) map.set(day, [...(map.get(day) ?? []), c]); });
    return map;
  }, [plan]);

  const last = plan.finish.filter(Boolean).sort().at(-1) ?? null;
  const lastMonth = last ? (() => {
    const d = new Date(`${last}T12:00:00`);
    return (d.getFullYear() - today.getFullYear()) * 12 + d.getMonth() - today.getMonth();
  })() : 0;

  const first = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  const cells: (Date | null)[] = [];
  for (let i = 0; i < first.getDay(); i++) cells.push(null);
  for (let d = 1; d <= new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate(); d++) {
    cells.push(new Date(first.getFullYear(), first.getMonth(), d));
  }
  const todayKey = dayKey(today);

  const choose = (id: PaceId) => {
    setPace(id);
    startTransition(() => { void choosePace(id, "/"); });
  };

  return (
    <section className="cal" aria-labelledby="cal-head">
      <div className="cal-top">
        <h2 id="cal-head" className="dash-h">Study calendar</h2>
        <div className="cal-paces" role="radiogroup" aria-label="Pace">
          {PACES.map((p) => (
            <button key={p.id} type="button" role="radio" aria-checked={pace === p.id}
              className={pace === p.id ? "is-on" : undefined} onClick={() => choose(p.id)} title={p.rhythm}>
              {p.name}
            </button>
          ))}
        </div>
      </div>
      <p className="cal-rhythm muted">
        {PACES.find((p) => p.id === pace)!.rhythm}.
        {last && <> At this pace you finish {courses.length === 1 ? "your course" : `all ${courses.length} courses`} by <strong>{shortDay(last, today)}</strong>.</>}
      </p>

      <div className="cal-month">
        <button type="button" className="cal-nav" onClick={() => setOffset((o) => o - 1)} disabled={offset === 0} aria-label="Previous month">‹</button>
        <h3>{first.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h3>
        <button type="button" className="cal-nav" onClick={() => setOffset((o) => o + 1)} disabled={offset >= Math.max(lastMonth, 0)} aria-label="Next month">›</button>
      </div>

      <div className="cal-grid" role="grid">
        {WEEKDAYS.map((w, i) => <div key={i} className="cal-wd" aria-hidden="true">{w}</div>)}
        {cells.map((date, i) => {
          if (!date) return <div key={`e${i}`} className="cal-day is-empty" />;
          const key = dayKey(date);
          const sessions = byDay.get(key) ?? [];
          const done = finishes.get(key) ?? [];
          const label = [
            longDay(key),
            ...sessions.map((s) => `${courses[s.course].code}, Lesson ${s.lesson}`),
            ...done.map((c) => `${courses[c].code} finished`),
          ].join(" · ");
          const cls = ["cal-day", key === todayKey && "is-today", key < todayKey && "is-past", done.length > 0 && "is-finish"].filter(Boolean).join(" ");
          return (
            <div key={key} className={cls} title={label} role="gridcell" aria-label={label}>
              <span className="cal-num">{date.getDate()}</span>
              {sessions.length > 0 && (
                <span className="cal-dots">
                  {sessions.map((s, j) => <i key={j} className={`cal-dot c${s.course % 5}`} />)}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <ul className="cal-legend">
        {courses.map((c, i) => (
          <li key={c.id}>
            <i className={`cal-dot c${i % 5}`} aria-hidden="true" />
            <Link href={`/courses/${c.id}`}>{c.code} {c.title}</Link>
            <span className="muted">
              {c.completed} of {c.open} lessons{plan.finish[i] && <> · finishes <strong>{shortDay(plan.finish[i]!, today)}</strong></>}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
