"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { currentUser, endSession, hashPassword, requireUser, startSession, verifyPassword } from "@/lib/auth";
import { getConcentrationById, getCourse, getSubject, search } from "@/lib/catalogue";
import { forgeAvailable } from "@/lib/forge";
import { PASSING, enroll, recordLesson, standing, withdraw } from "@/lib/progress";
import { CAPSTONE_LIMITS, ESSAY_LIMITS } from "@/lib/schema";
import { capstoneFor, submitCapstone as beginExamination } from "@/lib/capstone";
import { reply, startThread as beginThread, deletePost as removePost } from "@/lib/community";
import {
  KINDS, STATUSES, getCorrection, reportCorrection as fileCorrection,
  settleCorrection as settle, withdrawCorrection as unfile, type Kind, type Status,
} from "@/lib/corrections";
import { saveNote as storeNote } from "@/lib/notes";
import { isFaculty, updateProfile as storeProfile } from "@/lib/people";
import { choiceOrder } from "@/lib/shuffle";
import {
  continueStudies as beginContinuation,
  prepareCourse as beginCourse,
  proposeConcentration as beginConcentration,
  retryConcentration,
  startInquiry,
  submitEssay as beginGrading,
} from "@/lib/registrar";

export type FormState = { error?: string; notice?: string; nonce?: number } | undefined;

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

  // Choices are shown in a shuffled order; translate between shown positions and original indices.
  const orders = lesson.questions.map((q, i) => choiceOrder(courseId, lessonIndex, i, q.choices.length));
  const correct = lesson.questions.map((q, i) => orders[i][answers[i]] === q.answer);
  const score = correct.filter(Boolean).length / lesson.questions.length;
  const passed = score >= PASSING;

  const user = await currentUser();
  if (user && passed) {
    recordLesson(user.id, courseId, lessonIndex, score);
    revalidatePath(`/courses/${courseId}`);
  }
  return {
    answers: lesson.questions.map((q, i) => orders[i].indexOf(q.answer)),
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
  const user = await requireUser(`/courses/${courseId}/lessons/${lessonIndex + 1}/exercises`);

  if (!forgeAvailable()) return { error: "Written feedback requires the forge to be configured with an Anthropic API key." };
  const count = words(response);
  if (count < ESSAY_LIMITS.min) return { error: `Please write at least ${ESSAY_LIMITS.min} words; you have ${count}.` };
  if (count > ESSAY_LIMITS.max) return { error: `Please keep to ${ESSAY_LIMITS.max} words; you have ${count}.` };

  beginGrading(user.id, courseId, lessonIndex, response);
  revalidatePath(`/courses/${courseId}/lessons/${lessonIndex + 1}/exercises`);
}

// ——— Profiles ———

export async function updateProfile(_: FormState, form: FormData): Promise<FormState> {
  const user = await requireUser("/study");
  const bio = text(form, "bio");
  if (bio.length > 1200) return { error: "Please keep your introduction under 1,200 characters." };
  storeProfile(user.id, bio, form.get("visibility") === "private" ? "private" : "public");
  revalidatePath(`/students/${user.id}`);
  revalidatePath("/study");
  return { notice: "Your profile has been saved." };
}

// ——— Comments and corrections ———

export async function reportCorrection(_: FormState, form: FormData): Promise<FormState> {
  const courseId = text(form, "course");
  const lessonIndex = Number(form.get("lesson"));
  const page = text(form, "page");
  const kind = text(form, "kind") as Kind;
  const quote = text(form, "quote");
  const body = text(form, "body");
  const back = text(form, "back") || `/courses/${courseId}/lessons/${lessonIndex + 1}`;
  const user = await requireUser(back);

  if (!(kind in KINDS)) return { error: "Please say what kind of report this is." };
  if (body.length < 20) return { error: "Please explain the problem in a sentence or two, with a source if you have one." };
  if (body.length > 4000 || quote.length > 600) return { error: "Please keep your report shorter." };
  const course = getCourse(courseId);
  const lesson = course?.content?.lessons[lessonIndex];
  if (!lesson) return { error: "That lesson does not exist." };
  const pageIndex = /^\d+$/.test(page) && Number(page) < lesson.pages.length ? Number(page) : null;

  fileCorrection({ userId: user.id, courseId, lessonIndex, pageIndex, kind, quote, body });
  revalidatePath(back);
  return { notice: "Thank you. Your report has been posted below." };
}

