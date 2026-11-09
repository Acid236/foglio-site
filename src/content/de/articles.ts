import type { Article } from "../types";

const UPDATED = "2026-11-09";

/** Excel function names: [English, German]. Names from the formula engine's de locale (IronCalc language data). */
type Fn = [string, string];

const FN_MATH: Fn[] = [
  ["SUM", "SUMME"],
  ["SUMIF", "SUMMEWENN"],
  ["SUMIFS", "SUMMEWENNS"],
  ["SUMPRODUCT", "SUMMENPRODUKT"],
  ["AVERAGE", "MITTELWERT"],
  ["AVERAGEIF", "MITTELWERTWENN"],
  ["COUNT", "ANZAHL"],
  ["COUNTA", "ANZAHL2"],
  ["COUNTBLANK", "ANZAHLLEEREZELLEN"],
  ["COUNTIF", "ZÄHLENWENN"],
  ["COUNTIFS", "ZÄHLENWENNS"],
  ["ROUND", "RUNDEN"],
  ["ROUNDUP", "AUFRUNDEN"],
  ["ROUNDDOWN", "ABRUNDEN"],
];
const FN_LOGIC: Fn[] = [
  ["IF", "WENN"],
  ["IFS", "WENNS"],
  ["IFERROR", "WENNFEHLER"],
  ["IFNA", "WENNNV"],
  ["AND", "UND"],
  ["OR", "ODER"],
  ["NOT", "NICHT"],
];
const FN_LOOKUP: Fn[] = [
  ["VLOOKUP", "SVERWEIS"],
  ["HLOOKUP", "WVERWEIS"],
  ["XLOOKUP", "XVERWEIS"],
  ["INDEX", "INDEX"],
  ["MATCH", "VERGLEICH"],
  ["INDIRECT", "INDIREKT"],
  ["OFFSET", "BEREICH.VERSCHIEBEN"],
  ["CHOOSE", "WAHL"],
  ["FILTER", "FILTER"],
  ["SORT", "SORTIEREN"],
  ["UNIQUE", "EINDEUTIG"],
];
const FN_TEXT: Fn[] = [
  ["LEFT", "LINKS"],
  ["RIGHT", "RECHTS"],
  ["MID", "TEIL"],
  ["LEN", "LÄNGE"],
  ["TRIM", "GLÄTTEN"],
  ["UPPER", "GROSS"],
  ["LOWER", "KLEIN"],
  ["SUBSTITUTE", "WECHSELN"],
  ["CONCATENATE", "VERKETTEN"],
  ["CONCAT", "TEXTKETTE"],
  ["TEXTJOIN", "TEXTVERKETTEN"],
  ["TEXT", "TEXT"],
  ["VALUE", "WERT"],
];
const FN_DATE: Fn[] = [
  ["TODAY", "HEUTE"],
  ["NOW", "JETZT"],
  ["YEAR", "JAHR"],
  ["MONTH", "MONAT"],
  ["DAY", "TAG"],
  ["WEEKDAY", "WOCHENTAG"],
  ["EDATE", "EDATUM"],
  ["EOMONTH", "MONATSENDE"],
  ["NETWORKDAYS", "NETTOARBEITSTAGE"],
];
const fnList = (list: Fn[]) => list.map(([en, de]) => `\`${en}\` → \`${de}\``);

