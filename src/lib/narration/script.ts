import { createHash } from "node:crypto";
import type { Blockquote, List, Paragraph, PhrasingContent, Root, RootContent } from "mdast";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import type { Lesson } from "@/lib/schema";
import { speakable } from "@/lib/narration/speakable";

/**
 * One passage of narration. `id` ties it to the rendered page: "title" for the
 * page heading, "outro" for the closing words, otherwise the character offset at
 * which the block starts in the page's Markdown, which the renderer stamps on the
 * matching element as `data-block` (see `rehypeBlockIds`).
 */
export type NarrationBlock = {
  id: string;
  kind: "title" | "heading" | "paragraph" | "quote" | "list" | "outro";
  text: string;
  words: number;
};

const parser = unified().use(remarkParse).use(remarkGfm).use(remarkBreaks);

const ORDINALS = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
export const spokenNumber = (n: number) => ORDINALS[n - 1] ?? String(n);

/** The spoken text of inline Markdown: emphasis and links read as plain words, images skipped, line breaks kept as pauses. */
function inline(nodes: PhrasingContent[]): string {
  return nodes.map((node) => {
    switch (node.type) {
      case "text": return node.value;
      case "inlineCode": return node.value;
      case "break": return "\n";
      case "image": case "imageReference": case "html": case "footnoteReference": return "";
      default: return "children" in node ? inline(node.children as PhrasingContent[]) : "";
    }
  }).join("");
}

/** Verse and other broken lines: each line becomes a short pause, without running the lines together. */
function lines(text: string): string {
  return text.split("\n").map((l) => l.trim()).filter(Boolean)
    .map((l, i, all) => (i < all.length - 1 && !/[.,;:!?—…)”"']$/.test(l) ? `${l},` : l))
    .join(" ");
}

const paragraphText = (p: Paragraph) => lines(inline(p.children));
const isFigure = (p: Paragraph) => p.children.every((c) => c.type === "image" || (c.type === "text" && !c.value.trim()));
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

function quoteText(q: Blockquote): { kind: "quote" | "paragraph"; text: string } {
  const parts = q.children.map((c) => (c.type === "paragraph" ? paragraphText(c) : c.type === "list" ? listText(c) : "")).filter(Boolean);
  const text = parts.join(" ");
  // The lessons' reflective prompts are set as block quotes but are the lecturer's own voice.
  if (/^Pause and consider\b/.test(text)) return { kind: "paragraph", text };
  return { kind: "quote", text: `Quote. ${text} End quote.` };
}

function listText(list: List, questions = false): string {
  return list.children.map((item, i) => {
    const body = item.children.map((c) => (c.type === "paragraph" ? paragraphText(c) : c.type === "list" ? listText(c) : "")).join(" ").trim();
    const end = /[.!?”"]$/.test(body) ? "" : ".";
    if (!list.ordered) return body + end;
    const n = (list.start ?? 1) + i;
    return `${questions ? `Question ${n}` : `${n}`}. ${body}${end}`;
  }).join(" ");
}

/** Splits a page's Markdown into narratable blocks, in reading order, keyed to the rendered elements. */
export function pageBlocks(markdown: string): NarrationBlock[] {
  const tree = parser.parse(markdown) as Root;
  const blocks: NarrationBlock[] = [];
  let previous: RootContent | undefined;
  for (const node of tree.children) {
    const id = String(node.position?.start.offset ?? blocks.length);
    let kind: NarrationBlock["kind"] | undefined;
    let text = "";
    if (node.type === "heading") {
      kind = "heading";
      text = inline(node.children).replace(/\n/g, " ").trim();
      // The source exercises number their documents: "1. Thomas Whately, …" is announced as "Source 1."
      text = text.replace(/^(\d+)\.\s+/, "Source $1. ");
      if (!/[.!?]$/.test(text)) text += ".";
    } else if (node.type === "paragraph" && !isFigure(node)) {
      kind = "paragraph";
      text = paragraphText(node);
    } else if (node.type === "blockquote") {
      ({ kind, text } = quoteText(node));
    } else if (node.type === "list") {
      kind = "list";
      const label = previous?.type === "paragraph" ? paragraphText(previous).trim() : "";
      text = listText(node, /^Questions?$/.test(label));
    } else if (node.type === "table") {
      kind = "paragraph";
      text = node.children.map((row) => row.children.map((cell) => inline(cell.children)).join(", ")).join(". ");
    }
    previous = node;
    if (!kind || !text.trim()) continue;
    // "Questions" alone introduces the numbered list, which now says "Question 1" itself.
    if (kind === "paragraph" && /^Questions?$/.test(text.trim())) continue;
    const spoken = speakable(text);
    blocks.push({ id, kind, text: spoken, words: words(spoken) });
  }
  return blocks;
}

/** The whole narration for one page of a lesson: a spoken title, the page, and, at the end of a lesson, a closing line. */
export function pageNarration(lesson: Lesson, lessonIndex: number, pageIndex: number): NarrationBlock[] {
  const page = lesson.pages[pageIndex];
  const title = pageIndex === 0
    ? `Lesson ${spokenNumber(lessonIndex + 1)}: ${lesson.title}. ${page.title}.`
    : `${page.title}.`;
  const blocks: NarrationBlock[] = [{ id: "title", kind: "title", text: speakable(title), words: words(title) }, ...pageBlocks(page.body)];
  if (pageIndex === lesson.pages.length - 1) {
    const outro = `This concludes Lesson ${spokenNumber(lessonIndex + 1)}. The knowledge check and the written exercise are waiting for you on the lesson page.`;
    blocks.push({ id: "outro", kind: "outro", text: outro, words: words(outro) });
  }
  return blocks;
}

/** A stable fingerprint of what a voice says, so that cached audio is replaced whenever the text changes. */
export function blockHash(voice: string, text: string, engine: string): string {
  return createHash("sha256").update(`${engine}\n${voice}\n${text}`).digest("hex").slice(0, 20);
}

