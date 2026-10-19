/* AAMC-format passage sets. Each: section, topic, passage HTML, questions.
   New batches append here. sheet = MileDown page for the "Review sheet" button. */
const SETS = [

{id:"bb_renal", sec:"B/B", topic:"Renal — concentrating mechanism", sheet:37,
 label:"Biological and Biochemical Foundations of Living Systems",
 passage:`<div class="ttl">Passage 1 (Questions 1&ndash;6)</div>
<p>The mammalian kidney concentrates urine using an osmotic gradient established in the medullary interstitium. To dissect the contributions of individual transport steps, investigators administered three compounds to separate groups of rats and measured urine output, urine osmolarity, and the osmolarity of the deep medullary interstitium at steady state.</p>
<p><b>Compound A</b> inhibits the Na<sup>+</sup>/K<sup>+</sup>/2Cl<sup>&minus;</sup> cotransporter on the apical membrane of the thick ascending limb. <b>Compound B</b> is a competitive antagonist at the V2 receptor, through which antidiuretic hormone acts on the collecting duct. <b>Compound C</b> blocks the epithelial sodium channel (ENaC) on collecting-duct principal cells.</p>
<p>All animals were water-replete with free access to food. Urine volume is expressed relative to untreated control. Plasma osmolarity was approximately 300 mOsm/L in every group.</p>
<table><tr><th>Group</th><th>Urine volume<br>(&times; control)</th><th>Urine osmolarity<br>(mOsm/L)</th><th>Deep medullary<br>interstitium (mOsm/L)</th></tr>
<tr><td>Control</td><td class="n">1.0</td><td class="n">1200</td><td class="n">1200</td></tr>
<tr><td>Compound A</td><td class="n">8.0</td><td class="n">150</td><td class="n">400</td></tr>
<tr><td>Compound B</td><td class="n">6.0</td><td class="n">80</td><td class="n">1150</td></tr>
<tr><td>Compound C</td><td class="n">2.5</td><td class="n">500</td><td class="n">1100</td></tr></table>
<p class="cap"><b>Table 1</b> Steady-state renal parameters following each compound.</p>`,
 qs:[
 {q:"The transporter inhibited by Compound A is best classified as:",
  ch:["a secondary active transporter, because it is driven by an ion gradient rather than by ATP hydrolysis.","a passive uniporter, because all four species move down their concentration gradients.","a primary active transporter, because it establishes the medullary gradient.","a ligand-gated channel, because its activity is regulated by circulating hormone."],a:0,
  e:"<strong>NKCC2 hydrolyzes no ATP.</strong> It rides the inward Na<sup>+</sup> gradient maintained by the basolateral Na<sup>+</sup>/K<sup>+</sup>-ATPase &mdash; the definition of secondary active transport. Choice A is the trap: the transporter is <em>necessary</em> for the gradient, which makes it feel primary, but classification depends on the immediate energy source. NKCC2 is the doorway; the ATPase is the engine."},
 {q:"Why does Compound A reduce deep medullary osmolarity while Compound B leaves it nearly intact?",
  ch:["Compound B destroys the gradient more slowly and steady state was not reached.","Compound A blocks generation of the gradient; Compound B blocks only its utilization.","Compound A acts on the descending limb, which builds the gradient directly.","Compound A increases medullary blood flow while Compound B decreases it."],a:1,
  e:"<strong>Two separable steps: build, then spend.</strong> The thick ascending limb pumps salt into the interstitium &mdash; generation &mdash; and A blocks it, so the interstitium falls to 400. ADH at V2 inserts aquaporins so the collecting duct can draw water out along the gradient &mdash; utilization &mdash; and B blocks only that, leaving 1150. Choice C fails: the descending limb pumps nothing, it equilibrates passively."},
 {q:"Compound B produces more dilute urine than Compound A despite an intact medullary gradient. This is because with V2 blockade:",
  ch:["urea recycling into the medulla is reversed.","sodium reabsorption ceases entirely in the distal nephron.","glomerular filtration rate rises sharply, overwhelming reabsorptive capacity.","the loop of Henle continues to dilute the filtrate while the collecting duct cannot reabsorb water."],a:3,
  e:"<strong>Salt keeps leaving; water is trapped.</strong> Filtrate exits the ascending limb near 100 mOsm/L and the distal nephron keeps reabsorbing Na<sup>+</sup>, but without aquaporins water cannot follow &mdash; so it grows <em>more</em> dilute, reaching 80. Under A the diluting segment itself is disabled, so filtrate was never diluted that far; it exits at 150."},
 {q:"Compound A would be expected to impair the ability to produce:",
  ch:["neither, because distal compensation is complete.","dilute urine only.","both concentrated and dilute urine.","concentrated urine only."],a:2,
  e:"<strong>The ascending limb does both jobs.</strong> It pumps salt into the interstitium (enabling concentration downstream) <em>and</em> is the diluting segment (salt out, water stays). Block NKCC2 and you lose both directions. This dual role is why loop agents are the most powerful diuretic class."},
 {q:"Which compound is most likely to raise plasma K<sup>+</sup>?",
  ch:["Compound B","Compound A","All three equally","Compound C"],a:3,
  e:"<strong>ENaC blockade is potassium-sparing.</strong> Na<sup>+</sup> entry through ENaC depolarizes the apical membrane of principal cells, creating the driving force for K<sup>+</sup> secretion. Block ENaC and K<sup>+</sup> is retained &mdash; the mechanism of amiloride. Compound A does the opposite: more Na<sup>+</sup> delivered distally drives <em>more</em> K<sup>+</sup> secretion, hence loop-diuretic hypokalemia."},
 {q:"A fourth compound makes the thick ascending limb freely water-permeable without affecting NKCC2. The effect on deep medullary osmolarity would be:",
  ch:["no change, since NKCC2 activity is preserved.","a marked decrease, since water accompanying the reabsorbed salt dilutes the interstitium.","a marked increase, since solute and water enter together.","an increase confined to the outer medulla."],a:1,
  e:"<strong>Water impermeability is the precondition for the gradient.</strong> Salt is pumped out to make the interstitium hyperosmotic; if water follows, the interstitium gets both and dilutes itself back toward isotonic. Choice C is the trap &mdash; the pump still runs, but its output is neutralized on arrival."}
]},

{id:"bb_cv", sec:"B/B", topic:"Cardiovascular — pressure, flow, resistance", sheet:34,
 label:"Biological and Biochemical Foundations of Living Systems",
 passage:`<div class="ttl">Passage 2 (Questions 1&ndash;6)</div>
<p>Blood flow through a vascular bed is governed by the pressure gradient across it and the resistance it offers. For steady laminar flow through a rigid cylindrical vessel, resistance varies inversely with the fourth power of the radius. In the intact circulation, total peripheral resistance (TPR) is the summed resistance of all systemic beds arranged largely in parallel.</p>
<p>Investigators measured cardiac output (CO), mean arterial pressure (MAP), and heart rate in eight healthy volunteers at rest and during graded cycling. Skeletal muscle arterioles dilate markedly during exercise in response to local metabolites, while splanchnic and renal beds constrict under sympathetic drive.</p>
<table><tr><th>Condition</th><th>CO<br>(L/min)</th><th>MAP<br>(mmHg)</th><th>Heart rate<br>(beats/min)</th></tr>
<tr><td>Rest</td><td class="n">5.0</td><td class="n">93</td><td class="n">64</td></tr>
<tr><td>Light exercise</td><td class="n">10.0</td><td class="n">100</td><td class="n">104</td></tr>
<tr><td>Heavy exercise</td><td class="n">20.0</td><td class="n">110</td><td class="n">175</td></tr></table>
<p class="cap"><b>Table 1</b> Hemodynamic values at rest and during exercise. MAP is measured at the aortic root; right atrial pressure was near 0 mmHg throughout.</p>
<p>In a second experiment, a segment of artery was partially occluded so that its internal radius fell to one half of baseline, with the driving pressure held constant.</p>`,
 qs:[
 {q:"Using the data in Table 1, total peripheral resistance during heavy exercise, relative to rest, is approximately:",
  ch:["decreased to about one third.","increased about twofold.","unchanged.","decreased to about one tenth."],a:0,
  e:"<strong>Resistance = &Delta;P / flow.</strong> At rest, 93/5.0 &asymp; 18.6 units. At heavy exercise, 110/20.0 = 5.5 units. That is roughly 5.5/18.6 &asymp; 0.30, about one third. The trap is choice A &mdash; MAP <em>rose</em>, which feels like more resistance, but flow quadrupled while pressure rose only 18%, so resistance must have fallen sharply. Always compute the ratio; never infer resistance from pressure alone."},
 {q:"Halving the radius of the occluded artery, with driving pressure constant, decreases flow through it by a factor of:",
  ch:["2","4","8","16"],a:3,
  e:"<strong>Poiseuille: resistance &prop; 1/r&#8308;.</strong> Halving r multiplies resistance by 2&#8308; = 16, and with &Delta;P fixed, flow = &Delta;P/R falls to 1/16. Choice B is the common error &mdash; that would be cross-sectional area (&prop; r&sup2;), which governs velocity in the continuity equation, not resistance."},
 {q:"Despite the large fall in TPR during exercise, MAP rises rather than falls. The best explanation is that:",
  ch:["blood viscosity rises enough to offset the change in radius.","the aorta becomes more rigid, which lowers resistance further.","cardiac output increases proportionally more than resistance decreases.","venous compliance increases, raising the pressure gradient."],a:2,
  e:"<strong>MAP = CO &times; TPR.</strong> CO rose fourfold while TPR fell to about one third, so the product rises modestly &mdash; matching the observed 93 &rarr; 110 mmHg. This is the central integrative relationship in cardiovascular physiology, and AAMC tests it as a two-variable product rather than as either term alone."},
 {q:"Muscle arterioles dilate while splanchnic arterioles constrict. Because these beds are in parallel, the effect on total conductance is that:",
  ch:["flow redistributes but total conductance cannot change.","total conductance is the sum of the individual conductances, so the large muscle dilation dominates.","conductance is unchanged because the two effects are equal and opposite by definition.","total resistance is the sum of the individual resistances, so the constriction dominates."],a:1,
  e:"<strong>Parallel beds add conductances, not resistances.</strong> 1/R<sub>total</sub> = &Sigma;(1/R<sub>i</sub>). Adding a very low-resistance pathway (dilated muscle) raises total conductance steeply, and the splanchnic constriction removes far less than the muscle bed adds. Choice B applies to series, which is the standard trap &mdash; the systemic circulation is overwhelmingly parallel."},
 {q:"Stroke volume during heavy exercise is closest to:",
  ch:["114 mL","143 mL","86 mL","175 mL"],a:0,
  e:"<strong>SV = CO / HR.</strong> 20 L/min &divide; 175 beats/min = 0.114 L = 114 mL. Choice A is rest-like; choice D is the heart rate reused as a volume, a deliberate distractor for candidates grabbing the nearest number under time pressure."},
 {q:"If blood were replaced with a fluid of half the viscosity, all else equal, flow through the occluded segment would:",
  ch:["halve","quadruple","remain unchanged","double"],a:3,
  e:"<strong>Resistance is directly proportional to viscosity</strong> in Poiseuille's relation (R = 8&eta;L/&pi;r&#8308;). Halving &eta; halves R and therefore doubles flow at constant &Delta;P. This is the physiological basis for why anemia increases cardiac output &mdash; lower hematocrit lowers viscosity and resistance."}
]},

{id:"bb_resp", sec:"B/B", topic:"Respiratory — gas exchange and O₂ transport", sheet:33,
 label:"Biological and Biochemical Foundations of Living Systems",
 passage:`<div class="ttl">Passage 3 (Questions 1&ndash;5)</div>
<p>Hemoglobin binds O<sub>2</sub> cooperatively, producing a sigmoidal saturation curve. The position of that curve shifts with local conditions: rising CO<sub>2</sub>, rising H<sup>+</sup>, rising temperature, and rising 2,3-bisphosphoglycerate (2,3-BPG) all reduce hemoglobin's affinity for O<sub>2</sub>.</p>
<p>Researchers followed nine lowland volunteers who ascended to 4,300 m and remained for three weeks. Arterial samples were drawn at sea level, on day 1 at altitude, and on day 21.</p>
<table><tr><th>Time point</th><th>P<sub>a</sub>O<sub>2</sub><br>(mmHg)</th><th>P<sub>a</sub>CO<sub>2</sub><br>(mmHg)</th><th>Arterial pH</th><th>P<sub>50</sub><br>(mmHg)</th><th>Hematocrit<br>(%)</th></tr>
<tr><td>Sea level</td><td class="n">95</td><td class="n">40</td><td class="n">7.40</td><td class="n">27</td><td class="n">45</td></tr>
<tr><td>Altitude, day 1</td><td class="n">45</td><td class="n">30</td><td class="n">7.48</td><td class="n">26</td><td class="n">45</td></tr>
<tr><td>Altitude, day 21</td><td class="n">48</td><td class="n">28</td><td class="n">7.42</td><td class="n">30</td><td class="n">56</td></tr></table>
<p class="cap"><b>Table 1</b> Arterial blood values during acclimatization. P<sub>50</sub> is the partial pressure at which hemoglobin is 50% saturated.</p>`,
 qs:[
 {q:"The fall in P<sub>a</sub>CO<sub>2</sub> on day 1 is best explained by:",
  ch:["increased CO₂ solubility in cold air at altitude.","reduced metabolic rate at altitude, lowering CO₂ production.","hypoxia-driven hyperventilation, which blows off CO₂ faster than it is produced.","impaired diffusion of CO₂ across the alveolar membrane."],a:2,
  e:"<strong>Low P<sub>a</sub>O<sub>2</sub> stimulates peripheral chemoreceptors</strong> in the carotid and aortic bodies, driving hyperventilation. Ventilation clears CO<sub>2</sub> far more effectively than it loads O<sub>2</sub> at altitude, so P<sub>a</sub>CO<sub>2</sub> falls and pH rises &mdash; the respiratory alkalosis visible in the day-1 pH of 7.48. Choice D fails because CO<sub>2</sub> is roughly 20 times more diffusible than O<sub>2</sub>."},
 {q:"The change in P<sub>50</sub> from day 1 to day 21 indicates that hemoglobin's affinity for O<sub>2</sub> has:",
  ch:["decreased, favoring unloading in the tissues.","increased, favoring loading in the lung.","increased, because hematocrit rose.","remained constant, since pH returned toward normal."],a:0,
  e:"<strong>Higher P<sub>50</sub> means lower affinity.</strong> P<sub>50</sub> is the pressure needed to reach half-saturation, so a rise from 26 to 30 mmHg means more pressure is required &mdash; a rightward shift favoring unloading at the tissues. The relationship is inverse and is the single most-tested feature of the curve; students who read P<sub>50</sub> as &lsquo;affinity&rsquo; rather than its reciprocal lose this question."},
 {q:"The most likely cause of the day-21 rightward shift is:",
  ch:["the rise in hematocrit.","a rise in 2,3-BPG within erythrocytes.","a fall in core body temperature.","the persisting respiratory alkalosis."],a:1,
  e:"<strong>2,3-BPG is the chronic adaptation.</strong> It rises over days at altitude and binds the T (deoxy) state, stabilizing it and shifting the curve right. Choice B pushes the wrong way &mdash; alkalosis shifts <em>left</em> (Bohr effect), which is why day 1 showed a slightly <em>lower</em> P<sub>50</sub> of 26. Hematocrit changes carrying capacity, not affinity."},
 {q:"The rise in hematocrit by day 21 is driven principally by:",
  ch:["splenic contraction releasing sequestered erythrocytes.","increased iron absorption in the duodenum.","erythropoietin released from the renal cortex in response to hypoxia.","reduced plasma volume from dehydration alone."],a:2,
  e:"<strong>EPO from renal interstitial fibroblasts</strong> is the classic hypoxia-sensing response, acting on marrow erythroid progenitors over days to weeks. The kidney is the body's principal oxygen sensor because it can compare O<sub>2</sub> delivery against a nearly fixed filtration workload. Splenic contraction is acute and minor in humans."},
 {q:"Compared with sea level, the day-21 arterial O<sub>2</sub> <i>content</i> is most likely:",
  ch:["unchanged, because content does not depend on hemoglobin.","much lower, because P<sub>a</sub>O<sub>2</sub> is only half of sea-level values.","higher than sea level, because P<sub>50</sub> increased.","approximately restored, because increased hemoglobin offsets lower saturation."],a:3,
  e:"<strong>Content, not partial pressure.</strong> O<sub>2</sub> content &asymp; 1.34 &times; [Hb] &times; SaO<sub>2</sub> + dissolved. Hematocrit rose from 45% to 56%, roughly a 24% increase in carrying capacity, which largely compensates for the lower saturation at P<sub>a</sub>O<sub>2</sub> 48. Conflating P<sub>a</sub>O<sub>2</sub> with content is the most common error on altitude passages &mdash; the sigmoid means saturation stays high even at markedly reduced pressures."}
]},

{id:"ps_social", sec:"P/S", topic:"Social psychology — helping and attribution", sheet:59,
 label:"Psychological, Social, and Biological Foundations of Behavior",
 passage:`<div class="ttl">Passage 4 (Questions 1&ndash;6)</div>
<p>Researchers staged a scenario in a university corridor in which a confederate dropped a folder of papers. Naive participants passed alone or in groups of two or five. In a second manipulation, the confederate either wore an arm sling (a visible, uncontrollable cause of difficulty) or carried a skateboard (implying the difficulty was self-imposed).</p>
<p>Observers recorded whether the participant offered help within 20 seconds. After the encounter, participants completed a scale rating how responsible the confederate was for their own predicament.</p>
<table><tr><th>Condition</th><th>Alone<br>(% helping)</th><th>Group of 2<br>(% helping)</th><th>Group of 5<br>(% helping)</th></tr>
<tr><td>Sling</td><td class="n">86</td><td class="n">62</td><td class="n">31</td></tr>
<tr><td>Skateboard</td><td class="n">54</td><td class="n">35</td><td class="n">14</td></tr></table>
<p class="cap"><b>Table 1</b> Percentage of participants offering help within 20 s.</p>
<p>Participants in the skateboard condition rated the confederate as significantly more responsible for the mishap than those in the sling condition, and self-reported responsibility ratings correlated negatively with helping across all conditions.</p>`,
 qs:[
 {q:"The decline in helping as group size increases is best explained by:",
  ch:["diffusion of responsibility","group polarization","deindividuation","social loafing"],a:0,
  e:"<strong>Diffusion of responsibility</strong> is specifically about a <em>bystander</em> feeling less personally obligated as others who could act are present. Social loafing (choice B) is the seductive wrong answer: it concerns reduced individual effort on a <em>shared task with a common goal</em>, not a decision about whether to intervene at all. Deindividuation requires loss of self-awareness, typically with anonymity and arousal."},
 {q:"The difference between the sling and skateboard conditions is best understood through:",
  ch:["the mere exposure effect — familiarity increases liking.","attribution theory — perceived controllability of the cause changes willingness to help.","social facilitation — the presence of others improves performance.","cognitive dissonance — participants adjust attitudes to match their behavior."],a:1,
  e:"<strong>Attributions of controllability drive helping.</strong> Weiner's model holds that when a person's plight is attributed to internal, controllable causes, observers feel less sympathy and more blame, and help less. The passage supplies the mediating evidence directly: responsibility ratings were higher in the skateboard condition and correlated negatively with helping."},
 {q:"An observer who concludes the skateboarder is &ldquo;careless&rdquo; rather than considering that the corridor was crowded is demonstrating:",
  ch:["self-serving bias","the actor–observer bias applied to the self","the fundamental attribution error","the just-world hypothesis"],a:2,
  e:"<strong>Overweighting disposition and underweighting situation, when judging another person</strong> is the fundamental attribution error. Choice B is close but inverted &mdash; actor&ndash;observer bias contrasts how we explain <em>our own</em> behavior (situational) with others' (dispositional), and the stem concerns only the judgment of another. The just-world hypothesis would require a belief that the person deserved the outcome."},
 {q:"Which additional finding would most strengthen the diffusion-of-responsibility interpretation over an alternative based on ambiguity of the situation?",
  ch:["Participants report being unsure whether help was wanted.","Helping declines with group size even when the confederate explicitly asks one named person for help.","Helping rates are equal when participants are tested in complete privacy.","Helping declines with group size only when other bystanders appear unconcerned."],a:3,
  e:"<strong>This is a discrimination question, and the logic runs backwards from the wording.</strong> If naming one person <em>eliminated</em> the decline, that would support diffusion &mdash; but choice A says the decline persists even then, which argues against it. Choice B is the answer that fits: dependence on other bystanders' visible reactions is pluralistic ignorance operating alongside diffusion, both of which require the presence of others, whereas pure situational ambiguity would not scale with group size."},
 {q:"The negative correlation between responsibility ratings and helping permits which conclusion?",
  ch:["The two variables are associated, but the direction of causation is not established by correlation alone.","No relationship exists, because correlation cannot detect one.","Higher perceived responsibility causes reduced helping.","Reduced helping causes participants to assign more responsibility."],a:0,
  e:"<strong>Correlation constrains but does not establish causation.</strong> The manipulation (sling vs skateboard) was experimental, so the condition&rarr;helping link is causal; but the <em>measured</em> responsibility rating is a correlational variable, and participants could plausibly have justified their non-helping after the fact &mdash; a dissonance-reduction account running in the opposite direction. AAMC reliably rewards this distinction between manipulated and measured variables."},
 {q:"If the experimenters wished to test whether the effect generalizes beyond a university corridor, the primary concern would be:",
  ch:["statistical conclusion validity","construct validity","external validity","internal validity"],a:2,
  e:"<strong>External validity is generalizability</strong> across populations, settings, and times. Internal validity asks whether the manipulation caused the outcome <em>within</em> this study, which the random assignment already supports. Construct validity would ask whether &ldquo;helping within 20 s&rdquo; genuinely captures prosocial behavior &mdash; a real concern, but not the one about generalizing beyond the corridor."}
]},

{id:"ps_learn", sec:"P/S", topic:"Learning, memory, and conditioning", sheet:54,
 label:"Psychological, Social, and Biological Foundations of Behavior",
 passage:`<div class="ttl">Passage 5 (Questions 1&ndash;5)</div>
<p>Rats were trained in an operant chamber where a lever press delivered a food pellet. Four groups received different reinforcement schedules during a 10-day acquisition phase. On day 11 reinforcement was discontinued entirely, and the number of presses before responding fell below 10% of baseline was recorded as resistance to extinction.</p>
<table><tr><th>Group</th><th>Schedule</th><th>Presses/hour<br>(day 10)</th><th>Presses to<br>extinction</th></tr>
<tr><td>I</td><td>Every press reinforced</td><td class="n">220</td><td class="n">85</td></tr>
<tr><td>II</td><td>Every 10th press</td><td class="n">610</td><td class="n">340</td></tr>
<tr><td>III</td><td>First press after 60 s</td><td class="n">190</td><td class="n">210</td></tr>
<tr><td>IV</td><td>Average of every 10th press, varied</td><td class="n">580</td><td class="n">790</td></tr></table>
<p class="cap"><b>Table 1</b> Response rates and resistance to extinction by schedule.</p>
<p>In a separate phase, a tone was sounded for 5 s before each pellet delivery for Group I. After 40 pairings, the tone alone elicited approach to the food tray.</p>`,
 qs:[
 {q:"Group IV received which schedule of reinforcement?",
  ch:["Fixed interval","Fixed ratio","Variable interval","Variable ratio"],a:3,
  e:"<strong>Ratio schedules count responses; interval schedules count time.</strong> &ldquo;Average of every 10th press, varied&rdquo; counts presses with an unpredictable requirement &mdash; variable ratio. Group II is fixed ratio, Group III is fixed interval. The two-question test that always resolves these: is it responses or time, and is it fixed or unpredictable?"},
 {q:"The pattern in the final column is best summarized as:",
  ch:["resistance to extinction is independent of schedule.","partial reinforcement produces greater resistance to extinction than continuous reinforcement.","interval schedules always outperform ratio schedules.","continuous reinforcement produces the greatest resistance to extinction."],a:1,
  e:"<strong>The partial reinforcement extinction effect.</strong> Group I, reinforced every time, extinguished fastest at 85 presses; every partial schedule lasted longer, with variable ratio longest at 790. The mechanism is discriminability &mdash; under continuous reinforcement the shift to no reward is immediately obvious, while under variable schedules a run of unrewarded presses is indistinguishable from normal."},
 {q:"Group II's high response rate relative to Group III reflects that:",
  ch:["the rats in Group II were more food-deprived.","fixed schedules always produce higher rates than variable schedules.","interval schedules produce higher rates because timing is unpredictable.","ratio schedules tie reinforcement directly to the number of responses, so faster responding earns more reward."],a:3,
  e:"<strong>Ratio schedules reward speed; interval schedules do not.</strong> Under fixed ratio, pressing twice as fast doubles the reinforcement rate. Under fixed interval, the pellet becomes available on the clock regardless of effort, so extra pressing buys nothing &mdash; producing the characteristic scalloped pattern of a pause after reward and acceleration as the interval elapses."},
 {q:"In the tone phase, the tone functions as:",
  ch:["a conditioned stimulus","a primary reinforcer","an unconditioned stimulus","a discriminative stimulus for punishment"],a:0,
  e:"<strong>A neutral stimulus paired with an unconditioned stimulus becomes a conditioned stimulus.</strong> Food is the US, approach to the tray is the UR; after pairing, the tone alone elicits approach as a CR. Choice C is wrong because a primary reinforcer satisfies a biological need directly &mdash; the food, not the tone."},
 {q:"After the tone alone is presented repeatedly without food, approach behavior ceases. If, after a 48-hour rest with no exposure, the tone again elicits approach, this demonstrates:",
  ch:["reconditioning","spontaneous recovery","stimulus generalization","dishabituation"],a:1,
  e:"<strong>Spontaneous recovery is the return of an extinguished CR after a rest interval</strong> with no further pairings &mdash; evidence that extinction suppresses rather than erases the association. Dishabituation (choice A) is a non-associative phenomenon requiring a <em>novel intervening stimulus</em>; here nothing intervened but time. That contrast &mdash; time versus a new stimulus &mdash; is exactly what AAMC tests."}
]}

];
