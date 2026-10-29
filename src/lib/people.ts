import "server-only";
import { db } from "@/lib/db";
import { isAdmin, type User } from "@/lib/auth";
import { standing, type Standing } from "@/lib/progress";

/** A student as others see them: never their email. */
export type Student = {
  id: number;
  name: string;
  bio: string;
  visibility: "public" | "private";
  demo: boolean;
  created_at: string;
};

const COLUMNS = "id, name, bio, visibility, demo, created_at";

function toStudent(row: unknown): Student {
  const r = row as Omit<Student, "demo"> & { demo: number };
  return { ...r, demo: r.demo === 1 };
}

export function getStudent(id: number): Student | null {
  const row = db.prepare(`SELECT ${COLUMNS} FROM users WHERE id = ?`).get(id);
  return row ? toStudent(row) : null;
}

/** Whether a viewer may see a student's profile: public profiles to all, private ones to their owner. */
export function canView(student: Student, viewer: User | null): boolean {
  return student.visibility === "public" || viewer?.id === student.id;
}

export function updateProfile(userId: number, bio: string, visibility: "public" | "private") {
  db.prepare("UPDATE users SET bio = ?, visibility = ? WHERE id = ?").run(bio, visibility, userId);
}

/** Faculty may answer and settle correction reports. They are named in AIU_FACULTY_EMAILS; administrators count too. */
export function isFaculty(user: User | null): boolean {
  if (!user) return false;
  if (isAdmin(user)) return true;
  const emails = (process.env.AIU_FACULTY_EMAILS ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
  return emails.includes(user.email.toLowerCase());
}

/**
 * The students of one concentration who keep a public profile: everyone who has
 * declared it, begun its courses, or passed its capstone, with their standing,
 * Masters first.
 */
export function studentsOf(concentrationId: number): (Student & { standing: Standing })[] {
  const rows = db.prepare(`
    SELECT ${COLUMNS} FROM users WHERE visibility = 'public' AND id IN (
      SELECT user_id FROM enrollments WHERE concentration_id = ?
      UNION SELECT p.user_id FROM lesson_progress p JOIN courses k ON k.id = p.course_id WHERE k.concentration_id = ?
      UNION SELECT user_id FROM capstones WHERE concentration_id = ? AND passed = 1
    )
  `).all(concentrationId, concentrationId, concentrationId).map(toStudent);
  const rank = { master: 0, expert: 1, student: 2 } as const;
  return rows
    .map((student) => ({ ...student, standing: standing(student.id, concentrationId)! }))
    .sort((a, b) =>
      rank[a.standing.level] - rank[b.standing.level]
      || b.standing.lessonsDone - a.standing.lessonsDone
      || a.name.localeCompare(b.name));
}
