<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## AIU project notes

- Curriculum lives in `content/` as JSON and is validated by the Zod schemas in `src/lib/content/schema.ts`. Run `npm run content:validate` after changing content or schemas.
- New degrees and course materials come from `npm run degree:new` and `npm run courses:generate` (see README). Don't hand-edit generated course JSON unless fixing an error.
- Cache Components is intentionally off: student pages read the session cookie on every request.
- Server actions that change coursework must `revalidatePath` the page they redirect back to (hash-only redirects don't refetch).
