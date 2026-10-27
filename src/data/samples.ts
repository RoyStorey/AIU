import type { Activity, Course, Lesson, Media, Resource, Topic } from "@/lib/schema";
import { amazonBookLink, webSearchLink, youtubeSearchLink } from "@/lib/links";

/*
 * Hand-written sample subjects so AIU is explorable without an API key.
 * Only links we are certain of are marked verified; everything else opens a search.
 */

const book = (title: string, creator: string, year: string, why: string): Resource => ({
  kind: "book", title, creator, year, why, url: "", isbn: "", verified: false, href: amazonBookLink(title, creator),
});
const link = (kind: Resource["kind"], title: string, creator: string, year: string, why: string, url: string): Resource => ({
  kind, title, creator, year, why, url, isbn: "", verified: true, href: url,
});
const find = (kind: Resource["kind"], title: string, creator: string, year: string, why: string): Resource => ({
  kind, title, creator, year, why, url: "", isbn: "", verified: false,
  href: kind === "video" || kind === "film" ? youtubeSearchLink(`${title} ${creator}`) : webSearchLink(`${title} ${creator}`),
});
const img = (title: string, query: string, caption: string): Media => ({ kind: "image", title, query, caption, url: "", verified: false });
const wiki = (title: string, caption = ""): Media => ({ kind: "wiki", title, query: title, caption, url: "", verified: false });
const vid = (title: string, query: string, caption: string): Media => ({ kind: "video", title, query, caption, url: "", verified: false });
const audio = (title: string, query: string, caption: string): Media => ({ kind: "audio", title, query, caption, url: "", verified: false });

const blank = { questions: [], minWords: 0, rubric: [], events: [], cards: [], chessTheme: "" };
const act = (a: Partial<Activity> & Pick<Activity, "id" | "type" | "title" | "prompt">): Activity => ({ ...blank, ...a });

/* ================================================================ GOTHIC */

const GOTHIC_COURSE_ID = "sample-gothic-light";

