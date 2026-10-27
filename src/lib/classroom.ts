import "server-only";
import { notFound, redirect } from "next/navigation";
import { courseAccess, getActiveEnrollment, getCourseRecords, termOfCourse } from "./academics";
import { requireUser } from "./auth";
import { getCourse } from "./content";
import { codeFromSlug, courseSlug } from "./content/schema";

/**
 * Loads everything a classroom page or action needs and enforces access:
 * signed in, enrolled, the course is published, and its term has begun for
 * the student's cohort (or the student already has a record for it).
 */
export async function loadClassroom(slugOrCode: string) {
  const code = codeFromSlug(slugOrCode) ?? slugOrCode;
  const course = getCourse(code);
  if (!course) notFound();
  const catalogPage = `/courses/${courseSlug(course.code)}`;

  const user = await requireUser(`/student/courses/${courseSlug(course.code)}`);
  const active = await getActiveEnrollment(user.id);
  const records = await getCourseRecords(user.id);
  const record = records.get(course.code);

  if (course.status !== "published") redirect(catalogPage);
  if (!record) {
    if (!active) redirect("/student");
    if (!courseAccess(active.plan, records, course.code).allowed) redirect(catalogPage);
  }
  const term = active ? termOfCourse(active.plan, course.code)?.calendar ?? null : null;
  return { user, course, active, records, record, term };
}
