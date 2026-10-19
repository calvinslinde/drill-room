#!/usr/bin/env python3
"""
import_cars_sets.py — convert the extracted AAMC/Khan Academy CARS passage sets in
study/CARS-AAMC-SETS.md into a Drill Room set file.

These are real AAMC-authored items with AAMC's own skill labels and per-choice
rationales — strictly better CARS practice than the locally generated bank, which
the audit showed carries a length cue in 73% of items and a key-position skew.

Khan Academy content is CC BY-NC-SA; the attribution is carried into the output and
this is personal, non-commercial study use.

Usage:  python3 import_cars_sets.py
"""
import re, os, json, html

SRC = os.path.expanduser("~/DrillRoom/study/CARS-AAMC-SETS.md")
OUT = os.path.expanduser("~/DrillRoom/build/sets_aamc_cars.js")

def jsstr(s):
    """Escape for a double-quoted JS string literal."""
    return (s.replace('\\', '\\\\').replace('"', '\\"')
             .replace('\n', ' ').replace('\r', ' ')).strip()

def para(text):
    """Markdown-ish body text -> simple HTML paragraphs."""
    out = []
    for p in [x.strip() for x in text.split('\n\n') if x.strip()]:
        p = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', p)
        p = re.sub(r'(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)', r'<em>\1</em>', p)
        out.append('<p>' + p.replace('\n', ' ') + '</p>')
    return '\n'.join(out)

def slug(t):
    return 'aamc_' + re.sub(r'[^a-z0-9]+', '_', t.lower()).strip('_')[:22]

def parse(md):
    # split on top-level set headings
    blocks = re.split(r'\n## (?=\S)', '\n' + md)
    for b in blocks[1:]:
        title, body = b.split('\n', 1)
        title = title.strip()
        pm = re.search(r'### Passage\s*\n(.*?)(?=\n### Question )', body, re.S)
        if not pm:
            continue
        passage = pm.group(1).strip()

        qs = []
        for qm in re.finditer(
                r'### Question (\d+)\s*\n+(.*?)\n+((?:- \*\*[A-D]\.\*\*[^\n]*\n)+)'
                r'\s*\*\*Correct answer:\s*([A-D])\*\*\s*\n(.*?)(?=\n### Question |\n## |\Z)',
                body, re.S):
            stem = qm.group(2).strip().replace('\n', ' ')
            chs = re.findall(r'- \*\*[A-D]\.\*\*\s*(.+)', qm.group(3))
            if len(chs) != 4:
                continue
            key = "ABCD".index(qm.group(4))
            expl = qm.group(5)
            expl = re.sub(r'\*\*Khan Academy rationale[^*]*\*\*', '', expl)
            expl = expl.replace('---', '')
            expl = re.sub(r'\*Step \d+ of \d+\.\*', '', expl)
            expl = re.sub(r'\s+', ' ', expl).strip()
            qs.append((stem, [c.strip() for c in chs], key, expl))
        if qs:
            yield title, passage, qs

if __name__ == "__main__":
    md = open(SRC, encoding='utf-8').read()
    sets = list(parse(md))

    parts = ['''/* sets_aamc_cars.js — real AAMC CARS passage sets with AAMC's own per-choice
   rationales, extracted from the Khan Academy MCAT collection that AAMC links from
   its own "Practice Passage Sets" page.

   These are authentic AAMC-authored items. The locally generated CARS sets carry a
   length cue in 73% of items and had a key-position skew; these do not. Practice
   these first.

   Khan Academy content is CC BY-NC-SA 4.0. Personal, non-commercial study use.
*/
''']
    parts.append("SETS.push(\n")
    chunks = []
    for title, passage, qs in sets:
        n = len(qs)
        head = (f'{{id:"{slug(title)}", sec:"CARS", topic:"AAMC · {title}",\n'
                f' label:"Critical Analysis and Reasoning Skills",\n'
                f' passage:`<div class="ttl">{title} (Questions 1&ndash;{n})</div>\n'
                f'{para(passage)}`,\n qs:[\n')
        items = []
        for stem, chs, key, expl in qs:
            opts = ",\n      ".join('"%s"' % jsstr(c) for c in chs)
            items.append(f' {{q:"{jsstr(stem)}",\n  ch:[{opts}],a:{key},\n'
                         f'  e:"{jsstr(expl)}"}}')
        chunks.append(head + ",\n\n".join(items) + "\n]}")
    parts.append(",\n\n".join(chunks))
    parts.append("\n\n);\n")

    open(OUT, 'w', encoding='utf-8').write("".join(parts))
    tot = sum(len(q) for _, _, q in sets)
    print(f"wrote {OUT}")
    print(f"  {len(sets)} passage sets, {tot} questions")
    for t, p, q in sets:
        print(f"    {slug(t):28} {len(q)} q   {len(p.split())} words")
