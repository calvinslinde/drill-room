# 12 — Error Review: What Is Actually Known About Reviewing Wrong Answers

Research brief. Status: COMPLETE. 2026-09-04.

Scope: the empirical literature on (a) test-enhanced learning in medical education,
(b) how to review a missed multiple-choice item, (c) whether confidence calibration is
trainable on a days-to-weeks timescale, (d) restudy vs. re-test after a diagnosed error,
(e) dose-response of practice-question volume, (f) **transfer** — does reviewing item X
help on item Y testing the same concept, and (g) correct-but-low-confidence answers.

Convention flags: anything marked **[CONVENTION]** is standard practice with no
controlled evidence behind it. Anything marked **[EVIDENCE]** has a controlled study.
**[WEAK]** = evidence exists but is indirect, underpowered, or from a non-medical population.

---

## 1. Test-enhanced learning in medical education

### 1.1 The two anchor RCTs (Larsen, Butler & Roediger)

**Larsen DP, Butler AC, Roediger HL 3rd. "Repeated testing improves long-term retention
relative to repeated study: a randomised controlled trial." *Medical Education* 2009;43(11):1174–81.
DOI: 10.1111/j.1365-2923.2009.03518.x — PMID 19930508.** **[EVIDENCE]**

- Population: pediatric and emergency medicine residents at a real didactic conference
  (status epilepticus, myasthenia gravis). Counterbalanced within-subject randomization:
  each resident got *testing* on one topic and *study review sheet* on the other.
- Dose: immediately after teaching, then twice more at ~2-week intervals (3 exposures).
  **Feedback was given after each test.**
- Retention interval: **6 months** — the longest interval in this literature that is
  still standard, and the reason this study matters more than the lab work.
- Result: **39% vs 26%** on the 6-month free-recall test. A **13 percentage-point**
  absolute advantage, i.e. testing produced **~50% more retained material** than study.
- Note the absolute numbers. Both conditions are catastrophically low at 6 months.
  Retrieval practice does not make forgetting stop; it changes the slope.

**Larsen DP, Butler AC, Roediger HL 3rd. "Comparative effects of test-enhanced learning
and self-explanation on long-term retention." *Medical Education* 2013;47(7):674–82.
DOI: 10.1111/medu.12141 — PMID 23746156.** **[EVIDENCE]**

- 47 medical students, 4 clinical topics, 2×2 (test vs. study) × (self-explanation vs. not),
  **6-month** retention of both retention and *application* items.
- Results, 6-month scores:
  - Testing + self-explanation: **40%**
  - Testing alone: **36%**
  - Self-explanation alone: **29%**
  - Study alone: **20%**
- Main effect of testing: p < 0.0001, **η² = 0.33** (large; ~1/3 of outcome variance).
- **The load-bearing comparison for a drill-room design:** self-explanation — which is
  what "explain why the distractors are wrong" *is*, structurally — added **+4 points on
  top of testing** and **+9 points on top of studying**. Self-explanation is a real but
  second-order effect. Retrieval is the first-order effect. If forced to choose between
  a slow narrated review of one item and doing three more items, the data favor the items.
  See §2 and §4, where this gets complicated.

### 1.2 Field-level synthesis in health professions

**Green ML, Moeller JJ, Spak JM. "Test-enhanced learning in health professions education:
A systematic review: BEME Guide No. 48." *Medical Teacher* 2018;40(4):337–350.
DOI: 10.1080/0142159X.2018.1430354 — PMID 29390949.** **[EVIDENCE]**

- 19 controlled studies, 41 outcomes.
- Immediate learning: 5/6 outcomes favored TEL, **SMD 0.09–0.44** (small).
- Retention: 21/23 outcomes favored TEL, **SMD 0.12–2.5** (the range is enormous;
  the large end comes from long retention intervals where the study condition collapses).
- **Transfer: 7/7 outcomes favored TEL, SMD 0.33–1.1.** Every single transfer comparison
  in health professions education favored testing. This is the strongest single fact in
  §6 and it is worth flagging early.
- The pattern is consistent: **the testing advantage grows with retention interval and is
  smallest (sometimes null) on immediate tests.** A drill session that "feels worse" the
  same day is behaving exactly as the literature predicts.

### 1.3 General practice-testing meta-analyses (for effect-size calibration)

- **Adesope OO, Trevisan DA, Sundararajan N. "Rethinking the Use of Tests: A Meta-Analysis
  of Practice Testing." *Review of Educational Research* 2017;87(3):659–701.
  DOI: 10.3102/0034654316689306.** Practice testing beat restudy and every other
  comparison condition. Format moderator that matters here: **multiple-choice practice
  g = 0.70 vs. short-answer practice g = 0.48.** MCQ practice is not a weak substitute for
  free recall — in this meta-analysis it was *larger*. (Caveat: confounded with criterial
  test format; MCQ practice is usually tested with MCQ outcomes. Still, for someone whose
  criterion test *is* MCQ, this is the relevant number.)
- **Rowland CA. "The effect of testing versus restudy on retention: a meta-analytic review
  of the testing effect." *Psychological Bulletin* 2014;140(6):1432–63. DOI: 10.1037/a0037559 —
  PMID 25150680.** Overall testing effect vs. restudy ≈ **g = 0.50**. Key moderator:
  **recall-format initial tests produce larger benefits than recognition-format initial
  tests**, consistent with retrieval effort ("desirable difficulty"). Rowland's preferred
  account is the **bifurcation model** — testing helps items that were retrievable and does
  comparatively little for items that were not, *unless feedback is supplied*. This is the
  theoretical reason feedback is non-optional on missed items (see §2).

### 1.4 The one dose-response signal from real med students

**Deng F, Gluckstein JA, Larsen DP. "Student-directed retrieval practice is a predictor of
medical licensing examination performance." *Perspectives on Medical Education* 2015;4(6):308–13.
DOI: 10.1007/s40037-015-0220-x — PMID 26498443.** **[WEAK — observational, n=72]**

- 100% of students used practice MCQs; **mean 3,870 questions** before Step 1.
- Multivariate regression on Step 1 score:
  - **MCQs completed: β = 2.2 × 10⁻³, p < 0.001** → **~2.2 Step 1 points per 1,000 questions.**
  - Unique Anki cards: β = 5.9 × 10⁻⁴, p = 0.024 → ~0.6 points per 1,000 cards.
  - Test anxiety: **β = −1.986, p < 0.001** (the largest single negative coefficient in the model).
  - MCAT score: β = 1.078; second-year honours: β = 1.198.
- Two things to take from this and nothing more: (a) question volume has a *positive,
  measurable, and modest* linear association with score across a 0–8,000-question range —
  no visible ceiling within the observed range; (b) **it is observational.** Students who
  do 6,000 questions differ from students who do 2,000 in ways the model does not capture.
  Do not read β as a causal rate. See §5.

---

## 2. Error analysis / question review protocols: does distractor-level review beat key-only?

**Short answer: yes, but the margin is smaller than the folklore claims, and the mechanism
is not the one usually given.** The best direct evidence puts "explain why each option is
right or wrong" at about **d = 0.2** over bare right/wrong feedback — and finds it
**statistically indistinguishable** from a conceptual explanation that never mentions the
distractors at all. What *does* clearly matter is (a) that some elaborated feedback happens
at all, (b) that it is **delayed rather than immediate**, and (c) that reviewing suppresses
distractor intrusions that testing without review actively creates.

