import type { CourseContent } from "@/lib/schema";
import { aal101 } from "./aal-101";
import { lat101 } from "./lat-101";
import { poe101 } from "./poe-101";

/** Courses written by hand, keyed by course code. They take precedence over the forge. */
export const authoredCourses: Record<string, CourseContent> = {
  "AAL 101": aal101,
  "LAT 101": lat101,
  "POE 101": poe101,
};
