import crypto from "node:crypto";
import { z } from "zod";
import {
  COURSE_CATEGORIES,
  COURSES_PER_TERM,
  RESOURCE_KINDS,
  TERMS_PER_YEAR,
  WEEKS_PER_COURSE,
  type Course,
  type CourseSummary,
  type Program,
  type Question,
  type Resource,
  type School,
} from "../../src/lib/content/schema";
import { DEFAULT_MODEL, generateStructured } from "../../src/lib/llm";
import { validateProgram } from "./validate";
import { verifyResources } from "./verify";

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
  code: z.string().describe('Subject prefix + 3-digit number, e.g. "HIS 210"'),
  title: z.string(),
  category: z.enum(COURSE_CATEGORIES),
  description: z.string().describe("A 45-70 word catalog description"),
  prerequisites: z.array(z.string()).describe("Course codes that must be completed in an earlier term"),
});

export const LlmPlan = z.object({
  slug: z.string().describe('URL slug for the discipline, e.g. "history" or "nursing"'),
  title: z.string().describe('The discipline, e.g. "History"'),
  credential: z.string().describe('e.g. "Certificate in History"'),
  school: z.string().describe("Slug of an existing school, or of newSchool"),
  newSchool: z
    .object({ slug: z.string(), name: z.string(), description: z.string() })
    .nullable()
    .describe("Only if no existing school fits; otherwise null"),
  tagline: z.string().describe("One sentence, under 20 words"),
  overview: z.string().describe("Two paragraphs separated by a blank line"),
  outcomes: z.array(z.string()).describe("Six program learning outcomes"),
  careers: z.array(z.object({ title: z.string(), description: z.string() })).describe("Four paths the program prepares students for"),
  newSubjects: z.array(z.object({ prefix: z.string(), name: z.string() })).describe("Any subject prefixes not already in use"),
  newCourses: z.array(LlmCourseSummary).describe("Every course in the plan or its concentrations that is not already in the catalog"),
  terms: z
    .array(z.object({ index: z.number(), courses: z.array(z.string()) }))
    .describe('Terms in order, each with exactly two entries: course codes or concentration slots "@1", "@2", …'),
  concentrations: z
    .array(
      z.object({
        slug: z.string(),
        name: z.string(),
        description: z.string().describe("One or two sentences"),
        courses: z.array(z.string()).describe("Course codes filling slots @1, @2, … in order"),
      }),
    )
    .describe("Two or three concentrations"),
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

const LlmResource = z.object({
  kind: z.enum(RESOURCE_KINDS),
  title: z.string().describe("Exact published title"),
  creator: z.string().describe("Author, director, YouTube channel, or publisher, exactly as credited"),
  year: z.number().nullable(),
  note: z.string().describe("One sentence on why it is worth a student's time"),
  url: z.string().nullable().describe("Only for websites, or a video URL you are certain of; otherwise null"),
});

export const LlmResources = z.object({
  course: z.array(LlmResource).describe("3-5 books and 1-3 other works for the whole course"),
  weeks: z
    .array(z.object({ number: z.number(), resources: z.array(LlmResource).describe("1-2 resources") }))
    .describe(`One entry per week, ${WEEKS_PER_COURSE} in total`),
});

// ---------------------------------------------------------------------------

const structure = (terms: number) => `AIU program structure (required):
- The program has exactly ${terms} terms (${terms / TERMS_PER_YEAR} years of ${TERMS_PER_YEAR} eight-week terms). Students take exactly ${COURSES_PER_TERM} courses per term, so the plan has ${terms * COURSES_PER_TERM} entries.
- AIU programs are certificate programs devoted entirely to one discipline. There are NO general-education, breadth, or first-year-seminar courses. Every course must belong to the discipline or be a direct tool of it (for example statistics in psychology, discrete mathematics in computer science, Latin and Greek in classics).
- Sequence the plan like a strong university major: foundation courses first, then a deep core, then advanced work.
- Course numbers reflect level: 100-level in year 1, 200-level in year 2, 300- and 400-level after that.
- Include two or three concentrations. Each concentration is a coherent specialization of 4 courses. In the plan, reserve 4 entries for them using the slot tokens "@1", "@2", "@3", "@4" (each used once), placed in the second half of the program. Each concentration lists its 4 course codes in slot order. Concentration courses use the category "concentration"; no other course does.
- End with a capstone (category "capstone") in the final term or two.
- A prerequisite must be scheduled in an EARLIER term than the course that requires it, never the same term. This must hold for every concentration.`;

const PLAN_SYSTEM = (terms: number) => `You are the curriculum committee of Artificial Intelligence University (AIU), an online university whose curricula are written by AI. You design rigorous, realistic programs of study comparable to the major at a well-regarded university, sequenced so each course builds on the ones before it.

${structure(terms)}

Reuse an existing catalog course only when it genuinely belongs to this discipline, by using its exact code. Every other course must be defined in newCourses with a code not already used in the catalog. Use existing subject prefixes where they fit; declare any new prefix in newSubjects.`;

export async function generateDegreePlan(
  request: { title: string; notes?: string; years: number },
  ctx: { catalog: CourseSummary[]; schools: School[]; subjects: Record<string, string>; existingSlugs: string[] },
  opts: GenOptions = {},
) {
  const log = opts.log ?? console.log;
  const terms = request.years * TERMS_PER_YEAR;
  const catalogText = ctx.catalog
    .slice()
    .sort((a, b) => a.code.localeCompare(b.code, "en", { numeric: true }))
    .map((c) => `${c.code} | ${c.title} | ${c.category} | prereqs: ${c.prerequisites.join(", ") || "none"}`)
    .join("\n");

  const basePrompt = `Design this program: ${request.title}
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
    log(`  Drafting program plan (attempt ${attempt})…`);
    const { data, model } = await call({
      schema: LlmPlan,
      system: PLAN_SYSTEM(terms),
      prompt: basePrompt + feedback,
      model: opts.model,
      effort: opts.effort ?? "high",
    });

    const fix = (c: string) => c.trim().toUpperCase().replace(/\s+/, " ");
    const newCourses: CourseSummary[] = data.newCourses.map((c) => ({
      code: fix(c.code),
      title: c.title,
      category: c.category,
      description: c.description,
      prerequisites: c.prerequisites.map(fix),
    }));
    const catalog = new Map(ctx.catalog.map((c) => [c.code, c]));
    const collisions = newCourses.filter((c) => catalog.has(c.code)).map((c) => c.code);
    for (const c of newCourses) if (!catalog.has(c.code)) catalog.set(c.code, c);

    const program: Program = {
      slug: data.slug,
      title: data.title,
      credential: data.credential,
      school: data.newSchool?.slug ?? data.school,
      tagline: data.tagline,
      overview: data.overview,
      outcomes: data.outcomes,
      careers: data.careers,
      terms: data.terms.map((t, i) => ({ index: i + 1, courses: t.courses.map((c) => (c.trim().startsWith("@") ? c.trim() : fix(c))) })),
      concentrations: data.concentrations.map((c) => ({ ...c, courses: c.courses.map(fix) })),
      generation: { model, generatedAt: new Date().toISOString() },
    };

    const errors = validateProgram(program, catalog);
    if (program.terms.length !== terms) errors.push(`The plan must have exactly ${terms} terms (it has ${program.terms.length}).`);
    if (collisions.length) errors.push(`These new course codes already exist in the catalog; reuse them or pick new codes: ${collisions.join(", ")}.`);
    if (ctx.existingSlugs.includes(program.slug)) errors.push(`The slug "${program.slug}" is already in use.`);
    if (!data.newSchool && !ctx.schools.some((s) => s.slug === program.school)) errors.push(`Unknown school "${program.school}".`);
    const knownPrefixes = new Set([...Object.keys(ctx.subjects), ...data.newSubjects.map((s) => s.prefix)]);
    for (const c of newCourses) {
      const prefix = c.code.split(" ")[0];
      if (!knownPrefixes.has(prefix)) errors.push(`Prefix ${prefix} (${c.code}) must be declared in newSubjects.`);
    }

    if (!errors.length) {
      const used = new Set([...program.terms.flatMap((t) => t.courses), ...program.concentrations.flatMap((c) => c.courses)]);
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
  throw new Error("Could not produce a valid program plan after 3 attempts.");
}

// ---------------------------------------------------------------------------

const COURSE_SYSTEM = `You are a professor at Artificial Intelligence University (AIU) writing the materials for an online, eight-week course taken by a cohort of students. Students learn ONLY from what you write, so lessons must genuinely teach the material: explain ideas from the ground up, show worked examples, and anticipate misunderstandings. Write in clear, warm, academically rigorous prose at the level of a strong university course.

Rules:
- Use Markdown: ## and ### headings, short paragraphs, lists, tables, and fenced code blocks or plain-text math where useful. Do not start with an H1; the page already shows the week title.
- Do not invent citations, URLs, quotations, or precise statistics. When referring to research, describe well-established findings in general terms.
- Assessments must test understanding and application, not trivia. Question prompts may use Markdown; put any code in a fenced block. Multiple-choice distractors should be plausible. Vary which choice is correct.
- Assignments must be completable as a written response (no file uploads, no external accounts).`;

function courseContext(summary: CourseSummary, programTitles: string[]) {
  return `Course: ${summary.code} ${summary.title} (${summary.category})
Description: ${summary.description}
Prerequisites: ${summary.prerequisites.join(", ") || "none"}
Part of: ${programTitles.join("; ") || "general catalog"}`;
}

export type CourseContext = { programTitles: string[]; prerequisiteTitles: string[] };

export async function generateCourseContent(
  summary: CourseSummary,
  ctx: CourseContext,
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
      resources: [] as Resource[],
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

  const course: Course = {
    ...summary,
    status: "published",
    outcomes: syllabus.outcomes,
    weeks,
    finalExam: exam.questions.map(shuffleChoices),
    resources: [],
    generation: { model, generatedAt: new Date().toISOString() },
  };
  return generateResources(course, ctx, opts);
}

const RESOURCE_SYSTEM = `You are a university librarian at Artificial Intelligence University (AIU). AIU's lessons are written by AI, so every course points students to real, human-made works: books, documentaries, recorded lectures, and podcasts by established scholars, writers, and creators.

Rules:
- Recommend only works you are certain exist, with their exact titles and creators as published. Every recommendation is checked against library catalogs and anything that cannot be found is removed, so precision matters more than quantity.
- Prefer well-known, widely available works: classic and standard texts, respected introductions by recognized experts, acclaimed documentaries, and lecture series from established sources (for example university open courseware, Crash Course, Khan Academy).
- For videos and lectures, give the series or channel as the creator. Give a URL only for a website, or for a video whose exact URL you are certain of; otherwise use null and students will be sent to a search.
- Suit the level of an undergraduate in this course, and say in one sentence why each is worth their time.`;

/** Adds verified books and media to a course and each of its weeks. */
export async function generateResources(course: Course, ctx: CourseContext, opts: GenOptions = {}): Promise<Course> {
  const log = opts.log ?? console.log;
  log(`  ${course.code}: resources`);
  const { data } = await call({
    schema: LlmResources,
    system: RESOURCE_SYSTEM,
    prompt: `${courseContext(course, ctx.programTitles)}

Weekly topics:
${course.weeks.map((w) => `Week ${w.number}: ${w.title} — ${w.overview}`).join("\n")}

Recommend resources for the whole course (3-5 books and 1-3 other works) and 1-2 for each week that deepen that week's topic. Do not repeat a work.`,
    model: opts.model,
    effort: opts.effort ?? "medium",
    maxTokens: 16000,
  });

  const clean = (r: z.infer<typeof LlmResource>): Resource => ({
    kind: r.kind,
    title: r.title.trim(),
    creator: r.creator.trim(),
    year: r.year ? Math.round(r.year) : null,
    note: r.note.trim(),
    url: r.url && /^https?:\/\//.test(r.url) ? r.url : null,
    isbn: null,
    verified: false,
  });

  const courseLevel = await verifyResources(data.course.map(clean));
  const weekly = await Promise.all(
    course.weeks.map((w) => verifyResources((data.weeks.find((x) => x.number === w.number)?.resources ?? []).map(clean))),
  );
  const all = [courseLevel, ...weekly];
  const dropped = all.flatMap((r) => r.report.dropped);
  if (dropped.length) log(`  ${course.code}: removed ${dropped.length} resource(s) not found in catalogs: ${dropped.join("; ")}`);
  if (all.some((r) => r.report.offline)) log(`  ${course.code}: some resources could not be checked (offline); run npm run resources:verify later.`);

  return {
    ...course,
    resources: courseLevel.resources,
    weeks: course.weeks.map((w, i) => ({ ...w, resources: weekly[i].resources })),
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
