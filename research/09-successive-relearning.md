# Successive Relearning and Criterion-Based Retrieval Practice
## Protocol design for bringing ~66 diagnosed errors to reliable reproducibility in 7 days

**Purpose:** scheduling parameters, not encouragement. Every claim here is meant to become a number in a schedule.
**Scope note:** companion to `05-learning-vs-testing.md`, which already covers hypercorrection, the testing effect, feedback timing/content, spacing at short retention intervals, interleaving, and desirable difficulties. This file does not repeat those. It covers the *criterion* machinery: how many correct retrievals, how spaced within a session, how many sessions, what to do after an error, and what throughput is achievable.

**Status:** in progress — appended section by section.
**Created:** 2026-09-04

---

## 0. The one-paragraph answer

Successive relearning = **retrieval practice to a criterion of N correct recalls within a session, repeated across spaced sessions, each session run to criterion again.** It is retrieval practice + spacing + a dropout rule, and the dropout rule is what makes it schedulable. The canonical prescription from the lab that built it (Rawson & Dunlosky) is **3 correct recalls in the first session, then relearn to 1 correct recall in 3 subsequent spaced sessions** — but the more important, more replicated finding is that **the across-session count dominates the within-session count**. Getting an item right 3× in one sitting buys you a 2-day bump and then almost nothing; getting it right 1× in each of 3 sittings buys durable recall. For a 66-item / 7-day problem this is nearly the whole design: the number of *days* an item is touched is the load-bearing variable, not the number of reps per day.

---

## 1. Successive relearning: the paradigm and its numbers

### 1.1 Definition and provenance

**Rawson, K. A., & Dunlosky, J. (2022). Successive relearning: An underexplored but potent technique for obtaining and maintaining knowledge. *Current Directions in Psychological Science*, 31(4), 362–368.** doi:10.1177/09637214221100484 — https://journals.sagepub.com/doi/full/10.1177/09637214221100484

The defining procedure has three parts, all required:
1. **Retrieval, not review.** Each trial is a cued-recall attempt at the target, followed by restudy/feedback.
2. **A within-session criterion.** The item repeats within the session until it is correctly recalled *k* times, then drops out of that session's queue. (Analogous to putting a flashcard at the back of the stack, and removing it after *k* successes.)
3. **Relearning across sessions.** In each later session the item starts again from a cold retrieval attempt and is again run to criterion.

Distinguishing note: this is not "spaced repetition" as Anki implements it. Anki's unit is *one* graded exposure per item per day. Successive relearning's unit is *criterion reached* per item per session — a variable number of trials, terminated by success, not by the clock.

### 1.2 The core experiment and its numbers

**Rawson, K. A., & Dunlosky, J. (2011). Optimizing schedules of retrieval practice for durable and efficient learning: How much is enough? *Journal of Experimental Psychology: General*, 140(3), 283–302.** doi:10.1037/a0023956 — https://psycnet.apa.org/record/2011-13471-001

3 experiments, **533 students total**; Experiment 3 = **335 undergraduates** in Introductory Psychology, learning definitions of key concepts from real textbook excerpts (visual perception, nervous system, memory, social judgments). Full 2 × 5 design:
- **Initial learning criterion:** 1 vs 3 correct recalls.
- **Relearning level:** 1, 2, 3, 4, or 5 relearning sessions, **each separated by ~2 days**, each run to **1 correct recall**.
- Final cued-recall tests at **1 month** and **4 months** after the last relearning session.
- Baseline control: concepts the student saw in their actual course but never practiced in the experiment.

**Result 1 — the initial-criterion effect is real but short-lived.**

| Test point | Criterion = 1 correct recall | Criterion = 3 correct recalls |
|---|---|---|
| Interim test **2 days** after initial learning (before any relearning) | **58 %** | **73 %** |
| Interim test after ≥1 relearning session | (catches up — difference small) | |
| 1-month and 4-month final tests | difference **not significant** once baseline is controlled | |

Source text: "Performance on this interim test was significantly greater for students who had practiced to three correct recalls versus one correct recall during initial learning (**73 versus 58 %**)." And: "a higher initial criterion no longer produced much of an advantage after some relearning had taken place... the attenuation of the effect was largely due to the lower criterion group catching up." The criterion effect was **not significant in the other two experiments** of Rawson & Dunlosky (2011) either.

**Result 2 — the relearning-session count is what carries durability.**

