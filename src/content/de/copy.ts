import type { SiteCopy } from "../types";

export const copyDe: SiteCopy = {
  ui: {
    navCompare: "Vergleich",
    navTechnology: "Technik",
    navAlternatives: "Alternativen",
    navGuides: "Anleitungen",
    navDownload: "Download",
    navGitHub: "GitHub",
    download: "Für Mac herunterladen",
    downloadSub: "Kostenlos · macOS 14+ · Apple Silicon & Intel · 7,5 MB",
    viewSource: "Quellcode auf GitHub ansehen",
    readMore: "Weiterlesen",
    faqTitle: "Häufige Fragen",
    updated: "Aktualisiert",
    languageLabel: "Sprache",
    sources: "Quellen",
    allReleases: "Alle Versionen und Prüfsummen",
    smallerIsBetter: "kleiner ist besser",
    lookupTitle: "1.000 SVERWEIS über 10.000 Zeilen",
    lookupSub: "{before} Sekunden in der ursprünglichen Engine: etwa {times}× schneller",
    tested: "Getestet auf einem Mac mit M4-Prozessor, macOS 27.",
    opens: "Öffnet",
    arch: [
      "Fenster, Menüs, Dokumente und eine eigene, mit AppKit gezeichnete Tabellenansicht",
      "Rust-Kern",
      "Arbeitsmappen-Modell, Formel-Engine IronCalc (gepatchter Fork), xlsx / xls / ods / csv",
      "Architektur: Eine Swift/AppKit-App ruft über eine schlichte C-Schnittstelle einen Rust-Kern auf",
    ],
    skipToContent: "Zum Inhalt springen",
    footerTagline: "Eine kostenlose Open-Source-Tabellenkalkulation für den Mac. Nativ, winzig und Excel-kompatibel.",
    footerLicense: "Foglio ist freie Software, doppelt lizenziert unter MIT und Apache-2.0.",
    footerTrademark:
      "Excel ist eine Marke der Microsoft Corporation. Numbers ist eine Marke von Apple Inc. Google Sheets ist eine Marke von Google LLC. LibreOffice ist eine Marke von The Document Foundation. Foglio ist ein unabhängiges Projekt und steht mit keinem dieser Unternehmen in Verbindung und wird von keinem unterstützt.",
    notFoundTitle: "Dieses Blatt ist leer",
    notFoundText: "Die gesuchte Seite gibt es nicht oder sie wurde verschoben. Versuch es mit der Startseite oder einer der Anleitungen.",
    backHome: "Zurück zur Startseite",
    yes: "Ja",
    no: "Nein",
    partial: "Teilweise",
  },

  meta: {
    home: {
      title: "Foglio – kostenlose Tabellenkalkulation für den Mac",
      description:
        "Foglio ist eine kostenlose Open-Source-Tabellenkalkulation für macOS: öffnet und speichert Excel-Dateien (xlsx), ~500 Funktionen, nur 7,5 MB. Ohne Konto.",
      ogTitle: "Foglio – die kostenlose, native Open-Source-Tabellenkalkulation für den Mac",
    },
    compare: {
      title: "Foglio vs. Excel, Numbers, LibreOffice und Google Sheets",
      description:
        "Ehrlicher Vergleich der Tabellenkalkulationen für Mac: Preis, Größe, Tempo, xlsx, Makros, Pivot-Tabellen, Zusammenarbeit und Datenschutz. Mit Quellen.",
    },
    technology: {
      title: "So ist Foglio gebaut: Swift, AppKit und Rust | Foglio",
      description:
        "Ein Blick in Foglio: native Swift/AppKit-App auf einer Rust-Engine (gepatchter IronCalc-Fork). Darum nur 7,5 MB, Start in 0,24 s und schnelles Rechnen.",
    },
    download: {
      title: "Foglio für Mac herunterladen: kostenlos & Open Source",
      description:
        "Lade Foglio 1.0 herunter, die kostenlose Tabellenkalkulation für macOS 14 oder neuer. Universal für Apple Silicon und Intel, 7,5 MB, mit Anleitung.",
    },
    alternatives: {
      title: "Alternativen zu Excel, Numbers und Google Sheets | Foglio",
      description:
        "Suchst du eine Alternative zu Excel, Numbers, LibreOffice Calc oder Google Sheets auf dem Mac? Ehrlich erklärt: wann Foglio passt und wann nicht.",
    },
    guides: {
      title: "Mac-Anleitungen: xlsx, xls und CSV öffnen | Foglio",
      description:
        "Praktische Anleitungen für Tabellen auf dem Mac: Excel- und CSV-Dateien ohne Excel öffnen, Umlaute und Zeichensätze reparieren, Formeln auf Deutsch.",
    },
  },

  home: {
    eyebrow: "Kostenlos · Open Source · Nativ für macOS",
    h1: "Die kostenlose Tabellenkalkulation für den Mac, die deine Excel-Dateien öffnet",
    subtitle:
      "Foglio ist eine kleine, schnelle, native Mac-App für alltägliche Tabellen. Sie öffnet und speichert `.xlsx`, öffnet `.xls`, `.ods` und `.csv`, beherrscht ~500 Excel-Funktionen und kostet nichts: kein Abo, kein Konto, keine Werbung.",
    badges: [
      "Für immer kostenlos, MIT / Apache-2.0",
      "7,5 MB Download, Start in 0,24 s",
      "Natives Swift/AppKit, kein Electron",
      "Kein Konto, keine Telemetrie",
    ],
    statLabels: {
      download: "Downloadgröße",
      launch: "Start bis zum ersten Bild",
      memory: "Arbeitsspeicher mit leerem Blatt",
      open100k: "xlsx mit 100.000 Zeilen öffnen",
      recalc: "Bearbeiten + 300.000 Formeln neu berechnen",
      price: "Preis, für immer",
    },
    featuresTitle: "Alles, was du für alltägliche Tabellen brauchst",
    featuresIntro:
      "Foglio deckt ab, was die meisten Menschen tatsächlich in einer Tabellenkalkulation machen: Listen, Budgets, Rechnungen, Berichte, Daten aus den Excel-Dateien anderer. Es fühlt sich an wie Excel und verhält sich wie eine Mac-App.",
    features: [
      {
        icon: "file",
        title: "Öffnet Excel-Dateien",
        text: "Liest und schreibt `.xlsx` mit Formatierung, Diagrammen, Bildern, Kommentaren und Datenüberprüfung. Öffnet auch `.xls`, `.xlsb`, `.xlsm`, `.ods`, `.csv` und `.tsv`.",
      },
      {
        icon: "function",
        title: "~500 Excel-Funktionen",
        text: "SUMMEWENNS, XVERWEIS, FILTER, SORTIEREN, EINDEUTIG, LET, LAMBDA, Datum, Text, Statistik und Finanzen. 191 von 195 geprüften Funktionen stimmen in jedem Testfall mit Excel überein.",
      },
      {
        icon: "globe",
        title: "Formeln auf Deutsch",
        text: "Auf einem deutschen Mac tippst du `=SUMME(A1:A10)` oder `SVERWEIS` mit `;` und Dezimalkomma, wie im deutschen Excel. Auch Italienisch, Spanisch und Französisch. Die Dateien bleiben Standard-Excel.",
      },
      {
        icon: "bolt",
        title: "Schnell bei großen Tabellen",
        text: "Eine Arbeitsmappe mit 100.000 Zeilen und 300.000 Formeln öffnet in 1,1 s und rechnet nach einer Änderung in 16 ms neu – dank inkrementeller Neuberechnung.",
      },
      {
        icon: "feather",
        title: "Winzig und leicht",
        text: "7,5 MB Download, 19 MB installiert, rund 58 MB Arbeitsspeicher mit leerem Blatt und 0 % CPU im Leerlauf. Die Lüfter bleiben still.",
      },
      {
        icon: "apple",
        title: "Eine echte Mac-App",
        text: "Geschrieben in Swift und AppKit: Zuletzt benutzt, Fenster-Tabs, Dunkelmodus, Drucken und PDF-Export, Zoomen per Fingergeste, Tastenkürzel wie in Excel für Mac.",
      },
      {
        icon: "chart",
        title: "Diagramme und Bilder",
        text: "Säulen-, Balken-, Linien-, Kreis-, Ring-, Flächen- und Punktdiagramme, gespeichert in `.xlsx`. Bilder einfügen, zuschneiden, komprimieren; selbst alte EMF/WMF-ClipArts werden angezeigt.",
      },
      {
        icon: "filter",
        title: "Datenwerkzeuge",
        text: "Sortieren, AutoFilter, Suchen und Ersetzen, Duplikate entfernen, Text in Spalten, Dropdown-Listen, bedingte Formatierung und eine leichte Pivot-Funktion (Summarize by).",
      },
      {
        icon: "lock",
        title: "Privat von Grund auf",
        text: "Kein Konto, keine Werbung, keine Analyse-Tools. Foglio baut von sich aus keine Netzwerkverbindungen auf: Deine Dateien bleiben auf deinem Mac.",
      },
    ],
    speedTitle: "So klein, dass du vergisst, dass es da ist",
    speedIntro:
      "Foglio kommt ohne Browser-Engine, ohne Java-Laufzeitumgebung und ohne mitgeliefertes Framework aus. Darum ist es in Sekunden geladen und geöffnet, bevor du die Maus bewegst.",
    speedNote:
      "Foglio-Werte gemessen auf einem MacBook Air M4 (16 GB), macOS 27, Foglio 1.0, November 2026: Median mehrerer Durchläufe, Arbeitsspeicher laut `footprint`. Die Größen der anderen Apps sind die Download- bzw. Installationsgrößen aus ihren Stores und Download-Seiten im November 2026.",
    freeTitle: "Kostenlos – und das bleibt so",
    freeText: [
      "Foglio hat keinen Preis, keine Testphase, kein Abo und keine Bezahlversion. Du brauchst weder eine Apple-ID noch ein Microsoft- oder Google-Konto, und es gibt keine Werbung.",
      "Der Quellcode liegt auf [GitHub](https://github.com/Acid236/foglio) unter den Lizenzen MIT und Apache-2.0: Jeder kann ihn lesen, kompilieren, verbessern oder forken. Deine Tabellen sind normale `.xlsx`-Dateien, die sich in Excel, Numbers, LibreOffice und Google Sheets öffnen lassen: kein Lock-in.",
    ],
    compareTitle: "Wie Foglio abschneidet",
    compareText:
      "Excel hat mehr Funktionen, Google Sheets kann Echtzeit-Zusammenarbeit, Numbers hat schöne Vorlagen. Foglio ist die kostenlose, leichte, native Option, die Excel-Dateien trotzdem sauber öffnet. Alle Details – auch wo die anderen vorne liegen – im [vollständigen Vergleich](/compare/).",
    techTitle: "Gebaut, wie eine Mac-App gebaut sein sollte",
    techText:
      "Eine Swift/AppKit-Oberfläche mit eigenem Zellraster auf einer Rechen-Engine in Rust (einem gepatchten Fork von IronCalc), eingebunden als schlichte statische Bibliothek. Lies, [wie Foglio gebaut ist](/technology/) und warum es dadurch klein und schnell ist.",
    formatsTitle: "Öffnet die Dateien, die man dir schickt",
    formatsText:
      "`.xlsx` und `.xlsm` aus Excel, alte `.xls` und binäre `.xlsb`, `.ods` aus LibreOffice sowie `.csv` / `.tsv` mit automatischer Erkennung von Zeichensatz, Trennzeichen und Dezimaltrennzeichen. Speichert `.xlsx`, exportiert CSV und PDF. Siehe die Anleitungen [xlsx-Datei ohne Excel öffnen](/guides/open-xlsx-on-mac-without-excel/), [alte .xls-Dateien öffnen](/guides/open-xls-on-mac/) und [CSV auf dem Mac öffnen](/guides/open-csv-on-mac/).",
    alternativesTitle: "Du wechselst von einer anderen App?",
    alternativesText:
      "Ehrliche Hinweise für alle, die von [Excel für Mac](/alternatives/excel-for-mac/), [Numbers](/alternatives/numbers/), [LibreOffice Calc](/alternatives/libreoffice/) oder [Google Sheets](/alternatives/google-sheets/) kommen – auch dazu, wann du lieber dabei bleiben solltest. Alle findest du auf der [Seite mit Alternativen](/alternatives/).",
    ctaTitle: "Probier es mit deinen eigenen Tabellen aus",
    ctaText:
      "7,5 MB Download, kostet nichts. Foglio 1.0 ist eine Erstversion: Behalte beim Ausprobieren Sicherungskopien wichtiger Dateien.",
    faq: [
      {
        q: "Ist Foglio wirklich kostenlos?",
        a: "Ja. Es gibt keinen Preis, keine Testphase, kein Abo, keine In-App-Käufe und keine Werbung. Foglio ist Open-Source-Software unter den Lizenzen MIT und Apache-2.0.",
      },
      {
        q: "Kann Foglio Excel-Dateien öffnen und speichern?",
        a: "Ja. Es liest und schreibt `.xlsx` mit Formatierung, Diagrammen, Bildern, Kommentaren, Datenüberprüfung und bedingter Formatierung. Außerdem öffnet es `.xls`, `.xlsb`, `.xlsm` und `.ods` sowie CSV/TSV-Textdateien. Gespeichert wird als `.xlsx`, exportiert als CSV und PDF.",
      },
      {
        q: "Ersetzt Foglio Microsoft Excel vollständig?",
        a: "Für alltägliche Tabellen oft ja. Für manche Arbeiten nicht: Foglio führt keine Makros (VBA) aus, hat keine echten Pivot-Tabellen (stattdessen das einfachere *Summarize by*), lässt Formen und SmartArt weg und kann keine passwortgeschützten Dateien öffnen. Der [Vergleich](/compare/) listet alle Unterschiede auf.",
      },
      {
        q: "Auf welchen Macs läuft Foglio?",
        a: "Auf jedem Mac mit macOS 14 Sonoma oder neuer, mit Apple Silicon oder Intel. Es ist eine einzige Universal-App.",
      },
      {
        q: "Warum meldet macOS, Foglio stamme von einem nicht verifizierten Entwickler?",
        a: "Foglio 1.0 ist nicht mit einer kostenpflichtigen Apple-Developer-ID signiert, deshalb fragt macOS beim ersten Öffnen nach. Unter macOS 15 oder neuer gehst du zu Systemeinstellungen ▸ Datenschutz & Sicherheit und klickst auf **Dennoch öffnen**; unter macOS 14 klickst du mit der rechten Maustaste auf die App und wählst **Öffnen**. Die [Download-Seite](/download/) erklärt jeden Schritt.",
      },
      {
        q: "Sammelt Foglio Daten oder braucht es ein Konto?",
        a: "Nein. Es gibt kein Konto, keine Anmeldung, keine Analyse und keine Telemetrie. Foglio baut von sich aus keine Netzwerkverbindungen auf; es öffnet nur dann eine Webseite, wenn du auf einen Hyperlink in einer Zelle klickst.",
      },
      {
        q: "Kann ich Formeln auf Deutsch eingeben?",
        a: "Ja. Foglio folgt der Sprache und Region deines Macs: Auf einem deutschen Mac tippst du `=SUMME(A1:A10;B2)`, `WENN` oder `SVERWEIS` mit Semikolon und Dezimalkomma, genau wie im deutschen Excel. Italienisch, Spanisch und Französisch funktionieren genauso. Die Menüs von Foglio selbst sind auf Englisch (oder Italienisch). Dateien speichern Formeln immer in der englischen Standardform, damit sie überall richtig öffnen. Für italienische Formeln gibt es eine [Liste italienischer und englischer Funktionsnamen](/guides/excel-functions-italian-english/).",
      },
      {
        q: "Ist Foglio fertig?",
        a: "Foglio 1.0 erledigt alltägliche Tabellen von Anfang bis Ende und wird von 69 automatisierten UI-Tests abgedeckt, ist aber eine Erstversion. Behalte Sicherungskopien wichtiger Dateien und melde Probleme auf [GitHub](https://github.com/Acid236/foglio/issues).",
      },
    ],
  },

  compare: {
    h1: "Foglio im Vergleich mit Excel, Numbers, LibreOffice und Google Sheets",
    intro: [
      "Die eine beste Tabellenkalkulation für den Mac gibt es nicht – nur die, die zu deiner Arbeit passt. Diese Seite stellt Foglio neben die vier Apps, zwischen denen Mac-Nutzer am häufigsten wählen, und sie ist bewusst ehrlich: Wo eine andere App besser ist, steht das in der Tabelle.",
      "Kurz gesagt: **Excel** ist am vollständigsten und am teuersten; **Numbers** ist kostenlos und schön, konvertiert aber Excel-Dateien; **LibreOffice Calc** ist kostenlos und mächtig, aber groß und keine native Mac-App; **Google Sheets** ist kostenlos und ideal zum Zusammenarbeiten, läuft aber im Browser und braucht ein Google-Konto. **Foglio** ist kostenlos, Open Source, winzig und nativ und bearbeitet `.xlsx` direkt – mit weniger Profifunktionen als Excel.",
    ],
    tableTitle: "Der direkte Vergleich",
    tableNote:
      "Preise und Funktionen im November 2026 auf den Seiten der Hersteller geprüft (Quellen unten); die Preise gelten in Deutschland, Stand November 2026. Die Foglio-Werte wurden auf einem MacBook Air M4 mit macOS 27 und Foglio 1.0 gemessen.",
    sections: [
      {
        heading: "Welche App ist die richtige für dich?",
        body: [
          "Wähle das Werkzeug nach der Aufgabe, nicht nach der Marke. Die meisten brauchen nur einen Bruchteil dessen, was jede dieser Apps kann.",
        ],
        bullets: [
          "**Nimm Foglio**, wenn du eine kostenlose, schnelle, private App willst, die Excel-Dateien auf deinem Mac öffnet und speichert – ohne Konto und ohne Abo.",
          "**Nimm Excel**, wenn du auf Makros (VBA), Power Query, echte Pivot-Tabellen oder fortgeschrittene Diagramme angewiesen bist oder Dateien deiner Firma pixelgenau treffen musst.",
          "**Nimm Numbers**, wenn du Dokumente gestaltest, die vor allem gut aussehen sollen, meist für dich selbst, und du im Apple-Ökosystem lebst, auch auf iPhone und iPad.",
          "**Nimm LibreOffice Calc**, wenn du eine kostenlose App mit Pivot-Tabellen, Makros und riesigem Funktionsumfang brauchst und dich eine große, nicht native App nicht stört.",
          "**Nimm Google Sheets**, wenn mehrere Leute gleichzeitig dieselbe Tabelle bearbeiten und du gern im Browser mit einem Google-Konto arbeitest.",
        ],
      },
      {
        heading: "Wo Foglio vorne liegt",
        body: [
          "Foglio ist mit großem Abstand die kleinste App in diesem Vergleich: 7,5 MB Download gegenüber Hunderten Megabyte oder mehreren Gigabyte bei den anderen Desktop-Apps. Nach 0,24 s ist das Fenster einsatzbereit, mit leerem Blatt braucht Foglio rund 58 MB Arbeitsspeicher und im Leerlauf 0 % CPU.",
          "Es ist ohne Bedingungen kostenlos, Open Source und funktioniert vollständig offline, ohne Konto. Anders als Numbers bearbeitet es `.xlsx`-Dateien direkt, statt sie zu konvertieren, und auf einem deutschen, italienischen, spanischen oder französischen Mac tippst du Formeln mit denselben übersetzten Funktionsnamen wie in Excel.",
        ],
      },
      {
        heading: "Wo die anderen vorne liegen",
        body: [
          "Excel ist weit vollständiger: Makros, Power Query, echte Pivot-Tabellen, viel mehr Diagrammtypen und das Referenzverhalten für jede Excel-Datei. Auch LibreOffice hat Pivot-Tabellen und Makros, dazu eine Zeichenebene und viel mehr Import- und Exportformate. Google Sheets bietet die beste Echtzeit-Zusammenarbeit und läuft auf jedem Gerät mit Browser. Numbers und Excel gibt es für iPhone und iPad; Foglio nur für den Mac.",
          "Foglio 1.0 stammt von einem kleinen Open-Source-Projekt. Hinter den großen Paketen stecken Jahrzehnte an Feinschliff. Wenn eine Datei wichtig ist, mach eine Sicherungskopie.",
        ],
      },
    ],
    faq: [
      {
        q: "Was ist die beste kostenlose Excel-Alternative für den Mac?",
        a: "Das hängt davon ab, was du brauchst. Foglio ist die leichteste kostenlose Option, die `.xlsx` direkt bearbeitet. LibreOffice Calc ist die umfangreichste kostenlose Desktop-App. Google Sheets ist am besten für die Zusammenarbeit. Numbers ist vorinstalliert und kostenlos, wandelt Excel-Dateien aber in sein eigenes Format um. Unser [Überblick über kostenlose Tabellen-Apps](/guides/free-spreadsheet-apps-for-mac/) zeigt weitere Optionen.",
      },
      {
        q: "Unterstützt Foglio Makros oder VBA?",
        a: "Nein. Foglio öffnet `.xlsm`-Dateien, führt ihre Makros aber nicht aus. Wenn deine Arbeit von VBA abhängt, nimm Microsoft Excel; auch LibreOffice kann einen Teil von VBA ausführen.",
      },
      {
        q: "Hat Foglio Pivot-Tabellen?",
        a: "Noch keine echten. *Summarize by* erstellt ein live aktualisiertes Übersichtsblatt mit SUMMEWENNS- und ZÄHLENWENNS-Formeln, das einfache Pivot-Auswertungen abdeckt. Excel, LibreOffice, Numbers und Google Sheets haben alle Pivot-Tabellen.",
      },
      {
        q: "Können mehrere Personen gleichzeitig eine Datei in Foglio bearbeiten?",
        a: "Nein. Foglio ist eine Desktop-App für jeweils eine Person. Für gemeinsames Bearbeiten in Echtzeit sind Google Sheets oder Excel mit OneDrive die bessere Wahl.",
      },
      {
        q: "Sind die Preise der anderen Apps aktuell?",
        a: "Sie wurden im November 2026 auf den deutschen Seiten von Microsoft und Apple geprüft. Preise ändern sich, also folge vor dem Kauf den Links zu den Quellen.",
      },
    ],
  },

  technology: {
    h1: "Wie Foglio gebaut ist – und warum es dadurch klein und schnell ist",
    intro: [
      "Die meisten modernen Desktop-Apps bringen eine Kopie eines Webbrowsers, eine Java-Laufzeitumgebung oder ein großes plattformübergreifendes Framework mit. Foglio bringt nichts davon mit. Es ist eine native Mac-App in Swift und AppKit; die Tabellen-Engine ist in Rust geschrieben und direkt in die App eingebunden.",
      "Diese Seite erklärt die Architektur zweimal: zuerst in einfachen Worten, dann so genau, dass sich Entwickler im [Quellcode](https://github.com/Acid236/foglio) zurechtfinden.",
    ],
    sections: [
      {
        heading: "Die Kurzfassung",
        body: [
          "Stell dir Foglio als zwei Teile vor. Der sichtbare Teil (Fenster, Menüs, das Zellraster) ist mit Apples eigenen Werkzeugen geschrieben und sieht deshalb aus und verhält sich wie jede andere Mac-App. Der Teil, der rechnet (Dateien lesen, Formeln verstehen, neu berechnen), ist eine eigene Engine in Rust, einer Sprache, die sehr schnelle, kompakte Programme erzeugt.",
          "Die beiden Teile sprechen über eine kleine, schlichte Schnittstelle miteinander. Dazwischen liegt nichts: kein versteckter Browser, keine virtuelle Maschine, keine Laufzeitumgebung zum Nachladen. Darum ist die ganze App nur 7,5 MB groß, startet in 0,24 s und braucht mit leerem Blatt rund 58 MB Arbeitsspeicher.",
        ],
      },
      {
        heading: "Die Mac-App: Swift und AppKit",
        body: [
          "Die Oberfläche ist in Swift auf AppKit geschrieben, dem Framework hinter dem Finder und den meisten Apps von Apple. Dokumente sind echte macOS-Dokumente, daher funktionieren Zuletzt benutzt, Sichern unter, Zurücksetzen, Duplizieren, Fenster-Tabs, Vollbild, Dunkelmodus, Drucken und PDF-Export wie gewohnt.",
          "Das Blatt selbst ist ein eigenes `NSView`-Raster, kein Tabellen-Steuerelement. Es fragt die Engine nur nach den sichtbaren Zellen, gebündelt und fertig zum Zeichnen. So bleibt das Scrollen auch bei Hunderttausenden Zeilen flüssig. Diagramme, Bilder und die Bearbeitungsleiste zeichnet die App ebenfalls selbst.",
          "Foglio enthält außerdem einen eigenen Player für EMF- und WMF-Metadateien, das Vektorbildformat älterer Office-Dokumente (ClipArts, MathType-Formeln, eingefügte Visio-Diagramme). Bilder, die andere Mac-Apps als leere Kästen zeigen, werden korrekt gezeichnet und unverändert zurückgespeichert.",
        ],
      },
      {
        heading: "Die Engine: Rust und ein gepatchtes IronCalc",
        body: [
          "Formeln werden von [IronCalc](https://github.com/ironcalc/IronCalc) geparst und ausgewertet, einer Open-Source-Tabellen-Engine in Rust. Foglio nutzt einen gepatchten Fork von IronCalc 0.9.1, in dem jede Änderung im Repository markiert und dokumentiert ist.",
          "Der Fork ergänzt eine **inkrementelle Neuberechnung**: Wenn du eine Zelle änderst, werden nur die davon abhängigen Formeln neu berechnet statt der ganzen Arbeitsmappe. In einer Mappe mit 100.000 Zeilen und 300.000 Formeln dauert eine Änderung 16 ms, eine vollständige Neuberechnung 64 ms.",
          "Außerdem ergänzt er **indizierte Suchen**. Der erste SVERWEIS (VLOOKUP), VERGLEICH oder XVERWEIS auf einen Bereich liest ihn einmal und baut einen Hash-Index auf; jede weitere Suche ist nur noch ein einziger Zugriff. 1.000 exakte SVERWEIS über 10.000 Zeilen brauchten im ursprünglichen IronCalc 1.703 ms, im Fork von Foglio 1,3 ms. Der Fork korrigiert zudem ein Dutzend Funktionen, sodass 191 der 195 Funktionen aus Foglios Kompatibilitätsprüfung in jedem Testfall mit Excel übereinstimmen.",
        ],
        bullets: [
          "Ältere `.xls`-, binäre `.xlsb`- und LibreOffice-`.ods`-Dateien werden mit [calamine](https://github.com/tafia/calamine) gelesen, einem schnellen Rust-Reader.",
          "CSV- und TSV-Dateien laufen durch einen Rust-Importer, der Zeichensatz, Trennzeichen und Dezimaltrennzeichen erkennt.",
          "Formeln, die auf Deutsch, Italienisch, Spanisch oder Französisch eingegeben werden, werden vor dem Speichern in die englische Standardform von Excel übersetzt.",
        ],
      },
      {
        heading: "Die Brücke: eine schlichte C-Schnittstelle",
        body: [
          "Die Rust-Engine wird als statische Bibliothek kompiliert und bietet eine kleine C-Schnittstelle (`foglio_core.h`): Datei öffnen und speichern, Zelle bearbeiten, einen Block sichtbarer Zellen zurückgeben. Swift ruft sie über einen Bridging-Header direkt auf. Es gibt keine generierten Bindings, keine Frameworks und keine Nachrichten zwischen Prozessen; ein Aufruf der Engine kostet etwa so viel wie ein normaler Funktionsaufruf.",
        ],
      },
      {
        heading: "Kein Xcode-Projekt",
        body: [
          "Foglio wird mit zwei Befehlen gebaut: `cargo` erstellt die Rust-Bibliothek, `swiftc` kompiliert die App und linkt sie. Ein Shell-Skript erzeugt eine Universal-App für Apple Silicon und Intel und verpackt sie mit Apples eigenem `hdiutil` in ein Disk-Image. Du brauchst die Xcode Command Line Tools und Rust; das vollständige Xcode ist nicht nötig.",
          "Weniger Schichten heißt: weniger Fehlerquellen, schnellere Builds und ein Projekt, das jeder von oben bis unten lesen kann.",
        ],
      },
      {
        heading: "Getestet mit echten Tastatur- und Mausereignissen",
        body: [
          "Foglio hat 69 UI-Tests, die die echte App mit echten Tastatur- und Mausereignissen steuern: Formeln tippen, Bereiche ausfüllen, sortieren, widerrufen, Dateien speichern und wieder öffnen. Die Datei-Importer und die Formel-Engine haben eigene Rust-Testsuiten, und ein spezieller Modus prüft jede inkrementelle Neuberechnung gegen eine vollständige.",
        ],
      },
      {
        heading: "Warum Foglio dadurch klein und schnell ist",
        body: [
          "Eine Electron-App enthält eine komplette Kopie des Chromium-Browsers, meist weit über 100 MB, bevor sie überhaupt etwas tut. Eine Java- oder plattformübergreifende Suite bringt ihre Laufzeitumgebung und ihr eigenes UI-Toolkit mit. Foglio enthält nur seinen eigenen Code und nutzt die Frameworks, die auf jedem Mac schon vorhanden sind.",
          "Der Rust-Kern wird mit voller Link-Time-Optimierung kompiliert und ohne Debug-Symbole ausgeliefert. Das Ergebnis ist eine Universal-App mit rund 19 MB auf der Festplatte und 7,5 MB als komprimierter Download, die im Leerlauf 0 % CPU braucht.",
        ],
      },
    ],
    faq: [
      {
        q: "Ist Foglio eine Electron- oder Web-App?",
        a: "Nein. Es ist eine native AppKit-App, geschrieben in Swift. Darin steckt keine Browser-Engine.",
      },
      {
        q: "Läuft Foglio nativ auf Apple Silicon?",
        a: "Ja. Foglio ist eine Universal-App mit nativem Code für Apple Silicon (arm64) und Intel (x86_64).",
      },
      {
        q: "Kann ich Foglio selbst kompilieren?",
        a: "Ja. Installiere die Xcode Command Line Tools und Rust und führe dann `scripts/build.sh` aus. Die genauen Befehle stehen in der [README](https://github.com/Acid236/foglio#building-from-source).",
      },
      {
        q: "Fließen die Änderungen an IronCalc zurück ins Original?",
        a: "Der Fork ist Open Source unter denselben Lizenzen wie IronCalc. Jede Änderung ist mit einem Kommentar `Foglio fork:` markiert und in `third_party/README.md` beschrieben, damit sie geprüft und wiederverwendet werden kann.",
      },
    ],
  },

  download: {
    h1: "Foglio für Mac herunterladen",
    intro: [
      "Foglio 1.0 ist kostenlos. Ein einziges Universal-Disk-Image läuft auf jedem Mac mit macOS 14 Sonoma oder neuer, ob Apple Silicon oder Intel.",
      "Es ist eine Erstversion: Alltägliche Tabellen erledigt sie vollständig, aber behalte Sicherungskopien wichtiger Dateien.",
    ],
    steps: [
      {
        title: "Disk-Image herunterladen",
        text: "Klick auf den Download-Button, um `Foglio-1.0.dmg` (7,5 MB) von den GitHub-Releases des Projekts zu laden.",
      },
      {
        title: "Foglio in „Programme“ ziehen",
        text: "Öffne das Disk-Image und zieh das Foglio-Symbol auf die Verknüpfung „Programme“ daneben. Wirf das Disk-Image danach aus.",
      },
      {
        title: "Beim ersten Mal öffnen",
        text: "macOS fragt beim ersten Start nach, weil Foglio nicht mit einer kostenpflichtigen Apple-Developer-ID signiert ist. Die Schritte stehen unten; das musst du nur einmal machen.",
      },
      {
        title: "Tabellen öffnen",
        text: "Doppelklicke auf eine `.xlsx`-Datei und wähle Foglio unter „Öffnen mit“, oder zieh Dateien auf das Foglio-Symbol im Dock.",
      },
    ],
    gatekeeperTitle: "„Nicht verifizierter Entwickler“: So öffnest du Foglio beim ersten Mal",
    gatekeeperText: [
      "Foglio 1.0 ist ad hoc signiert statt mit einem kostenpflichtigen Apple-Developer-Konto signiert und notarisiert. Gatekeeper kann deshalb nicht dafür bürgen und zeigt beim ersten Öffnen eine Warnung. Das ist bei kleinen Open-Source-Projekten normal, und du kannst jede Zeile des [Quellcodes](https://github.com/Acid236/foglio) lesen oder die App selbst kompilieren.",
      "**macOS 15 Sequoia oder neuer:** Doppelklicke auf Foglio und schließ die Warnung. Öffne **Systemeinstellungen ▸ Datenschutz & Sicherheit**, scroll zum Hinweis zu Foglio und klick auf **Dennoch öffnen**. Bestätige dann mit deinem Passwort oder Touch ID.",
      "**macOS 14 Sonoma:** Klick im Ordner „Programme“ mit der rechten Maustaste (oder bei gedrückter Ctrl-Taste) auf Foglio, wähle **Öffnen** und klick im Dialog erneut auf **Öffnen**.",
      "Danach öffnet sich Foglio ganz normal wie jede andere App.",
    ],
    requirementsTitle: "Systemanforderungen",
    requirements: [
      "macOS 14 Sonoma oder neuer",
      "Mac mit Apple Silicon oder Intel (Universal-App)",
      "Etwa 19 MB freier Speicherplatz",
      "Kein Konto und keine Internetverbindung nötig",
      "Oberfläche auf Englisch oder Italienisch; Formeln auch auf Deutsch",
    ],
    sourceTitle: "Lieber selbst kompilieren?",
    sourceText: [
      "Foglio ist Open Source unter MIT und Apache-2.0. Mit installierten Xcode Command Line Tools und Rust baut `scripts/build.sh` in wenigen Minuten dieselbe Universal-App aus dem Quellcode, ohne Xcode.",
      "Versionshinweise, ältere Versionen und den Issue-Tracker findest du auf [GitHub](https://github.com/Acid236/foglio/releases). Neugierig, wie es funktioniert? Lies mehr über [die Technik](/technology/).",
    ],
    faq: [
      {
        q: "Ist der Download sicher?",
        a: "Das Disk-Image wird aus dem öffentlichen Quellcode gebaut und auf der GitHub-Release-Seite des Projekts veröffentlicht. Die Warnung von macOS erscheint, weil die App nicht über ein kostenpflichtiges Apple-Konto notarisiert ist – nicht, weil darin etwas gefunden wurde.",
      },
      {
        q: "Wie aktualisiere ich Foglio?",
        a: "Foglio sucht nicht selbst nach Updates, weil es keine Netzwerkverbindungen aufbaut. Lade die neue Version von dieser Seite oder von den GitHub-Releases und ersetze die App im Ordner „Programme“.",
      },
      {
        q: "Wie deinstalliere ich Foglio?",
        a: "Zieh Foglio aus dem Ordner „Programme“ in den Papierkorb. Deine Tabellen sind normale Dateien und bleiben, wo du sie gespeichert hast.",
      },
      {
        q: "Kann ich Foglio zur Standard-App für xlsx-Dateien machen?",
        a: "Ja. Wähle im Finder eine `.xlsx`-Datei aus, wähle Ablage ▸ Informationen, stell unter **Öffnen mit** Foglio ein und klick auf **Alle ändern …**.",
      },
      {
        q: "Gibt es eine Version für iPhone, iPad, Windows oder Linux?",
        a: "Nein. Foglio ist nur für den Mac. Die Engine ist plattformübergreifendes Rust, aber die Oberfläche ist in AppKit geschrieben.",
      },
    ],
  },

  positioning: {
    title: "Wir wollen nicht Excel sein",
    text: [
      "Excel kann tausend Dinge, und manche davon (Makros, Power Pivot, gemeinsames Bearbeiten in Echtzeit) wird Foglio wohl nie können. Das ist in Ordnung: Excel Funktion für Funktion nachzubauen, ist nicht das Ziel.",
      "Das Ziel ist eine Tabellenkalkulation, die sich anfühlt wie ein Teil deines Macs: nativ, schnell, winzig, sparsam mit Arbeitsspeicher und Akku – und in der Lage, **praktisch jede Excel-Datei, die du bekommst,** zu öffnen (unser Anspruch: 99 von 100), ohne sie beim Zurückspeichern zu beschädigen.",
    ],
    points: [
      { title: "Nativ", text: "Eine echte Mac-App in Swift und AppKit. Keine Browser-Engine darin, keine Laufzeitumgebung zu installieren." },
      { title: "Schnell und klein", text: "7,5 MB Download, in einer Viertelsekunde geöffnet, rund 58 MB Arbeitsspeicher mit geöffnetem Blatt." },
      { title: "Kompatibel", text: "Liest und schreibt Standard-`.xlsx` und speichert Formeln in Excels eigener Form – die Datei öffnet überall." },
    ],
  },
  alternativesIndex: {
    h1: "Alternativen zu Excel, Numbers, LibreOffice und Google Sheets",
    intro: [
      "Jede dieser Seiten erklärt, was du gewinnst und was du aufgibst, wenn du von einer bestimmten App zu Foglio wechselst – mit einem Abschnitt dazu, wann du besser bei deiner bisherigen App bleibst. Schritt-für-Schritt-Hilfe findest du in den [Anleitungen](/guides/).",
    ],
  },
  guidesIndex: {
    h1: "Anleitungen für Tabellen auf dem Mac",
    intro: [
      "Praktische Antworten auf typische Tabellenprobleme am Mac: Excel- und CSV-Dateien ohne Excel öffnen, kaputte Umlaute und falsche Spalten reparieren und Formeln in deiner eigenen Sprache schreiben. Jede Anleitung zeigt auch Wege ohne Foglio. Du kommst von einer anderen App? Sieh dir die [Alternativen](/alternatives/) an.",
    ],
  },
};
