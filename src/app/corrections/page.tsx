import Link from "next/link";
import type { Metadata } from "next";
import { currentUser } from "@/lib/auth";
import { KINDS, openCorrections } from "@/lib/corrections";
import { isFaculty } from "@/lib/people";
import { toRoman } from "@/lib/roman";

export const metadata: Metadata = { title: "Open Corrections" };

/** Every open report across the academy, so the faculty (and anyone) can see what still needs an answer. */
export default async function OpenCorrections() {
  const user = await currentUser();
  const open = openCorrections();
  return (
    <div className="wrap">
      <header className="page-head">
        <p className="eyebrow">Comments &amp; Corrections</p>
        <h1>Open reports</h1>
        <p className="lede">
          Reports of errors and doubtful claims that the faculty has not yet answered. Each links to its lesson,
          where the discussion is kept.
          {isFaculty(user) && " As a member of the faculty, you can answer them there."}
        </p>
      </header>
      {open.length === 0 ? (
        <p className="notice measure">There are no open reports.</p>
      ) : (
        <ul className="threads measure" style={{ maxWidth: "48rem" }}>
          {open.map((r) => (
            <li key={r.id}>
              <Link className="thread-title" href={`/courses/${r.course_id}/lessons/${r.lesson_index + 1}#report-${r.id}`}>
                {r.code}, Lesson {toRoman(r.lesson_index + 1)}{r.page_index !== null && `, page ${toRoman(r.page_index + 1).toLowerCase()}`}
              </Link>
              <p className="byline"><span className={`flag flag-${r.kind}`}>{KINDS[r.kind]}</span> <span className="muted">from {r.user_name}</span></p>
              <p>{r.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
