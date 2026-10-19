#!/usr/bin/env python3
"""
rebalance_keys.py — permute answer choices so the correct answer is evenly
distributed across positions.

The bank was generated with the key in position B 62% of the time. Real AAMC
items run ~25/25/25/25. Practicing on a skewed bank trains a positional prior
that is worth negative points on a balanced exam.

Permutation preserves all content and every explanation; only the order of the
options and the answer index change. Items whose option ORDER carries meaning
are detected and left alone.

Usage:  python3 rebalance_keys.py [build_dir] [--apply]
Without --apply it reports what it would do and writes nothing.
"""
import re, sys, os, glob, random, collections, shutil

BUILD = os.path.expanduser("~/DrillRoom/build")
APPLY = "--apply" in sys.argv
args = [a for a in sys.argv[1:] if not a.startswith("--")]
if args:
    BUILD = args[0]

SEED = 20260912  # exam date, so runs are reproducible

# Option order is load-bearing in these cases — never shuffle them.
ROMAN   = re.compile(r'^\s*(I{1,3}|IV|V)\b|\bI+\s+(and|only)\b', re.I)
ABOVE   = re.compile(r'(all|none|both)\s+of\s+the\s+above', re.I)
CROSSREF= re.compile(r'\b(both\s+[ABCD]\b|answers?\s+[ABCD]\b|choices?\s+[ABCD]\b)', re.I)
NUMERIC = re.compile(r'^[^A-Za-z]*[-+]?[\d.,]+\s*(?:[×x]\s*10|e[-+]?\d)?[^A-Za-z]*$')

def clean(s):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>|&[a-zA-Z]+;', ' ', s)).strip()

def order_matters(chs):
    txt = [clean(c) for c in chs]
    if any(ROMAN.search(t) for t in txt):        return "roman numerals"
    if any(ABOVE.search(t) for t in txt):        return "all/none of the above"
    if any(CROSSREF.search(t) for t in txt):     return "cross-references another option"
    if all(NUMERIC.match(t) for t in txt if t):  return "numeric (likely ordered)"
    return None

def process(path, rng, tally):
    src = open(path, encoding='utf-8', errors='replace').read()
    out, cursor, changed, skipped = [], 0, 0, []

    for qm in re.finditer(r'(ch:\s*\[)(.*?)(\]\s*,\s*a:\s*)(\d)', src, re.S):
        chunk = qm.group(2)
        chs = re.findall(r'"((?:[^"\\]|\\.)*)"', chunk)
        key = int(qm.group(4))
        if len(chs) < 3 or key >= len(chs):
            continue
        why = order_matters(chs)
        if why:
            skipped.append(why)
            continue

        # choose a target position that pulls the running distribution toward uniform
        target = min(range(len(chs)), key=lambda p: (tally[p], rng.random()))
        order = list(range(len(chs)))
        rng.shuffle(order)
        order.remove(key)
        order.insert(target, key)

        newchs = [chs[i] for i in order]
        tally[target] += 1
        changed += 1

        rebuilt = qm.group(1) + ",".join('"%s"' % c for c in newchs) + qm.group(3) + str(target)
        out.append(src[cursor:qm.start()]); out.append(rebuilt)
        cursor = qm.end()

    out.append(src[cursor:])
    return "".join(out), changed, skipped

if __name__ == "__main__":
    rng = random.Random(SEED)
    tally = collections.Counter({0: 0, 1: 0, 2: 0, 3: 0})
    files = sorted(glob.glob(os.path.join(BUILD, "sets*.js")))
    total_changed, all_skipped = 0, []

    for f in files:
        new, changed, skipped = process(f, rng, tally)
        total_changed += changed
        all_skipped += skipped
        print(f"{os.path.basename(f):16} shuffled {changed:>4}   left alone {len(skipped):>3}")
        if APPLY and changed:
            bak = f + ".prebalance"
            if not os.path.exists(bak):
                shutil.copy2(f, bak)
            open(f, "w", encoding="utf-8").write(new)

    print()
    print(f"total items shuffled: {total_changed}")
    if all_skipped:
        print("left alone because option order carries meaning:")
        for why, n in collections.Counter(all_skipped).most_common():
            print(f"   {n:>3}  {why}")
    tot = sum(tally.values()) or 1
    print()
    print("resulting key distribution: " +
          "  ".join(f"{'ABCD'[p]} {100*tally[p]/tot:.0f}%" for p in sorted(tally)))
    print("APPLIED — originals saved as *.prebalance" if APPLY
          else "DRY RUN — rerun with --apply to write")