| Comparison | Effect |
|---|---|
| 3 vs 1 relearning sessions, 1-month test | **+60 % relative increase** |
| 5 vs 1 relearning sessions, 1-month test | **+86 % relative increase** |
| 5 vs 1 relearning sessions, 4-month test | **+64 % relative increase** |
| 3 vs 1 *correct recalls in initial learning* (for contrast) | **+13 % relative increase** at 1 month |
| Non-practiced baseline concepts (seen in their actual course; 54 % said they'd encountered them) | **11 %** correct across both final tests |

**The 60 % vs 13 % contrast is the single most important number in this document.** Same currency (relative gain on a 1-month test), and adding *sessions* is worth roughly 4.6× what adding *within-session reps* is worth.

**Result 3 — the head-to-head at matched retrieval count (the "3–1 vs 1–3" comparison).** Both groups achieve **four total correct recalls**; only the distribution differs.

| Schedule | Total time | 1-month recall | Time to re-reach criterion after the 1-month test |
|---|---|---|---|
| **3–1** (3 correct in session 1, then 1 relearning session) | baseline | **40 %** | 1.7 min/concept |
| **1–3** (1 correct in session 1, then 3 relearning sessions) | ~2 min/concept more | **53 %** | 1.3 min/concept |

Thirteen percentage points, at matched retrieval success, for two extra minutes per concept. **Distribute the successes across days; do not stack them inside one day.**

**Result 4 — the cleanest statement of the same principle**, from the 2022 *Current Directions* review: "when students recalled items correctly once in each of three spaced sessions, they recalled **more than twice as much** as when they correctly recalled each item three times in a single session."

### 1.3 Classroom studies

**Rawson, K. A., Dunlosky, J., & Sciartelli, S. M. (2013). The power of successive relearning: Improving performance on course exams and long-term retention. *Educational Psychology Review*, 25(4), 523–548.** doi:10.1007/s10648-013-9240-4 — https://link.springer.com/article/10.1007/s10648-013-9240-4

Introductory Psychology; students practiced half the course's key concepts in lab sessions timed to the instructor's lectures (initial learning + 3 relearning sessions), other half self-studied as usual. Within-subject.
- Course-exam score on successively relearned material was **~10 percentage points higher** — "a full letter grade" — than on self-studied material.
- Early pilot version of the same design (reported in Rawson & Dunlosky 2012): **83 % correct on practiced concepts vs 70 % on unpracticed**, and this despite a format mismatch — practice was cued recall of definitions, exam was multiple choice tapping comprehension and application.
- **At ~1 month after the exam the advantage grew: scores were 40 % higher** (relative) on successively relearned material.

**Janes, J. L., Dunlosky, J., Rawson, K. A., & Jasnow, A. (2020). Successive relearning improves performance on a high-stakes exam in a difficult biopsychology course. *Applied Cognitive Psychology*, 34(5), 1118–1132.** doi:10.1002/acp.3699 — https://onlinelibrary.wiley.com/doi/abs/10.1002/acp.3699 — replication in a hard upper-level neuroscience-heavy course, i.e. content much closer to MCAT biology than intro-psych definitions.

**Middle-school replication** (Rawson, Wissman & Dunlosky, reported in Rawson & Dunlosky 2012): 8th graders, statistics concepts, 0/1/2/3 relearning sessions, 1-month final test. Advantage over unpracticed baseline grew monotonically with sessions: **Cohen's d = 0.6 with zero relearning sessions → d = 1.7 with three.**

**Higham, P. A., Zengel, B., Bartlett, L. K., & Hadwin, J. A. (2022). The benefits of successive relearning on multiple learning outcomes. *Journal of Educational Psychology*, 114(5), 928–944.** doi:10.1037/edu0000693 — open accepted manuscript: https://repository.essex.ac.uk/30280/1/EDU-2020-0708_R2_accepted.pdf

### 1.4 What this section fixes for a 7-day, 66-item protocol

- **Sessions beat reps.** With 7 days you have at most ~7 session slots per item. Use them. Do not spend day 1 grinding an item to 5 correct recalls; spend day 1 getting it to 1–3 and then touch it on days 2, 4, and 6.
- **Rawson & Dunlosky's own prescription (3 initial correct recalls, then 3 relearning sessions) totals 6 correct recalls across 4 sessions.** That is achievable in 7 days for 66 items — see §5 for the time budget.
- The 2-day interim number (58 % vs 73 %) is the one that speaks directly to a *short* horizon: at a 2-day retention interval, the higher initial criterion **is** worth it. The criterion effect dies only once relearning sessions accumulate. On a 7-day clock with 3–4 sessions, expect the initial criterion to be worth *something* — more than in the 1-month studies, less than the 15-point 2-day gap.

---

## 2. Criterion level — how many correct retrievals before an item is retired?

### 2.1 The hard floor: one correct recall and then dropping the item is a disaster

**Karpicke, J. D., & Roediger, H. L. (2008). The critical importance of retrieval for learning. *Science*, 319(5865), 966–968.** doi:10.1126/science.1152408 — https://pubmed.ncbi.nlm.nih.gov/18276894/ — full text: https://web.mit.edu/jbelcher/www/learner/retrieval.pdf

40 Swahili–English pairs, learned to a full-list criterion, four dropout conditions, **final free/cued recall 1 week later** (exactly the horizon in question):

| Condition | What happens after the first correct recall | Total trials | Recall at 1 week |
|---|---|---|---|
| **ST** (study all, test all) | keeps being studied AND tested | 320 | **~80 %** |
| **SNT** (drop from study, keep testing) | keeps being tested | 236.8 | **~80 %** |
| **STN** (keep studying, **drop from testing**) | restudied every round, never retested | 243.0 | **36 %** |
| **SNTN** (drop from both) | gone | 154.8 | **33 %** |

- Acquisition curves were **identical** across all four conditions; everyone reached ~100 % by end of session 1.
- Students' predicted 1-week recall was **~50 % in every condition** — no one could tell.
- Collapsed contrast: repeated retrieval vs drop-after-one-correct, **d = 4.03**, and **the distributions did not overlap** (drop-conditions ranged 10–60 %; repeated-test conditions ranged 63–95 %).
- The ~80 extra *study* trials in STN vs SNTN bought "practically no gain." The ~80 extra *test* trials bought **">150 % improvements in long-term retention."**

**This is the single most decisive number for a retire-an-item rule.** One correct recall then retire = ~35 % at one week. That is the failure mode the protocol exists to prevent.

### 2.2 Criterion level within a session: more is monotonically better *if there is no relearning*

**Vaughn, K. E., & Rawson, K. A. (2011). Diagnosing criterion-level effects on memory: What aspects of memory are enhanced by repeated retrieval? *Psychological Science*, 22(9), 1127–1131.** doi:10.1177/0956797611417724 — https://pubmed.ncbi.nlm.nih.gov/21813798/

Lithuanian–English pairs, test-restudy to criterion of **1 to 5 correct recalls**; final tests at **2 days** (Exp 1) and **1 week** (Exp 2). Increasing criterion level improved *all three* components independently: **associative memory** (forward and backward cued recall, associative recognition), **target memory** (free recall and recognition of targets), and **cue memory**. Criterion level is not a single-link strengthener; it builds a bidirectional, decomposable trace.

**Vaughn, K. E., Rawson, K. A., & Pyc, M. A. (2013). Repeated retrieval practice and item difficulty: Does criterion learning eliminate item difficulty effects? *Psychonomic Bulletin & Review*, 20(6), 1239–1245.** doi:10.3758/s13423-013-0434-z — criterion **1 to 11 correct recalls**. Even with number of successful recalls exactly equated, **normatively difficult items still ended up below easy items on the delayed test** — the residual deficit localized specifically to *associative* recognition (no cue-recognition deficit; difficult items actually had a target-recognition *advantage*).

> **Consequence for a 66-error protocol:** criterion count does not equalize items. A hard item at criterion 3 is still weaker than an easy item at criterion 3. Hard items need a *higher* criterion or *more sessions*, and the deficit is specifically in binding the cue to the answer — which argues for varying the cue (isomorphs) rather than repeating the same prompt.

### 2.3 Criterion level *with* relearning: the relearning-override effect kills the case for high criteria

**Vaughn, K. E., Dunlosky, J., & Rawson, K. A. (2016). Effects of successive relearning on recall: Does relearning override the effects of initial learning criterion? *Memory & Cognition*, 44(6), 897–909.** doi:10.3758/s13421-016-0606-y — https://pubmed.ncbi.nlm.nih.gov/27027887/

Swahili–English pairs successfully recalled **1, 2, 3, 4, 5, 6, or 7 times in Session 1**; then relearned to a criterion of **1 correct recall at one-week intervals across four or five successive relearning sessions**; retention intervals up to 1 month.

> "Experiments 1 and 2 revealed that the substantial benefits of learning to a higher initial criterion during the first session **do not persist across relearning sessions**." … "if relearning is to occur, **using extra time to learn to a higher initial learning criterion is not efficient. Instead, students should devote their time to subsequent spaced relearning sessions**."

Same override shows up for *spacing* as an initial-learning variable: **Rawson, K. A., & Dunlosky, J. (2013). Relearning attenuates the benefits and costs of spacing. *JEP: General*, 142(4), 1113–1129.** doi:10.1037/a0030498 — 3 experiments, **567 students**, ~40,000 hand-scored short-answer responses; initial criterion 1 or 3 correct recalls; massed vs spaced initial practice; 2–3 relearning sessions. "The benefits of initial spacing were substantial prior to relearning but were **significantly attenuated after relearning**," and so were the costs.

**Rawson, Vaughn, Walsh & Dunlosky (2018), *JEP: Applied*, 24(1), 57–71**, doi:10.1037/xap0000146 — https://pubmed.ncbi.nlm.nih.gov/29431462/ — formalizes both effects and names them:
- **Relearning potency** (successive relearning vs single-session learning): **d = 1.52 to 4.19.**
- **Relearning override** (initial-lag effects after relearning): initial-condition effects of **d = 1.07 to 1.87 before relearning shrink to d = −.20 to .38 after relearning.**
- Headline retention numbers: **20 % recalled one week after a single learning session → 80 % recalled one week after the same material was successively relearned to mastery three times** (d = 4.19); **77 % still recalled three weeks after the fourth relearning session.**

### 2.4 So what is the answer, operationally?

The literature does not converge on one magic *k*. It converges on a conditional:

| If you will get *n* sessions with the item… | …then the within-session criterion should be |
|---|---|
| **1 session only** (no relearning possible) | **as high as you can afford** — criterion effects are monotonic to at least 5 and detectable to 11 (Vaughn & Rawson 2011; Vaughn, Rawson & Pyc 2013). One correct recall then retire ≈ 33–36 % at one week (Karpicke & Roediger 2008). |
| **2–3 sessions** | **3 correct recalls in session 1**, 1–2 thereafter. This is the interval where the 73 % vs 58 % 2-day advantage (Rawson & Dunlosky 2011) has not yet been overridden. |
| **4+ sessions** | **1 correct recall per session is enough**; extra initial reps are overridden and are a net efficiency loss (Vaughn, Dunlosky & Rawson 2016; Rawson & Dunlosky 2013). |

**Retirement rule that follows:** never retire an item on *within-session* success. Retire on **cold-start success across sessions** — i.e. an item is retired only when it is answered correctly on the *first* attempt of a session, on a day when it has not been seen. Karpicke & Roediger's whole result is that within-session success is a near-worthless retirement signal (all four groups hit ~100 % in session 1 and then split 80/35 a week later).

---

## 3. Spacing the retrievals *inside* one session — the biggest free win in the whole protocol

### 3.1 The decisive experiment

**Karpicke, J. D., & Bauernschmidt, A. (2011). Spaced retrieval: Absolute spacing enhances learning regardless of relative spacing. *JEP: Learning, Memory, and Cognition*, 37(5), 1250–1257.** doi:10.1037/a0023436 — https://pubmed.ncbi.nlm.nih.gov/21574745/ — full text: https://learninglab.psych.purdue.edu/downloads/2011/2011_Karpicke_Bauernschmidt_JEPLMC.pdf

Design: all items first brought to **one correct recall**. Then **three additional correct retrievals**, with the number of intervening trials between them manipulated. Absolute spacing (total trials between reps) crossed with relative schedule:

| | Expanding | Equal | Contracting |
|---|---|---|---|
| **Short** (15 total) | 1-5-9 | 5-5-5 | 9-5-1 |
| **Medium** (30 total) | 5-10-15 | 10-10-10 | 15-10-5 |
| **Long** (90 total) | 15-30-45 | 30-30-30 | 45-30-15 |

Retrieval success during practice was ~.87–.98 in every cell — **the conditions were equated on number of successful retrievals.** Final test: **1 week later.**

| Condition | Recall at 1 week |
|---|---|
| Studied once, never retrieved | **1 %** |
| Recalled once, then dropped | **25 %** |
| Recalled **3× massed** (0-0-0, back to back) | **26 %** — F < 1 vs recalled once |
| Short absolute spacing (15) | **49 %** |
| Medium absolute spacing (30) | **64 %** |
| **Long absolute spacing (90)** | **75 %** |
| Expanding vs equal vs contracting | **no effect, F < 1**, no interaction |

Main effect of absolute spacing F(2,69) = 11.07, η²p = .24; long vs short F(1,46) = 23.32, η²p = .34. Abstract: "Repeated retrieval with long intervals between each test produced a **200 % improvement** in long-term retention relative to repeated retrieval with no spacing between tests."

### 3.2 What that means, stated bluntly

**Three correct retrievals in a row are worth exactly one correct retrieval (26 % vs 25 %).** The criterion count is not the active ingredient — the *lag between the counted retrievals* is. A protocol that runs an item to "3 correct" by asking it three times consecutively has bought nothing over asking once, at a 1-week retention interval, while paying triple the time.

The corollary is a concrete implementation rule: **the size of the rotating queue is the spacing parameter.** With 66 items in one rotation, a full pass gives ~65 intervening trials — in Karpicke & Bauernschmidt's "long" (90) territory, which is the 75 % cell. Splitting them into six stacks of 11 puts you near the "short" (15) cell, which is the 49 % cell. **Do not sub-divide the deck to make sessions feel tidier; sub-dividing is the mechanism that destroys the effect.** (This is the item-level version of Kornell 2009's one-big-stack-beats-four-small-stacks flashcard result, already covered in `05-learning-vs-testing.md` §5.1.)

