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

The whole **Poetry concentration** is written in full by hand, to the full standard of five lessons of about two hours each (roughly ten hours a course): **POE 101** The Art of Poetry, **POE 110** The Lyric from Sappho to Petrarch, **POE 201** The English Renaissance Lyric, **POE 210** The Romantic Poets, **POE 220** The Epic Tradition, **POE 301** Victorian and Modern Poetry, **POE 310** American Poetry: Whitman to the Present, and **POE 401** Seminar: Poetics and Criticism. **EUH 301** Europe in the Age of Totalitarianism is also complete to that standard, and **MEH 101** has its first lesson written with the rest outlined. Shorter hand-written first courses exist for **AAL 101**, **LAT 101**, **AMH 101**, **BIB 101**, and **LIN 101**, and will be expanded to match. The rest of the catalogue begins as outlines with their core texts and is prepared by the forge.

Poems published before 1931 (in the US public domain) are printed in full; later poems are described, quoted no more than a line, and linked to authorized texts at the Poetry Foundation or the Academy of American Poets.

## Lessons and study time

A lesson is a series of pages followed by an exercises step: a knowledge check and a written exercise marked by a tutor. Every page, lesson, and course shows an estimated time. Reading time is computed at 175 words a minute; a page can set its own time when it asks for more than reading (such as working through primary sources); the knowledge check counts a minute and a half per question and the written exercise thirty minutes. The assigned readings and recordings are supplementary and not counted. A full lesson aims at about two hours. Knowledge-check choices are shown in a stable shuffled order, so the position of the right answer gives nothing away.

## Standing: Expert and Master

Every concentration ends in a **capstone**: a substantial piece of work set by the faculty and tailored to the discipline. Poetry asks for a critical study (or a portfolio of poems with a critical preface), Latin and Greek for a translation with commentary, the histories for a source-based research essay, Biblical Studies for an exegesis, Phonetics for a phonological analysis from data, Sociolinguistics for a small empirical study. Each brief gives its options, requirements, length, and the rubric the examiner uses. The briefs for the founding concentrations are in `src/content/capstones.ts`; the forge writes one for every concentration it drafts.

- A student who completes every course in a program (Foundations through Seminar) becomes an **Expert** in it.
- An Expert who submits the capstone and passes (Distinction, Merit, or Pass) becomes a **Master**. The capstone is examined against its rubric by the forge, with scores, marginal notes, and a one-sentence citation; a capstone marked Revise may be revised and resubmitted.
- A Master's capstone is published on their profile and in the concentration's **Hall of Masters**. Wherever a Master's name appears in that concentration—the common room, the roster, a correction report—it carries a gold seal that links to the capstone; an Expert's carries a ring.

## Profiles and common rooms

- **Profiles** (`/students/[id]`) show a student's standing in every concentration as a set of **rose windows**: one ring per concentration, one pane per course, each pane filling as lessons are completed, with a ring at the center for an Expert and a gold star for a Master. Below them are the student's capstones, six months of study activity, and their posts. A transcript table gives the same figures in text. Students may keep their profile private.
- Each concentration has a **Students** tab listing everyone studying it who keeps a public profile—Masters, then Experts, then those still working through the program—each with their rose window for that concentration. There is no academy-wide directory: students meet one another within the concentration they share.
- Each concentration also has a **Common Room**: its Hall of Masters and threads of discussion open to any signed-in student.

## Comments & Corrections

Every lesson ends with a **Comments & Corrections** section, because these lessons can be wrong. It shows the editors' own notes on claims that are uncertain (a quotation known only from later report), disputed, or corrected, and the reports students post: errors of fact, doubtful claims, broken links, and comments, each with the passage in question. With the forge configured, each report of an error gets an automated fact-checker's first look within a minute. Faculty (named in `AIU_FACULTY_EMAILS`) answer reports and mark them Confirmed, Corrected, or Not an error. `/corrections` lists every open report. The editors' notes on the hand-written courses are kept in `src/content/courses/editorial.ts`; the forge lists its own uncertain claims when it drafts a lesson.

