/* Levels, ranks, XP rewards, and badges. Pure functions so the store and UI can share them. */

export const XP = {
  lesson: 50,
  quizCorrect: 10,
  quizPerfect: 25,
  essay: (score: number) => 30 + Math.round(score * 0.7),
  timeline: 40,
  flashcards: 25,
  chess: 60,
  course: 250,
  spark: 5,
  firstTopic: 20,
} as const;

const RANKS = [
  "Curious Tadpole",
  "Apprentice Ponderer",
  "Footnote Diver",
  "Journeyman Wonderer",
  "Marginalia Knight",
  "Keeper of Rabbit Holes",
  "Archivist of Oddities",
  "Lantern of the Library",
  "Grand Polymath",
  "Sage of Infinite Footnotes",
];

/** Total XP needed to reach a level: 200, 500, 900, 1400, ... */
export const xpForLevel = (level: number) => (level <= 1 ? 0 : 50 * (level - 1) * (level + 2));

export function levelInfo(xp: number) {
  let level = 1;
  while (xp >= xpForLevel(level + 1)) level++;
  const floor = xpForLevel(level);
  const ceil = xpForLevel(level + 1);
  return {
    level,
    rank: RANKS[Math.min(level - 1, RANKS.length - 1)],
    into: xp - floor,
    span: ceil - floor,
    pct: (xp - floor) / (ceil - floor),
  };
}

export type Stats = {
  xp: number;
  streak: number;
  topics: number;
  courses: number;
  coursesDone: number;
  lessonsDone: number;
  essays: number;
  bestEssay: number;
  perfectQuizzes: number;
  timelines: number;
  flashcards: number;
  chess: number;
  sparks: number;
  libraryClicks: number;
};

export type Badge = { id: string; emoji: string; name: string; desc: string; test: (s: Stats) => boolean };

export const BADGES: Badge[] = [
  { id: "first-steps", emoji: "👣", name: "First Steps", desc: "Finish your first lesson", test: (s) => s.lessonsDone >= 1 },
  { id: "rabbit-hole", emoji: "🐇", name: "Down the Rabbit Hole", desc: "Finish 10 lessons", test: (s) => s.lessonsDone >= 10 },
  { id: "polymath", emoji: "🦉", name: "Polymath", desc: "Explore 3 different subjects", test: (s) => s.topics >= 3 },
  { id: "enrolled", emoji: "🎒", name: "Enrolled", desc: "Forge or open your first course", test: (s) => s.courses >= 1 },
  { id: "graduate", emoji: "🎓", name: "Graduate", desc: "Complete a whole course", test: (s) => s.coursesDone >= 1 },
  { id: "wordsmith", emoji: "🪶", name: "Wordsmith", desc: "Submit 3 essays", test: (s) => s.essays >= 3 },
  { id: "laureate", emoji: "🏛️", name: "Laureate", desc: "Score 90+ on an essay", test: (s) => s.bestEssay >= 90 },
  { id: "flawless", emoji: "💎", name: "Flawless", desc: "Ace a quiz with no mistakes", test: (s) => s.perfectQuizzes >= 1 },
  { id: "time-lord", emoji: "⏳", name: "Time Lord", desc: "Order a timeline perfectly", test: (s) => s.timelines >= 1 },
  { id: "memory-palace", emoji: "🏰", name: "Memory Palace", desc: "Master a flashcard deck", test: (s) => s.flashcards >= 1 },
  { id: "tactician", emoji: "♞", name: "Tactician", desc: "Solve a chess puzzle", test: (s) => s.chess >= 1 },
  { id: "spark-jar", emoji: "✨", name: "Spark Collector", desc: "Collect 5 curiosity sparks", test: (s) => s.sparks >= 5 },
  { id: "bibliophile", emoji: "📚", name: "Bibliophile", desc: "Open 5 library resources", test: (s) => s.libraryClicks >= 5 },
  { id: "on-fire", emoji: "🔥", name: "On Fire", desc: "Learn 3 days in a row", test: (s) => s.streak >= 3 },
  { id: "devoted", emoji: "🕯️", name: "Devoted", desc: "Learn 7 days in a row", test: (s) => s.streak >= 7 },
  { id: "luminary", emoji: "🌟", name: "Luminary", desc: "Reach level 5", test: (s) => levelInfo(s.xp).level >= 5 },
];

const EXPANSIONS = [
  ["Absurdly", "Interesting", "University"],
  ["Academy of", "Infinite", "Underlining"],
  ["Association of", "Insatiable", "Uncles"],
  ["Atelier of", "Impossible", "Undertakings"],
  ["Archive of", "Irresistible", "Unknowns"],
  ["Abbey of", "Itchy", "Understanding"],
  ["Asylum for the", "Incurably", "Unbored"],
  ["Academy of", "Improbable", "Usefulness"],
  ["Almanac of", "Intriguing", "Universes"],
  ["Assembly of", "Inquisitive", "Unicorns"],
  ["Aviary of", "Ingenious", "Ugly Ducklings"],
  ["Apothecary of", "Illuminating", "Uncertainty"],
];

export const backronym = (i: number) => EXPANSIONS[((i % EXPANSIONS.length) + EXPANSIONS.length) % EXPANSIONS.length];
export const BACKRONYM_COUNT = EXPANSIONS.length;

export const today = () => new Date().toLocaleDateString("en-CA");
export const yesterday = () => new Date(Date.now() - 864e5).toLocaleDateString("en-CA");
