import type { Lesson } from "@/lib/schema";

export const lesson3: Lesson = {
  title: "Why Is There Something Rather Than Nothing? Contingency and the Kalam",
  summary:
    "Avicenna's proof from the necessary existent; Leibniz and the principle of sufficient reason; Samuel Clarke's demonstration; the Russell–Copleston debate and the idea of brute facts; objections to the principle, including modal collapse; the kalam argument from al-Ghazali to William Lane Craig; Hilbert's Hotel and the problem of the actual infinite; Big Bang cosmology and its interpretation; and the nature of a first cause.",
  pages: [
    {
      title: "Avicenna and the Necessary Existent",
      body: `## A different starting point

The arguments of Lesson II began from change and causation. The arguments of this lesson begin from a more basic fact: that things **exist at all**, when they need not have. They are arguments from **contingency**. Their most influential medieval form came from **Ibn Sina**, Avicenna (980–1037), whom we met in PHR 101, in a proof later called the "**proof of the truthful**" (*burhan al-siddiqin*), because it reasons from being itself rather than from any particular created thing.

## Possible and necessary

Avicenna begins by dividing everything that exists, considered in itself, into two kinds:

- a **possible existent** (*mumkin al-wujud*), whose essence does not require its existence: it may exist or not, and if it exists, its existence comes from something else;
- a **necessary existent** (*wajib al-wujud*), whose essence requires its existence: it cannot not exist, and its existence comes from nothing outside itself.

This is the distinction between essence and existence we saw Aquinas inherit from him.

## The argument

Avicenna then argues roughly as follows:

1. Something exists.
2. If it is a necessary existent, the conclusion follows directly.
3. If it is a possible existent, it needs a cause outside itself for its existence.
4. Consider the **whole collection** of possible existents. Either it contains a necessary existent or not.
5. If not, the collection as a whole is itself possible, since each of its members is; so it, too, needs a cause outside itself.
6. But the only thing outside the collection of all possible existents would be a necessary existent.
7. Therefore a necessary existent exists.

## The whole and its parts

Step 5 is the heart of the argument. Avicenna does not claim that the series of causes must have a first member in time. He considers the **totality** of contingent things, however many there are, even infinitely many, and argues that the totality cannot explain its own existence, since each of its members depends on something else. Whether the series is finite or infinite does not matter. Hume's objection that the whole needs no explanation beyond its parts, which we met in Lesson II, is a direct challenge to this step.

## The attributes of the Necessary Existent

Like Aquinas after him, Avicenna then argues for the attributes of the Necessary Existent: it is **one**, since two necessary existents would need something to distinguish them; **simple**, without parts; **immaterial**; and the source of all other being, which emanates from it in an eternal order. Here Avicenna's God differs from the God of the Qur'an, as al-Ghazali complained: the world proceeds from it **necessarily** and **eternally**, as light from the sun, not by a free choice in time.

## Influence

Avicenna's argument shaped all later discussion. Maimonides used a version in the *Guide* (2.1); Aquinas's third way and his argument from essence and existence draw on it; and, through them, it reached Leibniz and the modern debate. In recent years, philosophers have revisited it directly; the Islamic philosopher-theologians who followed Avicenna, such as **Fakhr al-Din al-Razi**, debated it for centuries.

> **Pause and consider.** Avicenna argues that a whole made of contingent parts is itself contingent. Is that always true? Can you think of a whole that has a property none of its parts has?`,
    },
    {
      title: "Leibniz and the Principle of Sufficient Reason",
      body: `## A principle of reason

**Gottfried Wilhelm Leibniz** (1646–1716), the German philosopher and mathematician who invented the calculus independently of Newton, gave the argument from contingency its classic modern form. He founded it on a principle he called one of the two great principles of reasoning: the **principle of sufficient reason** (PSR). In his *Monadology* (1714), he stated it this way:

> … no fact can be real or existent, no statement true, unless there be a sufficient reason why it is so and not otherwise, although these reasons usually cannot be known by us.
>
> — G. W. Leibniz, *Monadology* 32, after the translation of Robert Latta (1898)

The other great principle is the **principle of contradiction**, by which we judge false whatever involves a contradiction.

## The first question

In a short work of the same year, *The Principles of Nature and Grace*, Leibniz put the question that drives the argument:

> … the first question which we have a right to ask will be, Why is there something rather than nothing? For nothing is simpler and easier than something.
>
> — Leibniz, *Principles of Nature and Grace* 7, after the translation of Latta

And the second question: why are things **this way** rather than some other way?

## The argument

Leibniz's argument, in *On the Ultimate Origination of Things* (1697) and the *Monadology* (36–38), runs roughly:

1. Everything that exists has a sufficient reason for its existence (PSR).
2. The reason for a contingent thing cannot lie in itself, since it might not have existed.
3. Nor can the reason for the whole series of contingent things lie in any member of the series, or in the series itself, since the whole series is contingent.
4. Therefore the sufficient reason for the series must lie in something **outside** it, which is not contingent but **necessary**: a being that carries the reason for its existence within itself.
5. This necessary being is God.

## The geometry book

Leibniz gave a vivid illustration in *On the Ultimate Origination of Things*. Suppose a book on the elements of geometry had always existed, each copy made from an earlier copy, going back forever. We could explain each copy by the one before it. But we would still not have explained **why there is such a book at all**, or why it says what it says rather than something else. An infinite regress of copies, however long, does not explain the whole. In the same way, an infinite regress of states of the world, each caused by the previous one, does not explain why there is a world, or why it is this world.

## Contingency, not change

Leibniz's argument, like Avicenna's, does not depend on the universe having a beginning. It would be equally strong if the world had always existed. Nor does it depend on Aristotelian physics. It depends on two things: the **principle of sufficient reason**, and the claim that the world, or the totality of contingent things, is **contingent**. Critics have attacked both.

## The best of all possible worlds

Leibniz also used the PSR to answer the second question: why this world? God, a perfect being, chose among infinitely many possible worlds, and a perfectly good and wise being must have a sufficient reason for his choice; so he chose the **best possible world**. This conclusion, satirized by **Voltaire** in *Candide* (1759) after the Lisbon earthquake of 1755, shows how the PSR can lead to bold, and controversial, conclusions. We return to it with the problem of evil in Lesson V.

> **Pause and consider.** Leibniz asked, "Why is there something rather than nothing?" Is this a meaningful question? What kind of answer could it have?`,
    },
    {
      title: "Clarke's Demonstration",
      body: `## The Boyle Lectures

In England, the theologian and philosopher **Samuel Clarke** (1675–1729), a friend and defender of Newton, gave the **Boyle Lectures** of 1704, founded by the chemist Robert Boyle to defend Christianity against unbelief. Published in 1705 as *A Demonstration of the Being and Attributes of God*, they offered a version of the argument from contingency that became, for the eighteenth century, the standard one. It was Clarke's argument that Hume had in mind when he put the a priori argument in Demea's mouth in the *Dialogues*.

## The steps

Clarke proceeded through a series of propositions:

1. **Something has existed from eternity.** Since something exists now, something must always have existed; otherwise, what exists now would have come from nothing.
2. **Some independent, unchangeable being has existed from eternity.** Either there has always been an independent being, or there has been an infinite succession of dependent beings. But an infinite succession of dependent beings, having no cause outside itself and no reason within itself, would exist without any reason at all, which is absurd.
3. **That independent being must be self-existent**, that is, necessarily existing.

From there, Clarke argued, in further propositions, that the self-existent being must be eternal, infinite, omnipresent, one, intelligent, free, all-powerful, wise, and good.

## The infinite succession

Clarke's treatment of the infinite succession is the key move, and anticipates the modern debate. Suppose, he says, there were an infinite series of dependent beings, each caused by the one before. The whole series would have no external cause, since by hypothesis there is nothing outside it; and no internal reason for existing, since every member is dependent. Then the series would exist for no reason at all—which, for Clarke as for Leibniz, is impossible.

## Clarke and Leibniz

Clarke and Leibniz shared the argument from contingency, but they disagreed sharply on much else. In 1715–1716, they exchanged a famous series of letters, the **Leibniz–Clarke correspondence**, about Newton's physics, the nature of space and time, God's relation to the world, and the principle of sufficient reason itself. Leibniz argued that Newton's absolute space would violate the PSR, since God would have no reason to place the world here rather than there. Clarke replied that God's **will** is itself a sufficient reason, even where there is no further reason for choosing one option over another. The question of whether free choice can be a sufficient reason remains central to the debate.

## Rowe's analysis

In the twentieth century, the American philosopher **William Rowe** (1931–2015), a noted atheist philosopher of religion, gave a careful analysis of Clarke's argument in *The Cosmological Argument* (1975). Rowe concluded that the argument is valid, and that its success depends on the principle of sufficient reason. If the PSR is true, the argument works; if it is not known to be true, the argument fails to prove its conclusion. Rowe did not think the PSR could be shown to be true, but he also argued that it is not unreasonable to believe it. This made the PSR the focus of later discussion.

> **Pause and consider.** Clarke argued that an infinite series of dependent beings would exist "for no reason at all." Is that absurd, or merely surprising?`,
    },
    {
      title: "Russell and Copleston: Is the Universe Just There?",
      body: `## A famous broadcast

On **28 January 1948**, the BBC broadcast a debate on the existence of God between **Bertrand Russell** (1872–1970), the most famous philosopher in Britain and a declared agnostic, and **Frederick Copleston** (1907–1994), a Jesuit priest and historian of philosophy. The first part of the debate concerned the argument from contingency. It remains one of the clearest introductions to the issues.

## Copleston's argument

Copleston presented a version of Leibniz's argument. The world, he said, is made up of contingent beings, none of which contains in itself the reason for its existence. The totality of such beings, being nothing more than the beings themselves, cannot contain that reason either. So, he argued, there must be a being outside the series that contains within itself the reason for its own existence, a being that cannot not exist.

## Russell's replies

Russell made several objections, which have been repeated ever since.

First, he questioned the notion of a **necessary being**. Following Hume and Kant, he argued that "necessary" applies only to propositions, and only to analytic ones, true by the meaning of their terms; it makes no sense to speak of a necessary being.

Second, he rejected the move from parts to whole. "Every man who exists has a mother," he said, "and it seems to me your argument is that therefore the human race must have a mother, but obviously the human race hasn't a mother—that's a different logical sphere." The universe is not a thing that needs a cause, as each thing in it does.

Third, and most famously, he denied that the existence of the universe needs any explanation:

> I should say that the universe is just there, and that's all.
>
> — Bertrand Russell, BBC debate with F. C. Copleston (1948)

## Brute facts

Russell's position is that the existence of the universe is a **brute fact**: a fact that has no explanation. Copleston replied that this refuses to ask a legitimate question. "If one refuses even to sit down at the chess-board and make a move," he said, "one cannot, of course, be checkmated." The debate on this point ended in deadlock, and that deadlock remains the center of the debate about the cosmological argument today.

## Can there be brute facts?

Are there brute facts? Defenders of the PSR argue that we never accept them anywhere else. If you heard a loud bang in the next room, you would not accept "it just happened, for no reason at all." Science proceeds on the assumption that everything has an explanation. Why make an exception for the universe as a whole? Critics reply that explanation must stop somewhere. The theist stops with God, whose existence is said to be self-explanatory; the naturalist stops with the universe, or with the fundamental laws of physics. Either way, there is a stopping point, and it is not obvious that God is a better one.

## The fallacy of composition?

Russell's mother objection charges the argument with the **fallacy of composition**: inferring that a whole has a property because its parts do. Not every such inference is fallacious, however. If every brick in a wall is red, the wall is red; if every part of a machine is made of metal, so is the machine. Defenders of the argument contend that contingency is like color in this respect: a whole made entirely of contingent parts is contingent, since it would fail to exist if they all did. Critics reply that being caused is not like being red; the human race has no mother, even though every human being does.

> **Pause and consider.** Russell said that the universe "is just there, and that's all." Is this a reasonable stopping point for explanation? What would it take to show that it is not?`,
    },
    {
      title: "Objections to the Principle of Sufficient Reason",
      body: `## Strong and weak versions

The argument from contingency depends on the principle of sufficient reason. But which version? A **strong** version says that **every truth** has an explanation. A **weaker** version says only that every **contingent thing** has an explanation of its existence, or that every contingent truth has one. Philosophers have argued that the strong version leads to serious difficulties.

## Modal collapse

The most influential objection is that the strong PSR implies **modal collapse**: that everything that is true is necessarily true. The argument, developed by the philosopher **Peter van Inwagen** in *An Essay on Free Will* (1983), runs roughly as follows. Consider the conjunction of all contingent truths—the "big contingent conjunctive fact." If it has an explanation, that explanation must be either necessary or contingent. If contingent, it is itself part of the big conjunction, and so cannot explain it. If necessary, then whatever it entails is necessary; and if it fully explains the big conjunction, it entails it; so all contingent truths would be necessary. Either way, the strong PSR seems to imply that there are no contingent truths—that nothing could have been otherwise.

This is a serious problem for theism, since theists hold that God freely created the world and could have done otherwise. If God's existence, which is necessary, fully explains the world, then the world exists necessarily.

## Replies

Defenders of the PSR have offered several replies. Some, following Clarke, argue that a **free choice** can be a sufficient reason without necessitating its result: God's free choice to create explains the world, but God could have chosen otherwise. Others argue that an explanation need not **entail** what it explains: a probabilistic or personal explanation can genuinely explain without making its effect necessary. And some accept a weaker PSR, which applies to contingent beings but not to every truth, and which is enough for the cosmological argument.

## Pruss's defense

The philosopher **Alexander Pruss**, in *The Principle of Sufficient Reason: A Reassessment* (2006), offered the most thorough modern defense. Pruss argued that the PSR is presupposed by science and by everyday reasoning; that if it were false, we could have no reason to trust our own cognitive faculties, since our beliefs might arise for no reason at all; and that without it, we could not rule out bizarre possibilities, such as objects popping into existence uncaused all around us. He argued that the modal collapse objection can be met by a version of the PSR that allows free choices and non-necessitating explanations.

## Feser's rationalist proof

Feser's fifth proof, the "rationalist proof," builds on the PSR. He argues that anyone who denies the PSR is caught in a dilemma: if they deny it selectively—only for the universe, for instance—their denial is arbitrary; if they deny it generally, they undermine science and even their own reasoning. Feser also argues that the PSR need not imply modal collapse, if the necessary being explains the world through a free act of will.

## The critics

Critics, such as **Graham Oppy** and **J. L. Mackie**, reply that the PSR is not self-evident, that our everyday expectation that things have explanations is a methodological habit, not a metaphysical law, and that it is not irrational to hold that explanation ends in brute facts. Some physicists point to quantum mechanics, which seems to include events, such as radioactive decay, with no sufficient reason for occurring when they do. Defenders reply, as we saw in Lesson II, that quantum indeterminacy does not show that events occur without any explanation at all, only without a deterministic one.

## Where the debate stands

The debate over the PSR is one of the most active in contemporary metaphysics. Some philosophers, not otherwise sympathetic to theism, have defended versions of it; some theists have abandoned it. The argument from contingency, as Rowe concluded, stands or falls with it.

> **Pause and consider.** Pruss argues that if the PSR were false, we could have no assurance that things don't pop into existence for no reason. Is this a good argument for the PSR?`,
    },
    {
      title: "Could the Universe Be the Necessary Being?",
      body: `## A naturalist reply

The arguments from contingency conclude that there is a necessary being. But why must the necessary being be **God**? Hume's Cleanthes suggested that the material universe itself might be the necessarily existent being. If so, the argument would stop at the world, not beyond it.

## Spinoza

The boldest version of this idea is older than Hume. **Baruch Spinoza** (1632–1677), in his *Ethics* (published 1677), argued that there is only one substance, which exists necessarily and which he called "**God or Nature**" (*Deus sive Natura*). Everything that exists follows from the necessity of this one substance, as the properties of a triangle follow from its nature; nothing could have been otherwise. Spinoza's God is not a person who chooses, and is not distinct from the world. Spinoza thus accepted the strong principle of sufficient reason and embraced **modal collapse**: everything that is, is necessary. His contemporaries called him an atheist; the German Romantics later called him "a God-intoxicated man."

## Necessitarian naturalism

Some contemporary naturalists have proposed a related view without Spinoza's theology. The Australian philosopher **Graham Oppy** has argued that the naturalist can match every move of the theist. If the theist says that God exists necessarily and is the ultimate explanation, the naturalist can say that the **initial state** of the universe, or the most basic physical reality, exists necessarily and is the ultimate explanation. Either both views postulate a necessary foundation, or both postulate a brute one; and naturalism, Oppy argues, is the simpler of the two, since it postulates nothing beyond the natural world.

## Replies

Defenders of the cosmological argument reply in several ways. First, the universe as we know it seems **contingent** through and through. Its physical constants could apparently have had different values; its laws could apparently have been different; its matter is made of parts that come and go. Nothing about it looks as if it could not have failed to exist. Second, a necessary being, they argue, must be something whose essence **is** its existence, and so must be simple, unchanging, and unlimited, as Aquinas and Avicenna argued; but the physical universe is composite, changing, and limited. Third, if the universe began to exist, as the kalam argument claims, it cannot be necessary, since a necessary being cannot begin.

## The scientists' view

Physicists themselves differ on whether the universe needs an explanation. Some, like the cosmologist **Sean Carroll**, have argued that the universe may simply exist, without any external cause or reason, and that asking for one imports everyday expectations into a domain where they do not apply. Others have hoped that a final physical theory might show that the laws of nature could not have been otherwise. **Albert Einstein** once said that what really interested him was whether God had any choice in creating the world: a question about whether the laws are necessary. No current physical theory answers it.

## What is at stake

The question of whether the universe could be the necessary being turns the debate back to metaphysics. Is necessity a feature only of propositions, as Hume and Russell held, or of beings? If of beings, what could make a being necessary? The classical theist's answer is that only a being whose essence is existence, pure act, without any limitation, could be necessary. The naturalist's answer is that we do not know enough to rule out a necessary physical foundation. The cosmological argument depends on which answer is more reasonable.

> **Pause and consider.** Spinoza accepted that everything is necessary and called the one necessary substance "God or Nature." Is Spinoza's God really God? Is his nature really nature?`,
    },
    {
      title: "Contingency Arguments Today",
      body: `## A revival

The argument from contingency, which many twentieth-century philosophers regarded as refuted by Hume, Kant, and Russell, has seen a substantial revival in recent decades. The revival has taken the objections seriously and reformulated the argument to avoid them.

## A weaker principle

One strategy is to replace the strong principle of sufficient reason with a **weaker** one. In 1999, the philosophers **Richard Gale** and **Alexander Pruss** published "A New Cosmological Argument," which relied only on the claim that, for any contingent truth, it is **possible** that it has an explanation. From this weak premise, using modal logic, they argued that there must be a necessary being whose free choice explains the totality of contingent truths. The weak principle seems hard to deny; whether the argument from it is valid has been much debated.

## The Leibnizian argument

In *The Blackwell Companion to Natural Theology* (2009), edited by William Lane Craig and **J. P. Moreland**, Pruss contributed a long chapter, "The Leibnizian Cosmological Argument," which set out several versions of the argument, defended the PSR, and answered the modal collapse objection by appeal to free, non-necessitating explanation. The same volume included a long defense of the kalam argument by Craig and the physicist **James Sinclair**. The *Companion* is a good guide to the state of the debate from the theist side.

## Ultimate explanation

The philosopher **Timothy O'Connor**, in *Theism and Ultimate Explanation* (2008), approached the argument by asking what an **ultimate explanation** of the existence of contingent things would have to be like. It could not be another contingent thing, since that would need explaining in turn; it would have to be a necessary being. O'Connor argued that the only plausible candidate is a being with the attributes of God, and that a naturalistic necessary being faces greater difficulties.

## The critics' response

Critics have responded in kind. **Graham Oppy**, in *Arguing about Gods* (2006), argued that no version of the cosmological argument gives a reasonable naturalist reason to change his mind, since each depends on premises the naturalist can reasonably reject. Others have challenged the coherence of a necessary being that freely chooses, asking whether a necessary being could have done otherwise, and if not, whether its "choice" is really free.

## Two kinds of argument

Notice a contrast between the arguments of this lesson and those of Lesson II. Aquinas's first way and Feser's proofs claim to **demonstrate** God's existence from evident premises. Many contemporary contingency arguments claim less: that the existence of God is the **best explanation** of the existence of contingent things, or that it is more reasonable to accept a necessary being than to accept brute facts. This shift, from demonstration to explanation, reflects a broader change in natural theology, which we will see again in the design arguments of Lesson IV.

## The question that remains

After centuries of debate, the argument from contingency still turns on a question that Leibniz posed and Russell refused: whether there must be an answer to "Why is there something rather than nothing?" Those who think there must be will find the argument powerful; those who think there need not be will find it unpersuasive. Perhaps the most that can be said, as Rowe concluded, is that it is reasonable to accept the principle, and reasonable to doubt it—and that much depends on which way one leans.

> **Pause and consider.** Many contemporary defenders present the contingency argument as an inference to the best explanation rather than a demonstration. Does this make it stronger or weaker?`,
    },
    {
      title: "The Kalam Argument",
      body: `## A beginning in time

The arguments so far did not depend on the universe having a **beginning**. The **kalam** cosmological argument does. Its name comes from *kalam*, the dialectical theology of medieval Islam, whose practitioners, as we saw in PHR 101, defended creation in time against the philosophers who held, with Aristotle, that the world is eternal.

## History

The argument has a long history. The sixth-century Christian philosopher **John Philoponus** of Alexandria, in *Against Proclus on the Eternity of the World* (529), argued that an eternal past would require an actually infinite number of past events, which is impossible. **Al-Kindi** in the ninth century and **al-Ghazali** in the eleventh developed the argument. Al-Ghazali stated it with great compression, in a passage often quoted:

> Every being which begins has a cause for its beginning; now the world is a being which begins; therefore, it possesses a cause for its beginning.
>
> — al-Ghazali, *The Jerusalem Letter*, in the course's rendering

In the Latin West, **Bonaventure** argued that the beginning of the world could be proved by reason; **Aquinas** denied it, holding that the beginning is known only by revelation, though he agreed that it was true.

## Craig's revival

The American philosopher **William Lane Craig** (born 1949) revived the argument in *The Kalam Cosmological Argument* (1979) and has defended it in many books and public debates. His formulation is simple:

1. Whatever begins to exist has a cause.
2. The universe began to exist.
3. Therefore, the universe has a cause.

Craig then argues, in a further stage, that the cause must be uncaused, timeless, spaceless, immaterial, enormously powerful, and **personal**.

## The first premise

Craig defends the first premise as an intuition grounded in experience and in the principle that "out of nothing, nothing comes" (*ex nihilo nihil fit*). If things could begin to exist without a cause, he argues, it would be inexplicable why anything and everything does not do so. Critics point to quantum events, which seem to occur without determining causes; Craig replies that such events occur in a quantum vacuum, which is a physical state with structure and energy, not nothing.

## The second premise

The second premise, that the universe began to exist, Craig supports with two kinds of argument: **philosophical** arguments that an infinite past is impossible, and **scientific** evidence from Big Bang cosmology. We consider each on the following pages.

## Kalam and Thomism

It is worth noting that the kalam argument and the Thomist arguments of Lesson II differ sharply. For Aquinas, the cosmological argument concerns the present dependence of things on God, and would hold even if the universe were eternal. For Craig, the argument concerns a beginning in the past. Feser and other Thomists have argued that the kalam argument, by staking its case on cosmology, makes the existence of God depend on scientific theories that may change; Craig replies that the scientific evidence for a beginning is strong, and that the argument's philosophical premises do not depend on science at all.

> **Pause and consider.** Aquinas denied that reason could prove the world had a beginning. Al-Ghazali and Craig affirm it. Which view seems to you more defensible?`,
    },
    {
      title: "Hilbert's Hotel: Can the Past Be Infinite?",
      body: `## The actual infinite

Craig's first philosophical argument for a beginning is that an **actually infinite** number of things cannot exist. A **potential** infinite is a collection that can be increased without limit but is always finite at any moment—like counting, which can go on forever but never reaches infinity. An **actual** infinite is a completed collection with infinitely many members. If the past were infinite, Craig argues, the number of past events would be actually infinite; but an actual infinite cannot exist in reality; so the past is finite.

## Hilbert's Hotel

To show the absurdities of an actual infinite, Craig uses an illustration associated with the German mathematician **David Hilbert** (1862–1943), and popularized by the physicist **George Gamow** in *One Two Three … Infinity* (1947): **Hilbert's Hotel**. Imagine a hotel with infinitely many rooms, all occupied. A new guest arrives. No problem: the manager moves the guest in room 1 to room 2, the guest in room 2 to room 3, and so on, and puts the new guest in room 1. Infinitely many new guests arrive: the manager moves each guest to the room with double the number, freeing all the odd-numbered rooms. Now suppose the guests in the odd-numbered rooms check out: infinitely many have left, yet the hotel is still full. Suppose all but the first three check out: infinitely many have left again, and now only three remain.

Craig argues that such a hotel is absurd, and that the absurdity shows that an actual infinite cannot exist in the real world, even if it is consistent in mathematics.

## Traversing the infinite

Craig's second argument is that even if an actual infinite could exist, it could not be formed by **successive addition**—one event after another—as the past is formed. To arrive at the present from an infinite past would require traversing an infinite series of events, which is impossible, as it is impossible to count to infinity. Russell gave a related puzzle, the paradox of **Tristram Shandy**, the hero of Laurence Sterne's novel, who takes two years to write the history of the first two days of his life; if he lived forever, would he finish? The puzzle shows how strange the infinite is.

## Replies

Critics reply in several ways. First, the mathematics of the infinite, developed by **Georg Cantor** (1845–1918) in the nineteenth century, is consistent; the results of Hilbert's Hotel are strange but not contradictory, and strangeness is not impossibility. Second, it is not clear why what is consistent in mathematics should be impossible in reality. Third, an infinite past need not be "traversed" from a starting point, since by hypothesis there is no starting point; each past event is only finitely distant from the present. And fourth, the arguments, if they worked, might prove too much: for instance, that there cannot be infinitely many points in space or moments in an hour.

Philosophers such as **Wes Morriston** and **Graham Oppy** have pressed these objections in detail. Craig has replied, distinguishing mathematical from metaphysical possibility, and defending a view of time in which only the present is real and the past is formed by successive addition.

## Al-Ghazali's version

Al-Ghazali, in the *Incoherence*, had already offered a paradox: Jupiter revolves once every twelve years, Saturn once every thirty; if the past were infinite, both would have completed infinitely many revolutions, so the number of Jupiter's revolutions would equal Saturn's, though Jupiter revolves more than twice as often. Avicenna's followers replied that infinite quantities do not obey the rules of finite ones, a reply that Cantor's mathematics would vindicate.

> **Pause and consider.** Hilbert's Hotel seems absurd. Is absurdity a sign of impossibility, or only of unfamiliarity?`,
    },
    {
      title: "The Big Bang and Its Interpretation",
      body: `## An expanding universe

Craig's scientific argument for the second premise appeals to **Big Bang cosmology**. In 1927, the Belgian priest and physicist **Georges Lemaître** (1894–1966) proposed, on the basis of Einstein's general theory of relativity, that the universe is expanding; in 1931, he suggested that it originated in a "primeval atom." In 1929, the American astronomer **Edwin Hubble** published evidence that distant galaxies are receding from us at speeds proportional to their distance. In 1965, **Arno Penzias** and **Robert Wilson** detected the **cosmic microwave background radiation**, the residual heat of the early universe, which confirmed the Big Bang model against its rival, the "steady state" theory. The universe, on the standard model, was once extremely hot and dense, and has been expanding for some 13.8 billion years.

## A beginning?

Does the Big Bang show that the universe **began to exist**? The standard model, extrapolated backward, reaches a **singularity**, a point at which density and temperature become infinite and the laws of physics break down. Craig and others take this as evidence of an absolute beginning of space, time, and matter. In 2003, the physicists **Arvind Borde**, **Alan Guth**, and **Alexander Vilenkin** proved a theorem showing that any universe that has, on average, been expanding throughout its history cannot be infinite in the past, but must have a past boundary. Vilenkin has said that cosmologists can no longer hide behind the possibility of a past-eternal universe.

## The caution of physicists

Other physicists urge caution. The singularity marks the point at which our current theories fail, not necessarily the beginning of everything. A theory of **quantum gravity**, which does not yet exist in an accepted form, might describe what happened "before" the Big Bang, or show that the question makes no sense. Various models, such as **eternal inflation**, **cyclic** universes, and the "**no-boundary**" proposal of **James Hartle** and **Stephen Hawking** (1983), suggest ways the universe might not have had a beginning in the ordinary sense. Hawking wrote in *A Brief History of Time* (1988) that if the universe were completely self-contained, without boundary or edge, it would have neither beginning nor end; "What place, then, for a creator?"

## Lemaître and the pope

The theological use of the Big Bang has a history. In 1951, Pope **Pius XII**, in an address to the Pontifical Academy of Sciences, welcomed the new cosmology as confirming the creation of the world in time. Lemaître, himself a priest, was uneasy. He thought his theory was a scientific hypothesis, which might be revised, and that it should not be used to prove a theological doctrine, which did not depend on it. He reportedly persuaded the pope's advisers not to repeat the claim. Lemaître's position was close to that of Aquinas: the beginning of the world is a matter of faith, not of scientific proof.

## Something from nothing?

In *A Universe from Nothing* (2012), the physicist **Lawrence Krauss** argued that physics can explain how a universe could arise from "nothing," through quantum processes. In a widely discussed review in *The New York Times*, the philosopher of physics **David Albert** replied that Krauss's "nothing" was not nothing at all, but a quantum field or vacuum, governed by laws; and that explaining how a universe emerges from such a state does not answer the question of why there are fields and laws in the first place. Albert's point echoes Leibniz: the question "why is there something rather than nothing?" is not a question physics can answer, since physics always starts from something.

## The upshot

The scientific evidence is consistent with a beginning, and some theorems point toward one. But whether the universe began to exist **absolutely** is not settled by current physics. Theists who use the kalam argument must hold that the evidence makes a beginning more likely than not. Theists who follow Aquinas can be indifferent to the outcome, since their arguments do not depend on it.

> **Pause and consider.** Lemaître warned against using the Big Bang to prove creation. Was he right? What is the danger of tying an argument for God to a scientific theory?`,
    },
    {
      title: "The Nature of the First Cause",
      body: `## From cause to God

Suppose the kalam argument succeeds: the universe began to exist and has a cause. What kind of cause? Craig argues in a second stage that the cause must have certain properties.

## Timeless, spaceless, immaterial

If the cause brought **time, space, and matter** into existence, it cannot itself be in time, space, or matter, at least "before" creation. It must therefore be **timeless**, **spaceless**, and **immaterial**. And it must be **enormously powerful**, to bring the universe into being. It must be **uncaused**, since an infinite regress of causes is excluded by the same arguments that excluded an infinite past.

## Personal

Most strikingly, Craig argues that the cause must be **personal**. His reasoning runs as follows. If the cause were an impersonal set of necessary and sufficient conditions existing timelessly, its effect would exist timelessly too, since whenever the conditions are present, the effect follows. A timeless impersonal cause would have a timeless effect. But the universe had a beginning. How can a timeless cause produce an effect with a beginning? Only, Craig argues, if the cause is a **free agent**, who chooses, timelessly, to create a world with a beginning. Craig compares a person seated from eternity who freely wills to stand up. The only kinds of things known to be timeless and immaterial, he adds, are abstract objects, such as numbers, which cannot cause anything, and minds. So the cause is a mind: a personal Creator.

## Objections

Critics have raised many objections. Some argue that the concept of **causation without time** is incoherent: causes precede their effects, and if there was no time before the universe, there could be no cause before it. The philosopher of science **Adolf Grünbaum** argued that the question "what caused the Big Bang?" is ill-formed, since it presupposes a time before time. Craig replies that causes can be **simultaneous** with their effects, and that the first moment of time can have a cause that is timeless "without" creation and temporal "with" it.

Others ask why a timeless person could act at all, since acting seems to involve change. And some argue that even if the argument works, it reaches only a powerful creator, not a God who is perfectly good, omniscient, or worthy of worship; Craig agrees that the kalam argument alone does not establish all of God's attributes, and that other arguments are needed for the rest.

## The cumulative picture

This lesson and the last have examined the main forms of the cosmological argument: from change (Aristotle and Aquinas), from essence and existence (Avicenna and Aquinas), from sufficient reason (Leibniz and Clarke), and from a beginning (al-Ghazali and Craig). They share a structure: something about the world—change, existence, contingency, beginning—calls for an explanation that cannot be found in the world itself.

Critics share a structure of response too: they deny that the feature calls for explanation (Russell's brute fact), or deny that the explanation must lie outside the world (the universe as necessary), or deny that the explanation, if there is one, is God (the gap problem). The debate turns on deep questions of metaphysics, about causation, necessity, explanation, and the infinite, that cannot be settled quickly.

## Looking ahead

In the next lesson, we turn from the existence of the world to its **order**: from cosmological to teleological arguments. Here the debate has been shaped more directly by science—by Darwin, by modern physics, and by the discovery that the universe appears to be fine-tuned for life.

> **Pause and consider.** Craig argues that only a free, personal agent could produce a temporal effect from a timeless cause. Is this persuasive? What alternatives might a critic propose?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Read each passage carefully, then write your answers in your notebook.

## 1. Leibniz, Principles of Nature and Grace 7 (1714)

> Why is there something rather than nothing? For nothing is simpler and easier than something.

**Questions**

1. How does Leibniz use the principle of sufficient reason to answer this question?
2. Why does it not matter, for his argument, whether the world had a beginning?

## 2. Russell and Copleston, BBC debate (1948)

> I should say that the universe is just there, and that's all.

**Questions**

1. What is a "brute fact," and why does Russell think the existence of the universe is one?
2. Copleston replied that Russell refused to "sit down at the chess-board." Is this fair?

## 3. al-Ghazali, The Jerusalem Letter

> Every being which begins has a cause for its beginning; now the world is a being which begins.

**Questions**

1. Which premise of this argument did Aquinas reject as unprovable, and why?
2. How does Craig defend it?

## 4. Hilbert's Hotel

Consider the case described in this lesson: infinitely many guests check out, and the hotel is still full.

**Questions**

1. What does Craig conclude from such cases?
2. Do they show that an actual infinite is impossible, or only that it is strange?

## Drawing the threads together

In a paragraph, compare the argument from contingency with the kalam argument. Which is stronger, and why? Use at least two of the passages.`,
    },
  ],
  readings: [
    { kind: "book", title: "Five Proofs of the Existence of God", author: "Edward Feser", publisher: "Ignatius Press", year: "2017", note: "Read chapter 5, the rationalist proof." },
    { kind: "book", title: "The Monadology and Other Philosophical Writings", author: "G. W. Leibniz, trans. Robert Latta", publisher: "Clarendon Press", year: "1898", note: "In the public domain. Read the Monadology, sections 31–45, and the Principles of Nature and Grace, sections 7–8." },
    { kind: "book", title: "The Cosmological Argument", author: "William L. Rowe", publisher: "Princeton University Press", year: "1975", note: "Read the chapters on Clarke and on the principle of sufficient reason." },
  ],
  media: [
    { kind: "book", title: "The Kalam Cosmological Argument", author: "William Lane Craig", publisher: "Macmillan", year: "1979", note: "Read Part II, on the argument's premises." },
    { kind: "book", title: "The Principle of Sufficient Reason: A Reassessment", author: "Alexander R. Pruss", publisher: "Cambridge University Press", year: "2006", note: "A demanding defense; read the introduction." },
  ],
  questions: [
    {
      prompt: "What is Avicenna's distinction between a possible and a necessary existent?",
      choices: [
        "Between things that are large and small",
        "A possible existent's essence does not require its existence; a necessary existent's essence does",
        "Between things in heaven and on earth",
        "Between the living and the dead",
      ],
      answer: 1,
      explanation: "It underlies Aquinas's distinction of essence and existence.",
    },
    {
      prompt: "What is the principle of sufficient reason?",
      choices: [
        "That reason is sufficient for faith",
        "That nothing is real or true unless there is a sufficient reason why it is so and not otherwise",
        "That every argument needs two premises",
        "That God is reasonable",
      ],
      answer: 1,
      explanation: "Leibniz stated it in the Monadology (1714).",
    },
    {
      prompt: "What is the point of Leibniz's example of the geometry book copied forever?",
      choices: [
        "That books are eternal",
        "That an infinite regress of copies does not explain why there is such a book at all",
        "That geometry is necessary",
        "That copying preserves truth",
      ],
      answer: 1,
      explanation: "An infinite regress does not explain the whole series.",
    },
    {
      prompt: "What did Bertrand Russell say about the universe in his 1948 debate with Copleston?",
      choices: [
        "That it was created",
        "That it is \"just there, and that's all\"",
        "That it is necessary",
        "That it is an illusion",
      ],
      answer: 1,
      explanation: "He treated its existence as a brute fact.",
    },
    {
      prompt: "What is Russell's \"mother\" objection?",
      choices: [
        "That God has a mother",
        "That from every human having a mother it does not follow that the human race has one; so from every thing having a cause it does not follow that the universe has one",
        "That Copleston misquoted his mother",
        "That the PSR is maternal",
      ],
      answer: 1,
      explanation: "It charges the argument with the fallacy of composition.",
    },
    {
      prompt: "What is the modal collapse objection to the strong PSR?",
      choices: [
        "That modal logic is false",
        "That if every truth has a sufficient explanation, every truth may turn out to be necessary, leaving no contingency",
        "That possible worlds do not exist",
        "That God collapses",
      ],
      answer: 1,
      explanation: "Peter van Inwagen developed it in 1983.",
    },
    {
      prompt: "What are the premises of Craig's kalam argument?",
      choices: [
        "Everything has a cause; God is everything",
        "Whatever begins to exist has a cause; the universe began to exist",
        "The universe is eternal; eternity needs a cause",
        "Motion requires a mover; the universe moves",
      ],
      answer: 1,
      explanation: "The conclusion is that the universe has a cause.",
    },
    {
      prompt: "What is Hilbert's Hotel meant to illustrate?",
      choices: [
        "That hotels should have more rooms",
        "The strange consequences of supposing an actually infinite collection exists",
        "That infinity is impossible in mathematics",
        "That God runs a hotel",
      ],
      answer: 1,
      explanation: "Craig argues such absurdities show an actual infinite cannot exist in reality.",
    },
    {
      prompt: "What did the Borde–Guth–Vilenkin theorem (2003) show?",
      choices: [
        "That God exists",
        "That a universe that has on average been expanding cannot be infinite in the past",
        "That the Big Bang did not happen",
        "That time is an illusion",
      ],
      answer: 1,
      explanation: "Whether this implies an absolute beginning remains debated.",
    },
    {
      prompt: "Why did Georges Lemaître resist using the Big Bang to prove creation?",
      choices: [
        "Because he was an atheist",
        "Because he regarded his theory as a revisable scientific hypothesis that should not be used to prove a theological doctrine",
        "Because he rejected the Big Bang",
        "Because the pope disagreed",
      ],
      answer: 1,
      explanation: "His position was close to Aquinas's.",
    },
  ],
  reflection:
    "Leibniz asked, \"Why is there something rather than nothing?\" Russell answered that the universe \"is just there.\" In 500–800 words, assess this exchange, considering whether the principle of sufficient reason is true, whether the kalam argument offers a better route, and what the debate reveals about the limits of explanation.",
};
