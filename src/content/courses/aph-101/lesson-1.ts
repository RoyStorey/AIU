import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "The First Philosophers: From Thales to Pythagoras",
  summary:
    "How Greek philosophy began on the coast of Ionia: the problem of fragments and the doxographers; Hesiod and the move from myth to argument; Thales, Anaximander, and Anaximenes on the stuff of the world; Xenophanes's attack on the gods of Homer; and Pythagoras and the order of number.",
  pages: [
    {
      title: "Who Were the Presocratics?",
      body: `## The beginning of philosophy

Western philosophy, by long tradition, began on a particular day: **May 28, 585 BCE**, when, according to Herodotus, an eclipse of the sun stopped a battle between the Lydians and the Medes, an eclipse that **Thales of Miletus** had predicted (Herodotus 1.74; the date is a modern calculation). The story is not a serious date for the birth of philosophy, and whether Thales could really have predicted an eclipse is doubtful. But it makes a point that the Greeks themselves made: that something new began in the early sixth century BCE, in the Greek cities of **Ionia**, on the west coast of what is now Turkey, when a few men began to explain the world not by stories about gods, but by reasoning about **nature**.

We call these thinkers, and those who followed them over the next century and a half, the **Presocratics**: the philosophers before **Socrates** (469–399 BCE). The name is a modern one, invented in the nineteenth century, and it is not quite accurate, since some of them, such as Democritus and the Sophists, were Socrates's contemporaries or outlived him. But it reflects a real division. The Presocratics were mostly concerned with **nature** (*physis*), with the origin and structure of the cosmos; Socrates, as Cicero put it, "was the first to call philosophy down from the heavens, to set it in cities, and to bring it even into homes, and to compel it to ask about life and morals, and good and evil things" (*Tusculan Disputations* 5.10, plain rendering). This course follows that story: the Presocratics in lessons 1–3, and Socrates in lessons 4–5.

## Who they were

The Presocratics were a scattered group. They came from every corner of the Greek world: from **Miletus**, **Ephesus**, **Samos**, and **Clazomenae** in Ionia; from **Elea** and **Croton** in southern Italy, and **Acragas** in Sicily; from **Abdera** in Thrace. Many of them traveled widely. They were not professional philosophers; the word *philosophos*, "lover of wisdom," was rare before the late fifth century. Some were statesmen, engineers, physicians, or poets. Several wrote in **verse**, in the hexameters of Homer; others in **prose**, which was itself a new medium for serious thought. They knew one another's ideas and argued with them, so that their history is a conversation, sometimes a quarrel, across generations.

## The problem of the fragments

The first thing to know about the Presocratics is that **almost none of their works survive**. Not a single complete book by any of them has come down to us. What we have are:

- **Fragments**: quotations of their actual words, sometimes a sentence or two, sometimes a long passage, preserved in the works of later writers, who quoted them for their own purposes, often centuries later. The longest come from writers such as **Sextus Empiricus** (second century CE), **Clement of Alexandria** (c. 150–215 CE), **Hippolytus of Rome** (third century CE), who quoted them to show that Christian heresies derived from pagan philosophy, and above all **Simplicius**, a Neoplatonist philosopher of the sixth century CE, who, in his commentaries on Aristotle, copied out long passages from Parmenides, Empedocles, and others, because, he said, their books had become rare.
- **Testimonia**: reports about what they said or believed, by later writers, especially **Aristotle** (384–322 BCE), who began several of his works with surveys of his predecessors' opinions, and his pupil **Theophrastus**, who wrote a history of the *Opinions of the Natural Philosophers* in sixteen books, now lost except for fragments, but which became the source of a long tradition of later summaries.
- **Biographical** traditions, especially in the *Lives of the Eminent Philosophers* of **Diogenes Laertius** (probably third century CE), an entertaining but unreliable collection of anecdotes, sayings, and lists.

The tradition of reports about philosophers' opinions, descending from Theophrastus, is called **doxography** (from Greek *doxa*, "opinion," and *graphein*, "to write"), a term coined by the German scholar **Hermann Diels**, who reconstructed it in his *Doxographi Graeci* of 1879.

## Diels-Kranz

In **1903**, Diels published *Die Fragmente der Vorsokratiker* (*The Fragments of the Presocratics*), a collection of all the known fragments and testimonia, with German translations, later revised by **Walther Kranz**. Its sixth edition (1951–1952) remains the standard reference, and scholars still cite the fragments by its numbers, called **Diels-Kranz** or **DK** numbers. Each thinker has a chapter number: Thales is 11, Anaximander 12, Heraclitus 22, Parmenides 28, Empedocles 31, Democritus 68. Within each chapter, the **A** section contains testimonia, and the **B** section fragments. So "DK 22B12" means Heraclitus, fragment 12. In this course, we will give these numbers so that you can find the passages in any edition.

## How to read a fragment

Reading the Presocratics is like reading an inscription on a broken stone: we must reconstruct the whole from pieces. Three cautions are necessary.

First, a fragment has been **chosen** by the writer who quoted it, for his own reasons, and torn from its context. We often do not know what came before or after it, or whether the quoter understood it.

Second, the **words** may not be exact. Ancient writers often quoted from memory, paraphrased, or adapted their sources to their arguments. Scholars debate whether particular words are the philosopher's or the quoter's.

Third, the **reports** of later writers are shaped by their own philosophies. Aristotle, our most important source, read his predecessors as early, imperfect attempts to discover his own four causes; he tells us that the early thinkers were looking for the **material cause** of things, "that of which all things consist, from which they first come to be, and into which they are finally destroyed" (*Metaphysics* 1.3, 983b8–11). This is illuminating, but it may distort what they meant.

The standard English collection, which you will use in this course, is *The Presocratic Philosophers* by **G. S. Kirk, J. E. Raven, and Malcolm Schofield** (second edition, 1983), known as **KRS**, which gives the Greek texts with translations and a commentary. The translations in this lesson are our own plain renderings.

> **Pause and consider.** Everything we know about the Presocratics comes in pieces, chosen and reported by later writers with their own purposes. How should this affect our confidence in interpreting them? Is a philosopher known only in fragments the same philosopher he was?`,
    },
    {
      title: "From Myth to Argument",
      body: `## Before philosophy

The Presocratics did not invent the question of how the world began. Every ancient culture had stories about the origin of the cosmos: the Babylonian *Enuma Elish*, in which the god Marduk splits the body of the sea monster Tiamat to form heaven and earth; the Egyptian accounts of creation from the primordial waters of Nun; and the opening of the Hebrew book of Genesis, "In the beginning God created the heaven and the earth" (Genesis 1:1, King James Version). The Greeks had their own stories, told above all by the poet **Hesiod**.

## Hesiod's Theogony

Hesiod, a farmer-poet from Boeotia in central Greece, composed the ***Theogony***, "the birth of the gods," around **700 BCE**. It is an account of the origins of the cosmos as a series of births and generations of gods:

> "First of all Chaos came to be; and then broad-breasted Earth, the ever-secure seat of all the immortals … and Eros, the most beautiful among the immortal gods. … From Chaos came Erebus and black Night; and from Night came Aether and Day." (Hesiod, *Theogony* 116–124, plain rendering)

The word **Chaos** did not mean disorder, as it does in English, but a **gap** or **yawning space**, perhaps the gap between earth and sky. Earth then bore **Ouranos**, the Sky, and from their union came the Titans. The story continues with the violent overthrow of Ouranos by his son **Kronos**, who castrated his father with a sickle, and of Kronos by his son **Zeus**, who established his rule over gods and men. The cosmos, in Hesiod, is the result of a family history, full of sex, violence, and succession, culminating in the just rule of Zeus.

## What changed?

What was new about the Milesians? They asked some of the same questions as Hesiod: What was there in the beginning? What is the world made of? How did it come to be as it is? But they answered them in a new way. Historians of philosophy have often described the change as a move from ***mythos*** to ***logos***, from myth to reason, though the phrase is too simple, since the Presocratics often spoke of gods and divine principles, and Hesiod's story already contains elements of order. Several differences can be identified:

**1. Natural causes.** The Milesians explained the world by **natural** principles and processes, such as water, air, condensation, and rarefaction, rather than by the personal actions of gods. Where Hesiod says that Earth gave birth to Sky, Anaximander says that a hot and a cold were separated off from the boundless.

**2. Unity.** They sought a **single** principle, or a small number of principles, that could explain the variety of the world. The Greek word they or their successors used for this was **archē**, "beginning" or "first principle," a word that meant both the origin of things and that which rules or governs them.

**3. Regularity.** They explained the world as governed by **regular**, impersonal processes that could be understood by reason, rather than by the will of gods who might act unpredictably.

**4. Criticism.** Most important, perhaps, their ideas were offered as **claims to be argued about**. Each Milesian proposed a different principle, and criticized his predecessors. Philosophy was, from the beginning, a tradition of critical debate. The philosopher **Karl Popper** argued in 1958, in an essay called "Back to the Presocratics," that what was most important about the Milesians was not their particular theories, but the invention of this "tradition of critical discussion," in which a teacher encouraged his pupils to criticize and improve his theories.

## Why Ionia?

Why did this happen in sixth-century Ionia? Historians have suggested several reasons. **Miletus** was one of the richest and most cosmopolitan cities of the Greek world, a great trading port, the mother city of dozens of colonies around the Black Sea, in contact with **Lydia**, **Egypt**, and the civilizations of the Near East, whose astronomy and mathematics were far older than those of the Greeks. Its citizens knew that different peoples told different stories about the gods, which may have encouraged skepticism about any one of them. The Greek cities had no powerful priesthood with authority over religious doctrine, and no sacred book; anyone could speculate about the gods. The rise of the **polis**, which you may have studied in ANH 101, accustomed citizens to public debate and argument, and to the idea that the community was governed by laws, which might suggest that the cosmos too was governed by law. And the spread of **writing**, after the adoption of the alphabet in the eighth century, made it possible to fix ideas in books, to compare them, and to criticize them.

None of these factors alone explains the birth of philosophy. Many cities were rich, cosmopolitan, and literate without producing philosophers. Something, perhaps, must be left to the genius of individuals.

## The cosmos

One of the great words of Greek philosophy appears early in this tradition: **kosmos**. Originally, it meant "order," "arrangement," or "ornament": a well-arranged army, the adornments of a woman (whence our word *cosmetic*). By the time of Heraclitus, around 500 BCE, it had come to mean the **world-order**, the universe as an ordered whole. Later tradition, perhaps wrongly, credited Pythagoras with being the first to use it in this sense. The idea that the world is a *kosmos*, an ordered, beautiful, intelligible whole, is the fundamental assumption of Greek philosophy and science, and, through them, of the Western scientific tradition.

## Thought before the Milesians

It would be wrong to imagine that no Greek before Thales thought seriously about the order of the world. Hesiod's other great poem, the *Works and Days*, already presents the world as governed by **justice** (*dikē*), which Zeus enforces, and offers practical wisdom about the seasons, the stars, and the right times for plowing and sailing. Around the same time as the Milesians, **Pherecydes of Syros** wrote a prose account of the origins of the gods that mixed myth and speculation, and was later counted by some as a teacher of Pythagoras. The line between "myth" and "philosophy" was not as sharp as the textbooks sometimes suggest. What the Milesians added was a new **attitude**: a willingness to explain everything by a single natural principle, and to submit that explanation to argument.

> **Pause and consider.** Hesiod explained the world as the result of the births, marriages, and wars of gods; the Milesians as the result of natural processes. Is the difference between myth and philosophy a difference in content, in method, or in attitude?`,
    },
    {
      title: "Thales: All Things Are Water",
      body: `## The first philosopher

**Thales of Miletus** (active around 585 BCE) was regarded by the Greeks as the first philosopher, and he was counted among the **Seven Sages** of Greece, the legendary wise men of the archaic age. He wrote nothing, or nothing that survived; Aristotle, our main source for his ideas, knew of them only by report. Yet the stories told about him show what the Greeks thought a wise man was.

## The stories

Herodotus tells several stories about Thales. Besides predicting the eclipse of 585, he is said to have diverted the river **Halys** so that the Lydian army of King Croesus could cross it (1.75), a story Herodotus himself doubted, and to have advised the Ionian cities to unite in a single state, with a common council at Teos (1.170). He was credited with mathematical discoveries: that a circle is bisected by its diameter, that the base angles of an isosceles triangle are equal, and that triangles with one side and two angles equal are equal; with a method for measuring the height of the pyramids from their shadows, at the time of day when a man's shadow equals his height; and with a method for measuring the distance of ships at sea (Diogenes Laertius 1.24–27; Proclus, *Commentary on Euclid*). These attributions are late and doubtful, but they show that Thales was remembered as a practical man of science.

Two stories, both told in antiquity, present the two faces of the philosopher. In Plato's *Theaetetus*, Socrates tells how Thales, while looking up at the stars, fell into a well, and a witty Thracian servant girl mocked him for being so eager to know what was in the heavens that he could not see what was at his feet (174a). The philosopher, Socrates comments, is a figure of fun to ordinary people. But Aristotle tells a different story (*Politics* 1.11, 1259a6–18). When people taunted Thales with his poverty, as a sign that philosophy was useless, he foresaw from his knowledge of the stars that there would be a great olive harvest. In the winter, he paid small deposits to rent all the olive presses in Miletus and Chios, cheaply, since no one bid against him. When the harvest came, and everyone needed presses at once, he rented them out at whatever price he wished, and made a fortune, showing that philosophers could easily be rich if they wanted to, but that this was not what they cared about. Aristotle notes that this was really a matter of creating a **monopoly**.

## Water

What did Thales teach? Aristotle, in the first book of the *Metaphysics*, surveying his predecessors' views on the first principles of things, says:

> "Thales, the founder of this kind of philosophy, says that the principle is water (for which reason he also declared that the earth rests on water), perhaps taking this view from seeing that the nourishment of all things is moist, and that heat itself comes from moisture and lives by it; … and from the fact that the seeds of all things have a moist nature, and water is the principle of the nature of moist things." (Aristotle, *Metaphysics* 1.3, 983b20–27, plain rendering)

Notice Aristotle's caution: "**perhaps**." He is guessing at Thales's reasons. He also mentions that some people thought that the ancient poets, who made **Oceanus** and **Tethys**, the gods of the waters, the parents of creation, had held the same view (983b27–33).

What did Thales mean by saying that water was the principle? Several interpretations are possible. He may have meant that everything **came from** water originally, as in the Near Eastern creation stories, where the world emerges from primordial waters. He may have meant that everything **is made of** water, in different forms, as Aristotle understood him. Or he may have meant both. Aristotle also reports that Thales held that the **earth floats on water**, like a log (*On the Heavens* 2.13, 294a28–34), perhaps to explain earthquakes, as later sources say.

Why water? Water is the only common substance that the Greeks saw in all three states: as a liquid, as ice, and as vapor. It is essential to life. Seeds and food are moist; living things dry up when they die. Rivers seem to deposit land at their mouths, as the Nile did, and the Meander near Miletus. And the Near Eastern traditions known to the Ionians made water the original stuff of the world.

## All things are full of gods

Aristotle reports two other sayings of Thales. In *On the Soul* (1.5, 411a7–8), he writes: "Some say that soul is mixed in the whole universe; perhaps this is why Thales thought that **all things are full of gods**." And earlier in the same work (1.2, 405a19–21): "Thales too seems, from what is related of him, to have supposed that soul is something that produces motion, if he said that the **magnet** has soul, because it moves iron."

These sayings suggest that Thales saw the world as **alive**, filled with powers of motion and change. The magnet, which moves iron without touching it, and amber, which, when rubbed, attracts light objects (Diogenes Laertius 1.24 adds amber), seemed to him to have souls. This view, that matter is in some sense alive, is called **hylozoism** (from *hylē*, "matter," and *zōē*, "life"). Thales, it seems, did not separate the natural and the divine, as we might; rather, he found the divine in nature itself.

## Why Thales matters

On the evidence we have, Thales's ideas may seem simple, even naive. Why is he called the first philosopher? Because, as far as we know, he was the first to offer an explanation of the world as a whole in terms of a **single natural principle**, and to do so without appealing to the stories of the gods. His claim that all things are water is false. But it is the kind of claim that can be argued about, tested against observation, and replaced by a better one. And that, within a generation, is exactly what his successors in Miletus did.

> **Pause and consider.** Plato tells the story of Thales falling into a well while looking at the stars; Aristotle tells the story of Thales cornering the market in olive presses. Which story better captures what philosophy is? Why might both be true?`,
    },
    {
      title: "Anaximander and the Boundless",
      body: `## The second Milesian

**Anaximander of Miletus** (c. 610–after 547 BCE) was, according to the ancient tradition, Thales's younger associate or pupil. He was a figure of remarkable range. He is said to have been the first Greek to write a book **in prose** about nature (or one of the first), to draw a **map of the inhabited world**, to make a model of the heavens, and to introduce the **gnomon**, the upright pointer of a sundial, into Greece, though the Babylonians had used such instruments long before. He is also said to have led a colony from Miletus to Apollonia on the Black Sea. One sentence, perhaps two, of his book survives: the oldest surviving sentence of Western philosophy.

## The boundless

Anaximander rejected Thales's water as the first principle. Instead, he said that the principle of all things was ***to apeiron***: "the **boundless**," "the unlimited," or "the indefinite." The word means something without limits (*peirata*): unlimited in extent, perhaps, and also without definite boundaries or qualities, not water, nor fire, nor any of the familiar substances.

Why did Anaximander make this move? Aristotle and Theophrastus suggest a reason. The world is made of **opposites** in conflict: the hot and the cold, the wet and the dry. If one of them, such as water, which is cold and wet, were the infinite source of everything, it would long since have destroyed its opposites; there would be no fire. So the principle must be something **neutral**, prior to the opposites, from which they all emerge (Aristotle, *Physics* 3.5, 204b24–29). This is an argument, not a story, and it shows philosophy already advancing by criticizing its predecessors.

## The fragment

Simplicius, quoting Theophrastus, preserves Anaximander's famous sentence:

> "And the source of coming-to-be for existing things is that into which destruction too happens, 'according to necessity; for they pay penalty and retribution to each other for their injustice, according to the assessment of Time.'" (DK 12B1, from Simplicius, *Commentary on Aristotle's Physics* 24.17–20, plain rendering)

Scholars agree that the words in single quotation marks are probably Anaximander's own; Simplicius adds that he expressed this "in rather poetic terms." The first part of the sentence may be Theophrastus's paraphrase.

What does it mean? The "existing things" that "pay penalty to each other for their injustice" are probably the **opposites**: the hot and the cold, the wet and the dry. In summer, the hot encroaches on the cold, committing an "injustice"; in winter, the cold takes its revenge, and the balance is restored. Day and night, summer and winter, each in turn oversteps its limits and is punished. The world is governed by a kind of **cosmic justice**, a law of balance and compensation, operating over time.

This is a remarkable idea. Anaximander has taken a concept from human society, **justice** (*dikē*), and the legal language of penalties and assessments, and applied it to nature. The cosmos, like a well-governed city, is subject to law. It is the beginning of the idea of a **law of nature**.

## The cosmos

From the boundless, Anaximander said, "something capable of producing hot and cold was separated off," which formed a sphere of flame around the air surrounding the earth, "like bark around a tree." This sphere burst and formed rings, enclosed in mist, with openings through which the fire shines: these are the **sun, moon, and stars** (pseudo-Plutarch, *Stromateis* 2; Hippolytus, *Refutation* 1.6). Eclipses and the phases of the moon happen when the openings are blocked. He gave sizes to the rings: according to the reports, the sun's ring is twenty-seven or twenty-eight times the size of the earth, and the moon's eighteen or nineteen times (the sources differ: Hippolytus 1.6.5; Aetius 2.20–25), numbers that may reflect a sacred or mathematical scheme.

## The earth hangs free

Anaximander's most brilliant idea concerned the **earth**. Thales had said that it floated on water. But what, then, supports the water? Anaximander, according to Aristotle, said that the earth **stays where it is** because it is at the center of the cosmos, equally distant from all the extremes, and so has no reason to move in one direction rather than another (*On the Heavens* 2.13, 295b11–16). The earth needs no support. It hangs free in space.

This argument, from **symmetry**, or what later philosophers would call the **principle of sufficient reason**, is a stunning leap of abstract thought. The philosopher of science **Karl Popper** called it "one of the boldest, most revolutionary, and most portentous ideas in the whole history of human thought," because it made possible the later theories of Aristarchus, Copernicus, and Newton. Anaximander did not, however, think the earth was a sphere: he said it was shaped like a **column drum**, a short cylinder, three times as wide as it is deep, and that we live on one of its flat surfaces (Hippolytus 1.6.3).

## The origin of life

Anaximander also offered an account of the origin of **living things**. The first animals, he said, were born in moisture, enclosed in thorny bark; as they grew older, they came out onto dry land, the bark broke off, and they lived a different life for a short time (Aetius 5.19.4). Human beings, he said, were originally born from creatures of another kind, since other animals quickly find their own food, while humans alone need a long period of nursing, and so could not have survived if they had been originally as they are now (pseudo-Plutarch, *Stromateis* 2). According to one report, he said that humans first developed inside **fish**, or fish-like creatures, and emerged when they were able to fend for themselves (DK 12A30).

This has sometimes been called an anticipation of the theory of **evolution**. That is an exaggeration: Anaximander had no idea of natural selection, or of the gradual descent of species. But it is striking that he recognized the problem of the helplessness of human infants and tried to solve it with a natural explanation.

## The map

Anaximander was also said to be the first to draw a **map** of the inhabited world (Agathemerus 1.1, citing Eratosthenes). We do not know what it looked like. It was probably circular, with Greece at the center, surrounded by the river Ocean. Herodotus later mocked the Ionian mapmakers who "draw the earth as round as if it had been turned on a lathe, with Ocean flowing around it, and Asia and Europe of equal size" (4.36). But the attempt to represent the whole earth on a single plan was itself a philosophical act: an attempt to see the world as an ordered whole.

> **Pause and consider.** Anaximander described the opposites paying "penalty and retribution to each other for their injustice." What is gained, and what is risked, by describing nature in the language of law and justice?`,
    },
    {
      title: "Anaximenes and the Milesian Achievement",
      body: `## Air

**Anaximenes of Miletus** (active c. 546–525 BCE), the third of the Milesians, said to have been Anaximander's pupil, returned to a single, definite substance as the principle of all things: **air** (*aēr*). At first sight, this looks like a step backward from Anaximander's sophisticated "boundless" to something like Thales's water. In fact, it was an important advance.

## Condensation and rarefaction

The problem with Anaximander's boundless was that it did not explain **how** the familiar substances came from it. Anaximenes answered this question. Air, he said, changes into other substances through two processes: **rarefaction** (becoming thinner) and **condensation** (becoming thicker). Hippolytus summarizes his view:

> "Anaximenes said that the principle is unlimited air, from which come to be the things that are coming to be, that have come to be, and that will be, and gods and divine things, and the rest from its products. … When it is rarefied, it becomes fire; when it is condensed, wind; then cloud; and when still more condensed, water; then earth; then stones; and the rest come to be from these." (Hippolytus, *Refutation* 1.7.1–3, DK 13A7, plain rendering)

This was a crucial step. For the first time, a philosopher had explained the differences between substances by differences in **quantity**, in how densely packed a single underlying substance is, rather than by differences in **quality**. Water and stone are not fundamentally different things; they are the same thing, air, in different degrees of density. This is the ancestor of the idea, central to modern science, that qualitative differences can be explained by quantitative ones.

Anaximenes linked condensation and rarefaction with **cold** and **heat**. He supported his theory, according to Plutarch, with an observation that anyone can make: if you blow on your hand with your lips pressed together, the breath feels cold; if you breathe out with your mouth open, it feels warm. Compressed air is cold; relaxed air is warm (Plutarch, *The Principle of Cold* 7, 947f, DK 13B1). The observation is misinterpreted, as it happens, but it is one of the first recorded uses of an **experiment** to support a philosophical theory.

## Breath and soul

Why air? Air is everywhere, invisible, and constantly in motion. It is also **breath** (*pneuma*), and breath is life: a living being breathes, and when it stops breathing, it dies. A fragment, which may preserve Anaximenes's words, though some scholars doubt it, draws the analogy:

> "As our soul, being air, holds us together and controls us, so breath and air surround the whole cosmos." (DK 13B2, from Aetius 1.3.4, plain rendering)

If authentic, this is the first recorded use of the analogy between the **microcosm** (the human being) and the **macrocosm** (the universe), which would have a long history in Greek philosophy and beyond. Air holds the cosmos together and gives it life, as breath does a person. Like Thales, Anaximenes seems to have thought of the world as alive, and he said that the gods themselves came from air, rather than air from the gods (Augustine, *City of God* 8.2).

## The cosmos of Anaximenes

Anaximenes's account of the cosmos was in some ways less bold than Anaximander's. The earth, he said, is **flat**, like a table, and rides on air, like a leaf (Aristotle, *On the Heavens* 2.13, 294b13–20). The heavenly bodies, also flat, ride on air, and the stars are fixed in the heavens "like nails" in a crystalline vault (Aetius 2.14.3). The sun does not go under the earth at night, but around it, "as a felt cap turns around our head," and is hidden by the higher parts of the earth in the north (Hippolytus 1.7.6). He gave natural explanations of meteorological phenomena: lightning, he said, is like the flash of an oar cutting through the sea at night; a rainbow is formed when the sun's rays fall on thick, compressed air (Aetius 3.5.10).

## The Milesian achievement

Within about two generations, three men in a single Greek city had transformed the way human beings thought about the world. Their particular theories were wrong. But their achievement was lasting:

- They sought to explain the whole of nature by a small number of **natural principles**, without appeal to the personal actions of gods.
- They assumed that the world is a **kosmos**, an ordered whole, governed by regular processes intelligible to reason.
- They used **argument** and **observation** to support their theories, and criticized the theories of others.
- They developed a **vocabulary** for thinking about nature: principle (*archē*), nature (*physis*), the boundless, the opposites, condensation and rarefaction.
- They established a **tradition** of inquiry, in which each thinker built on and corrected his predecessors.

The Milesian school ended, it seems, with the destruction of Miletus by the Persians in **494 BCE**, after the failure of the Ionian Revolt, which you may have studied in ANH 101. But its questions spread across the Greek world. In the next generation, they were taken up by thinkers in Ionia and in the Greek West, who asked new and more radical questions: not only "What is the world made of?" but "How can we know?" and "What is the divine?"

## A note on the word "physics"

The Milesians were later called **physiologoi** or **physikoi**, "those who give an account of nature (*physis*)." Aristotle called them "the first philosophers" and "the natural philosophers." The word *physis*, from the verb *phyein*, "to grow," originally meant the way something grows, its essential character or constitution, and then nature as a whole. From it come our words **physics**, **physical**, and **physician**. When modern physicists seek a "theory of everything," a single principle that explains all the forces of nature, they are, in a sense, still pursuing the Milesian dream.

> **Pause and consider.** Anaximenes explained the differences between fire, water, and stone as differences in the density of a single substance. Why was this an important step? Can you think of a modern scientific idea that does something similar?`,
    },
    {
      title: "Xenophanes: The Critique of the Gods",
      body: `## A wandering poet

**Xenophanes of Colophon** (c. 570–after 478 BCE) was a poet and thinker from Colophon, an Ionian city near Miletus. When the Persians conquered Ionia around 545 BCE, he left his homeland, and spent the rest of his long life wandering through the Greek world, especially Sicily and southern Italy, reciting his poems. In one fragment, he says that "sixty-seven years" had passed since he began to toss his thought about the land of Greece, and that he had been twenty-five at the start (DK 21B8), which means he lived to at least ninety-two. He wrote in verse, in hexameters and elegiac couplets, and about forty fragments survive.

Xenophanes was not, primarily, a natural philosopher like the Milesians, though he had views about nature. His importance lies in his **criticism of traditional religion**, and in his reflections on the limits of human **knowledge**.

## Against Homer and Hesiod

The gods of Homer and Hesiod, whom all Greeks learned about as children, behaved very badly: they lied, stole, committed adultery, and fought one another. Xenophanes was the first Greek, as far as we know, to say that this was not merely unfitting but **false**:

> "Homer and Hesiod have attributed to the gods all things that are shameful and blameworthy among men: theft, adultery, and deceiving one another." (DK 21B11, plain rendering)

He went further. The gods of the poets, he argued, were made in the image of the people who believed in them:

> "But mortals suppose that gods are born, and have clothes and speech and bodies like their own." (DK 21B14)

> "The Ethiopians say their gods are snub-nosed and black; the Thracians, that theirs have blue eyes and red hair." (DK 21B16)

> "But if cattle and horses and lions had hands, and could draw with their hands and make works of art as men do, horses would draw the forms of gods like horses, and cattle like cattle, and they would make their bodies just like the bodies each of them had." (DK 21B15)

These are among the most powerful arguments in ancient philosophy. They expose what we now call **anthropomorphism**, the tendency to imagine the divine in human form, and they suggest that religious beliefs vary with the cultures that hold them, and so cannot simply be taken at face value. Xenophanes was not an atheist, as we will see. But his argument showed that the gods of tradition were human projections, and it would be used by skeptics and critics of religion ever after.

## The one god

In place of the gods of Homer, Xenophanes proposed a new conception of the divine:

> "One god, greatest among gods and men, not at all like mortals in body or in thought." (DK 21B23)

> "Whole he sees, whole he thinks, whole he hears." (DK 21B24)

> "But without toil he shakes all things by the thought of his mind." (DK 21B25)

> "Always he remains in the same place, not moving at all; nor is it fitting for him to go to different places at different times." (DK 21B26)

Xenophanes's god is utterly unlike human beings. He does not have a body like ours, or think as we do, by step-by-step reasoning; he perceives and thinks with his whole being. He does not move about, as Homer's gods do, flying down from Olympus to the battlefield of Troy; he moves the world by thought alone, without effort. The phrase "greatest among gods and men" has puzzled scholars: does it mean that there are other, lesser gods, or is it a traditional way of speaking? Whether Xenophanes was a strict **monotheist** is debated. But his conception of a single, supreme, unmoving, all-perceiving divine mind was revolutionary, and it influenced Parmenides, Plato, and Aristotle, whose "unmoved mover" moves the world without itself moving. Early Christian writers, such as Clement of Alexandria, who preserved several of these fragments, saw in Xenophanes a pagan who had glimpsed the truth about God.

## Nature

Xenophanes also offered natural explanations of phenomena that the poets attributed to the gods. The rainbow, which Homer called **Iris**, the messenger of the gods, was, he said, merely "a cloud, purple and red and yellow-green to behold" (DK 21B32). The sea, he said, is the source of water, winds, clouds, and rivers (DK 21B30).

Most remarkably, he drew conclusions from **fossils**. According to Hippolytus, Xenophanes reported that "shells are found inland and in the mountains, and in the quarries of Syracuse the impression of a fish and of seaweed has been found, and in Paros the impression of a bay leaf deep in the rock, and in Malta flat impressions of all sorts of sea creatures." From this he concluded that the land had once been covered by the sea, and that the earth goes through cycles of drying and flooding, in which humanity is destroyed and begins again (DK 21A33). This is one of the earliest recorded uses of fossil evidence to reconstruct the history of the earth.

## The limits of knowledge

Xenophanes was also the first Greek thinker to reflect explicitly on the limits of human knowledge:

> "No man has seen what is certain, nor will there be anyone who knows about the gods and about all the things I speak of. For even if he should happen to say what is completely true, still he himself does not know it; but opinion is allotted to all." (DK 21B34, plain rendering)

> "Not from the beginning did the gods reveal all things to mortals; but in time, by searching, they find out better." (DK 21B18)

These two fragments, taken together, express a remarkably modern view. We cannot have **certain** knowledge of the deepest matters: even if we hit on the truth, we cannot be sure that it is the truth. Yet we are not left in ignorance: by **inquiry**, over time, we can improve our understanding. Truth is not revealed by the gods, but discovered by human effort. Karl Popper, who admired Xenophanes, saw in these fragments the first statement of the view that all scientific knowledge is **conjectural**, a web of guesses that we can improve but never make certain.

> **Pause and consider.** Xenophanes said that if horses could draw, they would draw their gods as horses. Does this argument show that our ideas of God are merely human projections? Or does it, as Xenophanes himself thought, clear the way for a truer idea of the divine?`,
    },
    {
      title: "Pythagoras and the Harmony of Number",
      body: `## A mysterious figure

**Pythagoras of Samos** (c. 570–c. 495 BCE) is one of the most famous names in the history of thought, and one of the most mysterious. He wrote nothing. Within a century of his death, he had become a figure of legend, and the stories told about him by later writers, especially the Neoplatonists **Porphyry** and **Iamblichus** in the third and fourth centuries CE, who made him a semi-divine sage, are almost entirely unreliable. Even Aristotle, writing two centuries after Pythagoras, speaks usually not of Pythagoras himself but of "**the so-called Pythagoreans**," and it is very difficult to know which ideas go back to Pythagoras, and which to his followers.

What seems reasonably certain is this. Pythagoras was born on the island of **Samos**, off the coast of Ionia. Around **530 BCE**, perhaps fleeing the tyranny of **Polycrates**, he emigrated to **Croton**, a Greek city in southern Italy, where he founded a **community** of followers, men and women, bound by a common way of life, rules of conduct, and secret teachings. The Pythagoreans gained political power in Croton and other cities of southern Italy, and their influence provoked violent opposition; in the mid-fifth century, their meeting houses were burned, and many were killed. Pythagoras himself moved to **Metapontum**, where he died.

## The soul

The earliest evidence about Pythagoras concerns not mathematics but the **soul**. Pythagoras taught that the soul is **immortal**, and that after death it passes into other bodies, human or animal: the doctrine of **transmigration** or **reincarnation** (*metempsychōsis*). Xenophanes, his contemporary, mocked the idea in a poem:

> "Once, they say, as he passed by a puppy that was being beaten, he took pity on it and said: 'Stop, do not beat it; for it is the soul of a friend of mine, which I recognized when I heard its voice.'" (DK 21B7, plain rendering)

Pythagoras is said to have claimed to remember his own previous lives; one story says he had been the Trojan hero **Euphorbus**, and recognized his own shield in a temple at Argos. Because animals might have human souls, Pythagoreans are said to have abstained from meat, or from some kinds of meat, and from killing animals, though the reports conflict. They also followed a number of strange rules, called *akousmata* ("things heard") or *symbola*: do not eat beans; do not stir the fire with a knife; do not step over a crossbar; do not look in a mirror beside a lamp; when you rise from bed, smooth out the impression of your body. Their meaning was obscure even in antiquity.

The Pythagorean community was a religious brotherhood as much as a philosophical school. Its aim was the **purification** of the soul, so that it might escape the cycle of rebirth. Members were said to keep silence for long periods, to examine their conduct every evening, and to hold their property in common.

## Number

Pythagoras's other great legacy was the idea that the world is fundamentally **mathematical**. Aristotle writes:

> "The so-called Pythagoreans, who were the first to take up mathematics, not only advanced this study, but, having been brought up in it, they thought that its principles were the principles of all things. … Since they saw that the attributes and ratios of musical scales were expressible in numbers, and all other things seemed in their whole nature to be modeled on numbers, … they supposed the elements of numbers to be the elements of all things, and the whole heaven to be a musical scale and a number." (Aristotle, *Metaphysics* 1.5, 985b23–986a3, plain rendering)

## Music

The discovery that inspired this idea, according to the tradition, concerned **music**. The Pythagoreans discovered, or learned from others, that the main musical intervals correspond to simple numerical **ratios** of the lengths of a vibrating string. If you halve the length of a string, it sounds an **octave** higher (ratio 2:1); two-thirds of the length gives a **fifth** (3:2); three-quarters, a **fourth** (4:3). The concordant intervals, which sound harmonious to the ear, are thus expressed by ratios of the first four whole numbers, 1, 2, 3, and 4.

These four numbers added together make ten, the perfect number. The Pythagoreans represented them in a figure called the **tetractys**, a triangle of ten points, arranged in rows of one, two, three, and four, and swore an oath by it. The discovery suggested something astonishing: that **beauty and harmony**, which we perceive with our senses, have a hidden **mathematical structure**. If music is number, perhaps the whole cosmos is too.

## The harmony of the spheres

The Pythagoreans extended this idea to the heavens. The planets, moving at different speeds and distances, must, they thought, produce sounds, like any moving body, and these sounds must be in harmonious ratios: the **harmony of the spheres**. Why, then, do we not hear it? Aristotle reports their answer: because we have heard it from birth, and so cannot distinguish it from silence, as a blacksmith grows deaf to the noise of his hammer (*On the Heavens* 2.9, 290b12–29). The idea inspired thinkers for two thousand years: Plato, in the myth at the end of the *Republic*, has a Siren on each sphere singing a single note; and in 1619, the astronomer **Johannes Kepler**, in *The Harmony of the World*, sought the musical ratios in the orbits of the planets.

## The Pythagorean theorem

The **Pythagorean theorem**, that in a right-angled triangle the square on the hypotenuse equals the sum of the squares on the other two sides, is the most famous thing associated with Pythagoras. But there is no early evidence that he proved it, or even stated it. The relationship was known to **Babylonian** mathematicians more than a thousand years earlier: a clay tablet known as **Plimpton 322**, from around 1800 BCE, lists sets of numbers that satisfy it. The first surviving proof is in **Euclid**'s *Elements* (1.47), written around 300 BCE. Later Pythagoreans may have proved it, and the attribution to Pythagoras may reflect the school's interest in mathematics.

A famous later legend tells that a Pythagorean named **Hippasus** discovered that the diagonal of a square cannot be expressed as a ratio of whole numbers to its side, that it is **incommensurable** (in modern terms, that the square root of 2 is irrational), and was drowned at sea for revealing this secret, which threatened the Pythagorean belief that all things are number. The story is probably legendary.

## The legacy

Whatever Pythagoras himself taught, the Pythagorean tradition had an enormous influence. Through **Philolaus**, a Pythagorean of the late fifth century who wrote the first Pythagorean book, and through the mathematician **Archytas** of Tarentum, Plato's friend, it shaped Plato's philosophy: his belief in the immortality and transmigration of the soul, which we will meet in the *Phaedo* in lesson 5; his emphasis on mathematics as the training of the mind; and his vision of a cosmos built on mathematical harmony. Through Plato, it shaped the whole later tradition. When **Galileo** wrote, in 1623, that the book of nature "is written in the language of mathematics" (*The Assayer*), he was, knowingly or not, a Pythagorean.

> **Pause and consider.** The Pythagoreans discovered that musical harmony has a hidden numerical structure, and concluded that the whole cosmos might be made of number. Why is mathematics so effective in describing the physical world? Is this a discovery about nature or about the human mind?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Read each passage carefully, then write your answers in your notebook.

## 1. Aristotle on Thales

> "Thales, the founder of this kind of philosophy, says that the principle is water, … perhaps taking this view from seeing that the nourishment of all things is moist." (Aristotle, *Metaphysics* 983b20–23)

**Questions**

1. What does Aristotle's "perhaps" tell you about the nature of our evidence for Thales?
2. Why might water have seemed a plausible first principle?

## 2. Anaximander's fragment

> "According to necessity; for they pay penalty and retribution to each other for their injustice, according to the assessment of Time." (DK 12B1)

**Questions**

1. What are the "things" that commit injustice and pay penalty?
2. How does this fragment use the language of human law to describe nature?

## 3. Xenophanes on the gods

> "If cattle and horses and lions had hands, … horses would draw the forms of gods like horses, and cattle like cattle." (DK 21B15)
> "One god, greatest among gods and men, not at all like mortals in body or in thought." (DK 21B23)

**Questions**

1. What is Xenophanes's argument in the first fragment?
2. How does the second fragment show that he was not simply rejecting belief in the divine?

## 4. Aristotle on the Pythagoreans

> "They supposed the elements of numbers to be the elements of all things, and the whole heaven to be a musical scale and a number." (Aristotle, *Metaphysics* 986a1–3)

**Questions**

1. What discovery about music may have led the Pythagoreans to this view?
2. Why does Aristotle speak of "the so-called Pythagoreans" rather than Pythagoras himself?

## Drawing the threads together

In a paragraph, explain what was new about the way the Milesians, Xenophanes, and the Pythagoreans thought about the world, compared with Hesiod.`,
    },
  ],
  readings: [
    { kind: "book", title: "The Presocratic Philosophers", author: "G. S. Kirk, J. E. Raven, and M. Schofield", publisher: "Cambridge University Press", year: "2nd ed., 1983", note: "Read chapters 2–7, on Thales, Anaximander, Anaximenes, Xenophanes, and Pythagoras." },
    { kind: "book", title: "Early Greek Philosophy", author: "trans. and ed. Jonathan Barnes", publisher: "Penguin Classics", year: "rev. ed., 2001", note: "A complete reader of the fragments in translation." },
    { kind: "book", title: "Theogony and Works and Days", author: "Hesiod, trans. M. L. West", publisher: "Oxford World's Classics", year: "1988", note: "Read Theogony 1–210." },
  ],
  media: [
    { kind: "book", title: "Anaximander and the Origins of Greek Cosmology", author: "Charles H. Kahn", publisher: "Columbia University Press", year: "1960", note: "A classic study of the first fragment and the Milesian cosmos." },
    { kind: "book", title: "Pythagoras and the Pythagoreans: A Brief History", author: "Charles H. Kahn", publisher: "Hackett", year: "2001", note: "A short and reliable account of the man and the tradition." },
  ],
  questions: [
    {
      prompt: "Why are the Presocratics called by that name?",
      choices: [
        "They lived in Socrates's city",
        "They were the philosophers before (or contemporary with) Socrates, mostly concerned with nature",
        "They were Socrates's teachers",
        "They wrote only before 469 BCE",
      ],
      answer: 1,
      explanation: "The name is modern and imprecise; some were Socrates's contemporaries.",
    },
    {
      prompt: "What does \"DK 22B12\" refer to?",
      choices: [
        "A testimony about Thales",
        "Fragment 12 of Heraclitus in the Diels-Kranz collection",
        "A page of Aristotle",
        "A papyrus number",
      ],
      answer: 1,
      explanation: "Heraclitus is chapter 22; B marks fragments, A testimonia.",
    },
    {
      prompt: "What did the word \"Chaos\" mean in Hesiod?",
      choices: ["Disorder", "A gap or yawning space", "Water", "Fire"],
      answer: 1,
      explanation: "Theogony 116.",
    },
    {
      prompt: "What did Aristotle's story of the olive presses show about Thales?",
      choices: [
        "That he was greedy",
        "That philosophers could be rich if they wanted, but did not care to be",
        "That he was a farmer",
        "That he could not predict the weather",
      ],
      answer: 1,
      explanation: "Politics 1259a; contrast Plato's story of the well.",
    },
    {
      prompt: "Why did Anaximander reject water as the first principle?",
      choices: [
        "Water is too heavy",
        "A principle that was one of the opposites would have destroyed the others",
        "Thales was his enemy",
        "Water cannot change",
      ],
      answer: 1,
      explanation: "So he posited the neutral apeiron, the boundless.",
    },
    {
      prompt: "Why does the earth stay in place, according to Anaximander?",
      choices: [
        "It floats on water",
        "It is at the center, equally distant from everything, with no reason to move one way rather than another",
        "It rides on air",
        "Atlas holds it",
      ],
      answer: 1,
      explanation: "Aristotle, On the Heavens 295b.",
    },
    {
      prompt: "What was new about Anaximenes's explanation of change?",
      choices: [
        "He blamed the gods",
        "He explained differences between substances by degrees of condensation and rarefaction",
        "He denied change",
        "He used atoms",
      ],
      answer: 1,
      explanation: "Qualitative differences explained by quantitative ones.",
    },
    {
      prompt: "What did Xenophanes argue about the gods of Homer and Hesiod?",
      choices: [
        "That they were accurately described",
        "That they were made in the image of their worshipers and behaved shamefully",
        "That there are no gods",
        "That they lived in Ethiopia",
      ],
      answer: 1,
      explanation: "DK 21B11, B15, B16.",
    },
    {
      prompt: "What did Xenophanes conclude from fossils?",
      choices: [
        "That the gods made the world",
        "That the land had once been covered by the sea",
        "That fish could fly",
        "Nothing",
      ],
      answer: 1,
      explanation: "DK 21A33, via Hippolytus.",
    },
    {
      prompt: "Which numerical ratio corresponds to the octave?",
      choices: ["3:2", "2:1", "4:3", "5:4"],
      answer: 1,
      explanation: "The fifth is 3:2 and the fourth 4:3.",
    },
  ],
  reflection:
    "Thales said all things are water and full of gods, Anaximander that the earth hangs free and the opposites pay penalty for injustice, Xenophanes that horses would draw gods like horses, and the Pythagoreans that all things are number. In 500–800 words, explain what these thinkers had in common that makes them the first philosophers, and argue which of their ideas was the most important advance.",
};
