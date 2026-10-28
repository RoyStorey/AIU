import type { Level } from "@/lib/progress";

export type Pane = { code: string; title: string; completed: number; total: number; done: boolean };

const TAU = Math.PI * 2;

function arc(cx: number, cy: number, r: number, start: number, end: number): string {
  const a = (t: number) => [cx + r * Math.sin(t), cy - r * Math.cos(t)];
  const [x1, y1] = a(start);
  const [x2, y2] = a(end);
  const large = end - start > Math.PI ? 1 : 0;
  return `M${x1.toFixed(2)} ${y1.toFixed(2)} A${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

/**
 * A concentration's progress drawn as a rose window: one pane of the ring for
 * each course in the program, filled as its lessons are completed. The center
 * holds the student's standing—a gold star for a Master, a ring for an Expert,
 * and otherwise the share of the program complete.
 */
export function RoseWindow({ panes, level, size = 132, label }: {
  panes: Pane[];
  level: Level;
  size?: number;
  label: string;
}) {
  const c = 50;
  const r = 40;
  const n = Math.max(1, panes.length);
  const gap = n > 1 ? 0.07 : 0;
  const slice = TAU / n;
  const lessons = panes.reduce((s, p) => s + p.completed, 0);
  // Every course counts equally, so a program whose later courses are still in outline is not overstated.
  const share = Math.round((panes.reduce((s, p) => s + (p.total ? Math.min(1, p.completed / p.total) : 0), 0) / n) * 100);
  const summary = `${label}: ${panes.filter((p) => p.done).length} of ${panes.length} courses complete, ${lessons} ${lessons === 1 ? "lesson" : "lessons"} completed (${share}%)`;

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label={summary} className={`rose rose-${level}`}>
      <title>{summary}</title>
      <circle cx={c} cy={c} r={r + 7} className="rose-frame" />
      {panes.map((p, i) => {
        const start = i * slice + gap / 2;
        const end = (i + 1) * slice - gap / 2;
        const filled = p.total ? start + (end - start) * Math.min(1, p.completed / p.total) : start;
        return (
          <g key={p.code} className="rose-pane">
            <title>{`${p.code} ${p.title}: ${p.total ? `${p.completed} of ${p.total} lessons` : "in outline"}`}</title>
            <path d={arc(c, c, r, start, end)} className="rose-track" />
            {filled > start + 0.001 && <path d={arc(c, c, r, start, filled)} className={p.done ? "rose-fill done" : "rose-fill"} />}
            {/* A wide transparent stroke makes each pane easy to hover. */}
            <path d={arc(c, c, r, start, end)} className="rose-hit" />
          </g>
        );
      })}
      {level === "master" ? (
        <g className="rose-center master">
          <circle cx={c} cy={c} r={24} />
          <path transform="translate(50 50) scale(2.1) translate(-10 -10)" d="M10 4.2l1.6 3.6 3.9.4-2.9 2.6.8 3.9L10 12.8l-3.4 1.9.8-3.9-2.9-2.6 3.9-.4z" />
        </g>
      ) : level === "expert" ? (
        <g className="rose-center expert">
          <circle cx={c} cy={c} r={22} />
          <circle cx={c} cy={c} r={9} />
        </g>
      ) : (
        <text x={c} y={c} className="rose-share" textAnchor="middle" dominantBaseline="central">{share}%</text>
      )}
    </svg>
  );
}
