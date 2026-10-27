import "server-only";
import { notFound, redirect } from "next/navigation";
import { courseAccess, getActiveEnrollment, getCourseRecords } from "./academics";
import { requireUser } from "./auth";
import { getCourse } from "./content";
import { codeFromSlug, courseSlug } from "./content/schema";

/**
 * Loads everything a classroom page or action needs and enforces access:
 * signed in, enrolled, the course is published, and it is open to this student.
 */
export async function loadClassroom(slugOrCode: string) {
  const code = codeFromSlug(slugOrCode) ?? slugOrCode;
  const course = getCourse(code);
  if (!course) notFound();

  const user = await requireUser(`/student/courses/${courseSlug(course.code)}`);
  const active = await getActiveEnrollment(user.id);
  const records = await getCourseRecords(user.id);
  const record = records.get(course.code);

  // Students keep access to courses they have records for, even after switching programs.
  if (!record) {
    if (!active) redirect("/student");
    const access = courseAccess(active.program, records, course.code);
    if (!access.allowed || course.status !== "published") redirect(`/courses/${courseSlug(course.code)}`);
  }
  if (course.status !== "published") redirect(`/courses/${courseSlug(course.code)}`);

  return { user, course, active, records, record };
}
