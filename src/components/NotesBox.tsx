import Link from "next/link";
import { NoteForm } from "@/components/Forms";
import type { User } from "@/lib/auth";
import { noteFor } from "@/lib/notes";

/** A private margin for each lesson page, kept in the student's commonplace book. */
export function NotesBox({ user, courseId, lessonIndex, pageIndex }: {
  user: User | null;
  courseId: string;
  lessonIndex: number;
  pageIndex: number;
}) {
  if (!user) return null;
  const body = noteFor(user.id, courseId, lessonIndex, pageIndex);
  return (
    <details className="notes-box" open={body ? true : undefined}>
      <summary>Your notes on this page{body && <span className="muted"> · saved</span>}</summary>
      <NoteForm courseId={courseId} lessonIndex={lessonIndex} pageIndex={pageIndex} body={body} />
      <p className="muted" style={{ fontSize: "0.95rem", margin: "0.5rem 0 0" }}>
        Private to you. All your notes are gathered in your <Link href="/study/notes">commonplace book</Link>.
      </p>
    </details>
  );
}
