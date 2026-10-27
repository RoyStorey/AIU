import Link from "next/link";
import type { CourseWithContent } from "@/lib/catalogue";
import { stageName } from "@/lib/schema";

export function CourseHeader({ course, active }: { course: CourseWithContent; active: "syllabus" | "library" | null }) {
  const { subject, concentration } = course;
  return (
    <>
      <header className="page-head" style={{ paddingBottom: "1.5rem" }}>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={`/faculties/${subject.slug}`}>{subject.name}</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/faculties/${subject.slug}/${concentration.slug}`}>{concentration.name}</Link>
        </nav>
        <p className="eyebrow" style={{ marginTop: "1.5rem" }}>{course.code} · {stageName(course.stage)}</p>
        <h1>{course.title}</h1>
        <p className="lede">{course.summary}</p>
      </header>
      {active && course.content && (
        <nav className="tabs" aria-label="Course">
          <Link href={`/courses/${course.id}`} aria-current={active === "syllabus" ? "page" : undefined}>Syllabus</Link>
          <Link href={`/courses/${course.id}/lessons/1`}>Lessons</Link>
          <Link href={`/courses/${course.id}/library`} aria-current={active === "library" ? "page" : undefined}>Reference Shelf</Link>
        </nav>
      )}
    </>
  );
}
