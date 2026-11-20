import type { Element, Root } from "hast";
import ReactMarkdown, { defaultUrlTransform, type Components } from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { Figure } from "@/components/Figure";
import { HistoryMap } from "@/components/HistoryMap";

/**
 * A paragraph holding nothing but an image is a figure:
 * `![alt text](url "Caption and credit.")` becomes an illustration with its caption,
 * and `![alt text](map:<id> "Caption.")` an interactive map from src/content/maps
 * (`map:<id>#1-3` shows only chapters 1 to 3, to sit beside the section they illustrate).
 */
const components: Components = {
  p({ node, children, ...props }) {
    const kids = (node?.children ?? []).filter((c) => !(c.type === "text" && !c.value.trim()));
    const only = kids.length === 1 && kids[0].type === "element" && kids[0].tagName === "img" ? (kids[0] as Element) : undefined;
    if (only) {
      const { src, alt, title } = only.properties as { src?: string; alt?: string; title?: string };
      if (src?.startsWith("map:")) {
        // map:<id> or map:<id>#3-5 (only chapters 3 to 5, to sit beside one section)
        const [id, range] = src.slice(4).split("#");
        const m = range?.match(/^(\d+)-(\d+)$/);
        return <HistoryMap id={id} alt={alt ?? ""} caption={title} chapters={m ? [Number(m[1]), Number(m[2])] : undefined} />;
      }
      if (src) return <Figure src={src} alt={alt ?? ""} caption={title} />;
    }
    return <p {...props}>{children}</p>;
  },
};

/**
 * Stamps each top-level element with the offset of the Markdown block it came from,
 * so the narration player can find, highlight, and start from the passage being read.
 */
function rehypeBlockIds() {
  return (tree: Root) => {
    for (const node of tree.children) {
      const offset = node.position?.start.offset;
      if (node.type === "element" && offset !== undefined) node.properties["data-block"] = String(offset);
    }
  };
}

/** Links are made safe as usual; `map:` addresses name an interactive map and are kept. */
const urlTransform = (url: string) => (url.startsWith("map:") ? url : defaultUrlTransform(url));

/** Renders lecture Markdown. Line breaks are kept, so quoted verse keeps its lineation. */
export function Markdown({ children, className = "prose" }: { children: string; className?: string }) {
  return (
    <div className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} rehypePlugins={[rehypeBlockIds]} components={components} urlTransform={urlTransform}>{children}</ReactMarkdown>
    </div>
  );
}
