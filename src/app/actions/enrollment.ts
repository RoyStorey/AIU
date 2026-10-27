"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { canChangeConcentration, getActiveEnrollment, getCourseRecords } from "@/lib/academics";
import { getCurrentUser, newId } from "@/lib/auth";
import { openCohorts, toDateKey } from "@/lib/calendar";
import { getProgram } from "@/lib/content";
import { db, schema } from "@/lib/db";
import { isProgramVisible } from "@/lib/visibility";

export async function enrollInProgram(formData: FormData) {
  const slug = String(formData.get("program") ?? "");
  const program = getProgram(slug);
  if (!program || !(await isProgramVisible(slug))) redirect("/programs");

  const user = await getCurrentUser();
  if (!user) redirect(`/apply?program=${slug}`);

  const cohort = String(formData.get("cohort") ?? "");
  if (!openCohorts().some((t) => toDateKey(t.start) === cohort)) redirect(`/enroll/${slug}?error=cohort`);

  const concentration = String(formData.get("concentration") ?? "") || null;
  if (concentration && !program.concentrations.some((c) => c.slug === concentration)) redirect(`/enroll/${slug}`);

  const active = await getActiveEnrollment(user.id);
  if (active?.program.slug === slug) redirect("/student");
  if (active) {
    // Switching programs: credit already earned stays on the student's record.
    if (formData.get("confirmSwitch") !== "yes") redirect(`/enroll/${slug}?error=confirm`);
    await db
      .update(schema.enrollments)
      .set({ status: "withdrawn", endedAt: new Date() })
      .where(and(eq(schema.enrollments.id, active.enrollment.id), eq(schema.enrollments.userId, user.id)));
  }

  await db.insert(schema.enrollments).values({
    id: newId(),
    userId: user.id,
    programSlug: slug,
    status: "active",
    cohortStart: cohort,
    concentration,
  });
  redirect("/student?welcome=1");
}

export async function declareConcentration(formData: FormData) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const active = await getActiveEnrollment(user.id);
  if (!active) redirect("/student");
  const concentration = String(formData.get("concentration") ?? "");
  if (!active.program.concentrations.some((c) => c.slug === concentration)) redirect("/student");
  if (!canChangeConcentration(active.program, await getCourseRecords(user.id))) redirect("/student");

  await db.update(schema.enrollments).set({ concentration }).where(eq(schema.enrollments.id, active.enrollment.id));
  revalidatePath("/student", "layout");
  redirect("/student?declared=1");
}
