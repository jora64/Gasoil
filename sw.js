const C="carb-v1",F=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener("fetch",e=>{
  if(e.request.url.includes("data.economie.gouv.fr"))return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
