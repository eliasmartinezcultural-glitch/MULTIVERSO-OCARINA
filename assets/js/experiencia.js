(()=> {
"use strict";
// La grilla HTML es el respaldo visible y navegable.
const shareButton=document.getElementById("sharePortal");
const shareStatus=document.getElementById("portalShareStatus");
const portalUrl=()=>location.origin+location.pathname+location.search;
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
 const payload={title:"Multiverso Ocarina",text:"Un mundo de muchos mundos. Explorá las nueve puertas de Ocarina.",url};
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