# Learning vs. Testing: Why Practice Questions Should Not Imitate AAMC Items

**Purpose:** design doctrine for a practice-question generator. AAMC items are optimized for *measurement*; practice items should be optimized for *learning*. These are different objective functions and they diverge in specific, nameable ways.

**Status:** in progress — sections appended as researched.
**Created:** 2026-09-03

---

## 0. The two objective functions

| | AAMC item (measurement) | Practice item (learning) |
|---|---|---|
| Optimizes | Discrimination (point-biserial), difficulty targeting (p ≈ .5–.7 at theta), reliability, IRT fit | Durable change in the learner's knowledge state per minute spent |
| Wants errors to be | *Informative* about ability | *Correctable* — diagnostic of a specific broken mechanism |
| Distractor design | Plausible to the low-ability, unattractive to the high-ability | Each distractor = a **named misconception** with its own feedback branch |
| Item independence | Required (local independence assumption in IRT) | Actively unwanted — item families that vary one parameter are better |
| Repeats | Forbidden (exposure control, item security) | Required (spaced retrieval of the same fact in varied clothing) |
| Feedback | None (would destroy measurement) | The entire point |
| Confidence | Not collected (would add construct-irrelevant variance) | Collected — it gates the highest-yield learning event (hypercorrection) |
| Time pressure | Standardized, part of the construct | A dial, tuned per phase |

The one-line rule: **imitate AAMC on the surface (stem format, passage-based reasoning, answer-choice grammar, cognitive level); deviate from AAMC on everything that touches the feedback loop.**

---

## 0.5 Rule index

Every rule in this document, in one place. Tags: **VS** very strong / **S** strong / **MS** moderate-strong / **M** moderate / **R** reasoned, not established. Section links in brackets.

**Retrieval (§2)** — T1 retrieval is the default activity, not review **VS** · T2 never ship an item without correct-answer feedback **VS** · T3 recall mode for high-value items, MCQ for volume **S** · T4 ignore felt fluency when choosing what to practice **S** · T5 the "just reread" exception applies only if the exam is today **M**

**Errorful generation (§3)** — E1 always commit an answer before any reveal **VS** · E2 route "no idea" to instruction, not to another item **S** · E3 never show the common wrong answer before commitment **MS** · E4 don't offer a skip-the-guess control **S** · E5 prequestion the specific facts you want learned; no halo transfer **S** · E6 reserve full productive-failure sequencing for a few concepts **M**

**Feedback (§4)** — F1 don't build delayed feedback as a feature (g = 0.03) **S** · F2 default to immediate per-item **MS** · F3 every feedback elaborated: why right, why *that* distractor is wrong **VS** · F4 add a process/self-regulation prompt on misses **MS** · F5 no answer-until-correct **M** · F6 get spacing from the scheduler, not the feedback timer **S**

**Spacing (§5)** — S1 don't mass **VS** · S2 default gap ~2 days **S** · S3 uniform intervals, not expanding **S** · S4 err long, not short **MS** · S5 3–4 exposures per item, last one 24–48 h out **S** · S6 overlearning is permitted at this horizon **M** · S7 make the scheduler non-negotiable **S**

**Interleaving (§6)** — I1 interleave where principle-selection is the bottleneck **S** · I2 block pure associative content **S** · I3 author items similar-between / varied-within **MS** · I4 expect it to feel worse **S** · I5 interleave practice, not content delivery **M**

**Difficulty (§7)** — build: retrieval-first, ~2-day spacing, interleaving, generation, competitive distractors, surface variation. Skip: perceptual disfluency, reduced feedback, answer-until-correct, delayed feedback, expanding schedulers, blind guessing, always-on time pressure (**R**). Boundary: below the prior-knowledge floor, teach — don't generate a harder question.

**Confidence (§8)** — C1 rate every item, after the answer is committed **S** · C2 use a 6–7 point scale **M** · C3 route by cell, not by correctness **S** · C4 show the learner their calibration curve **M** · C5 confidence feeds the scheduler, never *is* the scheduler **S** · C6 "sure and wrong" is a first-class tracked object **S**

---

## 1. The hypercorrection effect

### 1.1 The finding

**Errors committed with high confidence are corrected *more* reliably than errors committed with low confidence, provided corrective feedback is given.** This is backwards from what interference theory, response-competition theory, and every strength-based associative model predict — a strongly held wrong answer should be the hardest thing in memory to overwrite. It isn't. It is the easiest.

**Primary source.** Butterfield, B., & Metcalfe, J. (2001). Errors committed with high confidence are hypercorrected. *Journal of Experimental Psychology: Learning, Memory, and Cognition*, 27(6), 1491–1494. doi:10.1037/0278-7393.27.6.1491 — https://pubmed.ncbi.nlm.nih.gov/11713883/
General-knowledge short-answer test, 7-point confidence rating after each response, correct-answer feedback, retest after ~5 min. Mean within-subject Goodman–Kruskal gamma between confidence-in-error and later correction reported as **G = +.36** (value as given in secondary summaries of the paper; the abstract itself reports only the direction — treat the direction as certain and the exact gamma as approximate). From the abstract: "in contrast to the authors' expectations, highly confident errors were the most likely to be corrected in a subsequent retest."

**Replication base (independent labs, ~15+ studies).** Butterfield & Mangels (2003, ERP); Butterfield & Metcalfe (2006, *Metacognition and Learning*); Butler, Karpicke & Roediger (2008); Fazio & Marsh (2009, 2010); Sitzman & Rhodes (2010); Butler, Fazio & Marsh (2011); Metcalfe & Finn (2011, 2012 — including children); Metcalfe, Butterfield, Habeck & Stern (2012, fMRI); Cyr & Anderson (2013); Eich, Stern & Metcalfe (2013); Iwaki, Matsushima & Kodaira (2013, Japanese kanji); Metcalfe & Miele (2014); van Loon et al. (2015); Metcalfe, Casal-Roscum, Radin & Friedman (2015, *Psychological Science*); Sitzman, Rhodes & Tauber (2014). Review: **Metcalfe, J. (2017). Learning from Errors. *Annual Review of Psychology*, 68, 465–489.** doi:10.1146/annurev-psych-010416-044022 — free full text: https://www.columbia.edu/cu/psychology/metcalfe/PDFs/Learning%20from%20errorsAnnual%20ReviewMetcalfe2016.pdf

**Effect magnitudes actually reported.**

| Study | Design | High-conf errors corrected | Low-conf errors corrected | Effect size |
|---|---|---|---|---|
| Butterfield & Metcalfe (2001) | GK short answer, 5-min retest | — | — | γ = **+.36** |
| Butler, Fazio & Marsh (2011), 6-min RI | 120 science GK items, n=25 | (monotonic increase across 7 conf levels) | | γ = **+.28**, d = 0.86 |
| Butler, Fazio & Marsh (2011), 1-week RI | same, n=25 | | | γ = **+.19**, d = 0.79 (n.s. vs 6-min, p = .27) |
| Eich, Stern & Metcalfe (2013), young adults | GK | **85%** | **76%** | γ = **+.51**; t = 2.95, p = .005 |
| Eich et al. (2013), older adults | GK | 84% | 81% | γ = +.14, n.s. |

Note the shape of the Eich numbers: hypercorrection is a **~9-percentage-point** swing in young adults, not a 40-point one. It is real, replicable, and moderate. Do not oversell it — but it points the same direction every time, and it is *free*: it costs nothing but a confidence tap.

### 1.2 Mechanism — two non-exclusive accounts, both with design consequences

**(a) Surprise / attentional capture (prediction error).** Being wrong when you were sure produces a discrepancy signal that recruits attention onto the feedback.
- *Dual-task evidence*: Butterfield & Metcalfe (2006) had subjects detect faint tones during feedback. Tones presented during **high**-confidence error feedback were missed more often — attention was consumed by the feedback itself.
- *Context memory*: Fazio & Marsh (2009) — incidental context surrounding high-confidence-error feedback was better remembered.
- *ERP*: Butterfield & Mangels (2003) and Metcalfe et al. (2015) found a **confidence-graded P3a** to corrective feedback (largest for high-confidence errors, Δ ≈ 1.0 μV) — the classic orienting/surprise component, itself associated with enhanced encoding.
- *fMRI*: Metcalfe, Butterfield, Habeck & Stern (2012, *J. Cognitive Neuroscience*) — feedback to high-confidence errors differentially activated **anterior cingulate / medial frontal** (surprise, error detection, attention), plus DLPFC and TPJ.

**(b) Semantic proximity / prior domain knowledge.** High-confidence errors come from domains the learner actually knows something about; the error sits *nearer* the correct answer in semantic space.
- Latent semantic analysis similarity of error→correct answer: **LSA .36 for high-confidence errors vs .26 for low-confidence errors** (young adults; Metcalfe & Finn 2011, Eich et al. 2013).
- Metcalfe & Finn (2011): after a high-confidence error, learners are more likely to produce the *correct* answer on a second guess, more likely to pick it in a multiple-choice test that excludes their original answer, and need **fewer clues** to reach it. High-confidence errors are near-misses wearing the costume of a blunder.
- **The strong version of this account:** Sitzman, D. M., Rhodes, M. G., & Tauber, S. K. (2014). Prior knowledge is more predictive of error correction than subjective confidence. *Memory & Cognition*, 42(1), 84–96. doi:10.3758/s13421-013-0344-3 — https://pubmed.ncbi.nlm.nih.gov/23797971/. Three experiments: hypercorrection was **unchanged when feedback was delayed** (which should have degraded memory for the confidence judgment, and did — recall of prior confidence dropped — yet hypercorrection did not), and when domain-knowledge estimates were pitted directly against confidence, "prior knowledge was related to error correction, whereas the unique role of confidence was small." Their conclusion: **confidence is largely a proxy for prior knowledge.**

