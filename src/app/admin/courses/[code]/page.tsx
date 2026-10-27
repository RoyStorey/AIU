import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/markdown";
import { CourseResources, WeekResources } from "@/components/resources";
import { getCourse } from "@/lib/content";
import { codeFromSlug, type Question } from "@/lib/content/schema";

/** Read-only review of a course's full materials, with answer keys, for checking generated content. */
export default async function AdminCourse({ params }: { params: Promise<{ code: string }> }) {
  const code = codeFromSlug((await params).code);
  const course = code ? getCourse(code) : undefined;
  if (!course) notFound();
  return (
    <div className="max-w-4xl">
      <Link href="/admin/programs" className="text-sm text-navy-500 hover:text-navy-800">← Programs</Link>
      <p className="mt-4 eyebrow">{course.code} · review</p>
      <h1 className="mt-2 text-3xl font-semibold text-navy-900">{course.title}</h1>
      {course.generation && <p className="mt-1 text-xs text-navy-500">Generated {course.generation.generatedAt.slice(0, 10)} · {course.generation.model}</p>}
      <nav className="mt-6 flex flex-wrap gap-2 text-sm">
        {course.weeks.map((w) => (
          <a key={w.number} href={`#week-${w.number}`} className="rounded-md bg-white px-3 py-1.5 ring-1 ring-navy-100 hover:bg-navy-50">Week {w.number}</a>
        ))}
        <a href="#final" className="rounded-md bg-white px-3 py-1.5 ring-1 ring-navy-100 hover:bg-navy-50">Final</a>
      </nav>
      {course.resources.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-navy-900">Course resources</h2>
          <div className="mt-4"><CourseResources resources={course.resources} /></div>
        </section>
      )}
      {course.weeks.map((w) => (
        <section key={w.number} id={`week-${w.number}`} className="mt-12 scroll-mt-32 border-t border-navy-100 pt-10">
          <p className="eyebrow">Week {w.number}</p>
          <h2 className="mt-1 text-2xl font-semibold text-navy-900">{w.title}</h2>
          <details className="mt-4 rounded-xl border border-navy-100 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-navy-800">Lesson ({w.lesson.split(/\s+/).length} words)</summary>
            <Markdown className="mt-4">{w.lesson}</Markdown>
          </details>
          <AnswerKey title="Quiz" questions={w.quiz} />
          <div className="mt-4 rounded-xl border border-navy-100 bg-white p-5 text-sm">
            <p className="font-semibold text-navy-900">Assignment: {w.assignment.title} (min {w.assignment.minWords} words)</p>
            <Markdown className="mt-2 text-sm">{w.assignment.prompt}</Markdown>
          </div>
          {w.resources.length > 0 && <div className="mt-4"><WeekResources resources={w.resources} /></div>}
        </section>
      ))}
      <section id="final" className="mt-12 scroll-mt-32 border-t border-navy-100 pt-10">
        <AnswerKey title="Final exam" questions={course.finalExam} />
      </section>
    </div>
  );
}

function AnswerKey({ title, questions }: { title: string; questions: Question[] }) {
  return (
    <details className="mt-4 rounded-xl border border-navy-100 bg-white p-5" open={title === "Final exam"}>
      <summary className="cursor-pointer font-semibold text-navy-800">{title} ({questions.length} questions)</summary>
      <ol className="mt-4 space-y-4 text-sm">
        {questions.map((q, i) => (
          <li key={i}>
            <Markdown className="prose-sm font-medium">{`${i + 1}. ${q.prompt}`}</Markdown>
            <ul className="mt-1 space-y-0.5 pl-4">
              {q.choices.map((c, j) => (
                <li key={j} className={j === q.answerIndex ? "font-semibold text-emerald-700" : "text-navy-600"}>{j === q.answerIndex ? "✓ " : "• "}{c}</li>
              ))}
            </ul>
            <p className="mt-1 pl-4 text-xs text-navy-500">{q.explanation}</p>
          </li>
        ))}
      </ol>
    </details>
  );
}
