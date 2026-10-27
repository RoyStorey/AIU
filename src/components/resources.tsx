import { RESOURCE_KINDS, bookCover, resourceLinks, type Resource } from "@/lib/content/schema";

const kindLabel: Record<(typeof RESOURCE_KINDS)[number], string> = {
  book: "Book",
  video: "Video",
  documentary: "Documentary",
  lecture: "Lecture",
  podcast: "Podcast",
  website: "Website",
};

const amazonTag = () => process.env.AIU_AMAZON_TAG || undefined;

function Links({ r }: { r: Resource }) {
  return (
    <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold">
      {resourceLinks(r, amazonTag()).map((l) => (
        <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="text-navy-600 underline-offset-2 hover:text-navy-900 hover:underline">
          {l.label} ↗
        </a>
      ))}
    </span>
  );
}

function Meta({ r }: { r: Resource }) {
  return (
    <span className="block text-xs text-navy-500">
      {kindLabel[r.kind]} · {r.creator}
      {r.year ? `, ${r.year}` : ""}
    </span>
  );
}

/** Recommended books and media for a whole course: books as cards, other media as a list. */
export function CourseResources({ resources }: { resources: Resource[] }) {
  if (!resources.length) return null;
  const books = resources.filter((r) => r.kind === "book");
  const media = resources.filter((r) => r.kind !== "book");
  return (
    <div className="space-y-8">
      {books.length > 0 && (
        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-navy-500">Recommended reading</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {books.map((r) => {
              const cover = bookCover(r);
              return (
                <li key={r.title} className="flex gap-4 rounded-lg border border-navy-100 bg-white p-4">
                  {cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={cover} alt="" className="h-24 w-16 shrink-0 rounded-sm object-cover shadow-sm" loading="lazy" />
                  ) : (
                    <span aria-hidden className="flex h-24 w-16 shrink-0 items-end rounded-sm bg-navy-800 p-1.5 shadow-sm">
                      <span className="line-clamp-4 font-display text-[0.6rem] leading-tight text-gold-200">{r.title}</span>
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block font-semibold leading-snug text-navy-900">{r.title}</span>
                    <Meta r={r} />
                    <span className="mt-1.5 block text-sm text-navy-700/80">{r.note}</span>
                    <Links r={r} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {media.length > 0 && (
        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-navy-500">Watch and listen</h3>
          <ul className="mt-4 divide-y divide-navy-100 rounded-lg border border-navy-100 bg-white">
            {media.map((r) => (
              <li key={r.title} className="p-4">
                <span className="block font-semibold text-navy-900">{r.title}</span>
                <Meta r={r} />
                <span className="mt-1 block text-sm text-navy-700/80">{r.note}</span>
                <Links r={r} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/** A compact "go further" list for a single week. */
export function WeekResources({ resources }: { resources: Resource[] }) {
  if (!resources.length) return null;
  return (
    <div className="rounded-xl border border-gold-200 bg-gold-50/50 p-6">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">Go further this week</h2>
      <ul className="mt-3 space-y-4">
        {resources.map((r) => (
          <li key={r.title}>
            <span className="block font-semibold text-navy-900">{r.title}</span>
            <Meta r={r} />
            <span className="mt-1 block text-sm text-navy-700/80">{r.note}</span>
            <Links r={r} />
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-navy-500">These are published works by real authors and creators, chosen to supplement the lesson.</p>
    </div>
  );
}
