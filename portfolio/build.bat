@echo off
rem ---------------------------------------------------------------
rem  Build the portfolio on Windows. Just run build.bat
rem  Requires MiKTeX / TeX Live with the XeLaTeX engine.
rem  (Skladannya portfolio pid Windows. Potriben XeLaTeX.)
rem ---------------------------------------------------------------
setlocal
cd /d "%~dp0"

xelatex -interaction=nonstopmode portfolio.tex
if errorlevel 1 goto err
xelatex -interaction=nonstopmode portfolio.tex
if errorlevel 1 goto err

del /q portfolio.aux portfolio.log portfolio.out portfolio.synctex.gz 2>nul

echo.
echo OK: portfolio.pdf
goto end

:err
echo.
echo BUILD FAILED - see portfolio.log
exit /b 1

:end
