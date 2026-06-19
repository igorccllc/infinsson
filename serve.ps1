$port = 8090
$dir  = $PSScriptRoot
$url  = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)
$listener.Start()
Write-Output "Serving $dir on $url"
while ($listener.IsListening) {
    $ctx  = $listener.GetContext()
    $req  = $ctx.Request
    $resp = $ctx.Response
    $path = $req.Url.LocalPath -replace '/','\'
    if ($path -eq '\' -or $path -eq '') { $path = '\index.html' }
    $file = Join-Path $dir $path.TrimStart('\')
    if (Test-Path $file -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($file).ToLower()
        $mime = switch($ext){ '.html'{'text/html; charset=utf-8'}; '.css'{'text/css'}; '.js'{'application/javascript'}; default{'application/octet-stream'} }
        $resp.ContentType = $mime
        $bytes = [System.IO.File]::ReadAllBytes($file)
        $resp.ContentLength64 = $bytes.Length
        $resp.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $resp.StatusCode = 404
    }
    $resp.OutputStream.Close()
}
