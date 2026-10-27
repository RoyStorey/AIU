import { hashString } from "@/lib/links";

const FACES = ["🦉", "🧙", "🐉", "🦊", "🐌", "🫖", "🗿", "🦚", "🐙", "🧛", "🤖", "👻", "🦖", "🐸"];
const BGS = ["bg-sun", "bg-mint", "bg-sky", "bg-bubblegum", "bg-grape", "bg-tomato"];

/** The course's narrator: an avatar picked from their name and a speech bubble. */
export function Guide({ name, children, size = "md" }: { name: string; children: React.ReactNode; size?: "sm" | "md" }) {
  const h = hashString(name);
  const face = /teapot/i.test(name) ? "🫖" : /gargoyle/i.test(name) ? "🗿" : FACES[h % FACES.length];
  return (
    <div className="flex items-start gap-3">
      <div
        className={`grid shrink-0 place-items-center rounded-full border-[3px] border-ink shadow-pop-sm ${BGS[h % BGS.length]} ${
          size === "sm" ? "h-12 w-12 text-2xl" : "h-16 w-16 text-4xl"
        }`}
        aria-hidden
      >
        {face}
      </div>
      <div className="relative rounded-2xl border-[3px] border-ink bg-card px-4 py-3 shadow-pop-sm">
        <span className="absolute -left-[11px] top-5 h-4 w-4 rotate-45 border-b-[3px] border-l-[3px] border-ink bg-card" />
        <div className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">{name}</div>
        <div className={`font-serif ${size === "sm" ? "text-base" : "text-lg"} italic leading-snug`}>{children}</div>
      </div>
    </div>
  );
}
