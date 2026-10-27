/**
 * Check every recommended book and link against Open Library, YouTube, and
 * Wikipedia. Verified books gain an ISBN (for direct store links and covers);
 * resources that can't be found are removed.
 *
 *   npm run resources:verify               # check unverified resources
 *   npm run resources:verify -- --recheck  # check everything again
 *   npm run resources:verify -- --dry-run  # report only, change nothing
 */
import { parseArgs } from "node:util";
import * as io from "./lib/io";
import { verifyResources } from "./lib/verify";

const { values } = parseArgs({ options: { recheck: { type: "boolean", default: false }, "dry-run": { type: "boolean", default: false } } });

let verified = 0;
let dropped = 0;
let offline = false;
for (const course of io.courses()) {
  const lists = [course.resources, ...course.weeks.map((w) => w.resources)];
  if (!lists.some((l) => l.length)) continue;
  const results = await Promise.all(lists.map((l) => verifyResources(l, { recheck: values.recheck })));
  for (const r of results) {
    verified += r.report.verified;
    dropped += r.report.dropped.length;
    offline ||= r.report.offline;
    for (const d of r.report.dropped) console.log(`✗ ${course.code}: not found, ${d}`);
  }
  if (!values["dry-run"]) {
    io.saveCourse({
      ...course,
      resources: results[0].resources,
      weeks: course.weeks.map((w, i) => ({ ...w, resources: results[i + 1].resources })),
    });
  }
}
console.log(`\n${verified} verified, ${dropped} removed${values["dry-run"] ? " (dry run)" : ""}.`);
if (offline) {
  console.log("Some lookups failed because the network was unavailable; those resources were kept unverified.");
  process.exitCode = 1;
}
