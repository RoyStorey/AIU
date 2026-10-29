import { NotesDrawer } from "@/components/NotesDrawer";
import type { User } from "@/lib/auth";
import { noteFor } from "@/lib/notes";

/** A private margin for each lesson page, kept in the student's commonplace book. */
export function NotesBox({ user, courseId, lessonIndex, pageIndex, pageTitle }: {
  user: User | null;
  courseId: string;
  lessonIndex: number;
  pageIndex: number;
  pageTitle: string;
}) {
  if (!user) return null;
  const body = noteFor(user.id, courseId, lessonIndex, pageIndex);
  return (
    <NotesDrawer
      key={`${courseId}/${lessonIndex}/${pageIndex}`}
      courseId={courseId} lessonIndex={lessonIndex} pageIndex={pageIndex} pageTitle={pageTitle} body={body}
    />
  );
}