export async function settleCorrection(form: FormData) {
  const user = await requireUser();
  if (!isFaculty(user)) return;
  const id = Number(form.get("id"));
  const status = text(form, "status") as Status;
  const correction = getCorrection(id);
  if (!correction || !(status in STATUSES)) return;
  settle(id, status, text(form, "response"));
  revalidatePath(`/courses/${correction.course_id}/lessons/${correction.lesson_index + 1}`);
  revalidatePath("/corrections");
}

export async function withdrawCorrection(id: number) {
  const user = await requireUser();
  const correction = getCorrection(id);
  if (!correction) return;
  unfile(id, user.id);
  revalidatePath(`/courses/${correction.course_id}/lessons/${correction.lesson_index + 1}`);
}

// ——— The commonplace book ———

export async function saveNote(_: FormState, form: FormData): Promise<FormState> {
  const courseId = text(form, "course");
  const lesson = Number(form.get("lesson"));
  const page = Number(form.get("page"));
  const user = await requireUser(`/courses/${courseId}/lessons/${lesson + 1}/${page + 1}`);
  const body = String(form.get("body") ?? "");
  if (body.length > 20000) return { error: "That note is too long to keep." };
  if (!getCourse(courseId)?.content?.lessons[lesson]?.pages[page]) return { error: "That page does not exist." };
  storeNote(user.id, courseId, lesson, page, body);
  revalidatePath("/study/notes");
  return { notice: body.trim() ? "Saved to your commonplace book." : "Note removed." };
}

// ——— Capstones ———

export async function submitCapstone(_: FormState, form: FormData): Promise<FormState> {
  const concentrationId = Number(form.get("concentration"));
  const concentration = getConcentrationById(concentrationId);
  if (!concentration) return { error: "That concentration does not exist." };
  const path = `/faculties/${concentration.subject_slug}/${concentration.slug}/capstone`;
  const user = await requireUser(path);

  const mine = standing(user.id, concentrationId);
  if (!mine?.complete) return { error: "The capstone opens once you have completed every course in the program." };
  if (mine.level === "master") return { error: "You have already passed this capstone." };
  if (!forgeAvailable()) return { error: "Capstones are examined once the forge is configured with an Anthropic API key." };

  const brief = capstoneFor(concentration);
  const title = text(form, "title");
  const abstract = text(form, "abstract");
  const body = text(form, "body");
  const option = text(form, "option");
  if (title.length < 4) return { error: "Please give your capstone a title." };
  const abstractWords = words(abstract);
  if (abstractWords < 50 || abstractWords > 300) return { error: `Please write an abstract of 50 to 300 words; you have ${abstractWords}.` };
  const min = Math.max(CAPSTONE_LIMITS.min, brief.words.min);
  const max = Math.min(CAPSTONE_LIMITS.max, brief.words.max);
  const count = words(body);
  if (count < min) return { error: `The brief asks for at least ${min.toLocaleString()} words; you have ${count.toLocaleString()}.` };
  if (count > max) return { error: `The brief allows at most ${max.toLocaleString()} words; you have ${count.toLocaleString()}.` };

  beginExamination(user.id, concentrationId, { option, title, abstract, body });
  revalidatePath(path);
  redirect(path);
}

// ——— The common room ———

export async function startThread(_: FormState, form: FormData): Promise<FormState> {
  const concentration = getConcentrationById(Number(form.get("concentration")));
  if (!concentration) return { error: "That concentration does not exist." };
  const base = `/faculties/${concentration.subject_slug}/${concentration.slug}/common-room`;
  const user = await requireUser(base);
  const title = text(form, "title");
  const body = text(form, "body");
  if (title.length < 4 || title.length > 160) return { error: "Please give your thread a title of a few words." };
  if (body.length < 10) return { error: "Please write a little more." };
  if (body.length > 10000) return { error: "Please keep your post under 10,000 characters." };
  const id = beginThread(concentration.id, user.id, title, body);
  redirect(`${base}/${id}`);
}

export async function replyToThread(_: FormState, form: FormData): Promise<FormState> {
  const threadId = Number(form.get("thread"));
  const back = text(form, "back");
  const user = await requireUser(back);
  const body = text(form, "body");
  if (body.length < 2) return { error: "Please write your reply." };
  if (body.length > 10000) return { error: "Please keep your reply under 10,000 characters." };
  reply(threadId, user.id, body);
  revalidatePath(back);
  return { notice: "Posted.", nonce: Date.now() };
}

export async function deletePost(id: number, back: string) {
  const user = await requireUser();
  removePost(id, user.id);
  revalidatePath(back);
  redirect(back);
}
