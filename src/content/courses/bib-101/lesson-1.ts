import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "What Is the Hebrew Bible?",
  summary:
    "An introduction to the Scriptures of ancient Israel: their names, divisions, and canons in Judaism and Christianity; the Hebrew text, the Masoretes, the Dead Sea Scrolls, and the Septuagint; the world of the ancient Near East; what archaeology can tell us; and the main ways of reading the text.",
  pages: [
    {
      title: "Names and Divisions",
      body: `## One book, many names

The collection of writings that is the subject of this course has many names, and the names matter, because each reflects a way of reading it.

In Judaism, it is called the **Tanakh**, an acronym formed from the first letters of its three divisions: **Torah** (T), **Nevi'im** (N), and **Ketuvim** (K), with vowels added to make it pronounceable. It is also called *Miqra*, "that which is read" (or recited), and simply "the Scriptures."

In Christianity, it is called the **Old Testament**. The word "testament" comes from the Latin *testamentum*, which translates the Greek *diathēkē* and the Hebrew *berit*, "**covenant**." The phrase goes back to the apostle Paul, who spoke of the reading of "the old testament" (2 Corinthians 3:14, King James Version), meaning the covenant of Moses, in contrast to the "new testament" or covenant in Christ. The earliest surviving Christian list of "the books of the Old Testament" comes from **Melito**, bishop of Sardis, around 170 CE (quoted by Eusebius, *Church History* 4.26). For Christians, the name implies that this collection is the first part of a larger Bible, completed by the New Testament.

Modern scholars often prefer a neutral term, the **Hebrew Bible**, which is the title of this course. It names the collection by its language, without implying either the Jewish or the Christian frame. Some object that the term is imprecise, since a few chapters are in Aramaic, and that it can obscure the different shapes the collection takes in different communities. No name is perfect. In this course, we will use "Hebrew Bible" for the collection as a whole, and "Tanakh" or "Old Testament" when speaking of its place in Judaism or Christianity.

The English word **Bible** comes from the Greek *ta biblia*, "the books," a plural. The Bible is not a single book, but a **library**, written, edited, and collected over a period of perhaps a thousand years, in many genres: narrative, law, poetry, prophecy, proverbs, letters, and apocalypse.

## The three divisions of the Tanakh

In the Jewish arrangement, the Tanakh contains **twenty-four** books, in three divisions:

**1. Torah** ("Instruction" or "Law"), also called the **Pentateuch** (Greek, "five scrolls") or the Five Books of Moses: **Genesis**, **Exodus**, **Leviticus**, **Numbers**, and **Deuteronomy**. In Hebrew, each book is named by one of its first words: Genesis is *Bereshit*, "In the beginning"; Exodus *Shemot*, "Names."

**2. Nevi'im** ("Prophets"), divided into the **Former Prophets**, which are narrative books, Joshua, Judges, Samuel, and Kings; and the **Latter Prophets**, Isaiah, Jeremiah, Ezekiel, and the **Book of the Twelve**, the twelve shorter prophetic books, from Hosea to Malachi, counted as one book because they fit on a single scroll.

**3. Ketuvim** ("Writings"): Psalms, Proverbs, Job; the five **Megillot** ("scrolls"), Song of Songs, Ruth, Lamentations, Ecclesiastes, and Esther, each read at a particular festival; Daniel; Ezra-Nehemiah, counted as one; and Chronicles, counted as one.

The three divisions may reflect stages in the formation of the canon. The Torah seems to have reached its authoritative form first, perhaps by the fifth or fourth century BCE; the Prophets next; and the Writings last. The prologue to the Greek translation of the book of **Sirach**, written around **132 BCE**, already speaks of "the Law and the Prophets and the others that followed them." In the Gospel of Luke, Jesus speaks of what was written "in the law of Moses, and in the prophets, and in the psalms" (Luke 24:44).

## The Christian Old Testament

The **Protestant** Old Testament contains the same books as the Tanakh, but counts them as **thirty-nine** (dividing Samuel, Kings, Chronicles, Ezra-Nehemiah, and the Twelve), and arranges them differently, in four groups: the Pentateuch, the historical books, the poetic and wisdom books, and the prophets. This arrangement, which comes from the Greek and Latin Bibles, places the **prophets last**, so that the Old Testament ends with Malachi's prophecy of the coming of Elijah "before the coming of the great and dreadful day of the Lord" (Malachi 4:5), leading directly into the Gospels, where John the Baptist is identified with Elijah. The Tanakh, by contrast, ends with **Chronicles**, closing with the decree of the Persian king Cyrus allowing the exiles to return to Jerusalem and rebuild the Temple: "Who is there among you of all his people? The Lord his God be with him, and let him go up" (2 Chronicles 36:23). The order of the books shapes their meaning.

The **Roman Catholic** Old Testament includes seven additional books, called **deuterocanonical** ("second canon") by Catholics and **Apocrypha** ("hidden") by Protestants: Tobit, Judith, 1 and 2 Maccabees, the Wisdom of Solomon, Sirach (Ecclesiasticus), and Baruch, together with additions to Esther and Daniel. These books were part of the Greek translation used by early Christians, but not of the Hebrew canon. The **Eastern Orthodox** churches include still more, such as 1 Esdras, 3 Maccabees, the Prayer of Manasseh, and Psalm 151. The disagreement became a major issue at the Reformation, when **Martin Luther** placed the Apocrypha in a separate section of his Bible as "books not held equal to the Holy Scriptures, but useful and good to read," and the Catholic **Council of Trent** (1546) affirmed them as fully canonical.

## What this course covers

This course reads the Hebrew Bible as it is shared by Judaism and all Christian traditions, the twenty-four books of the Tanakh, with brief attention to the deuterocanonical books in lesson 5. We will follow the order of the Tanakh: the Torah in lessons 2 and 3, the Prophets in lesson 4, and the Writings in lesson 5. Along the way, we will ask three kinds of questions: **literary** (how does the text work?), **historical** (where did it come from, and what does it tell us about ancient Israel?), and **theological** (what does it say about God and human beings?).

> **Pause and consider.** The Tanakh ends with Cyrus's command to return and rebuild Jerusalem; the Christian Old Testament ends with Malachi's prophecy of Elijah's return. How might the same books feel different depending on how they end?`,
    },
    {
      title: "The Text: Hebrew, the Masoretes, and the Scrolls",
      body: `## Languages

The Hebrew Bible is written almost entirely in **Hebrew**, a Semitic language related to Aramaic, Phoenician, and Arabic. A few passages are in **Aramaic**, the international language of the Persian Empire, which later became the everyday language of the Jews of Palestine: about half of the book of **Daniel** (2:4b–7:28), parts of **Ezra** (4:8–6:18; 7:12–26), a single verse of **Jeremiah** (10:11), and two words in **Genesis** (31:47). The Hebrew of the Bible is not uniform: the poetry of the oldest songs, such as the Song of the Sea (Exodus 15) and the Song of Deborah (Judges 5), is more archaic than the prose of later books such as Chronicles and Ecclesiastes, and scholars use these differences to help date the texts.

Biblical Hebrew was written in an **alphabet** of twenty-two letters, all consonants. Originally it was written in the **Paleo-Hebrew** script, closely related to the Phoenician alphabet; after the Babylonian exile, Jews adopted the **square** Aramaic script, from which modern Hebrew letters descend. Because only consonants were written, the reader had to supply the vowels from knowledge of the language and from tradition. This sometimes left real ambiguity: the same consonants could be read in different ways, with different meanings.

## The Masoretes

The vowels were added much later, by Jewish scholars called the **Masoretes** (from *masorah*, "tradition"), who worked mainly in **Tiberias**, on the Sea of Galilee, between about the seventh and the tenth centuries CE. They devised systems of **vowel points** (dots and dashes written above, below, and inside the consonants) and **accents** (marks indicating stress, chanting, and the division of verses), which preserved the traditional pronunciation and reading of the text. They also wrote marginal notes, the *masorah*, recording unusual spellings, counting the letters and words of each book, and noting places where the text that was **written** (*ketiv*) differed from what was **read** aloud (*qere*). The most famous example is the divine name, **YHWH**, which was not pronounced, but read aloud as *Adonai*, "my Lord." English Bibles usually represent it as "the LORD" in small capitals.

The text they produced is called the **Masoretic Text** (MT). It is the standard text of the Hebrew Bible in Judaism, and the basis of most modern translations. The two most important manuscripts are:

- The **Aleppo Codex**, written around **930 CE** and pointed by the great Masorete **Aaron ben Asher**. It was kept for centuries in the synagogue of Aleppo, in Syria; during riots in 1947, it was damaged, and about forty percent of it, including most of the Torah, has been lost. The rest is now in Jerusalem.
- The **Leningrad Codex**, dated **1008 or 1009 CE**, now in the National Library of Russia in St. Petersburg. It is the oldest **complete** manuscript of the Hebrew Bible, and the basis of the standard scholarly edition, the *Biblia Hebraica Stuttgartensia*.

## The Dead Sea Scrolls

Until the mid-twentieth century, the oldest surviving manuscripts of the Hebrew Bible dated from about a thousand years after the latest books were written. Then, in **1947**, a Bedouin shepherd searching for a lost goat near **Qumran**, on the northwestern shore of the Dead Sea, found a cave containing clay jars filled with ancient scrolls. Over the following decade, archaeologists and Bedouin found **eleven** caves at Qumran, containing the remains of some **900** manuscripts, most in fragments, dating from about the third century BCE to the first century CE.

About a quarter of these manuscripts are copies of biblical books. Every book of the Hebrew Bible is represented except **Esther** (and, by some counts, Nehemiah, which may have been part of the same scroll as Ezra). The most famous is the **Great Isaiah Scroll** (1QIsa^a), a complete copy of Isaiah, about seven meters long, dated to about **125 BCE**, more than a thousand years older than the Aleppo Codex. When it was compared with the Masoretic Text, it was found to be remarkably close to it, apart from many small differences in spelling and some variant readings. This showed how carefully the text had been copied over the centuries.

But the Scrolls also revealed that, in the period before the destruction of the Temple in 70 CE, the text of some books existed in **several forms**. Some manuscripts, such as a scroll of Samuel from Cave 4 (4QSam^a), agree more often with the Greek translation than with the Masoretic Text; others with the Samaritan Pentateuch; and some books, such as Jeremiah, existed in a longer and a shorter edition. The standardization of the Hebrew text seems to have happened gradually, and to have been largely complete by the end of the first century CE.

The Scrolls also included many non-biblical texts, including the rules of the community that lived at Qumran, which many scholars identify with the **Essenes**, a Jewish sect described by Josephus and Philo, though this identification has been debated.

## The Septuagint

The other great witness to the text is the **Septuagint** (LXX), the ancient Greek translation of the Hebrew Bible. According to a legendary account in the *Letter of Aristeas*, written in the second century BCE, the Egyptian king **Ptolemy II Philadelphus** (ruled 285–246 BCE) sent for seventy-two Jewish scholars from Jerusalem to translate the Law into Greek for the great library of Alexandria; working separately, they completed it in seventy-two days. Later versions of the legend added that each produced an identical translation. The name "Septuagint," from the Latin for "seventy," comes from this story. In fact, the Torah seems to have been translated in **Alexandria** in the third century BCE, for the large Greek-speaking Jewish community there, and the other books over the following two centuries.

The Septuagint is important for several reasons. It sometimes preserves a Hebrew text **different** from, and occasionally older than, the Masoretic Text. It shows how Jews of the Hellenistic period **interpreted** their Scriptures. And it was the Bible of the **early Christians**, who wrote in Greek; most quotations of the Old Testament in the New Testament follow the Septuagint. A famous example is Isaiah 7:14, where the Hebrew speaks of an *almah*, "a young woman," who will conceive and bear a son; the Septuagint translates *parthenos*, which usually means "virgin," and Matthew quotes the Greek in his account of the birth of Jesus (Matthew 1:23). This difference has been debated between Jews and Christians since the second century.

> **Pause and consider.** The Great Isaiah Scroll showed that the Hebrew text had been copied with great care for a thousand years; other scrolls showed that some books once existed in several forms. What does each discovery suggest about how a sacred text is transmitted?`,
    },
    {
      title: "The World of the Ancient Near East",
      body: `## Between empires

The people of ancient Israel lived in a small land, about the size of the state of New Jersey or of Wales, on the eastern shore of the Mediterranean, in the southwestern corner of the region historians call the **Fertile Crescent**: the arc of fertile land that runs from the Nile valley through Palestine and Syria to Mesopotamia, the land "between the rivers" Tigris and Euphrates. The region was the home of the world's oldest civilizations. Writing was invented in **Sumer**, in southern Mesopotamia, around **3200 BCE**, and in Egypt at about the same time. By the time Israel appeared in history, around 1200 BCE, these civilizations were already two thousand years old.

The land of Israel was a **corridor** between the great powers: **Egypt** to the south; the empires of **Mesopotamia**, Assyria, Babylonia, and later Persia, to the east; and the **Hittites** of Anatolia to the north, until about 1200 BCE. Armies and traders passed through it. Its history is the history of a small people caught between empires, and its Scriptures are, in large part, an attempt to understand that history.

## Canaan

The land was called **Canaan** before the Israelites, and its inhabitants Canaanites. The Canaanites lived in city-states, each ruled by a king, and worshiped a pantheon of gods. Our knowledge of their religion was transformed in **1928**, when a farmer plowing his field at **Ras Shamra**, on the coast of Syria, uncovered a tomb, leading to the excavation of the ancient city of **Ugarit**. Its archives, written in a previously unknown alphabetic cuneiform script and a language closely related to Hebrew, included myths and epics from around **1200 BCE**.

The Ugaritic texts revealed a pantheon headed by **El**, the aged father of the gods, "creator of creatures," who sat enthroned in the assembly of the gods; his consort **Asherah**; and the young storm god **Baal**, "Rider of the Clouds," who fought and defeated **Yam**, the Sea, and **Mot**, Death, and built himself a palace. Many features of these texts appear in the Hebrew Bible. The God of Israel is often called **El**, or *Elohim*, a plural form of the word for "god." He is described, like Baal, as one who "rideth upon the heavens" (Psalm 68:4) and speaks in thunder (Psalm 29). He defeats the sea monster **Leviathan**, "the piercing serpent, even leviathan that crooked serpent" (Isaiah 27:1), whose name and description closely match the Ugaritic **Lotan**, "the twisting serpent." The God of Israel presides over a "congregation of the mighty" (Psalm 82:1). The Hebrew Bible's prophets denounce the worship of Baal and Asherah, which, they make clear, many Israelites practiced.

## Mesopotamia

From **Mesopotamia** came some of the oldest literature in the world, which you may have met in WLT 101: the ***Epic of Gilgamesh***, whose eleventh tablet tells of a great **flood**, sent by the gods, from which a man named **Utnapishtim** escaped by building a boat, taking his family and animals aboard, and releasing birds to find dry land, in a story strikingly similar to the story of Noah; the ***Atrahasis*** epic, which tells of the creation of humanity and the flood; and the ***Enuma Elish***, the Babylonian creation epic, in which the god **Marduk** defeats the sea goddess **Tiamat** and splits her body to make heaven and earth. Mesopotamia also produced **law codes**, the most famous of which, the **Code of Hammurabi** (about 1754 BCE), contains laws strikingly similar to those of the book of Exodus, as we will see in lesson 3.

## Egypt

**Egypt** too left its mark. Egyptian **wisdom literature**, such as the *Instruction of Amenemope* (perhaps around 1100 BCE), resembles the book of Proverbs so closely in one section (Proverbs 22:17–24:22) that most scholars believe the biblical writer knew and adapted it. The Egyptian *Hymn to the Aten*, attributed to the pharaoh **Akhenaten** (fourteenth century BCE), who briefly made the sun disk the sole god of Egypt, has been compared to Psalm 104. And the Exodus story, the founding story of Israel, is set in Egypt.

## Israel's distinctiveness

These parallels show that the Hebrew Bible did not arise in isolation. Israel shared the language, literature, religious imagery, legal traditions, and wisdom of its neighbors. Yet the Hebrew Bible also differs from these texts in important ways. Its God is, in its final form, **one** God, without a consort, without a family history, who is not part of nature but its creator. Its **creation** story has no battle among gods. Its laws are presented not as the decrees of a king, but as the terms of a **covenant** between God and a people. Its **history** is told not as the glorification of kings, but often as a record of their failures, judged by the standard of faithfulness to God. And it reflects a growing conviction, expressed most powerfully by the prophets, that the God of Israel is the God of **all** nations, who controls history and demands justice.

How this distinctiveness emerged is one of the central questions of biblical scholarship. Many scholars now think that Israelite religion began as a form of **Canaanite** religion, and that the worship of YHWH alone, **monotheism**, developed gradually, through a long struggle, reaching its full expression only in the period of the exile. Inscriptions found at **Kuntillet Ajrud**, in the Sinai, from the early eighth century BCE, contain blessings "by YHWH of Samaria and his Asherah," suggesting that some Israelites worshiped YHWH together with a goddess. The Hebrew Bible itself records this struggle, from the golden calf to the reforms of King Josiah.

> **Pause and consider.** The Hebrew Bible shares many images and stories with its neighbors, such as the flood and the sea monster, yet uses them in new ways. Does the existence of such parallels make the biblical stories less original, or does it show what was distinctive about them?`,
    },
    {
      title: "History and Archaeology",
      body: `## What can we know?

The Hebrew Bible tells a long story, from the creation of the world to the return from exile in the fifth century BCE. How much of this story is **history**, in the modern sense? This is one of the most debated questions in biblical studies. The answer varies greatly for different parts of the story.

The modern study of the history of Israel combines the biblical texts with two other kinds of evidence: **inscriptions** and other written documents from Israel and its neighbors, and **archaeology**, the excavation of ancient sites. In the nineteenth and early twentieth centuries, many archaeologists, such as the American **William F. Albright**, hoped that archaeology would **confirm** the biblical narrative. Since the 1970s, the picture has become more complicated.

## Inscriptions that name Israel

A number of ancient inscriptions mention Israel, its kings, or events known from the Bible:

- The **Merneptah Stele**, an Egyptian victory inscription of the pharaoh Merneptah, from about **1208 BCE**, contains the earliest known mention of **Israel**, as a people in Canaan: "Israel is laid waste; his seed is not." This shows that a group called Israel existed in Canaan by the late thirteenth century.
- The **Mesha Stele** (or Moabite Stone), found in 1868 in Jordan, from about **840 BCE**, records how Mesha, king of Moab, threw off the rule of "**Omri**, king of Israel," and his son, who had oppressed Moab "many days." The same events are told from Israel's side in 2 Kings 3. The stele also mentions YHWH, the God of Israel.
- The **Tel Dan Stele**, found in 1993 and 1994 in northern Israel, from the ninth century BCE, is an Aramaic inscription in which a king of Damascus boasts of killing a king of Israel and a king of "the **house of David**." It is the earliest reference outside the Bible to David's dynasty, and it greatly strengthened the case that David was a historical figure.
- The **Black Obelisk** of the Assyrian king **Shalmaneser III**, from about **841 BCE**, shows **Jehu**, king of Israel, bowing before the king and paying tribute: the only surviving ancient image of an Israelite king.
- The annals of the Assyrian king **Sennacherib** describe his campaign of **701 BCE** against Judah, in which he captured forty-six walled cities and shut up **Hezekiah** in Jerusalem "like a bird in a cage," but did not take the city, as 2 Kings 18–19 and Isaiah 36–37 also report. The siege of **Lachish**, one of those cities, was carved in reliefs on the walls of Sennacherib's palace at Nineveh, now in the British Museum.
- The **Babylonian Chronicles** record **Nebuchadnezzar**'s capture of Jerusalem in **597 BCE**, and tablets from Babylon list rations given to **Jehoiachin**, the exiled king of Judah, as 2 Kings 25:27–30 describes.
- The **Cyrus Cylinder** (539 BCE) records the Persian king's policy of allowing deported peoples to return home and restore their temples, consistent with the decree of Cyrus in Ezra 1.

The oldest surviving fragments of a biblical text are two tiny **silver amulets** found in 1979 at **Ketef Hinnom**, in Jerusalem, from about **600 BCE**, inscribed with a version of the priestly blessing: "The Lord bless thee, and keep thee: The Lord make his face shine upon thee" (Numbers 6:24–25).

## The earlier stories

For the period of the **monarchy**, from the ninth century BCE onward, the biblical account and the outside evidence agree in many respects, though they often differ in details and interpretation. For the **earlier** periods, the evidence is much thinner. No inscription mentions Abraham, Moses, Joshua, or Solomon. There is no Egyptian record of Israelite slaves or of an exodus, and no archaeological evidence of a large population wandering in the Sinai. The excavation of cities said to have been destroyed by Joshua, such as **Jericho** and **Ai**, showed that many were unoccupied or unwalled at the time when the conquest would have taken place.

Archaeologists have also found that, around **1200 BCE**, hundreds of small, new **villages** appeared in the central hill country of Canaan, with a material culture very similar to that of the Canaanites, but with one notable feature: an absence of **pig bones**, which were common at other sites. Many scholars think these villages were the settlements of the people who became Israel, and that the Israelites emerged largely from **within** Canaan, rather than invading it from outside, perhaps joined by groups who had come from Egypt and brought with them the story of the exodus.

## Maximalists and minimalists

In the 1990s, a vigorous debate broke out between so-called "**minimalists**," such as the scholars of the "Copenhagen school," **Niels Peter Lemche** and **Thomas L. Thompson**, and the British scholar **Philip R. Davies**, who argued that the biblical history was largely a creation of the Persian or Hellenistic periods, with little reliable information about earlier times; and "**maximalists**," who held that it preserved substantial historical memory. The Israeli archaeologist **Israel Finkelstein** and the American **Neil Asher Silberman**, in *The Bible Unearthed* (2001), took a middle position, arguing that much of the biblical history was shaped in the seventh century BCE, in the reign of King Josiah, but drew on older traditions. Others, such as the American archaeologist **William G. Dever**, have argued for a larger historical core.

## History and truth

For readers of faith, these questions can be unsettling. But it is worth remembering that the biblical writers were not modern historians. They told the story of their people in order to explain its relationship with God, to teach, warn, and console. Their accounts mix memory, tradition, legend, and theological interpretation. To ask whether the Bible is "true" requires asking what **kind** of truth each text claims. The creation stories of Genesis, for example, are not, and were probably never meant to be, scientific accounts of the origin of the world. The narratives of the kings, on the other hand, make historical claims that can, in part, be tested. Many believing Jews and Christians have found ways to hold together a critical study of the Bible's history with a deep commitment to its religious truth.

> **Pause and consider.** No ancient inscription mentions Abraham or Moses, but several mention the kings of Israel and Judah. Does it matter whether the earliest biblical stories are historical? What would be gained or lost for a reader if they were not?`,
    },
    {
      title: "Who Wrote the Torah? The Critical Study of the Bible",
      body: `## The traditional view

According to Jewish and Christian tradition, the **Torah** was written by **Moses**, and the other books by the prophets and sages whose names they bear, or with whom they are associated: Joshua wrote Joshua, Samuel wrote Judges and Samuel, Jeremiah wrote Kings and Lamentations, David wrote the Psalms (with ten elders), and King Hezekiah and his colleagues wrote down Isaiah, Proverbs, the Song of Songs, and Ecclesiastes (Babylonian Talmud, *Bava Batra* 14b–15a). The New Testament refers to "the book of Moses" (Mark 12:26).

But readers noticed problems with this view very early. The last chapter of Deuteronomy describes the **death of Moses**, and says that "there arose not a prophet since in Israel like unto Moses" (Deuteronomy 34:10), which seems to be written long after his time. The Talmud suggested that **Joshua** wrote the last eight verses. The medieval Jewish commentator **Abraham ibn Ezra** (1089–1164) hinted, in cryptic language, at other passages that seemed to come from after Moses's time, such as "the Canaanite was then in the land" (Genesis 12:6), which implies that the Canaanites were no longer there when it was written. In 1670, the Dutch Jewish philosopher **Baruch Spinoza**, in his *Theological-Political Treatise*, argued openly that Moses could not have written the Torah, and that it had been compiled much later, perhaps by Ezra.

## Doublets and divine names

In the eighteenth century, scholars began to notice that the Torah contains many **doublets**: two versions of the same story, which differ in details and sometimes contradict each other. There are two accounts of **creation** (Genesis 1:1–2:3 and 2:4–25), in different styles and orders: in the first, humans are created last, male and female together; in the second, the man is created first, then the plants and animals, then the woman. There are two interwoven accounts of the **flood**: in one, Noah takes **two** of every animal (Genesis 6:19–20); in another, **seven pairs** of clean animals and one pair of unclean (7:2–3). There are two accounts of the revealing of God's name to Moses (Exodus 3 and 6), and three stories in which a patriarch passes off his wife as his sister (Genesis 12, 20, 26).

In **1753**, a French physician, **Jean Astruc**, noticed that some passages of Genesis use the divine name **YHWH** (translated "the LORD"), while others use **Elohim** ("God"), and suggested that Moses had combined two older documents. In **1805**, the German scholar **W. M. L. de Wette** argued that **Deuteronomy** was the "book of the law" discovered in the Temple in the reign of King **Josiah** in **622 BCE** (2 Kings 22), and had been written not long before.

## The Documentary Hypothesis

These observations were brought together by the German scholar **Julius Wellhausen** (1844–1918), in his *Prolegomena to the History of Israel* (1878; second edition 1883), into the theory known as the **Documentary Hypothesis**. According to this theory, the Torah was compiled from **four** main sources, or documents, written at different times and places, and later combined by editors (**redactors**):

- **J**, the **Yahwist** (from the German spelling, *Jahwe*), which uses the name YHWH from the beginning, and was thought to have been written in **Judah** around the tenth or ninth century BCE. Its style is vivid and its God is **anthropomorphic**: he walks in the garden in the cool of the day, shapes the man from dust, and smells the pleasing odor of Noah's sacrifice.
- **E**, the **Elohist**, which uses *Elohim* until the name YHWH is revealed to Moses, and was thought to come from the northern kingdom of **Israel**, around the ninth or eighth century BCE.
- **D**, the **Deuteronomist**, essentially the book of Deuteronomy, linked to Josiah's reform in the late seventh century BCE.
- **P**, the **Priestly** source, concerned with genealogies, dates, laws of worship, purity, and sacrifice, and with an exalted, transcendent God, thought to have been written during or after the **Babylonian exile**, in the sixth or fifth century BCE. The first creation account (Genesis 1) is the classic example of P.

Wellhausen's dating had a theological edge: he believed that the religion of Israel had declined from the vital faith of the prophets into the legalism of the priests, an argument that has been criticized as reflecting Protestant prejudices against Judaism.

## After Wellhausen

The Documentary Hypothesis dominated biblical scholarship for a century, and its basic insight, that the Torah was composed from several sources over a long period, is still accepted by most critical scholars. But many details have been challenged. Many scholars now doubt that **E** ever existed as a separate document. Others, especially in Europe, such as **Rolf Rendtorff** and **Erhard Blum**, have replaced the four documents with models in which **blocks** of tradition, such as the stories of the patriarchs and of the exodus, developed separately and were combined later, often distinguishing simply between **Priestly** and **non-Priestly** material. Many now date much of the Torah later than Wellhausen did, to the exile or the Persian period. The debate continues.

Traditional Jewish and Christian scholars have responded in different ways. Some reject the source theory entirely, defending Mosaic authorship. Others accept that the Torah has a complex history, while affirming its divine inspiration in its final form. The Roman Catholic Church, in the Second Vatican Council's *Dei Verbum* (1965), affirmed that the biblical authors were "true authors" who used their own powers and abilities, and that interpreters must attend to "literary forms."

## An example: the two creation stories

The difference between the two creation stories shows what the source critics saw. The first (Genesis 1:1–2:3), assigned to **P**, is orderly, repetitive, and cosmic: God, called *Elohim*, speaks, and the world comes into being in six days, ending with the Sabbath. The second (2:4b–25), assigned to **J**, is intimate and earthy: "the LORD God," *YHWH Elohim*, forms the man from the dust of the ground, breathes into his nostrils the breath of life, plants a garden, and builds the woman from the man's side. The first is a liturgy; the second is a story. Whether or not one accepts the theory of separate documents, the contrast is unmistakable, and the final editors of Genesis chose to place the two accounts side by side, as complementary visions: the first of humanity's dignity in a cosmic order, the second of human intimacy, vulnerability, and relationship.

> **Pause and consider.** The Torah contains two creation stories and two interwoven flood stories that differ in details. Does the presence of different sources weaken the authority of the text, or enrich it? Why might an ancient editor have kept both versions rather than choosing one?`,
    },
    {
      title: "Reading the Bible as Literature and as Scripture",
      body: `## The literary turn

The source-critical approach of Wellhausen and his successors was concerned mainly with the **history** of the text: how it came to be. In the second half of the twentieth century, many scholars turned to the **final form** of the text, as we have it, and asked how it works as **literature**.

A turning point was the publication, in **1981**, of ***The Art of Biblical Narrative*** by **Robert Alter**, an American professor of Hebrew and comparative literature, which is one of the books for this course. Alter argued that the biblical narratives, whatever their sources, are works of extraordinary **literary art**, and that their apparent contradictions, repetitions, and gaps are often deliberate techniques, which a careful reader can learn to recognize. Among the features he identified are:

- **Type-scenes**: conventional scenes that recur with variations, like the scenes of arming or feasting in Homer. The most famous is the **betrothal at the well**: a man, or his servant, travels to a foreign land, meets a young woman at a well, water is drawn, the woman runs home to tell her family, and a marriage follows. It appears with Isaac's servant and **Rebekah** (Genesis 24), **Jacob** and **Rachel** (Genesis 29), and **Moses** and **Zipporah** (Exodus 2). Each variation reveals the character of the people involved: Rebekah draws water energetically for the servant and all his camels; Jacob rolls away a great stone single-handed; Moses defends the daughters of Jethro against shepherds.
- **Leading words** (*Leitwörter*, a term from the German Jewish translators **Martin Buber** and **Franz Rosenzweig**): words or roots repeated throughout a story, which carry its theme. In the story of Jacob, words for "**blessing**" and "**birthright**," "first-born," and "deceive" recur again and again.
- **Dialogue**: biblical narrative tells much of its story through characters' speech, and the first words a character speaks often reveal his or her essential nature.
- **Reticence**: biblical narrators rarely tell us what characters think or feel, or explain their motives, leaving readers to infer them from actions and words.

## Odysseus's scar

Alter built on an essay that had become famous: "**Odysseus' Scar**," the first chapter of ***Mimesis*** (1946), by the German Jewish literary scholar **Erich Auerbach**, written in exile in Istanbul during the Second World War. Auerbach compared two scenes: the recognition of Odysseus by his old nurse **Eurycleia**, who sees the scar on his leg while washing his feet (*Odyssey* 19), and the story of the **binding of Isaac** (Genesis 22). Homer, Auerbach observed, illuminates everything: when Eurycleia sees the scar, the poet pauses for seventy lines to tell how Odysseus got it, in full and vivid detail, so that everything is in the foreground, in the light. The biblical story, by contrast, tells almost nothing: we do not know what Abraham thought or felt, what the landscape looked like, what father and son said to each other on their three-day journey. The story is "**fraught with background**": its meaning lies in what is unsaid, in the depths of the characters and of God's purpose. And it makes an absolute claim on the reader: it "seeks to overcome our reality," demanding that we fit our lives into its world. You will read the binding of Isaac in lesson 2.

## Reading as Scripture

For most of its history, the Hebrew Bible has been read not as literature or as a historical source, but as **Scripture**: the word of God, authoritative for faith and life. Jewish and Christian traditions developed rich methods of interpretation.

In **Judaism**, the written Torah was accompanied by the **Oral Torah**, the tradition of interpretation believed to go back to Moses, which was written down in the **Mishnah** (around 200 CE) and the **Talmud** (completed around 500 CE in Babylonia). Rabbinic interpreters developed the art of ***midrash*** (from a root meaning "to seek"), which explores the gaps, repetitions, and puzzles of the text, finding meanings in every word and letter. Medieval Jewish commentators, such as **Rashi** (Rabbi Shlomo Yitzchaki, 1040–1105), of Troyes in France, whose commentary is still printed in Hebrew Bibles, sought the plain sense (*peshat*) of the text while preserving the midrashic tradition.

In **Christianity**, the Old Testament was read in the light of Christ. Early Christian writers used **typology**, in which persons and events of the Old Testament were seen as "types" or foreshadowings of Christ and the Church: Isaac carrying the wood for his own sacrifice as a type of Christ carrying the cross; the crossing of the Red Sea as a type of baptism. **Augustine** summed up the Christian view in a famous phrase: "The New is concealed in the Old, and the Old is revealed in the New" (*Questions on the Heptateuch* 2.73). Medieval interpreters distinguished **four senses** of Scripture: literal, allegorical, moral, and anagogical (concerning the last things).

## Canonical criticism

In the late twentieth century, the American scholar **Brevard Childs**, in *Introduction to the Old Testament as Scripture* (1979), proposed what he called a **canonical** approach: reading each book in the light of its place in the **canon** as a whole, as it was shaped by the communities that received it as Scripture. This approach tries to bridge the gap between historical criticism and theological reading.

## How we will read

In this course, we will use all these approaches. We will ask where the texts came from and what they tell us about ancient Israel; we will read them as works of literary art; and we will ask what they say about God, humanity, and the world, and how they have been understood in Judaism and Christianity. You are not asked to adopt any particular religious position. But you are asked to read with attention, and with respect for a book that has shaped the lives of billions of people.

> **Pause and consider.** Auerbach said that Homer illuminates everything, while the Bible is "fraught with background." Think of a story you know well. Does its power come more from what it tells you, or from what it leaves unsaid?`,
    },
    {
      title: "A First Reading: Genesis 1",
      body: `## "In the beginning"

We end this introductory lesson with a first reading of the opening chapter of the Bible, which will also prepare for lesson 2. Read Genesis 1:1–2:3 before continuing.

> "In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light." (Genesis 1:1–3, King James Version)

## A difficult first sentence

Even the first sentence is debated. The traditional translation, "**In the beginning God created**," presents it as an independent statement: God created everything from nothing. But the Hebrew word *bereshit* can also be read as "**In the beginning of**" or "**When**," so that the first verse becomes a subordinate clause: "When God began to create the heaven and the earth, the earth being without form and void, … God said, Let there be light." On this reading, which several modern Jewish and Christian translations adopt, the text describes God bringing **order** out of a pre-existing **chaos**, the "deep" (*tehom*) and the "waters," rather than creating from nothing. The doctrine of **creation from nothing** (*creatio ex nihilo*) is first stated clearly in the book of 2 Maccabees (7:28), in the second century BCE, and developed by Jewish and Christian thinkers later. The Hebrew grammar allows both readings, and the debate continues.

The phrase "**without form, and void**" translates the rhyming Hebrew phrase ***tohu wa-bohu***, meaning something like "formless and empty," a wasteland. The word ***tehom***, "the deep," is related to the name of **Tiamat**, the Babylonian sea goddess whom Marduk splits to make heaven and earth in the *Enuma Elish*. But in Genesis, the deep is not a goddess or a monster, and there is no battle. God simply **speaks**.

## The structure

Genesis 1 is a carefully structured text, built on patterns of repetition. Each day of creation follows a formula: "And God said, Let there be … and it was so. … And God saw that it was good. And the evening and the morning were the … day." The six days fall into two parallel sets of three:

- **Day 1**: light and darkness — **Day 4**: the sun, moon, and stars, which rule the day and night
- **Day 2**: the firmament separating the waters above from the waters below — **Day 5**: birds of the air and creatures of the waters
- **Day 3**: dry land and plants — **Day 6**: land animals and human beings

In the first three days, God creates **spaces**, by separating; in the second three, he fills them with **inhabitants**. And on the seventh day, God rests, and blesses and sanctifies it: the origin of the **Sabbath** (2:1–3).

Notice that the sun and moon are not named; they are called "the greater light" and "the lesser light" (1:16), perhaps because their names, *shemesh* and *yareach*, were also the names of gods worshiped by Israel's neighbors. In Genesis, they are not gods, but **lamps**, made by God and set in the sky to mark times and seasons. The great sea monsters (*tanninim*, 1:21), which in other myths are God's enemies, are simply creatures, which God made and called good. Many scholars think that Genesis 1 is a deliberate **polemic** against the mythologies of Babylon, written perhaps during the exile, when Israelites lived among Babylonians who worshiped the sun, moon, and stars, and celebrated Marduk's victory over Tiamat.

## The image of God

The climax of the chapter is the creation of human beings:

> "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth. So God created man in his own image, in the image of God created he him; male and female created he them." (Genesis 1:26–27, King James Version)

What does it mean for human beings to be made "in the **image of God**" (*tselem elohim*)? Interpreters have offered many answers: reason, the soul, moral freedom, the capacity for relationship, creativity. In the ancient Near East, kings set up **images** of themselves in conquered lands, as signs of their rule, and Egyptian and Mesopotamian texts called the king the "image" of a god. Many scholars think Genesis applies this royal language to **all** human beings, male and female: every person is God's representative on earth, entrusted with "dominion" over creation. It is a remarkably democratic idea, and it has been the foundation of Jewish and Christian teaching about the **dignity** of every human being.

Why "**Let us** make man"? Jewish interpreters suggested that God was speaking to the angels, or to the heavenly court, as in Psalm 82; Christian interpreters saw a reference to the Trinity; modern scholars often see an echo of the divine council, or a "plural of majesty."

## "Very good"

Six times in the chapter, God sees that what he has made is **good**; and the seventh time, at the end, he sees "every thing that he had made, and, behold, it was **very good**" (1:31). The world, in Genesis 1, is not the accidental result of a war among gods, or the prison of the soul, as in some later philosophies, but the good creation of a good God. Human beings, male and female, are created in God's image, blessed, and told to "be fruitful, and multiply, and replenish the earth" (1:28). The chapter is a hymn to the order, goodness, and purpose of the world.

In lesson 2, we will read the second creation story, the garden of Eden, and see how the Bible turns from this vision of a very good world to the story of how it went wrong.

> **Pause and consider.** Genesis 1 calls the sun and moon only "the greater light" and "the lesser light," and makes the sea monsters creatures of God. What message might these choices have carried for people who lived among neighbors who worshiped the sun, moon, and sea?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Read each passage carefully, then write your answers in your notebook.

## 1. The endings of the canon

> "Who is there among you of all his people? The Lord his God be with him, and let him go up." (2 Chronicles 36:23)
> "Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the Lord." (Malachi 4:5)

**Questions**

1. Which passage ends the Tanakh, and which the Christian Old Testament?
2. How does each ending shape the meaning of the collection?

## 2. The Merneptah Stele

> "Israel is laid waste; his seed is not." (Merneptah Stele, c. 1208 BCE)

**Questions**

1. Why is this inscription important for the history of Israel?
2. What does it tell us, and what does it not tell us?

## 3. Two flood stories

> "And of every living thing of all flesh, two of every sort shalt thou bring into the ark." (Genesis 6:19)
> "Of every clean beast thou shalt take to thee by sevens, the male and his female: and of beasts that are not clean by two." (Genesis 7:2)

**Questions**

1. How do these two verses differ?
2. How does the Documentary Hypothesis explain the difference?

## 4. The image of God

> "So God created man in his own image, in the image of God created he him; male and female created he them." (Genesis 1:27)

**Questions**

1. What might it have meant in the ancient Near East to be the "image" of a god?
2. What does this verse imply about the relationship between men and women?

## Drawing the threads together

In a paragraph, explain three different ways of reading the Hebrew Bible, historical, literary, and theological, and show how each might approach Genesis 1.`,
    },
  ],
  readings: [
    { kind: "book", title: "Introduction to the Bible", author: "Christine Hayes", publisher: "Yale University Press", year: "2012", note: "Read chapters 1–3, on the canon, the ancient Near East, and Genesis 1." },
    { kind: "book", title: "The Art of Biblical Narrative", author: "Robert Alter", publisher: "Basic Books", year: "rev. ed., 2011", note: "Read chapters 1 and 3, on literary reading and type-scenes." },
    { kind: "book", title: "The New Oxford Annotated Bible with Apocrypha (NRSV)", author: "ed. Michael D. Coogan et al.", publisher: "Oxford University Press", year: "5th ed., 2018", note: "Read the introductions to the Hebrew Bible and to Genesis, and Genesis 1:1–2:3." },
  ],
  media: [
    { kind: "book", title: "Mimesis: The Representation of Reality in Western Literature", author: "Erich Auerbach, trans. Willard R. Trask", publisher: "Princeton University Press", year: "1953; 50th anniversary ed., 2003", note: "Read chapter 1, \"Odysseus' Scar.\"" },
    { kind: "book", title: "Who Wrote the Bible?", author: "Richard Elliott Friedman", publisher: "Summit Books", year: "1987", note: "A readable account of the Documentary Hypothesis." },
  ],
  questions: [
    {
      prompt: "What does the acronym Tanakh stand for?",
      choices: [
        "Torah, Talmud, Kabbalah",
        "Torah, Nevi'im, Ketuvim (Law, Prophets, Writings)",
        "Torah, Nevi'im, Kings",
        "Testament, Nations, Kingdom",
      ],
      answer: 1,
      explanation: "The three divisions of the Jewish Bible.",
    },
    {
      prompt: "How do the Protestant and Catholic Old Testaments differ?",
      choices: [
        "The Catholic omits Genesis",
        "The Catholic includes deuterocanonical books such as Tobit, Judith, and the Maccabees",
        "The Protestant includes the Talmud",
        "They do not differ",
      ],
      answer: 1,
      explanation: "Protestants call these books the Apocrypha.",
    },
    {
      prompt: "Who were the Masoretes?",
      choices: [
        "Greek translators",
        "Jewish scholars who added vowels, accents, and notes to the Hebrew text",
        "The authors of the Dead Sea Scrolls",
        "Babylonian priests",
      ],
      answer: 1,
      explanation: "They worked mainly in Tiberias, 7th–10th centuries CE.",
    },
    {
      prompt: "What did the Great Isaiah Scroll show?",
      choices: [
        "That Isaiah was written by Jeremiah",
        "That the text had been copied with remarkable care for over a thousand years",
        "That Isaiah was originally Greek",
        "That the Masoretic Text was a forgery",
      ],
      answer: 1,
      explanation: "It dates to about 125 BCE.",
    },
    {
      prompt: "What is the Septuagint?",
      choices: [
        "A Hebrew manuscript",
        "The ancient Greek translation of the Hebrew Bible",
        "A Latin commentary",
        "A collection of seventy psalms",
      ],
      answer: 1,
      explanation: "Named after the legend of seventy-two translators.",
    },
    {
      prompt: "What do the Ugaritic texts reveal?",
      choices: [
        "The Egyptian exodus",
        "A Canaanite pantheon of El, Asherah, and Baal, with many parallels to biblical imagery",
        "The Code of Hammurabi",
        "The death of Moses",
      ],
      answer: 1,
      explanation: "Found at Ras Shamra from 1928.",
    },
    {
      prompt: "Which inscription contains the earliest reference to \"the house of David\"?",
      choices: [
        "The Merneptah Stele",
        "The Tel Dan Stele",
        "The Cyrus Cylinder",
        "The Black Obelisk",
      ],
      answer: 1,
      explanation: "Ninth century BCE, found in 1993–94.",
    },
    {
      prompt: "What does the Documentary Hypothesis propose?",
      choices: [
        "That Moses wrote the Torah alone",
        "That the Torah was compiled from four sources, J, E, D, and P",
        "That the Bible was written in Greek",
        "That the prophets wrote the Torah",
      ],
      answer: 1,
      explanation: "Classically formulated by Julius Wellhausen.",
    },
    {
      prompt: "What is a biblical \"type-scene\"?",
      choices: [
        "A printing error",
        "A conventional scene that recurs with variations, such as the betrothal at the well",
        "A scene of typology",
        "A scene in which God speaks",
      ],
      answer: 1,
      explanation: "Robert Alter, The Art of Biblical Narrative.",
    },
    {
      prompt: "How are the six days of creation in Genesis 1 structured?",
      choices: [
        "In random order",
        "In two parallel sets of three: spaces created, then filled",
        "As a battle among gods",
        "In order of importance",
      ],
      answer: 1,
      explanation: "Days 1–3 separate; days 4–6 populate.",
    },
  ],
  reflection:
    "The Hebrew Bible is a library written over centuries, preserved by the Masoretes and illuminated by the Dead Sea Scrolls, set in the world of Ugarit and Babylon, and read as history, literature, and Scripture. In 500–800 words, explain what you think is the most important thing a modern reader needs to know before beginning to read it, and why.",
};
