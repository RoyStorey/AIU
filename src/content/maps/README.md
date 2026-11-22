# Lesson maps

Interactive maps for lesson pages, drawn by the [map-widget](https://github.com/RoyStorey/map-widget) package
(installed from GitHub; see `package.json`).

## Adding a map to a lesson

1. **Choose the moment.** Pick the part of the lesson where a map helps most: territory changing hands, armies
   moving, distances, geography. Use the lesson's own names, dates and spellings, so the map and the text agree.
2. **Write the map** as `src/content/maps/<course>-<topic>.ts`. Export a default `MapSpec` object in the
   `atlas-map@1` format. The full guide is `node_modules/map-widget/AGENTS.md`; the place names you can use are
   listed in `node_modules/map-widget/docs/places.md`. Keep to these rules:
   - **Match the passage's scope.** The map covers the span of time and the events of the page or section it sits
     in, and no more. If the passage covers five years, so does the map, not the whole war. Markers and chapters
     narrate only what the lesson discusses. Anything else that changed at the time may appear as territory, so the
     map stays correct, but don't narrate it.
   - **3–7 chapters**, each a caption of 1–3 sentences that **points at the map**: what to find, follow or
     compare ("Find Heraclius: he is far away in the Caucasus"). A caption that would make sense without the map
     belongs in the lesson instead. Write the chapters in the order of the page's sections.
   - **No questions:** knowledge checks stay in the lesson's exercises.
   - **Sources** are listed. Borders are approximate; say so in the file's comment.
3. **Register it** in `index.ts`.
4. **Place it** in the lesson page, between paragraphs, as its own line:
   ```markdown
   ![Interactive map of …](map:<id> "Caption: what the map shows and how to use it.")
   ```
   The alt text names the map for screen readers. The caption appears under it.

   When the map's chapters follow several sections of the page, don't put one long map at the top. Place it beside
   each section, showing just that section's chapters, by adding `#first-last` (or `#n` for a single chapter):
   ```markdown
   ![Interactive map of the Persian conquest, 602–621](map:meh-101-roman-persian-war#1-3 "…")
   …
   ![Interactive map of Heraclius's counterattack, 622–630](map:meh-101-roman-persian-war#4-7 "…")
   ```
   Each placement numbers its own chapters and its timeline covers only their years. Put a placement just after
   the first paragraph of its section, so the reader has the context and then the map.
5. **Check it:**
   ```bash
   npm run maps:check
   ```
   Then open the lesson page and step through the chapters to check the camera views.

The two maps here, `meh-101-roman-persian-war.ts` and `euh-301-road-to-war.ts`, are complete examples. The second
shows how to share border points between neighbouring areas so there are no gaps.
