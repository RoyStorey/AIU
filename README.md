# Cornerstone

An academy of the humanities. Students matriculate, choose a faculty and a concentration, and work through a full program of study, from Foundations to a capstone Seminar. Every course has lectures, assigned readings from real editions, recorded lectures and audio, a reference shelf, knowledge checks, and written exercises marked by a tutor. No degree is conferred; the learning is real.

## The catalogue

Five founding faculties, each with several concentrations and a complete program of study:

| Faculty | Concentrations |
|---|---|
| Literature | Poetry · British · American · African American · World Literature · Drama |
| Classics | Latin · Ancient Greek · Classical Literature in Translation · Ancient History · Ancient Philosophy |
| History | European · American · Asian · Medieval · African |
| Theology | Biblical Studies · Systematic Theology · Church History · Patristics · Philosophy of Religion · World Religions |
| Linguistics | General · Historical and Comparative · Phonetics and Phonology · Syntax and Semantics · Sociolinguistics |

Seven courses are written in full by hand: **POE 101** The Art of Poetry, **AAL 101** Foundations of African American Literature, **LAT 101** Elementary Latin I, **AMH 101** The American Revolution, **BIB 101** Introduction to the Hebrew Bible, **LIN 101** Introduction to Language, and **EUH 301** Europe in the Age of Totalitarianism. EUH 301 is written to the full standard—five lessons of about two hours each, roughly ten hours in all—and the others will be expanded to match. The rest of the catalogue begins as outlines with their core texts and is prepared by the forge.

## Lessons and study time

A lesson is a series of pages followed by an exercises step: a knowledge check and a written exercise marked by a tutor. Every page, lesson, and course shows an estimated time. Reading time is computed at 175 words a minute; a page can set its own time when it asks for more than reading (such as working through primary sources); the knowledge check counts a minute and a half per question and the written exercise thirty minutes. The assigned readings and recordings are supplementary and not counted. A full lesson aims at about two hours. Knowledge-check choices are shown in a stable shuffled order, so the position of the right answer gives nothing away.

## The forge

With an Anthropic API key, Claude extends Cornerstone:

- **Inquiries.** A student types “I want to learn Astronomy.” If Cornerstone already teaches it, they are taken there. If not, the faculty decides whether it belongs as a new concentration in an existing faculty or as a new faculty, and drafts a full program of study.
- **Proposed concentrations.** Any signed-in student can propose a new concentration within a faculty.
- **Course preparation.** An outlined course is prepared the first time a student opens it. A librarian pass searches the web for real editions, lectures, recordings, and archives; the faculty then plans the course and writes each of its five lessons in full—several pages, a sources page, a knowledge check, and a written exercise, about two hours each—from those notes. **Any link that did not appear in the search results is removed**, so students never follow an invented URL.
- **Written exercises.** Every lesson ends with a written exercise. A student submits a response and receives a tutor’s report: an overall mark (Distinction, Merit, Pass, or Revise), scores and comments on argument, evidence, understanding, and expression, marginal notes on specific passages, and a next step. Students may revise and resubmit as often as they like.
- **Continuing studies.** When a student completes every course in a program, they may ask for more: the faculty drafts graduate-level courses that extend it.

All drafting happens in the background; pages refresh themselves until the work is ready.

## Running it

Requires Node.js 20 or later. The database is SQLite, through `better-sqlite3`, which installs prebuilt binaries for Windows, macOS, and Linux.

```bash
npm install
cp .env.example .env.local   # add ANTHROPIC_API_KEY to enable the forge
npm run dev                  # http://localhost:3000
```

For production: `npm run build && npm start`. The SQLite database is created at `data/university.db` on first request and seeded from `src/content`.

## Adding to the catalogue

- **Faculties, concentrations, and course outlines** live in `src/content/catalogue.ts`. Edit and restart; the seed is re-applied on every boot without touching student data or forged content.
- **Hand-written courses** live in `src/content/courses/` and are registered in `src/content/courses/index.ts` by course code. They are validated against the course schema at startup.
- Concentrations and faculties can also be added from the site itself through the forge, as above.

## Structure

```
src/
  app/            pages (faculties, programs, courses, lessons, reference shelf, studies) and server actions
  components/     typography-first UI: citations, media, knowledge checks
  content/        the founding catalogue and hand-written courses
  lib/
    db.ts         SQLite schema and seeding
    auth.ts       scrypt passwords and session cookies
    catalogue.ts  catalogue queries and inquiry matching
    progress.ts   enrollment and progress
    forge.ts      Claude: research, drafting, link verification
    registrar.ts  background drafting jobs
    schema.ts     the course schema shared by authored and forged courses
```

## Appearance

My Studies has an **Appearance** section with nine house palettes: Navy & Gold (the default, which follows the device's light or dark setting), Oxford Stone, Forest & Brass, Claret & Slate, Venetian Teal & Bronze, Ivory & Oxblood, Graphite & Silver, Midnight Library, and Reading Room. The choice is stored in a cookie and applies to every page. Palettes are defined in `src/lib/themes.ts`; the default lives in `:root` in `src/app/globals.css`.
