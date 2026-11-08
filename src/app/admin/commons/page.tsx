import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { adminDeletePost } from "@/app/actions";
import { AdminNav, ConfirmButton } from "@/components/AdminForms";
import { recentPosts } from "@/lib/admin";
import { currentUser, isAdmin } from "@/lib/auth";

export const metadata: Metadata = { title: "The Commons · Administration" };

const when = (t: string) =>
  new Date(t.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default async function AdminCommons() {
  const user = await currentUser();
  if (!isAdmin(user)) notFound();
  const posts = recentPosts();

  return (
    <div className="wrap">
      <header className="page-head" style={{ paddingBottom: "1.5rem" }}>
        <p className="eyebrow">Administration</p>
        <h1>The Commons</h1>
        <p className="lede">The latest threads and replies across every concentration. Delete anything that does not belong; removing a thread removes its replies.</p>
      </header>
      <AdminNav active="commons" />

      {posts.length === 0 ? <p className="notice" style={{ marginTop: "2rem" }}>Nothing has been posted yet.</p> : (
        <ul className="admin-posts">
          {posts.map((p) => (
            <li key={p.id}>
              <div className="admin-post-head">
                <span className="eyebrow">{p.concentration} · {when(p.created_at)}</span>
                <ConfirmButton action={adminDeletePost.bind(null, p.id)} label={p.parent_id ? "Delete reply" : "Delete thread"}
                  question={p.parent_id ? "Delete this reply?" : "Delete this thread and all its replies?"} />
              </div>
              <p className="admin-post-title">
                {p.parent_id ? "Reply in a thread" : <strong>{p.title}</strong>} by{" "}
                <Link href={`/admin/accounts/${p.user_id}`}>{p.user_name}</Link>
                {" · "}<Link href={`/faculties/${p.subject_slug}/${p.slug}/common-room/${p.thread_id}`}>view</Link>
              </p>
              <p className="admin-post-body">{p.body.length > 320 ? `${p.body.slice(0, 320)}…` : p.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