**Design consequence of (b) beating (a):** a "sure and wrong" flag is best read as *"this learner has substantial but mis-assembled knowledge in this neighborhood"* — a **near-miss detector**, not merely an ego-bruise detector. That reading is more actionable, because it says the fix is a *small discrimination*, not a re-teach. It also predicts which items will transfer: the surrounding neighborhood is already populated, so one correction repairs several downstream items.

### 1.3 Boundary conditions — where hypercorrection fails or reverses

1. **No feedback, or feedback without the correct answer → nothing happens.** Right/wrong-only feedback yields near-zero benefit. Pashler, Cepeda, Wixted & Rohrer (2005), *JEP:LMC* 31(1), 3–8, doi:10.1037/0278-7393.31.1.3: supplying the correct answer after an incorrect response **increased final (1-week) retention by 494%** relative to no feedback. Feedback after *correct* responses "made little difference." This is the largest single number in this entire document. **Correct-answer feedback on wrong items is non-negotiable.**
2. **Feedback must actually be processed.** Metcalfe (2017) attributes many null feedback results to unenforced attention. Metcalfe et al. (2009) *required* subjects to type the answer in. Effect present. A practice app that flashes an answer the learner scrolls past is running the null condition.
3. **The error must be semantically related to the target.** Huelser & Metcalfe (2012), Grimaldi & Karpicke (2012), Knight et al. (2012), Kang et al. (2011): forced blind guessing on material the learner knows nothing about produces **no benefit**. Hypercorrection needs an informed wrong answer.
4. **Errors must be self-generated.** Grimaldi & Karpicke (2012): when the *experimenter* supplied the wrong word during what would have been the generation window, memory for the correct answer was **harmed**. Constraining what the learner may generate also hurt. Corollary: showing a learner "the common wrong answer" before they commit is not the same intervention and may be a negative one.
5. **Amnesia / severely impaired episodic memory reverses it entirely.** Errorless learning (method of vanishing cues; Glisky et al. 1986; Baddeley & Wilson 1994) is superior for amnesic patients. Irrelevant to this app, but it is the clean theoretical boundary: the benefit rides on intact episodic memory for the correction event.
6. **Older adults show an attenuated effect** (Eich et al. 2013: γ = .14, n.s.) — but the reason is that they *also* correct their low-confidence errors well, not that they fail on high-confidence ones (Metcalfe et al. 2015, *Psych Sci* 26(12), 1833–1842).
7. **Conceptual misconceptions need refutation-format feedback, not plain correct-answer feedback.** This is the single most important boundary condition for a science-content app. **van Loon, M., Dunlosky, J., van Gog, T., van Merriënboer, J., & de Bruin, A. (2015). Refutations in science texts lead to hypercorrection of misconceptions held with high confidence. *Contemporary Educational Psychology*, 42, 39–48.** doi:10.1016/j.cedpsych.2015.04.003 — https://www.sciencedirect.com/science/article/abs/pii/S0361476X15000235. Standard texts that simply stated the correct fact produced **no hypercorrection**. Refutation texts — which explicitly state the learner's misconception, then discuss and refute it — **did**, and specifically for high-confidence misconceptions only (no benefit for low-confidence ones). The mechanism they propose: the feedback must **co-activate the misconception and the correct conception in the same moment** for surprise to fire.
8. **The corrected high-confidence error is the most likely to come back.** See §1.4.

### 1.4 The return of high-confidence errors — the decay clock

**Butler, A. C., Fazio, L. K., & Marsh, E. J. (2011). The hypercorrection effect persists over a week, but high-confidence errors return. *Psychonomic Bulletin & Review*, 18(6), 1238–1244.** doi:10.3758/s13423-011-0173-y — full PDF: https://static1.squarespace.com/static/5c8baca1e5f7d136349ea789/t/5e73abaec5e3c210ffa4c8f1/1584638894859/Butler2011_Article_TheHypercorrectionEffectPersis.pdf

50 Duke undergrads, 120 science GK questions (seeded with common misconceptions), 7-point confidence, 6-s correct-answer feedback, retest at **6 minutes vs 1 week** (between-subjects).

- Hypercorrection held at both intervals: γ = .28 (6 min) vs γ = .19 (1 week), **not significantly different** (p = .27). The *relationship* survives a week.
- But **overall error correction collapsed: .86 → .56** (d = **1.58**). Total final-test accuracy .90 → .71 (d = 1.31).
- The new finding: when a corrected error was *not* retained at one week, learners **reproduced the original error** — and the higher the original confidence, the more likely the reproduction (γ = **+.15**, d = 0.51).
- Bjork & Bjork's new theory of disuse explains it: the high-confidence error has high *storage strength* from years of exposure; the correction has high *retrieval strength* but almost no storage strength. Retrieval strength decays; storage strength doesn't. The error wins on a long enough clock.
- Side finding with direct app relevance: learners were **more likely to correct an error if they could still remember making it** (.72 vs .65; η² = .13). Remembering the error helps, it doesn't interfere.

**This is the load-bearing result for a 9-day horizon.** A high-confidence error corrected once is not fixed; it is *temporarily suppressed*, and it is the item most likely to snap back. Nine days is inside the window where the snap-back is observed (one week). Every hypercorrected item must be re-tested at least twice more before test day, and the last re-test must be late.

### 1.5 What feedback format maximizes hypercorrection

Ranked by evidence, strongest first:

1. **Contains the correct answer.** (Pashler et al. 2005 — 494%.) Non-negotiable.
2. **Refutation structure: name the learner's specific wrong answer, say why it is attractive, then refute it and give the correct one.** (van Loon et al. 2015; Metcalfe 2017 on co-activation.) Without this, high-confidence *conceptual* errors are not corrected at all. This is the format rule that most distinguishes a good MCAT practice app from a bad one — and note that it requires the generator to know, per distractor, *what misconception that distractor encodes*.
3. **Elaborated / scaffolded rather than terminal.** Finn & Metcalfe (2010) — scaffolded feedback increases the benefit.
4. **Explain-the-correct-reasoning prompt.** Siegler (1995, 2002): three conditions — feedback only; "why do you think that?"; and **"how do you think I knew that?"** The third was most effective. It forces the learner to reconstruct the *correct* derivation rather than defend their own. Cheap to implement as a post-feedback prompt on missed items.
5. **Force attention on the feedback.** Require an action — retype the answer, tap the specific flawed step, or state the rule in one line — before advancing. (Metcalfe et al. 2009; Kulik & Kulik 1988 attribute delayed-vs-immediate discrepancies to attention, not timing.)

### 1.6 The full confidence × correctness matrix (all four cells have a rule)

| | Wrong | Correct |
|---|---|---|
| **High confidence** | **Hypercorrection cell.** Highest learning yield per item. Give refutation feedback. Re-test at least twice; last re-test late. Most likely to relapse. | Feedback adds **little** (Pashler et al. 2005: "feedback after correct responses made little difference... regardless of whether the subject was confident"). Retire the item; spend the minute elsewhere. |
| **Low confidence** | Corrected least often; needs the most exposures. Check first whether the error is *related* to the target — if the learner had no idea, this is a **content gap, not an error to hypercorrect**, and should be routed to instruction, not to more questions. | **Butler, Karpicke & Roediger (2008)**, *JEP:LMC* 34(4), 918–928, doi:10.1037/0278-7393.34.4.918: feedback **doubled** retention of low-confidence *correct* responses. "The function of feedback is to correct both memory errors and metacognitive errors." Second-highest yield cell. Most apps ignore it entirely. |

### 1.7 Verdict on the 16 "sure and wrong" items

**Yes — they are the best learning targets in the pool, but not for the reason it feels like.** Read them as near-misses in populated knowledge neighborhoods (Sitzman et al. 2014; LSA .36 vs .26), which means each one is a *small discrimination away* from correct and likely to carry neighbors with it. Concretely:

- **Expected gain is moderate, not miraculous:** ~9 points of correction advantage over low-confidence errors (Eich et al. 2013), γ ≈ .2–.5. Sixteen items is a small enough set to treat individually with high-cost feedback, which is exactly what the effect requires.
- **The one-shot correction will not hold to day 9.** Butler et al. (2011) measured .86 → .56 decay over exactly this interval, with high-confidence errors preferentially returning. Schedule each of the 16 for **≥3 total retrievals**, with the final one in the last 48 hours.
- **Feedback for these 16 must be refutation-format, hand-quality**, naming the learner's actual chosen answer and the misconception it encodes (van Loon et al. 2015). Generic explanations run the condition that produced *no* hypercorrection.
- **Do not show them the same item verbatim.** Re-test with an isomorph that requires the same discrimination in different clothing, so the retrieval is of the *rule*, not the *answer string*.
- **Ask the diagnostic question before writing feedback:** was the wrong answer semantically near the right one (a discrimination failure) or unrelated (a content hole misread as confidence)? Only the first is a hypercorrection target. The second is a teaching target.

---

## 2. Testing effect / retrieval practice

### 2.1 Headline effect sizes

| Meta-analysis | Scope | Effect |
|---|---|---|
| **Rowland (2014)**, *Psychological Bulletin* 140(6), 1432–1463, doi:10.1037/a0037559 | 159 effect sizes, testing vs. **restudy** (the hard comparison) | **g = 0.50, 95% CI [0.42, 0.58]** |
| **Adesope, Trevisan & Sundararajan (2017)**, *Review of Educational Research* 87(3), 659–701, doi:10.3102/0034654316689306 | 272 effect sizes / 188 experiments | **g = 0.51** vs. restudy; **g = 0.93** vs. filler/no activity |
| **Yang, Luo, Vadillo, Yu & Shanks (2021)**, *Psychological Bulletin* 147(4), 399–435, doi:10.1037/bul0000309 | 222 studies, **48,478 students, real classrooms** | **g = 0.499** |

