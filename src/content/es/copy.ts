import type { SiteCopy } from "../types";

export const copyEs: SiteCopy = {
  ui: {
    navCompare: "Comparativa",
    navTechnology: "Tecnología",
    navAlternatives: "Alternativas",
    navGuides: "Guías",
    navDownload: "Descargar",
    navGitHub: "GitHub",
    download: "Descargar para Mac",
    downloadSub: "Gratis · macOS 14+ · Apple silicon e Intel · 7,5 MB",
    viewSource: "Ver el código en GitHub",
    readMore: "Leer más",
    faqTitle: "Preguntas frecuentes",
    updated: "Actualizado",
    languageLabel: "Idioma",
    sources: "Fuentes",
    allReleases: "Todas las versiones y sumas de verificación",
    smallerIsBetter: "menos es mejor",
    lookupTitle: "1.000 BUSCARV sobre 10.000 filas",
    lookupSub: "{before} segundos en el motor original: unas {times} veces más rápido",
    tested: "Probado en un Mac con procesador M4 y macOS 27.",
    opens: "Abre",
    arch: [
      "Ventanas, menús, documentos y una cuadrícula propia dibujada con AppKit",
      "Núcleo en Rust",
      "Modelo del libro, motor de fórmulas IronCalc (fork con parches), xlsx / xls / ods / csv",
      "Arquitectura: una app en Swift/AppKit llama a un núcleo en Rust a través de una interfaz C sencilla",
    ],
    skipToContent: "Saltar al contenido",
    footerTagline: "Una hoja de cálculo gratuita y de código abierto para Mac. Nativa, ligerísima y compatible con Excel.",
    footerLicense: "Foglio es software libre con doble licencia MIT y Apache-2.0.",
    footerTrademark:
      "Excel es una marca comercial de Microsoft Corporation. Numbers es una marca comercial de Apple Inc. Google Sheets es una marca comercial de Google LLC. LibreOffice es una marca comercial de The Document Foundation. Foglio es un proyecto independiente y no está afiliado ni respaldado por ninguna de ellas.",
    notFoundTitle: "Esta hoja está vacía",
    notFoundText: "La página que buscas no existe o se ha movido. Prueba con la página de inicio o con alguna de las guías.",
    backHome: "Volver a la página de inicio",
    yes: "Sí",
    no: "No",
    partial: "En parte",
  },

  meta: {
    home: {
      title: "Foglio: hoja de cálculo gratis para Mac compatible con Excel",
      description:
        "Foglio es una hoja de cálculo gratis y de código abierto para Mac. Abre y guarda xlsx de Excel, unas 500 funciones, nativa: solo 7,5 MB. Sin cuenta.",
      ogTitle: "Foglio: una hoja de cálculo gratuita, nativa y de código abierto para Mac",
    },
    compare: {
      title: "Foglio frente a Excel, Numbers, LibreOffice y Sheets",
      description:
        "Comparativa honesta de hojas de cálculo para Mac: precio, tamaño, velocidad, xlsx, macros, tablas dinámicas, colaboración y privacidad. Con fuentes.",
    },
    technology: {
      title: "Cómo está hecho Foglio: Swift, AppKit y Rust | Foglio",
      description:
        "Por dentro de Foglio: app nativa en Swift/AppKit sobre un motor en Rust (fork de IronCalc). Por qué pesa 7,5 MB, se abre en 0,24 s y recalcula rápido.",
    },
    download: {
      title: "Descargar Foglio para Mac: hoja de cálculo gratis",
      description:
        "Descarga Foglio 1.0, hoja de cálculo gratis para macOS 14 o posterior. Universal para Apple silicon e Intel, imagen de disco de 7,5 MB. Con instrucciones.",
    },
    alternatives: {
      title: "Alternativas a Excel, Numbers y Google Sheets | Foglio",
      description:
        "¿Buscas una alternativa a Excel, Numbers, LibreOffice Calc o Google Sheets en Mac? Guías honestas sobre cuándo te sirve Foglio y cuándo no.",
    },
    guides: {
      title: "Guías de hojas de cálculo en Mac: xlsx, xls y CSV | Foglio",
      description:
        "Guías prácticas para hojas de cálculo en Mac: abrir archivos de Excel y CSV sin Excel, arreglar codificaciones, fórmulas en tu idioma y mucho más.",
    },
  },

  home: {
    eyebrow: "Gratis · Código abierto · Nativa para macOS",
    h1: "La hoja de cálculo gratis para Mac que abre tus archivos de Excel",
    subtitle:
      "Foglio es una app nativa para Mac, pequeña y rápida, para las hojas de cálculo de todos los días. Abre y guarda `.xlsx`, abre `.xls`, `.ods` y `.csv`, entiende unas 500 funciones de Excel y no cuesta nada: sin suscripción, sin cuenta y sin anuncios.",
    badges: [
      "Gratis para siempre, MIT / Apache-2.0",
      "Descarga de 7,5 MB, se abre en 0,24 s",
      "Swift/AppKit nativo, sin Electron",
      "Sin cuenta y sin telemetría",
    ],
    statLabels: {
      download: "Tamaño de descarga",
      launch: "Del clic a la primera ventana",
      memory: "Memoria con una hoja vacía",
      open100k: "Abrir un xlsx de 100.000 filas",
      recalc: "Editar y recalcular 300.000 fórmulas",
      price: "Precio, para siempre",
    },
    featuresTitle: "Todo lo que necesitas para tus hojas de cálculo del día a día",
    featuresIntro:
      "Foglio cubre lo que la mayoría hace de verdad con una hoja de cálculo: listas, presupuestos, facturas, informes y datos de archivos de Excel que te envían otros. Se maneja como Excel y se comporta como una app de Mac.",
    features: [
      {
        icon: "file",
        title: "Abre archivos de Excel",
        text: "Lee y escribe `.xlsx` con formato, gráficos, imágenes, comentarios y validación de datos. También abre `.xls`, `.xlsb`, `.xlsm`, `.ods`, `.csv` y `.tsv`.",
      },
      {
        icon: "function",
        title: "Unas 500 funciones de Excel",
        text: "SUMAR.SI.CONJUNTO, BUSCARX, FILTRAR, ORDENAR, UNICOS, LET, LAMBDA, fechas, texto, estadística y finanzas. 191 de las 195 funciones auditadas coinciden con Excel en todos los casos de prueba.",
      },
      {
        icon: "globe",
        title: "Fórmulas en tu idioma",
        text: "En un Mac en español escribes `=SUMA(A1:A10;B2)`, `SI` o `BUSCARV` con `;` y coma decimal, como en Excel en español. También en italiano, alemán y francés. Los archivos siguen siendo Excel estándar.",
      },
      {
        icon: "bolt",
        title: "Rápida con hojas grandes",
        text: "Un libro de 100.000 filas con 300.000 fórmulas se abre en 1,1 s y se recalcula tras una edición en 16 ms, gracias al recálculo incremental.",
      },
      {
        icon: "feather",
        title: "Ligerísima",
        text: "7,5 MB de descarga, 19 MB instalada, unos 58 MB de memoria con una hoja vacía y 0 % de CPU en reposo. Los ventiladores ni se enteran.",
      },
      {
        icon: "apple",
        title: "Una app de Mac de verdad",
        text: "Escrita en Swift y AppKit: Abrir recientes, pestañas de ventana, modo oscuro, imprimir y exportar a PDF, pellizcar para hacer zoom y los atajos de teclado de Excel para Mac.",
      },
      {
        icon: "chart",
        title: "Gráficos e imágenes",
        text: "Gráficos de columnas, barras, líneas, circulares, de anillo, de área y de dispersión, guardados en `.xlsx`. Inserta, recorta y comprime imágenes; hasta las antiguas imágenes EMF/WMF se ven bien.",
      },
      {
        icon: "filter",
        title: "Herramientas de datos",
        text: "Ordenar, autofiltro, buscar y reemplazar, quitar duplicados, texto en columnas, listas desplegables de validación, formato condicional y una tabla dinámica ligera (Summarize by).",
      },
      {
        icon: "lock",
        title: "Privada por diseño",
        text: "Sin cuenta, sin anuncios y sin analíticas. Foglio no hace ninguna conexión de red por su cuenta: tus archivos se quedan en tu Mac.",
      },
    ],
    speedTitle: "Tan ligera que te olvidarás de que está ahí",
    speedIntro:
      "Foglio no lleva dentro un motor de navegador, ni un runtime de Java, ni un framework empaquetado. Por eso se descarga en segundos y se abre antes de que muevas el ratón.",
    speedNote:
      "Datos de Foglio medidos en un MacBook Air M4 (16 GB), macOS 27, Foglio 1.0, noviembre de 2026: medianas de varias ejecuciones, memoria según `footprint`. Los tamaños de las demás apps son los de descarga o instalación que indicaban sus tiendas y páginas de descarga en noviembre de 2026.",
    freeTitle: "Gratis, y seguirá siéndolo",
    freeText: [
      "Foglio no tiene precio, ni periodo de prueba, ni suscripción, ni versión de pago. No necesitas una cuenta de Apple, de Microsoft ni de Google para usarla, y no hay anuncios.",
      "El código fuente está en [GitHub](https://github.com/Acid236/foglio) con licencias MIT y Apache-2.0, así que cualquiera puede leerlo, compilarlo, corregirlo o crear su propio fork. Tus hojas de cálculo son archivos `.xlsx` estándar que se abren en Excel, Numbers, LibreOffice y Google Sheets: nada te ata.",
    ],
    compareTitle: "Cómo se compara",
    compareText:
      "Excel tiene más funciones, Google Sheets tiene colaboración en tiempo real y Numbers tiene plantillas preciosas. Foglio es la opción gratuita, ligera y nativa que abre bien los archivos de Excel. Consulta la [comparativa completa](/compare/) para ver los detalles, también en qué ganan las demás.",
    techTitle: "Hecha como debe hacerse una app de Mac",
    techText:
      "Una interfaz en Swift/AppKit con una cuadrícula propia, sobre un motor de cálculo en Rust (un fork con parches de IronCalc) enlazado como una simple biblioteca estática. Descubre [cómo está hecho Foglio](/technology/) y por qué eso la hace pequeña y rápida.",
    formatsTitle: "Abre los archivos que te envían",
    formatsText:
      "`.xlsx` y `.xlsm` de Excel, los antiguos `.xls` y los binarios `.xlsb`, `.ods` de LibreOffice, y `.csv` / `.tsv` con detección automática de codificación, delimitador y separador decimal. Guarda en `.xlsx` y exporta a CSV y PDF. Consulta las guías para [abrir archivos xlsx sin Excel](/guides/open-xlsx-on-mac-without-excel/), [abrir archivos .xls antiguos](/guides/open-xls-on-mac/) y [abrir archivos CSV en Mac](/guides/open-csv-on-mac/).",
    alternativesTitle: "¿Vienes de otra app?",
    alternativesText:
      "Notas honestas para quien viene de [Excel para Mac](/alternatives/excel-for-mac/), [Numbers](/alternatives/numbers/), [LibreOffice Calc](/alternatives/libreoffice/) o [Google Sheets](/alternatives/google-sheets/), incluido cuándo te conviene seguir usándolas. Las tienes todas en la [página de alternativas](/alternatives/).",
    ctaTitle: "Pruébala con tus propias hojas de cálculo",
    ctaText:
      "Son 7,5 MB de descarga y no cuesta nada. Foglio 1.0 es una primera versión, así que guarda copias de seguridad de tus archivos importantes mientras la pruebas.",
    faq: [
      {
        q: "¿Foglio es gratis de verdad?",
        a: "Sí. No tiene precio, ni periodo de prueba, ni suscripción, ni compras dentro de la app, ni anuncios. Foglio es software de código abierto con licencias MIT y Apache-2.0.",
      },
      {
        q: "¿Foglio puede abrir y guardar archivos de Excel?",
        a: "Sí. Lee y escribe `.xlsx` con formato, gráficos, imágenes, comentarios, validación de datos y formato condicional. También abre `.xls`, `.xlsb`, `.xlsm` y `.ods`, y archivos de texto CSV/TSV. Guarda en `.xlsx` y exporta a CSV y PDF.",
      },
      {
        q: "¿Sustituye por completo a Microsoft Excel?",
        a: "Para las hojas de cálculo del día a día, muchas veces sí. Para algunos trabajos, no: Foglio no ejecuta macros (VBA), no tiene tablas dinámicas de verdad (ofrece *Summarize by*, más sencillo), omite formas y SmartArt y no abre archivos protegidos con contraseña. La [comparativa](/compare/) recoge todas las diferencias.",
      },
      {
        q: "¿En qué Mac funciona?",
        a: "En cualquier Mac con macOS 14 Sonoma o posterior, con Apple silicon o Intel. Es una única app universal.",
      },
      {
        q: "¿Por qué macOS dice que Foglio es de un desarrollador no identificado?",
        a: "Foglio 1.0 no está firmada con un Apple Developer ID de pago, así que la primera vez que la abres macOS te pide confirmación. En macOS 15 o posterior ve a Ajustes del Sistema ▸ Privacidad y seguridad y haz clic en **Abrir igualmente**; en macOS 14 haz clic derecho en la app y elige **Abrir**. La [página de descarga](/download/) explica cada paso.",
      },
      {
        q: "¿Foglio recopila datos o necesita una cuenta?",
        a: "No. No hay cuenta, ni inicio de sesión, ni analíticas, ni telemetría. Foglio no hace conexiones de red por su cuenta; solo abre un enlace web cuando haces clic en un hipervínculo de una celda.",
      },
      {
        q: "¿Puedo escribir las fórmulas en español?",
        a: "Sí. Foglio sigue el idioma y la región de tu Mac: en un Mac en español escribes `=SUMA(A1:A10;B2)`, `SI` o `BUSCARV` con punto y coma y coma decimal, igual que en Excel en español. También funciona en italiano, alemán y francés. La interfaz de la app está en inglés e italiano, pero los archivos guardan siempre la forma estándar en inglés, así que se abren bien en cualquier parte. Consulta la [lista de funciones en inglés y español](/guides/excel-functions-italian-english/).",
      },
      {
        q: "¿Foglio está terminada?",
        a: "Foglio 1.0 gestiona de principio a fin las hojas de cálculo del día a día y la cubren 69 pruebas automáticas de interfaz, pero es una primera versión. Guarda copias de seguridad de tus archivos importantes y comunica los problemas en [GitHub](https://github.com/Acid236/foglio/issues).",
      },
    ],
  },

  compare: {
    h1: "Foglio frente a Excel, Numbers, LibreOffice y Google Sheets",
    intro: [
      "No existe la mejor hoja de cálculo para Mac. Existe la que encaja con lo que haces. Esta página pone a Foglio junto a las cuatro apps entre las que más suelen elegir los usuarios de Mac, y es honesta a propósito: donde otra app es mejor, la tabla lo dice.",
      "En resumen: **Excel** es la más completa y la más cara; **Numbers** es gratis y bonita, pero convierte los archivos de Excel; **LibreOffice Calc** es gratis y potente, pero pesada y no es una app nativa de Mac; **Google Sheets** es gratis y colaborativa, pero vive en el navegador y exige una cuenta de Google. **Foglio** es gratis, de código abierto, ligerísima y nativa, y edita `.xlsx` directamente, con menos funciones avanzadas que Excel.",
    ],
    tableTitle: "Comparativa lado a lado",
    tableNote:
      "Precios y funciones comprobados en las páginas oficiales de cada fabricante en noviembre de 2026 (fuentes más abajo); los precios de Excel y Numbers son los de España, IVA incluido, y pueden cambiar. Los datos de Foglio se midieron en un MacBook Air M4, macOS 27, Foglio 1.0.",
    sections: [
      {
        heading: "¿Cuál deberías elegir?",
        body: [
          "Elige la herramienta por el trabajo, no por la marca. La mayoría de la gente solo necesita una pequeña parte de lo que hace cualquiera de estas apps.",
        ],
        bullets: [
          "**Elige Foglio** si quieres una app gratis, rápida y privada que abra y guarde archivos de Excel en tu Mac sin cuenta ni suscripción.",
          "**Elige Excel** si dependes de macros (VBA), Power Query, tablas dinámicas de verdad o gráficos avanzados, o si tienes que reproducir al milímetro los archivos de tu empresa.",
          "**Elige Numbers** si creas documentos que deben verse bonitos, sobre todo para ti, y vives en el ecosistema de Apple, iPhone y iPad incluidos.",
          "**Elige LibreOffice Calc** si necesitas una app gratuita con tablas dinámicas, macros y muchísimas funciones, y no te importa que sea grande y no nativa.",
          "**Elige Google Sheets** si varias personas editan la misma hoja a la vez y te sientes cómodo trabajando en el navegador con una cuenta de Google.",
        ],
      },
      {
        heading: "En qué gana Foglio",
        body: [
          "Foglio es, con diferencia, la app más pequeña de esta comparativa: 7,5 MB de descarga frente a cientos de megas o varios gigas de las alternativas de escritorio. Muestra una ventana lista para usar en 0,24 s, usa unos 58 MB de memoria con una hoja vacía y se queda en el 0 % de CPU en reposo.",
          "Es gratis sin condiciones, de código abierto y funciona totalmente sin conexión y sin cuenta. A diferencia de Numbers, edita los archivos `.xlsx` tal cual en lugar de convertirlos, y en un Mac en español, italiano, alemán o francés escribes las fórmulas con los mismos nombres de función traducidos que usa Excel (`SUMA`, `BUSCARV`).",
        ],
      },
      {
        heading: "En qué ganan las demás",
        body: [
          "Excel es mucho más completo: macros, Power Query, tablas dinámicas de verdad, muchos más tipos de gráfico y el comportamiento de referencia para cualquier archivo de Excel. LibreOffice también tiene tablas dinámicas y macros, además de herramientas de dibujo y muchos más formatos de importación y exportación. Google Sheets tiene la mejor colaboración en tiempo real y funciona en cualquier dispositivo con navegador. Numbers y Excel tienen apps para iPhone y iPad; Foglio es solo para Mac.",
          "Foglio es la versión 1.0 de un pequeño proyecto de código abierto. Las grandes suites llevan décadas de pulido. Si un archivo es importante, guarda una copia.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuál es la mejor alternativa gratis a Excel para Mac?",
        a: "Depende de lo que necesites. Foglio es la opción gratuita más ligera que edita `.xlsx` directamente. LibreOffice Calc es la app de escritorio gratuita más completa. Google Sheets es la mejor para colaborar. Numbers viene instalada y es gratis, pero convierte los archivos de Excel a su propio formato. Nuestra [comparativa de hojas de cálculo gratis](/guides/free-spreadsheet-apps-for-mac/) incluye más opciones.",
      },
      {
        q: "¿Foglio admite macros o VBA?",
        a: "No. Foglio abre archivos `.xlsm`, pero no ejecuta sus macros. Si tu trabajo depende de VBA, usa Microsoft Excel; LibreOffice también puede ejecutar parte del código VBA.",
      },
      {
        q: "¿Foglio tiene tablas dinámicas?",
        a: "Todavía no tiene tablas dinámicas de verdad. *Summarize by* crea una hoja de resumen que se actualiza sola con fórmulas SUMAR.SI.CONJUNTO y CONTAR.SI.CONJUNTO, suficiente para tablas dinámicas sencillas. Excel, LibreOffice, Numbers y Google Sheets sí tienen tablas dinámicas.",
      },
      {
        q: "¿Pueden varias personas editar a la vez un archivo en Foglio?",
        a: "No. Foglio es una app de escritorio para una persona cada vez. Para editar en tiempo real con otros, son mejor opción Google Sheets o Excel con OneDrive.",
      },
      {
        q: "¿Están actualizados los precios de las demás apps?",
        a: "Se comprobaron en las páginas oficiales en noviembre de 2026 y son los precios de catálogo en España, con IVA. Los precios cambian y varían según el país, así que revisa los enlaces a las fuentes antes de comprar.",
      },
    ],
  },

  technology: {
    h1: "Cómo está hecho Foglio y por qué eso lo hace pequeño y rápido",
    intro: [
      "La mayoría de las apps de escritorio modernas llevan dentro una copia de un navegador web, un runtime de Java o un gran framework multiplataforma. Foglio no lleva ninguno. Es una app nativa de Mac en Swift y AppKit, con el motor de la hoja de cálculo escrito en Rust y enlazado directamente en la app.",
      "Esta página explica la arquitectura dos veces: primero con palabras sencillas y luego con el detalle suficiente para que un desarrollador se oriente en el [código fuente](https://github.com/Acid236/foglio).",
    ],
    sections: [
      {
        heading: "La versión corta",
        body: [
          "Piensa en Foglio como dos piezas. La que ves (ventanas, menús, la cuadrícula de celdas) está hecha con las propias herramientas de Apple, así que se ve y se comporta como cualquier otra app de Mac. La que hace las cuentas (leer archivos, entender fórmulas, recalcular) es un motor aparte escrito en Rust, un lenguaje que produce programas muy rápidos y compactos.",
          "Las dos piezas se comunican a través de una interfaz pequeña y sencilla. No hay nada en medio: ni navegador oculto, ni máquina virtual, ni runtime que descargar. Por eso toda la app es una descarga de 7,5 MB, se abre en 0,24 s y necesita unos 58 MB de memoria con una hoja vacía.",
        ],
      },
      {
        heading: "La app de Mac: Swift y AppKit",
        body: [
          "La interfaz está escrita en Swift sobre AppKit, el framework con el que están hechos el Finder y la mayoría de las apps del propio Mac. Los documentos son documentos reales de macOS, así que Abrir recientes, Guardar como, Volver a una versión, Duplicar, las pestañas de ventana, la pantalla completa, el modo oscuro, la impresión y la exportación a PDF funcionan como esperas.",
          "La hoja en sí es una cuadrícula `NSView` propia, no un control de tabla. Solo pide al motor las celdas visibles, en lotes listos para dibujar, lo que mantiene fluido el desplazamiento en hojas con cientos de miles de filas. Los gráficos, las imágenes y la barra de fórmulas también los dibuja la app.",
          "Foglio incluye además su propio reproductor de metarchivos EMF y WMF, el formato de imagen vectorial de los documentos de Office antiguos (imágenes prediseñadas, ecuaciones de MathType, diagramas de Visio pegados). Las imágenes que otras apps de Mac muestran como recuadros vacíos se dibujan bien y se guardan sin cambios.",
        ],
      },
      {
        heading: "El motor: Rust y un IronCalc con parches",
        body: [
          "Las fórmulas las analiza y evalúa [IronCalc](https://github.com/ironcalc/IronCalc), un motor de hojas de cálculo de código abierto escrito en Rust. Foglio usa un fork de IronCalc 0.9.1 con parches, con cada cambio marcado y documentado en el repositorio.",
          "El fork añade el **recálculo incremental**: cuando editas una celda, solo se recalculan las fórmulas que dependen de ella, no todo el libro. En un libro de 100.000 filas y 300.000 fórmulas, una edición tarda 16 ms; un recálculo completo, 64 ms.",
          "También añade **búsquedas indexadas**. La primera BUSCARV, COINCIDIR o BUSCARX sobre un rango lo lee una vez y crea un índice hash; las búsquedas siguientes son una sola consulta. 1.000 BUSCARV exactas sobre 10.000 filas pasaron de 1.703 ms en el IronCalc original a 1,3 ms en el fork de Foglio. El fork corrige además una docena de funciones, de modo que 191 de las 195 funciones de la auditoría de compatibilidad de Foglio coinciden con Excel en todos los casos de prueba.",
        ],
        bullets: [
          "Los `.xls` antiguos, los `.xlsb` binarios y los `.ods` de LibreOffice se leen con [calamine](https://github.com/tafia/calamine), un lector rápido en Rust.",
          "Los archivos CSV y TSV pasan por un importador en Rust que detecta la codificación del texto, el delimitador y el separador decimal.",
          "Las fórmulas escritas en español, italiano, alemán o francés se traducen a la forma estándar de Excel en inglés antes de guardarse.",
        ],
      },
      {
        heading: "El puente: una interfaz C sencilla",
        body: [
          "El motor en Rust se compila como biblioteca estática y expone una pequeña interfaz C (`foglio_core.h`): abrir y guardar un archivo, editar una celda, devolver un lote de celdas visibles. Swift la llama directamente mediante un bridging header. No hay bindings generados, ni frameworks, ni mensajes entre procesos, así que una llamada al motor cuesta más o menos lo mismo que una llamada a una función normal.",
        ],
      },
      {
        heading: "Sin proyecto de Xcode",
        body: [
          "Foglio se compila con dos comandos: `cargo` compila la biblioteca en Rust y `swiftc` compila la app y la enlaza. Un script de shell genera una app universal para Apple silicon e Intel y la empaqueta en una imagen de disco con `hdiutil`, la herramienta de la propia Apple. Necesitas las Command Line Tools de Xcode y Rust; no hace falta Xcode completo.",
          "Menos capas significa menos cosas que puedan fallar, compilaciones más rápidas y un proyecto que cualquiera puede leer de arriba abajo.",
        ],
      },
      {
        heading: "Probado con eventos reales de teclado y ratón",
        body: [
          "Foglio tiene 69 pruebas de interfaz que manejan la app real con eventos reales de teclado y ratón: escribir fórmulas, rellenar rangos, ordenar, deshacer, guardar y volver a abrir archivos. Los importadores de archivos y el motor de fórmulas tienen sus propias baterías de pruebas en Rust, y un modo especial vuelve a comprobar cada recálculo incremental frente a uno completo.",
        ],
      },
      {
        heading: "Por qué esto hace a Foglio pequeño y rápido",
        body: [
          "Una app Electron lleva una copia completa del navegador Chromium, normalmente bastante más de 100 MB antes de hacer nada. Una suite en Java o multiplataforma lleva su runtime y su propio sistema de interfaz. Foglio solo lleva su propio código y usa los frameworks que ya tiene cualquier Mac.",
          "El núcleo en Rust se compila con optimización completa en tiempo de enlazado y sin símbolos de depuración. El resultado es una app universal de unos 19 MB en disco, 7,5 MB como descarga comprimida, que en reposo usa un 0 % de CPU.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Foglio es una app Electron o una app web?",
        a: "No. Es una app nativa de AppKit escrita en Swift. No lleva dentro ningún motor de navegador.",
      },
      {
        q: "¿Funciona de forma nativa en Apple silicon?",
        a: "Sí. Foglio es una app universal con código nativo tanto para Apple silicon (arm64) como para Intel (x86_64).",
      },
      {
        q: "¿Puedo compilar Foglio yo mismo?",
        a: "Sí. Instala las Command Line Tools de Xcode y Rust y ejecuta `scripts/build.sh`. El [README](https://github.com/Acid236/foglio#building-from-source) tiene los comandos exactos.",
      },
      {
        q: "¿Los cambios en IronCalc se envían al proyecto original?",
        a: "El fork es de código abierto con las mismas licencias que IronCalc, y cada cambio está marcado con un comentario `Foglio fork:` y descrito en `third_party/README.md`, para que se pueda revisar y reutilizar.",
      },
    ],
  },

  download: {
    h1: "Descargar Foglio para Mac",
    intro: [
      "Foglio 1.0 es gratis. Una única imagen de disco universal funciona en cualquier Mac con macOS 14 Sonoma o posterior, tanto con Apple silicon como con Intel.",
      "Es una primera versión: gestiona de principio a fin las hojas de cálculo del día a día, pero guarda copias de seguridad de los archivos importantes.",
    ],
    steps: [
      {
        title: "Descarga la imagen de disco",
        text: "Haz clic en el botón de descarga para obtener `Foglio-1.0.dmg` (7,5 MB) desde las versiones publicadas del proyecto en GitHub.",
      },
      {
        title: "Arrastra Foglio a Aplicaciones",
        text: "Abre la imagen de disco y arrastra el icono de Foglio al acceso directo de Aplicaciones que aparece al lado. Después, expulsa la imagen de disco.",
      },
      {
        title: "Ábrela por primera vez",
        text: "La primera vez macOS te pide confirmación porque Foglio no está firmada con un Apple Developer ID de pago. Más abajo tienes los pasos; solo hay que hacerlo una vez.",
      },
      {
        title: "Abre tus hojas de cálculo",
        text: "Haz doble clic en un archivo `.xlsx` y elige Foglio en Abrir con, o arrastra los archivos al icono de Foglio en el Dock.",
      },
    ],
    gatekeeperTitle: "«Desarrollador no identificado»: cómo abrir Foglio la primera vez",
    gatekeeperText: [
      "Foglio 1.0 tiene una firma ad hoc en lugar de estar firmada y notarizada con una cuenta de Apple Developer de pago, así que Gatekeeper no puede avalarla y muestra un aviso la primera vez que la abres. Es lo normal en los proyectos pequeños de código abierto, y puedes leer cada línea del [código fuente](https://github.com/Acid236/foglio) o compilar la app tú mismo.",
      "**macOS 15 Sequoia o posterior:** haz doble clic en Foglio y cierra el aviso. Abre **Ajustes del Sistema ▸ Privacidad y seguridad**, baja hasta el mensaje sobre Foglio y haz clic en **Abrir igualmente**; luego confirma con tu contraseña o con Touch ID.",
      "**macOS 14 Sonoma:** en Aplicaciones, haz clic derecho (o Control + clic) en Foglio, elige **Abrir** y vuelve a hacer clic en **Abrir** en el cuadro de diálogo.",
      "A partir de ahí, Foglio se abre con normalidad, como cualquier otra app.",
    ],
    requirementsTitle: "Requisitos",
    requirements: [
      "macOS 14 Sonoma o posterior",
      "Mac con Apple silicon o Intel (app universal)",
      "Unos 19 MB de espacio en disco",
      "Sin cuenta y sin necesidad de conexión a internet",
    ],
    sourceTitle: "¿Prefieres compilarla tú?",
    sourceText: [
      "Foglio es de código abierto con licencias MIT y Apache-2.0. Con las Command Line Tools de Xcode y Rust instalados, `scripts/build.sh` compila la misma app universal desde el código fuente en unos minutos, sin Xcode.",
      "Las notas de versión, las versiones anteriores y el registro de incidencias están en [GitHub](https://github.com/Acid236/foglio/releases). ¿Te pica la curiosidad por saber cómo funciona? Lee sobre [la tecnología](/technology/).",
    ],
    faq: [
      {
        q: "¿Es segura la descarga?",
        a: "La imagen de disco se genera a partir del código fuente público y se publica en la página de versiones del proyecto en GitHub. El aviso de macOS aparece porque la app no está notarizada con una cuenta de Apple de pago, no porque se haya detectado nada en ella.",
      },
      {
        q: "¿Cómo actualizo Foglio?",
        a: "Foglio no busca actualizaciones por su cuenta, porque no hace conexiones de red. Descarga la nueva versión desde esta página o desde las versiones de GitHub y sustituye la app en Aplicaciones.",
      },
      {
        q: "¿Cómo la desinstalo?",
        a: "Arrastra Foglio de Aplicaciones a la Papelera. Tus hojas de cálculo son archivos normales y se quedan donde las guardaste.",
      },
      {
        q: "¿Puedo hacer que Foglio sea la app predeterminada para los archivos xlsx?",
        a: "Sí. Selecciona un archivo `.xlsx` en el Finder, elige Archivo ▸ Obtener información, selecciona Foglio en **Abrir con** y haz clic en **Cambiar todo…**.",
      },
      {
        q: "¿Hay versión para iPhone, iPad, Windows o Linux?",
        a: "No. Foglio es solo para Mac. El motor en Rust es multiplataforma, pero la interfaz está escrita en AppKit.",
      },
    ],
  },

  positioning: {
    title: "No intentamos ser Excel",
    text: [
      "Excel hace mil cosas, y algunas (macros, Power Pivot, coautoría en tiempo real) probablemente Foglio no las hará nunca. Y no pasa nada: copiar Excel función a función no es el objetivo.",
      "El objetivo es una hoja de cálculo que se sienta parte de tu Mac: nativa, rápida, ligerísima, que cuide la memoria y la batería, y que abra **prácticamente cualquier archivo de Excel que recibas** (aspiramos a 99 de cada 100) sin estropearlo cuando lo vuelves a guardar.",
    ],
    points: [
      { title: "Nativa", text: "Una app de Mac de verdad, en Swift y AppKit. Sin motor de navegador dentro y sin runtime que instalar." },
      { title: "Rápida y pequeña", text: "7,5 MB de descarga, se abre en un cuarto de segundo y usa unos 58 MB de memoria con una hoja abierta." },
      { title: "Compatible", text: "Lee y escribe `.xlsx` estándar y guarda tus fórmulas en la forma propia de Excel, para que el archivo se abra en cualquier parte." },
    ],
  },
  alternativesIndex: {
    h1: "Alternativas a Excel, Numbers, LibreOffice y Google Sheets",
    intro: [
      "Cada una de estas páginas explica qué ganas y qué pierdes al pasar a Foglio desde una app concreta, con un apartado sobre cuándo te conviene seguir con la que ya tienes. Si buscas ayuda paso a paso, consulta las [guías](/guides/).",
    ],
  },
  guidesIndex: {
    h1: "Guías de hojas de cálculo para Mac",
    intro: [
      "Respuestas prácticas a los problemas más comunes con hojas de cálculo en Mac: abrir archivos de Excel y CSV sin Excel, arreglar caracteres raros y columnas mal separadas, y escribir fórmulas en tu idioma. Cada guía explica también cómo hacerlo sin Foglio. ¿Vienes de otra app? Consulta las [alternativas](/alternatives/).",
    ],
  },
};
