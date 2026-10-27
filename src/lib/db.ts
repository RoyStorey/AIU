import "server-only";
import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { catalogue } from "@/content/catalogue";
import { authoredCourses } from "@/content/courses";
import { CourseContent } from "@/lib/schema";

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY,
    name          TEXT NOT NULL,
    email         TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token      TEXT PRIMARY KEY,
    user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS subjects (
    slug        TEXT PRIMARY KEY,
    name        TEXT NOT NULL,
    description TEXT NOT NULL,
    epigraph    TEXT,
    attribution TEXT,
    position    INTEGER NOT NULL DEFAULT 100,
    origin      TEXT NOT NULL DEFAULT 'seed',
    status      TEXT NOT NULL DEFAULT 'ready',
    error       TEXT
  );

  CREATE TABLE IF NOT EXISTS concentrations (
    id           INTEGER PRIMARY KEY,
    subject_slug TEXT NOT NULL REFERENCES subjects(slug) ON DELETE CASCADE,
    slug         TEXT NOT NULL,
    name         TEXT NOT NULL,
    description  TEXT NOT NULL,
    position     INTEGER NOT NULL DEFAULT 100,
    origin       TEXT NOT NULL DEFAULT 'seed',
    status       TEXT NOT NULL DEFAULT 'ready',
    error        TEXT,
    UNIQUE (subject_slug, slug)
  );

  CREATE TABLE IF NOT EXISTS courses (
    id               TEXT PRIMARY KEY,
    concentration_id INTEGER NOT NULL REFERENCES concentrations(id) ON DELETE CASCADE,
    code             TEXT NOT NULL,
    title            TEXT NOT NULL,
    stage            INTEGER NOT NULL,
    position         INTEGER NOT NULL,
    summary          TEXT NOT NULL,
    texts            TEXT NOT NULL DEFAULT '[]',
    content          TEXT,
    status           TEXT NOT NULL DEFAULT 'outline',
    error            TEXT,
    origin           TEXT NOT NULL DEFAULT 'seed'
  );

  CREATE TABLE IF NOT EXISTS enrollments (
    user_id          INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    concentration_id INTEGER NOT NULL REFERENCES concentrations(id) ON DELETE CASCADE,
    declared_at      TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, concentration_id)
  );

  CREATE TABLE IF NOT EXISTS lesson_progress (
    user_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id    TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    lesson_index INTEGER NOT NULL,
    score        REAL NOT NULL,
    completed_at TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, course_id, lesson_index)
  );

  CREATE TABLE IF NOT EXISTS inquiries (
    id         INTEGER PRIMARY KEY,
    query      TEXT NOT NULL,
    status     TEXT NOT NULL DEFAULT 'drafting',
    path       TEXT,
    error      TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS continuations (
    concentration_id INTEGER PRIMARY KEY REFERENCES concentrations(id) ON DELETE CASCADE,
    status           TEXT NOT NULL,
    error            TEXT
  );
`;

export function slugify(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function open(): DatabaseSync {
  const file = resolve(process.env.AIU_DATABASE ?? "data/aiu.db");
  mkdirSync(dirname(file), { recursive: true });
  const db = new DatabaseSync(file);
  db.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000;");
  db.exec(SCHEMA);
  seed(db);
  abandonInterruptedWork(db);
  return db;
}

/**
 * Writes the founding catalogue into the database. Runs on every boot so that
 * edits to the authored catalogue take effect, but never touches rows that
 * students or the forge created.
 */
function seed(db: DatabaseSync) {
  const upsertSubject = db.prepare(`
    INSERT INTO subjects (slug, name, description, epigraph, attribution, position, origin)
    VALUES (?, ?, ?, ?, ?, ?, 'seed')
    ON CONFLICT (slug) DO UPDATE SET
      name = excluded.name, description = excluded.description,
      epigraph = excluded.epigraph, attribution = excluded.attribution,
      position = excluded.position
  `);
  const upsertConcentration = db.prepare(`
    INSERT INTO concentrations (subject_slug, slug, name, description, position, origin)
    VALUES (?, ?, ?, ?, ?, 'seed')
    ON CONFLICT (subject_slug, slug) DO UPDATE SET
      name = excluded.name, description = excluded.description, position = excluded.position
    RETURNING id
  `);
  const upsertCourse = db.prepare(`
    INSERT INTO courses (id, concentration_id, code, title, stage, position, summary, texts, content, status, origin)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'seed')
    ON CONFLICT (id) DO UPDATE SET
      concentration_id = excluded.concentration_id, code = excluded.code,
      title = excluded.title, stage = excluded.stage, position = excluded.position,
      summary = excluded.summary, texts = excluded.texts,
      content = COALESCE(excluded.content, courses.content),
      status = CASE WHEN excluded.content IS NOT NULL THEN 'ready' ELSE courses.status END
  `);

  db.exec("BEGIN");
  try {
    catalogue.forEach((subject, s) => {
      upsertSubject.run(
        subject.slug, subject.name, subject.description,
        subject.epigraph, subject.attribution, s,
      );
      subject.concentrations.forEach((concentration, c) => {
        const { id } = upsertConcentration.get(
          subject.slug, slugify(concentration.name), concentration.name,
          concentration.description, c,
        ) as { id: number };
        concentration.courses.forEach((course, position) => {
          const authored = authoredCourses[course.code];
          if (authored) checkAuthored(course.code, authored);
          upsertCourse.run(
            slugify(course.code), id, course.code, course.title, course.stage,
            position, course.summary, JSON.stringify(course.texts),
            authored ? JSON.stringify(authored) : null,
            authored ? "ready" : "outline",
          );
        });
      });
    });
    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

/** Catches mistakes in hand-written courses at startup rather than in front of a student. */
function checkAuthored(code: string, content: CourseContent) {
  CourseContent.parse(content);
  content.lessons.forEach((lesson, l) =>
    lesson.questions.forEach((q, i) => {
      if (q.answer >= q.choices.length) {
        throw new Error(`${code}, lesson ${l + 1}, question ${i + 1}: answer index out of range`);
      }
    }),
  );
}

/** Drafts cannot survive a restart; mark them failed so a student can ask again. */
function abandonInterruptedWork(db: DatabaseSync) {
  const note = "The University was restarted while this was being prepared.";
  for (const table of ["subjects", "concentrations", "courses", "inquiries", "continuations"]) {
    db.prepare(`UPDATE ${table} SET status = 'failed', error = ? WHERE status = 'drafting'`).run(note);
  }
}

const globalForDb = globalThis as unknown as { aiuDb?: DatabaseSync };

function connection(): DatabaseSync {
  return (globalForDb.aiuDb ??= open());
}

/**
 * The University's database, opened on first use rather than on import, so
 * that building the site never touches it.
 */
export const db = new Proxy({} as DatabaseSync, {
  get(_, property) {
    const target = connection();
    const value = Reflect.get(target, property, target);
    return typeof value === "function" ? value.bind(target) : value;
  },
});
