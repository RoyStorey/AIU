import type { MapSpec } from "map-widget/spec";

/**
 * Interactive maps that lesson pages can embed. A page shows one with an image line
 * whose address is `map:` and the map's id:
 *
 *   ![Map of the Roman–Persian war, 603–630](map:meh-101-roman-persian-war "Caption.")
 *
 * Each map is loaded only when a reader scrolls to it. See README.md in this folder.
 */
export const MAPS: Record<string, () => Promise<{ default: MapSpec }>> = {
  "meh-101-roman-persian-war": () => import("./meh-101-roman-persian-war"),
  "euh-301-road-to-war": () => import("./euh-301-road-to-war"),
  "meh-101-arab-conquests": () => import("./meh-101-arab-conquests"),
  "bib-110-journeys-of-paul": () => import("./bib-110-journeys-of-paul"),
  "chh-101-spread-of-christianity": () => import("./chh-101-spread-of-christianity"),
  "wrl-101-spread-of-buddhism": () => import("./wrl-101-spread-of-buddhism"),
  "hil-110-earliest-records": () => import("./hil-110-earliest-records"),
  "soc-110-spread-of-english": () => import("./soc-110-spread-of-english"),
  "anh-101-persian-wars": () => import("./anh-101-persian-wars"),
  "anh-110-hannibal": () => import("./anh-110-hannibal"),
  "amh-101-war-for-independence": () => import("./amh-101-war-for-independence"),
  "amh-210-civil-war": () => import("./amh-210-civil-war"),
  "mdh-110-first-crusade": () => import("./mdh-110-first-crusade"),
  "afh-101-trans-saharan": () => import("./afh-101-trans-saharan"),
  "afh-101-mansa-musa": () => import("./afh-101-mansa-musa"),
  "afh-101-ibn-battuta": () => import("./afh-101-ibn-battuta"),
  "afh-110-portuguese-voyages": () => import("./afh-110-portuguese-voyages"),
  "meh-110-alexander": () => import("./meh-110-alexander"),
};
