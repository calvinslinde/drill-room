/* Science passages rebuilt to AAMC length (~250 words of prose, excluding tables).
   Questions are untouched — only the passage each set hands you is replaced.
   Added material is the kind AAMC actually includes: method detail, a second
   experiment, and context that some questions need and others do not. */

const PASSAGES_V2 = {

bb_renal:`<div class="ttl">Passage 1 (Questions 1&ndash;6)</div>
<p>The mammalian kidney produces urine that may be far more concentrated than plasma, an ability that depends on an osmotic gradient running from the renal cortex into the deep medulla. Filtrate leaving the glomerulus is isotonic with plasma; by the time it reaches the tip of the renal papilla it may exceed 1200 mOsm/L. Two distinct processes are involved. The first establishes the medullary gradient. The second exploits it, allowing water to leave the collecting duct as the duct descends back through progressively saltier tissue.</p>
<p>To separate these contributions, investigators administered three compounds to separate groups of rats and measured urine output, urine osmolarity, and the osmolarity of the deep medullary interstitium at steady state.</p>
<p><b>Compound A</b> inhibits the Na<sup>+</sup>/K<sup>+</sup>/2Cl<sup>&minus;</sup> cotransporter on the apical membrane of the thick ascending limb. <b>Compound B</b> is a competitive antagonist at the V2 receptor, the collecting-duct receptor through which antidiuretic hormone acts to insert aquaporin-2 channels. <b>Compound C</b> blocks the epithelial sodium channel (ENaC) on the apical membrane of collecting-duct principal cells.</p>
<p>All animals were water-replete with free access to food and were studied 6 h after a single dose. Plasma osmolarity was approximately 300 mOsm/L in every group, and glomerular filtration rate did not differ significantly across groups. Urine volume is expressed relative to untreated control.</p>
<table><tr><th>Group</th><th>Urine volume<br>(&times; control)</th><th>Urine osmolarity<br>(mOsm/L)</th><th>Deep medullary<br>interstitium (mOsm/L)</th></tr>
<tr><td>Control</td><td class="n">1.0</td><td class="n">1200</td><td class="n">1200</td></tr>
<tr><td>Compound A</td><td class="n">8.0</td><td class="n">150</td><td class="n">400</td></tr>
<tr><td>Compound B</td><td class="n">6.0</td><td class="n">80</td><td class="n">1150</td></tr>
<tr><td>Compound C</td><td class="n">2.5</td><td class="n">500</td><td class="n">1100</td></tr></table>
<p class="cap"><b>Table 1</b> Steady-state renal parameters following each compound.</p>`,

bb_cv:`<div class="ttl">Passage 2 (Questions 1&ndash;6)</div>
<p>Blood flow through a vascular bed is governed by the pressure gradient across it and the resistance it offers. For steady laminar flow through a rigid cylindrical vessel, resistance is proportional to fluid viscosity and vessel length and inversely proportional to the fourth power of the radius. Because the exponent on radius is so large, small changes in arteriolar diameter produce large changes in flow, and arterioles are accordingly the principal site of resistance regulation in the systemic circulation.</p>
<p>Total peripheral resistance (TPR) is the summed resistance of all systemic beds. These beds are arranged overwhelmingly in parallel: each organ receives blood from a common arterial pressure and drains to a common venous pressure. Conductances therefore add, and a single markedly dilated bed can lower total resistance substantially.</p>
<p>Investigators measured cardiac output (CO), mean arterial pressure (MAP), and heart rate in eight healthy volunteers at rest and during graded cycling on a stationary ergometer. Measurements were taken after three minutes at each workload, once values had stabilized. Skeletal muscle arterioles dilate markedly during exercise in response to local metabolites including adenosine, K<sup>+</sup>, and CO<sub>2</sub>, while splanchnic and renal beds constrict under sympathetic drive.</p>
<table><tr><th>Condition</th><th>CO<br>(L/min)</th><th>MAP<br>(mmHg)</th><th>Heart rate<br>(beats/min)</th></tr>
<tr><td>Rest</td><td class="n">5.0</td><td class="n">93</td><td class="n">64</td></tr>
<tr><td>Light exercise</td><td class="n">10.0</td><td class="n">100</td><td class="n">104</td></tr>
<tr><td>Heavy exercise</td><td class="n">20.0</td><td class="n">110</td><td class="n">175</td></tr></table>
<p class="cap"><b>Table 1</b> Hemodynamic values at rest and during exercise. MAP measured at the aortic root; right atrial pressure was near 0 mmHg throughout.</p>
<p>In a second experiment, an isolated artery segment was partially occluded so that its internal radius fell to one half of baseline, with driving pressure held constant.</p>`,

bb_resp:`<div class="ttl">Passage 3 (Questions 1&ndash;5)</div>
<p>Hemoglobin binds O<sub>2</sub> cooperatively: binding at one subunit increases the affinity of the remaining subunits, producing a sigmoidal rather than hyperbolic saturation curve. The steep middle portion of this curve lies across the range of partial pressures found in metabolically active tissue, so small drops in tissue PO<sub>2</sub> release substantial quantities of oxygen.</p>
<p>The position of the curve is not fixed. Rising CO<sub>2</sub>, rising H<sup>+</sup>, rising temperature, and rising 2,3-bisphosphoglycerate (2,3-BPG) all reduce hemoglobin's affinity for O<sub>2</sub> and shift the curve rightward, favoring unloading. The convention for describing this shift is P<sub>50</sub>, the partial pressure at which hemoglobin is half saturated: a higher P<sub>50</sub> means more pressure is required to reach half saturation, and therefore lower affinity.</p>
<p>Oxygen delivery depends on content rather than partial pressure. Arterial O<sub>2</sub> content is determined chiefly by hemoglobin concentration multiplied by fractional saturation, with only a small contribution from dissolved gas.</p>
<p>Researchers followed nine lowland volunteers who ascended from sea level to 4,300 m over two days and remained for three weeks. None had prior high-altitude exposure. Arterial samples were drawn at sea level, on day 1 at altitude, and on day 21, each after 30 min of seated rest.</p>
<table><tr><th>Time point</th><th>P<sub>a</sub>O<sub>2</sub><br>(mmHg)</th><th>P<sub>a</sub>CO<sub>2</sub><br>(mmHg)</th><th>Arterial pH</th><th>P<sub>50</sub><br>(mmHg)</th><th>Hematocrit<br>(%)</th></tr>
<tr><td>Sea level</td><td class="n">95</td><td class="n">40</td><td class="n">7.40</td><td class="n">27</td><td class="n">45</td></tr>
<tr><td>Altitude, day 1</td><td class="n">45</td><td class="n">30</td><td class="n">7.48</td><td class="n">26</td><td class="n">45</td></tr>
<tr><td>Altitude, day 21</td><td class="n">48</td><td class="n">28</td><td class="n">7.42</td><td class="n">30</td><td class="n">56</td></tr></table>
<p class="cap"><b>Table 1</b> Arterial blood values during acclimatization.</p>`,

bb_enz:`<div class="ttl">Passage 4 (Questions 1&ndash;5)</div>
<p>Enzyme E catalyzes the conversion of substrate S to product P. Under Michaelis&ndash;Menten conditions, initial velocity rises hyperbolically with substrate concentration toward a maximum, V<sub>max</sub>, and K<sub>m</sub> is defined as the substrate concentration producing half-maximal velocity. Because a hyperbola approaches its asymptote slowly, V<sub>max</sub> is difficult to read directly from such a plot. Investigators therefore commonly transform the data by plotting 1/v against 1/[S], which linearizes the relationship: the y-intercept equals 1/V<sub>max</sub>, the x-intercept equals &minus;1/K<sub>m</sub>, and the slope equals K<sub>m</sub>/V<sub>max</sub>.</p>
<p>Inhibitors are classified by which enzyme species they bind. A compound binding only free enzyme competes with substrate for the active site. A compound binding only the enzyme&ndash;substrate complex cannot compete with substrate at all, and by removing ES from the pool it shifts the binding equilibrium. A compound binding free enzyme and ES with equal affinity removes enzyme from the reaction without affecting substrate binding.</p>
<p>Initial velocities were measured across a range of [S] in the absence of inhibitor and in the presence of three inhibitors, each at a fixed concentration chosen to produce comparable inhibition at low [S]. Enzyme concentration was identical in all conditions.</p>
<table><tr><th>Condition</th><th>V<sub>max</sub> (&mu;M/min)</th><th>K<sub>m</sub> (&mu;M)</th><th>Lineweaver&ndash;Burk appearance</th></tr>
<tr><td>No inhibitor</td><td class="n">100</td><td class="n">25</td><td>reference line</td></tr>
<tr><td>Inhibitor 1</td><td class="n">100</td><td class="n">75</td><td>same y-intercept</td></tr>
<tr><td>Inhibitor 2</td><td class="n">50</td><td class="n">25</td><td>same x-intercept</td></tr>
<tr><td>Inhibitor 3</td><td class="n">50</td><td class="n">12.5</td><td>parallel to reference</td></tr></table>
<p class="cap"><b>Table 1</b> Kinetic parameters with each inhibitor.</p>
<p>A separate enzyme, F, catalyzes the committed step of the same pathway. A plot of velocity against [S] for enzyme F is sigmoidal rather than hyperbolic, and the pathway's end product decreases F's activity without competing for the active site.</p>`,

bb_endo:`<div class="ttl">Passage 5 (Questions 1&ndash;5)</div>
<p>The hypothalamic&ndash;pituitary&ndash;thyroid axis regulates basal metabolic rate through a negative feedback loop with three tiers. The hypothalamus secretes thyrotropin-releasing hormone (TRH) into the hypophyseal portal circulation; TRH stimulates the anterior pituitary to release thyroid-stimulating hormone (TSH); TSH acts on receptors on thyroid follicular cells to drive synthesis and release of thyroxine (T<sub>4</sub>) and triiodothyronine (T<sub>3</sub>). Circulating thyroid hormone inhibits release at both upstream levels.</p>
<p>Because the loop is closed, the <i>pair</i> of measurements is diagnostic in a way that neither value is alone. A failure of the gland itself releases the pituitary from inhibition and TSH rises; a failure upstream leaves TSH inappropriately low despite low hormone. Reading the two together therefore localizes the lesion.</p>
<p>Thyroid hormone is unusual among amino-acid derivatives in being lipophilic. It circulates bound largely to thyroxine-binding globulin, crosses the plasma membrane, and binds nuclear receptors that alter transcription &mdash; giving it a slow onset and a long duration of action. TSH, a glycoprotein, acts at a cell-surface receptor through a G-protein cascade.</p>
<p>Four patients presented to an endocrinology clinic with symptoms of altered metabolic rate. Serum values were obtained before any treatment was begun.</p>
<table><tr><th>Patient</th><th>TSH</th><th>Free T<sub>4</sub></th><th>Presentation</th></tr>
<tr><td>W</td><td class="n">high</td><td class="n">low</td><td>cold intolerance, weight gain</td></tr>
<tr><td>X</td><td class="n">low</td><td class="n">high</td><td>heat intolerance, weight loss</td></tr>
<tr><td>Y</td><td class="n">low</td><td class="n">low</td><td>fatigue, low blood pressure</td></tr>
<tr><td>Z</td><td class="n">high</td><td class="n">high</td><td>heat intolerance, tremor</td></tr></table>
<p class="cap"><b>Table 1</b> Serum thyroid values at presentation.</p>
<p>Patient X was later found to have circulating antibodies that bind and activate the TSH receptor on thyroid follicular cells.</p>`,

bb_neuro:`<div class="ttl">Passage 6 (Questions 1&ndash;5)</div>
<p>The resting membrane potential of a neuron arises from two conditions acting together: unequal ion distribution across the plasma membrane, maintained at metabolic cost by the Na<sup>+</sup>/K<sup>+</sup>-ATPase, and selective permeability of the membrane to those ions. For any single ion, the equilibrium potential is the voltage at which the electrical force exactly opposes the concentration gradient, so that no net flux occurs.</p>
<p>The membrane potential at any instant lies nearest the equilibrium potential of whichever ion the membrane is most permeable to at that moment. At rest the membrane is far more permeable to K<sup>+</sup> than to Na<sup>+</sup>, and the resting potential accordingly sits close to E<sub>K</sub>, though not at it, because a small standing Na<sup>+</sup> permeability pulls it slightly positive. Changes in permeability, rather than changes in ion concentration, produce the rapid voltage changes of the action potential.</p>
<table><tr><th>Ion</th><th>Intracellular (mM)</th><th>Extracellular (mM)</th><th>Equilibrium potential</th></tr>
<tr><td>K<sup>+</sup></td><td class="n">140</td><td class="n">5</td><td class="n">&minus;90 mV</td></tr>
<tr><td>Na<sup>+</sup></td><td class="n">15</td><td class="n">145</td><td class="n">+60 mV</td></tr>
<tr><td>Cl<sup>&minus;</sup></td><td class="n">10</td><td class="n">110</td><td class="n">&minus;65 mV</td></tr>
<tr><td>Ca<sup>2+</sup></td><td class="n">0.0001</td><td class="n">2</td><td class="n">+125 mV</td></tr></table>
<p class="cap"><b>Table 1</b> Ion concentrations and equilibrium potentials for a representative mammalian neuron. Resting potential is &minus;70 mV.</p>
<p>Investigators applied a toxin that selectively and reversibly blocks voltage-gated Na<sup>+</sup> channels without affecting K<sup>+</sup> channels, leak channels, or the Na<sup>+</sup>/K<sup>+</sup>-ATPase. Recordings were made from the soma before and 10 min after application, with the extracellular solution otherwise unchanged.</p>`,

bb_genetics:`<div class="ttl">Passage 7 (Questions 1&ndash;5)</div>
<p>In bacteria, genes whose products act in a single metabolic pathway are frequently clustered and transcribed together from one promoter as a polycistronic message. This arrangement allows a single regulatory event to control an entire pathway, and it is the basis of the operon.</p>
<p>A researcher studies an operon encoding three enzymes for lactose catabolism. Transcription is controlled by two independent systems acting on the same promoter region. A repressor protein binds the operator in the absence of lactose and blocks transcription; when lactose is present, an inducer derived from it binds the repressor and causes release from the operator. Separately, an activator protein responds to low glucose by binding upstream of the promoter and raising transcription substantially. When glucose is abundant the activator is inactive and transcription remains low even if lactose is present &mdash; a phenomenon termed catabolite repression.</p>
<p>Because the two systems are independent, a mutant may fail at one, the other, or both, and the pattern of &beta;-galactosidase activity across conditions distinguishes these cases. Four strains were constructed and enzyme activity was measured under each condition after 90 min of growth.</p>
<table><tr><th>Strain</th><th>No lactose</th><th>Lactose present</th><th>Lactose + glucose</th></tr>
<tr><td>Wild type</td><td class="n">low</td><td class="n">high</td><td class="n">low</td></tr>
<tr><td>Mutant 1</td><td class="n">high</td><td class="n">high</td><td class="n">low</td></tr>
<tr><td>Mutant 2</td><td class="n">low</td><td class="n">low</td><td class="n">low</td></tr>
<tr><td>Mutant 3</td><td class="n">high</td><td class="n">high</td><td class="n">high</td></tr></table>
<p class="cap"><b>Table 1</b> &beta;-galactosidase activity by strain and condition.</p>`,

cp_acid:`<div class="ttl">Passage 8 (Questions 1&ndash;5)</div>
<p>A buffer resists change in pH when small amounts of strong acid or base are added, because it contains appreciable quantities of both a weak acid and its conjugate base. Added H<sup>+</sup> is consumed by the base; added OH<sup>&minus;</sup> is consumed by the acid. The pH of such a solution is described by the Henderson&ndash;Hasselbalch relation, pH = pK<sub>a</sub> + log([A<sup>&minus;</sup>]/[HA]).</p>
<p>Two factors govern how much acid or base a buffer can absorb. The first is total concentration: a more concentrated buffer holds more of both species and absorbs more before either is exhausted. The second is the ratio of the two forms. Because the log term changes slowly when the ratio is near unity and rapidly when it is extreme, capacity is greatest when [A<sup>&minus;</sup>] and [HA] are equal &mdash; that is, when pH equals pK<sub>a</sub>.</p>
<p>Investigators prepared four buffer solutions, each 0.10 M in total conjugate pair, and titrated each with 0.10 M HCl at 25 &deg;C, recording pH after each addition. The starting pH of every solution was adjusted to 7.40 before titration began.</p>
<table><tr><th>Buffer</th><th>pK<sub>a</sub></th><th>&Delta;pH after 5 mL HCl</th><th>&Delta;pH after 15 mL HCl</th></tr>
<tr><td>Acetate</td><td class="n">4.76</td><td class="n">&minus;2.41</td><td class="n">&minus;3.18</td></tr>
<tr><td>Carbonate (HCO<sub>3</sub><sup>&minus;</sup>)</td><td class="n">6.10</td><td class="n">&minus;0.62</td><td class="n">&minus;1.44</td></tr>
<tr><td>Phosphate (H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>)</td><td class="n">7.21</td><td class="n">&minus;0.11</td><td class="n">&minus;0.35</td></tr>
<tr><td>Ammonium</td><td class="n">9.25</td><td class="n">&minus;1.87</td><td class="n">&minus;2.79</td></tr></table>
<p class="cap"><b>Table 1</b> pH change on addition of 0.10 M HCl, all solutions starting at pH 7.40.</p>
<p>In the closed titration vessel the carbonate system behaves as shown. In the body, however, the CO<sub>2</sub> formed when HCO<sub>3</sub><sup>&minus;</sup> is protonated is continuously removed by ventilation.</p>`,

cp_kin:`<div class="ttl">Passage 9 (Questions 1&ndash;5)</div>
<p>The rate law of a reaction cannot be deduced from its balanced equation. It must be determined experimentally, and it reflects the composition of the slowest elementary step in the mechanism &mdash; the rate-determining step &mdash; together with any equilibria that precede it. A mechanism is therefore judged in part by whether the rate law it predicts matches the one observed.</p>
<p>The gas-phase decomposition of compound X was studied at 298 K in a rigid vessel. The accepted mechanism is:</p>
<p style="font-family:var(--f);font-size:14px;margin-left:14px">
Step 1: X &rarr; Y + Z &nbsp;&nbsp;(slow)<br>
Step 2: Y + X &rarr; P &nbsp;&nbsp;(fast)</p>
<p>Initial rates were measured by monitoring the appearance of P over the first 5% of reaction, first without catalyst and then in the presence of a finely divided solid catalyst. Catalysts act by providing an alternative pathway of lower activation energy; because the same pathway is available in both directions, forward and reverse rates increase by the same factor and the position of equilibrium is unchanged.</p>
<p>For the overall reaction, &Delta;H = &minus;92 kJ/mol and &Delta;S = &minus;198 J/(mol&middot;K). Spontaneity is governed by &Delta;G = &Delta;H &minus; T&Delta;S, so a reaction with both terms negative is favored at low temperature and disfavored at high temperature.</p>
<table><tr><th>Trial</th><th>[X]<sub>0</sub> (M)</th><th>Catalyst</th><th>Initial rate (M/s)</th></tr>
<tr><td>1</td><td class="n">0.10</td><td>none</td><td class="n">2.0 &times; 10<sup>&minus;4</sup></td></tr>
<tr><td>2</td><td class="n">0.20</td><td>none</td><td class="n">4.0 &times; 10<sup>&minus;4</sup></td></tr>
<tr><td>3</td><td class="n">0.40</td><td>none</td><td class="n">8.0 &times; 10<sup>&minus;4</sup></td></tr>
<tr><td>4</td><td class="n">0.10</td><td>present</td><td class="n">5.0 &times; 10<sup>&minus;2</sup></td></tr></table>
<p class="cap"><b>Table 1</b> Initial rate data for the decomposition of X at 298 K.</p>`,

cp_phys:`<div class="ttl">Passage 10 (Questions 1&ndash;6)</div>
<p>An investigator models the circulation with a fluid apparatus in order to examine two relationships that are frequently confused. The first is continuity: for an incompressible fluid in steady flow, the volume passing any cross-section per unit time is constant, so the product of cross-sectional area and velocity is the same everywhere along a tube. The second is Poiseuille's relation, which governs resistance rather than velocity and depends on the fourth power of the radius. A single change in geometry therefore affects velocity and resistance by different factors.</p>
<p>A reservoir feeds a horizontal tube that narrows partway along its length. Flow is steady and the fluid is treated as ideal except where noted. Pressure is measured by side-tapped manometers positioned in the wide and narrow segments. Bernoulli's principle applies along a streamline: where height is constant, an increase in velocity is accompanied by a decrease in pressure.</p>
<table><tr><th>Segment</th><th>Radius (mm)</th><th>Cross-sectional area (mm&sup2;)</th></tr>
<tr><td>Wide</td><td class="n">4.0</td><td class="n">50.3</td></tr>
<tr><td>Narrow</td><td class="n">2.0</td><td class="n">12.6</td></tr></table>
<p class="cap"><b>Table 1</b> Tube geometry. Fluid density is 1.0 &times; 10<sup>3</sup> kg/m&sup3;.</p>
<p>The electrical analogue is examined separately, in which pressure corresponds to voltage, volumetric flow to current, and vascular resistance to electrical resistance. Two resistors of 6 &Omega; and 3 &Omega; are available together with a 12 V source. In the systemic circulation the organ beds are arranged in parallel: each receives blood at a common arterial pressure and drains to a common venous pressure, so that conductances rather than resistances add.</p>`,

ps_social:`<div class="ttl">Passage 11 (Questions 1&ndash;6)</div>
<p>Whether a bystander intervenes in an ambiguous situation has been shown to depend both on how many others are present and on how the bystander explains the victim's predicament. Two literatures bear on this. The first holds that the presence of other potential helpers reduces any individual's felt obligation to act. The second holds that helping depends on attributions of cause: when a person's difficulty is judged to arise from internal and controllable factors, observers report less sympathy and offer less assistance than when the cause is judged external or uncontrollable.</p>
<p>Researchers staged a scenario in a university corridor in which a confederate dropped a folder of papers. Naive participants passed alone or in groups of two or five; group composition was determined by natural corridor traffic, and only trials in which group members were strangers to one another were retained. In a second, orthogonal manipulation, the confederate either wore an arm sling or carried a skateboard, the latter implying that the difficulty was self-imposed. Assignment to sling or skateboard condition was random across trials.</p>
<p>Two observers, blind to hypothesis, recorded independently whether the participant offered help within 20 seconds; agreement exceeded 95%. After the encounter, participants completed a scale rating how responsible the confederate was for their own predicament.</p>
<table><tr><th>Condition</th><th>Alone<br>(% helping)</th><th>Group of 2<br>(% helping)</th><th>Group of 5<br>(% helping)</th></tr>
<tr><td>Sling</td><td class="n">86</td><td class="n">62</td><td class="n">31</td></tr>
<tr><td>Skateboard</td><td class="n">54</td><td class="n">35</td><td class="n">14</td></tr></table>
<p class="cap"><b>Table 1</b> Percentage of participants offering help within 20 s.</p>
<p>Participants in the skateboard condition rated the confederate as significantly more responsible for the mishap than those in the sling condition, and responsibility ratings correlated negatively with helping across all conditions.</p>`,

ps_learn:`<div class="ttl">Passage 12 (Questions 1&ndash;5)</div>
<p>Operant conditioning describes learning in which the consequences of a behavior alter its future frequency. The schedule on which reinforcement is delivered shapes both the rate of responding during acquisition and the persistence of responding once reinforcement stops. Schedules are classified along two dimensions: whether reinforcement depends on the number of responses emitted or on the passage of time, and whether the requirement is constant or varies unpredictably around an average.</p>
<p>Rats were trained in an operant chamber in which a lever press could deliver a food pellet. Animals were food-deprived to 85% of free-feeding weight and matched across groups for baseline weight and activity. Four groups received different reinforcement schedules during a 10-day acquisition phase, with one 60-minute session per day.</p>
<p>On day 11 reinforcement was discontinued entirely. Resistance to extinction was recorded as the number of presses emitted before responding fell below 10% of the day-10 baseline rate.</p>
<table><tr><th>Group</th><th>Schedule</th><th>Presses/hour<br>(day 10)</th><th>Presses to<br>extinction</th></tr>
<tr><td>I</td><td>Every press reinforced</td><td class="n">220</td><td class="n">85</td></tr>
<tr><td>II</td><td>Every 10th press</td><td class="n">610</td><td class="n">340</td></tr>
<tr><td>III</td><td>First press after 60 s</td><td class="n">190</td><td class="n">210</td></tr>
<tr><td>IV</td><td>Average of every 10th press, varied</td><td class="n">580</td><td class="n">790</td></tr></table>
<p class="cap"><b>Table 1</b> Response rates and resistance to extinction by schedule.</p>
<p>In a separate phase conducted with Group I after extinction was complete, a tone was sounded for 5 s before each pellet delivery. After 40 pairings, the tone alone elicited approach to the food tray.</p>`,

ps_disorders:`<div class="ttl">Passage 13 (Questions 1&ndash;5)</div>
<p>Major depressive disorder is treated with pharmacotherapy, with structured psychotherapy, or with both. Selective serotonin reuptake inhibitors act by blocking the presynaptic transporter that clears serotonin from the synaptic cleft, raising its concentration there; therapeutic benefit typically requires several weeks, which is generally attributed to downstream receptor adaptation rather than to the immediate rise in synaptic serotonin. Cognitive behavioral therapy targets patterns of thought and behavior directly and does not act on monoamine transmission.</p>
<p>Investigators examined treatment response in 240 patients meeting criteria for major depressive disorder. Patients were randomized to an SSRI, to CBT, or to both, and were stratified at randomization by baseline severity. Symptom severity was measured at baseline and at 12 weeks using a standardized clinician-rated scale on which higher scores indicate greater severity. Raters were blind to treatment assignment. Response was defined in advance as a 50% or greater reduction from baseline.</p>
<table><tr><th>Group</th><th>n</th><th>Baseline</th><th>12 weeks</th><th>Response rate</th></tr>
<tr><td>SSRI alone</td><td class="n">80</td><td class="n">28.4</td><td class="n">18.1</td><td class="n">46%</td></tr>
<tr><td>CBT alone</td><td class="n">80</td><td class="n">28.1</td><td class="n">18.8</td><td class="n">44%</td></tr>
<tr><td>Combined</td><td class="n">80</td><td class="n">28.6</td><td class="n">14.2</td><td class="n">68%</td></tr></table>
<p class="cap"><b>Table 1</b> Symptom scores and response rates at 12 weeks.</p>
<p>A subset of patients carried a polymorphism in the promoter region of the serotonin transporter gene. Among carriers, SSRI response was markedly lower than in non-carriers, while CBT response did not differ by genotype.</p>`

};

/* apply: replace each set's passage, leaving questions untouched */
SETS.forEach(s => { if (PASSAGES_V2[s.id]) s.passage = PASSAGES_V2[s.id]; });
