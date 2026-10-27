"use server";

import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { getActiveEnrollment } from "@/lib/academics";
import { getCurrentUser, newId } from "@/lib/auth";
import { getProgram } from "@/lib/content";
import { db, schema } from "@/lib/db";

export async function enrollInProgram(formData: FormData) {
  const slug = String(formData.get("program") ?? "");
  const program = getProgram(slug);
  if (!program) redirect("/programs");

  const user = await getCurrentUser();
  if (!user) redirect(`/apply?program=${slug}`);

  const active = await getActiveEnrollment(user.id);
  if (active?.program.slug === slug) redirect("/student");
  if (active) {
    // Switching programs: credit already earned stays on the student's record.
    if (formData.get("confirmSwitch") !== "yes") redirect(`/programs/${slug}?switch=1`);
    await db
      .update(schema.enrollments)
      .set({ status: "withdrawn", endedAt: new Date() })
      .where(and(eq(schema.enrollments.id, active.enrollment.id), eq(schema.enrollments.userId, user.id)));
  }

  await db.insert(schema.enrollments).values({ id: newId(), userId: user.id, programSlug: slug, status: "active" });
  redirect("/student?welcome=1");
}
