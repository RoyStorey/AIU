/**
 * Create a new degree program.
 *
 *   npm run degree:new -- "Bachelor of Science in Nursing"
 *   npm run degree:new -- "Bachelor of Arts in History" --notes "Emphasize public history" --plan-only
 *
 * Options:
 *   --notes <text>        Extra guidance for the curriculum committee
 *   --plan-only           Write the degree plan and course stubs, but no course materials
 *   --terms <range>       Only generate materials for these terms, e.g. 1-5 (default: all)
 *   --model <id>          Claude model (default: $AIU_MODEL or claude-opus-5-5)
 *   --effort <level>      low | medium | high | xhigh | max
 */
import { parseArgs } from "node:util";
import "./lib/env";
import { llmConfigured } from "../src/lib/llm";
import { generateCourses, printUsage } from "./lib/courses";
import { DEFAULT_MODEL, generateDegreePlan, type Effort } from "./lib/generate";
import * as io from "./lib/io";
import { parseRange } from "./lib/range";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    notes: { type: "string" },
    "plan-only": { type: "boolean", default: false },
    terms: { type: "string" },
    model: { type: "string" },
    effort: { type: "string" },
  },
});

const title = positionals.join(" ").trim();
if (!title) {
  console.error('Usage: npm run degree:new -- "Bachelor of Science in <Major>" [--notes "..."] [--plan-only]');
  process.exit(1);
}
if (!llmConfigured()) {
  console.error("Set ANTHROPIC_API_KEY (in .env or your shell) to generate curriculum.");
  process.exit(1);
}

const model = values.model ?? DEFAULT_MODEL;
const opts = { model, effort: values.effort as Effort | undefined };

console.log(`\nAIU curriculum committee · ${title}\n`);
const { program, newCourses, newSchool, newSubjects } = await generateDegreePlan(
  { title, notes: values.notes },
  {
    catalog: io.courses(),
    schools: io.schools(),
    subjects: io.subjects(),
    existingSlugs: io.programs().map((p) => p.slug),
  },
  opts,
);

if (newSchool) io.saveSchools([...io.schools(), newSchool]);
if (newSubjects.length) io.saveSubjects({ ...Object.fromEntries(newSubjects.map((s) => [s.prefix, s.name])), ...io.subjects() });
io.write(io.programFile(program.slug), program);
const created = newCourses.filter(io.ensureCourseStub).length;

console.log(`\n✓ ${program.title} → content/programs/${program.slug}.json`);
console.log(`  ${program.terms.length} terms, ${created} new courses added to the catalog, ${40 - newCourses.length} reused.`);

if (!values["plan-only"]) {
  const range = values.terms ? parseRange(values.terms) : null;
  const codes = program.terms.filter((t) => !range || range.has(t.index)).flatMap((t) => t.courses);
  const { failed } = await generateCourses(codes, opts);
  if (failed.length) console.log(`\nRe-run to retry: npm run courses:generate -- --program ${program.slug}`);
}

printUsage(model);
console.log(`\nPreview it: npm run dev, then open /programs/${program.slug}`);
