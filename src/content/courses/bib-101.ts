import type { CourseContent } from "@/lib/schema";

const hayes = (n: number) => `https://oyc.yale.edu/religious-studies/rlst-145/lecture-${n}`;
const passage = (ref: string) => `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=NRSVUE`;

export const bib101: CourseContent = {
  overview: `The Hebrew Bible—the Tanakh of Judaism and the Old Testament of Christianity—is not a single book but a library: law and narrative, poetry and prophecy, proverbs and laments, composed and gathered over perhaps a thousand years. No collection of writings has shaped more of the world's moral imagination, its law, its art, and its idea of history.

This course reads the Hebrew Bible closely and in context. We set it beside the literature of the ancient Near East from which it emerged and against which it often argued; we examine how modern scholars understand its composition; and we read its narratives and poems as literature of extraordinary subtlety. Our guide throughout is Professor Christine Hayes of Yale, whose recorded lectures and textbook accompany each lesson. Students of every faith and of none are welcome: the aim is understanding.`,
  objectives: [
    "Describe the structure of the Hebrew Bible and how the Jewish and Christian canons differ.",
    "Compare Genesis 1–11 with Mesopotamian creation and flood literature, and explain what is distinctive in the biblical account.",
    "Explain the evidence for the Documentary Hypothesis and the major sources of the Pentateuch.",
    "Interpret the patriarchal and Exodus narratives, with attention to covenant and literary art.",
    "Characterize the classical prophets and the wisdom literature, and their responses to history and suffering.",
  ],
  lessons: [
    {
      title: "The Parts of the Whole",
      summary: "What the Hebrew Bible is, how it is arranged, and how to study it.",
      lecture: `## A library, not a book

The word *Bible* comes from the Greek *ta biblia*, "the books"—a plural. The Hebrew Bible is an anthology of twenty-four books (in the Jewish count) written by many authors, in different genres, across many centuries, and gathered into a **canon**, an authoritative collection, only gradually.

Jewish tradition calls it the **Tanakh**, an acronym of its three divisions:

| Division | Hebrew | Contents |
|---|---|---|
| **T**orah | "Instruction" | Genesis, Exodus, Leviticus, Numbers, Deuteronomy |
| **N**evi'im | "Prophets" | Former Prophets (Joshua–Kings) and Latter Prophets (Isaiah, Jeremiah, Ezekiel, and the Twelve) |
| **K**etuvim | "Writings" | Psalms, Proverbs, Job, the Five Scrolls, Daniel, Ezra–Nehemiah, Chronicles |

The **Christian Old Testament** contains the same books in the Protestant canon, but arranged in a different order—law, history, poetry, prophets—so that it ends with Malachi's prophecy of Elijah's return, pointing toward the New Testament. Catholic and Orthodox Bibles also include books preserved in the ancient Greek translation (the **Septuagint**), such as Tobit, Judith, and the Wisdom of Solomon.

## Languages and dates

The Hebrew Bible is written in **Hebrew**, with portions of Daniel and Ezra in **Aramaic**. Its oldest poems, such as the Song of Deborah (Judges 5), may date to the twelfth or eleventh century BCE; its latest book, Daniel, reached its final form around 165 BCE. Much of it was edited and collected during and after the **Babylonian Exile** (586–539 BCE), a catastrophe that shaped the entire collection.

## Misconceptions to set aside

Professor Hayes begins her course by setting aside several common assumptions. The Bible is not a single unified book; it does not speak with one voice; it was not written by a single author; and it is not, for the most part, a book of abstract theology. It is an argument conducted over centuries—a record of a people's attempts to understand their God, their history, and themselves, preserved with its tensions and disagreements intact.

## How we will read

We will use three approaches, each with its own questions:

1. **Historical-critical**: When, where, and why was this text written? What sources lie behind it?
2. **Comparative**: How does it compare with other ancient Near Eastern texts?
3. **Literary**: How does the text work as narrative or poetry? What do its repetitions, silences, and patterns mean?

These approaches are compatible with belief and with unbelief alike. Read the text slowly and closely, as you would any great literature—and keep a good annotated Bible at your side.`,
      readings: [
        { kind: "book", title: "Introduction to the Bible", author: "Christine Hayes", publisher: "Yale University Press", year: "2012", note: "The opening chapters, on the structure of the Bible and its ancient Near Eastern setting." },
        { kind: "book", title: "The New Oxford Annotated Bible with Apocrypha (NRSV)", author: "Michael D. Coogan et al., eds.", publisher: "Oxford University Press", year: "5th ed., 2018", note: "Read the general introductions to the Hebrew Bible and to the Torah. This is the course's recommended study Bible." },
      ],
      media: [
        { kind: "lecture", title: "Lecture 1: The Parts of the Whole", author: "Christine Hayes", publisher: "Open Yale Courses, RLST 145", url: hayes(1), note: "The opening lecture of Hayes's Yale course. Video, audio, and transcript." },
      ],
      questions: [
        {
          prompt: "What are the three divisions of the Tanakh?",
          choices: ["Law, Gospels, Letters", "Torah, Nevi'im, Ketuvim", "Genesis, Exodus, Deuteronomy", "History, Poetry, Apocalypse"],
          answer: 1,
          explanation: "Torah (Instruction), Nevi'im (Prophets), and Ketuvim (Writings) give the acronym TaNaKh.",
        },
        {
          prompt: "How does the Protestant Old Testament differ from the Tanakh?",
          choices: ["It contains entirely different books", "It contains the same books in a different order, ending with Malachi", "It omits the Torah", "It is written in Latin"],
          answer: 1,
          explanation: "The books are the same, but the arrangement differs, ending with a prophecy that points toward the New Testament.",
        },
        {
          prompt: "Besides Hebrew, parts of which books are written in Aramaic?",
          choices: ["Genesis and Exodus", "Daniel and Ezra", "Psalms and Proverbs", "Isaiah and Jeremiah"],
          answer: 1,
          explanation: "Substantial portions of Daniel and Ezra are in Aramaic.",
        },
        {
          prompt: "Which event, in the sixth century BCE, profoundly shaped the editing of the Hebrew Bible?",
          choices: ["The Exodus", "The Babylonian Exile", "The conquest of Alexander", "The destruction of the Second Temple"],
          answer: 1,
          explanation: "The destruction of Jerusalem in 586 BCE and the exile in Babylon prompted much of the collection and editing of Israel's traditions.",
        },
      ],
      reflection: "Look at the table of contents of a Jewish Bible (e.g., the JPS Tanakh) and a Christian Old Testament. What does each arrangement suggest about how the collection should be read?",
    },
    {
      title: "In the Beginning: Genesis 1–11 in Its World",
      summary: "The two creation stories and the flood, set beside Mesopotamian myth.",
      lecture: `## The world of the ancient Near East

Israel was a small people among great civilizations—Egypt to the southwest, Mesopotamia to the east—whose literature was old long before the Bible was written. In the nineteenth century, archaeologists recovered thousands of cuneiform tablets from Mesopotamia, among them stories of creation and of a great flood strikingly similar to those in Genesis. These discoveries transformed biblical study: we can now see what the biblical writers shared with their neighbors, and where they departed from them.

## Enuma Elish and Genesis 1

The Babylonian creation epic ***Enuma Elish*** ("When on high…") tells how the god Marduk defeated Tiamat, the goddess of the salt sea, split her corpse in two, and made heaven and earth from the halves. Humanity was created from the blood of a rebel god to do the work of the gods so that they could rest.

Genesis 1 shares elements with this story: a primeval watery deep (*tehom* in Hebrew, a word related to *Tiamat*), the separation of waters above and below, and the creation of humanity. But the differences are profound:

> In the beginning when God created the heavens and the earth, the earth was a formless void and darkness covered the face of the deep, while a wind from God swept over the face of the waters. Then God said, "Let there be light"; and there was light.
> — Genesis 1:1–3 (NRSV)

There is no battle, no rival deity, no theogony. God creates by **word**. The sun and moon, worshiped as gods elsewhere, are merely "lights" set in the sky. And humanity is created not as slave labor but "in the image of God," blessed and given dominion. The seven-day structure culminates in the Sabbath—rest for God, and later for all, including slaves.

## Two creation stories

Read on into Genesis 2, and the account begins again. In **Genesis 2:4b–3:24** the order is different—man is formed first, from the dust, then the plants, the animals, and finally the woman from his side. The style changes from the stately, repetitive prose of Genesis 1 to vivid storytelling, and the divine name changes from **Elohim** ("God") to **YHWH Elohim** ("the LORD God"). God here is close and almost human: he molds, breathes, plants a garden, walks in it "at the time of the evening breeze."

Ancient readers harmonized the two accounts; modern scholars generally see two originally separate traditions placed side by side by an editor. We will examine the theory behind this in the next lesson.

## The flood

The Mesopotamian **Atrahasis** epic and Tablet XI of the **Epic of Gilgamesh** tell of a flood sent by the gods, a hero warned to build a boat, animals saved, and birds sent out to find dry land. The parallels with Noah are unmistakable. Yet again the differences reveal the biblical outlook. In Atrahasis, the gods send the flood because humans are too **noisy** and disturb their sleep; in Genesis, God sends it because "the earth was filled with violence" (Genesis 6:11)—a **moral** cause. And the story ends with a covenant: God promises never again to destroy the earth, and sets the rainbow as a sign.

## The meaning of comparison

Comparison does not reduce the Bible to borrowed myth. It shows biblical writers taking the shared stories of their world and **transforming** them to express a radically different idea: one God, sovereign and good, whose creation is orderly and whose concern is justice.`,
      readings: [
        { kind: "website", title: "Genesis 1–11", publisher: "Bible Gateway (NRSV Updated Edition)", url: passage("Genesis 1-11"), note: "Read slowly, noting where one creation account ends and another begins (2:4)." },
        { kind: "book", title: "Myths from Mesopotamia: Creation, the Flood, Gilgamesh, and Others", author: "Stephanie Dalley, trans.", publisher: "Oxford World's Classics", year: "1989; rev. 2000", note: "Read Atrahasis and Enuma Elish Tablets I–IV." },
        { kind: "book", title: "Introduction to the Bible", author: "Christine Hayes", publisher: "Yale University Press", year: "2012", note: "The chapters on Genesis 1–11 and its ancient Near Eastern parallels." },
      ],
      media: [
        { kind: "lecture", title: "Lecture 2: The Hebrew Bible in Its Ancient Near Eastern Setting: Biblical Religion in Context", author: "Christine Hayes", publisher: "Open Yale Courses, RLST 145", url: hayes(2) },
        { kind: "lecture", title: "Lecture 3: The Hebrew Bible in Its Ancient Near Eastern Setting: Genesis 1–4 in Context", author: "Christine Hayes", publisher: "Open Yale Courses, RLST 145", url: hayes(3), note: "Compares biblical monotheism with Near Eastern texts and examines the two creation stories." },
      ],
      questions: [
        {
          prompt: "In Enuma Elish, how is the world created?",
          choices: ["By a divine word", "From the body of the defeated goddess Tiamat, split in two by Marduk", "From a cosmic egg", "It has always existed"],
          answer: 1,
          explanation: "Creation follows a battle among gods; Genesis 1, by contrast, has no rival deity and creation by word.",
        },
        {
          prompt: "How does Genesis 1 treat the sun and moon?",
          choices: ["As gods to be honored", "As mere “lights” created by God", "As the first beings created", "It does not mention them"],
          answer: 1,
          explanation: "Celestial bodies widely worshiped in the ancient world are demoted to created lamps.",
        },
        {
          prompt: "Which change marks the beginning of the second creation account at Genesis 2:4b?",
          choices: ["It switches to poetry", "The divine name changes to YHWH Elohim and the order of creation differs", "It is written in Aramaic", "It is told by Adam"],
          answer: 1,
          explanation: "The style, the order of creation, and the divine name all shift, suggesting a separate tradition.",
        },
        {
          prompt: "Why do the gods send the flood in Atrahasis, and why does God send it in Genesis?",
          choices: ["Both for human violence", "In Atrahasis because humans are too noisy; in Genesis because of violence and corruption", "Both because of noise", "Neither gives a reason"],
          answer: 1,
          explanation: "The biblical version gives the flood a moral cause, and ends in a covenant.",
        },
      ],
      reflection: "Read Genesis 1:1–2:4a and 2:4b–3:24 one after the other. List three differences in style, order, or picture of God, and suggest what each account emphasizes about human beings.",
    },
    {
      title: "Who Wrote the Torah?",
      summary: "Doublets, contradictions, and the Documentary Hypothesis.",
      lecture: `## A question with a history

Jewish and Christian tradition long held that Moses wrote the five books of the Torah. But careful readers—medieval rabbis like Abraham ibn Ezra, and later philosophers like Thomas Hobbes and Baruch Spinoza—noticed problems. How could Moses describe his own death and burial (Deuteronomy 34)? Why does Genesis say "the Canaanites were then in the land" (12:6), as if from a later time when they were no longer there?

## Doublets and contradictions

The strongest evidence lies in the text's **doublets**—stories told twice—and its internal contradictions.

- There are **two creation accounts** with different orders of creation.
- In the **flood**, Noah is told to bring one pair of every animal (Genesis 6:19), but also seven pairs of clean animals (7:2). The flood lasts forty days (7:17), but the waters prevail for 150 days (7:24).
- Abraham twice passes off his wife as his sister (Genesis 12 and 20), and Isaac does the same (Genesis 26).
- God's name YHWH is revealed to Moses as something new in Exodus 6:3—yet characters in Genesis already call on it.

When scholars separated the parallel strands, they found that each strand was largely continuous and consistent in style, vocabulary, and theology.

## The Documentary Hypothesis

In its classic form, articulated by **Julius Wellhausen** in his *Prolegomena to the History of Israel* (1878), the **Documentary Hypothesis** identifies four sources:

| Source | Name and features | Traditional date |
|---|---|---|
| **J** | the "Yahwist"; uses YHWH from the beginning; vivid, anthropomorphic God; associated with Judah | c. 10th–9th c. BCE |
| **E** | the "Elohist"; uses Elohim before Exodus 3; prophets, dreams, fear of God; associated with northern Israel | c. 9th–8th c. BCE |
| **D** | the Deuteronomist; the book of Deuteronomy; centralized worship, covenant obedience | 7th c. BCE |
| **P** | the Priestly source; genealogies, ritual, the transcendent God of Genesis 1 | 6th–5th c. BCE |

The connection of **D** with history is especially striking. 2 Kings 22 describes how, in 622 BCE, a "book of the law" was found in the Temple during the reign of King Josiah, who then centralized worship in Jerusalem. Many scholars identify this book with an early form of Deuteronomy.

## Revisions and alternatives

Wellhausen's dates and the very existence of E are now debated; some scholars prefer to speak of fragments or supplements rather than continuous documents. But the basic insight that the Torah combines several distinct traditions remains widely accepted.

Other readers urge a complementary approach. The literary critic **Robert Alter** argues that, whatever its sources, the Bible must be read as the editors left it: they combined traditions not carelessly but artfully, and apparent contradictions can create meaning—two creation stories offering two views of what it is to be human. Professor Hayes holds both perspectives together: the text is composite, and the composite text is itself a work of deliberate art.`,
      readings: [
        { kind: "book", title: "Who Wrote the Bible?", author: "Richard Elliott Friedman", publisher: "Summit Books", year: "1987", note: "A lucid, widely read account of the Documentary Hypothesis and its historical settings. Read chapters 1–5." },
        { kind: "website", title: "Genesis 6–9 (the Flood)", publisher: "Bible Gateway (NRSV Updated Edition)", url: passage("Genesis 6-9"), note: "Find the two counts of animals and the two durations of the flood." },
        { kind: "book", title: "The Art of Biblical Narrative", author: "Robert Alter", publisher: "Basic Books", year: "1981; rev. ed. 2011", note: "Chapter 7, “Composite Artistry.”" },
      ],
      media: [
        { kind: "lecture", title: "Lecture 4: Doublets and Contradictions, Seams and Sources: Genesis 5–11 and the Historical-Critical Method", author: "Christine Hayes", publisher: "Open Yale Courses, RLST 145", url: hayes(4), note: "Uses the flood story's contradictions to explain the composition of the Pentateuch." },
        { kind: "lecture", title: "Lecture 5: Critical Approaches to the Bible: Introduction to Genesis 12–50", author: "Christine Hayes", publisher: "Open Yale Courses, RLST 145", url: hayes(5) },
      ],
      questions: [
        {
          prompt: "Which observation was an early reason to doubt that Moses wrote the entire Torah?",
          choices: ["The Torah is written in Greek", "Deuteronomy describes Moses' death and burial", "Moses is never mentioned", "The Torah mentions Rome"],
          answer: 1,
          explanation: "Deuteronomy 34 narrates Moses' death, which readers since medieval times found difficult to attribute to Moses himself.",
        },
        {
          prompt: "What is a “doublet”?",
          choices: ["A pair of twins in Genesis", "A story told twice in different versions", "A Hebrew poetic meter", "A translation into two languages"],
          answer: 1,
          explanation: "Doublets—like the two creation accounts or the repeated wife-sister stories—suggest multiple sources.",
        },
        {
          prompt: "Which source is associated with Genesis 1, genealogies, and ritual law?",
          choices: ["J", "E", "D", "P"],
          answer: 3,
          explanation: "The Priestly source (P) is concerned with order, ritual, and genealogy; its transcendent God speaks the world into being.",
        },
        {
          prompt: "The “book of the law” found in the Temple under King Josiah (2 Kings 22) is often identified with:",
          choices: ["Genesis", "An early form of Deuteronomy", "The Psalms", "The book of Daniel"],
          answer: 1,
          explanation: "Josiah's reforms, especially centralization of worship, match the program of Deuteronomy.",
        },
        {
          prompt: "Robert Alter's response to source criticism emphasizes that:",
          choices: ["The sources should be printed separately", "The final, edited text is a work of “composite artistry” to be read as a whole", "There were no sources", "Only J is worth reading"],
          answer: 1,
          explanation: "Alter argues that the editors combined traditions artfully, creating meaning through juxtaposition.",
        },
      ],
      reflection: "Separate the flood story (Genesis 6–9) into two strands using the clues in the lecture. Does each strand read as a complete story?",
    },
    {
      title: "Ancestors and Exodus",
      summary: "The covenant with Abraham, the binding of Isaac, and the God who brings Israel out of Egypt.",
      lecture: `## The call of Abraham

With Genesis 12 the Bible narrows its focus from all humanity to one family. God speaks to Abram in Haran:

> Go from your country and your kindred and your father's house to the land that I will show you. I will make of you a great nation, and I will bless you… and in you all the families of the earth shall be blessed.
> — Genesis 12:1–3 (NRSV)

This promise—of land, descendants, and blessing—is the thread that runs through the stories of the **patriarchs and matriarchs**: Abraham and Sarah, Isaac and Rebekah, Jacob, Leah, and Rachel. It is formalized as a **covenant** (Hebrew *berit*), a binding agreement between God and Abraham's family. Again and again the promise is endangered—by barrenness, by famine, by rivalry between brothers—and again and again preserved.

## The binding of Isaac

The most famous and most troubling of these stories is Genesis 22, called in Jewish tradition the **Akedah**, "the binding." God commands Abraham to offer his son Isaac as a sacrifice; Abraham obeys, and at the last moment an angel stops his hand.

In a celebrated essay, "Odysseus' Scar," the critic **Erich Auerbach** compared this story with a scene from Homer's *Odyssey*. Homer, he observed, illuminates everything: every object and motive is described, nothing is left in shadow. Genesis 22 is the opposite. We are told almost nothing—not what Abraham feels, not what Isaac knows, not why God commands it. The silence is the point. The story is, in Auerbach's phrase, "fraught with background," demanding interpretation. Its terse dialogue—"Here I am"; "God himself will provide the lamb"—has provoked commentary from the rabbis to Kierkegaard's *Fear and Trembling*.

## Joseph and the descent into Egypt

Jacob's favorite son Joseph is sold by his jealous brothers into slavery in Egypt, rises to power, and finally saves his family from famine. The **Joseph novella** (Genesis 37–50) is the most sustained piece of narrative art in Genesis, and it brings the family to Egypt, where the Exodus will begin.

## Moses and the burning bush

Generations later, a new Pharaoh enslaves the Israelites. Moses, raised in Pharaoh's court and then a fugitive, sees a bush that burns but is not consumed. God sends him to free the people, and Moses asks God's name. The answer is enigmatic:

> God said to Moses, "I AM WHO I AM."
> — Exodus 3:14 (NRSV)

In Hebrew, *ehyeh asher ehyeh*—"I am who I am," or "I will be who I will be." The name **YHWH** is related to the verb "to be."

## Exodus and covenant

After the plagues and the crossing of the sea, Israel comes to **Mount Sinai**. There God makes a covenant with the whole people, and gives the **Ten Commandments** and a body of law. The covenant takes a form scholars have compared to ancient Near Eastern treaties between a great king and a vassal: a historical prologue—"I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery" (Exodus 20:2)—followed by stipulations, and blessings and curses.

The Exodus became the central story of Israel's identity, retold at Passover every year, and later a story of liberation for many peoples—not least enslaved Africans in America, who sang "Go down, Moses."`,
      readings: [
        { kind: "website", title: "Genesis 12, 22, and 37–50; Exodus 1–4, 19–20", publisher: "Bible Gateway (NRSV Updated Edition)", url: passage("Genesis 12; Genesis 22; Exodus 3; Exodus 19-20"), note: "Read Genesis 22 twice—once quickly, once noting every detail the narrator withholds." },
        { kind: "book", title: "Mimesis: The Representation of Reality in Western Literature", author: "Erich Auerbach, trans. Willard R. Trask", publisher: "Princeton University Press", year: "1953", note: "Chapter 1, “Odysseus' Scar.” One of the great essays of literary criticism." },
        { kind: "book", title: "Fear and Trembling", author: "Søren Kierkegaard, trans. Alastair Hannay", publisher: "Penguin Classics", year: "1985", note: "Optional: the “Attunement” (prelude) retelling Genesis 22 four ways." },
      ],
      media: [
        { kind: "lecture", title: "Lecture 7: Israel in Egypt: Moses and the Beginning of Yahwism (Genesis 37–Exodus 4)", author: "Christine Hayes", publisher: "Open Yale Courses, RLST 145", url: hayes(7) },
        { kind: "website", title: "Sefaria: Genesis 22 with Commentaries", publisher: "Sefaria", url: "https://www.sefaria.org/Genesis.22", note: "The Hebrew text with English translation and classical Jewish commentaries (Rashi, Ibn Ezra, Ramban) linked verse by verse." },
      ],
      questions: [
        {
          prompt: "What three things does God promise Abraham in Genesis 12:1–3?",
          choices: ["Wealth, wisdom, long life", "Land, descendants (a great nation), and blessing", "A temple, a king, and a law", "Victory over Egypt"],
          answer: 1,
          explanation: "The promise of land, offspring, and blessing drives the ancestral narratives.",
        },
        {
          prompt: "What did Auerbach find distinctive in the narrative style of Genesis 22?",
          choices: ["Its detailed description of every object", "Its silences: thoughts and motives left unstated, “fraught with background”", "Its use of rhyme", "Its humor"],
          answer: 1,
          explanation: "Unlike Homer's fully illuminated scenes, the biblical narrative withholds, demanding interpretation.",
        },
        {
          prompt: "What answer does God give when Moses asks his name at the burning bush?",
          choices: ["“The Almighty”", "“I am who I am” (ehyeh asher ehyeh)", "“The God of Egypt”", "“Lord of Hosts”"],
          answer: 1,
          explanation: "Exodus 3:14; the name YHWH is related to the Hebrew verb “to be.”",
        },
        {
          prompt: "Scholars have compared the Sinai covenant's form to:",
          choices: ["Greek tragedy", "Ancient Near Eastern treaties between a great king and a vassal", "Roman law codes", "Egyptian love poetry"],
          answer: 1,
          explanation: "Like such treaties, it begins with a historical prologue, then gives stipulations, blessings, and curses.",
        },
      ],
      reflection: "Read Genesis 22 in full. Write a paragraph on one thing the narrator does not tell us, and how its absence shapes your reading.",
    },
    {
      title: "Prophets and Poets",
      summary: "The classical prophets' demand for justice, and the wisdom and poetry of the Writings.",
      lecture: `## The prophets

The Hebrew **navi**, "prophet," is not chiefly a predictor of the future but a **messenger**: one who speaks for God to the people, often against the king, the priests, and the comfortable. The classical or "literary" prophets, whose words were collected in books, began in the eighth century BCE, as the Assyrian Empire threatened both Israel in the north and Judah in the south.

## Amos and the demand for justice

**Amos**, a shepherd from Tekoa in Judah, preached in the prosperous northern kingdom around 760 BCE. He condemned those who "trample the head of the poor into the dust of the earth" (2:7) and declared that God despised ritual without justice:

> I hate, I despise your festivals, and I take no delight in your solemn assemblies…
> But let justice roll down like waters, and righteousness like an ever-flowing stream.
> — Amos 5:21, 24 (NRSV)

These words echo through history; Martin Luther King Jr. quoted them in Montgomery, in the "Letter from Birmingham Jail," and at the March on Washington.

## Isaiah, Jeremiah, and exile

**Isaiah of Jerusalem** (late eighth century) saw a vision of God enthroned in the Temple—"Holy, holy, holy is the LORD of hosts" (6:3)—and proclaimed both judgment and hope, including a vision of a day when nations "shall beat their swords into plowshares" (2:4). **Jeremiah** warned of Babylon's coming, lived through the destruction of Jerusalem in **586 BCE**, and wrote to the exiles in Babylon to "seek the welfare of the city" where they lived (29:7). The later chapters of Isaiah (40–55), from an anonymous prophet of the exile, open with comfort: "Comfort, O comfort my people, says your God" (40:1).

The prophets interpreted catastrophe not as the defeat of Israel's God but as judgment, and the exile not as the end but as a prelude to restoration. This interpretation allowed Israel's faith to survive the loss of land, king, and Temple.

## Prophetic consciousness

Abraham Joshua Heschel, in *The Prophets* (1962), argued that the prophet's fundamental experience is **sympathy with the divine pathos**: the prophet feels God's own concern for the oppressed, and so cannot be indifferent to injustices that others treat as ordinary.

## The Writings: poetry and wisdom

The third division of the Tanakh contains Israel's poetry and wisdom.

- The **Psalms** are 150 prayers and hymns of praise, thanksgiving, and lament. Biblical poetry is built not on rhyme or meter but on **parallelism**: a line followed by a second that echoes, intensifies, or answers it. "The heavens are telling the glory of God; / and the firmament proclaims his handiwork" (Psalm 19:1).
- **Proverbs** teaches practical wisdom, which "begins" with "the fear of the LORD" (1:7).
- **Job** questions that wisdom radically. A righteous man suffers terribly; his friends insist he must have sinned; Job protests his innocence and demands an answer from God. God answers from the whirlwind—"Where were you when I laid the foundation of the earth?" (38:4)—not with an explanation but with a vision of creation's vastness.
- **Ecclesiastes** (Qohelet) looks at life "under the sun" and finds it *hevel*—"vanity," or "breath," "vapor"—yet counsels the enjoyment of daily life as God's gift.

Together these books preserve not one answer to suffering and meaning, but an argument—which is perhaps the Hebrew Bible's deepest characteristic.`,
      readings: [
        { kind: "website", title: "Amos 5; Isaiah 6 and 40; Psalm 19; Job 38", publisher: "Bible Gateway (NRSV Updated Edition)", url: passage("Amos 5; Isaiah 6; Isaiah 40; Psalm 19; Job 38"), note: "Read each aloud, noticing the parallelism of the lines." },
        { kind: "book", title: "The Prophets", author: "Abraham Joshua Heschel", publisher: "Harper & Row", year: "1962", note: "Chapter 1, “What Manner of Man Is the Prophet?”" },
        { kind: "book", title: "The Art of Biblical Poetry", author: "Robert Alter", publisher: "Basic Books", year: "1985", note: "Chapter 1, “The Dynamics of Parallelism.”" },
      ],
      media: [
        { kind: "lecture", title: "Introduction to the Old Testament (full course)", author: "Christine Hayes", publisher: "Open Yale Courses, RLST 145", url: "https://oyc.yale.edu/religious-studies/rlst-145", note: "Continue with the lectures on the literary prophets, the Psalms, Job, and Ecclesiastes in the second half of the course." },
        { kind: "website", title: "Sefaria: Amos 5", publisher: "Sefaria", url: "https://www.sefaria.org/Amos.5", note: "Hebrew and English, with commentaries." },
      ],
      questions: [
        {
          prompt: "The Hebrew navi (prophet) is primarily:",
          choices: ["A fortune-teller", "A messenger who speaks God's word to the people", "A temple priest", "A king's scribe"],
          answer: 1,
          explanation: "Prophets were spokesmen for God, often challenging the powerful, rather than mere predictors.",
        },
        {
          prompt: "“Let justice roll down like waters, and righteousness like an ever-flowing stream” comes from:",
          choices: ["Isaiah", "Jeremiah", "Amos", "Psalms"],
          answer: 2,
          explanation: "Amos 5:24, part of his condemnation of worship without justice.",
        },
        {
          prompt: "What is the basic principle of biblical Hebrew poetry?",
          choices: ["Rhyme", "Iambic meter", "Parallelism between lines", "Alliteration"],
          answer: 2,
          explanation: "A line is followed by another that echoes, intensifies, or develops it.",
        },
        {
          prompt: "How does God answer Job from the whirlwind?",
          choices: ["By explaining exactly why Job suffered", "With questions revealing the vastness of creation, not a direct explanation", "By condemning Job as a sinner", "God does not answer"],
          answer: 1,
          explanation: "“Where were you when I laid the foundation of the earth?” God answers with a vision of creation rather than a theodicy.",
        },
        {
          prompt: "How did the prophets interpret the destruction of Jerusalem in 586 BCE?",
          choices: ["As the defeat of Israel's God by Babylon's gods", "As divine judgment, to be followed by restoration", "As a meaningless accident", "They did not address it"],
          answer: 1,
          explanation: "This interpretation allowed faith to survive the loss of land, king, and Temple.",
        },
      ],
      reflection: "Read Psalm 19 and Job 38. Write 300 words comparing how each speaks of creation and what it reveals about God.",
    },
  ],
  library: [
    {
      heading: "Bibles and Translations",
      items: [
        { kind: "book", title: "The New Oxford Annotated Bible with Apocrypha (NRSV)", author: "Michael D. Coogan et al., eds.", publisher: "Oxford University Press", year: "5th ed., 2018", note: "The standard academic study Bible." },
        { kind: "book", title: "The Jewish Study Bible", author: "Adele Berlin and Marc Zvi Brettler, eds.", publisher: "Oxford University Press", year: "2nd ed., 2014", note: "The JPS Tanakh translation with Jewish and critical annotations." },
        { kind: "book", title: "The Hebrew Bible: A Translation with Commentary", author: "Robert Alter", publisher: "W. W. Norton", year: "2018", note: "A literary translation of the entire Hebrew Bible in three volumes." },
        { kind: "website", title: "Sefaria", url: "https://www.sefaria.org", note: "Free Hebrew–English library of Jewish texts with linked commentaries." },
        { kind: "website", title: "Bible Gateway", url: "https://www.biblegateway.com", note: "Many English translations, searchable and side by side." },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "Introduction to the Bible", author: "Christine Hayes", publisher: "Yale University Press", year: "2012", note: "The companion volume to Hayes's Yale lectures." },
        { kind: "book", title: "How to Read the Bible: A Guide to Scripture, Then and Now", author: "James L. Kugel", publisher: "Free Press", year: "2007", note: "Sets ancient interpretations beside modern scholarship, book by book." },
        { kind: "book", title: "Who Wrote the Bible?", author: "Richard Elliott Friedman", publisher: "Summit Books", year: "1987" },
      ],
    },
    {
      heading: "Literature and Interpretation",
      items: [
        { kind: "book", title: "The Art of Biblical Narrative", author: "Robert Alter", publisher: "Basic Books", year: "1981" },
        { kind: "book", title: "The Art of Biblical Poetry", author: "Robert Alter", publisher: "Basic Books", year: "1985" },
        { kind: "book", title: "Mimesis", author: "Erich Auerbach, trans. Willard R. Trask", publisher: "Princeton University Press", year: "1953" },
        { kind: "book", title: "The Prophets", author: "Abraham Joshua Heschel", publisher: "Harper & Row", year: "1962" },
      ],
    },
    {
      heading: "The Ancient Near East",
      items: [
        { kind: "book", title: "Myths from Mesopotamia", author: "Stephanie Dalley, trans.", publisher: "Oxford World's Classics", year: "rev. ed., 2000", note: "Atrahasis, Enuma Elish, Gilgamesh, and other texts." },
        { kind: "book", title: "Ancient Near Eastern Texts Relating to the Old Testament", author: "James B. Pritchard, ed.", publisher: "Princeton University Press", year: "3rd ed., 1969", note: "The classic scholarly collection." },
      ],
    },
    {
      heading: "Listening and Viewing",
      items: [
        { kind: "lecture", title: "RLST 145: Introduction to the Old Testament (Hebrew Bible)", author: "Christine Hayes", publisher: "Open Yale Courses", url: "https://oyc.yale.edu/religious-studies/rlst-145", note: "Twenty-four lectures with video, audio, and transcripts." },
      ],
    },
  ],
};
