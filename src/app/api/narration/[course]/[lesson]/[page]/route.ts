import { NextResponse, type NextRequest } from "next/server";
import { mayRender, narratedPage } from "@/lib/narration/server";
import { findRendered, hashFor, readAhead, studioStatus } from "@/lib/narration/store";
import { previewUrl, voiceSlug } from "@/lib/narration/voices";

type Params = { params: Promise<{ course: string; lesson: string; page: string }> };

/** Seconds a studio voice takes over a passage not yet rendered: Kokoro reads about 125 words a minute. */
const estimate = (words: number) => Math.round((words / 2.1 + 0.5) * 10) / 10;

/**
 * The narration plan for one page: its passages (with their words, for device
 * voices), and for the chosen studio voice, the URL and length of each passage.
 */
export async function GET(req: NextRequest, { params }: Params) {
  const { course: courseId, lesson: l, page: p } = await params;
  const lessonNumber = Number(l);
  const pageNumber = Number(p);
  const found = narratedPage(courseId, lessonNumber, pageNumber);
  if (!found) return NextResponse.json({ error: "This page is not narrated." }, { status: 404 });
  const { course, lesson, page, blocks } = found;

  const status = await studioStatus();
  const voice = status.voices.find((v) => v.id === req.nextUrl.searchParams.get("voice"));
  const renderable = voice ? await mayRender(voice) : false;

  const items = blocks.map((b) => {
    if (!voice) return { ...b, url: null, ready: false, duration: estimate(b.words) };
    const hash = hashFor(voice, b);
    const done = findRendered(voice, hash);
    const query = new URLSearchParams({ c: course.id, l: String(lessonNumber), p: String(pageNumber), b: b.id });
    return {
      ...b,
      url: `/api/narration/audio/${voiceSlug(voice.id)}/${hash}?${query}`,
      ready: Boolean(done),
      duration: done ? Math.round(done.duration * 100) / 100 : estimate(b.words),
    };
  });
  // Start rendering the opening passages now, so the first ones are ready by the time they are needed.
  if (voice && renderable) readAhead(voice, blocks.filter((_, i) => !items[i].ready).slice(0, 3));

  const lessons = course.content!.lessons;
  const lastPage = pageNumber === lesson.pages.length;
  const next = !lastPage ? { lesson: lessonNumber, page: pageNumber + 1 }
    : lessonNumber < lessons.length ? { lesson: lessonNumber + 1, page: 1, newLesson: true } : null;
  const prev = pageNumber > 1 ? { lesson: lessonNumber, page: pageNumber - 1 }
    : lessonNumber > 1 ? { lesson: lessonNumber - 1, page: lessons[lessonNumber - 2].pages.length } : null;

  return NextResponse.json({
    course: { id: course.id, code: course.code, title: course.title },
    lesson: { number: lessonNumber, title: lesson.title, pages: lesson.pages.length },
    page: { number: pageNumber, title: page.title, href: `/courses/${course.id}/lessons/${lessonNumber}/${pageNumber}` },
    voice: voice?.id ?? null,
    studio: {
      voices: status.voices.map((v) => ({ id: v.id, name: v.name, description: v.description, preview: previewUrl(v.id) })),
      canRender: renderable,
      reason: status.reason,
    },
    blocks: items,
    next,
    prev,
  }, { headers: { "cache-control": "no-store" } });
}
