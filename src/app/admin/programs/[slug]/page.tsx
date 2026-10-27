import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui";
import { getCourse, getProgram } from "@/lib/content";
import { courseSlug, isSlot } from "@/lib/content/schema";

export default async function AdminProgram({ params }: { params: Promise<{ slug: string }> }) {
  const program = getProgram((await params).slug);
  if (!program) notFound();
  const groups = [
    { name: "Required courses", codes: program.terms.flatMap((t) => t.courses).filter((c) => !isSlot(c)) },
    ...program.concentrations.map((c) => ({ name: `${c.name} concentration`, codes: c.courses })),
  ];
  return (
    <div>
      <Link href="/admin/programs" className="text-sm text-navy-500 hover:text-navy-800">← Programs</Link>
      <h1 className="mt-3 text-3xl font-semibold text-navy-900">{program.title}</h1>
      <p className="mt-1 text-sm text-navy-600">
        {program.credential} · <Link href={`/programs/${program.slug}`} className="font-semibold text-navy-700">Public page</Link>
      </p>
      <div className="mt-8 space-y-8">
        {groups.map((g) => (
          <section key={g.name}>
            <h2 className="text-lg font-semibold text-navy-900">{g.name}</h2>
            <ul className="mt-3 divide-y divide-navy-50 rounded-xl border border-navy-100 bg-white">
              {g.codes.map((code) => {
                const c = getCourse(code);
                return (
                  <li key={code} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-sm">
                    <span>
                      <span className="font-semibold text-navy-500">{code}</span> <span className="text-navy-900">{c?.title}</span>
                    </span>
                    <span className="flex items-center gap-3">
                      {c?.status === "published" ? <Badge tone="green">Published</Badge> : <Badge tone="gold">Planned</Badge>}
                      <span className="text-xs text-navy-500">{(c?.resources.length ?? 0) + (c?.weeks.reduce((n, w) => n + w.resources.length, 0) ?? 0)} resources</span>
                      {c?.status === "published" && (
                        <Link href={`/admin/courses/${courseSlug(code)}`} className="text-xs font-semibold text-navy-700 hover:text-navy-900">Review →</Link>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
