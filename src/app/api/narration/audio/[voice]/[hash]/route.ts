import { createReadStream } from "node:fs";
import { Readable } from "node:stream";
import { NextResponse, type NextRequest } from "next/server";
import { mayRender, narratedPage } from "@/lib/narration/server";
import { findRendered, hashFor, readAhead, requestRender, type Rendered } from "@/lib/narration/store";
import { voiceFromSlug } from "@/lib/narration/voices";

type Params = { params: Promise<{ voice: string; hash: string }> };

/**
 * One rendered passage. The path names the voice and a hash of the words, so a
 * response never changes and may be cached forever. The query says where the
 * passage comes from, so that audio not yet rendered can be rendered on request.
 */
export async function GET(req: NextRequest, { params }: Params) {
  const { voice: slug, hash: raw } = await params;
  const hash = raw.replace(/\.(mp3|wav)$/, "");
  const voice = voiceFromSlug(slug);
  if (!voice || !/^[0-9a-f]{20}$/.test(hash)) return NextResponse.json({ error: "Unknown voice." }, { status: 404 });

  const q = req.nextUrl.searchParams;
  const located = q.get("c") ? narratedPage(q.get("c")!, Number(q.get("l")), Number(q.get("p"))) : null;
  const index = located?.blocks.findIndex((b) => b.id === q.get("b")) ?? -1;
  const renderable = located && index >= 0 ? await mayRender(voice) : false;

  let rendered: Rendered | null = findRendered(voice, hash);
  if (!rendered) {
    if (!located || index < 0) return NextResponse.json({ error: "Not rendered." }, { status: 404 });
    const block = located.blocks[index];
    // The lesson has been edited since this URL was made: the words it named no longer exist.
    if (hashFor(voice, block) !== hash) return NextResponse.json({ error: "This passage has changed." }, { status: 410 });
    if (!renderable) return NextResponse.json({ error: "Not rendered yet, and this server will not render it for you." }, { status: 404 });
    try {
      rendered = await requestRender(voice, block, 10);
    } catch (e) {
      console.error("[narration] render failed:", e);
      return NextResponse.json({ error: "The narration could not be rendered." }, { status: 503 });
    }
  }
  // Keep a few passages ahead of the listener.
  if (located && renderable) readAhead(voice, located.blocks.slice(index + 1, index + 4));

  return serve(req, rendered);
}

function serve(req: NextRequest, r: Rendered) {
  const headers: Record<string, string> = {
    "content-type": r.type,
    "accept-ranges": "bytes",
    "cache-control": "public, max-age=31536000, immutable",
    "x-narration-duration": String(r.duration),
  };
  const range = req.headers.get("range")?.match(/^bytes=(\d*)-(\d*)$/);
  if (range && (range[1] || range[2])) {
    let start = range[1] ? Number(range[1]) : r.bytes - Number(range[2]);
    let end = range[1] && range[2] ? Number(range[2]) : r.bytes - 1;
    start = Math.max(0, start);
    end = Math.min(end, r.bytes - 1);
    if (start > end) return new NextResponse(null, { status: 416, headers: { "content-range": `bytes */${r.bytes}` } });
    const body = Readable.toWeb(createReadStream(r.file, { start, end })) as ReadableStream;
    return new NextResponse(body, {
      status: 206,
      headers: { ...headers, "content-range": `bytes ${start}-${end}/${r.bytes}`, "content-length": String(end - start + 1) },
    });
  }
  const body = Readable.toWeb(createReadStream(r.file)) as ReadableStream;
  return new NextResponse(body, { headers: { ...headers, "content-length": String(r.bytes) } });
}
