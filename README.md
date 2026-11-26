# Multiverso Ocarina

**Versión vigente: 3.44**  
**Un mundo de muchos mundos.**  
*Raíces locales. Ideas sin fronteras.*

Portal público creado por Ocarina Producciones desde San Patricio del Chañar, Neuquén. Reúne nueve puertas en una misma experiencia: territorio, cultura, memoria, naturaleza, comunidad y tecnología.

## Las nueve puertas

| Mundo | Una sola ley |
| --- | --- |
| LIBRITO | Leer |
| OCARINA TV | Mirar |
| OCARINA WILD | Observar |
| ¿SABÍAS QUE? | Descubrir |
| CHAÑAR HUB | Conectar |
| CÓDIGO CERO | Orientarse |
| YOUTUBE | Seguir |
| RADIO ONLINE | Escuchar |
| OCARINA SOCIAL | Compartir |

Cada puerta ofrece una experiencia breve dentro del portal y un acceso **Experiencia completa** al proyecto original. Los proyectos originales permanecen separados y no se modifican desde este repositorio.

## Criterios de diseño

- El contenido debe aparecer antes que las explicaciones.
- Una acción principal por mundo; controles solo cuando cumplen una función.
- Cada mundo conserva su identidad visual y su propósito.
- Ocarina TV usa un único reproductor de video; Radio Online, un único reproductor de audio.
- Si un servicio externo no permite integrarse, se ofrece un enlace alternativo claro.
- La portada conserva nueve enlaces HTML estáticos: si JavaScript falla, las puertas siguen visibles y navegables.
- Mobile-first para teléfonos, controles táctiles amplios, navegación por teclado y movimiento reducido.
- Compartir el portal desde el menú nativo del teléfono o copiar el enlace como alternativa.
- Las salas relacionadas reinician su desplazamiento al cambiar de mundo.
- No inventar datos, fuentes, contactos, estadísticas ni disponibilidad.

## Arquitectura

Sitio estático para GitHub Pages. No requiere registro ni base de datos.

- `index.html`: portada, nueve puertas, metadatos y dedicatoria.
- `assets/js/proyectos.js`: datos y destinos de los nueve mundos.
- `assets/js/experiencia.js`: instalación opcional como aplicación.
- `assets/js/salas.js`: contenido y comportamiento de las salas.
- `assets/css/estilo.css`: identidad general y portada.
- `assets/css/salas.css`: puertas, salas y experiencias.
- `assets/css/mundos.css`: identidad visual por mundo.
- `assets/css/mobile.css`: experiencia móvil-first y áreas seguras.
- `assets/css/dedicatoria.css`: presentación de la dedicatoria.
- `sw.js` y `manifest.webmanifest`: caché y configuración instalable.

La versión móvil prioriza una portada compacta, puertas táctiles, salas a pantalla completa y navegación simple. Los datos de presentación no utilizados se eliminaron de la configuración de salas para mantener una sola fuente de contenido. Las nueve puertas cuentan con ilustraciones vectoriales originales de mayor detalle, diseñadas para su función y paleta. La portada y las salas comparten el mismo lenguaje visual. La sala LIBRITO muestra un corte fechado del catálogo: 176 registros, 205 noticias y 71 recursos (26-11-2026). OCARINA TV integra 47 episodios y ¿SABÍAS QUE? dispone de 8 preguntas en su banco actual. RADIO ONLINE incorpora un reproductor persistente con volumen y modo compacto; la reproducción continúa al cerrar la sala dentro de la misma página, y puede ofrecer controles de pantalla bloqueada en navegadores compatibles. `assets/js/version.js` se conserva por compatibilidad histórica, pero no se carga desde la portada.

## Publicación

- Portal: https://eliasmartinezcultural-glitch.github.io/MULTIVERSO-OCARINA/
- Repositorio: https://github.com/eliasmartinezcultural-glitch/MULTIVERSO-OCARINA

**Universo Ocarina** · Elías Martínez · San Patricio del Chañar, Neuquén.


## Ajustes 3.36

- El reproductor persistente se inicializa únicamente al entrar a Radio Online, evitando trabajo innecesario en las otras ocho salas.
- Cerrar una sala desde el botón, volver o elegir Inicio conserva una navegación coherente y devuelve el foco al acceso anterior cuando corresponde.
- Compartir un mundo incluye una alternativa de copia compatible con navegadores móviles sin Clipboard API.
- Los controles muestran un foco visible para navegación por teclado y accesibilidad.
- El estado de conexión de radio informa correctamente cuando la reproducción no pudo iniciarse.


## Ajustes 3.36 · experiencia simple para personas mayores

- Portada móvil con textos más legibles, botones principales de mayor tamaño y menos etiquetas pequeñas.
- Las nueve puertas pasan a una lista vertical fácil de recorrer, con imagen, nombre y descripción visibles en cada fila.
- Se eliminan números decorativos y símbolos redundantes de las tarjetas en pantallas pequeñas.
- Las salas aumentan tamaños de lectura y áreas táctiles; las puertas relacionadas se muestran en una lista clara.
- Compartir en la portada muestra texto junto al icono, no depende de reconocer un símbolo.
- Se mantiene la estructura original de los nueve mundos y el acceso a la experiencia completa.


