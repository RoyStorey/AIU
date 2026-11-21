import type { Lesson } from "@/lib/schema";

export const lesson2: Lesson = {
  title: "Word Meaning",
  summary:
    "The lexicon and the dictionary; homonymy, polysemy, and regular polysemy; why true synonyms are rare; kinds of opposites; hyponymy, meronymy, and the basic level; componential analysis and its problems; prototypes and family resemblance; semantic fields and the universals of color terms; kinship systems; spatial words across languages; how dictionaries define words; and how computers represent word meanings.",
  pages: [
    {
      title: "The Lexicon",
      body: `## A mental dictionary

Every speaker knows tens of thousands of words, stored in a mental **lexicon**. For each word, the speaker knows its pronunciation, its grammatical category and behavior (as we saw with subcategorization in SYN 101), and its **meaning**. **Lexical semantics** is the study of word meanings and the relations among them.

## Lexemes and word forms

Linguists distinguish **word forms** from **lexemes**. The forms *run*, *runs*, *ran*, and *running* are different word forms of a single lexeme, RUN, which a dictionary lists once. Lexical semantics studies the meanings of lexemes. A lexeme may also consist of more than one word, as in idioms (*kick the bucket*) and phrasal verbs (*give up*), as we saw in Lesson I.

## Dictionaries

Dictionaries are the most familiar attempt to describe word meanings. The great historical dictionaries, such as the ***Oxford English Dictionary***, begun in 1857 and first completed in 1928, record not only current meanings but the history of each word, with dated quotations showing its uses over the centuries, as we saw in HIL 101. Modern dictionaries are increasingly based on **corpora**, large collections of real texts, which show how words are actually used.

## How many words?

How many words does a speaker know? Estimates vary widely, depending on what counts as a word and how knowledge is tested. Studies of English speakers suggest that an educated adult native speaker knows somewhere in the range of 20,000 to 40,000 lexemes, with considerable individual variation. Children learn new words at a remarkable rate, as we saw in LIN 110, perhaps several thousand a year during the school years.

## Structure in the lexicon

The lexicon is not a random list. Words are connected to each other by **relations** of meaning: *hot* is the opposite of *cold*; a *rose* is a kind of *flower*; a *wheel* is part of a *car*; *big* and *large* are near-synonyms. Words also cluster into **semantic fields**, such as colors, kinship, or cooking. Studies of word association, slips of the tongue, and aphasia show that these relations are psychologically real: speakers asked to respond with the first word that comes to mind often produce opposites (*hot*–*cold*) or related words in the same field (*table*–*chair*).

## Approaches to word meaning

In this lesson, we study several approaches to word meaning:

- **relational** approaches, which describe meanings by their relations to other words (synonymy, antonymy, hyponymy);
- **componential** approaches, which break meanings into smaller components;
- **prototype** approaches, which describe categories by their typical members;
- **field** approaches, which study how languages divide up areas of meaning;
- **distributional** approaches, which describe meanings by the contexts in which words occur.

Each captures something important, and modern lexical semantics draws on all of them.

> **Pause and consider.** Write down the first word that comes to mind for *hot*, *table*, *mother*, and *needle*. What relations connect your responses to the prompts?`,
    },
    {
      title: "Homonymy and Polysemy",
      body: `## One form, several meanings

Many words have more than one meaning. Linguists distinguish two cases:

- **Homonymy**: two **unrelated** words that happen to have the same form. *Bank* "financial institution" (from Italian *banca*, a bench used by money-changers) and *bank* "side of a river" (from a Scandinavian word for a ridge) are **homonyms**. A dictionary lists them as separate entries.
- **Polysemy**: a single word with several **related** meanings. *Head* means the top part of the body, the leader of an organization (*head of state*), the top of something (*head of a page*), and the front (*head of a queue*). These senses are related by metaphor and extension. A dictionary lists them as senses of one entry.

## Homophones and homographs

Homonyms may be **homophones**, sounding the same but spelled differently (*right*, *write*, *rite*), or **homographs**, spelled the same but pronounced differently (*lead* the metal, *lead* the verb). As we saw in PHO 101, English spelling often disguises or creates such relations.

## Telling them apart

How can we tell homonymy from polysemy? Two criteria are used:

- **Etymology**: if the meanings come from different historical sources, the words are homonyms. But speakers do not know etymologies, and some homonyms are historically related: *pupil* "student" and *pupil* "center of the eye" both come from Latin *pupilla*, "little doll" (because of the tiny image of oneself seen reflected in another's eye), yet most speakers feel them as unrelated.
- **Relatedness** of meaning: if speakers perceive a connection between the meanings, the word is polysemous. But judgments of relatedness vary.

In practice, the distinction is a matter of degree.

## Regular polysemy

Some patterns of polysemy are **systematic**, applying to many words. The Russian linguist **Juri Apresjan** called this **regular polysemy** in 1974. Examples:

- **animal / meat**: *chicken*, *lamb*, *turkey* (*The chicken ran away*; *We ate chicken*);
- **container / contents**: *He drank the whole bottle*; *The kettle is boiling*;
- **institution / building / people**: *The school is on Main Street*; *The school called a meeting*; *The school went on strike*;
- **author / works**: *I've read all of Dickens*;
- **tree / wood**: *oak*, *pine*.

Regular polysemy is productive: new words fit the patterns automatically. If a new animal became a common food, its name could be used for its meat without anyone needing to learn the new sense.

## The generative lexicon

The American computational linguist **James Pustejovsky**, in *The Generative Lexicon* (1995), proposed that many such senses are not stored separately but **generated** from a rich representation of each word's meaning, including what kind of thing it is, what it is made of, what it is for, and how it comes into being. *Begin a book* means begin reading or writing it, because books are things that are read and written. This approach explains how words adapt their meanings to context.

## Polysemy everywhere

Polysemy is pervasive: the most frequent words in a language tend to have the most senses. The verb *run* has dozens of senses in a large dictionary (*run a race*, *run a company*, *the river runs*, *a run in a stocking*). As we saw in HIL 101, polysemy arises historically through metaphor, metonymy, and other kinds of semantic change.

> **Pause and consider.** Is *mouth* (of a person, of a river) a case of homonymy or polysemy? How would you decide?`,
    },
    {
      title: "Synonymy",
      body: `## Same meaning?

**Synonyms** are words with the same or very similar meanings: *big* and *large*, *begin* and *start*, *couch* and *sofa*. But are any two words exactly the same in meaning? Most linguists think **true synonymy**, complete identity of meaning in all contexts, is rare or nonexistent. Words that seem synonymous usually differ in some respect.

## Ways synonyms differ

The British linguist **D. A. Cruse**, in *Lexical Semantics* (1986), identified several ways in which near-synonyms differ:

- **Register** or formality: *kids* versus *children*; *buy* versus *purchase*; *begin* versus *commence*. As we saw in HIL 101, English has many sets of synonyms from different historical sources, with native words often more informal and Latinate words more formal (*ask*, *question*, *interrogate*).
- **Dialect**: *lift* (British) versus *elevator* (American); *pavement* versus *sidewalk*; *soda* versus *pop* versus *coke* in different American regions, which we will meet in SOC 110.
- **Connotation**: words may share their basic meaning but differ in the attitudes they convey: *slim*, *thin*, *skinny*; *thrifty*, *frugal*, *stingy*; *firm*, *stubborn*, *pig-headed*. The philosopher **Bertrand Russell** illustrated this with a famous "conjugation" on a radio program in 1948: "I am firm, you are obstinate, he is a pig-headed fool."
- **Collocation**: words may differ in which other words they combine with: *a big mistake* but not usually *a large mistake*; *my big sister* (older) but not *my large sister*; *rancid butter* but *addled eggs* and *sour milk*.
- **Specialized** senses: *big* and *large* may be interchangeable for size, but only *big* has the sense "older" or "important" (*a big name*).

## Why true synonymy is rare

Why do languages avoid true synonyms? One explanation is a principle of **economy**: if two words meant exactly the same thing, one would be redundant, and speakers would tend either to drop one or to differentiate their meanings. As we saw in HIL 101, when English borrowed French words, the native and borrowed words often came to differ in meaning or register: *pig* and *pork*, *cow* and *beef*. The psychologist **Eve Clark** proposed, in connection with children's word learning, a **principle of contrast**: every two forms contrast in meaning. Children seem to assume that a new word means something different from words they already know.

## Testing for synonymy

One test for synonymy is **substitution**: if two words can be substituted for each other in all contexts without changing the meaning or the truth of the sentence, they are synonyms. By this test, true synonyms are almost impossible to find. Another approach looks at whether two words are interchangeable in particular contexts, recognizing **partial** synonymy.

## Synonyms across languages

Translation equivalents across languages are also rarely exact synonyms. French *rivière* and *fleuve* both translate English *river*, but *fleuve* is used for rivers that flow into the sea. German *essen* and *fressen* both mean "eat," but *fressen* is used for animals (and, insultingly, for people who eat greedily). Such differences, as we saw with Saussure's notion of value in Lesson I, reflect how each language divides its semantic space.

> **Pause and consider.** Find three pairs of near-synonyms in English and explain how each pair differs.`,
    },
    {
      title: "Opposites",
      body: `## Not all opposites are alike

**Antonymy**, the relation of oppositeness, seems simple: *hot* and *cold*, *alive* and *dead*, *buy* and *sell*. But these pairs are opposites in different ways. Linguists distinguish several types.

## Gradable antonyms

**Gradable** antonyms, such as *hot*/*cold*, *big*/*small*, *old*/*young*, and *happy*/*sad*, lie at opposite ends of a **scale**, with intermediate points between them:

- They can be modified by degree words: *very hot*, *rather cold*, *hotter*, *coldest*.
- Denying one does not assert the other: *not hot* does not mean *cold*; the water could be lukewarm.
- Their interpretation is **relative** to a standard, as we saw with vagueness in Lesson I: a *big* mouse is smaller than a *small* elephant.

## Complementary antonyms

**Complementary** (or contradictory) antonyms, such as *dead*/*alive*, *true*/*false*, *pass*/*fail*, and *married*/*single*, divide their domain into two parts with **no middle ground**:

- Denying one asserts the other: *not dead* means *alive*.
- They resist degree modification: \\#*very dead* (except in jokes or figurative uses, *more dead than alive*).

## Converses

**Converses** describe the same relation from opposite perspectives:

- *buy*/*sell*: *John bought the car from Mary* = *Mary sold the car to John*;
- *parent*/*child*, *above*/*below*, *before*/*after*, *employer*/*employee*, *give*/*receive*.

If A is B's parent, then B is A's child. Converses are not really "opposites" in the sense of contrary properties, but complementary perspectives on a single relation.

## Reversives

**Reversives** denote movement or change in opposite directions: *tie*/*untie*, *enter*/*leave*, *rise*/*fall*, *fill*/*empty*, *dress*/*undress*.

## Markedness

In many pairs of gradable antonyms, one member is **unmarked**, or neutral, and the other **marked**. Consider:

- *How tall is she?* (neutral: she might be short)
- *How short is she?* (marked: implies she is short)

*Tall* is the unmarked member: it can be used to ask about height in general. Similarly, *old* is unmarked in *How old is the baby?* (one does not say *How young is the baby?* neutrally), and the measurement nouns are formed from the unmarked term: *height*, *length*, *width*, *age*. The unmarked member is usually the one denoting more of the property, and it is often learned earlier by children.

## Antonyms in the mind

Antonymy is psychologically salient. In word association tasks, people very often respond to an adjective with its antonym. Antonym pairs often occur together in texts (*rich and poor*, *young and old*), a fact that corpus linguists such as **Steven Jones** have studied, finding that such co-occurrence helps to establish and maintain antonym pairs in a language.

## In poetry and scripture

Opposites are a favorite device of poetry and wisdom literature. The book of Ecclesiastes contrasts "A time to be born, and a time to die; a time to plant, and a time to pluck up that which is planted" (Ecclesiastes 3:2), pairing complementaries and reversives to describe the whole of human life.

> **Pause and consider.** Classify each pair: *open*/*closed*; *open*/*shut* (as verbs); *teacher*/*student*; *rich*/*poor*.`,
    },
    {
      title: "Hyponymy, Meronymy, and the Basic Level",
      body: `## Kinds of

**Hyponymy** is the relation of inclusion between a more specific term and a more general one: a *rose* is a kind of *flower*; a *flower* is a kind of *plant*. *Rose* is a **hyponym** of *flower*, and *flower* is the **hypernym** (or superordinate) of *rose*. Words that are hyponyms of the same term, such as *rose*, *tulip*, and *daisy*, are **co-hyponyms**.

## Taxonomies

Hyponymy creates hierarchical **taxonomies**:

> *animal* → *mammal* → *dog* → *poodle*

Properties of the higher terms are **inherited** by the lower ones: if all mammals breathe air, then all dogs and all poodles do. This inheritance makes taxonomies an efficient way of organizing knowledge, and they are used in biology, library classification, and computer databases, as well as in language.

## Entailment

Hyponymy produces **entailment**, which we study in Lesson III: *I saw a poodle* entails *I saw a dog*, which entails *I saw an animal*. If the first is true, the others must be.

## Part of

**Meronymy** is the part–whole relation: a *wheel* is part of a *car*; a *finger* is part of a *hand*; a *page* is part of a *book*. *Wheel* is a **meronym** of *car*, and *car* is the **holonym**. Meronymy differs from hyponymy: a wheel is not a kind of car. Meronymic relations are more varied than hyponymic ones: component and whole (wheel–car), member and collection (tree–forest), portion and mass (slice–cake), stuff and object (steel–car).

## The basic level

Which level of a taxonomy do people use most? If shown a picture of a poodle, most English speakers will call it a *dog*, not an *animal* or a *poodle*. In a series of studies in the 1970s, the psychologist **Eleanor Rosch** and her colleagues identified a privileged **basic level** of categorization, in a paper published in 1976. Basic-level categories, such as *dog*, *chair*, *apple*, and *car*:

- are the first named by children;
- are named most quickly by adults;
- are the highest level at which members share a common overall **shape** and can be represented by a single mental image (one can picture a typical dog, but not a typical animal);
- are the highest level at which people interact with members in a similar way (sitting on chairs, eating apples);
- usually have short, simple, native names.

Categories above the basic level, such as *animal* and *furniture*, are **superordinate**; those below it, such as *poodle* and *armchair*, are **subordinate**.

## Expertise and culture

The basic level can shift with **expertise** and **culture**. For a dog breeder, *poodle* may function as a basic-level term; for an urban person with little contact with nature, *tree* may be basic, while for a forester, *oak* and *elm* may be basic. Studies by anthropologists such as **Brent Berlin**, of folk biological classification in traditional societies, found that the **genus** level (*oak*, *robin*) is typically basic, and that folk taxonomies around the world share many structural properties.

## Folk and scientific taxonomies

Folk taxonomies do not always match scientific ones. In ordinary English, a *whale* was once classified as a *fish*, and *fruit* and *vegetable* are culinary rather than botanical categories: botanically, a tomato is a fruit, but in cooking, it is treated as a vegetable. In 1893, in the case *Nix v. Hedden*, the U.S. Supreme Court ruled that the tomato was a vegetable for purposes of tariff law, following ordinary usage rather than botany.

> **Pause and consider.** What is the basic-level term for the object you are sitting on? What are its superordinate and subordinate terms?`,
    },
    {
      title: "Componential Analysis",
      body: `## Breaking meanings into parts

One influential approach to word meaning is **componential analysis**: describing the meaning of a word as a combination of smaller **semantic components** or **features**. The idea was developed in European structuralism by the Danish linguist **Louis Hjelmslev**, in American anthropology for kinship terms, and in generative linguistics by **Jerrold Katz** and **Jerry Fodor** in "The Structure of a Semantic Theory" (1963).

## A classic example

A classic example is a set of words for people:

| | HUMAN | ADULT | MALE |
|---|---|---|---|
| *man* | + | + | + |
| *woman* | + | + | − |
| *boy* | + | − | + |
| *girl* | + | − | − |

Each word is defined by a combination of binary features. Similar analyses can be given for animals: *stallion* [+EQUINE, +ADULT, +MALE], *mare* [+EQUINE, +ADULT, −MALE], *foal* [+EQUINE, −ADULT].

## What components explain

Componential analysis explains several semantic relations:

- **hyponymy**: *girl* is a hyponym of *child* because its components include all those of *child* ([+HUMAN, −ADULT]) plus another ([−MALE]);
- **antonymy**: *man* and *woman* differ in a single component;
- **anomaly**: \\#*a pregnant man* is odd because *pregnant* requires [−MALE];
- **entailment**: *She is a mare* entails *She is an adult horse*.

## Bachelor

Katz's favorite example was *bachelor*, which he analyzed as [+HUMAN, +MALE, +ADULT, −MARRIED]. This seemed to capture the meaning neatly. But **Charles Fillmore** and later **George Lakoff** pointed out problems: is the **Pope** a bachelor? He is an unmarried adult man, yet calling him a bachelor seems odd. What about a man in a long-term unmarried partnership, or a Tarzan who grew up in the jungle? The word *bachelor* seems to presuppose a background **frame** of social expectations about marriage, which the features do not capture. We will return to frames in Lesson V.

## Kinship

Componential analysis has been especially successful for **kinship** terms, as anthropologists such as **Ward Goodenough** and **Floyd Lounsbury** showed in 1956. English kinship terms can be analyzed by components such as generation (+1, 0, −1), sex, lineality (direct versus collateral), and consanguinity versus affinity (blood relatives versus in-laws). As we will see later in this lesson, kinship systems vary greatly across cultures, and componential analysis provides a way of comparing them.

## Problems

Componential analysis faces several problems:

- **Where do the features end?** To distinguish *chair* from *stool*, *sofa*, and *bench*, we need features like [+BACK] and [+FOR ONE PERSON]; to distinguish all furniture, we need many more. There seems to be no natural limit.
- **Are the features themselves meaningful?** Features like MALE and ADULT are themselves words of English; defining words with other words may be circular.
- **Fuzzy boundaries**: features are binary, but many categories have unclear boundaries, as we saw with vagueness.
- **Not all meaning is decomposable**: what are the components of *red* or *sweet*?

## Legacy

Despite these problems, the idea that meanings have internal structure has remained influential. Jackendoff's conceptual semantics, Wierzbicka's semantic primes, which we met in Lesson I, and Pustejovsky's generative lexicon all propose structured meanings, though not simple lists of binary features.

> **Pause and consider.** Give a componential analysis of *aunt*, *uncle*, *niece*, and *nephew*. Which features do you need?`,
    },
    {
      title: "Prototypes",
      body: `## Family resemblance

In *Philosophical Investigations* (1953), **Ludwig Wittgenstein** asked what all **games** have in common. Board games, card games, ball games, the Olympic games, a child throwing a ball against a wall: is there one feature shared by all? Wittgenstein argued that there is not. Instead, games are connected by a network of overlapping similarities, which he called **family resemblances**, like the resemblances among members of a family, some sharing the nose, others the eyes, others the gait, without any one feature shared by all.

## Rosch's experiments

In the 1970s, the psychologist **Eleanor Rosch** developed this insight into a theory of categories. In a famous study published in 1975, she asked people to rate how good an example of a category various members were. For the category BIRD, people agreed that a *robin* is a very good example, a *sparrow* also good, a *chicken* less good, and a *penguin* and an *ostrich* poor examples, though all are birds. For FURNITURE, *chair* and *sofa* were rated highly, *lamp* and *telephone* poorly.

Rosch found that these **typicality** ratings predicted many aspects of behavior:

- People verify that a typical member belongs to a category faster than an atypical one (*A robin is a bird* faster than *A penguin is a bird*).
- Typical members are listed first when people name members of a category.
- Children learn typical members first.
- Typical members are more likely to be used as reference points in reasoning.

## The prototype

Rosch proposed that categories are organized around **prototypes**: the best, most central examples, or an abstract representation of the typical features. Membership is a matter of **similarity** to the prototype, and categories have **graded** structure, with central and peripheral members, and sometimes **fuzzy boundaries**.

## Cups and bowls

In 1973, **William Labov**, whom we met in HIL 101 and PHO 101, published a study of how people name containers. He showed people drawings of cup-like objects that varied in their width, height, and shape, and whether they had a handle, and asked them to name them. As the width increased, people shifted from *cup* to *bowl*, with no sharp boundary. The shift also depended on context: if people were asked to imagine the object containing mashed potatoes, they were more likely to call it a *bowl*; if containing coffee, a *cup*. Labov's study showed that categories have fuzzy boundaries that shift with function and context.

## Lie

In 1981, **Linda Coleman** and **Paul Kay** published a study of the English word *lie*. They proposed that a prototypical lie has three components: the statement is **false**; the speaker **believes** it is false; and the speaker **intends to deceive**. They presented people with stories varying these components, and found that stories with all three were judged most clearly to be lies, while stories with only some (such as a sincere false statement, or a true statement intended to deceive) were judged to be lies to lesser degrees. The belief component was most important, and falsity least. The study showed that even an apparently clear concept like *lie* has prototype structure.

## Prototypes and features

Prototype theory does not abandon features entirely; prototypes can be described as clusters of typical features, weighted by importance. What it rejects is the idea that categories are defined by **necessary and sufficient** conditions, a set of features that all and only members share. As we saw with *bachelor*, many word meanings seem better described in terms of typical features and background frames.

## Criticism

Critics, including **Jerry Fodor**, argued that prototypes cannot account for how concepts **combine**: the prototypical *pet fish* (a goldfish) is neither a prototypical pet (a dog) nor a prototypical fish (a trout). Others noted that people judge some odd numbers as more typical than others (3 more typical than 447), though everyone knows that odd numbers have sharp boundaries, suggesting that typicality and category membership are different things. The relation between prototypes and definitions remains debated.

> **Pause and consider.** Rank these as examples of VEHICLE: *car*, *bicycle*, *skateboard*, *elevator*, *horse*. What makes some better examples than others?`,
    },
    {
      title: "Semantic Fields and Color",
      body: `## Fields of meaning

A **semantic field** (or lexical field) is a set of words that cover a related area of meaning: color terms, kinship terms, cooking verbs, words for emotions, or words for weather. In the 1930s, the German linguist **Jost Trier** developed **field theory**, arguing that the words of a field divide it up like a mosaic, each word's meaning determined by its place in the whole. When one word changes meaning, the others must adjust, as we saw with chain shifts in HIL 101.

## Color

The most intensively studied field is **color**. Languages differ in the number of color words they have and in how they divide the spectrum. Early in the twentieth century, many anthropologists and linguists, influenced by linguistic relativity, believed that the division of the color spectrum was **arbitrary**, differing freely from language to language.

## Berlin and Kay

In *Basic Color Terms: Their Universality and Evolution* (1969), the anthropologist **Brent Berlin** and the linguist **Paul Kay** challenged this view. They defined **basic color terms** as words that are single words (not *bluish-green*), not included in another color (not *scarlet*, a kind of red), not restricted to particular objects (not *blond*), and psychologically salient. English has eleven: *black*, *white*, *red*, *green*, *yellow*, *blue*, *brown*, *purple*, *pink*, *orange*, and *grey*.

Studying twenty languages in detail, and many more from published sources, Berlin and Kay found two striking results:

1. **Focal colors**: although languages draw the boundaries of their color terms differently, speakers of different languages chose very similar **best examples** (foci) of each color. The best red was much the same for speakers of all languages.
2. **An evolutionary sequence**: languages acquire basic color terms in a constrained order. All languages distinguish at least dark and light (black and white); a language with three terms adds red; one with four or five adds green and yellow; then blue; then brown; and finally purple, pink, orange, and grey.

## The World Color Survey

These findings were tested and refined in the **World Color Survey**, led by Kay and colleagues, which collected color naming data from 110 unwritten languages, published in 2009. The survey broadly confirmed the existence of universal tendencies, while also revealing more variation than the original theory allowed, and some languages whose systems did not fit the sequence neatly.

## Explaining color universals

Why should color terms show universal patterns? Proposed explanations include the physiology of human color vision, especially the **opponent** channels (red–green, blue–yellow, light–dark) identified by vision scientists; the statistical properties of colors in natural environments; and the communicative need to name colors efficiently. Recent work by **Terry Regier** and others has modeled color naming systems as near-optimal partitions of perceptual color space.

## Russian blues

As we saw in LIN 110, Russian has two basic terms for blue: *siniy* (dark blue) and *goluboy* (light blue). In 2007, **Jonathan Winawer** and colleagues found that Russian speakers were faster to discriminate two blues when they fell into different Russian categories, an effect not found in English speakers, and that the effect disappeared when participants performed a verbal task at the same time. This suggested that language can affect color perception in some tasks, a modest version of linguistic relativity.

## Fields and culture

Color is a special case, constrained by biology. Other fields, such as emotions, social relations, and moral concepts, may vary more freely across cultures. The study of semantic fields thus provides a window on both universal and culture-specific aspects of meaning.

> **Pause and consider.** Why might a language add a word for red before words for green and blue?`,
    },
    {
      title: "Kinship Terms",
      body: `## A universal field

Every human society has words for relatives, but kinship systems vary greatly. The study of kinship terminology was founded by the American anthropologist **Lewis Henry Morgan** in *Systems of Consanguinity and Affinity of the Human Family* (1871), which compared kinship terms from around the world.

## English

The English system distinguishes:

- **generation**: *grandfather*, *father*, *son*, *grandson*;
- **sex**: *father*/*mother*, *brother*/*sister*, *uncle*/*aunt*;
- **lineal** versus **collateral** relatives: *father* (lineal) versus *uncle* (collateral);
- **blood** versus **marriage** relatives: *brother* versus *brother-in-law*.

But English does **not** distinguish:

- the father's side from the mother's side: *uncle* covers both the father's brother and the mother's brother;
- older from younger siblings: *brother* covers both;
- the sex of cousins: *cousin* covers both.

## Other systems

Anthropologists, following **George Murdock**, classify kinship systems into several types, named after peoples among whom they were described:

- **Eskimo** (or lineal) systems, like English, distinguish the nuclear family from collateral relatives, and group all cousins together.
- **Hawaiian** systems use the same terms for siblings and cousins, and for parents and their siblings: one's father's brother is called by the same term as one's father.
- **Iroquois** systems distinguish **parallel cousins** (children of the father's brother or mother's sister, called by the same terms as siblings) from **cross cousins** (children of the father's sister or mother's brother, called by different terms).
- **Sudanese** systems have separate terms for nearly every relative: the father's brother, the mother's brother, the father's brother's son, and so on.

## Other distinctions

Many languages make distinctions that English lacks:

- **relative age**: Mandarin distinguishes *gēge* "older brother" from *dìdi* "younger brother," and *jiějie* "older sister" from *mèimei* "younger sister";
- **sex of the speaker**: in some languages, a man and a woman use different terms for the same relative;
- **side of the family**: Mandarin distinguishes paternal grandparents (*yéye*, *nǎinai*) from maternal grandparents (*wàigōng*, *wàipó*), and Swedish distinguishes *farmor* "father's mother" from *mormor* "mother's mother."

## Kinship and society

Kinship terms often reflect social organization: who lives with whom, who may marry whom, who inherits what, and whom one must respect. As we saw in HIL 110, the reconstructed Proto-Indo-European terms for a husband's relatives suggest a patrilocal society. In societies where cross-cousin marriage is preferred, cross cousins are often called by the same terms as potential spouses.

## Kinship and extension

Kinship terms are also extended beyond biological relatives, in respect (*uncle* for an older family friend), religion (*Father*, *Sister*, *brothers and sisters in Christ*), and politics (*founding fathers*, *motherland*). As we saw with polysemy, such extensions follow regular patterns. In the New Testament, Jesus extends the terms to his followers: "For whosoever shall do the will of my Father which is in heaven, the same is my brother, and sister, and mother" (Matthew 12:50).

> **Pause and consider.** In English, what is the one word for your mother's sister and your father's sister? What languages distinguish them?`,
    },
    {
      title: "Space Across Languages",
      body: `## In and on

Spatial words seem to describe universal relations, but languages divide spatial meanings in strikingly different ways. English distinguishes *in* (containment) and *on* (support): *the apple in the bowl*, *the cup on the table*. Dutch distinguishes two kinds of "on": *op* for support from below (*the cup op the table*) and *aan* for attachment (*the picture aan the wall*). Spanish uses a single word, *en*, for both "in" and "on."

## Korean

In a series of studies beginning in 1991, the psycholinguists **Melissa Bowerman** and **Soonja Choi** compared English and **Korean** spatial words. Korean does not divide space mainly by containment and support, but by **tightness of fit**. The Korean verb *kkita* describes putting things together in a tight fit, whether in or on: a ring on a finger, a cassette in its case, a lid on a jar, a piece in a puzzle. The verb *nehta* describes loose containment (an apple in a bowl), and *nohta* loose support (a cup on a table). English speakers must distinguish *in* from *on*; Korean speakers must distinguish tight from loose fit.

Bowerman and Choi found that children learning English and Korean followed the patterns of their own language from very early, by about eighteen to twenty-four months, rather than starting from a universal set of spatial concepts. This suggested that language shapes the spatial categories children form.

## Frames of reference

Languages also differ in how they describe the locations of objects. The anthropologist and linguist **Stephen Levinson**, in *Space in Language and Cognition* (2003), distinguished three **frames of reference**:

- **Relative** (or egocentric): locations described from the speaker's viewpoint: *The ball is to the left of the tree.* English uses this frame often.
- **Intrinsic**: locations described relative to the object's own parts: *The ball is in front of the car* (at the car's front).
- **Absolute**: locations described with fixed directions, such as north, south, east, and west: *The ball is north of the tree.*

## Guugu Yimithirr

Some languages rely mainly or exclusively on the **absolute** frame. In **Guugu Yimithirr**, an Aboriginal language of Queensland studied by **John Haviland** and Levinson, speakers do not say "the cup is to the left of the plate" but "the cup is to the west of the plate," and even describe the position of objects on their own bodies in absolute terms ("there's an ant on your north leg"). Speakers maintain a constant sense of direction, and gesture accordingly, pointing in the correct compass direction when telling stories about events that happened far away. Similarly, speakers of **Tzeltal**, a Mayan language of Mexico, use terms based on the slope of their mountainous terrain, *uphill* and *downhill*, even on flat ground.

## Does language shape spatial thinking?

Levinson and his colleagues tested speakers of relative and absolute languages with nonverbal tasks, such as arranging objects to match an array they had seen after turning around. Speakers of absolute languages tended to preserve absolute directions, while speakers of relative languages preserved left and right. Critics, such as **Peggy Li** and **Lila Gleitman**, argued that the results depended on the testing conditions, and that speakers of all languages can use all frames. The debate, part of the wider debate over linguistic relativity that we studied in LIN 110, continues.

> **Pause and consider.** Describe the location of an object near you using a relative, an intrinsic, and an absolute frame. Which feels most natural?`,
    },
    {
      title: "How Dictionaries Define",
      body: `## The classical definition

The traditional form of a dictionary definition, going back to **Aristotle**, defines a word by its **genus** (the class it belongs to) and its **differentia** (what distinguishes it from other members of the class):

> *chair*: a **seat** (genus) **for one person, with a back and usually four legs** (differentiae).

This structure reflects hyponymy and componential analysis: the genus is a hypernym, and the differentiae are distinguishing features.

## Problems with definitions

Dictionary definitions face several problems:

- **Circularity**: dictionaries define words using other words, which are themselves defined in the dictionary. Ultimately, definitions must form a circle. A famous early example is **Samuel Johnson**'s *Dictionary* (1755), which defined *network* as "Any thing reticulated or decussated, at equal distances, with interstices between the intersections," a definition harder than the word itself.
- **Basic words**: very common words, such as *the*, *go*, *thing*, and *be*, are especially hard to define, because there are no simpler words to use.
- **Prototype effects**: as we saw, many categories cannot be defined by necessary and sufficient conditions.
- **Polysemy**: deciding how many senses a word has, and where one ends and another begins, involves judgment.

## Defining vocabularies

To make definitions easier to understand, dictionaries for learners of English use a restricted **defining vocabulary**. The *Longman Dictionary of Contemporary English* has, since its first edition in 1978, defined its entries using a vocabulary of about two thousand common words. This approach resembles Wierzbicka's semantic primes, though on a larger and less principled scale.

## Corpus lexicography

In the 1980s, the British linguist **John Sinclair** led the **COBUILD** project at the University of Birmingham, which produced the *Collins COBUILD English Language Dictionary* (1987), the first major dictionary based systematically on a large computer **corpus** of real English. COBUILD definitions used full sentences that showed how words are actually used: "If you **abandon** a place, thing, or person, you leave the place, thing, or person permanently or for a long time." Corpus evidence revealed that many dictionary senses were rare, and that common uses had often been overlooked. Today, all major dictionaries use corpora.

## Collocations and patterns

Corpus lexicography emphasized that words have characteristic **collocations**, other words with which they frequently co-occur, and **patterns** of use. Sinclair argued that meaning is often carried by these patterns rather than by individual words, a view connected with the distributional approach we study next.

## The lexicographer's craft

Writing a dictionary requires both linguistic analysis and practical judgment. Lexicographers must decide which senses to include, in what order (historical or by frequency), how to define them, and which examples to give. They must also address social questions: whether to include offensive words, how to describe usage controversies, and how to treat words from different varieties of a language. The dictionary is thus both a scientific description and a cultural institution.

> **Pause and consider.** Try to write a definition of *the* or *go* that a learner could understand. What difficulties do you encounter?`,
    },
    {
      title: "Word Meaning in Computers",
      body: `## WordNet

How can a computer represent word meanings? One approach is to build a large network of words and their relations. **WordNet**, begun in 1985 at Princeton University under the direction of the psychologist **George A. Miller**, is a lexical database of English in which words are grouped into sets of synonyms, called **synsets**, connected by semantic relations such as hyponymy, meronymy, and antonymy. WordNet contains well over a hundred thousand synsets, and has been widely used in natural language processing. WordNets have since been built for many other languages.

## Distributional semantics

A different approach is based on the **distributional hypothesis**: words that occur in similar contexts tend to have similar meanings. The British linguist **J. R. Firth** expressed this idea in 1957 in a famous phrase: "You shall know a word by the company it keeps." The American linguist **Zellig Harris**, whom we met in SYN 101, developed a similar idea. If *dog* and *cat* often appear with the same words (*pet*, *feed*, *fur*, *vet*), their meanings are similar; *dog* and *democracy*, which rarely share contexts, are dissimilar.

## Word vectors

In **distributional semantics**, the meaning of a word is represented as a **vector**, a list of numbers, derived from statistics about the contexts in which it occurs in a large corpus. Words with similar meanings have similar vectors, close together in a high-dimensional space. In 2013, **Tomas Mikolov** and colleagues at Google introduced **word2vec**, an efficient method for learning such vectors, called **word embeddings**, from billions of words of text.

## Analogies

Word embeddings capture surprising regularities. In a famous example, the vector for *king*, minus the vector for *man*, plus the vector for *woman*, is close to the vector for *queen*. Similar arithmetic captures relations such as country–capital (*France* : *Paris* :: *Italy* : *Rome*) and verb tense (*walk* : *walked* :: *swim* : *swam*). Such results suggested that embeddings encode systematic aspects of meaning, though later research has shown that the analogies work less reliably than early demonstrations suggested.

## Bias

Because embeddings are learned from human-written text, they also absorb human **biases**. In a study published in 2016, **Tolga Bolukbasi** and colleagues found that embeddings trained on news text completed analogies such as *man* : *computer programmer* :: *woman* : *homemaker*, reflecting stereotypes in the training data. Such biases can affect applications that use embeddings, such as search engines and hiring tools. Researchers have developed methods to measure and reduce them, though eliminating bias entirely has proved difficult.

## Contextual meaning

Early word embeddings gave each word a single vector, regardless of context, so that *bank* had the same representation whether it meant a riverbank or a financial institution. Later neural models, such as the large language models we met in SYN 101, produce **contextual** representations, in which each occurrence of a word has a vector reflecting its context. These models distinguish senses of polysemous words more effectively.

## What distributional semantics captures

Distributional semantics captures **similarity** of meaning remarkably well, but critics argue that it misses important aspects of meaning: the connection between words and the **world** (reference), the logical relations captured by formal semantics (entailment, quantification), and the grounding of meaning in perception and action. Some researchers are combining distributional methods with images, sounds, and other data, in **multimodal** models. The relation between distributional and other kinds of meaning is one of the central questions in contemporary semantics.

> **Pause and consider.** Why might a computer that learned word meanings only from text fail to understand what *red* means?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Opposites

> *hot*/*cold*; *dead*/*alive*; *buy*/*sell*; *tie*/*untie*

**Questions**

1. Classify each pair.
2. Explain why *How tall is she?* is neutral but *How short is she?* is not.

## 2. Prototypes

> Rosch (1975): *robin* rated a better example of BIRD than *penguin*; Coleman and Kay (1981): the prototypical *lie*

**Questions**

1. What are the three components of a prototypical lie?
2. How does prototype theory differ from componential analysis?

## 3. Color terms

> English: eleven basic color terms; Berlin and Kay (1969): a constrained evolutionary sequence

**Questions**

1. Give the order in which basic color terms are added.
2. What explanations have been proposed for these universals?

## 4. Space

> Korean *kkita* (tight fit) versus *nehta* (loose containment); Guugu Yimithirr "your north leg"

**Questions**

1. How do these differ from English spatial categories?
2. What do they suggest about language and spatial thinking?

## Drawing the threads together

In a paragraph, explain how word meanings are structured and how they vary across languages, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Semantics", author: "John I. Saeed", publisher: "Wiley-Blackwell", year: "4th ed., 2016", note: "Read chapters 3 and 9, on word meaning and on componential analysis." },
    { kind: "book", title: "Basic Color Terms: Their Universality and Evolution", author: "Brent Berlin and Paul Kay", publisher: "University of California Press", year: "1969", note: "Read chapter 1 and the summary of the evolutionary sequence." },
    { kind: "book", title: "Lexical Semantics", author: "D. A. Cruse", publisher: "Cambridge University Press", year: "1986", note: "Read the chapters on synonymy and on opposites." },
  ],
  media: [
    { kind: "book", title: "Women, Fire, and Dangerous Things: What Categories Reveal about the Mind", author: "George Lakoff", publisher: "University of Chicago Press", year: "1987", note: "Read the chapters on prototype theory and on the Dyirbal noun classes that gave the book its title." },
    { kind: "book", title: "Space in Language and Cognition", author: "Stephen C. Levinson", publisher: "Cambridge University Press", year: "2003", note: "Read chapter 1, on frames of reference." },
  ],
  questions: [
    {
      prompt: "What is the difference between homonymy and polysemy?",
      choices: [
        "There is none",
        "Homonyms are unrelated words with the same form; a polysemous word has several related senses",
        "Homonyms are synonyms",
        "Polysemy is borrowing",
      ],
      answer: 1,
      explanation: "Bank (two words) versus head (one word, many senses).",
    },
    {
      prompt: "Which is an example of regular polysemy?",
      choices: [
        "bank (river) and bank (money)",
        "chicken (animal) and chicken (meat)",
        "right and write",
        "lead (metal) and lead (verb)",
      ],
      answer: 1,
      explanation: "The animal/meat pattern applies to many words.",
    },
    {
      prompt: "Why is true synonymy rare?",
      choices: [
        "Languages forbid it",
        "Near-synonyms usually differ in register, dialect, connotation, or collocation",
        "Dictionaries prevent it",
        "Words have no meaning",
      ],
      answer: 1,
      explanation: "Big sister but not large sister.",
    },
    {
      prompt: "Which pair are complementary antonyms?",
      choices: ["hot/cold", "dead/alive", "buy/sell", "tie/untie"],
      answer: 1,
      explanation: "Denying one asserts the other.",
    },
    {
      prompt: "What is the basic level of categorization?",
      choices: [
        "The most general level",
        "A privileged middle level, such as dog or chair, named first and fastest",
        "The most specific level",
        "The level of scientific classification",
      ],
      answer: 1,
      explanation: "Identified by Rosch and colleagues.",
    },
    {
      prompt: "What problem did Fillmore and Lakoff raise for the componential analysis of bachelor?",
      choices: [
        "Bachelor has no meaning",
        "The Pope fits the features but is not naturally called a bachelor, showing the role of background frames",
        "Bachelor is a verb",
        "Bachelor is polysemous",
      ],
      answer: 1,
      explanation: "The features miss social expectations about marriage.",
    },
    {
      prompt: "What did Labov's study of cups and bowls show?",
      choices: [
        "Cups and bowls are sharply distinguished",
        "Category boundaries are fuzzy and shift with function and context",
        "All containers are cups",
        "Children cannot name containers",
      ],
      answer: 1,
      explanation: "Published in 1973.",
    },
    {
      prompt: "According to Berlin and Kay, which color term is added after black, white, and red?",
      choices: ["Blue", "Green or yellow", "Brown", "Purple"],
      answer: 1,
      explanation: "Blue comes after green and yellow.",
    },
    {
      prompt: "What does Korean kkita express?",
      choices: [
        "Containment",
        "Support",
        "Putting things together in a tight fit, whether in or on",
        "Loose placement",
      ],
      answer: 2,
      explanation: "Bowerman and Choi.",
    },
    {
      prompt: "What is the distributional hypothesis?",
      choices: [
        "Words are randomly distributed",
        "Words that occur in similar contexts tend to have similar meanings",
        "All words have one meaning",
        "Meaning is innate",
      ],
      answer: 1,
      explanation: "\"You shall know a word by the company it keeps\" (Firth, 1957).",
    },
  ],
  reflection:
    "Word meanings are structured, fuzzy, and culturally shaped. In 500–800 words, choose a semantic field (such as furniture, emotions, or kinship), describe the relations among its words in English, compare it with another language you know or have read about, and reflect on whether prototype theory or componential analysis better captures the meanings you studied.",
};
