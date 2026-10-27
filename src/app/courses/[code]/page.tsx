import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseResources } from "@/components/resources";
import { Badge, ButtonLink, categoryLabel } from "@/components/ui";
import { courseAccess, getActiveEnrollment, getCourseRecords } from "@/lib/academics";
import { isAdminEmail } from "@/lib/admin";
import { getCurrentUser } from "@/lib/auth";
import { formatDate } from "@/lib/calendar";
import { getCourse, getSubjects, programsUsingCourse, subjectOf } from "@/lib/content";
import { codeFromSlug, courseSlug } from "@/lib/content/schema";
import { getVisiblePrograms } from "@/lib/visibility";

type Props = { params: Promise<{ code: string }> };

async function load(params: Props["params"]) {
  const code = codeFromSlug((await params).code);
  return code ? getCourse(code) : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = await load(params);
  return course ? { title: `${course.code}: ${course.title}`, description: course.description } : {};
}

export default async function CoursePage({ params }: Props) {
  const course = await load(params);
  if (!course) notFound();

  const user = await getCurrentUser();
  const programs = programsUsingCourse(course.code, await getVisiblePrograms());
  if (!programs.length && !(user && isAdminEmail(user.email))) notFound();

  const subject = getSubjects()[subjectOf(course.code)];
  const active = user ? await getActiveEnrollment(user.id) : null;
  const records = user ? await getCourseRecords(user.id) : null;
  const access = active && records ? courseAccess(active.plan, records, course.code) : null;
  const published = course.status === "published";

  return (
    <>
      <section className="border-b border-navy-100 bg-paper">
        <div className="container-page py-12 sm:py-16">
          <nav className="text-sm text-navy-500">
            <Link href="/courses" className="hover:text-navy-800">Course Catalog</Link>
            <span className="mx-2">/</span>
            <span>{subject ?? subjectOf(course.code)}</span>
          </nav>
          <p className="mt-6 eyebrow">{course.code}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold text-navy-900 sm:text-5xl">{course.title}</h1>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>{categoryLabel[course.category]}</Badge>
            <Badge tone="gray">8 weeks</Badge>
            {published ? <Badge tone="green">Materials published</Badge> : <Badge tone="gold">Materials in development</Badge>}
          </div>
          {published && access?.allowed && (
            <div className="mt-8">
              <ButtonLink href={`/student/courses/${courseSlug(course.code)}`}>
                {records?.has(course.code) ? "Continue in the classroom" : "Start this course"}
              </ButtonLink>
            </div>
          )}
          {access && !access.allowed && access.reason === "opens" && (
            <p className="mt-6 text-sm text-navy-600">In your plan · opens for your cohort on {formatDate(access.opens!)}</p>
          )}
        </div>
      </section>

      <div className="container-page grid gap-12 py-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-navy-900">Course description</h2>
            <p className="mt-3 leading-relaxed text-navy-800/90">{course.description}</p>
          </section>

          {course.outcomes.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-navy-900">Learning outcomes</h2>
              <p className="mt-2 text-sm text-navy-600">By the end of this course, students will be able to:</p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-navy-800/90 marker:text-gold-500">
                {course.outcomes.map((o) => <li key={o}>{o}</li>)}
              </ol>
            </section>
          )}

          {published ? (
            <section>
              <h2 className="text-2xl font-semibold text-navy-900">Weekly schedule</h2>
              <ol className="mt-5 space-y-3">
                {course.weeks.map((w) => (
                  <li key={w.number} className="rounded-lg border border-navy-100 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">Week {w.number}</p>
                    <h3 className="mt-1 font-sans text-lg font-semibold text-navy-900">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-700/80">{w.overview}</p>
                  </li>
                ))}
                <li className="rounded-lg border border-dashed border-navy-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">Final</p>
                  <h3 className="mt-1 font-sans text-lg font-semibold text-navy-900">Final examination</h3>
                  <p className="mt-1.5 text-sm text-navy-700/80">A cumulative exam of {course.finalExam.length} questions covering all eight weeks.</p>
                </li>
              </ol>
            </section>
          ) : (
            <section className="rounded-xl border border-dashed border-navy-200 bg-paper p-6">
              <h2 className="font-sans text-base font-semibold text-navy-900">Materials in development</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                This course is part of the published program plan, and its weekly lessons, assessments, and final exam are
                being prepared. Courses are published ahead of the term in which a cohort reaches them.
              </p>
            </section>
          )}

          {course.resources.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-navy-900">Beyond the lessons</h2>
              <p className="mt-2 text-sm text-navy-600">Books and media by working scholars and creators, recommended alongside this course.</p>
              <div className="mt-6">
                <CourseResources resources={course.resources} />
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-navy-100 p-6">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Prerequisites</h2>
            {course.prerequisites.length ? (
              <ul className="mt-3 space-y-2 text-sm">
                {course.prerequisites.map((p) => (
                  <li key={p}>
                    <Link href={`/courses/${courseSlug(p)}`} className="font-medium text-navy-700 hover:text-navy-900">
                      {p}: {getCourse(p)?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-navy-700">None</p>
            )}
          </div>
          {programs.length > 0 && (
            <div className="rounded-xl border border-navy-100 p-6">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy-500">Part of</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {programs.map((p) => {
                  const concentration = p.concentrations.find((c) => c.courses.includes(course.code));
                  return (
                    <li key={p.slug}>
                      <Link href={`/programs/${p.slug}`} className="font-medium text-navy-700 hover:text-navy-900">{p.title}</Link>
                      {concentration && <span className="block text-xs text-navy-500">{concentration.name} concentration</span>}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {course.generation && (
            <p className="text-xs leading-relaxed text-navy-400">
              Course materials authored by AI; recommended resources are published works by human authors.{" "}
              <Link href="/about#approach" className="underline underline-offset-2">How AIU courses are made</Link>
            </p>
          )}
        </aside>
      </div>
    </>
  );
}
