(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  // Construye las puertas desde un único listado fácil de mantener.
  const grid = $("#projectGrid");
  const projects = window.OCARINA_PROJECTS || [];
  if (grid) {
    grid.innerHTML = projects.map((project, index) => `
      <article class="project-card reveal" style="--delay:${index * 65}ms">
        <div class="project-top">
          <span class="project-icon" aria-hidden="true">${project.icon}</span>
          <span class="project-kind">${project.kind}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">
          ${project.action} <span aria-hidden="true">↗</span>
        </a>
      </article>`).join("");
  }

  // Menú accesible: se abre con un toque y se cierra al elegir una sección.
  const menuButton = $("#menuToggle");
  const nav = $("#mainNav");
  function closeMenu() {
    if (!menuButton || !nav) return;
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("menu-open");
  }
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      document.body.classList.toggle("menu-open", open);
    });
    $$("a", nav).forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 680) closeMenu();
    });
  }

  // Aparición suave de elementos; el contenido sigue visible si no hay soporte.
  const revealItems = $$(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Línea de recorrido discreta y botón para volver arriba.
  const progress = $("#readingProgress");
  const backTop = $("#backTop");
  let ticking = false;
  function updateScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = percent + "%";
    if (backTop) backTop.classList.toggle("visible", window.scrollY > 500);
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, {passive:true});
  updateScroll();
  if (backTop) backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

  // Compartir: usa el menú nativo del teléfono o copia el enlace.
  const shareButton = $("#shareButton");
  if (shareButton) {
    shareButton.addEventListener("click", async () => {
      const shareData = {title:document.title, text:"Conocé Universo Ocarina: raíces rurales e ideas digitales.", url:window.location.href};
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(window.location.href);
          shareButton.textContent = "✓ Enlace copiado";
          window.setTimeout(() => shareButton.textContent = "Compartir", 2200);
        } else {
          window.prompt("Copiá este enlace para compartir Universo Ocarina:", window.location.href);
        }
      } catch (error) {
        if (error.name !== "AbortError") window.prompt("Copiá este enlace:", window.location.href);
      }
    });
  }

  const year = $("#currentYear");
  if (year) year.textContent = new Date().getFullYear();
})();