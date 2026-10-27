"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin";
import { getProgram } from "@/lib/content";
import { db, schema } from "@/lib/db";

export async function setProgramHidden(formData: FormData) {
  await requireAdmin();
  const slug = String(formData.get("program") ?? "");
  if (!getProgram(slug)) return;
  const hidden = formData.get("hidden") === "true";
  await db
    .insert(schema.programSettings)
    .values({ slug, hidden, updatedAt: new Date() })
    .onConflictDoUpdate({ target: schema.programSettings.slug, set: { hidden, updatedAt: new Date() } });
  revalidatePath("/", "layout");
}
