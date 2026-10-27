import "server-only";
import { cache } from "react";
import { getAllPrograms, getCourses, programsUsingCourse } from "./content";
import { db, schema } from "./db";

/** Programs an administrator has hidden: unlisted and closed to new enrollment, but kept intact. */
export const getHiddenSlugs = cache(async () => {
  const rows = await db.select().from(schema.programSettings);
  return new Set(rows.filter((r) => r.hidden).map((r) => r.slug));
});

export async function getVisiblePrograms() {
  const hidden = await getHiddenSlugs();
  return getAllPrograms().filter((p) => !hidden.has(p.slug));
}

export async function isProgramVisible(slug: string) {
  return !(await getHiddenSlugs()).has(slug);
}

/** Catalog courses that belong to at least one visible program. */
export async function getVisibleCourses() {
  const programs = await getVisiblePrograms();
  return getCourses().filter((c) => programsUsingCourse(c.code, programs).length > 0);
}
