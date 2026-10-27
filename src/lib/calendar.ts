import { SESSIONS, WEEKS_PER_COURSE, type Session } from "./content/schema";

const DAY = 24 * 60 * 60 * 1000;

/** Days after a term begins during which new students may still join that cohort. */
export const LATE_REGISTRATION_DAYS = 7;

export type CalendarTerm = {
  session: Session;
  /** Calendar year the term starts in, e.g. 2027 for Spring I 2027. */
  year: number;
  start: Date;
  end: Date;
};

function nthMonday(year: number, month: number, n: number) {
  const first = new Date(Date.UTC(year, month, 1));
  const offset = (8 - first.getUTCDay()) % 7; // days until the first Monday
  return new Date(Date.UTC(year, month, 1 + offset + (n - 1) * 7));
}

function lastMonday(year: number, month: number) {
  const last = new Date(Date.UTC(year, month + 1, 0));
  return new Date(last.getTime() - ((last.getUTCDay() + 6) % 7) * DAY);
}

const addDays = (d: Date, days: number) => new Date(d.getTime() + days * DAY);

/** The five terms of the academic year that begins in August of `startYear`. */
export function academicYear(startYear: number): CalendarTerm[] {
  const fall = lastMonday(startYear, 7);
  const spring = nthMonday(startYear + 1, 0, 2);
  const starts = [
    fall,
    addDays(fall, 8 * 7),
    spring,
    addDays(spring, 9 * 7), // one-week spring recess
    addDays(spring, 18 * 7),
  ];
  return SESSIONS.map((session, i) => ({
    session,
    year: starts[i].getUTCFullYear(),
    start: starts[i],
    end: addDays(starts[i], WEEKS_PER_COURSE * 7 - 1),
  }));
}

/** "Today", which can be overridden in development with AIU_TODAY=YYYY-MM-DD to test the calendar. */
export function today() {
  const override = process.env.NODE_ENV !== "production" ? process.env.AIU_TODAY : undefined;
  return override ? new Date(`${override}T12:00:00Z`) : new Date();
}

export function currentAcademicYearStart(now = today()) {
  const y = now.getUTCFullYear();
  return now >= lastMonday(y, 7) ? y : y - 1;
}

/** Consecutive calendar terms, beginning with the first that starts on or after `from`. */
export function termsFrom(from: Date, count: number): CalendarTerm[] {
  const out: CalendarTerm[] = [];
  for (let y = from.getUTCFullYear() - 1; out.length < count; y++) {
    for (const t of academicYear(y)) if (t.start >= startOfDay(from) && out.length < count) out.push(t);
  }
  return out;
}

const startOfDay = (d: Date) => new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));

/** Cohorts a new student can join: the current term while late registration is open, then upcoming terms. */
export function openCohorts(now = today(), count = 3) {
  return termsFrom(addDays(now, -LATE_REGISTRATION_DAYS), count);
}

/** The calendar terms a cohort moves through, one per term of its program. */
export function cohortSchedule(cohortStart: Date, terms: number) {
  return termsFrom(cohortStart, terms);
}

export const termName = (t: Pick<CalendarTerm, "session" | "year">) => `${t.session} ${t.year}`;

export const weekStart = (term: Pick<CalendarTerm, "start">, week: number) => addDays(term.start, (week - 1) * 7);

export const toDateKey = (d: Date) => d.toISOString().slice(0, 10);
export const fromDateKey = (key: string) => new Date(`${key}T00:00:00Z`);

export const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export const formatShortDate = (d: Date) =>
  d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" });

export function daysUntil(d: Date, now = today()) {
  return Math.ceil((startOfDay(d).getTime() - startOfDay(now).getTime()) / DAY);
}
