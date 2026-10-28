import Link from "next/link";
import type { Metadata } from "next";
import { Markdown } from "@/components/Markdown";
import { requireUser } from "@/lib/auth";
import { getCourse } from "@/lib/catalogue";
import { commonplaceBook } from "@/lib/notes";
import { toRoman } from "@/lib/roman";

export const metadata: Metadata = { title: "Commonplace Book" };

export default async function Notes() {
  const user = await requireUser("/study/notes");
  const notes = commonplaceBook(user.id);
  const courses = [...new Set(notes.map((n) => n.course_id))].map((id) => getCourse(id)!);

  return (
    <div className="wrap">
      <header className="page-head">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/study">My Studies</Link></nav>
        <h1>Commonplace Book</h1>
        <p className="lede">
          Your notes from every lesson page, gathered in course order: the lines worth keeping, the questions, the
          connections. Only you can see them. Add to them from the box at the foot of any page.
        </p>
      </header>
      {notes.length === 0 ? (
        <p className="notice measure">You have not yet written any notes. Open a lesson page and use the box beneath it.</p>
      ) : (
        <div className="measure" style={{ maxWidth: "46rem" }}>
          {courses.map((course) => (
            <section key={course.id} className="library-section">
              <h2>{course.code} {course.title}</h2>
              {notes.filter((n) => n.course_id === course.id).map((n) => {
                const lesson = course.content?.lessons[n.lesson_index];
                const page = lesson?.pages[n.page_index];
                return (
                  <article key={`${n.lesson_index}-${n.page_index}`} className="commonplace">
                    <p className="eyebrow">
                      <Link href={`/courses/${course.id}/lessons/${n.lesson_index + 1}/${n.page_index + 1}`}>
                        Lesson {toRoman(n.lesson_index + 1)} · {page?.title ?? `Page ${n.page_index + 1}`}
                      </Link>
                    </p>
                    <Markdown>{n.body}</Markdown>
                  </article>
                );
              })}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
