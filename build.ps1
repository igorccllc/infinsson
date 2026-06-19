# Monta o FinPlan Pro + Carteira XP num unico HTML autocontido (index.html nesta pasta).
# Também gera os assets PWA: manifest.json, sw.js, icon-192.png, icon-512.png.
$ErrorActionPreference = 'Stop'
$src = Join-Path $PSScriptRoot 'src'
if (-not (Test-Path $src)) { throw "Pasta de fontes nao encontrada: $src" }

# ── 1) Lê fontes principais ────────────────────────────────────────────────
$index    = Get-Content (Join-Path $src 'index.html')    -Raw -Encoding UTF8
$css      = Get-Content (Join-Path $src 'style.css')     -Raw -Encoding UTF8
$js       = Get-Content (Join-Path $src 'app.js')        -Raw -Encoding UTF8
$fechHtml = Get-Content (Join-Path $src 'carteira.html') -Raw -Encoding UTF8

# ── 2) Baixa / usa cache do Chart.js e plugin annotation ──────────────────
$chartjsCache = Join-Path $src '_cache_chartjs.js'
$annoCache    = Join-Path $src '_cache_anno.js'
if (-not (Test-Path $chartjsCache)) {
  Write-Output "Baixando Chart.js 4.4.0..."
  Invoke-WebRequest 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js' -OutFile $chartjsCache
}
if (-not (Test-Path $annoCache)) {
  Write-Output "Baixando chartjs-plugin-annotation 3.0.1..."
  Invoke-WebRequest 'https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@3.0.1/dist/chartjs-plugin-annotation.min.js' -OutFile $annoCache
}
$chartjs = Get-Content $chartjsCache -Raw -Encoding UTF8
$anno    = Get-Content $annoCache    -Raw -Encoding UTF8

# ── 3) Inline: CSS, JS da app, Chart.js, annotation plugin ────────────────
$enc = New-Object System.Text.UTF8Encoding($false)
$b64 = [Convert]::ToBase64String($enc.GetBytes($fechHtml))

$index = $index.Replace('<link rel="stylesheet" href="style.css">',     "<style>`n$css`n</style>")
$index = $index.Replace('<script src="app.js"></script>',               "<script>`n$js`n</script>")
$index = $index.Replace(
  '<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>',
  "<script>`n$chartjs`n</script>")
$index = $index.Replace(
  '<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@3.0.1/dist/chartjs-plugin-annotation.min.js"></script>',
  "<script>`n$anno`n</script>")

# ── 4) Menu Carteira XP ────────────────────────────────────────────────────
$navItem = '      <a class="nav-item" data-page="carteira" href="#" onclick="navigate(''carteira'');loadCarteira();return false;"><span class="nav-icon">&#9673;</span><span>Carteira XP</span></a>'
$index = $index.Replace('</nav>', $navItem + "`n    </nav>")

$pageDiv = '    <div id="page-carteira" class="page" style="padding:0"><iframe id="carteira-frame" title="Carteira XP" style="width:100%;height:100vh;border:0;display:block"></iframe></div>'
$index = $index.Replace('</main>', $pageDiv + "`n  </main>")

$loader = @'
<script type="text/plain" id="carteira-b64">__B64__</script>
<script>
function loadCarteira(){
  var f = document.getElementById('carteira-frame');
  if (f.dataset.loaded) return;
  var b64 = document.getElementById('carteira-b64').textContent.trim();
  var bin = atob(b64);
  var bytes = Uint8Array.from(bin, function(c){ return c.charCodeAt(0); });
  f.srcdoc = new TextDecoder('utf-8').decode(bytes);
  f.dataset.loaded = '1';
}
</script>
'@
$loader = $loader.Replace('__B64__', $b64)
$index = $index.Replace('</body>', $loader + "`n</body>")

# ── 5) Grava index.html ────────────────────────────────────────────────────
$out = Join-Path $PSScriptRoot 'index.html'
[System.IO.File]::WriteAllText($out, $index, $enc)
$kb = [Math]::Round((Get-Item $out).Length / 1KB)
Write-Output "Gerado: $out  ($kb KB)"

# ── 6) Copia manifest.json e sw.js ────────────────────────────────────────
Copy-Item (Join-Path $src 'manifest.json') (Join-Path $PSScriptRoot 'manifest.json') -Force
Copy-Item (Join-Path $src 'sw.js')         (Join-Path $PSScriptRoot 'sw.js')         -Force
Write-Output "Copiados: manifest.json, sw.js"

# ── 7) Gera ícones PNG (192 e 512) ────────────────────────────────────────
function New-FinPlanIcon($size, $outPath) {
  Add-Type -AssemblyName System.Drawing
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g   = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

  # Fundo escuro #0a0c12
  $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 10, 12, 18))
  $g.FillRectangle($bgBrush, 0, 0, $size, $size)

  # Diamante azul (#6395ff → #8b5cf6)
  $c  = [int]($size / 2)
  $r  = [int]($size * 0.36)
  $pts = New-Object 'System.Drawing.PointF[]' 4
  $pts[0] = [System.Drawing.PointF]::new($c,      $c - $r)
  $pts[1] = [System.Drawing.PointF]::new($c + $r, $c)
  $pts[2] = [System.Drawing.PointF]::new($c,      $c + $r)
  $pts[3] = [System.Drawing.PointF]::new($c - $r, $c)

  $grad = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    [System.Drawing.Point]::new(0, 0),
    [System.Drawing.Point]::new($size, $size),
    [System.Drawing.Color]::FromArgb(255, 99, 149, 255),
    [System.Drawing.Color]::FromArgb(255, 139, 92, 246)
  )
  $g.FillPolygon($grad, $pts)

  # "FP" no centro
  $fontSize  = [float]($size * 0.22)
  $font      = New-Object System.Drawing.Font('Segoe UI', $fontSize, [System.Drawing.FontStyle]::Bold)
  $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
  $sf        = New-Object System.Drawing.StringFormat
  $sf.Alignment     = [System.Drawing.StringAlignment]::Center
  $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = New-Object System.Drawing.RectangleF(0, 0, $size, $size)
  $g.DrawString('FP', $font, $textBrush, $rect, $sf)

  $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
  $bgBrush.Dispose(); $grad.Dispose(); $textBrush.Dispose(); $font.Dispose()
}

New-FinPlanIcon 192 (Join-Path $PSScriptRoot 'icon-192.png')
New-FinPlanIcon 512 (Join-Path $PSScriptRoot 'icon-512.png')
Write-Output "Gerados: icon-192.png, icon-512.png"
Write-Output "Build PWA completo!"
