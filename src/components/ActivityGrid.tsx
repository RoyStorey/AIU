/**
 * A student's study over the last half-year: one cell for each day, darker
 * for more done that day (lessons completed, essays, capstones, posts, and
 * reports). Hover a cell for its count.
 */
export function ActivityGrid({ counts, weeks = 26 }: { counts: Map<string, number>; weeks?: number }) {
  const cell = 11;
  const step = cell + 3;
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  // Start on the Sunday that begins the earliest week shown.
  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - (weeks - 1) * 7 - today.getUTCDay());

  const level = (n: number) => (n === 0 ? 0 : n === 1 ? 1 : n <= 3 ? 2 : n <= 6 ? 3 : 4);
  const cells: { x: number; y: number; day: string; n: number }[] = [];
  const months: { x: number; label: string }[] = [];
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < 7; d++) {
      const date = new Date(start);
      date.setUTCDate(start.getUTCDate() + w * 7 + d);
      if (date > today) continue;
      const day = date.toISOString().slice(0, 10);
      cells.push({ x: w * step, y: d * step + 16, day, n: counts.get(day) ?? 0 });
      if (date.getUTCDate() <= 7 && d === 0) {
        months.push({ x: w * step, label: date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }) });
      }
    }
  }
  const total = [...counts.values()].reduce((a, b) => a + b, 0);
  const days = [...counts.values()].filter((n) => n > 0).length;

  return (
    <figure className="activity">
      <div className="activity-scroll">
        <svg viewBox={`0 0 ${weeks * step} ${7 * step + 16}`} width={weeks * step} height={7 * step + 16} role="img"
          aria-label={`${total} activities on ${days} days in the last ${weeks} weeks`}>
          {months.map((m) => <text key={m.x} x={m.x} y={10} className="activity-month">{m.label}</text>)}
          {cells.map((c) => (
            <rect key={c.day} x={c.x} y={c.y} width={cell} height={cell} rx={2} className={`activity-cell l${level(c.n)}`}>
              <title>{`${new Date(c.day + "T00:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", timeZone: "UTC" })}: ${c.n === 0 ? "no activity" : `${c.n} ${c.n === 1 ? "activity" : "activities"}`}`}</title>
            </rect>
          ))}
        </svg>
      </div>
      <figcaption className="activity-legend">
        <span>{total} {total === 1 ? "activity" : "activities"} on {days} {days === 1 ? "day" : "days"}</span>
        <span className="activity-key" aria-hidden="true">
          Less {[0, 1, 2, 3, 4].map((l) => <i key={l} className={`activity-cell l${l}`} />)} More
        </span>
      </figcaption>
    </figure>
  );
}
