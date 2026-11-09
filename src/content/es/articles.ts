import type { Article } from "../types";

const UPDATED = "2026-11-09";

/** Excel function names: [English, Spanish, Italian]. */
type Fn = [string, string, string];

const FN_MATH: Fn[] = [
  ["SUM", "SUMA", "SOMMA"],
  ["SUMIF", "SUMAR.SI", "SOMMA.SE"],
  ["SUMIFS", "SUMAR.SI.CONJUNTO", "SOMMA.PIÙ.SE"],
  ["SUMPRODUCT", "SUMAPRODUCTO", "MATR.SOMMA.PRODOTTO"],
  ["AVERAGE", "PROMEDIO", "MEDIA"],
  ["AVERAGEIF", "PROMEDIO.SI", "MEDIA.SE"],
  ["COUNT", "CONTAR", "CONTA.NUMERI"],
  ["COUNTA", "CONTARA", "CONTA.VALORI"],
  ["COUNTBLANK", "CONTAR.BLANCO", "CONTA.VUOTE"],
  ["COUNTIF", "CONTAR.SI", "CONTA.SE"],
  ["COUNTIFS", "CONTAR.SI.CONJUNTO", "CONTA.PIÙ.SE"],
  ["ROUND", "REDONDEAR", "ARROTONDA"],
  ["ROUNDUP", "REDONDEAR.MAS", "ARROTONDA.PER.ECC"],
  ["ROUNDDOWN", "REDONDEAR.MENOS", "ARROTONDA.PER.DIF"],
];
const FN_LOGIC: Fn[] = [
  ["IF", "SI", "SE"],
  ["IFS", "SI.CONJUNTO", "PIÙ.SE"],
  ["IFERROR", "SI.ERROR", "SE.ERRORE"],
  ["IFNA", "SI.ND", "SE.NON.DISP."],
  ["AND", "Y", "E"],
  ["OR", "O", "O"],
  ["NOT", "NO", "NON"],
];
const FN_LOOKUP: Fn[] = [
  ["VLOOKUP", "BUSCARV", "CERCA.VERT"],
  ["HLOOKUP", "BUSCARH", "CERCA.ORIZZ"],
  ["XLOOKUP", "BUSCARX", "CERCA.X"],
  ["INDEX", "INDICE", "INDICE"],
  ["MATCH", "COINCIDIR", "CONFRONTA"],
  ["INDIRECT", "INDIRECTO", "INDIRETTO"],
  ["OFFSET", "DESREF", "SCARTO"],
  ["FILTER", "FILTRAR", "FILTRO"],
  ["SORT", "ORDENAR", "ORDINA"],
];
const FN_TEXT: Fn[] = [
  ["LEFT", "IZQUIERDA", "SINISTRA"],
  ["RIGHT", "DERECHA", "DESTRA"],
  ["MID", "EXTRAE", "STRINGA.ESTRAI"],
  ["LEN", "LARGO", "LUNGHEZZA"],
  ["TRIM", "ESPACIOS", "ANNULLA.SPAZI"],
  ["UPPER", "MAYUSC", "MAIUSC"],
  ["LOWER", "MINUSC", "MINUSC"],
  ["SUBSTITUTE", "SUSTITUIR", "SOSTITUISCI"],
  ["CONCATENATE", "CONCATENAR", "CONCATENA"],
  ["TEXTJOIN", "UNIRCADENAS", "TESTO.UNISCI"],
  ["TEXT", "TEXTO", "TESTO"],
  ["VALUE", "VALOR", "VALORE"],
];
const FN_DATE: Fn[] = [
  ["TODAY", "HOY", "OGGI"],
  ["NOW", "AHORA", "ADESSO"],
  ["YEAR", "AÑO", "ANNO"],
  ["MONTH", "MES", "MESE"],
  ["DAY", "DIA", "GIORNO"],
  ["WEEKDAY", "DIASEM", "GIORNO.SETTIMANA"],
  ["EDATE", "FECHA.MES", "DATA.MESE"],
  ["EOMONTH", "FIN.MES", "FINE.MESE"],
  ["DATEDIF", "SIFECHA", "DATA.DIFF"],
  ["NETWORKDAYS", "DIAS.LAB", "GIORNI.LAVORATIVI.TOT"],
];
const fnList = (list: Fn[]) => list.map(([en, es, it]) => `\`${en}\` → \`${es}\` (en italiano: \`${it}\`)`);

