@echo off
title Personagem Creator - D&D 5e e 5.5
echo ===================================================
echo     Iniciando Personagem Creator (D&D 5e e 5.5)
echo ===================================================
echo.
echo Abrindo servidor local em http://localhost:8080 ...
start "" http://localhost:8080
python -m http.server 8080
pause
