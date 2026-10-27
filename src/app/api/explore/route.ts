import { describeError, exploreTopic, hasApiKey } from "@/lib/claude";
import { normalizeTopic } from "@/lib/normalize";

export const maxDuration = 120;

export async function POST(req: Request) {
  const { query, avoid } = (await req.json()) as { query?: string; avoid?: string[] };
  const q = query?.trim().slice(0, 200);
  if (!q) return Response.json({ error: "Tell us what you'd like to learn!" }, { status: 400 });
  if (!hasApiKey())
    return Response.json(
      { error: "No ANTHROPIC_API_KEY is set, so AIU is in demo mode. Try one of the sample subjects!" },
      { status: 503 },
    );
  try {
    return Response.json({ topic: normalizeTopic(await exploreTopic(q, (avoid ?? []).slice(0, 30).map((a) => String(a).slice(0, 120))), q) });
  } catch (err) {
    const { status, message } = describeError(err);
    return Response.json({ error: message }, { status });
  }
}
