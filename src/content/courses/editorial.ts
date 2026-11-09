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
