# Script mora em scripts/ — a raiz do projeto (onde o git e o index.html vivem) é um nível acima.
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Output "Buildando..."
powershell -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot "build.ps1")
if ($LASTEXITCODE -ne 0) {
    Write-Output ""
    Write-Output "BUILD FALHOU - nada foi commitado nem enviado."
    exit 1
}

# Sanidade: index.html gerado tem que existir e ter tamanho plausivel (>500 KB)
$idx = Join-Path $root 'index.html'
$kb  = [Math]::Round((Get-Item $idx).Length / 1KB)
if ($kb -lt 500) {
    Write-Output ""
    Write-Output "index.html saiu com $kb KB - suspeito. Abortando o push."
    exit 1
}

Write-Output "Enviando pro GitHub..."
# scripts/ e src/ entram inteiros (o .gitignore barra out-*.html, *.bak e o cache do Chart.js).
# sheets-sync.gs nao roda daqui — roda no Apps Script — mas esta e a unica copia viva dele.
git add .gitignore index.html manifest.json sw.js icon-192.png icon-512.png docs/INSIGHTS.md sheets-sync.gs src/ scripts/
git commit -m "update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push
if ($LASTEXITCODE -ne 0) {
    Write-Output ""
    Write-Output "PUSH FALHOU - o GitHub Pages segue na versao anterior."
    exit 1
}

Write-Output ""
Write-Output "Pronto. Abra o app no iPhone - ele se atualiza sozinho."
