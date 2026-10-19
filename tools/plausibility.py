#!/usr/bin/env python3
"""
plausibility.py — detect implausible (dead) distractors.

Why this matters more than every other check combined. Rush, Rankin & White (2016),
1,925 items: items containing an implausible distractor were 14.9 percentage points
easier, their discrimination index halved (0.20 -> 0.09, non-overlapping CIs), and
the probability of being a difficult AND discriminating item fell from 27.1% to 1.8%
— a 15-fold drop. It is the largest single effect in the item-writing literature.

DiBattista & Kurzawa (2011) add the asymmetry that sets the priority order:
   distractor with non-negative discrimination : eta^2 = 0.36   (catastrophic)
   distractor selected by <5% of examinees     : eta^2 = 0.01   (nearly free)
So an unpopular distractor costs little; one that pulls strong students destroys
the item. Optimize against the second, tolerate the first.

Without response data we cannot compute discrimination, so this uses the
construction-side proxy the CARS research established: real AAMC distractors are
recycled passage material, relocated — attached to the wrong referent, paragraph,
scope, or argumentative function. A distractor with NO anchor in the stimulus was
never plausible to begin with and gets dispatched by AAMC's own rationales in a
single clause.

Usage:  python3 plausibility.py [build_dir] [--verbose]
"""
import re, sys, os, glob, statistics, collections

BUILD = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "app")
VERBOSE = "--verbose" in sys.argv
_a = [a for a in sys.argv[1:] if not a.startswith("--")]
if _a: BUILD = _a[0]

STOP = set("""a an the of to in on for and or but is are was were be been being with by as at
from that this these those it its which what how why when who whom whose does do did not no
than then their there they them he she his her him you your we our us i most least best would
following result results because more less than such also into over under between during each
other another some any been has have had can could may might will shall must about""".split())

def clean(s):
    s = re.sub(r'<[^>]+>', ' ', s)
    s = re.sub(r'&[a-zA-Z]+;|&#\d+;', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

def content(s):
    return {w for w in re.findall(r"[a-z']+", clean(s).lower())
            if w not in STOP and len(w) > 3}

def parse(path):
    src = open(path, encoding='utf-8', errors='replace').read()
    for m in re.finditer(r'id:"([a-z0-9_]+)"', src):
        sid, start = m.group(1), m.start()
        nxt = src.find('id:"', start + 10)
        blk = src[start:nxt if nxt > 0 else len(src)]
        pm = re.search(r'passage:\s*`(.*?)`', blk, re.S)
        passage = clean(pm.group(1)) if pm else ""
        for i, qm in enumerate(re.finditer(
                r'\{q:\s*"((?:[^"\\]|\\.)*)"(.*?)ch:\s*\[(.*?)\]\s*,\s*a:\s*(\d)', blk, re.S), 1):
            chs = re.findall(r'"((?:[^"\\]|\\.)*)"', qm.group(3))
            if len(chs) < 3: continue
            yield sid, i, passage, qm.group(1), chs, int(qm.group(4))

def score(passage, stem, chs, key, cars=True):
    """Return per-option anchor scores plus the diagnosis for this item.

    cars=True  -> stimulus-anchor rule. AAMC guarantees CARS needs no outside
                  knowledge, so a distractor with no passage anchor is dead.
    cars=False -> science items legitimately require outside knowledge, so the
                  anchor rule does not apply. Plausibility there comes from the
                  key-features method: distractors must share the key's
                  structural frame, differing by one feature. Checked as
                  homogeneity — options should overlap each OTHER, not the passage.
    """
    pw = content(passage) | content(stem)
    anchors, sizes = [], []
    for c in chs:
        cw = content(c)
        sizes.append(len(cw))
        anchors.append(len(cw & pw) / max(len(cw), 1) if cw else 0.0)

    problems = []
    if not cars:
        # science: check option-set homogeneity instead of passage anchoring
        def sim(i):
            a = content(chs[i])
            return sum(len(a & content(chs[j])) for j in range(len(chs)) if j != i)
        S = [sim(i) for i in range(len(chs))]
        for i, v in enumerate(S):
            if i != key and sizes[i] >= 3 and v == 0:
                problems.append(("ORPHAN", i, "shares no term with any other option — "
                                              "not on the key's continuum"))
        return anchors, problems
    for i, a in enumerate(anchors):
        if i == key: continue
        if sizes[i] and a == 0.0:
            problems.append(("DEAD", i, "no content word appears in the stimulus"))
        elif sizes[i] >= 3 and a < 0.20:
            problems.append(("WEAK", i, f"only {a:.0%} of its content words are anchored"))
    # key should not be the most-anchored option by a wide margin (lexical leak)
    if anchors[key] > 0 and anchors[key] == max(anchors):
        others = sorted(anchors)[:-1]
        if others and anchors[key] - max(others) > 0.35:
            problems.append(("LEAK", key, f"key is {anchors[key]:.0%} anchored vs {max(others):.0%} "
                                          "for the next option — lexical overlap gives it away"))
    return anchors, problems

if __name__ == "__main__":
    items = []
    for p in sorted(glob.glob(os.path.join(BUILD, "sets*.js"))):
        items += list(parse(p))

    with_pass = [it for it in items if it[2]]
    tally = collections.Counter()
    per_set = collections.defaultdict(lambda: [0, 0])
    detail = []

    for sid, n, passage, stem, chs, key in with_pass:
        anchors, probs = score(passage, stem, chs, key, cars=sid.startswith('cars'))
        per_set[sid][1] += 1
        kinds = {k for k, _, _ in probs}
        for k in kinds: tally[k] += 1
        if probs:
            per_set[sid][0] += 1
            detail.append((len(probs), sid, n, stem, chs, key, probs))

    N = len(with_pass)
    print(f"{N} passage-based items checked for distractor plausibility\n")
    print("  (anchor rule applies to CARS only; science sets are checked for option homogeneity)\n")
    print(f"  DEAD distractor (zero stimulus anchor) : {tally['DEAD']:>3}  ({100*tally['DEAD']/max(N,1):.0f}% of items)")
    print(f"  WEAK distractor (<20% anchored)        : {tally['WEAK']:>3}  ({100*tally['WEAK']/max(N,1):.0f}% of items)")
    print(f"  KEY LEAK (key far more anchored)       : {tally['LEAK']:>3}  ({100*tally['LEAK']/max(N,1):.0f}% of items)")
    print(f"  ORPHAN option (science, off-continuum)  : {tally['ORPHAN']:>3}  ({100*tally['ORPHAN']/max(N,1):.0f}% of items)")
    ok = N - len(detail)
    print(f"\n  items with all distractors anchored    : {ok}/{N} ({100*ok/max(N,1):.0f}%)")

    print("\nper set — items with a plausibility problem")
    for sid in sorted(per_set):
        bad, tot = per_set[sid]
        print(f"  {sid:16}{bad:>3}/{tot:<3}  {'█'*int(20*bad/max(tot,1))}")

    if VERBOSE:
        print("\n" + "=" * 74)
        print("WORST — rewrite these distractors first")
        print("=" * 74)
        for nf, sid, n, stem, chs, key, probs in sorted(detail, reverse=True)[:12]:
            print(f"\n{sid} Q{n}")
            print("  stem: " + clean(stem)[:100])
            for kind, i, why in probs:
                tag = "KEY" if i == key else "ABCD"[i]
                print(f"    [{kind}] {tag}) {clean(chs[i])[:70]}")
                print(f"           {why}")
