(()=> {
"use strict";
// La grilla HTML es el respaldo visible y navegable.
// No reemplazarla con JavaScript: si un script falla, las nueve puertas siguen disponibles.
let installPrompt=null;
const installButton=document.getElementById("installApp");
window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();installPrompt=event;if(installButton)installButton.hidden=false;});
installButton?.addEventListener("click",async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installButton.hidden=true;});
window.addEventListener("appinstalled",()=>{if(installButton)installButton.hidden=true;});
})();