## Books

Every book named in a course comes with a way to obtain it. Books are looked up in Open Library's catalogue in the background, one at a time, and the result is kept: a link to read or borrow a free copy where one exists, a catalogue record otherwise, and links to find it in a library (WorldCat) or buy it new or secondhand. A book the catalogue does not know is marked plainly: the student will need to find a copy elsewhere, through a library or a secondhand bookseller. Until a book has been looked up, it is shown with searches of libraries and booksellers.

## Study aids

- **Commonplace book.** Every lesson page has a private notes box; all of a student's notes are gathered at `/study/notes`, in course order.
- **Pick up where you left off.** My Studies shows the last pages a student was reading.

## Sample students

A new installation includes three sample students so the community features can be seen at once: **Eleanor Marsh**, a Master of Poetry whose capstone, "'Thou Hast Thy Music Too': How Keats's Odes End," is a complete 4,500-word essay; **Thomas Adeyemi**, an Expert; and **Ruth Calloway**, midway through the program, with their threads in the Poetry common room and two correction reports. They are labeled "sample," cannot sign in, and are removed—with everything they wrote—by setting `AIU_DEMO=off`.

## Administration

Administrators, named in `AIU_ADMIN_EMAILS`, see an **Admin** link in the header. The panel at `/admin` lists every account with when it joined, when it was last active (the latest of signing in, opening a page, and anything written or completed), and what it has done: lessons, concentrations declared, posts, and capstones. Accounts can be filtered by how long they have been inactive (30, 90, 180, or 365 days), by whether they never began, or by name or email, then selected and deleted after a confirmation. Deleting an account removes everything that belongs to it. An administrator cannot delete their own account or another administrator's. Administrators may also answer correction reports.

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

For production: `npm run build && npm start`. The SQLite database is created at `data/university.db` on first request and seeded from `src/content`. Databases made by the previous version are upgraded in place.

**Sharing it with others.** You can run Cornerstone on your own computer and let others reach it by port forwarding. Sign-in works over plain HTTP, but passwords and session cookies then cross the network unencrypted; for anything beyond friends on a trusted network, put it behind HTTPS (a reverse proxy such as Caddy, or a tunnel such as Cloudflare Tunnel or Tailscale Funnel). Behind a proxy that sends `X-Forwarded-Proto: https`, the session cookie is marked Secure automatically.

Other settings, all optional, are described in `.env.example`: `AIU_ADMIN_EMAILS` (who may manage accounts at `/admin`), `AIU_FACULTY_EMAILS` (who may answer correction reports), `AIU_DEMO=off` (remove the sample students), `AIU_BOOK_LOOKUP=off` (no Open Library lookups), and `AIU_SECURE_COOKIES` (force the session cookie's Secure flag on or off).

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
    progress.ts   enrollment, progress, and standing (Student, Expert, Master)
    capstone.ts   capstone briefs, submissions, and the Hall of Masters
    corrections.ts  comments and corrections on lessons
    community.ts  common-room threads and rosters
    people.ts     profiles and each concentration's students
    books.ts      finding copies of books (Open Library)
    notes.ts      the commonplace book
    forge.ts      Claude: research, drafting, link verification
    registrar.ts  background drafting jobs
    schema.ts     the course schema shared by authored and forged courses
```

## Appearance

My Studies has an **Appearance** section with nine house palettes: Navy & Gold (the default, which follows the device's light or dark setting), Oxford Stone, Forest & Brass, Claret & Slate, Venetian Teal & Bronze, Ivory & Oxblood, Graphite & Silver, Midnight Library, and Reading Room. The choice is stored in a cookie and applies to every page. Palettes are defined in `src/lib/themes.ts`; the default lives in `:root` in `src/app/globals.css`.