### 3.3 The other within-session lag studies, and one caution

**Pyc, M. A., & Rawson, K. A. (2007). Examining the efficiency of schedules of distributed retrieval practice. *Memory & Cognition*, 35(8), 1917–1927.** doi:10.3758/BF03192925 — 227 undergraduates, Swahili–English. Compared **conventional** schedules (every item gets 3 practice trials) with **dropout** schedules (practice on an item stops at criterion). Dropout reached comparable performance **in fewer trials**, and was "particularly effective for learning initially incorrect items." Critically: "the efficiency of the various schedules **depended critically on the interval between presentations of an item**."

**Pyc, M. A., & Rawson, K. A. (2009). Testing the retrieval effort hypothesis: Does greater difficulty correctly recalling information lead to higher levels of memory? *Journal of Memory and Language*, 60(4), 437–447.** doi:10.1016/j.jml.2009.01.004 — crossed within-session lag (number of intervening items) with criterion level. Longer lags → harder but still successful retrieval → better final recall. This is the "retrieval effort hypothesis": **successful-but-effortful retrievals are worth more than easy ones**, which is why lag and not rep-count is doing the work.

**Caution — the dropout-schedule interaction.** Dropout has a hidden coupling to lag: as items retire, the queue shrinks, so the *remaining* items get progressively shorter lags exactly when they are the hardest items. This is the structural flaw in naive "keep going until the stack is empty" implementations. Two fixes, both cheap: (a) keep retired items in the rotation as spacers even though they no longer count toward criterion, or (b) set a floor on queue length and interleave items from a different topic to pad it.

**The within-session lag effect is itself subject to relearning override.** Rawson & Dunlosky (2013), *JEP: General* 142(4), 1113–1129, doi:10.1037/a0030498 — initial-session lags of **0 (massed), 1, 3, and 7 intervening items**, 567 students, key-term definitions, 2–3 relearning sessions. Spaced-lag advantage was large on the Day-3 interim test, attenuated at the next relearning session, and **completely eliminated by the Day-10 final test**. Same in Rawson et al. (2018): initial-lag effects **d = 1.07–1.87 before relearning → d = −.20 to .38 after**.

**Reconciling the two:** Karpicke & Bauernschmidt had **no relearning sessions** — one session, then a 1-week gap. Rawson & Dunlosky had relearning. So the rule is:

> **Within-session lag matters enormously when a session is the only session an item gets. It stops mattering once the item gets 2–3 more sessions.**

For a 7-day, 66-item build this cuts both ways and gives a clean triage rule: for items that will get four sessions, don't agonize over within-session ordering. For items you only reach on day 6 or 7 — and with 66 items some will be — **long within-session lag is the difference between 26 % and 75 %.** Late-added items get the big-queue treatment; early-added items get sessions instead.

---

## 4. What to do immediately after an error

The question has three candidate answers — restudy, re-retrieve now, re-retrieve later. The literature ranks them cleanly.

### 4.1 Restudy alone is close to worthless once the item has been retrieved even once

Karpicke & Roediger (2008), §2.1 above: the **STN** condition restudied every item in every study round and never retested it → **36 %** at one week. The **SNT** condition never restudied the recalled items and only retested them → **~80 %**. About **80 extra study trials** produced "practically no gain"; about 80 extra *test* trials produced ">150 % improvements." **d = 4.03**, non-overlapping distributions.

**Exception worth knowing** (it bounds the rule rather than breaking it): **Ashby, S. R., & Zeithamova, D. (2023). A combination of restudy and retrieval practice maximizes retention of briefly encountered facts. *Frontiers in Cognition*, 2, 1258955.** doi:10.3389/fcogn.2023.1258955 — https://www.frontiersin.org/journals/cognition/articles/10.3389/fcogn.2023.1258955/full. For facts encountered *once, briefly*, **SST (study-study-test) reached 60 % at delay vs ~50 % for both SSS and STT**; never-studied baseline 11 %. With a thin initial trace, one more encoding beats one more retrieval. **This is the boundary you cross when a "diagnosed error" is really a content hole** — see the routing rule in `05-learning-vs-testing.md` §3.4 (E2). For an item the learner has genuinely encoded and merely mis-assembled, retrieval wins; for an item never learned, teach it first.

