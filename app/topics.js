/* 72 drillable topics mapped to MileDown review-sheet pages.
   mode "full" = no coursework / logged lapses → real question sets
   mode "spot" = coursework on transcript → verify, don't teach       */
const EXAM_DATE = "2026-09-12";
const SPRINT_DAYS = 4;   // overloaded front-load: 72 topics in 4 days

const SUBJECTS = [
 {key:"bio", short:"Bio", name:"Biology",              note:"No A&P on transcript — the largest hole. Written first.", sect:"B/B"},
 {key:"beh", short:"Beh", name:"Behavioral Sciences",  note:"Highest lapse deck and weakest section. Written first.",  sect:"P/S"},
 {key:"bch", short:"Bch", name:"Biochemistry",         note:"Two semesters plus lab — and still your logged lapse zones. Full sets.", sect:"B/B"},
 {key:"gc", short:"GC", name:"General Chemistry",    note:"Coursework is not MCAT-readiness. Full sets.", sect:"C/P"},
 {key:"oc", short:"OC", name:"Organic Chemistry",    note:"Coursework is not MCAT-readiness. Full sets.", sect:"C/P"},
 {key:"ph", short:"Ph", name:"Physics and Math",     note:"Formula-driven. Full sets, plus the equation appendix.", sect:"C/P"}
];

