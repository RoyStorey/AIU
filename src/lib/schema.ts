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

/** One page of a lesson's lecture. Minutes default to an estimate from its length. */
export const Page = z.object({
  title: z.string(),
  body: z.string(),
  minutes: z.number().int().optional(),
});

export const Lesson = z.object({
  title: z.string(),
  summary: z.string(),
  pages: z.array(Page).min(1),
  readings: z.array(Resource),
  media: z.array(Resource),
  questions: z.array(Question).min(1),
  reflection: z.string().optional(),
});

/**
 * A lesson planned but not yet written: the titles of its pages, what each will
 * cover, and how long each should take. A course may carry these after its
 * written lessons, so students can see the whole course before it is finished.
 */
export const PlannedLesson = z.object({
  title: z.string(),
  summary: z.string(),
  pages: z.array(z.object({
    title: z.string(),
    summary: z.string(),
    minutes: z.number().int(),
  })).min(1),
  readings: z.array(Resource).optional(),
});

export const LibrarySection = z.object({
  heading: z.string(),
  items: z.array(Resource),
});

export const CourseContent = z.object({
  overview: z.string(),
  objectives: z.array(z.string()),
  lessons: z.array(Lesson).min(1),
  forthcoming: z.array(PlannedLesson).optional(),
  library: z.array(LibrarySection),
});

export type Resource = z.infer<typeof Resource>;
export type Question = z.infer<typeof Question>;
export type Page = z.infer<typeof Page>;
export type Lesson = z.infer<typeof Lesson>;
export type PlannedLesson = z.infer<typeof PlannedLesson>;
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

/** Length bounds for a written exercise, in words. */
export const ESSAY_LIMITS = { min: 75, max: 3000 };

/** A tutor's report on a written exercise. */
export const MARKS = ["Distinction", "Merit", "Pass", "Revise"] as const;

export const Feedback = z.object({
  mark: z.enum(MARKS).describe("Distinction: excellent; Merit: good; Pass: adequate; Revise: does not yet meet the standard."),
  summary: z.string().describe("Two or three sentences assessing the essay as a whole."),
  criteria: z.array(z.object({
    name: z.enum(["Argument", "Evidence", "Understanding", "Expression"]),
    score: z.number().int().min(1).max(4).describe("1 weak, 2 developing, 3 good, 4 excellent."),
    comment: z.string(),
  })),
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  annotations: z.array(z.object({
    quote: z.string().describe("A short phrase copied exactly from the student's essay."),
    comment: z.string(),
  })).describe("Two to five marginal notes on specific passages."),
  nextStep: z.string().describe("One question or task to take the student's thinking further."),
});
export type Feedback = z.infer<typeof Feedback>;

export const STAGES: Record<number, string> = {
  1: "Foundations",
  2: "Intermediate Studies",
  3: "Advanced Studies",
  4: "Seminar",
};

export function stageName(stage: number): string {
  return STAGES[stage] ?? `Continuing Studies ${toRoman(stage - 4)}`;
}
