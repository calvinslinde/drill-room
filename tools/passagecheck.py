#!/usr/bin/env python3
"""
passagecheck.py — validate stimulus (passage) construction against measured AAMC
parameters.  Companion to flawcheck.py (per-item flaws) and lint_items.py
(bank-level answer distributions).

Parameters are measured, not folklore — from the 9 complete AAMC-authored science
passages in the AAMC Preview Guide (see research/04-passage-anatomy.md):

  science body text : median 248 words, observed range 147-302
  figures           : mode 1, mean 1.3, never more than 3
  CARS              : AAMC's own published spec, 500-600 words

Also checks vocabulary AAMC's 108-page content outline never uses. AAMC tests the
FUNCTION of experimental design ("what would show this is not the case") and never
the terminology, so an item that requires the word is testing something the real
exam does not.

Usage:  python3 passagecheck.py [build_dir]
"""
import re, sys, os, glob, statistics

BUILD = os.path.expanduser("~/DrillRoom/build")
_a = [a for a in sys.argv[1:] if not a.startswith("--")]
if _a: BUILD = _a[0]

SCI_LO, SCI_HI, SCI_MED = 147, 302, 248
CARS_LO, CARS_HI = 500, 600

# zero occurrences across the full AAMC content outline
NEVER_IN_AAMC = ["standard error", "control group", "randomiz", "placebo",
                 "single-blind", "double-blind", "sample size", "statistical power",
                 "null hypothesis", "t-test", "anova", "chi-square", "chi square",
                 "effect size", "confidence interval", "regression"]

def clean(s):
    s = re.sub(r'<div class="ttl">.*?</div>', ' ', s, flags=re.S)
    s = re.sub(r'<[^>]+>', ' ', s)
    s = re.sub(r'&[a-zA-Z]+;|&#\d+;', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()

def stimuli(build):
    for p in sorted(glob.glob(os.path.join(build, "sets*.js"))):
        src = open(p, encoding='utf-8', errors='replace').read()
        for m in re.finditer(r'id:"([a-z0-9_]+)"', src):
            sid, st = m.group(1), m.start()
            nx = src.find('id:"', st + 10)
            blk = src[st:nx if nx > 0 else len(src)]
            pm = re.search(r'passage:\s*`(.*?)`', blk, re.S)
            if not pm: continue
            raw = pm.group(1)
            nq = len(re.findall(r'\{q:', blk))
            yield sid, raw, clean(raw), nq

if __name__ == "__main__":
    rows = list(stimuli(BUILD))
    sci = [r for r in rows if not r[0].startswith('cars')]
    car = [r for r in rows if r[0].startswith('cars')]

    print("AAMC measured: science 147-302 words (median 248), 1-3 figures")
    print("AAMC published: CARS 500-600 words\n")
    print(f"{'set':16}{'words':>7}{'figs':>6}{'q':>4}   status")
    for sid, raw, body, nq in sorted(sci, key=lambda r: -len(r[2].split())):
        w = len(body.split())
        figs = len(re.findall(r'<table|<img|Figure\s+\d', raw))
        s = "ok" if SCI_LO <= w <= SCI_HI else ("LONG" if w > SCI_HI else f"SHORT (needs +{SCI_MED-w})")
        if figs > 3: s += " / too many figures"
        print(f"{sid:16}{w:>7}{figs:>6}{nq:>4}   {s}")

    if sci:
        med = statistics.median([len(b.split()) for _, _, b, _ in sci])
        short = sum(1 for _, _, b, _ in sci if len(b.split()) < SCI_LO)
        print(f"\nscience median {med:.0f} words vs AAMC {SCI_MED} "
              f"— {short}/{len(sci)} below AAMC's observed minimum")

    print(f"\n{'CARS set':16}{'words':>7}   status")
    for sid, raw, body, nq in sorted(car, key=lambda r: -len(r[2].split())):
        w = len(body.split())
        s = "ok" if CARS_LO <= w <= CARS_HI else ("LONG" if w > CARS_HI else f"SHORT (needs +{CARS_LO-w})")
        print(f"{sid:16}{w:>7}   {s}")

    print("\nvocabulary AAMC's content outline never uses:")
    hits = 0
    for p in sorted(glob.glob(os.path.join(BUILD, "sets*.js"))):
        txt = open(p, encoding='utf-8', errors='replace').read().lower()
        for t in NEVER_IN_AAMC:
            n = txt.count(t)
            if n:
                print(f"   {os.path.basename(p):16} {t:<22} ×{n}")
                hits += n
    print("   none found" if not hits else
          f"   → {hits} occurrences. AAMC tests the function, never the term.")
