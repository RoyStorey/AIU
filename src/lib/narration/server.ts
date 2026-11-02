import "server-only";
import { currentUser, isAdmin } from "@/lib/auth";
import { getCourse } from "@/lib/catalogue";
import { pageNarration, type NarrationBlock } from "@/lib/narration/script";
import { isNarrated, narrationProvider, onDemandPolicy, studioStatus } from "@/lib/narration/store";
import type { StudioVoice } from "@/lib/narration/voices";

/** A narrated page of a course, if the course is narrated and the page exists (lesson and page are 1-based). */
export function narratedPage(courseId: string, lessonNumber: number, pageNumber: number) {
  const course = getCourse(courseId);
  if (!course?.content || !isNarrated(course.code)) return null;
  const lesson = course.content.lessons[lessonNumber - 1];
  const page = lesson?.pages[pageNumber - 1];
  if (!lesson || !page) return null;
  return { course, lesson, page, blocks: pageNarration(lesson, lessonNumber - 1, pageNumber - 1) as NarrationBlock[] };
}

/** Whether the person asking may have new audio rendered in the given voice. */
export async function mayRender(voice: StudioVoice): Promise<boolean> {
  const status = await studioStatus();
  if (!status.canRender || voice.provider !== narrationProvider()) return false;
  const policy = onDemandPolicy();
  if (policy === "off") return false;
  const user = await currentUser();
  return policy === "admins" ? Boolean(user && isAdmin(user)) : Boolean(user);
}
