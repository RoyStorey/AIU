import type Database from "better-sqlite3";
import { capstoneAbstract, capstoneAssessment, capstoneBody, capstoneOption, capstoneTitle } from "./capstone";

/**
 * Sample students, so that a new installation shows what Cornerstone looks like
 * in use: a Master of Poetry with her capstone, an Expert, a student midway
 * through the program, and their conversations in the Poetry common room.
 *
 * They are marked as demonstration accounts, cannot sign in, and are labeled
 * “sample” wherever they appear. Set AIU_DEMO=off to remove them and everything
 * they wrote.
 */

const DOMAIN = "demo.cornerstone.invalid";

type Plan = {
  email: string;
  name: string;
  bio: string;
  joined: string;
  /** Concentrations declared, by name, with the date. */
  declares: [string, string][];
  /** Lessons completed: course code, number of lessons, first date, days between lessons. */
  lessons: [string, number, string, number][];
};

const students: Plan[] = [
  {
    email: `eleanor.marsh@${DOMAIN}`,
    name: "Eleanor Marsh",
    bio: "Retired music teacher in Bath, reading the poets I was always too busy for. Keats first, last, and in between. Now beginning Latin, slowly, so that I can read Horace without a crib.",
    joined: "2026-02-09 19:12:00",
    declares: [["Poetry", "2026-02-09 19:20:00"], ["Latin Language and Literature", "2026-08-24 10:05:00"]],
    lessons: [
      ["POE 101", 5, "2026-02-12", 4],
      ["POE 110", 5, "2026-03-05", 4],
      ["POE 201", 5, "2026-03-27", 5],
      ["POE 210", 5, "2026-04-22", 4],
      ["POE 220", 5, "2026-05-15", 6],
      ["POE 301", 5, "2026-06-20", 5],
      ["POE 310", 5, "2026-07-18", 5],
      ["POE 401", 5, "2026-08-14", 6],
      ["LAT 101", 3, "2026-08-27", 12],
    ],
  },
  {
    email: `thomas.adeyemi@${DOMAIN}`,
    name: "Thomas Adeyemi",
    bio: "Civil engineer in Leeds. I came for the meter and stayed for Hopkins. Working out what a capstone on sprung rhythm would look like.",
    joined: "2026-03-02 08:40:00",
    declares: [["Poetry", "2026-03-02 08:45:00"]],
    lessons: [
      ["POE 101", 5, "2026-03-04", 5],
      ["POE 110", 5, "2026-04-01", 5],
      ["POE 201", 5, "2026-04-29", 4],
      ["POE 210", 5, "2026-05-21", 5],
      ["POE 220", 5, "2026-06-17", 6],
      ["POE 301", 5, "2026-07-20", 4],
      ["POE 310", 5, "2026-08-12", 5],
      ["POE 401", 5, "2026-09-08", 5],
    ],
  },
  {
    email: `ruth.calloway@${DOMAIN}`,
    name: "Ruth Calloway",
    bio: "Graduate student in nursing, reading poems on night shifts. Also working through the Hebrew Bible with the Biblical Studies faculty.",
    joined: "2026-06-03 23:10:00",
    declares: [["Poetry", "2026-06-03 23:15:00"], ["Biblical Studies", "2026-07-11 22:30:00"]],
    lessons: [
      ["POE 101", 5, "2026-06-06", 6],
      ["POE 110", 3, "2026-07-14", 9],
      ["BIB 101", 2, "2026-07-13", 20],
      ["POE 201", 1, "2026-10-19", 1],
    ],
  },
];

type Post = { by: number; at: string; body: string };
type ThreadPlan = { by: number; at: string; title: string; body: string; replies: Post[] };

