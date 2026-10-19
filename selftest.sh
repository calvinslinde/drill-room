#!/bin/bash
# Runs the four checkers on the included bank; fails if any errors out.
set -e; cd "$(dirname "$0")"
n=$(grep -c -h '{id:"' app/sets*.js | awk '{s+=$1} END {print s}'); echo "sets found in app/: $n"; [ "$n" -gt 0 ]
for t in lint_items flawcheck passagecheck plausibility; do python3 -I "tools/$t.py" app > /dev/null && echo "ok  $t"; done
echo "self-check passed"
