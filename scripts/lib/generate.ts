import crypto from "node:crypto";
import { z } from "zod";
import {
  CREDITS_PER_COURSE,
  COURSE_CATEGORIES,
  COURSES_PER_TERM,
  SESSIONS,
  TERMS_PER_YEAR,
  TOTAL_TERMS,
  WEEKS_PER_COURSE,
  type Course,
  type CourseSummary,
  type Program,
  type Question,
  type School,
} from "../../src/lib/content/schema";
import { DEFAULT_MODEL, generateStructured } from "../../src/lib/llm";
import { validateProgram } from "./validate";

export type Effort = "low" | "medium" | "high" | "xhigh" | "max";
export type GenOptions = { model?: string; effort?: Effort; log?: (msg: string) => void };

const usage = { input: 0, output: 0, calls: 0 };
export const usageTotals = () => ({ ...usage });

async function call<S extends z.ZodType>(opts: Parameters<typeof generateStructured<S>>[0]) {
  const result = await generateStructured(opts);
  usage.calls++;
  usage.input += result.usage.input_tokens + (result.usage.cache_read_input_tokens ?? 0) + (result.usage.cache_creation_input_tokens ?? 0);
  usage.output += result.usage.output_tokens;
  return result;
}

// ---------------------------------------------------------------------------
// Model-facing schemas. These avoid validation keywords (patterns, ranges) so
// they translate cleanly to structured-output JSON Schema; the strict schemas
// in src/lib/content/schema.ts validate the assembled result afterwards.
// ---------------------------------------------------------------------------

const LlmCourseSummary = z.object({
  code: z.string().describe('Subject prefix + 3-digit number, e.g. "NUR 210"'),
  title: z.string(),
  category: z.enum(COURSE_CATEGORIES),
  description: z.string().describe("A 45-70 word catalog description"),
  prerequisites: z.array(z.string()).describe("Course codes that must be completed in an earlier term"),
});

export const LlmPlan = z.object({
  slug: z.string().describe('URL slug, e.g. "bs-nursing" or "ba-history"'),
  title: z.string().describe('Full degree title, e.g. "Bachelor of Science in Nursing"'),
  degree: z.string().describe('Abbreviation, e.g. "B.S." or "B.A."'),
  major: z.string(),
  school: z.string().describe("Slug of an existing school, or of newSchool"),
  newSchool: z
    .object({ slug: z.string(), name: z.string(), description: z.string() })
    .nullable()
    .describe("Only if no existing school fits; otherwise null"),
  tagline: z.string().describe("One sentence, under 20 words"),
  overview: z.string().describe("Two paragraphs separated by a blank line"),
  outcomes: z.array(z.string()).describe("Six program learning outcomes"),
  careers: z.array(z.object({ title: z.string(), description: z.string() })).describe("Four career paths"),
  newSubjects: z.array(z.object({ prefix: z.string(), name: z.string() })).describe("Any subject prefixes not already in use"),
  newCourses: z.array(LlmCourseSummary).describe("Every course in the plan that is not already in the catalog"),
  terms: z
    .array(z.object({ index: z.number(), courses: z.array(z.string()) }))
    .describe(`Exactly ${TOTAL_TERMS} terms in order, each with exactly ${COURSES_PER_TERM} course codes`),
});

export const LlmSyllabus = z.object({
  outcomes: z.array(z.string()).describe("5-6 measurable course learning outcomes"),
  weeks: z
    .array(
      z.object({
        number: z.number(),
        title: z.string(),
        overview: z.string().describe("Two or three sentences"),
        objectives: z.array(z.string()).describe("3-4 learning objectives for the week"),
      }),
    )
    .describe(`Exactly ${WEEKS_PER_COURSE} weeks`),
});

const LlmQuestion = z.object({
  prompt: z.string(),
  choices: z.array(z.string()).describe("Exactly four choices, without letter prefixes"),
  answerIndex: z.number().describe("Zero-based index of the correct choice"),
  explanation: z.string().describe("One or two sentences explaining the correct answer"),
});

