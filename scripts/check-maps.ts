/**
 * Checks the interactive maps: every map in src/content/maps validates against the
 * atlas-map@1 format, its armies stay on land and its ships on water, and every `map:`
 * image in a lesson page names a map that exists (and, for map:<id>#a-b, chapters it has).
 *
 *   npm run maps:check
 *
 * Exits with code 1 on any error.
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { checkMapRoutes, formatIssues, validateMap } from "map-widget/spec";
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
    if (r.ok) {
      const routes = await checkMapRoutes(spec);
      r.errors.push(...routes.errors);
      r.warnings.push(...routes.warnings);
      r.ok = r.errors.length === 0;
    }
    console.log(`\n${id}\n${formatIssues(r)}`);
    if (!r.ok) failed = true;
  }

  const used = new Set<string>();
  for await (const file of files("src/content/courses")) {
    const text = await readFile(file, "utf8");
    for (const m of text.matchAll(/!\[[^\]]*\]\(map:([a-z0-9-]+)(?:#(\d+)(?:-(\d+))?)?/g)) {
      const [, id, a, b0] = m;
      const b = b0 ?? a;
      used.add(id);
      if (!MAPS[id]) {
        console.log(`\n✗ ${file}: map "${id}" is not in src/content/maps/index.ts`);
        failed = true;
        continue;
      }
      const chapters = (await MAPS[id]()).default.story?.length ?? 0;
      if (a && !(+a >= 1 && +a <= +b && +b <= chapters)) {
        console.log(`\n✗ ${file}: map:${id}#${b0 ? `${a}-${b}` : a} – the map has ${chapters} chapters`);
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
