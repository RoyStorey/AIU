import { authoredCourses } from "@/content/courses";
import { CourseContent } from "@/lib/schema";
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
for (const code of process.argv.slice(2)) {
  const c = authoredCourses[code];
  const r = CourseContent.safeParse(c);
  console.log(code, r.success ? "schema ok" : JSON.stringify(r.error.issues.slice(0, 3)), "words/lesson", c.lessons.map((l) => l.pages.reduce((n, p) => n + words(p.body), 0)).join(","), "q", c.lessons.map((l) => l.questions.length).join(","));
}
