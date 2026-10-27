"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AnimatePresence, motion } from "motion/react";
import { useProgress, useStore } from "@/lib/store";
import { BANNER, SOFT } from "@/lib/ui";
import { play } from "@/lib/sound";
import { Hydrating, NotFound } from "@/components/Empty";
import { Guide } from "@/components/Guide";
import { MediaGallery, MediaItem } from "@/components/Media";
import { ResourceCard } from "@/components/ResourceCard";
import { ActivityCard } from "@/components/activities/Activity";
import { burst } from "@/components/Celebrations";

function Spark({ fact }: { fact: string }) {
  const collected = useStore((s) => s.profile.sparks.includes(fact));
  const collect = useStore((s) => s.collectSpark);
  const [open, setOpen] = useState(collected);
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="fact"
            initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 1, opacity: 1 }}
            className="card bg-sun p-5"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest">✨ Curiosity spark collected</div>
            <p className="mt-1 font-serif text-lg leading-snug">{fact}</p>
          </motion.div>
        ) : (
          <motion.button
            key="orb"
            exit={{ scale: 2, opacity: 0 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            onClick={() => {
              setOpen(true);
              collect(fact);
              play("spark");
            }}
            className="card flex w-full items-center gap-4 bg-ink p-5 text-left text-paper"
          >
            <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} className="text-4xl">
              ✨
            </motion.span>
            <span>
              <span className="block font-black">A curiosity spark appeared!</span>
              <span className="font-serif text-sm italic opacity-80">Catch it before it flutters off (+5 xp)</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LessonPage() {
  const { id, n } = useParams<{ id: string; n: string }>();
  const hydrated = useStore((s) => s.hydrated);
  const course = useStore((s) => s.courses[id]);
  const progress = useProgress(id);
  const completeLesson = useStore((s) => s.completeLesson);

  if (!hydrated) return <Hydrating />;
  const index = Number(n) - 1;
  const lesson = course?.lessons[index];
  if (!course || !lesson) return <NotFound what="lesson" />;

  const isDone = progress.lessonsDone.includes(lesson.id);
  const next = course.lessons[index + 1];
  const [lead, ...restMedia] = lesson.media;
  const context = { courseTitle: course.title, lessonTitle: lesson.title, keyIdeas: lesson.keyIdeas };

  return (
    <div className="pt-6">
      {/* top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href={`/course/${course.id}`} className="font-mono text-sm font-bold underline">
          ← {course.title}
        </Link>
        <div className="flex gap-1.5">
          {course.lessons.map((l, i) => (
            <Link
              key={l.id}
              href={`/course/${course.id}/lesson/${i + 1}`}
              title={l.title}
              className={`h-3 w-8 rounded-full border-2 border-ink transition-transform hover:scale-y-150 ${
                i === index ? "bg-sun" : progress.lessonsDone.includes(l.id) ? "bg-mint" : "bg-card"
              }`}
            />
          ))}
        </div>
      </div>

      {/* hero */}
      <header className={`card relative mt-5 overflow-hidden p-6 sm:p-10 ${BANNER[course.color]}`}>
        <span className="sticker bg-card text-ink">
          Lesson {index + 1} of {course.lessons.length}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl">{lesson.title}</h1>
        <div className="mt-6 max-w-2xl text-ink">
          <Guide name={course.guideName} size="sm">
            {lesson.hook}
          </Guide>
        </div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article>
          {lead && (
            <div className="mb-10">
              <MediaItem media={lead} index={1} />
            </div>
          )}
          <div className="prose-aiu">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.body}</ReactMarkdown>
          </div>

          {restMedia.length > 0 && (
            <section className="mt-12">
              <h2 className="text-3xl font-black">🎪 Look, listen, wander</h2>
              <p className="font-serif opacity-70">Images from Wikimedia Commons, recordings, films and further reading.</p>
              <div className="mt-6">
                <MediaGallery media={restMedia} />
              </div>
            </section>
          )}

          <section className="mt-14 space-y-8">
            <h2 className="text-3xl font-black">✏️ Homework, but fun</h2>
            {lesson.activities.map((a) => (
              <ActivityCard key={a.id} activity={a} courseId={course.id} context={context} />
            ))}
          </section>

          {/* finish */}
          <section className={`card mt-14 p-8 text-center ${isDone ? "bg-mint-soft" : SOFT[course.color]}`}>
            {isDone ? (
              <>
                <div className="text-5xl">🏅</div>
                <h2 className="mt-2 text-3xl font-black">Lesson complete!</h2>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-black">Feel like you&apos;ve got it?</h2>
                <p className="font-serif">Stamp this lesson as complete to earn XP and move along the path.</p>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: -3 }}
                  className="btn mt-5 bg-tomato px-8 py-4 text-xl text-white"
                  onClick={() => {
                    completeLesson(course.id, lesson.id);
                    burst(1.2);
                  }}
                >
                  ✓ Stamp it complete (+50 xp)
                </motion.button>
              </>
            )}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {index > 0 && (
                <Link href={`/course/${course.id}/lesson/${index}`} className="btn bg-card">
                  ← Previous
                </Link>
              )}
              {next ? (
                <Link href={`/course/${course.id}/lesson/${index + 2}`} className="btn bg-sun" onClick={() => play("click")}>
                  Next: {next.title} →
                </Link>
              ) : (
                <Link href={`/course/${course.id}`} className="btn bg-sun">
                  Back to the course map 🗺️
                </Link>
              )}
            </div>
          </section>
        </article>

        <aside className="space-y-6">
          <div className="lg:space-y-6">
            <div className="card -rotate-1 bg-card p-5">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest">📌 Key ideas</h2>
              <ul className="mt-3 space-y-3">
                {lesson.keyIdeas.map((k, i) => (
                  <li key={i} className="flex gap-2 font-serif leading-snug">
                    <span className="font-display font-black text-tomato">{i + 1}.</span>
                    {k}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 lg:mt-0">
              <Spark fact={lesson.funFact} />
            </div>
            {lesson.resources.length > 0 && (
              <div className="mt-6 space-y-4 lg:mt-0">
                <h2 className="text-xl font-black">📚 Go further</h2>
                {lesson.resources.map((r, i) => (
                  <ResourceCard key={`${r.title}-${i}`} r={r} />
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
