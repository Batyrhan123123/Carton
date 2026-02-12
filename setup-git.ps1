# Удаляем старую папку .git и настраиваем репозиторий заново
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (Test-Path .git) {
    Remove-Item -Recurse -Force .git
    Write-Host "Old .git removed."
}

git init
git branch -M main
git add .
git commit -m "Initial commit: CARTON landing"
git remote add origin https://github.com/Batyrhan123123/carton.git
Write-Host "Done. Now run: git push -u origin main"
git push -u origin main