### 2.1 The one study that answers the question directly

**Ryan A, Judd T, Swanson D, Larsen DP, Elliott S, Tzanetos K, Kulasegaram K.
"Beyond right or wrong: More effective feedback for formative multiple-choice tests."
*Perspectives on Medical Education* 2020;9(5):307–313. DOI: 10.1007/s40037-020-00606-z.**
**[EVIDENCE — this is the load-bearing citation for the whole question]**

- 64 medical students (Melbourne + Toronto), 62 completers. Within-subjects.
- **Three feedback conditions on the same MCQ items:**
  1. **Right/wrong** — the key, nothing else.
  2. **Response-oriented** — "brief explanations of why each option was correct or incorrect."
     *This is exactly the "articulate why each distractor is wrong" protocol.*
  3. **Conceptually focused** — detailed discussion of the underlying pathophysiological
     principle. Does *not* walk the options.
- **Outcomes:** near transfer (superficially modified item) and far transfer (conceptually
  related, structurally different item), immediate and at 1 week.
- **Results (mean across occasions):**
  | Feedback | Mean | d vs. right/wrong |
  |---|---|---|
  | Right/wrong | 51.3% | — |
  | **Response-oriented (distractor-by-distractor)** | **56.3%** | **0.2** |
  | **Conceptually focused (principle only)** | **59.4%** | **0.4** |
  - Near transfer 59.1% vs. far transfer 52.2% overall (F = 15.61, p < 0.0001).
  - **Response-oriented vs. conceptually focused: not significantly different (p > 0.05).**
    The authors had *hypothesized* conceptual feedback would uniquely support far transfer
    and it did not, on the main analysis.
- **The exploratory finding that matters most here:** restricted to items the student
  **got wrong**, conceptually focused feedback produced **59% on far transfer vs. 46% for
  right/wrong — d = 0.6.** The payoff to elaborated review is concentrated in the misses.
  On items already answered correctly, the elaborated-feedback advantage is much thinner.
- Verbatim: *"Right/wrong feedback appears to have limited potential to augment
  test-enhanced learning."*

**Reading for design:** distractor-walking is *not* proven superior to concept-explaining.
Both beat the key alone. The honest statement is that **elaboration per se is the active
ingredient, and the literature cannot currently distinguish the two forms.** Anyone who
tells you the distractor-by-distractor protocol is empirically established as the superior
review method is stating **[CONVENTION]**, not evidence.

### 2.2 Why distractor-level attention nonetheless has a real mechanism — and a real cost

Two opposing effects, both well replicated.

**The cost — the negative suggestion effect.**
**Roediger HL, Marsh EJ. "The positive and negative consequences of multiple-choice testing."
*JEP: Learning, Memory, and Cognition* 2005;31(5):1155–59. DOI: 10.1037/0278-7393.31.5.1155 —
PMID 16248758.** **[EVIDENCE]** Prior MC testing helped final cued recall (positive testing
effect) *and* increased production of the previously-seen lures as wrong answers on the
final test. **More lures read → smaller positive effect and more false knowledge.**
Verbatim: *"Multiple-choice testing may inadvertently lead to the creation of false knowledge."*

This is directly relevant to a learner whose error signature is "picks the option that is
passage-flavored but overstated." **Every unreviewed practice block is installing
plausible-but-wrong propositions.** The distractors that are most dangerous to install are
precisely the ones that are most plausible — the overstated, passage-flavored ones.

**The fix — feedback removes it.**
**Butler AC, Roediger HL. "Feedback enhances the positive effects and reduces the negative
effects of multiple-choice testing." *Memory & Cognition* 2008;36(3):604–616.
DOI: 10.3758/mc.36.3.604 — PMID 18491500.** **[EVIDENCE]** Both immediate and delayed
feedback increased correct responses *and* reduced lure intrusions on delayed cued recall.

**Butler AC, Karpicke JD, Roediger HL. "The effect of type and timing of feedback on
learning from multiple-choice tests." *JEP: Applied* 2007;13(4):273–281.
DOI: 10.1037/1076-898X.13.4.273.** **[EVIDENCE]** The numbers are worth having exactly:

- Experiment 2 (1-week retention), proportion correct on final cued recall:
  - Not tested: **.26**
  - Tested, **no** feedback: **.42** (testing effect d = 0.80)
  - Tested, **with** feedback: **.65** (feedback effect **d = 1.13**)
  - **Delayed feedback .70 vs. immediate feedback .60 — d = 0.47.**
- **Error-correction rate:** with feedback, **~50%** of initially incorrect responses were
  corrected on the final test (.53/.52 in Exp 1; .43/.41 in Exp 2). **Without feedback,
  only .11 of errors self-corrected.** The bare act of getting it wrong fixes almost nothing.
- **Lure intrusions:** test-with-no-feedback **increased** lure intrusions over not testing
  at all (.26 vs. .18, d = 0.38). Feedback cut them to **.13** (d = 0.77 vs. no feedback).
- **Type of feedback made no difference:** answer-until-correct (make the student keep
  guessing until they find the key) was **equivalent** to simply showing the key
  (.64 vs .65; .43 vs .41 on initially-wrong items). Previous claims that answer-until-correct
  is superior were confounded with timing.

**Three operational conclusions from this one paper:**
1. **Reviewing is not optional and it is not a small effect.** Feedback (d ≈ 1.1) is *larger*
   than the testing effect itself (d ≈ 0.8) at a one-week interval. A question bank run
   without review is worse than half-value — on lure-flavored errors it is net negative.
2. **Effortful re-guessing buys nothing.** Do not build "answer-until-correct" mechanics.
3. **Delay the review.** A ~1-day gap between doing the block and reviewing it beat immediate
   review at d = 0.47. This is the most actionable and most counterintuitive finding in
   this whole brief, and it directly contradicts the standard UWorld habit of reviewing each
   question the instant you answer it. *Caveat: in a passage-based test where the review
   requires re-reading the passage, the cost of re-establishing context may eat the benefit —
   that specific tradeoff has not been tested.* **[CONVENTION beyond this point.]**

### 2.3 Why competitive distractors help — the Bjork line

**Little JL, Bjork EL, Bjork RA, Angello G. "Multiple-choice tests exonerated, at least of
some charges: fostering test-induced learning and avoiding test-induced forgetting."
*Psychological Science* 2012;23(11):1337–1344. DOI: 10.1177/0956797612443370 — PMID 23034566.**

**Little JL, Bjork EL. "Optimizing multiple-choice tests as tools for learning."
*Memory & Cognition* 2015;43(1):14–26. DOI: 10.3758/s13421-014-0452-8 — PMID 25123774.**
**[EVIDENCE]**

- With **competitive** alternatives (plausible, sharing key features with the key), answering
  an MCQ improved later **cued-recall** performance not only on the tested fact but **on
  questions about the information underlying the incorrect alternatives** — content never
  explicitly tested.
- **Cued-recall practice did not produce this second benefit.** MCQ practice with good
  distractors transferred *more broadly* than free recall did.
- Competitive alternatives **did not** increase intrusion errors in these experiments —
  the benefit came from deeper discriminative processing, not raw exposure. (Note the tension
  with Roediger & Marsh 2005; the reconciliation appears to be whether the learner engages in
  *discrimination* — actively deciding why alternatives are false — or merely reads them.)
