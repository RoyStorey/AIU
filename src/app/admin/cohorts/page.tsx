import Link from "next/link";
import { getEnrollmentRows } from "@/lib/admin-data";
import { formatDate, fromDateKey } from "@/lib/calendar";

export const metadata = { title: "Cohorts" };

export default async function AdminCohorts() {
  const rows = (await getEnrollmentRows()).filter((r) => r.enrollment.status !== "withdrawn");
  const groups = new Map<string, typeof rows>();
  for (const r of rows) {
    const key = `${r.cohortKey}|${r.enrollment.programSlug}`;
    groups.set(key, [...(groups.get(key) ?? []), r]);
  }
  const cohorts = [...groups.entries()].sort(([a], [b]) => b.localeCompare(a));

  return (
    <div>
      <h1 className="text-3xl font-semibold text-navy-900">Cohorts</h1>
      <p className="mt-2 max-w-2xl text-sm text-navy-600">
        Students who start a program on the same day form a cohort. Download a roster to invite a cohort to a community
        space, such as a Discord server.
      </p>
      {cohorts.length === 0 ? (
        <p className="mt-10 text-navy-600">No students have enrolled yet.</p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border border-navy-100 bg-white">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="bg-navy-50 text-xs uppercase tracking-wider text-navy-600">
              <tr>
                <th className="px-5 py-3 font-semibold">Cohort</th>
                <th className="px-5 py-3 font-semibold">Program</th>
                <th className="px-5 py-3 font-semibold">Students</th>
                <th className="px-5 py-3 font-semibold">Concentrations</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-50">
              {cohorts.map(([key, members]) => {
                const [cohort, slug] = key.split("|");
                const conc = new Map<string, number>();
                for (const m of members) conc.set(m.concentration ?? "Undeclared", (conc.get(m.concentration ?? "Undeclared") ?? 0) + 1);
                return (
                  <tr key={key}>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-navy-900">{members[0].cohortName}</p>
                      <p className="text-xs text-navy-500">Began {formatDate(fromDateKey(cohort))}</p>
                    </td>
                    <td className="px-5 py-4 text-navy-700">{members[0].program?.title ?? slug}</td>
                    <td className="px-5 py-4 text-navy-700">{members.length}</td>
                    <td className="px-5 py-4 text-xs text-navy-600">{[...conc].map(([n, c]) => `${n}: ${c}`).join(" · ")}</td>
                    <td className="px-5 py-4 text-right">
                      <Link href={`/admin/cohorts/export?program=${slug}&cohort=${cohort}`} className="text-xs font-semibold text-navy-700 hover:text-navy-900" prefetch={false}>
                        Download roster (CSV)
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
