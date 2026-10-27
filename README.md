# Artificial Intelligence University (AIU)

A university website whose curriculum is written by AI. Each program is a
focused certificate that stays entirely within its discipline: no general
education, no credit hours, and no accreditation. A program runs two to four
years of five eight-week terms per year (Fall I, Fall II, Spring I, Spring II,
Summer), with two courses per term. Most programs have concentrations that
students choose in their later years.

Students enroll in a **cohort**. Everyone in a program starts on the same date
and moves through the terms together, so a group such as "Fall 2027 History"
can later share a Discord server or study group. Each week includes a lesson,
a quiz, a written assignment, and a list of real books, documentaries, and
lectures to go further. A final exam closes each course. Grades go on a
transcript, and a certificate of completion is issued at the end.

You add a program by typing the name of its discipline. Claude drafts the plan
and its concentrations, checks them against the registrar rules, writes every
course, and recommends real outside resources. The site picks up the new
program automatically.

## Quick start

```bash
npm install
cp .env.example .env        # add ANTHROPIC_API_KEY to generate content
npm run dev                 # creates the SQLite database, then serves http://localhost:3000
```

The repo ships with seven programs: Computer Science, Psychology, Business
Administration, History, Literature, Creative Writing, and Classics. It
includes 266 catalog courses, and every program's first term has full
materials, so you can enroll and take courses right away.

### Trying it locally

- **Admin panel:** set `AIU_ADMIN_EMAILS=you@example.com` in `.env`, then
  sign up with that email. An **Administration** link appears in the header,
  leading to `/admin`. From there you can:
  - hide or show programs (the data stays in place),
  - review courses with their answer keys,
  - see cohorts and download rosters as CSV,
  - list students.
- **Time travel:** cohort dates are real calendar dates. To see a term in
  progress, set a fake "today" with `AIU_TODAY=2027-01-13`. This only works
  outside production.

## Academic calendar and cohorts

`src/lib/calendar.ts` defines the year:

| Term | Starts |
|---|---|
| Fall I | last Monday of August |
| Fall II | 8 weeks later |
| Spring I | second Monday of January |
| Spring II | after a one-week spring break |
| Summer | right after Spring II |

- **Enrolling:** students pick one of the next three cohort start dates.
  Registration stays open for 7 days after a term starts.
- **During a course:** each week opens on its Monday.
  - Week *n* also needs week *n−1* to be finished: lesson read, quiz passed at
    70%+, and assignment submitted.
  - The final exam opens in week 8.
- **Late work:** a course left unfinished when its term ends is marked
  *incomplete*. It stays open, so the student can catch up.
- **Grades:** quizzes count for 40%, assignments 30%, and the final exam 30%.
- **Concentration:** students can choose one at enrollment, or later from
  their dashboard. They can change it until they start a concentration course.

Term-by-term payment is planned but not built yet. Each enrollment already
records a cohort and a term schedule, so payments can attach to terms later.

## Adding a program

```bash
npm run degree:new -- "Philosophy"
npm run degree:new -- "Nursing" --years 4 --notes "Clinical focus; concentrations in pediatrics, critical care, and community health"
npm run degree:new -- "Data Science" --terms 1-5    # write materials for year 1 only
npm run degree:new -- "Game Design" --plan-only     # plan now, materials later
```

What happens:

1. **Plan.** Claude acts as the curriculum committee. It writes a
   discipline-only plan (three years by default) and two or three
   concentrations. The plan uses only the discipline and the methods it truly
   needs, such as statistics for psychology. It reuses existing catalog courses
   where they fit.
2. **Check.** `scripts/lib/validate.ts` enforces the registrar rules:
   - 10–20 terms in order, with 2 courses per term;
   - every course defined once;
   - every prerequisite in an *earlier* term, for every concentration;
   - concentration slots used consistently;
   - a capstone in the final year.

   A failing plan goes back to the model with the list of problems, up to 3
   tries.
3. **Write.** Each course gets:
   - a syllabus;
   - eight weekly modules, each with a lesson of about 2,000 words, key terms,
     a 5-question quiz, and a rubric-graded assignment;
   - a 15-question final exam;
   - a list of supplementary resources.

   Each course is saved as soon as it finishes, so an interrupted run resumes
   where it left off.
