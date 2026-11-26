(()=>{"use strict";
const root=document.documentElement;
const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
let frame=0;
const updateProgress=()=>{
 frame=0;
 const max=root.scrollHeight-window.innerHeight;
 const progress=max>0?Math.min(1,Math.max(0,window.scrollY/max)):0;
 root.style.setProperty("--ocarina-reading-progress",String(progress));
};
const onScroll=()=>{if(!frame)frame=requestAnimationFrame(updateProgress);};
window.addEventListener("scroll",onScroll,{passive:true});
window.addEventListener("resize",onScroll,{passive:true});
updateProgress();
// Las puertas aparecen al entrar en el campo visual; sin ocultar contenido si no hay soporte.
const cards=[...document.querySelectorAll("#projectGrid .project-card")];
const revealTargets=[...cards,document.querySelector(".simple-origin .origin-card")].filter(Boolean);
if(!reduced.matches&&"IntersectionObserver"in window){
 root.classList.add("ocarina-motion-ready");
 const observer=new IntersectionObserver((entries,obs)=>{
  entries.forEach(entry=>{
   if(!entry.isIntersecting)return;
   entry.target.classList.add("ocarina-is-visible");
   obs.unobserve(entry.target);
  });
 },{rootMargin:"0px 0px -7% 0px",threshold:.08});
 revealTargets.forEach((item,index)=>{
  item.style.setProperty("--ocarina-motion-delay",Math.min(index%3,2)*75+"ms");
  observer.observe(item);
 });
}else revealTargets.forEach(item=>item.classList.add("ocarina-is-visible"));
// Profundidad mínima del paisaje, solo con mouse/trackpad y sin preferencia de movimiento reducido.
const hero=document.querySelector(".simple-hero");
const landscape=document.querySelector(".hero-landscape");
const finePointer=window.matchMedia("(hover: hover) and (pointer: fine)").matches;
if(hero&&landscape&&finePointer&&!reduced.matches){
 let pointerFrame=0,lastY=0,lastX=0;
 hero.addEventListener("pointermove",event=>{
  lastX=(event.clientX/Math.max(1,innerWidth)-.5)*2;
  lastY=(event.clientY/Math.max(1,innerHeight)-.5)*2;
  if(pointerFrame)return;
  pointerFrame=requestAnimationFrame(()=>{
   hero.style.setProperty("--ocarina-depth-x",(lastX*2).toFixed(2)+"px");
   hero.style.setProperty("--ocarina-depth-y",(lastY*1.5).toFixed(2)+"px");
   pointerFrame=0;
  });
 },{passive:true});
 hero.addEventListener("pointerleave",()=>{
  hero.style.setProperty("--ocarina-depth-x","0px");
  hero.style.setProperty("--ocarina-depth-y","0px");
 });
}
// La navegación por hash y los accesos directos mantienen su funcionamiento original.
window.addEventListener("pageshow",updateProgress);
reduced.addEventListener?.("change",event=>{
 if(event.matches){
  root.classList.remove("ocarina-motion-ready");
  revealTargets.forEach(item=>item.classList.add("ocarina-is-visible"));
  hero?.style.removeProperty("--ocarina-depth-x");
  hero?.style.removeProperty("--ocarina-depth-y");
 }
});
})();