### 4.2 Immediate re-retrieval buys little beyond the feedback itself

- **Butler, A. C., Karpicke, J. D., & Roediger, H. L. (2007). The effect of type and timing of feedback on learning from multiple-choice tests. *JEP: Applied*, 13(4), 273–281.** doi:10.1037/1076-898X.13.4.273 — **answer-until-correct feedback was equivalent to simply presenting the correct answer.** Forcing the learner to produce the right answer right then adds cost, not learning.
- **Kornell, N., Klein, P. J., & Rawson, K. A. (2015). Retrieval attempts enhance learning, but retrieval success (versus failure) does not matter. *JEP: LMC*, 41(1), 283–294.** doi:10.1037/a0037850 — https://pubmed.ncbi.nlm.nih.gov/25243980/. Two-stage framework: Stage 1 = the retrieval attempt (activates the neighborhood); Stage 2 = the answer becoming available (strengthens the right connections, weakens wrong ones). Items were randomly assigned post-attempt to be *retrieved* vs *copied*. Experiments 3a, 3b and 6 "did not support the hypothesis that retrieval success produces more learning than does retrieval failure followed by feedback." **The attempt plus the answer is the learning event; the successful production is not an additional one.**
- Practical read: after an error, the *attempt already happened* and the *answer was already supplied*. An immediate second attempt adds a third thing that the data say is nearly free of value. Spend that time on the next item, or on an elaborated explanation (which `05` §4.3 shows is worth d = 0.05 → 0.99).

### 4.3 Delayed re-retrieval is the correct next action, and the delay should be long enough to hurt

**Pashler, H., Zarow, G., & Triplett, B. (2003). Is temporal spacing of tests helpful even when it inflates error rates? *JEP: LMC*, 29(6), 1051–1057.** doi:10.1037/0278-7393.29.6.1051 — https://pubmed.ncbi.nlm.nih.gov/14622045/ — full text: https://gwern.net/doc/psychology/spaced-repetition/2003-pashler.pdf

This experiment was designed exactly to answer "after a corrected error, when should I test again?" Session 1 gave **Test 1 with corrective feedback, then Test 2 at a manipulated lag**; final test 1 day (Exp 1) or 1 week (Exp 2) later.

**Experiment 1** (foreign vocabulary, final test Day 2):

| | Short lags (≤ 9 intervening items) | Long lags (≥ 16) |
|---|---|---|
| Test 2 accuracy, same day | **85 %** | **55 %** (F = 147.32, p < .001) |
| **Final test, Day 2** | **22 %** | **43 %** (F = 89.98, p < .001) |

Long lags nearly **doubled** final performance while nearly halving in-session performance. And critically: long > short **whether or not Test 1 had been answered correctly** — for correct items F(1,40) = 65.25, p < .001; **for items that were errors on Test 1, F(1,40) = 9.60, p < .01.**

**Experiment 2** (obscure English/GRE words, lags to 96, **final test 1 week later** — the exact horizon):
- Test 2 same day: **85 % at lag 1 → below 30 % at lag 96.**
- Final test at 1 week: **20 % at lag 1 → 30 % at lag 96**, short vs long (≥16) F(1,34) = 36.84, p < .01.
- Long-lag advantage held for every Test-1 outcome: correct F = 22.39, p = .001; **errors of omission F = 2.93, p < .05; errors of commission F = 18.83, p < .001.**
- **Errors of commission (a wrong answer produced) predicted better final recall than errors of omission (blank)**, F(1,34) = 18.51, p < .001 — the same "informed wrong answer" boundary as errorful generation and hypercorrection (`05` §1.3, §3.1).
- The authors' own conclusion, and the sentence to build the schedule on: "even after an error on Test 1, **it is best to impose a lag that is long enough to produce a great many errors on Test 2**." After a long lag, items that were omission errors failed again on Test 2 **89 %** of the time; commission errors failed **68 %** of the time. **That failure rate is the correct operating point, not a sign the schedule is broken.**
- Optimum appeared to lie at **intermediate lags between 32 and 96 intervening items** in Exp 2.

**Supporting:** Pyc & Rawson (2007) found dropout scheduling "particularly effective for learning initially **incorrect** items" — i.e. the queue-based delay helps errors most. Butler & Roediger (2008), *Memory & Cognition* 36(3), 604–616, doi:10.3758/MC.36.3.604, adds the MCQ-specific reason feedback is mandatory: without it, **the lure the learner selected intrudes as a false answer on later cued recall**; both immediate and delayed feedback raised correct responses and reduced lure intrusions.

### 4.4 The post-error decision table

| Situation | Do this | Evidence |
|---|---|---|
| Wrong answer, learner had a real basis (commission error, semantically near) | Elaborated/refutation feedback → **send the item to the back of a long queue** → re-attempt after ≥16, ideally 32–96 intervening items | Pashler et al. 2003; `05` §1, §4.3 |
| Wrong answer, blank / "no idea" (omission error) | **Route to instruction, not to the queue.** Omission errors gained least from the whole procedure and are content holes | Pashler et al. 2003 (omission < commission); Ashby & Zeithamova 2023 (SST > STT for thin traces); `05` §3.4 E2 |
| Just got it right for the first time this session | Do **not** retire. Re-queue at long lag | Karpicke & Roediger 2008; Karpicke & Bauernschmidt 2011 (massed 3× = 26 %, spaced 3× = 75 %) |
| Got it right on the cold first attempt of a *new* session | This is the real retirement signal — count the session, re-queue for a later day | Rawson & Dunlosky 2011/2012; Higham et al. 2022 (cold-start recall .24 → .68 → .82 across three sessions) |
| Same item wrong twice in a row across two sessions | Treat as a content hole, not an error to drill; re-teach the mechanism, then re-enter the queue | Rowland 2014 no-feedback ≤50 % cell (g = 0.03); `05` §2.3 |

**One design caution against a rule already in `05`.** `05` §8 (C1) says rate confidence on every item. **Higham, P. A., Fastrich, G. M., Potts, R., Murayama, K., Pickering, J. S., & Hadwin, J. A. (2023). Spaced retrieval practice: Can restudying trump retrieval? *Educational Psychology Review*, 35, article 98.** doi:10.1007/s10648-023-09809-2 — 3 preregistered online experiments, 40 Swahili–English pairs, five sessions **2 days apart**. When a **memory rating was required on every trial**, final-test performance for *restudied* items **exceeded** retrieved items (Exps 1 and 2); when the rating was removed (Exp 3), the normal retrieval advantage returned. Attributed to reactivity of memory judgments. **Read: the confidence tap is not free.** Keep it — the hypercorrection routing in `05` §1.6 depends on it — but consider collecting it on a subset, or only on errors, rather than on every trial of every relearning session.

---

## 5. Throughput — how many items can actually be brought to criterion per hour

This is the one question the literature answers only in scattered places, because almost nobody reports it. Three sources do.

### 5.1 Rawson & Dunlosky's per-concept minute data (the best source, because it is self-paced to criterion)

