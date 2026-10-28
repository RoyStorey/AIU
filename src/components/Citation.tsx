import type { Resource } from "@/lib/schema";
import type { BookSource } from "@/lib/books";
import { Obtain } from "@/components/Obtain";

const KIND: Record<Resource["kind"], string> = {
  book: "Book",
  edition: "Edition",
  article: "Article",
  website: "Online",
  video: "Video",
  audio: "Audio",
  lecture: "Lecture",
};

export function hostOf(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/**
 * A bibliographic entry in the house style: kind, italic title, author, imprint, note.
 * A book with no link of its own is followed by a way to obtain it.
 */
export function Citation({ resource, source }: { resource: Resource; source?: BookSource | null }) {
  const { kind, title, author, publisher, year, url, note } = resource;
  const imprint = [publisher, year].filter(Boolean).join(", ");
  return (
    <li className="citation">
      <span className="kind">{KIND[kind]}</span>
      <div>
        <span className="title">
          {url ? <a href={url} target="_blank" rel="noopener noreferrer">{title}</a> : title}
        </span>
        {author && <span className="by">, {author}</span>}
        {imprint && <span className="pub">{(author ?? title).endsWith(".") ? " " : ". "}{imprint}</span>}
        {url && <span className="host">{hostOf(url)} ↗</span>}
        {note && <p className="note">{note}</p>}
        {source !== undefined && source !== null && <Obtain book={{ title, author }} source={source} />}
      </div>
    </li>
  );
}
