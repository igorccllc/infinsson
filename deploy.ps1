Set-Location $PSScriptRoot

Write-Output "Buildando..."
powershell -ExecutionPolicy Bypass -File ".\build.ps1"
if ($LASTEXITCODE -ne 0) {
    Write-Output ""
    Write-Output "BUILD FALHOU - nada foi commitado nem enviado."
    exit 1
}

# Sanidade: index.html gerado tem que existir e ter tamanho plausivel (>500 KB)
$idx = Join-Path $PSScriptRoot 'index.html'
$kb  = [Math]::Round((Get-Item $idx).Length / 1KB)
if ($kb -lt 500) {
    Write-Output ""
    Write-Output "index.html saiu com $kb KB - suspeito. Abortando o push."
    exit 1
}

Write-Output "Enviando pro GitHub..."
git add index.html manifest.json sw.js icon-192.png icon-512.png INSIGHTS.md src/ build.ps1 deploy.ps1 serve.ps1
git commit -m "update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push
if ($LASTEXITCODE -ne 0) {
    Write-Output ""
    Write-Output "PUSH FALHOU - o GitHub Pages segue na versao anterior."
    exit 1
}

Write-Output ""
Write-Output "Pronto. Abra o app no iPhone - ele se atualiza sozinho."
