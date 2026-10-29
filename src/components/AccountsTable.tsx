"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { deleteAccounts } from "@/app/actions";
import { Submit } from "@/components/Forms";

export type AccountRow = {
  id: number;
  name: string;
  email: string;
  joined: string;
  lastActive: string;
  idleDays: number;
  lessons: number;
  declared: number;
  posts: number;
  capstones: number;
  demo: boolean;
  admin: boolean;
  you: boolean;
};

/** The accounts table: select accounts, then delete them after a confirmation. */
export function AccountsTable({ rows }: { rows: AccountRow[] }) {
  const [state, action] = useActionState(deleteAccounts, undefined);
  const deletable = rows.filter((r) => !r.you && !r.admin);
  const [chosen, setSelected] = useState<Set<number>>(new Set());
  // Only accounts still listed count as selected: deleted or filtered-out ones drop away.
  const selected = new Set(rows.filter((r) => chosen.has(r.id)).map((r) => r.id));
  const all = deletable.length > 0 && deletable.every((r) => selected.has(r.id));

  const toggle = (id: number) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const confirmDelete = (event: React.FormEvent<HTMLFormElement>) => {
    const picked = rows.filter((r) => selected.has(r.id));
    const names = picked.slice(0, 8).map((r) => `• ${r.name} (${r.email})`).join("\n");
    const more = picked.length > 8 ? `\n…and ${picked.length - 8} more` : "";
    const ok = window.confirm(
      `Permanently delete ${picked.length} ${picked.length === 1 ? "account" : "accounts"}?\n\n${names}${more}\n\n` +
        "This removes their progress, essays, notes, capstones, reports, and posts (and the replies in threads they started). It cannot be undone.",
    );
    if (!ok) event.preventDefault();
  };

  return (
    <form action={action} onSubmit={confirmDelete} key={state?.nonce}>
      {state?.error && <p className="form-error" role="alert">{state.error}</p>}
      {state?.notice && <p className="form-notice" role="status">{state.notice}</p>}
      <div className="admin-actions">
        <label className="admin-check">
          <input
            type="checkbox"
            checked={all}
            onChange={() => setSelected(all ? new Set() : new Set(deletable.map((r) => r.id)))}
            disabled={deletable.length === 0}
          />
          Select all shown
        </label>
        <span className="muted">{selected.size} selected</span>
        {selected.size > 0 && (
          <Submit className="button danger" pending="Deleting…">
            Delete {selected.size} {selected.size === 1 ? "account" : "accounts"}
          </Submit>
        )}
      </div>
      {rows.length === 0 ? <p className="notice">No accounts match.</p> : (
      <div className="admin-scroll">
        <table className="admin-table">
          <thead>
            <tr>
              <th scope="col"><span className="visually-hidden">Select</span></th>
              <th scope="col">Student</th>
              <th scope="col">Joined</th>
              <th scope="col">Last active</th>
              <th scope="col">Lessons</th>
              <th scope="col">Declared</th>
              <th scope="col">Posts</th>
              <th scope="col">Capstones</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const locked = r.you || r.admin;
              return (
                <tr key={r.id} className={selected.has(r.id) ? "selected" : undefined}>
                  <td>
                    <input
                      type="checkbox"
                      name="account"
                      value={r.id}
                      checked={selected.has(r.id)}
                      onChange={() => toggle(r.id)}
                      disabled={locked}
                      aria-label={`Select ${r.name}`}
                      title={locked ? (r.you ? "Your own account" : "Administrators cannot be deleted here") : undefined}
                    />
                  </td>
                  <th scope="row">
                    <Link href={`/students/${r.id}`}>{r.name}</Link>
                    {r.you && <span className="flag">you</span>}
                    {r.admin && !r.you && <span className="flag">admin</span>}
                    {r.demo && <span className="demo-tag">sample</span>}
                    <div className="muted admin-email">{r.email}</div>
                  </th>
                  <td>{r.joined}</td>
                  <td className={r.idleDays >= 90 ? "idle" : undefined}>
                    {r.lastActive}
                    <div className="muted admin-email">{r.idleDays === 0 ? "today" : `${r.idleDays} ${r.idleDays === 1 ? "day" : "days"} ago`}</div>
                  </td>
                  <td>{r.lessons}</td>
                  <td>{r.declared}</td>
                  <td>{r.posts}</td>
                  <td>{r.capstones}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      )}
    </form>
  );
}
