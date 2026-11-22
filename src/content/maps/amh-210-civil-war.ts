import type { MapSpec } from "map-widget/spec";

/**
 * AMH 210, Lesson II: the main campaigns of the Civil War, as the lesson tells them.
 * Chapters 1–2 (the East and the West, 1861–1862) sit on "From Bull Run to Antietam";
 * chapter 3 (1863) on "1863: Turning Points"; chapters 4–5 (1864–1865) on "The Hard War".
 * Only the armies the lesson follows are drawn, and their routes are simplified to the
 * towns and battlefields the lesson names. Fort Sumter opens the map as context.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Civil War, 1861–1865",
  summary: "From Bull Run and Shiloh to Gettysburg and Vicksburg, the Overland Campaign, Atlanta, the March to the Sea, and Appomattox.",
  start: "1861-04-01",
  end: "1865-05-01",
  detail: "region",
  playSeconds: 170,
  trails: "fade",
  view: { center: [-83, 35.5], zoom: 4.8 },
  sides: [
    { id: "union", name: "Union", color: "#1c7ed6" },
    { id: "confederacy", name: "Confederacy", color: "#7f5539" },
  ],
  moves: [
    // 1861–1862, East
    { name: "McDowell", side: "union", kind: "army", path: [{ at: [-77.04, 38.9], time: "1861-07-16" }, { at: [-77.52, 38.81], time: "1861-07-21" }, { at: [-77.04, 38.9], time: "1861-07-23" }] },
    { name: "McClellan sails for the Peninsula", side: "union", kind: "fleet", bySea: true, path: [{ at: [-77.04, 38.86], time: "1862-03-17" }, { at: [-76.31, 37.0], time: "1862-04-01" }] },
    {
      name: "McClellan", side: "union", kind: "army",
      path: [
        { at: [-76.31, 37.0], time: "1862-04-02" }, { at: "Yorktown", time: "1862-04-05" }, { at: "Yorktown", time: "1862-05-04" },
        { at: [-77.25, 37.53], time: "1862-05-31" }, { at: [-77.25, 37.53], time: "1862-06-25" }, { at: [-77.2, 37.32], time: "1862-07-02" },
      ],
    },
    {
      name: "Lee", side: "confederacy", kind: "army",
      path: [
        { at: "Richmond", time: "1862-06-01" }, { at: [-77.3, 37.5], time: "1862-06-26" }, { at: [-77.25, 37.4], time: "1862-07-01" },
        { at: "Richmond", time: "1862-07-15" }, { at: [-78.0, 38.47], time: "1862-08-15" }, { at: [-77.52, 38.81], time: "1862-08-29" },
        { at: [-77.43, 39.27], time: "1862-09-06" }, { at: "Antietam", time: "1862-09-17" }, { at: [-78.16, 39.19], time: "1862-09-25" },
        { at: [-77.46, 38.3], time: "1862-11-25" },
      ],
    },
    { name: "McClellan", side: "union", kind: "army", path: [{ at: [-77.04, 38.9], time: "1862-09-07" }, { at: [-77.41, 39.41], time: "1862-09-13" }, { at: "Antietam", time: "1862-09-17" }] },
    { name: "Burnside", side: "union", kind: "army", path: [{ at: [-77.47, 38.35], time: "1862-11-19" }, { at: [-77.47, 38.35], time: "1862-12-11" }, { at: [-77.46, 38.3], time: "1862-12-13" }, { at: [-77.47, 38.35], time: "1862-12-16" }] },
    // 1862, West
    {
      name: "Grant", side: "union", kind: "army",
      path: [{ at: [-89.18, 37.0], time: "1862-02-02" }, { at: [-88.03, 36.51], time: "1862-02-06" }, { at: [-87.86, 36.49], time: "1862-02-16" }, { at: [-88.32, 35.14], time: "1862-04-06" }],
    },
    { name: "Johnston", side: "confederacy", kind: "army", path: [{ at: [-88.52, 34.93], time: "1862-04-03" }, { at: [-88.32, 35.14], time: "1862-04-06" }, { at: [-88.52, 34.93], time: "1862-04-09" }] },
    { name: "Farragut", side: "union", kind: "fleet", bySea: true, path: [{ at: [-89.3, 28.95], time: "1862-04-18" }, { at: [-89.46, 29.36], time: "1862-04-24" }, { at: [-90.07, 29.95], time: "1862-04-25" }] },
    // 1863
    {
      name: "Lee", side: "confederacy", kind: "army",
      path: [
        { at: [-77.46, 38.3], time: "1863-04-29" }, { at: [-77.64, 38.31], time: "1863-05-02" }, { at: [-77.46, 38.3], time: "1863-05-10" },
        { at: [-78.0, 38.47], time: "1863-06-08" }, { at: [-78.16, 39.19], time: "1863-06-15" }, { at: [-77.66, 39.94], time: "1863-06-27" },
        { at: "Gettysburg", time: "1863-07-01" }, { at: "Gettysburg", time: "1863-07-03" }, { at: [-77.72, 39.64], time: "1863-07-07" },
        { at: [-77.82, 39.6], time: "1863-07-14" }, { at: [-78.0, 38.47], time: "1863-08-01" },
      ],
    },
    { name: "Meade", side: "union", kind: "army", path: [{ at: [-77.42, 39.41], time: "1863-06-28" }, { at: "Gettysburg", time: "1863-07-01" }, { at: "Gettysburg", time: "1863-07-04" }] },
    {
      name: "Grant", side: "union", kind: "army",
      path: [
        { at: [-91.07, 32.47], time: "1863-03-31" }, { at: [-91.13, 31.95], time: "1863-04-30" }, { at: [-90.98, 31.96], time: "1863-05-01" },
        { at: [-90.42, 32.26], time: "1863-05-12" }, { at: [-90.18, 32.3], time: "1863-05-14" }, { at: [-90.54, 32.32], time: "1863-05-16" },
        { at: "Vicksburg", time: "1863-05-19" }, { at: "Vicksburg", time: "1863-07-04" },
      ],
    },
    { name: "Grant to Chattanooga", side: "union", kind: "army", path: [{ at: [-85.31, 35.05], time: "1863-10-23" }, { at: [-85.31, 35.05], time: "1863-11-25" }] },
    { name: "Bragg", side: "confederacy", kind: "army", path: [{ at: [-85.31, 35.05], time: "1863-09-08" }, { at: [-85.26, 34.92], time: "1863-09-19" }, { at: [-85.27, 35.0], time: "1863-09-25" }, { at: [-85.27, 35.0], time: "1863-11-25" }, { at: [-84.97, 34.77], time: "1863-11-30" }] },
    // 1864
    {
      name: "Grant and Meade", side: "union", kind: "army",
      path: [
        { at: [-77.88, 38.5], time: "1864-05-04" }, { at: [-77.75, 38.31], time: "1864-05-05" }, { at: [-77.66, 38.2], time: "1864-05-08" },
        { at: [-77.66, 38.2], time: "1864-05-21" }, { at: [-77.42, 37.9], time: "1864-05-24" }, { at: [-77.28, 37.59], time: "1864-06-03" },
        { at: [-77.2, 37.32], time: "1864-06-14" }, { at: [-77.4, 37.23], time: "1864-06-18" }, { at: [-77.4, 37.23], time: "1865-04-02" },
        { at: [-78.25, 37.3], time: "1865-04-06" }, { at: "Appomattox", time: "1865-04-09" },
      ],
    },
    {
      name: "Lee", side: "confederacy", kind: "army",
      path: [
        { at: [-77.72, 38.3], time: "1864-05-04" }, { at: [-77.75, 38.31], time: "1864-05-05" }, { at: [-77.64, 38.19], time: "1864-05-08" },
        { at: [-77.64, 38.19], time: "1864-05-21" }, { at: [-77.45, 37.88], time: "1864-05-23" }, { at: [-77.3, 37.6], time: "1864-06-01" },
        { at: [-77.42, 37.25], time: "1864-06-18" }, { at: [-77.42, 37.25], time: "1865-04-02" }, { at: [-77.98, 37.34], time: "1865-04-05" },
        { at: [-78.25, 37.3], time: "1865-04-06" }, { at: "Appomattox", time: "1865-04-09" },
      ],
    },
    {
      name: "Sherman", side: "union", kind: "army",
      path: [
        { at: [-85.31, 35.05], time: "1864-05-07" }, { at: [-84.94, 34.58], time: "1864-05-14" }, { at: [-84.58, 33.98], time: "1864-06-27" },
        { at: "Atlanta", time: "1864-09-02" }, { at: "Atlanta", time: "1864-11-15" }, { at: [-83.23, 33.08], time: "1864-11-23" },
        { at: "Savannah", time: "1864-12-21" }, { at: "Savannah", time: "1865-02-01" }, { at: [-81.03, 34.0], time: "1865-02-17" },
        { at: [-78.88, 35.05], time: "1865-03-11" }, { at: [-77.99, 35.38], time: "1865-03-23" }, { at: [-78.64, 35.78], time: "1865-04-13" },
      ],
    },
    {
      name: "Hood", side: "confederacy", kind: "army",
      path: [
        { at: [-84.67, 33.52], time: "1864-09-20" }, { at: [-86.0, 34.01], time: "1864-10-20" }, { at: [-87.68, 34.8], time: "1864-11-15" },
        { at: [-86.87, 35.93], time: "1864-11-30" }, { at: [-86.78, 36.1], time: "1864-12-15" }, { at: [-87.68, 34.8], time: "1864-12-27" },
      ],
    },
  ],
  events: [
    { title: "Fort Sumter", time: "1861-04-12", at: [-79.87, 32.75], kind: "siege", side: "confederacy", until: "1861-12-31", text: "Confederate batteries open fire on the federal fort in Charleston harbor; the war begins." },
    { title: "First Bull Run", time: "1861-07-21", at: [-77.52, 38.81], kind: "battle", side: "confederacy", until: "1862-03-01", text: "McDowell's advance on Manassas collapses into a rout back to Washington." },
    { title: "Forts Henry and Donelson", time: "1862-02-16", at: [-87.86, 36.49], kind: "siege", side: "union", until: "1862-12-31", text: "\"No terms except an unconditional and immediate surrender\": Grant opens Tennessee." },
    { title: "Shiloh", time: "1862-04-06", at: [-88.32, 35.14], kind: "battle", side: "union", until: "1862-12-31", text: "Two days and some 23,000 casualties; Johnston is killed." },
    { title: "New Orleans", time: "1862-04-25", at: [-90.07, 29.95], kind: "siege", side: "union", until: "1863-07-10", text: "Farragut runs past the forts and takes the Confederacy's largest city." },
    { title: "Seven Days", time: "1862-06-26", at: [-77.3, 37.5], kind: "battle", side: "confederacy", until: "1862-12-31", text: "Lee drives McClellan back from the outskirts of Richmond." },
    { title: "Second Bull Run", time: "1862-08-29", at: [-77.55, 38.83], kind: "battle", side: "confederacy", until: "1862-12-31", text: "Lee defeats Pope and turns north toward Maryland." },
    { title: "Antietam", time: "1862-09-17", at: "Antietam", kind: "battle", side: "union", until: "1863-04-15", text: "The bloodiest single day in American history; Lee withdraws, and Lincoln issues the preliminary Emancipation Proclamation." },
    { title: "Fredericksburg", time: "1862-12-13", at: [-77.46, 38.3], kind: "battle", side: "confederacy", until: "1863-04-15", text: "Burnside's assaults on the heights fail with terrible losses." },
    { title: "Chancellorsville", time: "1863-05-02", at: [-77.64, 38.31], kind: "battle", side: "confederacy", until: "1863-12-31", text: "Jackson routs the Union flank, and is mortally wounded by his own men." },
    { title: "Gettysburg", time: "1863-07-01", at: "Gettysburg", kind: "battle", side: "union", until: "1864-04-15", text: "Three days, about 51,000 casualties, and Pickett's Charge; Lee retreats to Virginia." },
    { title: "Vicksburg", time: "1863-07-04", at: "Vicksburg", kind: "siege", side: "union", until: "1864-04-15", text: "After forty-seven days, Pemberton surrenders about 30,000 men; the Union holds the Mississippi." },
    { title: "Chickamauga", time: "1863-09-19", at: [-85.26, 34.92], kind: "battle", side: "confederacy", until: "1864-04-15", text: "The largest Confederate victory in the West; the Union army is besieged in Chattanooga." },
    { title: "Chattanooga", time: "1863-11-25", at: [-85.31, 35.05], kind: "battle", side: "union", until: "1864-09-01", text: "Grant breaks the siege; the road into Georgia lies open." },
    { title: "The Wilderness", time: "1864-05-05", at: [-77.75, 38.31], kind: "battle", side: "confederacy", until: "1865-05-01", text: "Two days in burning woods; Grant moves south instead of retreating." },
    { title: "Spotsylvania", time: "1864-05-12", at: [-77.66, 38.2], kind: "battle", side: "confederacy", until: "1865-05-01", text: "Nearly two weeks of fighting, including the Bloody Angle." },
    { title: "Cold Harbor", time: "1864-06-03", at: [-77.28, 37.59], kind: "battle", side: "confederacy", until: "1865-05-01", text: "A frontal assault Grant later regretted more than any decision of the war." },
    { title: "Siege of Petersburg", time: "1864-06-18", at: [-77.4, 37.23], kind: "siege", side: "union", until: "1865-05-01", text: "Nine months of trench warfare around the rail center below Richmond." },
    { title: "Atlanta", time: "1864-09-02", at: "Atlanta", kind: "siege", side: "union", until: "1865-05-01", text: "\"Atlanta is ours, and fairly won\": the victory that helps reelect Lincoln." },
    { title: "Cedar Creek", time: "1864-10-19", at: [-78.28, 39.01], kind: "battle", side: "union", until: "1865-05-01", text: "Sheridan's victory ends Confederate power in the Shenandoah Valley." },
    { title: "Franklin and Nashville", time: "1864-12-15", at: [-86.78, 36.1], kind: "battle", side: "union", until: "1865-05-01", text: "Thomas destroys Hood's Army of Tennessee." },
    { title: "Savannah", time: "1864-12-21", at: "Savannah", kind: "siege", side: "union", until: "1865-05-01", text: "The March to the Sea ends; Sherman offers the city to Lincoln as a Christmas present." },
    { title: "Columbia", time: "1865-02-17", at: [-81.03, 34.0], kind: "disaster", side: "union", until: "1865-05-01", text: "South Carolina's capital burns; who set the fires is still disputed." },
    { title: "Appomattox", time: "1865-04-09", at: "Appomattox", kind: "treaty", side: "union", until: "1865-05-01", text: "Lee surrenders the Army of Northern Virginia to Grant." },
  ],
  labels: [
    { text: "Mississippi", at: [-90.9, 34.3], size: "small" },
    { text: "Virginia", at: [-78.6, 37.6], size: "small" },
  ],
  story: [
    {
      title: "The East, 1861–1862", time: "1861-04-01", until: "1862-12-31", view: { center: [-77.3, 38.3], zoom: 7.0 },
      text: "Watch the armies surge back and forth between **Washington** and **Richmond**: **Bull Run**, McClellan's landing on the Peninsula, the **Seven Days**, Lee's turn north to **Antietam**, and **Fredericksburg**.",
    },
    {
      title: "The West, 1862", time: "1862-01-15", until: "1862-06-01", view: { center: [-89.0, 33.0], zoom: 5.6 },
      text: "Meanwhile, the rivers: **Grant** takes **Forts Henry and Donelson** and survives **Shiloh**, while **Farragut** sails up the Mississippi to **New Orleans**.",
    },
    {
      title: "1863: Turning points", time: "1863-03-15", until: "1863-12-31", view: { center: [-83.5, 36.0], zoom: 4.9 },
      text: "Two campaigns a thousand kilometers apart: Lee marches north from **Chancellorsville** to **Gettysburg**, while **Grant** crosses the Mississippi below **Vicksburg** and closes on it from the east. Then **Chattanooga**.",
    },
    {
      title: "The Overland Campaign and Atlanta, 1864", time: "1864-04-15", until: "1864-11-14", view: { center: [-81.5, 36.0], zoom: 5.2 },
      text: "Grant pushes south through the **Wilderness**, **Spotsylvania**, and **Cold Harbor** to **Petersburg**, while **Sherman** fights his way from Chattanooga to **Atlanta**.",
    },
    {
      title: "The March to the Sea and Appomattox", time: "1864-11-14", view: { center: [-81.5, 35.0], zoom: 5.2 },
      text: "Sherman cuts loose from Atlanta to **Savannah** and turns north through the Carolinas while Hood is destroyed in Tennessee. In April, Lee's lines break, and the chase ends at **Appomattox**.",
    },
  ],
  sources: [
    "James M. McPherson, Battle Cry of Freedom: The Civil War Era (1988)",
    "Gary W. Gallagher and Joan Waugh, The American War: A History of the Civil War Era (2015)",
    "Army routes are simplified to the places the lesson names.",
  ],
};

export default map;
