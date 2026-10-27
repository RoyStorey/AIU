import "server-only";
import { eq } from "drizzle-orm";
import { cohortStartOf } from "./academics";
import { termName, termsFrom, toDateKey } from "./calendar";
import { getProgram } from "./content";
import { db, schema } from "./db";

/** Every enrollment joined to its student, with the cohort resolved to a date key and a display name. */
export async function getEnrollmentRows() {
  const rows = await db
    .select({ enrollment: schema.enrollments, user: schema.users })
    .from(schema.enrollments)
    .innerJoin(schema.users, eq(schema.users.id, schema.enrollments.userId));
  const completed = await db.select().from(schema.courseRecords).where(eq(schema.courseRecords.status, "completed"));
  const doneByUser = new Map<string, number>();
  for (const r of completed) doneByUser.set(r.userId, (doneByUser.get(r.userId) ?? 0) + 1);

  return rows.map(({ enrollment, user }) => {
    const start = cohortStartOf(enrollment);
    const program = getProgram(enrollment.programSlug);
    return {
      enrollment,
      user,
      program,
      cohortKey: toDateKey(start),
      cohortName: termName(termsFrom(start, 1)[0]),
      concentration: program?.concentrations.find((c) => c.slug === enrollment.concentration)?.name ?? null,
      coursesCompleted: doneByUser.get(user.id) ?? 0,
    };
  });
}

export type EnrollmentRow = Awaited<ReturnType<typeof getEnrollmentRows>>[number];