Three independent meta-analyses, three different literatures (lab, mixed, classroom), all landing on **g ≈ 0.50**. This is about as settled as anything in learning science. Practice testing beats restudy by roughly half a standard deviation.

### 2.2 Does it hold at SHORT retention intervals? — yes, but smaller, and it can invert below ~1 day

This is the question that matters for a 9-day build, and the answer is not "it only works over months."

**Rowland (2014) moderator analysis, retention interval:**
- RI **≥ 1 day**: g = **0.69** [0.56, 0.81]
- RI **< 1 day**: g = **0.41** [0.31, 0.51] — *still positive, still reliable, CI excludes zero*
- Continuous meta-regression on log(RI): slope = **0.083**, SE .027, 95% CI [0.031, 0.135], Z = 3.13, p < .05. The effect grows with retention interval but has a healthy positive intercept.

**The known inversion.** Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: taking memory tests improves long-term retention. *Psychological Science*, 17(3), 249–255. doi:10.1111/j.1467-9280.2006.01693.x — https://pubmed.ncbi.nlm.nih.gov/16507066/. Prose passages, repeated study vs. repeated free-recall testing (no feedback), final test at **5 min / 2 days / 1 week**. At **5 minutes, repeated studying beat repeated testing.** At 2 days and 1 week, testing beat studying substantially — and students' *confidence* went the wrong way (restudy felt better).

**Interpretation for a 9-day exam.** The inversion window is minutes, not days. Nine days sits squarely in the region where Rowland's ≥1-day estimate (g = 0.69) applies. **Retrieval practice is unambiguously the right primary activity at this horizon.** The only interval where "just reread it" wins is when the test is later today.

### 2.3 The two moderators that should change your architecture

**(a) Feedback is not optional when items are hard.** Rowland (2014), retrievability × reexposure moderator:
- No feedback, initial test performance **≤ 50%**: g = **0.03** [−0.21, 0.27], **p = .79 — no testing effect at all.**
- No feedback, 51–75% initial success: g = 0.29 [0.08, 0.49]
- No feedback, >75% initial success: g = 0.56 [0.42, 0.70]
- **With feedback, regardless of success rate: g = 0.73 [0.61, 0.86]** — the largest cell in the analysis.

Design consequence: **an unfeedbacked practice test on material the learner is failing does literally nothing.** AAMC-style difficulty targeting (p ≈ .5–.7) sits right at the edge of the dead zone. A practice app that mimics AAMC difficulty *and* withholds explanation is running the g = 0.03 condition.

**(b) Recall beats recognition as the *practice* format — but the meta-analyses disagree, and the disagreement is informative.**
- Rowland (2014), high-exposure dataset, **initial (practice) test format**: cued recall g = **0.72** [0.61, 0.83]; free recall g = **0.81** [0.45, 1.18]; **recognition g = 0.36** [0.19, 0.52] (both recall types significantly larger, ps < .001 and .03). **Final test format**: cued recall 0.57 > free recall 0.49 > recognition 0.31.
- Adesope et al. (2017) found the opposite for practice format: **multiple-choice practice g = 0.70 vs. short-answer practice g = 0.48.**
- The reconciliation: Adesope's MC studies more often included feedback and covered more content per unit time; Rowland's high-exposure dataset equated exposure and isolated retrieval effort. Rowland's estimate answers "per retrieval, which format teaches more?" (recall). Adesope's answers "per hour of a real study session, which format is more efficient?" (MC, because you get through more of them and they carry feedback).
- **Both are true and both are actionable:** MCQ is the efficient default; a recall-mode pass on the same content extracts more per item. Don't choose — sequence them.

### 2.4 Design rules

| # | Rule | Evidence strength |
|---|---|---|
| **T1** | Make retrieval, not review, the default activity for the whole 9 days. | **Very strong** — 3 meta-analyses, g ≈ 0.50; ≥1-day RI g = 0.69 |
| **T2** | Never ship an item without correct-answer feedback. Withholding it on hard items zeroes the effect. | **Very strong** — Rowland g = 0.03 vs 0.73; Pashler 494% |
| **T3** | Offer a **recall mode** (type/say the answer before options appear) and use it on high-value items; use MCQ for volume. | **Strong** — Rowland 0.72–0.81 vs 0.36 for recognition practice; tempered by Adesope's efficiency finding |
| **T4** | Do not trust the learner's felt fluency to pick what to practice. Restudy feels better and teaches less. | **Strong** — Roediger & Karpicke (2006); Soderstrom & Bjork (2015), *Perspectives on Psych Science* 10(2), 176–199, doi:10.1177/1745691615569000: performance during acquisition is an unreliable index of learning |
| **T5** | The one exception to T1: if the exam were today, rereading would win. It isn't. Ignore the exception. | **Moderate** — R&K 2006 5-min inversion |

---

## 3. Errorful generation and productive failure — does failing first beat studying first?

### 3.1 Errorful generation (item level): yes, robustly, *if the guess is informed*

**Kornell, N., Hays, M. J., & Bjork, R. A. (2009). Unsuccessful retrieval attempts enhance subsequent learning. *JEP:LMC*, 35(4), 989–998.** doi:10.1037/a0015729. The definitive first demonstration. Cue–target pairs where retrieval was guaranteed to fail; study time on the correct answer equated across conditions; trials on which the participant happened to guess right were excluded (<10%). Guess-then-see-answer beat see-answer-directly on the final test, consistently across six experiments.

**Huelser, B. J., & Metcalfe, J. (2012). Making related errors facilitates learning, but learners do not know it. *Memory & Cognition*, 40(4), 514–527.** doi:10.3758/s13421-011-0167-z. **The boundary condition.** Error generation helped when cue and target were *related* and produced no benefit at all when they were unrelated — confirmed by LSA on the actual errors generated. Replicated by Grimaldi & Karpicke (2012), Knight et al. (2012); Kang et al. (2011) found no effect when participants were forced to guess on facts they had no basis for.

**The metacognitive trap, quantified.** In Huelser & Metcalfe, participants showed a ~**20-percentage-point** benefit from error generation (Metcalfe 2017 glosses this as "roughly the difference between a C− and an A") and *still* believed the error-free condition had worked better — immediately after doing both. **The learner's preference is an anti-signal here.** An app that lets the user skip the guess because guessing feels wasteful is optimizing against the data.

**Two further constraints from the same literature:**
- The error must be **self-generated**. Grimaldi & Karpicke (2012): when the experimenter *supplied* a wrong word during the would-be generation window, memory for the correct answer was **harmed** relative to plain study. Constraining the space of allowed guesses also hurt.
- Related: Kornell & Metcalfe (2006) — self-generated wrong answers during tip-of-the-tongue states did **not** block retrieval, whereas experimenter-presented wrong answers did (Smith & Blankenship 1991).

### 3.2 Pretesting / prequestions (passage level): yes, but the benefit is *item-specific*

**Pan, S. C., & Carpenter, S. K. (2023). Prequestioning and pretesting effects: a review of empirical research, theoretical perspectives, and implications for educational practice. *Educational Psychology Review*, 35, 97.** doi:10.1007/s10648-023-09814-5 — https://link.springer.com/article/10.1007/s10648-023-09814-5. Testing people on material they do not yet know improves learning **provided they get to study the correct answers afterwards**. Classroom studies show students performing **8–9% better** on content that had been pretested.

