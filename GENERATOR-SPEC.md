# Drill Room Item Generator — Executable Spec
Consolidated from research/01–08. Ordered by measured effect size, not by convention.

---

## TIER 1 — the effects that actually move item quality

### R1. Every distractor must be plausible. *(largest effect in the literature)*
Rush, Rankin & White 2016, n=1,925: an implausible distractor made items **14.9 points
easier**, halved discrimination (**DI 0.20 → 0.09**, non-overlapping CIs), and dropped
P(difficult AND discriminating) from **27.1% → 1.8%**.

**Construction rule — the key-features method.** Gierl/Lai: enumerate the features that
produce the correct answer, then **remove one or more** to build each distractor. A
distractor sharing 3 of 5 key features is plausible by construction. Documented
functioning rate **107/110 = 97.3%** (n=455) — the highest of any method in the
literature, and the only one verifiable *before* administration.

**For passage items:** every distractor must be **recycled stimulus material,
relocated** — right content, wrong referent / wrong paragraph / wrong scope / wrong
argumentative function. A distractor with no anchor in the stimulus was never plausible.
Enforced by `tools/plausibility.py`.

### R2. Optimize against reverse-discrimination, not unpopularity.
DiBattista & Kurzawa 2011, n=973: a distractor with **non-negative** discrimination
η² = **0.36**; a distractor chosen by **<5%** η² = **0.01**.
> An unpopular distractor is nearly free. One that pulls strong students destroys the item.

### R3. Generate at application level, never recall.
Bloom I→IV improved difficulty *and* discrimination monotonically (all pairwise p<.028).
Recall items are **2.6× as likely to be flawed** (48.9% vs 18.6%) and yield 12 points
less distractor efficiency. NBME's USMLE data: adding inference steps cost the top
quintile **1 point** and the bottom quintile **24**.
> Buy difficulty with inference steps. Never with obscure facts.

### R4. Skill quotas — a bank of recall items is mis-weighted by construction.
AAMC, identical across all three science sections:
**Skill 1 Knowledge 35% · Skill 2 Reasoning 45% · Skill 3 Research Design 10% ·
Skill 4 Data/Stats 10%.** Skill 2 is the plurality. Skills 3+4 are content-independent —
build them first, they transfer without more biology.

### R5. Discipline quotas — AAMC published, per section.
| | C/P | B/B | P/S |
|---|---|---|---|
| gen chem | 30% | 5% | — |
| physics | 25% | — | — |
| biochem | **25%** | **25%** | — |
| orgo | 15% | 5% | — |
| biology | 5% | **65%** | 5% |
| psychology | — | — | **65%** |
| sociology | — | — | **30%** |

---

## TIER 2 — surface cues (cheap to check, real but smaller)

Flaw-freeness explains **<3% of difficulty variance and <1% of discrimination variance**
(Pais 2016); content area matters 2–4× more. **A floor, not a difficulty control.**

| Rule | Source |
|---|---|
| Key must not be the longest option; max/min length ratio ≤ 1.3 | TW-4 |
| Key must not share the most stem words — **including morphemic** overlap (*bone pain → osteo-*) | TW-5 |
| Key must not be the modal value on every attribute axis; build **2×2 factorials** | TW-6 |
| Absolutes (*always/never/all/only/must*) must not sit only in distractors | TW-3 |
| Vague frequency terms (*often/usually/tends to*) banned in options | ID-3 |
| No none/all-of-the-above; use a **specific** null ("No net change occurs") | ID-4 |
| Options parallel in grammatical form; all NPs or all clauses | ID-5 |
| No Roman-numeral or permutation-ordering options | ID-6 |
| Positive lead-ins; no EXCEPT / NOT / LEAST | ID-7 |
| Lead-in never ends in *a* / *an* / *the*; uniform plurality | TW-1 |
| Numeric options sorted, single format, no overlapping ranges | ID-2 |
| **Answer key evenly distributed A/B/C/D** | measured failure in this bank |

**Contradicts the classical bucketing** (Schmucker & Moore 2025, 7,126 items, 448k
students): convergence cues β=**+0.579** and grammatical cues β=**+0.455** made items
*harder* AND less discriminating — the worst quadrant, not the "gives it away" quadrant.

---

## TIER 3 — stimulus construction

**Science passages: median 248 words, range 147–302. Figures: 1, never more than 3.**
Measured from the 9 AAMC-authored passages in the 2011 Preview Guide. The 300–600
figure in circulation is a CARS number leaking into science advice.

**CARS: 500–600 words** (AAMC published), 9 sets of 5–7 questions, zero discretes.

