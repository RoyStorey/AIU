"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { currentUser, endSession, hashPassword, requireUser, startSession, verifyPassword } from "@/lib/auth";
import { getConcentrationById, getCourse, getSubject, search } from "@/lib/catalogue";
import { forgeAvailable } from "@/lib/forge";
import { PASSING, enroll, recordLesson, withdraw } from "@/lib/progress";
import { ESSAY_LIMITS } from "@/lib/schema";
import {
  continueStudies as beginContinuation,
  prepareCourse as beginCourse,
  proposeConcentration as beginConcentration,
  retryConcentration,
  startInquiry,
  submitEssay as beginGrading,
} from "@/lib/registrar";

export type FormState = { error?: string } | undefined;

const text = (form: FormData, key: string) => String(form.get(key) ?? "").trim();

/** Only same-site paths may be used as a post-sign-in destination. */
const safeNext = (next: string) => (next.startsWith("/") && !next.startsWith("//") ? next : "/study");

// ——— Matriculation ———

export async function signUp(_: FormState, form: FormData): Promise<FormState> {
  const name = text(form, "name");
  const email = text(form, "email").toLowerCase();
  const password = String(form.get("password") ?? "");
  if (!name) return { error: "Please give your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Please give a valid email address." };
  if (password.length < 8) return { error: "Your password must be at least eight characters." };
  if (db.prepare("SELECT 1 FROM users WHERE email = ?").get(email)) {
    return { error: "A student with that email has already matriculated. Please sign in." };
  }
  const { id } = db.prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?) RETURNING id")
    .get(name, email, hashPassword(password)) as { id: number };
  await startSession(id);
  redirect(safeNext(text(form, "next") || "/faculties"));
}

export async function signIn(_: FormState, form: FormData): Promise<FormState> {
  const email = text(form, "email").toLowerCase();
  const password = String(form.get("password") ?? "");
  const user = db.prepare("SELECT id, password_hash FROM users WHERE email = ?").get(email) as
    | { id: number; password_hash: string }
    | undefined;
  if (!user || !verifyPassword(password, user.password_hash)) {
    return { error: "That email and password do not match our records." };
  }
  await startSession(user.id);
  redirect(safeNext(text(form, "next")));
}

export async function signOut() {
  await endSession();
  redirect("/");
}

// ——— Inquiry: “I want to learn …” ———

export async function inquire(_: FormState, form: FormData): Promise<FormState> {
  const query = text(form, "q");
  if (!query) return { error: "Tell us what you would like to study." };

  const [best] = search(query);
  if (best?.kind === "subject") redirect(`/faculties/${best.subject.slug}`);
  if (best?.kind === "concentration") {
    redirect(`/faculties/${best.concentration.subject_slug}/${best.concentration.slug}`);
  }
  if (best?.kind === "course") redirect(`/courses/${best.course.id}`);

  if (!forgeAvailable()) {
    return {
      error: `Cornerstone does not yet teach “${query}”, and new programs can only be drafted once the forge is configured with an Anthropic API key.`,
    };
  }
  redirect(`/inquiries/${startInquiry(query)}`);
}

// ——— Programs of study ———

export async function declare(concentrationId: number) {
  const concentration = getConcentrationById(concentrationId);
  if (!concentration) return;
  const path = `/faculties/${concentration.subject_slug}/${concentration.slug}`;
  const user = await requireUser(path);
  enroll(user.id, concentrationId);
  revalidatePath(path);
}

export async function withdrawFrom(concentrationId: number) {
  const user = await requireUser();
  withdraw(user.id, concentrationId);
  revalidatePath("/study");
}

export async function proposeConcentration(_: FormState, form: FormData): Promise<FormState> {
  const subjectSlug = text(form, "subject");
  const name = text(form, "name");
  const note = text(form, "note");
  const subject = getSubject(subjectSlug);
  if (!subject) return { error: "That faculty does not exist." };
  await requireUser(`/faculties/${subjectSlug}`);
  if (name.length < 3) return { error: "Please name the concentration you would like to study." };
  if (!forgeAvailable()) return { error: "New concentrations can be drafted once the forge is configured with an Anthropic API key." };
  redirect(`/faculties/${subjectSlug}/${beginConcentration(subjectSlug, name, note)}`);
}

export async function retryProposal(concentrationId: number) {
  const c = getConcentrationById(concentrationId);
  if (!c) return;
  await requireUser();
  const slug = retryConcentration(concentrationId);
  redirect(`/faculties/${c.subject_slug}/${slug ?? c.slug}`);
}

export async function continueStudies(concentrationId: number) {
  await requireUser();
  const c = getConcentrationById(concentrationId);
  if (!c || !forgeAvailable()) return;
  beginContinuation(concentrationId);
  revalidatePath(`/faculties/${c.subject_slug}/${c.slug}`);
}

// ——— Courses and lessons ———

export async function prepareCourse(courseId: string) {
  await requireUser(`/courses/${courseId}`);
  if (!forgeAvailable()) return;
  beginCourse(courseId);
  revalidatePath(`/courses/${courseId}`);
}

/**
 * Grades a knowledge check on the server, so a lesson is only recorded as
 * complete when the student has truly answered enough questions correctly.
 */
export async function submitKnowledgeCheck(
  courseId: string,
  lessonIndex: number,
  answers: number[],
): Promise<{ answers: number[]; explanations: string[]; passed: boolean; signedIn: boolean }> {
  const course = getCourse(courseId);
  const lesson = course?.content?.lessons[lessonIndex];
  if (!lesson) throw new Error("No such lesson.");

  const correct = lesson.questions.map((q, i) => answers[i] === q.answer);
  const score = correct.filter(Boolean).length / lesson.questions.length;
  const passed = score >= PASSING;

  const user = await currentUser();
  if (user && passed) {
    recordLesson(user.id, courseId, lessonIndex, score);
    revalidatePath(`/courses/${courseId}`);
  }
  return {
    answers: lesson.questions.map((q) => q.answer),
    explanations: lesson.questions.map((q) => q.explanation),
    passed,
    signedIn: !!user,
  };
}

// ——— Written exercises ———

const words = (text: string) => text.split(/\s+/).filter(Boolean).length;

export async function submitEssay(_: FormState, form: FormData): Promise<FormState> {
  const courseId = text(form, "course");
  const lessonIndex = Number(form.get("lesson"));
  const response = text(form, "response");
  const user = await requireUser(`/courses/${courseId}/lessons/${lessonIndex + 1}`);

  if (!forgeAvailable()) return { error: "Written feedback requires the forge to be configured with an Anthropic API key." };
  const count = words(response);
  if (count < ESSAY_LIMITS.min) return { error: `Please write at least ${ESSAY_LIMITS.min} words; you have ${count}.` };
  if (count > ESSAY_LIMITS.max) return { error: `Please keep to ${ESSAY_LIMITS.max} words; you have ${count}.` };

  beginGrading(user.id, courseId, lessonIndex, response);
  revalidatePath(`/courses/${courseId}/lessons/${lessonIndex + 1}`);
}