**The limit that matters for scheduling.** A multilevel meta-analysis of prequestions (*Educational Psychology Review*, 2025, doi:10.1007/s10648-025-10075-7 — https://link.springer.com/article/10.1007/s10648-025-10075-7) found **g = 0.66 for the specific information that was prequestioned** and **g = 0.01 — nothing — for other, non-prequestioned information in the same material.** Pretesting is a spotlight, not a floodlight. It does not make a subsequent study session generally more effective; it makes the *asked* facts stickier.

Design consequence: prequestions are a **targeting device**. If you want a chapter learned, you must prequestion the specific things you want learned — you cannot prequestion three items and expect the chapter to lift.

### 3.3 Productive failure (task level): moderate, and fidelity-dependent

**Sinha, T., & Kapur, M. (2021). When problem solving followed by instruction works: evidence for productive failure. *Review of Educational Research*, 91(5), 761–798.** doi:10.3102/00346543211019105 — https://journals.sagepub.com/doi/10.3102/00346543211019105.
- 53 studies, 166 comparisons, PS-I (problem-solving *then* instruction) vs. I-PS (instruction *then* problem-solving).
- **g = 0.36, 95% CI [0.20, 0.51]** favoring PS-I.
- **g = 0.37–0.58** when PS-I was implemented with high fidelity to productive-failure design principles.
- **Reversals:** effects favored **I-PS** for younger learners (grades 2–5) and for **domain-general skills**. Moderated by mastery orientation, task domain-specificity, and scaffolding of the generation phase.

For an adult learner working domain-specific science content on a deadline, this literature is on the "fail first" side — but note the effect (g ≈ 0.36) is meaningfully smaller than retrieval practice (g ≈ 0.50) or feedback-after-error (Pashler's 494%), and it costs much more time per unit of content. Productive failure is a good design for the *few concepts you most need restructured*, not for the whole review.

### 3.4 Design rules

| # | Rule | Evidence strength |
|---|---|---|
| **E1** | Always make the learner commit an answer before revealing anything. Never show a worked example first on content they could partly reach. | **Very strong** — Kornell et al. 2009 + 6 replications |
| **E2** | Gate the guess on plausibility: if the learner has no basis at all, blind guessing buys nothing. Provide an explicit "I have no idea — teach me this" path that routes to instruction, not to another item. | **Strong** — Huelser & Metcalfe 2012; Kang et al. 2011 |
| **E3** | Never show the common wrong answer *before* the learner commits. Experimenter-supplied errors hurt. | **Moderate-strong** — Grimaldi & Karpicke 2012 |
| **E4** | Don't let the UI or the learner opt out of guessing on the grounds that it feels unproductive. Log it, don't offer it. | **Strong** — Huelser & Metcalfe 2012 metacognitive-illusion result |
| **E5** | Use prequestions to target *specific* facts you intend to stick; do not expect halo transfer to surrounding content. | **Strong** — g = .66 targeted vs g = .01 untargeted |
| **E6** | Reserve full productive-failure sequencing (struggle on an unfamiliar problem, then instruction) for a handful of concepts needing restructuring, not for review volume. | **Moderate** — Sinha & Kapur g = 0.36, fidelity-sensitive, reverses in some populations |

---

## 4. Feedback timing: immediate vs. delayed

### 4.1 The current answer: timing is a wash; content is everything

**Kandemir, E. N., Esposito, E., Gurgand, L., & Ramus, F. (2026). A meta-analysis of the impact of feedback timing on learning outcomes in computer-assisted learning. *Educational Psychology Review*, 38, 13.** doi:10.1007/s10648-026-10117-8 — https://link.springer.com/article/10.1007/s10648-026-10117-8
- 51 studies (1988–2024), **160 effect sizes**, meta-regression with robust variance estimation.
- **"Feedback timing does not significantly influence learning outcomes on average (g = 0.03, 95% CI [−0.08, 0.13], p = .61)."**
- Delays in the corpus ranged 1 s → 7 days (time-based) and 1 → 60 intervening items. Significant moderators: educational level, learning domain, response-time constraints — but partially confounded.
- Explicit caveat: few studies examine delays of ≥1 day, so the multi-day case is under-evidenced.

This supersedes the older folk wisdom in both directions. It is the most defensible single statement available: **do not spend design effort optimizing when the feedback arrives.**

### 4.2 The prior literature, and why it looked contradictory

| Source | Finding |
|---|---|
| **Kulik & Kulik (1988)**, *Review of Educational Research* 58(1), 79–97, doi:10.3102/00346543058001079 | 53 studies. **Classroom** studies favored immediate; **lab** list-learning studies usually favored delayed. Their own reconciliation: the real variable is whether the learner *attends* to the feedback. |
| **Butler, A. C., Karpicke, J. D., & Roediger, H. L. (2007)**, *JEP: Applied* 13(4), 273–281, doi:10.1037/1076-898X.13.4.273 | Prose passages, 6-alternative MCQ, feedback immediate vs. delayed. **Delayed feedback produced superior final cued-recall.** Also: "answer-until-correct" feedback was **equivalent** to simply showing the correct answer — the discovery ritual bought nothing. The authors attribute the delay benefit to *spacing*, not to timing per se. |
| **Metcalfe, J., Kornell, N., & Finn, B. (2009)**, *Memory & Cognition* 37(8), 1077–1087, doi:10.3758/MC.37.8.1077 | Grade-6 children: delayed > immediate > none. **College students: delayed > immediate only when lag-to-test was uncontrolled; no difference once lag was controlled.** The apparent delay benefit was spacing in disguise. |
| **Ryan, A. T., Judd, T., Wilson, C., Larsen, D. P., Elliott, S., Kulasegaram, K., & Swanson, D. (2024). Timing's not everything. *Medical Education* 58(7), 838–847**, doi:10.1111/medu.15287 | **Directly on point for this app.** 41 second-year medical students, MCQ test with conceptual feedback delivered **post-item vs. post-item-block**, tested on near and far transfer immediately and at **one week**. Feedback-timing effect **non-significant.** "Educators may consider practical factors when determining appropriate TEL feedback timing." |
| **van der Kleij, F. M., Feskens, R. C. W., & Eggen, T. J. H. M. (2015)**, *Review of Educational Research* 85(4), 475–511, doi:10.3102/0034654314564881 | 70 effect sizes / 40 studies in computer-based learning environments. Effect sizes were **negatively affected by delayed timing** in this corpus — i.e. the one large CBLE-specific meta leans immediate. |
| **Swart, E. K., Nielen, T. M. J., & Sikkema-de Jong, M. T. (2019)**, *Educational Research Review* 26, 100296, doi:10.1016/j.edurev.2019.100296 | 104 contrasts, 6,124 participants, g+ = 0.35 for feedback on text learning. Feedback **directly after** reading beat feedback **during** reading. |

The through-line: where "delayed" appeared to win, the delay was doing the work of *spacing* (Butler et al. 2007 say so explicitly; Metcalfe et al. 2009 demonstrate it by controlling lag). Where "immediate" appeared to win, the immediacy was doing the work of *attention*.

### 4.3 What actually moves the needle: feedback content

| Feedback type | Effect | Source |
|---|---|---|
| Knowledge of results only ("wrong") | **d = 0.05** | van der Kleij et al. (2015) |
| Knowledge of correct response ("wrong — it's B") | **d = 0.32** | van der Kleij et al. (2015) |
| **Elaborated feedback (explanation)** | **d = 0.49** | van der Kleij et al. (2015); EF is disproportionately better for *higher-order* outcomes |
| Reinforcement/punishment (low information) | d = 0.24, k = 39 | Wisniewski, Zierer & Hattie (2020), *Frontiers in Psychology* 10:3087, doi:10.3389/fpsyg.2019.03087 |
| Corrective (medium information) | d = 0.46, k = 238 | ibid. |
| **High-information (task + process + self-regulation)** | **d = 0.99, k = 42** | ibid. — overall feedback d = 0.48 across 435 studies, k = 994, N > 61,000 |

**The span from d = 0.05 to d = 0.99 is a factor of twenty, and it is entirely a content variable.** Timing's span is g = 0.03. Spend the engineering budget on what the feedback *says*.

### 4.4 Design rules for a ~1-week horizon

| # | Rule | Evidence strength |
|---|---|---|
| **F1** | Do not build a delayed-feedback mode as a learning feature. It is worth g = 0.03. | **Strong** — Kandemir et al. 2026, 160 ES; Ryan et al. 2024 at exactly the 1-week MCQ horizon |
| **F2** | Default to **immediate per-item** feedback, because it is the timing that best guarantees attention, and attention is the actual moderator. | **Moderate-strong** — Kulik & Kulik 1988 reconciliation; van der Kleij 2015 (delay hurt in CBLE); Metcalfe 2017 |
| **F3** | Make every feedback **elaborated**: why the right answer is right, *and* why the chosen distractor is wrong. d = 0.05 → 0.49 for that alone. | **Very strong** — van der Kleij 2015; Wisniewski 2020 |
| **F4** | Add a process/self-regulation layer on missed items ("what step did you skip?", "how would you know next time?") — that is what separates d = 0.46 from d = 0.99. | **Moderate-strong** — Wisniewski et al. 2020 moderator; Siegler's "how do you think I knew that?" |
| **F5** | Don't build answer-until-correct. It's equivalent to just showing the answer and costs time. | **Moderate** — Butler, Karpicke & Roediger 2007 |
| **F6** | If you want the *spacing* benefit that delayed feedback sometimes carries, get it from the review schedule, not from the feedback timer. The two were confounded in every study that found a delay benefit. | **Strong** — Metcalfe, Kornell & Finn 2009 (effect vanishes when lag controlled); Butler et al. 2007 |

---

## 5. Spacing vs. massing at a 9-day horizon — the decision section

**Short answer: massed practice is not correct here. But the optimal gap is ~1–2 days, which is far tighter than the month-scale intervals the popular spacing literature implies. The right frame is not "space vs. cram," it is "what gap," and the ratio rule gives a number.**

### 5.1 Spacing beats massing even when the test is soon

**Latimier, A., Peyre, H., & Ramus, F. (2021). A meta-analytic review of the benefit of spacing out retrieval practice episodes on retention. *Educational Psychology Review*, 33, 959–987.** doi:10.1007/s10648-020-09572-8 — free PDF: http://www.lscp.net/persons/ramus/docs/EPR20.pdf
- Subset 1: **spaced retrieval practice vs. massed retrieval practice, g = 0.74** (11 studies, 39 effect sizes, robust variance estimation).
- **Retention interval was not a significant moderator: β = 0.02, SE .06, 95% CI [−0.12, 0.16], p = .78.** And critically, **half the comparisons (k = 23 of 38) used an *immediate* final test.** The spacing advantage did not require a long delay to appear.
- Subset 2: **expanding vs. uniform spacing schedules: g = 0.034, n.s.** (16 studies, 54 effect sizes). The widely repeated "expanding intervals" prescription is not supported. Only with >4 exposures per item did expanding start to edge out uniform (β = 0.22, p = .09).

**Kornell, N. (2009). Optimising learning using flashcards: spacing is more effective than cramming. *Applied Cognitive Psychology*, 23(9), 1297–1317.** doi:10.1002/acp.1537. Three experiments, GRE-type word pairs, web-based. One large stack (spaced) beat four small stacks (massed). **"Spacing was also more effective than cramming — that is, massing study on the last day before the test."** Across experiments **spacing beat massing for 90% of participants — while 72% believed massing had worked better.**

That is the direct answer to "should he just cram the last two days": no, and his own sense of it will say otherwise.

### 5.2 The ratio rule, and the number it produces for 9 days

**Cepeda, N. J., Vul, E., Rohrer, D., Wixted, J. T., & Pashler, H. (2008). Spacing effects in learning: a temporal ridgeline of optimal retention. *Psychological Science*, 19(11), 1095–1102.** doi:10.1111/j.1467-9280.2008.02209.x — https://pubmed.ncbi.nlm.nih.gov/19076480/
- >1,350 participants, interstudy gaps up to 3.5 months, test delays up to 1 year.
- "At any given test delay, an increase in the interstudy gap **at first increased, and then gradually reduced**, final test performance. The optimal gap increased as test delay increased. However, when measured as a proportion of test delay, **the optimal gap declined from about 20 to 40% of a 1-week test delay** to about 5 to 10% of a 1-year test delay."
- Note the asymmetry of the curve: the rise before the optimum is **sharp**, the decline after it is **gradual**. **Erring long is much cheaper than erring short.**

**Applying it.** With a total window of 9 days and a review placed at gap *g*, the post-review retention interval is (9 − g). Setting g = 0.20–0.40 × (9 − g):

| Ratio | Optimal gap |
|---|---|
| 20% | **1.5 days** |
| 30% | **2.1 days** |
| 40% | **2.6 days** |

**≈ 2 days.** With three or four exposures rather than two, the uniform-schedule result (Latimier: expanding buys nothing) means simply repeating at ~2-day intervals: **day 0 → day 2 → day 4/5 → day 7/8.**

**The direct empirical confirmation at almost exactly this horizon.** Küpper-Tetzel, C. E., Erdfelder, E., & Dickhäuser, O. (2014). The lag effect in secondary school classrooms: enhancing students' memory for vocabulary. *Instructional Science*, 42(3), 373–388. doi:10.1007/s11251-013-9285-2. Lags of **0, 1, and 10 days**; retention intervals of **7 and 35 days**. **At the 7-day retention interval, the 1-day lag was optimal** — beating both 0 days (massed) and 10 days. At 35 days, 1-day and 10-day lags both worked. Conclusion: "the optimal lag depends on the retention interval."

So the two independent methods — Cepeda's ratio rule (≈2 days) and Küpper-Tetzel's direct manipulation at a 7-day RI (1 day) — converge on **a gap of roughly 1–2 days.** Not massing. Not weekly.

**Magnitude of getting it right.** Cepeda, N. J., Coburn, N., Rohrer, D., Wixted, J. T., Mozer, M. C., & Pashler, H. (2009). Optimizing distributed practice. *Experimental Psychology*, 56(4), 236–246. doi:10.1027/1618-3169.56.4.236: **"An optimal gap improved final recall by up to 150%."** Foundational meta: Cepeda, Pashler, Vul, Wixted & Rohrer (2006), *Psychological Bulletin* 132(3), 354–380, doi:10.1037/0033-2909.132.3.354 — 839 assessments, 317 experiments, 184 articles; the ISI × retention-interval interaction is the central result.

### 5.3 The one thing that *does* flip at a short horizon: overlearning

Overlearning — continued practice within a session after the item is already correct — is the standard example of a bad study buy. **At a ≤1-week horizon it is not.**

**Rohrer, D., Taylor, K., Pashler, H., Wixted, J. T., & Cepeda, N. J. (2005). The effect of overlearning on long-term retention. *Applied Cognitive Psychology*, 19(3), 361–374.** doi:10.1002/acp.1083. 218 college students, geography facts / word definitions, final cued recall at **1 to 9 weeks**. "**The overlearners recalled far more than the low learners at the 1-week test, but this difference decreased dramatically thereafter.**" Their conclusion — overlearning is inefficient — is explicitly a claim about "meaningfully long periods."

Nine days sits inside the window where overlearning still pays. This is a genuine, citable case where the standard desirable-difficulties advice inverts because of the deadline. (See also Rohrer & Taylor, 2006, *Applied Cognitive Psychology* 20, 1209–1224, doi:10.1002/acp.1266, for the math-specific version.)

### 5.4 Design rules

| # | Rule | Evidence strength |
|---|---|---|
| **S1** | Do not mass. Spaced retrieval beats massed retrieval at g = 0.74, and retention interval does not moderate it. | **Very strong** — Latimier et al. 2021 |
| **S2** | Set the default inter-repetition gap to **~2 days** (range 1–3). Not hours, not a week. | **Strong** — Cepeda et al. 2008 ratio rule (20–40% of a 1-week delay) + Küpper-Tetzel et al. 2014 direct hit at 7-day RI |
| **S3** | Use **uniform** intervals, not expanding. Expanding schedules are worth g = 0.034. | **Strong** — Latimier et al. 2021 subset 2 |
| **S4** | If forced to err, **err long**. The pre-optimum rise is steep; the post-optimum decline is gradual. | **Moderate-strong** — Cepeda et al. 2008 curve shape |
| **S5** | Schedule **3–4 exposures per high-value item** across the 9 days; last exposure 24–48 h out, not on the final day. Cramming on the last day was specifically tested and specifically lost. | **Strong** — Kornell 2009; Latimier 2021 (4 exposures modal) |
| **S6** | Allow **overlearning within a session** for the high-stakes items. It is the one standard "inefficiency" that actually pays at a ≤1-week horizon. | **Moderate** — Rohrer et al. 2005 |
| **S7** | Suppress the learner's schedule intuition. 72% of people believe massing worked better *after* it demonstrably didn't. Make the scheduler non-negotiable. | **Strong** — Kornell 2009 |

---

## 6. Interleaving vs. blocking

### 6.1 The meta-analytic picture — and its hard moderator

**Brunmair, M., & Richter, T. (2019). Similarity matters: a meta-analysis of interleaved learning and its moderators. *Psychological Bulletin*, 145(11), 1029–1052.** doi:10.1037/bul0000209 — https://pubmed.ncbi.nlm.nih.gov/31414846/
59 studies, 238 effect sizes, 158 samples, multilevel meta-analysis.

| Material type | Interleaving effect |
|---|---|
| **Overall** | **g = 0.42** |
| Paintings / visual materials | **g = 0.67** (best) |
| Mathematical tasks | **g = 0.34** |
| Expository texts | ambiguous, **n.s.** |
| Tastes | ambiguous, n.s. |
| **Words (paired-associate vocabulary)** | **g = −0.39 — blocking wins** |

Meta-regression moderators: interleaving is stronger when learning material is **more similar between categories**, **less similar within categories**, and **more complex**. The authors' own caution: interleaving "should be used with caution in certain conditions, especially for expository texts and words."

**The mechanism this implies, and it is the design rule:** interleaving is a **discrimination trainer**. It helps exactly when the learner's bottleneck is *"which principle applies here?"* — because blocked practice removes that decision from the problem entirely. It does not help, and can hurt, when the bottleneck is *"what is the association?"* — arbitrary paired associates, vocabulary, isolated facts.

### 6.2 Does it apply to mixed-topic science practice? — yes, directly tested

**Sana, F., & Yan, V. X. (2022). Interleaving retrieval practice promotes science learning. *Psychological Science*, 33(5), 782–788.** doi:10.1177/09567976211057507 — https://pubmed.ncbi.nlm.nih.gov/35471102/
- 155 students, grades 9–12, weekly quizzes in their **actual science courses** over 4 weeks; quizzes covered half the week's concepts, either **blocked by concept** or **interleaved across concepts**. Final test one month after the last quiz.
- Quizzed-blocked (M = 54%) beat unquizzed (M = 47%), **d = 0.30** — the plain testing effect.
- **Quizzed-interleaved (M = 63%) beat quizzed-blocked, d = 0.35** — interleaving added roughly as much again on top of testing.

**Samani, J., & Pan, S. C. (2021). Interleaved practice enhances memory and problem-solving ability in undergraduate physics. *npj Science of Learning*, 6, 32.** doi:10.1038/s41539-021-00110-x — https://pubmed.ncbi.nlm.nih.gov/34697320/
- 8 weeks, thrice-weekly homework in an introductory university physics course; interleaved vs. conventionally blocked problem sets. Two surprise tests with **novel, harder** problems.
- **Median improvements of 50% (test 1) and 125% (test 2).**
- **"Students tended to rate the technique as more difficult and incorrectly believed that they learned less from it."**

Between them these cover exactly the target case: multi-topic quantitative-and-conceptual science, where the learner must first identify which model applies. The MCAT sciences are that case almost by construction — passage-based items deliberately hide which chapter they came from.

### 6.3 Design rules

| # | Rule | Evidence strength |
|---|---|---|
| **I1** | Interleave across topics for anything where the learner must *select* a principle or method (physics/gen-chem problem types, enzyme-kinetics vs. thermodynamics reasoning, experimental-design questions). | **Strong** — Brunmair & Richter g = 0.42; Sana & Yan d = 0.35 in real science classrooms; Samani & Pan in physics |
| **I2** | **Block** pure associative content — amino-acid structures, hormone lists, vocabulary. Interleaving words is g = −0.39; it actively costs. | **Strong** — Brunmair & Richter |
| **I3** | Design item sets so that categories are **confusable between** and **varied within**. Two items testing the same discrimination should look different; two items testing different discriminations should look similar. This is the meta-regression's moderator, restated as an authoring instruction — and it is a deliberate *deviation* from AAMC, whose item independence rules discourage constructed near-neighbors. | **Moderate-strong** — Brunmair & Richter meta-regression |
| **I4** | Expect the learner to rate interleaved sessions as harder and less productive. Do not surface a "which felt better" control. | **Strong** — Samani & Pan; the same illusion as spacing (Kornell 2009) and errorful generation (Huelser & Metcalfe 2012) |
| **I5** | Do not interleave *expository reading*. The benefit is not established there and may be negative. Interleave the **practice**, not the **content delivery**. | **Moderate** — Brunmair & Richter (expository texts n.s.) |

---

## 7. Desirable difficulties — which to build, which are friction

The frame: Bjork, R. A., & Bjork, E. L. (2020). Desirable difficulties in theory and practice. *Journal of Applied Research in Memory and Cognition*, 9(4), 475–479. doi:10.1016/j.jarmac.2020.09.003. The governing distinction is **learning vs. performance** — Soderstrom, N. C., & Bjork, R. A. (2015), *Perspectives on Psychological Science* 10(2), 176–199, doi:10.1177/1745691615569000: "improvements in performance can fail to yield significant learning, and... certain manipulations can have opposite effects on learning and performance." A difficulty is *desirable* only when it (a) makes the retrieval harder but still **succeed­able**, and (b) is a difficulty the learner has the prior knowledge to meet. Difficulty that the learner cannot meet is just noise.

### 7.1 Build these

| Difficulty | Effect | Why it belongs in the app |
|---|---|---|
| **Retrieval before exposure** (commit an answer first) | g ≈ 0.50 (testing effect); errorful-generation benefit ~20 pts | §2, §3 |
| **Spacing at ~2-day gaps** | g = 0.74 spaced vs. massed retrieval | §5 |
| **Interleaving across topics** (where selection of principle is the bottleneck) | g = 0.42; d = 0.35 in real science classrooms | §6 |
| **Generation of the answer / of an explanation** | Generation effect (Slamecka & Graf 1978; Bertsch et al. 2007) — Metcalfe (2017) calls self-generation "one of the strongest beneficial effects on learning in the cognitive literature" | Add a one-line "state the rule" step before revealing feedback |
| **Competitive multiple-choice alternatives** | See 7.2 — the single most important AAMC-imitation rule | Below |
| **Varying the surface form across repetitions** (isomorphs, not verbatim repeats) | Variation of practice conditions is a canonical desirable difficulty; also required so re-tests measure the rule and not the answer string | §1.7 |

### 7.2 The most important single finding for a question generator: distractor quality *is* the learning variable

**Little, J. L., Bjork, E. L., Bjork, R. A., & Angello, G. (2012). Multiple-choice tests exonerated, at least of some charges: fostering test-induced learning and avoiding test-induced forgetting. *Psychological Science*, 23(11), 1337–1344.** doi:10.1177/0956797612443370 — https://pubmed.ncbi.nlm.nih.gov/23070307/

The criticism of MCQ is that exposing the answer engages recognition rather than productive retrieval — which is exactly what Rowland's meta-analysis measures (recognition practice g = 0.36 vs. cued recall 0.72). Little et al. show the criticism is conditional on distractor quality:

> when alternatives are **plausible enough that the test-taker retrieves both why the correct alternative is correct and why the incorrect ones are incorrect**, MCQ triggers productive retrieval — and does something cued recall does *not*: it **also facilitates later recall of the information pertaining to the incorrect alternatives.**

See also Bjork, E. L., Little, J. L., & Storm, B. C. (2014). Multiple-choice testing as a desirable difficulty in the classroom. *JARMAC*, 3(3), 165–170, doi:10.1016/j.jarmac.2014.03.002.

**This resolves the imitate/deviate question at its core.**
- **Imitate AAMC** on distractor construction. AAMC writes competitive distractors because plausibility is what produces item discrimination. The *same* property is what turns a 4-option question into four retrieval events instead of one. The measurement objective and the learning objective coincide here — which is why weak-distractor question banks are both psychometrically worthless and pedagogically worthless.
- **Deviate from AAMC** by (i) attaching a named misconception to each distractor, (ii) giving per-distractor feedback, (iii) repeating and re-mixing items, (iv) collecting confidence. None of these are compatible with measurement; all of them are required for learning.

### 7.3 Skip these — friction, not difficulty

| Non-difficulty | Verdict | Evidence |
|---|---|---|
| **Perceptual disfluency** (hard-to-read fonts, degraded text) | **Do not build.** Repeated large-scale nulls. | Meyer, A. K., Frederick, S., Burnham, T. C., Guevara Pinto, J. D., & Boyer, T. W. (2015). Disfluent fonts don't help people solve math problems. *JEP: General*, 144(2), e16–e30, doi:10.1037/xge0000049 — 17 experiments, no effect. Rummer, Schweppe & Schwede (2015), *Metacognition and Learning* 11, 57–70, doi:10.1007/s11409-015-9151-5. Meta-analysis: Xie, Zhou & Liu (2018), *Educational Psychology Review* 30, 745–771, doi:10.1007/s10648-018-9442-x (null) — though see Weissgerber, Brunmair & Rummer (2021), doi:10.1007/s10648-020-09579-1, for a methodological critique of that meta. The primary experiments are the reason to skip it, not the meta. |
| **Reduced / intermittent feedback** | **Do not build.** This is a *motor-learning* desirable difficulty (Schmidt & Bjork 1992) that does **not** transfer to declarative learning, where withholding the correct answer is catastrophic. | Pashler et al. (2005): +494% from supplying the correct answer. Rowland (2014): no-feedback + low initial accuracy = g = 0.03 |
| **Answer-until-correct** | **Do not build.** Equivalent to just showing the answer; costs time. | Butler, Karpicke & Roediger (2007) |
| **Delayed feedback as a learning feature** | **Do not build.** g = 0.03. | Kandemir et al. (2026) |
| **Expanding-interval schedulers** | **Do not build.** Uniform intervals are equivalent, and simpler. | Latimier et al. (2021): g = 0.034 |
| **Blind guessing on unknown content** | **Do not build; route to instruction instead.** No benefit when the guess is unrelated to the target. | Huelser & Metcalfe (2012); Kang et al. (2011) |
| **Artificial time pressure everywhere** | **Build as a mode, not a default.** Timing is part of the AAMC construct, so it must be trained — but under time pressure the learner cannot execute the generate → reflect → encode-feedback loop that produces learning. Separate "learn" sessions from "simulate" sessions. | Inference from the attention requirement for feedback processing (Metcalfe 2017; Kulik & Kulik 1988); direct evidence weak — **flagged as reasoned, not established** |
| **Overlearning** | Normally friction; **at ≤1 week it is not.** | Rohrer et al. (2005) — see §5.3 |

### 7.4 The boundary that governs all of them

A desirable difficulty is desirable only if the learner can meet it. Every one of the effects above has a prior-knowledge floor: errorful generation needs a *related* error (Huelser & Metcalfe 2012); interleaving needs categories the learner can begin to discriminate (Brunmair & Richter's "similarity" moderators); retrieval practice without feedback needs >50% initial success (Rowland 2014). **Below the floor, the correct move is instruction, not a harder question.** An app that responds to failure by generating more questions is the classic failure mode.

---

## 8. Confidence-tagged practice and calibration training

### 8.1 Collecting confidence is cheap, diagnostic, and nearly side-effect-free

**It routes items to the right treatment.** The confidence × correctness matrix (§1.6) is the whole argument: four cells, four different optimal responses, and you cannot construct the matrix without the tap.

**It is close to behaviorally neutral.** Double, K. S., Birney, D. P., & Walker, S. A. (2018). A meta-analysis and systematic review of reactivity to judgements of learning. *Memory*, 26(6), 741–750. doi:10.1080/09658211.2017.1404111 — eliciting judgments of learning had **no significant overall effect on memory (g = 0.054, 95% CI [−0.027, 0.135])**, with moderate *positive* reactivity for related word pairs (g = 0.323) and word lists (g = 0.384) and none for unrelated or mixed materials. So the rating does not distort the measurement it enables, and where it does anything it helps slightly.

**The one design subtlety worth building.** Nelson, T. O., & Dunlosky, J. (1991). When people's judgments of learning (JOLs) are extremely accurate at predicting subsequent recall: the "delayed-JOL effect." *Psychological Science*, 2(4), 267–271, doi:10.1111/j.1467-9280.1991.tb00147.x — JOLs made after a delay are dramatically more diagnostic than immediate ones, because a delayed judgment is based on *retrieval from secondary memory* rather than on the lingering trace in primary memory. Bui, D. C., Pyc, M. A., & Bailey, H. (2018), *Memory* 26(6), 771–783, doi:10.1080/09658211.2017.1406523, show the same accuracy gain is obtained **without a long delay** if a sufficiently demanding intervening task displaces the item from primary memory.

Practical translation: **a confidence tap taken immediately after reading the stem measures fluency; a confidence tap taken after the learner has committed an answer and done something else briefly measures knowledge.** Ask *after* the answer is locked, not before, and if you can insert even a brief intervening step, the rating gets sharper.

### 8.2 Calibration training itself

- **Bjork, R. A., Dunlosky, J., & Kornell, N. (2013). Self-regulated learning: beliefs, techniques, and illusions. *Annual Review of Psychology*, 64, 417–444.** doi:10.1146/annurev-psych-113011-143823. The core problem: learners' assessments of their own learning are driven by *current performance and subjective fluency*, both of which are systematically misleading. Every illusion documented in this document — spacing (72% believe massing worked better; Kornell 2009), errorful generation (Huelser & Metcalfe 2012), interleaving (Samani & Pan 2021), restudy (Roediger & Karpicke 2006) — is an instance of this.
- **Miller, T. M., & Geraci, L. (2011). Training metacognition in the classroom: the influence of incentives and feedback on exam predictions. *Metacognition and Learning*, 6(3), 303–314.** doi:10.1007/s11409-011-9083-7. Feedback on prediction accuracy improves calibration, with the improvement concentrated in **low performers**, who are the most overconfident to start with.
- **Certainty-based marking (CBM)** — Gardner-Medwin, A. R. Confidence assessment in the teaching of basic science, *Research in Learning Technology* 3(1), doi:10.3402/rlt.v3i1.9597; and "Certainty-based marking," in *Innovative Assessment in Higher Education* (2019), doi:10.4324/9780429506857-13. In routine use in UCL medical education: the learner declares a confidence level, and the scoring rule rewards accurate high confidence and **penalizes confident errors more than hedged ones**. This makes miscalibration visible and costly *inside the practice loop*, which is the only place a confident wrong answer is cheap to have.

**Honest evidence rating:** the *diagnostic* value of confidence tagging is well supported (hypercorrection, Butler et al. 2008, the JOL literature). The claim that *training* calibration transfers to better exam performance is **weaker** — it is supported mainly by classroom studies with modest samples (Miller & Geraci 2011; Nietfeld, Cao & Osborne 2006) and by the operational track record of CBM rather than by a strong meta-analysis. Build the tagging because it routes items; treat the calibration gain as a plausible bonus, not a promised deliverable.

### 8.3 Design rules

| # | Rule | Evidence strength |
|---|---|---|
| **C1** | Collect a confidence rating on **every** item, after the answer is committed. It costs one tap and is behaviorally near-neutral (g = 0.054). | **Strong** — Double et al. 2018 |
| **C2** | Use a scale with a real "sure" anchor. The hypercorrection literature works on 6–7 point scales; a binary sure/unsure loses the gradient that makes γ interpretable. | **Moderate** — Butterfield & Metcalfe 2001; Butler et al. 2011 (7-point) |
| **C3** | Route by cell, not by correctness: high-conf wrong → refutation feedback + 3 spaced re-tests; low-conf **right** → feedback anyway (doubles retention); high-conf right → retire; low-conf wrong → triage into "near-miss" vs. "no idea" and send the second to instruction. | **Strong** — §1.6 |
| **C4** | Show the learner their own calibration curve. Miscalibration that stays invisible does not get fixed, and the practice app is the only cheap place to expose it. | **Moderate** — Miller & Geraci 2011; CBM practice |
| **C5** | Never let self-rated confidence choose what to study next. It is the exact signal the illusion literature says is corrupted. Use it as *input to the scheduler*, never as *the scheduler*. | **Strong** — Bjork, Dunlosky & Kornell 2013 |
| **C6** | Treat "sure and wrong" as a first-class, permanently tracked object with its own review queue — not as an ordinary miss. It is both the highest-yield learning target and the most likely relapse. | **Strong** — §1 |

---

## 9. Synthesis: when to imitate AAMC and when to deviate

### 9.1 Imitate

| Imitate | Why the measurement objective and the learning objective coincide |
|---|---|
| **Plausible, homogeneous distractors** — every option a real candidate, none dismissible on form | Psychometrics wants this for discrimination; the NBME *Item-Writing Guide* (2024) explicitly flags never-chosen distractors as defects. Learning wants it because **Little et al. (2012)** show competitive alternatives convert MCQ from recognition into productive retrieval — *and* produce recall gains for the content behind the wrong options, which cued recall does not. This is the single strongest case of alignment. |
| **Passage-embedded reasoning; stems that require applying a principle rather than recalling a term** | The construct is reasoning; interleaving research says selection-of-principle is exactly the skill that transfers (**Brunmair & Richter 2019**: complexity and between-category similarity increase the interleaving benefit). |
| **Answer-choice grammar and length parity; no clang cues, no absolutes, no "all of the above"** | Cue-based shortcuts destroy both discrimination and retrieval. A learner who solves an item by form learns nothing. |
| **Cognitive level (application/analysis, not recall)** | Elaborated feedback is disproportionately more effective for higher-order outcomes (**van der Kleij et al. 2015**), so higher-order items give feedback more to work with. |
| **Topic mixing across a session** | AAMC mixes by construction; interleaving research says this is right (**Sana & Yan 2022**, d = 0.35). One place where the test format is already the better teaching format. |

### 9.2 Deviate

| Deviate | Measurement forbids it | Learning requires it |
|---|---|---|
| **Attach a named misconception to every distractor** | Irrelevant to scoring | Refutation-format feedback is the only format that hypercorrects conceptual misconceptions (**van Loon et al. 2015**) — and it cannot be written without knowing what the distractor encodes |
| **Give elaborated per-distractor feedback immediately** | Would destroy measurement | d = 0.05 → 0.49 (**van der Kleij 2015**); +494% (**Pashler 2005**); no-feedback + hard items = g = 0.03 (**Rowland 2014**) |
| **Repeat items** (as isomorphs, on a ~2-day schedule) | Exposure control forbids reuse | Spacing g = 0.74; hypercorrected errors relapse within a week (**Butler et al. 2011**, .86 → .56) |
| **Build deliberate item families that vary one parameter** | Violates local independence (IRT) | Discrimination training; **Brunmair & Richter's** "similar between categories, dissimilar within" moderator, restated as an authoring rule |
| **Collect confidence** | Adds construct-irrelevant variance | Gates the highest-yield learning event; behaviorally near-neutral (g = 0.054, **Double et al. 2018**) |
| **Abandon p ≈ .5–.7 difficulty targeting** | The whole point of measurement | Difficulty targeting optimizes *information about theta*, not *learning*. The right practice difficulty is "hard enough that retrieval is effortful, easy enough that it can succeed" — and with feedback attached, the difficulty penalty largely disappears (**Rowland**: with feedback g = 0.73 regardless of success rate). Difficulty should be set by the *learner's* current state, not by a population target. |
| **Force a commit before any reveal; forbid "show answer"** | Not applicable | Errorful generation (**Kornell et al. 2009**), and the learner will opt out if allowed (**Huelser & Metcalfe 2012**) |
| **Require an action on the feedback** (retype the answer, name the flawed step) | Not applicable | Unattended feedback is the null condition (**Metcalfe 2017**; **Kulik & Kulik 1988**) |
| **Add a recall mode (no options shown) on high-value items** | AAMC is MCQ-only | Recall practice g = 0.72–0.81 vs. recognition 0.36 (**Rowland 2014**) |
| **Ask "how would you have known?" after a miss** | Not applicable | Explain-the-correct-reasoning beat both feedback-only and explain-your-own-reasoning (**Siegler 1995/2002**); high-information feedback d = 0.99 vs. 0.46 (**Wisniewski et al. 2020**) |

### 9.3 A 9-day schedule that follows from the above

Assumes day 0 = today, exam on day 9.

- **Gap between repetitions of the same item: ~2 days, uniform.** (Cepeda ratio rule; Küpper-Tetzel's 1-day optimum at a 7-day RI; Latimier: expanding buys nothing.)
- **Exposures per high-value item: 3–4.** Nothing scheduled *on* the final day for the first time; last touch of each item at day 7–8.
- **The 16 "sure and wrong" items get their own queue**, each with hand-written refutation feedback, each re-tested on days ~2, ~4–5, and ~7–8 as **isomorphs, not verbatim repeats**.
- **Low-confidence-correct items get one feedback pass** (doubles retention; **Butler, Karpicke & Roediger 2008**) and one late re-test. Most banks skip these entirely; that is free yield.
- **High-confidence-correct items get retired.** Feedback on them is worth roughly nothing (**Pashler et al. 2005**).
- **Sessions are interleaved across topics** — except pure associative content (amino acids, hormone lists), which is blocked (g = −0.39 for interleaving words).
- **Separate "learn" sessions from "simulate" sessions.** Timed full-length simulation trains pacing; it does not run the generate → feedback → encode loop. Do not try to do both in one sitting.
- **Overlearning within a session is permitted here** — it is the one standard inefficiency that still pays at ≤1 week (**Rohrer et al. 2005**).
- **The learner will report that the massed, blocked, answer-visible version felt better.** Kornell (2009): 90% learned more from spacing, 72% believed the opposite. Do not expose a preference control over any of these.

### 9.4 Evidence-strength legend used throughout

- **Very strong** — multiple independent meta-analyses, or a meta-analysis plus large direct replications, converging.
- **Strong** — one solid meta-analysis, or several independent well-powered experiments agreeing.
- **Moderate-strong** — one strong primary study plus consistent supporting work; or a meta-analytic moderator rather than a main effect.
- **Moderate** — a single good study, or a well-replicated effect whose *application here* requires an inferential step.
- **Reasoned, not established** — follows from mechanism but is not directly tested. Only one rule in this document carries this tag (the time-pressure separation in §7.3).

### 9.5 The three findings most likely to change the build

1. **§1.6 — the confidence × correctness matrix has four cells and four different correct responses.** Most practice apps implement one (wrong → show explanation). The low-confidence-*correct* cell alone doubles retention with feedback and is almost universally ignored.
2. **§7.2 — distractor plausibility is not a psychometric nicety, it is the learning mechanism.** Little et al. (2012) is the finding that makes an MCQ generator worth building at all. A generator that produces weak distractors is producing recognition items worth g = 0.36; one that produces competitive distractors with per-distractor refutations is producing four retrieval events plus a hypercorrection opportunity.
3. **§5.2 — the optimal gap for a 9-day horizon is ~2 days, and §1.4 — hypercorrected errors relapse inside a week.** These two together mean the 16 "sure and wrong" items are not "handled" once explained. They are the items most likely to be wrong again on day 9 if touched only once.

---

## 10. Bibliography

**Hypercorrection and learning from errors**
- Butterfield, B., & Metcalfe, J. (2001). *JEP:LMC* 27(6), 1491–1494. doi:10.1037/0278-7393.27.6.1491 — https://pubmed.ncbi.nlm.nih.gov/11713883/
- Butterfield, B., & Metcalfe, J. (2006). *Metacognition and Learning* 1, 69–84. doi:10.1007/s11409-006-6894-z
- Butterfield, B., & Mangels, J. A. (2003). *Cognitive Brain Research* 17(3), 793–817.
- Butler, A. C., Fazio, L. K., & Marsh, E. J. (2011). *Psychonomic Bulletin & Review* 18(6), 1238–1244. doi:10.3758/s13423-011-0173-y — PDF: https://static1.squarespace.com/static/5c8baca1e5f7d136349ea789/t/5e73abaec5e3c210ffa4c8f1/1584638894859/Butler2011_Article_TheHypercorrectionEffectPersis.pdf
- Butler, A. C., Karpicke, J. D., & Roediger, H. L. (2008). *JEP:LMC* 34(4), 918–928. doi:10.1037/0278-7393.34.4.918
- Eich, T. S., Stern, Y., & Metcalfe, J. (2013). *Aging, Neuropsychology, and Cognition* 20(5), 511–521. doi:10.1080/13825585.2012.754399 — https://pmc.ncbi.nlm.nih.gov/articles/PMC3604148/
- Metcalfe, J. (2017). Learning from errors. *Annual Review of Psychology* 68, 465–489. doi:10.1146/annurev-psych-010416-044022 — free PDF: https://www.columbia.edu/cu/psychology/metcalfe/PDFs/Learning%20from%20errorsAnnual%20ReviewMetcalfe2016.pdf
- Metcalfe, J., Casal-Roscum, L., Radin, A., & Friedman, D. (2015). On teaching old dogs new tricks. *Psychological Science* 26(12), 1833–1842. doi:10.1177/0956797615597912 — https://ncbi.nlm.nih.gov/pmc/articles/PMC4679660
- Metcalfe, J., Butterfield, B., Habeck, C., & Stern, Y. (2012). *Journal of Cognitive Neuroscience* 24(7), 1571–1583. doi:10.1162/jocn_a_00228
- Sitzman, D. M., Rhodes, M. G., & Tauber, S. K. (2014). *Memory & Cognition* 42(1), 84–96. doi:10.3758/s13421-013-0344-3 — https://pubmed.ncbi.nlm.nih.gov/23797971/
- van Loon, M., Dunlosky, J., van Gog, T., van Merriënboer, J., & de Bruin, A. (2015). *Contemporary Educational Psychology* 42, 39–48. doi:10.1016/j.cedpsych.2015.04.003

**Testing effect / retrieval practice**
- Rowland, C. A. (2014). *Psychological Bulletin* 140(6), 1432–1463. doi:10.1037/a0037559 — PDF: https://courseware.epfl.ch/assets/courseware/v1/fdde2f0aa590bf3b1324077a6bf1540c/asset-v1:EPFL+DEMO+2020+type@asset+block/Rowland2014-meta-analysis.pdf
- Adesope, O. O., Trevisan, D. A., & Sundararajan, N. (2017). *Review of Educational Research* 87(3), 659–701. doi:10.3102/0034654316689306
- Yang, C., Luo, L., Vadillo, M. A., Yu, R., & Shanks, D. R. (2021). *Psychological Bulletin* 147(4), 399–435. doi:10.1037/bul0000309
- Roediger, H. L., & Karpicke, J. D. (2006). *Psychological Science* 17(3), 249–255. doi:10.1111/j.1467-9280.2006.01693.x
- Soderstrom, N. C., & Bjork, R. A. (2015). *Perspectives on Psychological Science* 10(2), 176–199. doi:10.1177/1745691615569000
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). *Psychological Science in the Public Interest* 14(1), 4–58. doi:10.1177/1529100612453266

**Errorful generation / pretesting / productive failure**
- Kornell, N., Hays, M. J., & Bjork, R. A. (2009). *JEP:LMC* 35(4), 989–998. doi:10.1037/a0015729
- Huelser, B. J., & Metcalfe, J. (2012). *Memory & Cognition* 40(4), 514–527. doi:10.3758/s13421-011-0167-z
- Grimaldi, P. J., & Karpicke, J. D. (2012). *Journal of Memory and Language* 66(1), 75–84.
- Pan, S. C., & Carpenter, S. K. (2023). *Educational Psychology Review* 35, 97. doi:10.1007/s10648-023-09814-5
- Prequestions multilevel meta-analysis (2025). *Educational Psychology Review*. doi:10.1007/s10648-025-10075-7
- Sinha, T., & Kapur, M. (2021). *Review of Educational Research* 91(5), 761–798. doi:10.3102/00346543211019105

**Feedback**
- Pashler, H., Cepeda, N. J., Wixted, J. T., & Rohrer, D. (2005). *JEP:LMC* 31(1), 3–8. doi:10.1037/0278-7393.31.1.3
- Kandemir, E. N., Esposito, E., Gurgand, L., & Ramus, F. (2026). *Educational Psychology Review* 38, 13. doi:10.1007/s10648-026-10117-8
- Kulik, J. A., & Kulik, C.-L. C. (1988). *Review of Educational Research* 58(1), 79–97. doi:10.3102/00346543058001079
- Butler, A. C., Karpicke, J. D., & Roediger, H. L. (2007). *JEP: Applied* 13(4), 273–281. doi:10.1037/1076-898X.13.4.273
- Metcalfe, J., Kornell, N., & Finn, B. (2009). *Memory & Cognition* 37(8), 1077–1087. doi:10.3758/MC.37.8.1077
- Ryan, A. T., et al. (2024). *Medical Education* 58(7), 838–847. doi:10.1111/medu.15287
- van der Kleij, F. M., Feskens, R. C. W., & Eggen, T. J. H. M. (2015). *Review of Educational Research* 85(4), 475–511. doi:10.3102/0034654314564881
- Wisniewski, B., Zierer, K., & Hattie, J. (2020). *Frontiers in Psychology* 10:3087. doi:10.3389/fpsyg.2019.03087 — https://pmc.ncbi.nlm.nih.gov/articles/PMC6987456/
- Swart, E. K., Nielen, T. M. J., & Sikkema-de Jong, M. T. (2019). *Educational Research Review* 26, 100296. doi:10.1016/j.edurev.2019.100296

**Spacing**
- Latimier, A., Peyre, H., & Ramus, F. (2021). *Educational Psychology Review* 33, 959–987. doi:10.1007/s10648-020-09572-8 — PDF: http://www.lscp.net/persons/ramus/docs/EPR20.pdf
- Cepeda, N. J., Vul, E., Rohrer, D., Wixted, J. T., & Pashler, H. (2008). *Psychological Science* 19(11), 1095–1102. doi:10.1111/j.1467-9280.2008.02209.x
- Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). *Psychological Bulletin* 132(3), 354–380. doi:10.1037/0033-2909.132.3.354
- Cepeda, N. J., Coburn, N., Rohrer, D., Wixted, J. T., Mozer, M. C., & Pashler, H. (2009). *Experimental Psychology* 56(4), 236–246. doi:10.1027/1618-3169.56.4.236
- Küpper-Tetzel, C. E., Erdfelder, E., & Dickhäuser, O. (2014). *Instructional Science* 42(3), 373–388. doi:10.1007/s11251-013-9285-2
- Kornell, N. (2009). *Applied Cognitive Psychology* 23(9), 1297–1317. doi:10.1002/acp.1537
- Rohrer, D., Taylor, K., Pashler, H., Wixted, J. T., & Cepeda, N. J. (2005). *Applied Cognitive Psychology* 19(3), 361–374. doi:10.1002/acp.1083
- Rohrer, D., & Taylor, K. (2006). *Applied Cognitive Psychology* 20(9), 1209–1224. doi:10.1002/acp.1266

**Interleaving**
- Brunmair, M., & Richter, T. (2019). *Psychological Bulletin* 145(11), 1029–1052. doi:10.1037/bul0000209
- Sana, F., & Yan, V. X. (2022). *Psychological Science* 33(5), 782–788. doi:10.1177/09567976211057507
- Samani, J., & Pan, S. C. (2021). *npj Science of Learning* 6, 32. doi:10.1038/s41539-021-00110-x
- Rohrer, D., Dedrick, R. F., & Stershic, S. (2015). *Journal of Educational Psychology* 107(3), 900–908. doi:10.1037/edu0000001
- Rohrer, D., Dedrick, R. F., Hartwig, M. K., & Cheung, C.-N. (2020). *Journal of Educational Psychology* 112(1), 40–52. doi:10.1037/edu0000367

**Desirable difficulties, MCQ design, metacognition**
- Bjork, R. A., & Bjork, E. L. (2020). *JARMAC* 9(4), 475–479. doi:10.1016/j.jarmac.2020.09.003
- Little, J. L., Bjork, E. L., Bjork, R. A., & Angello, G. (2012). *Psychological Science* 23(11), 1337–1344. doi:10.1177/0956797612443370
- Bjork, E. L., Little, J. L., & Storm, B. C. (2014). *JARMAC* 3(3), 165–170. doi:10.1016/j.jarmac.2014.03.002
- Bjork, R. A., Dunlosky, J., & Kornell, N. (2013). *Annual Review of Psychology* 64, 417–444. doi:10.1146/annurev-psych-113011-143823
- Double, K. S., Birney, D. P., & Walker, S. A. (2018). *Memory* 26(6), 741–750. doi:10.1080/09658211.2017.1404111
- Nelson, T. O., & Dunlosky, J. (1991). *Psychological Science* 2(4), 267–271. doi:10.1111/j.1467-9280.1991.tb00147.x
- Bui, D. C., Pyc, M. A., & Bailey, H. (2018). *Memory* 26(6), 771–783. doi:10.1080/09658211.2017.1406523
- Miller, T. M., & Geraci, L. (2011). *Metacognition and Learning* 6(3), 303–314. doi:10.1007/s11409-011-9083-7
- Gardner-Medwin, A. R. (1995/2011). *Research in Learning Technology* 3(1). doi:10.3402/rlt.v3i1.9597
- Meyer, A. K., et al. (2015). *JEP: General* 144(2), e16–e30. doi:10.1037/xge0000049
- Xie, H., Zhou, Z., & Liu, Q. (2018). *Educational Psychology Review* 30, 745–771. doi:10.1007/s10648-018-9442-x
- Weissgerber, S. C., Brunmair, M., & Rummer, R. (2021). *Educational Psychology Review* 33, 1221–1247. doi:10.1007/s10648-020-09579-1
- NBME (2024). *Item-Writing Guide: Constructing Written Test Questions for the Health Sciences.* https://www.nbme.org/item-writing-guide

