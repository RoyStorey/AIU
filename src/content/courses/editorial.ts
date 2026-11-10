import type { Caveat } from "@/lib/schema";

/**
 * The editors' notes on the hand-written courses: claims that rest on later
 * report rather than secure evidence, that scholars dispute, or that were
 * wrong and have been corrected. They appear in each lesson's Comments &
 * Corrections section. Keyed by course code, then by lesson number.
 *
 * Add a note whenever a claim is softened or fixed after a report, so the
 * record of what changed stays with the lesson.
 */
export const editorial: Record<string, Record<number, Caveat[]>> = {
  "ASH 101": {
    1: [
      {
        page: 2, kind: "uncertain",
        claim: "Fu Hao led an army of thirteen thousand men.",
        note: "The figure comes from a single oracle-bone inscription about raising troops for a campaign against the Qiang. Its reading, and whether all those troops served under Fu Hao, are debated by specialists. The lesson says “reportedly.”",
      },
      {
        page: 4, kind: "disputed",
        claim: "The Zhou conquest at Muye took place in 1046 BC.",
        note: "1046 BC is the date adopted by the Xia–Shang–Zhou Chronology Project (2000). Scholars working from the same astronomical and textual evidence have argued for 1045 BC and other years; the lesson gives 1046 as the conventional date and notes the dispute.",
      },
    ],
    2: [
      {
        page: 1, kind: "uncertain",
        claim: "After Changping in 260 BC, Qin buried alive four hundred thousand Zhao soldiers.",
        note: "The number is Sima Qian's, written about a century and a half later. Mass graves excavated near the battlefield confirm a massacre, but not its scale. The lesson calls the figure “surely exaggerated.”",
      },
    ],
    3: [
      {
        page: 1, kind: "disputed",
        claim: "The First Emperor burned the books in 213 BC and put more than 460 scholars to death in 212 BC.",
        note: "The burning of private copies is well attested, but its effect on the survival of texts is debated, and some scholars, among them Michael Nylan and Martin Kern, suspect that the story of the executed scholars was shaped or enlarged by later Confucian writers. The lesson presents both.",
      },
    ],
    4: [
      {
        page: 3, kind: "uncertain",
        claim: "Emperor Yang's first Korean campaign of 612 mobilized more than a million soldiers.",
        note: "The figure comes from the Sui histories, compiled under the Tang. Like most premodern army sizes, it is probably inflated. The lesson flags this.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "Huang Chao's army massacred tens of thousands of foreign merchants at Guangzhou in 879.",
        note: "The report comes from the Arabic account of Abu Zayd al-Sirafi, written some decades later, which gives a figure of 120,000. No Chinese source confirms the number. The lesson attributes it to “Arab sources.”",
      },
    ],
    5: [
      {
        page: 3, kind: "disputed",
        claim: "The size of Zheng He's “treasure ships.”",
        note: "Ming sources give dimensions of about 44 by 18 zhang, roughly 130 meters long. Many naval historians doubt that wooden ships of that size could have sailed, and propose much smaller figures. The lesson says the Ming numbers are “almost certainly exaggerated.”",
      },
      {
        page: 7, kind: "uncertain",
        claim: "The Qianlong Emperor's letter to George III, in the translation of Backhouse and Bland (1914).",
        note: "The translation is free and was made in a period when Western readers took the letter as proof of Chinese arrogance; Edmund Backhouse was later shown to have forged other documents, though not this one, whose Chinese text survives. Modern translations differ in tone. Read it as one rendering, as the source exercise asks.",
      },
    ],
  },
  "ASH 110": {
    1: [
      {
        page: 1, kind: "disputed",
        claim: "Wet-rice farming may have begun in Kyūshū as early as the tenth century BC.",
        note: "This rests on radiocarbon dates published by the National Museum of Japanese History from 2003. Other archaeologists keep a later start, around the fifth century BC. The lesson says the earlier date “remains debated.”",
      },
      {
        page: 3, kind: "disputed",
        claim: "Prince Shōtoku issued the Seventeen-Article Constitution in 604.",
        note: "The text survives only in the Nihon shoki of 720. Some historians, notably Ōyama Seiichi, hold that it was composed later and that the chronicle's Shōtoku is largely a later creation; others defend the traditional attribution. The lesson presents both.",
      },
    ],
    3: [
      {
        page: 4, kind: "uncertain",
        claim: "The sizes of the Mongol invasion forces of 1274 and 1281.",
        note: "The figures come from Chinese and Korean records and are probably inflated, especially the hundred thousand of the Southern Route Army in 1281. Thomas Conlan argues for smaller forces. The lesson gives the figures as “perhaps” and says they “may be exaggerated.”",
      },
    ],
    4: [
      {
        page: 6, kind: "disputed",
        claim: "At Nagashino in 1575, three thousand musketeers firing in rotating volleys destroyed the Takeda cavalry.",
        note: "The number and the volley tactic come from later accounts; Fujimoto Masayuki and others argue they are embellishments, and that the Takeda force was not purely cavalry. The lesson gives the traditional account and the critique.",
      },
    ],
    5: [
      {
        page: 5, kind: "uncertain",
        claim: "Around the mid-nineteenth century, perhaps forty percent of men and fifteen percent of women could read.",
        note: "These are Ronald Dore's estimates (1965), extrapolated from school attendance. Later scholars, such as Richard Rubinger, have stressed how much literacy varied by region, class, and what counts as reading. The lesson calls them disputed.",
      },
    ],
  },
  "POE 101": {
    1: [
      {
        page: 1, kind: "uncertain",
        claim: "Dickinson's definition of poetry: “If I read a book and it makes my whole body so cold no fire ever can warm me…”",
        note: "Dickinson did not write this down. It survives in a letter Thomas Wentworth Higginson wrote to his wife after visiting her in Amherst in August 1870, recording her conversation. It is probably close to what she said, but it is Higginson's report, which is why the lesson says “is reported to have said.”",
      },
      {
        page: 1, kind: "uncertain",
        claim: "Frost's remark that “poetry is what gets lost in translation.”",
        note: "No source in Frost's own writings or recorded talks has been found for this exact sentence. Versions of it appear in recollections by others, notably his friend Louis Untermeyer, and in many quotation books. Treat it as attributed rather than documented.",
      },
    ],
  },
  "POE 110": {
    1: [
      {
        page: 2, kind: "uncertain",
        claim: "Archilochus was the son of an aristocrat and a slave woman.",
        note: "This comes from ancient biographical tradition (reported by the Athenian Critias, as quoted by Aelian), which may itself have been inferred from the poems. Ancient lives of poets often were. The lesson marks it “according to tradition.”",
      },
      {
        page: 2, kind: "uncertain",
        claim: "Spartan mothers told their sons to come home “with your shield, or on it.”",
        note: "The saying is recorded centuries later, in the collection of Sayings of Spartan Women attributed to Plutarch. It reflects what later Greeks believed about Sparta rather than a documented archaic practice.",
      },
      {
        page: 3, kind: "disputed",
        claim: "The story that Sappho's books were burned by church authorities.",
        note: "The lesson calls this a legend without good evidence, which is the view of most scholars. The legend itself goes back to Renaissance writers; the loss of most of Sappho's poetry is better explained by the decline in copying of her difficult Aeolic dialect.",
      },
    ],
    3: [
      {
        page: 3, kind: "uncertain",
        claim: "Housman told his students that Horace's “Diffugere nives” (Odes 4.7) was the most beautiful poem in ancient literature.",
        note: "The remark is known from a student's recollection of a Cambridge lecture, published after Housman's death; the exact words differ between accounts. It is well attested as an anecdote but is not in Housman's own writings.",
      },
    ],
    4: [
      {
        page: 7, kind: "disputed",
        claim: "Beatrice was Bice Portinari, daughter of Folco Portinari.",
        note: "The identification comes from Boccaccio, writing decades after Dante's death. Most scholars accept it, as the lesson says, but it cannot be confirmed from Dante's own works, and some readers regard Beatrice as chiefly a symbolic figure.",
      },
    ],
  },
  "POE 201": {
    2: [
      {
        page: 6, kind: "disputed",
        claim: "Spenser died in London in 1599 “for lack of bread.”",
        note: "The phrase is Ben Jonson's, recorded by William Drummond in his notes of their conversations about twenty years later. Spenser still had a royal pension and had just been sent to London with official dispatches, so many historians doubt that he died destitute.",
      },
    ],
  },
  "POE 210": {
    1: [
      {
        page: 2, kind: "uncertain",
        claim: "Wordsworth said of Blake: “There is no doubt this poor man was mad, but there is something in the madness of this man which interests me more than the sanity of Lord Byron and Walter Scott.”",
        note: "The remark is known from Henry Crabb Robinson, a friend of both men, who recorded it in his reminiscences. It is a reliable witness, but a second-hand one; the anecdote of Blake tapping his forehead (“Here”) likewise comes from a visitor's account.",
      },
    ],
  },
  "POE 220": {
    3: [
      {
        page: 1, kind: "uncertain",
        claim: "Virgil's “licking his lines into shape,” his reading to Augustus and Octavia, his request that the Aeneid be burned, and his self-written epitaph.",
        note: "All of these come from the ancient Life of Virgil attributed to Donatus, which drew on Suetonius, writing more than a century after Virgil's death. Scholars take its outline seriously but treat its anecdotes with caution; the epitaph in particular may be a later composition in Virgil's manner.",
      },
    ],
  },
  "POE 301": {
    1: [
      {
        page: 4, kind: "uncertain",
        claim: "Tennyson's joke that he understood only the first and last lines of Sordello, and both were lies.",
        note: "A literary anecdote repeated in many memoirs and histories, and attributed to Tennyson in most; it is not documented in his letters. Similar jokes about Sordello were attributed to others, including Jane Carlyle.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "In “Parting at Morning,” “him” is the sun, and Browning said so.",
        note: "Browning's explanation was given in answer to a reader's query late in his life and is known from that report. Some readers continue to take “him” as the man; the lesson's reading follows Browning's.",
      },
    ],
    2: [
      {
        page: 8, kind: "uncertain",
        claim: "Hopkins's last words were “I am so happy, I am so happy.”",
        note: "Recorded by members of his Jesuit community who were present. Last words are often shaped in the retelling; the report is early and plausible but not independently confirmed.",
      },
    ],
  },
  "IAH 110": {
    1: [
      {
        page: 1, kind: "disputed",
        claim: "Most estimates put the population north of Mexico in 1492 between about two and seven million.",
        note: "Estimates range from James Mooney's 1.15 million (1928) to Henry Dobyns's eighteen million (1983). The range given is where most recent estimates fall; none is a count.",
      },
      {
        page: 2, kind: "disputed",
        claim: "Human footprints at White Sands, New Mexico, are 21,000 to 23,000 years old.",
        note: "The dates, published in 2021 and supported by further tests in 2023, are still questioned by some archaeologists. The lesson says the question is not settled.",
      },
      {
        page: 6, kind: "disputed",
        claim: "The date of Serpent Mound.",
        note: "Radiocarbon studies have pointed both to about 300 BC (Adena) and to about AD 1070 (Fort Ancient). The lesson gives both.",
      },
    ],
    2: [
      {
        page: 1, kind: "uncertain",
        claim: "Cahokia had perhaps ten or fifteen thousand people in the central town.",
        note: "Population estimates for Cahokia range from under ten thousand to thirty thousand or more for the wider region. The figure given is a common middle estimate.",
      },
      {
        page: 4, kind: "disputed",
        claim: "The founding date of the Haudenosaunee League.",
        note: "Most scholars place it between about 1450 and 1525 on archaeological grounds; Barbara Mann and Jerry Fields argued for 1142 from an eclipse in the tradition. The lesson presents the question as open.",
      },
      {
        page: 5, kind: "disputed",
        claim: "The League influenced the framers of the U.S. Constitution.",
        note: "Argued by Donald Grinde and Bruce Johansen and acknowledged by Congress in 1988; disputed by Elisabeth Tooker and others. The lesson sets out both sides.",
      },
    ],
    3: [
      {
        page: 2, kind: "disputed",
        claim: "What Chaco Canyon was.",
        note: "Archaeologists disagree whether Chaco was a pilgrimage center with a small resident population or a political center ruled by an elite; Stephen Lekson argues for a regional state. The lesson gives the main views.",
      },
      {
        page: 3, kind: "disputed",
        claim: "Evidence of cannibalism at some Ancestral Puebloan sites.",
        note: "Interpretations by Christy Turner and others have been strongly contested, and many Pueblo people reject them. The lesson describes the claims as disputed.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "What Popé taught.",
        note: "Known mainly from the testimony of Pueblo people questioned by Spanish officials after the revolt, through interpreters and in the officials' own words.",
      },
    ],
    4: [
      {
        page: 2, kind: "disputed",
        claim: "Native peoples of the northern Rockies and Plains had horses by the early 1600s.",
        note: "This rests on a 2023 study of horse remains made with Native scholars. It revises the older view that horses spread mainly after the Pueblo Revolt of 1680; some details of its dating may be refined.",
      },
      {
        page: 3, kind: "disputed",
        claim: "The Comanche built an empire.",
        note: "Pekka Hämäläinen's argument has been highly influential but criticized by scholars who think “empire” misdescribes a decentralized people. The lesson presents both views.",
      },
      {
        page: 7, kind: "disputed",
        claim: "The killings of Native Californians, 1846–1873, were genocide.",
        note: "Benjamin Madley makes the case in detail, and California's governor used the word in 2019; some historians emphasize disease and starvation instead. The lesson sets out the evidence and the debate.",
      },
    ],
    5: [
      {
        page: 4, kind: "uncertain",
        claim: "Oral traditions of the coast remember the Cascadia earthquake of January 26, 1700.",
        note: "The earthquake's date is secure from Japanese tsunami records and tree rings. The link to particular oral traditions is strong but rests on matching their details and genealogical dating to the event.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "The Tuniit of Inuit tradition are the Dorset people.",
        note: "Widely accepted by archaeologists and Inuit scholars, but an identification rather than a certainty.",
      },
    ],
  },
  "PAT 101": {
    1: [
      {
        page: 3, kind: "uncertain",
        claim: "Perhaps seven or eight thousand Christians in AD 100, and some two hundred thousand by 200.",
        note: "These are Rodney Stark's estimates in The Rise of Christianity (1996), projected from an assumed growth rate rather than counted. Other scholars give different figures; the lesson presents them as a guess.",
      },
      {
        page: 4, kind: "disputed",
        claim: "The Didache dates from the late first or early second century.",
        note: "Most scholars place it between about 70 and 120, but some put parts of it as early as the 50s and others well into the second century. As a composite document, its layers may have different dates.",
      },
    ],
    2: [
      {
        page: 1, kind: "disputed",
        claim: "The second-century shrine under St. Peter's Basilica marks the grave of Peter.",
        note: "The excavations of the 1940s found the shrine (probably the “trophy” Gaius mentions around 200) above a poor grave. Whether the grave, or the bones later associated with it, were Peter's is debated. The lesson says the question is still open.",
      },
      {
        page: 2, kind: "disputed",
        claim: "1 Clement was written around AD 96.",
        note: "The traditional date rests partly on reading the letter's “sudden and repeated misfortunes” as a persecution under Domitian, for which the evidence is weak. Laurence Welborn and others allow a range from about 80 to 140.",
      },
      {
        page: 3, kind: "uncertain",
        claim: "Paul reached “the limits of the West,” perhaps Spain.",
        note: "1 Clement 5.7 does not name a place. Spain is a common reading, in light of Romans 15:24; others think a writer in Rome meant Rome itself. The lesson gives both.",
      },
    ],
    3: [
      {
        page: 1, kind: "disputed",
        claim: "Ignatius died around 110, under Trajan.",
        note: "The date comes from Eusebius, who had no firm evidence. Most scholars place the letters between about 105 and 135; Timothy Barnes argued for the 140s.",
      },
      {
        page: 2, kind: "disputed",
        claim: "The seven letters of the middle recension are genuine.",
        note: "This is the consensus established by Zahn and Lightfoot. Robert Joly, Josep Rius-Camps, and Reinhard Hübner have argued that the middle recension is a later forgery or reworking; few scholars have been persuaded.",
      },
    ],
    4: [
      {
        page: 1, kind: "disputed",
        claim: "Polycarp knew the apostle John.",
        note: "Irenaeus, who heard Polycarp as a boy, says so. Some scholars think the John in question was “John the Elder,” whom Papias distinguishes from the apostle.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "When Polycarp was stabbed, “a dove and a great quantity of blood” came out.",
        note: "The dove is missing from Eusebius's version of the text, and many scholars think it is a later addition or a corruption of the Greek. The lesson says so.",
      },
      {
        page: 5, kind: "disputed",
        claim: "Polycarp died on February 22 or 23, 155 or 156.",
        note: "This date is worked out from the proconsul's name and the account's own dating. Eusebius placed the martyrdom around 167, and a few scholars follow him. Candida Moss has argued that the account as we have it may be as late as the third century.",
      },
      {
        page: 7, kind: "disputed",
        claim: "Papias: Mark was Peter's interpreter, and Matthew collected the oracles in Hebrew.",
        note: "These are the earliest traditions about the Gospels, but their reliability is debated. Our Matthew was written in Greek and depends on Mark, so Papias's remark may refer to a different collection or be mistaken.",
      },
    ],
    5: [
      {
        page: 1, kind: "uncertain",
        claim: "The Epistle of Barnabas was written in Alexandria, before about 135.",
        note: "The date rests on reading chapter 16 as a reference to Hadrian's plans for Jerusalem; the place on its allegorical method and early popularity in Alexandria. Neither is certain.",
      },
      {
        page: 3, kind: "uncertain",
        claim: "Hermas was a freedman who had been sold to a woman named Rhoda.",
        note: "This is what the Shepherd says, but whether its opening is autobiography or literary invention is debated, and many scholars think the book was composed over a long period, perhaps by more than one author.",
      },
      {
        page: 4, kind: "disputed",
        claim: "The Muratorian Fragment is a Roman list of the late second century.",
        note: "This has been the usual view. Albert Sundberg and Geoffrey Hahneman argued that it is a fourth-century list from the East. The lesson presents both.",
      },
    ],
  },
  "CLT 101": {
    1: [
      {
        page: 1, kind: "disputed",
        claim: "The poems were written down between about 750 and 650 BCE.",
        note: "This is the majority view; some scholars place the fixing of the text in sixth-century Athens.",
      },
      {
        page: 3, kind: "disputed",
        claim: "Hittite Wilusa is Homer's Ilios, and Ahhiyawa is Achaea.",
        note: "The identifications are widely accepted but not proved, and the historicity of a Trojan War remains contested.",
      },
      {
        page: 3, kind: "uncertain",
        claim: "Schliemann's accounts of finding “Priam's Treasure” and the “Mask of Agamemnon.”",
        note: "Some scholars have questioned the circumstances of both finds; both objects are older than any date for the war.",
      },
    ],
    3: [
      {
        page: 3, kind: "disputed",
        claim: "Cleopatra in Phoenix's story deliberately mirrors Patroclus's name.",
        note: "The connection is argued by Gregory Nagy and others; it is an interpretation, not a fact stated in the poem.",
      },
      {
        page: 4, kind: "disputed",
        claim: "Book 10, the Doloneia, is a later insertion.",
        note: "Ancient commentators and many modern scholars think so; others defend it as part of the original design.",
      },
    ],
    4: [
      {
        page: 5, kind: "uncertain",
        claim: "The Lefkandi burial shows early Iron Age human sacrifice.",
        note: "Whether the woman buried there was sacrificed is debated.",
      },
    ],
    5: [
      {
        page: 1, kind: "disputed",
        claim: "The poet of the Odyssey knew the Iliad.",
        note: "Monro's law can be explained either by deliberate avoidance or by independent development within one tradition.",
      },
      {
        page: 2, kind: "uncertain",
        claim: "Demodocus's first song tells of a quarrel between Odysseus and Achilles.",
        note: "The episode is otherwise unknown; it may reflect a lost tradition or a deliberate variation on the Iliad's quarrel.",
      },
      {
        page: 6, kind: "corrected",
        claim: "Keats's “stout Cortez … upon a peak in Darien.”",
        note: "It was Vasco Núñez de Balboa, not Cortés, who first saw the Pacific from Darien, in 1513; the lesson notes Keats's error.",
      },
    ],
  },
  "CLT 110": {
    1: [
      {
        page: 2, kind: "uncertain",
        claim: "Thespis performed the first tragedy around 534 BCE.",
        note: "The date and the story of Thespis come from late sources; the origins of tragedy are obscure.",
      },
      {
        page: 3, kind: "disputed",
        claim: "The Dionysia's ceremonies made it a festival of civic ideology.",
        note: "Simon Goldhill's influential view; other scholars give the ceremonies less weight or stress the festival's religious character.",
      },
      {
        page: 5, kind: "disputed",
        claim: "Some women probably attended the theater.",
        note: "The evidence is indirect and ambiguous; scholars remain divided.",
      },
    ],
    2: [
      {
        page: 1, kind: "uncertain",
        claim: "Aeschylus was killed by a tortoise dropped by an eagle.",
        note: "A late and fanciful story, reported in the ancient Life; the epitaph's authorship is also uncertain.",
      },
      {
        page: 5, kind: "disputed",
        claim: "Prometheus Bound is by Aeschylus.",
        note: "Its authorship has been doubted since the nineteenth century on grounds of style, meter, theology, and staging.",
      },
    ],
    3: [
      {
        page: 3, kind: "disputed",
        claim: "Ajax's deception speech is meant to deceive.",
        note: "Scholars disagree whether Ajax lies, changes his mind, or speaks a truth only he understands.",
      },
      {
        page: 5, kind: "disputed",
        claim: "The Philoctetes reflects the case of Alcibiades.",
        note: "A suggestion made by some scholars; others warn against reading the play as political allegory.",
      },
    ],
    4: [
      {
        page: 5, kind: "uncertain",
        claim: "In the lost first Hippolytus, Phaedra declared her love directly.",
        note: "The plot of the lost play is reconstructed from fragments and later reports.",
      },
    ],
    5: [
      {
        page: 3, kind: "uncertain",
        claim: "Socrates stood up in the theater during the Clouds.",
        note: "The story is told by Aelian, centuries later.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "The Frogs was given a second performance because of its parabasis.",
        note: "The report comes from an ancient hypothesis citing Dicaearchus; details are uncertain.",
      },
    ],
  },
  "DRA 101": {
    1: [
      {
        page: 1, kind: "disputed",
        claim: "Tragedy began with “those who led the dithyramb.”",
        note: "This is Aristotle's account (Poetics 4), written some two centuries after the first tragedies. Many scholars accept a link with Dionysiac choral song; others doubt that Aristotle had good evidence, and the lesson presents it as his view rather than settled fact.",
      },
      {
        page: 4, kind: "disputed",
        claim: "Whether women attended the theater.",
        note: "The ancient evidence is thin and ambiguous, and scholars remain divided. Simon Goldhill, Jeffrey Henderson, and others have argued opposite cases; the lesson leaves the question open.",
      },
    ],
    2: [
      {
        page: 1, kind: "uncertain",
        claim: "Aeschylus was killed by a tortoise dropped by an eagle.",
        note: "The story appears in late sources and is almost certainly a legend. The epitaph mentioning Marathon is better attested, though whether Aeschylus wrote it himself is uncertain.",
      },
      {
        page: 6, kind: "disputed",
        claim: "The Eumenides comments on the reforms of Ephialtes.",
        note: "That the play's founding of the Areopagus as a homicide court alludes to the reforms of 462 is widely accepted; whether it supports or warns against them is not. The lesson gives both readings.",
      },
    ],
    3: [
      {
        page: 1, kind: "uncertain",
        claim: "Sophocles was elected general because the Athenians admired his Antigone.",
        note: "The claim comes from an ancient summary attached to the play and may be an inference from the dates rather than a record. That he served as general in 441–440 is better attested.",
      },
      {
        page: 3, kind: "disputed",
        claim: "The closing lines of Oedipus the King.",
        note: "Several editors think the final choral lines (1524–1530) are a later addition; others defend them. The lesson notes that their authenticity is disputed.",
      },
      {
        page: 5, kind: "disputed",
        claim: "Antigone's speech preferring a brother to a husband or child.",
        note: "Lines 904–920 closely echo Herodotus 3.119. Some scholars, following Goethe's wish, have suspected an interpolation; most editors now keep them. The lesson presents both views.",
      },
    ],
    4: [
      {
        page: 1, kind: "uncertain",
        claim: "Euripides was born on the day of Salamis and wrote in a cave on Salamis.",
        note: "The birth date is a later tidying of the three tragedians into a single story. The cave tradition is ancient, and a cave identified by Yannis Lolos in 1997 yielded a sherd bearing part of his name; its date and significance are debated.",
      },
      {
        page: 3, kind: "disputed",
        claim: "Medea's monologue, “I understand the evils I am about to do.”",
        note: "Some modern editors (notably Reeve and Diggle, followed by Kovacs) delete part or all of lines 1056–1080 as interpolated; others defend them. The lines were quoted as Euripides's in antiquity, as the lesson says.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "The Trojan Women as a response to Melos.",
        note: "Euripides probably composed the play before the fall of Melos was known, since plays were chosen months before the festival. The lesson says the connection is one the audience would have drawn, not necessarily one he intended.",
      },
    ],
    5: [
      {
        page: 2, kind: "disputed",
        claim: "The meaning of catharsis.",
        note: "There is no consensus. Purgation (Bernays), purification or moral refinement (Lessing and many since), and intellectual clarification (Golden) all have defenders, and a minority regard the phrase as a later insertion. The lesson sets out the main views without choosing.",
      },
      {
        page: 3, kind: "disputed",
        claim: "Hamartia means an error rather than a flaw of character.",
        note: "Most scholars now favor “error,” especially an error of fact, but some argue that Aristotle's word can include moral failings. The lesson gives the majority view and notes the older reading.",
      },
    ],
  },
  "DRA 110": {
    1: [
      {
        page: 1, kind: "disputed",
        claim: "The “upstart Crow” pamphlet was written by Robert Greene.",
        note: "Greene's Groatsworth of Wit was published after Greene's death by Henry Chettle, and some scholars have argued that Chettle wrote all or part of it. The lesson calls it “attributed” to Greene.",
      },
      {
        page: 1, kind: "uncertain",
        claim: "John Shakespeare may have been a secret Catholic.",
        note: "The case rests on a “spiritual testament” found in the eighteenth century (and since lost) and on his recusancy listing, which the record itself attributes to fear of debt. Scholars remain divided; the lesson says the evidence is uncertain.",
      },
      {
        page: 3, kind: "uncertain",
        claim: "Shakespeare played the Ghost in Hamlet and old Adam in As You Like It.",
        note: "Both are traditions first recorded long after his death (by Nicholas Rowe in 1709 and by an eighteenth-century anecdote, respectively). They are plausible but unproven, and the lesson presents them as tradition.",
      },
    ],
    2: [
      {
        page: 2, kind: "uncertain",
        claim: "The Dream was written for an aristocratic wedding.",
        note: "A long-standing conjecture with several candidate weddings and no direct evidence. The 1600 quarto says it was acted publicly by the Lord Chamberlain's Men, as the lesson notes.",
      },
      {
        page: 3, kind: "uncertain",
        claim: "Titania's speech reflects the wet summers of the mid-1590s.",
        note: "The harvests of 1594–1597 were indeed disastrous, and many editors make the connection, but it is an inference from the speech rather than a documented allusion.",
      },
    ],
    3: [
      {
        page: 3, kind: "disputed",
        claim: "Antonio's love for Sebastian as romantic love.",
        note: "Some critics read it as erotic, others as the intense male friendship idealized in Renaissance writing. The lesson reports that many modern readers and directors take the first view, without settling the question.",
      },
    ],
    4: [
      {
        page: 2, kind: "uncertain",
        claim: "Elizabeth said, “I am Richard II, know ye not that?”",
        note: "The remark comes from a later account of William Lambarde's audience with the queen in August 1601, first printed in the eighteenth century. It is widely cited but not contemporary, as the lesson indicates.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "Falstaff was renamed because the Cobham family objected to “Oldcastle.”",
        note: "The original name is secure; the reason for the change is inferred from seventeenth-century reports and the epilogue to Part 2. Most scholars accept the Cobham explanation, but it is not directly documented.",
      },
    ],
    5: [
      {
        page: 2, kind: "disputed",
        claim: "The Act 5 Chorus refers to the Earl of Essex.",
        note: "Most scholars read “the general of our gracious empress” as Essex in 1599. A minority have proposed Lord Mountjoy, who took over in Ireland in 1600, which would date the passage later.",
      },
      {
        page: 4, kind: "corrected",
        claim: "The casualty figures for Agincourt.",
        note: "The play follows Holinshed's figure of twenty-five English commoners killed. Modern historians put English losses in the hundreds, still far fewer than the French. The lesson notes that the figures are part of the legend.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "John Wilkes Booth shouted “Sic semper tyrannis.”",
        note: "Witnesses at Ford's Theatre gave differing accounts of what he cried, and some heard nothing in Latin. Booth's own diary claims the words. The lesson says “according to some witnesses.”",
      },
    ],
  },
  "AMH 301": {
    4: [
      {
        page: 2, kind: "uncertain",
        claim: "McKinley said he would “uplift and civilize and Christianize” the Filipinos.",
        note: "The words come from a recollection by the Methodist James Rusling, published in 1903, four years after the meeting and after McKinley's death. Historians disagree about how reliable it is; the lesson says it is uncertain whether he said them.",
      },
      {
        page: 2, kind: "uncertain",
        claim: "Some 200,000 or more Filipino civilians died in the Philippine–American War.",
        note: "No reliable count exists. Estimates of civilian deaths from violence, famine, and disease, including a cholera epidemic, range from about 200,000 to over 700,000, depending on method and on which years and regions are included.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "The dead of the Tulsa massacre of 1921.",
        note: "The official count at the time was 36. A 2001 Oklahoma commission estimated between 75 and 300, and excavations for mass graves continue. The lesson gives the range.",
      },
    ],
    5: [
      {
        page: 5, kind: "corrected",
        claim: "The “switch in time that saved nine.”",
        note: "Justice Roberts voted to uphold the minimum-wage law in conference in December 1936, before the court-packing plan was announced in February 1937. The lesson notes this; the quip implies a cause that the timing does not support.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Between about 400,000 and a million people of Mexican descent were “repatriated.”",
        note: "Older estimates centered on 400,000 to 500,000; Francisco Balderrama and Raymond Rodríguez, in Decade of Betrayal (1995; rev. 2006), argued for up to a million. Many were U.S. citizens. The lesson gives the range.",
      },
    ],
  },
  "EUH 101": {
    1: [
      {
        page: 3, kind: "uncertain",
        claim: "Petrarch climbed Mont Ventoux in April 1336.",
        note: "The letter is dated 1336, but many scholars think Petrarch wrote or reworked it years later, perhaps in the early 1350s, as a literary and allegorical composition. Whether the climb happened as described is uncertain.",
      },
    ],
    3: [
      {
        page: 3, kind: "disputed",
        claim: "Luther posted the Ninety-Five Theses on the door of the Castle Church.",
        note: "The story rests on Melanchthon's account after Luther's death. Erwin Iserloh (1961) argued that it never happened; a note by Georg Rörer, found in 2006, supports a posting. The letter to Archbishop Albrecht dated October 31, 1517, is certain.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "Luther said “Here I stand; I can do no other.”",
        note: "The words appear in the earliest printed versions of his speech at Worms but not in the transcripts made at the time. The lesson quotes the transcript and notes the doubt.",
      },
      {
        page: 2, kind: "disputed",
        claim: "The date of Luther's “tower experience.”",
        note: "Luther's own 1545 account points to 1518–1519; many scholars place his breakthrough around 1513–1515, and others see a gradual development rather than a single moment.",
      },
    ],
    4: [
      {
        page: 5, kind: "uncertain",
        claim: "More died “the king's good servant, but God's first.”",
        note: "The words come from a newsletter report of his execution, the Paris News Letter of 1535, not from a verbatim record. They are widely accepted but cannot be verified.",
      },
    ],
    5: [
      {
        page: 5, kind: "uncertain",
        claim: "Henry IV said “Paris is well worth a Mass.”",
        note: "The remark is not recorded by any contemporary and is almost certainly apocryphal, as the lesson says.",
      },
      {
        page: 7, kind: "disputed",
        claim: "The Peace of Westphalia created the modern system of sovereign states.",
        note: "A long-standing textbook view, now criticized by historians such as Andreas Osiander and Peter Wilson, who note that the treaties did not define sovereignty and that the Holy Roman Empire survived until 1806. The lesson presents both.",
      },
    ],
  },
  "EUH 110": {
    1: [
      {
        page: 2, kind: "uncertain",
        claim: "Louis XIV said “L'État, c'est moi.”",
        note: "The phrase is not recorded by any contemporary and is almost certainly apocryphal, as the lesson says.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Galileo muttered “And yet it moves.”",
        note: "The words first appear in print in 1757, more than a century after the trial, though a Spanish painting of about 1643 may allude to them. They are almost certainly legend.",
      },
    ],
    2: [
      {
        page: 6, kind: "uncertain",
        claim: "The dead of the Terror and the Vendée.",
        note: "Some 17,000 official death sentences are documented; estimates of total deaths in the Terror, including prisons and summary killings, run from about 35,000 to 50,000. Estimates for the Vendée war range from about 120,000 to over 200,000.",
      },
    ],
    4: [
      {
        page: 5, kind: "uncertain",
        claim: "Grey said, “The lamps are going out all over Europe.”",
        note: "The remark comes from Grey's memoirs (1925), recalling a conversation on the eve of war; it is reliable as his own recollection but was not recorded at the time.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "The war killed some nine to ten million soldiers and six or seven million civilians.",
        note: "Military deaths are fairly well documented; civilian deaths, especially from hunger, disease, and the Armenian genocide, are much less certain, and estimates vary widely.",
      },
    ],
    5: [
      {
        page: 4, kind: "uncertain",
        claim: "Five to seven million died in the Soviet famine of 1932–1933, three and a half to five million in Ukraine.",
        note: "Demographic estimates differ by method; most recent scholarship falls within these ranges. Whether the Ukrainian famine was genocide is debated among historians, though many governments recognize it as such.",
      },
      {
        page: 7, kind: "corrected",
        claim: "Höss's figure of three million dead at Auschwitz.",
        note: "Höss's 1946 affidavit greatly overstated the number. Franciszek Piper's research for the Auschwitz Museum established the figure of about 1.1 million, which the lesson gives; the source exercise asks students to consider the discrepancy.",
      },
    ],
  },
  "MDH 101": {
    1: [
      {
        page: 3, kind: "disputed",
        claim: "Constantine saw a cross in the sky before the Milvian Bridge.",
        note: "The vision is reported only by Eusebius, decades later, from Constantine's own account; Lactantius, writing earlier, mentions only a dream. Whether anything was seen, and what, cannot be known; the lesson gives both versions.",
      },
      {
        page: 2, kind: "uncertain",
        claim: "Diocletian answered that he preferred to grow cabbages.",
        note: "The story comes from the fourth-century Epitome de Caesaribus and may be embellished; it is widely repeated but not contemporary.",
      },
    ],
    2: [
      {
        page: 3, kind: "disputed",
        claim: "Clovis was baptized around 496.",
        note: "Gregory of Tours implies a date around 496; many historians now prefer 508, after the victory at Vouillé, on the evidence of a letter of Avitus of Vienne. The lesson notes the uncertainty.",
      },
      {
        page: 5, kind: "disputed",
        claim: "The Justinianic Plague killed a quarter or more of the Mediterranean population.",
        note: "Older estimates ranged from a quarter to a half. Some recent studies (for example Mordechai and Eisenberg, 2019) argue that its demographic impact has been overstated; others defend high mortality. The lesson notes the debate.",
      },
    ],
    3: [
      {
        page: 6, kind: "uncertain",
        claim: "Leo III removed the icon of Christ from the Chalke Gate.",
        note: "The story is reported by later iconophile sources, and some historians doubt it, or doubt that Leo III was as committed an iconoclast as his son. The lesson says “according to later sources.”",
      },
    ],
    4: [
      {
        page: 1, kind: "disputed",
        claim: "The reliability of the early Muslim sources for Muhammad's life.",
        note: "Revisionist scholars (Crone and Cook, Wansbrough) questioned the late biographical and hadith traditions; most historians now use them critically, giving greatest weight to the Qur'an. The lesson presents the debate.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "Charlemagne had 4,500 Saxons beheaded at Verden.",
        note: "The figure comes from the Royal Frankish Annals. A few historians have suggested a scribal error (decollabat, “beheaded,” for delocabat, “relocated”), but most accept the massacre.",
      },
    ],
    5: [
      {
        page: 3, kind: "uncertain",
        claim: "Alfred burned the cakes.",
        note: "The story first appears in a life of St. Neot written about a century after Alfred's death and is almost certainly legend, as the lesson says.",
      },
      {
        page: 7, kind: "disputed",
        claim: "Fears of the end of the world around the year 1000.",
        note: "Historians disagree: many dismiss the “terrors of the year 1000” as a later myth, while Richard Landes and others argue that apocalyptic expectation was real and widespread. The lesson presents both.",
      },
    ],
  },
  "AFH 101": {
    1: [
      {
        page: 4, kind: "disputed",
        claim: "Cheikh Anta Diop argued that the ancient Egyptians were Black Africans.",
        note: "The question of ancient Egyptian identity remains contested and politically charged. Most Egyptologists see the population as indigenous to northeast Africa and varied, and regard modern racial categories as poorly suited to it; the lesson presents Diop's argument as part of that debate.",
      },
    ],
    2: [
      {
        page: 2, kind: "uncertain",
        claim: "Aksum is the resting place of the Ark of the Covenant.",
        note: "This is Ethiopian Orthodox tradition; the object kept at Aksum is shown to no one but its guardian, and its identity cannot be examined. The lesson reports the belief, not a historical finding.",
      },
      {
        page: 7, kind: "uncertain",
        claim: "The Solomonic kings descended from Solomon and the Queen of Sheba.",
        note: "The genealogy comes from the Kebra Nagast, compiled in the fourteenth century in support of the new dynasty; historians treat it as political and religious legend.",
      },
    ],
    3: [
      {
        page: 5, kind: "disputed",
        claim: "The Almoravids conquered Ghana in 1076.",
        note: "Conrad and Fisher (1982–1983) argued there is no reliable contemporary evidence for a conquest; others still accept some Almoravid military pressure. The lesson presents both positions.",
      },
    ],
    4: [
      {
        page: 2, kind: "uncertain",
        claim: "Sundiata proclaimed a charter at Kurukan Fuga around 1236.",
        note: "The assembly and its charter are known from oral tradition, written down in the twentieth century; the charter text produced in 1998 and recognized by UNESCO in 2009 is a modern reconstruction, and its antiquity cannot be confirmed.",
      },
      {
        page: 3, kind: "disputed",
        claim: "Abu Bakr II's ships may have reached the Americas.",
        note: "The only source is al-Umari's report of Mansa Musa's account. There is no archaeological or other evidence for a landing in the Americas, and most historians reject the idea.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "Mansa Musa was the richest man who ever lived.",
        note: "A popular modern claim that cannot be measured; the lesson treats it as legend and relies on the contemporary reports of his gifts in Cairo.",
      },
    ],
    5: [
      {
        page: 2, kind: "uncertain",
        claim: "The Benin earthworks total some ten thousand miles.",
        note: "The figure is Patrick Darling's estimate from partial surveys; the full extent has not been mapped, and published figures vary.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "Kilwa coins were found on the Wessel Islands off northern Australia.",
        note: "The coins were found in 1944, but how and when they arrived is unknown; they may have been carried long after they were minted, by later traders or ships.",
      },
      {
        page: 7, kind: "uncertain",
        claim: "Kongo was founded around 1390 by Lukeni lua Nimi.",
        note: "The date and founder come from traditions recorded by Portuguese and Kongolese writers in the sixteenth and seventeenth centuries; the date is an estimate.",
      },
    ],
  },
  "AFH 110": {
    1: [
      {
        page: 1, kind: "uncertain",
        claim: "About 12.5 million Africans were embarked and 10.7 million survived the crossing.",
        note: "These are the Trans-Atlantic Slave Trade Database's estimates, built from records of some 36,000 voyages and statistical imputation for missing ones. They are the best available figures but remain estimates, and deaths before embarkation are not included.",
      },
      {
        page: 3, kind: "uncertain",
        claim: "Christopher Columbus may have sailed with Azambuja to build Elmina in 1482.",
        note: "Columbus later claimed to have visited Mina, but no record places him on the 1482 expedition; the lesson flags it as uncertain.",
      },
    ],
    2: [
      {
        page: 2, kind: "uncertain",
        claim: "Njinga sat on a servant's back during her audience with the Portuguese governor in 1622.",
        note: "The story comes from Cavazzi, who wrote decades later and knew Njinga only in old age; it may be embellished. The lesson presents it as a tradition.",
      },
      {
        page: 7, kind: "disputed",
        claim: "The Stono rebels of 1739 were Kongolese Catholic soldiers.",
        note: "This is John Thornton's influential interpretation of the contemporary account's reference to 'Angola'; it is widely accepted but rests on inference rather than direct evidence about the individual rebels.",
      },
    ],
    3: [
      {
        page: 1, kind: "uncertain",
        claim: "West Africa imported between 283,000 and 394,000 guns a year at the peak of the trade.",
        note: "The figures are Joseph Inikori's estimates; other scholars consider them too high. The lesson notes the disagreement.",
      },
      {
        page: 5, kind: "disputed",
        claim: "Agaja conquered Ouidah in order to stop the slave trade.",
        note: "Akinjogbin argued this; Robin Law and most historians since argue that Agaja sought to control the trade, not end it. The lesson presents both positions.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Captives circled the Tree of Forgetting at Ouidah.",
        note: "This and other stations on the Route des Esclaves reflect modern memorial tradition rather than documented practice; the lesson says so.",
      },
    ],
    4: [
      {
        page: 2, kind: "disputed",
        claim: "Olaudah Equiano was born in Igboland and kidnapped as a child.",
        note: "Vincent Carretta found a 1759 baptismal record and a 1773 muster roll listing his birthplace as Carolina; Paul Lovejoy and others defend his African birth. The question is unresolved.",
      },
      {
        page: 1, kind: "uncertain",
        claim: "A quarter or more of captives in the Angolan interior died before reaching the coast.",
        note: "Joseph Miller's estimate rests on scanty evidence; other historians offer lower figures.",
      },
    ],
    5: [
      {
        page: 1, kind: "disputed",
        claim: "By 1850 sub-Saharan Africa's population was perhaps half what it would have been without the slave trades.",
        note: "Patrick Manning's simulation depends on assumptions about African fertility and mortality that cannot be verified; some historians argue the demographic impact was smaller.",
      },
      {
        page: 7, kind: "disputed",
        claim: "Millions of captives passed through the House of Slaves on Gorée.",
        note: "Historians estimate that Gorée shipped tens of thousands rather than millions, and that the house was a merchant residence of the 1770s or later. The lesson presents the site as a place of memory and notes the dispute.",
      },
    ],
  },
  "IAH 101": {
    1: [
      {
        page: 1, kind: "disputed",
        claim: "The Americas held about 54 million people in 1492.",
        note: "Denevan's figure is a widely cited synthesis; estimates range from under 10 million to over 100 million, and most scholars today accept something between about 40 and 70 million.",
      },
      {
        page: 2, kind: "disputed",
        claim: "Human footprints at White Sands date to 21,000–23,000 years ago.",
        note: "The dates were challenged after their 2021 publication; further dating published in 2023 supported them, but some archaeologists remain unconvinced.",
      },
    ],
    2: [
      {
        page: 1, kind: "disputed",
        claim: "The Olmec were the 'mother culture' of Mesoamerica.",
        note: "Some archaeologists see the Olmec as one of several contemporary 'sister cultures'; the lesson presents both views.",
      },
      {
        page: 7, kind: "uncertain",
        claim: "The Maya lowlands held seven to eleven million people in the Late Classic.",
        note: "The PACUNAM estimate depends on assumptions about how many structures were occupied at once and how many people lived in each; other scholars propose lower figures.",
      },
    ],
    3: [
      {
        page: 4, kind: "uncertain",
        claim: "Tenochtitlan was founded in 1325 where an eagle perched on a cactus.",
        note: "The date and the story come from Mexica traditions recorded after the conquest; the date is traditional, and the eagle is a founding legend.",
      },
      {
        page: 7, kind: "disputed",
        claim: "Moctezuma believed Cortés was the returning god Quetzalcoatl.",
        note: "No source from the time of the conquest says so; Townsend and Restall argue the story was created afterward. The lesson presents the debate.",
      },
    ],
    4: [
      {
        page: 4, kind: "disputed",
        claim: "80,400 captives were sacrificed at the rededication of the Templo Mayor in 1487.",
        note: "The figure comes from Diego Durán, writing a century later; most historians consider it impossible. Estimates of annual sacrifices vary widely.",
      },
    ],
    5: [
      {
        page: 4, kind: "uncertain",
        claim: "Pachacuti came to power after defeating the Chanka in 1438.",
        note: "The date comes from Cabello Balboa's chronology, adopted by John Rowe; radiocarbon dates from Machu Picchu suggest Inca expansion may have begun earlier.",
      },
      {
        page: 6, kind: "disputed",
        claim: "Some khipus may have recorded language as well as numbers.",
        note: "Hyland's study of the Collata khipus is suggestive but not a decipherment; whether khipus encoded language remains unresolved.",
      },
    ],
  },
  "MEH 110": {
    1: [
      {
        page: 3, kind: "disputed",
        claim: "Writing developed from clay tokens pressed into envelopes.",
        note: "Schmandt-Besserat's token theory is influential for number signs, but many scholars doubt that writing simply evolved from tokens; the lesson notes the criticism.",
      },
    ],
    2: [
      {
        page: 2, kind: "disputed",
        claim: "Enheduanna composed the hymns attributed to her.",
        note: "The surviving copies date four or five centuries after her lifetime, and attribution to famous figures was common; scholars disagree whether she wrote them.",
      },
      {
        page: 3, kind: "disputed",
        claim: "Drought caused the collapse of the Akkadian empire.",
        note: "Weiss's evidence for a drought around 2200 BC is widely accepted, but its timing relative to Akkad's fall and its causal role are debated.",
      },
      {
        page: 1, kind: "uncertain",
        claim: "Sargon reigned from about 2334 BC.",
        note: "Mesopotamian dates before about 1400 BC depend on which chronology is used; the course follows the middle chronology, which may be off by decades.",
      },
    ],
    3: [
      {
        page: 3, kind: "disputed",
        claim: "Hammurabi's laws were a law code applied by judges.",
        note: "Court records almost never cite the laws; many scholars see them as model verdicts and royal propaganda. The lesson presents the debate.",
      },
    ],
    4: [
      {
        page: 3, kind: "disputed",
        claim: "David and Solomon ruled a powerful united kingdom in the tenth century BC.",
        note: "The Tel Dan stele attests a 'House of David,' but archaeologists such as Finkelstein argue for a modest highland polity; the extent of the kingdom remains contested.",
      },
      {
        page: 2, kind: "uncertain",
        claim: "The Assyrians deported some 4.5 million people.",
        note: "Oded's estimate rests on the Assyrian kings' own figures, which may be inflated.",
      },
    ],
    5: [
      {
        page: 1, kind: "disputed",
        claim: "The Hanging Gardens stood in Babylon.",
        note: "No Babylonian text mentions them; Stephanie Dalley argues they were Sennacherib's gardens at Nineveh, and some doubt they existed. The lesson presents the possibilities.",
      },
      {
        page: 4, kind: "corrected",
        claim: "The Cyrus Cylinder is the first charter of human rights.",
        note: "The cylinder is a Babylonian-style royal inscription; popular 'translations' adding declarations of religious freedom and the abolition of slavery are false. The lesson explains the correct reading.",
      },
    ],
  },
  "MDH 110": {
    1: [
      {
        page: 3, kind: "disputed",
        claim: "A 'feudal revolution' transformed society around the year 1000.",
        note: "Duby, Bois, and Poly argued for a sudden change; Barthélemy and others see gradual evolution and an artifact of changing sources. The lesson presents the debate.",
      },
      {
        page: 1, kind: "uncertain",
        claim: "Europe's population rose from perhaps 35–40 million to 70–80 million between 1000 and 1300.",
        note: "Medieval population figures are estimates built on scattered evidence such as Domesday Book; the trend is secure, the numbers are not.",
      },
    ],
    2: [
      {
        page: 3, kind: "disputed",
        claim: "The crusaders killed tens of thousands in Jerusalem in 1099.",
        note: "Later Muslim sources give 70,000; Benjamin Kedar's study suggests thousands rather than tens of thousands. The massacre itself is not in doubt.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "The legate at Béziers said, 'Kill them all; God will know his own.'",
        note: "The words are reported only by Caesarius of Heisterbach, writing years later and not present; historians doubt they were spoken, though the massacre occurred.",
      },
    ],
    3: [
      {
        page: 3, kind: "disputed",
        claim: "The Cathars formed an organized dualist counter-church.",
        note: "Pegg and Moore argue the 'Cathar Church' was largely constructed by inquisitors; Taylor, Biller, and others defend its reality. The lesson presents both views.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Francis received the stigmata on La Verna in 1224.",
        note: "The stigmata are reported by Francis's companions and early biographers; the lesson reports the tradition without adjudicating it.",
      },
    ],
    4: [
      {
        page: 2, kind: "disputed",
        claim: "The letters of Abelard and Héloïse are authentic.",
        note: "They survive in later copies; Benton once questioned them, and Mews's attribution of the anonymous love letters is debated. Most scholars accept the main correspondence as substantially authentic.",
      },
      {
        page: 5, kind: "disputed",
        claim: "The Condemnation of 1277 marked the birth of modern science.",
        note: "Pierre Duhem's thesis is now regarded as exaggerated, though it drew attention to real fourteenth-century advances in natural philosophy.",
      },
    ],
    5: [
      {
        page: 3, kind: "corrected",
        claim: "Henry II said, 'Will no one rid me of this turbulent priest?'",
        note: "The familiar line is a later invention; contemporary accounts report a different outburst, which the lesson quotes.",
      },
      {
        page: 4, kind: "disputed",
        claim: "Magna Carta guaranteed trial by jury and due process.",
        note: "These readings come largely from seventeenth-century lawyers such as Coke; in 1215 clause 39 protected free men's right to judgment by peers or the law of the land.",
      },
    ],
  },
  "BRL 101": {
    1: [
      {
        page: 1, kind: "disputed",
        claim: "The date of Beowulf's composition.",
        note: "Scholars place it anywhere from the early eighth to the early eleventh century; metrical evidence now persuades many of an early date, but the question is open.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Alcuin's letter asking 'What has Ingeld to do with Christ?' was addressed to a particular bishop.",
        note: "It was long thought to be addressed to Hygebald of Lindisfarne; Donald Bullough argued for Unwona of Leicester. The lesson names no recipient.",
      },
    ],
    2: [
      {
        page: 6, kind: "uncertain",
        claim: "The Sutton Hoo ship burial is the grave of Rædwald.",
        note: "The identification rests on the coin dating of c. 625 and Bede's account of Rædwald; it is widely accepted but not proven.",
      },
    ],
    3: [
      {
        page: 1, kind: "uncertain",
        claim: "Pearl, Cleanness, Patience, and Sir Gawain are by one poet.",
        note: "Common authorship is inferred from dialect, style, and the single manuscript; it is widely accepted but cannot be proved.",
      },
    ],
    4: [
      {
        page: 1, kind: "disputed",
        claim: "The 1380 Cecily Champain release concerned rape.",
        note: "The Latin raptus is ambiguous; documents found in 2022 suggest a labor-law dispute. The lesson reports both readings.",
      },
      {
        page: 7, kind: "disputed",
        claim: "Adam Pinkhurst copied the Hengwrt and Ellesmere manuscripts.",
        note: "Linne Mooney's 2004 identification was challenged by Lawrence Warner and others in 2018.",
      },
    ],
    5: [
      {
        page: 6, kind: "disputed",
        claim: "The Prioress's Tale expresses Chaucer's own views.",
        note: "Some critics read the tale as a portrait of the Prioress's limited piety; others see no distance between poet and tale. The lesson presents the debate and the tale's real harm.",
      },
    ],
  },
  "BRL 110": {
    1: [
      {
        page: 7, kind: "uncertain",
        claim: "More said on the scaffold that he died 'the king's good servant, but God's first.'",
        note: "The words come from a contemporary Paris newsletter account; the scaffold jests come from his early biographers. They are widely accepted but not verbatim records.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Most of the King James New Testament follows Tyndale's wording.",
        note: "Estimates of the share vary with method; a common figure is around 80 percent or more.",
      },
    ],
    2: [
      {
        page: 3, kind: "uncertain",
        claim: "The dying Sidney gave his water to a soldier, saying 'Thy necessity is yet greater than mine.'",
        note: "The story comes only from Fulke Greville's Life, written decades later as part of Sidney's legend.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Ralegh wrote 'The Nymph's Reply to the Shepherd.'",
        note: "The poem was first printed anonymously; the attribution to Ralegh comes later.",
      },
    ],
    3: [
      {
        page: 7, kind: "uncertain",
        claim: "One of Spenser's children died when Kilcolman was burned in 1598.",
        note: "The claim rests on Ben Jonson's later remark to Drummond; no contemporary record confirms it.",
      },
    ],
    4: [
      {
        page: 1, kind: "uncertain",
        claim: "Donne signed a letter 'John Donne, Anne Donne, Un-done.'",
        note: "The story is told by Izaak Walton and is probably apocryphal.",
      },
    ],
    5: [
      {
        page: 3, kind: "disputed",
        claim: "Satan is the hero of Paradise Lost.",
        note: "Blake and Shelley read Satan as a heroic rebel; Lewis and Fish read him as self-deceived or as a trap for the reader. The lesson presents the debate.",
      },
    ],
  },
  "AML 101": {
    1: [
      {
        page: 4, kind: "disputed",
        claim: "The Wampanoag may have come to the 1621 harvest uninvited, after hearing the colonists' guns.",
        note: "The only firsthand source, Edward Winslow's letter in Mourt's Relation, says Massasoit arrived with some ninety men; whether they were invited is not stated and remains debated.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "Squanto escaped from Spain or was freed by Spanish friars.",
        note: "The friars story rests on a later account by Ferdinando Gorges and others; how he left Spain is not documented.",
      },
    ],
    2: [
      {
        page: 1, kind: "uncertain",
        claim: "Winthrop delivered 'A Model of Christian Charity' aboard the Arbella.",
        note: "The manuscript's note says it was written 'on board the Arbella', but scholars such as Hugh Dawson have argued it was delivered in Southampton before sailing; the occasion is unknown.",
      },
    ],
    3: [
      {
        page: 3, kind: "disputed",
        claim: "Rowlandson's narrative was shaped or edited by Puritan ministers, perhaps Increase Mather.",
        note: "Mather is widely believed to have written the preface ('Per Amicum'), but the extent of any editing of the narrative itself is a matter of scholarly argument.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "Giles Corey's last words were 'More weight.'",
        note: "The words come from later tradition, first recorded by Robert Calef; there is no direct record of the pressing.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "Increase Mather had Calef's More Wonders of the Invisible World burned in Harvard Yard.",
        note: "The burning is reported by tradition, not by contemporary record.",
      },
    ],
    4: [
      {
        page: 3, kind: "uncertain",
        claim: "James Davenport threw his own breeches onto the New London bonfire.",
        note: "The detail appears in hostile contemporary reports and later retellings; accounts differ.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "Edwards delivered 'Sinners' quietly, his eyes fixed on the bell rope.",
        note: "The description of his manner comes from later recollections, not from witnesses at Enfield.",
      },
    ],
    5: [
      {
        page: 4, kind: "disputed",
        claim: "Common Sense sold 120,000 copies in three months and perhaps 150,000 or more in a year.",
        note: "These are Paine's own figures; Trish Loughran and other scholars argue the real numbers were far lower, though it was still the best-selling pamphlet of the Revolution.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "Paine gave his profits from Common Sense to buy mittens for the Continental Army.",
        note: "Paine said he directed his share to the troops; how much reached them is unclear.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "Franklin changed Jefferson's 'sacred and undeniable' to 'self-evident.'",
        note: "The change appears on the rough draft, but whose hand made it has been debated; it is traditionally credited to Franklin.",
      },
    ],
  },
  "AML 110": {
    1: [
      {
        page: 1, kind: "uncertain",
        claim: "Whitman said, 'I was simmering, simmering, simmering; Emerson brought me to a boil.'",
        note: "The remark is reported secondhand by J. T. Trowbridge, decades later; its exact wording is not certain.",
      },
    ],
    2: [
      {
        page: 1, kind: "uncertain",
        claim: "Thoreau said Harvard taught all the branches of learning 'but none of the roots.'",
        note: "The quip is attributed to him in later anecdote, not in his own writings.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "Emerson asked Thoreau in jail, 'Why are you here?' and Thoreau replied, 'Why are you not here?'",
        note: "The exchange first appears in print long after both men's deaths and is almost certainly apocryphal, as the lesson says.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "Thoreau's aunt Maria paid his poll tax.",
        note: "Family tradition names her; the payer was veiled and other relatives have been suggested.",
      },
    ],
    3: [
      {
        page: 7, kind: "uncertain",
        claim: "Emerson cut the dedication to Franklin Pierce out of his copy of Our Old Home.",
        note: "The story is told in later reminiscence; no copy survives to confirm it.",
      },
    ],
    4: [
      {
        page: 1, kind: "corrected",
        claim: "Melville lived among the Typee for four months.",
        note: "Melville's own figure in Typee; records of his ship and later scholarship put the stay at about four weeks, as the lesson states.",
      },
      {
        page: 7, kind: "disputed",
        claim: "The British edition's omission of the Epilogue confused reviewers about the narrator's survival.",
        note: "Some reviews complained of this explicitly; how much the omission shaped the poor British reception is debated.",
      },
    ],
    5: [
      {
        page: 7, kind: "uncertain",
        claim: "Lincoln greeted Stowe as 'the little woman who wrote the book that made this great war.'",
        note: "The words come from Stowe family tradition, first printed decades later; most historians treat them as apocryphal.",
      },
      {
        page: 1, kind: "disputed",
        claim: "Elizabeth Melville's family considered helping her leave him in 1867.",
        note: "The evidence is a few letters discovered in the 1970s; what lay behind the plan, and how serious it was, remain disputed.",
      },
    ],
  },
  "AAL 101": {
    1: [
      {
        page: 2, kind: "disputed",
        claim: "Particular spirituals such as 'Follow the Drinking Gourd' carried coded escape instructions.",
        note: "Douglass attests to double meanings in general, but most claims about specific coded songs appear only in the twentieth century; 'Follow the Drinking Gourd' was first published in 1928.",
      },
      {
        page: 3, kind: "uncertain",
        claim: "Lucy Terry Prince argued before the Vermont Supreme Court and addressed the trustees of Williams College.",
        note: "Both stories were recorded long after her death and their details are uncertain, as the lesson notes.",
      },
      {
        page: 6, kind: "disputed",
        claim: "Equiano was born in Igboland, in present-day Nigeria.",
        note: "A 1759 baptismal record and a 1773 muster roll give South Carolina; Vincent Carretta and Paul Lovejoy disagree on what they mean.",
      },
    ],
    2: [
      {
        page: 7, kind: "uncertain",
        claim: "Douglass told a young man, 'Agitate! Agitate! Agitate!'",
        note: "The advice is attributed to him in later recollection; no contemporary record of the exchange survives.",
      },
      {
        page: 7, kind: "uncertain",
        claim: "Douglass said his first wife was the color of his mother and his second the color of his father.",
        note: "The remark is reported secondhand and may be apocryphal.",
      },
    ],
    3: [
      {
        page: 2, kind: "uncertain",
        claim: "Dr. Norcom fathered eleven enslaved children.",
        note: "The figure is Jacobs's own ('to my knowledge'); it has not been confirmed from records.",
      },
    ],
    4: [
      {
        page: 1, kind: "uncertain",
        claim: "Georgia offered $1,000 for Walker dead and $10,000 alive.",
        note: "The figures come from contemporary reports and later accounts; no Georgia statute naming such a bounty has been found.",
      },
      {
        page: 2, kind: "disputed",
        claim: "Sojourner Truth asked, 'Ain't I a woman?' at Akron in 1851.",
        note: "The refrain appears in Frances Gage's 1863 account but not in Marius Robinson's 1851 report; Nell Irvin Painter judges Robinson's closer to the speech.",
      },
    ],
    5: [
      {
        page: 5, kind: "uncertain",
        claim: "Du Bois's son might have lived had a white doctor been willing to treat him.",
        note: "This was Du Bois's belief; the medical circumstances of the child's diphtheria are not documented in detail.",
      },
    ],
  },
  "WLT 101": {
    1: [
      {
        page: 1, kind: "uncertain",
        claim: "George Smith was so excited by the flood tablet that he began to undress.",
        note: "The story comes from a colleague's recollection published years later; it may be embellished.",
      },
      {
        page: 1, kind: "uncertain",
        claim: "Sîn-lēqi-unninni composed the Standard Babylonian version.",
        note: "The attribution comes from a later Assyrian catalogue of authors; his exact role, and his date, are uncertain.",
      },
    ],
    2: [
      {
        page: 3, kind: "disputed",
        claim: "The author of Ecclesiastes may have known the Gilgamesh tradition.",
        note: "The parallel with Siduri's advice is close, but direct influence cannot be proved; both may draw on common wisdom.",
      },
    ],
    3: [
      {
        page: 1, kind: "disputed",
        claim: "The Iliad and Odyssey were composed around 750–675 BCE.",
        note: "Dates proposed by scholars range from the late eighth to the mid-sixth century BCE, and some doubt that a single poet composed either.",
      },
      {
        page: 1, kind: "uncertain",
        claim: "Hisarlik is Homer's Troy, the Hittite Wilusa.",
        note: "The identification is widely accepted but not certain, and whether a Trojan War like Homer's took place remains unknown.",
      },
    ],
    4: [
      {
        page: 4, kind: "disputed",
        claim: "Penelope sets the contest of the bow knowing, or suspecting, who the beggar is.",
        note: "Some critics, such as John Winkler, think she suspects; others read her as unaware until the test of the bed. The poem does not say.",
      },
      {
        page: 6, kind: "disputed",
        claim: "The Odyssey originally ended at Book 23, line 296.",
        note: "Two Alexandrian scholars said so; many modern scholars defend the authenticity of the ending.",
      },
    ],
    5: [
      {
        page: 1, kind: "uncertain",
        claim: "The Gita was composed between about 200 BCE and 200 CE.",
        note: "Dates proposed range from the fifth century BCE to the second century CE; whether it was inserted into the epic or grew within it is debated.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Humboldt called the Gita perhaps the only true philosophical poem in any language.",
        note: "The remark is widely quoted in several forms; its original wording is not secure.",
      },
      {
        page: 7, kind: "uncertain",
        claim: "Oppenheimer thought of 'Now I am become Death, the destroyer of worlds' at the Trinity test.",
        note: "He said so in a 1965 interview, twenty years later; earlier accounts mention the verse about a thousand suns.",
      },
    ],
  },
  "WLT 110": {
    1: [
      {
        page: 2, kind: "uncertain",
        claim: "Beatrice was Bice Portinari, daughter of Folco Portinari.",
        note: "The identification goes back to Boccaccio and is widely accepted, but Dante never names her family.",
      },
      {
        page: 3, kind: "disputed",
        claim: "Dante explained the poem's title and four senses in a letter to Cangrande della Scala.",
        note: "The letter's authenticity, in whole or in part, has long been debated.",
      },
      {
        page: 3, kind: "disputed",
        claim: "The journey begins on the night before Good Friday, 1300.",
        note: "Scholars disagree whether the poem follows the calendar date (March 25) or the 1300 Easter (April 8–10); Dantedì uses March 25.",
      },
    ],
    2: [
      {
        page: 1, kind: "disputed",
        claim: "The soul who made 'the great refusal' is Pope Celestine V.",
        note: "Most commentators say so, but others have proposed Pontius Pilate or Esau; Dante does not name him.",
      },
      {
        page: 3, kind: "uncertain",
        claim: "Gianciotto Malatesta discovered Paolo and Francesca together and killed them around 1285.",
        note: "The details come mainly from Boccaccio's later commentary; contemporary records are scant.",
      },
    ],
    3: [
      {
        page: 2, kind: "disputed",
        claim: "Brunetto Latini is punished among the sodomites.",
        note: "There is no other evidence of Brunetto's sexuality; André Pézard and others have proposed different readings of his sin.",
      },
      {
        page: 6, kind: "disputed",
        claim: "Ugolino ate the bodies of his children.",
        note: "The line “Then fasting had more power than grief” is ambiguous; many readers take it to mean only that hunger killed him.",
      },
    ],
    4: [
      {
        page: 2, kind: "uncertain",
        claim: "Pia was a Sienese lady killed by her husband in the Maremma.",
        note: "Early commentators identify her as Pia de' Tolomei; her identity and story are not documented.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Matelda may be Countess Matilda of Tuscany.",
        note: "Her identity is one of the poem's open questions; she may be a figure without a historical original.",
      },
    ],
    5: [
      {
        page: 3, kind: "uncertain",
        claim: "Cacciaguida was knighted by Conrad III and died on the Second Crusade.",
        note: "These facts come from the poem itself; Cacciaguida is otherwise barely documented.",
      },
    ],
  },
  "GRK 101": {
    1: [
      {
        page: 3, kind: "uncertain",
        claim: "Classical Attic ζ was pronounced zd, and θ, φ, χ were aspirated stops.",
        note: "These are the standard reconstructions (W. S. Allen, Vox Graeca), built from indirect evidence; details remain debated.",
      },
      {
        page: 4, kind: "uncertain",
        claim: "Aristophanes of Byzantium invented the accent marks around 200 BCE.",
        note: "The attribution is traditional and widely repeated; the ancient evidence for it is late and thin.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "The Greeks adopted the Phoenician script in the ninth or early eighth century BCE.",
        note: "Where and when the alphabet was borrowed is disputed; proposed dates range from the eleventh to the eighth century.",
      },
      {
        page: 7, kind: "uncertain",
        claim: "The Thermopylae epitaph is by Simonides.",
        note: "Herodotus quotes it without naming its author; the attribution to Simonides is later.",
      },
    ],
    2: [
      {
        page: 6, kind: "uncertain",
        claim: "Heraclitus said πάντα ῥεῖ.",
        note: "The phrase is not among his surviving fragments; it is a later summary of views reported by Plato and others.",
      },
      {
        page: 7, kind: "disputed",
        claim: "John 1:3 ends with ὃ γέγονεν, “that has come into being.”",
        note: "Ancient and modern editors divide over whether ὃ γέγονεν ends verse 3 or begins verse 4 (“What has come into being in him was life”).",
      },
    ],
    3: [
      {
        page: 7, kind: "disputed",
        claim: "Protagoras meant that each individual is the measure of things.",
        note: "That is Plato's reading in the Theaetetus; others take ἄνθρωπος to mean humankind.",
      },
    ],
    4: [
      {
        page: 7, kind: "uncertain",
        claim: "Solon visited Croesus.",
        note: "The meeting is told by Herodotus, but Solon's known dates make it chronologically very difficult; it is best read as a moral tale.",
      },
    ],
    5: [
      {
        page: 6, kind: "uncertain",
        claim: "A wax tablet with the first sentence of the Republic in many orders was found after Plato's death.",
        note: "The story is reported by Dionysius of Halicarnassus and Diogenes Laertius, centuries later.",
      },
      {
        page: 6, kind: "disputed",
        claim: "The first word, κατέβην, anticipates the descent into the Cave.",
        note: "The link is a long-standing reading, not something Plato states.",
      },
    ],
  },
  "GRK 102": {
    1: [
      {
        page: 1, kind: "disputed",
        claim: "In John 20:17, μή μου ἅπτου means “stop clinging to me.”",
        note: "Many scholars read the present imperative this way; others think the aspectual contrast is weaker here and keep “do not touch me.”",
      },
      {
        page: 7, kind: "uncertain",
        claim: "Caesar wrote ἦλθον, εἶδον, ἐνίκησα to a friend named Amantius.",
        note: "This is Plutarch's report; Suetonius says the words were displayed at Caesar's triumph, and the recipient is not certain.",
      },
    ],
    2: [
      {
        page: 7, kind: "uncertain",
        claim: "Socrates was convicted by about 280 votes to 220.",
        note: "The figure is inferred from Apology 36a and the usual jury size of 501; neither number is stated exactly.",
      },
    ],
    3: [
      {
        page: 4, kind: "disputed",
        claim: "ἀλήθεια means “un-concealment.”",
        note: "The etymology from ἀ- + λήθ- is sound, but how much it reveals about Greek ideas of truth, as Heidegger argued, is contested.",
      },
    ],
    4: [
      {
        page: 2, kind: "disputed",
        claim: "τετέλεσται was written on receipts to mean “paid in full.”",
        note: "The claim is popular in preaching; the papyrus evidence for this exact use is thin.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "The Iliad was composed in the late eighth or early seventh century BCE.",
        note: "Dates proposed for the poem's fixed form range from the eighth to the sixth century; its oral tradition is older.",
      },
      {
        page: 7, kind: "uncertain",
        claim: "Archimedes cried εὕρηκα after discovering displacement in the bath.",
        note: "The story is told by Vitruvius, writing in Latin about two centuries later, and may be embellished.",
      },
    ],
    5: [
      {
        page: 6, kind: "disputed",
        claim: "Socrates's last words mean that death is a cure for life.",
        note: "This is one ancient and modern reading; others take the words as simple piety, a joke, or a reference to a friend's recovery.",
      },
    ],
  },
  "ANH 101": {
    1: [
      { page: 3, kind: "disputed", claim: "The later Greeks explained their dialects by a Dorian invasion after the Trojan War.", note: "Archaeology has found no clear trace of a single invading people; many scholars see the Dorian story as a later myth of origins, though some still argue for movements of population at the end of the Bronze Age." },
      { page: 4, kind: "uncertain", claim: "The woman buried at Lefkandi may have been a wife, a slave, or a sacrifice.", note: "The excavators noted that her hands and feet may have been bound and a knife lay by her head, which suggested sacrifice to some; the evidence is not conclusive." },
    ],
    2: [
      { page: 1, kind: "disputed", claim: "The hoplite phalanx may have caused a political revolution.", note: "The \"hoplite revolution\" thesis is contested: some historians date the full phalanx later and doubt that it drove political change, while others defend a link between hoplite service and broader citizenship." },
      { page: 3, kind: "uncertain", claim: "Lycurgus founded the Spartan constitution, as recorded in the Great Rhetra.", note: "Ancient writers disagreed about when Lycurgus lived, and many modern historians doubt that he existed; the Rhetra's text and date are also debated." },
      { page: 5, kind: "uncertain", claim: "Draco's laws were proverbially harsh.", note: "The tradition of their severity comes largely from later writers; only his homicide law survives, in a copy of 409/8 BCE, and it is not notably savage." },
      { page: 6, kind: "disputed", claim: "Harmodius and Aristogeiton were honored as the liberators of Athens.", note: "Herodotus and Thucydides both insist that the killing of Hipparchus was a private quarrel and did not end the tyranny, which fell in 510 with Spartan help; the popular tradition differed." },
    ],
    3: [
      { page: 4, kind: "corrected", claim: "Xerxes's army numbered 1,700,000 infantry.", note: "This is Herodotus's figure, which no modern historian accepts; estimates for the land army usually range from under one hundred thousand to around two or three hundred thousand." },
      { page: 6, kind: "disputed", claim: "The Themistocles Decree records the evacuation of Athens.", note: "The inscription found at Troezen was cut in the third century BCE; scholars disagree whether it preserves the substance of a genuine decree of 480 or is a later reconstruction." },
    ],
    4: [
      { page: 1, kind: "disputed", claim: "Athens and Persia made the Peace of Callias around 449 BCE.", note: "Thucydides does not mention it, and the fourth-century historian Theopompus called it a forgery; historians remain divided on whether a formal peace was made." },
      { page: 1, kind: "uncertain", claim: "The Coinage Decree imposed Athenian coins, weights, and measures on the allies.", note: "Its date is disputed, between the 440s and the 410s, and depends partly on how letter forms in inscriptions are dated." },
      { page: 5, kind: "disputed", claim: "The Greeks swore an Oath of Plataea not to rebuild the temples destroyed by Persia.", note: "The oath survives only in fourth-century versions, and the clause about temples is absent from the inscribed text at Acharnae; its authenticity is debated." },
      { page: 7, kind: "disputed", claim: "De Ste. Croix argued that the Athenian empire was popular with the allied common people.", note: "The thesis has been widely discussed and partly rejected; others have argued that the evidence shows widespread resentment of Athenian rule." },
    ],
    5: [
      { page: 2, kind: "disputed", claim: "DNA from a Kerameikos mass grave has suggested that the plague was typhoid.", note: "The 2006 study was criticized on methodological grounds, and the identification of the disease remains unresolved." },
      { page: 2, kind: "uncertain", claim: "More than a thousand Mytileneans judged most responsible were executed.", note: "This is the figure in our manuscripts of Thucydides (3.50); some scholars think it is a copyist's error for a much smaller number, perhaps thirty." },
      { page: 7, kind: "uncertain", claim: "Socrates was tried before a jury of 501 citizens.", note: "The number is inferred from usual Athenian practice and Plato's account of the vote; it is not stated in the sources." },
    ],
  },
  "ANH 110": {
    1: [
      { page: 1, kind: "disputed", claim: "The Roman tradition about the kings and the early Republic preserves a core of genuine memory.", note: "Historians are divided: some, like T. J. Cornell, accept the structural outline; others regard most of the early narrative as later reconstruction." },
      { page: 2, kind: "uncertain", claim: "Genetic studies since 2021 support local Italian origins for the Etruscans.", note: "The ancient debate between Lydian and native origins has not been entirely closed, though recent ancient-DNA work points to continuity with earlier Italian populations." },
      { page: 4, kind: "disputed", claim: "Carandini's Palatine walls date to the mid-eighth century BCE.", note: "Both the dating and Carandini's view that they mark a deliberate founding by a historical Romulus are contested." },
      { page: 5, kind: "uncertain", claim: "Servius Tullius may be the Etruscan Mastarna.", note: "The identification rests on the emperor Claudius's report of Etruscan authors and the François Tomb paintings; it cannot be confirmed." },
      { page: 6, kind: "uncertain", claim: "The monarchy fell in 509 BCE after the rape of Lucretia.", note: "The date of about 509 is broadly accepted, but the story of Lucretia is shaped by literary patterns and cannot be verified." },
      { page: 7, kind: "disputed", claim: "Porsenna may actually have captured Rome.", note: "The suggestion rests on brief remarks in Tacitus and Pliny; others read them differently." },
    ],
    2: [
      { page: 2, kind: "disputed", claim: "Fergus Millar argued that the Republic had important democratic features.", note: "His view has been widely debated; many historians still regard the Republic as essentially oligarchic." },
      { page: 4, kind: "uncertain", claim: "The Twelve Tables are quoted by table and law number.", note: "The original text is lost; modern editions reconstruct it from later quotations, and the numbering of the fragments varies between editions." },
      { page: 4, kind: "disputed", claim: "Table 3.6 allowed creditors to cut a debtor into pieces.", note: "Ancient and modern interpreters disagree whether it refers to the debtor's body or his property; Gellius knew of no case of it being carried out." },
      { page: 5, kind: "disputed", claim: "Military tribunes with consular power often replaced the consuls between 444 and 367 BCE.", note: "Whether the reason was military need or the political struggle between the orders is debated." },
    ],
    3: [
      { page: 1, kind: "uncertain", claim: "The Gauls sacked Rome around 390 BCE.", note: "Greek chronology suggests 387/6, and archaeological evidence for destruction is limited." },
      { page: 3, kind: "uncertain", claim: "Regulus returned to Carthage to be tortured to death, keeping his oath.", note: "The story is first attested well after the event and may be patriotic invention." },
      { page: 4, kind: "disputed", claim: "Hannibal crossed the Alps by a particular pass, possibly the Col de la Traversette.", note: "The route has been argued since antiquity; the 2016 evidence from animal dung has been questioned." },
      { page: 4, kind: "uncertain", claim: "Roman losses at Cannae.", note: "Polybius gives about 70,000 and Livy about 48,000; neither figure can be confirmed." },
      { page: 7, kind: "corrected", claim: "The Romans sowed the ground of Carthage with salt.", note: "No ancient source says so; the story is a modern invention." },
    ],
    4: [
      { page: 1, kind: "disputed", claim: "The small farmers of Italy were displaced by slave-run estates.", note: "This is the view of Appian and Plutarch; field surveys and the census figures have led many historians to doubt a general collapse of the peasantry." },
      { page: 4, kind: "disputed", claim: "Marius transformed the army into a professional force.", note: "Many historians now see his recruitment of the poor as one step in a longer process, and doubt that the cohort and the eagle were his innovations." },
      { page: 5, kind: "disputed", claim: "The Italian allies fought the Social War to gain Roman citizenship.", note: "The ancient sources say so; some modern scholars argue that some rebels sought independence." },
      { page: 5, kind: "uncertain", claim: "Mithridates's massacre of 88 BCE killed 80,000 or more.", note: "The ancient figures (80,000 to 150,000) are probably exaggerated." },
      { page: 6, kind: "uncertain", claim: "Sulla's proscriptions claimed about 4,700 victims.", note: "The ancient figures vary, and the number is uncertain." },
    ],
    5: [
      { page: 2, kind: "uncertain", claim: "Caesar killed a million Gauls and enslaved another million.", note: "These figures go back to Caesar's own reports and are probably exaggerated." },
      { page: 4, kind: "uncertain", claim: "Caesar said \"The die is cast\" at the Rubicon.", note: "The words are reported by Suetonius and Plutarch, in Latin and Greek versions; Caesar's own account does not mention the river." },
      { page: 4, kind: "disputed", claim: "Books of the library of Alexandria may have burned during Caesar's Alexandrian War.", note: "Ancient accounts differ about what burned, and the library continued to exist afterward." },
      { page: 5, kind: "disputed", claim: "Antony's offer of a diadem at the Lupercalia.", note: "Historians disagree whether it was a test of opinion, a staged refusal, or an attempt to embarrass Caesar." },
      { page: 6, kind: "corrected", claim: "Caesar's last words were \"Et tu, Brute?\"", note: "The Latin phrase comes from Shakespeare; Suetonius says Caesar said nothing, though some reported the Greek \"You too, child?\"" },
    ],
  },
  "LAT 101": {
    1: [
      {
        page: 2, kind: "uncertain",
        claim: "Classical Latin r was trilled or flapped.",
        note: "The ancient descriptions point to a tongue-tip trill, but the exact sound cannot be recovered with certainty.",
      },
    ],
    4: [
      {
        page: 7, kind: "uncertain",
        claim: "Tom Brown adapted Martial 1.32 when threatened with expulsion by Dr. John Fell.",
        note: "The story is traditional and told in several versions; it is not documented at the time it is said to have happened.",
      },
    ],
    5: [
      {
        page: 1, kind: "uncertain",
        claim: "Caesar reported his victory at Zela with the words Vēnī, vīdī, vīcī.",
        note: "Plutarch says Caesar wrote the words to a friend, Amantius; Suetonius says they were displayed at his Pontic triumph. Whether they were also sent to the Senate is not certain.",
      },
      {
        page: 1, kind: "uncertain",
        claim: "Cicero announced the conspirators' execution with the single word Vīxērunt.",
        note: "The report comes from Plutarch's Life of Cicero, written a century and a half later.",
      },
      {
        page: 6, kind: "disputed",
        claim: "Lesbia was Clodia Metelli.",
        note: "Apuleius says Lesbia's real name was Clodia; identifying her with Clodia Metelli, rather than one of her sisters, is the usual view but is not proved.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Marvell's 'To His Coy Mistress' drew on Catullus 5.",
        note: "The poem belongs to the carpe diem tradition Catullus helped shape; a direct debt to poem 5 is a critical inference.",
      },
    ],
  },
  "LAT 102": {
    1: [
      {
        page: 7, kind: "disputed",
        claim: "Ovid, Metamorphoses 1.2: nam vōs mūtāstis et illās.",
        note: "Most manuscripts read illās; many modern editors print illa, which makes the line refer to the poet's own change of genre.",
      },
    ],
    2: [
      {
        page: 1, kind: "uncertain",
        claim: "Combatants greeted Claudius with Avē, imperātor, moritūrī tē salūtant.",
        note: "Suetonius reports it for the mock sea battle of 52 CE only; there is no good evidence that it was a regular gladiatorial formula.",
      },
      {
        page: 2, kind: "uncertain",
        claim: "Brennus said Vae victīs! at the ransom of Rome.",
        note: "The story is told by Livy more than three centuries after the event, and the Gallic sack of Rome is wrapped in legend.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "Archimedes told the soldier who killed him not to disturb his circles.",
        note: "The familiar Latin wording is later; Valerius Maximus and Plutarch give different versions of the scene.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Virgil asked on his deathbed that the Aeneid be burned.",
        note: "The story comes from the ancient biography attributed to Donatus and from Pliny the Elder; it may be embroidered.",
      },
    ],
    3: [
      {
        page: 5, kind: "uncertain",
        claim: "Of 368,000 Helvetii who set out, 110,000 returned home.",
        note: "These are Caesar's own figures, said to come from captured records; modern historians treat them with caution.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Catullus 70 adapts an epigram of Callimachus.",
        note: "The resemblance to Callimachus's epigram on lovers' oaths is widely accepted, but the debt is inferred, not stated.",
      },
      {
        page: 7, kind: "uncertain",
        claim: "Cicero delivered the First Catilinarian on November 8, 63 BCE.",
        note: "The date is the one usually given; some scholars place the speech on November 7.",
      },
    ],
    4: [
      {
        page: 3, kind: "uncertain",
        claim: "Caveat emptor is a maxim of Roman law.",
        note: "The phrase is a later legal maxim, not found in the classical jurists, though it uses the jussive as they did.",
      },
    ],
    5: [
      {
        page: 3, kind: "uncertain",
        claim: "Cato ended every speech with Carthāgō dēlenda est.",
        note: "Plutarch and Pliny report the substance of the saying; the familiar Latin wordings are early modern formulations.",
      },
    ],
  },
  "POE 401": {
    5: [
      {
        page: 2, kind: "corrected",
        claim: "Eliot: “The poet's criticism is a by-product of his private poetry-workshop.”",
        note: "The lesson first gave this in the third person, as if it were a general maxim. Eliot's actual phrase is first-person, describing his own essays: “a by-product of my private poetry-workshop,” in “The Frontiers of Criticism” (1956). The lesson has been corrected.",
      },
      {
        page: 6, kind: "corrected",
        claim: "Mandelstam “died in a labor camp after writing a poem mocking Stalin.”",
        note: "Mandelstam was first arrested in 1934 after reciting his epigram on Stalin, and exiled; he was arrested again in 1938 and died that December in a transit camp near Vladivostok, before reaching a labor camp. The lesson has been corrected.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Mandelstam's remark: “Only in Russia is poetry respected—it gets people killed.”",
        note: "Known from the memoir of his widow, Nadezhda Mandelstam (Hope Against Hope, 1970; English translation by Max Hayward). It is a reliable witness to his conversation, but a remembered one, so the lesson says “is reported to have said.”",
      },
    ],
  },
};