const gothicLessons: Lesson[] = [
  {
    id: "sg-l1",
    title: "Abbot Suger's Gamble",
    hook: "In 1140 a short, stubborn abbot decided God was made of light, and set out to build accordingly.",
    funFact:
      "Abbot Suger had himself depicted in a stained-glass window at Saint-Denis, kneeling at the feet of the Virgin. He was not a man plagued by modesty.",
    keyIdeas: [
      "Gothic architecture was born at the abbey church of Saint-Denis, just north of Paris, in the 1140s.",
      "Abbot Suger believed beauty and light could lift the soul toward God (he called it the 'anagogical' way).",
      "Saint-Denis's new choir, consecrated in 1144, combined pointed arches, rib vaults and huge windows into a single new system.",
      "Within a century the 'French style' had spread across Europe.",
    ],
    body: `## A church that was falling apart
In the 1130s the royal abbey of **Saint-Denis** was crowded, cramped, and crumbling. Pilgrims came to venerate the relics of Saint Denis, the patron of France, and on feast days the crush was so bad that, according to its abbot, women had to be carried out over the heads of the men "as if on a pavement."

The abbot in question was **Suger** (c. 1081–1151): a man of humble birth, a schoolmate of King Louis VI, regent of France while Louis VII was away on crusade, and a tireless administrator. He was also, crucially, a man with a theory.

## God is light
Suger read (or believed he was reading) the writings of "Dionysius," a mystic whom medieval monks confused with Saint Denis himself. Dionysius taught that all creation is a cascade of light flowing from God, and that by contemplating beautiful, luminous things the mind can climb back up that cascade toward its source.

So Suger wanted a church that did not merely *contain* light but was *made* of it. Over the doors of his new west front he had verses inscribed in gilded bronze: *the dull mind rises to truth through material things.*

## The choir of 1144
The masterstroke came in the east end, the **choir**, built in astonishingly little time and consecrated on 11 June 1144 in front of the king, queen, and a crowd of bishops. Walk around its curving **ambulatory** today and you'll notice:

- **Pointed arches**, which could be made taller or shorter while keeping the same width
- **Rib vaults**, a skeleton of stone ribs carrying a lightweight ceiling
- Slender columns instead of massive walls
- Chapels whose walls are almost entirely **stained glass**, so the windows merge into a continuous ring of colour

None of these elements was new on its own. Pointed arches had appeared in Islamic and Burgundian buildings; rib vaults at Durham in England. What was new was combining them into a **system** whose goal was height and light.

## Spreading the "French work"
Bishops who attended the consecration went home dazzled. Within a generation, new cathedrals were rising at **Sens**, **Noyon**, **Laon**, and **Paris**. Contemporaries called the style *opus francigenum*, "French work." The word *Gothic* came much later, as an insult: Renaissance writers like Giorgio Vasari blamed the style on the barbarian Goths and thought it hopelessly crude.

## Try this
Find the nearest building with pointed arches (churches, universities and 19th-century train stations are good bets). Stand inside, look up, and ask: *where is the light coming from, and what is holding the roof up?* Those two questions are the whole of Gothic in miniature.`,
    media: [
      img("Saint-Denis ambulatory", "Basilica of Saint-Denis ambulatory", "The ring of chapels behind the altar: the first glimpse of Gothic light."),
      wiki("Suger", "The abbot, statesman and impresario behind it all."),
      img("Suger in stained glass", "Suger Saint-Denis stained glass window", "Suger, kneeling, written into his own windows."),
      vid("An introduction to Gothic architecture", "Smarthistory Gothic architecture introduction", "Smarthistory's art historians walk through the essentials."),
    ],
    resources: [
      link("article", "Gothic Art", "The Metropolitan Museum of Art · Heilbrunn Timeline", "", "A clear, beautifully illustrated overview from one of the world's great Gothic collections.", "https://www.metmuseum.org/toah/hd/goth/hd_goth.htm"),
      book("Abbot Suger on the Abbey Church of St.-Denis and Its Art Treasures", "Erwin Panofsky", "1946", "Suger's own account of his building, translated with a famous essay by Panofsky."),
      link("article", "Basilica of Saint-Denis", "Wikipedia", "", "History, burials of French kings, and plenty of pictures.", "https://en.wikipedia.org/wiki/Basilica_of_Saint-Denis"),
    ],
    activities: [
      act({
        id: "sg-a1",
        type: "quiz",
        title: "The Abbot's Exam",
        prompt: "Four questions. Suger is watching.",
        questions: [
          { q: "Where was the first Gothic choir built?", options: ["Chartres", "Saint-Denis", "Canterbury", "Cologne"], answer: 1, explain: "The abbey church of Saint-Denis, north of Paris, consecrated in 1144." },
          { q: "Which idea most inspired Suger's building?", options: ["That God is light", "That stone is eternal", "That churches should look like castles", "That bigger is always better"], answer: 0, explain: "Via the writings of 'Dionysius', Suger believed light could lift the mind toward God." },
          { q: "What did contemporaries call the new style?", options: ["Gothic", "Romanesque", "Opus francigenum, 'French work'", "The Norman style"], answer: 2, explain: "'Gothic' was a later Renaissance insult. At the time it was simply the French work." },
          { q: "What was genuinely new at Saint-Denis?", options: ["The invention of the pointed arch", "The invention of stained glass", "Combining pointed arches, rib vaults and big windows into one system", "Using stone instead of wood"], answer: 2, explain: "Each element existed before; the breakthrough was the integrated system aimed at height and light." },
        ],
      }),
    ],
  },
  {
    id: "sg-l2",
    title: "The Toolkit: Arches, Ribs & Buttresses",
    hook: "Three clever tricks let medieval masons replace walls with windows. Here is how they cheated gravity.",
    funFact:
      "Medieval masons had no structural engineering equations. They worked with geometry, rules of thumb, and full-size drawings scratched onto plaster 'tracing floors', some of which still survive at York Minster.",
    keyIdeas: [
      "Pointed arches push down more steeply than round arches and can span different widths at the same height.",
      "Rib vaults concentrate the weight of the ceiling onto a few points instead of along whole walls.",
      "Flying buttresses catch the outward thrust of the vaults and carry it to the ground outside the building.",
      "With the load carried by a skeleton, walls could become curtains of glass.",
    ],
    body: `## The problem with roofs
Every stone vault wants to do two things: fall **down** and spread **outwards**. Romanesque builders handled this the brute-force way, with walls metres thick and small windows that wouldn't weaken them. The result: solemn, cave-like churches. Gothic builders wanted the opposite, so they needed a smarter way to manage those forces.

## Trick one: the pointed arch
A round arch is a semicircle, so its height is always half its width. A **pointed arch** can be tall and narrow or low and wide, which meant builders could make arches of different spans meet at the same height. It also pushes its load more *downwards* and less *sideways*, which is exactly what you want when you're trying to go up.

## Trick two: the rib vault
Picture an umbrella. The **ribs** of a Gothic vault are like the spokes: a framework of stone arches that is built first, then filled in with thin panels called *webs*. Instead of a heavy ceiling pressing along the whole length of a wall, the weight gathers into the ribs and flows down into a few **piers**. The wall between those points is now doing almost nothing structurally, so why not make it glass?

## Trick three: the flying buttress
There's still the outward push at the top of those piers, high above the aisles. The solution is gloriously theatrical: half-arches that leap out over the roofs of the aisles to massive stone **buttresses** standing outside. These are **flying buttresses**. They first appeared around the 1160s–1180s (Notre-Dame de Paris is among the earliest major users) and soon became the signature silhouette of a Gothic cathedral, like the ribs of a great stone ship turned upside down.

The tall stone spikes on top, **pinnacles**, aren't just decoration: their extra weight helps steer the thrust downward.

## Skeleton and skin
Put the three together and the building becomes a **skeleton** (piers, ribs, buttresses) with a **skin** of glass. That's why walking into Sainte-Chapelle in Paris feels like stepping into a jewel box: in its upper chapel, about two-thirds of the walls are stained glass.

## Try this
Hold a sheet of paper upright: it flops. Fold it into a zig-zag and it stands. Now press down on top and watch it splay at the base. Put your hands against the sides to stop it. Congratulations, your hands are flying buttresses.`,
    media: [
      img("Flying buttresses of Notre-Dame", "Notre-Dame de Paris flying buttresses", "Half-arches leaping from the walls to buttresses outside."),
      img("Rib vault", "Gothic rib vault ceiling", "The stone 'umbrella' that funnels the ceiling's weight into a few points."),
      wiki("Flying buttress", "How the external props work, with diagrams."),
      img("Sainte-Chapelle upper chapel", "Sainte-Chapelle upper chapel stained glass", "Skeleton and skin: walls that are mostly glass."),
      wiki("Rib vault"),
    ],
    resources: [
      book("Cathedral: The Story of Its Construction", "David Macaulay", "1973", "Pen-and-ink drawings showing a fictional cathedral rising stone by stone. Perfect for this lesson, at any age."),
      book("The Gothic Enterprise: A Guide to Understanding the Medieval Cathedral", "Robert A. Scott", "2003", "Who paid, who built, and why, from a sociologist who fell in love with cathedrals."),
      find("video", "How were Gothic cathedrals built?", "documentary", "", "Search for documentaries on medieval building techniques and tracing floors."),
    ],
    activities: [
      act({
        id: "sg-a2",
        type: "flashcards",
        title: "Master Mason's Vocabulary",
        prompt: "Learn the words the guild would expect you to know.",
        cards: [
          { front: "Pointed arch", back: "An arch with a peak; it can vary in width while keeping its height and pushes its load more downward." },
          { front: "Rib vault", back: "A ceiling built on a framework of stone ribs, channelling weight to a few points." },
          { front: "Flying buttress", back: "A half-arch that carries the vault's outward thrust over the aisle to an external pier." },
          { front: "Pinnacle", back: "A heavy stone spire on a buttress whose weight helps turn thrust downward." },
          { front: "Nave", back: "The long main body of the church, where the congregation stands." },
          { front: "Clerestory", back: "The upper level of the nave wall, pierced with windows: the 'clear storey'." },
          { front: "Ambulatory", back: "A walkway curving around the back of the choir, often lined with chapels." },
          { front: "Tracing floor", back: "A plaster floor where masons scratched full-size templates for arches and windows." },
        ],
      }),
    ],
  },
  {
    id: "sg-l3",
    title: "The Race to the Sky",
    hook: "For a hundred and fifty years, French towns competed to build ever higher. One of them pushed too far.",
    funFact:
      "Beauvais Cathedral's choir vault reaches about 48 metres, the tallest Gothic choir ever completed. It partially collapsed in 1284, and the nave was never built: the cathedral is still just a choir and transept today.",
    keyIdeas: [
      "Each new cathedral tried to outdo the last: Notre-Dame (c. 33 m vaults), Chartres (c. 37 m), Amiens (c. 42 m), Beauvais (c. 48 m).",
      "Chartres was largely rebuilt after a fire in 1194 and kept most of its original medieval glass.",
      "Amiens, begun in 1220, has the largest interior volume of any French cathedral.",
      "Beauvais's partial collapse in 1284 marked the practical limit of the race.",
    ],
    body: `## Civic pride, in stone
A cathedral was a city's calling card: proof of its piety, its wealth and its bishop's ambition. When one town raised a vault higher than its neighbour, the next one wanted to go higher still. Historians sometimes call this period the **High Gothic**, and the numbers tell the story.

## Notre-Dame de Paris (begun 1163)
Begun under Bishop Maurice de Sully, Notre-Dame's vault rises roughly 33 metres. It was among the first buildings to use flying buttresses at scale. Its later history is a drama of its own: damaged in the Revolution, restored in the 19th century by Eugène Viollet-le-Duc (who added the famous spire and many of the chimeras), devastated by fire in April 2019, and reopened in December 2024 after an extraordinary five-year restoration.

## Chartres (rebuilt after 1194)
In 1194 fire destroyed most of the old cathedral at Chartres, but its most precious relic, a tunic believed to have belonged to the Virgin Mary, survived. Taking that as a sign, the town rebuilt at speed, finishing most of the structure in about 26 years. Chartres is beloved because it preserves the bulk of its **original 13th-century glass**, including three great **rose windows** and the deep blue known as "Chartres blue."

## Amiens (begun 1220)
Amiens is the High Gothic at its most confident: a nave vault of about 42 metres, enormous windows, and a labyrinth set into the floor. Its west front once blazed with painted colour, and laser cleaning in the 1990s revealed traces of the original pigments.

## Beauvais: the cathedral that flew too close to the sun
Beauvais aimed for about 48 metres. In **1284**, part of the choir vault came crashing down. The builders rebuilt it, adding extra piers, and in the 16th century added a crossing tower that made it, briefly, the tallest building in the world, until the tower collapsed in 1573. The nave was never built. Today the choir still stands, braced with iron ties: magnificent, unfinished, and a little terrifying.

## Try this
Look up the height of a building you know well, perhaps your office, a local church, or a stadium. How does it compare with Amiens at 42 metres, roughly a 13-storey building, built without steel, power tools, or cranes beyond human-powered treadwheels?`,
    media: [
      img("Chartres rose window", "Chartres Cathedral north rose window", "One of three great roses; much of the glass dates from the early 1200s."),
      img("Amiens nave", "Amiens Cathedral nave interior", "Forty-two metres of confidence."),
      img("Beauvais choir", "Beauvais Cathedral choir interior", "The tallest Gothic choir ever completed."),
      wiki("Chartres Cathedral"),
      audio("Music of the Notre-Dame school", "Perotin organum", "Pérotin composed soaring polyphony for Notre-Dame around 1200: Gothic architecture, in sound."),
    ],
    resources: [
      book("Universe of Stone: Chartres Cathedral and the Invention of the Gothic", "Philip Ball", "2008", "A science writer tells the story of Chartres and the ideas behind it: geometry, theology, and engineering."),
      link("article", "Notre-Dame de Paris", "Wikipedia", "", "Its whole history, from 1163 to the 2019 fire and 2024 reopening.", "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris"),
      find("film", "Civilisation, episode 2: The Great Thaw", "Kenneth Clark (BBC)", "1969", "Clark's classic television essay, which climaxes in the sculpture and glass of Chartres."),
    ],
    activities: [
      act({
        id: "sg-a3",
        type: "timeline",
        title: "Build the Gothic Century (and Then Some)",
        prompt: "Put these milestones in order, from earliest to latest.",
        events: [
          { label: "Suger's choir at Saint-Denis is consecrated", year: 1144, detail: "The birth of Gothic, before king, queen and bishops." },
          { label: "Notre-Dame de Paris is begun", year: 1163, detail: "Bishop Maurice de Sully launches the project." },
          { label: "Fire destroys most of Chartres Cathedral", year: 1194, detail: "The relic survives, and the town rebuilds in about 26 years." },
          { label: "Construction begins at Amiens", year: 1220, detail: "The High Gothic at its most confident." },
          { label: "Sainte-Chapelle is consecrated", year: 1248, detail: "Louis IX's glass jewel box for the Crown of Thorns." },
          { label: "Part of the Beauvais choir vault collapses", year: 1284, detail: "The practical limit of the race to the sky." },
          { label: "Cologne Cathedral is finally completed", year: 1880, detail: "Begun in 1248 and finished over six centuries later, following medieval plans." },
        ],
      }),
    ],
  },
  {
    id: "sg-l4",
    title: "Reading a Cathedral",
    hook: "A cathedral is a book you read with your feet and your neck. Here is how to turn its pages.",
    funFact:
      "Strictly speaking, a gargoyle is a waterspout: the word comes from the same root as 'gargle'. Carved creatures that don't drain water are called grotesques, and Notre-Dame's famous brooding 'Stryge' is a 19th-century chimera by Viollet-le-Duc.",
    keyIdeas: [
      "Cathedrals were designed to be read: their sculpture and glass tell stories from scripture, saints' lives and daily life.",
      "Portals often present the Last Judgment, with heaven on one side and hell on the other.",
      "Stained glass windows are read from bottom to top, like comic strips of colour.",
      "Many 'medieval' details we love were added or restored in the 19th century.",
    ],
    body: `## The Bible of the poor
Most people in the 13th century could not read, but they could read a cathedral. Medieval writers sometimes described images as the books of the unlettered, and cathedral builders took that seriously. Doorways, capitals, choir screens and above all **windows** were filled with stories meant to teach, warn and delight.

## Start at the door
Stand before the central west portal of almost any great Gothic cathedral and look up into the semicircle above the doors, the **tympanum**. Very often you'll find the **Last Judgment**: Christ enthroned, the dead climbing out of their tombs, an angel weighing souls, the saved led off to Christ's right (your left), the damned dragged away to the other side by alarmingly cheerful demons. The **jamb figures** lining the doorway, tall columnar saints and kings, welcome you in. At Chartres the "Royal Portal" figures of the 1140s are among the earliest and most haunting.

## Read the glass from the bottom up
Gothic windows are usually read **from bottom to top**, left to right, panel by panel, like a comic strip. Many windows were paid for by guilds, and Chartres is famous for its "signature" panels showing the donors at work: bakers, butchers, shoemakers, wine merchants and more. A window about a saint might begin, at the bottom, with the people who paid for it doing their jobs.

## The rose
**Rose windows** are a Gothic speciality: vast wheels of tracery and glass, often with Christ or the Virgin at the centre and prophets, kings or signs of the zodiac radiating outward. They are cosmic diagrams as much as illustrations: images of an ordered universe with God at its heart.

## Monsters on the roof
Up on the gutters lurk the **gargoyles**, waterspouts carved as beasts, so rain was thrown clear of the walls. Not every stone monster is medieval, though. Many of Notre-Dame's best-loved creatures, including the pensive "Stryge" resting its chin in its hands, were designed in the 1840s–60s by **Viollet-le-Duc**, whose restorations were inspired partly by Victor Hugo's 1831 novel *Notre-Dame de Paris* (the hunchback one). The Middle Ages we picture is partly a Romantic invention.

## Try this
Pick a cathedral online (Chartres, Amiens, York, Cologne) and find one stained glass window. Can you read its story from the bottom up without a guidebook? Then check yourself.`,
    media: [
      img("The Stryge of Notre-Dame", "Notre-Dame de Paris Stryge chimera", "Viollet-le-Duc's brooding chimera: medieval in spirit, Victorian in fact."),
      img("Chartres Royal Portal", "Chartres Cathedral Royal Portal jamb statues", "Column-saints from the 1140s welcome you inside."),
      img("Amiens Last Judgment portal", "Amiens Cathedral Last Judgment portal tympanum", "The saved on one side, the damned on the other."),
      wiki("Gargoyle", "Waterspouts versus grotesques: the definitive guide."),
      wiki("Eugène Viollet-le-Duc"),
    ],
    resources: [
      book("The Pillars of the Earth", "Ken Follett", "1989", "A sprawling, page-turning novel about building a cathedral in 12th-century England. Pure pleasure, surprisingly informative."),
      book("Gothic Architecture and Scholasticism", "Erwin Panofsky", "1951", "A short, provocative classic arguing cathedrals are built the way medieval philosophers argued."),
      book("The Hunchback of Notre-Dame", "Victor Hugo", "1831", "The novel that made Paris fall back in love with its cathedral, and helped save it."),
      link("primary-source", "Notre-Dame de Paris by Victor Hugo (free ebook)", "Project Gutenberg", "1831", "Read Hugo's famous chapter 'Notre-Dame' for free.", "https://www.gutenberg.org/ebooks/search/?query=hunchback+of+notre+dame"),
    ],
    activities: [
      act({
        id: "sg-a4",
        type: "essay",
        title: "Be the Tour Guide",
        prompt:
          "You're leading three friends through a Gothic cathedral (real or imagined). In about 200 words, write the speech you'd give at the west front: what should they look for, how should they 'read' it, and what do the building's height and light mean?",
        minWords: 200,
        rubric: ["Uses at least two specific features (portal, glass, rose, buttresses…)", "Explains how to 'read' the imagery", "Connects form to meaning (light, height, story)"],
      }),
    ],
  },
];

