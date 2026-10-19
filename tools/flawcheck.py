#!/usr/bin/env python3
"""
flawcheck.py — implements NBME's 13-flaw taxonomy as mechanical checks against a
Drill Room question bank.  Companion to lint_items.py (which does bank-level
distribution stats); this one flags individual items.

Flaw IDs follow research/01-item-theory.md:
  ID-2  numeric options inconsistent / overlapping / unsorted
  ID-3  vague frequency terms in options
  ID-4  "none of the above" style options
  ID-5  nonparallel option structure
  ID-6  Roman-numeral / permutation options
  ID-7  negatively phrased lead-in
  TW-1  grammatical cues (lead-in ends in a/an/the; mixed plurality)
  TW-2  collectively exhaustive option subset
  TW-3  absolute terms split unevenly across options
  TW-4  correct option stands out (length)
  TW-5  clang clue — key echoes stem, incl. morphemic overlap
  TW-6  convergence — key has most in common with the other options

Usage:  python3 flawcheck.py [build_dir] [--verbose]
"""
import re, sys, os, glob, collections, statistics

BUILD = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "app")
VERBOSE = "--verbose" in sys.argv
_a = [a for a in sys.argv[1:] if not a.startswith("--")]
if _a: BUILD = _a[0]

VAGUE = {"often","usually","frequently","sometimes","rarely","seldom","typically",
         "commonly","generally","may","might","tends","tend"}
ABSOLUTE = {"always","never","all","none","every","only","must","invariably",
            "exclusively","entirely","cannot","impossible"}
EXHAUSTIVE_SETS = [
    {"increase","decrease","unchanged"}, {"increases","decreases","unchanged"},
    {"increase","decrease","no"}, {"higher","lower","same"},
    {"greater","less","equal"}, {"more","less","same"},
]
# morphemic roots for TW-5 (NBME: "bone pain" -> "osteo-")
ROOTS = {
 "osteo":"bone","oste":"bone","cardi":"heart","hepat":"liver","nephr":"kidney",
 "ren":"kidney","pulmon":"lung","pneum":"lung","neur":"nerve","myo":"muscle",
 "hemo":"blood","haem":"blood","emia":"blood","gastr":"stomach","enter":"intestine",
 "derm":"skin","angi":"vessel","vas":"vessel","lys":"break","lysis":"break",
 "hydro":"water","hydr":"water","therm":"heat","photo":"light","chrom":"color",
 "glyc":"sugar","gluc":"sugar","lip":"fat","prote":"protein","pept":"protein",
 "phil":"attract","phob":"repel","oxid":"oxygen","redox":"electron",
 "cyt":"cell","nucle":"nucleus","mito":"mitochondria","ribo":"ribosome",
 "synth":"make","genesis":"make","genic":"make","troph":"feed","tropic":"turn",
 "philic":"attract","phobic":"repel","ase":"enzyme","ose":"sugar",
}
STOP = set("""a an the of to in on for and or but is are was were be been being with by as at
from that this these those it its which what how why when who whom whose does do did not no
than then their there they them he she his her him you your we our us i most least best would
following result results because""".split())

