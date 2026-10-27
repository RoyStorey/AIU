import type { Metadata } from "next";
import Link from "next/link";
import { Badge, PageHeader, categoryLabel } from "@/components/ui";
import { getCourses, getSubjects, subjectOf } from "@/lib/content";
import { courseSlug } from "@/lib/content/schema";

export const metadata: Metadata = { title: "Course Catalog" };

export default function CoursesPage() {
  const subjects = getSubjects();
  const courses = getCourses().sort((a, b) => a.code.localeCompare(b.code, "en", { numeric: true }));
  const groups = [...new Set(courses.map((c) => subjectOf(c.code)))]
    .map((prefix) => ({ prefix, name: subjects[prefix] ?? prefix, courses: courses.filter((c) => subjectOf(c.code) === prefix) }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <PageHeader eyebrow="Academics" title="Course Catalog">
        Every course offered at AIU, with its description and prerequisites. Courses marked <em>Open</em> have their full
        materials published and can be read by anyone.
      </PageHeader>
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[14rem_1fr]">
        <nav className="hidden lg:block">
          <div className="sticky top-32 space-y-1 text-sm">
            {groups.map((g) => (
              <a key={g.prefix} href={`#${g.prefix}`} className="block rounded px-2 py-1 text-navy-700 hover:bg-navy-50">
                {g.name} <span className="text-navy-400">({g.courses.length})</span>
              </a>
            ))}
          </div>
        </nav>
        <div className="space-y-12">
          {groups.map((g) => (
            <section key={g.prefix} id={g.prefix} className="scroll-mt-32">
              <h2 className="border-b border-navy-100 pb-2 text-2xl font-semibold text-navy-900">
                {g.name} <span className="font-sans text-base font-normal text-navy-400">{g.prefix}</span>
              </h2>
              <ul className="divide-y divide-navy-50">
                {g.courses.map((c) => (
                  <li key={c.code}>
                    <Link href={`/courses/${courseSlug(c.code)}`} className="group grid gap-1 py-4 sm:grid-cols-[6rem_1fr_auto] sm:gap-4">
                      <span className="text-sm font-semibold text-navy-500">{c.code}</span>
                      <span>
                        <span className="font-medium text-navy-900 group-hover:text-navy-600">{c.title}</span>
                        <span className="mt-1 line-clamp-2 block text-sm text-navy-700/70">{c.description}</span>
                      </span>
                      <span className="flex items-start gap-2 sm:justify-end">
                        {c.status === "published" && <Badge tone="green">Open</Badge>}
                        <Badge tone="gray">{categoryLabel[c.category]}</Badge>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
