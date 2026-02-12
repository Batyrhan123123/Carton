@echo off
chcp 65001 >nul
cd /d "%~dp0"

if exist "Предложение 4 минуты + озвучка.mp4" ren "Предложение 4 минуты + озвучка.mp4" "work-1.mp4"
if exist "Годовщина 30 лет, 4 минуты озвучка.mp4" ren "Годовщина 30 лет, 4 минуты озвучка.mp4" "work-2.mp4"
if exist "Для жены 4 минуты без озвучки.mp4" ren "Для жены 4 минуты без озвучки.mp4" "work-3.mp4"
if exist "15 лет в браке 2 минуты с озвучкой.mp4" ren "15 лет в браке 2 минуты с озвучкой.mp4" "work-4.mp4"
if exist "1 минуты буз озвучки.mp4" ren "1 минуты буз озвучки.mp4" "work-5.mp4"
if exist "1.5 минуты без озвучки .mp4" ren "1.5 минуты без озвучки .mp4" "work-6.mp4"

echo Done. You can delete this bat file.
pause
