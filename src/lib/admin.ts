import "server-only";
import { randomBytes } from "node:crypto";
import { db } from "@/lib/db";
import { isAdmin, type User } from "@/lib/auth";

/**
 * Account administration: who has an account, when each was last active, what
 * they have done, and the removal of accounts no longer in use.
 */

export type Account = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  last_active: string;
  demo: boolean;
  visibility: string;
  lessons: number;
  declared: number;
  posts: number;
  capstones: number;
  admin: boolean;
};

/**
 * The latest moment an account did anything: signed in, opened a page, read a
 * lesson, completed one, wrote an essay, a post, a note, a capstone, or a report.
 */
const LAST_ACTIVE = `MAX(
  u.created_at,
  COALESCE(u.last_seen_at, u.created_at),
  COALESCE((SELECT MAX(completed_at) FROM lesson_progress WHERE user_id = u.id), u.created_at),
  COALESCE((SELECT MAX(visited_at) FROM visits WHERE user_id = u.id), u.created_at),
  COALESCE((SELECT MAX(created_at) FROM essays WHERE user_id = u.id), u.created_at),
  COALESCE((SELECT MAX(created_at) FROM posts WHERE user_id = u.id), u.created_at),
  COALESCE((SELECT MAX(updated_at) FROM notes WHERE user_id = u.id), u.created_at),
  COALESCE((SELECT MAX(created_at) FROM capstones WHERE user_id = u.id), u.created_at),
  COALESCE((SELECT MAX(created_at) FROM corrections WHERE user_id = u.id), u.created_at)
)`;

export function accounts(): Account[] {
  const rows = db.prepare(`
    SELECT u.id, u.name, u.email, u.created_at, u.demo, u.visibility,
      ${LAST_ACTIVE} AS last_active,
      (SELECT COUNT(*) FROM lesson_progress WHERE user_id = u.id) AS lessons,
      (SELECT COUNT(*) FROM enrollments WHERE user_id = u.id) AS declared,
      (SELECT COUNT(*) FROM posts WHERE user_id = u.id) AS posts,
      (SELECT COUNT(*) FROM capstones WHERE user_id = u.id AND passed = 1) AS capstones
    FROM users u ORDER BY last_active DESC
  `).all() as (Omit<Account, "demo" | "admin"> & { demo: number })[];
  return rows.map((r) => ({
    ...r,
    demo: r.demo === 1,
    admin: isAdmin({ id: r.id, name: r.name, email: r.email, created_at: r.created_at }),
  }));
}

/** Days since a timestamp stored as SQLite's UTC "YYYY-MM-DD HH:MM:SS". */
export function daysSince(timestamp: string): number {
  return Math.floor((Date.now() - Date.parse(timestamp.replace(" ", "T") + "Z")) / 86_400_000);
}

/**
 * Deletes accounts and everything that belongs to them. An administrator
 * cannot delete their own account or another administrator's.
 * Returns how many were deleted.
 */
