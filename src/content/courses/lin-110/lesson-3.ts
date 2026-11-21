import type { Lesson } from "@/lib/schema";

export const lesson3: Lesson = {
  title: "How Children Learn the Meanings of Words",
  summary:
    "Paul Bloom's account of word learning; Quine's problem and the biases that might solve it; theory of mind and the role of the speaker's intentions; mutual exclusivity and its pragmatic explanation; concepts, kinds, and essentialism; names, count and mass nouns, and number words; verbs and syntactic bootstrapping, including how blind children learn *look* and *see*; abstract words and words for the mind; whether learning words shapes thought; cross-situational learning; vocabulary growth; and figurative meaning.",
  pages: [
    {
      title: "Bloom's Question",
      body: `## A remarkable achievement

A typical American high-school graduate knows perhaps sixty thousand words, by one estimate Bloom discusses—though estimates vary widely depending on how words are counted. Most were learned without explicit teaching, often from hearing them only a few times. How do children do it?

## Bloom's thesis

The psychologist **Paul Bloom** (born 1963), who taught for many years at Yale, addressed this question in ***How Children Learn the Meanings of Words*** (2000). His central thesis is that word learning does not depend on a special-purpose mechanism dedicated to words. Instead, children learn words using a combination of more general mental capacities:

- **theory of mind**: the ability to infer what other people are thinking and intending, especially what a speaker is referring to;
- **conceptual knowledge**: an understanding of the kinds of things there are in the world—objects, substances, actions, properties, numbers—and how they can be grouped;
- **syntactic knowledge**: an understanding of how the grammatical structure of a sentence relates to meaning;
- **general learning and memory**: the ability to learn and remember arbitrary associations, which also serves in learning facts.

On this view, word learning is not a separate module but an interaction of capacities that children use in many other domains.

## Words as social facts

Bloom emphasizes that words are **conventional**: their meanings are shared by a community. A word means what it does because speakers use it that way, and to learn a word is to learn what others intend when they use it. This is why theory of mind is so central: children learn words by figuring out what speakers mean.

## Fast and slow

Bloom also challenges some popular ideas about word learning. He argues that there is no sudden "naming insight" or dramatic vocabulary spurt in most children, but a gradual acceleration as children's other capacities develop. He argues that children's ability to learn words quickly, from few exposures, is not unique to words: children also remember facts learned from a single exposure, such as which object an adult said came from her uncle. Word learning, then, is extraordinary, but it is extraordinary in ways that reflect the general power of the human mind.

## The plan of this lesson

This lesson follows Bloom's book. We begin with the logical problem of word learning posed by Quine, and the proposals for solving it. We then examine the role of theory of mind, concepts, and syntax in turn, and look at how children learn particular kinds of words: names, nouns for objects and substances, number words, verbs, and words for abstract things and mental states. We close by asking whether learning words shapes the way children think.

## Bloom and the nativism debate

Bloom's view occupies an interesting place in the debate of Lesson II. He accepts that children bring rich innate capacities to the task—a theory of mind, a conceptual system, and, he believes, aspects of syntax. But he denies that there is an innate **word-learning** device, such as a set of constraints specific to words. His approach thus combines elements of nativism with an emphasis on general cognitive abilities and social understanding that it shares with usage-based theories.

> **Pause and consider.** Bloom argues that to learn a word is to learn what others intend by it. How does this differ from simply associating a sound with a thing?`,
    },
    {
      title: "Quine's Problem and the Biases",
      body: `## Gavagai again

As we saw in LIN 101, the philosopher **W. V. O. Quine** imagined a linguist hearing a native speaker say "*Gavagai*" as a rabbit runs past. The word could mean "rabbit," but it could also mean "white," "running," "furry," "animal," "rabbit parts," "the rabbit's tail," "dinner," "look!", or countless other things, all consistent with the same situation. Children learning their first words face this problem constantly, and without the help of a translator or a dictionary.

## Constraints

In the 1980s and 1990s, developmental psychologists proposed that children solve Quine's problem by means of **constraints** or **biases** on the hypotheses they consider. The psychologist **Ellen Markman**, in *Categorization and Naming in Children* (1989), proposed several:

- The **whole-object assumption**: a new word refers to a whole object, not to its parts, color, substance, or the action it is performing.
- The **taxonomic assumption**: a new word extends to other objects of the same kind, not to objects thematically related to it. If a word is used for a dog, it applies to other dogs, not to the dog's bone or leash, even though children, in non-linguistic sorting tasks, often group a dog with its bone.
- The **mutual exclusivity assumption**: each object has only one name, so a new word probably refers to something that does not yet have a name.

## The shape bias

Another proposed bias is the **shape bias**. In experiments published in 1988, **Barbara Landau**, **Linda Smith**, and **Susan Jones** showed two- and three-year-olds a novel object and named it a "*dax*." When asked which of several other objects was also a dax, children chose objects of the same **shape**, even if they differed in size, color, or texture, rather than objects of the same color or material. Smith and her colleagues argued that the shape bias is learned: children notice that many of the object names they know apply to things of similar shape, and generalize this pattern to new words. Children who were taught many shape-based words in experiments developed the bias earlier.

## Bloom's critique

Bloom accepts that children show these tendencies, but argues that they are not special constraints on word learning. Instead, they follow from more general features of children's minds. The whole-object assumption reflects the fact that children, like adults, naturally think of the world in terms of whole objects, which are salient and important; children assume that speakers, like themselves, are likely to name what is most salient. The shape bias reflects the fact that, for many kinds of objects, especially artifacts, shape is a good indicator of **kind** and of **function**. Children are not attending to shape for its own sake; they are trying to figure out what kind of thing an object is, and shape is a good clue.

## Evidence

Bloom cites evidence that children's generalizations depend on what they think the object is. When the same object is described as an animal, by adding eyes, children generalize its name by shape and texture; when it is presented as a substance, such as a lump of clay, they generalize by material. When told that an object was intentionally created to be a certain shape, they generalize by shape; when they think its shape was accidental, they do not. Children, Bloom argues, are reasoning about kinds of things, not merely following perceptual biases.

> **Pause and consider.** If an adult points to a rabbit and says "*Gavagai*," why do you assume the word means "rabbit" rather than "rabbit's tail"? Is this assumption special to language?`,
    },
    {
      title: "Reading the Speaker's Mind",
      body: `## Theory of mind

**Theory of mind** is the ability to attribute mental states—beliefs, desires, intentions, attention—to others, and to understand that these may differ from one's own. Bloom argues that theory of mind is the most important capacity underlying word learning: children learn words by inferring what speakers intend to refer to.

## Following the speaker's gaze

The psychologist **Dare Baldwin**, in experiments published in 1991 and 1993, tested whether infants attach new words to what they themselves are looking at or to what the speaker is looking at. While an infant of sixteen to nineteen months was absorbed in one toy, an experimenter, looking at a different toy hidden in a bucket, said "It's a *modi*!" Later, asked to find "the modi," infants chose the toy the experimenter had been looking at, not the one they had been playing with. Even young toddlers track the speaker's attention to determine reference.

## Finding the toma

In a study published in 1994, **Michael Tomasello** and **Michelle Barton** showed even more strikingly how children use speakers' intentions. An adult told two-year-olds, "Let's find the *toma*," and searched through several buckets. In one condition, the adult pulled out an object, scowled, and put it back, then pulled out another and smiled with satisfaction. Children learned that the second object was the toma, even though they had seen the first object first and more recently. They inferred, from the adult's expressions, which object she had been looking for.

## Intentions, not associations

Such studies show that children do not simply associate a word with whatever is present when they hear it. If they did, they would often learn wrong meanings, since words are frequently spoken when their referents are absent ("Where's your *shoe*?") or when other things are more salient. Instead, children treat words as acts of reference by speakers with intentions. This is why children learn words from conversation with people, but, as studies by Patricia Kuhl and others have shown, learn less from passive exposure to recordings or screens.

## Autism and word learning

Further evidence comes from children with **autism**, who often have difficulties with theory of mind. In a study published in 1997, **Simon Baron-Cohen** and colleagues adapted Baldwin's procedure for children with autism. Typically developing children, and children with other developmental disabilities, attached a new word to the object the speaker was looking at; many children with autism attached it to the object they themselves were looking at. This suggests that difficulties in understanding others' attention can lead to difficulties in word learning, and supports Bloom's emphasis on theory of mind.

## Learning from overhearing

Children can also learn words from conversations not addressed to them, as we saw in Lesson I. In experiments by **Nameera Akhtar** and colleagues, two-year-olds who overheard an adult tell another adult about a new object learned its name as well as children who were told directly. This, too, requires inferring what the speakers were talking about.

## Infants as mind readers

How early does theory of mind develop? Classic studies suggested that children understand false beliefs—that another person can believe something untrue—only around age four. More recent studies, using looking-time methods, suggest that infants have some sensitivity to others' beliefs much earlier, though this interpretation is debated. For word learning, what matters most is the earlier-developing ability to follow attention and infer intentions, which is present by the second year.

> **Pause and consider.** In the toma study, children learned the name of the object the adult smiled at, not the one they saw first. What does this show about how children understand words?`,
    },
    {
      title: "One Object, One Name?",
      body: `## Mutual exclusivity

When young children hear a new word in the presence of a familiar object and an unfamiliar one, they typically assume that the word refers to the unfamiliar object. In a classic study published in 1988, **Ellen Markman** and **Gwyn Wachtel** showed three-year-olds a familiar object, such as a banana, and an unfamiliar one, such as a kitchen gadget they had no name for, and asked them, using a made-up word, to show the experimenter the object it named. Children chose the unfamiliar object. Markman explained this by the **mutual exclusivity assumption**: children assume that objects have only one name, so a new name must belong to the object without one.

## A problem

But mutual exclusivity, taken strictly, is false of language: objects have many names. A single animal can be called *Fido*, *dog*, *poodle*, *animal*, *pet*, and *he*. Children must eventually learn hierarchies of names, synonyms, and multiple languages. Markman therefore proposed that mutual exclusivity is a default **bias**, which children can override when there is evidence for multiple names.

## Bloom's pragmatic explanation

Bloom offers a different explanation, based on theory of mind and pragmatics. A child reasons, in effect: "If the speaker meant the banana, she would have said *banana*, since she knows I know that word. She used a different word, so she must mean something else." This is a kind of Gricean reasoning, like the implicatures we studied in LIN 101: the speaker's choice of an unfamiliar word implicates that she means something other than what familiar words would name. On this view, mutual exclusivity is not a special word-learning constraint but a consequence of children's understanding of how speakers communicate.

## Bilingual children

Evidence for a pragmatic account comes from **bilingual children**. If mutual exclusivity were a rigid constraint, bilingual children, who regularly learn two names for every object (one in each language), would have to violate it constantly. Studies have found that bilingual and trilingual children show the mutual exclusivity effect less strongly than monolinguals, consistent with their experience that objects can have more than one name. This suggests that the effect depends on children's understanding of the communicative situation, not on a fixed constraint.

## Contrast

A related principle, proposed by the psychologist **Eve Clark**, is the **principle of contrast**: every two forms in a language contrast in meaning. If speakers use a different word, they intend a different meaning. This principle, which also applies to adults, helps explain blocking, which we met in LIN 101: since *thief* exists, a new word *stealer* would be expected to mean something different. Bloom sees contrast, like mutual exclusivity, as a consequence of understanding speakers' communicative intentions.

## Learning more than one name

How do children learn that a dog is also an animal, or that Fido is a dog? Experiments show that when an adult uses a new word in a way that signals a different level of description—"This is a *dog*. It's a kind of *animal*"—children readily learn that both words apply. They also learn proper names for individuals (*Fido*) and common nouns for kinds (*dog*), using cues we examine next. Children's ability to learn multiple names for the same object, given appropriate evidence, supports the view that their default assumptions are flexible inferences, not rigid rules.

> **Pause and consider.** Shown a banana and an unfamiliar gadget and asked for "the fep," you would probably pick the gadget. How would you explain your choice?`,
    },
    {
      title: "Concepts, Kinds, and Essences",
      body: `## Words name concepts

Bloom argues that learning a word involves mapping a sound onto a **concept**: a mental representation of a kind of thing, property, action, or relation. Children already have many concepts before they learn words for them; word learning builds on, and sometimes helps to refine, a rich conceptual system.

## Objects

Research by the psychologist **Elizabeth Spelke** and others has shown that even young infants represent the world as composed of **objects**: bounded, cohesive things that move as wholes, continue to exist when out of sight, and do not pass through one another. Infants look longer at events that violate these principles, such as an object appearing to pass through a wall. This early understanding of objects helps explain why children assume that words name whole objects.

## Kinds

Children also group objects into **kinds**: dogs, cups, chairs, people. But what makes something a member of a kind? For many kinds, especially natural kinds such as animals, children seem to believe that members share a hidden, inner nature or **essence** that makes them what they are, even if they look different.

## Psychological essentialism

The psychologist **Susan Gelman**, in *The Essential Child* (2003), documented this **psychological essentialism** in young children. In one line of studies, children were told that a bird feeds its baby mashed-up food, and that a bat (which looks like a bird) gives its baby milk. When then told that a flamingo (which looks less like a blackbird than a bat does) is a bird, children inferred that it feeds its baby like the other bird, following the shared category name rather than the appearance. Children, Gelman argued, assume that members of a kind share deep properties, and use names as a guide to kind membership. In related studies by the psychologist **Frank Keil**, children of seven or eight judged that a raccoon surgically altered to look like a skunk was still a raccoon.

## Artifacts and intentions

What about **artifacts**, things made by people, like chairs and cups? Bloom argued, in work published in 1996, that children and adults name artifacts according to their creators' **intentions**: something is a chair if it was made to be a chair, even if it is broken or used for something else. In experiments, children called a drawing a "bear" if the person who drew it intended to draw a bear, even if it looked like something else. Bloom's theory of artifact naming connects word learning again to theory of mind: to know what kind of artifact something is, one must understand what its maker intended.

## Kinds and individuals

Children also distinguish **kinds** from **individuals**, and use language to mark the difference. In English, proper names (*Fido*) name individuals and are used without articles; common nouns (*a dog*, *the dog*) name kinds. Even two-year-olds use this cue: told "This is *Zav*" about a doll, they treat *Zav* as the name of that doll; told "This is *a zav*," they treat it as a kind. They are also more willing to accept proper names for things that people care about as individuals, such as dolls and animals, than for things like blocks. These findings show again how syntax, concepts, and social understanding work together in word learning.

> **Pause and consider.** Children in Keil's studies judged that a raccoon made to look like a skunk was still a raccoon. What does this suggest about how they think about kinds?`,
    },
    {
      title: "Numbers, Substances, and Count Nouns",
      body: `## Count and mass

English distinguishes **count nouns**, which name individuated things and can be counted and pluralized (*a cup*, *two cups*, *many cups*), from **mass nouns**, which name substances and stuff (*water*, *sand*, *furniture*) and take *much* rather than *many* (*much water*, not \\**many waters* in the ordinary sense). Children learn this distinction by around age three, and use it to learn new words: told "This is *some blicket*," they assume *blicket* names a substance; told "This is *a blicket*," they assume it names an object.

## Not just perception

Is the count/mass distinction simply a matter of perception—objects versus stuff? Not entirely. *Furniture* is a mass noun, though it refers to individual objects; *pebbles* is count, *gravel* mass, though they are similar. Bloom argues that the distinction reflects how speakers **construe** what they are talking about: as individuals or as undifferentiated stuff. Languages differ: Mandarin and Japanese have no grammatical count/mass distinction of the English kind, using classifiers for all nouns, as we saw in LIN 101. In experiments by **Mutsumi Imai** and **Dedre Gentner**, Japanese and English speakers differed somewhat in how they generalized names for simple objects and substances, raising questions about linguistic relativity that we return to later.

## Learning number words

One of the most revealing cases of word learning concerns **number words**. In a series of studies beginning in 1990, the psychologist **Karen Wynn** asked children of two and three to give a puppet "one," "two," or "three" toys. She found that children learn the meanings of number words slowly and in order. Many two-year-olds can recite the count list "one, two, three, four, five" but cannot give the correct number of objects for any word except perhaps "one." Over the following months, they become **one-knowers** (they give one object for "one," but a handful for any other number), then **two-knowers**, then **three-knowers**, each step taking months. Then, often around age three and a half, they grasp the **cardinal principle**: that the last word in a count tells how many there are. After this, they can give any number they can count to.

## Why so slow?

Why does it take children a year or more to learn what *two* and *three* mean, when they learn object words so quickly? Number words name abstract properties of sets, not objects, and cannot be pointed to. Children must figure out that number words form a system and that counting determines cardinality. Wynn's research suggests that children know early that number words refer to numerosity, but take time to map individual words to precise quantities. The psychologist **Susan Carey**, in *The Origin of Concepts* (2009), argued that learning the counting system requires children to construct a genuinely new concept, using the count list as a placeholder structure.

## Languages without number words

A few languages have very limited number vocabularies. Studies of the **Pirahã** of Brazil, whose language has been described as having no exact number words, and of the **Mundurukú**, whose language has number words only up to about five, found that speakers could compare and estimate large quantities approximately, but had difficulty matching exact quantities beyond small numbers. These findings, published in 2004 by **Peter Gordon** and by **Pierre Pica** and colleagues, suggest that exact number concepts beyond three or four may depend on having a counting system in one's language or culture. Their interpretation remains debated.

> **Pause and consider.** A two-year-old can recite "one, two, three, four, five" but cannot give you three blocks. What does the child know, and what does he or she still need to learn?`,
    },
    {
      title: "Learning Verbs",
      body: `## A harder problem

As we saw in Lesson I, verbs are often learned later than nouns. Verbs pose special difficulties: actions are fleeting; the same scene can be described with different verbs (*chase* and *flee*, *give* and *receive*, *buy* and *sell*); and verbs are often spoken when the action is not happening ("Are you going to *eat*?"). Observing the world alone is not enough to learn what verbs mean.

## Syntactic bootstrapping

The psycholinguist **Lila Gleitman** proposed that children solve this problem partly through **syntactic bootstrapping**: using the sentence structures in which a verb appears to infer its meaning. Verbs that take a single participant (*The bunny is sleeping*) tend to describe actions of one participant; verbs that take two (*The duck is pushing the bunny*) describe actions involving two; verbs that take a sentential complement (*She thinks that it's raining*) describe mental states or communication.

## The gorping experiment

In a study published in 1990, **Letitia Naigles** tested this idea with two-year-olds. Children watched a video in which a duck pushed a rabbit into a squatting position while both waved their arms. Some children heard "*The duck is gorping the bunny*"; others heard "*The duck and the bunny are gorping*." Then two new videos appeared side by side: in one, the duck pushed the rabbit without arm-waving; in the other, both waved their arms without pushing. Asked "Where's gorping now?", children who had heard the transitive sentence looked longer at the pushing scene, while those who had heard the intransitive sentence looked longer at the arm-waving scene. The syntax had guided their interpretation of the new verb.

## Blind children

A remarkable test of syntactic bootstrapping came from studies of **blind children**. In *Language and Experience* (1985), **Barbara Landau** and **Lila Gleitman** reported on Kelli, a congenitally blind child. Surprisingly, Kelli learned the words *look* and *see*, and used them appropriately. For Kelli, *look* meant to explore with her hands: asked to "look up," she raised her hands over her head, not her face; asked to "look at" an object, she touched it. *See* meant something like perceive or know. Since Kelli could not learn these words from observing what sighted people did with their eyes, Landau and Gleitman argued that she must have learned them largely from the sentence frames in which they occurred, which are similar to those of other perception and cognition verbs (*Let's see if…*, *Look at that*). Blind children's vocabulary development is broadly similar to that of sighted children, including words like *blue* and *green*, which blind children learn as names for properties of things they know but cannot perceive.

## Bloom on verbs

Bloom accepts the importance of syntactic cues but emphasizes that children also use their understanding of the speaker's intentions and the situation. A child who hears "*I'm going to glorp it*" as an adult picks up a ball will infer that *glorp* names the intended action. Verbs, like nouns, are learned by integrating multiple sources of information.

## Verbs across languages

As we saw in Lesson I, the noun advantage is weaker in some languages. Children learning **Korean** and **Mandarin**, in which nouns are often omitted and verbs appear in prominent positions, learn verbs relatively early. Languages also differ in how they package actions in verbs: English verbs typically encode the **manner** of motion (*run*, *crawl*, *roll*) and express the **path** separately (*into the room*), while Spanish verbs often encode the path (*entrar* "enter," *salir* "exit") and express manner separately. Children learning each language attend to the patterns of their own language from an early age.

> **Pause and consider.** How might a blind child learn the meaning of *see*? What does Kelli's case suggest about the role of sentence structure in word learning?`,
    },
    {
      title: "Abstract Words and Words for the Mind",
      body: `## Beyond the concrete

Many words do not name things that can be pointed to: *idea*, *justice*, *yesterday*, *if*, *the*, *think*, *pretend*. How do children learn them? Bloom argues that the same capacities that underlie learning concrete words—theory of mind, conceptual knowledge, syntactic cues, and general learning—also explain learning abstract words, though the process is often slower.

## Mental state words

Children begin to use words for mental states—*want*, *like*, *think*, *know*, *remember*, *pretend*—in the second and third years. Early uses of *think* and *know* are often formulaic ("I don't know"), but by age three or four, children use them to talk about beliefs that may be false ("I thought it was a dog, but it was a cat"). Researchers have found that children's mastery of the syntax of mental state verbs, which take sentential complements (*He thinks that the toy is in the box*), is associated with their understanding of false belief. The psychologist **Jill de Villiers** has argued that learning this syntax helps children represent others' false beliefs, since the complement clause can be false while the whole sentence is true.

## Time words

Words for time—*yesterday*, *tomorrow*, *before*, *after*, *week*—are learned slowly. Many three-year-olds use *yesterday* to mean any time in the past, and *tomorrow* any time in the future, refining their meanings over several years. This suggests that children grasp the general category of past and future before they master the precise units of time.

## Color words

Children learn color words surprisingly late. Charles Darwin, in observations of his own children published in 1877, remarked that they seemed unable to name colors correctly long after they could see them. Modern studies confirm that many children use color words like *red* and *blue* by age two, but apply them inconsistently until around three or four. Bloom suggests that the difficulty lies not in perceiving colors but in figuring out that color words name a property that cuts across objects, since children assume, by default, that words name kinds of objects.

## Function words

Function words such as *the*, *a*, *of*, *and*, and *because* have abstract, grammatical meanings. Children learn them through their roles in sentences, gradually discovering what distinctions they mark. As we saw in Lesson I, children's early speech often omits them, but they understand some of them earlier than they produce them: studies have shown that two-year-olds understand sentences better when articles are used correctly than when they are omitted or replaced by nonsense syllables.

## Learning from language itself

Many abstract words are learned primarily from **language itself**: from definitions, explanations, and contexts in conversation and reading. A child may learn *democracy*, *atom*, or *mercy* not from seeing them but from being told about them. Bloom emphasizes that, once children have some language, language becomes a powerful tool for learning more language, as well as for learning about the world beyond their direct experience—including, for children raised in religious communities, the vocabulary of faith: *God*, *prayer*, *grace*, *heaven*.

> **Pause and consider.** How might a child learn the meaning of a word like *grace* or *forgive*? What role would conversation and stories play?`,
    },
    {
      title: "Do Words Shape Thought?",
      body: `## A two-way relation

We have seen that children use their concepts to learn words. Can learning words also shape children's concepts? This is a developmental version of the question of linguistic relativity, which we met in LIN 101.

## Labels and categories

Some studies suggest that hearing words helps infants form categories. In studies by **Sandra Waxman** and colleagues beginning in the 1990s, infants as young as a few months who heard different objects labeled with the same word ("Look at the *toma*!") were more likely to form a category including them than infants who heard the same objects accompanied by a tone. Labels seem to invite infants to look for commonalities among things.

## Individuating objects

In a study published in 2002, **Fei Xu** found that ten-month-old infants were better able to track that two different objects were present, behind a screen, when the objects were labeled with two different words than when they were labeled with the same word. She suggested that distinct labels help infants represent objects as distinct individuals of different kinds. Other researchers have debated how to interpret these findings.

## Spatial language

Languages differ in how they describe spatial relations. As we noted in LIN 101, some languages, such as **Guugu Yimithirr** of Australia and **Tzeltal** of Mexico, describe locations using absolute directions (north, uphill) rather than relative ones (left, right). Research by **Stephen Levinson** and colleagues, published in *Space in Language and Cognition* (2003), found that speakers of such languages also tend to remember and reason about spatial arrangements in absolute terms in non-linguistic tasks. Children learning such languages master absolute spatial terms surprisingly early. Critics, such as **Peggy Li** and **Lila Gleitman**, argued that the differences reflect the testing situation and cultural habits rather than deep effects of language on thought.

## Bloom's caution

Bloom, in his book and later work, takes a cautious view. He accepts that language can be a powerful tool for learning—allowing children to acquire information they could not get from direct experience, to hold abstract ideas in mind, and to share knowledge across generations—but he doubts that the particular language one speaks deeply restructures basic thought. Children, he argues, come to language with rich concepts that language labels rather than creates. Pinker, in *The Language Instinct*, similarly argued that people think in a language of thought, "**mentalese**," distinct from any spoken language, and dismissed strong versions of linguistic relativity as unfounded.

## A middle ground

Many researchers today take a middle position: language does not determine thought, but it can influence attention, memory, and categorization in subtle ways, especially in tasks where people use language to help them think. And for certain concepts, such as exact large numbers, as we saw, having words may be important for developing the concept at all. We return to these questions in Lesson V.

## The gift of words

Whatever its precise effects, learning words opens up a world. Through words, children enter the knowledge, stories, and beliefs of their community, learning about places they have never been, people who lived long ago, and realities they cannot see. As Helen Keller recalled of the moment, at the water pump, when she first understood that the letters her teacher spelled into her hand named the water flowing over it: "That living word awakened my soul, gave it light, hope, joy, set it free!" (*The Story of My Life*, 1903).

> **Pause and consider.** Helen Keller described understanding the word *water* as an awakening. What changed for her at that moment?`,
    },
    {
      title: "Learning Across Situations",
      body: `## Statistics for words

Bloom emphasizes theory of mind, but other researchers have argued that children can also learn words by tracking statistics across many situations. In a single situation, a word is ambiguous: when a parent says "ball," there may be a ball, a dog, and a cup in view. But across many situations, the ball is consistently present when "ball" is said, while the dog and cup vary. A learner who keeps track of which words co-occur with which objects across situations can gradually narrow down the meanings. This is called **cross-situational learning**.

## Experiments

In experiments published in 2007, **Chen Yu** and **Linda Smith** showed adults a series of trials, each displaying several novel objects while several novel words were spoken, without indicating which word went with which object. Each trial was ambiguous, but across trials, each word consistently co-occurred with one object. After a few minutes, participants had learned many of the word-object pairings. Later studies found that infants of twelve to fourteen months can also learn from such cross-situational statistics.

## The view from the child

Smith and her colleagues also attached small cameras to infants' heads to record what infants actually see during play with their parents. They found that, from the infant's point of view, scenes are often much less cluttered than they appear to an adult observer: infants hold objects close, so that one object often dominates their visual field. When parents name an object at such moments, the naming is much less ambiguous than Quine's scenario suggests. Smith argued that the structure of infants' bodily interaction with objects does much of the work that theories of constraints and mind reading attribute to cognition.

## Bloom's response

Bloom acknowledges that children are sensitive to statistical regularities, but argues that statistics alone cannot explain word learning. Words are often spoken when their referents are absent; many words, such as verbs and abstract nouns, have no consistent perceptual correlate; and, as the toma study showed, children use speakers' intentions to override co-occurrence. He suggests that statistics and mind reading work together: children use their understanding of intentions to decide which statistics are relevant.

## Integrating the evidence

Many researchers now see word learning as drawing on several mechanisms at once: social cues, cross-situational statistics, syntactic structure, and conceptual biases, weighted differently for different words and at different ages. This integrative view echoes the conclusion of Lesson II: the debate is less about which mechanism is "the" mechanism than about how they combine.

> **Pause and consider.** Head-camera studies show that infants' views are less cluttered than adults assume. How might this change our understanding of Quine's problem?`,
    },
    {
      title: "How Many Words, and How?",
      body: `## Counting words

How many words do children and adults know? The question is harder than it sounds. One must decide whether *run*, *runs*, *ran*, and *running* count as one word or four; whether *runner* and *rerun* count separately; whether proper names count; and what it means to "know" a word—to recognize it, to define it, or to use it. Estimates vary widely depending on these decisions and on how vocabulary is tested.

## School vocabularies

In a study published in 1984, **William Nagy** and **Richard Anderson** estimated that printed school English, the books children read from grades three to nine, contains about 88,500 distinct "word families" (groups of words sharing a base, like *run*, *runner*, *running*). Children cannot be taught so many words directly: even a generous program of explicit vocabulary instruction might cover a few hundred words a year. The psychologist **Jeremy Anglin**, in a study published in 1993, estimated that children's vocabularies grow by thousands of words a year during the school years, with much of the growth in derived and compound words that children can work out from their parts, using the morphological knowledge we studied in LIN 101.

## Learning from context

Where do all these words come from? A major source, as we saw in Lesson I, is **reading**. In a study published in 1985, **Nagy**, **Patricia Herman**, and Anderson found that when students encountered an unfamiliar word once in natural reading, they had a small but real chance—roughly one in ten or twenty—of learning something about its meaning. Small as this is, a child who reads a million words a year will encounter thousands of unfamiliar words, and many of them several times, so that incidental learning from reading can account for much vocabulary growth.

## Knowing a word

Knowing a word is not all or nothing. A person may recognize a word, have a vague sense of its meaning, know its precise meaning, know how to use it in sentences, know its connotations and collocations, and know related words. Vocabulary knowledge grows in **depth** as well as **breadth**, as words are encountered in more contexts over time.

## Bloom on fast learning

Bloom points out that children's ability to learn words from few exposures is impressive, but not mysterious. In experiments published with **Lori Markson** in 1997, he found that three- and four-year-olds remembered a new word they had heard once ("koba") about as well, a month later, as a new fact they had heard once about an object ("my uncle gave this to me"). Fast learning, he concluded, reflects general properties of human memory and attention, not a special word-learning device.

## Vocabulary and opportunity

Vocabulary differences among children are associated with differences in later reading comprehension and school achievement. Because so much vocabulary comes from conversation and reading, rich language environments—conversation with adults, being read to, and reading widely—are among the most important supports for children's language development.

> **Pause and consider.** Bloom found that children remembered a new fact as well as a new word. What does this suggest about whether word learning is special?`,
    },
    {
      title: "Children and Figurative Meaning",
      body: `## Beyond literal meanings

Adults use words in many nonliteral ways: metaphors, idioms, irony, and jokes. How do children learn to understand these? Research suggests that children's understanding of figurative language develops gradually through the school years, building on their understanding of word meanings and of speakers' intentions.

## Overextensions or metaphors?

Young children sometimes use words in ways that look like metaphors. A two-year-old might call a crescent moon a "banana" or a pencil sharpener's shavings "curls." Are these creative metaphors or mistakes? Researchers have distinguished **overextensions**, in which a child believes the word applies (calling all men "daddy"), from **pretend** or **metaphorical** uses, in which the child knows the object is not a banana but notes a resemblance, often during play. Studies by the psychologist **Ellen Winner** in the 1980s suggested that young children do produce genuine metaphors based on perceptual similarity, especially shape, while metaphors based on abstract or psychological similarity ("She is a cold person") are understood much later.

## Idioms

Idioms such as *spill the beans* or *pull someone's leg* are understood literally by young children, and their figurative meanings are learned gradually through the school years. Children are helped by context and by idioms whose meanings are partly transparent (*break the ice*) more than by opaque ones (*kick the bucket*).

## Irony and sarcasm

Understanding **irony**—saying the opposite of what one means, as when someone says "Lovely weather!" in a downpour—requires recognizing that the speaker does not believe what she literally says and intends the hearer to recognize this. As we saw in LIN 101, this is a kind of Gricean inference. Studies have found that children typically begin to understand simple irony around age five or six, and continue to improve into adolescence. Understanding irony is closely related to theory of mind, and children with difficulties in theory of mind, including many with autism, often find irony and sarcasm hard to grasp.

## Jokes and riddles

As we saw in Lesson I, school-age children delight in jokes and riddles based on ambiguity, which require them to recognize that a word or sentence has two meanings. Their appreciation of such humor grows with their metalinguistic awareness, the ability to reflect on language as an object.

## Parables and stories

Figurative language is central to many forms of teaching, including religious teaching. Jesus taught in **parables**, stories whose meaning goes beyond their literal content, and his disciples sometimes misunderstood him, taking figurative statements literally: when he warned them to "beware of the leaven of the Pharisees," they thought he was speaking of bread (Matthew 16:6–12). Research on children's understanding of figurative language suggests why young children may hear parables as simple stories, and why their deeper meanings may grow on them as their understanding develops.

> **Pause and consider.** A young child hears the parable of the lost sheep. What might the child understand, and what might take longer to grasp?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Quine's gavagai (1960)

> A native speaker says "*Gavagai*" as a rabbit runs past.

**Questions**

1. Why can't the meaning of *gavagai* be determined from the situation alone?
2. How do Markman's biases and Bloom's theory-of-mind account each propose to solve the problem?

## 2. Tomasello and Barton's "toma" study (1994)

> An adult searching for "the toma" scowls at one object and smiles at another.

**Questions**

1. Which object did children think was the toma, and why?
2. What does this show about the role of intentions in word learning?

## 3. Naigles's "gorping" study (1990)

> "The duck is gorping the bunny" versus "The duck and the bunny are gorping."

**Questions**

1. How did sentence structure affect children's interpretation of *gorp*?
2. How does this support syntactic bootstrapping?

## 4. Helen Keller, The Story of My Life (1903)

> That living word awakened my soul, gave it light, hope, joy, set it free!

**Questions**

1. What did Keller come to understand at the water pump?
2. How does her experience illustrate the relation between words and thought?

## Drawing the threads together

In a paragraph, summarize Bloom's account of how children learn the meanings of words, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "How Children Learn the Meanings of Words", author: "Paul Bloom", publisher: "MIT Press", year: "2000", note: "Read chapters 1–3 and 10." },
    { kind: "book", title: "The Story of My Life", author: "Helen Keller", publisher: "Doubleday, Page", year: "1903", note: "In the public domain. Read chapter 4, on the water pump." },
    { kind: "book", title: "Language and Experience: Evidence from the Blind Child", author: "Barbara Landau and Lila R. Gleitman", publisher: "Harvard University Press", year: "1985", note: "Read the chapter on *look* and *see*." },
  ],
  media: [
    { kind: "book", title: "The Essential Child: Origins of Essentialism in Everyday Thought", author: "Susan A. Gelman", publisher: "Oxford University Press", year: "2003", note: "Read the introduction." },
    { kind: "book", title: "The Origin of Concepts", author: "Susan Carey", publisher: "Oxford University Press", year: "2009", note: "Read the chapter on number." },
  ],
  questions: [
    {
      prompt: "What is Paul Bloom's central thesis about word learning?",
      choices: [
        "That children have a special word-learning device",
        "That word learning draws on general capacities: theory of mind, concepts, syntax, and memory",
        "That words are learned by reinforcement",
        "That words are innate",
      ],
      answer: 1,
      explanation: "Bloom, How Children Learn the Meanings of Words (2000).",
    },
    {
      prompt: "What is the whole-object assumption?",
      choices: [
        "That words name parts of objects",
        "That a new word refers to a whole object, not its parts or properties",
        "That all objects have names",
        "That objects are whole",
      ],
      answer: 1,
      explanation: "Proposed by Ellen Markman.",
    },
    {
      prompt: "What did Baldwin's experiments show about infants?",
      choices: [
        "That they attach words to whatever they are looking at",
        "That they attach words to what the speaker is looking at",
        "That they cannot learn words",
        "That they ignore speakers",
      ],
      answer: 1,
      explanation: "Infants track the speaker's attention.",
    },
    {
      prompt: "How does Bloom explain the mutual exclusivity effect?",
      choices: [
        "As a rigid constraint",
        "As a pragmatic inference: if the speaker meant the familiar object, she would have used its familiar name",
        "As random guessing",
        "As a perceptual bias",
      ],
      answer: 1,
      explanation: "Bilingual children show the effect less strongly.",
    },
    {
      prompt: "What did Susan Gelman's research show about young children?",
      choices: [
        "That they judge kinds only by appearance",
        "That they assume members of a kind share hidden essences, using category names as a guide",
        "That they cannot form categories",
        "That they prefer artifacts",
      ],
      answer: 1,
      explanation: "This is psychological essentialism.",
    },
    {
      prompt: "What did Karen Wynn find about how children learn number words?",
      choices: [
        "That they learn all number words at once",
        "That they learn one, then two, then three slowly, before grasping the cardinal principle",
        "That they never learn them",
        "That they learn larger numbers first",
      ],
      answer: 1,
      explanation: "The cardinal principle often comes around age three and a half.",
    },
    {
      prompt: "What did Naigles's gorping experiment show?",
      choices: [
        "That children ignore syntax",
        "That sentence structure guided two-year-olds' interpretation of a new verb",
        "That children learn verbs before nouns",
        "That ducks gorp",
      ],
      answer: 1,
      explanation: "This supports syntactic bootstrapping.",
    },
    {
      prompt: "How did the blind child Kelli understand \"look up\"?",
      choices: [
        "She did not understand it",
        "She raised her hands over her head, exploring with her hands",
        "She turned her face upward",
        "She said she could not",
      ],
      answer: 1,
      explanation: "For her, look meant to explore by touch.",
    },
    {
      prompt: "Why might children learn color words relatively late?",
      choices: [
        "Because they cannot see colors",
        "Because they assume by default that words name kinds of objects, not properties that cut across objects",
        "Because parents never use color words",
        "Because colors are innate",
      ],
      answer: 1,
      explanation: "Darwin noted his children's difficulty with color names.",
    },
    {
      prompt: "What did Fei Xu (2002) find about ten-month-olds?",
      choices: [
        "That labels have no effect",
        "That distinct labels helped infants represent two objects as distinct individuals",
        "That infants cannot track objects",
        "That infants prefer tones",
      ],
      answer: 1,
      explanation: "Its interpretation is debated.",
    },
  ],
  reflection:
    "Bloom argues that children learn words by reading speakers' minds, using concepts and syntax rather than a special word-learning device. In 500–800 words, evaluate this thesis, drawing on at least three experiments or cases from this lesson, and consider whether any evidence favors a more specialized mechanism.",
};
