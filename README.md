# Multiverso Ocarina

**Versión vigente: 3.14**  
**Dos mundos. Un universo.**  
*Raíces rurales. Mente creativa. Futuro digital.*

Universo Ocarina es un portal independiente que conecta proyectos, experiencias y herramientas creadas desde una mirada local, con vocación de apertura al mundo. Nace en San Patricio del Chañar, Neuquén, Patagonia argentina.

Su idea central: **la tecnología también puede ayudarnos a contar nuestras raíces.**

## Identidad y dirección

La identidad combina dos lenguajes:

- **Mundo rural:** paisaje, memoria, naturaleza, cultura, cercanía y territorio.
- **Mundo digital:** exploración, conexiones, herramientas, ideas y creación.

El diseño evita la estética tecnológica fría y también evita una estética rural folclórica literal. Busca un lenguaje editorial cálido, contemporáneo, sereno y accesible.

### Sistema visual

- Paleta: papel cálido, verde salvia, bosque apagado, piedra y lavanda suave.
- Tipografía: DM Serif Display para titulares editoriales; DM Sans para lectura e interfaz.
- Recursos gráficos: órbitas, nodos, líneas topográficas, formas orgánicas y paisajes abstractos.
- Composición: espacios amplios, jerarquía clara, tarjetas diferenciadas y navegación breve.
- Responsive: diseño adaptado a pantallas grandes, tabletas y móviles pequeños.

## Estructura pública

1. **Portada — Dos mundos. Un universo.** Presenta el concepto y la identidad.
2. **La idea.** Explica por qué se conectan territorio y creación digital.
3. **Proyectos.** Catálogo con búsqueda y filtros.
4. **Manifiesto.** Una frase central que resume la mirada del proyecto.
5. **Otros espacios.** Canales y plataformas relacionados.
6. **Fundador.** Presentación de Elías Martínez al final del recorrido.

## Proyectos enlazados

El catálogo se administra desde `assets/js/proyectos.js`. Cada ficha incluye nombre, categoría, descripción, destino, paleta y texto de acción.

| Proyecto | Enfoque |
| --- | --- |
| [LIBRITO](https://eliasmartinezcultural-glitch.github.io/LIBRITO/) | Memoria, documentos e historias de San Patricio del Chañar |
| [OCARINA TV](https://eliasmartinezcultural-glitch.github.io/OCARINA-TV/) | Videos, relatos y producciones audiovisuales |
| [OCARINA WILD](https://eliasmartinezcultural-glitch.github.io/OCARINA-WILD/) | Naturaleza, fauna, flora y territorio |
| [¿SABÍAS QUE?](https://eliasmartinezcultural-glitch.github.io/SABIAS-QUE/) | Curiosidades y aprendizaje mediante el juego |
| [CHAÑAR HUB](https://eliasmartinezcultural-glitch.github.io/chanar-hub/) | Información útil, lugares y comunidad |
| [CÓDIGO CERO](https://eliasmartinezcultural-glitch.github.io/C-DIGO-CERO/) | Orientación y ayuda ante situaciones urgentes |

La existencia de un repositorio no garantiza por sí sola que su sitio esté publicado ni que todos sus contenidos estén actualizados. Verificar cada destino antes de anunciar disponibilidad.

## Otros espacios

- [YouTube · Elías Martínez](https://www.youtube.com/@EliasM-creator)
- [Instagram · Ocarina Producciones](https://www.instagram.com/ocarina_producciones.spch/)
- [Radio online · transmisión Ocarina](https://stream.zeno.fm/amfjjcz4tlgtv)

## Arquitectura técnica

Sitio estático, sin registro de usuarios, sin base de datos y sin dependencias de construcción.

```text
/
├── index.html
├── README.md
├── manifest.webmanifest
├── sw.js
└── assets/
    ├── css/
    │   ├── estilo.css
    │   ├── dedicatoria.css
    │   └── salas.css
    └── js/
        ├── proyectos.js
        └── experiencia.js
```

- `index.html`: estructura semántica, metadatos, navegación y contenido.
- `assets/css/estilo.css`: sistema visual, ilustraciones CSS, responsive, estados e interacciones.
- `assets/js/proyectos.js`: catálogo centralizado de proyectos.
- `assets/js/experiencia.js`: búsqueda, filtros, menú móvil, compartir, año y animaciones de entrada.

## Criterios de calidad

1. Preservar la arquitectura liviana mientras cumpla su función.
2. Revisar dependencias y SHA del archivo antes de cada reemplazo.
3. Mantener un único origen de datos para el catálogo.
4. Priorizar lectura, contraste, teclado, áreas táctiles y pantallas pequeñas.
5. Respetar movimiento reducido del sistema.
6. No inventar estadísticas, instituciones asociadas, servicios ni disponibilidad.
7. Comprobar enlaces y destinos antes de presentarlos como activos.
8. Mantener los cambios trazables con commits descriptivos.
9. No agregar registros, formularios ni recolección de datos personales sin una necesidad justificada.

## Próximas etapas

- Comprobar el despliegue de GitHub Pages y su URL publicada.
- Probar la página en teléfonos pequeños y pantallas amplias.
- Verificar los seis proyectos enlazados, sus contenidos y sus condiciones de uso.
- Añadir una sección de novedades solo cuando exista contenido real y una frecuencia sostenible.
- Evaluar accesibilidad, rendimiento y metadatos sociales.
- Definir oportunidades de sostenibilidad económica sin convertir el portal en una página saturada de publicidad.

---

**Universo Ocarina** · Creado por Elías Martínez · San Patricio del Chañar, Neuquén.


## Control de versión 3.14

La etiqueta **3.14** visible en la cabecera identifica la versión publicada del portal. El mismo identificador se mantiene en el archivo central `assets/js/version.js`, los metadatos de la página y del manifiesto, este documento y el nombre de caché del service worker (`multiverso-ocarina-3.14`). Al cambiar de versión se renueva la caché para evitar que el navegador mezcle recursos anteriores con los actuales.

La portada, las nueve salas, sus reproductores y la navegación interna pertenecen a este portal. Los proyectos enlazados conservan sus repositorios y publicaciones independientes: este portal no los modifica.