const gothicTopic: Topic = {
  id: "sample-gothic",
  query: "Gothic Architecture",
  title: "Gothic Architecture",
  emoji: "⛪",
  blurb:
    "Imagine medieval masons, armed with geometry and nerve, turning stone into light and height. Gothic cathedrals are engineering, theology, and comic strips of coloured glass, all at once.",
  createdAt: 0,
  sample: true,
  options: [
    { id: "sg-o1", courseId: GOTHIC_COURSE_ID, title: "Cathedrals of Light", tagline: "How a stubborn abbot and some clever masons replaced walls with windows.", emoji: "🌈", vibe: "grand tour", level: "Dabbler", hook: "You'll walk into any Gothic church and know what holds the roof up, how to read its windows, and why it was built so absurdly tall.", lessonCount: 4, hours: 3, color: "sun" },
    { id: "sg-o2", title: "Gargoyles, Grotesques & Green Men", tagline: "The weird, wonderful monsters lurking on medieval rooftops.", emoji: "👹", vibe: "creature safari", level: "Dabbler", hook: "Spot a real gargoyle from a Victorian fake, and meet the foliage-faced Green Men hiding in plain sight.", lessonCount: 4, hours: 3, color: "grape" },
    { id: "sg-o3", title: "The Mason's Secret Geometry", tagline: "Compass, straightedge, and the hidden maths of tracery.", emoji: "📐", vibe: "hands-on workshop", level: "Devotee", hook: "Draw your own rose window with nothing but a compass and learn the rules of thumb that kept cathedrals standing.", lessonCount: 5, hours: 6, color: "sky" },
    { id: "sg-o4", title: "Stained Glass Detective", tagline: "Decode the stories hidden in medieval windows.", emoji: "🔍", vibe: "detective story", level: "Devotee", hook: "You'll read a 13th-century window panel by panel and identify saints by their symbols.", lessonCount: 5, hours: 5, color: "bubblegum" },
    { id: "sg-o5", title: "Gothic Reborn", tagline: "From Strawberry Hill to Hogwarts: the Victorian Gothic Revival.", emoji: "🏰", vibe: "contrarian history", level: "Devotee", hook: "Discover why half the 'medieval' buildings you know were built in the 1800s, and what that says about us.", lessonCount: 5, hours: 5, color: "mint" },
    { id: "sg-o6", title: "Notre-Dame: Biography of a Building", tagline: "860 years, one fire, and a resurrection.", emoji: "🔥", vibe: "deep dive", level: "Deep Diver", hook: "Follow one cathedral from 1163 to its 2024 reopening, through revolution, restoration and flame.", lessonCount: 6, hours: 8, color: "tomato" },
  ],
};

