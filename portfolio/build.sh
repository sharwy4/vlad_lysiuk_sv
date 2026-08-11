#!/bin/sh
# Складання портфоліо під Linux/macOS (або Git Bash у Windows).
# Потрібен XeLaTeX.
set -e
cd "$(dirname "$0")"

xelatex -interaction=nonstopmode portfolio.tex
xelatex -interaction=nonstopmode portfolio.tex

rm -f portfolio.aux portfolio.log portfolio.out portfolio.synctex.gz

echo "Готово: portfolio.pdf"
