import type { Course } from "../../src/lib/content/schema";
import { generateCourseContent, mapLimit, usageTotals, type GenOptions } from "./generate";
import * as io from "./io";

/** Generates full materials for each course code, saving each one as soon as it is finished. */
export async function generateCourses(codes: string[], opts: GenOptions & { force?: boolean; courseConcurrency?: number; weekConcurrency?: number }) {
  const log = opts.log ?? console.log;
  const programs = io.programs();
  const todo = codes.filter((code) => {
    const c = io.course(code);
    if (!c) {
      log(`! ${code} is not in the catalog; skipping`);
      return false;
    }
    return opts.force || c.status !== "published";
  });
  log(`Generating materials for ${todo.length} course(s).`);

  const failed: string[] = [];
  await mapLimit(todo, opts.courseConcurrency ?? 2, async (code) => {
    const summary = io.course(code)!;
    try {
      const course: Course = await generateCourseContent(
        summary,
        {
          programTitles: programs.filter((p) => p.terms.some((t) => t.courses.includes(code))).map((p) => p.title),
          prerequisiteTitles: summary.prerequisites.map((p) => `${p} ${io.course(p)?.title ?? ""}`.trim()),
        },
        { ...opts, concurrency: opts.weekConcurrency ?? 4 },
      );
      io.saveCourse(course);
      log(`✓ ${code} ${summary.title}`);
    } catch (err) {
      failed.push(code);
      log(`✗ ${code}: ${err instanceof Error ? err.message : err}`);
    }
  });
  return { generated: todo.length - failed.length, failed };
}

const PRICES: Record<string, [number, number]> = {
  "claude-opus-5-5": [4, 20],
  "claude-sonnet-5-5": [2, 10],
  "claude-haiku-5-5": [0.1, 0.5],
  "claude-fable-5-1": [10, 50],
};

export function printUsage(model: string) {
  const u = usageTotals();
  const price = PRICES[model];
  const cost = price ? ` ≈ $${((u.input * price[0] + u.output * price[1]) / 1e6).toFixed(2)}` : "";
  console.log(`\nAPI usage: ${u.calls} calls, ${u.input.toLocaleString()} input / ${u.output.toLocaleString()} output tokens${cost}`);
}
