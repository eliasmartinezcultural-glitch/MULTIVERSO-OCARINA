# Multiverso Ocarina

**Versión vigente: 3.32**  
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
- Diseño adaptable, navegación por teclado, movimiento reducido y controles táctiles amplios.
- No inventar datos, fuentes, contactos, estadísticas ni disponibilidad.

## Arquitectura

Sitio estático para GitHub Pages. No requiere registro ni base de datos.

- `index.html`: portada, nueve puertas, metadatos y dedicatoria.
- `assets/js/proyectos.js`: datos y destinos de los nueve mundos.
- `assets/js/experiencia.js`: instalación opcional como aplicación.
- `assets/js/salas.js`: contenido y comportamiento de las salas.
- `assets/css/estilo.css`: identidad general y portada.
- `assets/css/salas.css`: puertas, salas y experiencias.
- `assets/css/mundos.css`: identidad visual por mundo y adaptación móvil-first.
- `assets/css/dedicatoria.css`: presentación de la dedicatoria.
- `sw.js` y `manifest.webmanifest`: caché y configuración instalable.

Los datos de presentación no utilizados se eliminaron de la configuración de salas para mantener una sola fuente de contenido. Las nueve puertas cuentan con ilustraciones vectoriales originales de mayor detalle, diseñadas para su función y paleta. La portada y las salas comparten el mismo lenguaje visual. La sala LIBRITO muestra un corte fechado del catálogo: 176 registros, 205 noticias y 71 recursos (26-11-2026). OCARINA TV integra 47 episodios y ¿SABÍAS QUE? dispone de 8 preguntas en su banco actual. RADIO ONLINE incorpora un reproductor persistente con volumen y modo compacto; la reproducción continúa al cerrar la sala dentro de la misma página, y puede ofrecer controles de pantalla bloqueada en navegadores compatibles. `assets/js/version.js` se conserva por compatibilidad histórica, pero no se carga desde la portada.

## Publicación

- Portal: https://eliasmartinezcultural-glitch.github.io/MULTIVERSO-OCARINA/
- Repositorio: https://github.com/eliasmartinezcultural-glitch/MULTIVERSO-OCARINA

**Universo Ocarina** · Elías Martínez · San Patricio del Chañar, Neuquén.