export const LlmWeek = z.object({
  lesson: z.string().describe("The complete lesson in Markdown"),
  keyTerms: z.array(z.object({ term: z.string(), definition: z.string() })).describe("4-6 key terms"),
  quiz: z.array(LlmQuestion).describe("Exactly five questions"),
  assignment: z.object({
    title: z.string(),
    prompt: z.string().describe("Markdown instructions for the written assignment"),
    rubric: z.array(z.string()).describe("Four grading criteria"),
    minWords: z.number(),
  }),
});

export const LlmExam = z.object({ questions: z.array(LlmQuestion).describe("Exactly fifteen questions") });

// ---------------------------------------------------------------------------

const STRUCTURE = `AIU degree structure (required):
- A bachelor's degree takes 4 years. Each year has ${TERMS_PER_YEAR} eight-week terms, in order: ${SESSIONS.join(", ")}.
- That is ${TOTAL_TERMS} terms. Students take exactly ${COURSES_PER_TERM} courses per term, so a degree has ${TOTAL_TERMS * COURSES_PER_TERM} courses.
- Every course is ${CREDITS_PER_COURSE} credit hours (${TOTAL_TERMS * COURSES_PER_TERM * CREDITS_PER_COURSE} total).
- Course numbers reflect level: 100-level in year 1, 200-level mostly in year 2, 300-level in year 3, 400-level in year 4.
- A prerequisite must be scheduled in an EARLIER term than the course that requires it (never the same term).
- Balance: about 12-15 general-education courses spread across all four years (front-loaded), a coherent major core, 4-6 major electives in years 3-4, and 1-2 capstone courses in the final terms.
- The first term pairs AIU 101 (the first-year seminar, if available in the catalog) with an introductory course in the major.`;

const PLAN_SYSTEM = `You are the curriculum committee of Artificial Intelligence University (AIU), an online university whose curricula are written by AI. You design complete, realistic, rigorous undergraduate degree programs comparable to those at well-regarded universities, sequenced so that each course builds on the ones before it.

${STRUCTURE}

Reuse existing catalog courses whenever they fit, especially general-education courses, by using their exact codes. Every course in the plan that is not in the catalog must be defined in newCourses, with a code that is not already used in the catalog. Use existing subject prefixes where they fit; declare any new prefix in newSubjects.`;

