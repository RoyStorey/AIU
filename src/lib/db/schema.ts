import { sql } from "drizzle-orm";
import { index, integer, primaryKey, real, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

const createdAt = () =>
  integer("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch())`);

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  studentNumber: text("student_number").notNull().unique(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  passwordHash: text("password_hash").notNull(),
  createdAt: createdAt(),
});

export const sessions = sqliteTable("sessions", {
  // sha256 of the cookie token; the raw token never touches the database
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
});

export const enrollments = sqliteTable(
  "enrollments",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    programSlug: text("program_slug").notNull(),
    status: text("status", { enum: ["active", "graduated", "withdrawn"] }).notNull(),
    enrolledAt: createdAt(),
    endedAt: integer("ended_at", { mode: "timestamp" }),
  },
  (t) => [index("enrollments_user_idx").on(t.userId)],
);

/**
 * Course records belong to the student, not the enrollment, so credit for a
 * shared course (e.g. a general-education class) carries over if a student
 * changes programs.
 */
export const courseRecords = sqliteTable(
  "course_records",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    courseCode: text("course_code").notNull(),
    status: text("status", { enum: ["in_progress", "completed"] }).notNull(),
    grade: real("grade"),
    startedAt: createdAt(),
    completedAt: integer("completed_at", { mode: "timestamp" }),
  },
  (t) => [uniqueIndex("course_records_user_course_idx").on(t.userId, t.courseCode)],
);

export const lessonCompletions = sqliteTable(
  "lesson_completions",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    courseCode: text("course_code").notNull(),
    week: integer("week").notNull(),
    completedAt: createdAt(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.courseCode, t.week] })],
);

/** week 1-8 are weekly quizzes; week 0 is the final exam. */
export const quizAttempts = sqliteTable(
  "quiz_attempts",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    courseCode: text("course_code").notNull(),
    week: integer("week").notNull(),
    score: real("score").notNull(),
    answers: text("answers", { mode: "json" }).$type<number[]>().notNull(),
    createdAt: createdAt(),
  },
  (t) => [index("quiz_attempts_lookup_idx").on(t.userId, t.courseCode, t.week)],
);

export const assignmentSubmissions = sqliteTable(
  "assignment_submissions",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    courseCode: text("course_code").notNull(),
    week: integer("week").notNull(),
    body: text("body").notNull(),
    score: real("score").notNull(),
    feedback: text("feedback").notNull(),
    gradedBy: text("graded_by", { enum: ["ai", "completion"] }).notNull(),
    createdAt: createdAt(),
  },
  (t) => [index("assignment_lookup_idx").on(t.userId, t.courseCode, t.week)],
);

export type User = typeof users.$inferSelect;
export type Enrollment = typeof enrollments.$inferSelect;
export type CourseRecord = typeof courseRecords.$inferSelect;
