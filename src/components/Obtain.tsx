import { foundLinks, searchLinks, type BookRef, type BookSource } from "@/lib/books";

/** How to get hold of a book: what Open Library found, or searches, or a note that none was found. */
export function Obtain({ book, source }: { book: BookRef; source: BookSource | undefined }) {
  if (source?.status === "found") {
    const [primary, ...rest] = foundLinks(book, source);
    return (
      <p className="obtain">
        <span className="obtain-head">Obtain</span>
        <a href={primary.url} target="_blank" rel="noopener noreferrer" className={source.access === "public" || source.access === "borrowable" ? "obtain-free" : undefined}>{primary.label}</a>
        {rest.map((l) => <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
      </p>
    );
  }
  if (source?.status === "not_found") {
    return (
      <p className="obtain obtain-missing">
        <span className="obtain-head">No source found</span>
        We could not find this book in an online catalogue. You will need to find a copy elsewhere: ask a
        university or public library (most can borrow it for you through interlibrary loan), or a secondhand
        bookseller. <a href={searchLinks(book)[0].url} target="_blank" rel="noopener noreferrer">Search WorldCat</a>
      </p>
    );
  }
  return (
    <p className="obtain">
      <span className="obtain-head">Find a copy</span>
      {searchLinks(book).map((l) => <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
    </p>
  );
}
