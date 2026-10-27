import "server-only";
import { db, slugify } from "@/lib/db";
import { getConcentrationById, getCourse, listConcentrations, listCourses, listSubjects } from "@/lib/catalogue";
import { draftConcentration, draftContinuation, draftCourse, gradeEssay, planInquiry } from "@/lib/forge";
import { stageName, type CourseOutline, type Feedback } from "@/lib/schema";

/**
 * The registrar records requests and sets the forge to work on them. Each piece
 * of work is marked "drafting" at once and finished in the background, so a
 * student can leave the page and return; pages refresh themselves until it is done.
 */

function inBackground(work: () => Promise<void>, onError: (message: string) => void) {
  work().catch((error: unknown) => {
    console.error(error);
    onError(error instanceof Error ? error.message : String(error));
  });
}

function uniqueSlug(table: "subjects" | "courses", column: string, base: string): string {
  const exists = db.prepare(`SELECT 1 FROM ${table} WHERE ${column} = ?`);
  let slug = base || "untitled";
  for (let n = 2; exists.get(slug); n++) slug = `${base}-${n}`;
  return slug;
}

function uniqueConcentrationSlug(subjectSlug: string, name: string): string {
  const exists = db.prepare("SELECT 1 FROM concentrations WHERE subject_slug = ? AND slug = ?");
  const base = slugify(name) || "concentration";
  let slug = base;
  for (let n = 2; exists.get(subjectSlug, slug); n++) slug = `${base}-${n}`;
  return slug;
}

function insertCourses(concentrationId: number, outlines: CourseOutline[], firstPosition = 0) {
  const insert = db.prepare(`
    INSERT INTO courses (id, concentration_id, code, title, stage, position, summary, texts, status, origin)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'outline', 'forge')
  `);
  outlines.forEach((c, i) => {
    const id = uniqueSlug("courses", "id", slugify(c.code));
    insert.run(id, concentrationId, c.code, c.title, c.stage, firstPosition + i, c.summary, JSON.stringify(c.texts));
  });
}

function insertConcentration(subjectSlug: string, name: string, description: string, status: string): number {
  const position = (db.prepare("SELECT COALESCE(MAX(position), -1) + 1 AS p FROM concentrations WHERE subject_slug = ?")
    .get(subjectSlug) as { p: number }).p;
  const { id } = db.prepare(`
    INSERT INTO concentrations (subject_slug, slug, name, description, position, origin, status)
    VALUES (?, ?, ?, ?, ?, 'forge', ?) RETURNING id
  `).get(subjectSlug, uniqueConcentrationSlug(subjectSlug, name), name, description, position, status) as { id: number };
  return id;
}

// ——— Inquiries: “I want to learn …” ———

export function startInquiry(query: string): number {
  const { id } = db.prepare("INSERT INTO inquiries (query) VALUES (?) RETURNING id").get(query) as { id: number };
  const fail = (error: string) =>
    db.prepare("UPDATE inquiries SET status = 'failed', error = ? WHERE id = ?").run(error, id);

  inBackground(async () => {
    const faculties = listSubjects().map((s) => ({
      slug: s.slug,
      name: s.name,
      concentrations: listConcentrations(s.slug).map((c) => c.name),
    }));
    const plan = await planInquiry(query, faculties);
    const existing = faculties.find((f) => f.slug === plan.faculty);

    db.exec("BEGIN");
    try {
      let path: string;
      if (existing) {
        let first: number | null = null;
        for (const c of plan.concentrations) {
          const cid = insertConcentration(existing.slug, c.name, c.description, "ready");
          insertCourses(cid, c.courses);
          first ??= cid;
        }
        const made = first ? getConcentrationById(first) : null;
        path = made ? `/faculties/${existing.slug}/${made.slug}` : `/faculties/${existing.slug}`;
      } else {
        const slug = uniqueSlug("subjects", "slug", slugify(plan.facultyName));
        db.prepare(`
          INSERT INTO subjects (slug, name, description, epigraph, attribution, position, origin)
          VALUES (?, ?, ?, ?, ?, 100, 'forge')
        `).run(slug, plan.facultyName, plan.facultyDescription, plan.epigraph || null, plan.attribution || null);
        for (const c of plan.concentrations) {
          insertCourses(insertConcentration(slug, c.name, c.description, "ready"), c.courses);
        }
        path = `/faculties/${slug}`;
      }
      db.prepare("UPDATE inquiries SET status = 'ready', path = ? WHERE id = ?").run(path, id);
      db.exec("COMMIT");
    } catch (error) {
      db.exec("ROLLBACK");
      throw error;
    }
  }, fail);

  return id;
}

export function getInquiry(id: number) {
  return db.prepare("SELECT * FROM inquiries WHERE id = ?").get(id) as
    | { id: number; query: string; status: string; path: string | null; error: string | null }
    | undefined;
}

// ——— New concentrations proposed by students ———