From Rawson & Dunlosky (2012), *Educational Psychology Review* 24(4), 419–435, doi:10.1007/s10648-012-9203-1 (open PDF: https://static.artofmemory.com/files/rawson-dunlosky-2012.pdf), reporting the time data from Rawson & Dunlosky (2011) Exp 3. Material = **college key-term definitions, typed free recall of a sentence-length definition, idea-unit self-scoring**. Self-paced.

| Session | Criterion | Minutes per concept | **Concepts per hour** |
|---|---|---|---|
| Initial learning | 1 correct recall | **~3.0** | **~20** |
| Initial learning | 3 correct recalls | **~5.0** (≈ 2 extra trials, "about an extra 2 min per concept") | **~12** |
| Relearning session 1 (2 days later) | 1 correct | **2.1** (if initial criterion was 1) / **1.6** (if it was 3) | **29–37** |
| Relearning session 5 | 1 correct | **< 1.0** | **> 60** |
| Reacquisition after the 1-month test | 1 correct | **1.7** (after 1 prior relearning session) / **~1.1** (after 4–5) | **35–55** |
| Middle-school version (8th grade, statistics) — initial | 1 correct | **~3.0** | ~20 |
| Middle-school version — third relearning session | 1 correct | **~1.0** | ~60 |

**Totals across a whole schedule:** "Across all sessions, students ended up spending close to one additional minute per concept overall when concepts were practiced to three versus one correct recalls during initial learning (**9.0 versus 8.1 min per concept**)." And the 1–3 vs 3–1 comparison: "the 1–3 schedule only required around **two extra minutes per concept**" for +13 points of 1-month recall.

Also: "some relearning sessions take **5 min or less**" — for a stack that has already been through several sessions.

### 5.2 Higham et al.'s per-item second data (a floor, because passes were capped)

Higham, Zengel, Bartlett & Hadwin (2022), semester-long university course, **short-answer fill-in questions**, three sessions **2 days apart**, exposure capped at 3 passes (pass 1: 15 s + 5 s feedback; passes 2–3: 10 s + 5 s):

| | Session 1 | Session 2 | Session 3 |
|---|---|---|---|
| Cold-start recall on pass 1 | **.24** | **.68** | **.82** |
| Trials to criterion | **1.95** | **1.37** | **1.20** |
| Total exposure per item | **37.05 s** | **27.22 s** | **24.22 s** |
| **Items per hour** (implied) | **~97** | **~132** | **~149** |

Treat these as the **fast end** — the format is recognition-adjacent, the exposure is machine-capped, and an item that fails three passes is dropped rather than pursued.

### 5.3 The number to schedule with

**Bracket: 20 items/hour (definition-length free recall, cold) to ~100 items/hour (short prompts, capped).** For MCAT-style diagnosed errors — where the target is a *discrimination or a mechanism step*, not a paragraph, and the learner already has partial knowledge — the realistic session-1 figure is **1.5–3 min per item, i.e. 20–40 items/hour**, dropping to **~1 min per item (60/hour) by session 3**.

**For 66 items, this is the budget:**

| Session | Day | Criterion | min/item | Session length |
|---|---|---|---|---|
| Initial | 0 | 3 correct (spaced within session — see §3) | 3–5 | **3.3–5.5 h** |
| *or* Initial | 0 | 1 correct | 1.5–3 | **1.7–3.3 h** |
| Relearn 1 | 2 | 1 correct | 1.6–2.1 | **1.8–2.3 h** |
| Relearn 2 | 4 | 1 correct | ~1.2 | **~1.3 h** |
| Relearn 3 | 6 | 1 correct | ~0.9 | **~1.0 h** |
| **Total (1 → 3 schedule)** | | 4 correct recalls, 4 sessions | ~8 min/item | **≈ 8–9 hours across the week** |

**Trial counts, which matter for queue design:** at Higham's trials-to-criterion, a 66-item session-1 pass is **~129 trials**; by session 3 it is **~79 trials**. Every full pass through the deck gives an intra-session lag of ~65 intervening items — inside Karpicke & Bauernschmidt's "long" (90) band, which is the 75 % cell. **The 66-item deck is, by accident of its size, already the right spacing instrument. Do not shard it.**

**Two throughput levers the literature supports:**
1. **Cut the initial criterion to 1 and add a session instead.** Saves ~2 min/item on day 0 (≈ 2.2 h over 66 items) and costs ~2 min/item across the rest — and it *outperforms* (53 % vs 40 % at 1 month; Rawson & Dunlosky 2011). Buying the day-0 hours back is free and better.
2. **Relearning gets cheaper monotonically.** Session 4 costs roughly a third of session 1. A 7-day plan whose later sessions look expensive on paper is over-budgeted.

---

## 6. Free recall / explanation vs multiple choice — and does practice format have to match the test?

### 6.1 Does the format have to match? — No. Cross-format transfer is the *strongest* transfer category.

**Pan, S. C., & Rickard, T. C. (2018). Transfer of test-enhanced learning: Meta-analytic review and synthesis. *Psychological Bulletin*, 144(7), 710–756.** doi:10.1037/bul0000151 — https://pubmed.ncbi.nlm.nih.gov/29733621/ — open PDF: https://sc-pan.github.io/pdf/PR_2018W.pdf

192 transfer effect sizes, 122 experiments, 67 articles, **N = 10,382**, ~40 years of research. Effects are vs a **non-testing re-exposure control**.

| Transfer category | k | **d** | 95 % CI |
|---|---|---|---|
| **Overall** | 192 | **0.40** | [0.31, 0.50] |
| **Across test formats** (e.g. free-recall practice → MC test, MC practice → cued recall) | 56 | **0.58** | [0.43, 0.73] |
| Application and inference questions | 41 | **0.33** | [0.085, 0.56] |
| Problem-solving skills | 18 | 0.29 | p = .10 |
| Stimulus–response rearrangement (backward pairs) | 33 | 0.22 | [−0.019, 0.45], p = .066 |
| Untested material seen during initial study | 17 | 0.16 | [−0.10, 0.43], n.s. |

**Cross-format transfer (d = 0.58) is larger than the overall mean.** Practising in one format and being tested in another is not a leak; it is where testing transfers best.

The classroom confirmation: **McDermott, K. B., Agarwal, P. K., D'Antonio, L., Roediger, H. L., & McDaniel, M. A. (2014). Both multiple-choice and short-answer quizzes enhance later exam performance in middle and high school classes. *JEP: Applied*, 20(1), 3–21.** doi:10.1037/xap0000004 — https://pubmed.ncbi.nlm.nih.gov/24099497/. Real 7th-grade science and high-school history classes, quizzes with correct-answer feedback, graded unit and end-of-semester exams. "**An unanticipated and key finding is that the format of the quiz (multiple-choice or short-answer) did not need to match the format of the criterial test** … multiple-choice quizzing is as effective as short-answer quizzing for this purpose." Also: a **restudy** condition produced less benefit than quizzing with feedback.

### 6.2 The two moderators that DO decide whether transfer happens

Pan & Rickard's simultaneous moderator model — this is the most actionable result in the paper:

| Condition | Estimated transfer **d** |
|---|---|
| **Response congruency + elaborated retrieval practice** both present | **0.78** |
| Response congruency present (single-moderator fit) | **0.58** |
| Neither present | **0.21** |
| Neither present, **after PEESE publication-bias correction** | **≈ 0 (intercept effectively zero)** |

Increments: response congruency **+0.35** (p = .0002; +0.36 after bias correction); elaborated retrieval practice **+0.22** (p = .0094; +0.18 after bias correction).

Definitions, because they are precise and easy to misread:
- **Response congruency** = *the correct response you must produce is the same on practice and on the test.* It is **not** format matching. Practising "what does a competitive inhibitor do to Km?" as free recall and meeting it as an MCQ is congruent; practising the forward direction and being tested on the backward direction is not (hence the weak d = 0.22 for stimulus–response rearrangement).
- **Elaborated retrieval practice** = broad/elaborative encoding, or **post-retrieval processing of elaborative feedback**. This is the same variable that `05-learning-vs-testing.md` §4.3 ranks from d = 0.05 (knowledge of results) to d = 0.99 (task + process + self-regulation feedback).

> **Design rule:** stop worrying about whether the drill looks like an AAMC item. Worry about (a) whether the answer the drill makes him produce is the answer the exam will demand, and (b) whether the feedback is elaborated. Those two together are the difference between **d = 0.78 and d ≈ 0**.

### 6.3 Recall vs multiple choice as the *practice* format — the disagreement, resolved by retrieval success

`05-learning-vs-testing.md` §2.3 already has the meta-analytic split (Rowland 2014: recall practice g = 0.72–0.81 vs recognition 0.36; Adesope 2017: MC practice g = 0.70 vs short-answer 0.48). The mechanism that reconciles them is **retrieval success**:

**Smith, M. A., & Karpicke, J. D. (2014). Retrieval practice with short-answer, multiple-choice, and hybrid tests. *Memory*, 22(7), 784–802.** doi:10.1080/09658211.2013.831454 — https://pubmed.ncbi.nlm.nih.gov/24073690/. Four experiments, **N = 372**, educational texts, final assessment **1 week later** with both verbatim and inference questions. All formats beat study-only on both question types. But: "there were **little or no advantages of answering short-answer or hybrid format questions over multiple-choice questions in three experiments**. In Experiment 4, **when retrieval success was improved under initial short-answer conditions, there was an advantage** of answering short-answer or hybrid questions." Their conclusion names the variable: retrieval **success**, not retrieval effort.

**Kang, S. H. K., McDermott, K. B., & Roediger, H. L. (2007). Test format and corrective feedback modify the effect of testing on long-term retention. *European Journal of Cognitive Psychology*, 19(4–5), 528–558.** doi:10.1080/09541440601056620 — same shape: short-answer practice beat MC practice on the final test (**d = 0.41** on an MC final test) **only when feedback was provided**; feedback mattered for SA practice and did not change MC practice. Without feedback, SA practice was *worse*, because success rates were low.

**The hybrid format is the practical resolution and it is directly implementable:** Smith & Karpicke's "hybrid" trial = **attempt free recall first, then see the multiple-choice options and select.** It preserves the recall attempt (Stage 1 in Kornell, Klein & Rawson's framework) while guaranteeing the correct answer becomes available (Stage 2), and it recovers the short-answer advantage without paying the low-success penalty.

