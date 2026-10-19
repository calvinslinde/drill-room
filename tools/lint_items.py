#!/usr/bin/env python3
"""
lint_items.py — audit a Drill Room question bank for surface cues that real AAMC
items are screened to remove. Every flag here is a way a test-taker can get an
item right WITHOUT knowing the content, which means practicing on it trains the
wrong thing.

Usage:  python3 lint_items.py [build_dir]
"""
import re, sys, os, glob, statistics, collections

BUILD = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "app")

ABSOLUTE = re.compile(r'\b(always|never|all|none|only|must|cannot|every|no\s+\w+\s+(?:can|is|are)|entirely|exclusively|impossible|invariably|solely)\b', re.I)
HEDGE    = re.compile(r'\b(may|can|often|some|usually|tends?|partly|primarily|generally|likely|typically)\b', re.I)
STOP = set("""a an the of to in on for and or but is are was were be been being with by as at
from that this these those it its which what how why when who whom whose does do did not no
than then their there they them he she his her him you your we our us i""".split())

def clean(s):
    s = re.sub(r'<[^>]+>', ' ', s)
    s = re.sub(r'&[a-zA-Z]+;|&#\d+;', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

def words(s):
    return [w for w in re.findall(r"[a-z']+", clean(s).lower()) if w not in STOP and len(w) > 2]

def parse(path):
    """Yield (setid, stem, [choices], key_index)."""
    src = open(path, encoding='utf-8', errors='replace').read()
    for m in re.finditer(r'id:"([a-z0-9_]+)"', src):
        sid, start = m.group(1), m.start()
        nxt = src.find('id:"', start + 10)
        blk = src[start:nxt if nxt > 0 else len(src)]
        for qm in re.finditer(r'\{q:\s*"((?:[^"\\]|\\.)*)"(.*?)ch:\s*\[(.*?)\]\s*,\s*a:\s*(\d)', blk, re.S):
            stem = qm.group(1)
            chs = re.findall(r'"((?:[^"\\]|\\.)*)"', qm.group(3))
            if len(chs) < 3:
                continue
            yield sid, stem, chs, int(qm.group(4))

def audit(items):
    n = len(items)
    if not n:
        return None
    r = collections.Counter()
    keylen, dislen, poskey = [], [], collections.Counter()
    overlap_key, overlap_dis = [], []

    for sid, stem, chs, k in items:
        L = [len(words(c)) for c in chs]
        keylen.append(L[k]); dislen += [w for i, w in enumerate(L) if i != k]
        poskey["ABCDE"[k]] += 1
        if L[k] == max(L) and L.count(max(L)) == 1:
            r['key_is_longest'] += 1
        if L[k] == min(L) and L.count(min(L)) == 1:
            r['key_is_shortest'] += 1
        # absolutes
        if ABSOLUTE.search(clean(chs[k])):
            r['absolute_in_key'] += 1
        if any(ABSOLUTE.search(clean(c)) for i, c in enumerate(chs) if i != k):
            r['absolute_in_distractor'] += 1
        # hedges
        if HEDGE.search(clean(chs[k])):
            r['hedge_in_key'] += 1
        if any(HEDGE.search(clean(c)) for i, c in enumerate(chs) if i != k):
            r['hedge_in_distractor'] += 1
        # clang / stem overlap
        sw = set(words(stem))
        ov = [len(sw & set(words(c))) for c in chs]
        overlap_key.append(ov[k]); overlap_dis += [v for i, v in enumerate(ov) if i != k]
        if ov[k] == max(ov) and ov.count(max(ov)) == 1:
            r['key_shares_most_stem_words'] += 1
        # all/none of the above
        if any(re.search(r'(all|none|both)\s+of\s+the\s+above', clean(c), re.I) for c in chs):
            r['all_none_of_above'] += 1
        # option heterogeneity: longest > 2x shortest
        if min(L) and max(L) / max(min(L), 1) >= 2.5:
            r['options_very_uneven'] += 1

    def pct(x): return 100.0 * x / n
    out = {
        'n': n,
        'key_words_mean': statistics.mean(keylen),
        'dis_words_mean': statistics.mean(dislen),
        'key_longest_pct': pct(r['key_is_longest']),
        'key_shortest_pct': pct(r['key_is_shortest']),
        'abs_key_pct': pct(r['absolute_in_key']),
        'abs_dis_pct': pct(r['absolute_in_distractor']),
        'hedge_key_pct': pct(r['hedge_in_key']),
        'hedge_dis_pct': pct(r['hedge_in_distractor']),
        'clang_pct': pct(r['key_shares_most_stem_words']),
        'overlap_key': statistics.mean(overlap_key),
        'overlap_dis': statistics.mean(overlap_dis),
        'uneven_pct': pct(r['options_very_uneven']),
        'all_none': r['all_none_of_above'],
        'pos': poskey,
    }
    return out

def verdict(o):
    """Flag anything a test-taker could exploit. Baselines assume 4 options."""
    f = []
    if o['key_longest_pct'] >= 40:
        f.append(f"LENGTH CUE — key is longest {o['key_longest_pct']:.0f}% (chance 25%). "
                 f"Key averages {o['key_words_mean']:.1f} words vs {o['dis_words_mean']:.1f} for distractors.")
    if o['key_shortest_pct'] >= 40:
        f.append(f"REVERSE LENGTH CUE — key is shortest {o['key_shortest_pct']:.0f}%.")
    if o['abs_dis_pct'] - o['abs_key_pct'] >= 20:
        f.append(f"ABSOLUTE-LANGUAGE CUE — absolutes appear in distractors {o['abs_dis_pct']:.0f}% "
                 f"vs key {o['abs_key_pct']:.0f}%. 'Eliminate the absolute' works without content knowledge.")
    if o['hedge_key_pct'] - o['hedge_dis_pct'] >= 20:
        f.append(f"HEDGE CUE — hedged wording in key {o['hedge_key_pct']:.0f}% vs distractors {o['hedge_dis_pct']:.0f}%.")
    if o['clang_pct'] >= 40:
        f.append(f"CLANG CUE — key repeats stem wording most often in {o['clang_pct']:.0f}% of items "
                 f"({o['overlap_key']:.2f} shared words vs {o['overlap_dis']:.2f}).")
    if o['uneven_pct'] >= 25:
        f.append(f"HETEROGENEOUS OPTIONS — {o['uneven_pct']:.0f}% of items have a longest option ≥2.5× the shortest.")
    if o['all_none']:
        f.append(f"{o['all_none']} item(s) use all/none/both-of-the-above.")
    tot = sum(o['pos'].values())
    worst = max(o['pos'].items(), key=lambda kv: kv[1])
    if tot and worst[1] / tot >= 0.45:
        f.append(f"KEY POSITION SKEW — answer is {worst[0]} in {100*worst[1]/tot:.0f}% of items.")
    return f

if __name__ == "__main__":
    files = sorted(glob.glob(os.path.join(BUILD, "sets*.js")))
    allitems, byset = [], collections.defaultdict(list)
    for f in files:
        for it in parse(f):
            allitems.append(it); byset[it[0]].append(it)

    print(f"parsed {len(allitems)} items across {len(byset)} sets from {len(files)} files\n")
    print("=" * 78)
    print("PER SET")
    print("=" * 78)
    print(f"{'set':16}{'n':>4}{'key len':>9}{'dis len':>9}{'longest%':>10}{'clang%':>9}  flags")
    for sid in sorted(byset):
        o = audit(byset[sid])
        if not o: continue
        print(f"{sid:16}{o['n']:>4}{o['key_words_mean']:>9.1f}{o['dis_words_mean']:>9.1f}"
              f"{o['key_longest_pct']:>9.0f}%{o['clang_pct']:>8.0f}%  {len(verdict(o))}")

    print()
    print("=" * 78)
    print("WHOLE BANK")
    print("=" * 78)
    o = audit(allitems)
    print(f"items: {o['n']}")
    print(f"key position distribution: {dict(sorted(o['pos'].items()))}")
    print()
    v = verdict(o)
    if not v:
        print("  clean — no exploitable surface cue found")
    for x in v:
        print("  ⚠  " + x)
