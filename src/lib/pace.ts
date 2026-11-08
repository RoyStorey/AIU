/**
 * Study paces. Not deadlines: a sense of how long a course takes at an
 * unhurried, a steady, or a determined rhythm, and when a student who keeps
 * it would finish.
 */
export type PaceId = "leisurely" | "steady" | "intensive";

/** `days` are the weekdays (0 = Sunday) on which a pace sets a lesson. */
export type Pace = { id: PaceId; name: string; perWeek: number; rhythm: string; days: number[] };

export const PACES: Pace[] = [
  { id: "leisurely", name: "Leisurely", perWeek: 1, rhythm: "A lesson every Saturday", days: [6] },
  { id: "steady", name: "Steady", perWeek: 2, rhythm: "Tuesdays and Saturdays", days: [2, 6] },
  { id: "intensive", name: "Intensive", perWeek: 5, rhythm: "A lesson each weekday", days: [1, 2, 3, 4, 5] },
];

export const DEFAULT_PACE: PaceId = "steady";

export function findPace(id: string | null | undefined): Pace {
  return PACES.find((p) => p.id === id) ?? PACES.find((p) => p.id === DEFAULT_PACE)!;
}

/** A day as YYYY-MM-DD in local time, the key the calendar uses. */
export function dayKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export type Session = { day: string; course: number; lesson: number };

/**
 * Sets each remaining lesson on a study day of the pace, taking the courses in
 * turn, starting today. Returns the sessions and each course's finishing day.
 */
export function schedule(courses: { remaining: number; nextLesson: number }[], pace: Pace, from = new Date()) {
  const left = courses.map((c) => c.remaining);
  const next = courses.map((c) => c.nextLesson);
  const finish: (string | null)[] = courses.map(() => null);
  const sessions: Session[] = [];
  const day = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  let turn = 0;
  for (let guard = 0; left.some((n) => n > 0) && guard < 1500; guard++, day.setDate(day.getDate() + 1)) {
    if (!pace.days.includes(day.getDay())) continue;
    while (left[turn % left.length] === 0) turn++;
    const c = turn % left.length;
    sessions.push({ day: dayKey(day), course: c, lesson: next[c]++ });
    if (--left[c] === 0) finish[c] = dayKey(day);
    turn++;
  }
  return { sessions, finish };
}

/** The day a student keeping this pace would finish `remaining` lessons of a single course. */
export function finishDate(remaining: number, pace: Pace, from = new Date()): Date {
  const { finish } = schedule([{ remaining, nextLesson: 1 }], pace, from);
  return finish[0] ? new Date(`${finish[0]}T12:00:00`) : from;
}

/** "Dec 4", or "Jan 9, 2027" when the year differs. */
export function formatDay(d: Date, today = new Date()): string {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...(d.getFullYear() !== today.getFullYear() ? { year: "numeric" } : {}),
  });
}

/** Roughly how many hours a week a pace asks ("about 4 hours"), given the course's average lesson length. */
export function hoursPerWeek(pace: Pace, averageLessonMinutes: number): string {
  const hours = (pace.perWeek * averageLessonMinutes) / 60;
  if (hours < 1.25) return "about an hour";
  return `about ${Math.round(hours)} hours`;
}