/** Conversations in the Poetry common room. `by` is an index into the students above. */
const threads: ThreadPlan[] = [
  {
    by: 2, at: "2026-06-21 01:14:00",
    title: "Is “Spring and Fall” really in sprung rhythm?",
    body: `I've been scanning "Spring and Fall" for POE 101 and I can't decide whether it's sprung rhythm or just a loose trochaic tetrameter with Hopkins's accent marks telling you where to lean.

"Márgarét, áre you gríeving" — four stresses, but the accents land on "are," which no one would stress in ordinary speech. Is that the point? Hopkins forcing the stress somewhere unnatural so that the line sounds like grief?`,
    replies: [
      {
        by: 1, at: "2026-06-21 07:52:00",
        body: "I think you've put your finger on it. The marks are there because the stresses aren't where the ear expects. In a normal trochaic line you'd say \"MAR-ga-ret, ARE you GRIEV-ing\" anyway, so the accent on \"are\" isn't strictly needed for the meter—it's an instruction about emphasis. Hopkins called the poem sprung rhythm, but by his own definition any line can count only stresses, so the question is what you hear. I hear four heavy beats and a lot of slack, which is about as sprung as a nursery rhyme. Which is to say: very.",
      },
      {
        by: 0, at: "2026-06-22 18:30:00",
        body: "Try reading \"Sórrow's spríngs áre the same\" aloud with all three marked stresses and then without them. Without, it's a pleasant sentence. With them, it's four slow strokes of a bell—and \"are\" becomes the most important word in the poem: the springs ARE the same, for Margaret and for everyone. The meter is doing theology. (Bridges, who printed the poem in 1918, kept the accents, which tells you something about how seriously he took them.)",
      },
      {
        by: 2, at: "2026-06-23 00:41:00",
        body: "Four strokes of a bell. That's it exactly. Thank you both—I'm going to stop counting syllables and start listening.",
      },
    ],
  },
  {
    by: 1, at: "2026-06-18 12:05:00",
    title: "Which Iliad are you reading for POE 220?",
    body: "The course links Butler and Pope on Gutenberg and recommends Lattimore. I've started with Lattimore because the line numbers match the Greek, but it's heavy going. Is anyone reading Fagles or Emily Wilson? Is it worth switching?",
    replies: [
      {
        by: 0, at: "2026-06-18 20:16:00",
        body: "I read Lattimore for the course and Pope at night, for pleasure. Pope's couplets turn the battles into something like oratory, which is not Homer, but his Book 6 is wonderful, and \"Like leaves on trees the race of man is found\" has stayed with me all year. If you want speed, Fagles; if you want to know what the Greek is doing line by line, stay with Lattimore. Do the lesson's exercise of comparing translations of the same passage—it taught me more than any of them alone.",
      },
      {
        by: 2, at: "2026-07-02 02:08:00",
        body: "Emily Wilson's Odyssey is what got me into the epic unit at all—it reads like a novel. Her Iliad came out in 2023; I've just started it. Plain, fast, and the similes really land.",
      },
    ],
  },
  {
    by: 0, at: "2026-09-02 17:40:00",
    title: "Reading group: Keats's odes, one a week",
    body: `I'm writing my capstone on how Keats's odes end, and I'd love company. One ode a week through September, starting with the Nightingale: read it aloud at least twice, scan the last stanza, and post what you notice about the final line.

Texts: the 1820 volume on Gutenberg (linked in POE 210, Lesson V) or any good edition.`,
    replies: [
      {
        by: 1, at: "2026-09-04 21:12:00",
        body: "\"Fled is that music:—Do I wake or sleep?\" The line starts on a stress and the bird is gone before you get to the second word. Then the question has four monosyllables and I genuinely can't tell which are stressed. Is that on purpose?",
      },
      {
        by: 0, at: "2026-09-05 08:03:00",
        body: "I think it must be. The poem ends unable to decide whether it's awake, and the last half-line can't decide where its weight falls. That's going in the essay, with thanks.",
      },
      {
        by: 2, at: "2026-09-20 03:26:00",
        body: "Late to this, but \"To Autumn\" this week: there's no \"I\" in the whole poem. Every other ode is about the speaker. This one just… looks, and then listens. I read it at 3am on a break and it was the right poem for that hour.",
      },
    ],
  },
];

