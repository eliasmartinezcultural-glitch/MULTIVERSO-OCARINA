const CACHE="multiverso-ocarina-3.23-experiencias";
const CORE=[
 "./","./index.html","./manifest.webmanifest",
 "./assets/css/estilo.css?v=3.23","./assets/css/dedicatoria.css?v=3.23","./assets/css/salas.css?v=3.23",
 "./assets/js/proyectos.js?v=3.23","./assets/js/experiencia.js?v=3.23","./assets/js/salas.js?v=3.23",
 "./assets/img/mundos/librito.svg","./assets/img/mundos/ocarina-tv.svg","./assets/img/mundos/wild.svg",
 "./assets/img/mundos/sabias.svg","./assets/img/mundos/chanar-hub.svg","./assets/img/mundos/codigo-cero.svg",
 "./assets/img/mundos/youtube.svg","./assets/img/mundos/radio.svg","./assets/img/mundos/social.svg",
 "./assets/img/rosa-benita-bustos.jpg","./assets/img/hero-terrunio-digital.svg","./assets/img/ocarina-icon.svg"
];
self.addEventListener("install",event=>{
 event.waitUntil((async()=>{try{const cache=await caches.open(CACHE);await cache.addAll(CORE);}catch(error){/* La web debe seguir disponible aunque falle un recurso opcional. */}await self.skipWaiting();})());
});
self.addEventListener("activate",event=>{
 event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key.startsWith("multiverso-ocarina-")&&key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim();})());
});
self.addEventListener("fetch",event=>{
 const request=event.request;
 if(request.method!=="GET")return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin)return;
 if(request.mode==="navigate"){
  event.respondWith((async()=>{try{const fresh=await fetch(request,{cache:"no-store"});if(fresh.ok){const cache=await caches.open(CACHE);cache.put("./index.html",fresh.clone());}return fresh;}catch(error){return (await caches.match("./index.html"))||Response.error();}})());
  return;
 }
 event.respondWith((async()=>{const cache=await caches.open(CACHE);const cached=await cache.match(request);try{const fresh=await fetch(request);if(fresh.ok)cache.put(request,fresh.clone());return fresh;}catch(error){return cached||Response.error();}})());
});
