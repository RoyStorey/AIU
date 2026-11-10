import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "Book 1: What Is Justice?",
  summary:
    "An introduction to Plato's Republic and a close reading of Book 1: the descent to the Piraeus; Cephalus on old age, wealth, and paying one's debts; Polemarchus on helping friends and harming enemies; and Thrasymachus's claim that justice is the advantage of the stronger, with Socrates's replies.",
  pages: [
    {
      title: "Introducing the Republic",
      body: `## The book

Plato's ***Republic*** is the most famous work of philosophy ever written, and one of the most influential books in the history of the world. It has been read, argued over, loved, and hated for nearly 2,400 years. Its subject, as its first book announces, is **justice**: what it is, and whether the just person is happier than the unjust. But in pursuing that question, it ranges over almost every topic in philosophy: the nature of the soul, the structure of the ideal city, the education of rulers, the place of women, the family, and private property, the theory of knowledge, the nature of reality and the **Good**, the forms of government and their decay, the psychology of the tyrant, the value of poetry, and the immortality of the soul. It contains some of the most famous images in Western thought: the **Ring of Gyges**, the **noble lie**, the **ship of state**, the **sun**, the **divided line**, the **cave**, and the **Myth of Er**.

This course reads the *Republic* **book by book**, in five lessons: Book 1 (this lesson); Books 2–3, on the challenge of Glaucon and Adeimantus and the education of the guardians; Books 4–5, on the virtues, the soul, and the three "waves"; Books 6–7, on the philosopher, the Good, and the cave; and Books 8–10, on the decline of cities and souls, the happiness of the just, poetry, and the Myth of Er.

If you have taken APH 101, you already know Socrates, the main speaker, and the Sophists, whose views he opposes. You do not need that background, but it will help.

## Author and date

**Plato** (c. 427–347 BCE) was an Athenian aristocrat, related on his mother's side to **Critias** and **Charmides**, two of the Thirty Tyrants who ruled Athens in 404–403 BCE. As a young man, he became a follower of **Socrates**, and Socrates's execution in 399 BCE shaped his life. In his *Seventh Letter*, whose authenticity is debated, Plato says that as a young man he had hoped to enter politics; but when he saw first the violence of the Thirty, and then the restored democracy's condemnation of Socrates, "the most just man of his time," he concluded that all existing cities were badly governed, and that "the human race will not cease from evils until either those who philosophize rightly and truly come to hold political power, or those who hold power in the cities, by some divine dispensation, really philosophize" (*Seventh Letter* 324b–326b, plain rendering). This is the central thesis of the *Republic*.

Around **387 BCE**, Plato founded a school in a grove sacred to the hero Academus, outside Athens: the **Academy**, which lasted, in some form, for centuries. He traveled three times to Sicily, where he tried, unsuccessfully, to turn the tyrants of Syracuse into philosopher-rulers. The *Republic* is usually dated to the **370s BCE**, in the middle of Plato's career, after the early "Socratic" dialogues and before the late works.

## The form

The *Republic* is a **dialogue**, like almost all of Plato's works. But unlike most dialogues, it is **narrated**: Socrates tells the whole conversation, in the first person, to an unnamed listener, the day after it happened. It begins: "I went down yesterday to the Piraeus" (327a).

Why did Plato write in dialogue form, rather than in treatises like Aristotle's? Scholars have offered several answers. The dialogue imitates Socratic **conversation**, the living exchange of questions and answers, which Plato believed was the true method of philosophy. It allows Plato to present different views through different characters, without committing himself directly to any of them; Plato himself never speaks in his dialogues. And it engages the **reader**, who must think through the arguments and decide whether to accept them. In the *Phaedrus*, Plato's Socrates criticizes written texts because they cannot answer questions: "If you ask them something, they preserve a solemn silence" (275d). The dialogue form is Plato's attempt to make writing as much like living conversation as possible.

## The title

The Greek title is ***Politeia***, which means "constitution," "form of government," or "way of life of a city." The Latin translation, ***Res Publica***, gave us the English "Republic," which is misleading: the *Republic* is not about republics in the modern sense, and the city it describes is not a republic at all. A better translation might be "The Constitution" or "On the Regime." An ancient subtitle, perhaps not Plato's, was "**or On Justice**."

## The ten books

The *Republic* is divided into **ten books**. The division was probably made by later editors, according to the length of a papyrus roll, rather than by Plato, and the breaks do not always fall at natural points. The text is cited by **Stephanus numbers**, the page numbers and section letters (a–e) of the edition of Plato printed in 1578 by the French scholar **Henri Estienne** (Stephanus, in Latin). So "327a" means page 327, section a. The *Republic* runs from 327a to 621d. Every modern edition and translation prints these numbers in the margin, so that readers can find passages in any version.

## Translations

There are many good English translations. The one recommended for this course is that of **Allan Bloom** (1968; second edition 1991), which is very literal, preserving the structure of Plato's Greek and translating key terms consistently, even at the cost of elegance. It is accompanied by a long interpretive essay. Other fine translations include those of **G. M. A. Grube**, revised by C. D. C. Reeve (Hackett, 1992), and **Robin Waterfield** (Oxford World's Classics, 1993). The quotations in this course are our own plain renderings. When a key Greek word is important, we will give it, since much of the argument depends on words that have no exact English equivalent.

## The question

The *Republic* is, before anything else, a long answer to a single question, which is raised in Book 1 and stated fully at the start of Book 2: **Is it better to be just or unjust?** Is justice good for the person who has it, or is it only a burden, accepted out of fear of punishment, which a clever person would throw off if he could? This question is not merely academic. It asks whether morality is in our **interest**, whether we have reason to be good even when no one is watching. The rest of the *Republic*, all its cities and souls and images, is an attempt to answer it.

> **Pause and consider.** The *Republic*'s central question is whether it is better to be just or unjust. Before reading further, write down your own answer. Is it always in a person's interest to be just? Why or why not?`,
    },
    {
      title: "The Descent to the Piraeus and Cephalus",
      body: `## "I went down yesterday"

The *Republic* begins with a journey:

> "I went down yesterday to the Piraeus with Glaucon, son of Ariston, to pray to the goddess, and also because I wanted to see how they would celebrate the festival, since they were holding it for the first time." (*Republic* 1.327a, plain rendering)

The **Piraeus** was the port of Athens, about seven kilometers from the city, a busy, cosmopolitan place, full of sailors, merchants, foreigners, and the poorer citizens who rowed the fleet, the stronghold of the democracy. The goddess is **Bendis**, a Thracian deity whose worship had recently been introduced to Athens by the Thracian community in the port. The festival included a torch race on horseback, a novelty, and an all-night celebration.

The first word of the Greek text, ***katebēn***, "I went down," has struck many readers as significant. The *Republic* is a book about **ascent**: the philosopher's climb out of the cave toward the light of the Good. It begins with a **descent**: Socrates goes down from the city to the port, as the philosopher, in Book 7, must go back down into the cave. Plato chose his first words with care. According to an ancient story, the opening was found among his papers after his death, written out in many different orders (Dionysius of Halicarnassus, *On Literary Composition* 25; Diogenes Laertius 3.37).

## The characters

As Socrates and **Glaucon** set off home, they are stopped by **Polemarchus**, son of Cephalus, who, with a group of friends, playfully insists that they come to his house: "You see how many we are? Then either prove stronger than us, or stay here." Socrates suggests that they might persuade them to let them go. "But could you persuade us, if we will not listen?" (327c). The opening is a little drama of **force and persuasion**, the theme of the whole book: can reason persuade those who have the power to ignore it?

At Polemarchus's house, they find a group of people:

- **Cephalus**, Polemarchus's elderly father, a wealthy **metic** (resident foreigner) from Syracuse, who had come to Athens at Pericles's invitation and run a shield factory.
- His other sons, **Lysias**, who would become one of the most famous orators of Athens, and **Euthydemus**.
- **Thrasymachus** of Chalcedon, a famous Sophist and teacher of rhetoric.
- **Glaucon** and **Adeimantus**, sons of Ariston, who were **Plato's own brothers**.
- Several others who do not speak, or speak only briefly: Charmantides, and Cleitophon, a supporter of Thrasymachus.

Plato's first readers would have known what happened to this family. In **404 BCE**, the Thirty Tyrants, among them Plato's own relatives, arrested Polemarchus and forced him to drink hemlock without trial, to seize the family's property; Lysias escaped and later prosecuted one of the Thirty, Eratosthenes, in a speech that survives. The conversation about justice takes place in the house of a family that would be destroyed by injustice.

The dramatic date of the conversation is uncertain, perhaps sometime between **430 and 410 BCE**, during the Peloponnesian War. The details do not all fit any single year.

## Cephalus

Socrates sits down beside **Cephalus**, who has just been sacrificing and wears a garland. Socrates says he enjoys talking to old men, who have traveled a road that the young must travel, and asks him what old age is like (328d–e).

Cephalus answers that many old men complain of their age, regretting the lost pleasures of youth, sex, drinking, and feasting. But he quotes the poet **Sophocles**, who, asked in his old age whether he could still make love to a woman, replied: "Hush, man! I am very glad to have escaped from it, like a slave who has escaped from a raging and savage master" (329c). Old age brings peace and freedom from the passions. The cause of unhappiness in old age, Cephalus says, is not age, but **character**: for those who are orderly and content, old age is only moderately burdensome; for those who are not, both youth and age are hard (329d).

Socrates presses him: perhaps people would say that Cephalus bears old age easily because he is **rich**. Cephalus admits there is something in this, and tells the story of **Themistocles**, who, when a man from the small island of Seriphos insulted him by saying that he owed his fame to his city, not to himself, replied: "If I had been a Seriphian, I would not have become famous, nor would you if you had been an Athenian" (329e–330a). So, Cephalus says, a good man would not bear old age easily if he were poor, but a bad man would not be content even if he were rich.

## What wealth is good for

What, Socrates asks, is the greatest benefit of wealth? Cephalus's answer is touching. When a man is near death, he says, he begins to fear the stories about the underworld, that those who did wrong in this life will be punished there, which he used to laugh at. He examines his life, and if he finds that he has done much wrong, he wakes from sleep in terror, like a child. But a man who knows he has done no wrong has "sweet hope" as the nurse of his old age, as Pindar says (330d–331a). The greatest benefit of wealth, for a decent man, is that it allows him to avoid **cheating** or **lying**, even unwillingly, and to die without owing sacrifices to a god or money to a man (331a–b).

## The first definition

Socrates seizes on this. Cephalus seems to be saying that **justice** is **telling the truth and paying back what one has taken**. But is that right?

> "If someone took weapons from a friend when he was of sound mind, and the friend went mad and asked for them back, everyone would say that one should not give them back, and that the one who gave them back would not be just; nor should one be willing to tell the whole truth to a man in that condition." (*Republic* 1.331c, plain rendering)

So the definition fails: there are cases in which paying back what one owes, or telling the truth, is not just. This is the first refutation of the *Republic*.

Cephalus does not defend his view. He hands the argument over to his son Polemarchus, "the heir of my argument," laughs, and goes off to see to the sacrifices (331d). He never returns.

## Why Cephalus leaves

Many readers have thought Cephalus's departure significant. He is a decent man, whose conventional morality, telling the truth and paying debts, has served him well. But he does not **examine** it; when it is questioned, he leaves to attend to his sacrifices, the rituals of traditional piety. His goodness rests on **habit** and **fear** of punishment in the afterlife, not on understanding. The rest of the *Republic* will try to provide what Cephalus lacks: an account of justice that can withstand questioning. Some readers have also noticed that Cephalus, an old man, can afford not to question his life; the young men, who must decide how to live, cannot.

> **Pause and consider.** Cephalus says that the greatest benefit of wealth is that it allows a man to avoid cheating or lying, and to die owing nothing. Is this a good account of what wealth is for? What does it reveal about Cephalus's idea of justice?`,
    },
    {
      title: "Polemarchus: Helping Friends and Harming Enemies",
      body: `## Simonides

**Polemarchus**, whose name means "war leader," takes up his father's argument, citing the poet **Simonides** (c. 556–468 BCE), one of the most respected lyric poets of Greece: justice is "**to give to each what is owed**" (*ta opheilomena hekastōi apodidonai*, 331e). Polemarchus appeals, as many Greeks did, to the authority of a poet.

Socrates says, with irony, that Simonides is a wise and godlike man, but that it is hard to know what he meant. Surely he did not mean that one should give back weapons to a madman. Polemarchus explains: Simonides meant that friends owe it to friends to do them **good**, and never harm; and enemies owe it to enemies to do them **harm** (332a–b). So justice is **helping friends and harming enemies**.

This was a very common view in ancient Greece. It appears in Greek poetry from Homer onward. In the *Meno*, which you may have read in APH 101, Meno says that the virtue of a man is to help his friends and harm his enemies (71e). Solon prayed to be "sweet to friends and bitter to enemies." It was, in effect, the moral code of a society based on personal loyalty, honor, and revenge.

## The craft analogy

Socrates begins his examination with a question that will run through the whole *Republic*: is justice like a **craft** (*technē*)? Every craft gives something appropriate to its object: medicine gives drugs, food, and drink to bodies; cooking gives seasoning to food. What does justice give, and to whom? Polemarchus answers: benefits to friends and harms to enemies (332c–d).

Then, Socrates asks, who is best able to benefit friends and harm enemies in matters of health? The **doctor**. At sea? The **ship's captain**. In war? The general. What, then, is justice useful for in **peace**? Polemarchus suggests **contracts**, partnerships. But in a partnership for playing checkers, the good partner is the skilled checkers player; in building, the builder; in music, the lyre player. When is the just man the best partner? Polemarchus suggests: in matters of **money**, when it is to be kept safe. So justice is useful only when money is **not being used**, but stored. "Then justice is not a very serious thing, my friend, if it is useful only for useless things" (333e).

Socrates then pushes further. The person who is best at guarding against a disease is also best at producing it; the one who is best at guarding an army's camp is also best at stealing the enemy's plans. So if the just man is good at guarding money, he must also be good at **stealing** it. "Then the just man has turned out to be a kind of thief," Socrates says, adding that Polemarchus seems to have learned this from Homer, who praised Odysseus's grandfather **Autolycus**, who "surpassed all men in thieving and in oaths" (334a–b; *Odyssey* 19.395–396).

Polemarchus is bewildered: "No, by Zeus, I no longer know what I was saying." But he still holds to the view that justice is helping friends and harming enemies (334b).

These arguments are deliberately **paradoxical**, and in some ways unfair. They depend on the assumption that justice is a craft, a specialized skill like medicine or navigation, and the conclusions show that this assumption leads to absurdity. One lesson may be that justice is **not** a craft in this sense: it is not a specialized skill for a particular area of life, but something that concerns how all our skills are used. This idea will return in later books.

## Seeming and being

Socrates raises a more serious problem. Who are our **friends**? Those who **seem** to us to be good, or those who really **are** good? People often make mistakes about this: they think bad people are good and good people bad. So, on Polemarchus's definition, it would often be just to harm good people, who have done no wrong, and to help bad people (334c–d). Polemarchus revises his definition: justice is to help the friend who **is** good, and to harm the enemy who **is** bad (335a).

## Can the just man harm anyone?

Then comes Socrates's decisive argument. Is it the part of a just man to **harm** anyone at all?

When horses are harmed, Socrates says, they become worse with respect to the virtue of horses; dogs become worse with respect to the virtue of dogs. So when human beings are harmed, they become worse with respect to **human virtue**, and justice is human virtue. So to harm a human being is to make him **more unjust** (335b–c).

But can a musician, by his music, make people unmusical? Can a horseman, by his horsemanship, make people bad horsemen? No. Heat does not make things cold, nor dryness wet. So the **just**, by justice, cannot make people **unjust**. "Then it is not the work of the just man to harm either a friend or anyone else, Polemarchus, but of his opposite, the unjust man" (335d).

> "If anyone says that justice is giving each what is owed, and he means by this that harm is owed to enemies by the just man and benefit to friends, he was not wise who said it. For he did not speak the truth: it has become clear to us that it is never just to harm anyone." (*Republic* 1.335e, plain rendering)

Polemarchus agrees, and declares that he will join Socrates in fighting anyone who attributes this view to Simonides or any other wise man. Socrates suggests that the saying must have come from some tyrant or rich man who thought himself very powerful, such as **Periander**, **Perdiccas**, **Xerxes**, or **Ismenias** the Theban (336a).

## The meaning of the argument

The conclusion that **it is never just to harm anyone** is one of the most radical claims in Greek ethics. It contradicts the traditional morality of helping friends and harming enemies, and it echoes the principle Socrates states in the *Crito*, that one must never return wrong for wrong. But the argument has puzzled readers. It depends on an ambiguity in the word "**harm**" (*blaptein*): in one sense, to harm someone is to injure their body or property, which a just man might do, for instance in punishing a criminal or fighting a war; in another, it is to make them **worse as a person**, which Socrates argues a just man cannot do. Socrates seems to assume that all real harm is harm to the **soul**, a view that runs through his ethics, as you may have seen in APH 101. Whether just punishment harms the criminal in this sense, or rather benefits him, is a question Plato takes up in the *Gorgias*.

Polemarchus is Socrates's most willing partner in Book 1. He is the only one of the speakers who is genuinely **persuaded**, and changes his mind. And it was Polemarchus who, a generation later, was killed by the Thirty without trial: a just man harmed by unjust ones.

> **Pause and consider.** Socrates argues that it is never just to harm anyone, because harming a person makes him worse, and justice cannot make anyone worse. Do you agree? Is punishment a kind of harm?`,
    },
    {
      title: "Thrasymachus: Justice Is the Advantage of the Stronger",
      body: `## The wild beast

While Socrates and Polemarchus have been talking, **Thrasymachus** has been trying to break in, restrained by the others. Now, as they pause, he can contain himself no longer:

> "He hurled himself at us like a wild beast, as if to tear us to pieces. Polemarchus and I were terrified. And he shouted into our midst: 'What is this nonsense that has possessed you for so long, Socrates? And why do you play the fool, giving way to one another? If you really want to know what justice is, don't just ask questions and score points by refuting the answers; … but answer yourself, and say what you think justice is.'" (*Republic* 1.336b–c, plain rendering)

Socrates says he was so frightened that if he had not seen Thrasymachus first, he would have been struck dumb, like a man who, according to the folk belief, loses his voice if a wolf sees him before he sees it (336d).

**Thrasymachus of Chalcedon**, a city on the Bosporus, was a real person, a famous teacher of rhetoric, known especially for his skill in arousing and calming the emotions of an audience. Aristotle mentions him as an important figure in the development of rhetorical style (*Rhetoric* 3.1, 1404a14), and a fragment of one of his speeches survives. Plato portrays him as aggressive, rude, and greedy: he demands payment before he will give his answer, and the others offer to pay for Socrates (337d). But he is also intelligent, and the challenge he presents is the most serious that Socrates faces in Book 1.

## Irony

Thrasymachus accuses Socrates of his "**habitual irony**" (*eirōneia*): pretending ignorance so that he can avoid answering and refute others (337a). This is one of the earliest uses of the word "irony" in Greek, and it meant something like "dissembling," pretending to know less than one does. Socrates replies that it is not surprising that he cannot answer, since he does not know, and does not claim to know.

## The definition

At last, Thrasymachus gives his definition:

> "Listen, then. I say that **justice is nothing other than the advantage of the stronger** (*to tou kreittonos sympheron*)." (*Republic* 1.338c, plain rendering)

He explains. In every city, the **stronger** is the **ruling** party: in a tyranny, the tyrant; in a democracy, the people; in an aristocracy, the aristocrats. Each ruling party makes **laws** for its own advantage: democracy makes democratic laws, tyranny tyrannical laws. And they declare that what is to their advantage is **just** for their subjects, and punish anyone who breaks these laws as a lawbreaker and unjust. "So this is what I say justice is, the same in all cities: the advantage of the established government" (338e–339a).

This is a **cynical** but powerful view. On it, "justice" is not a real virtue, but a name that the powerful give to the rules they make for their own benefit. Obeying the law, which ordinary people call being just, is really serving the interests of whoever happens to be in power. Thrasymachus's view resembles the views of other Sophists you may have met in APH 101, such as Callicles in the *Gorgias*, and Critias's argument that the gods were invented to keep people obedient. It has had many modern descendants: the claim, sometimes attributed to Marxist theory, that the morality of any society is the ideology of its ruling class; and the realism of Thucydides's Athenians at Melos, who told the Melians that "the strong do what they can, and the weak suffer what they must."

## The ruler who makes mistakes

Socrates begins by asking a question. Do rulers ever make **mistakes**? Thrasymachus admits that they do. So sometimes they make laws that are **not** to their advantage. But Thrasymachus has said that it is just for subjects to obey the laws. So it will sometimes be just for the subjects to do what is **not** to the advantage of the stronger (339c–e).

**Cleitophon**, Thrasymachus's supporter, tries to rescue him: Thrasymachus meant that justice is what the stronger **believes** to be to his advantage (340b). But Thrasymachus rejects this help. Instead, he makes a subtle move. A ruler who makes a mistake, he says, is not, **at that moment**, a ruler, in the precise sense, any more than a doctor who makes a mistake in treating a patient is acting as a doctor, or an accountant who makes an error in calculation is acting as an accountant. "No craftsman, in the precise sense, ever errs" (340d–e). The ruler **as ruler**, in the strict sense, never makes mistakes, and always legislates for his own advantage.

This is an important move. Thrasymachus has shifted from a **descriptive** claim, about how rulers actually behave, to an **ideal** or **normative** claim, about the ruler "in the precise sense," the ruler who knows his business. The perfect ruler, for Thrasymachus, is the one who knows exactly how to make the laws serve his own interest. Socrates will use this shift against him.

## Three readings of Thrasymachus

Scholars have long debated what exactly Thrasymachus believes, because his statements do not obviously fit together. He has said that justice is **the advantage of the stronger**; that it is **obeying the laws**; and, later, that it is **another's good**. On one reading, he is a **conventionalist**: justice is simply whatever the laws command, and the laws are made by the rulers for themselves. On a second, he is a kind of **natural-law theorist in reverse**, like Callicles in the *Gorgias*: what is really, naturally good is to take as much as one can, and "justice" is a name for the restraints that prevent this. On a third reading, defended by some modern commentators, Thrasymachus is not offering a definition at all, but a cynical **description** of how the word "justice" functions in political life: it is the label rulers use to make obedience seem virtuous. The ambiguity may be deliberate. Thrasymachus is a rhetorician, not a philosopher, and he is more interested in winning than in consistency. But the different strands of his view will be taken up, and given their strongest form, by Glaucon and Adeimantus at the start of Book 2.

> **Pause and consider.** Thrasymachus says that in every city, "justice" means obeying laws that the rulers make for their own advantage. Is there truth in this? Can you think of laws that seem to serve the interests of those who made them rather than justice?`,
    },
    {
      title: "The Craft Argument and the Shepherd",
      body: `## Crafts serve their objects

Socrates accepts Thrasymachus's idea of the ruler "in the precise sense," and turns it against him. Consider the **doctor** in the precise sense. Is he a money-maker, or someone who cares for the sick? Someone who cares for the sick. The ship's **captain** in the precise sense: is he a sailor, or a ruler of sailors? A ruler of sailors (341c–d).

Every craft, Socrates argues, has an **object** that needs it: medicine exists because bodies are deficient and need help; navigation because sailors need guidance. And every craft, in the precise sense, seeks the **advantage of its object**, not its own advantage. Medicine seeks the advantage of the body, not of medicine; horsemanship the advantage of horses. The craft itself, insofar as it is a perfect craft, needs nothing.

> "Then no doctor, insofar as he is a doctor, considers or commands what is to the advantage of the doctor, but what is to the advantage of the patient. … And the ship's captain, in the precise sense, will be a ruler of sailors, not a sailor, and will consider and command what is advantageous to the sailor and the one ruled, not to himself. … Then, Thrasymachus, no one in any position of rule, insofar as he is a ruler, considers or commands his own advantage, but that of the one he rules." (*Republic* 1.342c–e, plain rendering)

So, if the ruler in the precise sense is like a craftsman, he will rule for the advantage of his **subjects**, not himself. Justice, then, would be the advantage of the **weaker**, not the stronger.

## Shepherds and sheep

Thrasymachus is not impressed. He responds with a scornful counterattack:

> "Tell me, Socrates, do you have a nurse? … Because she lets you go around sniveling and doesn't wipe your nose, when you need it, since you don't even know the difference between sheep and shepherd." (*Republic* 1.343a, plain rendering)

Socrates, Thrasymachus says, thinks that **shepherds** fatten their sheep for the good of the sheep, rather than for the good of their masters and themselves. But shepherds fatten sheep in order to **eat** them, or sell them. In the same way, rulers, real rulers, think about their subjects only as a shepherd thinks about his sheep: as sources of profit.

Then Thrasymachus delivers a long speech, the most powerful statement of the case for injustice in Book 1 (343b–344c). His argument is no longer only about rulers and laws, but about **justice** and **injustice** in general:

- **Justice is "another's good"** (*allotrion agathon*): it benefits others, the stronger, the ruler, while harming the person who practices it. **Injustice** benefits oneself.
- In every dealing with others, the just man **gets less**. In business partnerships, the unjust man always ends up with more. In taxes, the just man pays more on the same property. In public office, the just man neglects his own affairs, gains nothing from the public treasury, and is hated by his relatives for refusing to do them favors at the public's expense.
- The greatest happiness belongs to **perfect injustice**, injustice on the largest scale: **tyranny**, which seizes the property of others, sacred and profane, private and public, not bit by bit, but all at once. Petty criminals, temple robbers, kidnappers, burglars, and thieves are punished and disgraced. But the tyrant who enslaves all his fellow citizens is called **happy** and **blessed**, not only by them, but by everyone who hears of him.

> "People blame injustice not because they fear doing it, but because they fear suffering it. So, Socrates, injustice, if it is on a large enough scale, is stronger, freer, and more masterly than justice; and, as I said from the beginning, the just is the advantage of the stronger, and the unjust is what profits and benefits oneself." (*Republic* 1.344c, plain rendering)

## What has changed

Notice that Thrasymachus's position has shifted, or deepened. He began by saying that justice is the **advantage of the stronger**, a claim about what justice is. Now he is saying that justice is **another's good**, and that **injustice is better** for the person who practices it, a claim about whether justice is **worth having**. The second claim is the one that matters for the rest of the *Republic*. As Socrates says, "the question is not a small one, but how one should live one's life" (344e, compare 352d).

Thrasymachus's view, in its developed form, is that justice is a kind of **naivety** or **foolishness**, a "noble simplicity," as he calls it, while injustice is **good judgment** (348c–d). The just man is a sucker; the clever man takes what he can. This is a view that many people hold, at least privately, in every age.

## Socrates's reply on shepherds

Socrates replies that Thrasymachus has abandoned the "precise" sense of craft that he insisted on earlier. The shepherd **as shepherd** cares only for the good of the sheep; it is as a **money-maker** or a feaster that he thinks of eating or selling them (345b–e). Every craft has its own benefit: medicine brings health, navigation safety at sea. But there is a separate craft, the craft of **wage-earning**, which brings pay; and craftsmen practice it alongside their own crafts. The fact that a doctor is paid does not mean that medicine is the art of making money (346a–d).

This is why, Socrates says, no one willingly takes on the job of ruling: rulers must be **paid**, in money, or honor, or by a penalty if they refuse. And the best people rule only for the sake of the penalty, which is to be ruled by someone **worse** than themselves (347a–c). If there were a city of good men, Socrates suggests, they would compete **not** to rule, as people now compete to rule. This idea, that the best rulers are those who do not want to rule, will return in Book 7, where the philosophers must be compelled to go back down into the cave.

> **Pause and consider.** Thrasymachus says that justice is "another's good," that the just man always gets less, and that the perfectly unjust tyrant is called blessed. How would you answer him? Is he describing the world accurately?`,
    },
    {
      title: "Three Arguments Against Thrasymachus",
      body: `## Is injustice a virtue?

Socrates now addresses Thrasymachus's main claim: that the life of the unjust person is better than that of the just. Thrasymachus makes his position extreme: injustice is not a **vice** but a kind of **good judgment** and **virtue**, and justice is "very noble **simplicity**" (348c–e). Socrates admits that this is a harder position to refute, because Thrasymachus refuses to accept the usual opinion that injustice is shameful. He offers three arguments.

## The first argument: outdoing

The first argument turns on the Greek concept of ***pleonexia***, "**getting more**" or "**outdoing**," the desire to have more than others, which Thrasymachus has praised as the mark of the unjust man (349b–350c).

Does the just man want to **outdo** another just man? No, says Thrasymachus; he is too simple and polite for that. Does he want to outdo the unjust man? Yes, he would think it just to do so, but he would not be able. And the unjust man wants to outdo **everyone**, both the just and the unjust.

Now consider the **crafts**. Does a skilled musician, tuning a lyre, want to outdo another skilled musician, by tightening or loosening the strings more than the correct amount? No; he wants to tune it correctly, as any musician would. He wants to outdo only the unskilled musician, who tunes it wrongly. The same is true of the doctor: a good doctor does not want to outdo other good doctors in prescribing food and drink, but only to prescribe correctly. It is the **ignorant** person who wants to outdo everyone, both the knowledgeable and the ignorant.

So the person who has **knowledge** wants to outdo only those unlike him, while the **ignorant** wants to outdo both like and unlike. The just man is like the knowledgeable, and the unjust man like the ignorant. So the just man is **wise and good**, and the unjust man **ignorant and bad** (350c).

Socrates reports a striking detail: "Thrasymachus agreed to all this, not easily as I am telling it, but dragged along and with difficulty, sweating profusely, since it was summer. And then I saw what I had never seen before: Thrasymachus **blushing**" (350c–d).

This argument has been criticized as weak. It depends on an analogy between justice and the crafts that Thrasymachus might reject: the unjust man does not want to outdo others in **tuning lyres**, but in getting **money** and **power**, and there is no "correct amount" of these. But the argument makes an important point: that excellence in any field involves **limits**, a sense of the right measure, and that unlimited desire is a sign of ignorance.

## The second argument: the band of thieves

The second argument is stronger (351b–352a). Thrasymachus has claimed that injustice is **stronger** than justice. But consider an unjust **city**, which tries to enslave other cities. Can it do so without justice? Consider an **army**, or a band of **robbers** or **thieves**, or any group that sets out to do something unjust together. Could they accomplish anything if they treated **one another** unjustly?

> "Injustice, Thrasymachus, produces factions, hatreds, and fighting among people, while justice produces agreement and friendship. … And if injustice is found among two people, will they not be at odds, and hate each other, and be enemies, both of each other and of the just? … And if it is found in one person, … it will make him unable to act, because he is in faction and not of one mind with himself, and an enemy both of himself and of the just." (*Republic* 1.351d–352a, plain rendering)

Even thieves need a kind of **honor among themselves** to succeed; a completely unjust band would fall apart. So injustice, in its pure form, is **self-defeating**: it makes people unable to act together, or even to act as unified individuals. Whatever strength the unjust have comes from the remnant of justice among them. This argument introduces an idea that will be central to the rest of the *Republic*: that justice is a kind of **harmony** or **unity**, in the city and in the soul, and injustice a kind of **faction** or **civil war**.

## The third argument: function

The third argument concerns the **function** (*ergon*) of the soul (352d–354a). Everything has a **function**, the thing it alone can do, or does best: the function of the eye is to see; of the ear, to hear; of a pruning knife, to prune vines. And everything that has a function has a **virtue** (*aretē*), an excellence, by which it performs its function well: the virtue of the eye is good sight.

What is the function of the **soul**? To manage, rule, and deliberate, and, above all, to **live**. So the soul's virtue is that by which it lives **well**. And they agreed earlier that justice is the virtue of the soul. So the just soul lives well, and the one who lives well is blessed and **happy**. So the just man is happy, and the unjust man wretched. "Then injustice is never more profitable than justice, Thrasymachus" (354a).

This argument too has been criticized. It assumes that justice is the virtue of the soul, which Thrasymachus had denied, and which Socrates had argued for only in the first argument. But it introduces the **function argument**, which Aristotle developed into the foundation of his ethics in the *Nicomachean Ethics* (1.7): human happiness consists in the excellent performance of the human function, which is activity of the soul in accordance with reason.

## The end of Book 1

Thrasymachus, now subdued, says sarcastically: "Let this be your feast, Socrates, at the festival of Bendis" (354a). But Socrates himself is not satisfied:

> "I have not dined well, through my own fault, not yours. Like gluttons who snatch at each new dish as it is carried around, before they have properly enjoyed the one before, I seem to have left the first question we were considering, what justice is, before finding the answer, and rushed off to consider whether it is a vice and ignorance, or wisdom and virtue. … So now the result of the discussion is that I know nothing. For since I do not know what justice is, I can hardly know whether it is a virtue or not, or whether the one who has it is happy or unhappy." (*Republic* 1.354a–c, plain rendering)

Book 1 ends, like the early Socratic dialogues you may have read in APH 101, in **aporia**, perplexity.

> **Pause and consider.** Socrates argues that even a band of thieves needs justice among its members to succeed. Does this show that justice is good, or only that it is useful? Is there a difference?`,
    },
    {
      title: "Assessing Book 1",
      body: `## A Socratic dialogue

Book 1 of the *Republic* reads very much like one of Plato's **early** dialogues. It asks the Socratic question "What is X?" about a virtue, justice. It examines the definitions of several characters, each representing a different point of view. It refutes each definition through the elenchus. And it ends in perplexity. Some scholars, beginning with the German scholar **Karl Friedrich Hermann** in the nineteenth century, have suggested that Book 1 was originally written as a separate dialogue, perhaps called the ***Thrasymachus***, and later incorporated by Plato into the *Republic*. There is no direct evidence for this, and many scholars now reject the idea, pointing to the careful way Book 1 introduces themes developed in later books. But the resemblance to the early dialogues is clear, and it allows Plato to show the **limits** of the Socratic method.

## Three views of justice

Book 1 presents three views of justice, which represent three stages of moral thinking:

**1. Cephalus: conventional morality.** Justice is telling the truth and paying debts. This is the morality of a decent, prosperous old man, who has lived by the rules he inherited, and is motivated partly by fear of punishment in the afterlife. It is sincere but unreflective, and it collapses at the first counterexample.

**2. Polemarchus: traditional poetic morality.** Justice is helping friends and harming enemies. This is the morality of the poets and of Greek tradition, the code of loyalty and revenge. It has more content than Cephalus's view, but it cannot answer the question of who our true friends are, or explain how harming anyone can be just.

**3. Thrasymachus: cynical realism.** Justice is the advantage of the stronger, and another's good; injustice is better for the one who practices it. This is the view of the sophisticated intellectual who has seen through conventional morality, and concluded that it is a trick played by the powerful, or a burden accepted by the weak. It is the most dangerous view, because it is the most intelligent.

Each view is in some sense a **development** of the one before. Cephalus's view that justice is giving back what one owes becomes Polemarchus's view that justice is giving each what is owed, which becomes, in Thrasymachus's mouth, the view that justice is giving the stronger what he wants.

## Why Socrates fails

Why does Socrates fail to refute Thrasymachus decisively? His arguments silence Thrasymachus, but they do not **persuade** him. They are clever, but many readers have found them unconvincing, relying on analogies with crafts that Thrasymachus might reject, and on shifts in the meaning of key words. Plato seems to know this. At the start of Book 2, Glaucon, who has listened to the whole conversation, says that Socrates has only **seemed** to persuade them, not really persuaded them (357a–b).

The failure may be deliberate. Plato may be showing that the Socratic method alone, the refutation of definitions by cross-examination, is not enough to answer the challenge of someone like Thrasymachus. Refuting an opponent is not the same as **showing** him the truth. To answer Thrasymachus properly, Socrates will need to do something different: to give a **positive account** of what justice is, rooted in an account of the human **soul** and of the **city**, and to show that justice, so understood, makes a person happy. This is what the rest of the *Republic* attempts.

## Force and persuasion

Book 1 also dramatizes a theme that runs through the whole *Republic*: the relationship between **force** and **persuasion**. It opens with Polemarchus playfully threatening to keep Socrates by force: "Then either prove stronger than us, or stay here," and asking, "Could you persuade us, if we will not listen?" (327c). It continues with Thrasymachus bursting in like a wild beast, demanding money, and treating the argument as a contest of strength. Socrates, by contrast, relies only on argument. Can reason prevail over those who have the power to refuse to listen?

The answer of the *Republic* is complex. In Book 7, the philosophers must be **compelled** to rule, and the prisoners in the cave must be **dragged** out into the light. In Book 6, Socrates says that he and Thrasymachus "have just become friends, though we were not enemies before" (498c–d). Thrasymachus remains present, silent, through the rest of the book.

## The challenge restated

At the end of Book 1, Socrates has not answered the question what justice is. But the question **whether justice is better than injustice** has been raised in its sharpest form. Thrasymachus has claimed that injustice, on a large enough scale, is "stronger, freer, and more masterly" than justice, and that the perfectly unjust tyrant is the happiest of men. If Socrates cannot answer him, then the moral life is, at bottom, a life of foolishness, and the clever person should be unjust when he can get away with it.

In Book 2, Glaucon and Adeimantus will restate Thrasymachus's challenge more powerfully than Thrasymachus himself, not because they believe it, but because they want Socrates to **refute** it properly. And Socrates will begin the long journey that leads, through the ideal city, the three parts of the soul, the philosopher-kings, and the Form of the Good, to his answer.

## A note on reading

As you read the rest of the *Republic*, keep three questions in mind. First, **what is justice**, according to Socrates, and is his account convincing? Second, has he shown that **justice is better** than injustice for the person who has it? And third, how is the ideal city related to the **individual soul**, and does the analogy between them hold? These are the questions that every reader of the *Republic* must answer for himself or herself.

> **Pause and consider.** Socrates silences Thrasymachus but does not persuade him. What is the difference between refuting someone and persuading them? Which is more important in philosophy, and in life?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Read each passage carefully, then write your answers in your notebook.

## 1. The returned weapons

> "If someone took weapons from a friend when he was of sound mind, and the friend went mad and asked for them back, everyone would say that one should not give them back." (*Republic* 331c)

**Questions**

1. Which definition of justice does this counterexample refute?
2. What kind of counterexample is it, and why is it effective?

## 2. Harming no one

> "It has become clear to us that it is never just to harm anyone." (*Republic* 335e)

**Questions**

1. How does Socrates reach this conclusion?
2. What ambiguity in the word "harm" does the argument depend on?

## 3. Thrasymachus on justice

> "Justice is nothing other than the advantage of the stronger." (*Republic* 338c)
> "Injustice, if it is on a large enough scale, is stronger, freer, and more masterly than justice." (*Republic* 344c)

**Questions**

1. How does Thrasymachus's position develop between these two statements?
2. Which claim is more important for the rest of the *Republic*, and why?

## 4. The band of thieves

> "Injustice, Thrasymachus, produces factions, hatreds, and fighting among people, while justice produces agreement and friendship." (*Republic* 351d)

**Questions**

1. Why does Socrates argue that even unjust groups need justice?
2. How does this argument anticipate the idea of justice as harmony?

## Drawing the threads together

In a paragraph, explain why Book 1 ends in perplexity, and what Socrates must do in the rest of the *Republic* to answer Thrasymachus.`,
    },
  ],
  readings: [
    { kind: "book", title: "The Republic of Plato", author: "trans. Allan Bloom", publisher: "Basic Books", year: "2nd ed., 1991", note: "Read Book 1 (327a–354c)." },
    { kind: "book", title: "An Introduction to Plato's Republic", author: "Julia Annas", publisher: "Oxford University Press", year: "1981", note: "Read chapters 1–2, on Book 1." },
    { kind: "book", title: "Republic", author: "Plato, trans. G. M. A. Grube, rev. C. D. C. Reeve", publisher: "Hackett", year: "1992", note: "A clear alternative translation, with Stephanus numbers." },
  ],
  media: [
    { kind: "book", title: "Plato's Republic: A Biography", author: "Simon Blackburn", publisher: "Atlantic Books / Grove", year: "2006", note: "A short, lively account of the book and its reception." },
    { kind: "book", title: "The Cambridge Companion to Plato's Republic", author: "ed. G. R. F. Ferrari", publisher: "Cambridge University Press", year: "2007", note: "Essays by leading scholars on each part of the work." },
  ],
  questions: [
    {
      prompt: "What does the Greek title Politeia mean?",
      choices: [
        "Republic",
        "Constitution or way of life of a city",
        "Justice",
        "Democracy",
      ],
      answer: 1,
      explanation: "The English \"Republic\" comes from the Latin Res Publica and is misleading.",
    },
    {
      prompt: "What are Stephanus numbers?",
      choices: [
        "Book numbers",
        "Page and section numbers from Henri Estienne's 1578 edition, used to cite Plato",
        "Line numbers of the Greek",
        "Numbers of manuscripts",
      ],
      answer: 1,
      explanation: "The Republic runs from 327a to 621d.",
    },
    {
      prompt: "Where does the conversation of the Republic take place?",
      choices: [
        "In the Agora",
        "At the house of Polemarchus in the Piraeus",
        "In prison",
        "At the Academy",
      ],
      answer: 1,
      explanation: "During the festival of the Thracian goddess Bendis.",
    },
    {
      prompt: "How does Socrates refute Cephalus's view of justice?",
      choices: [
        "By citing a poet",
        "With the example of returning weapons to a friend who has gone mad",
        "By appealing to the gods",
        "By a mathematical proof",
      ],
      answer: 1,
      explanation: "Republic 331c.",
    },
    {
      prompt: "What definition of justice does Polemarchus take from Simonides?",
      choices: [
        "The advantage of the stronger",
        "Giving each what is owed, interpreted as helping friends and harming enemies",
        "Doing one's own work",
        "Telling the truth",
      ],
      answer: 1,
      explanation: "Republic 331e–332b.",
    },
    {
      prompt: "What conclusion does Socrates reach with Polemarchus?",
      choices: [
        "Justice is a craft",
        "It is never just to harm anyone",
        "Simonides was wrong about everything",
        "The just man is a thief",
      ],
      answer: 1,
      explanation: "Republic 335e; the thief conclusion was an earlier paradox.",
    },
    {
      prompt: "What does Thrasymachus mean by the ruler \"in the precise sense\"?",
      choices: [
        "A ruler elected by lot",
        "A ruler who, insofar as he is a ruler, never makes mistakes about his own advantage",
        "A king",
        "A philosopher",
      ],
      answer: 1,
      explanation: "Republic 340d–341a; Socrates then uses the craft analogy against him.",
    },
    {
      prompt: "What does Thrasymachus mean by calling justice \"another's good\"?",
      choices: [
        "Justice benefits the gods",
        "Justice benefits others, especially the stronger, at the expense of the one who practices it",
        "Justice is a gift",
        "Justice is foreign to Athens",
      ],
      answer: 1,
      explanation: "Republic 343c.",
    },
    {
      prompt: "What is the point of the \"band of thieves\" argument?",
      choices: [
        "Thieves are always punished",
        "Even unjust groups need justice among themselves to act together",
        "Thieves are happier",
        "Justice is theft",
      ],
      answer: 1,
      explanation: "Republic 351c–352a.",
    },
    {
      prompt: "How does Book 1 end?",
      choices: [
        "With a definition of justice",
        "In perplexity: Socrates says he does not know what justice is",
        "With Thrasymachus's victory",
        "With a myth",
      ],
      answer: 1,
      explanation: "Republic 354b–c.",
    },
  ],
  reflection:
    "Cephalus thought justice was paying debts, Polemarchus that it was helping friends and harming enemies, and Thrasymachus that it was the advantage of the stronger and that injustice pays. In 500–800 words, explain each view and Socrates's response, and argue whether Socrates has given Thrasymachus any good reason to be just.",
};
