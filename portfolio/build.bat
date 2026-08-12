@echo off
rem ---------------------------------------------------------------
rem  Build the portfolio on Windows. Just run build.bat
rem  Builds both versions: portfolio.pdf (ukr) and portfolio_EN.pdf (eng).
rem  Requires MiKTeX / TeX Live with the XeLaTeX engine.
rem  (Skladannya portfolio pid Windows. Potriben XeLaTeX.)
rem ---------------------------------------------------------------
setlocal
cd /d "%~dp0"

for %%F in (portfolio portfolio_EN) do (
  xelatex -interaction=nonstopmode %%F.tex
  if errorlevel 1 goto err
  xelatex -interaction=nonstopmode %%F.tex
  if errorlevel 1 goto err
  del /q %%F.aux %%F.log %%F.out %%F.synctex.gz 2>nul
)

echo.
echo OK: portfolio.pdf, portfolio_EN.pdf
goto end

:err
echo.
echo BUILD FAILED - see the .log file next to the .tex
exit /b 1

:end
