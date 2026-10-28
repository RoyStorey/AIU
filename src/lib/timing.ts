import type { Lesson, Page } from "@/lib/schema";

/**
 * How long study takes. Reading times assume careful reading of dense prose;
 * a page may set its own minutes when it asks for more than reading, such as
 * working through primary sources.
 */
export const WORDS_PER_MINUTE = 175;
export const MINUTES_PER_QUESTION = 1.5;
export const EXERCISE_MINUTES = 30;

const words = (text: string) => text.split(/\s+/).filter(Boolean).length;
const toFive = (minutes: number) => Math.max(5, Math.round(minutes / 5) * 5);

export function pageMinutes(page: Page): number {
  return page.minutes ?? Math.max(3, Math.round(words(page.body) / WORDS_PER_MINUTE));
}

export function checkMinutes(lesson: Lesson): number {
  return toFive(lesson.questions.length * MINUTES_PER_QUESTION);
}

export function exerciseMinutes(lesson: Lesson): number {
  return lesson.reflection ? EXERCISE_MINUTES : 0;
}

export function lessonMinutes(lesson: Lesson): number {
  return lesson.pages.reduce((sum, p) => sum + pageMinutes(p), 0) + checkMinutes(lesson) + exerciseMinutes(lesson);
}

export function formatMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (!h) return `${m} min`;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}
