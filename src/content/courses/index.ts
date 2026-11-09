import type { CourseContent } from "@/lib/schema";
import { editorial } from "./editorial";
import { afh101 } from "./afh-101";
import { afh110 } from "./afh-110";
import { amh101 } from "./amh-101";
import { amh110 } from "./amh-110";
import { amh201 } from "./amh-201";
import { amh210 } from "./amh-210";
import { amh301 } from "./amh-301";
import { ash101 } from "./ash-101";
import { ash110 } from "./ash-110";
import { iah101 } from "./iah-101";
import { iah110 } from "./iah-110";
import { dra101 } from "./dra-101";
import { dra110 } from "./dra-110";
import { euh101 } from "./euh-101";
import { euh110 } from "./euh-110";
import { euh301 } from "./euh-301";
import { mdh101 } from "./mdh-101";
import { meh101 } from "./meh-101";
import { meh110 } from "./meh-110";
import { pat101 } from "./pat-101";
import { poe101 } from "./poe-101";
import { poe110 } from "./poe-110";
import { poe201 } from "./poe-201";
import { poe210 } from "./poe-210";
import { poe220 } from "./poe-220";
import { poe301 } from "./poe-301";
import { poe310 } from "./poe-310";
import { poe401 } from "./poe-401";

const written: Record<string, CourseContent> = {
  "AFH 101": afh101,
  "AFH 110": afh110,
  "AMH 101": amh101,
  "AMH 110": amh110,
  "AMH 201": amh201,
  "AMH 210": amh210,
  "AMH 301": amh301,
  "ASH 101": ash101,
  "ASH 110": ash110,
  "IAH 101": iah101,
  "IAH 110": iah110,
  "DRA 101": dra101,
  "DRA 110": dra110,
  "EUH 101": euh101,
  "EUH 110": euh110,
  "EUH 301": euh301,
  "MDH 101": mdh101,
  "MEH 101": meh101,
  "MEH 110": meh110,
  "PAT 101": pat101,
  "POE 101": poe101,
  "POE 110": poe110,
  "POE 201": poe201,
  "POE 210": poe210,
  "POE 220": poe220,
  "POE 301": poe301,
  "POE 310": poe310,
  "POE 401": poe401,
};

/**
 * Courses once published in a shorter form and taken down to be rewritten to
 * the full standard. On every boot their stored lessons are cleared, so they
 * show as in preparation. Remove a course from this list when its new version
 * is added to `written`.
 */
export const withdrawnCourses = new Set(["AAL 101", "BIB 101", "LAT 101", "LIN 101"]);

/** Joins each lesson to the editors' notes on it. */
function withEditorial(code: string, course: CourseContent): CourseContent {
  const notes = editorial[code];
  if (!notes) return course;
  return {
    ...course,
    lessons: course.lessons.map((lesson, i) => ({ ...lesson, caveats: [...(lesson.caveats ?? []), ...(notes[i + 1] ?? [])] })),
  };
}

/** Courses written by hand, keyed by course code. They take precedence over the forge. */
export const authoredCourses: Record<string, CourseContent> = Object.fromEntries(
  Object.entries(written).map(([code, course]) => [code, withEditorial(code, course)]),
);