### 6.4 Explanation as the retrieval mode

- **Bisra, K., Liu, Q., Nesbit, J. C., Salimi, F., & Winne, P. H. (2018). Inducing self-explanation: A meta-analysis. *Educational Psychology Review*, 30(3), 703–725.** doi:10.1007/s10648-018-9434-x — 69 effect sizes from 64 reports, random-effects **g = 0.55**, robust across task types (problem solving, worked examples, text), subject areas, and education levels. Open PDF: https://gwern.net/doc/psychology/spaced-repetition/2018-bisra.pdf
- Compare: retrieval practice ≈ g 0.50, interleaving g 0.42, transfer d 0.40. **Self-explanation is in the same band as retrieval practice and is additive to it** (it is the elaborated-retrieval-practice moderator in operational form, worth +0.22 on transfer).
- **Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborative studying with concept mapping. *Science*, 331(6018), 772–775.** doi:10.1126/science.1199327 — retrieval practice beat concept mapping at a 1-week delay on **both verbatim and inference** questions. **Caveat, and it is a real one:** **Mayrhofer, R., Kuhbandner, C., & Frischholz, K. (2023). Re-examining the testing effect as a learning strategy: The advantage of retrieval practice over concept mapping as a methodological artifact. *Frontiers in Psychology*, 14, 1258359.** doi:10.3389/fpsyg.2023.1258359 — preregistered; the advantage **vanished** once the concept-mapping condition was also given a memorization phase. The retrieval-vs-elaborative-study comparison is confounded; the retrieval-vs-restudy comparison (Rowland, Adesope, Yang) is not.

### 6.5 Format rules for the 66-item protocol

| # | Rule | Evidence |
|---|---|---|
| **R1** | Practise in whatever format keeps retrieval success high. Format need not match the exam. | Pan & Rickard d = 0.58 for cross-format; McDermott et al. 2014 |
| **R2** | Guarantee **response congruency**: the string/decision he must produce in practice is the one the exam demands. Worth **+0.35 d**, and without it (plus elaboration) transfer is ≈ 0 after bias correction. | Pan & Rickard 2018 |
| **R3** | Use the **hybrid trial**: free-recall attempt → then reveal options → then commit → then elaborated feedback. Gets the recall benefit without the low-success penalty. | Smith & Karpicke 2014 Exp 4; Kang et al. 2007; Kornell, Klein & Rawson 2015 two-stage framework |
| **R4** | Make him **state the rule / explain the discrimination** on every missed item. g = 0.55 in its own right, and it *is* the elaborated-retrieval moderator. | Bisra et al. 2018; Pan & Rickard +0.22 |
| **R5** | Do **not** practise reversed mappings expecting transfer (learn the mechanism forward, get tested backward). d = 0.22, CI includes zero. Build both directions explicitly if both are needed. | Pan & Rickard, stimulus–response rearrangement |
| **R6** | Do **not** expect halo transfer to untested material in the same passage. d = 0.16, n.s. — the same spotlight finding as prequestions in `05` §3.2 (g = .66 targeted vs .01 untargeted). | Pan & Rickard, untested-materials category |

---

## 7. Synthesis — a schedulable protocol for 66 errors in 7 days

Exam is **Sat 12 Sep 2026**; the drill window is **Fri 5 Sep → Fri 11 Sep**. Everything below is derived from the numbers above, not from convention.

### 7.1 The five decisions and the evidence behind each

| Decision | Setting | Why (with the number) |
|---|---|---|
| **Number of sessions per item** | **5** (Sep 5, 6, 8, 10, 11) | Sessions dominate reps: 3 vs 1 relearning session = **+60 %**; 3 vs 1 within-session recalls = **+13 %** (Rawson & Dunlosky 2011). Benefit asymptotes around 3–4 relearning sessions. |
| **Gap between sessions** | **1–2 days, roughly uniform** (gaps 1, 2, 2, 1) | Cepeda ratio rule at a 7-day horizon → optimal gap ≈ **1.2–2.0 days**; Küpper-Tetzel: 1-day lag optimal at a 7-day RI; expanding schedules worth **g = 0.034** (Latimier 2021), so don't bother. (All in `05` §5.) |
| **Within-session criterion** | **2 correct in session 1** (3 for the "sure and wrong" set), **1 cold-start correct** in sessions 2–5 | Criterion 3 buys **73 % vs 58 %** at 2 days but is fully overridden by session 4+ (Vaughn, Dunlosky & Rawson 2016) and costs **~2 min/item** = 2.2 h on day 0. Criterion 2 keeps most of the short-RI benefit at half the cost. |
| **Within-session ordering** | **One rotating queue of all 66. Never shard.** Misses go to the back. | Three massed correct recalls = **26 %** at 1 week; three recalls at long lag = **75 %** (Karpicke & Bauernschmidt 2011). A 66-item rotation gives ~65 intervening trials, inside the "long" band. |
| **Trial format** | **Hybrid**: free-recall attempt → reveal options → commit → refutation-style elaborated feedback → state-the-rule prompt | Cross-format transfer **d = 0.58**, format matching unnecessary (Pan & Rickard 2018; McDermott et al. 2014). Response congruency **+0.35 d**, elaborated retrieval **+0.22 d**; without both, transfer ≈ **0**. Hybrid recovers the SA advantage without the low-success penalty (Smith & Karpicke 2014 Exp 4). |

