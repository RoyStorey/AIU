import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { Citation } from "@/components/Citation";
import { CourseHeader } from "@/components/CourseHeader";
import { getCourse } from "@/lib/catalogue";

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const course = getCourse((await params).id);
  return { title: course ? `Reference Shelf · ${course.code}` : "Not found" };
}

export default async function LibraryPage({ params }: Params) {
  const course = getCourse((await params).id);
  if (!course) notFound();
  if (!course.content) redirect(`/courses/${course.id}`);

  return (
    <div className="wrap">
      <CourseHeader course={course} active="library" />
      <div className="measure" style={{ maxWidth: "48rem" }}>
        <p className="muted" style={{ marginBottom: "2.5rem" }}>
          The books, editions, recordings, and resources for {course.code}. Titles with a link open the resource
          itself; the others are standard editions available from libraries and booksellers.
        </p>
        {course.content.library.map((section) => (
          <section key={section.heading} className="library-section">
            <h2>{section.heading}</h2>
            <ul className="citations">
              {section.items.map((item, i) => <Citation key={i} resource={item} />)}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
