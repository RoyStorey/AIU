import type { Element } from "hast";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { Figure } from "@/components/Figure";

/**
 * A paragraph holding nothing but an image is a figure:
 * `![alt text](url "Caption and credit.")` becomes an illustration with its caption.
 */
const components: Components = {
  p({ node, children, ...props }) {
    const kids = (node?.children ?? []).filter((c) => !(c.type === "text" && !c.value.trim()));
    const only = kids.length === 1 && kids[0].type === "element" && kids[0].tagName === "img" ? (kids[0] as Element) : undefined;
    if (only) {
      const { src, alt, title } = only.properties as { src?: string; alt?: string; title?: string };
      if (src) return <Figure src={src} alt={alt ?? ""} caption={title} />;
    }
    return <p {...props}>{children}</p>;
  },
};

/** Renders lecture Markdown. Line breaks are kept, so quoted verse keeps its lineation. */
export function Markdown({ children, className = "prose" }: { children: string; className?: string }) {
  return (
    <div className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} components={components}>{children}</ReactMarkdown>
    </div>
  );
}
