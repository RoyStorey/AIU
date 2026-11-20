import type { MapSpec } from "map-widget/spec";

/**
 * EUH 301, Lesson IV, page 6: "Toward War, 1933–1939".
 * Germany's step-by-step dismantling of the Versailles settlement, from the Saar
 * plebiscite to the invasion of Poland, told as the page tells it: the markers and
 * chapters cover only what the page discusses. Borders are those of the period, drawn
 * approximately; other changes of the time (Teschen, the Vienna Award, Memel) are
 * shown on the map but not narrated. The map stops in the first days of the
 * invasion; the war and the partition of Poland belong to Lesson V.
 */

// Shared border points, so neighbouring areas meet without gaps.
const GERMAN_CZECH: [number, number][] = [
  [18.0, 50.0], [17.6, 50.25], [17.0, 50.2], [16.9, 50.45], [16.4, 50.4], [16.2, 50.65], [15.4, 50.8], [15.0, 51.0],
  [14.8, 50.85], [14.3, 50.9], [13.6, 50.7], [13.0, 50.5], [12.5, 50.4], [12.1, 50.25], [12.45, 49.7], [13.0, 49.3],
  [13.4, 49.1], [13.8, 48.77],
];
const AUSTRIA_CZECH: [number, number][] = [[13.8, 48.77], [14.0, 48.6], [14.7, 48.6], [15.0, 49.0], [16.0, 48.75], [16.95, 48.6]];
const MORAVIA_SLOVAKIA: [number, number][] = [[16.95, 48.6], [17.2, 48.85], [17.6, 49.05], [18.1, 49.3], [18.55, 49.5], [18.85, 49.5]];
const GERMAN_POLISH: [number, number][] = [
  [18.0, 50.0], [18.55, 50.1], [18.75, 50.35], [18.6, 50.65], [18.3, 51.0], [18.0, 51.15], [17.6, 51.4], [17.2, 51.65],
  [16.5, 51.85], [16.2, 52.1], [15.9, 52.6], [16.2, 53.0], [16.6, 53.2], [17.0, 53.3], [17.4, 53.75], [17.3, 54.3], [17.6, 54.85],
];
const GERMAN_AUSTRIAN: [number, number][] = [
  [13.8, 48.77], [13.45, 48.57], [13.0, 48.25], [12.85, 48.0], [13.0, 47.5], [12.2, 47.6], [11.6, 47.58], [11.0, 47.4],
  [10.5, 47.55], [10.2, 47.3], [9.7, 47.55],
];
const EAST_PRUSSIA_SOUTH: [number, number][] = [
  [18.95, 54.05], [19.25, 53.8], [19.5, 53.45], [19.8, 53.3], [20.3, 53.15], [21.0, 53.3], [21.9, 53.35], [22.6, 53.6], [22.8, 54.4],
];
const rev = <T,>(a: T[]) => [...a].reverse();

