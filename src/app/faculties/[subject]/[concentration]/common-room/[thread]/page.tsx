import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { deletePost } from "@/app/actions";
import { ConcentrationHeader } from "@/components/ConcentrationHeader";
import { ReplyForm } from "@/components/Forms";
import { Markdown } from "@/components/Markdown";
import { StudentName } from "@/components/Standing";
import { currentUser } from "@/lib/auth";
import { getConcentration, getSubject } from "@/lib/catalogue";
import { thread, type Post } from "@/lib/community";
import { standing } from "@/lib/progress";

type Params = { params: Promise<{ subject: string; concentration: string; thread: string }> };

async function load(params: Params["params"]) {
  const p = await params;
  const subject = getSubject(p.subject);
  const concentration = getConcentration(p.subject, p.concentration);
  const id = Number(p.thread);
  const found = Number.isInteger(id) ? thread(id) : null;
  if (!subject || !concentration || !found || found.opening.concentration_id !== concentration.id) return null;
  return { subject, concentration, ...found };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const found = await load(params);
  return { title: found ? `${found.opening.title} · Common Room` : "Not found" };
}

const when = (t: string) =>
  new Date(t.replace(" ", "T") + "Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default async function ThreadPage({ params }: Params) {
  const found = await load(params);
  if (!found) notFound();
  const { subject, concentration, opening, replies } = found;
  const user = await currentUser();
  const back = `/faculties/${subject.slug}/${concentration.slug}/common-room/${opening.id}`;
  const standings = new Map<number, ReturnType<typeof standing>>();
  for (const post of [opening, ...replies]) {
    if (!standings.has(post.user_id)) standings.set(post.user_id, standing(post.user_id, concentration.id));
  }

  const renderPost = (post: Post, first = false) => {
    const s = standings.get(post.user_id);
    return (
      <article key={post.id} className={first ? "post post-opening" : "post"} id={`post-${post.id}`}>
        <p className="byline">
          <StudentName id={post.user_id} name={post.user_name} level={s?.level} concentration={concentration.name} capstoneId={s?.mastery?.capstoneId} />
          <span className="muted"> · {when(post.created_at)}</span>
        </p>
        <Markdown className="prose post-body">{post.body}</Markdown>
        {user?.id === post.user_id && (
          <form action={deletePost.bind(null, post.id, first ? `/faculties/${subject.slug}/${concentration.slug}/common-room` : back)}>
            <button type="submit" className="link-button muted" style={{ fontSize: "0.92rem" }}>
              {first ? "Delete this thread" : "Delete this reply"}
            </button>
          </form>
        )}
      </article>
    );
  };

  return (
    <div className="wrap">
      <ConcentrationHeader subject={subject} concentration={concentration} active="common-room" title={opening.title}
        lede={`A thread in the ${concentration.name} common room · ${replies.length} ${replies.length === 1 ? "reply" : "replies"}`} />
      <div className="measure thread" style={{ maxWidth: "46rem" }}>
        {renderPost(opening, true)}
        {replies.map((r) => renderPost(r))}
        <section className="reply-box">
          {user ? <ReplyForm threadId={opening.id} back={back} /> : (
            <p className="muted"><Link href={`/login?next=${back}`}>Sign in</Link> to reply.</p>
          )}
        </section>
        <p><Link href={`/faculties/${subject.slug}/${concentration.slug}/common-room`}>← Back to the common room</Link></p>
      </div>
    </div>
  );
}