const gothicCourse: Course = {
  id: GOTHIC_COURSE_ID,
  topicId: gothicTopic.id,
  optionId: "sg-o1",
  color: "sun",
  createdAt: 0,
  title: "Cathedrals of Light",
  tagline: "How a stubborn abbot and some clever masons replaced walls with windows.",
  emoji: "🌈",
  guideName: "Brother Anselm, Retired Gargoyle",
  guideIntro:
    "Eight hundred years I spent spitting rainwater off a gutter in Amiens, and believe me, you learn a thing or two about buildings. Come down off the roof with me; there's a great deal of light to show you.",
  overview: `Gothic architecture began with an idea, that **light is divine**, and a problem: how do you build a stone church that is mostly window? Over four lessons we'll follow the answer from Abbot Suger's experiment at Saint-Denis to the dizzying vaults of Amiens and Beauvais.

You'll learn the toolkit of pointed arches, rib vaults and flying buttresses, race through the High Gothic's competition for height, and finish by learning to *read* a cathedral's portals and windows like the medieval visitors who never needed a guidebook.`,
  capstone:
    "Choose a Gothic building you can visit (or explore online with Google Street View) and make a one-page illustrated 'field guide' to it: its structure, one window or portal you've decoded, and one surprising story.",
  sourcesChecked: 0,
  lessons: gothicLessons,
  library: [
    book("The Gothic Cathedral", "Otto von Simson", "1956", "The classic study of how medieval ideas of light and number shaped the cathedrals."),
    book("Cathedral: The Story of Its Construction", "David Macaulay", "1973", "Hand-drawn, step-by-step construction of a cathedral. A gem."),
    book("Universe of Stone", "Philip Ball", "2008", "Chartres, geometry, and the birth of the Gothic, told with verve."),
    book("The Cathedral Builders", "Jean Gimpel", "1958", "The masons, money and medieval engineering behind the great churches."),
    book("The Pillars of the Earth", "Ken Follett", "1989", "The novel to read alongside this course."),
    link("article", "Gothic Art", "The Met · Heilbrunn Timeline of Art History", "", "A superb museum overview with objects from the Met's collection.", "https://www.metmuseum.org/toah/hd/goth/hd_goth.htm"),
    link("website", "Gothic architecture", "Wikipedia", "", "A dense, well-illustrated encyclopedia entry to dip into.", "https://en.wikipedia.org/wiki/Gothic_architecture"),
    find("film", "Civilisation, episode 2: The Great Thaw", "Kenneth Clark (BBC)", "1969", "Television's great essay on the medieval rebirth, ending at Chartres."),
  ],
};

