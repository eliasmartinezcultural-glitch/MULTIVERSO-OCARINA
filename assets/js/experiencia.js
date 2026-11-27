(()=> {
"use strict";
// La grilla HTML es el respaldo visible y navegable.
const shareButton=document.getElementById("sharePortal");
const shareStatus=document.getElementById("portalShareStatus");
const portalUrl=()=>location.origin+location.pathname;
const root=document.documentElement;
const accessMenu=document.querySelector(".accessibility-menu");
let readerLevel=0;
const readerButtons=[...document.querySelectorAll("[data-reader-size]")];
const contrastButton=document.querySelector("[data-reader-contrast]");
const applyReaderSize=()=>{
 root.classList.toggle("reader-large",readerLevel===1);
 root.classList.toggle("reader-extra-large",readerLevel===2);
 const status=document.getElementById("readerStatus");if(status)status.textContent=readerLevel===0?"Tamaño de lectura normal.":readerLevel===1?"Texto ampliado.":"Texto muy ampliado.";
};
readerButtons.forEach(button=>button.addEventListener("click",()=>{
 readerLevel=button.dataset.readerSize==="up"?Math.min(2,readerLevel+1):Math.max(0,readerLevel-1);
 applyReaderSize();
}));
contrastButton?.addEventListener("click",()=>{
 const enabled=document.body.classList.toggle("high-contrast");
 contrastButton.setAttribute("aria-pressed",String(enabled));
});
document.querySelector("[data-reader-reset]")?.addEventListener("click",()=>{
 readerLevel=0;document.body.classList.remove("high-contrast");
 contrastButton?.setAttribute("aria-pressed","false");applyReaderSize();
});
accessMenu?.addEventListener("keydown",event=>{if(event.key==="Escape"){accessMenu.open=false;accessMenu.querySelector("summary")?.focus();}});
document.addEventListener("pointerdown",event=>{if(accessMenu?.open&&!accessMenu.contains(event.target))accessMenu.open=false;});
applyReaderSize();
// Buscador sencillo: encuentra puertas por nombre, función o descripción.
const doorSearch=document.getElementById("doorSearch");
const doorSearchClear=document.getElementById("doorSearchClear");
const doorSearchStatus=document.getElementById("doorSearchStatus");
const doorCards=[...document.querySelectorAll("#projectGrid .project-card")];
const normalizeText=value=>String(value??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("es");
const searchAliases={
 "LIBRITO":"estudiar escuela tarea trabajo practico documento archivo hemeroteca noticia libro lectura autor fuente citar investigacion",
 "OCARINA TV":"video pelicula documental entrevista historia mirar ver escuela familia cultura territorio",
 "OCARINA WILD":"animal planta ave pez naturaleza fauna flora foto fotografia huella ambiente observar",
 "¿SABÍAS QUE?":"dato curiosidad pregunta respuesta juego aprender descubrir escuela estudiante familia",
 "CHAÑAR HUB":"telefono direccion numero contacto servicio tramite salud transporte comercio vecino lugar horario mapa",
 "CÓDIGO CERO":"emergencia ayuda seguridad orientacion telefono numero urgente servicio oficial",
 "YOUTUBE":"canal video estreno publicaciones recorridos seguir",
 "RADIO ONLINE":"radio escuchar sonido musica señal online",
 "OCARINA SOCIAL":"foto fotografia imagen redes publicaciones compartir comunidad familia recuerdos"
};
const filterDoors=()=>{
 const query=normalizeText(doorSearch?.value.trim()||"");
 let visible=0;
 doorCards.forEach(card=>{
  const name=card.dataset.roomOpen||"";
  const searchable=normalizeText(card.textContent+" "+(searchAliases[name]||""));
  const match=!query||searchable.includes(query);
  card.hidden=!match;
  if(match)visible++;
 });
 if(doorSearchClear)doorSearchClear.hidden=!query;
 if(doorSearchStatus)doorSearchStatus.textContent=query?(visible?visible+" "+(visible===1?"mundo encontrado.":"mundos encontrados."):"No encontramos una puerta con esa palabra. Probá con otra.") :"Buscá por necesidad o tema: tarea, teléfono, animales, fotos, trámites, historia, libros.";
};
doorSearch?.addEventListener("input",filterDoors);
doorSearchClear?.addEventListener("click",()=>{doorSearch.value="";filterDoors();doorSearch.focus();});
async function copyText(value){
 if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(value);return true;}
 const field=document.createElement("textarea");
 field.value=value;field.setAttribute("readonly","");
 field.style.position="fixed";field.style.opacity="0";field.style.pointerEvents="none";
 document.body.append(field);field.select();
 let copied=false;try{copied=document.execCommand("copy");}catch(error){}
 field.remove();return copied;
}
shareButton?.addEventListener("click",async()=>{
 const url=portalUrl();
 const payload={title:"Multiverso Ocarina",text:"Nueve mundos para descubrir historias, naturaleza, cultura y comunidad de San Patricio del Chañar.",url};
 shareButton.disabled=true;
 if(shareStatus)shareStatus.textContent="Preparando enlace…";
 try{
  if(navigator.share){await navigator.share(payload);if(shareStatus)shareStatus.textContent="Menú para compartir abierto.";}
  else if(await copyText(url)){if(shareStatus)shareStatus.textContent="Enlace copiado. Ya podés pegarlo en WhatsApp.";}
  else if(shareStatus)shareStatus.textContent="No se pudo copiar automáticamente. Copiá el enlace desde la barra del navegador.";
 }catch(error){
  if(error?.name!=="AbortError"&&shareStatus)shareStatus.textContent="No se pudo compartir. Probá nuevamente.";
 }finally{shareButton.disabled=false;}
});

})();