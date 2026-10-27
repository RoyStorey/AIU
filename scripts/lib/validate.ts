import {
  COURSES_PER_TERM,
  CourseCode,
  TERMS_PER_YEAR,
  WEEKS_PER_COURSE,
  isSlot,
  resolveTerms,
  slotNumber,
  type Course,
  type CourseSummary,
  type Program,
} from "../../src/lib/content/schema";

export const MIN_TERMS = 2 * TERMS_PER_YEAR;
export const MAX_TERMS = 4 * TERMS_PER_YEAR;

/**
 * Structural checks a program plan must pass before it is published. These are
 * the rules a registrar would enforce; generated plans that break them are
 * sent back to the model with the list of problems.
 */
export function validateProgram(program: Program, catalog: Map<string, CourseSummary>): string[] {
  const errors: string[] = [];
  const n = program.terms.length;
  if (n < MIN_TERMS || n > MAX_TERMS) errors.push(`The plan must have between ${MIN_TERMS} and ${MAX_TERMS} terms (it has ${n}).`);

  const seen = new Set<string>();
  const slots: number[] = [];
  program.terms.forEach((term, i) => {
    if (term.index !== i + 1) errors.push(`Term ${i + 1} is numbered ${term.index}.`);
    if (term.courses.length !== COURSES_PER_TERM) errors.push(`Term ${term.index} must have exactly ${COURSES_PER_TERM} entries.`);
    for (const code of term.courses) {
      if (isSlot(code)) {
        slots.push(slotNumber(code));
        continue;
      }
      if (!CourseCode.safeParse(code).success) errors.push(`"${code}" is not a valid course code (use e.g. "CS 101").`);
      if (seen.has(code)) errors.push(`${code} appears more than once in the plan.`);
      seen.add(code);
      if (!catalog.has(code)) errors.push(`${code} is scheduled but not defined as a new course or found in the catalog.`);
      else if (catalog.get(code)!.category === "concentration") errors.push(`${code} is a concentration course; schedule it through a concentration slot instead.`);
    }
  });

  // Concentration slots: @1..@k, each used once, each concentration fills all k.
  const k = slots.length;
  const sorted = [...slots].sort((a, b) => a - b);
  if (sorted.some((s, i) => s !== i + 1)) errors.push(`Concentration slots must be @1 through @${k}, each used once.`);
  if (k > 0 && program.concentrations.length < 2) errors.push("A plan with concentration slots needs at least two concentrations.");
  if (k === 0 && program.concentrations.length > 0) errors.push("Concentrations are defined but the plan has no concentration slots (@1, @2, …).");
  const slugs = new Set<string>();
  for (const c of program.concentrations) {
    if (slugs.has(c.slug)) errors.push(`Duplicate concentration slug "${c.slug}".`);
    slugs.add(c.slug);
    if (c.courses.length !== k) errors.push(`Concentration "${c.name}" has ${c.courses.length} courses but the plan has ${k} slots.`);
    if (new Set(c.courses).size !== c.courses.length) errors.push(`Concentration "${c.name}" lists a course twice.`);
    for (const code of c.courses) {
      if (!catalog.has(code)) errors.push(`${code} (concentration "${c.name}") is not defined as a new course or found in the catalog.`);
      if (seen.has(code)) errors.push(`${code} is both a required course and a concentration course.`);
    }
  }

  // Prerequisites must come earlier, for the base plan and for every concentration.
  const variants = program.concentrations.length ? program.concentrations.map((c) => c.slug) : [null];
  for (const variant of variants) {
    const termOf = new Map<string, number>();
    for (const t of resolveTerms(program, variant)) for (const code of t.courses) termOf.set(code, t.index);
    for (const [code, termIndex] of termOf) {
      for (const pre of catalog.get(code)?.prerequisites ?? []) {
        const preTerm = termOf.get(pre);
        const where = variant ? ` in the "${variant}" concentration` : "";
        if (preTerm == null) errors.push(`${code} requires ${pre}, which is not in the plan${where}.`);
        else if (preTerm >= termIndex) errors.push(`${code} (term ${termIndex}) requires ${pre}, which must come in an earlier term (it is in term ${preTerm})${where}.`);
      }
    }
  }

  const last = program.terms.slice(-2).flatMap((t) => t.courses);
  if (!last.some((c) => catalog.get(c)?.category === "capstone")) errors.push("Schedule at least one capstone course in the final two terms.");
  return [...new Set(errors)];
}

export function validateCourse(course: Course): string[] {
  const errors: string[] = [];
  if (course.status !== "published") return errors;
  if (course.weeks.length !== WEEKS_PER_COURSE) errors.push(`${course.code}: expected ${WEEKS_PER_COURSE} weeks, found ${course.weeks.length}.`);
  course.weeks.forEach((w, i) => {
    if (w.number !== i + 1) errors.push(`${course.code}: week ${i + 1} is numbered ${w.number}.`);
    if (w.quiz.length < 3) errors.push(`${course.code} week ${w.number}: quiz needs at least 3 questions.`);
    if (w.lesson.trim().length < 500) errors.push(`${course.code} week ${w.number}: lesson is too short.`);
  });
  const questions = [...course.weeks.flatMap((w) => w.quiz), ...course.finalExam];
  for (const q of questions) {
    if (q.choices.length !== 4) errors.push(`${course.code}: question "${q.prompt.slice(0, 50)}…" must have 4 choices.`);
    if (q.answerIndex < 0 || q.answerIndex >= q.choices.length) errors.push(`${course.code}: question "${q.prompt.slice(0, 50)}…" has an invalid answer index.`);
  }
  if (course.finalExam.length < 8) errors.push(`${course.code}: final exam needs at least 8 questions.`);
  for (const r of [...course.resources, ...course.weeks.flatMap((w) => w.resources)]) {
    if (r.kind === "website" && !r.url) errors.push(`${course.code}: website resource "${r.title}" needs a url.`);
  }
  return errors;
}
