import type { Lesson } from "@/lib/schema";

export const lesson2: Lesson = {
  title: "Instinct or Learning? Theories of Language Acquisition",
  summary:
    "Skinner's behaviorism and Chomsky's critique; nativism, Universal Grammar, and the poverty of the stimulus; Jackendoff's arguments for mental grammar; usage-based theories and item-based learning; statistical and connectionist learning; the critical period; second language acquisition; acquisition across languages; signing children; the case of missing subjects; developmental language disorders and what they reveal; and the state of the debate.",
  pages: [
    {
      title: "Behaviorism and Its Critics",
      body: `## Language as behavior

For the first half of the twentieth century, American psychology was dominated by **behaviorism**, which sought to explain all behavior in terms of observable responses to stimuli, shaped by reinforcement, without appeal to unobservable mental states. Its most prominent figure, **B. F. Skinner** (1904–1990), applied this approach to language in ***Verbal Behavior*** (1957). Skinner argued that children learn language as animals learn tricks: through **operant conditioning**. A child's utterances that are rewarded—with attention, praise, food, or getting what was asked for—become more frequent; those that are not rewarded disappear. Skinner classified verbal responses into types: **mands** (demands, such as "Milk!", reinforced by getting milk), **tacts** (naming things in the environment, reinforced by approval), and others.

## Chomsky's review

In **1959**, the young **Noam Chomsky** published a long review of *Verbal Behavior* in the journal *Language*. It became one of the most influential documents in the history of psychology, often credited with helping to launch the "**cognitive revolution**," which returned the mind to the center of psychology.

Chomsky argued that Skinner's account could not explain the most basic facts of language:

- **Creativity.** Speakers constantly produce and understand sentences they have never heard before. Such sentences cannot have been reinforced, since they have never occurred.
- **Vacuity.** Skinner's key terms, such as "stimulus" and "reinforcement," which have precise meanings in laboratory experiments with rats and pigeons, became vague and empty when applied to language. If a person looks at a painting and says "Dutch," Skinner would say the response is under the control of the painting's "Dutchness"; but if the person says "Clashes with the wallpaper" or "Hanging too low," those would be under the control of other properties. The "stimulus" is simply whatever the speaker happens to talk about, identified after the fact.
- **The poverty of the stimulus.** Children acquire grammatical knowledge that is not present in the input they receive and could not have been reinforced.
- **Speed and uniformity.** Children acquire language quickly, uniformly, and without systematic reinforcement of grammar, as Brown and Hanlon would later confirm.

## The cognitive revolution

Chomsky concluded that language could only be explained by positing a rich mental system—a grammar—and an innate capacity to acquire it. His critique, together with developments in computer science, linguistics, and psychology in the 1950s, helped to establish **cognitive science**, the interdisciplinary study of the mind as an information-processing system.

## Skinner's defenders

Skinner never replied to Chomsky's review in print, believing it had misunderstood his work. Some later behaviorists argued that Chomsky had caricatured Skinner's position, and that behavioral principles can explain more of language than Chomsky allowed. Behaviorist methods remain useful in some areas, such as therapies for children with autism who have not developed language. But in mainstream linguistics and psychology, the view that language is learned by simple reinforcement has been abandoned.

## What remains

Chomsky's critique established a challenge that every theory of acquisition must meet: explaining how children come to know an infinite, creative system of rules from finite, often imperfect input. Nativist and usage-based theories, which we study next, offer different answers.

> **Pause and consider.** Why can't reinforcement explain a child's first use of a sentence he or she has never heard? Is there any way a behaviorist might respond?`,
    },
    {
      title: "Nativism and Universal Grammar",
      body: `## A language organ

Chomsky's alternative to behaviorism was **nativism**: the view that human beings are born with a specialized, innate capacity for language. He called this capacity the **language acquisition device**, and later **Universal Grammar** (UG): a set of principles and parameters, common to all human languages, which constrains the grammars that children can acquire. On this view, language is not learned in the ordinary sense, but **grows** in the mind, like a bodily organ, given appropriate input. Chomsky often compared language acquisition to the development of the visual system, which requires visual experience to mature but is not learned from that experience.

## The poverty of the stimulus

The central argument for nativism is the **argument from the poverty of the stimulus**: children acquire knowledge of their language that goes beyond the evidence available to them. As we saw in LIN 101, children form questions using structure-dependent rules, though the sentences that would distinguish structure-dependent from linear rules are rare in their input. They know island constraints, such as the impossibility of \\*Who did you see Mary and?, though no one tells them. They know that a pronoun cannot refer to a name in certain positions (*He said that John was tired*). Nativists argue that such knowledge must come from innate principles.

## An experiment

In a well-known experiment published in 1987, **Stephen Crain** and **Mineharu Nakayama** asked children aged three to five to pose questions to a puppet, prompting them with sentences like "Ask Jabba if the boy who is watching Mickey Mouse is happy." The children made many errors, but they never made the structure-independent error of moving the first auxiliary (\\*Is the boy who watching Mickey Mouse is happy?). Crain and Nakayama took this as evidence that children's hypotheses are constrained by innate structure dependence.

## Lenneberg's biology

The neurologist **Eric Lenneberg**, in ***Biological Foundations of Language*** (1967), supported nativism with biological arguments. Language, he argued, has the hallmarks of a species-specific biological capacity: it emerges on a regular maturational schedule, like walking; it appears in all normal members of the species, regardless of environment; it is difficult to suppress, appearing even in children with severe disadvantages; it has specialized neural substrates; and it has a **critical period**, after which acquisition becomes much harder. We examine this last claim later in this lesson.

## Pinker's synthesis

Pinker, in *The Language Instinct*, brought these arguments together and added an evolutionary dimension. Language, he argued, is an **instinct** shaped by natural selection, as complex as the eye, which must have evolved because it conferred advantages in communication. He pointed to evidence we have studied: the universality of language; children's creation of grammar in creoles and sign languages; the specialization of the brain; and language disorders that affect grammar while sparing intelligence, and vice versa.

## Chomsky and evolution

Interestingly, Chomsky himself has been skeptical of the idea that language evolved gradually by natural selection for communication. In later work, he suggested that the core of the language faculty—perhaps just the recursive operation Merge—might have arisen through a single genetic change in a relatively recent ancestor, and that language evolved primarily as an instrument of thought rather than communication. Pinker and other nativists have disagreed. Nativism, then, is not a single theory but a family of views that agree that much of language is innate while disagreeing about what exactly is innate and how it evolved.

> **Pause and consider.** Crain and Nakayama's subjects never moved the first auxiliary. Is there an explanation for this that does not require innate knowledge?`,
    },
    {
      title: "Jackendoff: The Mental Grammar",
      body: `## Two fundamental arguments

**Ray Jackendoff** (born 1945), a student of Chomsky who taught for many years at Brandeis and Tufts universities, offered in *Patterns in the Mind* (1994) an accessible account of the case for an innate language faculty, organized around two arguments.

## The argument for mental grammar

Jackendoff's first argument he called the **argument for mental grammar**. The expressive variety of language use, he wrote in substance, implies that the language user's brain contains unconscious grammatical principles. Since a speaker can produce and understand an unlimited number of new sentences, the speaker cannot simply have memorized them; he or she must have internalized a system of rules or principles that can combine words into new sentences. Jackendoff called this system the **mental grammar**, and emphasized that it is unconscious: speakers know how to use it without being able to say what it is.

## The argument for innate knowledge

Jackendoff's second argument was the **argument for innate knowledge**. Children acquire the mental grammar quickly and without explicit teaching, though linguists, consciously studying the same languages for decades, have not fully described it. This is Jackendoff's paradox, which we met in Lesson I. The way out of the paradox, he argued, is that children have a head start: they are born with an innate "**Universal Grammar**" that narrows down the possible grammars, so that they need only discover which possibilities their language uses. Linguists, lacking conscious access to this innate knowledge, must reconstruct it painstakingly from the outside.

## Beyond language

What made *Patterns in the Mind* distinctive was Jackendoff's extension of these arguments beyond language. He argued that **music** too involves an unconscious mental grammar: listeners hear melodies as organized into phrases, meters, and tonal hierarchies, as he had shown with the music theorist **Fred Lerdahl** in *A Generative Theory of Tonal Music* (1983). **Visual perception** involves unconscious principles that organize the visual field into objects and scenes. **Social understanding** involves unconscious principles about kinship, ownership, and obligation. In each case, he argued, the mind brings rich innate structure to experience.

## Conceptual structure

Jackendoff also developed a theory of **conceptual structure**, the mental representation of meaning, which he argued is distinct from both syntax and language-specific semantics. Many concepts, he suggested, are organized around a few basic categories—things, events, places, paths, properties—and the same conceptual structures underlie language, perception, and action. For example, the language of spatial movement (*go from Boston to New York*) is extended to possession (*the inheritance went to Philip*), to properties (*the light went from green to red*), and to time (*the meeting was moved from Tuesday to Thursday*), suggesting a common underlying conceptual pattern. We return to these questions in Lesson V.

## Jackendoff's later views

In later work, notably *Foundations of Language* (2002), Jackendoff departed from Chomsky on important points. He proposed a **parallel architecture**, in which phonology, syntax, and semantics are independent generative systems linked by interfaces, rather than syntax being the sole generative engine. He also argued that the innate language faculty might be smaller and more continuous with other cognitive capacities than Chomsky had claimed, and that much of grammar consists of stored constructions—moving partway toward the construction grammarians we meet next.

> **Pause and consider.** Jackendoff argued that music, like language, involves an unconscious grammar. Can you think of evidence from your own experience of music that supports this?`,
    },
    {
      title: "Usage-Based Theories",
      body: `## A different picture

**Usage-based** theories of language acquisition, developed since the 1990s by researchers such as **Michael Tomasello**, **Elena Lieven**, **Adele Goldberg**, and **Joan Bybee**, reject the idea of an innate Universal Grammar. They argue that children acquire language through **general cognitive abilities**, shared with other learning domains, and through **social interaction**.

## Two abilities

Tomasello, in *Constructing a Language* (2003), identified two key abilities that children bring to language learning:

- **Intention reading**: the ability to understand that other people have intentions and attend to things, which allows children to grasp what speakers are trying to communicate. This ability, which emerges around nine to twelve months with joint attention, is, Tomasello argued, uniquely well developed in humans.
- **Pattern finding**: the ability to detect patterns and form categories across experiences, which allows children to generalize from specific utterances to abstract constructions. This ability is shared with other species and other domains.

## Item-based learning

On this view, children's early grammar is not a set of abstract rules but a collection of specific, **item-based** patterns. In *First Verbs* (1992), a diary study of his daughter's early language, Tomasello observed that each verb seemed to have its own syntax: she used *cut* only in the pattern "cut ___," while she used *draw* in several patterns, and patterns learned with one verb did not immediately transfer to others. He called this the **verb island hypothesis**: early verbs are like islands, each with its own constructions. Only gradually do children generalize across verbs to form abstract categories like "subject" and "object."

## Evidence

Experiments supported this picture. When young children were taught a new verb in one construction, such as an intransitive (*The bear is meeking*), and then encouraged to use it in a transitive (*The bear is meeking the car*), children under about three rarely did so, while older children did. Tomasello concluded that young children's grammatical knowledge is more conservative and item-specific than nativist theories predict, and that abstract categories develop gradually.

## Constructions

Usage-based theories are closely linked to **construction grammar**, which we met in LIN 101. On this view, a language consists of a large inventory of **constructions**—pairings of form and meaning at every level of abstraction, from words (*dog*) and idioms (*kick the bucket*) to partially filled patterns (*the X-er, the Y-er*: "the bigger, the better") and fully abstract patterns (subject–verb–object). Children learn constructions as they learn words, starting with concrete ones and gradually building more abstract ones.

## Frequency matters

Usage-based theories predict that the **frequency** of forms in children's input should strongly affect learning. Research by Lieven, **Ben Ambridge**, and others has found such effects: children produce and correctly use frequent forms earlier, and their errors often reflect frequent patterns in their input. For example, children who hear many questions beginning with "What's…" tend to learn that pattern as a unit.

## The nativist response

Nativists reply that usage-based theories cannot explain the poverty-of-the-stimulus phenomena, such as island constraints and structure dependence, which children seem to know without relevant input; that item-based patterns in early speech may reflect performance limitations rather than limited knowledge; and that the speed and uniformity of acquisition across very different environments suggest innate guidance. Usage-based theorists reply that the input is richer, and children's learning abilities more powerful, than nativists assume.

> **Pause and consider.** Tomasello's daughter used *cut* in only one pattern, though she used *draw* in several. What would a nativist and a usage-based theorist each conclude from this?`,
    },
    {
      title: "Statistical and Connectionist Learning",
      body: `## Learning from statistics

As we saw in Lesson I, infants can track the statistical regularities of speech—which syllables follow which—and use them to find word boundaries. Researchers have since shown that infants and children can learn many other kinds of statistical patterns: the order of words in artificial grammars, the categories of words, and dependencies between words separated by other material. **Statistical learning** has become one of the most active areas of acquisition research.

## How far can statistics go?

How much of language can be learned from statistics alone? Some researchers argue that statistical learning, combined with social understanding, can explain most or all of acquisition. Others argue that statistics can explain the learning of some patterns, such as word segmentation, but not the abstract, hierarchical structure of syntax. **Elissa Newport** and **Richard Aslin**, for example, found that learners can track some kinds of non-adjacent dependencies but not others, suggesting that statistical learning is itself constrained in ways that may reflect the structure of human languages.

## Connectionism

A related approach is **connectionism**: modeling the mind as a network of simple processing units connected by weighted links, loosely inspired by networks of neurons. Connectionist models learn by adjusting the weights of their connections in response to experience, without explicit rules. In 1986, **David Rumelhart** and **James McClelland** presented a model that learned the English past tense, including both regular forms (*walked*) and irregular forms (*went*), and even showed overregularization errors and a U-shaped pattern resembling children's, without any explicit rule. In 1990, **Jeffrey Elman** introduced the **simple recurrent network**, which learned to predict the next word in sentences and developed internal representations resembling grammatical categories.

## Rethinking innateness

In *Rethinking Innateness* (1996), Elman and his colleagues argued that connectionist models showed how complex knowledge could emerge from the interaction of general learning mechanisms with structured input, without detailed innate knowledge. They did not deny that human beings have innate predispositions, but argued that these might be general constraints on learning and architecture rather than specific linguistic principles.

## The critique

Pinker and **Alan Prince**, in a detailed critique published in 1988, argued that the Rumelhart–McClelland model succeeded only because of features of its training regime and representation, and failed to capture important facts about the English past tense: for example, that regular forms are produced for verbs derived from nouns (*The batter flied out*, not *flew out*), which depends on grammatical structure the model lacked. This critique inspired Pinker's "words and rules" theory, which we met in LIN 101. The past-tense debate became one of the longest and most productive in cognitive science.

## Neural networks today

In the 2010s and 2020s, vastly larger neural network models, trained on enormous amounts of text, achieved remarkable fluency, as we noted in LIN 101. Some researchers argue that these models show that grammatical knowledge can be learned from input without innate linguistic principles. Others reply that the models are trained on far more language than any child hears—many thousands of times more—and that their success therefore says little about the problem children face. Researchers are now training models on child-sized amounts of input to test what can be learned. The answers will shape the debate for years to come.

> **Pause and consider.** A child hears perhaps tens of millions of words by school age; large language models are trained on many billions. What does this difference imply about comparing them?`,
    },
    {
      title: "The Critical Period",
      body: `## Lenneberg's hypothesis

Eric Lenneberg proposed in 1967 that there is a **critical period** for language acquisition, lasting from early childhood until about puberty, during which language can be acquired naturally and fully; after it, acquisition becomes much harder and rarely reaches native-like levels. He linked this period to the maturation of the brain, especially the lateralization of language to the left hemisphere. Today many researchers prefer the term **sensitive period**, implying a gradual decline rather than a sharp cutoff.

## Evidence from isolation

The clearest test would be to deprive a child of language until after puberty, which would be monstrous. A few tragic cases provide some evidence. **Genie**, whom we met in LIN 101, was isolated and abused by her father until her discovery in 1970, at thirteen. The linguist **Susan Curtiss**, who studied her, described in *Genie: A Psycholinguistic Study of a Modern-Day "Wild Child"* (1977) how Genie learned many words and could communicate, but never mastered basic grammar: she produced sentences like "Applesauce buy store" and "Man motorcycle have." But Genie's case is complicated by the severe abuse and possible cognitive impairment she suffered, so it cannot by itself prove the critical period hypothesis.

## Deaf late learners

Stronger evidence comes from **deaf** individuals who were not exposed to sign language until later in life, often because they were raised in hearing families without access to signing. Studies by **Rachel Mayberry** and **Elissa Newport** have shown that deaf people who first learned American Sign Language in adolescence or adulthood, even after decades of use, perform less well on grammatical tasks than those who learned it from birth. The age of first exposure affects ultimate attainment, even in a first language.

## Second language learners

Evidence also comes from **second language** learners. In a study published in 1989, **Jacqueline Johnson** and **Elissa Newport** tested Chinese and Korean immigrants to the United States who had arrived at different ages. Those who arrived before about age seven performed like native speakers on a test of English grammar; performance declined steadily with age of arrival up to puberty; and among those who arrived as adults, age of arrival made little further difference, though performance varied widely. A very large online study published in 2018 by **Joshua Hartshorne**, **Joshua Tenenbaum**, and **Steven Pinker**, with nearly 670,000 participants, concluded that the ability to learn grammar remains high until about seventeen or eighteen years of age and then declines—later than many had supposed—though learners must begin by about ten to reach native-like levels.

## Accent

The sensitive period seems strongest for **pronunciation**. Few people who begin learning a language after childhood speak it without a foreign accent, though many achieve excellent grammar and vocabulary. The novelist **Joseph Conrad**, a native speaker of Polish who learned English in his twenties and became one of its great prose stylists, reportedly spoke English with a heavy accent all his life.

## Interpreting the evidence

Why might there be a sensitive period? Explanations include the maturation of the brain, the loss of neural plasticity, the entrenchment of the first language, changes in learning strategies, and differences in the quality and quantity of input that older learners receive. These explanations are not mutually exclusive. Whatever the cause, the evidence suggests that the human capacity for language is shaped by the timing of experience, as is true of other biological capacities such as vision.

> **Pause and consider.** Joseph Conrad wrote masterful English prose but spoke with a heavy accent. What does this suggest about which aspects of language are most affected by age?`,
    },
    {
      title: "Learning a Second Language",
      body: `## A different task

Learning a second language after childhood differs from acquiring a first language in many ways. Older learners already know one language, which can help or hinder; they have mature cognitive abilities, including the ability to study rules explicitly; they usually receive less input and less varied input; and they may be more anxious and self-conscious. They also have varied motivations, from career needs to love of a culture.

## Transfer

Second language learners **transfer** features of their first language to the second. Spanish speakers learning English may say "I have twenty years" for "I am twenty years old," following Spanish *tengo veinte años*. Speakers of languages without articles, such as Russian or Mandarin, often omit English articles. Transfer is most obvious in pronunciation, as we saw in LIN 101: learners perceive and produce the new language's sounds through the categories of their first. But transfer is not the only source of errors; learners of a given language make many of the same errors whatever their first language.

## Interlanguage

In 1972, the linguist **Larry Selinker** introduced the term **interlanguage** for the evolving system that learners develop as they progress toward the target language. An interlanguage is not simply a defective version of the target; it is a systematic grammar in its own right, with its own rules, combining features of the first language, the target language, and general learning strategies. Learners' errors, on this view, are evidence of their developing systems, not mere failures. Some features of an interlanguage may stop developing, a phenomenon Selinker called **fossilization**.

## Input and interaction

What helps learners most? The linguist **Stephen Krashen**, in work of the late 1970s and 1980s, argued that second languages are acquired mainly through **comprehensible input**—understanding messages in the language slightly beyond the learner's current level—rather than through conscious study of rules, which he thought played only a limited role. His ideas influenced communicative language teaching. Later researchers emphasized the importance of **interaction**, in which learners negotiate meaning with others, receive feedback, and are pushed to produce language; and of **attention** to form, arguing that some explicit instruction and noticing of grammatical features help learners, especially adults.

## Immersion

**Immersion** programs, in which children are taught school subjects in a second language, began with an experiment in **St. Lambert**, a suburb of Montreal, in **1965**, when English-speaking parents asked that their children be taught in French from kindergarten. Research by Wallace Lambert and others found that the children achieved high levels of French comprehension, while their English and academic achievement did not suffer. Immersion became widespread in Canada and has spread elsewhere. Immersion students typically reach high levels of comprehension and fluency, though their production often retains non-native features.

## Learning languages in the church

Christian missionaries have long been among the most dedicated adult language learners, from Jerome learning Hebrew to translate the Vulgate, to Matteo Ricci in China, to the translators of SIL whom we met in LIN 101. Their experience confirms the research: adult learners can achieve remarkable proficiency through immersion, sustained study, and relationships with native speakers, though few lose their accents entirely.

> **Pause and consider.** If you have learned a second language, which errors did you make that came from your first language? Which seemed to come from somewhere else?`,
    },
    {
      title: "When Language Development Goes Differently",
      body: `## Dissociations

One way to learn about the structure of the mind is to study what happens when development goes differently. If one ability can be impaired while another is spared, and vice versa—a **double dissociation**—this suggests that the two depend on different mental systems. Pinker and other nativists have argued that language disorders show such dissociations between language and general intelligence.

## Developmental language disorder

Some children have significant difficulties with language despite normal hearing, normal nonverbal intelligence, and normal opportunities to learn. This condition, formerly called **specific language impairment** and now usually called **developmental language disorder** (DLD), affects about 7 percent of kindergarten children, according to an epidemiological study published by **J. Bruce Tomblin** and colleagues in 1997. Children with DLD often have particular difficulty with grammatical morphemes, such as the past tense *-ed* and the third person singular *-s*, long after other children have mastered them. Researchers debate whether DLD reflects a specific deficit in grammar or more general difficulties with processing speed, memory, or the perception of brief sounds.

## The KE family and FOXP2

In the 1990s, researchers studied a large British family, known as the **KE family**, in which about half the members across three generations had a severe speech and language disorder, affecting both the coordination of mouth movements and aspects of grammar. In 2001, **Cecilia Lai** and colleagues identified the cause: a mutation in a single gene, **FOXP2**. The discovery was widely reported as finding a "language gene," but this was misleading. FOXP2 is a regulatory gene that affects the development of many other genes and brain circuits, and it is found, with small differences, in many animals, including mice and songbirds, in which it plays a role in learning motor sequences, including birdsong. The human version differs from the chimpanzee version by two amino acids. The KE family's disorder affects motor control of speech as well as grammar, and its interpretation remains debated.

## Williams syndrome

**Williams syndrome**, a rare genetic condition, was once cited as a striking dissociation in the opposite direction: individuals with Williams syndrome typically have intellectual disability and severe difficulty with spatial tasks, yet often speak fluently, with rich vocabulary and complex sentences. Pinker cited it as evidence that language can be spared while general intelligence is impaired. Later research found that language in Williams syndrome is not truly normal—development is delayed, and some aspects of grammar and vocabulary are atypical—so the dissociation is less clean than first thought.

## Autism

**Autism** affects social communication and is associated with a wide range of language abilities, from individuals who never speak to those with large vocabularies and complex grammar but difficulty with pragmatics—understanding implicature, irony, and the conventions of conversation that we studied in LIN 101. The pattern suggests that pragmatic abilities depend partly on social cognition, including the ability to understand others' minds, which Paul Bloom argues is crucial to word learning.

## What the disorders show

Language disorders offer important evidence about the organization of language in the mind and brain, but they rarely provide the clean dissociations that early researchers hoped for. Most involve a mixture of linguistic and non-linguistic difficulties. They suggest that language depends on multiple interacting systems, some more specific to language than others—a picture compatible with moderate versions of both nativist and usage-based theories.

## Help for children

Whatever their theoretical significance, developmental language disorders have real consequences for children's education and social life. Early identification and support from speech-language therapists can make a significant difference.

> **Pause and consider.** FOXP2 was widely reported as "the language gene." Why is this description misleading?`,
    },
    {
      title: "Children Across Languages",
      body: `## Beyond English

Much early research on language acquisition studied children learning English. But a theory of acquisition must explain how children learn any human language. Since the 1970s, researchers have studied children learning hundreds of languages, revealing both universal patterns and striking differences.

## Operating principles

The psycholinguist **Dan Slobin**, comparing acquisition across languages, proposed in 1973 a set of **operating principles** that children seem to follow, such as "**pay attention to the ends of words**," "avoid exceptions," and "pay attention to the order of words and morphemes." Children everywhere, he found, acquire suffixes earlier than prefixes, regular forms earlier than irregular ones, and forms with a clear one-to-one relation between form and meaning earlier than fused forms. These principles help explain why Turkish children, as we saw in Lesson I, master their regular, salient suffixes early, while Russian children take longer with their fused, irregular inflections.

## Polysynthetic languages

What about languages in which a single word can express a whole sentence? The linguist **Shanley Allen**, studying children learning **Inuktitut** in northern Canada in the 1990s, found that they produce long, complex words, built from several morphemes, at ages when English-speaking children produce two- or three-word utterances. Inuit children of two or three produce words combining roots with several suffixes. This shows that the "two-word stage" is not a universal limit on the complexity of children's utterances, but reflects how the particular language packages meaning.

## Ergative languages

Children learning **ergative** languages, which we met in LIN 101, acquire ergative case marking early and generally without errors that would suggest they expected a nominative-accusative system. The anthropologist and linguist **Clifton Pye**, studying children learning **K'iche'** Maya in Guatemala, and researchers studying children learning Samoan, Inuktitut, and other ergative languages found that children follow the ergative patterns of their input. This suggests that children do not come to language with a fixed expectation about how grammatical relations are marked.

## Tone and word order

Children learning **tone languages** such as Mandarin, Cantonese, and Sesotho acquire tones early, often before many consonants and vowels, perhaps because tone is carried by pitch, which infants attend to from before birth. Children learning languages with **free word order**, such as Turkish and Warlpiri, use the varied orders of their input, marking roles with case endings.

## What the variation shows

The diversity of acquisition across languages poses a challenge to all theories. Nativists must explain how a single Universal Grammar allows children to acquire such different systems so efficiently; usage-based theorists must explain the many similarities across languages in the order and manner of acquisition. Cross-linguistic research has made both kinds of theory more careful and more realistic.

> **Pause and consider.** Inuit two-year-olds produce long words that express whole sentences. What does this suggest about the "two-word stage" in English-speaking children?`,
    },
    {
      title: "Signing Children and the Pronoun Puzzle",
      body: `## Same milestones

Deaf children who are exposed to a sign language from birth, usually because their parents are deaf signers, acquire it on the same schedule as hearing children acquire spoken language. They babble with their hands, as we saw in LIN 101; produce their first signs around their first birthday; combine signs around eighteen to twenty-four months; and master the grammar of their sign language over the following years. This parallel is strong evidence that the capacity for language is not tied to speech, but is a general capacity that can use either the vocal or the manual channel.

## The iconicity puzzle

Sign languages offer a natural test of a fascinating question: do children learn language more easily when its forms are **iconic**, resembling their meanings? Since many signs resemble what they mean, one might expect signing children to learn them faster, or to avoid errors that hearing children make.

## Pronoun reversal

A striking study by the psychologist **Laura-Ann Petitto**, published in 1987, examined how deaf children learn **personal pronouns** in American Sign Language. In ASL, the pronoun *me* is made by pointing at oneself, and *you* by pointing at the addressee—the same pointing gestures that hearing and deaf infants use before they learn language. The forms could hardly be more transparent.

Yet Petitto found that deaf children went through the same developmental sequence as hearing children learning English pronouns. Around their first year, they pointed at people and things freely, as all infants do. Then, around eighteen months, they stopped pointing at people for a while. And around twenty-two months, some made **pronoun reversal errors**, pointing at the addressee to mean "me"—exactly the error hearing children sometimes make when they say "you" to mean themselves, because they hear others call them "you." Only later did they use the pronouns correctly.

## What Petitto concluded

Petitto argued that the deaf children were treating the pointing signs not as transparent gestures but as **linguistic** elements—pronouns, with their shifting reference—and that they had to learn them as such, despite their apparent transparency. The children's knowledge of language, she concluded, is **autonomous** from their knowledge of gesture: they process language as language, whatever its modality. This finding has been taken as evidence for a specialized language capacity.

## Iconicity and learning

Later research has found that iconicity does help in some ways: iconic signs may be learned somewhat earlier, and iconicity may help adult learners of sign languages. But the overall pattern of acquisition is not transformed by it. Children appear to approach sign languages as they approach spoken languages, as systems of arbitrary, conventional symbols organized by grammar.

## Late exposure

As we saw on the page on the critical period, many deaf children are born to hearing parents who do not sign, and may not be exposed to a sign language until school age or later. Their experience shows the importance of early exposure for full mastery. Many advocates for deaf children therefore urge that deaf infants be given early access to sign language, alongside spoken language where possible, to ensure that they acquire a first language during the sensitive period.

> **Pause and consider.** ASL *me* is a point at oneself, yet deaf toddlers sometimes point at others to mean "me." Why might a transparent form still be hard to learn as a pronoun?`,
    },
    {
      title: "Testing Parameters: The Case of Missing Subjects",
      body: `## A parameter in action

If children acquire language by setting parameters of Universal Grammar, we might expect to see evidence of parameters being set—or temporarily mis-set—during development. One of the most discussed cases concerns **missing subjects**.

## Subjectless sentences

Young English-speaking children often omit subjects: *Want cookie*, *Go park*, *Eat apple now*. Adult English requires subjects, even meaningless ones (*It is raining*; *There is a cat*). But in **pro-drop** languages such as Italian and Spanish, which we met in LIN 101, subjects can be freely omitted, since the verb's ending shows the subject.

## Hyams's hypothesis

In ***Language Acquisition and the Theory of Parameters*** (1986), the linguist **Nina Hyams**—one of the authors of *An Introduction to Language*, the LIN 101 textbook—proposed that English-speaking children's missing subjects show that they start with the **pro-drop parameter** set to the Italian value, as if they were speaking a pro-drop language. Only when they notice evidence that English is not pro-drop, such as expletive subjects (*It is raining*), do they reset the parameter. This was one of the first attempts to apply the principles-and-parameters approach to child language, and it inspired much research.

## Bloom's alternative

In an article of 1990, **Paul Bloom**—the author of this course's third text—offered an alternative explanation. Children, he suggested, omit subjects not because their grammar allows it, but because of **performance limitations**: when planning a sentence strains their limited processing capacity, they leave out the parts that carry least new information, and subjects, which usually refer to familiar people and things, are the first to go. Bloom found evidence for this: children were more likely to omit subjects when the verb phrase was longer, suggesting a trade-off between subject and predicate in a limited "sentence budget."

## Further evidence

Later research added complications. Children learning English omit subjects much less often than children learning Italian, suggesting that they are sensitive to their input from early on. Children learning English also omit objects, and other words, not only subjects. And Hyams herself, with colleagues, revised her proposal in later work, connecting missing subjects to children's developing use of tense. Today, many researchers think that both grammatical and processing factors play a role.

## What the case shows

The debate over missing subjects illustrates a general problem in acquisition research: when children's speech differs from adults', is it because their **competence**—their grammatical knowledge—differs, or because their **performance**—their ability to use that knowledge—is limited? The answer often requires careful experiments that can separate the two, and the question recurs throughout the study of child language.

> **Pause and consider.** Hyams explained missing subjects by grammar; Bloom by processing limits. What kind of evidence would help decide between them?`,
    },
    {
      title: "Where the Debate Stands",
      body: `## Common ground

After decades of research, nativist and usage-based researchers agree on more than their debates sometimes suggest. Both agree that:

- children acquire language with remarkable speed, from input that is limited in various ways;
- human beings have biological capacities for language that other species lack, whatever those capacities are;
- input matters: children learn the particular language they hear, and the quantity and quality of interaction affect development;
- children are active learners who form generalizations, sometimes overgeneralize, and gradually refine their knowledge;
- there are sensitive periods in development;
- social interaction and understanding others' intentions play an important role.

## Points of disagreement

They disagree, above all, about **what is innate**. Nativists argue that children are born with specifically **linguistic** knowledge—principles of grammar such as structure dependence, or the operation Merge—that is not used in other domains. Usage-based theorists argue that children are born with **general** capacities—intention reading, pattern finding, statistical learning, memory—that are used in language and elsewhere, and that grammar emerges from their application to input. Many researchers occupy positions between these poles.

## Evidence still needed

Much of the debate turns on empirical questions not yet settled: How rich is children's input, really? What can general learning mechanisms learn from realistic amounts of input? How early do children show abstract grammatical knowledge? Large corpora of child speech, new experimental methods, and computational models trained on child-sized input are allowing researchers to address these questions more precisely than ever.

## Why it matters

The debate is not merely academic. It bears on how we understand human nature: whether the human mind is a general-purpose learner shaped by experience, or a collection of specialized faculties shaped by evolution. It bears on education: how to teach reading and second languages, and how to support children with language disorders. And it bears on the relationship between human beings and other animals, and between human beings and machines.

## A Christian perspective

Christian thinkers have approached the question from various angles. Many have seen in the human capacity for language a sign of the **image of God** (Genesis 1:26–27): a God who speaks, who creates by his word (Genesis 1:3), and who is himself the Word (John 1:1), has made creatures who speak. On this view, it is not surprising that language should be a deep, built-in feature of human nature. Others emphasize that language is also learned in community, in relationships of love and trust between parents and children—as the Deuteronomic command to teach the words of God "diligently unto thy children" (Deuteronomy 6:7) recognizes. Both nature and nurture, on this view, are gifts.

## Looking ahead

The next lesson turns from how children acquire grammar to how they learn the **meanings** of words, following Paul Bloom's *How Children Learn the Meanings of Words*. This topic brings together language, concepts, and social understanding, and offers a fresh perspective on the nativism debate.

> **Pause and consider.** After this lesson, where would you place yourself on the spectrum between nativist and usage-based views? What evidence moved you most?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Chomsky's review of Skinner (1959)

Chomsky argued that Skinner's notion of "stimulus control" was empty when applied to language: a person looking at a painting might say "Dutch," "clashes with the wallpaper," or "hanging too low."

**Questions**

1. What point is Chomsky making with this example?
2. Which other arguments did he raise against behaviorism?

## 2. Crain and Nakayama (1987)

Children aged three to five, asked to form questions like "Is the boy who is watching Mickey Mouse happy?", never moved the first auxiliary.

**Questions**

1. What hypothesis did this experiment test?
2. How might a usage-based theorist explain the result?

## 3. Tomasello's verb islands (1992)

Tomasello's daughter used *cut* in only one pattern, though she used *draw* in several.

**Questions**

1. What does the verb island hypothesis claim?
2. What experimental evidence supports it?

## 4. Johnson and Newport (1989)

Immigrants who arrived in the United States before about age seven performed like native speakers on English grammar; performance declined with age of arrival until puberty.

**Questions**

1. What does this suggest about a critical or sensitive period?
2. What other explanations might account for the pattern?

## Drawing the threads together

In a paragraph, compare nativist and usage-based theories of acquisition, and explain which pieces of evidence each side finds most compelling, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Patterns in the Mind: Language and Human Nature", author: "Ray Jackendoff", publisher: "Basic Books", year: "1994", note: "Read chapters 1–4, on mental grammar and innate knowledge." },
    { kind: "book", title: "Constructing a Language: A Usage-Based Theory of Language Acquisition", author: "Michael Tomasello", publisher: "Harvard University Press", year: "2003", note: "Read chapters 1 and 5." },
    { kind: "book", title: "The Language Instinct", author: "Steven Pinker", publisher: "William Morrow", year: "1994", note: "Read chapter 2, \"Chatterboxes,\" and chapter 11, \"The Big Bang.\"" },
  ],
  media: [
    { kind: "book", title: "A Review of B. F. Skinner's Verbal Behavior", author: "Noam Chomsky", publisher: "Language 35, no. 1", year: "1959", note: "Read the introduction and conclusion." },
    { kind: "book", title: "Biological Foundations of Language", author: "Eric H. Lenneberg", publisher: "Wiley", year: "1967", note: "Read the chapter on the critical period." },
  ],
  questions: [
    {
      prompt: "How did B. F. Skinner explain language acquisition in Verbal Behavior (1957)?",
      choices: [
        "By innate Universal Grammar",
        "By operant conditioning: reinforced utterances become more frequent",
        "By statistical learning",
        "By reading",
      ],
      answer: 1,
      explanation: "Chomsky's 1959 review attacked this account.",
    },
    {
      prompt: "Which of the following was a main argument of Chomsky's review of Skinner?",
      choices: [
        "That children are reinforced for every sentence",
        "That speakers constantly produce new sentences that could never have been reinforced",
        "That animals have language",
        "That language is learned by reading",
      ],
      answer: 1,
      explanation: "This is the creativity of language.",
    },
    {
      prompt: "What did Crain and Nakayama's experiment (1987) find?",
      choices: [
        "That children often move the first auxiliary",
        "That children never made structure-independent errors in forming questions",
        "That children cannot form questions",
        "That children imitate adults exactly",
      ],
      answer: 1,
      explanation: "They took this as evidence for innate structure dependence.",
    },
    {
      prompt: "What is Jackendoff's \"argument for mental grammar\"?",
      choices: [
        "That grammar is taught in school",
        "That the expressive variety of language implies unconscious grammatical principles in the brain",
        "That grammar is unnecessary",
        "That only linguists know grammar",
      ],
      answer: 1,
      explanation: "Speakers cannot have memorized every sentence.",
    },
    {
      prompt: "What are the two key abilities Tomasello identified for language learning?",
      choices: [
        "Imitation and memory",
        "Intention reading and pattern finding",
        "Reading and writing",
        "Hearing and speaking",
      ],
      answer: 1,
      explanation: "Both are general cognitive abilities.",
    },
    {
      prompt: "What is the verb island hypothesis?",
      choices: [
        "That verbs are learned on islands",
        "That children's early verbs each have their own constructions, generalized only gradually",
        "That verbs are innate",
        "That nouns are learned before verbs",
      ],
      answer: 1,
      explanation: "Tomasello proposed it in First Verbs (1992).",
    },
    {
      prompt: "What did Rumelhart and McClelland's 1986 model show?",
      choices: [
        "That rules are necessary",
        "That a connectionist network could learn regular and irregular past tenses, with overregularization, without explicit rules",
        "That children cannot learn the past tense",
        "That computers cannot learn",
      ],
      answer: 1,
      explanation: "Pinker and Prince criticized it in 1988.",
    },
    {
      prompt: "What did Johnson and Newport (1989) find about immigrants learning English?",
      choices: [
        "That age of arrival made no difference",
        "That those who arrived before about seven performed like natives, with decline until puberty",
        "That adults learned best",
        "That no one learned English",
      ],
      answer: 1,
      explanation: "This supports a sensitive period.",
    },
    {
      prompt: "What did Selinker mean by interlanguage?",
      choices: [
        "A pidgin",
        "The learner's evolving, systematic grammar on the way to the target language",
        "A language used between nations",
        "Esperanto",
      ],
      answer: 1,
      explanation: "Some features may fossilize.",
    },
    {
      prompt: "Why is calling FOXP2 \"the language gene\" misleading?",
      choices: [
        "Because it has nothing to do with language",
        "Because it is a regulatory gene with many effects, found in many animals, and its mutation affects motor control as well as grammar",
        "Because it was never found",
        "Because only animals have it",
      ],
      answer: 1,
      explanation: "It plays a role in learning motor sequences, including birdsong.",
    },
  ],
  reflection:
    "Is language an instinct, or is it learned through general cognitive abilities? In 500–800 words, present the strongest case for each side, drawing on at least four pieces of evidence from this lesson (for example, the poverty of the stimulus, verb islands, the critical period, statistical learning, or language disorders), and explain your own view.",
};