const TOPICS = [
 // ---- Biology (sheets 28–39) — FULL
 {id:"bio1", s:"bio", n:1,  t:"The Cell",                         p:28, mode:"hole"},
 {id:"bio2", s:"bio", n:2,  t:"Reproduction",                     p:29, mode:"hole"},
 {id:"bio3", s:"bio", n:3,  t:"Embryogenesis and Development",    p:30, mode:"hole"},
 {id:"bio4", s:"bio", n:4,  t:"The Nervous System",               p:31, mode:"hole"},
 {id:"bio5", s:"bio", n:5,  t:"The Endocrine System",             p:32, mode:"hole"},
 {id:"bio6", s:"bio", n:6,  t:"The Respiratory System",           p:33, mode:"hole"},
 {id:"bio7", s:"bio", n:7,  t:"The Cardiovascular System",        p:34, mode:"hole"},
 {id:"bio8", s:"bio", n:8,  t:"The Immune System",                p:35, mode:"hole"},
 {id:"bio9", s:"bio", n:9,  t:"The Digestive System",             p:36, mode:"hole"},
 {id:"bio10",s:"bio", n:10, t:"Kidney and Skin",                  p:37, mode:"hole", set:"renal"},
 {id:"bio11",s:"bio", n:11, t:"Musculoskeletal System",           p:38, mode:"hole"},
 {id:"bio12",s:"bio", n:12, t:"Genetics and Evolution",           p:39, mode:"hole"},

 // ---- Behavioral (52–63) — FULL
 {id:"beh1", s:"beh", n:1,  t:"Biology and Behavior",             p:52, mode:"hole"},
 {id:"beh2", s:"beh", n:2,  t:"Sensation and Perception",         p:53, mode:"hole", set:"ps_sp"},
 {id:"beh3", s:"beh", n:3,  t:"Learning and Memory",              p:54, mode:"hole"},
 {id:"beh4", s:"beh", n:4,  t:"Cognition, Consciousness, Language",p:55,mode:"hole"},
 {id:"beh5", s:"beh", n:5,  t:"Motivation, Emotion, and Stress",  p:56, mode:"hole"},
 {id:"beh6", s:"beh", n:6,  t:"Identity and Personality",         p:57, mode:"hole"},
 {id:"beh7", s:"beh", n:7,  t:"Psychological Disorders",          p:58, mode:"hole"},
 {id:"beh8", s:"beh", n:8,  t:"Social Processes and Attitudes",   p:59, mode:"hole"},
 {id:"beh9", s:"beh", n:9,  t:"Social Interaction",               p:60, mode:"hole"},
 {id:"beh10",s:"beh", n:10, t:"Social Thinking and Behavior",     p:61, mode:"hole"},
 {id:"beh11",s:"beh", n:11, t:"Social Structure and Demographics",p:62, mode:"hole"},
 {id:"beh12",s:"beh", n:12, t:"Social Stratification",            p:63, mode:"hole"},

 // ---- Biochemistry (40–51) — spot except the two logged lapses
 {id:"bch1", s:"bch", n:1,  t:"Amino Acids, Peptides, Proteins",  p:40, mode:"hole"},
 {id:"bch2", s:"bch", n:2,  t:"Enzymes",                          p:41, mode:"hole"},
 {id:"bch3", s:"bch", n:3,  t:"Non-Enzymatic Protein Function",   p:42, mode:"verify"},
 {id:"bch4", s:"bch", n:4,  t:"Carbohydrate Structure",           p:43, mode:"verify"},
 {id:"bch5", s:"bch", n:5,  t:"Lipid Structure and Function",     p:44, mode:"verify"},
 {id:"bch6", s:"bch", n:6,  t:"DNA and Biotechnology",            p:45, mode:"verify"},
 {id:"bch7", s:"bch", n:7,  t:"RNA and the Genetic Code",         p:46, mode:"verify"},
 {id:"bch8", s:"bch", n:8,  t:"Biological Membranes",             p:47, mode:"verify"},
 {id:"bch9", s:"bch", n:9,  t:"Carbohydrate Metabolism I",        p:48, mode:"verify"},
 {id:"bch10",s:"bch", n:10, t:"Carbohydrate Metabolism II",       p:49, mode:"verify"},
 {id:"bch11",s:"bch", n:11, t:"Lipid and Amino Acid Metabolism",  p:50, mode:"verify"},
 {id:"bch12",s:"bch", n:12, t:"Bioenergetics",                    p:51, mode:"verify"},

 // ---- General Chemistry (4–15) — spot
 {id:"gc1",  s:"gc",  n:1,  t:"Atomic Structure",                 p:4,  mode:"verify"},
 {id:"gc2",  s:"gc",  n:2,  t:"The Periodic Table",               p:5,  mode:"verify"},
 {id:"gc3",  s:"gc",  n:3,  t:"Bonding and Chemical Interactions",p:6,  mode:"verify"},
 {id:"gc4",  s:"gc",  n:4,  t:"Compounds and Stoichiometry",      p:7,  mode:"verify"},
 {id:"gc5",  s:"gc",  n:5,  t:"Chemical Kinetics",                p:8,  mode:"verify"},
 {id:"gc6",  s:"gc",  n:6,  t:"Equilibrium",                      p:9,  mode:"verify"},
 {id:"gc7",  s:"gc",  n:7,  t:"Thermochemistry",                  p:10, mode:"verify"},
 {id:"gc8",  s:"gc",  n:8,  t:"The Gas Phase",                    p:11, mode:"verify"},
 {id:"gc9",  s:"gc",  n:9,  t:"Solutions",                        p:12, mode:"verify"},
 {id:"gc10", s:"gc",  n:10, t:"Acids and Bases",                  p:13, mode:"verify"},
 {id:"gc11", s:"gc",  n:11, t:"Oxidation–Reduction Reactions",    p:14, mode:"verify"},
 {id:"gc12", s:"gc",  n:12, t:"Electrochemistry",                 p:15, mode:"verify"},

 // ---- Organic Chemistry (16–27) — spot
 {id:"oc1",  s:"oc",  n:1,  t:"Nomenclature",                     p:16, mode:"verify"},
 {id:"oc2",  s:"oc",  n:2,  t:"Isomers",                          p:17, mode:"verify"},
 {id:"oc3",  s:"oc",  n:3,  t:"Bonding",                          p:18, mode:"verify"},
 {id:"oc4",  s:"oc",  n:4,  t:"Analyzing Organic Reactions",      p:19, mode:"verify"},
 {id:"oc5",  s:"oc",  n:5,  t:"Alcohols",                         p:20, mode:"verify"},
 {id:"oc6",  s:"oc",  n:6,  t:"Aldehydes and Ketones I",          p:21, mode:"verify"},
 {id:"oc7",  s:"oc",  n:7,  t:"Aldehydes and Ketones II",         p:22, mode:"verify"},
 {id:"oc8",  s:"oc",  n:8,  t:"Carboxylic Acids",                 p:23, mode:"verify"},
 {id:"oc9",  s:"oc",  n:9,  t:"Carboxylic Acid Derivatives",      p:24, mode:"verify"},
 {id:"oc10", s:"oc",  n:10, t:"Nitrogen and Phosphorus Compounds",p:25, mode:"verify"},
 {id:"oc11", s:"oc",  n:11, t:"Spectroscopy",                     p:26, mode:"verify"},
 {id:"oc12", s:"oc",  n:12, t:"Separations and Purifications",    p:27, mode:"verify"},

 // ---- Physics and Math (64–75) — spot
 {id:"ph1",  s:"ph",  n:1,  t:"Kinematics and Dynamics",          p:64, mode:"verify"},
 {id:"ph2",  s:"ph",  n:2,  t:"Work and Energy",                  p:65, mode:"verify"},
 {id:"ph3",  s:"ph",  n:3,  t:"Thermodynamics",                   p:66, mode:"verify"},
 {id:"ph4",  s:"ph",  n:4,  t:"Fluids",                           p:67, mode:"verify"},
 {id:"ph5",  s:"ph",  n:5,  t:"Electrostatics and Magnetism",     p:68, mode:"verify"},
 {id:"ph6",  s:"ph",  n:6,  t:"Circuits",                         p:69, mode:"verify"},
 {id:"ph7",  s:"ph",  n:7,  t:"Waves and Sound",                  p:70, mode:"verify"},
 {id:"ph8",  s:"ph",  n:8,  t:"Light and Optics",                 p:71, mode:"verify"},
 {id:"ph9",  s:"ph",  n:9,  t:"Atomic and Nuclear Phenomena",     p:72, mode:"verify"},
 {id:"ph10", s:"ph",  n:10, t:"Mathematics and Significant Figures",p:73,mode:"verify"},
 {id:"ph11", s:"ph",  n:11, t:"Research Design",                  p:74, mode:"verify"},
 {id:"ph12", s:"ph",  n:12, t:"Data and Statistical Reasoning",   p:75, mode:"verify"}
];

/* reference sheets, reachable but not counted toward the 72 */
const APPENDICES = [
 {t:"Behavioral Sciences Appendix", p:3},
 {t:"A — Organic Common Names", p:76}, {t:"B — The Heart & Oxygen Transport", p:77},
 {t:"C — Brain", p:78}, {t:"D — Endocrine Organs and Hormones", p:79},
 {t:"E — Lab Techniques", p:80}, {t:"F — DNA and RNA", p:81},
 {t:"G — DNA Replication", p:82}, {t:"H — The Central Dogma", p:83},
 {t:"I — Amino Acids", p:84}, {t:"J — Enzyme Inhibition", p:85},
 {t:"K — Metabolism Overview", p:86}, {t:"L — Glycolysis", p:87},
 {t:"M — Gluconeogenesis", p:88}, {t:"N — Citric Acid Cycle", p:89},
 {t:"O — Oxidative Phosphorylation", p:90}, {t:"P — Fatty Acid Synthesis", p:91},
 {t:"Q — Equation Sheet", p:92}
];
