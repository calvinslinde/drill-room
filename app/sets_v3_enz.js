/* sets_v3_enz.js — first set built to research/GENERATOR-SPEC.md.
   Targets three documented gaps in bb_enz (2/7): the uncompetitive/noncompetitive
   label swap (Q1,Q2,Q6), thermodynamics-vs-kinetics (Q7, answered "sure"), and
   homotropic/heterotropic (Q5).

   Spec compliance:
   - distractors built by KEY FEATURES (remove one feature from the key), every one
     anchored in the stimulus                                            [R1]
   - option lengths matched, key never the longest                       [TW-4]
   - keys distributed across A/B/C/D                                     [measured flaw]
   - no absolutes confined to distractors, no vague frequency terms      [TW-3, ID-3]
   - passage 251 words + one table, stops one step short of its conclusion [Tier 3]
   - none of the banned stats vocabulary                                 [Tier 3]
   - skill mix weighted to Skill 2 reasoning, not recall                 [R3, R4]
*/

SETS.push(

{id:"bb_enz2", sec:"B/B", topic:"Enzyme inhibition — kinetic characterization",
 label:"Biological and Biochemical Foundations of Living Systems",
 passage:`<div class="ttl">Passage 1 (Questions 1&ndash;6)</div>
<p>Aspartate transcarbamoylase (ATCase) catalyzes the first step unique to pyrimidine
synthesis, condensing carbamoyl phosphate with aspartate. The enzyme is a dodecamer
with six catalytic and six regulatory subunits, and a plot of its initial velocity
against aspartate concentration is sigmoidal rather than hyperbolic.</p>
<p>Researchers characterized three compounds, designated I, II, and III, that reduce
ATCase turnover. Each was added at a fixed concentration to reaction mixtures in which
aspartate was varied while carbamoyl phosphate was held saturating. Initial velocities
were measured before appreciable product accumulated, and apparent kinetic constants
were obtained from double-reciprocal plots. Cytidine triphosphate (CTP), the eventual
product of the pathway, was tested in parallel.</p>
<p>The double-reciprocal plot for Compound II ran parallel to the uninhibited line.
Compound I's line met the uninhibited line on the vertical axis. Compound III's met it
on the horizontal axis.</p>
<table><tr><th>Addition</th><th>Apparent K<sub>m</sub> (mM)</th><th>Apparent V<sub>max</sub> (&mu;mol/min)</th></tr>
<tr><td>None</td><td>12.0</td><td>40.0</td></tr>
<tr><td>Compound I</td><td>24.0</td><td>40.0</td></tr>
<tr><td>Compound II</td><td>6.0</td><td>20.0</td></tr>
<tr><td>Compound III</td><td>12.0</td><td>20.0</td></tr>
<tr><td>CTP</td><td>21.0</td><td>39.5</td></tr></table>
<p>None of the four additions altered the equilibrium constant of the reaction they
slowed. A separate trial confirmed that raising aspartate to 200 mM restored full
turnover in the presence of Compound I but not Compound II.</p>`,
 qs:[

 {q:"Which species does Compound II most likely bind?",
  ch:["Free enzyme, in direct competition with aspartate.",
      "The enzyme&ndash;substrate complex, once aspartate is bound.",
      "Both species indifferently, with equal affinity.",
      "The regulatory subunits, distant from catalysis."],a:1,
  e:"<strong>Both constants fall by the same factor of two, which is the uncompetitive signature</strong> and the reason its double-reciprocal line runs parallel &mdash; the slope K<sub>m</sub>/V<sub>max</sub> is unchanged. Binding only the ES complex removes it from the pool, and Le Ch&acirc;telier pulls E + S toward ES, so apparent K<sub>m</sub> <em>falls</em>. Choice A describes Compound I, whose K<sub>m</sub> doubles with V<sub>max</sub> fixed. Choice C describes Compound III, which lowers V<sub>max</sub> and leaves K<sub>m</sub> alone."},

 {q:"Which quantity does Compound II leave unchanged, producing a parallel double-reciprocal line?",
  ch:["The vertical intercept, equal to 1/V<sub>max</sub>.",
      "The horizontal intercept, equal to &minus;1/K<sub>m</sub>.",
      "The slope, equal to K<sub>m</sub>/V<sub>max</sub>.",
      "The curvature, set by K<sub>m</sub> times V<sub>max</sub>."],a:2,
  e:"<strong>Read it off the double-reciprocal form.</strong> 1/v = (K<sub>m</sub>/V<sub>max</sub>)(1/[S]) + 1/V<sub>max</sub>, so the slope is K<sub>m</sub>/V<sub>max</sub>. Halving both leaves the slope fixed and the lines parallel. Choice A is Compound I's signature and choice B is Compound III's &mdash; both are true of the passage, of the wrong compound."},

 {q:"Raising aspartate to 200 mM restores turnover with Compound I but not Compound II because Compound I:",
  ch:["is bound reversibly, whereas Compound II is bound covalently.",
      "acts at a site that substrate can occupy first and thereby block.",
      "competes for a site that abundant substrate can outcompete it for.",
      "lowers the activation barrier less than Compound II lowers it."],a:2,
  e:"<strong>Only competitive inhibition is relieved by substrate</strong>, because inhibitor and substrate contest the same free enzyme. Compound II binds ES, so more substrate makes <em>more</em> of its target. Choice B inverts the mechanism &mdash; substrate binding creates Compound II's site rather than blocking it. Nothing in the passage speaks to covalency, and choice D misstates what an inhibitor does."},

 {q:"With respect to ATCase, aspartate and CTP act respectively as:",
  ch:["a homotropic effector and a heterotropic effector.",
      "a heterotropic effector and a homotropic effector.",
      "a competitive inhibitor and an allosteric activator.",
      "an allosteric activator and a competitive inhibitor."],a:0,
  e:"<strong>Homotropic means the effector is the substrate itself</strong>, which is what produces the sigmoidal aspartate curve through cooperativity across subunits. CTP is a different molecule, so it is heterotropic &mdash; and its profile in the table (K<sub>m</sub> up, V<sub>max</sub> essentially unchanged) is feedback inhibition by the pathway's own end product."},

 {q:"None of the additions altered the equilibrium constant of the reaction. This is best explained by the fact that a catalyst and its inhibitors alter:",
  ch:["the free energies of the reactants and of the products equally.",
      "the height of the barrier but not the energies of the end states.",
      "the forward rate constant but not the reverse rate constant.",
      "the spontaneity of the reaction but not its overall rate."],a:1,
  e:"<strong>K<sub>eq</sub> is fixed by the difference between the ground states; the barrier sits between them.</strong> Changing barrier height leaves that difference untouched, so K<sub>eq</sub> cannot move &mdash; and because forward and reverse share one transition state, both rate constants change by the same factor. Choice C would necessarily change K<sub>eq</sub>, since K<sub>eq</sub> = k<sub>forward</sub>/k<sub>reverse</sub>. Choice D reverses the roles of &Delta;G and E<sub>a</sub> entirely."},

 {q:"A mutation that abolished cooperativity between ATCase subunits, without changing catalytic residues, would be expected to:",
  ch:["lower V<sub>max</sub> and leave the velocity curve sigmoidal.",
      "lower V<sub>max</sub> and render the velocity curve hyperbolic.",
      "leave V<sub>max</sub> unchanged and leave the velocity curve sigmoidal.",
      "leave V<sub>max</sub> unchanged and render the velocity curve hyperbolic."],a:3,
  e:"<strong>Cooperativity shapes the approach to saturation, not the ceiling.</strong> V<sub>max</sub> depends on catalytic turnover, which the mutation spares, so it holds; losing subunit communication collapses the sigmoid to a hyperbola. The option set is a balanced 2&times;2 &mdash; each value appears exactly twice &mdash; so counting shared terms cannot single out the key."}
]}

);
