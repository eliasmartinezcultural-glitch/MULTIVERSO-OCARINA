# Multiverso Ocarina

**Versión vigente: 3.24**  
**Un mundo de muchos mundos.**  
*Raíces locales. Ideas sin fronteras.*

Portal público creado por Ocarina Producciones desde San Patricio del Chañar, Neuquén. Reúne nueve experiencias distintas en una misma entrada: territorio, cultura, memoria, naturaleza y tecnología.

## Identidad

El lenguaje visual combina dos dimensiones que conviven en el Chañar:

- **Territorio:** paisaje patagónico, caminos, agua, cultivos, cielo, memoria y vida comunitaria.
- **Tecnología:** cartografía, coordenadas, imágenes satelitales, conexiones y herramientas digitales.

La estética busca ser cálida, rural y contemporánea; no una plantilla tecnológica genérica. Cada puerta tiene paleta, ilustración y propósito propios.

## Las nueve puertas

| Mundo | Su ley | Experiencia dentro del portal |
| --- | --- | --- |
| LIBRITO | Leer | Biblioteca con tres recorridos: obras, hemeroteca y recursos. |
| OCARINA TV | Mirar | Videoteca documental con un solo reproductor y selección de películas. |
| OCARINA WILD | Observar | Entrada al atlas fotográfico de fauna y flora. |
| ¿SABÍAS QUE? | Descubrir | Juego de conocimiento local, una pregunta por vez. |
| CHAÑAR HUB | Conectar | Guía de orientación y recursos locales. |
| CÓDIGO CERO | Orientarse | Información práctica y prevención, con límites claramente indicados. |
| YOUTUBE | Seguir | Acceso al canal audiovisual de Elías Martínez; no duplica la videoteca. |
| RADIO ONLINE | Escuchar | Una señal y un único reproductor de audio. |
| OCARINA SOCIAL | Compartir | Galería de postales audiovisuales y accesos a redes. |

Cada sala ofrece además un acceso **Experiencia completa** al proyecto original. Cuando un servicio externo impide la visualización integrada, el acceso alternativo permite continuar sin simular que el contenido se cargó.

## Arquitectura

Sitio estático para GitHub Pages. No requiere registro, base de datos ni instalación.

- `index.html`: portada, metadatos, estructura y contenido de la dedicatoria.
- `assets/js/version.js`: versión central que actualiza la identificación visible.
- `assets/js/proyectos.js`: datos de las nueve puertas y sus destinos.
- `assets/js/experiencia.js`: renderizado de tarjetas e instalación PWA.
- `assets/js/salas.js`: contenido y comportamiento de las salas.
- `assets/css/estilo.css`: identidad general, portada y diseño adaptable.
- `assets/css/salas.css`: paletas, puertas y experiencias de cada mundo.
- `assets/css/dedicatoria.css`: presentación de la dedicatoria.
- `sw.js` y `manifest.webmanifest`: caché de recursos y configuración instalable.

## Criterios de calidad

1. Una experiencia principal por mundo; controles solo cuando cumplen una función.
2. Ocarina TV y Radio Online mantienen un solo reproductor cada una.
3. La navegación interna debe ser clara, breve y utilizable con teclado y pantalla táctil.
4. Priorizar el contenido visual y evitar bloques de texto innecesarios.
5. Respetar movimiento reducido y tamaños de pantalla pequeños.
6. No inventar datos, fuentes, contactos, estadísticas ni disponibilidad.
7. Mantener los repositorios originales separados: este portal los enlaza, no los modifica.
8. No declarar probado un iframe, enlace o comportamiento hasta verificarlo en el navegador correspondiente.

## Publicación

- Portal: https://eliasmartinezcultural-glitch.github.io/MULTIVERSO-OCARINA/
- Repositorio: https://github.com/eliasmartinezcultural-glitch/MULTIVERSO-OCARINA

**Universo Ocarina** · Elías Martínez · San Patricio del Chañar, Neuquén.
