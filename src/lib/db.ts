import "server-only";
import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { catalogue } from "@/content/catalogue";
import { capstones } from "@/content/capstones";
import { authoredCourses } from "@/content/courses";
import { seedDemo } from "@/content/demo";
import { Capstone, CourseContent } from "@/lib/schema";

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY,
    name          TEXT NOT NULL,
    email         TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    created_at    TEXT NOT NULL DEFAULT (datetime('now')),
    bio           TEXT NOT NULL DEFAULT '',
    visibility    TEXT NOT NULL DEFAULT 'public',
    demo          INTEGER NOT NULL DEFAULT 0
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
    capstone     TEXT,
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

  CREATE TABLE IF NOT EXISTS essays (
    id           INTEGER PRIMARY KEY,
    user_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id    TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    lesson_index INTEGER NOT NULL,
    response     TEXT NOT NULL,
    status       TEXT NOT NULL DEFAULT 'drafting',
    feedback     TEXT,
    error        TEXT,
    created_at   TEXT NOT NULL DEFAULT (datetime('now'))
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

  CREATE TABLE IF NOT EXISTS corrections (
    id            INTEGER PRIMARY KEY,
    course_id     TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    lesson_index  INTEGER NOT NULL,
    page_index    INTEGER,
    user_id       INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    kind          TEXT NOT NULL,
    quote         TEXT NOT NULL DEFAULT '',
    body          TEXT NOT NULL,
    status        TEXT NOT NULL DEFAULT 'open',
    response      TEXT,
    review        TEXT,
    review_status TEXT,
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS corrections_lesson ON corrections (course_id, lesson_index);

  CREATE TABLE IF NOT EXISTS capstones (
    id               INTEGER PRIMARY KEY,
    user_id          INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    concentration_id INTEGER NOT NULL REFERENCES concentrations(id) ON DELETE CASCADE,
    option           TEXT NOT NULL DEFAULT '',
    title            TEXT NOT NULL,
    abstract         TEXT NOT NULL,
    body             TEXT NOT NULL,
    status           TEXT NOT NULL DEFAULT 'drafting',
    assessment       TEXT,
    passed           INTEGER NOT NULL DEFAULT 0,
    error            TEXT,
    created_at       TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS posts (
    id               INTEGER PRIMARY KEY,
    concentration_id INTEGER NOT NULL REFERENCES concentrations(id) ON DELETE CASCADE,
    user_id          INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    parent_id        INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    title            TEXT NOT NULL DEFAULT '',
    body             TEXT NOT NULL,
    created_at       TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS posts_thread ON posts (concentration_id, parent_id);

  CREATE TABLE IF NOT EXISTS notes (
    user_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id    TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    lesson_index INTEGER NOT NULL,
    page_index   INTEGER NOT NULL,
    body         TEXT NOT NULL,
    updated_at   TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, course_id, lesson_index, page_index)
  );

  CREATE TABLE IF NOT EXISTS visits (
    user_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id    TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    lesson_index INTEGER NOT NULL,
    page_index   INTEGER NOT NULL,
    visited_at   TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, course_id)
  );

  CREATE TABLE IF NOT EXISTS book_sources (
    key        TEXT PRIMARY KEY,
    title      TEXT NOT NULL,
    author     TEXT NOT NULL DEFAULT '',
    status     TEXT NOT NULL,
    data       TEXT,
    checked_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`;

/** Brings a database made by an earlier version of Cornerstone up to date, one version at a time. */
const MIGRATIONS: Record<number, string> = {
  1: `
    ALTER TABLE users ADD COLUMN bio TEXT NOT NULL DEFAULT '';
    ALTER TABLE users ADD COLUMN visibility TEXT NOT NULL DEFAULT 'public';
    ALTER TABLE users ADD COLUMN demo INTEGER NOT NULL DEFAULT 0;
    ALTER TABLE concentrations ADD COLUMN capstone TEXT;
  `,
};

export function slugify(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Stamped into the file's user_version, so Cornerstone only ever opens databases it made. */
const SCHEMA_VERSION = 2;

function open(): Database.Database {
  const file = resolve(process.env.AIU_DATABASE ?? "data/university.db");
  mkdirSync(dirname(file), { recursive: true });
  const db = new Database(file);
  db.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000;");

  const version = db.pragma("user_version", { simple: true }) as number;
  const { tables } = db.prepare("SELECT COUNT(*) AS tables FROM sqlite_master WHERE type = 'table'").get() as { tables: number };
  if (version > SCHEMA_VERSION || (version === 0 && tables > 0)) {
    db.close();
    throw new Error(
      `${file} was not created by this version of Cornerstone. ` +
        "Move or delete it, or set AIU_DATABASE to a different path.",
    );
  }

  for (let v = version; v > 0 && v < SCHEMA_VERSION; v++) db.exec(MIGRATIONS[v]);
  db.exec(SCHEMA);
  db.pragma(`user_version = ${SCHEMA_VERSION}`);
  seed(db);
  abandonInterruptedWork(db);
  seedDemo(db);
  return db;
}

/**
 * Writes the founding catalogue into the database. Runs on every boot so that
 * edits to the authored catalogue take effect, but never touches rows that
 * students or the forge created.
 */
function seed(db: Database.Database) {
  const upsertSubject = db.prepare(`
    INSERT INTO subjects (slug, name, description, epigraph, attribution, position, origin)
    VALUES (?, ?, ?, ?, ?, ?, 'seed')
    ON CONFLICT (slug) DO UPDATE SET
      name = excluded.name, description = excluded.description,
      epigraph = excluded.epigraph, attribution = excluded.attribution,
      position = excluded.position
  `);
  const upsertConcentration = db.prepare(`
    INSERT INTO concentrations (subject_slug, slug, name, description, position, origin, capstone)
    VALUES (?, ?, ?, ?, ?, 'seed', ?)
    ON CONFLICT (subject_slug, slug) DO UPDATE SET
      name = excluded.name, description = excluded.description, position = excluded.position,
      capstone = excluded.capstone
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
        const capstone = capstones[concentration.name];
        if (!capstone) throw new Error(`The concentration ${concentration.name} has no capstone.`);
        const { id } = upsertConcentration.get(
          subject.slug, slugify(concentration.name), concentration.name,
          concentration.description, c, JSON.stringify(Capstone.parse(capstone)),
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
function abandonInterruptedWork(db: Database.Database) {
  const note = "Cornerstone was restarted while this was being prepared.";
  for (const table of ["subjects", "concentrations", "courses", "inquiries", "continuations", "essays", "capstones"]) {
    db.prepare(`UPDATE ${table} SET status = 'failed', error = ? WHERE status = 'drafting'`).run(note);
  }
  db.prepare("UPDATE corrections SET review_status = 'failed' WHERE review_status = 'drafting'").run();
}

const globalForDb = globalThis as unknown as { aiuDb?: Database.Database };

function connection(): Database.Database {
  return (globalForDb.aiuDb ??= open());
}

/**
 * Cornerstone's database, opened on first use rather than on import, so
 * that building the site never touches it.
 */
export const db = new Proxy({} as Database.Database, {
  get(_, property) {
    const target = connection();
    const value = Reflect.get(target, property, target);
    return typeof value === "function" ? value.bind(target) : value;
  },
});
