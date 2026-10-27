import { describeError, forgeCourse, hasApiKey, type ForgeEvent } from "@/lib/claude";
import { normalizeCourse } from "@/lib/normalize";
import type { CourseOption } from "@/lib/schema";

export const maxDuration = 800;

/** Streams forge progress as server-sent events, ending with the finished course. */
export async function POST(req: Request) {
  const { topicId, topicTitle, option } = (await req.json()) as {
    topicId: string;
    topicTitle: string;
    option: CourseOption;
  };
  if (!hasApiKey())
    return Response.json(
      { error: "No ANTHROPIC_API_KEY is set, so new courses can't be forged. The sample courses are ready to explore!" },
      { status: 503 },
    );

  const encoder = new TextEncoder();
  const body = new ReadableStream({
    async start(controller) {
      const send = (e: ForgeEvent | { type: "done"; course: unknown } | { type: "error"; message: string }) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(e)}\n\n`));
      const keepAlive = setInterval(() => controller.enqueue(encoder.encode(": ping\n\n")), 15000);
      try {
        const { data, ledger } = await forgeCourse(topicTitle, option, send);
        send({ type: "done", course: normalizeCourse(data, ledger, { topicId, option }) });
      } catch (err) {
        send({ type: "error", message: describeError(err).message });
      } finally {
        clearInterval(keepAlive);
        controller.close();
      }
    },
  });
  return new Response(body, {
    headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache, no-transform", Connection: "keep-alive" },
  });
}
