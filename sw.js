const CACHE = 'finplan-20261118095750';
const PRECACHE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  // cache:'reload' forca ida a rede: sem isso o precache pode reidratar
  // o index.html velho a partir do cache HTTP do GitHub Pages.
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll(PRECACHE.map(u => new Request(u, { cache: 'reload' })))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Bibliotecas em CDN têm a versão na URL: o conteúdo de uma URL nunca muda.
const CDN_HOSTS = ['cdn.jsdelivr.net', 'cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

// Só guarda resposta boa. 'opaque' é <script>/<link> de outra origem (status
// ilegível); guardar é o único jeito de a biblioteca funcionar offline.
function guarda(req, res) {
  if (res.ok || res.type === 'opaque') {
    const copia = res.clone();
    caches.open(CACHE).then(c => c.put(req, copia));
  }
  return res;
}

// Sem rede e sem cache: só uma navegação recebe o app. Um script ou um JSON
// que recebesse o index.html quebraria com "Unexpected token '<'".
function semRede(req) {
  return req.mode === 'navigate' ? caches.match('./index.html') : Response.error();
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Sync do Google Sheets: nunca passa pelo cache.
  if (url.hostname.includes('sheets.googleapis') || url.hostname.includes('script.google')) return;

  // App e bibliotecas: cache primeiro. O cache do app troca a cada build (CACHE
  // leva a versão), então nada fica velho além de um deploy.
  if (url.origin === self.location.origin || CDN_HOSTS.includes(url.hostname)) {
    e.respondWith(
      caches.match(req).then(cached => cached ||
        fetch(req).then(res => guarda(req, res)).catch(() => semRede(req)))
    );
    return;
  }

  // APIs de dados (CDI/IPCA do BCB etc.): rede primeiro, cache só se estiver offline.
  e.respondWith(
    fetch(req).then(res => guarda(req, res))
      .catch(() => caches.match(req).then(cached => cached || semRede(req)))
  );
});
