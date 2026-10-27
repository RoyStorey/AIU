import type { Resource } from "@/lib/schema";
import { hostOf } from "@/components/Citation";

function youtubeId(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.host.replace(/^(www|m)\./, "");
    if (host === "youtu.be") return u.pathname.slice(1) || null;
    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      if (u.pathname === "/watch") return u.searchParams.get("v");
      const match = u.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]+)/);
      return match?.[1] ?? null;
    }
  } catch {}
  return null;
}

const isAudioFile = (url: string) => /\.(mp3|m4a|ogg|oga|wav)(\?|$)/i.test(url);

function Glyph({ kind }: { kind: Resource["kind"] }) {
  if (kind === "audio") {
    return (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M4 12v-1a6 6 0 0 1 12 0v1" /><rect x="3" y="12" width="3" height="5" rx="1" /><rect x="14" y="12" width="3" height="5" rx="1" />
      </svg>
    );
  }
  if (kind === "video" || kind === "lecture") {
    return <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" /></svg>;
  }
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M8 5H5v10h10v-3M11 4h5v5M16 4l-7 7" />
    </svg>
  );
}

const ACTION: Partial<Record<Resource["kind"], string>> = { audio: "Listen", video: "Watch", lecture: "Attend the lecture" };

/** A video, recording, or lecture: embedded when it can be, otherwise a card that opens it. */
export function Media({ resource }: { resource: Resource }) {
  const { title, author, publisher, url, note, kind } = resource;
  const by = [author, publisher].filter(Boolean).join(" · ");
  const id = url ? youtubeId(url) : null;

  if (id) {
    return (
      <figure style={{ margin: 0 }}>
        <div className="embed">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`}
            title={title}
            loading="lazy"
            allow="encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
        <figcaption style={{ marginTop: "0.6rem" }}>
          <strong style={{ fontWeight: 500 }}>{title}</strong>
          {by && <span className="muted"> — {by}</span>}
          {note && <p className="muted" style={{ margin: "0.25rem 0 0", fontSize: "0.98rem" }}>{note}</p>}
        </figcaption>
      </figure>
    );
  }

  const body = (
    <>
      <span className="glyph"><Glyph kind={kind} /></span>
      <div>
        <span className="eyebrow">{ACTION[kind] ?? "Open"}{url ? ` · ${hostOf(url)}` : ""}</span>
        <h4>{title}</h4>
        {by && <div className="by">{by}</div>}
        {note && <p>{note}</p>}
        {url && isAudioFile(url) && <audio className="audio-player" controls preload="none" src={url} />}
      </div>
    </>
  );

  return url && !isAudioFile(url) ? (
    <a className="media-card" href={url} target="_blank" rel="noopener noreferrer">{body}</a>
  ) : (
    <div className="media-card">{body}</div>
  );
}
