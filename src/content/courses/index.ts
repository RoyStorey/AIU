import type { CourseContent } from "@/lib/schema";
import { editorial } from "./editorial";
import { aal101 } from "./aal-101";
import { afh101 } from "./afh-101";
import { afh110 } from "./afh-110";
import { amh101 } from "./amh-101";
import { amh110 } from "./amh-110";
import { amh201 } from "./amh-201";
import { amh210 } from "./amh-210";
import { amh301 } from "./amh-301";
import { aml101 } from "./aml-101";
import { aml110 } from "./aml-110";
import { ash101 } from "./ash-101";
import { ash110 } from "./ash-110";
import { grk101 } from "./grk-101";
import { grk102 } from "./grk-102";
import { iah101 } from "./iah-101";
import { iah110 } from "./iah-110";
import { lat101 } from "./lat-101";
import { lat102 } from "./lat-102";
import { brl101 } from "./brl-101";
import { brl110 } from "./brl-110";
import { clt101 } from "./clt-101";
import { clt110 } from "./clt-110";
import { dra101 } from "./dra-101";
import { dra110 } from "./dra-110";
import { euh101 } from "./euh-101";
import { euh110 } from "./euh-110";
import { euh301 } from "./euh-301";
import { mdh101 } from "./mdh-101";
import { mdh110 } from "./mdh-110";
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
import { wlt101 } from "./wlt-101";
import { wlt110 } from "./wlt-110";

const written: Record<string, CourseContent> = {
  "AAL 101": aal101,
  "AFH 101": afh101,
  "AFH 110": afh110,
  "AMH 101": amh101,
  "AMH 110": amh110,
  "AMH 201": amh201,
  "AMH 210": amh210,
  "AMH 301": amh301,
  "AML 101": aml101,
  "AML 110": aml110,
  "ASH 101": ash101,
  "ASH 110": ash110,
  "GRK 101": grk101,
  "GRK 102": grk102,
  "IAH 101": iah101,
  "IAH 110": iah110,
  "LAT 101": lat101,
  "LAT 102": lat102,
  "BRL 101": brl101,
  "BRL 110": brl110,
  "CLT 101": clt101,
  "CLT 110": clt110,
  "DRA 101": dra101,
  "DRA 110": dra110,
  "EUH 101": euh101,
  "EUH 110": euh110,
  "EUH 301": euh301,
  "MDH 101": mdh101,
  "MDH 110": mdh110,
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
  "WLT 101": wlt101,
  "WLT 110": wlt110,
};

/**
 * Courses once published in a shorter form and taken down to be rewritten to
 * the full standard. On every boot their stored lessons are cleared, so they
 * show as in preparation. Remove a course from this list when its new version
 * is added to `written`.
 */
export const withdrawnCourses = new Set(["BIB 101", "LIN 101"]);

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
