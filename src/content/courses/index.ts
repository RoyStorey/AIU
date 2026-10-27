import type { CourseContent } from "@/lib/schema";
import { poe101 } from "./poe-101";

/** Courses written by hand, keyed by course code. They take precedence over the forge. */
export const authoredCourses: Record<string, CourseContent> = {
  "POE 101": poe101,
};
