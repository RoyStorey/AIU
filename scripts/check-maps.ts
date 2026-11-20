/**
 * Checks the interactive maps: every map in src/content/maps validates against the
 * atlas-map@1 format, and every `map:` image in a lesson page names a map that exists.
 *
 *   npm run maps:check
 *
 * Exits with code 1 on any error.
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { formatIssues, validateMap } from "map-widget/spec";
import { MAPS } from "@/content/maps";

async function* files(dir: string): AsyncGenerator<string> {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* files(p);
    else if (/\.(ts|tsx|md)$/.test(e.name)) yield p;
  }
}

async function main() {
  let failed = false;

  for (const [id, load] of Object.entries(MAPS)) {
    const spec = (await load()).default;
    const r = validateMap(spec);
    console.log(`\n${id}\n${formatIssues(r)}`);
    if (!r.ok) failed = true;
  }

  const used = new Set<string>();
  for await (const file of files("src/content/courses")) {
    const text = await readFile(file, "utf8");
    for (const m of text.matchAll(/!\[[^\]]*\]\(map:([a-z0-9-]+)/g)) {
      used.add(m[1]);
      if (!MAPS[m[1]]) {
        console.log(`\n✗ ${file}: map "${m[1]}" is not in src/content/maps/index.ts`);
        failed = true;
      }
    }
  }
  const unused = Object.keys(MAPS).filter((id) => !used.has(id));
  if (unused.length) console.log(`\n⚠ Not used on any lesson page: ${unused.join(", ")}`);
  console.log(failed ? "\nMaps have errors." : `\n✓ ${Object.keys(MAPS).length} maps, ${used.size} used in lessons.`);
  process.exit(failed ? 1 : 0);
}

main();
