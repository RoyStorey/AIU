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
};
