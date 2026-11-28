# MULTIVERSO OCARINA

**Versión de la experiencia: 3.84**  
**Portal central de Ocarina Producciones · San Patricio del Chañar, Neuquén, Argentina**

> Historias, personas y territorio.  
> Raíces rurales. Mente creativa. Futuro digital.  
> *La tecnología también nace de la tierra.*

Multiverso Ocarina es el portal que reúne y conecta experiencias digitales, culturales, audiovisuales, educativas y comunitarias impulsadas por Ocarina Producciones. Su propósito es tender puentes hacia contenidos y herramientas útiles, mostrar lo que puede construirse desde el territorio y documentar ese recorrido.

## Acceso

- **Sitio publicado:** https://eliasmartinezcultural-glitch.github.io/MULTIVERSO-OCARINA/
- **Repositorio:** https://github.com/eliasmartinezcultural-glitch/MULTIVERSO-OCARINA
- **Rama principal:** `main`
- **Publicación:** GitHub Pages
- **Tipo de proyecto:** sitio estático; no requiere servidor propio ni base de datos.

## Las nueve puertas

| N.º | Mundo | Propósito |
|---:|---|---|
| 01 | LIBRITO | Leer: biblioteca, documentos y memoria. |
| 02 | OCARINA TV | Mirar: videoteca y cine documental. |
| 03 | OCARINA WILD | Observar: naturaleza, fauna, flora y ambientes. |
| 04 | ¿SABÍAS QUE? | Descubrir: curiosidades, preguntas y juegos. |
| 05 | CHAÑAR HUB | Conectar: guía local y referencias comunitarias. |
| 06 | CÓDIGO CERO | Orientarse: información práctica y recursos de consulta. |
| 07 | YOUTUBE | Seguir: canal y publicaciones audiovisuales. |
| 08 | RADIO ONLINE | Escuchar: señal de audio por internet. |
| 09 | OCARINA SOCIAL | Compartir: publicaciones y comunidad. |

Cada mundo conserva su identidad y su destino. Las salas integradas funcionan como una introducción y un puente; los proyectos originales mantienen sus propios repositorios y no deben modificarse desde este portal sin una decisión expresa.

## Criterios de producto

1. **Contenido con valor:** cada mundo debe ofrecer una lectura, recurso, experiencia o acceso útil; no ser solamente una tarjeta decorativa.
2. **Navegación comprensible:** una puerta por propósito, acciones claras y recorridos que permitan entrar, continuar y regresar.
3. **Móvil primero:** diseño adaptable, controles táctiles amplios y lectura cómoda en pantallas pequeñas.
4. **Accesibilidad práctica:** estructura semántica, navegación por teclado, foco visible, ampliación de texto, alto contraste y respeto por movimiento reducido.
5. **Privacidad por diseño:** sin registro de usuarios ni recolección deliberada de datos personales en el portal.
6. **Integraciones honestas:** reproductores y vistas externas dependen de la plataforma de origen, del navegador y de la conexión. Si una integración no está disponible, debe conservarse una alternativa directa cuando exista.
7. **Información responsable:** no inventar fuentes, teléfonos, contactos, estadísticas, horarios ni disponibilidad. Los datos sensibles o de emergencia requieren fuentes oficiales y revisión periódica.
8. **Autoría y procedencia:** respetar los créditos, materiales, imágenes, documentos y proyectos originales.
9. **Identidad territorial:** combinar raíces rurales, cultura local, paisaje patagónico y tecnología accesible, sin convertir la interfaz en una barrera.
10. **Continuidad:** priorizar mejoras estables, verificables y fáciles de mantener antes que sumar funciones por acumulación.

## Funciones presentes en la experiencia

La portada y las salas incluyen, según el mundo:

- Buscador de las nueve puertas por nombre, tema y necesidad.
- Controles de lectura: ampliación de texto y alto contraste.
- Compartir el portal mediante las capacidades disponibles del navegador, con alternativa de copia.
- Salas integradas con navegación entre mundos y enlaces a los proyectos completos.
- Catálogo audiovisual con selección y reproducción en un reproductor integrado.
- Sala de radio con reproductor persistente y controles de reproducción y volumen.
- Enlaces a los perfiles y plataformas externas correspondientes.
- Accesos directos conservados como alternativa cuando un contenido integrado no puede mostrarse.

