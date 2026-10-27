import { z } from "zod";
import { toRoman } from "@/lib/roman";

export { toRoman };

/**
 * The shape of every course, whether written by hand or prepared by the forge.
 * Authored content and generated content share one schema so the pages never
 * need to know where a course came from.
 */

export const ResourceKind = z.enum([
  "book",
  "edition",
  "article",
  "website",
  "video",
  "audio",
  "lecture",
]);

export const Resource = z.object({
  kind: ResourceKind,
  title: z.string(),
  author: z.string().optional(),
  publisher: z.string().optional(),
  year: z.string().optional(),
  url: z.string().optional(),
  note: z.string().optional(),
});

export const Question = z.object({
  prompt: z.string(),
  choices: z.array(z.string()).min(2),
  answer: z.number().int().min(0),
  explanation: z.string(),
});

export const Lesson = z.object({
  title: z.string(),
  summary: z.string(),
  lecture: z.string(),
  readings: z.array(Resource),
  media: z.array(Resource),
  questions: z.array(Question).min(1),
  reflection: z.string().optional(),
});

export const LibrarySection = z.object({
  heading: z.string(),
  items: z.array(Resource),
});

export const CourseContent = z.object({
  overview: z.string(),
  objectives: z.array(z.string()),
  lessons: z.array(Lesson).min(1),
  library: z.array(LibrarySection),
});

export type Resource = z.infer<typeof Resource>;
export type Question = z.infer<typeof Question>;
export type Lesson = z.infer<typeof Lesson>;
export type LibrarySection = z.infer<typeof LibrarySection>;
export type CourseContent = z.infer<typeof CourseContent>;

/** A course as it appears in a program of study, before its full content exists. */
export const CourseOutline = z.object({
  code: z.string(),
  title: z.string(),
  stage: z.number().int().min(1),
  summary: z.string(),
  texts: z.array(z.string()),
});
export type CourseOutline = z.infer<typeof CourseOutline>;

export const ConcentrationOutline = z.object({
  name: z.string(),
  description: z.string(),
  courses: z.array(CourseOutline),
});
export type ConcentrationOutline = z.infer<typeof ConcentrationOutline>;

export const STAGES: Record<number, string> = {
  1: "Foundations",
  2: "Intermediate Studies",
  3: "Advanced Studies",
  4: "Seminar",
};

export function stageName(stage: number): string {
  return STAGES[stage] ?? `Continuing Studies ${toRoman(stage - 4)}`;
}
