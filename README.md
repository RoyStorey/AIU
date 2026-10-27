# Artificial Intelligence University (AIU)

A university website whose entire curriculum is written by AI. Each degree is a
four-year plan of 20 eight-week terms (two courses per term, 40 courses, 120
credits). Students create an account, enroll in a program, and work through
their courses week by week: lesson, quiz, written assignment, then a final exam,
with grades on a transcript and a diploma at the end.

You add a degree by typing its name. Claude drafts the degree plan, checks it
against registrar rules, writes every course, and the site picks it up.

## Quick start

```bash
npm install
cp .env.example .env        # add ANTHROPIC_API_KEY to generate content
npm run dev                 # creates the SQLite database, then serves http://localhost:3000
```

The repo ships with three programs (Computer Science, Psychology, Business
Administration), 93 catalog courses, and full materials for every program's
first term, so you can enroll and take courses right away.

## Adding a degree

```bash
npm run degree:new -- "Bachelor of Science in Nursing"
npm run degree:new -- "Bachelor of Arts in History" --notes "Emphasize public history and digital archives"
npm run degree:new -- "Bachelor of Science in Data Science" --terms 1-5   # write materials for year 1 only
npm run degree:new -- "Bachelor of Fine Arts in Game Design" --plan-only  # plan now, materials later
```

What happens:

1. **Plan.** Claude acts as the curriculum committee. It sees the existing
   catalog, so it reuses general-education courses instead of duplicating them,
   and proposes new courses, a school, and subject prefixes where needed.
2. **Check.** `scripts/lib/validate.ts` enforces the registrar rules: exactly
   20 terms in order, 2 courses per term, every course defined once, every
   prerequisite in an *earlier* term, at least 10 gen-ed courses, a capstone.
   A failing plan goes back to the model with the list of problems (up to 3 tries).
3. **Write.** For each course: a syllabus, eight weekly modules (a lesson of
   about 2,000 words, key terms, a 5-question quiz, and a rubric-graded written
   assignment), and a 15-question final exam. Each course is saved as soon as
   it finishes, so an interrupted run resumes where it left off.
4. **Publish.** Everything lands in `content/` as JSON. The site reads it
   directly, with no import step. Commit and deploy.

Generate or regenerate materials later:

```bash
npm run courses:generate -- --program bs-nursing --terms 6-10
npm run courses:generate -- --course "NUR 210" --force
npm run courses:generate -- --all --limit 10
npm run content:validate
```

Courses without materials appear across the site as "materials in
development"; students reach them only when their earlier terms are complete.

### From GitHub, without a terminal

Two workflows in `.github/workflows` let you do the same thing from the
**Actions** tab, and each opens a pull request with the new content to review:

- **New degree program**: enter a title, optional notes, and which terms to write.
- **Generate course materials**: fill in a program's remaining terms.

Setup: add an `ANTHROPIC_API_KEY` repository secret, and under *Settings → Actions →
General* allow GitHub Actions to create pull requests. Optionally set an
`AIU_MODEL` repository variable.

### Cost

Generation uses `claude-opus-5-5` by default (override with `AIU_MODEL` or
`--model`). Each run prints its token usage and an estimated cost. Expect very
roughly $1–2 per course, so a full 40-course degree runs on the order of tens of
dollars, less when it reuses existing gen-ed courses. Use `--terms` to publish a
year at a time.

## How it works

| Piece | Where |
|---|---|
| Curriculum schema (shared by site and generator) | `src/lib/content/schema.ts` |
| Curriculum content | `content/programs`, `content/courses`, `content/schools.json`, `content/subjects.json` |
| Generator (plan, courses, prompts) | `scripts/lib/generate.ts` |
| Registrar rules | `scripts/lib/validate.ts` |
| Claude API wrapper (structured JSON output) | `src/lib/llm.ts` |
| Academic rules: unlocking, grading, GPA, degree progress | `src/lib/academics.ts` |
| Assignment grading (Claude against the rubric, or completion credit) | `src/lib/grading.ts` |
| Database schema (users, enrollments, records, attempts) | `src/lib/db/schema.ts` |

**Stack:** Next.js 16 (App Router, server actions), Tailwind CSS 4, Drizzle ORM
on SQLite/libSQL, the Anthropic TypeScript SDK, and Zod.

**Academic rules:** weeks unlock in order once the lesson is read, the quiz is
passed at 70% or better (unlimited retakes), and the assignment is submitted.
The final exam opens after week 8; passing it at 70% completes the course.
Grades are 40% quizzes, 30% assignments, and 30% final exam. A term opens when
the previous term is complete. Course records belong to the student, so credit
carries over if they switch programs.

**Assignment grading:** with `ANTHROPIC_API_KEY` set, Claude grades each
submission against its rubric and writes feedback. Without a key (or with
`AIU_AI_GRADING=off`), submissions earn completion credit.

## Deploying

The app is a standard Node server (`npm run build && npm start`; `start` runs
migrations first). It needs a persistent database:

- **A server with a disk** (Railway, Fly.io, Render, a VPS): keep the default
  `DATABASE_URL=file:./data/aiu.db` on a persistent volume.
- **Serverless (Vercel, etc.)**: use a hosted libSQL database such as Turso.
  Set `DATABASE_URL=libsql://…` and `DATABASE_AUTH_TOKEN`, and run
  `npm run db:migrate` once against it (or add it to the build command).

Set `ANTHROPIC_API_KEY` in production only if you want AI assignment feedback.

## A note on honesty

AIU is open about the fact that its curriculum is written by AI. It says so in the
footer, on the About page, and in small notes on each course, without making a
big deal of it. The site also states plainly that AIU is not accredited and
its credentials are not academic degrees. Keep that in place if you deploy it
publicly.