export function proposeConcentration(subjectSlug: string, name: string, note: string): string {
  const id = insertConcentration(subjectSlug, name, "This program of study is being drafted.", "drafting");
  const slug = getConcentrationById(id)!.slug;
  const fail = (error: string) =>
    db.prepare("UPDATE concentrations SET status = 'failed', error = ? WHERE id = ?").run(error, id);

  inBackground(async () => {
    const subject = listSubjects().find((s) => s.slug === subjectSlug)!;
    const outline = await draftConcentration(
      { name: subject.name, concentrations: listConcentrations(subjectSlug).filter((c) => c.id !== id).map((c) => c.name) },
      name,
      note,
    );
    db.exec("BEGIN");
    try {
      db.prepare("UPDATE concentrations SET description = ?, status = 'ready', error = NULL WHERE id = ?")
        .run(outline.description, id);
      insertCourses(id, outline.courses);
      db.exec("COMMIT");
    } catch (error) {
      db.exec("ROLLBACK");
      throw error;
    }
  }, fail);

  return slug;
}

export function retryConcentration(id: number) {
  const c = getConcentrationById(id);
  if (!c || c.status !== "failed") return;
  db.prepare("DELETE FROM concentrations WHERE id = ?").run(id);
  return proposeConcentration(c.subject_slug, c.name, "");
}

// ——— Courses ———

export function prepareCourse(courseId: string) {
  const claimed = db.prepare(`
    UPDATE courses SET status = 'drafting', error = NULL WHERE id = ? AND status IN ('outline', 'failed')
  `).run(courseId);
  if (claimed.changes === 0) return;

  const fail = (error: string) =>
    db.prepare("UPDATE courses SET status = 'failed', error = ? WHERE id = ?").run(error, courseId);

  inBackground(async () => {
    const course = getCourse(courseId)!;
    const content = await draftCourse({
      code: course.code,
      title: course.title,
      summary: course.summary,
      texts: course.texts,
      concentration: course.concentration.name,
      faculty: course.subject.name,
      stageName: stageName(course.stage),
    });
    db.prepare("UPDATE courses SET content = ?, status = 'ready', error = NULL WHERE id = ?")
      .run(JSON.stringify(content), courseId);
  }, fail);
}

// ——— Continuing beyond the curriculum ———

export function continueStudies(concentrationId: number) {
  const claimed = db.prepare(`
    INSERT INTO continuations (concentration_id, status) VALUES (?, 'drafting')
    ON CONFLICT (concentration_id) DO UPDATE SET status = 'drafting', error = NULL
    WHERE continuations.status != 'drafting'
  `).run(concentrationId);
  if (claimed.changes === 0) return;

  const fail = (error: string) =>
    db.prepare("UPDATE continuations SET status = 'failed', error = ? WHERE concentration_id = ?")
      .run(error, concentrationId);

  inBackground(async () => {
    const concentration = getConcentrationById(concentrationId)!;
    const subject = listSubjects().find((s) => s.slug === concentration.subject_slug)!;
    const courses = listCourses(concentrationId);
    const nextStage = Math.max(4, ...courses.map((c) => c.stage)) + 1;
    const outlines = await draftContinuation(
      { faculty: subject.name, concentration: concentration.name, courses },
      nextStage,
    );
    insertCourses(concentrationId, outlines, courses.length);
    db.prepare("UPDATE continuations SET status = 'ready', error = NULL WHERE concentration_id = ?")
      .run(concentrationId);
  }, fail);
}

// ——— Written exercises ———

export type Essay = {
  id: number;
  response: string;
  status: "drafting" | "ready" | "failed";
  feedback: Feedback | null;
  error: string | null;
  created_at: string;
};

export function submitEssay(userId: number, courseId: string, lessonIndex: number, response: string) {
  const course = getCourse(courseId);
  const lesson = course?.content?.lessons[lessonIndex];
  if (!course || !lesson?.reflection) throw new Error("No such exercise.");

  const { id } = db.prepare(`
    INSERT INTO essays (user_id, course_id, lesson_index, response) VALUES (?, ?, ?, ?) RETURNING id
  `).get(userId, courseId, lessonIndex, response) as { id: number };
  const fail = (error: string) =>
    db.prepare("UPDATE essays SET status = 'failed', error = ? WHERE id = ?").run(error, id);

  inBackground(async () => {
    const feedback = await gradeEssay({
      course: `${course.code} ${course.title}`,
      lesson: lesson.title,
      lecture: lesson.lecture,
      prompt: lesson.reflection!,
      response,
    });
    db.prepare("UPDATE essays SET status = 'ready', feedback = ?, error = NULL WHERE id = ?")
      .run(JSON.stringify(feedback), id);
  }, fail);
}

/** A student's submissions for one exercise, newest first. */
export function essaysFor(userId: number, courseId: string, lessonIndex: number): Essay[] {
  const rows = db.prepare(`
    SELECT id, response, status, feedback, error, created_at FROM essays
    WHERE user_id = ? AND course_id = ? AND lesson_index = ? ORDER BY id DESC
  `).all(userId, courseId, lessonIndex) as (Omit<Essay, "feedback"> & { feedback: string | null })[];
  return rows.map((r) => ({ ...r, feedback: r.feedback ? (JSON.parse(r.feedback) as Feedback) : null }));
}
