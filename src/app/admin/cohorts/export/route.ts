import { isAdminEmail } from "@/lib/admin";
import { getEnrollmentRows } from "@/lib/admin-data";
import { getCurrentUser } from "@/lib/auth";

const csv = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;

export async function GET(request: Request) {
  const user = await getCurrentUser();
  if (!user || !isAdminEmail(user.email)) return new Response("Not found", { status: 404 });
  const { searchParams } = new URL(request.url);
  const program = searchParams.get("program");
  const cohort = searchParams.get("cohort");

  const rows = (await getEnrollmentRows()).filter(
    (r) => r.enrollment.status !== "withdrawn" && (!program || r.enrollment.programSlug === program) && (!cohort || r.cohortKey === cohort),
  );
  const header = ["name", "email", "student_number", "program", "cohort", "concentration", "status", "courses_completed"];
  const lines = rows.map((r) =>
    [r.user.name, r.user.email, r.user.studentNumber, r.program?.title ?? r.enrollment.programSlug, r.cohortName, r.concentration ?? "", r.enrollment.status, r.coursesCompleted]
      .map(csv)
      .join(","),
  );
  return new Response([header.join(","), ...lines].join("\n") + "\n", {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="aiu-${program ?? "all"}-${cohort ?? "all"}.csv"`,
    },
  });
}
