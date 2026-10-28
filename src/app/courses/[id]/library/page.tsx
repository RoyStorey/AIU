import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { Citation } from "@/components/Citation";
import { CourseHeader } from "@/components/CourseHeader";
import { resourceSources } from "@/lib/books";
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
          itself. Every book is followed by a way to obtain it: a free or borrowable copy where one exists, and a
          library or bookseller otherwise; where no copy could be found, the entry says so.
        </p>
        {course.content.library.map((section) => {
          const sources = resourceSources(section.items);
          return (
            <section key={section.heading} className="library-section">
              <h2>{section.heading}</h2>
              <ul className="citations">
                {section.items.map((item, i) => <Citation key={i} resource={item} source={sources[i]} />)}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