const map: MapSpec = {
  format: "atlas-map@1",
  title: "Toward War: Germany's Expansion, 1935–1939",
  summary: "How Hitler dismantled the Versailles settlement step by step: the Saar, the Rhineland, Austria, the Sudetenland and Prague, and the invasion of Poland.",
  start: "1934-12-01",
  end: "1939-09-06",
  detail: "region",
  playSeconds: 120,
  view: { center: [14.3, 51.3], zoom: 4.9 },
  sides: [
    { id: "germany", name: "Germany", color: "#555b66", capital: "Berlin", description: "The German Reich under Hitler" },
    { id: "austria", name: "Austria", color: "#c8783a", capital: "Vienna" },
    { id: "czech", name: "Czechoslovakia", color: "#3f6fa6", capital: "Prague" },
    { id: "poland", name: "Poland", color: "#b4474f", capital: "Warsaw" },
    { id: "slovakia", name: "Slovakia", color: "#86a9cf", capital: "Bratislava", description: "The Slovak State, a German satellite from March 1939" },
    { id: "hungary", name: "Hungary", color: "#6f9a5b", capital: "Budapest" },
    { id: "lithuania", name: "Lithuania", color: "#c4a23a", capital: [23.9, 54.9] },
    { id: "league", name: "League of Nations", color: "#9b927f", description: "Territory under League of Nations administration or protection (the Saar until 1935; the Free City of Danzig)" },
    { id: "rhine", name: "Demilitarized zone", color: "#b9ab92", description: "German territory closed to German troops by the Treaty of Versailles and the Locarno treaties" },
  ],
  territories: [
    // small areas first: where areas overlap, the first listed wins
    {
      name: "Saar",
      area: [[6.36, 49.47], [6.6, 49.65], [7.0, 49.6], [7.4, 49.45], [7.4, 49.2], [7.1, 49.12], [6.75, 49.15], [6.55, 49.3]],
      owner: "league",
      changes: [{ side: "germany", start: "1935-03-01", end: "1935-03-03", from: "Saarbrücken" }],
    },
    {
      name: "Rhineland",
      area: [[6.2, 51.85], [7.3, 51.8], [7.7, 50.9], [8.3, 50.3], [8.95, 50.0], [9.1, 49.4], [9.0, 48.9], [8.5, 47.9], [8.6, 47.65], [8.2, 47.6], [7.6, 47.58], [7.55, 47.9], [7.8, 48.6], [8.2, 48.97], [7.1, 49.12], [6.75, 49.15], [6.55, 49.3], [6.36, 49.47], [6.5, 49.8], [6.1, 50.15], [6.4, 50.3], [6.05, 50.75], [5.95, 51.0], [6.2, 51.4], [6.0, 51.8]],
      owner: "rhine",
      changes: [{ side: "germany", start: "1936-03-07", end: "1936-03-09", from: "Cologne" }],
    },
    {
      name: "Free City of Danzig",
      area: [[18.4, 54.45], [18.7, 54.5], [19.3, 54.45], [19.2, 54.1], [18.95, 54.05], [18.5, 54.1]],
      owner: "league",
      changes: [{ side: "germany", start: "1939-09-01", end: "1939-09-02", from: "Danzig" }],
    },
    {
      name: "Memel territory",
      area: [[21.05, 55.95], [21.3, 56.05], [21.7, 55.75], [22.1, 55.4], [22.0, 55.05], [21.3, 55.25], [21.1, 55.3]],
      owner: "lithuania",
      changes: [{ side: "germany", start: "1939-03-23", end: "1939-03-24", from: "Memel" }],
    },
    {
      name: "Sudetenland",
      area: [...GERMAN_CZECH, ...AUSTRIA_CZECH.slice(1), [16.6, 48.95], [15.6, 49.1], [14.8, 49.15], [14.1, 49.0], [13.7, 49.3], [13.2, 49.6], [13.0, 49.95], [13.3, 50.2], [13.9, 50.4], [14.6, 50.55], [15.3, 50.55], [16.0, 50.35], [16.5, 50.1], [17.0, 49.95], [17.6, 49.95]],
      owner: "czech",
      changes: [{ side: "germany", start: "1938-10-01", end: "1938-10-10", from: [13.8, 50.75] }],
    },
    {
      name: "Teschen (Zaolzie)",
      area: [[18.3, 49.92], [18.65, 49.92], [18.85, 49.62], [18.6, 49.55], [18.35, 49.75]],
      owner: "czech",
      changes: [{ side: "poland", start: "1938-10-02", end: "1938-10-05", from: "Teschen" }],
    },
    {
      name: "Southern Slovakia",
      area: [[17.1, 48.0], [17.8, 47.75], [18.9, 47.8], [20.0, 48.2], [21.0, 48.5], [22.1, 48.4], [22.0, 48.75], [21.2, 48.8], [20.2, 48.45], [19.4, 48.35], [18.6, 48.2], [17.9, 48.2], [17.4, 48.25]],
      owner: "czech",
      changes: [{ side: "hungary", start: "1938-11-02", end: "1938-11-10", from: [19.0, 47.8] }],
    },
    {
      // the First Vienna Award (2 November 1938) also gave Hungary the south of Ruthenia, with Uzhhorod and Mukachevo
      name: "Southern Ruthenia",
      area: [[22.1, 48.4], [22.2, 48.75], [22.55, 48.7], [22.95, 48.5], [23.0, 47.95]],
      owner: "czech",
      changes: [{ side: "hungary", start: "1938-11-02", end: "1938-11-10", from: [22.6, 48.2] }],
    },
    {
      name: "Carpathian Ruthenia",
      area: [[22.1, 48.4], [22.6, 49.05], [23.0, 48.95], [23.8, 48.6], [24.6, 48.0], [23.0, 47.95]],
      owner: "czech",
      changes: [{ side: "hungary", start: "1939-03-15", end: "1939-03-18", from: [22.6, 48.2] }],
    },
    {
      name: "Slovakia",
      area: [...MORAVIA_SLOVAKIA, [19.2, 49.5], [19.8, 49.2], [20.9, 49.35], [22.0, 49.2], [22.6, 49.05], [22.1, 48.4], [21.0, 48.5], [20.0, 48.2], [18.9, 47.8], [17.8, 47.75], [17.1, 48.0]],
      owner: "czech",
      changes: [{ side: "slovakia", start: "1939-03-14", end: "1939-03-15", from: "Bratislava" }],
    },
    {
      name: "Bohemia and Moravia",
      area: [...GERMAN_CZECH, ...AUSTRIA_CZECH.slice(1), ...MORAVIA_SLOVAKIA.slice(1), [18.6, 49.9]],
      owner: "czech",
      changes: [{ side: "germany", start: "1939-03-15", end: "1939-03-16", from: "Prague" }],
    },
    {
      name: "Austria",
      area: [...rev(GERMAN_AUSTRIAN), ...AUSTRIA_CZECH.slice(1), [17.1, 48.0], [16.9, 47.7], [16.45, 47.4], [16.1, 46.85], [15.6, 46.65], [14.5, 46.4], [13.7, 46.55], [12.2, 47.05], [11.0, 46.75], [10.45, 46.9], [9.5, 47.05]],
      owner: "austria",
      changes: [{ side: "germany", start: "1938-03-12", end: "1938-03-13", from: "Braunau am Inn" }],
    },
    {
      name: "Germany",
      area: [
        [7.2, 53.35], [8.0, 54.0], [8.4, 55.0], [9.9, 54.9], [10.9, 54.5], [12.0, 54.5], [13.5, 54.7], [14.3, 54.1], [15.5, 54.3], [16.8, 54.75],
        ...rev(GERMAN_POLISH), ...GERMAN_CZECH.slice(1), ...GERMAN_AUSTRIAN.slice(1),
        [9.2, 47.65], [8.6, 47.65], [8.2, 47.6], [7.6, 47.58], [7.55, 47.9], [7.8, 48.6], [8.2, 48.97], [7.1, 49.12], [6.75, 49.15], [6.55, 49.3], [6.36, 49.47],
        [6.5, 49.8], [6.1, 50.15], [6.4, 50.3], [6.05, 50.75], [5.95, 51.0], [6.2, 51.4], [6.0, 51.8], [7.0, 52.2], [6.7, 52.5], [7.05, 52.65],
      ],
      owner: "germany",
    },
    {
      name: "East Prussia",
      area: [[19.3, 54.45], [19.9, 55.0], [21.1, 55.3], [21.3, 55.25], [22.0, 55.05], [22.85, 54.85], ...rev(EAST_PRUSSIA_SOUTH)],
      owner: "germany",
    },
    {
      name: "Poland",
      area: [
        ...GERMAN_POLISH, [18.5, 54.85], [18.4, 54.45], [18.5, 54.1], ...EAST_PRUSSIA_SOUTH,
        [23.5, 54.25], [24.4, 54.1], [24.8, 54.6], [25.3, 54.95], [25.8, 55.3], [26.6, 55.65], [28.1, 55.8], [27.6, 55.1], [27.2, 54.3], [27.0, 53.8],
        [27.2, 52.6], [27.4, 51.9], [26.9, 51.4], [26.6, 50.6], [26.2, 49.9], [26.4, 49.3], [26.5, 48.55], [26.0, 48.3], [25.2, 48.1], [24.6, 48.0],
        [23.8, 48.6], [23.0, 48.95], [22.6, 49.05], [22.0, 49.2], [20.9, 49.35], [19.8, 49.2], [19.2, 49.5], [18.85, 49.62], [18.65, 49.92], [18.3, 49.92],
      ],
      owner: "poland",
    },
    {
      name: "Lithuania",
      area: [[21.05, 55.95], [21.1, 56.4], [22.5, 56.45], [24.0, 56.3], [25.7, 56.15], [26.6, 55.65], [25.8, 55.3], [25.3, 54.95], [24.8, 54.6], [24.4, 54.1], [23.5, 54.25], [22.8, 54.4], [22.85, 54.85], [22.0, 55.05], [22.1, 55.4], [21.7, 55.75], [21.3, 56.05]],
      owner: "lithuania",
    },
    {
      name: "Hungary",
      area: [[16.1, 46.85], [16.45, 47.4], [16.9, 47.7], [17.1, 48.0], [17.8, 47.75], [18.9, 47.8], [20.0, 48.2], [21.0, 48.5], [22.1, 48.4], [23.0, 47.95], [22.0, 47.5], [21.5, 46.6], [20.2, 46.1], [18.8, 45.9], [17.3, 45.95]],
      owner: "hungary",
    },
  ],
  moves: [
    { name: "Troops into the Rhineland", side: "germany", kind: "army", path: [{ at: [7.9, 50.9], time: "1936-03-07" }, { at: "Cologne", time: "1936-03-08" }, { at: [6.3, 50.8], time: "1936-03-10" }] },
    { name: "Troops into Austria", side: "germany", kind: "armor", path: [{ at: "Passau", time: "1938-03-12" }, { at: "Linz", time: "1938-03-12T18:00" }, { at: "Vienna", time: "1938-03-13" }, { at: "Vienna", time: "1938-03-20" }] },
    { name: "Troops into the Sudetenland", side: "germany", kind: "army", path: [{ at: "Dresden", time: "1938-10-01" }, { at: [14.0, 50.65], time: "1938-10-05" }, { at: [14.3, 50.55], time: "1938-10-10" }] },
    { name: "Troops into Prague", side: "germany", kind: "armor", path: [{ at: [14.0, 50.65], time: "1939-03-15" }, { at: "Prague", time: "1939-03-15T12:00" }, { at: "Prague", time: "1939-03-25" }] },
    { name: "Army Group North (Pomerania)", side: "germany", kind: "armor", path: [{ at: [17.0, 53.7], time: "1939-09-01" }, { at: [18.0, 53.45], time: "1939-09-04" }] },
    { name: "Army Group North (East Prussia)", side: "germany", kind: "armor", path: [{ at: [20.6, 53.35], time: "1939-09-01" }, { at: [20.8, 52.95], time: "1939-09-04" }] },
    { name: "Army Group South (Silesia)", side: "germany", kind: "armor", path: [{ at: [18.4, 50.9], time: "1939-09-01" }, { at: [19.0, 51.2], time: "1939-09-04" }] },
    { name: "Army Group South (Slovakia)", side: "germany", kind: "army", path: [{ at: [19.9, 49.25], time: "1939-09-01" }, { at: [20.0, 49.65], time: "1939-09-04" }] },
  ],
  arrows: [
    { from: [17.0, 53.6], to: [18.3, 53.3], label: "Into the Corridor", color: "#555b66", start: "1939-09-01", end: "1939-09-06" },
    { from: [20.6, 53.3], to: "Warsaw", label: "Toward Warsaw", color: "#555b66", start: "1939-09-01", end: "1939-09-06" },
    { from: [18.4, 50.8], to: "Łódź", label: "Toward Łódź", color: "#555b66", start: "1939-09-01", end: "1939-09-06" },
    { from: [19.0, 50.3], to: "Kraków", label: "Toward Kraków", color: "#555b66", start: "1939-09-01", end: "1939-09-06" },
  ],
  events: [
    { title: "The Saar votes to return", time: "1935-01-13", at: "Saarbrücken", kind: "treaty", side: "germany", text: "In a League-supervised plebiscite, 90.7 percent vote for reunion with Germany. The Saar returns on 1 March." },
    { title: "The Luftwaffe revealed", time: "1935-03-09", at: "Berlin", kind: "note", side: "germany", text: "In the second week of March the regime makes public the air force that Versailles forbade." },
    { title: "Conscription announced", time: "1935-03-16", at: "Berlin", kind: "note", side: "germany", text: "Hitler announces conscription and an army of 36 divisions, in open breach of Versailles." },
    { title: "The Rhineland remilitarized", time: "1936-03-07", at: "Cologne", kind: "note", side: "germany", until: "1936-05-01", text: "German troops march into the demilitarized zone. France, unwilling to act without Britain, does nothing." },
    { title: "The Hossbach meeting", time: "1937-11-05", at: "Berlin", kind: "note", side: "germany", text: "Hitler tells his commanders that Austria and Czechoslovakia must be seized first." },
    { title: "Anschluss", time: "1938-03-12", at: "Vienna", kind: "founding", side: "germany", until: "1938-05-01", text: "German troops cross into Austria; the next day it is annexed to the Reich. A plebiscite in April approves with 99.7 percent." },
    { title: "Munich Agreement", time: "1938-09-30", at: "Munich", kind: "treaty", side: "germany", text: "Chamberlain, Daladier, Mussolini and Hitler agree that the Sudetenland goes to Germany. Czechoslovakia is not invited." },
    { title: "The Sudetenland occupied", time: "1938-10-01", at: [14.0, 50.65], kind: "note", side: "germany", text: "German troops occupy the border regions over ten days." },
    { title: "Prague occupied", time: "1939-03-15", at: "Prague", kind: "founding", side: "germany", until: "1939-05-01", text: "The Czech lands become the Protectorate of Bohemia and Moravia, and Slovakia a German satellite." },
    { title: "Britain guarantees Poland", time: "1939-03-31", at: "Warsaw", kind: "treaty", side: "poland", text: "Chamberlain's government guarantees Poland's independence. Hitler now makes Danzig and the Corridor his grievance." },
    { title: "Nazi–Soviet Pact", time: "1939-08-23", at: "Moscow", kind: "treaty", side: "germany", text: "In Moscow, Germany and the Soviet Union sign a pact of non-aggression, with a secret protocol dividing eastern Europe between them." },
    { title: "Germany invades Poland", time: "1939-09-01", at: "Westerplatte", kind: "battle", side: "germany", until: "1939-09-06", text: "German forces attack from Pomerania, East Prussia, Silesia and Slovakia." },
  ],
  eras: [
    { name: "Breaking Versailles", start: "1935-01-01", end: "1937-12-31" },
    { name: "Annexations", start: "1938-03-01", end: "1939-03-31" },
    { name: "War", start: "1939-09-01", end: "1939-09-06" },
  ],
  labels: [
    { text: "Polish Corridor", at: [18.0, 53.9], size: "small", end: "1939-09-01" },
    { text: "Protectorate of Bohemia and Moravia", at: [15.2, 49.6], size: "small", start: "1939-03-16" },
    { text: "Baltic Sea", at: [17.5, 55.6], size: "medium" },
    { text: "Sudetenland", at: [13.4, 50.55], size: "small", start: "1938-09-01", end: "1939-03-15" },
  ],
  story: [
    {
      title: "Inside the Versailles borders", time: "1934-12-01", view: { center: [14.3, 51.3], zoom: 4.9 },
      text: "At the start of 1935 the **Saar** was under the League of Nations, the **Rhineland** was closed to German troops, and **East Prussia** was cut off by the Polish Corridor. In January the Saar voted to return to Germany.",
    },
    {
      title: "The Rhineland, March 1936", time: "1936-02-01", view: { center: [7.8, 50.3], zoom: 6.4 },
      text: "On 7 March 1936 German troops march into the demilitarized **Rhineland**. France, unwilling to act without Britain, does nothing.",
    },
    {
      title: "Anschluss, March 1938", time: "1938-02-01", view: { center: [14.2, 48.4], zoom: 6.2 },
      text: "German troops cross into **Austria** on 12 March 1938, and the next day it is annexed. Germany now surrounds western Czechoslovakia on three sides.",
    },
    {
      title: "Munich and the Sudetenland, 1938", time: "1938-09-01", view: { center: [16.2, 49.6], zoom: 5.8 },
      text: "At **Munich**, on 29–30 September, Britain and France agree that the **Sudetenland** goes to Germany; Czechoslovakia is not invited. German troops occupy it in the first ten days of October.",
    },
    {
      title: "Prague, March 1939", time: "1939-03-01", view: { center: [17.0, 50.6], zoom: 5.3 },
      text: "On 15 March 1939 Germany occupies **Prague**, and Slovakia becomes a German satellite: for the first time Hitler seizes territory inhabited by non-Germans. On 31 March Britain guarantees **Poland**, his next target.",
    },
    {
      title: "Poland, September 1939", time: "1939-08-20", view: { center: [19.0, 52.3], zoom: 5.4 },
      text: "On 23 August Germany and the Soviet Union sign a pact of non-aggression. Nine days later, on 1 September, Germany invades **Poland** from Pomerania, East Prussia, Silesia and Slovakia.",
    },
  ],
  sources: [
    "Richard J. Evans, *The Third Reich in Power* (Penguin, 2005), chapter 7",
    "Ian Kershaw, *Hitler, 1936–1945: Nemesis* (Norton, 2000)",
    "Gerhard L. Weinberg, *Hitler's Foreign Policy, 1933–1939* (Enigma, 2010)",
  ],
};

export default map;
