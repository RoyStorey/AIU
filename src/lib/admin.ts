import "server-only";
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