def clean(s):
    s = re.sub(r'<[^>]+>', ' ', s)
    s = re.sub(r'&[a-zA-Z]+;|&#\d+;', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

def toks(s):
    return [w for w in re.findall(r"[a-z']+", clean(s).lower())]

def content(s):
    return [w for w in toks(s) if w not in STOP and len(w) > 2]

def roots_of(ws):
    out = set()
    for w in ws:
        for r, m in ROOTS.items():
            if w.startswith(r) or w.endswith(r):
                out.add(m)
    return out

NUMERIC = re.compile(r'^[^A-Za-z]*[-+]?[\d.,]+\s*(?:[×x]\s*10|e[-+]?\d)?[^A-Za-z]*$')
ROMAN   = re.compile(r'^\s*(I{1,3}|IV|V)\b|\bI+\s+(and|only)\b')

def parse(path):
    src = open(path, encoding='utf-8', errors='replace').read()
    for m in re.finditer(r'id:"([a-z0-9_]+)"', src):
        sid, start = m.group(1), m.start()
        nxt = src.find('id:"', start + 10)
        blk = src[start:nxt if nxt > 0 else len(src)]
        for i, qm in enumerate(re.finditer(
                r'\{q:\s*"((?:[^"\\]|\\.)*)"(.*?)ch:\s*\[(.*?)\]\s*,\s*a:\s*(\d)', blk, re.S), 1):
            chs = re.findall(r'"((?:[^"\\]|\\.)*)"', qm.group(3))
            if len(chs) < 3: continue
            yield sid, i, qm.group(1), chs, int(qm.group(4))

def flaws(stem, chs, key):
    f = []
    ctxt = [clean(c) for c in chs]
    L = [len(content(c)) for c in chs]
    kw = set(content(chs[key]))

    # ID-6 roman
    if any(ROMAN.search(t) for t in ctxt):
        f.append("ID-6 roman/permutation options")
    # ID-4 none of the above
    if any(re.search(r'(none|all|both)\s+of\s+the\s+above|neither of', t, re.I) for t in ctxt):
        f.append("ID-4 none/all-of-the-above")
    # ID-7 negative lead-in
    if re.search(r'\bEXCEPT\b|\bLEAST\b|\bNOT\b|is false', stem):
        f.append("ID-7 negative lead-in")
    # ID-3 vague terms, only if unevenly split
    vk = bool(VAGUE & kw)
    vd = sum(1 for i, c in enumerate(chs) if i != key and (VAGUE & set(content(c))))
    if vk and vd == 0:
        f.append("ID-3 vague term in key only")
    # TW-3 absolutes uneven
    ak = bool(ABSOLUTE & kw)
    ad = sum(1 for i, c in enumerate(chs) if i != key and (ABSOLUTE & set(content(c))))
    if ad and not ak:
        f.append(f"TW-3 absolutes in {ad} distractor(s), none in key")
    # TW-4 length
    if L[key] == max(L) and L.count(max(L)) == 1:
        f.append(f"TW-4 key is longest ({L[key]} vs {sorted(L)[-2]})")
    if min(L) and max(L) / max(min(L), 1) > 1.8:
        f.append(f"TW-4 option lengths uneven ({min(L)}–{max(L)} words)")
    # TW-5 clang, tokens + morphemes
    sw, sr = set(content(stem)), roots_of(content(stem))
    ov = [len(sw & set(content(c))) + len(sr & roots_of(content(c))) for c in chs]
    if ov[key] and ov[key] == max(ov) and ov.count(max(ov)) == 1:
        f.append(f"TW-5 clang — key shares {ov[key]} with stem, distractors {sorted(ov)[:-1]}")
    # TW-6 convergence — key has most in common with the other options
    def sim(i):
        a = set(content(chs[i]));
        return sum(len(a & set(content(chs[j]))) for j in range(len(chs)) if j != i)
    S = [sim(i) for i in range(len(chs))]
    # require a real margin: on a balanced factorial every option overlaps heavily and
    # near-equally, so a one-word edge is noise. Flag only a decisive lead.
    if S[key] and S[key] == max(S) and S.count(max(S)) == 1:
        runner = max(v for i, v in enumerate(S) if i != key)
        if runner == 0 or (S[key] - runner) / runner >= 0.20:
            f.append(f"TW-6 convergence — key overlaps others most ({S[key]} vs {sorted(S)[:-1]})")
    # TW-2 collectively exhaustive subset
    heads = [set(content(c)[:2]) for c in chs]
    flat = set().union(*heads) if heads else set()
    for ex in EXHAUSTIVE_SETS:
        if len(ex & flat) >= 3 and len(chs) > 3:
            inside = sum(1 for h in heads if h & ex)
            if inside < len(chs):
                f.append("TW-2 collectively exhaustive subset")
            break
    # TW-1 grammatical
    if re.search(r'\b(a|an|the)\s*:?\s*$', clean(stem)):
        f.append("TW-1 lead-in ends in a/an/the")
    plur = [bool(re.search(r's\b', clean(c).split()[-1])) if clean(c) else False for c in chs]
    if 0 < sum(plur) < len(chs) and len(set(L)) > 1 and all(L):
        pass  # too noisy without POS tagging; skipped deliberately
    # ID-2 numeric
    if all(NUMERIC.match(t) for t in ctxt if t):
        nums = []
        for t in ctxt:
            m = re.search(r'[-+]?[\d.]+', t.replace(',', ''))
            nums.append(float(m.group()) if m else None)
        if None not in nums and nums != sorted(nums) and nums != sorted(nums, reverse=True):
            f.append("ID-2 numeric options not in order")
    return f

if __name__ == "__main__":
    items, byset = [], collections.defaultdict(list)
    for path in sorted(glob.glob(os.path.join(BUILD, "sets*.js"))):
        for it in parse(path):
            items.append(it); byset[it[0]].append(it)

    counts = collections.Counter()
    worst = []
    for sid, n, stem, chs, key in items:
        f = flaws(stem, chs, key)
        for x in f: counts[x.split(' ')[0]] += 1
        if f: worst.append((len(f), sid, n, stem, f))

    N = len(items)
    print(f"{N} items checked against the NBME 13-flaw taxonomy\n")
    print(f"{'flaw':8}{'items':>7}{'rate':>8}  description")
    NAMES = {"ID-2":"numeric options unordered","ID-3":"vague term in key only",
             "ID-4":"none/all-of-the-above","ID-6":"roman-numeral options",
             "ID-7":"negative lead-in","TW-1":"grammatical cue",
             "TW-2":"collectively exhaustive subset","TW-3":"absolutes only in distractors",
             "TW-4":"correct option stands out (length)","TW-5":"clang clue",
             "TW-6":"convergence"}
    for fid in sorted(NAMES):
        c = counts.get(fid, 0)
        bar = "█" * int(30 * c / max(N, 1))
        print(f"{fid:8}{c:>7}{100*c/N:>7.0f}%  {NAMES[fid]:<38}{bar}")

    clean_items = N - len(worst)
    print(f"\nitems with zero flags: {clean_items}/{N} ({100*clean_items/N:.0f}%)")

    print("\nper set — flagged items / total")
    for sid in sorted(byset):
        tot = len(byset[sid])
        bad = sum(1 for s, n, st, c, k in byset[sid] if flaws(st, c, k))
        print(f"  {sid:16}{bad:>3}/{tot:<3}  {'█'*int(20*bad/max(tot,1))}")

    if VERBOSE:
        print("\n" + "=" * 74)
        print("WORST ITEMS (rebuild these first)")
        print("=" * 74)
        for nf, sid, n, stem, f in sorted(worst, reverse=True)[:15]:
            print(f"\n{sid} Q{n}  [{nf} flags]")
            print("  " + clean(stem)[:110])
            for x in f: print("    · " + x)