4. **Publish.** Everything lands in `content/` as JSON. The site reads it
   directly, with no import step. Commit and deploy.

Generate or regenerate materials later:

```bash
npm run courses:generate -- --program philosophy --terms 6-10
npm run courses:generate -- --course "PHI 210" --force
npm run courses:generate -- --program history --resources   # add or refresh resources only
npm run courses:generate -- --all --limit 10
npm run content:validate
```

Courses without materials appear across the site as "materials in
development".

### Supplementary resources

Each course and week can list real works: books, documentaries, video
lectures, podcasts, and websites. Claude suggests them as a librarian would.
They are stored as data (title, creator, year, and a note), and the site builds
the links:

| Resource | Links to |
|---|---|
| Book | Amazon and Open Library |
| Video or lecture | YouTube search |
| Documentary | JustWatch |
| Podcast | Apple Podcasts |

- **Checking:** `npm run resources:verify` looks up every unverified resource
  in Open Library, YouTube, and Wikipedia.
  - It adds ISBNs, so books get direct store links and cover images.
  - It removes anything it can't find.
  - Run it with `--dry-run` first to preview the changes.
  - Generation runs the same check automatically.
- **Amazon:** set `AIU_AMAZON_TAG` to add an Amazon Associates tag to book
  links.

### From GitHub, without a terminal

Two workflows in `.github/workflows` let you do the same from the **Actions**
tab. Each opens a pull request with the new content to review:

- **New degree program**: enter a discipline, its length in years, optional
  notes, and which terms to write.
- **Generate course materials**: fill in a program's remaining terms, or
  refresh its resources.

Setup:

1. Add an `ANTHROPIC_API_KEY` repository secret.
2. Under *Settings → Actions → General*, allow GitHub Actions to create pull
   requests.
3. Optionally, set an `AIU_MODEL` repository variable.

### Cost

Generation uses `claude-opus-5-5` by default (override with `AIU_MODEL` or
`--model`). Each run prints its token usage and an estimated cost. Expect very
roughly $1–2 per course, so a full 30-course program costs on the order of tens
of dollars. Use `--terms` to publish a year at a time.

## How it works

| Piece | Where |
|---|---|
| Curriculum schema (shared by site and generator) | `src/lib/content/schema.ts` |
| Curriculum content | `content/programs`, `content/courses`, `content/schools.json`, `content/subjects.json` |
| Generator (plan, courses, resources, prompts) | `scripts/lib/generate.ts` |
| Registrar rules | `scripts/lib/validate.ts` |
| Resource verification | `scripts/lib/verify.ts` |
| Academic calendar and cohorts | `src/lib/calendar.ts` |
| Academic rules: plans, access, grading, standing | `src/lib/academics.ts` |
| Program visibility (admin hide/show) | `src/lib/visibility.ts` |
| Assignment grading (Claude against the rubric, or completion credit) | `src/lib/grading.ts` |
| Database schema | `src/lib/db/schema.ts` |
| Admin panel | `src/app/admin` |

**Stack:** Next.js 16 (App Router, server actions), Tailwind CSS 4, Drizzle ORM
on SQLite/libSQL, the Anthropic TypeScript SDK, and Zod.

**Assignment grading:** with `ANTHROPIC_API_KEY` set, Claude grades each
submission against its rubric and writes feedback. Without a key, or with
`AIU_AI_GRADING=off`, submissions earn completion credit.

## Deploying

The app is a standard Node server: `npm run build && npm start`. The `start`
script runs migrations first. The app needs a persistent database:

- **A server with a disk** (Railway, Fly.io, Render, a VPS): keep the default
  `DATABASE_URL=file:./data/aiu.db` on a persistent volume.
- **Serverless (Vercel, etc.)**: use a hosted libSQL database such as Turso.
  - Set `DATABASE_URL=libsql://…` and `DATABASE_AUTH_TOKEN`.
  - Run `npm run db:migrate` once against it, or add it to the build command.

Set `AIU_ADMIN_EMAILS` in production. Set `ANTHROPIC_API_KEY` only if you
want AI feedback on assignments.

## A note on honesty

AIU is open about the fact that its curriculum is written by AI. It says so in
the footer, on the About page, and in small notes on each course, without
making a big deal of it. The site also states plainly that AIU is not
accredited and that its certificates are not academic degrees. Keep that in
place if you deploy it publicly.
