import {
  COURSES_PER_TERM,
  CourseCode,
  SESSIONS,
  TERMS_PER_YEAR,
  TOTAL_TERMS,
  WEEKS_PER_COURSE,
  type Course,
  type CourseSummary,
  type Program,
} from "../../src/lib/content/schema";

/**
 * Structural checks a degree plan must pass before it is published. These are
 * the rules a registrar would enforce; generated plans that break them are
 * sent back to the model with the list of problems.
 */
export function validateProgram(program: Program, catalog: Map<string, CourseSummary>): string[] {
  const errors: string[] = [];
  if (program.terms.length !== TOTAL_TERMS) errors.push(`The plan must have exactly ${TOTAL_TERMS} terms (it has ${program.terms.length}).`);

  const termOf = new Map<string, number>();
  program.terms.forEach((term, i) => {
    const expected = { index: i + 1, year: Math.floor(i / TERMS_PER_YEAR) + 1, session: SESSIONS[i % TERMS_PER_YEAR] };
    if (term.index !== expected.index || term.year !== expected.year || term.session !== expected.session) {
      errors.push(`Term ${i + 1} should be index ${expected.index}, Year ${expected.year}, ${expected.session}.`);
    }
    if (term.courses.length !== COURSES_PER_TERM) errors.push(`Term ${term.index} must have exactly ${COURSES_PER_TERM} courses.`);
    for (const code of term.courses) {
      if (!CourseCode.safeParse(code).success) errors.push(`"${code}" is not a valid course code (use e.g. "CS 101").`);
      if (termOf.has(code)) errors.push(`${code} appears more than once in the plan.`);
      termOf.set(code, term.index);
      if (!catalog.has(code)) errors.push(`${code} is scheduled but not defined as a new course or found in the catalog.`);
    }
  });

  for (const [code, termIndex] of termOf) {
    const course = catalog.get(code);
    if (!course) continue;
    for (const pre of course.prerequisites) {
      const preTerm = termOf.get(pre);
      if (preTerm == null) errors.push(`${code} requires ${pre}, which is not in the plan.`);
      else if (preTerm >= termIndex) errors.push(`${code} (term ${termIndex}) requires ${pre}, which must be scheduled in an earlier term (it is in term ${preTerm}).`);
    }
  }

  const count = (cat: string) => [...termOf.keys()].filter((c) => catalog.get(c)?.category === cat).length;
  if (count("general-education") < 10) errors.push(`Include at least 10 general-education courses (found ${count("general-education")}).`);
  if (count("capstone") < 1) errors.push("Include at least one capstone course in the final year.");
  return errors;
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
  return errors;
}
