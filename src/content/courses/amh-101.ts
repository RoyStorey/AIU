import type { CourseContent } from "@/lib/schema";

const oyc = (n: number) => `https://oyc.yale.edu/history/hist-116/lecture-${n}`;

export const amh101: CourseContent = {
  overview: `In 1763 the American colonists were among the most loyal subjects of the British Crown, proud of a victorious empire and of their rights as Englishmen. Thirteen years later they declared independence; twenty-four years later they had written a constitution that still governs the United States. How did loyal subjects become revolutionaries, and revolutionaries become founders of a republic?

This course follows that transformation through the documents the revolutionaries themselves wrote and read: pamphlets, resolutions, letters, the Declaration of Independence, and *The Federalist*. Alongside them we read the great historians of the Revolution—Bernard Bailyn on its ideas, Gordon Wood on its radicalism—and attend the lectures of Joanne Freeman's celebrated Yale course. You will come away understanding not only what happened, but why the participants believed what they believed.`,
  objectives: [
    "Explain how the end of the Seven Years' War transformed the relationship between Britain and its colonies.",
    "Trace the imperial crisis from the Stamp Act to the Coercive Acts, and the colonial arguments against parliamentary taxation.",
    "Analyze the political ideas behind the Revolution, using primary sources such as Common Sense and the Declaration of Independence.",
    "Describe the course of the war and the problems of government under the Articles of Confederation.",
    "Interpret the Constitution and The Federalist as answers to the problems of the revolutionary generation.",
  ],
  lessons: [
    {
      title: "Being a British Colonist",
      summary: "The colonies within the British Empire, and the war that changed everything.",
      pages: [{ title: "Lecture", body: `## Loyal subjects

To understand the Revolution we must first forget that it happened. In 1760 nobody expected it. The thirteen mainland colonies, from New Hampshire to Georgia, had little in common with one another; most colonists felt closer ties to London than to neighboring colonies. They thought of themselves as **Britons** living across the Atlantic, heirs of the Glorious Revolution of 1688 and of the "rights of Englishmen": trial by jury, the protection of property, and, above all, taxation only by their own consent through their elected assemblies.

For most of the eighteenth century, the empire governed its colonies lightly. Edmund Burke later called this policy **"salutary neglect."** Trade laws existed but were loosely enforced; colonial assemblies grew used to managing their own affairs and taxing their own people.

## The Great War for Empire

From 1754 to 1763 Britain and France fought a world war—the **Seven Years' War**, known in America as the French and Indian War. It began in the Ohio Country, where a young Virginia officer named George Washington skirmished with French troops in 1754, and ended with a British victory so complete that France was expelled from mainland North America. By the **Treaty of Paris (1763)**, Britain gained Canada and all lands east of the Mississippi.

Colonists rejoiced. Never had they been prouder to be British. But victory produced three problems that would undo the empire within a dozen years:

1. **Debt.** Britain's national debt had nearly doubled. Ministers reasonably asked the colonists, who had benefited from the war, to help pay for their own defense.
2. **Territory.** The new western lands were home to Native nations who had not been defeated. Pontiac's War (1763) showed how costly it would be to hold them. Britain decided to station some 10,000 troops in North America.
3. **Administration.** An empire so large seemed to require more central control. Ministers in London began to see the colonies not as partners but as dependencies to be managed.

## The Proclamation of 1763

The first sign of the new policy was the **Proclamation of 1763**, which forbade colonial settlement west of the Appalachian Mountains. It was intended to keep peace with Native nations; colonists, especially land speculators like Washington, saw it as an arbitrary denial of the fruits of a war they had fought.

## The historian's question

Joanne Freeman's Yale course begins with a warning against hindsight: the participants did not know how the story would end, and most of them did not want independence until very late. As you read, practice what historians call **contingency**—the recognition that things could have turned out otherwise. The Revolution was not inevitable; it was made, step by step, by people making choices under uncertainty.` }],
      readings: [
        { kind: "book", title: "The American Revolution: A History", author: "Gordon S. Wood", publisher: "Modern Library", year: "2002", note: "Chapter 1, “Origins.” A brilliant short history, and the main text of Freeman's Yale course." },
        { kind: "book", title: "Crucible of War: The Seven Years' War and the Fate of Empire in British North America, 1754–1766", author: "Fred Anderson", publisher: "Alfred A. Knopf", year: "2000", note: "Introduction and Part I. The definitive account of the war that set the Revolution in motion. Optional." },
      ],
      media: [
        { kind: "lecture", title: "Lecture 1: Introduction", author: "Joanne Freeman", publisher: "Open Yale Courses, HIST 116: The American Revolution", url: oyc(1), note: "Professor Freeman's “top five tips” for studying the Revolution. Video, audio, and transcript." },
        { kind: "lecture", title: "Lecture 2: Being a British Colonist", author: "Joanne Freeman", publisher: "Open Yale Courses, HIST 116", url: oyc(2) },
        { kind: "lecture", title: "Lecture 3: Being a British American", author: "Joanne Freeman", publisher: "Open Yale Courses, HIST 116", url: oyc(3) },
      ],
      questions: [
        {
          prompt: "What was “salutary neglect”?",
          choices: ["Britain's policy of abandoning the colonies after 1763", "The lax enforcement of imperial regulations that let colonial assemblies grow used to self-government", "Colonial refusal to pay taxes", "A medical practice of the period"],
          answer: 1,
          explanation: "Burke's phrase describes the light-handed imperial governance of the early eighteenth century.",
        },
        {
          prompt: "Which was NOT a consequence of the Seven Years' War that strained the empire?",
          choices: ["A greatly increased British national debt", "The need to defend vast new western territories", "A French army remaining in Canada", "A new desire in London for central control of the colonies"],
          answer: 2,
          explanation: "The Treaty of Paris expelled France from mainland North America; the other three were real consequences.",
        },
        {
          prompt: "The Proclamation of 1763:",
          choices: ["Declared the colonies independent", "Forbade colonial settlement west of the Appalachians", "Imposed a tax on paper", "Ended the Seven Years' War"],
          answer: 1,
          explanation: "Meant to keep peace with Native nations, it angered colonists who hoped to settle and speculate in western lands.",
        },
        {
          prompt: "What does Freeman mean by warning against hindsight?",
          choices: ["Historians should not read old documents", "We must remember that participants did not know the outcome, and that independence was not inevitable", "Only eyewitness accounts are reliable", "The Revolution is too recent to judge"],
          answer: 1,
          explanation: "Contingency—the recognition that events could have gone otherwise—is the first discipline of the historian.",
        },
      ],
      reflection: "In 1763 a Massachusetts colonist might have described himself as a loyal Briton. Write a paragraph in his voice explaining what being British meant to him.",
    },
    {
      title: "The Imperial Crisis, 1764–1774",
      summary: "Taxes, protests, and the escalating argument over Parliament's authority.",
      pages: [{ title: "Lecture", body: `## A decade of crisis

Between 1764 and 1774 the British government and the colonies argued about one question in ever sharper terms: **Did Parliament have the right to tax the colonies?** Each British measure provoked colonial resistance; each act of resistance provoked a firmer British response.

## The Sugar Act and the Stamp Act

The **Sugar Act (1764)** actually lowered the duty on foreign molasses but was meant, for the first time, to raise revenue rather than regulate trade—and it came with tougher enforcement. The **Stamp Act (1765)** went further: it was a **direct tax** on printed paper—newspapers, legal documents, licenses, even playing cards—falling on nearly every colonist.

The response was overwhelming. Colonial assemblies passed resolutions; Patrick Henry's **Virginia Resolves** declared that only the colony's own assembly could tax Virginians. Nine colonies sent delegates to the **Stamp Act Congress** in New York, the first coordinated intercolonial protest. In the streets, groups calling themselves the **Sons of Liberty** forced stamp distributors to resign, sometimes by violence. Merchants agreed to boycott British goods.

## No taxation without representation

The colonial argument was constitutional. Englishmen could be taxed only by their own representatives. The colonists elected no members of Parliament; therefore Parliament could not tax them.

British defenders answered with the doctrine of **virtual representation**: members of Parliament represented the whole empire, not merely those who voted for them. Most Englishmen did not vote either, yet were represented. Colonists found this absurd. Their idea of representation was **actual**: a representative must be chosen by, and accountable to, the people he represents.

Parliament repealed the Stamp Act in 1766 but at the same time passed the **Declaratory Act**, asserting its authority to legislate for the colonies "in all cases whatsoever."

## Townshend, the Massacre, and the Tea

In 1767 the **Townshend Acts** taxed imports of glass, lead, paint, paper, and tea. John Dickinson's widely read *Letters from a Farmer in Pennsylvania* argued that Parliament could regulate trade but not tax for revenue. Boycotts resumed. British troops were sent to Boston, and on March 5, 1770, soldiers fired into a crowd, killing five: the **Boston Massacre**. (John Adams defended the soldiers at trial and won acquittal for most of them.)

Parliament repealed all the Townshend duties except the one on tea. In 1773 the **Tea Act** made East India Company tea cheaper than smuggled tea—while keeping the tax. Colonists saw a trap to make them accept the principle of taxation. On **December 16, 1773**, men disguised as Mohawks dumped 342 chests of tea into Boston Harbor.

## The Coercive Acts

Britain's response in 1774—the **Coercive Acts**, which colonists called the **Intolerable Acts**—closed the port of Boston, suspended the Massachusetts charter, and allowed royal officials accused of crimes to be tried elsewhere. Meant to isolate Massachusetts, they united the colonies instead. In September 1774 twelve colonies sent delegates to the **First Continental Congress** in Philadelphia, which organized a continent-wide boycott. The argument had become a crisis of the empire itself.` }],
      readings: [
        { kind: "book", title: "The American Revolution: A History", author: "Gordon S. Wood", publisher: "Modern Library", year: "2002", note: "Chapter 2, “Resistance.”" },
        { kind: "book", title: "The Glorious Cause: The American Revolution, 1763–1789", author: "Robert Middlekauff", publisher: "Oxford University Press", year: "rev. ed., 2005", note: "Chapters 4–10, a detailed narrative of the imperial crisis (Oxford History of the United States)." },
      ],
      media: [
        { kind: "lecture", title: "Lecture 5: Outraged Colonials: The Stamp Act Crisis", author: "Joanne Freeman", publisher: "Open Yale Courses, HIST 116", url: oyc(5) },
        { kind: "lecture", title: "Lecture 6: Resistance or Rebellion?", author: "Joanne Freeman", publisher: "Open Yale Courses, HIST 116", url: oyc(6) },
        { kind: "audio", title: "Revolutions (podcast), Season 3: The American Revolution", author: "Mike Duncan", url: "https://www.revolutionspodcast.com", note: "A narrative history of the Revolution in podcast episodes; the opening episodes cover the Stamp Act crisis." },
      ],
      questions: [
        {
          prompt: "What made the Stamp Act different from earlier imperial trade regulations?",
          choices: ["It applied only to Boston", "It was a direct tax on colonists, intended to raise revenue", "It lowered taxes", "It was passed by the colonial assemblies"],
          answer: 1,
          explanation: "The Stamp Act taxed printed paper used in daily colonial life, purely to raise revenue.",
        },
        {
          prompt: "The British doctrine of “virtual representation” held that:",
          choices: ["Colonists should elect members of Parliament", "Members of Parliament represented the whole empire, including those who did not vote for them", "Only property owners were represented", "The king alone represented the colonies"],
          answer: 1,
          explanation: "Colonists rejected it in favor of actual representation by those they themselves elected.",
        },
        {
          prompt: "What did the Declaratory Act (1766) assert?",
          choices: ["American independence", "Parliament's right to legislate for the colonies “in all cases whatsoever”", "The repeal of all taxes", "The colonists' right to representation"],
          answer: 1,
          explanation: "Passed alongside the Stamp Act's repeal, it insisted that Parliament's authority was undiminished.",
        },
        {
          prompt: "Why did colonists object to the Tea Act, though it made tea cheaper?",
          choices: ["They preferred coffee", "It kept the tax, and accepting the cheap tea would concede Parliament's right to tax them", "It banned all tea", "It favored Dutch merchants"],
          answer: 1,
          explanation: "The issue was principle: buying taxed tea meant accepting taxation without representation.",
        },
        {
          prompt: "What was the effect of the Coercive Acts?",
          choices: ["They isolated Massachusetts as intended", "They united the colonies and led to the First Continental Congress", "They ended the crisis", "They were welcomed in the southern colonies"],
          answer: 1,
          explanation: "Instead of isolating Boston, they convinced other colonies that their liberties were also at stake.",
        },
      ],
      reflection: "Write a short dialogue between a member of Parliament defending virtual representation and a colonist rejecting it. Give each the strongest possible argument.",
    },
    {
      title: "The Ideas of the Revolution",
      summary: "Liberty, power, and conspiracy: the ideological world of the revolutionaries, and Common Sense.",
      pages: [{ title: "Lecture", body: `## Why so much fuss over a tax?

The taxes at issue in the imperial crisis were small. Why did colonists respond as if their liberty were at stake? The historian **Bernard Bailyn** answered this question in *The Ideological Origins of the American Revolution* (1967), one of the most influential works of American history ever written.

Bailyn read hundreds of colonial pamphlets and found in them a consistent way of seeing the world. Its sources were many—classical antiquity, Enlightenment rationalism, the common law, New England Puritanism—but its organizing core came from the radical English **Commonwealthmen** of the early eighteenth century, especially John Trenchard and Thomas Gordon's ***Cato's Letters*** (1720–23).

## Power and liberty

In this view, politics was an eternal struggle between **power** and **liberty**. Power was aggressive, always seeking to expand; liberty was delicate, always in danger. Power was held in check only by a balanced constitution and a virtuous, vigilant people. When rulers began to accumulate power—through standing armies, placemen, corruption, and taxes levied without consent—liberty was in danger.

Seen through this lens, each British measure looked like a step in a **deliberate conspiracy** against liberty. A small tax mattered because it was a precedent; accepting it would open the door to unlimited taxation and, ultimately, to slavery. When colonists spoke of "slavery," they meant political subjection to arbitrary power—a usage that, as many contemporaries noticed, sat uneasily beside the chattel slavery practiced in every colony.

## Common Sense

By 1775 fighting had begun, but most colonists still hoped for reconciliation with the king. In January 1776 an English immigrant named **Thomas Paine** published a pamphlet that changed the argument. *Common Sense* attacked not Parliament but **monarchy itself**:

> Of more worth is one honest man to society, and in the sight of God, than all the crowned ruffians that ever lived.

Paine mocked hereditary succession—"One of the strongest natural proofs of the folly of hereditary right in kings, is, that nature disapproves it, otherwise she would not so frequently turn it into ridicule by giving mankind an ass for a lion"—and argued that it was absurd for an island to rule a continent. Above all he urged Americans to seize the moment:

> We have it in our power to begin the world over again.

Written in plain, forceful prose for ordinary readers, *Common Sense* went through many editions and was read aloud in taverns and camps. Within six months Congress declared independence.

## Republicanism

What did the revolutionaries want in place of monarchy? A **republic**: a government without a king, deriving its authority from the people. Classical republican thought, drawn from Rome and Renaissance Italy, held that a republic depended on **virtue**—citizens' willingness to sacrifice private interest for the public good. This was an inspiring but demanding ideal, and the question whether Americans possessed enough virtue to sustain a republic would haunt the next decade.` }],
      readings: [
        { kind: "edition", title: "Common Sense", author: "Thomas Paine", publisher: "Project Gutenberg (1776 text)", url: "https://www.gutenberg.org/ebooks/147", note: "Read the whole pamphlet; it is short. Note especially the sections “Of Monarchy and Hereditary Succession” and “Thoughts on the Present State of American Affairs.”" },
        { kind: "book", title: "The Ideological Origins of the American Revolution", author: "Bernard Bailyn", publisher: "Belknap Press of Harvard University Press", year: "1967; 50th anniversary ed., 2017", note: "Chapters 2–4: “Sources and Traditions,” “Power and Liberty: A Theory of Politics,” and “The Logic of Rebellion.” Winner of the Pulitzer Prize." },
      ],
      media: [
        { kind: "lecture", title: "Lecture 7: Being a Revolutionary", author: "Joanne Freeman", publisher: "Open Yale Courses, HIST 116", url: oyc(7) },
        { kind: "lecture", title: "Lecture 8: The Logic of Resistance", author: "Joanne Freeman", publisher: "Open Yale Courses, HIST 116", url: oyc(8) },
      ],
      questions: [
        {
          prompt: "According to Bailyn, why did colonists react so strongly to relatively small taxes?",
          choices: ["They were poor", "They saw each measure as part of a deliberate conspiracy of power against liberty", "They wanted to trade with France", "They had never been taxed before"],
          answer: 1,
          explanation: "Through the lens of Commonwealth ideology, small precedents threatened unlimited arbitrary power.",
        },
        {
          prompt: "Cato's Letters were written by:",
          choices: ["Cicero", "John Trenchard and Thomas Gordon", "John Adams", "Thomas Paine"],
          answer: 1,
          explanation: "The essays (1720–23) by these English radicals were widely read in the colonies.",
        },
        {
          prompt: "What was the decisive new argument of Common Sense?",
          choices: ["That Parliament had exceeded its authority", "That monarchy and hereditary rule were themselves illegitimate, and America should be independent", "That taxes should be lowered", "That the colonies should join France"],
          answer: 1,
          explanation: "Paine turned the dispute from Parliament's powers to the case against kingship and for independence.",
        },
        {
          prompt: "Classical republicanism held that a republic depends above all on:",
          choices: ["A strong king", "The virtue of its citizens", "A large army", "Wealth"],
          answer: 1,
          explanation: "Republican thought prized civic virtue: putting the public good before private interest.",
        },
      ],
      reflection: "Choose one paragraph of Common Sense and explain how its style—diction, imagery, sentence length—serves its argument and its intended readers.",
    },
    {
      title: "Independence",
      summary: "From Lexington to the Declaration of Independence.",
      pages: [{ title: "Lecture", body: `## The shot heard round the world

In April 1775 General Thomas Gage sent British troops from Boston to seize colonial military supplies at Concord. Warned by riders including Paul Revere and William Dawes, militiamen gathered. On **April 19, 1775**, shots were exchanged on Lexington Green and at Concord's North Bridge; on the long march back to Boston, the British column was harried by thousands of militia. The war had begun—though not yet a war for independence.

The **Second Continental Congress**, meeting in Philadelphia from May 1775, created a Continental Army and named George Washington its commander. Yet in July 1775 it also sent the king the **Olive Branch Petition**, professing loyalty and asking for reconciliation. George III refused to receive it and declared the colonies in open rebellion.

## The decision

Through the first half of 1776 sentiment moved toward independence, propelled by *Common Sense*, by the news that Britain was hiring German soldiers, and by the failure of reconciliation. Colonies instructed their delegates to support separation. On **June 7, 1776**, Richard Henry Lee of Virginia moved:

> That these United Colonies are, and of right ought to be, free and independent States.

Congress appointed a committee—John Adams, Benjamin Franklin, Thomas Jefferson, Roger Sherman, and Robert Livingston—to draft a declaration. Jefferson wrote the draft. Congress voted for independence on **July 2** and, after editing Jefferson's text, approved the Declaration on **July 4**.

## The Declaration

The Declaration has three parts. The famous preamble states a philosophy of government:

> We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.—That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.

When a government becomes destructive of these ends, the people may "alter or to abolish it." The ideas owe much to John Locke and to a century of English radical thought; Jefferson later said he aimed not at originality but at "an expression of the American mind."

The second, longest part is a **list of grievances**—twenty-seven charges, each laid not against Parliament but against the king. This was deliberate: the colonists now denied that Parliament had ever had authority over them, so their only tie to Britain was the Crown. The final part declares the colonies "Free and Independent States."

## What Congress cut

Congress removed about a quarter of Jefferson's draft. Most notably it struck a passage blaming George III for the Atlantic slave trade, which Jefferson called "cruel war against human nature itself." Delegates from South Carolina and Georgia objected, and some Northerners whose merchants profited from the trade were uncomfortable. The contradiction between "all men are created equal" and the slavery practiced in every state was visible from the start—and, as Lincoln and Frederick Douglass would later insist, the Declaration's principles would become the standard by which that contradiction was judged.` }],
      readings: [
        { kind: "website", title: "The Declaration of Independence: A Transcription", publisher: "U.S. National Archives", url: "https://www.archives.gov/founding-docs/declaration-transcript", note: "Read the entire text, noting its three parts." },
        { kind: "book", title: "American Scripture: Making the Declaration of Independence", author: "Pauline Maier", publisher: "Alfred A. Knopf", year: "1997", note: "Chapters 2–3. Maier shows the Declaration as one of some ninety local declarations of independence, and traces Congress's edits." },
        { kind: "book", title: "The American Revolution: A History", author: "Gordon S. Wood", publisher: "Modern Library", year: "2002", note: "Chapter 3, “Revolution.”" },
      ],
      media: [
        { kind: "website", title: "Founders Online", publisher: "U.S. National Archives", url: "https://founders.archives.gov", note: "The papers of Washington, Adams, Jefferson, Franklin, Hamilton, Madison, and Jay. Search for Jefferson's later letters about the Declaration." },
        { kind: "lecture", title: "The American Revolution (full course)", author: "Joanne Freeman", publisher: "Open Yale Courses, HIST 116", url: "https://oyc.yale.edu/history/hist-116", note: "Continue with the lectures on 1775–1776." },
      ],
      questions: [
        {
          prompt: "What was the Olive Branch Petition?",
          choices: ["A declaration of war", "Congress's 1775 appeal to George III for reconciliation", "A treaty with France", "A list of grievances against Parliament"],
          answer: 1,
          explanation: "Sent in July 1775, it professed loyalty; the king refused it and proclaimed the colonies in rebellion.",
        },
        {
          prompt: "On which date did Congress vote for independence, approving Lee's resolution?",
          choices: ["April 19, 1775", "July 2, 1776", "July 4, 1776", "September 17, 1787"],
          answer: 1,
          explanation: "Congress voted for independence on July 2 and approved the Declaration's text on July 4.",
        },
        {
          prompt: "Why are the Declaration's grievances directed against the king rather than Parliament?",
          choices: ["Parliament had supported the colonies", "The colonists denied that Parliament had ever had authority over them; their only tie was to the Crown", "Jefferson disliked George III personally", "Parliament had been dissolved"],
          answer: 1,
          explanation: "By 1776 the colonists held that their connection to Britain ran only through the king.",
        },
        {
          prompt: "What passage did Congress remove from Jefferson's draft?",
          choices: ["The claim that all men are created equal", "A condemnation of the king for the Atlantic slave trade", "The list of grievances", "The signature of John Hancock"],
          answer: 1,
          explanation: "The passage was struck, in part because of objections from South Carolina and Georgia.",
        },
        {
          prompt: "According to the Declaration, governments derive their just powers from:",
          choices: ["Divine right", "The consent of the governed", "Military strength", "Ancient tradition"],
          answer: 1,
          explanation: "“Governments are instituted among Men, deriving their just powers from the consent of the governed.”",
        },
      ],
      reflection: "Read the Declaration aloud in full. Then write a paragraph explaining why its authors placed a philosophical preamble before the list of grievances.",
    },
    {
      title: "From War to Constitution",
      summary: "Victory, the Articles of Confederation, and the making of the Constitution.",
      pages: [{ title: "Lecture", body: `## Winning the war

The war lasted eight years. Washington's Continental Army lost more battles than it won, but it survived—which was enough. The turning point came at **Saratoga** in October 1777, where General John Burgoyne surrendered an entire British army. The victory persuaded France to enter an **alliance** with the United States in 1778, transforming a colonial rebellion into a world war. In **October 1781**, a combined American and French force, with a French fleet blocking escape by sea, trapped General Cornwallis at **Yorktown**, Virginia. His surrender ended major fighting. The **Treaty of Paris (1783)** recognized American independence, with a western boundary at the Mississippi.

## The Articles of Confederation

The first national government was the **Articles of Confederation**, proposed in 1777 and ratified in 1781. Fearful of centralized power, the Articles created a weak "league of friendship" among sovereign states. Congress had no power to tax, could not regulate commerce, and had no independent executive; amendment required the consent of all thirteen states.

The weaknesses soon showed. Congress could not pay its debts or its soldiers. States quarreled over trade. In 1786–87 indebted farmers in western Massachusetts, led by Daniel Shays, closed courts to stop foreclosures; **Shays' Rebellion** alarmed leaders who feared that the Revolution's liberty was dissolving into disorder.

## The Philadelphia Convention

In May 1787 delegates from twelve states (Rhode Island refused to attend) met in Philadelphia, ostensibly to revise the Articles. Instead, behind closed doors, they wrote a new constitution. Its central innovations:

- A **stronger national government** with the power to tax and regulate commerce, acting directly on individuals.
- A **separation of powers** among legislative, executive, and judicial branches, with **checks and balances**.
- **Federalism**: sovereignty divided between nation and states.
- The **Great Compromise**: representation by population in the House, equal representation of states in the Senate.

The Convention also compromised with slavery: the **three-fifths clause** counted enslaved people as three-fifths of a person for apportionment, and the slave trade was protected from federal prohibition until 1808. The words "slave" and "slavery" appear nowhere in the text.

## The Federalist

Ratification required approval by conventions in nine states. In New York, Alexander Hamilton, James Madison, and John Jay wrote eighty-five essays under the name **"Publius,"** collected as ***The Federalist***. In **Federalist No. 10**, Madison inverted conventional wisdom: republics had been thought possible only in small territories, but a **large republic**, he argued, would contain so many interests that no single **faction** could dominate. In **No. 51** he explained the logic of checks and balances:

> Ambition must be made to counteract ambition.

The Constitution was ratified in 1788; Washington was inaugurated in 1789; the **Bill of Rights** was added in 1791 to answer Anti-Federalist fears.

## How radical was the Revolution?

Gordon Wood's *The Radicalism of the American Revolution* (1992) argues that the Revolution was as radical as any in history—not because it overturned property or the economy, but because it destroyed the hierarchical, monarchical society of colonial America and created a democratic society of independent, equal citizens, in ways its founders neither foresaw nor always welcomed. Other historians stress how much it left unchanged, above all for enslaved people, women, and Native nations. Weighing these arguments is the work of AMH 401.` }],
      readings: [
        { kind: "website", title: "The Federalist, Nos. 10 and 51", author: "James Madison", publisher: "Project Gutenberg (The Federalist Papers)", url: "https://www.gutenberg.org/ebooks/1404", note: "Read Federalist No. 10 (factions and the extended republic) and No. 51 (checks and balances)." },
        { kind: "website", title: "The Constitution of the United States: A Transcription", publisher: "U.S. National Archives", url: "https://www.archives.gov/founding-docs/constitution-transcript", note: "Read Articles I–III and identify where powers are separated and checked." },
        { kind: "book", title: "The Radicalism of the American Revolution", author: "Gordon S. Wood", publisher: "Alfred A. Knopf", year: "1992", note: "Introduction and Part III, “Democracy.” Winner of the Pulitzer Prize." },
      ],
      media: [
        { kind: "lecture", title: "The American Revolution (full course)", author: "Joanne Freeman", publisher: "Open Yale Courses, HIST 116", url: "https://oyc.yale.edu/history/hist-116", note: "The final lectures cover the Articles, the Constitutional Convention, and ratification." },
        { kind: "audio", title: "Ben Franklin's World (podcast)", author: "Liz Covart", url: "https://benfranklinsworld.com", note: "Interviews with historians of early America; search the archive for episodes on the Constitution and Shays' Rebellion." },
      ],
      questions: [
        {
          prompt: "Why was the American victory at Saratoga (1777) a turning point?",
          choices: ["It ended the war", "It persuaded France to ally with the United States", "It captured George III", "It led to the Articles of Confederation"],
          answer: 1,
          explanation: "The surrender of Burgoyne's army convinced France to enter the war in 1778.",
        },
        {
          prompt: "Which was a major weakness of the Articles of Confederation?",
          choices: ["An overpowerful president", "Congress had no power to tax", "The Supreme Court could overrule the states", "Representation was by population"],
          answer: 1,
          explanation: "Without the power to tax or regulate commerce, Congress could not pay its debts or govern effectively.",
        },
        {
          prompt: "The Great Compromise established:",
          choices: ["The three-fifths clause", "Representation by population in the House and equal representation in the Senate", "The Bill of Rights", "The Electoral College"],
          answer: 1,
          explanation: "It reconciled large and small states.",
        },
        {
          prompt: "In Federalist No. 10, Madison argues that faction is best controlled by:",
          choices: ["Abolishing liberty", "A small, homogeneous republic", "A large republic with many competing interests", "A hereditary monarch"],
          answer: 2,
          explanation: "A large republic multiplies interests so that no single faction can easily form a majority and oppress others.",
        },
        {
          prompt: "Gordon Wood's thesis in The Radicalism of the American Revolution is that the Revolution:",
          choices: ["Was conservative and changed little", "Transformed a hierarchical monarchical society into a democratic one of equal citizens", "Was mainly about economic class war", "Was caused by religious revival"],
          answer: 1,
          explanation: "Wood argues the social and cultural transformation was profound, though unforeseen by many founders.",
        },
      ],
      reflection: "Was the American Revolution radical? Write 400 words weighing Wood's argument against the experience of one group whose condition the Revolution did not transform.",
    },
  ],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "website", title: "The Declaration of Independence", publisher: "U.S. National Archives", url: "https://www.archives.gov/founding-docs/declaration-transcript" },
        { kind: "website", title: "The Constitution of the United States", publisher: "U.S. National Archives", url: "https://www.archives.gov/founding-docs/constitution-transcript" },
        { kind: "edition", title: "Common Sense", author: "Thomas Paine", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/147" },
        { kind: "edition", title: "The Federalist Papers", author: "Alexander Hamilton, James Madison, and John Jay", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1404" },
        { kind: "book", title: "The Federalist", author: "Hamilton, Madison, and Jay, ed. Jacob E. Cooke", publisher: "Wesleyan University Press", year: "1961", note: "The standard scholarly edition." },
        { kind: "book", title: "The Debate on the Constitution", author: "Bernard Bailyn, ed.", publisher: "Library of America", year: "1993", note: "Two volumes of Federalist and Anti-Federalist speeches, articles, and letters." },
      ],
    },
    {
      heading: "Narrative Histories",
      items: [
        { kind: "book", title: "The American Revolution: A History", author: "Gordon S. Wood", publisher: "Modern Library", year: "2002", note: "The best short history." },
        { kind: "book", title: "The Glorious Cause: The American Revolution, 1763–1789", author: "Robert Middlekauff", publisher: "Oxford University Press", year: "rev. ed., 2005" },
        { kind: "book", title: "Crucible of War", author: "Fred Anderson", publisher: "Alfred A. Knopf", year: "2000" },
        { kind: "book", title: "1776", author: "David McCullough", publisher: "Simon & Schuster", year: "2005", note: "A vivid narrative of the war's pivotal year." },
      ],
    },
    {
      heading: "Interpretation",
      items: [
        { kind: "book", title: "The Ideological Origins of the American Revolution", author: "Bernard Bailyn", publisher: "Belknap Press", year: "1967" },
        { kind: "book", title: "The Radicalism of the American Revolution", author: "Gordon S. Wood", publisher: "Alfred A. Knopf", year: "1992" },
        { kind: "book", title: "The Creation of the American Republic, 1776–1787", author: "Gordon S. Wood", publisher: "University of North Carolina Press", year: "1969", note: "The classic study of political thought from independence to the Constitution." },
        { kind: "book", title: "American Scripture: Making the Declaration of Independence", author: "Pauline Maier", publisher: "Alfred A. Knopf", year: "1997" },
        { kind: "book", title: "Ratification: The People Debate the Constitution, 1787–1788", author: "Pauline Maier", publisher: "Simon & Schuster", year: "2010" },
      ],
    },
    {
      heading: "Listening and Viewing",
      items: [
        { kind: "lecture", title: "HIST 116: The American Revolution", author: "Joanne Freeman", publisher: "Open Yale Courses", url: "https://oyc.yale.edu/history/hist-116", note: "Twenty-five recorded lectures with transcripts." },
        { kind: "audio", title: "Revolutions (podcast), Season 3", author: "Mike Duncan", url: "https://www.revolutionspodcast.com" },
        { kind: "audio", title: "Ben Franklin's World", author: "Liz Covart", url: "https://benfranklinsworld.com" },
      ],
    },
    {
      heading: "Online Archives",
      items: [
        { kind: "website", title: "Founders Online", publisher: "U.S. National Archives", url: "https://founders.archives.gov", note: "Searchable papers of the major founders." },
        { kind: "website", title: "The Avalon Project: Documents in Law, History and Diplomacy", publisher: "Yale Law School", url: "https://avalon.law.yale.edu", note: "Colonial charters, the Stamp Act, the Articles of Confederation, and more." },
      ],
    },
  ],
};
