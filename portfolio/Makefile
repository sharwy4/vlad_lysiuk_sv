# Складання портфоліо — обидві версії.
#   make        — зібрати portfolio.pdf (укр) і portfolio_EN.pdf (англ)
#   make clean  — прибрати проміжні файли
#   make check  — зібрати й розкласти сторінки в PNG для візуальної перевірки

TEX     = xelatex
FLAGS   = -interaction=nonstopmode
TARGETS = portfolio portfolio_EN
PDFS    = $(addsuffix .pdf,$(TARGETS))

all: $(PDFS)

%.pdf: %.tex $(wildcard images/*)
	$(TEX) $(FLAGS) $<
	$(TEX) $(FLAGS) $<

check: $(PDFS)
	mkdir -p preview
	for f in $(TARGETS); do pdftoppm -r 100 -png $$f.pdf preview/$$f-page; done

clean:
	rm -f $(addsuffix .aux,$(TARGETS)) $(addsuffix .log,$(TARGETS)) \
	      $(addsuffix .out,$(TARGETS)) $(addsuffix .synctex.gz,$(TARGETS))
	rm -rf preview

.PHONY: all check clean