/* ================================================================= CHESS */

const CHESS_COURSE_ID = "sample-chess-dojo";

const chessLessons: Lesson[] = [
  {
    id: "sc-l1",
    title: "The Fork: One Piece, Two Targets",
    hook: "Why attack one thing when you can attack two? The opponent can only save one.",
    funFact:
      "A knight fork that attacks the king and queen at once is sometimes called a 'royal fork'. A fork that hits king, queen and rook is a 'grand fork', and it's as satisfying as it sounds.",
    keyIdeas: [
      "A fork is a single move that attacks two or more enemy pieces at once.",
      "Knights are the classic forking piece because their L-shaped jump can't be blocked.",
      "Forks with check are especially deadly: the king must move, and the other piece falls.",
      "Look for loose (undefended) pieces and pieces on the same 'knight distance' from one square.",
    ],
    body: `## The simplest big idea in chess
A **fork** is a move that creates two threats at once. Your opponent has one move to answer, so unless they can parry both threats with a single reply, something falls. Any piece can fork, even a humble pawn stepping forward to attack two pieces diagonally, but the knight is the fork's poet laureate.

## Why knights love forks
A knight attacks up to eight squares in a pattern no other piece shares, and it **jumps**, so its attacks can't be blocked. Worse (for your opponent), a knight's attack on the enemy king can't be met by interposing a piece. When a knight lands on a square that checks the king *and* attacks the queen, that's a **royal fork**: the king must step away, and the knight eats the queen.

## How to spot one
Strong players don't find forks by staring harder. They look for **targets** first:

- Is the enemy king exposed, or on a square a knight could reach?
- Are any pieces **loose**, meaning undefended?
- Are two valuable pieces a "knight's jump" from the same empty square?

Then they ask: *can any of my pieces get to that square, even with check or a sacrifice first?*

## The checklist (say it like a chant)
Grandmasters and coaches often teach the **CCT** habit: before every move, look at **Checks, Captures and Threats**, for both sides. Forks almost always live among the checks.

## Try this
Set up a board, put a black king on g7 and a black queen on d8, and a white knight anywhere. How many moves does it take your knight to reach a square that hits both? (Hint: e6 is the magic square.) Then tackle the puzzle below; it's drawn live from the Lichess puzzle database, which contains millions of positions from real games.`,
    media: [
      wiki("Fork (chess)", "Definitions, famous examples and diagrams."),
      img("The Lewis Chessmen", "Lewis chessmen", "Twelfth-century chess pieces carved from walrus ivory, found on the Isle of Lewis in 1831."),
      vid("Forks explained", "chess fork tactics explained beginner", "Pick a friendly coach on YouTube and watch forks in action."),
    ],
    resources: [
      link("website", "Lichess Puzzles by Theme", "Lichess.org", "", "Free, open-source and ad-free: drill forks, pins, mates and more by theme.", "https://lichess.org/training/themes"),
      book("Winning Chess Tactics", "Yasser Seirawan", "1995", "A friendly, well-organised introduction to every major tactic by a former US champion."),
    ],
    activities: [
      act({ id: "sc-a1", type: "chess", title: "Fork It Over", prompt: "Find the fork. Drag your piece to make the winning move.", chessTheme: "fork" }),
      act({
        id: "sc-a1b",
        type: "quiz",
        title: "Fork Theory",
        prompt: "Quick check before you head back to the board.",
        questions: [
          { q: "What makes a knight fork hard to defend against?", options: ["Knights move twice", "Knight attacks can't be blocked", "Knights are worth more than rooks", "Knights can't be captured"], answer: 1, explain: "Knights jump, so the only defences are moving the targets or capturing the knight." },
          { q: "A 'royal fork' attacks which pieces?", options: ["Two rooks", "King and queen", "Queen and bishop", "All the pawns"], answer: 1, explain: "King and queen together: the king must move, and the queen is lost." },
          { q: "What does the CCT habit stand for?", options: ["Castle, Centre, Tempo", "Checks, Captures, Threats", "Calculate, Compare, Trade", "Control, Coordinate, Trap"], answer: 1, explain: "Before each move, scan checks, captures and threats for both sides." },
        ],
      }),
    ],
  },
  {
    id: "sc-l2",
    title: "Pins & Skewers: Death by Straight Lines",
    hook: "Bishops, rooks and queens see along lines. Line two enemy pieces up and the trouble begins.",
    funFact:
      "A pin against the king is called an 'absolute pin', because moving the pinned piece would be illegal. Against anything else it's merely a 'relative pin', and sometimes breaking it is the brilliant move.",
    keyIdeas: [
      "A pin attacks a piece that can't (or shouldn't) move because a more valuable piece sits behind it.",
      "A skewer is the reverse: the more valuable piece is in front, and when it moves, the piece behind is captured.",
      "Only long-range pieces (bishops, rooks, queens) can pin or skewer.",
      "Pinned pieces are bad defenders: 'pile up' on them with more attackers.",
    ],
    body: `## Lines of force
Bishops, rooks and queens are **line pieces**: they project power along diagonals, ranks and files. When two enemy pieces stand on the same line, a line piece can exploit them both.

## The pin
In a **pin**, the piece in front is less valuable than the piece behind. If it moves, the piece behind is exposed.

- **Absolute pin**: the piece behind is the king, so the pinned piece literally *cannot* move.
- **Relative pin**: the piece behind is valuable (say, a queen), so moving would be costly, but legal.

A classic opening example: a white bishop on g5 pinning a black knight on f6 to the queen on d8. The pinned knight can't defend properly, so the attacker's next idea is often to **pile up**, attacking the pinned piece again with a pawn or another piece.

## The skewer
A **skewer** is a pin turned inside out. Now the *more* valuable piece stands in front. You attack it, it has to move, and you capture whatever was hiding behind it. Skewers against the king, with check, are the most brutal of all: the king must step aside, and the queen or rook behind is gone.

## Spotting them
Train your eyes to notice **alignments**: two enemy pieces on the same rank, file or diagonal, with nothing (or only something you can remove) between them. Then ask: *can one of my line pieces get onto that line?*

## Try this
Set up a black king on c6 and a black queen on h6, both on the sixth rank. Where does a white rook need to go to skewer them? Then solve the puzzle below.`,
    media: [
      wiki("Pin (chess)"),
      wiki("Skewer (chess)"),
      img("Staunton chess set", "Staunton chess pieces", "The standard design since 1849, named after the English champion Howard Staunton."),
    ],
    resources: [
      book("Bobby Fischer Teaches Chess", "Bobby Fischer, Stuart Margulies & Donn Mosenfelder", "1966", "A programmed-learning classic: hundreds of bite-size positions on mates and tactics."),
      book("1001 Chess Exercises for Beginners", "Franco Masetti & Roberto Messa", "2012", "Exercises grouped by theme, perfect for daily drilling."),
    ],
    activities: [
      act({ id: "sc-a2", type: "chess", title: "Pinned!", prompt: "Exploit the pin. Find the strongest continuation.", chessTheme: "pin" }),
      act({
        id: "sc-a2b",
        type: "flashcards",
        title: "Tactic Terms",
        prompt: "The vocabulary every tactician should know cold.",
        cards: [
          { front: "Absolute pin", back: "A pin against the king: the pinned piece cannot legally move." },
          { front: "Relative pin", back: "A pin against a valuable piece other than the king: moving is legal but costly." },
          { front: "Skewer", back: "Attack a valuable piece that must move, then capture the piece behind it." },
          { front: "Fork", back: "One move that attacks two or more targets." },
          { front: "Discovered attack", back: "Move one piece out of the way to unleash an attack from another behind it." },
          { front: "Loose piece", back: "An undefended piece: the most common tactical target." },
        ],
      }),
    ],
  },
  {
    id: "sc-l3",
    title: "Mating Patterns: The Final Flourish",
    hook: "Checkmate isn't magic. It's a handful of patterns, and you can learn them all.",
    funFact:
      "The 'smothered mate', where a knight checkmates a king hemmed in by its own pieces, is sometimes called Philidor's Legacy, though it was already described by Luis Ramírez de Lucena around 1497.",
    keyIdeas: [
      "Most checkmates follow recognisable patterns: back rank, smothered, ladder, and more.",
      "The back-rank mate exploits a king trapped behind its own unmoved pawns.",
      "A smothered mate happens when a king's own pieces block every escape square.",
      "Making 'luft' (a pawn move to give your king air) prevents back-rank disasters.",
    ],
    body: `## Patterns, not miracles
Strong players don't calculate every checkmate from scratch. They **recognise** shapes they've seen hundreds of times. Learn the shapes and you'll start seeing mates that used to be invisible.

## The back-rank mate
A king castled behind three unmoved pawns looks cosy, until an enemy rook or queen lands on the back rank. The pawns that sheltered the king now trap it. The defence is simple and worth making a habit: at a quiet moment, push one of those pawns a square to give the king **luft** ("air" in German).

## The smothered mate
The most beautiful of the basic mates. The king is surrounded by its **own** pieces, so a single knight check is enough, since knight checks can't be blocked. Classically, a king on h8 with a rook on g8 and pawns on g7 and h7 is mated by a knight landing on f7.

## The ladder mate
Two rooks (or a rook and queen) take turns checking the king along the ranks, pushing it to the edge like climbing down a ladder rung by rung. It's the first mate many beginners learn, and it's a lovely illustration of **cooperation** between pieces.

## Scholar's mate (and how not to fall for it)
Queen and bishop both aiming at **f7**, the weakest square in Black's opening position because only the king defends it. It works against beginners and fails against anyone who knows to watch f7. Know it so it never happens to you.

## Try this
Set up each pattern on a real board from memory. If you can rebuild them without looking, they're yours forever.`,
    media: [
      wiki("Back-rank checkmate"),
      wiki("Smothered mate"),
      img("Chess in the Middle Ages", "medieval chess miniature manuscript", "Chess has been played in Europe for about a thousand years."),
    ],
    resources: [
      book("Logical Chess: Move by Move", "Irving Chernev", "1957", "Every single move of 33 master games explained in plain English."),
      book("The Woodpecker Method", "Axel Smith & Hans Tikkanen", "2018", "A training system for when you're ready to get serious about tactics."),
      link("website", "Lichess Puzzle Training", "Lichess.org", "", "Endless rated puzzles that adapt to your level.", "https://lichess.org/training"),
    ],
    activities: [
      act({ id: "sc-a3", type: "chess", title: "Mate in One", prompt: "Deliver checkmate in a single move.", chessTheme: "mateIn1" }),
      act({ id: "sc-a3b", type: "chess", title: "Back-Rank Blues", prompt: "Exploit the trapped king.", chessTheme: "backRankMate" }),
    ],
  },
];

