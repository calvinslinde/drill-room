/* Batch 2 — built to AAMC's published skill mix.
   Per set: ~2 Skill-1 (knowledge), ~3 Skill-2 (reasoning), 1 Skill-3/4 (design or data),
   then a discrete block (d:true) that hides the passage, mirroring the real 75/25 split. */
SETS.push(

{id:"cp_acid", sec:"C/P", topic:"Acid–base equilibria and buffers", sheet:13,
 label:"Chemical and Physical Foundations of Biological Systems",
 passage:`<div class="ttl">Passage 6 (Questions 1&ndash;5)</div>
<p>Buffer systems resist pH change when small amounts of acid or base are added. A buffer's capacity is greatest when the concentrations of its conjugate acid and base are equal, which occurs when pH equals the pK<sub>a</sub>.</p>
<p>Investigators prepared four 0.10 M buffer solutions and titrated each with 0.10 M HCl, recording the pH after each addition. The starting pH of every solution was adjusted to 7.40 before titration.</p>
<table><tr><th>Buffer</th><th>pK<sub>a</sub></th><th>&Delta;pH after 5 mL HCl</th><th>&Delta;pH after 15 mL HCl</th></tr>
<tr><td>Acetate</td><td class="n">4.76</td><td class="n">&minus;2.41</td><td class="n">&minus;3.18</td></tr>
<tr><td>Carbonate (HCO<sub>3</sub><sup>&minus;</sup>)</td><td class="n">6.10</td><td class="n">&minus;0.62</td><td class="n">&minus;1.44</td></tr>
<tr><td>Phosphate (H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>)</td><td class="n">7.21</td><td class="n">&minus;0.11</td><td class="n">&minus;0.35</td></tr>
<tr><td>Ammonium</td><td class="n">9.25</td><td class="n">&minus;1.87</td><td class="n">&minus;2.79</td></tr></table>
<p class="cap"><b>Table 1</b> pH change on addition of 0.10 M HCl to each buffer, all starting at pH 7.40.</p>
<p>In a closed vessel the carbonate system behaves as shown. In the body, however, the CO<sub>2</sub> produced when HCO<sub>3</sub><sup>&minus;</sup> is protonated is continuously exhaled.</p>`,
 qs:[
 {q:"Which buffer shows the greatest capacity at pH 7.40, and why?",
  ch:["Ammonium, because it has the highest pK<sub>a</sub>.","Carbonate, because it is the physiological buffer.","Phosphate, because its pK<sub>a</sub> is closest to 7.40.","Acetate, because its pK<sub>a</sub> is furthest from 7.40."],a:2,
  e:"<strong>Capacity peaks where pH = pK<sub>a</sub>.</strong> Phosphate's 7.21 is nearest 7.40, and Table 1 confirms it &mdash; only &minus;0.11 after 5 mL, an order of magnitude better than acetate. Choice D is the trap: bicarbonate <em>is</em> the dominant physiological buffer, but that is true for a reason the closed-vessel data cannot show, and in this experiment it underperforms phosphate."},
 {q:"A solution of the phosphate buffer has [H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>] = 0.020 M and [HPO<sub>4</sub><sup>2&minus;</sup>] = 0.20 M. Its pH is closest to:",
  ch:["6.21","7.21","8.21","9.21"],a:2,
  e:"<strong>Henderson&ndash;Hasselbalch: pH = pK<sub>a</sub> + log([A<sup>&minus;</sup>]/[HA]).</strong> The ratio is 0.20/0.020 = 10, and log 10 = 1, so pH = 7.21 + 1 = 8.21. Choice A inverts the ratio &mdash; the single most common arithmetic error here. Keep the conjugate <em>base</em> on top."},
 {q:"Based on Table 1, the &Delta;pH for acetate is far larger than for phosphate primarily because at pH 7.40 the acetate system is:",
  ch:["unable to dissociate because acetic acid is a strong acid.","almost entirely in its conjugate base form, leaving little conjugate acid reserve but ample base to absorb added H<sup>+</sup>.","almost entirely in its conjugate base form, leaving little acid to neutralize added base.","an equimolar mixture, which is the least effective ratio."],a:1,
  e:"<strong>Read what the added species actually is.</strong> pH 7.40 is 2.6 units above acetate's pK<sub>a</sub>, so the system is >99% acetate ion. HCl adds H<sup>+</sup>, which acetate <em>can</em> absorb &mdash; but converting base to acid at such an extreme starting ratio swings the log term violently, so pH crashes. Choice A misreads the titrant as base; the passage says HCl."},
 {q:"The passage notes that CO<sub>2</sub> is continuously exhaled in vivo. This most directly explains why the bicarbonate system:",
  ch:["cannot function as a buffer at physiological pH.","has a higher effective pK<sub>a</sub> in blood than in a closed vessel.","requires carbonic anhydrase to reach equilibrium.","is a far more effective physiological buffer than its pK<sub>a</sub> alone would predict."],a:3,
  e:"<strong>An open system escapes the equilibrium constraint.</strong> Removing a product pulls the reaction forward indefinitely, so bicarbonate keeps consuming H<sup>+</sup> without accumulating carbonic acid &mdash; effectively unlimited capacity despite a pK<sub>a</sub> 1.3 units from physiological pH. This open-vs-closed distinction is the entire reason the closed-vessel Table 1 ranks it below phosphate."},
 {q:"To confirm that the differences in Table 1 are attributable to pK<sub>a</sub> rather than to differences in buffer concentration, the most important control is to verify that:",
  ch:["the pH electrode was calibrated before each run.","each solution was titrated at the same temperature.","the total concentration of each conjugate pair was identical across solutions.","the HCl was standardized against a primary standard."],a:2,
  e:"<strong>Capacity depends on both pK<sub>a</sub> and total buffer concentration.</strong> If one solution were more concentrated it would resist more regardless of pK<sub>a</sub>, confounding the comparison. The passage states all were 0.10 M, but the question asks which control <em>matters</em> for the inference. The other three affect accuracy generally; only concentration is a competing explanation for the pattern."},
 {q:"Which of the following is true of a strong acid but not a weak acid in aqueous solution?",d:true,
  ch:["It dissociates essentially completely.","It donates a proton to water.","It has a conjugate base.","Its solution conducts electricity."],a:0,
  e:"<strong>Complete dissociation is the defining property.</strong> Every acid donates a proton and every acid has a conjugate base, so A and C are true of both. Weak-acid solutions conduct too, just less. Only B distinguishes them &mdash; and it is why strong acids have no meaningful K<sub>a</sub> to speak of."},
 {q:"A 0.10 M solution of a weak acid has pH 3.0. Its K<sub>a</sub> is closest to:",d:true,
  ch:["1 &times; 10<sup>&minus;3</sup>","1 &times; 10<sup>&minus;5</sup>","1 &times; 10<sup>&minus;6</sup>","1 &times; 10<sup>&minus;7</sup>"],a:1,
  e:"<strong>K<sub>a</sub> &asymp; [H<sup>+</sup>]&sup2;/[HA].</strong> pH 3.0 means [H<sup>+</sup>] = 10<sup>&minus;3</sup>, so K<sub>a</sub> = (10<sup>&minus;3</sup>)&sup2;/0.10 = 10<sup>&minus;6</sup>/10<sup>&minus;1</sup> = 10<sup>&minus;5</sup>. Choice A is [H<sup>+</sup>] itself &mdash; the reflex grab under time pressure."}
]},

{id:"cp_kin", sec:"C/P", topic:"Kinetics, catalysis, and thermodynamics", sheet:8,
 label:"Chemical and Physical Foundations of Biological Systems",
 passage:`<div class="ttl">Passage 7 (Questions 1&ndash;5)</div>
<p>The gas-phase decomposition of compound X was studied at 298 K. The accepted mechanism is:</p>
<p style="font-family:var(--f);font-size:14px;margin-left:14px">
Step 1: X &rarr; Y + Z &nbsp;&nbsp;(slow)<br>
Step 2: Y + X &rarr; P &nbsp;&nbsp;(fast)</p>
<p>Initial rates were measured at several starting concentrations, first without catalyst and then in the presence of a solid catalyst. The overall reaction is exothermic, with &Delta;H = &minus;92 kJ/mol and &Delta;S = &minus;198 J/(mol&middot;K).</p>
<table><tr><th>Trial</th><th>[X]<sub>0</sub> (M)</th><th>Catalyst</th><th>Initial rate (M/s)</th></tr>
<tr><td>1</td><td class="n">0.10</td><td>none</td><td class="n">2.0 &times; 10<sup>&minus;4</sup></td></tr>
<tr><td>2</td><td class="n">0.20</td><td>none</td><td class="n">4.0 &times; 10<sup>&minus;4</sup></td></tr>
<tr><td>3</td><td class="n">0.40</td><td>none</td><td class="n">8.0 &times; 10<sup>&minus;4</sup></td></tr>
<tr><td>4</td><td class="n">0.10</td><td>present</td><td class="n">5.0 &times; 10<sup>&minus;2</sup></td></tr></table>
<p class="cap"><b>Table 1</b> Initial rate data for the decomposition of X at 298 K.</p>`,
 qs:[
 {q:"Based on Trials 1&ndash;3, the reaction is:",
  ch:["third order in X","second order in X","zero order in X","first order in X"],a:3,
  e:"<strong>Doubling [X] doubles the rate.</strong> 0.10 &rarr; 0.20 M takes 2.0&times;10<sup>&minus;4</sup> &rarr; 4.0&times;10<sup>&minus;4</sup>, a factor of 2 for a factor of 2 &mdash; first order. Second order would have quadrupled it. Read two rows, form both ratios, and the exponent falls out."},
 {q:"The experimentally determined rate law is consistent with the proposed mechanism because:",
  ch:["the rate law reflects the composition of the rate-determining step.","intermediates must appear in the rate law.","fast steps always determine the observed rate law.","the rate law reflects the stoichiometry of the overall balanced equation."],a:0,
  e:"<strong>The slow step sets the rate law.</strong> Step 1 is unimolecular in X, predicting rate = k[X] &mdash; exactly what the data show. Choice A is the classic error: overall stoichiometry has two X molecules consumed, which would wrongly predict second order. Rate laws come from mechanism, never from the balanced equation."},
 {q:"The catalyst increases the rate by a factor of about 250. It accomplishes this by:",
  ch:["raising the temperature of the reaction vessel.","increasing the equilibrium constant.","lowering the activation energy of the rate-determining step.","making the reaction more thermodynamically favorable."],a:2,
  e:"<strong>Catalysts are kinetic, never thermodynamic.</strong> They provide a lower-E<sub>a</sub> pathway, speeding forward and reverse reactions equally &mdash; so K, &Delta;G, and &Delta;H are all untouched. Choices B and C describe changes a catalyst cannot make, and that impossibility is one of the most reliably tested facts in general chemistry."},
 {q:"At 298 K, this reaction is:",
  ch:["nonspontaneous, because &Delta;S is negative.","spontaneous, because &Delta;H is negative and the T&Delta;S term is smaller in magnitude.","spontaneous only above a threshold temperature.","at equilibrium, because the two terms cancel."],a:1,
  e:"<strong>&Delta;G = &Delta;H &minus; T&Delta;S.</strong> T&Delta;S = 298 &times; (&minus;0.198) = &minus;59 kJ/mol, so &Delta;G = &minus;92 &minus; (&minus;59) = &minus;33 kJ/mol &mdash; negative, spontaneous. With &Delta;H and &Delta;S both negative, spontaneity is favored at <em>low</em> temperature, making choice C backwards. Convert J to kJ before subtracting; that unit mismatch is the built-in trap."},
 {q:"A student proposes that the catalyst works by shifting the equilibrium toward products. The strongest experimental evidence against this claim would be:",
  ch:["demonstrating that the rate increases with catalyst surface area.","confirming the reaction is exothermic.","measuring the final equilibrium concentrations with and without catalyst and finding them identical.","showing that the catalyst is not consumed during the reaction."],a:2,
  e:"<strong>Test the claim directly.</strong> The assertion is about the equilibrium <em>position</em>, so measure the equilibrium position both ways; identical values refute it outright. Choice B shows only that it is a catalyst, and C shows only that catalysis is surface-dependent &mdash; neither addresses where equilibrium lies. Design questions reward matching the measurement to the exact claim."},
 {q:"For a reaction with Q &gt; K, the reaction will:",d:true,
  ch:["already be at equilibrium","proceed in reverse to form more reactant","have a negative &Delta;G under those conditions","proceed forward to form more product"],a:1,
  e:"<strong>Q &gt; K means too much product already.</strong> The system consumes product to return to K, so it runs in reverse and &Delta;G is <em>positive</em> in the forward direction &mdash; making D wrong as well. Compare Q to K and the direction is forced."},
 {q:"Increasing temperature increases reaction rate primarily because it:",d:true,
  ch:["increases the equilibrium constant for all reactions","decreases the enthalpy of the transition state","lowers the activation energy","increases the fraction of collisions with energy exceeding E<sub>a</sub>"],a:3,
  e:"<strong>Temperature shifts the Maxwell&ndash;Boltzmann distribution, not the barrier.</strong> E<sub>a</sub> is a fixed property of the pathway; heating simply puts more molecules above it. Choice A confuses temperature with catalysis, and choice C is false for exothermic reactions, where K <em>falls</em> with rising temperature."}
]},

{id:"bb_enz", sec:"B/B", topic:"Enzyme kinetics and inhibition", sheet:41,
 label:"Biological and Biochemical Foundations of Living Systems",
 passage:`<div class="ttl">Passage 8 (Questions 1&ndash;5)</div>
<p>Enzyme E converts substrate S to product P. Investigators measured initial velocity across a range of [S] in the absence of inhibitor and in the presence of three inhibitors at fixed concentration. Data were plotted as 1/v against 1/[S].</p>
<table><tr><th>Condition</th><th>V<sub>max</sub> (&mu;M/min)</th><th>K<sub>m</sub> (&mu;M)</th><th>Lineweaver&ndash;Burk appearance</th></tr>
<tr><td>No inhibitor</td><td class="n">100</td><td class="n">25</td><td>reference line</td></tr>
<tr><td>Inhibitor 1</td><td class="n">100</td><td class="n">75</td><td>same y-intercept</td></tr>
<tr><td>Inhibitor 2</td><td class="n">50</td><td class="n">25</td><td>same x-intercept</td></tr>
<tr><td>Inhibitor 3</td><td class="n">50</td><td class="n">12.5</td><td>parallel to reference</td></tr></table>
<p class="cap"><b>Table 1</b> Kinetic parameters with each inhibitor.</p>
<p>A separate enzyme, F, catalyzes the committed step of the same pathway. A plot of velocity against [S] for enzyme F is sigmoidal rather than hyperbolic, and the pathway's end product decreases F's activity.</p>`,
 qs:[
 {q:"Inhibitor 3 is best classified as:",
  ch:["uncompetitive","noncompetitive","competitive","mixed"],a:0,
  e:"<strong>Parallel lines on a Lineweaver&ndash;Burk plot mean uncompetitive, with no exceptions.</strong> V<sub>max</sub> and K<sub>m</sub> both fall by the same factor (100&rarr;50, 25&rarr;12.5), so the slope K<sub>m</sub>/V<sub>max</sub> is unchanged and the lines never converge. Read the intercept that <em>didn't</em> move to name the type; when both move equally, nothing converges and you get parallel."},
 {q:"The mechanism underlying Inhibitor 3's effect on K<sub>m</sub> is that it:",
  ch:["binds only the enzyme–substrate complex, pulling the binding equilibrium toward ES.","binds free enzyme, competing directly with substrate.","covalently modifies the active site.","binds an allosteric site on free enzyme without affecting substrate binding."],a:0,
  e:"<strong>Removing ES from the pool drags E + S &rarr; ES forward by Le Ch&acirc;telier.</strong> Apparent affinity therefore <em>increases</em>, which is why K<sub>m</sub> falls &mdash; the counterintuitive result that makes uncompetitive inhibition the most-missed type. It also explains why uncompetitive inhibitors get <em>more</em> effective at high [S], the opposite of competitive."},
 {q:"Inhibitor 1's effect can be overcome by:",
  ch:["decreasing substrate concentration","increasing substrate concentration","adding more enzyme only","neither, since V<sub>max</sub> is reduced"],a:1,
  e:"<strong>K<sub>m</sub> raised with V<sub>max</sub> unchanged is competitive.</strong> Enough substrate outcompetes the inhibitor for the free active site, so the same V<sub>max</sub> is still reachable &mdash; it just takes more S to get halfway there. Choice D contradicts the table, which lists V<sub>max</sub> as 100 for Inhibitor 1."},
 {q:"The sigmoidal curve for enzyme F indicates that F:",
  ch:["is irreversibly inhibited at high substrate concentration.","obeys Michaelis–Menten kinetics with a very small K<sub>m</sub>.","displays cooperative substrate binding across multiple subunits.","has a single active site with unusually high affinity."],a:2,
  e:"<strong>Sigmoid means cooperativity.</strong> Binding at one site raises affinity at the others, producing the switch-like curve &mdash; and it requires multiple subunits, so choice A is structurally impossible. Michaelis&ndash;Menten kinetics are hyperbolic by definition, ruling out D, and K<sub>m</sub> is no longer strictly meaningful for such enzymes (K<sub>0.5</sub> is used instead)."},
 {q:"With respect to enzyme F, substrate S and the pathway's end product act respectively as:",
  ch:["a competitive inhibitor and an allosteric activator.","two homotropic effectors.","a heterotropic effector and a homotropic effector.","a homotropic effector and a heterotropic effector."],a:3,
  e:"<strong>Ask what molecule is doing the regulating.</strong> Same as the substrate &rarr; homotropic; a different molecule &rarr; heterotropic. S regulating its own enzyme's affinity through cooperativity is homotropic (as O<sub>2</sub> is on hemoglobin); the end product is a different molecule, so it is heterotropic &mdash; here, classic feedback inhibition of the committed step."},
 {q:"A noncompetitive inhibitor produces which change on a Lineweaver&ndash;Burk plot?",d:true,
  ch:["Lines crossing above the x-axis in the second quadrant","Parallel line, lower slope","Same x-intercept, steeper slope","Same y-intercept, steeper slope"],a:2,
  e:"<strong>Pure noncompetitive lowers V<sub>max</sub> and leaves K<sub>m</sub> alone.</strong> The x-intercept is &minus;1/K<sub>m</sub>, so it stays put while the y-intercept (1/V<sub>max</sub>) rises. Choice A is competitive, C is uncompetitive, and D describes mixed inhibition."},
 {q:"An enzyme lowers the activation energy of a reaction. It therefore:",d:true,
  ch:["makes a nonspontaneous reaction spontaneous","increases the rate of both forward and reverse reactions","is consumed in stoichiometric amounts","increases the equilibrium constant"],a:1,
  e:"<strong>Enzymes are catalysts and touch only kinetics.</strong> Lowering the barrier accelerates both directions equally, leaving K, &Delta;G, and the equilibrium position unchanged. Choices A and B describe thermodynamic changes no catalyst can make &mdash; the same principle tested in the general-chemistry set, which is exactly how AAMC connects the sections."}
]},

{id:"bb_endo", sec:"B/B", topic:"Endocrine — axes and feedback", sheet:32,
 label:"Biological and Biochemical Foundations of Living Systems",
 passage:`<div class="ttl">Passage 9 (Questions 1&ndash;5)</div>
<p>The hypothalamic&ndash;pituitary&ndash;thyroid axis regulates metabolic rate. The hypothalamus releases TRH, which stimulates anterior pituitary release of TSH, which stimulates the thyroid to secrete T<sub>3</sub> and T<sub>4</sub>. Circulating thyroid hormone inhibits both TRH and TSH release.</p>
<p>Four patients presented with symptoms of altered metabolic rate. Serum values were obtained before treatment.</p>
<table><tr><th>Patient</th><th>TSH</th><th>Free T<sub>4</sub></th><th>Presentation</th></tr>
<tr><td>W</td><td class="n">high</td><td class="n">low</td><td>cold intolerance, weight gain</td></tr>
<tr><td>X</td><td class="n">low</td><td class="n">high</td><td>heat intolerance, weight loss</td></tr>
<tr><td>Y</td><td class="n">low</td><td class="n">low</td><td>fatigue, low blood pressure</td></tr>
<tr><td>Z</td><td class="n">high</td><td class="n">high</td><td>heat intolerance, tremor</td></tr></table>
<p class="cap"><b>Table 1</b> Serum thyroid values at presentation.</p>
<p>Patient X was later found to have circulating antibodies that bind and activate the TSH receptor on thyroid follicular cells.</p>`,
 qs:[
 {q:"Thyroid hormone and TSH differ in that thyroid hormone:",
  ch:["acts through a second-messenger cascade, while TSH alters gene transcription directly.","requires a carrier protein, while TSH is stored in vesicles as a steroid.","binds a cell-surface receptor, while TSH binds an intracellular receptor.","is lipophilic and binds an intracellular receptor, while TSH binds a cell-surface receptor."],a:3,
  e:"<strong>Thyroid hormone is the amino-acid-derived exception that behaves like a steroid.</strong> It is lipophilic, travels bound to carrier proteins, crosses the membrane, and binds nuclear receptors to change transcription &mdash; slow onset, long duration. TSH is a peptide, so it acts at the surface through a G-protein cascade. Choice C reverses both mechanisms."},
 {q:"Patient W's pattern is most consistent with:",
  ch:["primary hypothyroidism, with the thyroid gland itself failing.","resistance of the hypothalamus to feedback.","primary hyperthyroidism.","secondary hypothyroidism, from inadequate pituitary TSH."],a:0,
  e:"<strong>Work backwards from the feedback loop.</strong> Low T<sub>4</sub> releases the brake on the pituitary, so TSH rises &mdash; the pituitary is working correctly and shouting at a gland that cannot respond. The defect is therefore at the gland: primary. High TSH with low T<sub>4</sub> is the signature, and it is the single most testable endocrine pattern."},
 {q:"Patient Y's low TSH with low T<sub>4</sub> most likely indicates:",
  ch:["excessive negative feedback from high T<sub>3</sub>.","a failure at the pituitary or hypothalamus.","a thyroid gland destroyed by autoimmune attack.","a laboratory error, since this combination cannot occur."],a:1,
  e:"<strong>Both values low points upstream.</strong> If the thyroid were the problem, low T<sub>4</sub> would drive TSH <em>up</em>. TSH failing to rise in the face of low T<sub>4</sub> means the organ that should be responding is itself impaired &mdash; secondary (pituitary) or tertiary (hypothalamic). The accompanying low blood pressure hints at broader pituitary failure."},
 {q:"The antibodies found in Patient X explain the laboratory values because they:",
  ch:["destroy pituitary thyrotrophs, lowering TSH directly.","increase the affinity of nuclear receptors for T<sub>3</sub>.","block TSH from binding, reducing thyroid output.","stimulate the thyroid independently of TSH, and the resulting high T<sub>4</sub> suppresses TSH."],a:3,
  e:"<strong>An agonist antibody bypasses the loop's control point.</strong> It drives the thyroid regardless of TSH, T<sub>4</sub> climbs, and normal negative feedback shuts TSH off &mdash; producing low TSH with high T<sub>4</sub>. Feedback is intact and working; what is broken is that the gland no longer needs the signal. This is the mechanism of Graves disease."},
 {q:"To determine whether Patient Z's pattern reflects assay interference rather than a true pituitary-driven process, the most informative next step would be:",
  ch:["administering thyroid hormone and re-measuring TSH.","imaging the thyroid gland.","repeating both measurements using a different antibody-based assay platform.","measuring serum calcium."],a:2,
  e:"<strong>Test the measurement before testing the patient.</strong> High TSH with high T<sub>4</sub> is internally contradictory under normal feedback, so the first question is whether the numbers are real &mdash; interfering heterophile antibodies are a well-known cause of spurious immunoassay results. Choice B is a reasonable second step but assumes the values are valid; choice D probes an unrelated axis."},
 {q:"Which hormone pair is correctly matched to its source?",d:true,
  ch:["Oxytocin — posterior pituitary","Insulin — alpha cells of the pancreas","Cortisol — adrenal medulla","ADH — anterior pituitary"],a:0,
  e:"<strong>Oxytocin and ADH are made in the hypothalamus and released from the posterior pituitary</strong>, which is neural tissue storing hypothalamic products rather than a gland that synthesizes its own. Cortisol comes from the adrenal <em>cortex</em> (the medulla makes catecholamines), and insulin from <em>beta</em> cells; alpha cells make glucagon."},
 {q:"A steroid hormone's effects are typically slower in onset than a peptide hormone's because steroid hormones:",d:true,
  ch:["are secreted in smaller quantities","are degraded more rapidly in the circulation","must be transported in blood by carrier proteins","act by altering gene transcription and protein synthesis"],a:3,
  e:"<strong>Transcription and translation take time.</strong> Peptide hormones activate pre-existing enzymes through second messengers in seconds; steroids must produce new protein, which takes hours &mdash; but the effect lasts far longer. Choice B is true of steroids yet is not what makes them slow, and choice D is backwards: steroids have <em>longer</em> half-lives."}
]},

{id:"cars_1", sec:"CARS", topic:"Philosophy of history — the uses of the past",
 label:"Critical Analysis and Reasoning Skills",
 passage:`<div class="ttl">Passage 10 (Questions 1&ndash;5)</div>
<p>We are accustomed to speaking of history as though it were a warehouse: a place where the past is kept, from which the present may draw as need arises. The metaphor flatters us. It suggests that what happened is fixed, that its meaning waits patiently on a shelf, and that the historian's task is merely retrieval &mdash; a matter of knowing where to look and having the diligence to go there.</p>
<p>But no historian has ever worked this way, and none could. The archive does not present itself as a warehouse. It presents itself as a ruin: partial, water-damaged, arranged by principles that served purposes now forgotten. What survives has survived for reasons that have nothing to do with its importance, and much to do with the accidents of paper, patronage, and fire. The historian who imagines they are retrieving is in fact selecting, and the criteria of selection come from the present, not the past.</p>
<p>This is not a confession of failure. It is a description of the only method available. The complaint that history is written by the victors is usually offered as an indictment, as if some more neutral procedure had been possible and was wilfully declined. But neutrality of that kind is not a standard we failed to meet; it is a standard that describes nothing a person could do. Every account is written from somewhere. The relevant question is not whether the historian has a position, which is settled in advance, but whether the position has been made visible enough that a reader can argue with it.</p>
<p>What follows is a curious inversion. The histories that announce their commitments are more useful than those that conceal them, and precisely because they are more obviously partial. A reader can correct for a bias they can see. The genuinely dangerous work is the one written in the voice of nobody in particular &mdash; the survey, the textbook, the account that has been sanded smooth until no hand is visible in it. Such a book does not lack a position. It has merely hidden it well enough that the reader mistakes it for the world.</p>`,
 qs:[
 {q:"The author's primary purpose in the passage is to:",
  ch:["explain the technical difficulties involved in preserving and cataloguing archival material.","demonstrate that historical knowledge is unattainable and the discipline should be abandoned.","argue that the inevitability of perspective in history makes explicit partiality preferable to apparent neutrality.","criticize historians who have allowed political commitments to distort their accounts of the past."],a:2,
  e:"<strong>Track where the argument lands, not where it starts.</strong> The archive discussion is setup; the conclusion arrives in paragraphs three and four &mdash; perspective is unavoidable, so the useful distinction is visible versus hidden. Choice A overstates into nihilism the author explicitly rejects (&ldquo;not a confession of failure&rdquo;). Choice C inverts the argument: the author defends openly committed work. Choice D mistakes an illustration for the thesis."},
 {q:"The author calls the warehouse metaphor one that &ldquo;flatters us&rdquo; primarily because it:",
  ch:["exaggerates the quantity of material that has survived from the past.","credits historians with a neutrality and completeness their method cannot supply.","implies the historian's work is more difficult than it actually is.","suggests that archives are better funded than they are in practice."],a:1,
  e:"<strong>Flattery here means an undeserved compliment to the practitioner.</strong> The metaphor casts the historian as a neutral retriever of fixed meanings &mdash; a self-image the following paragraph dismantles by showing that retrieval is really selection by present criteria. Choice D is close and tempting, since the ruin image does concern survival, but the flattery is aimed at the historian's <em>role</em>, not at the archive's size."},
 {q:"The passage suggests the author would most likely regard a widely adopted introductory textbook with:",
  ch:["suspicion, because its apparent impartiality conceals a position the reader cannot argue with.","indifference, because textbooks make no claims of historical interpretation.","hostility, because its authors are motivated by commercial rather than scholarly aims.","approval, because such works reach the largest audience."],a:0,
  e:"<strong>The final paragraph names this case directly:</strong> the survey and the textbook, &ldquo;sanded smooth until no hand is visible.&rdquo; The objection is not to the genre's reach or its motives but to its concealment &mdash; hidden positions cannot be corrected for. Choice D imports a commercial critique the passage never makes, which is the standard CARS trap of supplying a plausible reason the author did not give."},
 {q:"Which assumption is most necessary to the author's argument?",
  ch:["Readers are capable of adjusting their judgment when an author's commitments are known to them.","Objectivity is a worthwhile ideal even if unattainable.","Most historical documents have been destroyed.","Historians deliberately conceal their political views."],a:0,
  e:"<strong>Find the hidden premise the conclusion cannot survive without.</strong> The whole case for preferring visible partiality rests on &ldquo;a reader can correct for a bias they can see&rdquo; &mdash; if readers could not do that, transparency would carry no advantage and the argument collapses. Choice B is a supporting detail, not a load-bearing assumption. Choice D is something the author arguably <em>denies</em>, calling that neutrality a standard describing nothing a person could do."},
 {q:"Suppose a study found that readers informed of an author's political commitments rated that author's factual claims as less credible without evaluating the evidence. This finding would most:",
  ch:["have no effect, since the passage concerns historians rather than readers.","strengthen the argument, by confirming that no account is written from nowhere.","strengthen the argument, by showing that readers attend to authorial position.","weaken the argument, by suggesting disclosure produces dismissal rather than correction."],a:3,
  e:"<strong>Test new information against the assumption you just identified.</strong> The argument needs readers to <em>correct for</em> visible bias; a finding that they instead discount wholesale, without weighing evidence, undercuts the specific benefit claimed for transparency. Choice A is the seductive misread &mdash; readers noticing position is necessary but not sufficient, since the argument requires them to adjust rather than reject."}
]}

);
