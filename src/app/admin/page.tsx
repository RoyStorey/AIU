import Link from "next/link";
import { count } from "drizzle-orm";
import { formatDate, openCohorts, termName, toDateKey } from "@/lib/calendar";
import { getAllPrograms, getCourses } from "@/lib/content";
import { db, schema } from "@/lib/db";
import { getEnrollmentRows } from "@/lib/admin-data";
import { getHiddenSlugs } from "@/lib/visibility";

export default async function AdminOverview() {
  const [students] = await db.select({ n: count() }).from(schema.users);
  const rows = await getEnrollmentRows();
  const hidden = await getHiddenSlugs();
  const programs = getAllPrograms();
  const courses = getCourses();
  const published = courses.filter((c) => c.status === "published").length;
  const active = rows.filter((r) => r.enrollment.status === "active");

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold text-navy-900">Overview</h1>
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Student accounts" value={students.n} />
        <Stat label="Active enrollments" value={active.length} />
        <Stat label="Programs" value={programs.length} sub={`${hidden.size} hidden`} />
        <Stat label="Courses with materials" value={published} sub={`of ${courses.length} in the catalog`} />
      </dl>

      <section>
        <h2 className="text-xl font-semibold text-navy-900">Upcoming cohorts</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {openCohorts().map((t) => {
            const inCohort = active.filter((r) => r.cohortKey === toDateKey(t.start));
            return (
              <div key={t.start.toISOString()} className="rounded-xl border border-navy-100 bg-white p-5">
                <p className="font-semibold text-navy-900">{termName(t)}</p>
                <p className="text-sm text-navy-500">Begins {formatDate(t.start)}</p>
                <p className="mt-3 font-display text-3xl font-semibold text-navy-900">{inCohort.length}</p>
                <p className="text-xs text-navy-500">students enrolled</p>
              </div>
            );
          })}
        </div>
        <Link href="/admin/cohorts" className="mt-4 inline-block text-sm font-semibold text-navy-700">All cohorts →</Link>
      </section>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: number; sub?: string }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-5">
      <dt className="text-xs font-semibold uppercase tracking-wider text-navy-500">{label}</dt>
      <dd className="mt-2 font-display text-3xl font-semibold text-navy-900">{value}</dd>
      {sub && <dd className="text-xs text-navy-500">{sub}</dd>}
    </div>
  );
}
