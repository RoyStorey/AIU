import "server-only";
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { db } from "@/lib/db";

const COOKIE = "aiu_session";
const SESSION_DAYS = 30;

export type User = { id: number; name: string; email: string; created_at: string };

export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  return `${salt.toString("hex")}:${hash.toString("hex")}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false; // accounts that cannot sign in, such as demonstration students
  const expected = Buffer.from(hash, "hex");
  const actual = scryptSync(password, Buffer.from(salt, "hex"), expected.length);
  return timingSafeEqual(expected, actual);
}

/**
 * Whether the visitor reached Cornerstone over HTTPS. Browsers silently refuse
 * a cookie marked Secure on a plain-HTTP site (localhost excepted), so the
 * session cookie is marked Secure only when the connection really is secure:
 * directly, or through a proxy that says so in X-Forwarded-Proto.
 * AIU_SECURE_COOKIES=true or false overrides the guess.
 */
async function overHttps(): Promise<boolean> {
  const forced = process.env.AIU_SECURE_COOKIES;
  if (forced === "true" || forced === "false") return forced === "true";
  const proto = (await headers()).get("x-forwarded-proto")?.split(",")[0].trim().toLowerCase();
  return proto === "https";
}

export async function startSession(userId: number) {
  const token = randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + SESSION_DAYS * 86_400_000);
  db.prepare("INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)")
    .run(token, userId, expires.toISOString());
  db.prepare("UPDATE users SET last_seen_at = datetime('now') WHERE id = ?").run(userId);
  (await cookies()).set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: await overHttps(),
    expires,
    path: "/",
  });
}

export async function endSession() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (token) db.prepare("DELETE FROM sessions WHERE token = ?").run(token);
  jar.delete(COOKIE);
}

export const currentUser = cache(async (): Promise<User | null> => {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  const row = db.prepare(`
    SELECT u.id, u.name, u.email, u.created_at, u.last_seen_at
    FROM sessions s JOIN users u ON u.id = s.user_id
    WHERE s.token = ? AND s.expires_at > ?
  `).get(token, new Date().toISOString()) as (User & { last_seen_at: string | null }) | undefined;
  if (!row) return null;
  const { last_seen_at, ...user } = row;
  // Note when each student was last here, at most once an hour, so the admin panel can tell who is active.
  if (!last_seen_at || Date.now() - Date.parse(last_seen_at.replace(" ", "T") + "Z") > 3_600_000) {
    db.prepare("UPDATE users SET last_seen_at = datetime('now') WHERE id = ?").run(user.id);
  }
  return user;
});

/** Administrators manage accounts. They are named in AIU_ADMIN_EMAILS. */
export function isAdmin(user: User | null): boolean {
  if (!user) return false;
  const emails = (process.env.AIU_ADMIN_EMAILS ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
  return emails.includes(user.email.toLowerCase());
}

export async function requireUser(next?: string): Promise<User> {
  const user = await currentUser();
  if (!user) redirect(next ? `/login?next=${encodeURIComponent(next)}` : "/login");
  return user;
}
