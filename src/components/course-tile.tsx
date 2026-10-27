import Link from "next/link";
import { getCourse } from "@/lib/content";
import { courseSlug } from "@/lib/content/schema";
import type { CourseRecord } from "@/lib/db/schema";
import { letterGrade } from "@/lib/academics";
import { Badge, ProgressBar } from "./ui";

export function CourseTile({ code, record, percent }: { code: string; record?: CourseRecord; percent?: number }) {
  const course = getCourse(code);
  if (!course) return null;
  const published = course.status === "published";
  const href = published ? `/student/courses/${courseSlug(code)}` : `/courses/${courseSlug(code)}`;
  return (
    <Link href={href} className="group flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition hover:border-navy-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold text-navy-500">{course.code}</p>
        {record?.status === "completed" ? (
          <Badge tone="green">Completed · {letterGrade(record.grade ?? 0).letter}</Badge>
        ) : record ? (
          <Badge tone="gold">In progress</Badge>
        ) : published ? (
          <Badge>Ready to begin</Badge>
        ) : (
          <Badge tone="gray">Materials in development</Badge>
        )}
      </div>
      <h3 className="mt-2 text-xl font-semibold text-navy-900 group-hover:text-navy-700">{course.title}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm text-navy-700/80">{course.description}</p>
      {record && record.status !== "completed" && percent != null && (
        <div className="mt-5">
          <div className="mb-1.5 flex justify-between text-xs text-navy-500">
            <span>Course progress</span>
            <span>{percent}%</span>
          </div>
          <ProgressBar value={percent} />
        </div>
      )}
      <p className="mt-5 text-sm font-semibold text-navy-700">
        {!published ? "View course details →" : record?.status === "completed" ? "Review course →" : record ? "Continue →" : "Begin course →"}
      </p>
    </Link>
  );
}
