(()=> {
"use strict";
const projects=Array.isArray(window.OCARINA_PROJECTS)?window.OCARINA_PROJECTS:[];
const grid=document.getElementById("projectGrid");
const esc=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
if(grid){
 grid.innerHTML=projects.map((p,i)=>`<article class="world-card" data-world="${esc(p.roomId)}" style="--world-index:${i}">
  <button class="world-entry" type="button" data-room-open="${esc(p.name)}" aria-label="Entrar en ${esc(p.name)}" aria-haspopup="dialog" aria-controls="worldDialog">
   <span class="world-illustration"><img src="${esc(p.image)}" alt="" loading="lazy" decoding="async"><span class="world-number">${String(i+1).padStart(2,"0")}</span><span class="world-brand">MULTIVERSO OCARINA</span></span>
   <span class="world-card-copy"><b>${esc(p.name)}</b><small>${esc(p.description)}</small><span class="world-enter">ENTRAR <i aria-hidden="true">↗</i></span></span>
  </button>
 </article>`).join("");
}
window.OCARINA_VISIT=()=>{};
let installPrompt=null;
const installButton=document.getElementById("installApp");
window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();installPrompt=event;if(installButton)installButton.hidden=false;});
installButton?.addEventListener("click",async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installButton.hidden=true;});
window.addEventListener("appinstalled",()=>{if(installButton)installButton.hidden=true;});
})();