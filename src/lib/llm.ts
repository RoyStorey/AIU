import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import type { z } from "zod";

/**
 * Thin wrapper around the Claude API used by both the curriculum generator
 * (scripts/) and the website's assignment grader. Every call asks for JSON
 * that matches a Zod schema and validates the result before returning it.
 */

export const DEFAULT_MODEL = process.env.AIU_MODEL ?? "claude-opus-5-5";

type Effort = "low" | "medium" | "high" | "xhigh" | "max";

let client: Anthropic | null = null;
const getClient = () => (client ??= new Anthropic());

export function llmConfigured() {
  return Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN);
}

export class GenerationError extends Error {}

export async function generateStructured<S extends z.ZodType>(opts: {
  schema: S;
  system: string;
  prompt: string;
  model?: string;
  effort?: Effort;
  maxTokens?: number;
}): Promise<{ data: z.infer<S>; model: string; usage: Anthropic.Beta.BetaUsage }> {
  const model = opts.model ?? DEFAULT_MODEL;
  // Streaming keeps long generations (full lessons) clear of HTTP timeouts.
  const stream = getClient().beta.messages.stream({
    model,
    max_tokens: opts.maxTokens ?? 64000,
    // If a safety classifier declines, let the API retry on a suitable model.
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: opts.system,
    messages: [{ role: "user", content: opts.prompt }],
    output_config: {
      effort: opts.effort ?? "high",
      format: betaZodOutputFormat(opts.schema),
    },
  });
  const message = await stream.finalMessage();

  if (message.stop_reason === "refusal") throw new GenerationError("The model declined this request.");
  if (message.stop_reason === "max_tokens") throw new GenerationError("Output was truncated (max_tokens).");

  const text = message.content
    .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");
  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch {
    throw new GenerationError("Model returned invalid JSON.");
  }
  const parsed = opts.schema.safeParse(json);
  if (!parsed.success) throw new GenerationError(`Output failed validation: ${parsed.error.message}`);
  return { data: parsed.data, model: message.model, usage: message.usage };
}
