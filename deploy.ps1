Set-Location $PSScriptRoot
Write-Output "Buildando..."
powershell -ExecutionPolicy Bypass -File ".\build.ps1"
Write-Output "Enviando pro GitHub..."
git add index.html manifest.json sw.js icon-192.png icon-512.png src/
git commit -m "update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push
Write-Output ""
Write-Output "Pronto! Feche e reabra o app no iPhone."