const chessTopic: Topic = {
  id: "sample-chess",
  query: "Chess",
  title: "Chess",
  emoji: "♟️",
  blurb:
    "Sixty-four squares, thirty-two pieces, and more possible games than atoms in the observable universe. Chess rewards curiosity, pattern-spotting and nerve, at every level.",
  createdAt: 0,
  sample: true,
  options: [
    { id: "sc-o1", courseId: CHESS_COURSE_ID, title: "Tactics Dojo", tagline: "Forks, pins, skewers and mates, drilled on real puzzles.", emoji: "🥋", vibe: "hands-on training", level: "Dabbler", hook: "You'll start spotting the tactics that decide most amateur games, with live puzzles from the Lichess database.", lessonCount: 3, hours: 3, color: "grape" },
    { id: "sc-o2", title: "The Immortal Games", tagline: "Ten masterpieces from Anderssen to Carlsen.", emoji: "🏆", vibe: "storytelling", level: "Devotee", hook: "Replay the most beautiful games ever played and learn what made them sing.", lessonCount: 6, hours: 6, color: "sun" },
    { id: "sc-o3", title: "Openings Without Memorising", tagline: "Principles over parrot-learning.", emoji: "🚪", vibe: "first principles", level: "Dabbler", hook: "Play confident first moves in any opening by understanding the why, not the what.", lessonCount: 5, hours: 4, color: "mint" },
    { id: "sc-o4", title: "Endgame Alchemy", tagline: "Turn tiny advantages into gold.", emoji: "⚗️", vibe: "deep practice", level: "Deep Diver", hook: "Master king activity, opposition and the rook endings that decide tournament games.", lessonCount: 6, hours: 8, color: "sky" },
    { id: "sc-o5", title: "Chess Through History", tagline: "From chaturanga to Deep Blue.", emoji: "📜", vibe: "history through objects", level: "Dabbler", hook: "Trace the game from 6th-century India to the computer age, one artefact at a time.", lessonCount: 5, hours: 4, color: "tomato" },
    { id: "sc-o6", title: "The Mind of a Grandmaster", tagline: "How strong players actually think.", emoji: "🧠", vibe: "psychology lab", level: "Devotee", hook: "Calculation, intuition and nerves: what science and champions say about chess thinking.", lessonCount: 5, hours: 5, color: "bubblegum" },
  ],
};