export async function generateDegreePlan(
  request: { title: string; notes?: string },
  ctx: { catalog: CourseSummary[]; schools: School[]; subjects: Record<string, string>; existingSlugs: string[] },
  opts: GenOptions = {},
) {
  const log = opts.log ?? console.log;
  const catalogText = ctx.catalog
    .slice()
    .sort((a, b) => a.code.localeCompare(b.code, "en", { numeric: true }))
    .map((c) => `${c.code} | ${c.title} | ${c.category} | prereqs: ${c.prerequisites.join(", ") || "none"}`)
    .join("\n");

  const basePrompt = `Design this degree program: ${request.title}
${request.notes ? `\nAdditional guidance from the provost:\n${request.notes}\n` : ""}
Existing schools (slug: name):
${ctx.schools.map((s) => `${s.slug}: ${s.name}`).join("\n")}

Subject prefixes in use:
${Object.entries(ctx.subjects).map(([k, v]) => `${k}: ${v}`).join("\n")}

Existing course catalog (code | title | category | prerequisites):
${catalogText}

Slugs already in use (choose a different one): ${ctx.existingSlugs.join(", ") || "none"}`;

  let feedback = "";
  for (let attempt = 1; attempt <= 3; attempt++) {
    log(`  Drafting degree plan (attempt ${attempt})…`);
    const { data, model } = await call({
      schema: LlmPlan,
      system: PLAN_SYSTEM,
      prompt: basePrompt + feedback,
      model: opts.model,
      effort: opts.effort ?? "high",
    });

    const newCourses: CourseSummary[] = data.newCourses.map((c) => ({
      ...c,
      code: c.code.trim().toUpperCase().replace(/\s+/, " "),
      credits: CREDITS_PER_COURSE,
      prerequisites: c.prerequisites.map((p) => p.trim().toUpperCase()),
    }));
    const catalog = new Map(ctx.catalog.map((c) => [c.code, c]));
    const collisions = newCourses.filter((c) => catalog.has(c.code)).map((c) => c.code);
    for (const c of newCourses) if (!catalog.has(c.code)) catalog.set(c.code, c);

    const program: Program = {
      slug: data.slug,
      title: data.title,
      degree: data.degree,
      major: data.major,
      school: data.newSchool?.slug ?? data.school,
      tagline: data.tagline,
      overview: data.overview,
      outcomes: data.outcomes,
      careers: data.careers,
      terms: data.terms.map((t, i) => ({
        index: i + 1,
        year: Math.floor(i / TERMS_PER_YEAR) + 1,
        session: SESSIONS[i % TERMS_PER_YEAR],
        courses: t.courses.map((c) => c.trim().toUpperCase()),
      })),
      generation: { model, generatedAt: new Date().toISOString() },
    };

    const errors = validateProgram(program, catalog);
    if (collisions.length) errors.push(`These new course codes already exist in the catalog; reuse them or pick new codes: ${collisions.join(", ")}.`);
    if (ctx.existingSlugs.includes(program.slug)) errors.push(`The slug "${program.slug}" is already in use.`);
    if (!data.newSchool && !ctx.schools.some((s) => s.slug === program.school)) errors.push(`Unknown school "${program.school}".`);
    const knownPrefixes = new Set([...Object.keys(ctx.subjects), ...data.newSubjects.map((s) => s.prefix)]);
    for (const c of newCourses) {
      const prefix = c.code.split(" ")[0];
      if (!knownPrefixes.has(prefix)) errors.push(`Prefix ${prefix} (${c.code}) must be declared in newSubjects.`);
    }

    if (!errors.length) {
      const used = new Set(program.terms.flatMap((t) => t.courses));
      return {
        program,
        newCourses: newCourses.filter((c) => used.has(c.code)),
        newSchool: data.newSchool,
        newSubjects: data.newSubjects,
      };
    }
    log(`  Plan failed ${errors.length} check(s); revising.`);
    for (const e of errors.slice(0, 8)) log(`    - ${e}`);
    feedback = `\n\nA previous draft of this plan was rejected by the registrar for these problems. Produce a corrected, complete plan:\n${errors.map((e) => `- ${e}`).join("\n")}`;
  }
  throw new Error("Could not produce a valid degree plan after 3 attempts.");
}

// ---------------------------------------------------------------------------

const COURSE_SYSTEM = `You are a professor at Artificial Intelligence University (AIU) writing the materials for an online, self-paced, eight-week undergraduate course. Students learn ONLY from what you write, so lessons must genuinely teach the material: explain ideas from the ground up, show worked examples, and anticipate misunderstandings. Write in clear, warm, academically rigorous prose at the level of a strong university course.

Rules:
- Use Markdown: ## and ### headings, short paragraphs, lists, tables, and fenced code blocks or LaTeX-free plain math where useful. Do not start with an H1; the page already shows the week title.
- Do not invent citations, URLs, quotations, or precise statistics. When referring to research, describe well-established findings in general terms.
- Assessments must test understanding and application, not trivia. Question prompts may use Markdown; put any code in a fenced block. Multiple-choice distractors should be plausible. Vary which choice is correct.
- Assignments must be completable as a written response (no file uploads, no external accounts).`;

function courseContext(summary: CourseSummary, programTitles: string[]) {
  return `Course: ${summary.code} ${summary.title} (${summary.credits} credits, ${summary.category})
Description: ${summary.description}
Prerequisites: ${summary.prerequisites.join(", ") || "none"}
Required in: ${programTitles.join("; ") || "general catalog"}`;
}