- Mechanism, in the authors' terms: solving a competitive item requires retrieving why the
  *other* options fail. **The retrieval, not the explanation, is doing the work.**

**This is the strongest theoretical argument for distractor-level engagement — and note where
it locates the benefit: during the ANSWERING, not during the review.** The Bjork finding says
a well-built item makes you rule out distractors while you are taking the test. It does not
say that a post-hoc essay about each distractor adds anything on top. The Ryan et al. data
(§2.1) is the direct test of the post-hoc version, and it comes back d = 0.2 with no
advantage over concept-only explanation.

### 2.4 Feedback-type meta-analysis (non-medical, for calibration)

**Van der Kleij FM, Feskens RCW, Eggen TJHM. "Effects of feedback in a computer-based
learning environment on students' learning outcomes: A meta-analysis."
*Review of Educational Research* 2015;85(4):475–511. DOI: 10.3102/0034654314564881.** **[EVIDENCE]**

- 40 studies, 70 effect sizes (range −0.78 to 2.29).
- **Knowledge of result ("wrong"): d = 0.05.** Essentially nothing.
- **Knowledge of correct response (the key): d = 0.32.**
- **Elaborated feedback (an explanation): d = 0.49.**
- EF's advantage was **largest for higher-order outcomes** — i.e., exactly the reasoning-heavy
  item types, not recall items.
- Note: this meta-analysis found effect sizes were *negatively* affected by delayed feedback,
  the opposite of Butler et al. 2007. The discrepancy is probably retention-interval driven
  (delayed feedback wins at long intervals, loses on immediate posttests) and possibly
  compliance-driven (in classroom settings delayed feedback often means *never read*).
  **Flag this as genuinely unresolved.**

### 2.5 What this means for the "passage-flavored but overstated" signature specifically

There is **no study of error-signature-specific review protocols.** Nothing in this literature
segments learners by error type and tests matched remediation. **[CONVENTION — everything in
this subsection is inference from mechanism, not measured.]**

What the evidence does license:
- The overstated-distractor error is a **discrimination** failure, not a knowledge failure.
  The learner knows the content; he fails to reject an option whose *content* is on-topic but
  whose *scope/strength* exceeds what was licensed. Ryan et al.'s conceptually-focused
  condition would not obviously fix that — it addresses the principle, and the principle is
  already known.
- Roediger & Marsh predicts this specific error gets **worse** with unreviewed volume, because
  the overstated lure is maximally plausible and therefore maximally installable.
- The one protocol element with mechanism behind it: force an explicit statement of the
  **strength/scope gap** — what the passage licensed vs. what the option claimed — rather
  than a content explanation. That converts the review into a discrimination rehearsal, which
  is what Little & Bjork identify as the active process. **Untested. Say so.**

---

## 3. Metacognitive calibration: is it trainable in days?

**Short answer: partially, and faster than you'd expect — but the ceiling is low and the
mechanism is mostly "recalibrate the confidence scale," not "become a better judge of
individual items."** The single most useful fact in this section is not about training at
all: it is that **high-confidence errors are the most correctable errors you have**, and
also the most likely to come back if you don't correct them.

### 3.1 The hypercorrection effect — 16 confident misses is a gift, not a wound

**Butterfield B, Metcalfe J. "Errors committed with high confidence are hypercorrected."
*JEP: Learning, Memory, and Cognition* 2001;27(6):1491–94. DOI: 10.1037/0278-7393.27.6.1491.**
**[EVIDENCE — heavily replicated across independent labs]**

**Metcalfe J. "Learning from Errors." *Annual Review of Psychology* 2017;68:465–489.
DOI: 10.1146/annurev-psych-010416-044022 — PMID 27648988.** The authoritative review.
Verbatim from Metcalfe's summary of the field: errors made with high confidence are *more*
likely to be corrected by feedback than low-confidence errors — a "highly replicable
phenomenon … independently observed by several different research groups." Proposed
mechanism: surprise at being wrong recruits attention to the feedback; also, high-confidence
errors sit in domains where the learner has *more* surrounding knowledge to integrate the
correction into.

**Also from Metcalfe 2017:** memory for a correct answer is *better* when an error was
committed and then corrected than when the correct answer was simply presented. Getting it
wrong and then fixing it beats never getting it wrong — *provided the correction happens*.

**The essential caveat:**
**Butler AC, Fazio LK, Marsh EJ. "The hypercorrection effect persists over a week, but
high-confidence errors return." *Psychonomic Bulletin & Review* 2011;18(6):1238–44.
DOI: 10.3758/s13423-011-0173-y — PMID 21989771.** **[EVIDENCE]**
- Hypercorrection held at both immediate and 1-week final tests, but **error correction
  decreased over the week**.
- When correction failed at 1 week, subjects **reproduced the original error** — and
  **high-confidence errors were MORE likely than low-confidence errors to be reproduced.**
- Verbatim: *"high-confidence errors are more likely to be corrected, but they are also
  more likely to be reproduced if the correct answer is forgotten."*

**Operational reading for 16 confident misses:** they are high-yield *and* high-risk. They
correct best on first feedback and they revert hardest. They are the items that most need
a **second scheduled retrieval at ~1 week**, not just a good explanation today. This is the
cleanest evidence-backed scheduling rule in the entire brief.

### 3.2 Is calibration itself trainable — and how fast?

**Staal J, Katarya K, Speelman M, et al. "Impact of performance and information feedback on
medical interns' confidence–accuracy calibration." *Advances in Health Sciences Education*
2024;29(1):129–145. DOI: 10.1007/s10459-023-10252-9.** **[EVIDENCE — closest study to the
question, in medicine, single session]**

- 125 medical interns randomized to three conditions; 20 chest X-ray diagnoses with feedback,
  then 10 test items **with no feedback**.
- | Measure | No feedback | Performance FB ("correct/incorrect") | Information FB (answer + reasoning) |
  |---|---|---|---|
  | Accuracy | 0.49 | 0.65 | 0.68 |
  | Mean confidence (0–10) | 5.74 | 6.38 | 6.39 |
  | **Calibration (R²)** | **0.05** | **0.12** | **0.19** |
- Accuracy effects: **d = 0.79** (performance FB) and **d = 0.86** (information FB) vs. control.
- **Calibration improved nearly 4× (R² 0.05 → 0.19) inside one session of 20 items.**
- **Two hard limits the authors report:** the calibration gain was "mostly limited to easier
  cases" — on hard items feedback did essentially nothing — and R² = 0.19 is still poor
  calibration in absolute terms. Also note confidence went *up*, not down; feedback improved
  calibration by improving accuracy at least as much as by moderating confidence.

**Meta-analytic ceiling:**
**"Meta-analysis of Interventions for Monitoring Accuracy in Problem Solving."
*Educational Psychology Review* 2024. DOI: 10.1007/s10648-024-09936-4.**
**[EVIDENCE]**
- 35 studies. **All interventions combined: g = 0.25** — small.
- Interventions targeting the **whole task**, **metacognitive knowledge**, and **external
  standards** improved accuracy. Interventions that manipulated only the **timing of the
  metacognitive judgment negatively** affected monitoring accuracy in this analysis.
- **Interventions were more effective for retrospective confidence judgments than for
  prospective judgments of learning.** *This matters: "how sure am I that I got this right,"
  asked right after answering, is the retrospective type — the type that responds best.*
