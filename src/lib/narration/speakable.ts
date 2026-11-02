/**
 * Rewrites lecture prose so that a speech engine reads it as a lecturer would:
 * abbreviations spelled out, date ranges joined with "to", regnal numbers read
 * as ordinals, and editorial brackets dropped. Kept deliberately conservative:
 * anything not recognized is left for the engine to read as written.
 */

const ABBREVIATIONS: [RegExp, string][] = [
  [/\bc\.\s?(?=\d)/g, "circa "],
  [/\bca\.\s?(?=\d)/g, "circa "],
  [/\be\.g\.,?/g, "for example,"],
  [/\bi\.e\.,?/g, "that is,"],
  [/\betc\./g, "et cetera."],
  [/\bvs?\.\s/g, "versus "],
  [/\bSt\.\s(?=[A-Z])/g, "Saint "],
  [/\bFt\.\s(?=[A-Z])/g, "Fort "],
  [/\bMt\.\s(?=[A-Z])/g, "Mount "],
  [/\bGen\.\s(?=[A-Z])/g, "General "],
  [/\bCol\.\s(?=[A-Z])/g, "Colonel "],
  [/\bCapt\.\s(?=[A-Z])/g, "Captain "],
  [/\bLt\.\s(?=[A-Z])/g, "Lieutenant "],
  [/\bGov\.\s(?=[A-Z])/g, "Governor "],
  [/\bRev\.\s(?=[A-Z])/g, "Reverend "],
  [/\bProf\.\s(?=[A-Z])/g, "Professor "],
  [/\bSen\.\s(?=[A-Z])/g, "Senator "],
  [/\bRep\.\s(?=[A-Z])/g, "Representative "],
  [/\bJr\.(?=,|\s|$)/g, "Junior"],
  [/\bSr\.(?=,|\s|$)/g, "Senior"],
  [/\bNo\.\s?(?=\d)/g, "number "],
  [/\bvol\.\s?(?=\d)/gi, "volume "],
  [/\bpp\.\s?(?=\d)/g, "pages "],
  [/\bp\.\s?(?=\d)/g, "page "],
  [/\bed\.\s/g, "edited by "],
  [/\btrans\.\s/g, "translated by "],
  [/&/g, " and "],
  [/(\d)\s?%/g, "$1 percent"],
];

const ROMAN: Record<string, number> = {
  II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, XI: 11, XII: 12, XIII: 13, XIV: 14, XV: 15, XVI: 16,
};
const ORDINAL = ["", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth",
  "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth"];
/** Words after which a Roman numeral is a plain number ("World War Two", "Book Four"), not a regnal ordinal. */
const CARDINAL_AFTER = new Set(["War", "Part", "Book", "Act", "Volume", "Chapter", "Section", "Article", "Title", "Lesson",
  "Phase", "Scene", "Canto", "Plate", "Figure", "Stage", "Session", "Congress", "Amendment"]);

function regnal(text: string): string {
  return text.replace(/\b([A-Z][a-z]+)\s(I{2,3}|IV|VI{0,3}|IX|XI{1,3}|XIV|XVI?)\b(?![.'’]?[A-Za-z])/g, (all, word: string, numeral: string) => {
    const n = ROMAN[numeral];
    if (!n) return all;
    return CARDINAL_AFTER.has(word) ? `${word} ${n}` : `${word} the ${ORDINAL[n]}`;
  }).replace(/\bWar I\b/g, "War One");
}

/** "1759–60" → "1759 to 1760"; "1775–1783" → "1775 to 1783"; other number ranges read with "to". */
function ranges(text: string): string {
  return text
    .replace(/\b(\d{2})(\d{2})\s?[–-]\s?(\d{2})\b(?!\d)/g, (_, century: string, a: string, b: string) => `${century}${a} to ${century}${b}`)
    .replace(/(\d)\s?–\s?(\d)/g, "$1 to $2");
}

export function speakable(input: string): string {
  let text = input;
  // Editorial apparatus: "[…]" elisions become a pause; square brackets around insertions are dropped.
  text = text.replace(/\s?\[(?:…|\.\.\.)\]\s?/g, " … ").replace(/\[([^\]]*)\]/g, "$1");
  text = text.replace(/\bB\.?C\.?E?\b\.?/g, "B.C.").replace(/\bA\.?D\.?(?=\s?\d)/g, "A.D.").replace(/(\d)\s?AD\b/g, "$1 A.D.");
  for (const [pattern, replacement] of ABBREVIATIONS) text = text.replace(pattern, replacement);
  text = ranges(regnal(text));
  return text.replace(/[ \t]+/g, " ").replace(/\s+([,.;:!?])/g, "$1").trim();
}
