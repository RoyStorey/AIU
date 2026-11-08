/**
 * Study paces. Not deadlines: a sense of how long a course takes at an
 * unhurried, a steady, or a determined rhythm, and when a student who keeps
 * it would finish.
 */
export type PaceId = "leisurely" | "steady" | "intensive";

export type Pace = { id: PaceId; name: string; perWeek: number; rhythm: string };

export const PACES: Pace[] = [
  { id: "leisurely", name: "Leisurely", perWeek: 1, rhythm: "A lesson a week" },
  { id: "steady", name: "Steady", perWeek: 2, rhythm: "Two lessons a week" },
  { id: "intensive", name: "Intensive", perWeek: 5, rhythm: "A lesson each weekday" },
];

export const DEFAULT_PACE: PaceId = "steady";

export function findPace(id: string | null | undefined): Pace {
  return PACES.find((p) => p.id === id) ?? PACES.find((p) => p.id === DEFAULT_PACE)!;
}

/** The day a student keeping this pace would finish `remaining` lessons, counting from `from`. */
export function finishDate(remaining: number, pace: Pace, from = new Date()): Date {
  const days = Math.ceil((remaining / pace.perWeek) * 7);
  const d = new Date(from);
  d.setDate(d.getDate() + Math.max(0, days));
  return d;
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
