(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const projects=window.OCARINA_PROJECTS||[];
const grid=$("#projectGrid"),search=$("#projectSearch"),empty=$("#emptyState"),count=$("#projectCount");
const palettes={sage:["#e4eee2","#d4e3d2","#b8cdb8","#66836c"],peach:["#f3e5dc","#ebd2c4","#d7b6a6","#9d766a"],butter:["#f2eedc","#e9e1bd","#d5c99e","#8e8961"],lilac:["#eee9f4","#ded5eb","#c7b9d9","#88769f"],blue:["#e5eef0","#d4e4e8","#b6d0d5","#688b94"],rose:["#f2e5e4","#e8d2d1","#d8b8b8","#9c777b"]};
const categories={memoria:["memoria"],audiovisual:["audiovisual"],naturaleza:["naturaleza"],juego:["juego"],comunidad:["comunidad"]};
let activeFilter="todos";
function categoryFor(p){const s=(p.kind+" "+p.name+" "+p.description).toLowerCase();if(/librito|memoria|biblioteca|document/.test(s))return"memoria";if(/tv|video|histor/.test(s))return"audiovisual";if(/wild|naturaleza|fauna|flora/.test(s))return"naturaleza";if(/sabías|juego|curios/.test(s))return"juego";return"comunidad"}
function render(){
 const term=(search?.value||"").trim().toLocaleLowerCase("es");
 const filtered=projects.filter(p=>(activeFilter==="todos"||categoryFor(p)===activeFilter)&&(!term||(p.name+" "+p.kind+" "+p.description).toLocaleLowerCase("es").includes(term)));
 if(grid)grid.innerHTML=filtered.map(p=>{const c=palettes[p.palette]||palettes.sage;return `<article class="project-card" style="--art-bg:${c[0]};--art-line:${c[2]};--art-ink:${c[3]}"><div class="project-art" aria-hidden="true"><span class="art-orbit"></span><span class="art-symbol">${p.symbol}</span><span class="art-dots"></span></div><div class="project-content"><div class="project-meta"><span>${p.kind}</span><span>${p.number} / 06</span></div><h3>${p.name}</h3><p>${p.description}</p><a class="project-link" href="${p.url}" target="_blank" rel="noopener noreferrer"><span>${p.action}</span><span>↗</span></a></div></article>`}).join("");
 if(empty)empty.hidden=filtered.length>0;
 if(count)count.textContent=String(filtered.length).padStart(2,"0");
}
render();
if(search)search.addEventListener("input",render);
$$(".filter-chip").forEach(btn=>btn.addEventListener("click",()=>{activeFilter=btn.dataset.filter;$$(".filter-chip").forEach(b=>{const on=b===btn;b.classList.toggle("active",on);b.setAttribute("aria-pressed",String(on))});render()}));
document.addEventListener("keydown",e=>{if(e.key==="/"&&!/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();search?.focus()}if(e.key==="Escape"&&document.activeElement===search){search.value="";render();search.blur()}});
const menu=$("#menuToggle"),nav=$("#mainNav");
function closeMenu(){if(!menu||!nav)return;nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Abrir menú")}
if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú")});$$(".nav a").forEach(a=>a.addEventListener("click",closeMenu));document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu()});window.addEventListener("resize",()=>{if(innerWidth>700)closeMenu()})}
const back=$("#backTop");window.addEventListener("scroll",()=>back?.classList.toggle("visible",scrollY>420),{passive:true});back?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
const share=$("#shareButton");share?.addEventListener("click",async()=>{const data={title:document.title,text:"Descubrí Universo Ocarina: raíces rurales, mente creativa y futuro digital.",url:location.href};try{if(navigator.share)await navigator.share(data);else if(navigator.clipboard&&isSecureContext){await navigator.clipboard.writeText(location.href);share.textContent="✓ Enlace copiado";setTimeout(()=>share.textContent="Compartir ↗",2200)}else prompt("Copiá este enlace:",location.href)}catch(e){if(e.name!=="AbortError")prompt("Copiá este enlace:",location.href)}});
const year=$("#currentYear");if(year)year.textContent=new Date().getFullYear();
if("IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");obs.unobserve(e.target)}}),{threshold:.1});$$(".founder-layout,.connect-heading,.connect-card,.project-card,.catalog-footnote").forEach(el=>{el.classList.add("reveal");obs.observe(el)})}
})();