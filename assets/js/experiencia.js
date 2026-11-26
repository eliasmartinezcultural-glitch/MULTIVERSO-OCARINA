(()=> {
"use strict";
const projects=Array.isArray(window.OCARINA_PROJECTS)?window.OCARINA_PROJECTS:[];
const grid=document.getElementById("projectGrid");
const search=document.getElementById("worldSearch");
const count=document.getElementById("worldCount");
const filters=document.getElementById("worldFilters");
const palettes={sage:["#e7efe3","#c8dbc8","#8ca88e","#46664c"],peach:["#f5e8df","#e8cfc0","#c89f8d","#916b5d"],butter:["#f3efd9","#e5dcae","#c8bd83","#81794d"],lilac:["#eee9f4","#d9cde8","#b9a9cf","#78668f"],blue:["#e6eff1","#d1e3e6","#a9c9cf","#5e828a"],rose:["#f4e8e6","#e7d0ce","#cda9a8","#8b666a"]};
const safe=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
let activeFilter="all";
function renderProjects(){
 if(!grid)return;
 const term=(search?.value||"").trim().toLocaleLowerCase("es");
 const shown=projects.filter(p=>(activeFilter==="all"||p.category===activeFilter)&&(!term||[p.name,p.kind,p.description].join(" ").toLocaleLowerCase("es").includes(term)));
 if(count)count.textContent=shown.length+" de "+projects.length+" mundos";
 if(!shown.length){grid.innerHTML='<div class="world-empty"><span>⌕</span><strong>No encontramos esa puerta.</strong><p>Probá con otra palabra o elegí «Todos».</p></div>';return;}
 grid.innerHTML=shown.map((p,index)=>{const c=palettes[p.palette]||palettes.sage;return `<article class="project-card" data-world="${safe(p.roomId||"library")}" style="--art-bg:${c[0]};--art-line:${c[2]};--art-ink:${c[3]};--card-index:${index}">
<div class="project-art" aria-hidden="true"><span class="art-orbit"></span><span class="art-symbol">${safe(p.symbol)}</span><span class="art-world-caption">${safe(p.kind)}</span><span class="art-dots"></span><span class="art-glow"></span></div>
<div class="project-content"><span class="project-number">PUERTA ${safe(p.number)}</span><h3>${safe(p.name)}</h3><p>${safe(p.description)}</p><button class="project-link" type="button" data-room-open="${safe(p.name)}" aria-label="Abrir sala de presentación: ${safe(p.name)}"><span>DESCUBRIR ESTE MUNDO</span><span aria-hidden="true">↗</span></button></div></article>`;}).join("");
 if("IntersectionObserver"in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){grid.querySelectorAll(".project-card").forEach((el,i)=>{el.style.setProperty("--reveal-delay",Math.min(i*45,270)+"ms");el.classList.add("reveal","is-visible");});}
}
renderProjects();
search?.addEventListener("input",renderProjects);
filters?.addEventListener("click",event=>{const button=event.target.closest("[data-filter]");if(!button)return;activeFilter=button.dataset.filter;filters.querySelectorAll("button").forEach(b=>{const selected=b===button;b.classList.toggle("is-active",selected);b.setAttribute("aria-pressed",String(selected));});renderProjects();});
const themeButton=document.getElementById("themeToggle");
themeButton?.addEventListener("click",()=>{const active=document.body.classList.toggle("night-mode");themeButton.setAttribute("aria-pressed",String(active));themeButton.setAttribute("aria-label",active?"Activar modo claro":"Activar modo nocturno");const label=themeButton.querySelector(".utility-label");if(label)label.textContent=active?"Modo claro":"Modo noche";const icon=themeButton.querySelector("[aria-hidden='true']");if(icon)icon.textContent=active?"☀":"☾";});
const soundButton=document.getElementById("soundButton"),soundLabel=document.getElementById("soundLabel"),soundNote=document.getElementById("soundNote");let audioContext=null;
function playOcarinaSound(){const AudioCtx=window.AudioContext||window.webkitAudioContext;if(!AudioCtx){if(soundNote)soundNote.textContent="Tu navegador no permite reproducir este sonido.";return;}try{audioContext||=new AudioCtx();if(audioContext.state==="suspended")audioContext.resume();const now=audioContext.currentTime,master=audioContext.createGain();master.gain.setValueAtTime(.0001,now);master.gain.exponentialRampToValueAtTime(.11,now+.12);master.gain.exponentialRampToValueAtTime(.0001,now+3.7);master.connect(audioContext.destination);[392,523.25,659.25,523.25,440].forEach((frequency,i)=>{const osc=audioContext.createOscillator(),env=audioContext.createGain(),start=now+.12+i*.58;osc.type="sine";osc.frequency.setValueAtTime(frequency,start);env.gain.setValueAtTime(.0001,start);env.gain.exponentialRampToValueAtTime(.34,start+.045);env.gain.exponentialRampToValueAtTime(.0001,start+.52);osc.connect(env);env.connect(master);osc.start(start);osc.stop(start+.55);});if(soundLabel)soundLabel.textContent="Reproducir otra vez";if(soundNote)soundNote.textContent="Un sonido original de Ocarina. Volvé a escucharlo cuando quieras.";soundButton?.classList.add("is-playing");window.setTimeout(()=>soundButton?.classList.remove("is-playing"),2300);}catch(error){if(soundNote)soundNote.textContent="No se pudo iniciar el sonido. Probá nuevamente.";}}
soundButton?.addEventListener("click",playOcarinaSound);
if("IntersectionObserver"in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll(".simple-origin-copy,.doors-intro").forEach(el=>{el.classList.add("reveal");observer.observe(el);});}
})();