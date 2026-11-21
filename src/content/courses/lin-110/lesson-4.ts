import type { Lesson } from "@/lib/schema";

export const lesson4: Lesson = {
  title: "Language in the Brain",
  summary:
    "The discovery of language areas from phrenology to Broca; Wernicke and the classical model; the varieties of aphasia; lateralization and the split brain; imaging the working brain; the debate over a specialized language network; signing and bilingual brains; plasticity, genes, and recovery; reading, an invention the brain must learn; speech perception; stuttering; and language across the lifespan.",
  pages: [
    {
      title: "From Phrenology to Broca",
      body: `## Where is the mind?

Where in the brain is language? The question has a long history. In the early nineteenth century, the German physician **Franz Joseph Gall** (1758–1828) proposed that the brain consists of separate "organs" for different mental faculties, and that their size could be read from bumps on the skull. His system, popularized as **phrenology**, located a faculty of language behind the eyes. Phrenology was soon discredited as science: its methods were unreliable and its localizations fanciful. But its central idea, that different mental functions depend on different parts of the brain, would prove partly right.

## The case of "Tan"

In April 1861, the French surgeon and anthropologist **Paul Broca** (1824–1880) examined a patient at the Bicêtre hospital in Paris named **Louis Victor Leborgne**. For many years, Leborgne had been unable to say anything but a single syllable, "tan," which he repeated, often with expressive intonation, in response to every question; the hospital staff called him "Tan." He appeared to understand much of what was said to him, and could communicate with gestures. When Leborgne died a few days later, Broca examined his brain and found a lesion in the **left frontal lobe**, in the back part of the third frontal convolution.

## Broca's conclusion

Broca presented his findings to the Anthropological Society of Paris, arguing that this region was the seat of the faculty of **articulate language**. Over the next few years, he collected more cases and noticed that almost all of them involved damage to the **left** hemisphere. In 1865 he published his famous conclusion, often summarized as "**we speak with the left hemisphere**." The region he identified is now called **Broca's area**. Leborgne's brain was preserved and is still held in Paris; modern imaging has shown that the damage was more extensive than Broca thought, extending into deeper structures.

## Localization

Broca's discovery was one of the first convincing demonstrations of **localization of function**: that specific mental capacities depend on specific regions of the brain. It opened the modern study of brain and language, called **neurolinguistics**, and inspired a search for other language areas.

## The method of lesions

For more than a century after Broca, the main method of studying language in the brain was the **lesion method**: observing what language abilities are lost when a particular part of the brain is damaged by stroke, injury, or disease, and then, often after death, locating the damage. This method has limits: lesions are rarely confined to a single region, brains differ, and patients may recover or compensate. But it produced most of what was known about the language brain until the arrival of brain imaging in the late twentieth century.

## A word on brains and persons

Studying how language depends on the brain does not, by itself, settle philosophical questions about the relation between mind and brain—whether the mind is nothing but the activity of the brain, or something more. Neuroscientists of many philosophical and religious views study the brain's role in language. What the evidence clearly shows is that, in this life, our use of language depends intimately on the health of particular parts of the body, a fact that aphasia makes painfully plain to patients and their families.

> **Pause and consider.** Leborgne could understand much but say only "tan." What does his case suggest about the difference between understanding and producing language?`,
    },
    {
      title: "Wernicke and the Classical Model",
      body: `## A second area

In **1874**, a twenty-six-year-old German neurologist, **Carl Wernicke** (1848–1905), published a short monograph describing patients with a different kind of language disorder. Unlike Broca's patients, they spoke fluently, with normal rhythm and intonation, but what they said made little sense, filled with wrong words and invented words; and they had great difficulty understanding what others said. Wernicke found that their brains were damaged in the **left temporal lobe**, near the region involved in hearing. This region came to be called **Wernicke's area**.

## A model of language

Wernicke went further than describing a second area. He proposed a **model** of how language is organized in the brain. Wernicke's area, near the auditory cortex, stored the **sound images** of words, allowing them to be recognized. Broca's area, near the motor cortex controlling the mouth, stored the **motor programs** for producing words. The two areas were connected by a pathway of nerve fibers, later identified as the **arcuate fasciculus**. Speaking involved activating a word's sound image in Wernicke's area and sending it to Broca's area to be articulated; understanding involved recognizing sounds in Wernicke's area.

## Predicting a new disorder

Wernicke's model made a striking prediction: damage to the connection between the two areas, leaving both intact, should produce a disorder in which patients could understand speech and speak fluently, but could not **repeat** what they heard, since repetition requires passing information from the comprehension area to the production area. Such patients were indeed found. The disorder is now called **conduction aphasia**. Its discovery was a triumph for the model.

## Lichtheim and Geschwind

The German physician **Ludwig Lichtheim** extended Wernicke's model in 1885, adding a center for **concepts**, connected to both language areas, which allowed him to predict further types of aphasia. In the 1960s, the American neurologist **Norman Geschwind** (1926–1984) revived and updated this tradition, which became known as the **Wernicke–Geschwind model**. Geschwind emphasized the importance of connections between brain regions and explained many disorders as "disconnection syndromes." His model was taught in textbooks for decades.

## Limits of the classical model

Modern research has shown that the classical model is too simple. Language depends on a much wider network of brain regions than Broca's and Wernicke's areas, including parts of the temporal, parietal, and frontal lobes, as well as deeper structures. The functions of Broca's and Wernicke's areas are themselves more complex than "production" and "comprehension": Broca's area, for example, is involved in aspects of comprehension, especially of complex syntax, and in non-linguistic tasks. Patients with damage to Broca's area do not always have Broca's aphasia, and vice versa. Yet the classical model remains a useful starting point, and its central insight—that language depends on interconnected regions, mostly in the left hemisphere—has held up.

> **Pause and consider.** Wernicke's model predicted a disorder of repetition before it was widely recognized. Why is it significant when a scientific model predicts something new?`,
    },
    {
      title: "The Aphasias",
      body: `## Language lost

**Aphasia** is the loss or impairment of language caused by brain damage, most commonly from a **stroke**. In the United States alone, an estimated two million people live with aphasia. Its effects can be devastating: a person may lose the ability to speak, to understand, to read, or to write, while remaining otherwise the same person, with intact intelligence, memories, and personality. Studying aphasia has taught researchers much about how language is organized, and has led to therapies that help patients recover.

## Broca's aphasia

Patients with **Broca's aphasia** speak slowly, with great effort, in short phrases that often lack function words and grammatical endings. Asked about a visit to the hospital, a patient might say: "Yes... ah... Monday... er... Dad and Peter H... and Dad... er... hospital... and ah... Wednesday... Wednesday nine o'clock..." This pattern is called **agrammatism**. Comprehension of everyday conversation is relatively good. But in a well-known study published in 1976, **Alfonso Caramazza** and **Edgar Zurif** showed that patients with Broca's aphasia had difficulty understanding sentences whose meaning depended on syntax alone. They understood *The apple that the boy is eating is red*, where world knowledge tells you who eats what, but not *The cat that the dog is chasing is black*, where either animal could chase the other. This suggested that Broca's aphasia involves a deficit in syntax, not just in speech production.

## Wernicke's aphasia

Patients with **Wernicke's aphasia** speak fluently, with normal intonation, but their speech is filled with errors: substituted words (*fork* for *spoon*), substituted sounds (*tife* for *knife*), and invented words called **neologisms**. In severe cases, their speech becomes **jargon**, a stream of fluent nonsense. Their comprehension is impaired, and they are often unaware of their errors. A patient asked to describe a picture of a kitchen might say: "Well, this is... mother is away here working her work out o'here to get her better, but when she's looking, the two boys looking in the other part."

## Other aphasias

Other patterns include **conduction aphasia**, with fluent speech and good comprehension but impaired repetition, as Wernicke predicted; **anomic aphasia**, in which the main difficulty is finding words, especially nouns, as in a constant tip-of-the-tongue state; **global aphasia**, caused by extensive damage, in which nearly all language abilities are severely impaired; and **transcortical** aphasias, in which repetition is preserved while spontaneous speech or comprehension is impaired.

## Category-specific deficits

Some patients lose words in particular semantic categories. Studies published from the 1980s by researchers such as **Elizabeth Warrington** described patients who could name tools and objects but not animals or fruits, or the reverse. Others lose verbs but not nouns, or nouns but not verbs. Such patterns suggest that the lexicon is organized partly by meaning, and that different categories may depend on partly different brain regions.

## Recovery and therapy

Many patients recover substantially in the months after a stroke, as swelling subsides and the brain reorganizes. **Speech-language therapy** helps many patients regain language, using techniques ranging from naming practice to **melodic intonation therapy**, which uses singing—often preserved in patients with Broca's aphasia—to help them produce words. Support for families and communication strategies can greatly improve patients' quality of life.

## Famous voices

Aphasia has affected many public figures. The American actress **Patricia Neal** recovered remarkably from aphasia after strokes in 1965, returning to acting. More recently, the actor **Bruce Willis** retired in 2022 after being diagnosed with aphasia, later attributed to frontotemporal dementia, which drew public attention to the condition.

> **Pause and consider.** Patients with Broca's aphasia understood "The apple that the boy is eating is red" but not "The cat that the dog is chasing is black." What does this contrast reveal?`,
    },
    {
      title: "Two Hemispheres",
      body: `## Lateralization

As Broca discovered, language depends mainly on the **left hemisphere** in most people. This specialization is called **lateralization**. In about 95 percent of right-handed people, language is lateralized to the left hemisphere; among left-handers, the figure is lower, around 70 percent, with the rest having language in the right hemisphere or in both.

## The Wada test

How can lateralization be measured in a living person? In 1949, the Japanese-Canadian neurologist **Juhn Wada** developed a procedure, now called the **Wada test**, in which a short-acting anesthetic is injected into the artery supplying one hemisphere, temporarily putting it to sleep. If the patient cannot speak while the left hemisphere is anesthetized, language is in the left hemisphere. The test was used for decades before brain surgery for epilepsy, to avoid damaging language areas; it is now often replaced by functional imaging.

## Dichotic listening

A simpler method, developed by **Doreen Kimura** in 1961, is **dichotic listening**: different words are played simultaneously to the two ears through headphones. Most people report the words played to the **right** ear more accurately, since the right ear's strongest connections go to the left hemisphere. This "right-ear advantage" for speech is a sign of left-hemisphere language.

## The split brain

The most dramatic evidence for lateralization came from **split-brain** patients. In the 1960s, some patients with severe epilepsy had the **corpus callosum**, the large bundle of fibers connecting the two hemispheres, surgically cut to prevent seizures from spreading. **Roger Sperry** and **Michael Gazzaniga** studied these patients and found that, under special testing conditions, their two hemispheres functioned almost independently. When a picture was flashed to the right visual field (seen by the left hemisphere), patients could name it. When it was flashed to the left visual field (seen by the right hemisphere), they could not name it—but could pick out the object with their left hand, which the right hemisphere controls. The right hemisphere knew what it had seen but could not say it. Sperry received the Nobel Prize in 1981 for this work.

## The interpreter

Gazzaniga found that the left hemisphere often invented explanations for actions initiated by the right hemisphere, of which it had no knowledge. When the right hemisphere was shown a snow scene and the left a chicken claw, and the patient's left hand chose a shovel while the right hand chose a chicken, the patient explained, from the left hemisphere, that "the chicken claw goes with the chicken, and you need a shovel to clean out the chicken shed." Gazzaniga called the left hemisphere's tendency to construct explanations the "**interpreter**." The finding raised profound questions about the unity of consciousness and the reliability of our explanations of our own behavior.

## The right hemisphere's contribution

The right hemisphere is not silent in language. It contributes to understanding **prosody** and emotional tone, **discourse**—following the thread of a story or conversation—**figurative language**, such as metaphor, humor, and sarcasm, and the pragmatics of conversation. Patients with right-hemisphere damage may speak grammatically but have difficulty understanding jokes, drawing inferences, or recognizing a speaker's emotional tone.

## Myths

Popular culture has exaggerated hemispheric differences into myths of "left-brained" logical people and "right-brained" creative ones. Research does not support such classifications of personality. Both hemispheres work together in almost every task; specialization is a matter of degree.

> **Pause and consider.** Split-brain patients' left hemispheres invented explanations for actions they had not initiated. What might this suggest about our ordinary explanations of our own behavior?`,
    },
    {
      title: "Imaging the Working Brain",
      body: `## Seeing the brain at work

From the 1980s, new technologies allowed researchers to observe the brains of healthy people as they used language, rather than relying on the effects of damage.

## PET and fMRI

**Positron emission tomography** (PET) measures blood flow to different brain regions, which increases where neurons are more active. In a landmark study published in 1988, **Steven Petersen**, **Marcus Raichle**, and colleagues used PET to compare brain activity when people passively viewed words, heard words, spoke words aloud, and generated verbs related to nouns (seeing *hammer* and saying *hit*). Each task activated different combinations of regions, and the study helped establish brain imaging as a method for studying cognition.

**Functional magnetic resonance imaging** (fMRI), developed in the early 1990s, measures changes in blood oxygen levels, without radioactive tracers, and with better spatial resolution. It quickly became the most widely used method in cognitive neuroscience. Both PET and fMRI show **where** activity increases, but are relatively slow, measuring changes over seconds.

## ERPs and the timing of comprehension

To measure the rapid **timing** of language processing, researchers use **event-related potentials** (ERPs): small changes in the brain's electrical activity, recorded from electrodes on the scalp, time-locked to the presentation of a word. In a famous study published in 1980, **Marta Kutas** and **Steven Hillyard** presented sentences word by word, some ending with a semantically anomalous word: *He spread the warm bread with socks.* About 400 milliseconds after the anomalous word, the brain produced a large negative wave, which they named the **N400**. The N400 is sensitive to how expected a word is in its context: the less expected, the larger the N400.

In 1992, **Lee Osterhout** and **Phillip Holcomb** described a different response, a positive wave peaking about 600 milliseconds after words that were **syntactically** anomalous or unexpected, as in garden-path sentences. They called it the **P600**. The existence of different brain responses to semantic and syntactic anomalies suggested that the brain processes meaning and structure in at least partly different ways, though later research has complicated this picture.

## MEG

**Magnetoencephalography** (MEG) measures the magnetic fields produced by neural activity, combining good timing with better localization than ERPs. Together, these methods allow researchers to study both where and when language is processed.

## The dual-stream model

Imaging research led to new models of the language brain. In an influential paper published in 2007, **Gregory Hickok** and **David Poeppel** proposed a **dual-stream model** of speech processing, analogous to models of vision. A **ventral stream**, running through the temporal lobe, maps sounds onto meanings, supporting comprehension; it involves both hemispheres. A **dorsal stream**, running from the temporal lobe to parietal and frontal regions, maps sounds onto articulation, supporting speech production and repetition; it is strongly left-lateralized. The model updates the classical Wernicke–Geschwind picture in light of modern evidence.

## Cautions

Brain imaging has its limits. Increased activity in a region during a task does not mean the region is necessary for the task, or that it does only that task. Many early imaging studies used small samples, and some findings have not replicated. Images of "lit-up" brains can give a misleading impression of precision. Responsible interpretation requires combining imaging with other methods, including the study of patients.

> **Pause and consider.** *He spread the warm bread with socks* produces an N400. What does this tell us about how quickly the brain integrates word meanings into context?`,
    },
    {
      title: "Is There a Language Network?",
      body: `## A specialized system?

Is language processed by brain regions specialized for language, or by regions that serve many cognitive functions? This question connects neuroscience to the debate of Lesson II about whether language depends on specialized or general capacities.

## Fedorenko's language network

The neuroscientist **Evelina Fedorenko**, at MIT, has argued, on the basis of many fMRI studies beginning around 2010, that the human brain contains a **language network**: a set of regions, mainly in the left frontal and temporal lobes, that respond strongly to language—spoken, written, or signed—and respond little to non-linguistic tasks such as arithmetic, music, logical reasoning, or understanding others' minds. She identified these regions in each individual, rather than averaging across people, since their exact locations vary. Fedorenko argues that this network is distinct from a **multiple-demand network**, which supports general problem-solving and attention across many tasks.

## Evidence from patients

Further evidence comes from patients with global aphasia, who have lost almost all language ability. Studies by **Rosemary Varley** and colleagues found that some such patients could still solve arithmetic problems, reason logically, understand others' false beliefs, and appreciate music. If language and these abilities depended on the same brain system, losing language should impair them too. The finding suggests that much thought can proceed without language—a point we return to in Lesson V.

## Broca's area revisited

What does Broca's area do? Some researchers argue that it supports specifically syntactic processing, such as building hierarchical structures. Others argue that it supports more general functions used by language among other things, such as working memory, selection among competing alternatives, or processing hierarchical sequences in music and action. Fedorenko's work suggests that Broca's area contains subregions with different functions, some language-specific and some not, intermingled closely—which may explain why the debate has been so persistent.

## Music and language

Music, like language, involves hierarchical structure, as Jackendoff and Lerdahl argued. Does it use the same brain systems? Some imaging studies found overlap between music and language processing in frontal regions; others, following Fedorenko's individual-subject methods, found that the core language regions respond little to music. Patients can lose language while retaining musical abilities, and vice versa; the composer **Maurice Ravel**, suffering from a progressive brain disease in the 1930s, lost the ability to write music while still able to hear it in his mind and recognize errors. The relation between language and music in the brain is an active research area.

## Specialization and development

Even if the adult brain has a specialized language network, this does not settle whether it is innately specified. Brain regions can become specialized through development and experience: as we will see when we discuss reading, the brain develops a region specialized for written words, though writing is a recent invention that cannot have shaped human genes. Language specialization might similarly arise from the interaction of innate predispositions with experience.

> **Pause and consider.** Some patients with global aphasia can still do arithmetic and reason logically. What does this suggest about the relation between language and thought?`,
    },
    {
      title: "Signing and Bilingual Brains",
      body: `## Language without sound

As we saw in LIN 101, the study of deaf signers has been one of the most important sources of evidence about the language brain. If language depended on brain regions specialized for hearing and speech, then sign languages, which use vision and the hands, might depend on different regions—perhaps in the right hemisphere, which is specialized for spatial processing.

## Bellugi's findings

In research beginning in the 1970s and summarized in *What the Hands Reveal About the Brain* (1987), written with **Howard Poizner** and **Edward Klima**, **Ursula Bellugi** studied deaf signers who had suffered strokes. Signers with **left-hemisphere** damage developed **sign aphasias** closely resembling the aphasias of hearing speakers: some had halting, agrammatic signing like Broca's aphasia, others fluent but erroneous signing like Wernicke's aphasia. Yet their non-linguistic spatial abilities were intact: they could draw pictures and arrange blocks. Signers with **right-hemisphere** damage, by contrast, had severe difficulties with spatial tasks—neglecting the left side of space in their drawings—but their signing grammar was intact, even though sign language grammar uses space. The left hemisphere, these findings showed, is specialized for **language**, whatever its modality, not merely for sound.

## Imaging signers

Later imaging studies by researchers such as **Helen Neville** and **Karen Emmorey** confirmed that sign language processing activates largely the same left-hemisphere regions as spoken language, including Broca's and Wernicke's areas, along with some additional areas involved in processing space and movement.

## Bilingual brains

How are two languages organized in one brain? Early clinical reports described bilingual patients who, after a stroke, lost one language while retaining the other, or recovered their languages in surprising orders. Such cases suggested that different languages might be stored in different places. Modern imaging studies, however, have found that a bilingual's two languages mostly use **overlapping** brain networks, especially when both are learned early and used proficiently. Differences appear mainly when one language is learned later or used less: a later-learned, less proficient language may require more activity in regions involved in control and effort.

## Controlling two languages

Bilinguals must manage two active languages, selecting one and inhibiting the other. Imaging studies have identified brain regions involved in this **language control**, including parts of the prefrontal cortex and the basal ganglia, which overlap with regions involved in general cognitive control. This overlap is one reason researchers have investigated whether bilingualism enhances executive function, the debate we met in Lesson I.

## Age and the brain

Studies comparing early and late learners of a second language, and deaf people who learned sign language at different ages, show that the **age of acquisition** affects how language is represented in the brain, especially for grammar. Late learners may rely more on regions involved in effortful processing. These findings support the idea of a sensitive period discussed in Lesson II, while showing that the adult brain remains capable of learning language throughout life.

> **Pause and consider.** Deaf signers with right-hemisphere damage could not draw the left side of a picture but signed grammatically, though sign grammar uses space. What does this show?`,
    },
    {
      title: "Plasticity, Genes, and Recovery",
      body: `## The plastic brain

The brain is not fixed. It changes with experience, development, and injury, a property called **plasticity**. Plasticity is greatest in childhood, which helps explain both the sensitive period for language acquisition and children's remarkable ability to recover from brain damage.

## Children who lose a hemisphere

Some children with severe epilepsy or other conditions affecting one hemisphere undergo **hemispherectomy**, surgical removal or disconnection of most of one hemisphere. Remarkably, children who lose their left hemisphere early in life often develop good language, with the right hemisphere taking over language functions. A well-known case studied by **Faraneh Vargha-Khadem** and colleagues, published in 1997, involved a boy known as Alex, who had almost no language until his left hemisphere was removed at age eight; afterward, he began to speak, and by his teens his language had developed substantially, though not to fully normal levels. Such cases show the remarkable plasticity of the young brain, and also its limits: language outcomes are usually better the earlier the surgery, and right-hemisphere language often shows subtle deficits, especially in complex syntax.

## Adult recovery

Adults also recover from aphasia, though usually less completely than children. Recovery involves surviving tissue in the damaged hemisphere taking over functions, and, in some patients, regions in the right hemisphere being recruited. Therapy can promote beneficial reorganization. Research on recovery has practical importance for millions of stroke survivors.

## Genes and language

Language abilities, like many human traits, are influenced by **genes** as well as environment. **Twin studies**, comparing identical twins (who share all their genes) with fraternal twins (who share about half), have shown that individual differences in language development and the risk of developmental language disorder and dyslexia are substantially **heritable**. But heritability does not mean that a single gene causes a trait. As we saw in Lesson II with FOXP2, the genetics of language involves many genes, each with small effects, interacting with each other and with the environment.

## FOXP2 and evolution

The discovery of FOXP2 in the KE family, which we met in Lesson II, led to studies of its evolution. In 2002, **Wolfgang Enard** and colleagues reported that the human version of FOXP2 differs from the chimpanzee version by two amino acid changes, and suggested that these changes might have been favored by natural selection in human evolution, perhaps in connection with speech. Later research found that **Neanderthals** shared the human version, and the evidence for recent selection was questioned. FOXP2 remains an important clue to the biology of speech, but not a simple key to the origin of language.

## Brain and genes together

The picture that emerges is of a language capacity rooted in human biology—in genes that shape brain development, and in brain networks specialized for language—but shaped throughout life by experience, and capable of reorganization in response to injury. This picture is compatible with moderate versions of both nativist and usage-based theories, and suggests that the old opposition of nature and nurture is too simple: nature works through nurture, and nurture through nature.

> **Pause and consider.** Alex began to speak after his left hemisphere was removed at age eight. What does his case suggest about the sensitive period for language?`,
    },
    {
      title: "Reading in the Brain",
      body: `## A recent invention

Speech is ancient, perhaps hundreds of thousands of years old; writing, as we saw in LIN 101, was invented only about five thousand years ago, and until recently most people never learned to read. There has not been enough time for evolution to produce genes or brain regions specifically for reading. Yet skilled readers recognize written words in a fraction of a second, and the brains of all skilled readers, whatever their script, process words in similar regions. How is this possible?

## The visual word form area

Imaging studies have found that reading consistently activates a region on the underside of the left hemisphere, in the **fusiform gyrus** of the occipito-temporal cortex, which the French neuroscientist **Stanislas Dehaene** and his colleague **Laurent Cohen** called the **visual word form area**. This region responds strongly to written words and letter strings in readers of alphabetic, syllabic, and logographic scripts alike, and responds less in people who have not learned to read.

## Pure alexia

Evidence that this region is important for reading came long before imaging. In 1892, the French neurologist **Joseph Jules Dejerine** described a patient who, after a stroke, suddenly lost the ability to read, though he could still write and speak normally. He could not read even what he himself had just written. Dejerine found damage in the left occipital lobe, cutting off visual input to the language areas. This condition is called **pure alexia** or "alexia without agraphia."

## Neuronal recycling

How can the brain have a region for reading if evolution did not design one? In ***Reading in the Brain*** (2009), Dehaene proposed the **neuronal recycling hypothesis**: cultural inventions such as reading and arithmetic take over, or "recycle," brain circuits that evolved for other purposes and are close enough in function to be repurposed. The visual word form area lies within a region that, in non-readers, helps recognize objects and faces. Learning to read, Dehaene argued, retrains part of this region to recognize letters and words. He also suggested that writing systems themselves evolved to fit the brain: letters across the world's scripts tend to use shapes, such as junctions like T, L, and Y, that are common in natural scenes and easily recognized by the visual system.

## Learning to read changes the brain

Studies comparing literate and illiterate adults, including adults who learned to read late, confirm that learning to read changes the brain: it strengthens the visual word form area, enhances responses to spoken language in auditory regions, and may slightly reduce responses to faces in the left hemisphere. Reading is thus a striking example of how culture reshapes the biological brain.

## Dyslexia

**Developmental dyslexia**, a persistent difficulty in learning to read despite normal intelligence and teaching, affects perhaps 5 to 10 percent of children, depending on the definition. Research suggests that most dyslexic children have difficulties with **phonological processing**—representing and manipulating the sounds of words—which makes it hard to learn the relations between letters and sounds. Imaging studies show reduced activity in left-hemisphere reading regions in dyslexic readers. Effective, early instruction in phonological awareness and phonics can significantly help many dyslexic children, and their brain activity can change in response.

> **Pause and consider.** Dehaene argued that reading "recycles" brain circuits evolved for other purposes. What does this suggest about the relation between culture and biology?`,
    },
    {
      title: "Hearing Speech",
      body: `## A hard problem

Understanding speech begins with **speech perception**: turning a continuous, variable acoustic signal into a sequence of words. This is harder than it seems. As we saw in LIN 101, sounds overlap and influence each other (coarticulation), so that the "same" consonant has different acoustic forms before different vowels; speakers differ in voice, accent, and rate; and there are no reliable pauses between words. Yet listeners understand speech effortlessly, at rates of several words per second, even in noisy rooms.

## The motor theory

In the 1950s and 1960s, researchers at **Haskins Laboratories**, led by **Alvin Liberman**, discovered how variable the acoustic signals for speech sounds are, and proposed the **motor theory of speech perception** (1967): listeners perceive speech not by matching sounds directly, but by recovering the **articulatory gestures** the speaker intended to make, which are more consistent than the sounds they produce. The theory proposed that speech perception is a specialized system, closely tied to speech production.

## The McGurk effect

A striking demonstration that perception of speech involves more than hearing came in 1976, when **Harry McGurk** and **John MacDonald** published a study in *Nature* titled "Hearing Lips and Seeing Voices." They showed people a video of a face saying "ga" dubbed with the sound "ba." Most viewers reported hearing "da," a fusion of what they saw and what they heard. When they closed their eyes, they heard "ba." The **McGurk effect** shows that speech perception integrates visual information about the speaker's mouth with auditory information, automatically and without awareness.

## Mirror neurons

In the 1990s, researchers studying monkeys discovered **mirror neurons**: cells in the premotor cortex that fire both when a monkey performs an action and when it watches another perform it. Some researchers suggested that a similar system in humans might underlie speech perception, as the motor theory proposed, and even the evolution of language. Others, including **Gregory Hickok** in *The Myth of Mirror Neurons* (2014), argued that these claims were greatly exaggerated: patients with damage to motor speech areas can often still perceive speech, showing that motor systems are not necessary for perception, though they may assist it under difficult conditions.

## Top-down effects

Listeners also use knowledge of words and context to perceive speech. In the **phonemic restoration** effect, described by **Richard Warren** in 1970, listeners who heard a sentence in which one sound had been replaced by a cough perceived the missing sound as present, and could not tell where the cough had occurred. Expectations shape what we hear.

> **Pause and consider.** In the McGurk effect, what you see changes what you hear. What does this suggest about watching a speaker's face in a noisy room?`,
    },
    {
      title: "Stuttering",
      body: `## Disrupted fluency

**Stuttering** is a disorder of speech fluency in which the flow of speech is disrupted by repetitions of sounds or syllables ("b-b-b-ball"), prolongations ("ssssun"), and blocks, in which no sound comes out. It is common in young children: about 5 percent of children go through a period of stuttering, usually beginning between ages two and five, and most recover, often within a few years. About 1 percent of adults stutter, with men affected more often than women.

## Causes

For centuries, stuttering was attributed to nervousness, emotional disturbance, or poor parenting. Modern research has shown that these are not its causes, though anxiety can make it worse. Twin and family studies show that stuttering is substantially **heritable**, and researchers have identified several genes associated with it. Imaging studies have found differences in the brains of people who stutter, including in the connections between speech planning and motor regions and in the basal ganglia, which help initiate and time movements. Stuttering is now understood as a neurological difference in the timing and control of speech movements.

## Puzzles

Stuttering has puzzling features. Many people who stutter can speak fluently when singing, speaking in unison with others (choral reading), speaking to a rhythm, or speaking while hearing their own voice delayed or altered. These conditions seem to provide external timing cues that bypass the difficulty of initiating speech internally.

## A royal example

The most famous person who stuttered in recent history may be King **George VI** of the United Kingdom (reigned 1936–1952), who struggled with public speaking and worked with the Australian speech therapist **Lionel Logue**. Their story was dramatized in the film *The King's Speech* (2010). The prophet **Moses**, according to Exodus, protested to God that he was "slow of speech, and of a slow tongue" (Exodus 4:10, KJV), and some interpreters have suggested he stuttered, though the text does not say so precisely.

## Treatment and acceptance

Speech therapy can help many people who stutter speak more fluently, through techniques that modify the timing and effort of speech, and can help them manage the anxiety that stuttering often brings. Early intervention in children can be effective. In recent years, many people who stutter have also advocated for acceptance, arguing that listeners should be patient and that stuttering is a difference rather than a defect.

> **Pause and consider.** Many people who stutter can sing fluently. What might this suggest about how speech and singing are controlled?`,
    },
    {
      title: "Language Across the Lifespan",
      body: `## Aging and words

What happens to language as people age? The picture is mixed. **Vocabulary** typically continues to grow well into old age, and older adults often know more words than younger ones. Understanding of sentences in ordinary conversation remains good. But older adults report more **tip-of-the-tongue** experiences, especially for names, and may be slower to retrieve words and to process complex sentences, particularly under time pressure or in noisy conditions, partly because of age-related declines in working memory, processing speed, and hearing.

## The Nun Study

A remarkable study of aging and language involved nearly seven hundred Catholic sisters of the School Sisters of Notre Dame in the United States, who agreed to donate their brains for research. In a study published in 1996, **David Snowdon** and colleagues examined autobiographies the sisters had written when they entered the order, in their early twenties, some sixty years earlier. They measured the **idea density** of the writing—how many ideas were expressed per number of words—and found that sisters whose youthful writing had low idea density were much more likely to have developed Alzheimer's disease late in life. The finding suggested that subtle features of language may reflect, or contribute to, long-term brain health, though its interpretation is debated.

## Dementia and language

In **Alzheimer's disease**, language typically declines gradually, beginning with difficulties finding words and following conversations, and progressing to severe impairment. In some forms of dementia, language is affected first. **Primary progressive aphasia**, described by the neurologist **Marsel Mesulam** in 1982, is a condition in which language gradually deteriorates while other mental abilities remain relatively preserved for years. It has several variants, depending on which brain regions are affected: in one, patients lose the meanings of words, a condition called **semantic dementia**; in another, speech becomes halting and agrammatic.

## Bilingualism and aging

Some studies, notably by **Ellen Bialystok** and colleagues, reported that lifelong bilinguals developed symptoms of dementia several years later, on average, than monolinguals, suggesting that bilingualism might build **cognitive reserve**. Other studies have not found this effect, and the question, like the broader question of a bilingual advantage, remains debated.

## Language and dignity

For people with aphasia and dementia, the loss of language can be isolating and painful. Caregivers can help by speaking simply and patiently, using gestures and pictures, and giving time to respond. Familiar language—prayers, hymns, and songs learned in childhood—often remains accessible long after other language has faded, and many chaplains and families have found that singing a familiar hymn or reciting the Lord's Prayer can reach a person with advanced dementia when ordinary conversation cannot.

> **Pause and consider.** Familiar prayers and songs often remain available to people with dementia. Why might these forms of language be especially durable?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Broca's patient "Tan" (1861)

> Leborgne could understand much but say only "tan."

**Questions**

1. What did Broca conclude from Leborgne's brain?
2. What are the strengths and limits of the lesion method?

## 2. Caramazza and Zurif (1976)

> "The apple that the boy is eating is red" versus "The cat that the dog is chasing is black."

**Questions**

1. Which sentence did patients with Broca's aphasia have trouble understanding, and why?
2. What does this suggest about the role of Broca's area?

## 3. Kutas and Hillyard (1980)

> He spread the warm bread with socks.

**Questions**

1. What is the N400, and what triggers it?
2. How does the P600 differ?

## 4. Bellugi's signers

> Signers with left-hemisphere damage developed sign aphasias; signers with right-hemisphere damage had spatial deficits but intact sign grammar.

**Questions**

1. What do these findings show about the left hemisphere's specialization?
2. Why were they surprising?

## Drawing the threads together

In a paragraph, explain how our understanding of language in the brain has changed from Broca and Wernicke to modern imaging, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "The Language Instinct", author: "Steven Pinker", publisher: "William Morrow", year: "1994", note: "Read chapter 10, \"Language Organs and Grammar Genes.\"" },
    { kind: "book", title: "Reading in the Brain: The New Science of How We Read", author: "Stanislas Dehaene", publisher: "Viking", year: "2009", note: "Read the introduction and chapters 2 and 4." },
    { kind: "book", title: "What the Hands Reveal About the Brain", author: "Howard Poizner, Edward S. Klima, and Ursula Bellugi", publisher: "MIT Press", year: "1987", note: "Read the introduction and conclusion." },
  ],
  media: [
    { kind: "book", title: "The Man Who Mistook His Wife for a Hat", author: "Oliver Sacks", publisher: "Summit Books", year: "1985", note: "Read \"The President's Speech,\" on aphasia and prosody." },
    { kind: "book", title: "Who's in Charge? Free Will and the Science of the Brain", author: "Michael S. Gazzaniga", publisher: "Ecco", year: "2011", note: "Read the chapter on the interpreter." },
  ],
  questions: [
    {
      prompt: "What did Broca find in the brain of his patient \"Tan\"?",
      choices: [
        "Damage to the right hemisphere",
        "A lesion in the left frontal lobe",
        "No damage",
        "Damage to the corpus callosum",
      ],
      answer: 1,
      explanation: "The region is now called Broca's area.",
    },
    {
      prompt: "What characterizes Wernicke's aphasia?",
      choices: [
        "Slow, effortful speech with good comprehension",
        "Fluent but often meaningless speech with impaired comprehension",
        "Loss of reading only",
        "Inability to repeat with good speech",
      ],
      answer: 1,
      explanation: "Speech may include neologisms and jargon.",
    },
    {
      prompt: "What disorder did Wernicke's model predict from damage to the connection between language areas?",
      choices: ["Broca's aphasia", "Conduction aphasia, impairing repetition", "Dyslexia", "Global aphasia"],
      answer: 1,
      explanation: "Its discovery confirmed the model.",
    },
    {
      prompt: "What did Caramazza and Zurif (1976) show about Broca's aphasia?",
      choices: [
        "That comprehension is perfect",
        "That patients struggled with sentences whose meaning depended on syntax alone",
        "That patients cannot speak at all",
        "That the right hemisphere controls syntax",
      ],
      answer: 1,
      explanation: "This suggested a syntactic deficit.",
    },
    {
      prompt: "In split-brain patients, what happened when an object was shown only to the right hemisphere?",
      choices: [
        "They named it easily",
        "They could not name it but could pick it out with the left hand",
        "They could not see it",
        "They described it in detail",
      ],
      answer: 1,
      explanation: "Language was in the left hemisphere.",
    },
    {
      prompt: "What is the N400?",
      choices: [
        "A brain region",
        "A negative brain wave about 400 ms after a semantically unexpected word",
        "A type of aphasia",
        "A gene",
      ],
      answer: 1,
      explanation: "Kutas and Hillyard, 1980.",
    },
    {
      prompt: "What does the dual-stream model (Hickok and Poeppel, 2007) propose?",
      choices: [
        "That language is in the right hemisphere",
        "A ventral stream mapping sound to meaning and a dorsal stream mapping sound to articulation",
        "That reading and speech are identical",
        "That there are two languages in every brain",
      ],
      answer: 1,
      explanation: "It updates the classical model.",
    },
    {
      prompt: "What did Bellugi's studies of deaf signers show?",
      choices: [
        "That sign language is in the right hemisphere",
        "That left-hemisphere damage causes sign aphasia, showing the left hemisphere is specialized for language in any modality",
        "That signers do not get aphasia",
        "That sign language is not a language",
      ],
      answer: 1,
      explanation: "Right-hemisphere damage spared sign grammar.",
    },
    {
      prompt: "What is the visual word form area?",
      choices: [
        "A region for faces only",
        "A left occipito-temporal region that responds strongly to written words in skilled readers",
        "Broca's area",
        "A region found only in children",
      ],
      answer: 1,
      explanation: "Dehaene's neuronal recycling hypothesis explains its origin.",
    },
    {
      prompt: "What does the neuronal recycling hypothesis claim?",
      choices: [
        "That neurons regenerate",
        "That cultural inventions like reading repurpose brain circuits that evolved for other functions",
        "That reading is innate",
        "That the brain does not change",
      ],
      answer: 1,
      explanation: "Proposed by Stanislas Dehaene.",
    },
  ],
  reflection:
    "From Broca to modern imaging, research has shown that language depends on specialized brain networks, mostly in the left hemisphere, yet the brain is also highly plastic. In 500–800 words, explain what the evidence of aphasia, split-brain patients, sign languages, and reading reveals about how language is organized in the brain, and what it suggests about the nature–nurture debate.",
};
