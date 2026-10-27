import { SESSIONS } from "./content/schema";

const DAY = 24 * 60 * 60 * 1000;

function nthMonday(year: number, month: number, n: number) {
  const first = new Date(Date.UTC(year, month, 1));
  const offset = (8 - first.getUTCDay()) % 7; // days until the first Monday
  return new Date(Date.UTC(year, month, 1 + offset + (n - 1) * 7));
}

function lastMonday(year: number, month: number) {
  const last = new Date(Date.UTC(year, month + 1, 0));
  return new Date(last.getTime() - ((last.getUTCDay() + 6) % 7) * DAY);
}

/** The recommended schedule for an academic year that begins in August of `startYear`. */
export function academicYear(startYear: number) {
  const fall = lastMonday(startYear, 7);
  const spring = nthMonday(startYear + 1, 0, 2);
  const starts = [
    fall,
    new Date(fall.getTime() + 8 * 7 * DAY),
    spring,
    new Date(spring.getTime() + 9 * 7 * DAY), // one-week spring break
    new Date(spring.getTime() + 18 * 7 * DAY),
  ];
  return SESSIONS.map((session, i) => ({
    session,
    start: starts[i],
    end: new Date(starts[i].getTime() + (8 * 7 - 1) * DAY),
  }));
}

export function currentAcademicYearStart(now = new Date()) {
  const y = now.getUTCFullYear();
  return now >= lastMonday(y, 7) ? y : y - 1;
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
