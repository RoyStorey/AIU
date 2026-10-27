import "server-only";
import { notFound } from "next/navigation";
import { requireUser } from "./auth";

/** Administrators are listed by email in AIU_ADMIN_EMAILS (comma-separated). */
export function isAdminEmail(email: string) {
  const list = (process.env.AIU_ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return list.includes(email.toLowerCase());
}

export async function requireAdmin() {
  const user = await requireUser("/admin");
  // A 404 rather than a 403 keeps the panel's existence quiet.
  if (!isAdminEmail(user.email)) notFound();
  return user;
}
