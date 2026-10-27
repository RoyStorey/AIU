import type { GradeData } from "./schema";

const STOP = new Set("the a an and or of to in on for with is are was were be by as at that this from it its into than".split(" "));

/** A gentle heuristic grader for demo mode: length, vocabulary overlap with the lesson's key ideas, and variety. */
export function offlineGrade(answer: string, keyIdeas: string[]): GradeData {
  const words = answer.toLowerCase().match(/[a-z']+/g) ?? [];
  const vocab = new Set(keyIdeas.join(" ").toLowerCase().match(/[a-z']+/g)?.filter((w) => w.length > 3 && !STOP.has(w)));
  const hits = new Set(words.filter((w) => vocab.has(w)));
  const variety = new Set(words).size / Math.max(1, words.length);
  const score = Math.round(
    Math.min(100, 40 + Math.min(30, words.length / 6) + Math.min(20, hits.size * 4) + Math.min(10, variety * 15)),
  );
  return {
    score,
    stars: score >= 85 ? 3 : score >= 65 ? 2 : 1,
    headline: score >= 85 ? "A splendid piece of thinking!" : score >= 65 ? "Solid work, scholar." : "A promising start.",
    praise: hits.size
      ? `You engaged with key ideas like “${[...hits].slice(0, 3).join("”, “")}”.`
      : "You put your thoughts into words, which is where all understanding begins.",
    growth: "Anchor your argument with one specific example: a named work, place, person, or date.",
    followUp: "What would someone who disagrees with you say, and how would you answer them?",
  };
}