export const alternatives: Article[] = [
  // ───────────────────────────────────────────────────────────────────
  {
    slug: "excel-for-mac",
    meta: {
      title: "Kostenlose Excel-Alternative für Mac mit xlsx | Foglio",
      description:
        "Kostenlose Excel-Alternative für Mac ohne Microsoft-365-Abo: Foglio ist Open Source und öffnet und speichert xlsx-Dateien. Was es kann und was nicht.",
    },
    h1: "Eine kostenlose Excel-Alternative für den Mac, die deine xlsx-Dateien öffnet",
    intro: [
      "Microsoft Excel für Mac ist hervorragend, aber nicht kostenlos. Um Tabellen in der Desktop-App zu bearbeiten, brauchst du ein Microsoft-365-Abo (in Deutschland kostet Single 99 € im Jahr, Family 129 €) oder eine Einmallizenz für Office Home 2024 (149 € im Microsoft Store, Stand November 2026). Wenn du nur ein paar Mal im Monat ein Budget, eine Rechnung oder einen Bericht öffnest, den dir jemand gemailt hat, ist das viel Geld.",
      "Foglio ist eine kostenlose Excel-Alternative für den Mac: eine Open-Source-Tabellenkalkulation, die dieselben `.xlsx`-Dateien liest und schreibt, rund 500 Excel-Funktionen versteht und die Tastenkürzel von Excel für Mac verwendet. Diese Seite erklärt, was du behältst, was du verlierst und wann Excel trotzdem die richtige Wahl ist.",
    ],
    sections: [
      {
        heading: "Was du beim Wechsel behältst",
        body: [
          "Foglio soll sich für alle vertraut anfühlen, die schon mit Excel gearbeitet haben. Zellraster, Bearbeitungsleiste mit Namenfeld, Blattregister, Summen in der Statusleiste und Menüs sind dort, wo du sie erwartest. Die meisten Tastenkürzel sind gleich: ⌘1 für Zellen formatieren, ⌘D zum Ausfüllen nach unten, F4 zum Umschalten der `$`-Bezüge, ⇧⌘T für AutoSumme, ⌘K für einen Hyperlink.",
        ],
        bullets: [
          "**Deine Dateien.** `.xlsx` wird mit Schriften, Füllfarben, Rahmen, Zahlenformaten, verbundenen Zellen, Spaltenbreiten, fixierten Bereichen, Kommentaren, Datenüberprüfung, bedingter Formatierung, Hyperlinks, Diagrammen und Bildern geöffnet und gespeichert.",
          "**Deine Formeln.** Rund 500 Funktionen, darunter SUMMEWENNS, XVERWEIS, INDEX/VERGLEICH, FILTER, SORTIEREN, EINDEUTIG, LET und LAMBDA. In Foglios Kompatibilitätsprüfung stimmen 191 von 195 häufig genutzten Funktionen in jedem Testfall mit Excel überein.",
          "**Deine Sprache.** Auf einem deutschen Mac tippst du Formeln mit den deutschen Namen aus Excel (`=SUMME(A1:A10)`, `=SVERWEIS(…)`), mit `;` als Trennzeichen und Dezimalkomma. Das funktioniert auch auf Italienisch, Spanisch und Französisch. Die Datei speichert die englische Standardform und öffnet sich deshalb in jedem Excel. Die Menüs von Foglio selbst sind auf Englisch.",
          "**Deine Gewohnheiten.** Ausfüllkästchen, Inhalte einfügen, AutoFilter, Sortieren nach mehreren Ebenen, Suchen und Ersetzen, Gehe zu, Duplikate entfernen, Text in Spalten, Fenster fixieren, Formeln anzeigen und der Dialog zum Einfügen von Funktionen sind alle da.",
        ],
      },
      {
        heading: "Was du gewinnst",
        body: [
          "**Es kostet nichts, dauerhaft.** Kein Abo, keine Testphase, kein Konto, keine Werbung. Foglio steht unter den Lizenzen MIT und Apache-2.0, der Quellcode liegt auf [GitHub](https://github.com/GetFoglio/foglio).",
          "**Es ist winzig und schnell.** Der Download ist 7,5 MB groß, die installierte App rund 19 MB – gegenüber mehr als einem Gigabyte allein für Excel. Foglio ist nach 0,24 s einsatzbereit und braucht mit leerem Blatt rund 58 MB Arbeitsspeicher. Eine Arbeitsmappe mit 100.000 Zeilen und 300.000 Formeln öffnet in 1,1 s und ist nach einer Änderung in 16 ms neu berechnet.",
          "**Es bleibt auf deinem Mac.** Foglio baut von sich aus keine Netzwerkverbindungen auf und hat keine Telemetrie. Du musst dich nirgends anmelden, um eine Datei zu öffnen.",
        ],
      },
      {
        heading: "Was du verlierst",
        body: [
          "Foglio 1.0 ist die Erstversion eines kleinen Projekts und will nicht das ganze Excel sein. Bevor du ein Abo kündigst, prüf, ob deine Arbeit von einem dieser Punkte abhängt:",
        ],
        bullets: [
          "**Makros und VBA.** `.xlsm`-Dateien öffnen sich, aber Makros werden weder ausgeführt noch beim Speichern behalten.",
          "**Pivot-Tabellen.** Echte Pivot-Tabellen gibt es noch nicht. *Summarize by* erstellt ein live aktualisiertes Übersichtsblatt aus SUMMEWENNS- und ZÄHLENWENNS-Formeln, das einfache Fälle abdeckt.",
          "**Power Query, Datenverbindungen und Add-ins.** Nicht verfügbar.",
          "**Formen, Textfelder und SmartArt.** Werden beim Öffnen weggelassen. Diagramme und Bilder bleiben erhalten.",
          "**Datenbalken, Symbolsätze und Sparklines.** Werden noch nicht gezeichnet; andere Regeln der bedingten Formatierung und Farbskalen funktionieren.",
          "**Passwortgeschützte Arbeitsmappen.** Lassen sich nicht öffnen.",
          "**Kommentar-Threads** werden als einfache Notizen angezeigt, und gemeinsames Bearbeiten in Echtzeit gibt es nicht.",
          "**Diagramme** decken die gängigen Typen ab (Säule, Balken, Linie, Kreis, Ring, Fläche, Punkt, gestapelt), nicht die ganze Auswahl von Excel.",
        ],
      },
      {
        heading: "Weitere kostenlose Wege, Excel-Dateien auf dem Mac zu nutzen",
        body: [
          "Foglio ist nicht die einzige Option, und je nach Bedarf passt eine andere vielleicht besser:",
        ],
        bullets: [
          "**Excel für das Web** ist mit einem Microsoft-Konto kostenlos und das echte Excel, im Browser. Deine Dateien liegen in OneDrive, und einige Desktop-Funktionen fehlen.",
          "**Apple Numbers** ist kostenlos und auf vielen Macs vorinstalliert. Es wandelt `.xlsx`-Dateien in sein eigenes Format um und exportiert auf Wunsch zurück nach Excel.",
          "**LibreOffice Calc** ist kostenlos, Open Source und sehr umfangreich, inklusive Pivot-Tabellen und Makros, aber ein großer Download und keine App, die wie eine native Mac-App aussieht oder sich so verhält.",
          "**Google Sheets** ist mit einem Google-Konto kostenlos und die beste Wahl, wenn mehrere Leute gleichzeitig bearbeiten.",
        ],
        sub: [
          {
            heading: "Wie sie sich unterscheiden",
            body: [
              "Die [vollständige Vergleichstabelle](/compare/) stellt alle fünf nebeneinander, mit Quellen für jeden Preis und jede Größe, und der [Überblick über kostenlose Tabellen-Apps](/guides/free-spreadsheet-apps-for-mac/) nennt noch ein paar mehr. Außerdem gibt es eigene Seiten zu [Numbers](/alternatives/numbers/), [LibreOffice](/alternatives/libreoffice/) und [Google Sheets](/alternatives/google-sheets/).",
            ],
          },
        ],
      },
      {
        heading: "Wann du bei Excel bleiben solltest",
        body: [
          "Bezahl weiter für Excel, wenn deine Arbeit auf Makros, Power Query oder Pivot-Tabellen beruht, wenn du komplexe Modelle mit Kollegen austauschst, bei denen alles exakt erhalten bleiben muss, wenn deine Firma Microsoft 365 vorschreibt oder wenn du Copilot nutzen willst. Excel gibt es außerdem für iPhone, iPad und Windows; Foglio nur für den Mac.",
          "Viele nutzen am Ende beides: Foglio für schnelle, alltägliche Dateien, weil es sofort startet, und Excel für die wenigen schweren Arbeitsmappen, die es brauchen.",
        ],
      },
      {
        heading: "So testest du die kostenlose Excel-Alternative mit deinen eigenen Dateien",
        body: [
          "[Lade Foglio herunter](/download/) (7,5 MB, macOS 14 oder neuer), zieh es in den Ordner „Programme“ und öffne es. Da Foglio 1.0 nicht von Apple notarisiert ist, fragt macOS beim ersten Mal nach; die Download-Seite zeigt, wie es geht. Öffne dann die Kopie einer echten Arbeitsmappe über File ▸ Open oder klick mit der rechten Maustaste auf eine `.xlsx`-Datei und wähle Öffnen mit ▸ Foglio.",
          "Prüf, was dir wichtig ist: Summen, Suchfunktionen, Datumsangaben, Zahlenformate, Diagramme. Behalte das Original, bis du dir sicher bist. Wenn etwas falsch aussieht, [melde es bitte auf GitHub](https://github.com/GetFoglio/foglio/issues), am besten mit einer Beispieldatei.",
        ],
      },
    ],
    faq: [
      {
        q: "Gibt es eine kostenlose Version von Excel für Mac?",
        a: "Die Desktop-App braucht ein Microsoft-365-Abo oder eine Office-Lizenz, um Dateien zu erstellen und zu bearbeiten. Excel für das Web ist mit einem Microsoft-Konto kostenlos. Kostenlose Desktop-Alternativen, die Excel-Dateien öffnen, sind Foglio, LibreOffice Calc und Apple Numbers.",
      },
      {
        q: "Öffnet sich eine mit Foglio gespeicherte Datei korrekt in Excel?",
        a: "Ja, Foglio speichert normale `.xlsx`-Dateien mit Formeln in der englischen Form von Excel. Formatierung, Diagramme, Bilder, Kommentare, Datenüberprüfung und bedingte Formatierung werden zurückgeschrieben. Was Foglio nicht unterstützt, etwa Makros, Formen oder Pivot-Tabellen, bleibt nicht erhalten – behalte bei komplexen Dateien also das Original.",
      },
      {
        q: "Hat Foglio dieselben Tastenkürzel wie Excel für Mac?",
        a: "Größtenteils ja: ⌘1 Zellen formatieren, ⌘D / ⌘R ausfüllen, F4 absolute Bezüge, ⇧⌘T AutoSumme, ⌥⇧⌘V Werte einfügen, ⌃; Datum einfügen, ⌥↓ Auswahlliste öffnen und viele mehr. Die vollständige Liste steht in der README auf GitHub.",
      },
      {
        q: "Ist Foglio bei großen Dateien so schnell wie Excel?",
        a: "Wir haben Excel nicht gemessen und behaupten deshalb nicht, schneller zu sein. Auf unserem Test-Mac öffnet Foglio eine Arbeitsmappe mit 100.000 Zeilen und 300.000 Formeln in 1,1 s und rechnet nach einer Änderung in 16 ms neu – das wirkt sofort.",
      },
      {
        q: "Darf ich Foglio beruflich nutzen?",
        a: "Ja. Die Lizenzen MIT und Apache-2.0 erlauben die kommerzielle Nutzung ohne Kosten. Wie bei jeder Software in Version 1.0 gilt: Mach Sicherungskopien wichtiger Dateien.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Kostenlose Excel-Alternative für Mac",
    cardText: "xlsx-Dateien ohne Microsoft-365-Abo öffnen und speichern – und genau wissen, worauf du verzichtest.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "numbers",
    meta: {
      title: "Numbers-Alternative für Excel-Dateien | Foglio",
      description:
        "Numbers wandelt Excel-Dateien in ein eigenes Format um. Foglio bearbeitet xlsx direkt, mit Excel-Formeln und -Kürzeln, kostenlos. Wann welche App passt.",
    },
    h1: "Eine Numbers-Alternative, die Excel-Dateien so lässt, wie sie sind",
    intro: [
      "Apple Numbers ist eine gute App. Sie ist kostenlos, wunderschön gestaltet und synchronisiert mit iPhone und iPad. Sie folgt aber ihrer eigenen Vorstellung einer Tabellenkalkulation: eine freie Arbeitsfläche, auf der Tabellen platziert werden, gespeichert als `.numbers`. Schickt dir jemand eine Excel-Datei, importiert Numbers sie, wandelt sie um, und du musst daran denken, sie vor dem Weiterschicken wieder nach Excel zu exportieren.",
      "Foglio geht den umgekehrten Weg. Es ist eine kostenlose Open-Source-App für den Mac, die direkt mit `.xlsx`-Dateien arbeitet – mit dem Raster von Excel, den Funktionsnamen von Excel und den Tastenkürzeln von Excel für Mac. Wenn deine Tabellen von Excel-Nutzern kommen und wieder an sie zurückgehen, macht das jeden Tag einen Unterschied.",
    ],
    sections: [
      {
        heading: "Warum Excel-Nutzer mit Numbers fremdeln",
        body: [
          "Das alles sind keine Fehler, sondern Designentscheidungen. Sie stehen nur im Weg, wenn du mit Excel-Dateien arbeitest.",
        ],
        bullets: [
          "**Importieren und Exportieren statt Öffnen und Sichern.** Eine in Numbers geöffnete `.xlsx` wird zum Numbers-Dokument. Beim Sichern entsteht eine `.numbers`-Datei; zum Zurückschicken musst du Ablage ▸ Exportieren ▸ Excel verwenden, und unterwegs ändert sich manches.",
          "**Tabellen auf einer Fläche statt eines großen Rasters.** Ein Numbers-Blatt enthält mehrere getrennte Tabellen, deshalb können große Excel-Blätter beim Import aufgeteilt oder umgebaut werden.",
          "**Andere Kürzel und Menüs.** Viele Tastenkürzel aus Excel für Mac tun in Numbers nichts oder etwas anderes.",
          "**Neuere Systemanforderung.** Das aktuelle Numbers im App Store verlangt macOS 26; Foglio läuft ab macOS 14.",
        ],
      },
      {
        heading: "Was Foglio anders macht",
        bullets: [
          "**Es bearbeitet `.xlsx` direkt.** Excel-Datei öffnen, ändern, ⌘S drücken – und es ist immer noch eine Excel-Datei. Kein Exportschritt.",
          "**Ein Raster pro Blatt, wie in Excel.** Zeilen- und Spaltenköpfe, fixierte Bereiche, das Namenfeld (tippe `B12` oder `Sheet2!A1:C9`, um hinzuspringen), Blattregister, die du umbenennen, einfärben, ausblenden und umsortieren kannst.",
          "**Die Formeln und Namen von Excel.** Rund 500 Funktionen, darunter XVERWEIS, SUMMEWENNS, FILTER, LET und LAMBDA, eingegeben in der Sprache deines Macs: `=SUMME(…)` auf einem deutschen Mac, `=SOMMA(A1:A10)` auf einem italienischen ([Excel-Funktionen Deutsch–Englisch](/guides/excel-functions-italian-english/)).",
          "**Tastenkürzel aus Excel für Mac.** ⌘1, ⌘D, F4, ⇧⌘T, ⌥⇧⌘V und Dutzende weitere verhalten sich wie in Excel.",
          "**Dateien, mit denen Numbers sich schwertut.** Foglio öffnet alte `.xls`-, binäre `.xlsb`- und LibreOffice-`.ods`-Dateien sowie CSV-Dateien in allen gängigen Zeichensätzen mit automatischer Trennzeichenerkennung. Es zeichnet sogar alte EMF/WMF-ClipArts in Office-Dateien.",
        ],
        body: [],
      },
      {
        heading: "Was Numbers besser kann",
        body: [
          "Sei ehrlich zu dir selbst, wofür du Numbers nutzt. Wenn es um einen dieser Punkte geht, ist Numbers vielleicht weiterhin das bessere Werkzeug:",
        ],
        bullets: [
          "**Gestaltung.** Vorlagen, gestaltete Tabellen, interaktive Diagramme und freies Layout lassen Numbers-Dokumente mühelos gut aussehen.",
          "**iPhone und iPad.** Numbers läuft auf all deinen Apple-Geräten und synchronisiert über iCloud. Foglio gibt es nur für den Mac.",
          "**Zusammenarbeit.** Numbers unterstützt Zusammenarbeit in Echtzeit über iCloud. Foglio ist eine Desktop-App für eine Person.",
          "**Pivot-Tabellen.** Numbers hat sie; Foglio bietet nur *Summarize by*, eine einfachere Live-Zusammenfassung.",
          "**Apple Intelligence.** Numbers bindet die Schreibwerkzeuge ein und, mit einem Apple-Creator-Studio-Abo, einen Assistenten, der Formeln und Tabellen vorschlagen kann. Foglio hat keine KI-Funktionen.",
        ],
      },
      {
        heading: "Größe und Tempo",
        body: [
          "Im App Store wird Numbers mit 661 MB angegeben (ein gemeinsamer Eintrag für Mac, iPhone und iPad). Foglio ist ein Download von 7,5 MB und installiert rund 19 MB groß. Es ist nach 0,24 s einsatzbereit, braucht im Leerlauf 0 % CPU und mit leerem Blatt rund 58 MB Arbeitsspeicher. Eine Arbeitsmappe mit 100.000 Zeilen und 300.000 Formeln öffnet auf unserem Test-Mac in 1,1 s.",
          "Numbers ist auf vielen Macs vorinstalliert, die Größe ist dir also vielleicht egal. Die Startzeit und der Umgang mit sehr großen Excel-Blättern vielleicht nicht.",
        ],
      },
      {
        heading: "Wann du bei Numbers bleiben solltest",
        body: [
          "Wenn deine Tabellen privat sind, deine Apple-Geräte selten verlassen und dir ihr Aussehen wichtiger ist als Excel-Kompatibilität, bleib bei Numbers. Es ist kostenlos, ausgereift und gut integriert. Wenn du ein Haushaltsbudget mit Familienmitgliedern auf dem iPhone teilst, ist die iCloud-Zusammenarbeit von Numbers kaum zu schlagen.",
          "Wenn du dagegen regelmäßig Excel-Anhänge öffnest, `.xlsx`-Dateien an Kollegen oder Kunden zurückschickst oder einfach in Excel denkst, spart dir Foglio den Umwandlungsschritt. Viele behalten beides: Numbers für schöne private Dokumente, Foglio als Standard-App für `.xlsx` und `.csv`.",
        ],
      },
      {
        heading: "Foglio als Standard-App für Excel-Dateien festlegen",
        body: [
          "Nachdem du [Foglio heruntergeladen](/download/) hast, wähle im Finder eine beliebige `.xlsx`-Datei aus, drück ⌘I (Informationen), wähle unter **Öffnen mit** Foglio und klick auf **Alle ändern …**. Ein Doppelklick auf Excel-Dateien öffnet sie dann in Foglio, und Numbers bleibt für seine eigenen Dokumente da. Wiederhole das bei Bedarf für `.csv`.",
          "Einen breiteren Blick auf alle Optionen bieten der [Vergleich der Tabellen-Apps für Mac](/compare/) und die Anleitung [xlsx-Datei ohne Excel öffnen](/guides/open-xlsx-on-mac-without-excel/).",
        ],
      },
    ],
    faq: [
      {
        q: "Kann Foglio .numbers-Dateien öffnen?",
        a: "Nein. Foglio liest Apples `.numbers`-Format nicht. Wähle in Numbers Ablage ▸ Exportieren ▸ Excel, um eine `.xlsx` zu erstellen, die Foglio öffnen kann.",
      },
      {
        q: "Ist Foglio kostenlos wie Numbers?",
        a: "Ja. Foglio ist kostenlos und hat überhaupt keine Bezahlversion. Außerdem ist es Open Source unter MIT und Apache-2.0.",
      },
      {
        q: "Behält Numbers meine Excel-Formeln?",
        a: "Numbers übersetzt die meisten gängigen Formeln beim Import und beim Export zurück, aber Funktionen, die es nicht kennt, Excel-spezifische Funktionen und das Layout können sich ändern. Foglio hält die Arbeitsmappe durchgehend im Excel-Format.",
      },
      {
        q: "Läuft Foglio auf meinem älteren Mac?",
        a: "Foglio braucht macOS 14 Sonoma oder neuer, auf Apple Silicon oder Intel. Die aktuelle Version von Numbers verlangt macOS 26.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Numbers-Alternative für Excel-Dateien",
    cardText: "xlsx-Dateien direkt bearbeiten, mit Raster, Funktionsnamen und Kürzeln von Excel, statt sie umzuwandeln.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "libreoffice",
    meta: {
      title: "Schlanke LibreOffice-Calc-Alternative für Mac | Foglio",
      description:
        "LibreOffice ist kostenlos, aber groß und keine native Mac-App. Foglio ist eine 7,5 MB kleine Tabellenkalkulation in Swift und Rust. Wann sich was lohnt.",
    },
    h1: "Eine schlanke, native Alternative zu LibreOffice Calc auf dem Mac",
    intro: [
      "LibreOffice ist eines der großen Freie-Software-Projekte: ein komplettes Office-Paket, kostenlos für alle, mit einer Tabellenkalkulation (Calc), die Pivot-Tabellen, Makros, eine riesige Funktionsbibliothek und fast jedes Dateiformat beherrscht. Wer einen kostenlosen Excel-Ersatz sucht, bekommt es als Erstes empfohlen.",
      "Auf dem Mac merkt man aber seine plattformübergreifenden Wurzeln. Das Disk-Image für Apple Silicon ist rund 300 MB groß, es installiert ein ganzes Paket, auch wenn du nur Tabellen willst, und Oberfläche, Dialoge und Tastenkürzel fühlen sich nicht ganz wie der Rest von macOS an. Foglio setzt andere Schwerpunkte: viel kleiner, nativ und nur auf Tabellen konzentriert.",
    ],
    sections: [
      {
        heading: "Zwei kostenlose Open-Source-Apps mit unterschiedlichen Zielen",
        body: [
          "Beide Apps sind kostenlos und Open Source, beide funktionieren vollständig offline, ohne Konto und ohne Telemetrie. Der Unterschied liegt im Umfang. LibreOffice will auf jeder Desktop-Plattform eine vollständige Alternative zu Microsoft Office sein. Foglio will der schnellste und leichteste Weg sein, alltägliche Excel-Tabellen auf dem Mac zu öffnen und zu bearbeiten – und sonst nichts.",
        ],
        bullets: [
          "**Foglio:** Swift/AppKit-Oberfläche, Rust-Engine, nur Mac, MIT / Apache-2.0, 7,5 MB Download, rund 19 MB installiert.",
          "**LibreOffice:** C++-Paket mit eigenem UI-Toolkit, Windows, macOS und Linux, MPL-2.0, rund 300 MB Download, laut Systemanforderungen bis zu 800 MB auf der Festplatte.",
        ],
      },
      {
        heading: "Wo Foglio besser ist",
        bullets: [
          "**Größe und Start.** Foglio ist nach 0,24 s einsatzbereit und braucht mit leerem Blatt rund 58 MB Arbeitsspeicher, im Leerlauf 0 % CPU.",
          "**Eine native Mac-App.** Echte macOS-Dokumente, Fenster-Tabs, Dunkelmodus, die normalen Dialoge zum Öffnen und Sichern, Zoomen per Fingergeste, flüssiges Scrollen auf einem eigenen Raster und die Tastenkürzel von Excel für Mac.",
          "**Die Arbeitsweise von Excel.** `.xlsx` ist Foglios eigenes Format, kein Importfilter. Die Funktionsnamen folgen Excel in deiner Sprache (`SVERWEIS`, `CERCA.VERT`, `BUSCARV`).",
          "**Moderne Excel-Funktionen.** Foglio unterstützt LAMBDA ebenso wie XVERWEIS, FILTER, SORTIEREN und LET. LibreOffice hat XVERWEIS, FILTER und LET 2024 ergänzt, LAMBDA aber zum Zeitpunkt dieses Textes nicht.",
          "**Tempo bei großen Arbeitsmappen.** Dank inkrementeller Neuberechnung und indizierter Suchen ist eine Änderung in einer Mappe mit 100.000 Zeilen und 300.000 Formeln auf unserem Test-Mac in 16 ms neu berechnet.",
        ],
        body: [],
      },
      {
        heading: "Wo LibreOffice Calc besser ist",
        body: [
          "Hinter LibreOffice stecken Jahrzehnte an Entwicklung, und für viele Aufgaben kann es einfach mehr:",
        ],
        bullets: [
          "**Pivot-Tabellen** (in neueren Versionen mit berechneten Feldern). Foglio bietet nur *Summarize by*.",
          "**Makros** in LibreOffice Basic und Python, mit teilweiser Unterstützung für Excel-VBA. Foglio führt keine Makros aus.",
          "**Mehr Diagrammtypen**, Formen, Zeichenwerkzeuge und Textfelder.",
          "**Speichern in mehr Formaten**, darunter `.ods`, `.xls` und viele weitere. Foglio öffnet `.xls` und `.ods` (Werte, Formeln und Datumsangaben), speichert aber nur `.xlsx`, CSV und PDF.",
          "**Passwortgeschützte Dateien**, Datenbalken, Symbolsätze und Sparklines, die Foglio noch nicht unterstützt.",
          "**Ein ganzes Paket**: Writer, Impress, Draw und Base sind im selben Download enthalten.",
          "**Versionen für Windows und Linux**, falls du plattformübergreifend arbeitest.",
        ],
      },
      {
        heading: "Wann du LibreOffice behalten solltest",
        body: [
          "Behalte LibreOffice, wenn du Pivot-Tabellen oder Makros brauchst, OpenDocument dein Hauptformat ist, du auch Textverarbeitung und Präsentationen brauchst oder dasselbe Paket unter Windows oder Linux nutzt. Es ist ein ausgereiftes, vertrauenswürdiges Projekt, und es kostet nichts, es installiert zu lassen.",
          "Nimm Foglio, wenn du eigentlich Tabellen öffnest, die man dir schickt, ein paar Zahlen korrigierst und sie zurückschickst, und eine App willst, die sofort startet, sich wie der Rest deines Macs anfühlt und dafür keine 800 MB Speicherplatz braucht. Beide können nebeneinander leben: Mach Foglio zum Standard für `.xlsx` und `.csv` und öffne LibreOffice für die Aufgaben, die es brauchen.",
        ],
      },
      {
        heading: "Der Wechsel ist einfach, weil die Dateien gleich sind",
        body: [
          "Es gibt keine Migration. Beide Apps lesen und schreiben `.xlsx`, eine in der einen App bearbeitete Datei öffnet sich also in der anderen. Bei `.ods`-Dateien öffnet Foglio Werte, Formeln und Datumsangaben und speichert sie als `.xlsx`; die Formatierung aus `.ods`-Dateien wird noch nicht übernommen, behalte also die Originale. Dasselbe gilt für alte `.xls`-Dateien; siehe [alte .xls-Dateien auf dem Mac öffnen](/guides/open-xls-on-mac/).",
          "[Lade Foglio herunter](/download/), probier es mit ein paar echten Dateien aus und sieh dir die Details in der [Vergleichstabelle](/compare/) an. Wenn du wissen willst, warum es so klein ist, lies, [wie Foglio gebaut ist](/technology/).",
        ],
      },
    ],
    faq: [
      {
        q: "Basiert Foglio auf LibreOffice?",
        a: "Nein. Foglio ist ein eigenständiges Projekt. Die Oberfläche ist in Swift/AppKit geschrieben, die Formel-Engine ist ein gepatchter Fork von IronCalc, einer Open-Source-Tabellen-Engine in Rust. Zum Lesen von `.xls`, `.xlsb` und `.ods` nutzt es die Rust-Bibliothek calamine.",
      },
      {
        q: "Sind beide kostenlos für die kommerzielle Nutzung?",
        a: "Ja. LibreOffice steht unter der MPL-2.0, Foglio unter MIT und Apache-2.0. Beide dürfen im Job kostenlos genutzt werden.",
      },
      {
        q: "Welche App öffnet Excel-Dateien besser?",
        a: "Das hängt von der Datei ab. LibreOffice unterstützt insgesamt mehr Excel-Funktionen (Pivot-Tabellen, Makros, Formen). Foglio behandelt `.xlsx` als sein natives Format und liefert bei 191 von 195 geprüften Funktionen dieselben Ergebnisse wie Excel. Probier deine eigenen Dateien in beiden aus.",
      },
      {
        q: "Speichert Foglio .ods-Dateien?",
        a: "Nein. Foglio öffnet `.ods` und speichert als `.xlsx`. Wenn du OpenDocument-Dateien behalten musst, nimm LibreOffice.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Schlankere Alternative zu LibreOffice",
    cardText: "Eine native, 7,5 MB kleine Mac-App für alltägliche Excel-Dateien – und wann LibreOffice das bessere Werkzeug bleibt.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "google-sheets",
    meta: {
      title: "Offline-Alternative zu Google Sheets für Mac | Foglio",
      description:
        "Tabellen, die offline funktionieren und auf deinem Mac bleiben? Foglio ist eine kostenlose, private Desktop-App ohne Konto. Wann Google Sheets besser ist.",
    },
    h1: "Eine private Offline-Alternative zu Google Sheets für den Mac",
    intro: [
      "Google Sheets (auf Deutsch Google Tabellen) ist kostenlos, leistungsfähig und unschlagbar, wenn mehrere Leute gleichzeitig dieselbe Tabelle bearbeiten. Es hat aber Bedingungen: Du brauchst ein Google-Konto, deine Dateien liegen auf Googles Servern, es läuft in einem Browser-Tab, und offline arbeiten geht nur mit Chrome oder Edge, einer Erweiterung und vorheriger Einrichtung.",
      "Foglio ist eine kostenlose Open-Source-Tabellenkalkulation, die komplett auf deinem Mac läuft. Kein Konto, keine Anmeldung, keine eigenen Netzwerkverbindungen. Deine Dateien sind normale `.xlsx`-Dateien in einem Ordner deiner Wahl. Hier der ehrliche Vergleich.",
    ],
    sections: [
      {
        heading: "Warum Leute eine Alternative zu Google Sheets suchen",
        bullets: [
          "**Offline arbeiten.** Im Flugzeug, im ICE-Funkloch oder im schwachen Hotel-WLAN funktioniert eine Desktop-App einfach. Der Offline-Modus von Google muss online aktiviert werden, braucht die Erweiterung „Google Docs Offline“ in Chrome oder Edge, und nur ein Konto pro Browserprofil kann ihn nutzen.",
          "**Datenschutz.** Manche Daten sollten nirgendwo hochgeladen werden: Gehaltsabrechnungen, Arztkosten, Kundenlisten. Mit Foglio verlässt die Datei deinen Mac nur, wenn du sie verschickst.",
          "**Kein Konto.** Nicht jeder hat oder will ein Google-Konto, und manche Arbeitgeber erlauben keinen privaten Cloud-Speicher.",
          "**Eine echte Mac-App.** Ein Browser-Tab ist keine Mac-App: kein „Zuletzt benutzt“, keine eigenen Fenster-Tabs, kein nativer Druckdialog, keine Mac-Kürzel. Foglio ist in Swift/AppKit geschrieben.",
          "**Große lokale Dateien.** Eine große `.xlsx` in Sheets zu öffnen heißt, sie hochzuladen und umzuwandeln, und Google begrenzt eine Tabelle auf 20 Millionen Zellen. Foglio öffnet eine Arbeitsmappe mit 100.000 Zeilen und 300.000 Formeln auf unserem Test-Mac in 1,1 s.",
        ],
        body: [],
      },
      {
        heading: "Was du von Google Sheets mitnimmst",
        body: [
          "Das meiste, was du in Sheets machst, funktioniert in Foglio genauso. Formeln nutzen dieselbe Excel-Syntax und dieselben Funktionsnamen: SUMMEWENNS, XVERWEIS, FILTER, SORTIEREN, EINDEUTIG, LET und LAMBDA sind alle dabei, unter rund 500 Funktionen. AutoFilter, Sortieren, Dropdown-Listen, bedingte Formatierung mit Farbskalen, Diagramme, Suchen und Ersetzen, fixierte Bereiche und Kommentare werden unterstützt.",
          "Um eine Tabelle mitzunehmen, wähle in Google Sheets Datei ▸ Herunterladen ▸ Microsoft Excel (.xlsx) und öffne die Datei in Foglio. Formatierung, Formeln und Diagramme kommen mit; reine Google-Funktionen wie GOOGLEFINANCE, IMPORTRANGE oder QUERY haben in Foglio und Excel keine Entsprechung.",
        ],
      },
      {
        heading: "Was Google Sheets besser kann",
        bullets: [
          "**Zusammenarbeit in Echtzeit.** Mehrere Cursor in einer Tabelle, Kommentare mit Erwähnungen, Versionsverlauf. Foglio ist eine Desktop-App für eine Person.",
          "**Jedes Gerät.** Sheets läuft in jedem Browser und hat Apps für iPhone, iPad und Android. Foglio läuft nur auf Macs mit macOS 14 oder neuer.",
          "**Online-Daten.** Funktionen wie IMPORTRANGE, IMPORTHTML und GOOGLEFINANCE holen Live-Daten aus dem Netz. Foglio verbindet sich nicht mit dem Internet.",
          "**Automatisierung und KI.** Apps Script zur Automatisierung und, je nach Tarif, Gemini als Hilfe bei Formeln und Analysen. Foglio hat weder Makros noch KI-Funktionen.",
          "**Pivot-Tabellen und mehr Diagrammtypen.** Foglio bietet *Summarize by* für einfache Zusammenfassungen und die gängigen Diagrammtypen.",
        ],
        body: [],
      },
      {
        heading: "Wann du weiter Google Sheets nutzen solltest",
        body: [
          "Wenn deine Tabelle ein gemeinsamer Ort ist – eine Aufgabenliste fürs Team, eine Packliste für die Familie, eine Anmeldeliste –, ist Google Sheets das richtige Werkzeug, und Foglio will es nicht ersetzen. Dasselbe gilt für Tabellen, die Live-Daten aus dem Netz holen oder die du vom Handy aus bearbeiten musst.",
          "Wenn die Tabelle nur dir gehört, lokal oder vertraulich ist, ist eine Desktop-App sinnvoller. Viele nutzen beides: Google Sheets für geteilte Dokumente, Foglio für private Finanzen, Kundendaten und die Excel-Dateien, die per E-Mail kommen.",
        ],
      },
      {
        heading: "Deine Dateien, dein Ordner",
        body: [
          "Foglio speichert normale `.xlsx`-Dateien, wo du willst: im Ordner „Dokumente“, auf einer externen Festplatte oder, wenn du möchtest, in einem synchronisierten Ordner wie iCloud Drive oder Dropbox. Da es Excel-Dateien sind, kannst du jede später jederzeit in Google Sheets hochladen. Es gibt in keine Richtung einen Lock-in.",
          "[Lade Foglio kostenlos herunter](/download/) (7,5 MB, macOS 14+). Wie es auch gegen Excel, Numbers und LibreOffice abschneidet, zeigt der [vollständige Vergleich](/compare/).",
        ],
      },
    ],
    faq: [
      {
        q: "Funktioniert Google Sheets auf dem Mac offline?",
        a: "Ja, mit Einschränkungen: Du brauchst Chrome oder Microsoft Edge und die Erweiterung „Google Docs Offline“, und du musst den Offline-Zugriff aktivieren, solange du verbunden bist. Nur ein Konto pro Browserprofil kann ihn nutzen. Eine Desktop-App wie Foglio, Numbers, LibreOffice oder Excel funktioniert offline ohne Einrichtung.",
      },
      {
        q: "Lädt Foglio meine Dateien irgendwohin hoch?",
        a: "Nein. Foglio hat kein Kontosystem, keinen Cloud-Speicher und keine Telemetrie und baut von sich aus keine Netzwerkverbindungen auf. Eine Webseite öffnet es nur, wenn du auf einen Hyperlink in einer Zelle klickst.",
      },
      {
        q: "Kann ich eine Google-Sheets-Datei in Foglio öffnen?",
        a: "Lade sie zuerst in Google Sheets über Datei ▸ Herunterladen ▸ Microsoft Excel (.xlsx) herunter und öffne dann die `.xlsx` in Foglio. Eine `.gsheet`-Verknüpfung aus Google Drive für den Desktop ist nur ein Link und lässt sich nicht offline öffnen.",
      },
      {
        q: "Funktionieren meine Google-Sheets-Formeln in Foglio?",
        a: "Standardformeln schon, da beide der Excel-Syntax folgen. Google-spezifische Funktionen wie QUERY, IMPORTRANGE, GOOGLEFINANCE und SPARKLINE gibt es in Foglio nicht.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Offline-Alternative zu Google Sheets",
    cardText: "Eine kostenlose Desktop-Tabellenkalkulation ohne Konto und ohne Cloud – und wann Google Sheets das richtige Werkzeug bleibt.",
  },
];

export const guides: Article[] = [
  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-xlsx-on-mac-without-excel",
    meta: {
      title: "xlsx-Datei auf dem Mac ohne Excel öffnen | Foglio",
      description:
        "Vier kostenlose Wege, Excel-Dateien (xlsx) auf dem Mac ohne Microsoft Excel zu öffnen und zu bearbeiten: Übersicht, Numbers, Desktop-App oder Browser.",
    },
    h1: "So öffnest du eine xlsx-Datei auf dem Mac ohne Excel",
    intro: [
      "Jemand hat dir eine Tabelle gemailt, du doppelklickst darauf, und dein Mac öffnet Numbers, fragt nach einer App oder meldet, dass du ein Microsoft-365-Abo brauchst. Um eine `.xlsx`-Datei zu lesen oder zu bearbeiten, musst du Excel nicht kaufen. Hier sind die kostenlosen Möglichkeiten, von der schnellsten bis zur leistungsfähigsten, jeweils mit ihren Vor- und Nachteilen.",
    ],
    sections: [
      {
        heading: "1. Nur ansehen: Quick Look (Übersicht)",
        body: [
          "Wenn du die Datei nur lesen musst, wähle sie im Finder aus und drück die **Leertaste**. Die Übersicht (Quick Look) zeigt eine Vorschau der Blätter, ohne eine App zu öffnen. Bearbeiten, Sortieren oder Formeln kopieren geht nicht, und komplexe Dateien werden eventuell nicht genau dargestellt – aber es geht sofort und ist eingebaut.",
        ],
      },
      {
        heading: "2. In einer kostenlosen Desktop-App bearbeiten",
        body: [
          "Wenn du die Datei ändern und als `.xlsx` zurückschicken willst, ist eine Desktop-App, die das Excel-Format als eigenes Format behandelt, der direkteste Weg. [Foglio](/) ist eine kostenlose Open-Source-App für den Mac, die genau dafür gebaut ist: Sie öffnet und speichert `.xlsx` mit Formatierung, Formeln, Diagrammen, Bildern und Kommentaren und nutzt die Funktionsnamen und Tastenkürzel von Excel.",
        ],
        sub: [
          {
            heading: "Schritte mit Foglio",
            body: [],
            bullets: [
              "[Lade Foglio herunter](/download/) (7,5 MB, macOS 14 oder neuer) und zieh es in den Ordner „Programme“.",
              "Bestätige beim ersten Mal die Sicherheitsabfrage von macOS: Unter macOS 15 oder neuer gehst du zu Systemeinstellungen ▸ Datenschutz & Sicherheit ▸ **Dennoch öffnen**; unter macOS 14 klickst du mit der rechten Maustaste auf die App und wählst **Öffnen**.",
              "Klick im Finder mit der rechten Maustaste auf deine `.xlsx`-Datei und wähle **Öffnen mit ▸ Foglio**, oder zieh sie auf das Foglio-Symbol.",
              "Bearbeiten, dann ⌘S drücken. Die Datei wird als `.xlsx` gespeichert und ist bereit zum Zurückschicken.",
            ],
          },
          {
            heading: "Worauf du achten solltest",
            body: [
              "Foglio führt keine Makros aus, hat keine echten Pivot-Tabellen, lässt Formen und SmartArt weg und kann keine passwortgeschützten Dateien öffnen. Bei normalen Tabellen ist das selten ein Problem, aber behalte bei allem Komplexen das Original. [LibreOffice Calc](/alternatives/libreoffice/) ist eine weitere kostenlose Desktop-Option, größer, aber mit Pivot-Tabellen und Makros.",
            ],
          },
        ],
      },
      {
        heading: "3. Apple Numbers verwenden",
        body: [
          "Numbers gibt es kostenlos von Apple, und oft ist es schon installiert. Klick mit der rechten Maustaste auf die Datei und wähle **Öffnen mit ▸ Numbers**. Numbers importiert die Arbeitsmappe und wandelt sie in ein Numbers-Dokument um; wenn du fertig bist, erstellst du mit **Ablage ▸ Exportieren ▸ Excel** wieder eine `.xlsx`. Drückst du nur ⌘S, entsteht eine `.numbers`-Datei, die Excel-Nutzer nicht öffnen können.",
          "Bei einfachen Dateien klappt das gut. Bei großen Blättern können sich einige Formeln und Formatierungen auf dem Hin- und Rückweg ändern, und das aktuelle Numbers verlangt macOS 26. Details unter [Numbers vs. Foglio](/alternatives/numbers/).",
        ],
      },
      {
        heading: "4. Im Browser: Excel für das Web oder Google Sheets",
        body: [
          "**Excel für das Web** ist mit einem Microsoft-Konto kostenlos: Lade die Datei in OneDrive hoch und öffne sie im Browser. Es ist echtes Excel, nur ohne einige Desktop-Funktionen. **Google Sheets** öffnet in Google Drive hochgeladene `.xlsx`-Dateien, entweder umgewandelt oder im Office-Kompatibilitätsmodus in Chrome; lade sie zum Schluss wieder als `.xlsx` herunter.",
          "Beide brauchen eine Internetverbindung und ein Konto, und bei beiden lädst du die Datei in einen Cloud-Dienst hoch. Für vertrauliche Daten wie Gehaltsabrechnungen oder Krankenakten ist dieser Weg nicht geeignet. Mehr dazu auf der Seite [Alternative zu Google Sheets](/alternatives/google-sheets/).",
        ],
      },
      {
        heading: "Damit es so bleibt: die Standard-App festlegen",
        body: [
          "Damit jede `.xlsx` in der App deiner Wahl öffnet, wähle eine im Finder aus, drück ⌘I (Informationen), wähle die App unter **Öffnen mit** und klick auf **Alle ändern …**.",
        ],
      },
      {
        heading: "xlsx ohne Excel öffnen: Welche Option passt zu dir?",
        bullets: [
          "**Nur lesen:** Quick Look (Übersicht).",
          "**Bearbeiten und zurückschicken, privat und offline:** eine kostenlose Desktop-App wie Foglio oder LibreOffice.",
          "**Schöne Dokumente für dich selbst:** Numbers.",
          "**Gleichzeitig mit anderen an der Datei arbeiten:** Excel für das Web oder Google Sheets.",
        ],
        body: ["Die [Vergleichsseite](/compare/) stellt alle Unterschiede nebeneinander dar."],
      },
    ],
    faq: [
      {
        q: "Kann ein Mac xlsx-Dateien ohne zusätzliche Software öffnen?",
        a: "Mit Quick Look (Übersicht) kannst du sie ansehen: Datei auswählen und Leertaste drücken. Zum Bearbeiten brauchst du eine App: Numbers gibt es kostenlos von Apple, Foglio und LibreOffice sind kostenlose Downloads.",
      },
      {
        q: "Warum öffnet sich meine xlsx-Datei in Numbers?",
        a: "Numbers ist auf vielen Macs die Standard-App für Tabellen. Ändern kannst du das im Finder über Informationen ▸ Öffnen mit ▸ Alle ändern ….",
      },
      {
        q: "Was ist mit .xlsm-Dateien mit Makros?",
        a: "Kostenlose Apps öffnen die Daten, aber nur Excel führt VBA-Makros zuverlässig aus. Foglio öffnet `.xlsm`-Dateien, ohne die Makros auszuführen, und behält sie beim Speichern nicht.",
      },
      {
        q: "Ist es sicher, Arbeitsdateien in einen Online-Viewer hochzuladen?",
        a: "Das hängt von der Datei und den Regeln deiner Firma ab. Kostenlose Online-Konverter und -Viewer erhalten eine Kopie deiner Daten. Eine Desktop-App lässt die Datei auf deinem Mac.",
      },
    ],
    updated: UPDATED,
    cardTitle: "xlsx-Dateien ohne Excel öffnen",
    cardText: "Quick Look, Numbers, eine kostenlose Desktop-App oder der Browser: vier Wege, Excel-Dateien auf dem Mac zu öffnen.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-xls-on-mac",
    meta: {
      title: "Alte .xls-Excel-Dateien auf dem Mac öffnen | Foglio",
      description:
        "Alte .xls-Datei aus Excel 97–2003, die Numbers ablehnt? So öffnest du xls auf dem Mac kostenlos, wandelst sie in xlsx um und erkennst falsche xls-Exporte.",
    },
    h1: "So öffnest du alte .xls-Excel-Dateien auf dem Mac",
    intro: [
      "`.xls` ist das Binärformat, das Excel vor 2007 verwendet hat, und es ist noch überall: Kontoauszüge als Export, Buchhaltungssoftware, Behördendaten, Archive. Moderne Mac-Apps kommen damit schlechter zurecht als mit `.xlsx`. Numbers zum Beispiel lehnt manche Dateien mit dem Hinweis ab, das Dokument sei mit einer nicht unterstützten Excel-Version erstellt worden.",
      "Hier erfährst du, wie du eine `.xls`-Datei auf dem Mac kostenlos öffnest, wie du sie ins moderne `.xlsx`-Format umwandelst und was zu tun ist, wenn die Datei in Wahrheit gar keine `.xls` ist.",
    ],
    sections: [
      {
        heading: "Option 1: in Foglio öffnen und als xlsx speichern",
        body: [
          "[Foglio](/) ist eine kostenlose Open-Source-Tabellenkalkulation für den Mac. Sie liest `.xls`-Dateien mit calamine, einer schnellen Rust-Bibliothek für ältere Excel-Formate, und öffnet auch binäre `.xlsb`-Dateien.",
        ],
        bullets: [
          "[Lade Foglio herunter](/download/) und zieh es in den Ordner „Programme“.",
          "Klick mit der rechten Maustaste auf die `.xls`-Datei und wähle **Öffnen mit ▸ Foglio** (oder nutze in Foglio File ▸ Open).",
          "Prüf die Daten und wähle dann **File ▸ Save As…**, um eine `.xlsx`-Kopie zu speichern. Das alte `.xls`-Format schreibt Foglio nicht.",
        ],
        sub: [
          {
            heading: "Was übernommen wird",
            body: [
              "Aus `.xls`- und `.xlsb`-Dateien importiert Foglio **Werte, Formeln und Datumsangaben**, auf allen Blättern. Zellformatierung wie Schriften, Farben und Rahmen wird aus diesen alten Formaten noch nicht übernommen, und Makros werden nie ausgeführt. Wenn du das ursprüngliche Aussehen einer alten Arbeitsmappe brauchst, erhalten LibreOffice oder Excel mehr davon.",
            ],
          },
        ],
      },
      {
        heading: "Option 2: LibreOffice Calc",
        body: [
          "LibreOffice Calc ist kostenlos, Open Source und hat jahrzehntelange Erfahrung mit `.xls`, inklusive Formatierung. Es kann auch wieder als `.xls` speichern, falls ein System, das du nutzt, das noch verlangt. Der Download ist größer (rund 300 MB für Apple Silicon) und es ist keine native Mac-App, aber für Archive alter Arbeitsmappen ist es sehr gründlich. Siehe [LibreOffice vs. Foglio](/alternatives/libreoffice/).",
        ],
      },
      {
        heading: "Option 3: Numbers oder Excel",
        body: [
          "Numbers öffnet viele `.xls`-Dateien: Rechtsklick ▸ Öffnen mit ▸ Numbers. Lehnt es ab, wandle die Datei zuerst mit Foglio oder LibreOffice in `.xlsx` um und importiere diese dann in Numbers. Microsoft Excel öffnet natürlich jede `.xls`, braucht zum Bearbeiten aber ein Abo oder eine Lizenz.",
        ],
      },
      {
        heading: "Wenn die „.xls“ gar keine xls ist",
        body: [
          "Viele Websites und ältere Geschäftssysteme exportieren Dateien mit der Endung `.xls`, die in Wahrheit etwas anderes sind. Zeigt eine Datei seltsame Tags, steht alles in einer Spalte oder ist der Text verstümmelt, prüf, was sie wirklich ist:",
        ],
        bullets: [
          "**HTML-Tabellen.** Manche Systeme schreiben eine Webseite und nennen sie `.xls`. Öffne sie in TextEdit; siehst du `<table>` oder `<html>`, benenne eine Kopie in `.html` um und öffne sie im Browser, oder kopiere die Tabelle in eine Tabellenkalkulation.",
          "**Tabulator- oder kommagetrennter Text.** Zeigt TextEdit einfache Textzeilen, benenne eine Kopie in `.csv` oder `.txt` um. Foglio öffnet sie mit automatischer Erkennung von Zeichensatz, Trennzeichen und Dezimaltrennzeichen; siehe [CSV auf dem Mac öffnen](/guides/open-csv-on-mac/).",
          "**Eine `.xlsx` mit falscher Endung.** Ist die Datei eigentlich eine `.xlsx` (sie beginnt in TextEdit mit den Buchstaben `PK`), benenne eine Kopie in `.xlsx` um.",
          "**SpreadsheetML (XML).** XML-Dateien aus Excel 2003 beginnen mit `<?xml` und enthalten `urn:schemas-microsoft-com:office:spreadsheet`. Foglio liest sie nicht; LibreOffice und Excel schon.",
        ],
      },
      {
        heading: "Viele .xls-Dateien umwandeln",
        body: [
          "Foglio wandelt eine Datei nach der anderen um. Für ein großes Archiv kann LibreOffice im Terminal mit der Befehlszeilenoption `--convert-to xlsx` viele Dateien auf einmal umwandeln. Egal womit: Behalte die originalen `.xls`-Dateien, bis du die Ergebnisse geprüft hast.",
        ],
      },
    ],
    faq: [
      {
        q: "Was ist der Unterschied zwischen xls und xlsx?",
        a: "`.xls` ist das Binärformat von Excel 1997–2003. `.xlsx` ist das XML-basierte Format, das Excel seit 2007 verwendet. `.xlsx`-Dateien sind kleiner, robuster und werden von jeder modernen App unterstützt.",
      },
      {
        q: "Kann Foglio .xls-Dateien speichern?",
        a: "Nein. Foglio öffnet `.xls` und speichert als `.xlsx`. Wenn du `.xls` schreiben musst, nimm LibreOffice oder Excel.",
      },
      {
        q: "Warum meldet Numbers, die Datei stamme aus einer nicht unterstützten Excel-Version?",
        a: "Numbers importiert manche älteren `.xls`-Varianten nicht. Öffne die Datei in Foglio oder LibreOffice, speichere sie als `.xlsx`, dann kann Numbers sie importieren.",
      },
      {
        q: "Sind alte xls-Dateien mit Makros gefährlich?",
        a: "Makros können schädlichen Code enthalten. Foglio führt nie Makros aus, beim Öffnen einer `.xls` oder `.xlsm` werden sie also nicht gestartet. Sei vorsichtig, wenn du in Excel Makros für Dateien aktivierst, mit denen du nicht gerechnet hast.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alte .xls-Dateien auf dem Mac öffnen",
    cardText: "Alte Excel-97–2003-Dateien kostenlos öffnen, in xlsx umwandeln und Exporte erkennen, die gar keine xls sind.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-csv-on-mac",
    meta: {
      title: "CSV auf dem Mac öffnen: Spalten & Umlaute | Foglio",
      description:
        "CSV landet in einer Spalte, Umlaute sind kaputt, Dezimalzahlen falsch? Warum das auf dem Mac passiert und wie du CSV richtig öffnest, mit oder ohne Excel.",
    },
    h1: "CSV auf dem Mac öffnen – und Spalten, Umlaute und Dezimalzahlen reparieren",
    intro: [
      "CSV wirkt wie das einfachste Format überhaupt: Textzeilen, Werte durch Kommas getrennt. In der Praxis ist es die Quelle endloser kleiner Katastrophen. Alles landet in Spalte A. Aus `ä` wird `Ã¤`. Preise wie `1,50` werden zu `150`. Bei Postleitzahlen wie `01067` verschwindet die führende Null.",
      "Diese Anleitung erklärt die drei Dinge, die schiefgehen, wie du eine CSV auf dem Mac mit oder ohne Excel richtig öffnest und wie du eine speicherst, die andere öffnen können.",
    ],
    sections: [
      {
        heading: "Warum CSV-Dateien falsch geöffnet werden",
        sub: [
          {
            heading: "1. Das Trennzeichen",
            body: [
              "Trotz des Namens sind viele CSV-Dateien nicht durch Kommas getrennt. In Ländern, die Dezimalzahlen mit Komma schreiben (Deutschland, Österreich, Italien, Frankreich, Spanien und viele mehr), exportiert Excel CSV mit **Semikolon**. Andere Systeme nutzen Tabulatoren oder senkrechte Striche. Rät die App das falsche Trennzeichen, landet jede Zeile in einer einzigen Spalte.",
            ],
          },
          {
            heading: "2. Der Zeichensatz",
            body: [
              "Eine CSV-Datei sagt nicht, welche Zeichenkodierung sie verwendet. Moderne Dateien sind meist UTF-8, Exporte aus älterer Windows-Software aber oft Windows-1252, und manche Programme schreiben UTF-16. Mit der falschen Kodierung gelesen, wird `ä` zu `Ã¤`, `ß` zu `ÃŸ` und `€` zu Zeichensalat.",
            ],
          },
          {
            heading: "3. Das Dezimaltrennzeichen",
            body: [
              "`1,500` bedeutet in Deutschland eineinhalb und in den USA eintausendfünfhundert. Liest die App Zahlen nach der Konvention deines Macs statt nach der der Datei, sind die Werte stillschweigend falsch – schlimmer als ein sichtbarer Fehler.",
            ],
          },
        ],
        body: [],
      },
      {
        heading: "Der einfache Weg: eine App, die alle drei erkennt",
        body: [
          "[Foglio](/) ist eine kostenlose Open-Source-Tabellenkalkulation für den Mac, die sich die Datei vor dem Import ansieht:",
        ],
        bullets: [
          "**Trennzeichen:** wählt zwischen Komma, Semikolon, Tabulator und senkrechtem Strich, indem es prüft, welches die ersten Zeilen am gleichmäßigsten aufteilt – Trennzeichen in Anführungszeichen werden ignoriert.",
          "**Zeichensatz:** liest UTF-8 (mit oder ohne Byte-Order-Mark) und UTF-16 und weicht für ältere westeuropäische Exporte auf Windows-1252 aus.",
          "**Dezimalzahlen:** erkennt, ob die Datei `1.234,56` oder `1,234.56` schreibt, und liest jede Zahl entsprechend – unabhängig von der Region deines Macs.",
          "**Sicherheit:** Text, der mit `=` beginnt, bleibt Text und wird nie als Formel ausgeführt; eine bösartige CSV kann also keine Berechnungen auslösen.",
        ],
        sub: [
          {
            heading: "Schritte",
            body: [
              "[Lade Foglio herunter](/download/), klick dann mit der rechten Maustaste auf die `.csv`-Datei und wähle **Öffnen mit ▸ Foglio**. `.tsv`- und `.txt`-Dateien funktionieren genauso. Speichere sie am Ende als Excel-Arbeitsmappe (`.xlsx`), um Formeln und Formatierung zu behalten, oder wieder als CSV.",
            ],
          },
        ],
      },
      {
        heading: "Weitere Wege, eine CSV auf dem Mac zu öffnen",
        bullets: [
          "**Numbers:** Doppelklick oder Öffnen mit ▸ Numbers. Bei sauberen UTF-8-Dateien mit Kommas klappt das gut; bei Semikolons oder anderen Zeichensätzen prüf die Importeinstellungen und das Ergebnis genau.",
          "**Excel:** Nutze **Daten ▸ Daten abrufen ▸ Aus Text/CSV** (oder den älteren Textimport-Assistenten) statt eines Doppelklicks, damit du Trennzeichen, Zeichensatz (Dateiursprung) und Spaltentypen wählen kannst.",
          "**LibreOffice Calc:** zeigt einen Dialog „Textimport“, in dem du Zeichensatz, Trennzeichen und Spaltentypen wählst. Sehr gründlich.",
          "**Google Sheets:** Datei ▸ Importieren ▸ Hochladen, mit automatischer oder eigener Trennzeichenerkennung. Die Daten müssen dafür hochgeladen werden.",
          "**TextEdit:** keine Tabellenkalkulation, aber praktisch, um zu prüfen, was wirklich in der Datei steht.",
        ],
        body: [],
      },
      {
        heading: "Führende Nullen und lange Zahlen behalten",
        body: [
          "Postleitzahlen, Artikelnummern und Telefonnummern wie `00123` sehen für jede Tabellenkalkulation wie Zahlen aus und verlieren ihre Nullen. Lange Kennungen wie Kartennummern oder IBAN-ähnliche Nummern werden nach 15 Stellen gerundet. Wenn diese Spalten wichtig sind, bitte um einen Export mit diesen Werten in Anführungszeichen und mit Präfix, öffne die CSV in einer App, in der du Spalten beim Import auf Text stellen kannst (Import-Assistent von Excel, LibreOffice), oder bewahre die Originaldatei unverändert auf.",
        ],
      },
      {
        heading: "Eine CSV speichern, die andere öffnen können",
        body: [
          "CSV enthält nur die Werte eines Blatts: keine Formeln, keine Formatierung, keine weiteren Blätter. Foglio warnt dich vor dem Speichern und bietet an, stattdessen eine Excel-Arbeitsmappe zu speichern. Wenn du doch CSV speicherst, schreibt Foglio UTF-8 mit Byte-Order-Mark (damit Excel die Kodierung erkennt) und verwendet auf Macs mit Dezimalkomma-Region, etwa in Deutschland, `;` als Trennzeichen – wie Excel.",
          "Geht die Datei an jemanden in einem anderen Land, sag dazu, welches Trennzeichen und welches Dezimaltrennzeichen du verwendet hast – oder schick gleich eine `.xlsx`. Damit vermeidest du jedes Problem auf dieser Seite. Für Excel-Dateien siehe [xlsx-Datei ohne Excel öffnen](/guides/open-xlsx-on-mac-without-excel/).",
        ],
      },
    ],
    faq: [
      {
        q: "Warum öffnet sich meine CSV in nur einer Spalte?",
        a: "Die App hat das falsche Trennzeichen verwendet: Meist nutzt die Datei Semikolons und die App erwartet Kommas oder umgekehrt. Wähle das Trennzeichen in einem Importdialog oder nimm eine App wie Foglio, die es automatisch erkennt.",
      },
      {
        q: "Wie repariere ich kaputte Umlaute wie Ã¤ in einer CSV?",
        a: "Die Datei wurde mit dem falschen Zeichensatz gelesen, typischerweise UTF-8 als Windows-1252 oder umgekehrt. Öffne sie erneut mit dem richtigen Zeichensatz (meist UTF-8) oder mit einer App, die ihn erkennt.",
      },
      {
        q: "Wie öffne ich eine US-CSV mit Dezimalpunkt auf einem deutschen Mac?",
        a: "Foglio erkennt die Dezimalkonvention der Datei und liest `1.5` als eineinhalb, egal welche Region dein Mac hat – und umgekehrt `1,5` in einer deutschen Datei auf einem englischen Mac. In Excel nutzt du den Textimport und stellst das Dezimaltrennzeichen in den erweiterten Optionen ein.",
      },
      {
        q: "Ist CSV oder xlsx besser zum Weitergeben?",
        a: "`.xlsx` behält Formeln, Formatierung und mehrere Blätter und kennt keine Unklarheiten bei Zeichensatz oder Trennzeichen. Nimm CSV, wenn ein System ausdrücklich danach verlangt.",
      },
    ],
    updated: UPDATED,
    cardTitle: "CSV auf dem Mac öffnen",
    cardText: "CSV in nur einer Spalte, kaputte Umlaute und falsche Dezimalkommas reparieren – mit oder ohne Excel.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "free-spreadsheet-apps-for-mac",
    meta: {
      title: "Tabellenkalkulation kostenlos für Mac: Vergleich 2026",
      description:
        "Kostenlose Tabellenkalkulation für den Mac 2026: Numbers, LibreOffice, Google Sheets, Excel für das Web, ONLYOFFICE und Foglio. Für wen sich welche eignet.",
    },
    h1: "Kostenlose Tabellenkalkulation für den Mac: ein ehrlicher Überblick",
    intro: [
      "Für eine Tabellenkalkulation auf dem Mac musst du nichts bezahlen. Es gibt mehrere wirklich kostenlose Optionen, und jede ist in etwas anderem gut. Dieser Überblick stammt vom Foglio-Projekt – nimm unsere Begeisterung für Foglio also mit Vorsicht. Wir haben versucht, fair zu sagen, wo die anderen besser sind.",
      "„Kostenlos“ heißt hier: Du kannst Tabellen ohne Kosten und ohne Testphase erstellen, bearbeiten und speichern.",
    ],
    sections: [
      {
        heading: "Apple Numbers",
        body: [
          "**Am besten für:** gut aussehende private Dokumente und Nutzer von Apple-Geräten.",
          "Numbers ist kostenlos, oft vorinstalliert und läuft auf Mac, iPhone und iPad mit iCloud-Synchronisierung und Zusammenarbeit in Echtzeit. Die frei platzierbaren Tabellen und die Vorlagen lassen Dokumente mit wenig Aufwand professionell aussehen. Premium-Vorlagen und KI-Funktionen erfordern ein Apple-Creator-Studio-Abo, die App selbst ist aber kostenlos.",
          "**Achtung:** Excel-Dateien werden importiert und in `.numbers` umgewandelt, du musst also zurück nach `.xlsx` exportieren; die aktuelle Version verlangt macOS 26. Mehr unter [Numbers vs. Foglio](/alternatives/numbers/).",
        ],
      },
      {
        heading: "LibreOffice Calc",
        body: [
          "**Am besten für:** die umfangreichste kostenlose Desktop-Tabellenkalkulation und alle, die mit OpenDocument arbeiten.",
          "LibreOffice ist Open Source (MPL-2.0) und läuft auf macOS, Windows und Linux. Calc hat Pivot-Tabellen, Makros in Basic und Python mit teilweiser VBA-Unterstützung, eine riesige Funktionsbibliothek und einen hervorragenden Import und Export alter Formate. Es funktioniert offline, ohne Konto und bewusst ohne KI-Funktionen.",
          "**Achtung:** rund 300 MB Download, ein ganzes Office-Paket wird installiert, und die Oberfläche wirkt auf macOS nicht nativ. Mehr unter [LibreOffice vs. Foglio](/alternatives/libreoffice/).",
        ],
      },
      {
        heading: "Google Sheets",
        body: [
          "**Am besten für:** gemeinsames Arbeiten an derselben Tabelle.",
          "Google Sheets läuft in jedem Browser und auf dem Smartphone, mit der besten Echtzeit-Zusammenarbeit überhaupt, Versionsverlauf, Automatisierung per Apps Script und Funktionen, die Daten aus dem Netz holen.",
          "**Achtung:** Du brauchst ein Google-Konto, die Dateien liegen auf Googles Servern, und offline geht es nur mit Chrome oder Edge und einer Erweiterung. Mehr unter [Alternative zu Google Sheets](/alternatives/google-sheets/).",
        ],
      },
      {
        heading: "Excel für das Web",
        body: [
          "**Am besten für:** Gelegenheitsnutzer, die das echte Excel kostenlos wollen.",
          "Microsoft bietet Excel im Browser mit einem Microsoft-Konto kostenlos an. Es öffnet `.xlsx`-Dateien originalgetreu, weil es Excel ist, und unterstützt gemeinsames Bearbeiten über OneDrive.",
          "**Achtung:** Es braucht eine Internetverbindung und OneDrive, und einige Desktop-Funktionen (etwa das Ausführen von VBA-Makros) fehlen. Die Desktop-App Excel für Mac braucht zum Bearbeiten ein Abo oder eine Lizenz.",
        ],
      },
      {
        heading: "ONLYOFFICE Desktop Editors",
        body: [
          "**Am besten für:** alle, die ein kostenloses, Office-ähnliches Paket mit vertrauter Menüband-Oberfläche wollen.",
          "ONLYOFFICE Desktop Editors ist ein kostenloses Open-Source-Paket (AGPL-3.0) für Mac, Windows und Linux, das Office Open XML (`.xlsx`) als natives Format nutzt und eine Tabellenkalkulation mit Pivot-Tabellen enthält.",
          "**Achtung:** Es ist eine plattformübergreifende App auf Basis von Webtechnik, also ein größerer Download, und fühlt sich weniger nach Mac an als eine native App.",
        ],
      },
      {
        heading: "Foglio",
        body: [
          "**Am besten für:** alltägliche Excel-Dateien schnell, privat und nativ öffnen und bearbeiten.",
          "Foglio ist kostenlos und Open Source (MIT / Apache-2.0), geschrieben in Swift/AppKit mit einer Rust-Engine. Es ist ein Download von 7,5 MB, startet in 0,24 s, bearbeitet `.xlsx` direkt, versteht rund 500 Excel-Funktionen in deiner Sprache (`=SUMME()` auf einem deutschen Mac) und erkennt Zeichensätze und Trennzeichen von CSV-Dateien. Kein Konto, keine Telemetrie, keine eigenen Netzwerkverbindungen. Die Menüs sind auf Englisch oder Italienisch.",
          "**Achtung:** Es ist eine Version 1.0; es gibt keine Pivot-Tabellen (nur das einfachere *Summarize by*), keine Makros, keine Zusammenarbeit, keine Version für iPhone oder iPad, und passwortgeschützte Dateien lassen sich nicht öffnen. Siehe den [vollständigen Vergleich](/compare/).",
        ],
      },
      {
        heading: "Kostenlose Tabellenkalkulation für den Mac: welche App für welche Aufgabe",
        bullets: [
          "**Excel-Anhänge, die du bearbeiten und zurückschicken musst:** Foglio, LibreOffice oder Excel für das Web.",
          "**Eine gemeinsame Tabelle für Familie oder Team:** Google Sheets oder Numbers.",
          "**Pivot-Tabellen oder Makros, offline und kostenlos:** LibreOffice Calc.",
          "**Hübsche private Budgets und Listen:** Numbers.",
          "**Vertrauliche Daten, die deinen Mac nicht verlassen dürfen:** eine Desktop-App ohne Cloud: Foglio, LibreOffice oder Numbers mit deaktiviertem iCloud dafür.",
          "**Ein älterer Mac:** LibreOffice unterstützt macOS 11 und Foglio macOS 14; das neueste Numbers braucht macOS 26.",
        ],
        body: [],
      },
    ],
    faq: [
      {
        q: "Gibt es ein komplett kostenloses Excel für Mac?",
        a: "Excel für das Web ist mit einem Microsoft-Konto kostenlos; die Desktop-App Excel für Mac braucht zum Bearbeiten ein Abo oder eine Lizenz. Kostenlose Desktop-Apps, die Excel-Dateien öffnen und speichern, sind Foglio, LibreOffice Calc und ONLYOFFICE.",
      },
      {
        q: "Welche kostenlose Tabellen-App ist am besten mit Excel kompatibel?",
        a: "Excel für das Web, weil es Excel ist. Unter den Desktop-Apps unterstützt LibreOffice insgesamt die meisten Excel-Funktionen, während Foglio und ONLYOFFICE `.xlsx` als natives Format nutzen. Teste deine eigenen Dateien: Die Kompatibilität hängt davon ab, was darin steckt.",
      },
      {
        q: "Welche ist die leichteste?",
        a: "Foglio, mit 7,5 MB Download und rund 19 MB installiert. Google Sheets und Excel für das Web installieren nichts, brauchen aber einen Browser und eine Internetverbindung.",
      },
      {
        q: "Sind diese Apps kostenlos für die geschäftliche Nutzung?",
        a: "Foglio (MIT / Apache-2.0), LibreOffice (MPL-2.0) und ONLYOFFICE Desktop Editors (AGPL-3.0) dürfen im Job kostenlos genutzt werden. Numbers ist für alle kostenlos. Google und Microsoft bieten kostenpflichtige Business-Tarife mit zusätzlichen Funktionen.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Kostenlose Tabellen-Apps für Mac",
    cardText: "Numbers, LibreOffice, Google Sheets, Excel für das Web, ONLYOFFICE und Foglio: Für wen sich welche App eignet.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "excel-functions-italian-english",
    meta: {
      title: "Excel-Funktionen Deutsch–Englisch: die Liste | Foglio",
      description:
        "SVERWEIS ist VLOOKUP, SUMME ist SUM, WENN ist IF: über 50 Excel-Funktionen auf Deutsch und Englisch, dazu Semikolon, Dezimalkomma und WAHR/FALSCH erklärt.",
    },
    h1: "Excel-Funktionen auf Deutsch und Englisch",
    intro: [
      "Excel übersetzt seine Funktionsnamen. Auf einem deutschen Mac heißt `VLOOKUP` `SVERWEIS`, `SUM` heißt `SUMME` und `IF` heißt `WENN`, und Argumente werden durch Semikolons getrennt. Praktisch, solange du nur auf Deutsch arbeitest – verwirrend, sobald du einer englischen Anleitung folgst, eine Formel aus einem Forum kopierst oder mit Kollegen im Ausland arbeitest.",
      "Unten findest du die meistgenutzten Excel-Funktionen auf Englisch und Deutsch, nach Themen sortiert, und danach die Regeln, über die viele stolpern: Trennzeichen, Dezimalkomma und was passiert, wenn eine Datei zwischen Sprachen wechselt.",
    ],
    sections: [
      {
        heading: "Mathematik und Statistik: SUMME, ZÄHLENWENN & Co.",
        body: [],
        bullets: fnList(FN_MATH),
      },
      {
        heading: "Logik: WENN, UND, ODER",
        body: ["Die Wahrheitswerte heißen auf Deutsch `WAHR` und `FALSCH` (Englisch: `TRUE` und `FALSE`)."],
        bullets: fnList(FN_LOGIC),
      },
      {
        heading: "SVERWEIS, XVERWEIS und andere Suchfunktionen",
        body: [],
        bullets: fnList(FN_LOOKUP),
      },
      {
        heading: "Text",
        body: [],
        bullets: fnList(FN_TEXT),
      },
      {
        heading: "Datum und Uhrzeit",
        body: ["Manche Funktionen heißen in allen Sprachen gleich, zum Beispiel `MAX`, `MIN`, `LET`, `LAMBDA` und `DATEDIF`."],
        bullets: fnList(FN_DATE),
      },
      {
        heading: "Semikolon und Dezimalkomma",
        body: [
          "In Deutschland schreibt man eineinhalb als `1,5`. Weil das Komma schon belegt ist, trennt das deutsche Excel Funktionsargumente mit einem **Semikolon**: `=WENN(A1>1,5;\"ja\";\"nein\")` ist die deutsche Form von `=IF(A1>1.5,\"yes\",\"no\")`. Österreich, Italien, Frankreich, Spanien und der größte Teil Kontinentaleuropas machen es genauso.",
          "Das Trennzeichen entscheiden die Regionseinstellungen deines Macs, nicht nur die Sprache: Ein Mac mit englischer Sprache und deutscher Region nutzt ebenfalls das Dezimalkomma.",
        ],
      },
      {
        heading: "Englische Formeln in deutsches Excel übertragen",
        body: [
          "Eine `.xlsx`-Datei speichert Formeln immer auf Englisch mit Kommas: `SUM(A1:A10)`, nicht `SUMME`. Jede Excel-Kopie übersetzt sie beim Anzeigen in die Sprache ihres Nutzers. Eine Datei aus einem amerikanischen Excel öffnet sich in einem deutschen also ohne Probleme, mit deutschen Funktionsnamen.",
          "Formeltext per Kopieren und Einfügen ist etwas anderes: `=VLOOKUP(A2,B:C,2,FALSE)` aus einer englischen Website ergibt im deutschen Excel einen Fehler. Übersetze die Namen mit der Liste oben, ersetze die Kommas durch Semikolons und `FALSE` durch `FALSCH`: `=SVERWEIS(A2;B:C;2;FALSCH)`.",
        ],
      },
      {
        heading: "Deutsche Formeln in Foglio",
        body: [
          "[Foglio](/), die kostenlose Open-Source-Tabellenkalkulation für den Mac, folgt derselben Konvention wie Excel. Auf einem deutschen Mac tippst du `=SUMME(A1:A10;B2)`, `SVERWEIS` oder `WENNFEHLER` mit Semikolon und Dezimalkomma; in der Datei bleibt die englische Form von Excel. Italienisch (`SOMMA`, `CERCA.VERT`), Spanisch (`SUMA`, `BUSCARV`) und Französisch (`SOMME`, `RECHERCHEV`) funktionieren genauso, und der Dialog zum Einfügen von Funktionen (Insert Function) listet alle ~500 Funktionen unter ihren übersetzten Namen.",
          "Die Oberfläche von Foglio ist auf Englisch und Italienisch, und die Kurzbeschreibungen der Funktionen in der Autovervollständigung sind auf Englisch: Auf Deutsch folgen nur die Formeln deiner Sprache. Wenn du englischen Anleitungen folgst, hilft dir Show Formulas (Menü View), das Getippte mit der Anleitung zu vergleichen. Auch Google Sheets, LibreOffice und Numbers übersetzen Funktionsnamen je nach Einstellungen.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie heißt SVERWEIS auf Englisch?",
        a: "`VLOOKUP`. Die Argumente sind dieselben, im englischen Excel aber durch Kommas getrennt: `=VLOOKUP(A2,B:C,2,FALSE)` statt `=SVERWEIS(A2;B:C;2;FALSCH)`. XVERWEIS heißt `XLOOKUP`, WVERWEIS heißt `HLOOKUP`.",
      },
      {
        q: "Wie heißt WENN auf Englisch?",
        a: "`IF`. Verwandte Funktionen: WENNFEHLER ist `IFERROR`, WENNS ist `IFS`, ZÄHLENWENN ist `COUNTIF` und SUMMEWENN ist `SUMIF`.",
      },
      {
        q: "Warum gibt eine englische Formel im deutschen Excel einen Fehler?",
        a: "Meist, weil sie englische Namen oder Kommas zwischen den Argumenten verwendet. Nutze die deutschen Namen, Semikolons zwischen den Argumenten und das Dezimalkomma.",
      },
      {
        q: "Kann ich Excel oder Foglio auf englische Funktionsnamen umstellen?",
        a: "Excel folgt der Sprache von Office und deines Systems. Foglio folgt der Sprache und Region deines Macs; stellst du sie unter Systemeinstellungen ▸ Allgemein ▸ Sprache & Region auf Englisch, tippst du auch die Funktionen auf Englisch.",
      },
      {
        q: "Funktioniert eine Datei aus dem deutschen Excel im englischen Excel?",
        a: "Ja. Die Datei speichert Formeln intern auf Englisch, deshalb zeigt jede Excel-Version – und auch Foglio – sie in ihrer eigenen Sprache an.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Excel-Funktionen: Deutsch ↔ Englisch",
    cardText: "Über 50 Excel-Funktionsnamen übersetzt, von SUMME bis SVERWEIS – und warum deutsche Formeln Semikolons nutzen.",
  },
];
