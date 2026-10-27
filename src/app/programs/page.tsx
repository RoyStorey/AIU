import type { Metadata } from "next";
import Link from "next/link";
import { ProgramCard } from "@/components/program-card";
import { PageHeader } from "@/components/ui";
import { getPrograms, getSchools } from "@/lib/content";

export const metadata: Metadata = { title: "Degree Programs" };

export default async function ProgramsPage({ searchParams }: { searchParams: Promise<{ school?: string }> }) {
  const { school } = await searchParams;
  const schools = getSchools();
  const programs = getPrograms().filter((p) => !school || p.school === school);

  return (
    <>
      <PageHeader eyebrow="Academics" title="Degree Programs">
        Every AIU bachelor&apos;s program is a complete four-year plan of 40 courses across 20 eight-week terms. Browse
        the full degree map for any program before you apply.
      </PageHeader>
      <div className="container-page py-12">
        <div className="flex flex-wrap gap-2">
          <FilterLink href="/programs" active={!school}>All schools</FilterLink>
          {schools.map((s) => (
            <FilterLink key={s.slug} href={`/programs?school=${s.slug}`} active={school === s.slug}>
              {s.name}
            </FilterLink>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
        {programs.length === 0 && <p className="mt-10 text-navy-600">No programs are offered in this school yet.</p>}
      </div>
    </>
  );
}

function FilterLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-medium ring-1 ring-inset transition ${
        active ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-700 ring-navy-200 hover:bg-navy-50"
      }`}
    >
      {children}
    </Link>
  );
}
