import type { CourseContent } from "@/lib/schema";
import { aal101 } from "./aal-101";
import { amh101 } from "./amh-101";
import { bib101 } from "./bib-101";
import { euh301 } from "./euh-301";
import { lat101 } from "./lat-101";
import { lin101 } from "./lin-101";
import { meh101 } from "./meh-101";
import { poe101 } from "./poe-101";
import { poe110 } from "./poe-110";
import { poe201 } from "./poe-201";
import { poe210 } from "./poe-210";
import { poe220 } from "./poe-220";
import { poe301 } from "./poe-301";
import { poe310 } from "./poe-310";
import { poe401 } from "./poe-401";

/** Courses written by hand, keyed by course code. They take precedence over the forge. */
export const authoredCourses: Record<string, CourseContent> = {
  "AAL 101": aal101,
  "AMH 101": amh101,
  "BIB 101": bib101,
  "EUH 301": euh301,
  "LAT 101": lat101,
  "LIN 101": lin101,
  "MEH 101": meh101,
  "POE 101": poe101,
  "POE 110": poe110,
  "POE 201": poe201,
  "POE 210": poe210,
  "POE 220": poe220,
  "POE 301": poe301,
  "POE 310": poe310,
  "POE 401": poe401,
};
