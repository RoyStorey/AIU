import { z } from "zod";

/*
 * Schemas double as the structured-output contract for Claude, so every field
 * is required and unused fields are filled with empty strings/arrays. That keeps
 * the JSON schema flat (no unions/optionals), which structured outputs handle best.
 */

export const PALETTE = ["tomato", "sun", "mint", "sky", "grape", "bubblegum"] as const;
export type PaletteColor = (typeof PALETTE)[number];

export const LEVELS = ["Dabbler", "Devotee", "Deep Diver"] as const;
export const RESOURCE_KINDS = [
  "book", "article", "video", "podcast", "website", "museum", "audio", "film", "course", "primary-source",
] as const;
export const MEDIA_KINDS = ["image", "video", "audio", "wiki"] as const;
export const ACTIVITY_TYPES = ["quiz", "essay", "timeline", "flashcards", "chess"] as const;

// The SDK's zod helper downgrades enums to descriptions anyway, so validate them
// as strings and normalize afterwards (see normalize.ts) rather than failing a parse.
const oneOf = (values: readonly string[], note = "") =>
  z.string().describe(`One of: ${values.join(", ")}${note ? `. ${note}` : ""}`);

export const CourseOptionSchema = z.object({
  title: z.string().describe("Punchy, evocative course title"),
  tagline: z.string().describe("One playful sentence that sells the course"),
  emoji: z.string().describe("A single emoji"),
  vibe: z.string().describe("2-4 word flavor, e.g. 'detective story', 'hands-on workshop'"),
  level: oneOf(LEVELS),
  hook: z.string().describe("2-3 sentences: what you'll be able to do or see differently afterwards"),
  lessonCount: z.number().int().describe("Between 4 and 7"),
  hours: z.number().describe("Approximate total hours including homework"),
  color: oneOf(PALETTE),
});

export const TopicSchema = z.object({
  title: z.string().describe("Clean display name of the subject"),
  emoji: z.string(),
  blurb: z.string().describe("Two sentences of infectious enthusiasm about the subject"),
  options: z.array(CourseOptionSchema).describe("Exactly 6 distinct courses"),
});

export const ResourceSchema = z.object({
  kind: oneOf(RESOURCE_KINDS),
  title: z.string(),
  creator: z.string().describe("Author, director, host, or institution"),
  year: z.string().describe("Publication year or empty string"),
  url: z.string().describe("Exact URL taken from the research notes, or empty string"),
  isbn: z.string().describe("ISBN-13 for books if known from research, else empty string"),
  why: z.string().describe("One sentence on why this is worth your time"),
});

export const MediaSchema = z.object({
  kind: oneOf(MEDIA_KINDS),
  title: z.string(),
  caption: z.string(),
  query: z
    .string()
    .describe(
      "image: Wikimedia Commons search terms; audio: Commons audio search terms; wiki: exact English Wikipedia article title; video: YouTube search terms",
    ),
  url: z.string().describe("video/audio: exact URL from the research notes if one exists, else empty string"),
});

export const QuizQuestionSchema = z.object({
  q: z.string(),
  options: z.array(z.string()).describe("Exactly 4 options"),
  answer: z.number().int().describe("Index of the correct option"),
  explain: z.string(),
});

export const TimelineEventSchema = z.object({
  label: z.string(),
  year: z.number().describe("Negative for BCE"),
  detail: z.string(),
});

export const FlashcardSchema = z.object({ front: z.string(), back: z.string() });

export const ActivitySchema = z.object({
  type: oneOf(ACTIVITY_TYPES),
  title: z.string(),
  prompt: z.string().describe("Instructions for the learner"),
  questions: z.array(QuizQuestionSchema).describe("quiz only, 3-5 questions; else empty"),
  minWords: z.number().int().describe("essay only (100-400); else 0"),
  rubric: z.array(z.string()).describe("essay only: 3-4 criteria; else empty"),
  events: z.array(TimelineEventSchema).describe("timeline only: 5-7 events with distinct years; else empty"),
  cards: z.array(FlashcardSchema).describe("flashcards only: 6-10 cards; else empty"),
  chessTheme: z
    .string()
    .describe(
      "chess only: a Lichess puzzle theme such as fork, pin, skewer, mateIn1, mateIn2, backRankMate, discoveredAttack, sacrifice, endgame, opening; else empty",
    ),
});

export const LessonSchema = z.object({
  title: z.string(),
  hook: z.string().describe("A one-line teaser in the guide's voice"),
  body: z.string().describe("The lesson itself in Markdown, 450-800 words, vivid and concrete, with ## subheadings"),
  keyIdeas: z.array(z.string()).describe("3-5 takeaways"),
  media: z.array(MediaSchema).describe("3-5 media items, mixing kinds"),
  resources: z.array(ResourceSchema).describe("2-4 resources for this lesson"),
  activities: z.array(ActivitySchema).describe("1-2 activities"),
  funFact: z.string().describe("A delightful, true, surprising fact"),
});

export const CourseSchema = z.object({
  title: z.string(),
  tagline: z.string(),
  emoji: z.string(),
  overview: z.string().describe("2 short paragraphs in Markdown"),
  guideName: z.string().describe("A whimsical guide persona's name, e.g. 'Brother Anselm, Retired Gargoyle'"),
  guideIntro: z.string().describe("The guide's two-sentence welcome, in character"),
  lessons: z.array(LessonSchema),
  library: z.array(ResourceSchema).describe("6-10 essential resources for the whole course; include at least 3 books"),
  capstone: z.string().describe("A final project idea that pulls the course together"),
});

export const GradeSchema = z.object({
  score: z.number().int().describe("0-100"),
  stars: z.number().int().describe("1-3"),
  headline: z.string().describe("A short, warm, specific verdict"),
  praise: z.string(),
  growth: z.string().describe("One concrete way to deepen the answer"),
  followUp: z.string().describe("A provocative follow-up question"),
});

export type CourseOptionData = z.infer<typeof CourseOptionSchema>;
export type TopicData = z.infer<typeof TopicSchema>;
export type ResourceData = z.infer<typeof ResourceSchema>;
export type MediaData = z.infer<typeof MediaSchema>;
export type ActivityData = z.infer<typeof ActivitySchema>;
export type LessonData = z.infer<typeof LessonSchema>;
export type CourseData = z.infer<typeof CourseSchema>;
export type GradeData = z.infer<typeof GradeSchema>;

/* Stored shapes: the generated data plus ids and verification flags. */

export type CourseOption = Omit<CourseOptionData, "level" | "color"> & {
  id: string;
  level: (typeof LEVELS)[number];
  color: PaletteColor;
  courseId?: string;
};

export type Topic = Omit<TopicData, "options"> & {
  id: string;
  query: string;
  createdAt: number;
  options: CourseOption[];
  sample?: boolean;
};

export type Resource = Omit<ResourceData, "kind"> & { kind: (typeof RESOURCE_KINDS)[number]; verified: boolean; href: string };
export type Media = Omit<MediaData, "kind"> & { kind: (typeof MEDIA_KINDS)[number]; verified: boolean };
export type Activity = Omit<ActivityData, "type"> & { id: string; type: (typeof ACTIVITY_TYPES)[number] };
export type Lesson = Omit<LessonData, "resources" | "media" | "activities"> & {
  id: string;
  media: Media[];
  resources: Resource[];
  activities: Activity[];
};

export type Course = Omit<CourseData, "lessons" | "library"> & {
  id: string;
  topicId: string;
  optionId: string;
  color: PaletteColor;
  createdAt: number;
  lessons: Lesson[];
  library: Resource[];
  sourcesChecked: number;
};
