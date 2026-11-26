# Multiverso Ocarina

**Versión vigente: 3.48**  
*Raíces locales. Tecnología para explorar un territorio vivo.*

Portal público de Ocarina Producciones, creado desde San Patricio del Chañar, Neuquén. Reúne nueve mundos en una experiencia integrada: cultura, memoria, naturaleza, audiovisual, comunidad y herramientas.

## Las nueve puertas

| Mundo | Su función |
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

Cada sala ofrece una muestra dentro del portal y un único acceso a la experiencia completa. Los proyectos originales se mantienen en sus propios repositorios y no se modifican desde aquí.

## Dirección de diseño

La portada combina paisaje patagónico, cultivos, agua y montaña con cartografía, señal satelital, coordenadas visuales y patrones de datos. La paleta usa verde monte, tierra, arena, agua y crema; evita la estética tecnológica genérica y mantiene los mundos reconocibles.

## Criterios de producto

- Primero el contenido; después las explicaciones.
- Una función clara por mundo y una acción principal por sala.
- Diseño móvil primero, lectura sencilla y controles táctiles amplios.
- Accesibilidad práctica: navegación por teclado, foco visible, aumento de texto y alto contraste.
- Un solo reproductor de video en Ocarina TV y uno de audio en Radio Online.
- Si una plataforma externa no permite integrarse, se conserva un enlace directo.
- Sin registro de usuarios ni recolección de datos personales.
- No inventar fuentes, contactos, estadísticas ni disponibilidad.
- La dedicatoria a Rosa Benita Bustos permanece al final del recorrido.

## Arquitectura

Sitio estático publicado con GitHub Pages. No requiere servidor propio ni base de datos.

- `index.html`: portada, nueve accesos, metadatos y dedicatoria.
- `assets/js/proyectos.js`: datos y destinos de los nueve mundos.
- `assets/js/experiencia.js`: compartir el portal y controles de accesibilidad.
- `assets/js/version.js`: versión visible y metadatos.
- `assets/js/salas.js`: salas, contenido integrado, navegación y reproductores.
- `assets/css/`: identidad general, paletas de los mundos, salas y adaptación móvil.
- `assets/img/`: ilustraciones vectoriales y recursos visuales.

La radio se inicializa al entrar en su mundo y puede continuar al cerrar la sala mientras el usuario permanezca en esta misma página. La integración de redes y plataformas externas depende de sus propias políticas y de la conexión.

## Publicación

- Portal: https://eliasmartinezcultural-glitch.github.io/MULTIVERSO-OCARINA/
- Repositorio: https://github.com/eliasmartinezcultural-glitch/MULTIVERSO-OCARINA

## Cambios 3.48

- Nueva paleta rural-tech: verde monte, tierra, arena, agua y crema.
- Nueva ilustración vectorial de portada: paisaje agrícola patagónico, canales de riego, montañas y satélite.
- Hero renovado con composición editorial, cartografía y contraste mejorado.
- Puertas reorganizadas con tarjetas de identidad territorial y paletas por mundo.
- Se actualiza la descripción de portada y se sincroniza el archivo de versión.
- No se modifican los repositorios originales de los mundos.

**Universo Ocarina** · Elías Martínez · San Patricio del Chañar, Neuquén.
