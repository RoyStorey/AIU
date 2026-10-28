import "server-only";
import { db } from "@/lib/db";
import { defaultCapstone } from "@/content/capstones";
import { getConcentrationById, listCourses, type Concentration } from "@/lib/catalogue";
import { examineCapstone } from "@/lib/forge";
import { Capstone, type Assessment } from "@/lib/schema";

/** The capstone brief for a concentration: its own, or the faculty's general brief. */
export function capstoneFor(concentration: Concentration & { capstone?: string | null }): Capstone {
  const row = concentration.capstone !== undefined
    ? concentration
    : (db.prepare("SELECT capstone FROM concentrations WHERE id = ?").get(concentration.id) as { capstone: string | null });
  if (row.capstone) {
    const parsed = Capstone.safeParse(JSON.parse(row.capstone));
    if (parsed.success) return parsed.data;
  }
  return defaultCapstone(concentration.name);
}

export type Submission = {
  id: number;
  user_id: number;
  concentration_id: number;
  option: string;
  title: string;
  abstract: string;
  body: string;
  status: "drafting" | "ready" | "failed";
  assessment: Assessment | null;
  passed: boolean;
  error: string | null;
  created_at: string;
};

type Row = Omit<Submission, "assessment" | "passed"> & { assessment: string | null; passed: number };

const toSubmission = (r: Row): Submission => ({
  ...r,
  assessment: r.assessment ? (JSON.parse(r.assessment) as Assessment) : null,
  passed: r.passed === 1,
});

export function getSubmission(id: number): Submission | null {
  const row = db.prepare("SELECT * FROM capstones WHERE id = ?").get(id) as Row | undefined;
  return row ? toSubmission(row) : null;
}

/** A student's capstone submissions in one concentration, newest first. */
export function submissionsFor(userId: number, concentrationId: number): Submission[] {
  return (db.prepare("SELECT * FROM capstones WHERE user_id = ? AND concentration_id = ? ORDER BY id DESC")
    .all(userId, concentrationId) as Row[]).map(toSubmission);
}

/** Every capstone a student has passed, in any concentration. */
export function passedCapstones(userId: number): (Submission & { concentration: string; subject_slug: string; slug: string })[] {
  return (db.prepare(`
    SELECT k.*, c.name AS concentration, c.subject_slug, c.slug FROM capstones k
    JOIN concentrations c ON c.id = k.concentration_id
    WHERE k.user_id = ? AND k.passed = 1 ORDER BY k.id
  `).all(userId) as (Row & { concentration: string; subject_slug: string; slug: string })[]).map((r) => ({ ...toSubmission(r), concentration: r.concentration, subject_slug: r.subject_slug, slug: r.slug }));
}

export type MasterEntry = { submission: Submission; user: { id: number; name: string; demo: boolean } };

/** The Masters of a concentration, with the capstone that made each one. Private profiles are left out. */
export function mastersOf(concentrationId: number): MasterEntry[] {
  const rows = db.prepare(`
    SELECT k.*, u.name AS user_name, u.demo AS user_demo FROM capstones k JOIN users u ON u.id = k.user_id
    WHERE k.concentration_id = ? AND k.passed = 1 AND u.visibility = 'public'
      AND k.id = (SELECT MIN(id) FROM capstones WHERE user_id = k.user_id AND concentration_id = k.concentration_id AND passed = 1)
    ORDER BY k.created_at
  `).all(concentrationId) as (Row & { user_name: string; user_demo: number })[];
  return rows.map((r) => ({ submission: toSubmission(r), user: { id: r.user_id, name: r.user_name, demo: r.user_demo === 1 } }));
}

function inBackground(work: () => Promise<void>, onError: (message: string) => void) {
  work().catch((error: unknown) => {
    console.error(error);
    onError(error instanceof Error ? error.message : String(error));
  });
}

/** Records a capstone and sends it to an examiner in the background. */
export function submitCapstone(userId: number, concentrationId: number, entry: { option: string; title: string; abstract: string; body: string }): number {
  const concentration = getConcentrationById(concentrationId);
  if (!concentration) throw new Error("No such concentration.");
  const brief = capstoneFor(concentration);
  const { id } = db.prepare(`
    INSERT INTO capstones (user_id, concentration_id, option, title, abstract, body) VALUES (?, ?, ?, ?, ?, ?) RETURNING id
  `).get(userId, concentrationId, entry.option, entry.title, entry.abstract, entry.body) as { id: number };
  const fail = (error: string) => db.prepare("UPDATE capstones SET status = 'failed', error = ? WHERE id = ?").run(error, id);

  inBackground(async () => {
    const assessment = await examineCapstone({
      concentration: concentration.name,
      courses: listCourses(concentrationId).filter((c) => c.stage <= 4).map((c) => `${c.code} ${c.title}`),
      brief,
      ...entry,
    });
    db.prepare("UPDATE capstones SET status = 'ready', assessment = ?, passed = ?, error = NULL WHERE id = ?")
      .run(JSON.stringify(assessment), assessment.mark === "Revise" ? 0 : 1, id);
  }, fail);
  return id;
}
