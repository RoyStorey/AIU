"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { z } from "zod";
import { endSession, hashPassword, newId, newStudentNumber, startSession, verifyPassword } from "@/lib/auth";
import { getProgram } from "@/lib/content";
import { db, schema } from "@/lib/db";

export type FormState = { error?: string } | undefined;

const SignUp = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().toLowerCase().email("Please enter a valid email address."),
  password: z.string().min(8, "Your password must be at least 8 characters."),
  program: z.string().optional(),
});

export async function signUp(_: FormState, formData: FormData): Promise<FormState> {
  const parsed = SignUp.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.issues[0].message };
  const { name, email, password, program } = parsed.data;

  const existing = await db.select({ id: schema.users.id }).from(schema.users).where(eq(schema.users.email, email)).get();
  if (existing) return { error: "An account with this email already exists. Please sign in instead." };

  const id = newId();
  await db.insert(schema.users).values({
    id,
    name,
    email,
    studentNumber: newStudentNumber(),
    passwordHash: await hashPassword(password),
  });
  if (program && getProgram(program)) {
    await db.insert(schema.enrollments).values({ id: newId(), userId: id, programSlug: program, status: "active" });
  }
  await startSession(id);
  redirect(program ? "/student?welcome=1" : "/programs");
}

export async function signIn(_: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const user = await db.select().from(schema.users).where(eq(schema.users.email, email)).get();
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return { error: "That email and password don't match our records." };
  }
  await startSession(user.id);
  const next = String(formData.get("next") ?? "");
  redirect(next.startsWith("/") && !next.startsWith("//") ? next : "/student");
}

export async function signOut() {
  await endSession();
  redirect("/");
}