export const alternatives: Article[] = [
  // ───────────────────────────────────────────────────────────────────
  {
    slug: "excel-for-mac",
    meta: {
      title: "Alternativa gratis a Excel para Mac que abre xlsx | Foglio",
      description:
        "¿Buscas una alternativa gratis a Excel para Mac, sin pagar Microsoft 365? Foglio es de código abierto y abre y guarda xlsx. Qué puede hacer y qué no.",
    },
    h1: "Una alternativa gratis a Excel para Mac que abre tus archivos xlsx",
    intro: [
      "Microsoft Excel para Mac es excelente, pero no es gratis. Para editar hojas de cálculo en la app de escritorio necesitas una suscripción a Microsoft 365 (en España, Personal cuesta 99 € al año y Familia 129 €) o una licencia de pago único de Office Hogar 2024 (149 € en la tienda de Microsoft en España, según comprobamos en noviembre de 2026). Si solo abres unas cuantas veces al mes un presupuesto, una factura o un informe que te han enviado por correo, es mucho dinero.",
      "Foglio es una alternativa gratis a Excel para Mac: una hoja de cálculo de código abierto que lee y escribe los mismos archivos `.xlsx`, entiende unas 500 funciones de Excel y usa los atajos de teclado de Excel para Mac. Esta página explica qué conservas, qué pierdes y cuándo Excel sigue siendo la opción correcta.",
    ],
    sections: [
      {
        heading: "Lo que conservas al cambiar",
        body: [
          "Foglio está pensada para que resulte familiar a cualquiera que haya usado Excel. La cuadrícula, la barra de fórmulas con el cuadro de nombres, las pestañas de hojas, las sumas de la barra de estado y los menús están donde esperas. La mayoría de los atajos son los mismos: ⌘1 para el formato de celdas, ⌘D para rellenar hacia abajo, F4 para alternar las referencias con `$`, ⇧⌘T para la autosuma y ⌘K para un hipervínculo.",
        ],
        bullets: [
          "**Tus archivos.** Los `.xlsx` se abren y se guardan con fuentes, rellenos, bordes, formatos de número, celdas combinadas, anchos de columna, paneles inmovilizados, comentarios, validación de datos, formato condicional, hipervínculos, gráficos e imágenes.",
          "**Tus fórmulas.** Unas 500 funciones, entre ellas SUMAR.SI.CONJUNTO, BUSCARX, INDICE/COINCIDIR, FILTRAR, ORDENAR, UNICOS, LET y LAMBDA. En la auditoría de compatibilidad de Foglio, 191 de 195 funciones de uso habitual coinciden con Excel en todos los casos de prueba.",
          "**Tu idioma.** En un Mac en español escribes las fórmulas con los nombres que usa Excel en español (`=SUMA(A1:A10)`, `=BUSCARV(…)`), con `;` como separador y coma decimal; lo mismo vale para italiano, alemán y francés. El archivo guarda la forma estándar en inglés, así que se abre en cualquier Excel.",
          "**Tus costumbres.** Controlador de relleno, pegado especial, autofiltro, orden por varios niveles, buscar y reemplazar, ir a, quitar duplicados, texto en columnas, inmovilizar paneles, mostrar fórmulas y el explorador de funciones: todo está ahí.",
        ],
      },
      {
        heading: "Lo que ganas",
        body: [
          "**No cuesta nada, para siempre.** Sin suscripción, sin prueba, sin cuenta y sin anuncios. Foglio tiene licencias MIT y Apache-2.0, y el código fuente está en [GitHub](https://github.com/GetFoglio/foglio).",
          "**Es ligerísima y rápida.** La descarga ocupa 7,5 MB y la app instalada unos 19 MB, frente a más de un giga solo para Excel. Foglio muestra una ventana lista para usar en 0,24 s y usa unos 58 MB de memoria con una hoja vacía. Un libro de 100.000 filas con 300.000 fórmulas se abre en 1,1 s y, tras una edición, se recalcula en 16 ms.",
          "**Todo se queda en tu Mac.** Foglio no hace conexiones de red por su cuenta y no tiene telemetría. No tienes que iniciar sesión en nada para abrir un archivo.",
        ],
      },
      {
        heading: "Lo que pierdes",
        body: [
          "Foglio 1.0 es la primera versión de un proyecto pequeño, y no intenta ser todo Excel. Antes de cancelar una suscripción, comprueba que tu trabajo no depende de nada de esto:",
        ],
        bullets: [
          "**Macros y VBA.** Los archivos `.xlsm` se abren, pero las macros no se ejecutan y no se conservan al guardar.",
          "**Tablas dinámicas.** Todavía no hay tablas dinámicas de verdad. *Summarize by* crea una hoja de resumen que se actualiza sola con fórmulas SUMAR.SI.CONJUNTO y CONTAR.SI.CONJUNTO, suficiente para casos sencillos.",
          "**Power Query, conexiones de datos y complementos.** No están disponibles.",
          "**Formas, cuadros de texto y SmartArt.** Se omiten al abrir un archivo. Los gráficos y las imágenes se conservan.",
          "**Barras de datos, conjuntos de iconos y minigráficos.** Todavía no se dibujan; las demás reglas de formato condicional y las escalas de color sí funcionan.",
          "**Libros protegidos con contraseña.** No se pueden abrir.",
          "**Los comentarios encadenados** se muestran como notas simples, y no hay coautoría en tiempo real.",
          "**Los gráficos** cubren los tipos habituales (columnas, barras, líneas, circular, anillo, área, dispersión, apilados), no toda la gama de Excel.",
        ],
      },
      {
        heading: "Otras formas gratis de usar archivos de Excel en Mac",
        body: [
          "Foglio no es la única opción y, según lo que necesites, otra puede encajarte mejor:",
        ],
        bullets: [
          "**Excel para la web** es gratis con una cuenta de Microsoft y es el Excel de verdad, en el navegador. Tus archivos viven en OneDrive y faltan algunas funciones de la versión de escritorio.",
          "**Apple Numbers** es gratis y viene instalada en muchos Mac. Convierte los archivos `.xlsx` a su propio formato y los vuelve a exportar a Excel cuando se lo pides.",
          "**LibreOffice Calc** es gratis, de código abierto y muy completa, con tablas dinámicas y macros, pero es una descarga grande y no se ve ni se comporta como una app nativa de Mac.",
          "**Google Sheets** (Hojas de cálculo de Google) es gratis con una cuenta de Google y la mejor opción cuando varias personas editan a la vez.",
        ],
        sub: [
          {
            heading: "Cómo se comparan",
            body: [
              "La [tabla comparativa completa](/compare/) pone las cinco una al lado de otra, con fuentes para cada precio y tamaño, y la [comparativa de hojas de cálculo gratis](/guides/free-spreadsheet-apps-for-mac/) añade alguna más. También hay páginas dedicadas a [Numbers](/alternatives/numbers/), [LibreOffice](/alternatives/libreoffice/) y [Google Sheets](/alternatives/google-sheets/).",
            ],
          },
        ],
      },
      {
        heading: "Cuándo te conviene seguir con Excel",
        body: [
          "Sigue pagando Excel si tu trabajo depende de macros, Power Query o tablas dinámicas, si intercambias modelos complejos con compañeros que necesitan que todo sobreviva al ida y vuelta exactamente igual, si tu empresa exige Microsoft 365 o si quieres Copilot. Excel también tiene versiones para iPhone, iPad y Windows; Foglio es solo para Mac.",
          "Mucha gente acaba usando las dos: Foglio para los archivos rápidos del día a día, porque se abre al instante, y Excel para los pocos libros pesados que lo necesitan.",
        ],
      },
      {
        heading: "Cómo probar una alternativa gratis a Excel con tus propios archivos",
        body: [
          "[Descarga Foglio](/download/) (7,5 MB, macOS 14 o posterior), arrástrala a Aplicaciones y ábrela. Como Foglio 1.0 no está notarizada por Apple, macOS te pide confirmación la primera vez; la página de descarga explica cómo. Después abre una copia de un libro real con File ▸ Open, o haz clic derecho en un archivo `.xlsx` y elige Abrir con ▸ Foglio.",
          "Comprueba lo que te importa: totales, búsquedas, fechas, formatos de número, gráficos. Conserva el original hasta que estés seguro. Si algo no se ve bien, [avísanos en GitHub](https://github.com/GetFoglio/foglio/issues) con un archivo de ejemplo.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Hay una versión gratis de Excel para Mac?",
        a: "La app de escritorio necesita una suscripción a Microsoft 365 o una licencia de Office para crear y editar archivos. Excel para la web es gratis con una cuenta de Microsoft. Entre las alternativas de escritorio gratis que abren archivos de Excel están Foglio, LibreOffice Calc y Apple Numbers.",
      },
      {
        q: "¿Un archivo guardado con Foglio se abre bien en Excel?",
        a: "Sí, Foglio guarda archivos `.xlsx` estándar con las fórmulas en la forma inglesa de Excel. El formato, los gráficos, las imágenes, los comentarios, la validación y el formato condicional se escriben de vuelta. Lo que Foglio no admite, como macros, formas o tablas dinámicas, no se conserva, así que guarda el original de los archivos complejos.",
      },
      {
        q: "¿Foglio usa los mismos atajos de teclado que Excel para Mac?",
        a: "En su mayoría, sí: ⌘1 formato de celdas, ⌘D / ⌘R rellenar, F4 referencias absolutas, ⇧⌘T autosuma, ⌥⇧⌘V pegar valores, ⌃; insertar la fecha, ⌥↓ abrir una lista de validación y muchos más. El README de GitHub tiene la lista completa.",
      },
      {
        q: "¿Foglio es tan rápida como Excel con archivos grandes?",
        a: "No hemos hecho pruebas comparativas con Excel, así que no diremos que lo superamos. En nuestro Mac de pruebas, Foglio abre un libro de 100.000 filas con 300.000 fórmulas en 1,1 s y lo recalcula tras una edición en 16 ms, lo que se percibe como instantáneo.",
      },
      {
        q: "¿Puedo usar Foglio en el trabajo?",
        a: "Sí. Las licencias MIT y Apache-2.0 permiten el uso comercial sin coste. Como con cualquier software 1.0, guarda copias de seguridad de los archivos importantes.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternativa gratis a Excel para Mac",
    cardText: "Abre y guarda archivos xlsx sin suscripción a Microsoft 365, sabiendo exactamente a qué renuncias.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "numbers",
    meta: {
      title: "Alternativa a Numbers que edita archivos Excel | Foglio",
      description:
        "Numbers convierte los archivos de Excel a su formato. Foglio, gratis para Mac, edita xlsx tal cual, con fórmulas y atajos de Excel. Cuándo usar cada una.",
    },
    h1: "Una alternativa a Numbers que trabaja con los archivos de Excel tal como son",
    intro: [
      "Apple Numbers es una buena app. Es gratis, tiene un diseño precioso y se sincroniza con tu iPhone y tu iPad. Pero está construida en torno a su propia idea de hoja de cálculo: un lienzo libre con tablas colocadas encima, que se guarda como `.numbers`. Cuando alguien te envía un archivo de Excel, Numbers lo importa, lo convierte, y tienes que acordarte de volver a exportarlo a Excel antes de reenviarlo.",
      "Foglio hace justo lo contrario. Es una app para Mac gratis y de código abierto que trabaja directamente con archivos `.xlsx`, con la cuadrícula de Excel, los nombres de función de Excel y los atajos de Excel para Mac. Si tus hojas de cálculo vienen de usuarios de Excel y vuelven a ellos, esa diferencia se nota cada día.",
    ],
    sections: [
      {
        heading: "Por qué a los usuarios de Excel les cuesta Numbers",
        body: [
          "Nada de esto son errores; son decisiones de diseño. Simplemente estorban cuando trabajas con archivos de Excel.",
        ],
        bullets: [
          "**Importar y exportar en lugar de abrir y guardar.** Un `.xlsx` abierto en Numbers se convierte en un documento de Numbers. Al guardar se crea un archivo `.numbers`; para devolverlo tienes que usar Archivo ▸ Exportar a ▸ Excel, y por el camino algunas cosas cambian.",
          "**Tablas sobre un lienzo, no una gran cuadrícula.** Una hoja de Numbers contiene varias tablas separadas, así que las hojas grandes de Excel pueden dividirse o cambiar de forma al importarlas.",
          "**Atajos y menús distintos.** Muchos atajos de Excel para Mac no hacen nada en Numbers, o hacen otra cosa.",
          "**Requisitos de sistema más recientes.** La versión actual de Numbers en la App Store necesita macOS 26; Foglio funciona en macOS 14 y posteriores.",
        ],
      },
      {
        heading: "Lo que Foglio hace de otra manera",
        bullets: [
          "**Edita el `.xlsx` tal cual.** Abre un archivo de Excel, cámbialo, pulsa ⌘S y sigue siendo un archivo de Excel. Sin paso de exportación.",
          "**Una cuadrícula por hoja, como Excel.** Encabezados de filas y columnas, inmovilizar paneles, el cuadro de nombres (escribe `B12` o `Sheet2!A1:C9` para saltar), pestañas de hoja que puedes renombrar, colorear, ocultar y reordenar.",
          "**Las fórmulas y los nombres de Excel.** Unas 500 funciones, entre ellas BUSCARX, SUMAR.SI.CONJUNTO, FILTRAR, LET y LAMBDA, escritas en el idioma de tu Mac: `=SUMA(A1:A10)` en un Mac en español, `=SUMME(…)` en uno en alemán ([lista de funciones en inglés y español](/guides/excel-functions-italian-english/)).",
          "**Los atajos de Excel para Mac.** ⌘1, ⌘D, F4, ⇧⌘T, ⌥⇧⌘V y decenas más funcionan como en Excel.",
          "**Archivos que a Numbers se le atragantan.** Foglio abre `.xls` antiguos, `.xlsb` binarios y `.ods` de LibreOffice, y archivos CSV en cualquier codificación habitual con detección automática del delimitador. Incluso dibuja las antiguas imágenes EMF/WMF de los archivos de Office.",
        ],
        body: [],
      },
      {
        heading: "Lo que Numbers hace mejor",
        body: [
          "Sé sincero contigo mismo sobre para qué usas Numbers. Si es para algo de esto, puede que Numbers siga siendo la mejor herramienta:",
        ],
        bullets: [
          "**Presentación.** Las plantillas, las tablas con estilo, los gráficos interactivos y la maquetación libre hacen que los documentos de Numbers se vean genial sin esfuerzo.",
          "**iPhone y iPad.** Numbers funciona en todos tus dispositivos Apple y se sincroniza por iCloud. Foglio es solo para Mac.",
          "**Colaboración.** Numbers permite colaborar en tiempo real a través de iCloud. Foglio es una app de escritorio para un solo usuario.",
          "**Tablas dinámicas.** Numbers las tiene; Foglio solo ofrece *Summarize by*, un resumen más sencillo que se actualiza solo.",
          "**Apple Intelligence.** Numbers integra las Herramientas de Escritura y, con una suscripción a Apple Creator Studio, un asistente que sugiere fórmulas y tablas. Foglio no tiene funciones de IA.",
        ],
      },
      {
        heading: "Tamaño y velocidad",
        body: [
          "La ficha de Numbers en la App Store indica 661 MB (una sola ficha para Mac, iPhone y iPad). Foglio es una descarga de 7,5 MB y ocupa unos 19 MB instalada. Muestra una ventana lista para usar en 0,24 s, se queda en el 0 % de CPU en reposo y usa unos 58 MB de memoria con una hoja vacía. Un libro de 100.000 filas con 300.000 fórmulas se abre en 1,1 s en nuestro Mac de pruebas.",
          "Numbers viene instalada en muchos Mac, así que puede que el tamaño te dé igual. El tiempo de arranque y cómo se maneja con hojas de Excel muy grandes, quizá no.",
        ],
      },
      {
        heading: "Cuándo te conviene quedarte con Numbers",
        body: [
          "Si tus hojas de cálculo son personales, rara vez salen de tus dispositivos Apple y te importa más su aspecto que la compatibilidad con Excel, quédate con Numbers. Es gratis, está muy pulida y bien integrada. Si compartes el presupuesto de casa con tu familia desde sus iPhone, la colaboración por iCloud de Numbers es difícil de superar.",
          "Si en cambio abres a menudo adjuntos de Excel, devuelves archivos `.xlsx` a compañeros o clientes, o simplemente piensas en Excel, Foglio te ahorra el paso de la conversión. Mucha gente usa las dos: Numbers para documentos personales bonitos y Foglio como app predeterminada para `.xlsx` y `.csv`.",
        ],
      },
      {
        heading: "Haz de Foglio la app predeterminada para archivos de Excel",
        body: [
          "Después de [descargar Foglio](/download/), selecciona cualquier archivo `.xlsx` en el Finder, pulsa ⌘I (Obtener información), elige Foglio en **Abrir con** y haz clic en **Cambiar todo…**. A partir de entonces, al hacer doble clic en un archivo de Excel se abrirá en Foglio, y Numbers seguirá disponible para sus propios documentos. Si quieres, repite el proceso con `.csv`.",
          "Para ver todas las opciones, consulta la [comparativa de hojas de cálculo para Mac](/compare/) o la guía para [abrir archivos xlsx sin Excel](/guides/open-xlsx-on-mac-without-excel/).",
        ],
      },
    ],
    faq: [
      {
        q: "¿Foglio puede abrir archivos .numbers?",
        a: "No. Foglio no lee el formato `.numbers` de Apple. En Numbers, usa Archivo ▸ Exportar a ▸ Excel para crear un `.xlsx` que Foglio pueda abrir.",
      },
      {
        q: "¿Foglio es gratis como Numbers?",
        a: "Sí. Foglio es gratis sin ninguna versión de pago y, además, es de código abierto con licencias MIT y Apache-2.0.",
      },
      {
        q: "¿Numbers conserva mis fórmulas de Excel?",
        a: "Numbers traduce la mayoría de las fórmulas habituales al importar y al exportar, pero las funciones que no tiene, las características propias de Excel y la maquetación pueden cambiar. Foglio mantiene el libro en formato Excel en todo momento.",
      },
      {
        q: "¿Foglio funciona en mi Mac antiguo?",
        a: "Foglio necesita macOS 14 Sonoma o posterior, con Apple silicon o Intel. La versión actual de Numbers necesita macOS 26.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternativa a Numbers para Excel",
    cardText: "Edita archivos xlsx tal cual, con la cuadrícula, los nombres de función y los atajos de Excel, sin convertirlos.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "libreoffice",
    meta: {
      title: "Alternativa ligera a LibreOffice Calc para Mac | Foglio",
      description:
        "LibreOffice es gratis, pero pesada y no es nativa en Mac. Foglio es una hoja de cálculo libre de 7,5 MB en Swift y Rust. Cuándo conviene cada una.",
    },
    h1: "Una alternativa ligera y nativa a LibreOffice Calc en Mac",
    intro: [
      "LibreOffice es uno de los grandes proyectos de software libre: una suite ofimática completa, gratis para todo el mundo, con una hoja de cálculo (Calc) que tiene tablas dinámicas, macros, una enorme biblioteca de funciones y compatibilidad con casi cualquier formato de archivo. Si buscas un sustituto gratis de Excel, es la primera recomendación obvia.",
      "En un Mac, sin embargo, se le notan sus raíces multiplataforma. La imagen de disco para Apple silicon ocupa unos 300 MB, instala una suite entera aunque solo quieras hojas de cálculo, y su interfaz, sus cuadros de diálogo y sus atajos no terminan de sentirse como el resto de macOS. Foglio es otro equilibrio: mucho más pequeña, nativa y centrada solo en hojas de cálculo.",
    ],
    sections: [
      {
        heading: "Dos apps gratis y de código abierto con objetivos distintos",
        body: [
          "Las dos son gratis y de código abierto, y las dos funcionan totalmente sin conexión, sin cuenta y sin telemetría. La diferencia es el alcance. LibreOffice aspira a ser una alternativa completa a Microsoft Office en todas las plataformas de escritorio. Foglio aspira a ser la forma más rápida y ligera de abrir y editar las hojas de Excel del día a día en un Mac, y nada más.",
        ],
        bullets: [
          "**Foglio:** interfaz en Swift/AppKit, motor en Rust, solo Mac, MIT / Apache-2.0, 7,5 MB de descarga, unos 19 MB instalada.",
          "**LibreOffice:** suite en C++ con su propio sistema de interfaz, para Windows, macOS y Linux, MPL-2.0, unos 300 MB de descarga y hasta 800 MB en disco según sus requisitos de sistema.",
        ],
      },
      {
        heading: "En qué es mejor Foglio",
        bullets: [
          "**Tamaño y arranque.** Foglio muestra una ventana lista para usar en 0,24 s y usa unos 58 MB de memoria con una hoja vacía, con 0 % de CPU en reposo.",
          "**Una app nativa de Mac.** Documentos reales de macOS, pestañas de ventana, modo oscuro, los paneles estándar de Abrir y Guardar, pellizcar para hacer zoom, desplazamiento fluido en una cuadrícula propia y los atajos de teclado de Excel para Mac.",
          "**La forma de trabajar de Excel.** `.xlsx` es el formato propio de Foglio, no un filtro de importación. Los nombres de función siguen a Excel en tu idioma (`BUSCARV`, `CERCA.VERT`, `SVERWEIS`).",
          "**Funciones modernas de Excel.** Foglio admite LAMBDA, además de BUSCARX, FILTRAR, ORDENAR y LET. LibreOffice añadió BUSCARX, FILTRAR y LET en 2024, pero en el momento de escribir esto no implementa LAMBDA.",
          "**Velocidad con libros grandes.** Gracias al recálculo incremental y a las búsquedas indexadas, una edición en un libro de 100.000 filas con 300.000 fórmulas se recalcula en 16 ms en nuestro Mac de pruebas.",
        ],
        body: [],
      },
      {
        heading: "En qué es mejor LibreOffice Calc",
        body: [
          "LibreOffice tiene décadas de desarrollo detrás y, para muchas tareas, simplemente hace más:",
        ],
        bullets: [
          "**Tablas dinámicas** (con campos calculados en las versiones recientes). Foglio solo ofrece *Summarize by*.",
          "**Macros** en LibreOffice Basic y Python, con compatibilidad parcial con VBA de Excel. Foglio no ejecuta macros.",
          "**Más tipos de gráfico**, formas, herramientas de dibujo y cuadros de texto.",
          "**Guarda en más formatos**, entre ellos `.ods`, `.xls` y muchos otros. Foglio abre `.xls` y `.ods` (valores, fórmulas y fechas), pero solo guarda en `.xlsx`, CSV y PDF.",
          "**Archivos protegidos con contraseña**, barras de datos, conjuntos de iconos y minigráficos, que Foglio todavía no admite.",
          "**Una suite completa**: Writer, Impress, Draw y Base vienen en la misma descarga.",
          "**Versiones para Windows y Linux**, si trabajas en varias plataformas.",
        ],
      },
      {
        heading: "Cuándo te conviene seguir con LibreOffice",
        body: [
          "Quédate con LibreOffice si necesitas tablas dinámicas o macros, si trabajas con OpenDocument como formato principal, si también te hacen falta procesador de textos y presentaciones, o si usas la misma suite en Windows o Linux. Es un proyecto maduro y fiable, y mantenerlo instalado no cuesta nada.",
          "Elige Foglio si lo que haces en realidad es abrir las hojas de cálculo que te envían, cambiar algunas cifras y devolverlas, y quieres una app que arranque al instante, se sienta como el resto de tu Mac y no ocupe 800 MB de disco para ello. Pueden convivir: haz de Foglio la app predeterminada para `.xlsx` y `.csv`, y abre LibreOffice para los trabajos que la necesiten.",
        ],
      },
      {
        heading: "Cambiar es fácil porque los archivos son los mismos",
        body: [
          "No hay migración. Las dos apps leen y escriben `.xlsx`, así que un archivo editado en una se abre en la otra. Si tienes archivos `.ods`, Foglio abre sus valores, fórmulas y fechas y los guarda como `.xlsx`; el formato de los `.ods` todavía no se traslada, así que conserva los originales. Lo mismo vale para los `.xls` antiguos; consulta [cómo abrir archivos .xls en Mac](/guides/open-xls-on-mac/).",
          "[Descarga Foglio](/download/), pruébala con algunos archivos reales y consulta la [tabla comparativa](/compare/) para ver los detalles. Si te intriga por qué es tan pequeña, lee [cómo está hecho Foglio](/technology/).",
        ],
      },
    ],
    faq: [
      {
        q: "¿Foglio está basada en LibreOffice?",
        a: "No. Foglio es un proyecto independiente. Su interfaz está escrita en Swift/AppKit y su motor de fórmulas es un fork con parches de IronCalc, un motor de hojas de cálculo de código abierto en Rust. Usa la biblioteca calamine, también en Rust, para leer `.xls`, `.xlsb` y `.ods`.",
      },
      {
        q: "¿Las dos son gratis para uso comercial?",
        a: "Sí. LibreOffice tiene licencia MPL-2.0 y Foglio, MIT y Apache-2.0. Las dos se pueden usar en el trabajo sin coste.",
      },
      {
        q: "¿Cuál abre mejor los archivos de Excel?",
        a: "Depende del archivo. LibreOffice admite en conjunto más funciones de Excel (tablas dinámicas, macros, formas). Foglio trata `.xlsx` como su formato nativo y coincide con los resultados de Excel en 191 de 195 funciones auditadas. Prueba tus propios archivos en las dos.",
      },
      {
        q: "¿Foglio guarda archivos .ods?",
        a: "No. Foglio abre `.ods` y guarda como `.xlsx`. Si necesitas conservar archivos OpenDocument, usa LibreOffice.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternativa ligera a LibreOffice Calc",
    cardText: "Una hoja de cálculo nativa de 7,5 MB para los archivos de Excel del día a día, y cuándo LibreOffice sigue siendo mejor.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "google-sheets",
    meta: {
      title: "Alternativa a Google Sheets sin conexión para Mac | Foglio",
      description:
        "¿Quieres hojas de cálculo que funcionen sin internet y no salgan de tu Mac? Foglio es una app gratis y privada, sin cuenta. Cuándo Google Sheets es mejor.",
    },
    h1: "Una alternativa a Google Sheets para Mac, sin conexión y privada",
    intro: [
      "Google Sheets (Hojas de cálculo de Google) es gratis, potente e imbatible cuando varias personas tienen que editar la misma hoja a la vez. También tiene sus condiciones: necesitas una cuenta de Google, tus archivos viven en los servidores de Google, funciona en una pestaña del navegador y, para trabajar sin conexión, hacen falta Chrome o Edge, una extensión y algo de configuración previa.",
      "Foglio es una hoja de cálculo gratis y de código abierto que funciona por completo en tu Mac. Sin cuenta, sin inicio de sesión y sin conexiones de red por su cuenta. Tus archivos son archivos `.xlsx` normales en la carpeta que elijas. Así se comparan las dos, con honestidad.",
    ],
    sections: [
      {
        heading: "Por qué se busca una alternativa a Google Sheets",
        bullets: [
          "**Trabajar sin conexión.** En un avión, en un tren o con el wifi flojo de un hotel, una app de escritorio simplemente funciona. El modo sin conexión de Google se tiene que activar estando en línea, necesita la extensión Documentos de Google sin conexión en Chrome o Edge, y solo puede usarlo una cuenta por perfil del navegador.",
          "**Privacidad.** Hay datos que no deberían subirse a ninguna parte: nóminas, gastos médicos, listas de clientes. Con Foglio, el archivo no sale de tu Mac salvo que tú lo envíes.",
          "**Sin cuenta.** No todo el mundo tiene, ni quiere, una cuenta de Google, y algunas empresas no permiten el almacenamiento personal en la nube.",
          "**Una app de Mac de verdad.** Una pestaña del navegador no es una app de Mac: sin Abrir recientes, sin pestañas de ventana propias, sin el cuadro de impresión nativo, sin atajos de Mac. Foglio está escrita en Swift/AppKit.",
          "**Archivos locales grandes.** Abrir un `.xlsx` grande en Sheets implica subirlo y convertirlo, y Google pone un límite de 20 millones de celdas por hoja de cálculo. Foglio abre un libro de 100.000 filas y 300.000 fórmulas en 1,1 s en nuestro Mac de pruebas.",
        ],
        body: [],
      },
      {
        heading: "Lo que conservas de Google Sheets",
        body: [
          "Casi todo lo que haces en Sheets funciona igual en Foglio. Las fórmulas usan la misma sintaxis de estilo Excel y los mismos nombres de función: SUMAR.SI.CONJUNTO, BUSCARX, FILTRAR, ORDENAR, UNICOS, LET y LAMBDA están todas, entre unas 500 funciones. Autofiltro, ordenación, listas desplegables de validación, formato condicional con escalas de color, gráficos, buscar y reemplazar, inmovilizar paneles y comentarios: todo está disponible.",
          "Para traerte una hoja, usa Archivo ▸ Descargar ▸ Microsoft Excel (.xlsx) en Google Sheets y abre el archivo en Foglio. El formato, las fórmulas y los gráficos se conservan; las funciones exclusivas de Google, como GOOGLEFINANCE, IMPORTRANGE o QUERY, no tienen equivalente en Foglio ni en Excel.",
        ],
      },
      {
        heading: "Lo que Google Sheets hace mejor",
        bullets: [
          "**Colaboración en tiempo real.** Varios cursores en una misma hoja, comentarios con menciones, historial de versiones. Foglio es una app de escritorio para un solo usuario.",
          "**Cualquier dispositivo.** Sheets funciona en cualquier navegador y tiene apps para iPhone, iPad y Android. Foglio solo funciona en Mac con macOS 14 o posterior.",
          "**Datos en línea.** Funciones como IMPORTRANGE, IMPORTHTML y GOOGLEFINANCE traen datos en directo de la web. Foglio no se conecta a internet.",
          "**Automatización e IA.** Apps Script para automatizar y, según tu plan, Gemini para ayudarte con fórmulas y análisis. Foglio no tiene ni macros ni funciones de IA.",
          "**Tablas dinámicas y más tipos de gráfico.** Foglio ofrece *Summarize by* para resúmenes sencillos y los tipos de gráfico habituales.",
        ],
        body: [],
      },
      {
        heading: "Cuándo te conviene seguir con Google Sheets",
        body: [
          "Si tu hoja de cálculo es un espacio compartido, como el seguimiento de un equipo, la lista de equipaje de la familia o una hoja de inscripciones, Google Sheets es la herramienta adecuada y Foglio no intenta sustituirla. Lo mismo para las hojas que traen datos en directo de la web o que necesitas editar desde el móvil.",
          "Si la hoja es tuya, local o confidencial, tiene más sentido una app de escritorio. Mucha gente usa las dos: Google Sheets para los documentos compartidos y Foglio para las finanzas personales, los datos de clientes y los archivos de Excel que llegan por correo.",
        ],
      },
      {
        heading: "Tus archivos, en tu carpeta",
        body: [
          "Foglio guarda archivos `.xlsx` estándar donde quieras: en Documentos, en un disco externo o, si lo prefieres, en una carpeta sincronizada como iCloud Drive o Dropbox. Como son archivos de Excel, siempre puedes subir uno a Google Sheets más adelante. No hay ataduras en ninguna dirección.",
          "[Descarga Foglio](/download/) gratis (7,5 MB, macOS 14+). Para ver cómo se compara también con Excel, Numbers y LibreOffice, lee la [comparativa completa](/compare/).",
        ],
      },
    ],
    faq: [
      {
        q: "¿Google Sheets funciona sin conexión en Mac?",
        a: "Sí, con límites: necesitas Chrome o Microsoft Edge y la extensión Documentos de Google sin conexión, y tienes que activar el acceso sin conexión mientras estás conectado. Solo puede usarlo una cuenta por perfil del navegador. Una app de escritorio como Foglio, Numbers, LibreOffice o Excel funciona sin conexión sin configurar nada.",
      },
      {
        q: "¿Foglio sube mis archivos a algún sitio?",
        a: "No. Foglio no tiene sistema de cuentas, ni almacenamiento en la nube, ni telemetría, y no hace conexiones de red por su cuenta. Solo abre una página web cuando haces clic en un hipervínculo de una celda.",
      },
      {
        q: "¿Puedo abrir un archivo de Google Sheets en Foglio?",
        a: "Primero descárgalo con Archivo ▸ Descargar ▸ Microsoft Excel (.xlsx) en Google Sheets y luego abre el `.xlsx` en Foglio. Un archivo de acceso directo `.gsheet` de Google Drive para ordenadores es solo un enlace y no se puede abrir sin conexión.",
      },
      {
        q: "¿Mis fórmulas de Google Sheets funcionarán en Foglio?",
        a: "Las fórmulas estándar, sí, porque las dos siguen la sintaxis de Excel. Las funciones propias de Google, como QUERY, IMPORTRANGE, GOOGLEFINANCE y SPARKLINE, no están disponibles en Foglio.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternativa sin conexión a Google Sheets",
    cardText: "Una hoja de cálculo de escritorio gratis, sin cuenta y sin nube, y cuándo Google Sheets sigue siendo lo adecuado.",
  },
];

export const guides: Article[] = [
  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-xlsx-on-mac-without-excel",
    meta: {
      title: "Abrir archivos xlsx en Mac sin Excel: 4 formas | Foglio",
      description:
        "Cuatro formas gratis de abrir y editar archivos xlsx en Mac sin Excel: Vista rápida, Numbers, una app de escritorio gratis o el navegador. Pros y contras.",
    },
    h1: "Cómo abrir archivos xlsx en Mac sin Excel",
    intro: [
      "Alguien te ha enviado una hoja de cálculo, haces doble clic y tu Mac abre Numbers, te pregunta con qué app abrirla o te dice que necesitas una suscripción a Microsoft 365. No tienes que comprar Excel para leer o editar un archivo `.xlsx`. Estas son las opciones gratis, de la más rápida a la más completa, con las ventajas y desventajas de cada una.",
    ],
    sections: [
      {
        heading: "1. Solo para verlo: Vista rápida",
        body: [
          "Si solo necesitas leer el archivo, selecciónalo en el Finder y pulsa la **barra espaciadora**. Vista rápida (Quick Look) muestra una previsualización de las hojas sin abrir ninguna app. No puedes editar, ordenar ni copiar fórmulas, y los archivos complejos pueden no verse con exactitud, pero es instantáneo y viene con el Mac.",
        ],
      },
      {
        heading: "2. Editarlo con una app de escritorio gratis",
        body: [
          "Para cambiar el archivo y devolverlo como `.xlsx`, lo más directo es una app de escritorio que trate el formato de Excel como propio. [Foglio](/) es una app para Mac gratis y de código abierto hecha justo para esto: abre y guarda `.xlsx` con formato, fórmulas, gráficos, imágenes y comentarios, y usa los nombres de función y los atajos de teclado de Excel.",
        ],
        sub: [
          {
            heading: "Pasos con Foglio",
            body: [],
            bullets: [
              "[Descarga Foglio](/download/) (7,5 MB, macOS 14 o posterior) y arrástrala a Aplicaciones.",
              "La primera vez, confirma el aviso de seguridad de macOS: en macOS 15 o posterior ve a Ajustes del Sistema ▸ Privacidad y seguridad ▸ **Abrir igualmente**; en macOS 14 haz clic derecho en la app y elige **Abrir**.",
              "Haz clic derecho en tu archivo `.xlsx` en el Finder y elige **Abrir con ▸ Foglio**, o arrástralo al icono de Foglio.",
              "Edítalo y pulsa ⌘S. El archivo se guarda como `.xlsx`, listo para devolverlo.",
            ],
          },
          {
            heading: "Qué tener en cuenta",
            body: [
              "Foglio no ejecuta macros, no tiene tablas dinámicas de verdad, omite formas y SmartArt y no abre archivos protegidos con contraseña. Con hojas de cálculo normales rara vez es un problema, pero conserva el original de cualquier archivo complejo. [LibreOffice Calc](/alternatives/libreoffice/) es otra opción de escritorio gratis, más pesada pero con tablas dinámicas y macros.",
            ],
          },
        ],
      },
      {
        heading: "3. Usar Apple Numbers",
        body: [
          "Numbers es gratis, de Apple, y muchas veces ya está instalada. Haz clic derecho en el archivo y elige **Abrir con ▸ Numbers**. Numbers importa el libro y lo convierte en un documento de Numbers; cuando termines, usa **Archivo ▸ Exportar a ▸ Excel** para volver a crear un `.xlsx`. Si solo pulsas ⌘S obtendrás un archivo `.numbers`, que los usuarios de Excel no pueden abrir.",
          "Funciona bien con archivos sencillos. Las hojas grandes, algunas fórmulas y el formato pueden cambiar en el ida y vuelta, y la versión actual de Numbers necesita macOS 26. Consulta [Numbers frente a Foglio](/alternatives/numbers/) para ver los detalles.",
        ],
      },
      {
        heading: "4. Usar el navegador: Excel para la web o Google Sheets",
        body: [
          "**Excel para la web** es gratis con una cuenta de Microsoft: sube el archivo a OneDrive y ábrelo en el navegador. Es Excel de verdad, sin algunas funciones de escritorio. **Google Sheets** puede abrir archivos `.xlsx` subidos a Google Drive, ya sea convirtiéndolos o editándolos en el modo de compatibilidad con Office en Chrome; descárgalos como `.xlsx` cuando termines.",
          "Las dos opciones necesitan conexión a internet y una cuenta, y las dos implican subir el archivo a un servicio en la nube. Evita esta vía con datos confidenciales como nóminas o historiales médicos. Hay más información en la página de [alternativa a Google Sheets](/alternatives/google-sheets/).",
        ],
      },
      {
        heading: "Que se quede así: elige la app predeterminada",
        body: [
          "Para que todos los `.xlsx` se abran con la app que prefieras, selecciona uno en el Finder, pulsa ⌘I (Obtener información), elige la app en **Abrir con** y haz clic en **Cambiar todo…**.",
        ],
      },
      {
        heading: "Abrir xlsx en Mac sin Excel: ¿qué opción elegir?",
        bullets: [
          "**Solo leer:** Vista rápida.",
          "**Editar y devolver, con privacidad y sin conexión:** una app de escritorio gratis como Foglio o LibreOffice.",
          "**Documentos bonitos para ti:** Numbers.",
          "**Trabajar en el archivo con otras personas a la vez:** Excel para la web o Google Sheets.",
        ],
        body: ["La [página de comparativa](/compare/) muestra todas las diferencias lado a lado."],
      },
    ],
    faq: [
      {
        q: "¿Un Mac puede abrir archivos xlsx sin instalar nada?",
        a: "Puedes previsualizarlos con Vista rápida (selecciona el archivo y pulsa la barra espaciadora). Para editarlos necesitas una app: Numbers es gratis, de Apple, y Foglio y LibreOffice son descargas gratuitas.",
      },
      {
        q: "¿Por qué mi archivo xlsx se abre en Numbers?",
        a: "Numbers es la app predeterminada para hojas de cálculo en muchos Mac. Cámbialo en el Finder con Obtener información ▸ Abrir con ▸ Cambiar todo….",
      },
      {
        q: "¿Y los archivos .xlsm con macros?",
        a: "Las apps gratis abren los datos, pero solo Excel ejecuta las macros VBA de forma fiable. Foglio abre archivos `.xlsm` sin ejecutar las macros, y estas no se conservan al guardar.",
      },
      {
        q: "¿Es seguro subir archivos del trabajo a un visor en línea?",
        a: "Depende del archivo y de las normas de tu empresa. Los conversores y visores en línea gratuitos reciben una copia de tus datos. Una app de escritorio mantiene el archivo en tu Mac.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Abrir archivos xlsx sin Excel",
    cardText: "Vista rápida, Numbers, una app de escritorio gratis o el navegador: cuatro formas gratis de abrir y editar Excel en Mac.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-xls-on-mac",
    meta: {
      title: "Cómo abrir archivos .xls antiguos de Excel en Mac | Foglio",
      description:
        "¿Un .xls antiguo de Excel 97–2003 que Numbers rechaza? Cómo abrir xls en Mac gratis, convertirlo a xlsx y qué hacer si el archivo no es un xls de verdad.",
    },
    h1: "Cómo abrir archivos .xls antiguos de Excel en Mac",
    intro: [
      "`.xls` es el formato binario que Excel usaba antes de 2007, y sigue por todas partes: exportaciones de bancos, programas de contabilidad, datos de la administración, archivos históricos. Las apps modernas de Mac lo manejan peor que `.xlsx`. Numbers, por ejemplo, puede rechazar algunos archivos con un mensaje que dice que el documento se creó con una versión de Excel no compatible.",
      "Aquí tienes cómo abrir un archivo `.xls` en Mac gratis, cómo convertirlo al formato moderno `.xlsx` y qué hacer cuando el archivo en realidad no es un `.xls`.",
    ],
    sections: [
      {
        heading: "Opción 1: ábrelo en Foglio y guárdalo como xlsx",
        body: [
          "[Foglio](/) es una hoja de cálculo gratis y de código abierto para Mac. Lee archivos `.xls` con calamine, una biblioteca rápida en Rust para los formatos antiguos de Excel, y también abre archivos binarios `.xlsb`.",
        ],
        bullets: [
          "[Descarga Foglio](/download/) y arrástrala a Aplicaciones.",
          "Haz clic derecho en el archivo `.xls` y elige **Abrir con ▸ Foglio** (o usa File ▸ Open en Foglio).",
          "Revisa los datos y elige **File ▸ Save As…** para guardar una copia en `.xlsx`. Foglio no escribe el antiguo formato `.xls`.",
        ],
        sub: [
          {
            heading: "Qué se conserva",
            body: [
              "De los archivos `.xls` y `.xlsb`, Foglio importa **valores, fórmulas y fechas** de todas las hojas. El formato de celdas, como fuentes, colores y bordes, todavía no se importa desde estos formatos antiguos, y las macros nunca se ejecutan. Si necesitas el aspecto original de un libro antiguo, LibreOffice o Excel conservarán más.",
            ],
          },
        ],
      },
      {
        heading: "Opción 2: LibreOffice Calc",
        body: [
          "LibreOffice Calc es gratis, de código abierto y lleva décadas trabajando con `.xls`, formato incluido. También puede volver a guardar en `.xls` si algún sistema que usas todavía lo exige. Es una descarga más grande (unos 300 MB para Apple silicon) y no es una app nativa de Mac, pero para archivos históricos de libros antiguos es muy minuciosa. Consulta [LibreOffice frente a Foglio](/alternatives/libreoffice/).",
        ],
      },
      {
        heading: "Opción 3: Numbers o Excel",
        body: [
          "Numbers abre muchos archivos `.xls`: clic derecho ▸ Abrir con ▸ Numbers. Si lo rechaza, convierte primero el archivo a `.xlsx` con Foglio o LibreOffice y luego impórtalo en Numbers. Microsoft Excel, por supuesto, abre cualquier `.xls`, pero necesita una suscripción o una licencia para editar.",
        ],
      },
      {
        heading: "Cuando el «.xls» no es un xls",
        body: [
          "Muchas webs y sistemas de empresa antiguos exportan archivos con extensión `.xls` que en realidad son otra cosa. Si un archivo muestra etiquetas raras, todo en una sola columna o texto ilegible, comprueba qué es realmente:",
        ],
        bullets: [
          "**Tablas HTML.** Algunos sistemas generan una página web y la llaman `.xls`. Ábrela en TextEdit; si ves `<table>` o `<html>`, cambia la extensión de la copia a `.html` y ábrela en el navegador, o copia la tabla en una hoja de cálculo.",
          "**Texto separado por tabuladores o comas.** Si TextEdit muestra filas de texto plano, cambia la extensión de la copia a `.csv` o `.txt`. Foglio los abre con detección automática de codificación, delimitador y separador decimal; consulta [cómo abrir archivos CSV en Mac](/guides/open-csv-on-mac/).",
          "**Un `.xlsx` con la extensión equivocada.** Si el archivo es en realidad un `.xlsx` (en TextEdit empieza por las letras `PK`), cambia la extensión de la copia a `.xlsx`.",
          "**SpreadsheetML (XML).** Los archivos XML de Excel 2003 empiezan por `<?xml` y mencionan `urn:schemas-microsoft-com:office:spreadsheet`. Foglio no los lee; LibreOffice y Excel, sí.",
        ],
      },
      {
        heading: "Convertir muchos archivos .xls",
        body: [
          "Foglio convierte los archivos de uno en uno. Para un archivo histórico grande, LibreOffice puede convertir por lotes desde el Terminal con su opción de línea de comandos `--convert-to xlsx`. Uses lo que uses, conserva los `.xls` originales hasta haber revisado los resultados.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué diferencia hay entre xls y xlsx?",
        a: "`.xls` es el formato binario de Excel de 1997–2003. `.xlsx` es el formato basado en XML que Excel usa desde 2007. Los archivos `.xlsx` ocupan menos, son más robustos y los admiten todas las apps modernas.",
      },
      {
        q: "¿Foglio puede guardar archivos .xls?",
        a: "No. Foglio abre `.xls` y guarda como `.xlsx`. Si necesitas escribir `.xls`, usa LibreOffice o Excel.",
      },
      {
        q: "¿Por qué Numbers dice que el archivo se creó con una versión de Excel no compatible?",
        a: "Numbers no importa algunas variantes antiguas de `.xls`. Abre el archivo en Foglio o LibreOffice, guárdalo como `.xlsx` y Numbers podrá importarlo.",
      },
      {
        q: "¿Son peligrosos los xls antiguos con macros?",
        a: "Las macros pueden contener código dañino. Foglio nunca ejecuta macros, así que abrir un `.xls` o un `.xlsm` con ella no las ejecuta. Ten cuidado al activar macros en Excel en archivos que no esperabas.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Abrir archivos .xls antiguos en Mac",
    cardText: "Abre gratis archivos de Excel 97–2003, conviértelos a xlsx y detecta las exportaciones que no son xls de verdad.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-csv-on-mac",
    meta: {
      title: "Abrir CSV en Mac: columnas, acentos y decimales | Foglio",
      description:
        "¿Tu CSV se abre en una sola columna, con acentos raros o decimales mal? Por qué pasa en Mac y cómo abrir archivos CSV bien, con o sin Excel.",
    },
    h1: "Cómo abrir archivos CSV en Mac (y arreglar columnas, acentos y decimales)",
    intro: [
      "CSV parece el formato más sencillo que existe: filas de texto con valores separados por comas. En la práctica es una fuente inagotable de pequeños desastres. Todo acaba en la columna A. Las letras acentuadas se convierten en `Ã©`. Un precio de `1,50` se convierte en `150`. Los ceros iniciales desaparecen de los códigos postales.",
      "Esta guía explica las tres cosas que fallan, cómo abrir bien un CSV en Mac con o sin Excel, y cómo guardar uno que otros puedan abrir.",
    ],
    sections: [
      {
        heading: "Por qué los CSV se abren mal",
        sub: [
          {
            heading: "1. El delimitador",
            body: [
              "Pese al nombre, muchos archivos CSV no están separados por comas. En los países que escriben los decimales con coma (España, Italia, Alemania, Francia, buena parte de Latinoamérica y muchos más), Excel exporta los CSV con **punto y coma**. Otros sistemas usan tabuladores o barras verticales. Si la app adivina mal el delimitador, cada fila acaba en una sola columna.",
            ],
          },
          {
            heading: "2. La codificación del texto",
            body: [
              "Un archivo CSV no dice qué codificación de caracteres usa. Los archivos modernos suelen ser UTF-8, pero las exportaciones de programas antiguos de Windows suelen estar en Windows-1252, y algunas herramientas escriben en UTF-16. Si se lee con la codificación equivocada, la `é` se convierte en `Ã©`, la `ñ` en `Ã±` y el `€` en un galimatías.",
            ],
          },
          {
            heading: "3. El separador decimal",
            body: [
              "`1,500` significa uno y medio en España y mil quinientos en Estados Unidos o México. Si la app lee los números con la convención de tu Mac en lugar de la del archivo, los valores quedan mal sin avisar, que es peor que un error visible.",
            ],
          },
        ],
        body: [],
      },
      {
        heading: "La forma fácil: una app que detecta las tres cosas",
        body: [
          "[Foglio](/) es una hoja de cálculo gratis y de código abierto para Mac que examina el archivo antes de importarlo:",
        ],
        bullets: [
          "**Delimitador:** elige entre coma, punto y coma, tabulador y barra vertical comprobando cuál divide las primeras filas de forma más coherente, sin tener en cuenta los separadores entre comillas.",
          "**Codificación:** lee UTF-8 (con o sin marca de orden de bytes) y UTF-16, y si no, recurre a Windows-1252 para las exportaciones antiguas de Europa occidental.",
          "**Decimales:** averigua si el archivo escribe `1.234,56` o `1,234.56` y lee cada número en consecuencia, sea cual sea la región de tu Mac.",
          "**Seguridad:** el texto que empieza por `=` se mantiene como texto y nunca se ejecuta como fórmula, así que un CSV malicioso no puede lanzar cálculos.",
        ],
        sub: [
          {
            heading: "Pasos",
            body: [
              "[Descarga Foglio](/download/), haz clic derecho en el archivo `.csv` y elige **Abrir con ▸ Foglio**. Los archivos `.tsv` y `.txt` funcionan igual. Cuando termines, guárdalo como libro de Excel (`.xlsx`) para conservar fórmulas y formato, o de nuevo como CSV.",
            ],
          },
        ],
      },
      {
        heading: "Otras formas de abrir un CSV en Mac",
        bullets: [
          "**Numbers:** doble clic o Abrir con ▸ Numbers. Funciona bien con archivos UTF-8 limpios separados por comas; con punto y coma u otras codificaciones, revisa los ajustes de importación y el resultado con cuidado.",
          "**Excel:** usa **Datos ▸ Obtener datos ▸ De texto/CSV** (o el antiguo asistente para importar texto) en lugar de hacer doble clic, para poder elegir el delimitador, la codificación (Origen del archivo) y el tipo de cada columna.",
          "**LibreOffice Calc:** muestra un cuadro de diálogo Importar texto donde eliges el juego de caracteres, los separadores y el tipo de las columnas. Muy completo.",
          "**Google Sheets:** Archivo ▸ Importar ▸ Subir, con detección automática del separador o uno personalizado. Implica subir los datos.",
          "**TextEdit:** no es una hoja de cálculo, pero sirve para ver qué hay de verdad dentro del archivo.",
        ],
        body: [],
      },
      {
        heading: "Conserva los ceros iniciales y los números largos",
        body: [
          "Los códigos postales, los códigos de producto y los números de teléfono como `00123` parecen números para cualquier hoja de cálculo y pierden los ceros. Los identificadores largos, como números de tarjeta o de tipo IBAN, se redondean a partir de 15 cifras. Si esas columnas importan, pide la exportación con esos valores entre comillas y con un prefijo, abre el CSV en una app que te permita marcar las columnas como Texto al importar (el asistente de importación de Excel, LibreOffice) o guarda intacto el archivo original como referencia.",
        ],
      },
      {
        heading: "Guardar un CSV que otros puedan abrir",
        body: [
          "Un CSV solo contiene los valores de una hoja: sin fórmulas, sin formato y sin las demás hojas. Foglio te avisa antes de guardar y te ofrece guardarlo como libro de Excel. Cuando sí guardas en CSV, Foglio escribe UTF-8 con marca de orden de bytes (para que Excel reconozca la codificación) y usa `;` como delimitador en los Mac configurados en una región con coma decimal, igual que Excel.",
          "Si el archivo va a alguien de otro país, dile qué delimitador y qué separador decimal usaste, o envíale un `.xlsx`. Así evitas todos los problemas de esta página. Para archivos de Excel, consulta [cómo abrir archivos xlsx sin Excel](/guides/open-xlsx-on-mac-without-excel/).",
        ],
      },
    ],
    faq: [
      {
        q: "¿Por qué mi CSV se abre en una sola columna?",
        a: "La app usó el delimitador equivocado: normalmente el archivo usa punto y coma y la app esperaba comas, o al revés. Usa un cuadro de importación para elegir el delimitador, o una app como Foglio que lo detecta automáticamente.",
      },
      {
        q: "¿Cómo arreglo caracteres raros como Ã© en un CSV?",
        a: "El archivo se leyó con la codificación de texto equivocada, normalmente UTF-8 leído como Windows-1252 o al revés. Vuelve a abrirlo eligiendo la codificación correcta (casi siempre UTF-8), o con una app que la detecte.",
      },
      {
        q: "¿Cómo abro un CSV con coma decimal en un Mac configurado con punto decimal?",
        a: "Foglio detecta la convención decimal del archivo y lee `1,5` como uno y medio, sea cual sea la región de tu Mac. En Excel, usa la importación de texto y define el separador decimal en las opciones avanzadas.",
      },
      {
        q: "¿Qué es mejor para compartir, CSV o xlsx?",
        a: "`.xlsx` conserva fórmulas, formato y varias hojas, y no tiene ambigüedades de codificación ni de delimitador. Usa CSV cuando un sistema lo pida expresamente.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Abrir archivos CSV en Mac",
    cardText: "Arregla CSV en una sola columna, acentos ilegibles y comas decimales mal leídas, con o sin Excel.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "free-spreadsheet-apps-for-mac",
    meta: {
      title: "Hojas de cálculo gratis para Mac: comparativa 2026",
      description:
        "Hojas de cálculo gratis para Mac en 2026: Numbers, LibreOffice, Google Sheets, Excel para la web, ONLYOFFICE y Foglio. Para quién es cada una.",
    },
    h1: "Hojas de cálculo gratis para Mac: una comparativa honesta",
    intro: [
      "No tienes que pagar por una hoja de cálculo en Mac. Hay varias opciones gratis de verdad, y cada una destaca en algo distinto. Esta comparativa la ha escrito el proyecto Foglio, así que tómate nuestro entusiasmo por Foglio con eso en mente; hemos intentado ser justos sobre en qué son mejores las demás.",
      "Aquí «gratis» significa que puedes crear, editar y guardar hojas de cálculo sin coste y sin periodo de prueba.",
    ],
    sections: [
      {
        heading: "Apple Numbers",
        body: [
          "**Ideal para:** documentos personales con buen aspecto y usuarios de dispositivos Apple.",
          "Numbers es gratis, a menudo viene instalada y funciona en Mac, iPhone y iPad con sincronización por iCloud y colaboración en tiempo real. Su lienzo de tablas libres y sus plantillas hacen que los documentos se vean pulidos con poco esfuerzo. Las plantillas premium y las funciones de IA requieren una suscripción a Apple Creator Studio, pero la app básica es gratis.",
          "**Ojo con:** los archivos de Excel se importan y se convierten a `.numbers`, así que tienes que volver a exportar a `.xlsx`; la versión actual necesita macOS 26. Más en [Numbers frente a Foglio](/alternatives/numbers/).",
        ],
      },
      {
        heading: "LibreOffice Calc",
        body: [
          "**Ideal para:** quien quiere la hoja de cálculo de escritorio gratis más completa, y usuarios de OpenDocument.",
          "LibreOffice es de código abierto (MPL-2.0) y funciona en macOS, Windows y Linux. Calc tiene tablas dinámicas, macros en Basic y Python con compatibilidad parcial con VBA, una enorme biblioteca de funciones y una importación y exportación excelentes de formatos antiguos. Funciona sin conexión, sin cuenta y, por diseño, sin funciones de IA.",
          "**Ojo con:** unos 300 MB de descarga, una suite ofimática entera instalada y una interfaz que no se siente nativa en macOS. Más en [LibreOffice frente a Foglio](/alternatives/libreoffice/).",
        ],
      },
      {
        heading: "Google Sheets",
        body: [
          "**Ideal para:** trabajar en la misma hoja con otras personas.",
          "Google Sheets funciona en cualquier navegador y en el móvil, con la mejor colaboración en tiempo real que existe, historial de versiones, automatización con Apps Script y funciones que traen datos de la web.",
          "**Ojo con:** necesitas una cuenta de Google, los archivos viven en los servidores de Google y para usarla sin conexión hacen falta Chrome o Edge con una extensión. Más en la [alternativa a Google Sheets](/alternatives/google-sheets/).",
        ],
      },
      {
        heading: "Excel para la web",
        body: [
          "**Ideal para:** usuarios ocasionales de Excel que quieren el original gratis.",
          "Microsoft ofrece Excel en el navegador sin coste con una cuenta de Microsoft. Abre los archivos `.xlsx` con total fidelidad, porque es Excel, y permite la coautoría a través de OneDrive.",
          "**Ojo con:** necesita conexión a internet y OneDrive, y algunas funciones de escritorio (como ejecutar macros VBA) no están disponibles. Excel para Mac de escritorio necesita una suscripción o licencia para editar.",
        ],
      },
      {
        heading: "ONLYOFFICE Desktop Editors",
        body: [
          "**Ideal para:** quien quiere una suite gratis al estilo de Office, con la interfaz de cinta de opciones de siempre.",
          "ONLYOFFICE Desktop Editors es una suite gratis y de código abierto (AGPL-3.0) para Mac, Windows y Linux que usa Office Open XML (`.xlsx`) como formato nativo e incluye un editor de hojas de cálculo con tablas dinámicas.",
          "**Ojo con:** es una app multiplataforma hecha con tecnología web, así que la descarga es mayor y se siente menos de Mac que una app nativa.",
        ],
      },
      {
        heading: "Foglio",
        body: [
          "**Ideal para:** abrir y editar los archivos de Excel del día a día de forma rápida, privada y nativa.",
          "Foglio es gratis y de código abierto (MIT / Apache-2.0), escrita en Swift/AppKit con un motor en Rust. Pesa 7,5 MB de descarga, se abre en 0,24 s, edita `.xlsx` directamente, entiende unas 500 funciones de Excel en tu idioma (`=SUMA()` en un Mac en español) y detecta la codificación y el delimitador de los CSV. Sin cuenta, sin telemetría y sin conexiones de red por su cuenta. Su interfaz está en inglés e italiano.",
          "**Ojo con:** es una versión 1.0; no tiene tablas dinámicas (solo el más sencillo *Summarize by*), ni macros, ni colaboración, ni versión para iPhone o iPad, y no abre archivos protegidos con contraseña. Consulta la [comparativa completa](/compare/).",
        ],
      },
      {
        heading: "Hojas de cálculo gratis para Mac: cuál elegir para cada trabajo",
        bullets: [
          "**Adjuntos de Excel que tienes que editar y devolver:** Foglio, LibreOffice o Excel para la web.",
          "**Una hoja compartida con la familia o el equipo:** Google Sheets o Numbers.",
          "**Tablas dinámicas o macros, sin conexión y gratis:** LibreOffice Calc.",
          "**Presupuestos y listas personales bonitos:** Numbers.",
          "**Datos confidenciales que no deben salir de tu Mac:** una app de escritorio sin nube: Foglio, LibreOffice o Numbers con iCloud desactivado para ella.",
          "**Un Mac antiguo:** LibreOffice admite macOS 11 y Foglio macOS 14; la última versión de Numbers necesita macOS 26.",
        ],
        body: [],
      },
    ],
    faq: [
      {
        q: "¿Existe un Excel para Mac totalmente gratis?",
        a: "Excel para la web es gratis con una cuenta de Microsoft; Excel para Mac de escritorio necesita una suscripción o licencia para editar. Entre las apps de escritorio gratis que abren y guardan archivos de Excel están Foglio, LibreOffice Calc y ONLYOFFICE.",
      },
      {
        q: "¿Qué hoja de cálculo gratis es más compatible con Excel?",
        a: "Excel para la web, porque es Excel. Entre las apps de escritorio, LibreOffice admite en conjunto más funciones de Excel, mientras que Foglio y ONLYOFFICE usan `.xlsx` como formato nativo. Prueba tus propios archivos: la compatibilidad depende de lo que contengan.",
      },
      {
        q: "¿Cuál es la más ligera?",
        a: "Foglio, con 7,5 MB de descarga y unos 19 MB instalada. Google Sheets y Excel para la web no instalan nada, pero necesitan un navegador y conexión a internet.",
      },
      {
        q: "¿Estas apps son gratis para uso en empresas?",
        a: "Foglio (MIT / Apache-2.0), LibreOffice (MPL-2.0) y ONLYOFFICE Desktop Editors (AGPL-3.0) se pueden usar en el trabajo sin coste. Numbers es gratis para todo el mundo. Google y Microsoft ofrecen planes de pago para empresas con funciones adicionales.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Hojas de cálculo gratis para Mac",
    cardText: "Numbers, LibreOffice, Google Sheets, Excel para la web, ONLYOFFICE y Foglio: para quién es cada una.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "excel-functions-italian-english",
    meta: {
      title: "Funciones de Excel en inglés y español: lista | Foglio",
      description:
        "BUSCARV es VLOOKUP, SUMA es SUM, SI es IF. Lista práctica de funciones de Excel en inglés y español (con el italiano) y por qué se usa punto y coma.",
    },
    h1: "Nombres de funciones de Excel en inglés y español",
    intro: [
      "Excel traduce los nombres de sus funciones. En un Mac en español, `SUM` es `SUMA`, `VLOOKUP` es `BUSCARV` e `IF` es `SI`, y en España los argumentos se separan con punto y coma. Es genial si hablas español, y un lío si sigues un tutorial en inglés o trabajas con compañeros de otros países.",
      "Abajo tienes una lista práctica de las funciones más usadas en inglés y en español, con el nombre italiano como referencia, seguida de las reglas que más confunden: separadores, coma decimal y qué pasa cuando un archivo cambia de idioma.",
    ],
    sections: [
      {
        heading: "Matemáticas y estadística",
        body: [],
        bullets: fnList(FN_MATH),
      },
      {
        heading: "Lógica",
        body: [],
        bullets: fnList(FN_LOGIC),
      },
      {
        heading: "BUSCARV en inglés (VLOOKUP) y otras funciones de búsqueda",
        body: [],
        bullets: fnList(FN_LOOKUP),
      },
      {
        heading: "Texto",
        body: [],
        bullets: fnList(FN_TEXT),
      },
      {
        heading: "Fechas",
        body: [
          "Muchas funciones se llaman igual en todos los idiomas, por ejemplo `MAX`, `MIN`, `LET` y `LAMBDA`.",
        ],
        bullets: fnList(FN_DATE),
      },
      {
        heading: "Punto y coma y coma decimal",
        body: [
          "En España, uno y medio se escribe `1,5`. Como la coma ya está ocupada, Excel en español separa los argumentos de las funciones con **punto y coma**: `=SI(A1>1,5;\"sí\";\"no\")` es la forma española de `=IF(A1>1.5,\"yes\",\"no\")`. Italia, Alemania, Francia, buena parte de Latinoamérica y casi toda Europa continental funcionan igual.",
          "Lo decide la configuración regional del Mac, no solo el idioma: un Mac en inglés con la región de España también usa coma decimal, y en las regiones que escriben los decimales con punto, como México, Excel en español separa los argumentos con coma.",
        ],
      },
      {
        heading: "A los archivos les da igual en qué idioma escribas",
        body: [
          "Un archivo `.xlsx` guarda siempre las fórmulas en inglés y con comas: `SUM(A1:A10)`, no `SUMA`. Cada copia de Excel las traduce al idioma de su usuario al mostrarlas. Así, un compañero de Madrid y otro de Nueva York pueden compartir el mismo archivo sin que nada se rompa, siempre que las dos apps sigan esta regla.",
          "Copiar y pegar el texto de una fórmula es otra historia: pegar `=VLOOKUP(A2,B:C,2,FALSE)` de una web en inglés en Excel en español da error. Traduce los nombres con la lista de arriba y cambia las comas por punto y coma: `=BUSCARV(A2;B:C;2;FALSO)`.",
        ],
      },
      {
        heading: "Fórmulas en español en Foglio",
        body: [
          "[Foglio](/), la hoja de cálculo gratis y de código abierto para Mac, sigue la misma convención que Excel. En un Mac en español escribes `=SUMA(A1:A10;B2)`, `BUSCARV` o `SI.ERROR` con punto y coma y coma decimal; en el disco, el archivo conserva la forma inglesa de Excel. Italiano (`SOMMA`, `CERCA.VERT`), alemán (`SUMME`, `SVERWEIS`) y francés (`SOMME`, `RECHERCHEV`) funcionan igual, y el explorador de funciones (Insert Function) muestra las ~500 funciones con sus nombres traducidos. Ten en cuenta que la interfaz de Foglio está en inglés e italiano: lo que sigue a tu idioma son las fórmulas.",
          "Google Sheets y LibreOffice también traducen los nombres de las funciones según tu configuración, y Numbers igual. Si sigues tutoriales en inglés, Show Formulas (menú View) en Foglio te ayuda a comparar lo que has escrito con lo que muestra el tutorial.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cómo se dice VLOOKUP en Excel en español?",
        a: "`BUSCARV`. Los argumentos son los mismos, separados por punto y coma en España: `=BUSCARV(A2;B:C;2;FALSO)`. XLOOKUP es `BUSCARX`.",
      },
      {
        q: "¿Por qué mi fórmula da error en Excel en español?",
        a: "Normalmente porque usa los nombres en inglés o comas entre los argumentos. Usa los nombres en español y el separador de tu región (punto y coma si usas coma decimal), y escribe los decimales como en tu región.",
      },
      {
        q: "¿Puedo usar los nombres de las funciones en inglés?",
        a: "Excel sigue el idioma de Office y del sistema. Foglio sigue el idioma y la región de tu Mac: si los cambias en Ajustes del Sistema ▸ General ▸ Idioma y región, cambian también los nombres de las funciones.",
      },
      {
        q: "¿Un archivo creado con Excel en español funciona en Excel en inglés?",
        a: "Sí. El archivo guarda internamente las fórmulas en inglés, así que cada versión de Excel, y también Foglio, las muestra en su propio idioma.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Funciones de Excel: inglés ↔ español",
    cardText: "Unos 50 nombres de funciones de Excel traducidos, de SUMA a BUSCARV, y por qué en España se usa punto y coma.",
  },
];