### 7.2 Retirement rule (the part most protocols get wrong)

An item is **never retired on within-session success**. Karpicke & Roediger's entire result is that within-session success is a worthless retirement signal: all four groups reached ~100 % in session 1 and then split **80 % / 35 %** at one week.

```
retire_candidate(item) := correct on the FIRST (cold) attempt
                          of two CONSECUTIVE sessions
retired items          := stay in the rotation as spacers,
                          one cold check per session, no re-queue on success
never retired          := the "sure and wrong" set — 05 §1.4 shows
                          high-confidence errors preferentially RETURN
                          (correction rate .86 → .56 over one week)
```

### 7.3 Time budget

| Session | Date | Criterion | min/item | Session length | Cumulative |
|---|---|---|---|---|---|
| S1 | Fri 5 Sep | 2 correct, spaced | ~2.5 | **2 h 45 m** | 2:45 |
| S2 | Sat 6 Sep | 1 cold correct | ~1.8 | **2 h 00 m** | 4:45 |
| S3 | Mon 8 Sep | 1 cold correct | ~1.3 | **1 h 25 m** | 6:10 |
| S4 | Wed 10 Sep | 1 cold correct | ~0.9 | **1 h 00 m** | 7:10 |
| S5 | Fri 11 Sep (midday, not evening) | 1 cold correct | ~0.7 | **0 h 45 m** | **≈ 7 h 55 m** |

Per-item minutes from Rawson & Dunlosky (2012) Fig. 2 (3.0 → 2.1 → ~1.3 → ~1.0 → <1.0 for self-paced definition recall), discounted modestly because MCAT-error items are partially known and shorter than sentence-length definitions. **~8 hours total, ~68 min/day.**

**Trial counts** (Higham et al. trials-to-criterion 1.95 → 1.37 → 1.20): ~129 trials in S1, ~90 in S2, ~79 in S3, fewer thereafter.

### 7.4 What to expect, numerically

Cold recall of an item, measured at the delay from its last session:

| Sessions completed | Comparable literature figure | Expected cold recall |
|---|---|---|
| 1 (single-session criterion learning) | 20 % at 1 week (Rawson et al. 2018); 25–26 % if massed (Karpicke & Bauernschmidt) | **0.20–0.30** |
| 1, but with long within-session lags | 75 % at 1 week (Karpicke & Bauernschmidt, long spacing) | **0.50–0.75** |
| 2 | .68 cold-start at 2 days (Higham et al. 2022) | **0.55–0.70** |
| 3 | .82 cold-start at 2 days (Higham et al. 2022) | **0.70–0.82** |
| **4 (= 3 relearning sessions)** | **80 % at 1 week** (Rawson et al. 2018, d = 4.19 vs single session) | **0.78–0.85** |
| **5, last one 24 h out** | Higham trend + 1-day RI rather than 7 | **0.85–0.90** |

**For 66 items on the 5-session schedule: expect ~56–59 reliably reproducible on exam morning; expect 7–10 to fail regardless.** For comparison, the same 66 items drilled once to criterion and left alone would yield **~13–20**. That is the whole value of the protocol: roughly **+40 items** for eight hours.

**Discount these.** Every number above is cued recall of definitions or paired associates. Transfer to **application and inference** questions is **d = 0.33** — real, but roughly half the size of same-format transfer (d = 0.58). Expect the exam-day figure to sit below the recall figure. That gap is exactly what R2 (response congruency) and R4 (state-the-rule) in §6.5 exist to close.

### 7.5 The five failure modes, each with the study that names it

1. **Retiring items after one correct recall.** → 33–36 % at one week, d = 4.03 worse than not retiring. *Karpicke & Roediger (2008).*
2. **Getting 3 correct recalls back-to-back and calling it criterion.** → 26 %, statistically identical to one recall. *Karpicke & Bauernschmidt (2011).*
3. **Sharding the deck into small topic stacks so each session "feels" complete.** → moves the deck from the 75 % cell to the 49 % cell. *Karpicke & Bauernschmidt (2011); Kornell (2009).*
4. **Re-testing a missed item immediately after the correction, because it feels responsible.** → Answer-until-correct ≈ just showing the answer (*Butler, Karpicke & Roediger 2007*); retrieval success adds nothing beyond attempt + answer (*Kornell, Klein & Rawson 2015*). The right move is a long lag that will mostly fail — after long lags, corrected commission errors still failed **68 %** of the time on the same-day re-test, and that condition produced the **best** final performance. *Pashler, Zarow & Triplett (2003).*
5. **Front-loading day 0 with high criteria to "get it done."** → 2 extra min/item, overridden by session 4, and the 1–3 schedule beat the 3–1 schedule **53 % vs 40 %** at matched retrieval count. *Rawson & Dunlosky (2011).*

### 7.6 Interaction with what is already in `05-learning-vs-testing.md`

- **`05` §1.7 (the 16 "sure and wrong" items)** already prescribes ≥3 total retrievals with the last one late. This protocol gives them 5, and §7.2 above says never retire them — consistent, and stricter.
- **`05` §5.4 S5** (3–4 exposures, last 24–48 h out) is satisfied by the 5-session schedule ending Fri 11 Sep.
- **`05` §5.4 S3** (uniform, not expanding) — confirmed independently here by Karpicke & Bauernschmidt's null for relative spacing (F < 1) at the *within-session* level too. The null is now established at both timescales.
- **`05` §8 C1** (rate confidence on every item) — **amend.** Higham et al. (2023, *EPR* 35, art. 98, doi:10.1007/s10648-023-09809-2) found that requiring a memory rating on every trial across five spaced sessions **reversed** the retrieval-practice advantage; removing it restored the normal pattern. Collect confidence on **first attempts and errors only**, not on every re-queue trial.
- **`05` §2.3(a)** (no feedback + ≤50 % success = g 0.03) is the same variable as Smith & Karpicke's retrieval-success moderator and Pan & Rickard's elaborated-retrieval moderator. It shows up in three literatures; treat it as the hardest constraint in the build.

---

## 8. Bibliography