const chessCourse: Course = {
  id: CHESS_COURSE_ID,
  topicId: chessTopic.id,
  optionId: "sc-o1",
  color: "grape",
  createdAt: 0,
  title: "Tactics Dojo",
  tagline: "Forks, pins, skewers and mates, drilled on real puzzles.",
  emoji: "🥋",
  guideName: "Sensei Rookwell, the Undefeated Teapot",
  guideIntro:
    "I have never lost a game, mostly because I am a teapot. But I have watched ten thousand players at my café table, and I know which patterns win. Bow to the board, and let us begin.",
  overview: `Most games between club players aren't decided by deep strategy; they're decided by **tactics**: a fork nobody noticed, a pinned piece that couldn't defend, a back rank left without air.

In three lessons you'll learn the essential patterns and then **drill them on live puzzles from the Lichess database**, positions from real games played by real people. Each puzzle is rated; solve them, earn XP, and feel your board vision sharpen.`,
  capstone:
    "Play five games online (Lichess is free). After each, run the computer analysis and find one tactic you missed or found. Write a two-line note for each: the pattern, and how you'll spot it next time.",
  sourcesChecked: 0,
  lessons: chessLessons,
  library: [
    book("Bobby Fischer Teaches Chess", "Bobby Fischer, Stuart Margulies & Donn Mosenfelder", "1966", "The best-selling chess book of all time, for good reason."),
    book("Winning Chess Tactics", "Yasser Seirawan", "1995", "Clear, warm, systematic."),
    book("1001 Chess Exercises for Beginners", "Franco Masetti & Roberto Messa", "2012", "Daily drill material."),
    book("Logical Chess: Move by Move", "Irving Chernev", "1957", "Learn to think like a master, move by move."),
    link("website", "Lichess Puzzle Themes", "Lichess.org", "", "Train any tactic you like, free forever.", "https://lichess.org/training/themes"),
    find("video", "Chess tactics for beginners", "YouTube coaches", "", "A search for friendly video lessons."),
  ],
};

export const SAMPLE_TOPICS: Topic[] = [gothicTopic, chessTopic];
export const SAMPLE_COURSES: Course[] = [gothicCourse, chessCourse];

export const SUGGESTIONS = [
  "Romantic Poetry", "African History", "Gothic Architecture", "Jazz Harmony", "Mycology", "The Silk Road",
  "Greek Tragedy", "Black Holes", "Japanese Woodblock Prints", "Chess", "Byzantine Empire", "Bird Song",
  "The Harlem Renaissance", "Origami", "Ancient Egyptian Religion", "Film Noir", "Sourdough Science",
  "Medieval Islamic Science", "Impressionism", "Typography", "The Classics", "Volcanoes", "Haiku", "Stoicism",
];