Las funciones que dependen de terceros no deben presentarse como garantizadas: YouTube, redes sociales y streaming pueden cambiar sus políticas, disponibilidad o comportamiento.

## Arquitectura del repositorio

- `index.html`: estructura de la portada, metadatos, nueve puertas y dedicatoria.
- `assets/js/proyectos.js`: catálogo de mundos, destinos e información de presentación.
- `assets/js/experiencia.js`: buscador, compartir y controles de accesibilidad.
- `assets/js/version.js`: versión de la experiencia.
- `assets/js/salas.js`: salas integradas, navegación, reproductores y experiencias.
- `assets/css/`: estilos generales, salas, identidades visuales y adaptaciones responsive.
- `assets/img/`: ilustraciones y recursos gráficos del portal.

### Principio de separación

Este repositorio es el portal central. Los proyectos enlazados son unidades independientes. Una mejora en Multiverso no autoriza a reemplazar, reorganizar ni alterar el contenido de los otros repositorios.

## Guía de mantenimiento

Antes de publicar una modificación:

1. Leer los archivos relacionados y confirmar la versión real de la rama `main`.
2. Identificar el alcance del cambio y evitar reemplazos generales innecesarios.
3. Mantener los nueve mundos, sus destinos y sus identidades, salvo decisión explícita.
4. Comprobar enlaces, rutas de imágenes, nombres de archivos y referencias de caché.
5. Revisar el diseño en móvil y escritorio, con teclado y controles táctiles.
6. Probar buscador, apertura y cierre de salas, navegación atrás/adelante, compartir y reproductores.
7. Verificar que las integraciones externas tengan un mensaje claro si no cargan.
8. Registrar los cambios reales; no declarar pruebas que no se hayan ejecutado.

### Lista de control de calidad

- [ ] La portada carga sin errores visibles.
- [ ] Las nueve puertas aparecen y conducen al destino correcto.
- [ ] El buscador filtra y permite limpiar la consulta.
- [ ] Los controles de lectura responden correctamente.
- [ ] Las salas se abren, se cierran y conservan una navegación coherente.
- [ ] El botón atrás del navegador no deja una sala bloqueada.
- [ ] Los reproductores muestran estados de carga, reproducción, pausa y error.
- [ ] Los enlaces externos usan atributos de seguridad apropiados.
- [ ] No hay desbordamiento horizontal en pantallas pequeñas.
- [ ] Los textos alternativos y estados accesibles son comprensibles.
- [ ] La versión de portada, recursos y documentación coincide.

## Registro de mantenimiento

### Versión 3.84 — 27 de noviembre de 2026

- Se incorporaron cuatro recorridos rápidos: aprender, orientarse, descubrir y conectar. Son atajos de búsqueda, no reemplazan ni ocultan las nueve puertas.
- El buscador ahora admite varias palabras en cualquier orden, conserva las búsquedas por tema y ofrece una sugerencia concreta cuando no hay coincidencias.
- Se agregó limpieza de búsqueda con Escape y estados accesibles para las puertas filtradas.
- Se aclaró en portada que cada mundo es una experiencia independiente y que se puede volver para elegir otro recorrido.
- Se reforzó el diseño táctil de los nuevos accesos en móvil y el respeto por movimiento reducido.



### Antecedentes de mantenimiento — versiones anteriores

- En la versión 3.83: las preferencias de lectura y contraste se guardan localmente cuando el navegador lo permite; se ampliaron controles táctiles y se aclaró la identificación de teléfonos de emergencia. La disponibilidad local del 911 se marca expresamente como no confirmada por las fuentes provinciales consultadas.

- Se verificó el repositorio público, la rama principal `main` y los permisos de administración/escritura.
- En una auditoría anterior se constató que la experiencia todavía declaraba 3.81; esa línea base se actualizó posteriormente.
- Se detectó que esta documentación estaba atrasada y declaraba 3.62.
- La documentación de esta etapa registró la corrección del README y agregó criterios de mantenimiento y control de calidad. **Este antecedente no certifica pruebas de navegador.**

## Identidad y propósito

Multiverso Ocarina nace desde San Patricio del Chañar para conectar conocimiento, cultura, memoria, naturaleza, producción audiovisual y comunidad. Busca demostrar que es posible crear tecnología útil desde un territorio rural, con herramientas accesibles y una mirada propia.

**Ocarina Producciones · Elías Martínez**  
San Patricio del Chañar · Neuquén · Argentina
