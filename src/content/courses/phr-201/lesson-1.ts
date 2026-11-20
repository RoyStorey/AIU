import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "That Than Which Nothing Greater Can Be Conceived: The Ontological Argument",
  summary:
    "What an argument for God's existence is and what it would mean for one to succeed; Anselm's argument in Proslogion 2–4; Gaunilo's lost island and Anselm's reply; Aquinas's rejection and Descartes' revival; Kant, Hume, and Frege on existence; the modal arguments of Malcolm, Hartshorne, and Plantinga; Gödel's proof; and what the argument teaches even if it fails.",
  pages: [
    {
      title: "What Is an Argument for God?",
      body: `## The question of this course

PHR 101 asked whether belief in God can be rational, and traced the debate from the early church to the present. This course asks a narrower question: **are there good arguments for the existence of God?** We study the main families of arguments in their classic and modern forms, with the strongest objections to each.

## Kinds of argument

Philosophers sort the arguments in several ways.

- **A priori** arguments start from concepts alone, without appeal to experience. The **ontological argument**, the subject of this lesson, is the main example.
- **A posteriori** arguments start from some fact about the world we know by experience: that things change, that things exist, that the universe began, that it is ordered, that there are moral obligations, that people have religious experiences.

They can also be sorted by the kind of support they claim:

- **Deductive** arguments claim that if the premises are true, the conclusion must be true.
- **Inductive** or **probabilistic** arguments claim only that the premises make the conclusion more likely.
- **Abductive** arguments, or "inference to the best explanation," claim that God is the best explanation of some fact.

## The main families

The arguments studied in this course fall into a few families:

1. **Ontological** arguments, from the concept of God (Lesson I);
2. **Cosmological** arguments, from change, causation, contingency, or the beginning of the universe (Lessons II and III);
3. **Teleological** or design arguments, from order and purpose in nature (Lesson IV);
4. **Moral** arguments and arguments from **religious experience**, followed by the most serious argument on the other side, the **problem of evil** (Lesson V).

## What would success mean?

What would it mean for an argument for God to succeed? A deductive argument is **valid** if its conclusion follows from its premises, and **sound** if it is valid and its premises are true. But soundness is not enough. The argument "Either God exists or 2 + 2 = 5; 2 + 2 does not equal 5; therefore God exists" is valid, and, if God exists, sound; but it persuades no one, because no one can know the first premise is true without already knowing the conclusion.

So philosophers ask more of an argument: that its premises be **more plausible** than the denial of its conclusion, to at least some reasonable people. The philosopher **George Mavrodes**, in *Belief in God* (1970), argued that proofs are "**person-relative**": an argument may be a proof for one person, who knows its premises, and not for another. Alvin Plantinga has similarly suggested that the theistic arguments are best seen not as knock-down proofs but as arguments that can raise the rational credibility of belief in God for those who find their premises plausible.

## Two approaches

The two writers whose books frame this course take different approaches. **Edward Feser**, in *Five Proofs of the Existence of God* (2017), defends, in the tradition of Aristotle and Aquinas, five **demonstrative** arguments that he believes establish God's existence with certainty, if their metaphysical premises are accepted. He does not defend the ontological argument. **Alvin Plantinga**, in *God, Freedom, and Evil* (1974), defends a modal version of the ontological argument as rationally acceptable but not compelling, and defends theism against the problem of evil. Between them, they represent the two main styles of modern natural theology: classical metaphysics and analytic philosophy of religion.

## Why the arguments matter

As we saw in PHR 101, many believers have never relied on arguments; Pascal thought the metaphysical proofs "make but little impression," and Plantinga holds that belief in God can be rational without them. Why study them? Because they clarify what is meant by "God"; because they test our deepest assumptions about causation, explanation, possibility, and value; because many people have in fact come to belief, or been confirmed in it, through them; and because critics of religion also rely on arguments, which must be weighed in turn.

> **Pause and consider.** Can an argument be sound and yet fail to give anyone a reason to believe its conclusion? What else, besides soundness, should we ask of an argument for God?`,
    },
    {
      title: "Anselm's Argument",
      body: `## The setting

As we saw in PHR 101, **Anselm** of Canterbury (1033–1109) wrote the *Proslogion* (1077–1078) as a prayer, under the motto "faith seeking understanding." He sought, he said in the preface, a single argument that would need nothing but itself to prove that God truly exists. He found it, he tells us, after long and anxious searching, when he had almost given up.

## The definition

Anselm begins with what believers mean by "God":

> And, indeed, we believe that thou art a being than which nothing greater can be conceived.
>
> — Anselm, *Proslogion* 2, trans. S. N. Deane (1903)

Notice that this is not a definition invented for the argument; it is meant to capture what believers already think. The God of Christian faith is not merely very great, or the greatest thing that happens to exist, but the greatest that **can be conceived**.

## The fool

Anselm then considers "the fool" of Psalm 14:1, who "hath said in his heart, There is no God." Even the fool, Anselm argues, understands the phrase "a being than which nothing greater can be conceived" when he hears it; so the being exists **in his understanding**, as an object of thought. Anselm illustrates with a painter: before painting a picture, the painter has it in his understanding, but does not yet understand it to exist in reality; after painting it, he has it in both.

## The reductio

Then comes the decisive step. Can that than which nothing greater can be conceived exist in the understanding **alone**? No:

> For, suppose it exists in the understanding alone: then it can be conceived to exist in reality; which is greater.
>
> — Anselm, *Proslogion* 2, trans. Deane

If it existed only in the understanding, we could conceive of something greater—the same being, existing in reality too. But then that than which nothing greater can be conceived would be something than which a greater can be conceived, which is a contradiction. So it must exist both in the understanding and in reality.

## The argument in steps

Philosophers usually set out the argument as a **reductio ad absurdum**, an argument that assumes the opposite of what it wants to prove and derives a contradiction:

1. God is that than which nothing greater can be conceived. (Definition)
2. That than which nothing greater can be conceived exists at least in the understanding. (Even the fool understands it.)
3. Suppose it exists in the understanding alone. (Assumption for reductio)
4. Existing in reality as well as in the understanding is greater than existing in the understanding alone. (Premise)
5. Then we could conceive of something greater than that than which nothing greater can be conceived: namely, the same being existing in reality. (From 3 and 4)
6. But that is a contradiction. (From 1 and 5)
7. So the assumption is false: that than which nothing greater can be conceived exists in reality. (From 3–6)

## The key premises

Each premise can be questioned. Premise 2 assumes that understanding a phrase puts its object "in the understanding," and that the phrase is coherent. Premise 4 assumes that **existence** is a kind of greatness, something that can be added to a being to make it greater. And the whole argument assumes that we can compare an existing being with a merely conceived one, as if both were "beings" in the same sense. The objections we study in this lesson attack these assumptions.

## What kind of argument

The argument is called **ontological**, from the Greek *on*, "being," because it argues from the concept of a being to its existence. The name was given by Kant in the eighteenth century; Anselm had no special name for it. Its extraordinary ambition is to prove God's existence without appealing to any fact about the world at all—only to the concept of God and to principles of logic.

> **Pause and consider.** Is existence a kind of greatness? Is a real hundred dollars "greater" than an imagined hundred dollars, and in what sense?`,
    },
    {
      title: "Proslogion 3: Necessary Existence",
      body: `## A second argument?

In the next chapter, Anselm goes further. It is not enough to show that God exists; God exists in a special way. God cannot even be **conceived not to exist**:

> And it assuredly exists so truly, that it cannot be conceived not to exist. For, it is possible to conceive of a being which cannot be conceived not to exist; and this is greater than one which can be conceived not to exist.
>
> — Anselm, *Proslogion* 3, trans. Deane

If that than which nothing greater can be conceived could be conceived not to exist, then we could conceive of something greater—a being that could not be conceived not to exist. So God's existence is not merely actual but **necessary**: it is inconceivable that God should not be.

## The difference

The difference between chapters 2 and 3 became important in the twentieth century. Chapter 2 treats **existence** as a perfection: a being that exists is greater than one that does not. Chapter 3 treats **necessary existence** as a perfection: a being that cannot fail to exist is greater than one that merely happens to exist. As we will see, Norman Malcolm argued that the second argument survives objections that defeat the first.

## Why everything else can be thought not to be

Anselm adds that everything other than God can be conceived not to exist. Mountains, stars, human beings, angels, all exist contingently: they had a beginning, or depend on something else, or might not have been. God alone exists "most truly of all," since God alone exists of himself and cannot not exist. This connects the ontological argument with the cosmological arguments of Lessons II and III, which argue from contingent beings to a necessary one.

## How can the fool say it?

If God cannot be conceived not to exist, how can the fool say in his heart that there is no God? Anselm answers in chapter 4 that there are two ways of "conceiving" or "saying in the heart." In one way, we think only the **words**: we can say "God does not exist" as we can say "a square circle," without understanding what the words mean. In the other way, we understand the **thing itself** that the words signify. No one who understands what God is can think that God does not exist; the fool has only the words.

## Beyond all conceiving

In chapter 15, Anselm adds a striking qualification. God is not only that than which nothing greater can be conceived; God is "**greater than can be conceived**." Anselm writes, in Deane's translation, that it is possible to conceive of a being greater than can be conceived, and that if God were not such a being, a greater than God could be conceived. Our concept of God, then, does not contain God; it points beyond itself. This is the negative theology of Pseudo-Dionysius, met in PHR 101, within the ontological argument itself.

## Prayer and proof

The *Proslogion* ends with chapters on God's attributes—justice, mercy, eternity, omnipresence—and with a prayer for the joy of heaven. The argument is embedded in devotion. Karl Barth, in his book on Anselm (1931), argued that the argument was never meant for unbelievers, but was faith's reflection on the name of God it had received in revelation. Most philosophers, however, read Anselm as intending a real argument, which a fool who understood it would have to accept. Both readings can claim support from the text.

## Perfect being theology

Whatever we think of the argument, Anselm's formula has had a second life as a method. **Perfect being theology** works out God's attributes by asking what a maximally great being must be like: if it is greater to be all-knowing than not, God is all-knowing; if greater to be good, God is good. Many contemporary philosophers of religion, such as **Thomas Morris** in *Anselmian Explorations* (1987), use this method even if they reject the ontological argument as a proof.

> **Pause and consider.** Anselm says God is both "that than which nothing greater can be conceived" and "greater than can be conceived." Are these consistent?`,
    },
    {
      title: "Gaunilo's Island",
      body: `## A reply on behalf of the fool

The first critic of the *Proslogion* was a monk named **Gaunilo**, of the abbey of Marmoutier near Tours, who wrote a short reply titled *On Behalf of the Fool* (*Pro insipiente*). Anselm was so pleased to be taken seriously that he asked for Gaunilo's reply to be copied together with the *Proslogion*, along with his own answer, and they have traveled together ever since.

## First objection: understanding

Gaunilo's first objection concerned premise 2. Do we really have God "in the understanding" when we hear the phrase "that than which nothing greater can be conceived"? We understand the words, Gaunilo said, but we have no idea of the thing itself, since we know neither it nor anything like it. If understanding words were enough to put their objects in the understanding, then all sorts of false and unreal things would be in the understanding too.

## The lost island

His second objection is famous. Gaunilo asks us to imagine an island somewhere in the ocean, called the "**Lost Island**" because no one can find it, richer in every delight than the fabled Islands of the Blest. Suppose someone argued:

> … you can no longer doubt that this island which is more excellent than all lands exists somewhere, since you have no doubt that it is in your understanding.
>
> — Gaunilo, *On Behalf of the Fool* 6, trans. Deane

Since it is more excellent to exist in reality than in the understanding alone, the most excellent island must exist; otherwise any real island would be more excellent. Gaunilo says that he would think such a person was joking, or that he himself would be the fool for believing him. The argument has the same form as Anselm's; if it fails for the island, it fails for God.

## Parody

Gaunilo's strategy is called **parody**: showing that an argument is unsound by constructing another argument of the same form with an obviously false conclusion. If Anselm's reasoning proves the existence of the greatest conceivable island, it proves too much. Modern critics have multiplied parodies: the greatest conceivable pizza, the greatest conceivable devil, a "no-devil" corollary that shows the greatest evil cannot exist.

## Anselm's reply

Anselm's reply was confident. His argument, he insisted, applies only to "that than which a greater cannot be conceived," not to "the greatest island" or anything else:

> … if any man shall devise anything existing either in reality or in concept alone (except that than which a greater cannot be conceived) to which he can adapt the sequence of my reasoning, I will discover that thing, and will give him his lost island, not to be lost again.
>
> — Anselm, *Reply to Gaunilo* 3, trans. Deane

Gaunilo's island is the greatest **island**, not the greatest **conceivable being**; and an island, by its nature, is a limited thing, which can be conceived not to exist, since it has parts, a beginning, and a place. Only a being than which nothing greater can be conceived has existence as part of what it is.

## Intrinsic maximum

Modern defenders have developed Anselm's reply. Plantinga argued that the concept of a greatest possible island is **incoherent**, because the great-making properties of islands have no **intrinsic maximum**. However many palm trees or dancing girls an island has, one could always conceive of one with more. By contrast, the properties that make a being great—knowledge, power, goodness—do have intrinsic maxima: omniscience, omnipotence, perfect goodness. So the concept of a maximally great being may be coherent while the concept of a maximally great island is not.

## Does the reply work?

Critics reply that the parody can be rebuilt with properties that do have maxima. And they press Gaunilo's first point: Anselm assumes that "that than which nothing greater can be conceived" is a coherent concept. If it is not—if, for instance, perfect power and perfect goodness conflict—then the argument never gets started. This question, whether the concept of God is **possible**, will return when we study the modal argument.

> **Pause and consider.** Does Anselm's reply to Gaunilo succeed? Can you construct a parody that avoids his objection?`,
    },
    {
      title: "Aquinas, Descartes, and Leibniz",
      body: `## Aquinas's rejection

**Thomas Aquinas**, who admired Anselm, nevertheless rejected his argument. In the second question of the *Summa Theologiae*, he asked whether God's existence is **self-evident**. His answer turned on a distinction between what is self-evident **in itself** and what is self-evident **to us**:

> Therefore I say that this proposition, "God exists," of itself is self-evident, for the predicate is the same as the subject, because God is His own existence. … Now because we do not know the essence of God, the proposition is not self-evident to us.
>
> — Thomas Aquinas, *Summa Theologiae* I, q. 2, a. 1, trans. Fathers of the English Dominican Province (1911)

In God, essence and existence are identical; so if we knew God's essence, we would see that God must exist. But we do not know God's essence in this life. We know God only through his effects. Therefore God's existence must be demonstrated **a posteriori**, from the world, as in the five ways we study in Lessons II–IV.

## Two further objections

Aquinas added two further points in the replies to objections. First, not everyone who hears the word "God" understands it to mean "that than which nothing greater can be thought"; some have believed God to be a body. Second, even granting that everyone understands the word in this sense, it does not follow that what the word signifies exists in reality, but only that it exists in the mind; unless one already grants that there is something than which nothing greater can be thought, one cannot conclude that it exists.

## Descartes' version

In the fifth of his *Meditations* (1641), as we saw in PHR 101, **Descartes** revived the argument in a new form. He did not begin from "that than which nothing greater can be conceived," but from the idea of a **supremely perfect being**. Just as the idea of a triangle contains the property of having angles equal to two right angles, he argued, the idea of a supremely perfect being contains existence, since existence is a perfection. Existence can no more be separated from the essence of God, he wrote, than the idea of a valley from the idea of a mountain. Descartes' version is a straightforward **deduction**, not a reductio: perfection includes existence; God has all perfections; therefore God exists.

## Caterus's objection

One of Descartes' critics, the Dutch priest **Johannes Caterus**, raised in the first set of objections a point like Aquinas's: even if the concept of a supremely perfect being includes existence, it follows only that **if** such a being exists, it exists necessarily; it does not follow that it exists. A "existing lion" includes existence in its concept, but that does not make any lion exist. Descartes replied that God is unique: his idea is not invented, and necessary existence belongs to it alone, as part of what it is, in a way that existence does not belong to any other concept.

## Leibniz: is God possible?

**Gottfried Wilhelm Leibniz** (1646–1716) thought Descartes' argument was sound but incomplete. It proves that **if God is possible**, God exists, since a being whose essence includes existence cannot be merely possible. But it does not prove that God is possible—that the idea of a being with all perfections contains no hidden contradiction, as the idea of "the greatest number" does. Leibniz tried to supply the missing step, arguing that perfections are simple positive qualities, which cannot contradict each other, and so can all exist together in one being. Whether he succeeded is doubtful, but he identified the crucial question that every later version of the argument would face.

## The rationalist age

For the rationalists of the seventeenth century—Descartes, Spinoza, Leibniz—the ontological argument fitted a whole vision of reason, in which the deepest truths could be known by analyzing concepts. Spinoza's *Ethics* (1677) begins with God, defined as substance, and deduces that substance necessarily exists. The empiricists, starting from experience, would find the argument suspect from the beginning; and Kant, after Hume, would give it the objection that became standard.

> **Pause and consider.** Leibniz argued that the ontological argument proves only that if God is possible, God exists. Is that conditional conclusion itself significant? Why or why not?`,
    },
    {
      title: "Kant, Hume, and Frege on Existence",
      body: `## Hume: whatever we conceive as existent

Before Kant, **Hume** had stated a principle that undermines the argument. As we saw in PHR 101, Cleanthes says in the *Dialogues* (Part IX) that "whatever we conceive as existent, we can also conceive as non-existent." If so, there can be no being whose non-existence is inconceivable, and the claims of *Proslogion* 3 fail. For Hume, all matters of fact can be denied without contradiction; only relations of ideas, as in mathematics, are necessary. "God exists" is a matter of fact, and so cannot be necessary.

## Kant: being is not a real predicate

**Immanuel Kant**, in the *Critique of Pure Reason* (1781), gave the objection that most philosophers came to accept. Existence, he argued, is not a "real predicate"—not a property that adds anything to the concept of a thing:

> Being is evidently not a real predicate, that is, a conception of something which is added to the conception of some other thing.
>
> — Immanuel Kant, *Critique of Pure Reason*, trans. J. M. D. Meiklejohn (1855)

When I say "God is omnipotent," I add a property to the subject. When I say "God exists," I add nothing to the concept; I only posit the subject, with all its properties, as an object in the world. Kant's famous example: a hundred real dollars contain no more, in their concept, than a hundred possible dollars, though my financial position is very different if I have the real ones.

If existence is not a property, it cannot be a perfection, and it cannot be included in the concept of a most perfect being. Anselm's premise 4 and Descartes' argument both fail.

## Kant's dilemma

Kant also posed a dilemma. Is the proposition "God exists" **analytic** (true by the meaning of its terms, like "bachelors are unmarried") or **synthetic** (adding information beyond the meaning of its terms)? If analytic, then either we have smuggled existence into the concept of God, which begs the question, or the proposition is a mere tautology, telling us nothing about reality. If synthetic, then it can be denied without contradiction, and the ontological argument fails. Either way, the argument cannot prove what it claims.

## Frege: existence and number

The German logician **Gottlob Frege** (1848–1925), the founder of modern logic, gave Kant's point a precise form. In *The Foundations of Arithmetic* (1884), he argued that existence is a property not of objects but of **concepts**: to say that something exists is to say that a concept has at least one instance. "Horses exist" means that the concept *horse* is instantiated; "unicorns do not exist" means that the concept *unicorn* is not. Frege compared existence to number: to say that there are four moons of Jupiter is to say something about the concept *moon of Jupiter*, not about each moon. To affirm existence, he wrote, is to deny the number zero.

In modern logic, existence is expressed by the **existential quantifier** ("there is an x such that…"), not by a predicate. On this view, the ontological argument confuses the logical role of existence. It treats "exists" as a property that God has, alongside omnipotence and goodness, when it is really a claim that the concept of God has an instance—which is exactly what is in question.

## Replies

Defenders of the argument have replied in several ways. Some, following **Alvin Plantinga**, have argued that even if existence is not a property, the argument can be restated without treating it as one, using the concept of **necessary existence** or **maximal greatness**, which are properties. Others argue that Kant's dollars miss the point: Anselm did not claim that existence adds to a thing's concept, but that a being that exists in reality is greater than one that exists only in thought, which is a claim about greatness, not about concepts. And some contemporary metaphysicians argue that existence is, after all, a property of objects.

## The verdict of history

By the twentieth century, most philosophers regarded Kant's and Frege's objections as decisive, at least against Anselm's chapter 2 and Descartes. **Bertrand Russell**, in his *Autobiography*, recalled that as a young man he was briefly convinced; walking down Trinity Lane in Cambridge in 1894, he threw a tin of tobacco into the air and exclaimed, "Great Scott, the ontological argument is sound!" Later he concluded, with Frege, that it rested on a confusion. But in 1960, a new version appeared, which claimed to avoid Kant's objection altogether.

> **Pause and consider.** Frege argued that existence is a property of concepts, not of objects. If he is right, does the ontological argument collapse, or can it be restated?`,
    },
    {
      title: "Bonaventure, Scotus, and Hegel",
      body: `## Medieval defenders

Aquinas's rejection did not end the medieval career of the argument. His Franciscan contemporary **Bonaventure** (1221–1274) accepted it. For Bonaventure, the knowledge of God is "implanted" in the human mind, as Augustine taught, and the argument draws out what the mind already knows: God's being is so certain that it cannot be thought not to be. He compared those who deny God to people who see the light but turn their eyes away. In this he stood in the Augustinian family that Gilson described, which we met in PHR 101.

## Scotus's "coloring"

**John Duns Scotus** (c. 1266–1308) took a middle path. He did not think the argument, as Anselm stated it, was a demonstration, because it assumed without proof that the concept of a greatest conceivable being is consistent. But he thought it could be "**colored**," as he put it, to make it persuasive: God is that than which, when thought **without contradiction**, nothing greater can be thought without contradiction. Scotus then argued, by other means, that such a being is possible, and that, if possible, it exists. He anticipated Leibniz's demand by three centuries: the argument stands or falls with the possibility of God.

## Hegel

After Kant, most philosophers rejected the argument. A notable exception was **G. W. F. Hegel** (1770–1831), who thought Kant's hundred dollars missed the point. Dollars are finite things, whose concept and existence are distinct; but the concept of God is the concept of the infinite, which is not one thing among others, and of which it makes no sense to say that it is merely thought. For Hegel, the ontological argument expressed the deepest truth of philosophy: that thought and being are ultimately one. Hegel's defense persuaded few outside his school, but it pressed a question we have met before, from Aquinas and Pseudo-Dionysius: whether God can be treated as an object to which our ordinary logic of concepts and existence applies.

## A pattern

Across these thinkers a pattern appears. Defenders of the argument—Anselm, Bonaventure, Descartes, Hegel—tend to see God as uniquely related to thought, so that the concept of God is unlike any other. Critics—Gaunilo, Aquinas, Hume, Kant, Frege—tend to see the concept of God as one concept among others, subject to the same rules. Much of the debate turns on which picture is right.

> **Pause and consider.** Hegel argued that the concept of God, the infinite, is unlike the concept of any finite thing. If he is right, does Kant's objection lose its force?`,
    },
    {
      title: "The Modal Arguments",
      body: `## Malcolm

In 1960, the American philosopher **Norman Malcolm** (1911–1990), a student and friend of Wittgenstein, published "Anselm's Ontological Arguments" in *The Philosophical Review*. He agreed with Kant that *Proslogion* 2 fails, because existence is not a perfection. But he argued that *Proslogion* 3 contains a **second argument**, based not on existence but on **necessary existence**, which Kant's objection does not touch.

Malcolm's reasoning went roughly like this. If God, a being than which nothing greater can be conceived, does not exist, then God **cannot come into existence**, since that would require a cause, and God would then depend on something else and not be the greatest. If God does exist, God **cannot cease to exist**, for the same reason. So either God's existence is **impossible** or it is **necessary**. It is impossible only if the concept of God is self-contradictory. But the concept is not self-contradictory. Therefore God necessarily exists.

## Hartshorne

The American philosopher **Charles Hartshorne** (1897–2000), a leading figure in process philosophy, developed a similar argument in *The Logic of Perfection* (1962), using the tools of **modal logic**, the logic of necessity and possibility. Hartshorne argued that "Anselm's discovery" was that perfection cannot exist contingently: a perfect being would exist either necessarily or not at all. With a principle of modal logic, he derived that if a perfect being is possible, it exists.

## Possible worlds

**Alvin Plantinga** gave the modal argument its best-known form, in *The Nature of Necessity* (1974) and, more accessibly, in Part II of *God, Freedom, and Evil* (1974). He used the language of **possible worlds**, developed by logicians in the 1960s. A possible world is a complete way things could have been. A proposition is **possible** if it is true in at least one possible world, and **necessary** if it is true in every possible world. Our world, the **actual world**, is one of the possible worlds.

## Maximal greatness

Plantinga defined two properties:

- **Maximal excellence**: the property of being omniscient, omnipotent, and morally perfect.
- **Maximal greatness**: the property of having maximal excellence **in every possible world**.

A maximally great being, then, is not merely excellent in our world; it exists and is maximally excellent in every possible world. This avoids Kant's objection, because maximal greatness is a property, not "existence" as a bare predicate.

## The argument

Plantinga's argument, simplified, runs:

1. It is possible that a maximally great being exists. That is, there is some possible world in which a maximally great being exists.
2. If a maximally great being exists in some possible world, then it exists in every possible world. (By the definition of maximal greatness, together with a principle of modal logic called **S5**, according to which what is possibly necessary is necessary.)
3. So a maximally great being exists in every possible world.
4. So a maximally great being exists in the actual world.

## S5

The crucial step is the principle that **if something is possibly necessary, it is necessary**. In the modal logic called S5, facts about what is possible and necessary do not vary from world to world: if a proposition is necessary in some world, it is necessary in all. Many philosophers accept S5 as the correct logic of "broadly logical" or "metaphysical" necessity. Given S5 and the definition of maximal greatness, premise 1 implies the conclusion.

## Valid, not compelling

Plantinga claimed that his argument is **valid** and that its premises are, so far as we can tell, true. But he did not claim that it is a proof that every rational person must accept. The key premise—that maximal greatness is possibly exemplified—is not something everyone will accept, and Plantinga admitted that a rational person could reject it. What the argument shows, he concluded, is that it is not contrary to reason to accept its central premise, and therefore not contrary to reason to accept its conclusion. It establishes the **rational acceptability** of theism rather than its truth.

> **Pause and consider.** Plantinga's argument shows that if God's existence is possible, God exists. Is it obvious that God's existence is possible? How would you decide?`,
    },
    {
      title: "Objections to the Modal Argument",
      body: `## The possibility premise

Everything in the modal argument depends on its first premise: that a maximally great being **possibly** exists. In ordinary speech, "possible" seems a weak claim. Surely, one might think, it is at least possible that God exists. But in the modal argument, "possible" means "true in some possible world," and, given S5 and the definition of maximal greatness, to grant that God possibly exists is to grant that God necessarily exists. The argument has made the first premise exactly as strong as the conclusion.

## The reverse argument

Critics point out that a parallel argument can be constructed for the opposite conclusion. Consider the premise: it is possible that **no** maximally great being exists. This also seems plausible: surely there is some way things could have been without God. But if there is a possible world without a maximally great being, then a maximally great being does not exist in every possible world, and so, by definition, does not exist in any. Given S5, the "possibly not" premise implies that God's existence is impossible.

So we face a choice between two premises, each seemingly modest: "Possibly, God exists" and "Possibly, God does not exist." Given S5 and the concept of maximal greatness, they cannot both be true. The modal argument, the critics conclude, does not settle which is true; it only shows that the question of God's **possibility** is the whole question.

## Intuitions

How can we decide? Some philosophers argue that **conceivability** is a guide to possibility: we can conceive of God existing, so it is possible. But we can also conceive of God not existing. Others argue that the concept of a maximally great being is simple and positive, as Leibniz claimed, while the concept of a world without God involves a negation, so the first is more likely possible. Still others argue that we have no reliable intuitions about such extraordinary modal claims at all.

## Is maximal greatness coherent?

Another line of criticism asks whether the concept of maximal greatness is **coherent**. Can a being be both omnipotent and morally perfect, if a morally perfect being cannot do evil? Can a being be omniscient and unchanging, if it must know what time it is now? Can omnipotence be defined without paradox—can God make a stone too heavy for God to lift? Defenders of theism have worked to answer these questions, defining the divine attributes carefully, often in the tradition of Aquinas. But if any of them succeeds, the concept of a maximally great being is impossible, and the modal argument fails.

## Gödel's proof

The great logician **Kurt Gödel** (1906–1978), whose incompleteness theorems transformed mathematics, also worked on the ontological argument. In notes dated 1970, published after his death, he offered a formal proof in **higher-order modal logic**, following Leibniz. Gödel defined "positive properties" by axioms, defined God as a being that has all positive properties, and proved that such a being necessarily exists. The proof is valid, and computer scientists using automated theorem provers in 2013 and the following years checked the logic of versions of it. But, as with Plantinga's argument, everything depends on the axioms, especially the claim that positive properties form a consistent family; and critics, such as the philosopher **J. Howard Sobel**, have argued that the axioms lead to undesirable consequences, such as the collapse of all truths into necessary truths.

## Oppy's verdict

The Australian philosopher **Graham Oppy**, in *Ontological Arguments and Belief in God* (1995), surveyed every major version of the argument and concluded that none gives a reasonable non-theist any reason to accept its conclusion: each either begs the question or relies on premises that a non-theist can reasonably reject. Defenders reply that this is true of almost every interesting philosophical argument, including arguments against God's existence.

## Where the argument stands

The ontological argument has been declared dead many times, and has never stayed dead. Most philosophers, theists among them, do not think it succeeds as a proof. Many think the modal version is valid, and that its interest lies in what it reveals: that the existence of God, if God is understood as a maximally great being, cannot be a merely contingent matter. Either God's existence is necessary or it is impossible. There is no middle ground of "God happens to exist" or "God happens not to exist."

> **Pause and consider.** Critics argue that "possibly God exists" and "possibly God does not exist" seem equally plausible but cannot both be true. Which, if either, do you find more plausible? Why?`,
    },
    {
      title: "What the Argument Teaches",
      body: `## A persistent argument

Few arguments in philosophy have attracted so many distinguished defenders and critics: Anselm and Gaunilo, Aquinas and Bonaventure, Scotus, Descartes and Caterus, Spinoza, Leibniz, Hume, Kant, Hegel, Frege, Russell, Malcolm, Hartshorne, Plantinga, Gödel, Oppy. Why has it lasted? Several reasons may be given.

## It clarifies the concept of God

First, the argument clarifies **what is meant by "God."** In the tradition of Anselm and Aquinas, God is not one being among others, even the greatest; God is the fullness of being, that than which nothing greater can be conceived, whose essence is to exist. The modal argument shows a consequence: if God is understood this way, God's existence cannot be a contingent matter. Many popular debates about God, which treat God as a hypothetical entity that might or might not exist, like a planet beyond Neptune, miss this. Whatever one thinks of the argument, it shows that classical theism is a claim about necessary being.

## It tests our concepts

Second, the argument forces us to think hard about **existence**, **necessity**, and **possibility**. Is existence a property? What is it for something to be necessary? How do we know what is possible? Kant's and Frege's responses to the argument helped shape modern logic and metaphysics. The argument has been, in a sense, a whetstone on which philosophers have sharpened their tools.

## The relation to other arguments

Third, the ontological argument connects with the other arguments of this course. The cosmological arguments, studied in Lessons II and III, argue from contingent beings to a **necessary being**; but they must then show that this necessary being is God, which, Kant argued, requires the ontological argument. Defenders of the cosmological argument, such as Feser, deny this, arguing that the necessary being's attributes can be derived from its role as first cause. The question of whether "necessary being" makes sense at all, raised by Hume, is common to both families.

## Faith and the argument

Fourth, the argument raises again the question of PHR 101: what is the relation between faith and reason? Anselm wrote within faith, as prayer. Barth argued that the argument presupposes faith. Most philosophers have treated it as a free-standing argument. Perhaps both readings capture something. A person who already believes in God may find in the argument an illumination of what she believes—that God is not one thing among others but the source of all. A person who does not believe may find in it a challenge: to explain why the concept of a perfect being is not possible.

## Does anyone believe because of it?

It is sometimes said that no one has ever been converted by the ontological argument. That may be true; but Russell's tobacco tin shows that it can, at least briefly, convince a brilliant mind. More importantly, arguments rarely work alone. As Newman argued, in PHR 101, belief is typically reached by the convergence of many considerations. The ontological argument may play a role in such a convergence, by showing that the concept of God is coherent and that God's existence, if possible, is necessary.

## Looking ahead

In the next two lessons, we turn from the a priori to the a posteriori: from the concept of God to the existence of the world. The cosmological arguments ask why there is change, why there are causes, why there is something rather than nothing, and why the universe began. They have been defended by Aristotle, Avicenna, al-Ghazali, Maimonides, Aquinas, Leibniz, and, in our own day, Feser and William Lane Craig. They are, for many philosophers, the strongest arguments for God.

> **Pause and consider.** The modal argument implies that God's existence is either necessary or impossible. Does this change how you think about the question of whether God exists?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Read each passage carefully, then write your answers in your notebook. The complete texts of Anselm and Gaunilo are in Deane's public-domain translation.

## 1. Anselm, Proslogion 2 (1077–1078)

> For, suppose it exists in the understanding alone: then it can be conceived to exist in reality; which is greater.

**Questions**

1. Set out the argument of *Proslogion* 2 in numbered steps.
2. Which premise seems to you most open to challenge?

## 2. Gaunilo, On Behalf of the Fool 6

> … you can no longer doubt that this island which is more excellent than all lands exists somewhere, since you have no doubt that it is in your understanding.

**Questions**

1. What is Gaunilo's strategy?
2. How does Anselm reply? Does the idea of an "intrinsic maximum" strengthen the reply?

## 3. Aquinas, Summa Theologiae I, q. 2, a. 1

> Now because we do not know the essence of God, the proposition is not self-evident to us.

**Questions**

1. What distinction does Aquinas draw?
2. Why does it lead him to reject the ontological argument while affirming that God's existence is self-evident in itself?

## 4. Kant, Critique of Pure Reason

> Being is evidently not a real predicate.

**Questions**

1. What does Kant mean, and how does the example of the hundred dollars illustrate it?
2. Does Plantinga's modal argument escape Kant's objection?

## Drawing the threads together

In a paragraph, assess whether any version of the ontological argument succeeds, using at least three of the passages and the reverse modal argument.`,
    },
  ],
  readings: [
    { kind: "book", title: "St. Anselm's Proslogium, Monologium, An Appendix in Behalf of the Fool by Gaunilon, and Cur Deus Homo", author: "trans. Sidney Norton Deane", publisher: "Open Court", year: "1903", note: "In the public domain. Read the Proslogion, preface and chapters 1–5 and 15, Gaunilo's reply, and Anselm's answer." },
    { kind: "book", title: "God, Freedom, and Evil", author: "Alvin Plantinga", publisher: "Harper & Row; Eerdmans", year: "1974; Eerdmans ed., 1977", note: "Read Part II, section c, on the ontological argument." },
    { kind: "book", title: "Ontological Arguments and Belief in God", author: "Graham Oppy", publisher: "Cambridge University Press", year: "1995", note: "Read the introduction and conclusion." },
  ],
  media: [
    { kind: "book", title: "The Ontological Argument: From St. Anselm to Contemporary Philosophers", author: "ed. Alvin Plantinga", publisher: "Anchor Books", year: "1965", note: "A collection of the classic texts and replies, including Malcolm's 1960 essay." },
    { kind: "book", title: "Five Proofs of the Existence of God", author: "Edward Feser", publisher: "Ignatius Press", year: "2017", note: "Read the preface and chapter 1, on the Aristotelian proof." },
  ],
  questions: [
    {
      prompt: "What is the difference between a priori and a posteriori arguments for God?",
      choices: [
        "A priori arguments are older",
        "A priori arguments start from concepts alone; a posteriori arguments start from facts known by experience",
        "A priori arguments are inductive",
        "There is no difference",
      ],
      answer: 1,
      explanation: "The ontological argument is the main a priori argument.",
    },
    {
      prompt: "How does Anselm define God in Proslogion 2?",
      choices: [
        "The first cause",
        "A being than which nothing greater can be conceived",
        "The designer of the universe",
        "The ground of morality",
      ],
      answer: 1,
      explanation: "He takes this to express what believers already mean.",
    },
    {
      prompt: "What does Proslogion 3 add to chapter 2?",
      choices: [
        "A proof from motion",
        "The claim that God cannot even be conceived not to exist, so God's existence is necessary",
        "A reply to Gaunilo",
        "A proof of the Trinity",
      ],
      answer: 1,
      explanation: "Malcolm argued this second argument survives Kant's objection.",
    },
    {
      prompt: "What was the point of Gaunilo's lost island?",
      choices: [
        "To describe a real island",
        "To show by parody that an argument of Anselm's form could prove the existence of a perfect island",
        "To prove God exists",
        "To defend Anselm",
      ],
      answer: 1,
      explanation: "If the argument proves too much, it proves nothing.",
    },
    {
      prompt: "Why did Aquinas reject the ontological argument?",
      choices: [
        "Because he denied God exists",
        "Because, though God's existence is self-evident in itself, we do not know God's essence, so it is not self-evident to us",
        "Because Anselm was a Franciscan",
        "Because he preferred the moral argument",
      ],
      answer: 1,
      explanation: "He held that God must be known from his effects.",
    },
    {
      prompt: "What did Leibniz think the ontological argument needed to be complete?",
      choices: [
        "A proof that God is possible",
        "A proof from design",
        "An appeal to Scripture",
        "Nothing",
      ],
      answer: 0,
      explanation: "It proves only that if God is possible, God exists.",
    },
    {
      prompt: "What was Kant's main objection?",
      choices: [
        "That God is not good",
        "That being is not a real predicate, so existence cannot be part of a concept",
        "That Anselm was a monk",
        "That the argument is too short",
      ],
      answer: 1,
      explanation: "A hundred real dollars contain no more than a hundred possible ones.",
    },
    {
      prompt: "In Plantinga's modal argument, what is maximal greatness?",
      choices: [
        "Being very large",
        "Having maximal excellence (omniscience, omnipotence, moral perfection) in every possible world",
        "Existing in the actual world",
        "Being the first cause",
      ],
      answer: 1,
      explanation: "It avoids treating bare existence as a predicate.",
    },
    {
      prompt: "What principle of modal logic does the modal argument rely on?",
      choices: [
        "That whatever is actual is necessary",
        "S5: what is possibly necessary is necessary",
        "That nothing is possible",
        "That possibility implies actuality for all things",
      ],
      answer: 1,
      explanation: "Given S5, \"possibly God exists\" implies \"necessarily God exists.\"",
    },
    {
      prompt: "What is the \"reverse\" modal argument?",
      choices: [
        "Anselm's reply to Gaunilo",
        "The argument that if it is possible that no maximally great being exists, then such a being is impossible",
        "Descartes' version",
        "Gödel's proof",
      ],
      answer: 1,
      explanation: "It shows the whole question turns on God's possibility.",
    },
  ],
  reflection:
    "The ontological argument has been rejected by most philosophers, yet has never disappeared. In 500–800 words, assess one classical version (Anselm or Descartes) and one modal version (Malcolm or Plantinga), and explain what, if anything, the argument shows even if it fails as a proof.",
};
