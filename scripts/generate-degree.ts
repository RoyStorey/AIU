/**
 * Create a new program of study.
 *
 *   npm run degree:new -- "History"
 *   npm run degree:new -- "Philosophy" --notes "Strong emphasis on ethics and logic" --plan-only
 *
 * Options:
 *   --notes <text>        Extra guidance for the curriculum committee
 *   --years <n>           Program length in years, 2-4 (default 3; five terms per year)
 *   --plan-only           Write the plan and course stubs, but no course materials
 *   --terms <range>       Only generate materials for these terms, e.g. 1-5 (default: all)
 *   --model <id>          Claude model (default: $AIU_MODEL or claude-opus-5-5)
 *   --effort <level>      low | medium | high | xhigh | max
 */
import { parseArgs } from "node:util";
import "./lib/env";
import { DEFAULT_YEARS } from "../src/lib/content/schema";
import { llmConfigured } from "../src/lib/llm";
import { codesInTerms, generateCourses, printUsage } from "./lib/courses";
import { DEFAULT_MODEL, generateDegreePlan, type Effort } from "./lib/generate";
import * as io from "./lib/io";
import { parseRange } from "./lib/range";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    notes: { type: "string" },
    years: { type: "string" },
    "plan-only": { type: "boolean", default: false },
    terms: { type: "string" },
    model: { type: "string" },
    effort: { type: "string" },
  },
});

const title = positionals.join(" ").trim();
const years = Number(values.years ?? DEFAULT_YEARS);
if (!title || !(years >= 2 && years <= 4)) {
  console.error('Usage: npm run degree:new -- "<Discipline>" [--years 2-4] [--notes "..."] [--plan-only]');
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
  { title, notes: values.notes, years },
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

console.log(`\n✓ ${program.credential} → content/programs/${program.slug}.json`);
console.log(`  ${program.terms.length} terms, ${program.concentrations.length} concentrations, ${created} new courses added to the catalog.`);

if (!values["plan-only"]) {
  const codes = codesInTerms(program, values.terms ? parseRange(values.terms) : null);
  const { failed } = await generateCourses(codes, opts);
  if (failed.length) console.log(`\nRe-run to retry: npm run courses:generate -- --program ${program.slug}`);
}

printUsage(model);
console.log(`\nPreview it: npm run dev, then open /programs/${program.slug}`);