- Lab studies > classroom studies; adults > secondary students.
- **Note the conflict with the delayed-JOL literature.** In paired-associate memorization,
  simply *delaying* the confidence judgment produces the largest calibration gain in all of
  metacognition (Nelson TO, Dunlosky J, *Psychol Sci* 1991;2(4):267–70,
  DOI: 10.1111/j.1467-9280.1991.tb00147.x). In *problem solving*, the 2024 meta-analysis found
  judgment-timing manipulations made monitoring accuracy **worse**. Do not import the
  delayed-JOL prescription into reasoning-item practice; it is domain-bounded.

**Miller TM, Geraci L. "Training metacognition in the classroom: the influence of incentives
and feedback on exam predictions." *Metacognition and Learning* 2011;6(3):303–314.
DOI: 10.1007/s11409-011-9083-7.** **[WEAK — classroom, semester-long, exam-level not item-level]**
- Predictions were almost always above earned grades; **overconfidence was concentrated in
  low performers** (the standard Dunning–Kruger pattern in calibration data).
- Experiment 1: incentives with minimal feedback → **no improvement**.
- Experiment 2: incentives + **concrete** feedback → metacognition improved for low performers,
  **but exam scores did not improve.** Feedback moved *monitoring* without moving *control*.
- **This is the most important negative result in the section.** Better calibration did not
  automatically produce better performance. Calibration training buys you a better allocation
  signal; it does not by itself buy points. Any drill-room design that treats calibration as
  the outcome rather than as an instrument is misreading this literature.

**Prinz A, Golke S, Wittwer J et al. "Calibrating Calibration: A Meta-Analysis of Learning
Strategy Instruction Interventions to Improve Metacognitive Monitoring Accuracy."
*Journal of Educational Psychology*. DOI: 10.1037/edu0000674.** 56 independent effect sizes,
N = 7,667. (Effect-size breakdown not retrievable without access; cited for completeness.)

### 3.3 Confidence-weighted testing — the one format that improves *learning*, not just monitoring

**Sparck EM, Bjork EL, Bjork RA. "On the learning benefits of confidence-weighted testing."
*Cognitive Research: Principles and Implications* 2016;1:3. DOI: 10.1186/s41235-016-0003-x.**
**[EVIDENCE]**

- Format: three options at the vertices of a triangle; the answer is a *point*, so you can
  place it between two options to say "it's one of these two, not that one." A relational
  confidence judgment built into the response.
- **Experiment 1 (N = 150), final test on RELATED, previously untested items (20 items):**
  - Study only: 4.92 (24.5%)
  - Standard MC: 7.02 (35.1%) — d = 0.74 vs. control
  - **Confidence-weighted MC: 8.40 (42.0%) — d = 1.33 vs. control, d = 0.51 vs. standard MC**
  - F(2,147) = 20.59, p < .001, η² = .22
- **Experiment 2 (N = 111)** is the critical control: standard MC **plus a separate confidence
  rating** performed at **6.41** — statistically identical to plain standard MC (6.54) — while
  confidence-weighted scored **8.11**.
  - **Slapping a confidence rating onto a normal question does nothing.** The benefit requires
    the judgment to be *relational* — expressed as a discrimination among the options.
- Participants had **low metacognitive awareness** of the benefit; they did not feel it working.

**This is the most directly actionable finding in the brief for someone with a
"passage-flavored but overstated" error signature.** The confidence-weighted format forces
exactly the operation he is failing: committing to *which options are excluded and how
strongly*, rather than picking the most appealing one. And the benefit shows up on **related,
untested items** — i.e., it transfers (see §6).

**Answer to "is it trainable in days?"** Calibration *metrics* move measurably inside a single
session (Staal: R² 0.05 → 0.19 over 20 items) and modestly across weeks (meta-analytic g = 0.25).
But (a) the gains concentrate on easy items, (b) improved calibration did not improve scores
in the one study that checked (Miller & Geraci), and (c) most of the measured "calibration
improvement" in Staal came from accuracy rising, not from confidence becoming more discerning.
**Treat calibration as diagnostic instrumentation for triage, not as a trainable skill that
will itself raise the score.**

---

## 4. After diagnosing an error: restudy the concept, do fresh questions, or both?

**There is no study that directly compares these three options as post-error remediation.**
I searched for it specifically; it does not exist in the medical-education literature and I
could not find it in the cognitive literature either. **[CONVENTION — any confident
prescription here is inference.]** What follows is the indirect evidence, which is
nonetheless fairly convergent, plus one genuine tension.

### 4.1 An error makes the *subsequent study* unusually effective (test-potentiated encoding)

**Kornell N, Hays MJ, Bjork RA. "Unsuccessful retrieval attempts enhance subsequent learning."
*JEP: Learning, Memory, and Cognition* 2009;35(4):989–998. DOI: 10.1037/a0015729 — PMID 19586265.**
**[EVIDENCE]** Using materials engineered so retrieval *must* fail (fictional trivia; weak
associates), attempting-then-seeing-the-answer beat seeing-the-question-and-answer together.
Verbatim: *"taking challenging tests — instead of avoiding errors — may be one key to
effective learning."*

**Metcalfe 2017 (§3.1)** reports the same: memory for a correct answer is better when an error
preceded the correction than when the correct answer was simply presented.

**Implication for (a):** restudying a concept *right after failing a question on it* is not
the same activity as restudying it cold. The failed retrieval has primed the encoding. This
is the best argument that option (a) is worth more than its reputation — but only in that
narrow window, and only if the restudy actually happens.

### 4.2 But restudy alone does not hold, and retrieval alone plateaus

**Ashby SR, Zeithamova D. "A combination of restudy and retrieval practice maximizes retention
of briefly encountered facts." *Frontiers in Cognition* 2023;2:1258955.
DOI: 10.3389/fcogn.2023.1258955.** **[EVIDENCE — non-medical, small]**
Four blocked schedules over three exposures: SSS (study×3), STT (study+test+test),
SST (study+study+test), STS (study+test+study).
- **Delayed recall (2 days / 7 days): SST ≈ 60% vs. SSS ≈ 50% and STT ≈ 50%.**
- Immediate recall: STS 70% > SST 63%.
- η² for main effects 0.045–0.256.
- **The mixed schedule beat both the pure-study and the pure-retrieval schedule at delay.**

Caveat: these were *briefly encountered facts* with low initial encoding — the regime where
restudy has the most to add. For well-encoded material, the classic result runs the other way:
**Karpicke JD, Roediger HL. "The critical importance of retrieval for learning." *Science*
2008;319(5865):966–68. DOI: 10.1126/science.1152408** — once an item has been recalled once,
**dropping it from further restudy costs nothing while dropping it from further retrieval is
devastating.** Restudy adds value at the front of the learning curve and stops adding value
after successful retrieval.

**Reconciling these:** a missed question means the item is at the *front* of the curve for
that learner. That is the regime where Ashby & Zeithamova's SST pattern applies and where
Kornell's potentiation applies. So the sequence with the most support is
**error → elaborated feedback (this is the "restudy") → fresh retrieval, spaced** — i.e.
option **(c)**, but with a specific ordering, not a menu.

### 4.3 The dose the retrieval side should be given

