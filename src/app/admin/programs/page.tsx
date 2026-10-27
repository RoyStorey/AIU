import Link from "next/link";
import { setProgramHidden } from "@/app/actions/admin";
import { Badge, Button } from "@/components/ui";
import { getEnrollmentRows } from "@/lib/admin-data";
import { getAllPrograms, getSchool, programPublishedShare } from "@/lib/content";
import { getHiddenSlugs } from "@/lib/visibility";

export const metadata = { title: "Programs" };

export default async function AdminPrograms() {
  const programs = getAllPrograms();
  const hidden = await getHiddenSlugs();
  const rows = await getEnrollmentRows();

  return (
    <div>
      <h1 className="text-3xl font-semibold text-navy-900">Programs</h1>
      <p className="mt-2 max-w-2xl text-sm text-navy-600">
        Hiding a program removes it from the website and closes it to new enrollment. Its plan and materials stay in
        place, and students already enrolled continue as normal. Unhide it at any time.
      </p>
      <div className="mt-8 overflow-x-auto rounded-xl border border-navy-100 bg-white">
        <table className="w-full min-w-[44rem] text-left text-sm">
          <thead className="bg-navy-50 text-xs uppercase tracking-wider text-navy-600">
            <tr>
              <th className="px-5 py-3 font-semibold">Program</th>
              <th className="px-5 py-3 font-semibold">Materials</th>
              <th className="px-5 py-3 font-semibold">Active students</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50">
            {programs.map((p) => {
              const isHidden = hidden.has(p.slug);
              const { published, total } = programPublishedShare(p);
              const students = rows.filter((r) => r.enrollment.programSlug === p.slug && r.enrollment.status === "active").length;
              return (
                <tr key={p.slug}>
                  <td className="px-5 py-4">
                    <Link href={`/admin/programs/${p.slug}`} className="font-semibold text-navy-900 hover:text-navy-600">{p.title}</Link>
                    <p className="text-xs text-navy-500">{p.credential} · {getSchool(p.school)?.name}</p>
                  </td>
                  <td className="px-5 py-4 text-navy-700">{published} / {total} courses</td>
                  <td className="px-5 py-4 text-navy-700">{students}</td>
                  <td className="px-5 py-4">{isHidden ? <Badge tone="gray">Hidden</Badge> : <Badge tone="green">Live</Badge>}</td>
                  <td className="px-5 py-4 text-right">
                    <form action={setProgramHidden}>
                      <input type="hidden" name="program" value={p.slug} />
                      <input type="hidden" name="hidden" value={isHidden ? "false" : "true"} />
                      <Button variant={isHidden ? "primary" : "secondary"} className="px-3 py-1.5 text-xs">
                        {isHidden ? "Show program" : "Hide program"}
                      </Button>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
