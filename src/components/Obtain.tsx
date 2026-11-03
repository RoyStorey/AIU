import { foundLinks, searchLinks, type BookRef, type BookSource } from "@/lib/books";

type Link = { label: string; url: string };

/** A link's short name and where it goes: "Library · WorldCat", "New · Bookshop.org". */
function named(l: Link): { name: string; site?: string } {
  if (l.url.includes("worldcat.org")) return { name: "Library", site: "WorldCat" };
  if (l.url.includes("bookshop.org")) return { name: "New", site: "Bookshop.org" };
  if (l.url.includes("abebooks.com")) return { name: "Secondhand", site: "AbeBooks" };
  return { name: "Open Library" };
}

function Choice({ link, label, free }: { link: Link; label?: string; free?: boolean }) {
  const { name, site } = named(link);
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className={free ? "obtain-link obtain-free" : "obtain-link"} title={link.label}>
      {label ?? name}{site && <span className="obtain-site">{site}</span>}
    </a>
  );
}

/**
 * How to get hold of a book, kept to one quiet line: a free copy, when there is
 * one, stands out on its own; the other ways to find it fold away under "Find a copy".
 */
export function Obtain({ book, source }: { book: BookRef; source: BookSource | undefined }) {
  if (source?.status === "not_found") {
    return (
      <div className="obtain">
        <details className="obtain-more">
          <summary>Not in online catalogues</summary>
          <p className="obtain-missing">
            Ask a university or public library, most of which can borrow it for you through interlibrary loan, or a
            secondhand bookseller. <Choice link={searchLinks(book)[0]} label="Search libraries" />
          </p>
        </details>
      </div>
    );
  }

  const found = source?.status === "found";
  const links = found ? foundLinks(book, source) : searchLinks(book);
  const free = found && (source.access === "public" || source.access === "borrowable");
  const openLibrary = links.find((l) => named(l).name === "Open Library")!;
  const others = free ? links.filter((l) => l !== openLibrary) : links;

  return (
    <div className="obtain">
      {free && <Choice link={openLibrary} label={source.access === "public" ? "Read free" : "Borrow free"} free />}
      <details className="obtain-more">
        <summary>{free ? "Other copies" : "Find a copy"}</summary>
        <div className="obtain-menu">
          {others.map((l) => <Choice key={l.url} link={l} />)}
        </div>
      </details>
    </div>
  );
}