## Ajustes 3.37 · redes y navegación sencilla

- Ocarina Social incorpora vistas integradas de las publicaciones de Instagram y Facebook, con acceso directo a cada perfil/página si la plataforma no permite la vista incrustada.
- YouTube queda presentado como una selección de videos ya publicados, con enlace visible al canal completo.
- Se evita presentar publicaciones inventadas: las vistas de Instagram y Facebook provienen de las plataformas originales y su disponibilidad depende de ellas.
- Se simplifican los llamados a la acción de las nueve puertas y los textos para volver a las puertas, ir al inicio y cerrar una sala.
- En móviles, las acciones principales de las salas se presentan en botones grandes y apilados para facilitar el uso táctil.


## Ajustes 3.39 · control de cierre visible

- El cierre de las salas muestra la palabra «Cerrar» junto al símbolo, con un botón ancho y fácil de reconocer en móviles y escritorio.


## 3.39 · portal web directo

- Se elimina el botón y la lógica de instalación de la aplicación, el manifiesto PWA y el registro del service worker. El portal se abre y usa desde el navegador.
- Al entrar, los mundos ya no ofrecen «Ir al inicio»: se vuelve a la grilla de puertas mediante «Volver a las puertas» o el botón de cierre.
- Se retira el botón de regreso al inicio del pie de página para evitar duplicaciones.


## 3.40 · montaje editorial profesional de las salas

- Se incorpora una capa visual específica para las salas, separada de los estilos generales de la portada.
- Cada mundo presenta una jerarquía más clara: identidad visual, contenido principal, acceso a la experiencia completa y mundos conectados.
- Se unifican tarjetas, encabezados, marcos, filtros y botones sin borrar la personalidad cromática de cada mundo.
- LIBRITO gana navegación de secciones más visible; OCARINA TV, una pantalla principal y catálogo más ordenado; WILD, un atlas con mayor protagonismo; y las salas de curiosidades, guía local, orientación, canal, radio y social reciben una composición más clara.
- Se ajustan las proporciones de contenido incrustado y los controles para pantallas pequeñas.
- No se modifican los repositorios originales de los mundos.
- Los servicios externos incrustados siguen dependiendo de las políticas de cada plataforma y de la conexión.


## 3.41 · salas como puertas de entrada, proyectos como experiencias completas

- Cada sala explica en pocas líneas qué es ese mundo y qué ofrece dentro del Multiverso.
- Se identifica claramente la sala como una vista breve de descubrimiento, no como reemplazo del proyecto original.
- El acceso al proyecto original se presenta con una llamada directa y consistente: «Ir a la versión completa».
- La explicación editorial aparece antes del contenido de muestra; la experiencia concreta sigue siendo protagonista.
- Se conserva la identidad visual de cada mundo, los contenidos integrados y la navegación simple para celulares.
- No se modifican los repositorios originales de los proyectos.


## 3.42 · simplificación y sistema visual rural-tech

- Se retira la navegación secundaria de mundos relacionados dentro de cada sala: las nueve puertas del portal siguen siendo el mapa principal.
- Se unifica el acceso al proyecto original en una sola llamada por sala: «Ir a la versión completa».
- Se eliminan enlaces alternativos duplicados dentro de las muestras cuando conducían al mismo proyecto.
- Ocarina Social queda centrado en publicaciones de Instagram y Facebook; la selección audiovisual se consulta en Ocarina TV y YouTube.
- Se refuerza la identidad rural-tech con cartografía sutil, tonos de tierra, agua y vegetación, y jerarquía visual común.
- Se mantienen controles táctiles amplios, navegación accesible y contenidos particulares de cada mundo.
- No se modifican repositorios originales.


## 3.43 · desplazamiento vertical unificado

- Las páginas propias integradas en LIBRITO, OCARINA WILD y otros mundos del mismo sitio se expanden según la altura real de su contenido cuando el navegador permite leerlas por ser del mismo origen.
- El recorrido se realiza desde el desplazamiento vertical de la sala, evitando que el usuario tenga que descubrir una segunda barra o zona de scroll dentro de la muestra.
- La altura se recalcula cuando el contenido cambia, se cargan imágenes o se cambia de sección en LIBRITO.
- Las plataformas externas que bloquean el acceso entre páginas (por ejemplo, redes sociales y reproductores de video) conservan su comportamiento independiente; no se fuerza una integración que el navegador no permite.
- No se modifican los repositorios originales de los mundos.


## Ajustes 3.44 · identidad visual y color

- Se incorpora una capa visual cromática propia para portada, nueve puertas, salas y dedicatoria.
- Paletas diferenciadas por mundo: biblioteca cálida, cine terracota, naturaleza verde, curiosidades lila, hub agua, orientación azul, canal coral, radio dorado y social violeta.
- Se refuerzan profundidad, contraste, texturas cartográficas sutiles y estados de interacción sin sumar pasos ni controles.
- La hoja nueva `assets/css/estetica-344.css` se carga al final para preservar las reglas estructurales y de accesibilidad existentes.
- No se modifican los repositorios originales de los mundos.