export function deleteAccounts(ids: number[], by: User): number {
  const remove = db.prepare("DELETE FROM users WHERE id = ?");
  const find = db.prepare("SELECT id, name, email, created_at FROM users WHERE id = ?");
  let removed = 0;
  db.exec("BEGIN");
  try {
    for (const id of new Set(ids)) {
      const account = find.get(id) as User | undefined;
      if (!account || account.id === by.id || isAdmin(account)) continue;
      removed += remove.run(id).changes;
    }
    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
  return removed;
}

// ——— One account ———

export type AccountDetail = Account & {
  bio: string;
  essays: number;
  notes: number;
  sessions: number;
  programs: { id: number; name: string; subject: string; subject_slug: string; slug: string; declared_at: string }[];
  courses: { id: string; code: string; title: string; lessons: number; last: string }[];
  capstoneList: { id: number; title: string; status: string; passed: boolean; created_at: string }[];
};

export function account(id: number): AccountDetail | null {
  const base = accounts().find((a) => a.id === id);
  if (!base) return null;
  const extra = db.prepare(`
    SELECT bio,
      (SELECT COUNT(*) FROM essays WHERE user_id = u.id) AS essays,
      (SELECT COUNT(*) FROM notes WHERE user_id = u.id) AS notes,
      (SELECT COUNT(*) FROM sessions WHERE user_id = u.id AND expires_at > ?) AS sessions
    FROM users u WHERE u.id = ?
  `).get(new Date().toISOString(), id) as { bio: string; essays: number; notes: number; sessions: number };
  const programs = db.prepare(`
    SELECT c.id, c.name, s.name AS subject, c.subject_slug, c.slug, e.declared_at
    FROM enrollments e JOIN concentrations c ON c.id = e.concentration_id JOIN subjects s ON s.slug = c.subject_slug
    WHERE e.user_id = ? ORDER BY e.declared_at
  `).all(id) as AccountDetail["programs"];
  const courses = db.prepare(`
    SELECT k.id, k.code, k.title, COUNT(*) AS lessons, MAX(p.completed_at) AS last
    FROM lesson_progress p JOIN courses k ON k.id = p.course_id
    WHERE p.user_id = ? GROUP BY k.id ORDER BY last DESC
  `).all(id) as AccountDetail["courses"];
  const capstoneList = (db.prepare(`
    SELECT id, title, status, passed, created_at FROM capstones WHERE user_id = ? ORDER BY id DESC
  `).all(id) as { id: number; title: string; status: string; passed: number; created_at: string }[])
    .map((c) => ({ ...c, passed: c.passed === 1 }));
  return { ...base, ...extra, programs, courses, capstoneList };
}

/** Whether `by` may change `target`: never another administrator, and never oneself here (use the Account page). */
export function mayManage(by: User, targetId: number): boolean {
  if (by.id === targetId) return false;
  const target = db.prepare("SELECT id, name, email, created_at FROM users WHERE id = ?").get(targetId) as User | undefined;
  return !!target && !isAdmin(target);
}

/** Changes an account's name and email. Returns an error message, or null. */
export function updateAccount(id: number, name: string, email: string): string | null {
  if (!name || name.length > 80) return "Give a name of up to 80 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Give a valid email address.";
  const taken = db.prepare("SELECT 1 FROM users WHERE email = ? AND id != ?").get(email, id);
  if (taken) return "Another account already uses that email.";
  db.prepare("UPDATE users SET name = ?, email = ? WHERE id = ?").run(name, email, id);
  return null;
}

/** A temporary password that is easy to read aloud or type: three short groups. */
export function temporaryPassword(): string {
  const alphabet = "abcdefghjkmnpqrstuvwxyz23456789";
  const bytes = randomBytes(12);
  const chars = [...bytes].map((b) => alphabet[b % alphabet.length]).join("");
  return `${chars.slice(0, 4)}-${chars.slice(4, 8)}-${chars.slice(8, 12)}`;
}

export function signOutEverywhere(userId: number) {
  db.prepare("DELETE FROM sessions WHERE user_id = ?").run(userId);
}

export function setVisibility(userId: number, visibility: "public" | "private") {
  db.prepare("UPDATE users SET visibility = ? WHERE id = ?").run(visibility, userId);
}

export function clearBio(userId: number) {
  db.prepare("UPDATE users SET bio = '' WHERE id = ?").run(userId);
}

export function withdrawStudent(userId: number, concentrationId: number) {
  db.prepare("DELETE FROM enrollments WHERE user_id = ? AND concentration_id = ?").run(userId, concentrationId);
}

/** Clears a student's completed lessons in one course, so they can take it afresh. */
export function resetCourse(userId: number, courseId: string) {
  db.prepare("DELETE FROM lesson_progress WHERE user_id = ? AND course_id = ?").run(userId, courseId);
}

// ——— The Commons ———

export type RecentPost = {
  id: number; title: string | null; body: string; created_at: string; parent_id: number | null;
  user_id: number; user_name: string; concentration: string; subject_slug: string; slug: string; thread_id: number;
};

export function recentPosts(limit = 60): RecentPost[] {
  return db.prepare(`
    SELECT p.id, p.title, p.body, p.created_at, p.parent_id, p.user_id, u.name AS user_name,
      c.name AS concentration, c.subject_slug, c.slug, COALESCE(p.parent_id, p.id) AS thread_id
    FROM posts p JOIN users u ON u.id = p.user_id JOIN concentrations c ON c.id = p.concentration_id
    ORDER BY p.created_at DESC, p.id DESC LIMIT ?
  `).all(limit) as RecentPost[];
}

/** Removes any post; a thread's opening post takes its replies with it. */
export function removeAnyPost(id: number) {
  db.prepare("DELETE FROM posts WHERE id = ? OR parent_id = ?").run(id, id);
}

// ——— The academy at a glance ———

export function siteStats() {
  const one = (sql: string) => (db.prepare(sql).get() as { n: number }).n;
  return {
    lessons: one("SELECT COUNT(*) AS n FROM lesson_progress"),
    lessons30: one("SELECT COUNT(*) AS n FROM lesson_progress WHERE completed_at >= datetime('now', '-30 days')"),
    essays: one("SELECT COUNT(*) AS n FROM essays"),
    posts30: one("SELECT COUNT(*) AS n FROM posts WHERE created_at >= datetime('now', '-30 days')"),
    openReports: one("SELECT COUNT(*) AS n FROM corrections WHERE status = 'open'"),
    capstones: one("SELECT COUNT(*) AS n FROM capstones"),
    openCourses: one("SELECT COUNT(*) AS n FROM courses WHERE COALESCE(json_array_length(content, '$.lessons'), 0) > 0"),
    allCourses: one("SELECT COUNT(*) AS n FROM courses"),
  };
}