**Format:** each science section is **10 passage sets of 4–6 questions + 15 discrete
questions**. So discretes are 25% of a science section.

**The passage stops one inferential step short of the conclusion its figure supports.**
That gap is the item. **76% of an AAMC passage's words are item-referenced** — they are
essentially padding-free, so do not pad.

**Vocabulary that appears ZERO times in AAMC's 108-page content outline** — do not use
it, do not require it: *control group · randomization · blind · placebo · sample size ·
statistical power · null hypothesis · standard error · t-test · ANOVA · chi-square ·
regression · effect size · confidence interval.*
AAMC tests the **function** of design ("which finding would show this is not the case"),
never the terminology.

**Scope limits (AAMC, quoted):** no calculus, no dot/cross products, trigonometry
restricted to 0/90/180° and the 30-45-60 ratios, Algebra II ceiling, periodic table and
conversion factors provided.

---

## TIER 4 — CARS-specific

**AAMC's own acceptance test, verbatim:**
> "Each response option will yield a different result, but each test question has only
> one **defensible and demonstrably correct** response option."

*Defensible* = survives challenge. *Demonstrably* = the defense is exhibitable **from the
passage**. For the key, point at the text. For each distractor, point at what the text
**fails to license**.

**Difficulty lives in the options, not the passage.** Embretson & Wetzel 1987: decision
variables fit .28, text-representation variables .17. Gorin & Embretson 2006 on GRE: text
variables contributed *nothing* once decision variables were modeled.

**The mechanism is unfalsifiability.** An item is hard when few alternatives can be ruled
out — because the passage is **mute** about them, not because they are false. Freedle &
Kostin's operational definition, arrived at independently: *a plausible distractor is one
not contradicted by the text.*

**Confirmation ambiguity outranks falsification difficulty** — the stronger lever is
making the *credited* answer take real work to confirm, not making distractors stickier.

**Lexical overlap is the leakage channel** and it disproportionately pulls **weaker**
examinees. The key must not be the option with the most surface overlap with the passage.

**The 14 rejection templates**, extracted from AAMC/Khan Academy worked examples where
the item writer walks every choice. Ranked by frequency:

1. **No textual warrant** (~40%) — "there's nothing in the passage that suggests…"
2. **Passage states the opposite**
3. **True but only part of the passage** (main-idea scope failure)
4. **True of half the passage only** (the "common thread" trap)
5. **Right content, wrong function** — correct material, wrong reason for its inclusion
6. **Misattributed referent** — the word IS in the passage, attached to someone else
7. **One-word substitution** — *sensible* imagery becomes *strange* imagery
8. **Requires outside knowledge**
9. **Requires more inferential steps than the key**
10. **Unwarranted leap from a true premise**
11. **Over-generalization / too extreme**
12. **Not a needed assumption** (assumption items)
13. **True but irrelevant to the question asked**
14. **Named as bait** — "it may be tempting to infer… but the author never makes that connection"

**Two meta-rules:**
- **Over-determination.** Strong distractors fail for *two* reasons and AAMC says so
  out loud. A distractor failing for exactly one reason is a throwaway.
- **AAMC almost never says a distractor is false.** It says the passage does not support
  it. The register is comparative and hedged throughout — even for the key
  ("it seems like the best answer"). Write rationales the same way.

---

## VALIDATION PIPELINE — run in order, fail fast

1. `plausibility.py` — every distractor anchored in the stimulus **(R1, highest priority)**
2. **Cover-the-options gate** — strip the options, answer from stem + stimulus alone.
   If the keyed answer isn't reachable, the lead-in is unfocused. Fix the lead-in, not the options.
3. **Passage-strip gate** (Katz & Lautenschlager) — answer the item *without* the stimulus.
   If a competent reader beats chance, the distractors are leaking.
4. `flawcheck.py` — the 13 NBME flaws
5. `passagecheck.py` — stimulus length, figure count, banned vocabulary
6. `lint_items.py` — bank-level key distribution and length bias
7. Name the **single continuum** all options lie on. If you cannot, the set is heterogeneous.
8. Every distractor carries a stored **error_path** — the specific misconception it encodes.
   Store rationales *beside* the item, **never inside the option text** — that is the
   documented cause of the "correct answer stands out" flaw.

## Post-administration screens (once response data exists)
| Statistic | Keep | Reject |
|---|---|---|
| difficulty p | .30–.80 | >.95 or <.10 |
| key point-biserial | ≥0.30 | ≤0.19, or **any negative** |
| distractor PB (vs key-choosers) | ≤ −0.05 | ≥ 0 → rewrite |
| distractor selection | ≥5%, scaled to (1−p) | 0% |
