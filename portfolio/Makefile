# Складання портфоліо.
#   make        — зібрати portfolio.pdf
#   make clean  — прибрати проміжні файли
#   make check  — зібрати й розкласти сторінки в PNG для візуальної перевірки

TEX    = xelatex
FLAGS  = -interaction=nonstopmode
TARGET = portfolio

all: $(TARGET).pdf

$(TARGET).pdf: $(TARGET).tex $(wildcard images/*)
	$(TEX) $(FLAGS) $(TARGET).tex
	$(TEX) $(FLAGS) $(TARGET).tex

check: $(TARGET).pdf
	mkdir -p preview
	pdftoppm -r 100 -png $(TARGET).pdf preview/page

clean:
	rm -f $(TARGET).aux $(TARGET).log $(TARGET).out $(TARGET).synctex.gz
	rm -rf preview

.PHONY: all check clean
