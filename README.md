# Multiverso Ocarina

**Versión vigente: 3.36**  
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
