import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "Language in Society",
  summary:
    "What sociolinguistics studies; language and dialect, Abstand and Ausbau; accent, dialect, and the standard; speech communities and communities of practice; Hymes's communicative competence and the SPEAKING grid; ways of speaking across cultures; why variation is systematic; the linguistic variable; sociolinguistic methods and the observer's paradox; social meaning, indexicality, and enregisterment; folk views of dialects; and why sociolinguistics matters in schools, courts, and clinics.",
  pages: [
    {
      title: "What Sociolinguistics Studies",
      body: `## Language as a social fact

Everyone speaks differently. We speak differently from people in other regions, other social classes, other generations, and other ethnic groups; we speak differently to our friends, our teachers, and our grandparents; we speak differently when we are relaxed and when we are careful. **Sociolinguistics** is the study of language in relation to society: how language varies among groups and situations, what that variation means to speakers, and how language shapes and reflects social life.

## Two directions

Sociolinguistics looks in two directions:

- From **society to language**: how social factors, such as region, class, gender, ethnicity, age, and situation, affect how people speak. This is the study of **variation**.
- From **language to society**: how language is used to construct identities and relationships, and how societies make decisions about languages, through attitudes, education, and policy. This is sometimes called the **sociology of language**.

## A young field

Although scholars have long noticed dialects and social differences in speech, sociolinguistics as a field took shape in the 1960s, especially through the work of **William Labov**, whom we met in HIL 101 and PHO 101. Labov's *The Social Stratification of English in New York City* (1966) showed that variation in speech, long dismissed as random or as "free variation," was systematic and could be studied with quantitative methods. At the same time, **Dell Hymes**, **John Gumperz**, and **Joshua Fishman** developed the study of language use in its cultural and social contexts.

## Our guides

This course follows **Ronald Wardhaugh**, *An Introduction to Sociolinguistics* (1986; 8th edition with **Janet M. Fuller**, 2021), a widely used textbook that surveys the field broadly, and Labov's *Social Stratification of English in New York City*, the foundational work of variationist sociolinguistics.

## The plan

**Lesson I** introduces the basic concepts: language and dialect, the standard, speech communities, communicative competence, the linguistic variable, and the methods and ethics of sociolinguistic research. **Lesson II** studies **variation and social class**, from Labov's New York to Norwich, Belfast, and a Detroit high school. **Lesson III** studies **style, identity, and gender**. **Lesson IV** studies **multilingualism**: diglossia, code-switching, and language shift. **Lesson V** studies **language, power, and policy**: attitudes, discrimination, planning, and the endangerment and revitalization of languages.

## Why it matters

Sociolinguistics has practical importance. Judgments about speech affect how people are treated in schools, workplaces, courts, and hospitals. Understanding that all varieties of a language are systematic, and that attitudes toward them are social rather than linguistic, can help reduce discrimination. As we will see throughout this course, sociolinguistic research has informed education, law, and language policy around the world.

> **Pause and consider.** Think of three ways your speech differs depending on whom you are talking to. What causes the differences?`,
    },
    {
      title: "Language or Dialect?",
      body: `## A hard question

What is the difference between a **language** and a **dialect**? The question seems simple, but it has no purely linguistic answer.

## Mutual intelligibility

One common criterion is **mutual intelligibility**: if speakers of two varieties can understand each other, they speak dialects of the same language; if not, they speak different languages. But this criterion often conflicts with how people actually classify varieties:

- **Norwegian**, **Swedish**, and **Danish** are generally regarded as separate languages, yet their speakers can often understand each other to a considerable degree, especially in writing.
- The varieties of **Chinese**, such as Mandarin, Cantonese, Hokkien, and Shanghainese, are often called "dialects," yet many are not mutually intelligible in speech, differing as much as French and Italian.
- **Hindi** and **Urdu** are mutually intelligible in everyday speech, but are regarded as separate languages, written in different scripts (Devanagari and Perso-Arabic) and associated with different religions and nations.
- **Serbian**, **Croatian**, **Bosnian**, and **Montenegrin** were long regarded as a single language, Serbo-Croatian; since the breakup of Yugoslavia in the 1990s, they have been treated as separate national languages.

Mutual intelligibility is also a matter of **degree**, and it can be **asymmetric**: Danish speakers often understand Swedish better than Swedish speakers understand Danish.

## Dialect continua

As we saw in HIL 101, many languages form **dialect continua**, in which neighboring dialects are mutually intelligible but distant ones are not. The boundaries between "languages" in such continua, such as between Dutch and German, are often drawn by **political** borders and **standard** languages rather than by linguistic differences.

## The army and the navy

As we saw in HIL 101, the linguist **Max Weinreich** published, in Yiddish in 1945, the saying that "a language is a dialect with an army and navy." The saying captures the point that the distinction between language and dialect is largely **social** and **political**: a variety becomes a "language" when it has a state, a standard, a literature, and institutions behind it.

## Abstand and Ausbau

The German sociolinguist **Heinz Kloss**, in 1967, proposed two ways in which a variety can be a language:

- **Abstand** ("distance") languages are languages because they are linguistically very different from others: Basque is a language because it is unlike any neighboring language.
- **Ausbau** ("elaboration") languages are languages because they have been developed as separate standards, with their own grammars, dictionaries, literatures, and institutions: Norwegian and Swedish, or Hindi and Urdu, are languages largely by Ausbau.

## Why it matters

The question of language versus dialect is not merely academic. Calling a variety a "dialect" can imply that it is inferior, unworthy of education or official use. Speakers of varieties such as Scots, Low German, and many varieties of Chinese and Arabic have debated whether their speech is a language or a dialect, with consequences for education, broadcasting, and identity. Linguists generally use "dialect" neutrally, for any variety of a language, without implying inferiority.

> **Pause and consider.** Is Scots a dialect of English or a separate language? What criteria would you use to decide?`,
    },
    {
      title: "Accent, Dialect, and the Standard",
      body: `## Accent and dialect

Linguists distinguish:

- **Accent**: features of **pronunciation** characteristic of a region or group. Speakers from Boston, Glasgow, and Sydney have different accents.
- **Dialect**: a variety differing in **pronunciation**, **vocabulary**, and **grammar**. A speaker who says *I might could do it* or *You'uns* is using dialect features of grammar and vocabulary, not just accent.

Everyone speaks with an accent, and everyone speaks a dialect. As we saw in PHO 101, there is no accent-free English.

## The standard

A **standard** variety is the variety used in formal writing, education, government, and the media, and often regarded as "correct." Standard English, in its written form, is fairly uniform across the English-speaking world, with small differences between British, American, Australian, and other standards. In speech, standard English can be spoken with many accents.

## Received Pronunciation

In Britain, a particular accent, **Received Pronunciation** (RP), long enjoyed special prestige. The term "received pronunciation" was used by the phonetician **Alexander Ellis** in 1869 and popularized by **Daniel Jones**, whom we met in PHO 101. RP was associated with the public schools, Oxford and Cambridge, and the BBC. It was never spoken by more than a small minority of the British population, perhaps a few percent. In recent decades, its prestige has declined, and a wider range of accents is heard in public life, though research continues to find that RP and similar accents are evaluated favorably for status.

## General American

In the United States, the closest equivalent is **General American**, a loosely defined accent without strongly marked regional features, associated with the Midwest and widely used in national broadcasting. It is a convenient label rather than a precisely defined variety, and many linguists prefer to speak of a range of "standard" American accents.

## Standard language ideology

The British sociolinguists **James Milroy** and **Lesley Milroy**, in *Authority in Language* (1985), analyzed what they called **standard language ideology**: the belief that a language exists in a single correct form, the standard, and that other varieties are deviations from it. As we saw in SYN 101, prescriptive grammar reflects this ideology. The Milroys argued that standardization is a social process, driven by the needs of states, education, and printing, and that the standard is better understood as an idea, imposed and maintained by institutions, than as a natural variety.

## The value of standards

Sociolinguists do not deny that standard varieties serve important purposes: communication across regions, access to education and employment, and the preservation of written traditions. What they question is the belief that the standard is linguistically superior, and the treatment of speakers of other varieties as deficient. All varieties, standard and non-standard, are rule-governed systems, as we will see in SOC 110.

## Standards around the world

Many languages have standard varieties, often based on the speech of a capital or prestigious region: standard French on the speech of Paris, standard Mandarin (*Pǔtōnghuà*) on the speech of Beijing, standard Italian on the literary Tuscan of Dante. Some languages, such as Norwegian, have more than one written standard, reflecting historical and political debates.

> **Pause and consider.** Do you speak with an accent? How would someone from a different region describe it?`,
    },
    {
      title: "Speech Communities",
      body: `## Who speaks together

Sociolinguists study language in **communities**. But what is a speech community? The concept has been defined in several ways.

## Shared language

The simplest definition is a group of people who speak the **same language**. But this is too broad (all English speakers worldwide do not form a single community in any useful sense) and too narrow (many communities are multilingual).

## Interaction

The American anthropologist and linguist **John Gumperz**, in the 1960s, defined a speech community as a group characterized by **regular and frequent interaction** through a shared body of verbal signs, and set off from other groups by significant differences in language use. On this view, communities are defined by communication, not just by a shared language. A multilingual village in India, where people use several languages in different situations, forms a speech community, as Gumperz showed in his studies of the village of Khalapur.

## Shared norms

**William Labov**, in *Sociolinguistic Patterns* (1972), emphasized **shared norms**: a speech community is defined not by everyone speaking the same way, but by participation in a set of shared **evaluations** of speech. In New York City, as we will see in Lesson II, people of different classes pronounced the *r* in *car* at different rates, but they all agreed in evaluating the pronounced *r* as more prestigious. The shared norms, not the shared behavior, made them a single community.

## Social networks

The British sociolinguist **Lesley Milroy**, in *Language and Social Networks* (1980), studied speech in working-class neighborhoods of **Belfast** in terms of **social networks**: the patterns of relationships among individuals. She found that people in **dense** and **multiplex** networks, in which everyone knows everyone and people are connected in several ways (as neighbors, relatives, and co-workers), maintained local, vernacular features more strongly. Networks act as **norm-enforcement** mechanisms. We will study her work in Lesson II.

## Communities of practice

In the 1990s, **Penelope Eckert** and **Sally McConnell-Ginet**, borrowing a concept from the educational researchers **Jean Lave** and **Etienne Wenger**, proposed the **community of practice**: a group of people who come together around a shared enterprise, such as a sports team, a band, a church choir, a group of coworkers, or a high school clique, and develop shared ways of doing things, including ways of speaking. Communities of practice are smaller and more specific than speech communities, and allow researchers to study how linguistic styles emerge from shared activities and identities. Eckert's study of a Detroit-area high school, which we will meet in Lesson II, is a famous example.

## Multiple memberships

Individuals belong to many communities at once: a family, a neighborhood, a workplace, a religious congregation, an online forum, a nation. They adjust their speech to each, as we will see in Lesson III. Sociolinguists have increasingly studied how speakers navigate these overlapping memberships, and how online communities create new forms of speech community not tied to place.

> **Pause and consider.** Name three communities of practice you belong to. Does each have its own ways of speaking?`,
    },
    {
      title: "Communicative Competence",
      body: `## More than grammar

As we saw in SYN 101, **Noam Chomsky** defined **competence** as a speaker's knowledge of the grammar of their language. In an influential paper, "On Communicative Competence" (1972), the American linguistic anthropologist **Dell Hymes** argued that this notion was too narrow. A person who could produce any grammatical sentence, but without regard to when, how, and to whom, would not be regarded as a normal speaker at all, Hymes observed. Speakers know not only which sentences are grammatical but which are **appropriate** in which situations.

## Communicative competence

Hymes proposed the notion of **communicative competence**: the knowledge that enables a speaker to use language appropriately in social contexts. It includes knowing:

- how to greet, request, apologize, and thank;
- when to speak and when to remain silent;
- how to address people of different statuses;
- what topics are appropriate in which situations;
- how to tell a story, make a joke, or give a speech.

## The ethnography of communication

Hymes founded the **ethnography of communication** (or ethnography of speaking), the study of the ways of speaking in particular communities, using the methods of anthropological fieldwork. To guide such studies, he proposed the mnemonic **SPEAKING**, listing the components of a speech event:

- **S**etting and scene: the time, place, and psychological setting;
- **P**articipants: speaker, hearer, audience;
- **E**nds: purposes and outcomes;
- **A**ct sequence: the form and order of the event;
- **K**ey: the tone or manner (serious, joking, ironic);
- **I**nstrumentalities: the channel (speech, writing) and the variety used;
- **N**orms: the rules of interaction and interpretation;
- **G**enre: the type of event (sermon, joke, prayer, lecture).

## An example

Consider a **church service**. Its setting is a sacred place at a set time; its participants include clergy and congregation with distinct roles; its ends include worship and instruction; its act sequence is fixed by a liturgy; its key is solemn; its instrumentalities may include a special variety of language, such as liturgical English or Latin; its norms govern who speaks when and how; and its genres include prayers, hymns, readings, and sermons. Speakers who grew up in the tradition know all of this; newcomers must learn it.

## Communicative competence and language teaching

Hymes's concept had a large influence on **language teaching**. In the 1970s and 1980s, **communicative language teaching** shifted the emphasis from grammar drills to the ability to use language appropriately in real situations. Learners need to know not only how to form a request in a new language, but how direct or indirect it should be, and in what situations, as we saw with politeness in SYN 110.

## Criticisms

Some critics have argued that the notion of "appropriateness" in communicative competence can itself reflect the norms of dominant groups, treating the ways of speaking of the powerful as the standard of appropriateness. Others have noted that speakers do not merely follow norms but also challenge and change them. Despite these criticisms, communicative competence remains a central concept in sociolinguistics and applied linguistics.

> **Pause and consider.** Apply the SPEAKING grid to a family dinner, a job interview, or a sports event. What does it reveal?`,
    },
    {
      title: "Ways of Speaking Across Cultures",
      body: `## Different rules

Ethnographers of communication have found that communities differ greatly in their ways of speaking: when to talk, how much, to whom, and about what. Several classic studies illustrate this variety.

## Silence among the Western Apache

In a study published in 1970, "To Give Up on Words: Silence in Western Apache Culture," the anthropologist **Keith Basso** examined when members of the Western Apache community of Cibecue, Arizona, chose to remain **silent**. He found that silence was expected in situations of uncertainty or ambiguity in relationships: when meeting strangers, in the early stages of courtship, when children returned home after a long absence, when someone was angry, and in the presence of those grieving. Talking freely in such situations, as many Anglo-Americans would, was regarded as inappropriate. Basso's study showed that silence is not the absence of communication but a meaningful part of it, governed by cultural norms.

## Ways with words

In *Ways with Words* (1983), the American linguistic anthropologist **Shirley Brice Heath** reported a decade of ethnographic research in three communities in the Piedmont Carolinas: **Roadville**, a white working-class community; **Trackton**, a Black working-class community; and the mainstream, middle-class "townspeople" of both races. She found that children in each community were socialized into different ways of using language:

- In the mainstream homes, children were read to from infancy, asked questions about books ("What's this?"), and encouraged to give labels and explanations, practices that matched the expectations of school.
- In Roadville, children were read to, but were taught that stories should be factual and morally instructive, and were discouraged from fictionalizing.
- In Trackton, children were rarely asked questions to which adults already knew the answers, but were immersed in a rich oral culture of storytelling, verbal play, and performance, in which creative exaggeration was valued.

When the children entered school, those whose home practices matched the school's expectations did well; others struggled, not because they lacked language skills, but because their skills were different from those the school recognized. Heath's study influenced educators to recognize the language practices that children bring from home.

## Conversation styles

Studies of **conversation** have found differences in turn-taking, interruption, and the use of silence. As we saw in PHO 110, the gaps between turns are remarkably similar across languages, but the interpretation of overlap and silence varies. In some communities, overlapping talk shows engagement and enthusiasm; in others, it is perceived as rude interruption. The linguist **Deborah Tannen**, studying conversations among friends in New York in the 1980s, described a **high-involvement** style, with fast pace, overlap, and personal questions, and a **high-considerateness** style, with slower pace and fewer interruptions, and showed how misunderstandings arise when speakers with different styles interact.

## Intercultural communication

Such differences can cause **misunderstandings** in intercultural communication. **John Gumperz**, in *Discourse Strategies* (1982), studied interactions between South Asian and British English speakers in London, finding that differences in intonation, indirectness, and discourse structure led British listeners to misjudge South Asian speakers as rude or evasive, with real consequences in job interviews and service encounters. Gumperz called the cues by which speakers signal how utterances should be interpreted **contextualization cues**.

> **Pause and consider.** In your community, when is silence expected? When would it be considered rude?`,
    },
    {
      title: "Variation Is Systematic",
      body: `## Free variation?

Before the 1960s, many linguists treated variation in speech as **free variation**: random alternation between forms that carried no meaning. A speaker might say *working* or *workin'*, pronounce or drop the *r* in *car*, and the choice was considered unpredictable, outside the scope of linguistic analysis.

## Conditioned variation

The founders of sociolinguistics showed that such variation is **systematic**: it is conditioned by **linguistic** factors (the sounds and words around it), **social** factors (who is speaking), and **stylistic** factors (the situation). Variation is not chaos but structured heterogeneity.

## Linguistic conditioning

Consider the deletion of final [t] and [d] in English consonant clusters, as in *mist* pronounced [mɪs], or *missed* pronounced [mɪs]. Studies by Labov, **Walt Wolfram**, and others found that deletion is more frequent:

- before a **consonant** (*mist cleared*) than before a **vowel** (*mist over*);
- when the [t] or [d] is part of the **stem** (*mist*) than when it is a **past tense** ending (*missed*).

The second constraint is especially interesting: speakers are less likely to delete a sound that carries grammatical meaning. These constraints are found across many dialects of English, with different overall rates of deletion.

## Variable rules

In a paper published in 1969, "Contraction, Deletion, and Inherent Variability of the English Copula," Labov studied the variable absence of the verb *be* in **African American English**, as in *She nice* or *He working*. He showed that the absence was not random but followed precise patterns: it occurred where standard English allows **contraction** (*She's nice*), and was governed by the same linguistic factors. Labov proposed **variable rules**, rules that apply with a certain probability depending on the linguistic and social context, and developed statistical methods for estimating these probabilities. This paper was influential both in establishing variationist methods and in showing that African American English is rule-governed, as we will see in SOC 110.

## Quantitative methods

Variationist sociolinguistics uses **quantitative** methods: counting the occurrences of each variant in large amounts of speech, and using statistics to determine which factors influence the choice. Early researchers used a program called **VARBRUL**, developed by **Henrietta Cedergren** and **David Sankoff** in the 1970s; today, researchers use mixed-effects regression models, which we met in PHO 110.

## Orderly heterogeneity

In a classic paper of 1968, "Empirical Foundations for a Theory of Language Change," **Uriel Weinreich**, **William Labov**, and **Marvin Herzog** argued that variation is not a defect of language but an essential feature of it, which they called **orderly heterogeneity**. Language change, as we saw in HIL 101, arises from variation: new forms compete with old ones, and the competition is shaped by social factors. Studying variation in the present thus illuminates change over time.

> **Pause and consider.** Listen to someone say *I missed the bus* and *I mist the window*. Is the final [t] equally likely to be pronounced in both?`,
    },
    {
      title: "The Linguistic Variable",
      body: `## A unit of analysis

The central concept of variationist sociolinguistics is the **linguistic variable**: a set of alternative ways of saying the same thing, called **variants**, whose choice is influenced by social and linguistic factors. Variables are conventionally written in parentheses, and their variants in brackets.

## Examples

Some of the most studied English variables:

- **(ing)**: the ending of *working*, *going*, *nothing*, with variants [ɪŋ] (velar nasal) and [ɪn] (alveolar nasal), the latter often written *workin'*. As we saw in PHO 101, this is not a "dropped g" but a choice between two nasal consonants with different histories.
- **(r)**: the pronunciation or absence of *r* after vowels, as in *car* and *card*.
- **(th)**: the pronunciation of *th* in *think* and *this*, with variants such as [θ], [t], [f], and [t̪].
- **(t)**: the pronunciation of *t* between vowels or at the ends of words, with variants such as [t], [ʔ] (glottal stop), and [ɾ] (flap).
- **(was)**: *we were* versus *we was*.
- **(neg)**: negative concord, *I don't have any* versus *I don't have none*.

## The first study

The first variationist study of (ing) was published in 1958 by the anthropologist **John Fischer**, who studied children in a New England village. Fischer found that girls used the [ɪŋ] variant more than boys; that a "model" boy, described by his teacher as well-behaved and studious, used [ɪŋ] more than a "typical" boy; and that children used [ɪŋ] more in formal situations, such as a test, than in relaxed conversation. In a few pages, Fischer anticipated the main findings of later sociolinguistics: variation is linked to gender, social identity, and style.

## (ing) across the English-speaking world

Later studies found remarkably consistent patterns for (ing) across the English-speaking world:

- the [ɪn] variant is more common in **working-class** speech, in **male** speech, and in **casual** styles;
- it is more common in **verbs** (*working*) than in nouns (*ceiling*) or in words like *something* and *nothing*, a grammatical conditioning that reflects the history of the ending, as **Ann Houston** showed in 1985.

## Choosing variables

A good sociolinguistic variable should be:

- **frequent**, so that enough data can be collected in ordinary conversation;
- **structurally embedded**, part of the linguistic system;
- **socially stratified**, varying with social factors;
- relatively easy to **identify** and count.

Phonological variables are especially convenient, because they are frequent and easy to identify. Grammatical and lexical variables raise more difficult questions: do *We was there* and *We were there*, or *He ran quickly* and *He ran quick*, really "say the same thing"? Sociolinguists have debated whether variation above the level of sound can be analyzed in the same way.

## Stable and changing variables

Some variables are **stable**, showing the same patterns of social and stylistic variation over generations, such as (ing). Others reflect **change in progress**, with younger speakers differing from older ones, as we saw with the New York (r) and the Northern Cities Shift in HIL 101 and PHO 101. Distinguishing stable variation from change is one of the main tasks of variationist research.

> **Pause and consider.** Do you say *workin'* or *working*? Does it depend on the situation?`,
    },
    {
      title: "Methods: The Observer's Paradox",
      body: `## Getting natural speech

Sociolinguists want to study **vernacular** speech: the relaxed, everyday speech that people use with family and friends, which is most systematic and most revealing of change. But collecting such speech is difficult, because people speak differently when they know they are being observed and recorded.

## The paradox

Labov formulated this problem as the **observer's paradox**: the aim of research is to find out how people talk when they are not being systematically observed, yet the data can only be obtained by systematic observation. The very act of recording may change the speech being recorded.

## The sociolinguistic interview

To overcome the paradox, Labov developed the **sociolinguistic interview**, a semi-structured conversation designed to elicit a range of speech styles, from careful to casual. Interviewers ask about topics that engage speakers' interest and emotions, so that they become absorbed in what they are saying and pay less attention to how they are saying it. Famous examples include questions about childhood games, fights, and, most famously, the **danger of death** question: "Have you ever been in a situation where you thought you were in serious danger of being killed?" Speakers telling such stories often shift into a more vernacular style.

The interview also includes more formal tasks, such as reading a passage, reading word lists, and reading **minimal pairs** (such as *dock* and *dark*, which differ only in *r*), allowing the researcher to compare speech across a range of styles, as we will see in Lesson III.

## Other methods

Sociolinguists also use:

- **rapid anonymous surveys**, like Labov's department store study, which we met in HIL 101, in which researchers elicit a particular word from many people without their knowledge (asking for directions that lead to the answer "fourth floor");
- **participant observation**, in which the researcher spends long periods in a community, as Eckert did in a Detroit-area high school, recording speech in natural settings;
- **self-recording** and **peer recording**, in which members of the community record their own interactions;
- **corpora** of recorded speech and, increasingly, of online writing and social media;
- **questionnaires** and **experiments** on attitudes and perception.

## Ethics

Sociolinguistic research raises ethical questions. Recording people without their knowledge, as in early rapid anonymous surveys, is now generally considered acceptable only for brief, anonymous, public interactions. Most research requires **informed consent**. Researchers must protect speakers' **privacy**, since recordings can identify individuals. And, as Labov argued in "Objectivity and Commitment in Linguistic Science" (1982), researchers have an obligation to **give back** to the communities they study, for example by using their findings to combat discrimination against speakers of stigmatized varieties.

## Insider and outsider

The researcher's own identity affects the data. A community member may elicit more vernacular speech than an outsider, but may also take shared knowledge for granted. Researchers from outside a community may misinterpret what they observe. Many studies now involve community members as researchers and collaborators.

> **Pause and consider.** Why might the "danger of death" question elicit more casual speech than a question about the speaker's job?`,
    },
    {
      title: "Social Meaning",
      body: `## What variants mean

Linguistic variants do not merely correlate with social categories; they carry **social meaning**. Using *workin'* rather than *working* may convey that a speaker is relaxed, unpretentious, or working-class; using a particular vowel may signal local loyalty. Sociolinguists have developed concepts to describe how such meanings arise.

## Indexicality

Building on the work of the philosopher **Charles Sanders Peirce**, whom we met in SYN 110, linguistic anthropologists such as **Elinor Ochs** and **Michael Silverstein** describe the social meanings of linguistic forms as **indexical**: a form "points to" (indexes) a social category, stance, or quality, through its association with speakers and situations.

Ochs, in 1992, argued that many forms index social categories **indirectly**. For example, in Japanese, certain sentence-final particles are associated with women's speech, but they directly index stances such as gentleness or softness, which are in turn associated with femininity in Japanese culture. The link between the form and gender passes through stance.

## Orders of indexicality

In 2003, Silverstein proposed the notion of **orders of indexicality**:

- A **first-order** index is a correlation between a form and a social group, observable by researchers but not necessarily noticed by speakers.
- A **second-order** index arises when speakers notice the correlation and begin to use the form to signal identity or style, as a **marker** that they can manipulate.
- **Higher-order** indices arise when the form becomes a **stereotype**, discussed and performed, as in jokes and caricatures.

## Enregisterment

The linguistic anthropologist **Asif Agha** used the term **enregisterment** for the process by which a set of linguistic features becomes recognized as a distinct **register** associated with a social type. He studied how RP became enregistered as the speech of the educated English elite in the nineteenth century, through pronunciation manuals, novels, and schools.

## Pittsburghese

A well-known example is **Pittsburghese**, studied by **Barbara Johnstone** and colleagues in work published in 2006. Features of local Pittsburgh speech, such as *yinz* (a plural "you"), *n'at* ("and that," "and so on"), and the monophthongal pronunciation of the vowel in *downtown* (sometimes spelled "dahntahn"), were once used unselfconsciously by working-class Pittsburghers. Over the twentieth century, as people moved and encountered other dialects, these features became noticed, discussed, and eventually **commodified**: printed on T-shirts, mugs, and souvenirs, and celebrated as symbols of local identity. The features moved from first-order to higher-order indexicality, becoming emblems of being a "Pittsburgher."

## Social meaning is flexible

The social meaning of a variant is not fixed. The same variant can mean different things in different contexts and to different listeners. The glottal stop for *t* in British English may index working-class identity in one context, casualness in another, and youthful urban style in another. As we will see in Lesson III, speakers draw on these meanings creatively to construct their identities and stances.

> **Pause and consider.** Is there a local word or pronunciation in your region that has become a symbol of local identity? How is it used?`,
    },
    {
      title: "What Ordinary People Think About Dialects",
      body: `## Folk linguistics

Non-linguists have strong opinions about language: which dialects are "correct," which are "pleasant," which sound "smart" or "lazy." The study of these opinions is called **folk linguistics**. Sociolinguists study them not to endorse them, but because they shape how people speak and how they treat others.

## Perceptual dialectology

The American sociolinguist **Dennis Preston** developed **perceptual dialectology**, which studies how ordinary people perceive dialect regions. In studies from the 1980s onward, Preston asked people to draw maps of the dialect areas of the United States, and to rate each area for "correctness" and "pleasantness." Typical findings:

- Respondents from Michigan rated their own region as the most **correct**, and the South as the least correct.
- Southerners also rated the South low for correctness but high for **pleasantness**.
- Many respondents drew a sharp boundary around the South, which was the most frequently identified dialect region.

These patterns reveal widespread beliefs about which varieties are "standard" and which are stigmatized, beliefs that often do not match linguistic facts.

## Language and stereotypes

Folk beliefs about language are often linked to stereotypes about speakers. In surveys and experiments, Southern American accents are often associated with friendliness but also with lack of education; urban accents with toughness; and some ethnic accents with lower intelligence or trustworthiness. As we will see in Lesson V, such stereotypes have real effects on employment, housing, and justice.

## Language mavens

Popular discussions of language are often dominated by **prescriptive** writers, whom **Steven Pinker** called "language mavens," who criticize changes in usage as errors or signs of decline. As we saw in HIL 101, complaints about language decay are ancient and recurring. Sociolinguists generally regard such complaints as reflections of social anxieties rather than accurate descriptions of linguistic change.

## The value of folk views

Folk linguistics is not simply wrong. Ordinary speakers are often acutely sensitive to linguistic differences, and their perceptions can guide researchers to features worth studying. Some folk terms, such as "twang" or "drawl," correspond to real phonetic features. And folk beliefs, true or false, are social facts that influence linguistic behavior: speakers may adopt or avoid features because of what they believe those features signal.

## Language ideologies

Sociolinguists and linguistic anthropologists use the term **language ideology** for sets of beliefs about language and its relation to social life. Examples include standard language ideology, which we met earlier in this lesson; the ideology that each nation should have one language; and the ideology that some languages are more suited to science or poetry than others. Studying language ideologies helps explain why people react to language as they do.

> **Pause and consider.** Which regional accent in your country is considered most "correct"? Which most "pleasant"? Why do you think so?`,
    },
    {
      title: "Variation Online",
      body: `## A new kind of data

Since the 1990s, more and more everyday communication has taken place in **writing** online: email, text messages, social media posts, comments, and chat. This written language is informal, interactive, and produced by millions of people, providing sociolinguists with vast new sources of data, and new kinds of variation to study.

## A new register

In *Language and the Internet* (2001), the British linguist **David Crystal** described online writing as a new kind of communication, combining features of speech (informality, rapid exchange, interaction) and writing (visual form, permanence). Writers developed new conventions to convey what speech conveys through intonation and gesture: capital letters for shouting, repeated letters for emphasis (*sooo good*), punctuation for tone, abbreviations, and later **emoji**.

## Typography as tone

In *Because Internet* (2019), the Canadian linguist **Gretchen McCulloch** studied how online writers use typography to convey tone. Ending a message with a period, for example, has come to seem abrupt or cold to many younger writers in informal messaging, because messages without final punctuation are the default; adding a period marks the message as serious or final. The abbreviation *lol*, originally "laughing out loud," has shifted for many users into a softener or marker of friendliness, often with no actual laughter involved, an example of the semantic change we studied in HIL 101 happening in real time.

## Regional variation in writing

Researchers have used large collections of social media posts, tagged with geographical locations, to map **regional** variation. Studies by **Jacob Eisenstein** and colleagues, published in 2014, traced the spread of new words and spellings across the United States through Twitter, finding that innovations often spread between cities with similar demographics, especially similar racial composition, rather than simply between neighboring places. **Jack Grieve** and colleagues used billions of posts to map lexical variation across the United States and Britain, producing dialect maps that largely confirmed, and extended, traditional dialect surveys.

## Identity online

Online, people construct identities through language as they do offline, but with new resources: choices of spelling, emoji, memes, and the deliberate use of dialect features in writing. Writers may use spellings that represent their speech (*finna*, *y'all*, *wee* for Scottish "little") to signal identity, or adopt features of other groups, raising questions about appropriation, which we will consider in Lesson III.

## Methodological questions

Online data raise methodological and ethical questions. Social media users are not a representative sample of the population: they skew younger and more urban, and different platforms attract different groups. Posts may be public, but their authors may not expect them to be studied. Researchers must consider privacy and consent, and the risk of identifying individuals from quoted posts.

## Is the internet ruining language?

Popular commentators have often claimed that texting and social media are degrading language, especially young people's writing. Research has generally not supported this fear. Studies have found that young people distinguish between informal online writing and formal academic writing, and some studies have found that skill with texting abbreviations is associated with good literacy, since playing with spelling requires understanding it. As we saw in HIL 101, complaints about the decline of language are ancient; the internet is only the latest occasion for them.

> **Pause and consider.** Does a text message ending with a period seem different to you from one without? Why might that be?`,
    },
    {
      title: "Why Sociolinguistics Matters",
      body: `## Beyond the academy

Sociolinguistic research has practical consequences in many areas of life, because judgments about speech affect how people are treated.

## Education

Children who speak non-standard varieties may be misjudged by teachers as less intelligent or as having language disorders. Sociolinguists such as **Walt Wolfram** and **John Rickford** have worked with educators to recognize that these children speak systematic, rule-governed varieties, and to develop methods, such as **contrastive analysis**, that teach the standard by building on the home variety rather than condemning it. As we saw, Shirley Brice Heath's research showed how differences between home and school language practices affect children's success.

## Law

Language plays a central role in the legal system: in testimony, interrogation, contracts, and judgments. Sociolinguists have shown how speakers of non-standard varieties may be misunderstood or disbelieved in court. In a widely discussed paper published in 2016, **John Rickford** and **Sharese King** analyzed the testimony of **Rachel Jeantel**, a key witness in the 2013 trial of George Zimmerman for the killing of Trayvon Martin in Florida. Jeantel spoke African American English, and Rickford and King argued that her testimony was widely misunderstood and discounted by the jurors and the public, partly because of unfamiliarity with and prejudice against her dialect. They called for greater awareness of dialect differences in the legal system.

## Health

In medical settings, misunderstandings between patients and doctors can have serious consequences. Research on **health communication** has studied how differences in language, dialect, and communicative style affect diagnosis and treatment, and how interpreters and culturally aware communication can improve outcomes.

## Employment and housing

Experiments have shown that speakers of stigmatized accents and dialects face discrimination in employment and housing. In a study published in 1999, **Thomas Purnell**, **William Idsardi**, and **John Baugh** found that a speaker who called landlords about advertised apartments, using a Standard American English, an African American English, or a Chicano English guise, received significantly fewer appointments when using the non-standard guises, even though the voices belonged to the same person. We will study such **linguistic profiling** in Lesson V.

## Language policy

Governments make decisions about which languages to use in schools, courts, and administration, and these decisions affect the lives of millions. Sociolinguists study and advise on language policy, as we will see in Lesson V.

## The responsibility of linguists

Labov argued, as we saw, that linguists have a responsibility to use their knowledge for the benefit of the communities they study. His **principle of error correction** holds that a scientist who becomes aware of a widespread misconception with harmful consequences has an obligation to correct it. The belief that non-standard varieties are deficient is such a misconception, and sociolinguists have worked to correct it in schools, courts, and the public sphere.

> **Pause and consider.** Can you think of a situation where someone was judged unfairly because of how they spoke?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Language or dialect?

> Norwegian, Swedish, and Danish (separate languages, often mutually intelligible); Mandarin and Cantonese (often called dialects, not mutually intelligible)

**Questions**

1. Why does mutual intelligibility fail as a criterion here?
2. Explain Kloss's distinction between Abstand and Ausbau languages.

## 2. The SPEAKING grid

> Setting, Participants, Ends, Act sequence, Key, Instrumentalities, Norms, Genre (Hymes)

**Questions**

1. Apply the grid to a speech event you know well.
2. What is communicative competence?

## 3. (ing)

> Fischer (1958): girls, "model" boys, and formal situations favored [ɪŋ]

**Questions**

1. What social and stylistic factors did Fischer find?
2. Why is (ing) a good sociolinguistic variable?

## 4. Pittsburghese

> *yinz*, *n'at*, "dahntahn" on T-shirts and mugs (Johnstone and colleagues, 2006)

**Questions**

1. How did these features become symbols of local identity?
2. Explain this process in terms of orders of indexicality.

## Drawing the threads together

In a paragraph, explain how language varies in society and what that variation means, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "An Introduction to Sociolinguistics", author: "Ronald Wardhaugh and Janet M. Fuller", publisher: "Wiley-Blackwell", year: "1986; 8th ed., 2021", note: "Read chapters 1–3, on languages, dialects, varieties, and speech communities." },
    { kind: "book", title: "On Communicative Competence", author: "Dell Hymes", publisher: "Sociolinguistics, ed. J. B. Pride and Janet Holmes (Penguin)", year: "1972", note: "Read the essay." },
    { kind: "book", title: "Social Influences on the Choice of a Linguistic Variant", author: "John L. Fischer", publisher: "Word 14", year: "1958", note: "A short classic; read it in full." },
  ],
  media: [
    { kind: "book", title: "Ways with Words: Language, Life, and Work in Communities and Classrooms", author: "Shirley Brice Heath", publisher: "Cambridge University Press", year: "1983", note: "Read the prologue and the chapter on Trackton." },
    { kind: "book", title: "Authority in Language: Investigating Standard English", author: "James Milroy and Lesley Milroy", publisher: "Routledge", year: "1985; 4th ed., 2012", note: "Read chapter 1." },
  ],
  questions: [
    {
      prompt: "What does sociolinguistics study?",
      choices: [
        "Only the grammar of standard languages",
        "Language in relation to society, including variation and its social meaning",
        "Only the history of languages",
        "Only sign languages",
      ],
      answer: 1,
      explanation: "It looks from society to language and from language to society.",
    },
    {
      prompt: "Why are Hindi and Urdu regarded as separate languages?",
      choices: [
        "They are not mutually intelligible",
        "Largely for social, religious, and political reasons, with different scripts and standards",
        "They belong to different families",
        "They have different grammars entirely",
      ],
      answer: 1,
      explanation: "Ausbau languages, in Kloss's terms.",
    },
    {
      prompt: "What is the difference between an accent and a dialect?",
      choices: [
        "There is none",
        "An accent concerns pronunciation; a dialect also includes vocabulary and grammar",
        "Dialects are incorrect",
        "Accents are written",
      ],
      answer: 1,
      explanation: "Everyone has both.",
    },
    {
      prompt: "How did Labov define a speech community?",
      choices: [
        "People who speak identically",
        "People who share norms for evaluating speech, even if they speak differently",
        "People in the same country",
        "People who write the same way",
      ],
      answer: 1,
      explanation: "As in New York City evaluations of (r).",
    },
    {
      prompt: "What is communicative competence?",
      choices: [
        "Knowledge of grammar only",
        "The knowledge that enables speakers to use language appropriately in social contexts",
        "The ability to read",
        "Fluency in several languages",
      ],
      answer: 1,
      explanation: "Proposed by Dell Hymes (1972).",
    },
    {
      prompt: "What did Basso find about silence among the Western Apache?",
      choices: [
        "Silence was rude",
        "Silence was expected in situations of uncertainty in relationships",
        "Silence never occurred",
        "Silence was only for children",
      ],
      answer: 1,
      explanation: "Published in 1970.",
    },
    {
      prompt: "What did Heath's Ways with Words show?",
      choices: [
        "That some children lack language",
        "That communities socialize children into different language practices, which match school expectations to different degrees",
        "That reading is unimportant",
        "That all communities speak alike",
      ],
      answer: 1,
      explanation: "Roadville, Trackton, and the townspeople.",
    },
    {
      prompt: "What is a linguistic variable?",
      choices: [
        "A word that changes meaning",
        "A set of alternative ways of saying the same thing, whose choice is influenced by social and linguistic factors",
        "A grammatical error",
        "A type of dialect",
      ],
      answer: 1,
      explanation: "Such as (ing) and (r).",
    },
    {
      prompt: "What is the observer's paradox?",
      choices: [
        "Observers never agree",
        "Researchers want natural speech, but observation changes how people speak",
        "Speakers cannot observe themselves",
        "Recordings are always inaccurate",
      ],
      answer: 1,
      explanation: "Formulated by Labov.",
    },
    {
      prompt: "What is enregisterment?",
      choices: [
        "Registering to vote",
        "The process by which linguistic features become recognized as a register associated with a social type",
        "Recording speech",
        "Learning a new language",
      ],
      answer: 1,
      explanation: "As with RP and Pittsburghese.",
    },
  ],
  reflection:
    "Language varies with who we are and where we are. In 500–800 words, choose a linguistic variable you have noticed in your own community, describe its variants and who uses them, and reflect on the social meanings it carries, using the concepts of the speech community, communicative competence, and indexicality.",
};
