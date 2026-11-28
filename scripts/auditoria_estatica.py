from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re
import sys

ROOT = Path(".").resolve()
errors = []
warnings = []

class PageAudit(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.duplicates = set()
        self.fragments = []
        self.local_refs = []
        self.external_blank = []
        self.html_lang = None
        self.title_count = 0
        self.h1_count = 0
        self.main_count = 0
        self.image_without_alt = []
        self.controls_without_name = []
        self.label_targets = set()
        self.meta = {}
        self.whatsapp_links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta":
            key = attrs.get("property") or attrs.get("name")
            if key:
                self.meta[key] = attrs.get("content", "")
        if tag == "a" and attrs.get("href", "").startswith("https://wa.me/"):
            self.whatsapp_links.append(attrs["href"])
        if tag == "html":
            self.html_lang = attrs.get("lang")
        if tag == "title":
            self.title_count += 1
        if tag == "h1":
            self.h1_count += 1
        if tag == "main":
            self.main_count += 1
        if tag == "label" and attrs.get("for"):
            self.label_targets.add(attrs["for"])
        if tag == "img" and "alt" not in attrs:
            self.image_without_alt.append(attrs.get("src", "(imagen sin src)"))
        if tag in ("input", "select", "textarea"):
            if attrs.get("type", "").lower() != "hidden":
                has_name = bool(attrs.get("aria-label") or attrs.get("aria-labelledby") or attrs.get("title"))
                if attrs.get("id") and attrs.get("id") in self.label_targets:
                    has_name = True
                if not has_name and not attrs.get("id"):
                    self.controls_without_name.append(tag)
                elif not has_name:
                    self.controls_without_name.append(f"{tag}#{attrs['id']}")
        ident = attrs.get("id")
        if ident:
            if ident in self.ids:
                self.duplicates.add(ident)
            self.ids.add(ident)

        href = attrs.get("href", "")
        if href.startswith("#") and len(href) > 1:
            self.fragments.append(href[1:])

        for key in ("src", "href", "poster"):
            value = attrs.get(key, "")
            if not value or value.startswith(("data:", "blob:", "javascript:", "#")):
                continue
            parsed = urlsplit(value)
            if parsed.scheme or parsed.netloc:
                if key == "href" and attrs.get("target") == "_blank":
                    rel = set(attrs.get("rel", "").lower().split())
                    if not {"noopener", "noreferrer"}.issubset(rel):
                        self.external_blank.append(value)
                continue
            if parsed.path:
                self.local_refs.append((tag, key, parsed.path))

pages = sorted(ROOT.rglob("*.html"))
if not pages:
    errors.append("No se encontraron páginas HTML.")

total_refs = 0
for page in pages:
    audit = PageAudit()
    try:
        audit.feed(page.read_text(encoding="utf-8"))
    except Exception as exc:
        errors.append(f"No se pudo leer {page.relative_to(ROOT)}: {exc}")
        continue

    if not audit.html_lang:
        errors.append(f"Falta lang en <html> en {page.relative_to(ROOT)}")
    if audit.title_count != 1:
        errors.append(f"Se esperaba exactamente un <title> en {page.relative_to(ROOT)}")
    if audit.h1_count != 1:
        errors.append(f"Se esperaba exactamente un encabezado principal <h1> en {page.relative_to(ROOT)}")
    if audit.main_count < 1:
        errors.append(f"Falta el landmark <main> en {page.relative_to(ROOT)}")
    for image in audit.image_without_alt:
        errors.append(f"Imagen sin atributo alt en {page.relative_to(ROOT)}: {image}")
    for control in audit.controls_without_name:
        errors.append(f"Control sin nombre accesible en {page.relative_to(ROOT)}: {control}")

    for ident in sorted(audit.duplicates):
        errors.append(f"ID duplicado en {page.relative_to(ROOT)}: {ident}")

    for fragment in sorted(set(audit.fragments)):
        if fragment not in audit.ids:
            errors.append(f"Destino interno inexistente en {page.relative_to(ROOT)}: #{fragment}")

    for tag, attr, value in audit.local_refs:
        total_refs += 1
        target = (page.parent / value).resolve()
        if not target.is_file():
            errors.append(f"Recurso local inexistente en {page.relative_to(ROOT)} ({tag}.{attr}): {value}")

    for value in audit.external_blank:
        errors.append(f"Enlace externo target=_blank sin rel=noopener noreferrer en {page.relative_to(ROOT)}: {value}")

# Check local files referenced by CSS url(...), resolving paths from each stylesheet.
css_count = 0
for css in sorted(ROOT.rglob("*.css")):
    css_count += 1
    content = css.read_text(encoding="utf-8")
    for match in re.finditer(r"url\(\s*(['\"]?)(.*?)\1\s*\)", content, re.I):
        value = match.group(2).strip()
        if not value or value.startswith(("data:", "blob:", "#")):
            continue
        parsed = urlsplit(value)
        if parsed.scheme or parsed.netloc:
            continue
        target = (css.parent / parsed.path).resolve()
        if parsed.path and not target.is_file():
            errors.append(f"Recurso CSS inexistente en {css.relative_to(ROOT)}: {value}")

# The portal is intentionally a nine-world product: detect accidental omissions/duplicates.
expected = ["LIBRITO", "OCARINA TV", "OCARINA WILD", "¿SABÍAS QUE?", "CHAÑAR HUB", "CÓDIGO CERO", "YOUTUBE", "RADIO ONLINE", "OCARINA SOCIAL"]
source = (ROOT / "assets/js/proyectos.js").read_text(encoding="utf-8")
found = re.findall(r'\{name:"([^"]+)"', source)
if found != expected:
    errors.append("El catálogo de proyectos no coincide exactamente con los nueve mundos esperados.")
if len(found) != len(set(found)):
    errors.append("Hay nombres de mundos duplicados en proyectos.js.")

# The public entry point must carry reliable social metadata and a real WhatsApp share URL.
index_path = ROOT / "index.html"
if index_path.is_file():
    index_html = index_path.read_text(encoding="utf-8")
    index_audit = PageAudit()
    index_audit.feed(index_html)

    for key in ("og:title", "og:description", "og:image", "twitter:card", "twitter:image"):
        if not index_audit.meta.get(key):
            errors.append(f"Falta metadato social obligatorio en index.html: {key}")

    if index_audit.meta.get("twitter:card") != "summary_large_image":
        errors.append("La tarjeta de Twitter/X debe usar summary_large_image.")

    og_image = index_audit.meta.get("og:image", "")
    if og_image and not og_image.lower().endswith((".jpg", ".jpeg", ".png")):
        errors.append("La imagen de vista previa social debe ser JPG, JPEG o PNG; no usar SVG.")
    if og_image:
        image_path = urlsplit(og_image).path
        marker = "/MULTIVERSO-OCARINA/"
        if marker in image_path:
            local_image = ROOT / image_path.split(marker, 1)[1]
            if not local_image.is_file():
                errors.append(f"La imagen de vista previa social no existe en el repositorio: {local_image.relative_to(ROOT)}")

    if not any("MULTIVERSO-OCARINA" in unquote(link) for link in index_audit.whatsapp_links):
        errors.append("Falta un enlace de WhatsApp que comparta la URL pública del Multiverso.")

    if not re.search(r"Elías Martínez\s*<span>\s*· Fundador\s*</span>", index_html):
        errors.append("La dedicatoria debe conservar la firma exacta «Elías Martínez · Fundador».")

    dedication_css = ROOT / "assets/css/dedicatoria-estable.css"
    if not dedication_css.is_file():
        errors.append("Falta la hoja de estilos estable de la dedicatoria.")
    else:
        css_text = dedication_css.read_text(encoding="utf-8")
        caption_rule = re.search(r"\.dedication-portrait\s+figcaption\s*\{([^}]*)\}", css_text)
        if not caption_rule or not re.search(r"position\s*:\s*static", caption_rule.group(1)):
            errors.append("El epígrafe de la foto debe permanecer en el flujo normal para evitar superposiciones.")

    version_meta = re.search(r'name="application-version"\s+content="([^"]+)"', index_html)
    version_js = ROOT / "assets/js/version.js"
    version_source = version_js.read_text(encoding="utf-8") if version_js.is_file() else ""
    version_code = re.search(r'const VERSION="([^"]+)"', version_source)
    if not version_meta or not version_code or version_meta.group(1) != version_code.group(1):
        errors.append("La versión declarada en HTML y JavaScript debe coincidir.")

if errors:
    print("\n".join("ERROR: " + item for item in errors))
    sys.exit(1)

print(f"OK: {len(pages)} páginas HTML, {total_refs} referencias locales HTML, {css_count} hojas CSS y sus recursos, IDs y navegación interna revisados.")
print("OK: catálogo de nueve mundos, sin omisiones ni duplicados.")
