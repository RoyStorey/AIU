import "server-only";
import { db } from "@/lib/db";

/** The common room of a concentration: threads of discussion among its students. */

export type Post = {
  id: number;
  concentration_id: number;
  user_id: number;
  user_name: string;
  parent_id: number | null;
  title: string;
  body: string;
  created_at: string;
};

export type Thread = Post & { replies: number; last_at: string };

export function threads(concentrationId: number): Thread[] {
  return db.prepare(`
    SELECT p.*, u.name AS user_name,
      (SELECT COUNT(*) FROM posts r WHERE r.parent_id = p.id) AS replies,
      COALESCE((SELECT MAX(created_at) FROM posts r WHERE r.parent_id = p.id), p.created_at) AS last_at
    FROM posts p JOIN users u ON u.id = p.user_id
    WHERE p.concentration_id = ? AND p.parent_id IS NULL
    ORDER BY last_at DESC
  `).all(concentrationId) as Thread[];
}

/** A thread's opening post and its replies, in order. */
export function thread(id: number): { opening: Post; replies: Post[] } | null {
  const opening = db.prepare(`
    SELECT p.*, u.name AS user_name FROM posts p JOIN users u ON u.id = p.user_id WHERE p.id = ? AND p.parent_id IS NULL
  `).get(id) as Post | undefined;
  if (!opening) return null;
  const replies = db.prepare(`
    SELECT p.*, u.name AS user_name FROM posts p JOIN users u ON u.id = p.user_id WHERE p.parent_id = ? ORDER BY p.id
  `).all(id) as Post[];
  return { opening, replies };
}

export function startThread(concentrationId: number, userId: number, title: string, body: string): number {
  const { id } = db.prepare(`
    INSERT INTO posts (concentration_id, user_id, title, body) VALUES (?, ?, ?, ?) RETURNING id
  `).get(concentrationId, userId, title, body) as { id: number };
  return id;
}

export function reply(threadId: number, userId: number, body: string) {
  const opening = db.prepare("SELECT concentration_id FROM posts WHERE id = ? AND parent_id IS NULL").get(threadId) as
    | { concentration_id: number }
    | undefined;
  if (!opening) throw new Error("No such thread.");
  db.prepare("INSERT INTO posts (concentration_id, user_id, parent_id, body) VALUES (?, ?, ?, ?)")
    .run(opening.concentration_id, userId, threadId, body);
}

export function deletePost(id: number, userId: number) {
  db.prepare("DELETE FROM posts WHERE id = ? AND user_id = ?").run(id, userId);
}

/** Recent posts by a student, for their profile. */
export function postsBy(userId: number, limit = 5): (Post & { concentration: string; subject_slug: string; slug: string; thread_id: number; thread_title: string })[] {
  return db.prepare(`
    SELECT p.*, u.name AS user_name, c.name AS concentration, c.subject_slug, c.slug,
      COALESCE(p.parent_id, p.id) AS thread_id,
      COALESCE((SELECT title FROM posts t WHERE t.id = p.parent_id), p.title) AS thread_title
    FROM posts p JOIN users u ON u.id = p.user_id JOIN concentrations c ON c.id = p.concentration_id
    WHERE p.user_id = ? ORDER BY p.id DESC LIMIT ?
  `).all(userId, limit) as (Post & { concentration: string; subject_slug: string; slug: string; thread_id: number; thread_title: string })[];
}

export type Member = { id: number; name: string; demo: boolean; declared_at: string };

/** Students who have declared a concentration and keep a public profile. */
export function members(concentrationId: number): Member[] {
  return (db.prepare(`
    SELECT u.id, u.name, u.demo, e.declared_at FROM enrollments e JOIN users u ON u.id = e.user_id
    WHERE e.concentration_id = ? AND u.visibility = 'public' ORDER BY e.declared_at
  `).all(concentrationId) as (Omit<Member, "demo"> & { demo: number })[]).map((m) => ({ ...m, demo: m.demo === 1 }));
}