export async function generateCourseContent(
  summary: CourseSummary,
  ctx: { programTitles: string[]; prerequisiteTitles: string[] },
  opts: GenOptions & { concurrency?: number } = {},
): Promise<Course> {
  const log = opts.log ?? console.log;
  const context = courseContext(summary, ctx.programTitles) + (ctx.prerequisiteTitles.length ? `\nStudents have completed: ${ctx.prerequisiteTitles.join("; ")}` : "");

  log(`  ${summary.code}: syllabus`);
  const { data: syllabus, model } = await call({
    schema: LlmSyllabus,
    system: COURSE_SYSTEM,
    prompt: `${context}\n\nWrite the syllabus: course learning outcomes and an eight-week schedule that progresses logically from foundations to application. Week 8 should synthesize the course.`,
    model: opts.model,
    effort: opts.effort ?? "medium",
    maxTokens: 16000,
  });
  if (syllabus.weeks.length !== WEEKS_PER_COURSE) throw new Error(`${summary.code}: syllabus has ${syllabus.weeks.length} weeks`);

  const outline = syllabus.weeks.map((w) => `Week ${w.number}: ${w.title} — ${w.overview}`).join("\n");
  const weeks = await mapLimit(syllabus.weeks, opts.concurrency ?? 4, async (w, i) => {
    const number = i + 1;
    log(`  ${summary.code}: week ${number}`);
    const { data } = await call({
      schema: LlmWeek,
      system: COURSE_SYSTEM,
      prompt: `${context}\n\nCourse schedule:\n${outline}\n\nWrite the complete materials for Week ${number}: ${w.title}
Overview: ${w.overview}
Objectives:\n${w.objectives.map((o) => `- ${o}`).join("\n")}

Requirements:
- lesson: 1,800-2,800 words. Open by connecting to what students already know${number > 1 ? " from earlier weeks" : ""}, teach each objective in its own section with concrete examples, include at least one extended worked example or case, a "Common misconceptions" section, and close with a short summary.
- keyTerms: 4-6 terms introduced this week.
- quiz: exactly 5 multiple-choice questions with 4 choices each, covering the objectives.
- assignment: an applied written task of 250-500 words that asks students to use this week's ideas; set minWords to 250 and give a 4-point rubric.`,
      model: opts.model,
      effort: opts.effort ?? "medium",
    });
    return {
      number,
      title: w.title,
      overview: w.overview,
      objectives: w.objectives,
      lesson: data.lesson,
      keyTerms: data.keyTerms,
      quiz: data.quiz.map(shuffleChoices),
      assignment: { ...data.assignment, minWords: Math.round(Math.max(100, Math.min(600, data.assignment.minWords))) },
    };
  });

  log(`  ${summary.code}: final exam`);
  const { data: exam } = await call({
    schema: LlmExam,
    system: COURSE_SYSTEM,
    prompt: `${context}\n\nHere are the eight weekly lessons students studied:\n\n${weeks
      .map((w) => `=== Week ${w.number}: ${w.title} ===\n${w.lesson}`)
      .join("\n\n")}\n\nWrite a cumulative final exam of exactly 15 multiple-choice questions (4 choices each), with roughly two questions per week and several that integrate ideas across weeks. Do not reuse the weekly quiz questions.`,
    model: opts.model,
    effort: opts.effort ?? "medium",
  });

  return {
    ...summary,
    status: "published",
    outcomes: syllabus.outcomes,
    weeks,
    finalExam: exam.questions.map(shuffleChoices),
    generation: { model, generatedAt: new Date().toISOString() },
  };
}

/** Models favor early answer positions; shuffle deterministically so answers are evenly spread. */
export function shuffleChoices(q: Question): Question {
  const seed = crypto.createHash("sha256").update(q.prompt).digest();
  const order = q.choices.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = seed[i % seed.length] % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return {
    ...q,
    choices: order.map((i) => q.choices[i]),
    answerIndex: order.indexOf(q.answerIndex),
  };
}

export async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        results[i] = await fn(items[i], i);
      }
    }),
  );
  return results;
}

export { DEFAULT_MODEL };
