$p = "C:\Users\deadk\OneDrive\Desktop\carton\public\works"
Push-Location $p
Get-ChildItem -Filter "*.mp4" | ForEach-Object {
    $n = $_.Name
    $new = $null
    if ($n -match "Предложение") { $new = "work-1.mp4" }
    elseif ($n -match "Годовщина 30") { $new = "work-2.mp4" }
    elseif ($n -match "Для жены") { $new = "work-3.mp4" }
    elseif ($n -match "15 лет в браке") { $new = "work-4.mp4" }
    elseif ($n -match "1\.5 минуты") { $new = "work-6.mp4" }
    elseif ($n -match "1 минуты буз") { $new = "work-5.mp4" }
    if ($new) { Rename-Item -LiteralPath $_.FullName -NewName $new }
}
Pop-Location
