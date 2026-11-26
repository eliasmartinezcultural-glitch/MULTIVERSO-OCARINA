# Multiverso Ocarina

**Versión vigente: 3.60**  
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

La portada combina paisaje patagónico, cultivos, agua y montaña con cartografía, señal satelital, coordenadas visuales y patrones de datos. La paleta une crema, arena y tierra con azules serenos de cielo y agua; la tecnología orienta sin enfriar la experiencia.

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

## Novedades 3.59

- Buscador instantáneo de las nueve puertas por nombre, función y descripción, con contador de resultados y botón para limpiar.
- Texturas visuales de papel, cartografía, trama de impresión y materiales cálidos en portada, tarjetas y dedicatoria.
- Se conserva la navegación directa, los accesos a cada mundo y los controles de lectura.

## Novedades 3.60

- Nueve identidades visuales diferenciadas por material, paleta, forma de botones, marcos y señalética.
- LIBRITO editorial; Ocarina TV cinematográfico; WILD botánico; ¿Sabías que? gabinete de curiosidades; HUB cartográfico; Código Cero señalética; YouTube canal; Radio dial; Social collage.
- Ajustes responsive y foco visible para navegación táctil y teclado.

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

## Cambios 3.49

- Nueva paleta rural-tech: verde monte, tierra, arena, agua y crema.
- Nueva ilustración vectorial de portada: paisaje agrícola patagónico, canales de riego, montañas y satélite.
- Hero renovado con composición editorial, cartografía y contraste mejorado.
- Puertas reorganizadas con tarjetas de identidad territorial y paletas por mundo.
- Se actualiza la descripción de portada y se sincroniza el archivo de versión.
- No se modifican los repositorios originales de los mundos.

**Universo Ocarina** · Elías Martínez · San Patricio del Chañar, Neuquén.


## Reparación 3.49

- Neutraliza restricciones heredadas de ancho y padding del body.
- Recupera visibilidad de portada, franja territorial, nueve puertas, dedicatoria y pie.
- Añade estilos de respaldo para mantener la navegación visible y funcional.
- Corrige capas y contraste del hero rural-tech.
- Oculta el sello de versión en la cabecera para priorizar el contenido.
- No modifica los repositorios originales.


## Cambios 3.51

- Se incorpora en la dedicatoria la fotografía existente de Rosa Benita Bustos y Elías Martínez, con presentación completa y pie de foto.
- Se refuerza la delimitación visual de las nueve puertas con acentos cromáticos propios, marcos, superficies y jerarquía de lectura.
- Cada mundo recibe un descriptor breve junto a su nombre, sin cambiar su función ni sus destinos.
- Se mejora la sección de dedicatoria y la lectura en pantallas pequeñas.
- Se actualizan las referencias de caché y versión a 3.51.
- No se modifican los repositorios originales de los mundos.


## Cambios 3.52

- La fotografía de Rosa Benita Bustos y Elías se presenta en un círculo pequeño, con doble marco discreto y halo suave.
- Se conserva el archivo fotográfico original; el encuadre circular prioriza una presentación respetuosa sin filtros ni retoques que alteren la imagen.
- Se refina la composición de la dedicatoria: alineación editorial, nombre protagonista, tipografía, espacio y firma.
- Se actualizan las referencias de caché y versión a 3.52.


## Cambios 3.54

- Se consolida una identidad visual de terruño amable con azul tecnológico sereno.
- La portada incorpora una atmósfera azul petróleo suave, celestes de cielo y agua, y acentos arena.
- Las nueve puertas mantienen sus personalidades, ahora unificadas por superficies cálidas y acentos azulados/terrosos.
- Las salas, controles, radio flotante y dedicatoria reciben la misma familia cromática.
- Se refuerzan contraste, estados de foco y legibilidad sin sumar controles ni complejidad.
- Se actualizan referencias de caché y versión a 3.54.
- No se modifican los repositorios originales de los mundos.


## Cambios 3.54

- Se simplifica la presentación inicial y se elimina el botón redundante “Entrar al Multiverso”.
- Se incorpora una ilustración vectorial original que combina chacras, río, álamos, cordillera y conectividad satelital.
- La portada presenta una frase breve: “Un recorrido por la memoria, la naturaleza y la vida de nuestra tierra”.
- La ilustración se adapta a pantallas grandes y celulares sin depender de fotografías de stock.
- Se actualizan referencias de caché y versión.


## Cambios 3.55

- Se convierte la grilla de nueve puertas en un atlas visual: imágenes protagonistas en escritorio y tarjetas horizontales compactas en celulares.
- Se refina la cabecera, el hero, la franja cartográfica y los fondos con una identidad más editorial y territorial.
- Se fortalecen jerarquías, superficies, bordes, sombras y estados de interacción sin sumar pasos ni menús.
- Se conserva el diseño de lectura simple, los controles de accesibilidad, la dedicatoria y las nueve funciones originales.
- Se actualizan referencias de caché y versión a 3.55.
- No se modifican los repositorios originales de los mundos.


## Cambios 3.56

- Cada sala recibe una dirección visual propia: LIBRITO editorial de papel y cuero; Ocarina TV cinematográfico; Wild botánico; ¿Sabías que? gabinete de curiosidades; Chañar HUB cartográfico; Código Cero señalética de orientación; YouTube estudio de creador; Radio Online dial y ondas; Ocarina Social collage comunitario.
- Se agregan paletas diferenciadas, texturas, fondos, marcos, paneles y superficies específicas por mundo.
- Se refuerza la jerarquía visual de cabeceras, muestras internas, botones y acceso al proyecto completo.
- Se adapta la composición de cada sala a celulares y controles táctiles grandes.
- No se alteran los proyectos originales ni los contenidos de sus repositorios.


## Cambios 3.57

- La sala YOUTUBE incorpora un reproductor integrado con un video real del canal y dos selecciones adicionales del archivo audiovisual.
- Se diferencia el propósito de YOUTUBE (seguir el canal y ver destacados) del de OCARINA TV (recorrer la videoteca documental).
- Se mantiene un único reproductor en la sala YOUTUBE; al elegir otro destacado, cambia el mismo video.
- Se incorpora una presentación visual propia para la pantalla, el título y los controles de selección, adaptada a celulares.
- Se conservan las nueve experiencias diferenciadas y los accesos a los proyectos originales.
- No se modifican los repositorios originales de los mundos.


## Cambios 3.58

- La sala YOUTUBE ahora obtiene su selección de videos del catálogo audiovisual ya existente en Ocarina TV; no agrega videos externos ni identificadores nuevos.
- Cada video muestra miniatura, título y categoría, y se reproduce en una única pantalla. Los controles indican cuál está seleccionado.
- Se refuerza la identidad visual funcional de las nueve salas: biblioteca, cine, atlas natural, gabinete de curiosidades, guía local, señalética práctica, canal, cabina de radio y mural social.
- Se mejoran jerarquías, superficies, fichas, controles, marcos de contenido, foco de teclado y adaptación móvil.
- Se mantienen los accesos a las experiencias completas y los repositorios originales sin modificaciones.
- No se inventan nuevos datos de catálogo ni se cambian las funciones principales de cada mundo.
