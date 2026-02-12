@echo off
cd /d "%~dp0"

git status >nul 2>&1
if errorlevel 1 (
    echo Git repo not found. Run setup-git.ps1 first or: git init
    goto :eof
)

git add .
git commit -m "Header: non-transparent background matching site gradient"
git push

pause
