import "server-only";
import { db } from "@/lib/db";
import type { User } from "@/lib/auth";
import { standings, type Level } from "@/lib/progress";

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

/** Faculty may answer and settle correction reports. They are named in AIU_FACULTY_EMAILS. */
export function isFaculty(user: User | null): boolean {
  if (!user) return false;
  const emails = (process.env.AIU_FACULTY_EMAILS ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
  return emails.includes(user.email.toLowerCase());
}

export type DirectoryEntry = Student & { masters: string[]; experts: string[]; studying: number };

/** The public roll of students, Masters first. */
export function directory(): DirectoryEntry[] {
  const rows = db.prepare(`SELECT ${COLUMNS} FROM users WHERE visibility = 'public' ORDER BY name`).all().map(toStudent);
  const count = (level: Level, list: ReturnType<typeof standings>) =>
    list.filter((s) => s.level === level).map((s) => s.concentration.name);
  return rows
    .map((student) => {
      const list = standings(student.id);
      return { ...student, masters: count("master", list), experts: count("expert", list), studying: list.length };
    })
    .sort((a, b) => b.masters.length - a.masters.length || b.experts.length - a.experts.length || a.name.localeCompare(b.name));
}
