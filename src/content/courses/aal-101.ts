import type { CourseContent } from "@/lib/schema";

export const aal101: CourseContent = {
  overview: `African American literature begins in a paradox: it was written by people whom the law forbade to read. Its first authors had to prove, before they could say anything else, that they were authors at all—that a person held as property could think, feel, and write. Out of that demand came some of the most powerful writing in the English language.

This course reads the founding texts of the tradition: the neoclassical poems of Phillis Wheatley; the *Narrative* of Frederick Douglass, which made a fugitive slave the most famous orator in America; Harriet Jacobs's *Incidents in the Life of a Slave Girl*, long dismissed as fiction and now recognized as a masterpiece; and W. E. B. Du Bois's *The Souls of Black Folk*, which gave the twentieth century its vocabulary for race. We close by tracing how these writers set the questions—of voice, literacy, freedom, and the "mask"—that every later writer in the tradition would answer.`,
  objectives: [
    "Situate the founding texts of African American literature in the history of slavery, abolition, and Reconstruction.",
    "Analyze the conventions of the slave narrative: authenticating documents, the literacy scene, and the journey from bondage to freedom.",
    "Explain how Douglass and Jacobs adapt their narratives to different audiences and arguments.",
    "Define and apply Du Bois's concepts of the veil and double consciousness.",
    "Trace recurring themes and forms across the tradition, from Wheatley to the twentieth century.",
  ],
  lessons: [
    {
      title: "Phillis Wheatley and the Right to Write",
      summary: "The first book of poems by an African American, and the trial that preceded it.",
      lecture: `## A child sold in Boston

In 1761 a slave ship called the *Phillis* brought a girl of about seven from West Africa to Boston. She was bought by the merchant John Wheatley and named for the vessel that had carried her. Within sixteen months, his household reported, she could read the most difficult passages of the Bible; within a few years she was reading Latin and writing poems modeled on Alexander Pope.

In 1773 her *Poems on Various Subjects, Religious and Moral* was published in London—the first book of poetry by an African American. An earlier proposal to print it in Boston had failed to find subscribers; the London edition was made possible by the patronage of Selina Hastings, Countess of Huntingdon.

## The attestation

The book opens with a remarkable document. Eighteen of Boston's most prominent men, including the governor of Massachusetts and John Hancock, signed an attestation, addressed "To the Publick," assuring the world that the poems "were (as we verily believe) written by Phillis, a young Negro Girl, who was but a few Years since, brought an uncultivated Barbarian from Africa." Henry Louis Gates Jr. has argued that Wheatley may have been examined by these men before they would sign. Whether or not such an examination occurred, the attestation shows what was at stake: a Black woman's authorship had to be **certified by white witnesses** before her poems could be read.

This is the first instance of a pattern that runs through the early tradition. Douglass's *Narrative* and Jacobs's *Incidents* will also arrive surrounded by prefaces and letters vouching for their authenticity. Scholars call these **authenticating documents**.

## "On Being Brought from Africa to America"

Wheatley's best-known poem is eight lines of heroic couplets:

> 'Twas mercy brought me from my Pagan land,
> Taught my benighted soul to understand
> That there's a God, that there's a Saviour too:
> Once I redemption neither sought nor knew.
> Some view our sable race with scornful eye,
> "Their colour is a diabolic die."
> Remember, Christians, Negros, black as Cain,
> May be refin'd, and join th' angelic train.

Many twentieth-century readers found the poem embarrassing: it seems to thank slavery for bringing her to Christianity. But read the turn at line five. The speaker quotes the racist slur and then rebukes it with an imperative addressed to "Christians"—her white readers. The final couplet uses their own theology against them: if all may be "refin'd," the claim of inherent inferiority collapses. The poem's deference is the vehicle of its argument.

## Jefferson's verdict

Not everyone was persuaded. In *Notes on the State of Virginia* (1785), Thomas Jefferson wrote that "Religion indeed has produced a Phyllis Whately; but it could not produce a poet. The compositions published under her name are below the dignity of criticism." The dismissal itself proves Wheatley's importance: her book had become evidence in the argument over whether Africans were fully human, and Jefferson felt obliged to answer it.

Wheatley was freed shortly after her book appeared. She married, lost two children in infancy, and died in poverty in Boston in 1784, about thirty-one years old, with a second volume of poems unpublished.`,
      readings: [
        { kind: "edition", title: "Poems on Various Subjects, Religious and Moral", author: "Phillis Wheatley", publisher: "Project Gutenberg (1773 text)", url: "https://www.gutenberg.org/ebooks/409", note: "Read the attestation, “On Being Brought from Africa to America,” “To the University of Cambridge, in New-England,” and “To the Right Honourable William, Earl of Dartmouth.”" },
        { kind: "website", title: "On Being Brought from Africa to America", author: "Phillis Wheatley", publisher: "Representative Poetry Online", url: "https://rpo.library.utoronto.ca/poems/being-brought-africa-america" },
        { kind: "book", title: "The Trials of Phillis Wheatley", author: "Henry Louis Gates Jr.", publisher: "Basic Civitas Books", year: "2003", note: "A short book on Wheatley's reception from Jefferson to the present." },
      ],
      media: [
        { kind: "website", title: "Poems on Various Subjects (full text)", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/409", note: "The complete 1773 volume, free in several formats." },
      ],
      questions: [
        {
          prompt: "Why does Wheatley's book open with an attestation signed by prominent Bostonians?",
          choices: ["It was a legal requirement for all colonial books", "Readers doubted that an enslaved African woman could have written the poems", "The signers were her co-authors", "It was a dedication to her patrons"],
          answer: 1,
          explanation: "The attestation vouched for her authorship—the first of many authenticating documents in African American literature.",
        },
        {
          prompt: "Where does “On Being Brought from Africa to America” turn?",
          choices: ["In the first line", "At line five, where the speaker quotes the scornful view of “our sable race” and then rebukes it", "In the title only", "It does not turn"],
          answer: 1,
          explanation: "The second half quotes the racist charge and answers it with a direct imperative to “Christians.”",
        },
        {
          prompt: "What did Thomas Jefferson write of Wheatley in Notes on the State of Virginia?",
          choices: ["That she was the finest poet in America", "That religion had produced her, “but it could not produce a poet”", "That her poems should be taught in schools", "He never mentioned her"],
          answer: 1,
          explanation: "Jefferson dismissed her work as “below the dignity of criticism,” showing that her book had entered the debate over African humanity.",
        },
        {
          prompt: "Why was Wheatley's book published in London rather than Boston?",
          choices: ["London printers were cheaper", "A proposed Boston edition failed to find subscribers, and a London patron supported it", "She had moved permanently to England", "The poems were written in Latin"],
          answer: 1,
          explanation: "Boston subscribers could not be found; the book was published in London with the support of the Countess of Huntingdon.",
        },
      ],
      reflection: "Read “To the Right Honourable William, Earl of Dartmouth.” In a paragraph, show how Wheatley connects her own experience of being “snatch'd from Afric's fancy'd happy seat” to the American colonies' demand for liberty.",
    },
    {
      title: "Frederick Douglass: The Narrative",
      summary: "Literacy, violence, and selfhood in the most famous slave narrative.",
      lecture: `## The book that made a name

Frederick Douglass was born into slavery on Maryland's Eastern Shore around 1818. He escaped in 1838, settled in New Bedford, Massachusetts, and within three years was lecturing for the American Anti-Slavery Society. He was so eloquent that audiences began to doubt he had ever been a slave. His answer was a book: *Narrative of the Life of Frederick Douglass, an American Slave, Written by Himself* (1845).

The title's last three words are an argument. Like Wheatley's, Douglass's book arrives with authenticating documents—a preface by William Lloyd Garrison and a letter from Wendell Phillips—but it insists that the voice that follows is his own. Publishing it was dangerous: by naming places and owners, Douglass exposed himself to recapture, and he soon left for a speaking tour of Britain, where friends purchased his legal freedom in 1846.

## The pathway from slavery to freedom

The emotional center of the *Narrative's* first half is the scene of literacy. Sent to Baltimore as a boy, Douglass is taught the alphabet by his new mistress, Sophia Auld, until her husband forbids it. Teaching a slave to read, Hugh Auld says, "would forever unfit him to be a slave." Douglass overhears, and the prohibition becomes a revelation:

> From that moment, I understood the pathway from slavery to freedom.

He continues in secret, trading bread to white boys in the street for lessons, and buys a copy of *The Columbian Orator*, a schoolbook of speeches, whose dialogues on liberty give him words for what he feels. Literacy in the *Narrative* is never merely a skill; it is the means by which a person becomes able to understand, and therefore to resist, his condition.

## "How a slave was made a man"

The second turning point is physical. Hired out to Edward Covey, a notorious "slave-breaker," the sixteen-year-old Douglass is worked and beaten until, he writes, he was "broken in body, soul, and spirit." Then one morning he fights back, and after two hours Covey gives up. Douglass introduces the episode with a famous chiasmus:

> You have seen how a man was made a slave; you shall see how a slave was made a man.

The sentence's mirrored structure enacts the reversal it describes. Douglass remained legally a slave for four more years, but he writes that after the fight he was never again a slave "in fact."

## Narrative as argument

Douglass writes for Northern readers who may oppose slavery in principle but have never confronted it. He therefore controls his effects with care: understatement alternates with irony, as when he notes that slaveholders who were most pious were the cruelest, and the book ends with an appendix distinguishing "the Christianity of this land" from "the Christianity of Christ." He withholds the details of his escape so as not to close the route to others.

## The Fourth of July

Seven years later, in Rochester, New York, Douglass delivered his most famous speech, "What to the Slave Is the Fourth of July?" (July 5, 1852). Its central question is posed to an audience celebrating American independence:

> What, to the American slave, is your 4th of July? I answer: a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim.

Yet the speech ends in hope, grounded in the principles of the Declaration of Independence. Douglass's genius is to hold the nation to its own founding words.`,
      readings: [
        { kind: "edition", title: "Narrative of the Life of Frederick Douglass, an American Slave", author: "Frederick Douglass", publisher: "Project Gutenberg (1845 text)", url: "https://www.gutenberg.org/ebooks/23", note: "Read the whole: the prefaces, chapters I–XI, and the Appendix. Pay special attention to chapters VI–VII (literacy) and X (Covey)." },
        { kind: "book", title: "Frederick Douglass: Prophet of Freedom", author: "David W. Blight", publisher: "Simon & Schuster", year: "2018", note: "Pulitzer Prize–winning biography. Read chapters 1–8 for the years of slavery and the writing of the Narrative." },
      ],
      media: [
        { kind: "video", title: "Frederick Douglass's descendants read his Fourth of July speech", publisher: "NPR", year: "2020", url: "https://www.npr.org/2020/07/03/884832594/video-frederick-douglass-descendants-read-his-fourth-of-july-speech", note: "Five young descendants of Douglass read and respond to excerpts of “What to the Slave Is the Fourth of July?” (about 7 minutes)." },
        { kind: "website", title: "Narrative of the Life of Frederick Douglass (electronic edition)", publisher: "Documenting the American South, University of North Carolina", url: "https://docsouth.unc.edu/neh/douglass/douglass.html", note: "A scholarly digital edition with page images of the original." },
      ],
      questions: [
        {
          prompt: "What is the significance of the words “Written by Himself” in Douglass's title?",
          choices: ["They distinguish the book from a novel", "They assert his authorship against those who doubted a former slave could write so well", "They were required by the publisher", "They indicate the book had no editor or prefaces"],
          answer: 1,
          explanation: "Audiences doubted Douglass had been a slave; the title claims the voice and the text as his own, even amid authenticating prefaces.",
        },
        {
          prompt: "What does Douglass learn from Hugh Auld's prohibition on teaching him to read?",
          choices: ["That reading is unimportant", "That literacy is “the pathway from slavery to freedom”", "That Sophia Auld was his enemy", "That he should learn Latin instead"],
          answer: 1,
          explanation: "Auld's claim that reading would “unfit him to be a slave” reveals to Douglass exactly why he must learn.",
        },
        {
          prompt: "“You have seen how a man was made a slave; you shall see how a slave was made a man.” The rhetorical figure here is:",
          choices: ["Alliteration", "Chiasmus", "Apostrophe", "Hyperbole"],
          answer: 1,
          explanation: "Chiasmus reverses the order of terms (man–slave / slave–man), mirroring the reversal the episode describes.",
        },
        {
          prompt: "Why does Douglass withhold the details of his escape?",
          choices: ["He did not remember them", "To avoid closing the route for others still enslaved", "His publisher forbade it", "The escape was invented"],
          answer: 1,
          explanation: "He explains that revealing his methods would help slaveholders block the path for others.",
        },
        {
          prompt: "On what date did Douglass deliver “What to the Slave Is the Fourth of July?”",
          choices: ["July 4, 1776", "July 5, 1852", "January 1, 1863", "July 4, 1845"],
          answer: 1,
          explanation: "He spoke in Rochester, New York, on July 5, 1852.",
        },
      ],
      reflection: "Douglass appends a distinction between “the Christianity of this land” and “the Christianity of Christ.” In 300 words, explain how this distinction shapes the argument of the whole Narrative.",
    },
    {
      title: "Harriet Jacobs: Incidents in the Life of a Slave Girl",
      summary: "A woman's slave narrative, its address to Northern women, and the garret where she hid for seven years.",
      lecture: `## A book doubted for a century

*Incidents in the Life of a Slave Girl, Written by Herself* appeared in 1861 under the pseudonym "Linda Brent," with an introduction by the abolitionist writer Lydia Maria Child. For more than a century many historians assumed it was a novel, perhaps written by Child herself. In 1981 the scholar Jean Fagan Yellin published letters proving that Harriet Jacobs (c. 1813–1897) had written it and that its events were true; her annotated edition of 1987 changed the study of the slave narrative.

## A different story

Douglass's *Narrative* is a story of a man's physical struggle toward freedom. Jacobs tells a story that the conventions of nineteenth-century print made nearly unspeakable: the **sexual exploitation** of enslaved women. From adolescence "Linda" is pursued by her owner, Dr. Flint (in life, Dr. James Norcom of Edenton, North Carolina). To protect herself she enters a relationship with another white man, by whom she has two children—a choice she knows her readers will judge.

Jacobs addresses those readers directly. Her audience is Northern white women, and she asks them not to apply to her the standards of their own protected lives:

> I feel that the slave woman ought not to be judged by the same standard as others.

The book is thus an argument about moral judgment as well as about slavery. It turns the conventions of the **sentimental novel**—the genre of virtue tested and rewarded—against a society that made such virtue impossible for enslaved women.

## The loophole of retreat

The most extraordinary section of *Incidents* is the chapter titled "The Loophole of Retreat." To escape Flint while remaining near her children, Linda hides in a crawlspace above her grandmother's shed—nine feet long, seven feet wide, and three feet high at its tallest point. She remains there for **nearly seven years**, watching her children through a hole she bores in the wall.

The garret is both prison and refuge. Critics have read it as an image of the enslaved woman's situation: confined, invisible, yet watching and resisting. From inside it Linda writes letters, postmarked from New York by friends, that convince Flint she has fled north.

## An ending without a wedding

Linda finally escapes to the North in 1842, but the Fugitive Slave Act of 1850 makes even New York unsafe. Her freedom is ultimately purchased by her employer—a transaction she finds humiliating. The book's ending refuses the sentimental novel's conclusion:

> Reader, my story ends with freedom; not in the usual way, with marriage.

## Douglass and Jacobs

Read together, the two narratives show how the slave narrative could take different shapes for different purposes. Douglass emphasizes self-making, literacy, and physical resistance; Jacobs, the family, the community that hides her, and the particular vulnerability of women. Both insist on writing "by himself" and "by herself"—on the authority of their own voices.`,
      readings: [
        { kind: "edition", title: "Incidents in the Life of a Slave Girl, Written by Herself", author: "Harriet A. Jacobs", publisher: "Project Gutenberg (1861 text)", url: "https://www.gutenberg.org/ebooks/11030", note: "Read the Preface, Child's Introduction, and chapters I–XXI, including “The Loophole of Retreat,” and the final chapter." },
        { kind: "book", title: "Incidents in the Life of a Slave Girl (enlarged edition)", author: "Harriet A. Jacobs, ed. Jean Fagan Yellin", publisher: "Harvard University Press", year: "2009", note: "The authoritative annotated edition by the scholar who established Jacobs's authorship." },
        { kind: "book", title: "Harriet Jacobs: A Life", author: "Jean Fagan Yellin", publisher: "Basic Civitas Books", year: "2004" },
      ],
      media: [
        { kind: "website", title: "Incidents in the Life of a Slave Girl (full text)", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/11030" },
      ],
      questions: [
        {
          prompt: "Why was Incidents long considered fiction?",
          choices: ["It was published as a novel by Lydia Maria Child", "It used a pseudonym and novelistic conventions, and its authorship was not documented until 1981", "Its events were set in a fictional country", "Jacobs denied writing it"],
          answer: 1,
          explanation: "Jean Fagan Yellin's research in the late 1970s and 1980s established Jacobs's authorship and the truth of the narrative.",
        },
        {
          prompt: "Whom does Jacobs chiefly address as her readers?",
          choices: ["Southern slaveholders", "Northern white women", "Enslaved people", "British abolitionists"],
          answer: 1,
          explanation: "She appeals directly to Northern women, asking them not to judge an enslaved woman by the standards of their own protected lives.",
        },
        {
          prompt: "What is the “loophole of retreat”?",
          choices: ["A legal loophole in the Fugitive Slave Act", "The tiny garret over her grandmother's shed where Linda hid for nearly seven years", "A ship on which she escaped", "Her room in New York"],
          answer: 1,
          explanation: "The crawlspace—three feet high at its tallest—was both prison and refuge, from which she watched her children.",
        },
        {
          prompt: "“Reader, my story ends with freedom; not in the usual way, with marriage.” This sentence:",
          choices: ["Follows the conventions of the sentimental novel", "Deliberately refuses the conventional ending of the sentimental novel", "Announces a sequel", "Is addressed to Dr. Flint"],
          answer: 1,
          explanation: "Jacobs knowingly departs from the marriage plot that concluded sentimental fiction.",
        },
      ],
      reflection: "Compare the literacy scene in Douglass with Linda's letters written from the garret. What does writing make possible for each narrator?",
    },
    {
      title: "W. E. B. Du Bois: The Souls of Black Folk",
      summary: "The veil, double consciousness, the color line, and the Sorrow Songs.",
      lecture: `## The problem of the twentieth century

William Edward Burghardt Du Bois (1868–1963) was born in Great Barrington, Massachusetts, studied at Fisk University, Harvard, and the University of Berlin, and in 1895 became the first African American to earn a Ph.D. from Harvard. In 1903 he gathered essays written over several years into *The Souls of Black Folk*. Its "Forethought" contains one of the most quoted sentences in American writing:

> The problem of the Twentieth Century is the problem of the color-line.

## The veil and double consciousness

The first essay, "Of Our Spiritual Strivings," introduces two linked ideas. The **veil** is the barrier of race that separates Black and white Americans. Du Bois recalls the moment in childhood when a white girl refused his visiting card, and he understood that he was "shut out from their world by a vast veil."

Living behind the veil produces what he calls **double consciousness**:

> It is a peculiar sensation, this double-consciousness, this sense of always looking at one's self through the eyes of others, of measuring one's soul by the tape of a world that looks on in amused contempt and pity. One ever feels his two-ness,—an American, a Negro; two souls, two thoughts, two unreconciled strivings; two warring ideals in one dark body.

The goal, Du Bois writes, is not to abandon either self but to merge them "into a better and truer self," to be "both a Negro and an American."

## Against Booker T. Washington

The third essay, "Of Mr. Booker T. Washington and Others," challenged the most powerful Black leader of the day. Washington's "Atlanta Compromise" speech of 1895 had urged Black Southerners to concentrate on industrial education and economic progress while accepting, for the time, the loss of political rights. Du Bois honored Washington's achievements but argued that the right to vote, civic equality, and the education of youth according to ability—including higher education for a "Talented Tenth"—could not be surrendered. The disagreement shaped decades of debate; in 1909 Du Bois helped found the NAACP.

## A book of many forms

*Souls* is a hybrid: history ("Of the Dawn of Freedom," on the Freedmen's Bureau), sociology, autobiography, fiction ("Of the Coming of John"), and elegy ("Of the Passing of the First-Born," on the death of his infant son). Each chapter opens with two epigraphs: lines of European or American poetry, and a few bars of musical notation from a spiritual, without words. The pairing makes an argument—that the songs of the enslaved belong beside the canon of Western poetry.

## The Sorrow Songs

The final chapter, "The Sorrow Songs," explains those bars of music. Du Bois calls the spirituals "the most beautiful expression of human experience born this side the seas," and "the singular spiritual heritage of the nation." In them he hears the history the book has traced: sorrow, but also faith that "sometime, somewhere, men will judge men by their souls and not by their skins."`,
      readings: [
        { kind: "edition", title: "The Souls of Black Folk", author: "W. E. B. Du Bois", publisher: "Project Gutenberg (1903 text)", url: "https://www.gutenberg.org/ebooks/408", note: "Read the Forethought and chapters I, III, V, XI, XIII, and XIV (“The Sorrow Songs”)." },
        { kind: "book", title: "W. E. B. Du Bois: Biography of a Race, 1868–1919", author: "David Levering Lewis", publisher: "Henry Holt", year: "1993", note: "The first volume of the Pulitzer Prize–winning biography; chapters on the writing of Souls." },
      ],
      media: [
        { kind: "website", title: "The Souls of Black Folk (full text)", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/408" },
      ],
      questions: [
        {
          prompt: "According to the Forethought, what is “the problem of the Twentieth Century”?",
          choices: ["Industrialization", "The color-line", "Immigration", "The decline of religion"],
          answer: 1,
          explanation: "“The problem of the Twentieth Century is the problem of the color-line.”",
        },
        {
          prompt: "Du Bois's “double consciousness” describes:",
          choices: ["Being bilingual", "The sense of always seeing oneself through the eyes of a contemptuous world, and of being both American and Black", "A psychiatric disorder", "The division between North and South"],
          answer: 1,
          explanation: "It is “this sense of always looking at one's self through the eyes of others,” a “two-ness” of warring ideals.",
        },
        {
          prompt: "What was Du Bois's chief objection to Booker T. Washington's program?",
          choices: ["Washington favored higher education too much", "It asked Black Americans to give up, for the time, political rights, civic equality, and higher education", "Washington opposed economic progress", "Washington wanted to emigrate to Africa"],
          answer: 1,
          explanation: "Du Bois honored Washington's work but refused to surrender the vote, civil rights, and the education of the “Talented Tenth.”",
        },
        {
          prompt: "What do the paired epigraphs at the head of each chapter suggest?",
          choices: ["That Du Bois preferred music to poetry", "That the spirituals deserve a place beside the canon of Western poetry", "That the chapters are hymns", "That the book was meant to be sung"],
          answer: 1,
          explanation: "By setting bars of the spirituals beside lines of European poetry, Du Bois claims equal dignity for the Sorrow Songs.",
        },
      ],
      reflection: "Choose one chapter of Souls other than the first. Write a paragraph explaining how the veil or double consciousness shapes that chapter.",
    },
    {
      title: "The Mask and the Tradition",
      summary: "Dunbar, the Harlem Renaissance, and how the founding texts speak to later writers.",
      lecture: `## A tradition that talks to itself

A literary tradition is not merely a list of authors who share a background. It is a set of texts that **answer one another**—that revise, echo, and argue with what came before. Henry Louis Gates Jr. calls this practice, borrowed from African American vernacular, **Signifyin(g)**: repetition with a difference. In this final lesson we trace a few of the threads that run from the founding texts into the twentieth century.

## The mask

In 1895 Paul Laurence Dunbar (1872–1906), the son of formerly enslaved parents in Dayton, Ohio, published a short poem in the form of a rondeau:

> We wear the mask that grins and lies,
> It hides our cheeks and shades our eyes,—
> This debt we pay to human guile;
> With torn and bleeding hearts we smile,
> And mouth with myriad subtleties.

The mask is a figure for the public face that the oppressed must present to power—the smile that conceals. It condenses something present in all our earlier texts: Wheatley's deference that carries an argument, Douglass's controlled irony, Jacobs's careful self-presentation to judgmental readers, Du Bois's two selves. Dunbar's own career was divided this way: celebrated for comic poems in dialect, he longed to be read for his poems in standard English, like this one.

## Lift every voice

In 1900 James Weldon Johnson wrote the words, and his brother J. Rosamond Johnson the music, of "Lift Every Voice and Sing," first performed by schoolchildren in Jacksonville, Florida, for Lincoln's birthday. It became known as the Black national anthem. Like Du Bois's Sorrow Songs, it binds memory of suffering to hope: "Sing a song full of the faith that the dark past has taught us."

## The Harlem Renaissance

In the 1920s, a generation of writers centered in Harlem—Langston Hughes, Zora Neale Hurston, Countee Cullen, Claude McKay, Jean Toomer—declared a "New Negro," in the title of Alain Locke's anthology of 1925. They took up the inheritance of the founding texts in new forms. Hughes's first great poem, "The Negro Speaks of Rivers" (1921), dedicated to Du Bois, answers *Souls* by tracing a Black soul "deep like the rivers" from the Euphrates and the Nile to the Mississippi. Hurston's *Their Eyes Were Watching God* (1937) gives the voice of the narrative to a woman, as Jacobs had, and makes Black Southern speech the language of art. These works are the subject of AAL 201.

## Literacy and voice, again

Return finally to the scene that runs through the tradition: the moment of learning to read and write. Douglass trades bread for letters; Jacobs writes from the garret; Du Bois carries his learning behind the veil. In the twentieth century the scene recurs in Richard Wright's *Black Boy*, in Malcolm X's account of copying the dictionary in prison, and in Toni Morrison's *Beloved*, where literacy can be used to dehumanize as well as to free. To read African American literature is to watch writers continually reclaim the authority that was first denied them: the right to say "written by myself."`,
      readings: [
        { kind: "website", title: "We Wear the Mask", author: "Paul Laurence Dunbar", publisher: "Poetry Foundation", url: "https://www.poetryfoundation.org/poems/44203/we-wear-the-mask", note: "Read aloud; notice how the rondeau's refrain returns." },
        { kind: "book", title: "The Norton Anthology of African American Literature", author: "Henry Louis Gates Jr. and Valerie A. Smith, eds.", publisher: "W. W. Norton", year: "3rd ed., 2014", note: "Read the period introductions to “The Literature of Slavery and Freedom” and “Harlem Renaissance,” and the selections from Dunbar, J. W. Johnson, and Hughes." },
        { kind: "book", title: "The Signifying Monkey: A Theory of African American Literary Criticism", author: "Henry Louis Gates Jr.", publisher: "Oxford University Press", year: "1988", note: "Introduction and Chapter 4, “The Trope of the Talking Book.” Optional." },
      ],
      media: [
        { kind: "website", title: "Paul Laurence Dunbar", publisher: "Poetry Foundation", url: "https://www.poetryfoundation.org/poems/44203/we-wear-the-mask", note: "The poem page links to Dunbar's biography and further poems." },
        { kind: "video", title: "Frederick Douglass's descendants read his Fourth of July speech", publisher: "NPR", url: "https://www.npr.org/2020/07/03/884832594/video-frederick-douglass-descendants-read-his-fourth-of-july-speech", note: "A living tradition: young readers respond to Douglass in their own words." },
      ],
      questions: [
        {
          prompt: "Henry Louis Gates Jr.'s term “Signifyin(g)” describes:",
          choices: ["The use of footnotes", "Repetition with a difference: texts revising and answering earlier texts", "The translation of African languages", "Biographical criticism"],
          answer: 1,
          explanation: "Gates adapts a vernacular practice to describe how African American texts echo and revise one another.",
        },
        {
          prompt: "In Dunbar's poem, the “mask” is a figure for:",
          choices: ["Theater costume", "The public face that conceals suffering from an oppressive world", "A religious ritual", "Disguise during escape"],
          answer: 1,
          explanation: "The mask “grins and lies,” hiding “torn and bleeding hearts” from those who have power.",
        },
        {
          prompt: "Langston Hughes dedicated “The Negro Speaks of Rivers” to:",
          choices: ["Frederick Douglass", "W. E. B. Du Bois", "Phillis Wheatley", "Booker T. Washington"],
          answer: 1,
          explanation: "The poem, published in 1921, was dedicated to Du Bois.",
        },
        {
          prompt: "Which recurring scene links Douglass, Jacobs, and later writers such as Richard Wright?",
          choices: ["A shipwreck", "The scene of learning to read and write", "A courtroom trial", "A wedding"],
          answer: 1,
          explanation: "Literacy—and the authority to write one's own story—recurs throughout the tradition.",
        },
      ],
      reflection: "Write a 400-word essay tracing one theme—literacy, the mask, authentication, or faith—from Wheatley or Douglass to Du Bois or Dunbar.",
    },
  ],
  library: [
    {
      heading: "Primary Texts",
      items: [
        { kind: "edition", title: "Narrative of the Life of Frederick Douglass, an American Slave", author: "Frederick Douglass", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/23", note: "Free text of the 1845 first edition." },
        { kind: "book", title: "Narrative of the Life of Frederick Douglass (Norton Critical Edition)", author: "Frederick Douglass, ed. William L. Andrews and William S. McFeely", publisher: "W. W. Norton", year: "2nd ed., 2017", note: "Annotated, with contexts and criticism." },
        { kind: "edition", title: "Incidents in the Life of a Slave Girl", author: "Harriet A. Jacobs", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/11030" },
        { kind: "edition", title: "The Souls of Black Folk", author: "W. E. B. Du Bois", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/408" },
        { kind: "edition", title: "Poems on Various Subjects, Religious and Moral", author: "Phillis Wheatley", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/409" },
        { kind: "book", title: "My Bondage and My Freedom", author: "Frederick Douglass", publisher: "Miller, Orton & Mulligan", year: "1855", note: "Douglass's second, expanded autobiography; studied in AAL 401." },
      ],
    },
    {
      heading: "Anthologies",
      items: [
        { kind: "book", title: "The Norton Anthology of African American Literature", author: "Henry Louis Gates Jr. and Valerie A. Smith, eds.", publisher: "W. W. Norton", year: "3rd ed., 2014", note: "The standard anthology, in two volumes." },
        { kind: "book", title: "The Classic Slave Narratives", author: "Henry Louis Gates Jr., ed.", publisher: "Signet Classics", year: "1987", note: "Equiano, Mary Prince, Douglass, and Jacobs in one volume." },
      ],
    },
    {
      heading: "Biography and Scholarship",
      items: [
        { kind: "book", title: "Frederick Douglass: Prophet of Freedom", author: "David W. Blight", publisher: "Simon & Schuster", year: "2018", note: "Winner of the Pulitzer Prize for History." },
        { kind: "book", title: "Harriet Jacobs: A Life", author: "Jean Fagan Yellin", publisher: "Basic Civitas Books", year: "2004" },
        { kind: "book", title: "W. E. B. Du Bois: Biography of a Race, 1868–1919", author: "David Levering Lewis", publisher: "Henry Holt", year: "1993", note: "Winner of the Pulitzer Prize for Biography." },
        { kind: "book", title: "The Trials of Phillis Wheatley", author: "Henry Louis Gates Jr.", publisher: "Basic Civitas Books", year: "2003" },
        { kind: "book", title: "The Signifying Monkey", author: "Henry Louis Gates Jr.", publisher: "Oxford University Press", year: "1988" },
        { kind: "book", title: "To Tell a Free Story: The First Century of Afro-American Autobiography, 1760–1865", author: "William L. Andrews", publisher: "University of Illinois Press", year: "1986", note: "The foundational study of the slave narrative as literature." },
      ],
    },
    {
      heading: "Listening and Viewing",
      items: [
        { kind: "video", title: "Frederick Douglass's descendants read his Fourth of July speech", publisher: "NPR", year: "2020", url: "https://www.npr.org/2020/07/03/884832594/video-frederick-douglass-descendants-read-his-fourth-of-july-speech" },
      ],
    },
    {
      heading: "Online Archives",
      items: [
        { kind: "website", title: "Documenting the American South: North American Slave Narratives", publisher: "University of North Carolina at Chapel Hill", url: "https://docsouth.unc.edu/neh/douglass/douglass.html", note: "Scholarly digital editions of slave narratives, beginning with Douglass." },
        { kind: "website", title: "Project Gutenberg", url: "https://www.gutenberg.org", note: "Free editions of the public-domain texts in this course." },
        { kind: "website", title: "Poetry Foundation", url: "https://www.poetryfoundation.org", note: "Poems by Wheatley, Dunbar, Johnson, Hughes, and their successors." },
      ],
    },
  ],
};