**Rawson KA, Dunlosky J. "Optimizing schedules of retrieval practice for durable and efficient
learning: how much is enough?" *JEP: General* 2011;140(3):283–302. DOI: 10.1037/a0023956 —
PMID 21707204.** **[EVIDENCE — the best-designed dose study in the literature; 533 students,
3 experiments, >100,000 hand-scored recall responses, retention measured at 1–4 months]**
- Manipulated: initial learning criterion (1–4 correct recalls) × number of relearning
  sessions (1–5), on **conceptual** material.
- **Effects were subadditive:** initial criterion mattered a lot *before* relearning and
  progressively less as relearning sessions accumulated.
- **Relearning had pronounced long-term effects at minimal additional trial cost.**
- **Prescriptive conclusion, verbatim: "practice recalling concepts to an initial criterion
  of 3 correct recalls and then to relearn them 3 times at widely spaced intervals."**

**The important structural point:** the payoff is in the *spaced relearning*, not in grinding
the item on day one. Extra repetitions within a session buy much less than the same
repetitions spread across sessions. A same-day "do five more questions on this concept"
protocol is the low-yield version of the right idea.

### 4.4 One genuine tension worth flagging

There is a live finding that **feedback can reverse the testing-over-restudy advantage**
when practice retrieval success is low (Memory & Cognition 2020, "Reversing the testing effect
by feedback is a matter of performance criterion at practice," DOI: 10.3758/s13421-020-01041-5).
When retrieval mostly fails, the feedback *is* the study episode, and the "testing" condition
converges on the "studying" condition. **[EVIDENCE, but contested]**

Practically: on a concept where he is scoring near chance, the distinction between (a) and (b)
partly dissolves — a question answered wrong followed by an explanation *is* a study episode
with better encoding conditions. The distinction matters most where accuracy is middling.

### 4.5 Summary answer to §4

**(c), with ordering.** No head-to-head study exists. The convergent indirect evidence supports:
error → elaborated/discrimination-focused feedback in the same sitting (the potentiated study
window) → **fresh, non-identical retrieval on that concept at a spaced interval, repeated ~3
times**. What the evidence does *not* support is (i) same-day massed re-questioning as the
main remediation, or (ii) restudy without a subsequent retrieval, or (iii) re-serving the
identical item as the test of whether the fix worked (see §6.2 — same-item performance does
not track transfer).

---

## 5. How many practice questions per concept before performance stabilizes?

**There is no dose-response curve for "questions per concept" in the medical-education
literature.** What exists is (i) a rigorous criterion-based dose study on conceptual material,
(ii) meta-analytic per-repetition coefficients, and (iii) one observational regression on
total question volume. Everything circulating as "2,000–3,000 questions before Step 1" is
**[CONVENTION]** — question-bank marketing and forum consensus, not measured data.

### 5.1 The criterion-based answer (best evidence)

**Rawson & Dunlosky 2011 (full citation §4.3):** for *conceptual* material —
**3 correct recalls to criterion in the initial session, then 3 spaced relearning sessions.**
Beyond that the returns are subadditive and the marginal trial is close to wasted.
Translated to question practice, the unit is **"correct retrievals of the underlying
proposition," not "questions answered."** Three clean hits, then space it three more times.
That is a total of roughly **6 successful retrievals per concept across ≥4 sessions** — a
far smaller number than the volume framing suggests, and distributed rather than blocked.

### 5.2 Per-repetition meta-analytic coefficients

From **Pan & Rickard 2018** (see §6):
- Across all effect sizes with initial-test data: **each additional training-phase repetition
  increased the transfer effect by d = 0.13** (p = .0011, CI [0.060, 0.20]) in single-moderator
  fits — though this did not survive the simultaneous fit.
- Within the **application and inference** category (the relevant one): **each additional
  repetition increased transfer by d = 0.33** (p = .016, CI [0.11, 0.55]), and each added hour
  of retention interval by d = 0.0033.
- **Reading:** repetitions have a roughly linear per-unit effect over the small range studied
  (typically 1–5). No plateau is visible in this data because the studies do not go high enough
  to find one. **The literature cannot tell you where the plateau is.**

### 5.3 The one volume regression in real medical students

**Deng, Gluckstein & Larsen 2015 (§1.4):** β = 2.2 × 10⁻³ Step 1 points per MCQ, i.e.
**~2.2 points per 1,000 questions**, over an observed range with a mean of 3,870 questions.
**No plateau was detected within that range** — the model was linear and significant.
**[WEAK — observational, n = 72, uncontrolled selection.]**

### 5.4 What is convention, stated plainly

Widely repeated numbers — "2,000 minimum," "2,500–3,500 comfortable," "diminishing returns
after 2,500–3,000," "flat after 4,000–4,500" — come from test-prep advisory sites and
aggregated self-report. **None of it is published, controlled, or peer-reviewed.** The one
peer-reviewed number (Deng 2015) shows a *linear* relationship across roughly that same range
with no detectable flattening, which is mild evidence *against* the folk plateau. Treat the
plateau claim as unsupported.

### 5.5 The honest answer

Per concept: **~3 correct retrievals to criterion, then ~3 spaced relearning hits** (Rawson &
Dunlosky, direct evidence on conceptual material). Per exam: **volume is positively and
approximately linearly associated with score up to at least ~4,000 questions**, with the caveat
that this is observational. **Anyone claiming a specific per-concept question count at which
performance stabilizes is extrapolating.**

---

## 6. TRANSFER — does reviewing a missed item help on *different* items testing the same concept?

**Answer: yes, transfer is real and it is not small — d ≈ 0.40 overall — but it is
(a) reliably smaller than the benefit to the *same* item, (b) strongly conditional on three
specific moderators, and (c) near zero or negative when those moderators are absent.**
Two of the three moderators are things a review protocol directly controls.

### 6.1 The definitive source

**Pan SC, Rickard TC. "Transfer of test-enhanced learning: Meta-analytic review and synthesis."
*Psychological Bulletin* 2018;144(7):710–756. DOI: 10.1037/bul0000151 — PMID 29733621.**
192 transfer effect sizes, 122 experiments, 67 articles, N = 10,382, 40+ years. **[EVIDENCE —
this is the single best-evidenced answer to the question in the brief.]**

**Overall: d = 0.40, 95% CI [0.31, 0.50]** vs. non-testing re-exposure controls (restudy/reread).

**Category-level weighted mean effect sizes:**

| Transfer category | k | d | 95% CI | Verdict |
|---|---|---|---|---|
| Across **test formats** (e.g., MCQ practice → recall test) | 56 | **0.58** | [0.43, 0.73] | strong |
| **Mediator / related word cues** | 27 | **0.61** | [0.25, 0.97] | strong (few papers) |
| **Application & inference questions** | 41 | **0.32** | [0.085, 0.56] | positive, modest |
| Problem-solving skills (all) | 17 | 0.29 | [−0.078, 0.65] | **n.s.** |
| — *medical diagnosis & treatment* subcategory | | **0.59** | | strong |
| — *worked examples* subcategory | | **0.045** | | nothing |
| Stimulus–response **rearrangement** | 33 | 0.22 | [−0.019, 0.45] | **n.s.**; only paired associates positive |
| **Untested material** seen during study | 17 | **0.16** | [−0.10, 0.43] | **no evidence of transfer** |

**"Application and inference questions" is the category that maps onto "a different question
testing the same concept." Its honest effect size is d = 0.32.** Positive, real, and about
half the size of the direct testing effect.

### 6.2 Transfer is smaller than the same-item benefit — quantified

Pan & Rickard extracted both effects from the same 81 experiments:
- **Mean testing effect (same item): d = 0.68.**
- **Mean transfer effect (different item): d = 0.40.**
- **56 of 81 cases had transfer < testing (binomial p = .00070).** Only the
  test-format category showed a nonsignificant trend the other way.
- **Testing and transfer effect sizes were at best weakly correlated across the dataset** —
  i.e., you cannot infer how much a practice regimen transfers from how much it helps on
  the repeated item. Item-level gains are not a proxy for concept-level gains.

**Direct design consequence: item-level review is *not* wasted — the transfer is
roughly 60% the size of the same-item benefit — but a protocol built to maximize same-item
recall is optimizing the wrong number, and you cannot detect the difference by tracking
performance on re-served items.**

### 6.3 The three moderators — two of which a review protocol controls

Pan & Rickard's **three-factor framework**. Fitting these three cut between-paper
heterogeneity nearly threefold (τ² 0.077 → 0.028), i.e. they explain most of the
between-study variation in whether transfer happens at all.

**(1) Response congruency** — does the transfer item require the *same response* as the
practiced item?
- No congruency: **d = 0.28**; congruency present adds **d = 0.30** → **d ≈ 0.58**.
- The mechanism is *not* general semantic similarity. Their counterexample: practicing
  "Jefferson purchased Louisiana from WHOM?" produced **no** transfer to "Jefferson purchased
  WHAT from Spain?" despite near-total surface and semantic overlap. **What transfers is the
  retrieved response, not the topic.**
- **This is the sharpest practical finding in the brief.** It predicts that reviewing a missed
  item helps on a new item *to the extent the new item requires you to produce the same
  proposition*, and barely at all when the new item requires a different output about the
  same content. "Same concept" is the wrong unit; **"same thing you have to say"** is the
  right one.

**(2) Elaborated retrieval practice** — broad encoding methods and/or elaborative feedback.
- Adds roughly **d = 0.22–0.25** overall; **d = 0.35** in the application/inference category;
  and in the untested-materials category it moved the estimate from **d = 0.0028 to d = 0.37**
  (p = .032) — i.e., it is the *only* thing that produced any transfer at all to untested material.
- Pan & Rickard's definition of **broad encoding methods**: *"broad retrieval instructions,
  **discrimination instructions**, explanatory recall, and the combination of high and low
  order questions."* **All nine effect sizes across five studies using broad encoding methods
  yielded statistically significant positive transfer.** Nine for nine.
- **"Discrimination instructions" is, verbatim, the intervention for an
  overstated-distractor error signature** — and it is the moderator with the cleanest record
  in this meta-analysis. This is the strongest evidence-backed argument for building a
  discrimination-focused review step, and it is stronger than anything in §2.

**(3) Initial test performance** — how well you did on the practice test.
- **Δd = 0.0058 per 0.01 increment in initial proportion correct.** Over the observed range
  (0.19 → 0.98), **total Δd = 0.46.**
- **Transfer is largest from items you got RIGHT.** Items you got wrong transfer least.
  This is uncomfortable and it is the single most counterintuitive finding for anyone
  designing an error-review system.

**The framework's two extremes (random-effects estimates):**
- No response congruency + no elaborated retrieval + low initial accuracy (0.19):
  **d = −0.053, CI [−0.22, 0.12]** — *nothing, possibly negative.*
- Response congruency + elaborated retrieval + high initial accuracy (0.98):
  **d = 0.90, CI [0.71, 1.08].**
- Under publication-bias correction (PEESE) the same extremes are **d = −0.21** and **d = 0.58.**
- **Verbatim from the authors:** publication-bias-adjusted "intercept predictions were
  substantially reduced, often indicating no positive transfer when none of the
  aforementioned moderators are present."

**So: bare practice testing on questions you're failing, with the key shown and no
discrimination work, is in the region of the literature where transfer is estimated at
zero to slightly negative.** That is the null case a drill-room design has to beat.

### 6.4 Corroborating experimental evidence

**Butler AC. "Repeated testing produces superior transfer of learning relative to repeated
studying." *JEP: Learning, Memory, and Cognition* 2010;36(5):1118–33. DOI: 10.1037/a0019902 —
PMID 20804289.** **[EVIDENCE]** Four experiments; one-week final test containing either
(1a) the **same** questions, (1b/2) **new inferential questions in the same knowledge domain**,
or (3) **new inferential questions from different domains**. Repeated testing beat repeated
studying **in all three cases**. Verbatim: *"the mnemonic benefits of test-enhanced learning
are not limited to the retention of the specific response tested during initial learning but
rather extend to the transfer of knowledge in a variety of contexts."*

**Green/BEME (§1.2):** **all 7/7 transfer outcomes in health professions education favored TEL,
SMD 0.33–1.1.**

**Ryan et al. 2020 (§2.1)** is the most directly on-point medical study: near transfer 59.1%
vs. far transfer 52.2% (F = 15.61, p < 0.0001) — transfer decays with structural distance —
and on **items answered incorrectly**, conceptually-focused review produced **59% far-transfer
vs. 46%** for key-only, **d = 0.6**.

**Little & Bjork 2015 / Little et al. 2012 (§2.3):** MCQ practice with competitive distractors
improved later cued recall **on questions about the content of the distractors** — untested
material — while cued-recall practice did not. **Sparck, Bjork & Bjork 2016 (§3.3):**
confidence-weighted MCQ produced **d = 0.51 over standard MCQ on related, previously untested
items.** Both are demonstrations that transfer to new items can be *engineered by changing how
the option set is processed*.

### 6.5 The verdict for concept-level vs. item-level review

Putting the numbers together:

- Item-level review is not the narrow, near-transfer-only activity it is usually accused of
  being. Transfer to new items testing the same content is real at **d ≈ 0.32–0.40**.
- But it is **~60% the magnitude of the same-item benefit**, uncorrelated with it, and
  **conditional**: it disappears when the new item demands a different response, when no
  discrimination/elaboration work is done, and when initial accuracy was low.
- **Therefore: neither pure item-level nor pure concept-level review is right.** The evidence
  points to a specific hybrid: **review at the item, but the review's content must be the
  discrimination rule and the response, not the item's surface.** The transferable unit is the
  response you had to produce and the rule that let you exclude the alternatives — not the
  passage, not the topic label.
- Corollary that follows from moderator (3) and is worth stating plainly: **a review system
  that spends all its time on misses is spending its time in the region of lowest transfer.**
  The high-transfer material is the stuff answered correctly — which is also where §7 lives.

---

## 7. Reviewing correct-but-uncertain answers (flagged-and-right)

**This is the best-evidenced under-used move in the entire brief, and the intuition that the
10 flagged-and-right items are future misses is correct and measurable.**

### 7.1 The direct study

**Butler AC, Karpicke JD, Roediger HL. "Correcting a metacognitive error: feedback increases
retention of low-confidence correct responses." *JEP: Learning, Memory, and Cognition*
2008;34(4):918–928. DOI: 10.1037/0278-7393.34.4.918 — PMID 18605878.** **[EVIDENCE — this
study exists precisely to answer §7]**

- Design: initial MCQ test on general-knowledge facts + **confidence judgment after each
  response**. Feedback for half the questions. Final **cued-recall** test.
- Findings:
  1. Testing beat not testing (standard).
  2. Feedback corrected initially erroneous responses (standard).
  3. **"Feedback also doubled the retention of correct low-confidence responses, relative to
     providing no feedback."**
- The authors' framing, verbatim: *"The function of feedback is to correct both memory errors
  and metacognitive errors."*
- Prior to this paper the entire feedback literature had conceptualized feedback as error
  correction and given "virtually no consideration to how feedback might promote learning of
  correct responses."

**This is a 2× effect on exactly the item class in question.** Nothing else in this brief
doubles anything.

### 7.2 Corroboration from the same lab's other work

**Butler, Karpicke & Roediger 2007 (§2.2), Experiment 1 conditional analysis:** feedback
benefited **initially correct** responses as well as incorrect ones — the authors' reading is
that it *"helped to confirm the accuracy of some correct guesses that were not maintained in
the test with no-feedback condition."* Further, the overall delayed-over-immediate feedback
advantage in that experiment was attributed largely to **the benefit of delayed feedback after
correct responses**. Reviewing right answers is where delayed review earns most of its money.

### 7.3 Why these items are unstable, mechanically

- On a 4-option item, a coin-flip between two survivors is right 50% of the time and a full
  guess 25%. A flagged-and-right item therefore carries a substantial probability of being a
  correct response produced by a **process that will not reproduce it.** The score records a
  point; the underlying retrieval did not happen.
- **Rowland's bifurcation model (§1.3)** predicts this class specifically: testing strengthens
  items that were genuinely retrieved and does comparatively little for items that were not,
  *unless feedback intervenes*. Low-confidence correct answers sit on the wrong side of the
  bifurcation while being scored on the right side.
- **Pan & Rickard's third moderator (§6.3)** compounds it: transfer scales with initial test
  accuracy. But "accuracy" in their coding is proportion correct — which counts the lucky
  hits. The measured relationship between initial accuracy and transfer is therefore probably
  *attenuated* by exactly these items, meaning true-retrieval accuracy predicts transfer even
  better than the published coefficient suggests.

### 7.4 The asymmetry with high-confidence errors

Set §3.1 and §7.1 side by side, because they cut in opposite directions and both are true:

| Item class | On first feedback | Over 1 week |
|---|---|---|
| **High-confidence error** ("sure," wrong) | **hypercorrected** — best correction rate of any error class | **most likely error class to be reproduced** if the correction is lost (Butler, Fazio & Marsh 2011) |
| **Low-confidence correct** (flagged, right) | invisible to any scoring system; **feedback doubles retention** | decays fastest without feedback; scored as a success so nothing flags it |

**Both classes need a scheduled second retrieval at ~1 week. Neither is served by a review
system that sorts on right/wrong.** A review queue keyed to the score is structurally blind to
class 2 and under-schedules class 1.

**Practical consequence: the confidence flag is worth more as a scheduling input than as a
calibration metric.** §3 showed calibration training moves the metric but not the score
(Miller & Geraci). §7 shows the same flag, used to *route items into review*, produces a
doubling. Use it as a router, not as a report card.

---

## 8. Synthesis — what the evidence actually licenses

Ordered by strength of evidence, not by how much anyone wants it to be true.

1. **Reviewing is worth more than the testing itself, at delay.** Butler et al. 2007 Exp 2:
   testing effect d = 0.80, feedback effect **d = 1.13** on top of it. Unreviewed practice
   questions are not half-value; on lure-flavored items they are net negative (Roediger &
   Marsh 2005: unreviewed MCQ testing *increased* lure intrusions .18 → .26).
2. **Errors do not self-correct.** Without feedback, **11%** of errors were corrected at final
   test; with feedback, ~**43–53%**. There is no version of "I saw I got it wrong, I know why"
   that substitutes for a real correction episode.
3. **Elaboration beats the bare key, and the margin is modest.** Right/wrong d ≈ 0.05
   (van der Kleij); key only d ≈ 0.32; explanation d ≈ 0.49. In medicine (Ryan 2020),
   walking each option d = 0.2 and explaining the concept d = 0.4, over right/wrong —
   **and the two forms of elaboration are not distinguishable from each other.**
4. **Transfer to new items on the same concept is real but conditional.** d = 0.40 overall,
   d = 0.32 for application/inference items, versus d = 0.68 for the same item. It goes to
   **zero or negative** when response congruency, elaboration/discrimination, and initial
   accuracy are all absent.
5. **The transferable unit is the response, not the topic.** Pan & Rickard's Jefferson example
   kills the "same concept" framing: near-identical content with a different required response
   produced no transfer.
6. **"Discrimination instructions" is one of the few interventions with a perfect record**
   (9/9 significant positive transfer effects among broad-encoding studies). This is the
   strongest available warrant for a review step that names why the wrong options are wrong —
   stronger than the direct feedback-comparison evidence in §2.
7. **High-confidence errors are the highest-yield and highest-reversion items.** Hypercorrect
   on first feedback; most likely to return at 1 week. They need a scheduled second retrieval.
8. **Low-confidence correct answers are invisible and decay fastest; feedback doubles their
   retention.** Sorting a review queue on right/wrong misses them entirely.
9. **Dose: ~3 correct retrievals to criterion + ~3 spaced relearning sessions per concept**
   (Rawson & Dunlosky, 533 students, 1–4 month retention). The payoff is in the spacing,
   not in same-day volume.
10. **Delay the review.** Delayed > immediate feedback at d = 0.47 (1-week retention).
    Genuinely contested — the van der Kleij meta found the opposite sign — and untested for
    passage-based items where re-reading cost is high.

### What is convention, not evidence

- Distractor-by-distractor review being *superior* to concept-level review. **Not established.**
  Ryan 2020 found them statistically equivalent, with concept-level numerically ahead.
- Any specific per-concept question count ("do 20 questions on this topic"). **No data.**
- "2,000–3,000 questions then diminishing returns." **Test-prep folklore.** The only
  peer-reviewed volume regression is linear to ~4,000 with no visible plateau.
- Error-log / error-journal formats (categorizing misses into taxonomies). **No controlled
  study found.** The taxonomy may be useful as a routing mechanism; there is no evidence that
  the act of categorizing an error produces learning.
- Matching a review protocol to a learner's error *signature*. **No study segments learners by
  error type and tests matched remediation.** The mechanism argument in §2.5 is plausible and
  unmeasured.
- Answer-until-correct mechanics. **Actively disconfirmed** (Butler et al. 2007: no benefit
  over simply showing the key, twice).

### Open questions this literature cannot answer

- Whether reviewing a *specific* missed item beats spending the same minutes on fresh items
  covering the same concept. Nobody has run it.
- Whether delayed review survives the context-reconstruction cost of passage-based items.
- Whether confidence-weighted response formats (Sparck et al., d = 0.51 over standard MCQ on
  related untested items) work in a passage-based reasoning test — all the evidence is on
  fact-based materials.
- Whether the hypercorrection advantage holds when the "high confidence" was itself produced
  by a systematic bias (e.g., preferring overstated options) rather than by genuine partial
  knowledge. The hypercorrection mechanism is attributed to surprise plus surrounding
  knowledge; a systematically-biased confident error may behave differently. **Untested.**

---

## 9. Reference list (all DOIs verified against Europe PMC / publisher records)

**Test-enhanced learning in medicine**
- Larsen DP, Butler AC, Roediger HL. Test-enhanced learning in medical education. *Med Educ* 2008;42(10):959–66. DOI: 10.1111/j.1365-2923.2008.03124.x
- Larsen DP, Butler AC, Roediger HL. Repeated testing improves long-term retention relative to repeated study: a randomised controlled trial. *Med Educ* 2009;43(11):1174–81. DOI: 10.1111/j.1365-2923.2009.03518.x — PMID 19930508
- Larsen DP, Butler AC, Roediger HL. Comparative effects of test-enhanced learning and self-explanation on long-term retention. *Med Educ* 2013;47(7):674–82. DOI: 10.1111/medu.12141 — PMID 23746156
- Larsen DP, Butler AC, Roediger HL. The importance of seeing the patient: test-enhanced learning with standardized patients and written tests improves clinical application of knowledge. *Adv Health Sci Educ* 2013;18(3):409–25. DOI: 10.1007/s10459-012-9379-7
- Green ML, Moeller JJ, Spak JM. Test-enhanced learning in health professions education: A systematic review: BEME Guide No. 48. *Med Teach* 2018;40(4):337–350. DOI: 10.1080/0142159X.2018.1430354 — PMID 29390949
- Deng F, Gluckstein JA, Larsen DP. Student-directed retrieval practice is a predictor of medical licensing examination performance. *Perspect Med Educ* 2015;4(6):308–13. DOI: 10.1007/s40037-015-0220-x — PMID 26498443

**General testing-effect meta-analyses**
- Rowland CA. The effect of testing versus restudy on retention: a meta-analytic review of the testing effect. *Psychol Bull* 2014;140(6):1432–63. DOI: 10.1037/a0037559 — PMID 25150680
- Adesope OO, Trevisan DA, Sundararajan N. Rethinking the use of tests: a meta-analysis of practice testing. *Rev Educ Res* 2017;87(3):659–701. DOI: 10.3102/0034654316689306
- Karpicke JD, Roediger HL. The critical importance of retrieval for learning. *Science* 2008;319(5865):966–68. DOI: 10.1126/science.1152408 — PMID 18276894

**Transfer**
- Pan SC, Rickard TC. Transfer of test-enhanced learning: meta-analytic review and synthesis. *Psychol Bull* 2018;144(7):710–756. DOI: 10.1037/bul0000151 — PMID 29733621
- Butler AC. Repeated testing produces superior transfer of learning relative to repeated studying. *JEP:LMC* 2010;36(5):1118–33. DOI: 10.1037/a0019902 — PMID 20804289

**Feedback / review of missed items**
- Ryan A, Judd T, Swanson D, Larsen DP, Elliott S, Tzanetos K, Kulasegaram K. Beyond right or wrong: more effective feedback for formative multiple-choice tests. *Perspect Med Educ* 2020;9(5):307–313. DOI: 10.1007/s40037-020-00606-z
- Butler AC, Karpicke JD, Roediger HL. The effect of type and timing of feedback on learning from multiple-choice tests. *JEP: Applied* 2007;13(4):273–281. DOI: 10.1037/1076-898X.13.4.273
- Butler AC, Roediger HL. Feedback enhances the positive effects and reduces the negative effects of multiple-choice testing. *Mem Cognit* 2008;36(3):604–616. DOI: 10.3758/MC.36.3.604 — PMID 18491500
- Roediger HL, Marsh EJ. The positive and negative consequences of multiple-choice testing. *JEP:LMC* 2005;31(5):1155–59. DOI: 10.1037/0278-7393.31.5.1155 — PMID 16248758
- Van der Kleij FM, Feskens RCW, Eggen TJHM. Effects of feedback in a computer-based learning environment on students' learning outcomes: a meta-analysis. *Rev Educ Res* 2015;85(4):475–511. DOI: 10.3102/0034654314564881
- Reversing the testing effect by feedback is a matter of performance criterion at practice. *Mem Cognit* 2020. DOI: 10.3758/s13421-020-01041-5

**Distractors / multiple-choice design**
- Little JL, Bjork EL, Bjork RA, Angello G. Multiple-choice tests exonerated, at least of some charges: fostering test-induced learning and avoiding test-induced forgetting. *Psychol Sci* 2012;23(11):1337–1344. DOI: 10.1177/0956797612443370 — PMID 23034566
- Little JL, Bjork EL. Optimizing multiple-choice tests as tools for learning. *Mem Cognit* 2015;43(1):14–26. DOI: 10.3758/s13421-014-0452-8 — PMID 25123774

**Confidence, calibration, error confidence**
- Butterfield B, Metcalfe J. Errors committed with high confidence are hypercorrected. *JEP:LMC* 2001;27(6):1491–94. DOI: 10.1037/0278-7393.27.6.1491 — PMID 11713883
- Metcalfe J. Learning from errors. *Annu Rev Psychol* 2017;68:465–489. DOI: 10.1146/annurev-psych-010416-044022 — PMID 27648988
- Butler AC, Fazio LK, Marsh EJ. The hypercorrection effect persists over a week, but high-confidence errors return. *Psychon Bull Rev* 2011;18(6):1238–44. DOI: 10.3758/s13423-011-0173-y — PMID 21989771
- Butler AC, Karpicke JD, Roediger HL. Correcting a metacognitive error: feedback increases retention of low-confidence correct responses. *JEP:LMC* 2008;34(4):918–928. DOI: 10.1037/0278-7393.34.4.918 — PMID 18605878
- Sparck EM, Bjork EL, Bjork RA. On the learning benefits of confidence-weighted testing. *Cogn Res Princ Implic* 2016;1:3. DOI: 10.1186/s41235-016-0003-x
- Staal J, Katarya K, Speelman M, et al. Impact of performance and information feedback on medical interns' confidence–accuracy calibration. *Adv Health Sci Educ* 2024;29(1):129–145. DOI: 10.1007/s10459-023-10252-9
- Miller TM, Geraci L. Training metacognition in the classroom: the influence of incentives and feedback on exam predictions. *Metacognition Learn* 2011;6(3):303–314. DOI: 10.1007/s11409-011-9083-7
- Meta-analysis of interventions for monitoring accuracy in problem solving. *Educ Psychol Rev* 2024. DOI: 10.1007/s10648-024-09936-4
- Prinz A, et al. Calibrating calibration: a meta-analysis of learning strategy instruction interventions to improve metacognitive monitoring accuracy. *J Educ Psychol*. DOI: 10.1037/edu0000674
- Nelson TO, Dunlosky J. When people's judgments of learning (JOLs) are extremely accurate at predicting subsequent recall: the "delayed-JOL effect." *Psychol Sci* 1991;2(4):267–70. DOI: 10.1111/j.1467-9280.1991.tb00147.x

**Errors, restudy, and dose**
- Kornell N, Hays MJ, Bjork RA. Unsuccessful retrieval attempts enhance subsequent learning. *JEP:LMC* 2009;35(4):989–998. DOI: 10.1037/a0015729 — PMID 19586265
- Rawson KA, Dunlosky J. Optimizing schedules of retrieval practice for durable and efficient learning: how much is enough? *JEP: General* 2011;140(3):283–302. DOI: 10.1037/a0023956 — PMID 21707204
- Ashby SR, Zeithamova D. A combination of restudy and retrieval practice maximizes retention of briefly encountered facts. *Front Cogn* 2023;2:1258955. DOI: 10.3389/fcogn.2023.1258955
