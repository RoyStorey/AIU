import { choosePace } from "@/app/actions";
import { PACES, finishDate, formatDay, hoursPerWeek, type PaceId } from "@/lib/pace";

/**
 * Three ways through a course—leisurely, steady, intensive—and when each
 * would finish. A sense of the road ahead, not a deadline. Signed-in students
 * can mark the pace they prefer.
 */
export function PacePanel({ remaining, averageMinutes, chosen, path, partial }: {
  remaining: number;
  averageMinutes: number;
  chosen: PaceId | null;
  path: string;
  /** True when more lessons are planned than are open, so only open lessons are counted. */
  partial?: boolean;
}) {
  if (remaining <= 0) return null;
  return (
    <div className="aside-block pace-panel">
      <span className="eyebrow">At your own pace</span>
      <p className="pace-note">
        {remaining === 1 ? "One lesson remains." : `${remaining} lessons remain.`} Not deadlines, only a sense of the road ahead.
      </p>
      <ul className="paces">
        {PACES.map((p) => {
          const row = (
            <>
              <span className="pace-name">{p.name}</span>
              <span className="pace-finish">{formatDay(finishDate(remaining, p))}</span>
              <span className="pace-rhythm">{p.rhythm} · {hoursPerWeek(p, averageMinutes)}</span>
            </>
          );
          return (
            <li key={p.id} className={chosen === p.id ? "is-chosen" : undefined}>
              {chosen !== null ? (
                <form action={choosePace.bind(null, p.id, path)}>
                  <button type="submit" className="pace-row" aria-pressed={chosen === p.id}
                    title={chosen === p.id ? "Your pace" : `Make ${p.name.toLowerCase()} your pace`}>
                    {row}
                  </button>
                </form>
              ) : (
                <div className="pace-row">{row}</div>
              )}
            </li>
          );
        })}
      </ul>
      <p className="pace-foot muted">
        {chosen !== null ? "Choose the pace that suits you; your dashboard will keep to it." : "Finish dates count from today."}
        {partial && " Only the lessons open now are counted."}
      </p>
    </div>
  );
}
