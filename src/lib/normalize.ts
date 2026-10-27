import {
  ACTIVITY_TYPES,
  LEVELS,
  MEDIA_KINDS,
  PALETTE,
  RESOURCE_KINDS,
  type Activity,
  type ActivityData,
  type Course,
  type CourseData,
  type CourseOption,
  type Lesson,
  type Media,
  type MediaData,
  type PaletteColor,
  type Resource,
  type ResourceData,
  type Topic,
  type TopicData,
} from "./schema";
import {
  amazonBookLink,
  canonicalUrl,
  isDirectAudio,
  uid,
  webSearchLink,
  youtubeId,
  youtubeSearchLink,
} from "./links";

function pick<T extends string>(values: readonly T[], raw: string, fallback: T): T {
  const v = raw?.trim().toLowerCase();
  return values.find((x) => x.toLowerCase() === v) ?? fallback;
}

export function normalizeTopic(data: TopicData, query: string): Topic {
  return {
    id: uid("t_"),
    query,
    title: data.title || query,
    emoji: data.emoji || "✨",
    blurb: data.blurb,
    createdAt: Date.now(),
    options: data.options.slice(0, 8).map(
      (o, i): CourseOption => ({
        ...o,
        id: uid("o_"),
        level: pick(LEVELS, o.level, "Devotee"),
        color: pick(PALETTE, o.color, PALETTE[i % PALETTE.length]),
        lessonCount: Math.min(8, Math.max(3, Math.round(o.lessonCount || 5))),
      }),
    ),
  };
}

/** URLs that Claude actually saw in web search results; anything else is treated as unverified. */
export class SourceLedger {
  private seen = new Set<string>();
  add(url: string) {
    const c = canonicalUrl(url);
    if (c) this.seen.add(c);
  }
  has(url: string) {
    const c = canonicalUrl(url);
    return !!c && this.seen.has(c);
  }
  get size() {
    return this.seen.size;
  }
}

export function normalizeResource(r: ResourceData, ledger: SourceLedger): Resource {
  const kind = pick(RESOURCE_KINDS, r.kind, "website");
  const verified = !!r.url && ledger.has(r.url);
  const terms = `${r.title} ${r.creator}`;
  let href: string;
  if (verified) href = r.url;
  else if (kind === "book") href = amazonBookLink(r.title, r.creator);
  else if (kind === "video" || kind === "film") href = youtubeSearchLink(terms);
  else href = webSearchLink(terms);
  return { ...r, kind, isbn: r.isbn.replace(/[^0-9X]/gi, ""), verified, href };
}

function normalizeMedia(m: MediaData, ledger: SourceLedger): Media | null {
  const kind = pick(MEDIA_KINDS, m.kind, "image");
  const verified = !!m.url && ledger.has(m.url);
  if (!m.query && !verified) return null;
  if (kind === "video" && verified && !youtubeId(m.url)) {
    // A real page that isn't embeddable: keep it as a link-out video card.
    return { ...m, kind, verified };
  }
  if (kind === "audio" && verified && !isDirectAudio(m.url)) return { ...m, kind, verified };
  return { ...m, kind, verified, url: verified ? m.url : "" };
}

function normalizeActivity(a: ActivityData): Activity | null {
  const type = ACTIVITY_TYPES.find((t) => t === a.type?.trim().toLowerCase());
  if (!type) return null;
  const base: Activity = { ...a, id: uid("a_"), type };
  switch (type) {
    case "quiz": {
      const questions = a.questions.filter(
        (q) => q.options.length >= 2 && q.answer >= 0 && q.answer < q.options.length,
      );
      return questions.length ? { ...base, questions } : null;
    }
    case "timeline": {
      const years = new Set(a.events.map((e) => e.year));
      return a.events.length >= 3 && years.size === a.events.length ? base : null;
    }
    case "flashcards":
      return a.cards.length >= 3 ? base : null;
    case "essay":
      return { ...base, minWords: Math.min(500, Math.max(80, a.minWords || 200)) };
    case "chess":
      return { ...base, chessTheme: a.chessTheme?.trim() || "mix" };
  }
}

function fallbackEssay(lessonTitle: string): Activity {
  return {
    id: uid("a_"),
    type: "essay",
    title: "Explain it to a friend",
    prompt: `In your own words, explain the single most surprising idea from "${lessonTitle}" to a curious friend who has never heard of it.`,
    questions: [],
    minWords: 150,
    rubric: ["Accurately captures a key idea", "Uses a concrete example", "Clear enough for a newcomer"],
    events: [],
    cards: [],
    chessTheme: "",
  };
}

export function normalizeCourse(
  data: CourseData,
  ledger: SourceLedger,
  ctx: { topicId: string; option: CourseOption },
): Course {
  const lessons: Lesson[] = data.lessons.map((l) => {
    const activities = l.activities.map(normalizeActivity).filter((a): a is Activity => !!a);
    return {
      ...l,
      id: uid("l_"),
      media: l.media.map((m) => normalizeMedia(m, ledger)).filter((m): m is Media => !!m),
      resources: l.resources.map((r) => normalizeResource(r, ledger)),
      activities: activities.length ? activities : [fallbackEssay(l.title)],
    };
  });
  return {
    ...data,
    id: uid("c_"),
    topicId: ctx.topicId,
    optionId: ctx.option.id,
    color: ctx.option.color as PaletteColor,
    createdAt: Date.now(),
    emoji: data.emoji || ctx.option.emoji,
    lessons,
    library: data.library.map((r) => normalizeResource(r, ledger)),
    sourcesChecked: ledger.size,
  };
}