**Successive relearning core**
1. Rawson, K. A., & Dunlosky, J. (2011). Optimizing schedules of retrieval practice for durable and efficient learning: How much is enough? *JEP: General*, 140(3), 283–302. doi:10.1037/a0023956
2. Rawson, K. A., & Dunlosky, J. (2012). When is practice testing most effective for improving the durability and efficiency of student learning? *Educational Psychology Review*, 24(3), 419–435. doi:10.1007/s10648-012-9203-1 — https://static.artofmemory.com/files/rawson-dunlosky-2012.pdf
3. Rawson, K. A., & Dunlosky, J. (2013). Relearning attenuates the benefits and costs of spacing. *JEP: General*, 142(4), 1113–1129. doi:10.1037/a0030498
4. Rawson, K. A., Dunlosky, J., & Sciartelli, S. M. (2013). The power of successive relearning: Improving performance on course exams and long-term retention. *Educational Psychology Review*, 25(4), 523–548. doi:10.1007/s10648-013-9240-4
5. Rawson, K. A., Vaughn, K. E., Walsh, M., & Dunlosky, J. (2018). Investigating and explaining the effects of successive relearning on long-term retention. *JEP: Applied*, 24(1), 57–71. doi:10.1037/xap0000146 — https://pubmed.ncbi.nlm.nih.gov/29431462/
6. Rawson, K. A., & Dunlosky, J. (2022). Successive relearning: An underexplored but potent technique for obtaining and maintaining knowledge. *Current Directions in Psychological Science*, 31(4), 362–368. doi:10.1177/09637214221100484
7. Janes, J. L., Dunlosky, J., Rawson, K. A., & Jasnow, A. (2020). Successive relearning improves performance on a high-stakes exam in a difficult biopsychology course. *Applied Cognitive Psychology*, 34(5), 1118–1132. doi:10.1002/acp.3699 — open dissertation version: https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=kent1555593773001858&disposition=inline
8. Higham, P. A., Zengel, B., Bartlett, L. K., & Hadwin, J. A. (2022). The benefits of successive relearning on multiple learning outcomes. *Journal of Educational Psychology*, 114(5), 928–944. doi:10.1037/edu0000693 — https://repository.essex.ac.uk/30280/1/EDU-2020-0708_R2_accepted.pdf
9. Bahrick, H. P. (1979). Maintenance of knowledge: Questions about memory we forgot to ask. *JEP: General*, 108(3), 296–308. doi:10.1037/0096-3445.108.3.296 — the origin of the successive-relearning method (test-restudy to criterion, repeated across spaced sessions).
9b. Bahrick, H. P., Bahrick, L. E., Bahrick, A. S., & Bahrick, P. E. (1993). Maintenance of foreign language vocabulary and the spacing effect. *Psychological Science*, 4(5), 316–321. doi:10.1111/j.1467-9280.1993.tb00571.x — the 9-year self-experiment, 300 translations, index-card dropout method. In the **56-day** relearning-interval condition, **>75 % recalled after 1 year and >60 % after 5 years** (collapsed across number of relearning sessions). Not a 7-day-horizon result, but the existence proof that the dropout-to-criterion-across-sessions method scales to any horizon.

**Criterion level and dropout**
10. Karpicke, J. D., & Roediger, H. L. (2008). The critical importance of retrieval for learning. *Science*, 319(5865), 966–968. doi:10.1126/science.1152408 — https://web.mit.edu/jbelcher/www/learner/retrieval.pdf
11. Vaughn, K. E., & Rawson, K. A. (2011). Diagnosing criterion-level effects on memory: What aspects of memory are enhanced by repeated retrieval? *Psychological Science*, 22(9), 1127–1131. doi:10.1177/0956797611417724
12. Vaughn, K. E., Rawson, K. A., & Pyc, M. A. (2013). Repeated retrieval practice and item difficulty: Does criterion learning eliminate item difficulty effects? *Psychonomic Bulletin & Review*, 20(6), 1239–1245. doi:10.3758/s13423-013-0434-z
13. Vaughn, K. E., Dunlosky, J., & Rawson, K. A. (2016). Effects of successive relearning on recall: Does relearning override the effects of initial learning criterion? *Memory & Cognition*, 44(6), 897–909. doi:10.3758/s13421-016-0606-y
14. Pyc, M. A., & Rawson, K. A. (2007). Examining the efficiency of schedules of distributed retrieval practice. *Memory & Cognition*, 35(8), 1917–1927. doi:10.3758/BF03192925

**Within-session spacing of retrievals**
15. Karpicke, J. D., & Bauernschmidt, A. (2011). Spaced retrieval: Absolute spacing enhances learning regardless of relative spacing. *JEP: LMC*, 37(5), 1250–1257. doi:10.1037/a0023436 — https://learninglab.psych.purdue.edu/downloads/2011/2011_Karpicke_Bauernschmidt_JEPLMC.pdf
16. Pyc, M. A., & Rawson, K. A. (2009). Testing the retrieval effort hypothesis: Does greater difficulty correctly recalling information lead to higher levels of memory? *Journal of Memory and Language*, 60(4), 437–447. doi:10.1016/j.jml.2009.01.004

**Post-error action**
17. Pashler, H., Zarow, G., & Triplett, B. (2003). Is temporal spacing of tests helpful even when it inflates error rates? *JEP: LMC*, 29(6), 1051–1057. doi:10.1037/0278-7393.29.6.1051 — https://gwern.net/doc/psychology/spaced-repetition/2003-pashler.pdf
18. Kornell, N., Klein, P. J., & Rawson, K. A. (2015). Retrieval attempts enhance learning, but retrieval success (versus failure) does not matter. *JEP: LMC*, 41(1), 283–294. doi:10.1037/a0037850
19. Butler, A. C., Karpicke, J. D., & Roediger, H. L. (2007). The effect of type and timing of feedback on learning from multiple-choice tests. *JEP: Applied*, 13(4), 273–281. doi:10.1037/1076-898X.13.4.273
20. Butler, A. C., & Roediger, H. L. (2008). Feedback enhances the positive effects and reduces the negative effects of multiple-choice testing. *Memory & Cognition*, 36(3), 604–616. doi:10.3758/MC.36.3.604
21. Ashby, S. R., & Zeithamova, D. (2023). A combination of restudy and retrieval practice maximizes retention of briefly encountered facts. *Frontiers in Cognition*, 2, 1258955. doi:10.3389/fcogn.2023.1258955

**Format and transfer**
22. Pan, S. C., & Rickard, T. C. (2018). Transfer of test-enhanced learning: Meta-analytic review and synthesis. *Psychological Bulletin*, 144(7), 710–756. doi:10.1037/bul0000151 — https://sc-pan.github.io/pdf/PR_2018W.pdf
23. McDermott, K. B., Agarwal, P. K., D'Antonio, L., Roediger, H. L., & McDaniel, M. A. (2014). Both multiple-choice and short-answer quizzes enhance later exam performance in middle and high school classes. *JEP: Applied*, 20(1), 3–21. doi:10.1037/xap0000004
24. Smith, M. A., & Karpicke, J. D. (2014). Retrieval practice with short-answer, multiple-choice, and hybrid tests. *Memory*, 22(7), 784–802. doi:10.1080/09658211.2013.831454
25. Kang, S. H. K., McDermott, K. B., & Roediger, H. L. (2007). Test format and corrective feedback modify the effect of testing on long-term retention. *European Journal of Cognitive Psychology*, 19(4–5), 528–558. doi:10.1080/09541440601056620
26. Bisra, K., Liu, Q., Nesbit, J. C., Salimi, F., & Winne, P. H. (2018). Inducing self-explanation: A meta-analysis. *Educational Psychology Review*, 30(3), 703–725. doi:10.1007/s10648-018-9434-x — https://gwern.net/doc/psychology/spaced-repetition/2018-bisra.pdf
27. Karpicke, J. D., & Blunt, J. R. (2011). Retrieval practice produces more learning than elaborative studying with concept mapping. *Science*, 331(6018), 772–775. doi:10.1126/science.1199327
28. Mayrhofer, R., Kuhbandner, C., & Frischholz, K. (2023). Re-examining the testing effect as a learning strategy: The advantage of retrieval practice over concept mapping as a methodological artifact. *Frontiers in Psychology*, 14, 1258359. doi:10.3389/fpsyg.2023.1258359

**Cautions**
29. Higham, P. A., Fastrich, G. M., Potts, R., Murayama, K., Pickering, J. S., & Hadwin, J. A. (2023). Spaced retrieval practice: Can restudying trump retrieval? *Educational Psychology Review*, 35, article 98. doi:10.1007/s10648-023-09809-2

*(Effect sizes for the testing effect itself, feedback content, hypercorrection, spacing at short RIs, and interleaving are in `05-learning-vs-testing.md` and are not duplicated here.)*
