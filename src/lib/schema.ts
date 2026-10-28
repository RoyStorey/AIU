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

/**
 * An editor's note on a claim in a lesson that is uncertain, disputed, or
 * known to be wrong: a quotation that is only reported, a date that sources
 * disagree on, a story that may be legend. Shown in the lesson's Comments &
 * Corrections section beside the reports students send in.
 */
export const Caveat = z.object({
  page: z.number().int().min(1).optional().describe("The page (counting from 1) the claim appears on, if one."),
  claim: z.string().describe("The claim, briefly quoted or paraphrased."),
  note: z.string().describe("What is uncertain about it, and what the evidence is."),
  kind: z.enum(["uncertain", "disputed", "corrected"]).describe("uncertain: not securely sourced; disputed: scholars disagree; corrected: an error that has been fixed."),
});

export const Lesson = z.object({
  title: z.string(),
  summary: z.string(),
  pages: z.array(Page).min(1),
  readings: z.array(Resource),
  media: z.array(Resource),
  questions: z.array(Question).min(1),
  reflection: z.string().optional(),
  caveats: z.array(Caveat).optional(),
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
export type Caveat = z.infer<typeof Caveat>;
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

/**
 * The capstone of a concentration: a substantial piece of work, set by the
 * faculty and marked by an examiner, through which a student who has completed
 * the program becomes a Master of it.
 */
export const Capstone = z.object({
  title: z.string().describe("The capstone's title, e.g. “A Critical Study in Poetry”."),
  summary: z.string().describe("One or two sentences saying what the student will make."),
  brief: z.string().describe("The assignment in full, in Markdown: what to produce, how to choose a subject, and how to go about it."),
  options: z.array(z.object({
    name: z.string(),
    description: z.string(),
  })).describe("Two or three forms the capstone may take, suited to the discipline."),
  requirements: z.array(z.string()).describe("Four to seven concrete requirements the submission must meet."),
  words: z.object({ min: z.number().int(), max: z.number().int() }),
  rubric: z.array(z.object({
    name: z.string(),
    description: z.string(),
  })).describe("Four or five criteria the examiner will use."),
});
export type Capstone = z.infer<typeof Capstone>;

export const ConcentrationOutline = z.object({
  name: z.string(),
  description: z.string(),
  courses: z.array(CourseOutline),
  capstone: Capstone.optional(),
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

/** Length bounds for any capstone, whatever its own brief asks, in words. */
export const CAPSTONE_LIMITS = { min: 1500, max: 15000 };

/** An examiner's report on a capstone. Any mark but Revise passes, and makes the student a Master. */
export const Assessment = z.object({
  mark: z.enum(MARKS).describe("Distinction: excellent; Merit: good; Pass: meets the standard of the concentration; Revise: does not yet meet it."),
  summary: z.string().describe("A paragraph assessing the work as a whole."),
  criteria: z.array(z.object({
    name: z.string().describe("The name of one of the brief's rubric criteria, exactly."),
    score: z.number().int().min(1).max(4).describe("1 weak, 2 developing, 3 good, 4 excellent."),
    comment: z.string(),
  })),
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
  annotations: z.array(z.object({
    quote: z.string().describe("A short phrase copied exactly from the submission."),
    comment: z.string(),
  })).describe("Three to six marginal notes on specific passages."),
  citation: z.string().describe("For a passing submission, one sentence a reader could see on the student's profile, saying what the work achieves. Empty if Revise."),
});
export type Assessment = z.infer<typeof Assessment>;

/** A model's first look at a correction a student has reported. */
export const Review = z.object({
  verdict: z.enum(["likely-error", "likely-correct", "uncertain"]).describe("likely-error: the report is probably right and the lesson wrong; likely-correct: the lesson is probably right; uncertain: the evidence is unclear."),
  explanation: z.string().describe("Two to four sentences giving the evidence, naming sources a reader could check."),
});
export type Review = z.infer<typeof Review>;
