/**
 * Generate (or regenerate) course materials.
 *
 *   npm run courses:generate -- --program history                 # every unpublished course in a program
 *   npm run courses:generate -- --program history --terms 1-5
 *   npm run courses:generate -- --course "HIS 201" --force       # regenerate one course
 *   npm run courses:generate -- --all                            # every unpublished course in the catalog
 *   npm run courses:generate -- --program history --resources    # add books and media to published courses
 */
import { parseArgs } from "node:util";
import "./lib/env";
import { llmConfigured } from "../src/lib/llm";
import { codesInTerms, generateCourses, printUsage } from "./lib/courses";
import { DEFAULT_MODEL, type Effort } from "./lib/generate";
import * as io from "./lib/io";
import { parseRange } from "./lib/range";

const { values } = parseArgs({
  options: {
    program: { type: "string" },
    terms: { type: "string" },
    course: { type: "string", multiple: true },
    all: { type: "boolean", default: false },
    force: { type: "boolean", default: false },
    resources: { type: "boolean", default: false },
    limit: { type: "string" },
    model: { type: "string" },
    effort: { type: "string" },
    concurrency: { type: "string" },
  },
});

let codes: string[] = [];
if (values.course?.length) codes = values.course.map((c) => c.toUpperCase());
else if (values.program) {
  const program = io.programs().find((p) => p.slug === values.program);
  if (!program) {
    console.error(`No program "${values.program}". Available: ${io.programs().map((p) => p.slug).join(", ")}`);
    process.exit(1);
  }
  codes = codesInTerms(program, values.terms ? parseRange(values.terms) : null);
} else if (values.all) {
  // Order by the earliest term any program schedules the course, so early terms publish first.
  const firstTerm = new Map<string, number>();
  for (const p of io.programs())
    for (const t of p.terms) for (const c of codesInTerms(p, new Set([t.index]))) firstTerm.set(c, Math.min(firstTerm.get(c) ?? 99, t.index));
  codes = io.courses().map((c) => c.code).sort((a, b) => (firstTerm.get(a) ?? 99) - (firstTerm.get(b) ?? 99));
} else {
  console.error("Specify --program <slug>, --course <code>, or --all. See the header of scripts/generate-courses.ts.");
  process.exit(1);
}

if (!llmConfigured()) {
  console.error("Set ANTHROPIC_API_KEY (in .env or your shell) to generate curriculum.");
  process.exit(1);
}

codes = [...new Set(codes)];
if (!values.force && !values.resources) codes = codes.filter((c) => io.course(c)?.status !== "published");
if (values.limit) codes = codes.slice(0, Number(values.limit));

const model = values.model ?? DEFAULT_MODEL;
const { failed } = await generateCourses(codes, {
  model,
  effort: values.effort as Effort | undefined,
  force: values.force,
  resourcesOnly: values.resources,
  courseConcurrency: values.concurrency ? Number(values.concurrency) : undefined,
});
printUsage(model);
if (failed.length) process.exit(1);