/** Reports in Comments & Corrections, with the faculty's answers where given. */
const reports = [
  {
    by: 2, course: "poe-401", lesson: 4, page: 5, at: "2026-10-03 02:47:00",
    kind: "doubt",
    quote: "\"Only in Russia is poetry respected,\" he is reported to have said; \"it gets people killed.\"",
    body: "Where does this Mandelstam remark come from? I've seen it quoted everywhere online with no source, and the page also says he died in a labor camp, but I thought he died before he reached one.",
    status: "corrected",
    response: "Thank you—you were right on the second point. Mandelstam died in December 1938 in a transit camp near Vladivostok; the lesson now says so. The remark is known from Nadezhda Mandelstam's memoir Hope Against Hope (1970), which is why the lesson says “is reported.” Both points are now recorded in the editors' notes.",
    review: {
      verdict: "likely-error",
      explanation: "The report is right about the place of death: Mandelstam died in the Vtoraya Rechka transit camp near Vladivostok in December 1938, before reaching a labor camp in Kolyma. The quoted remark is attested in Nadezhda Mandelstam's Hope Against Hope, so the lesson's “is reported to have said” is appropriate.",
    },
  },
  {
    by: 0, course: "poe-210", lesson: 4, page: null, at: "2026-09-29 11:20:00",
    kind: "comment",
    quote: "",
    body: "For anyone writing on the end of the Grecian urn: the quotation marks around \"Beauty is truth, truth beauty\" appear in the 1820 volume, but not in the version printed in the Annals of the Fine Arts the same year, nor in the transcripts made by Keats's friends. Who speaks the last two lines depends on which text you read. Worth a sentence in the lesson?",
    status: "open",
    response: null,
    review: null,
  },
];

function addDays(date: string, days: number): string {
  const d = new Date(`${date}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export function seedDemo(db: Database.Database) {
  if (process.env.AIU_DEMO === "off") {
    db.prepare("DELETE FROM users WHERE demo = 1").run();
    return;
  }
  const exists = db.prepare("SELECT 1 FROM users WHERE email = ?").get(students[0].email);
  if (exists) return;

  const concentrationId = (name: string) =>
    (db.prepare("SELECT id FROM concentrations WHERE name = ?").get(name) as { id: number } | undefined)?.id;
  const lessonCount = (id: string) =>
    (db.prepare("SELECT COALESCE(json_array_length(content, '$.lessons'), 0) AS n FROM courses WHERE id = ?").get(id) as { n: number } | undefined)?.n ?? 0;
  const poetry = concentrationId("Poetry");
  if (!poetry) return;

  db.exec("BEGIN");
  try {
    const ids = students.map((s) => {
      const { id } = db.prepare(`
        INSERT INTO users (name, email, password_hash, created_at, bio, visibility, demo)
        VALUES (?, ?, '!', ?, ?, 'public', 1) RETURNING id
      `).get(s.name, s.email, s.joined, s.bio) as { id: number };

      for (const [name, at] of s.declares) {
        const cid = concentrationId(name);
        if (cid) db.prepare("INSERT INTO enrollments (user_id, concentration_id, declared_at) VALUES (?, ?, ?)").run(id, cid, at);
      }
      for (const [code, count, first, every] of s.lessons) {
        const course = code.toLowerCase().replace(" ", "-");
        const n = Math.min(count, lessonCount(course));
        for (let i = 0; i < n; i++) {
          const day = addDays(first, i * every);
          const score = [1, 0.9, 1, 0.8, 0.9][(i + code.length) % 5];
          db.prepare("INSERT INTO lesson_progress (user_id, course_id, lesson_index, score, completed_at) VALUES (?, ?, ?, ?, ?)")
            .run(id, course, i, score, `${day} 20:${String(10 + i * 7).padStart(2, "0")}:00`);
        }
      }
      return id;
    });

    db.prepare(`
      INSERT INTO capstones (user_id, concentration_id, option, title, abstract, body, status, assessment, passed, created_at)
      VALUES (?, ?, ?, ?, ?, ?, 'ready', ?, 1, '2026-10-12 16:45:00')
    `).run(ids[0], poetry, capstoneOption, capstoneTitle, capstoneAbstract, capstoneBody, JSON.stringify(capstoneAssessment));

    for (const t of threads) {
      const { id } = db.prepare(`
        INSERT INTO posts (concentration_id, user_id, title, body, created_at) VALUES (?, ?, ?, ?, ?) RETURNING id
      `).get(poetry, ids[t.by], t.title, t.body, t.at) as { id: number };
      for (const r of t.replies) {
        db.prepare("INSERT INTO posts (concentration_id, user_id, parent_id, body, created_at) VALUES (?, ?, ?, ?, ?)")
          .run(poetry, ids[r.by], id, r.body, r.at);
      }
    }

    for (const r of reports) {
      db.prepare(`
        INSERT INTO corrections (course_id, lesson_index, page_index, user_id, kind, quote, body, status, response, review, review_status, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        r.course, r.lesson, r.page, ids[r.by], r.kind, r.quote, r.body, r.status, r.response,
        r.review ? JSON.stringify(r.review) : null, r.review ? "ready" : null, r.at,
      );
    }
    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}
