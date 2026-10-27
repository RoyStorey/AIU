import { describeError, gradeEssay, hasApiKey } from "@/lib/claude";
import { offlineGrade } from "@/lib/offline-grade";

export const maxDuration = 120;

export async function POST(req: Request) {
  const input = (await req.json()) as {
    course: string;
    lesson: string;
    prompt: string;
    rubric: string[];
    answer: string;
    keyIdeas?: string[];
  };
  if (!input.answer?.trim()) return Response.json({ error: "Write something first!" }, { status: 400 });
  if (!hasApiKey()) return Response.json({ grade: offlineGrade(input.answer, input.keyIdeas ?? []), offline: true });
  try {
    return Response.json({ grade: await gradeEssay({ ...input, answer: input.answer.slice(0, 12000) }) });
  } catch (err) {
    const { status, message } = describeError(err);
    return Response.json({ error: message }, { status });
  }
}
