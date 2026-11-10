import type { SiteCopy } from "../types";

export const copyFr: SiteCopy = {
  ui: {
    navCompare: "Comparatif",
    navTechnology: "Technologie",
    navAlternatives: "Alternatives",
    navGuides: "Guides",
    navDownload: "Télécharger",
    download: "Télécharger pour Mac",
    downloadSub: "Gratuit · macOS 14+ · Apple silicon et Intel · 7,7 Mo",
    starOnGitHub: "Ajoutez une étoile sur GitHub",
    readMore: "Lire la suite",
    faqTitle: "Questions fréquentes",
    updated: "Mis à jour le",
    languageLabel: "Langue",
    sources: "Sources",
    allReleases: "Toutes les versions et sommes de contrôle",
    smallerIsBetter: "plus petit = mieux",
    lookupTitle: "1 000 RECHERCHEV sur 10 000 lignes",
    lookupSub: "{before} secondes avec le moteur d'origine : environ {times} fois plus rapide",
    tested: "Testé sur un Mac équipé d'une puce M4, macOS 27.",
    opens: "Ouvre",
    arch: [
      "Fenêtres, menus, documents et une grille sur mesure dessinée avec AppKit",
      "Cœur en Rust",
      "Modèle du classeur, moteur de formules IronCalc (fork corrigé), xlsx / xls / ods / csv",
      "Architecture : une app Swift/AppKit appelle un cœur en Rust via une simple interface C",
    ],
    skipToContent: "Aller au contenu",
    footerTagline: "Un tableur gratuit et open source pour Mac. Natif, ultra-léger et compatible Excel.",
    footerLicense: "Foglio est un logiciel libre, sous double licence MIT et Apache-2.0.",
    footerTrademark:
      "Excel est une marque de Microsoft Corporation. Numbers est une marque d'Apple Inc. Google Sheets est une marque de Google LLC. LibreOffice est une marque de The Document Foundation. Foglio est un projet indépendant, sans lien avec aucune de ces sociétés et non approuvé par elles.",
    notFoundTitle: "Cette feuille est vide",
    notFoundText: "La page que vous cherchez n'existe pas ou a été déplacée. Essayez la page d'accueil ou l'un des guides.",
    backHome: "Retour à l'accueil",
    yes: "Oui",
    no: "Non",
    partial: "En partie",
    home: "Page d'accueil de Foglio",
    menu: "Menu",
    openSource: "Open source",
    releases: "Versions",
    issues: "Signaler un problème",
    moreGuides: "Autres guides",
    moreAlternatives: "Autres alternatives",
    screenshotAlt: "Foglio sur Mac avec un fichier Excel ouvert (interface en anglais) : un tableau des ventes mensuelles avec chiffre d'affaires, coûts, bénéfice et marge, une ligne de totaux et un histogramme",
  },

  meta: {
    home: {
      title: "Foglio : tableur gratuit pour Mac compatible Excel",
      description:
        "Foglio, tableur gratuit et open source pour Mac. Ouvre et enregistre les fichiers Excel xlsx, ~500 fonctions, natif et léger : 7,7 Mo. Sans compte.",
      ogTitle: "Foglio — le tableur gratuit, natif et open source pour Mac",
    },
    compare: {
      title: "Foglio vs Excel, Numbers, LibreOffice et Google Sheets",
      description:
        "Foglio vs Excel, Numbers, LibreOffice et Google Sheets sur Mac : prix, taille, vitesse, xlsx, macros, tableaux croisés et confidentialité, avec sources.",
    },
    technology: {
      title: "Comment Foglio est conçu : Swift, AppKit et Rust | Foglio",
      description:
        "Foglio de l'intérieur : app native Swift/AppKit sur un moteur Rust (fork corrigé d'IronCalc). Pourquoi 7,7 Mo, 0,24 s au lancement et des calculs rapides.",
    },
    download: {
      title: "Télécharger Foglio pour Mac : tableur gratuit | Foglio",
      description:
        "Téléchargez Foglio 1.0, tableur gratuit pour macOS 14 ou ultérieur. Universel Apple silicon et Intel, image disque de 7,7 Mo. Étapes d'installation.",
    },
    alternatives: {
      title: "Alternatives à Excel, Numbers et Google Sheets | Foglio",
      description:
        "Une alternative à Excel, Numbers, LibreOffice Calc ou Google Sheets sur Mac ? Des pages honnêtes : quand Foglio convient, et quand mieux vaut s'en passer.",
    },
    guides: {
      title: "Guides tableur Mac : ouvrir xlsx, xls et CSV | Foglio",
      description:
        "Guides pratiques pour les tableurs sur Mac : ouvrir des fichiers Excel et CSV sans Excel, corriger l'encodage, écrire les formules en français, et plus.",
    },
  },

  home: {
    eyebrow: "Gratuit · Open source · Natif macOS",
    h1: "Le tableur gratuit pour Mac qui ouvre vos fichiers Excel",
    subtitle:
      "Foglio est un tableur gratuit pour Mac : une app native, légère et rapide pour le quotidien. Il ouvre et enregistre le `.xlsx`, ouvre le `.xls`, l'`.ods` et le `.csv`, et comprend ~500 fonctions Excel. Pas d'abonnement, pas de compte, pas de publicité.",
    badges: [
      "Gratuit pour toujours, MIT / Apache-2.0",
      "7,7 Mo à télécharger, lancement en 0,24 s",
      "Natif Swift/AppKit, sans Electron",
      "Sans compte, sans télémétrie",
    ],
    statLabels: {
      download: "Taille du téléchargement",
      launch: "Du lancement à la première fenêtre",
      memory: "Mémoire avec une feuille vide",
      open100k: "Ouvrir un xlsx de 100 000 lignes",
      recalc: "Modifier + recalculer 300 000 formules",
      price: "Prix, pour toujours",
    },
    featuresTitle: "Tout ce qu'il faut pour vos tableurs du quotidien",
    featuresIntro:
      "Foglio couvre ce que la plupart des gens font vraiment dans un tableur : listes, budgets, factures, rapports, données reçues dans les fichiers Excel des autres. On s'y retrouve comme dans Excel, et il se comporte comme une vraie app Mac.",
    features: [
      {
        icon: "file",
        title: "Ouvre les fichiers Excel",
        text: "Lit et écrit le `.xlsx` avec la mise en forme, les graphiques, les images, les commentaires et la validation. Ouvre aussi `.xls`, `.xlsb`, `.xlsm`, `.ods`, `.csv` et `.tsv`.",
      },
      {
        icon: "function",
        title: "~500 fonctions Excel",
        text: "SOMME.SI.ENS, RECHERCHEX, FILTRE, TRIER, UNIQUE, LET, LAMBDA, dates, texte, statistiques et finance. 191 des 195 fonctions auditées donnent le même résultat qu'Excel sur tous les tests.",
      },
      {
        icon: "globe",
        title: "Formules en français",
        text: "Sur un Mac en français, tapez `=SOMME(A1:A10)` ou `RECHERCHEV` avec `;` et la virgule décimale. Aussi en italien, allemand et espagnol. Les fichiers restent au format Excel standard.",
      },
      {
        icon: "bolt",
        title: "Rapide sur les gros classeurs",
        text: "Un classeur de 100 000 lignes et 300 000 formules s'ouvre en 1,1 s et se recalcule en 16 ms après une modification, grâce au recalcul incrémental.",
      },
      {
        icon: "feather",
        title: "Minuscule et léger",
        text: "7,7 Mo à télécharger, 20 Mo une fois installé, environ 58 Mo de mémoire avec une feuille vide et 0 % de CPU au repos. Vos ventilateurs restent silencieux.",
      },
      {
        icon: "apple",
        title: "Une vraie app Mac",
        text: "Écrite en Swift et AppKit : éléments récents, onglets de fenêtre, mode sombre, impression et export PDF, zoom au pincement, raccourcis clavier d'Excel pour Mac.",
      },
      {
        icon: "chart",
        title: "Graphiques et images",
        text: "Histogrammes, barres, courbes, secteurs, anneaux, aires et nuages de points, enregistrés dans le `.xlsx`. Insérez, recadrez et compressez des images ; même les vieux cliparts EMF/WMF s'affichent.",
      },
      {
        icon: "filter",
        title: "Outils de données",
        text: "Tri, filtre automatique, rechercher et remplacer, suppression des doublons, conversion de texte en colonnes, listes déroulantes de validation, mise en forme conditionnelle et un tableau croisé simplifié (Summarize by).",
      },
      {
        icon: "lock",
        title: "Confidentiel par conception",
        text: "Pas de compte, pas de publicité, pas de statistiques d'usage. Foglio n'établit aucune connexion réseau de lui-même : vos fichiers restent sur votre Mac.",
      },
    ],
    speedTitle: "Si léger qu'on oublie qu'il est là",
    speedIntro:
      "Foglio n'embarque ni moteur de navigateur, ni environnement Java, ni framework tiers. C'est pour cela qu'il se télécharge en quelques secondes et s'ouvre avant que vous ayez bougé la souris.",
    speedNote:
      "Chiffres de Foglio mesurés sur un MacBook Air M4 (16 Go), macOS 27, Foglio 1.0, novembre 2026 : médianes de plusieurs essais, mémoire telle que rapportée par `footprint`. Les tailles des concurrents sont celles indiquées par leurs boutiques et pages de téléchargement en novembre 2026.",
    freeTitle: "Un tableur gratuit pour Mac, et ça le restera",
    freeText: [
      "Foglio n'a ni prix, ni version d'essai, ni abonnement, ni offre payante. Vous n'avez besoin ni d'un identifiant Apple, ni d'un compte Microsoft, ni d'un compte Google pour l'utiliser, et il n'y a aucune publicité.",
      "Le code source est sur [GitHub](https://github.com/GetFoglio/foglio) sous licences MIT et Apache-2.0 : tout le monde peut le lire, le compiler, le corriger ou le forker. Vos tableaux sont des fichiers `.xlsx` standard qui s'ouvrent dans Excel, Numbers, LibreOffice et Google Sheets : aucun enfermement.",
    ],
    compareTitle: "Face aux autres",
    compareText:
      "Excel a plus de fonctionnalités, Google Sheets permet la collaboration en direct, Numbers a de superbes modèles. Foglio est l'option gratuite, légère et native qui ouvre quand même correctement les fichiers Excel. Le [comparatif complet](/compare/) donne tous les détails, y compris là où les autres font mieux.",
    techTitle: "Conçu comme une app Mac doit l'être",
    techText:
      "Une interface Swift/AppKit avec une grille sur mesure, au-dessus d'un moteur de calcul en Rust (un fork corrigé d'IronCalc) intégré comme simple bibliothèque statique. Découvrez [comment Foglio est conçu](/technology/) et pourquoi il est si léger et rapide.",
    formatsTitle: "Ouvre les fichiers qu'on vous envoie",
    formatsText:
      "`.xlsx` et `.xlsm` d'Excel, anciens `.xls` et `.xlsb` binaires, `.ods` de LibreOffice, et `.csv` / `.tsv` avec détection automatique de l'encodage, du séparateur et du séparateur décimal. Enregistre en `.xlsx` et `.xlsm` (macros conservées, jamais exécutées), CSV et TSV, et exporte en PDF. Voir les guides pour [ouvrir un fichier xlsx sur Mac sans Excel](/guides/open-xlsx-on-mac-without-excel/), [ouvrir un ancien fichier .xls](/guides/open-xls-on-mac/) et [ouvrir un CSV sur Mac](/guides/open-csv-on-mac/).",
    alternativesTitle: "Vous venez d'une autre app ?",
    alternativesText:
      "Des conseils honnêtes si vous utilisez [Excel pour Mac](/alternatives/excel-for-mac/), [Numbers](/alternatives/numbers/), [LibreOffice Calc](/alternatives/libreoffice/) ou [Google Sheets](/alternatives/google-sheets/), y compris quand il vaut mieux les garder. Tout est sur la [page des alternatives](/alternatives/).",
    ctaTitle: "Essayez-le sur vos propres tableaux",
    ctaText:
      "7,7 Mo à télécharger, et c'est gratuit. Foglio 1.0 est une première version : gardez une copie de vos fichiers importants pendant que vous l'essayez.",
    faq: [
      {
        q: "Foglio est-il vraiment gratuit ?",
        a: "Oui. Pas de prix, pas de période d'essai, pas d'abonnement, pas d'achat intégré et pas de publicité. Foglio est un logiciel open source sous licences MIT et Apache-2.0.",
      },
      {
        q: "Foglio peut-il ouvrir et enregistrer des fichiers Excel ?",
        a: "Oui. Il lit et écrit le `.xlsx` avec la mise en forme, les graphiques, les images, les commentaires, la validation des données et la mise en forme conditionnelle. Il ouvre aussi `.xls`, `.xlsb`, `.xlsm` et `.ods`, ainsi que les fichiers texte CSV/TSV. Il enregistre en `.xlsx` ou `.xlsm` (en conservant les macros, qu'il n'exécute jamais), CSV ou TSV, et exporte en PDF.",
      },
      {
        q: "Remplace-t-il complètement Microsoft Excel ?",
        a: "Pour les tableurs du quotidien, souvent oui. Pour certains usages, non : Foglio n'exécute pas les macros (VBA), n'a pas de vrais tableaux croisés dynamiques (il propose à la place *Summarize by*, plus simple), ignore les formes et les SmartArt, et ne peut pas ouvrir les fichiers protégés par mot de passe. Le [comparatif](/compare/) liste les différences.",
      },
      {
        q: "Sur quels Mac fonctionne-t-il ?",
        a: "Sur tout Mac avec macOS 14 Sonoma ou ultérieur, Apple silicon ou Intel. C'est une seule app universelle.",
      },
      {
        q: "Pourquoi macOS dit-il que Foglio vient d'un développeur non identifié ?",
        a: "Foglio 1.0 n'est pas signé avec un identifiant Apple Developer payant, donc macOS demande une confirmation à la première ouverture. Sur macOS 15 ou ultérieur, allez dans Réglages Système ▸ Confidentialité et sécurité et cliquez sur **Ouvrir quand même** ; sur macOS 14, faites un clic droit sur l'app et choisissez **Ouvrir**. La [page de téléchargement](/download/) détaille chaque étape.",
      },
      {
        q: "Foglio collecte-t-il des données ou demande-t-il un compte ?",
        a: "Non. Pas de compte, pas de connexion, pas de statistiques d'usage, pas de télémétrie. Foglio n'établit aucune connexion réseau de lui-même ; il n'ouvre une page web que si vous cliquez sur un lien hypertexte dans une cellule.",
      },
      {
        q: "Puis-je saisir les formules en français ?",
        a: "Oui. Foglio suit la langue et la région de votre Mac : sur un Mac en français, vous tapez `=SOMME(A1:A10;B2)`, `SI` ou `RECHERCHEV` avec des points-virgules et la virgule décimale, comme dans Excel en français. L'italien, l'allemand et l'espagnol sont aussi pris en charge. Le fichier enregistre toujours la forme anglaise standard, il s'ouvre donc correctement partout. Les menus de Foglio, eux, sont en anglais (ou en italien). La [liste des fonctions Excel en français et en anglais](/guides/excel-functions-italian-english/) aide à suivre les tutoriels en anglais.",
      },
      {
        q: "Foglio est-il terminé ?",
        a: "Foglio 1.0 gère les tableurs du quotidien de bout en bout et est couvert par 83 tests automatisés de l'interface, mais c'est une première version. Gardez une copie de vos fichiers importants et signalez les problèmes sur [GitHub](https://github.com/GetFoglio/foglio/issues).",
      },
    ],
  },

  compare: {
    h1: "Foglio vs Excel, Numbers, LibreOffice et Google Sheets",
    intro: [
      "Il n'existe pas de meilleur tableur pour Mac dans l'absolu. Il y a celui qui correspond à ce que vous faites. Cette page compare Foglio aux quatre apps entre lesquelles les utilisateurs de Mac hésitent le plus souvent, et elle se veut honnête : quand une autre app fait mieux, le tableau le dit.",
      "En bref : **Excel** est le plus complet et le plus cher ; **Numbers** est gratuit et élégant mais convertit les fichiers Excel ; **LibreOffice Calc** est gratuit et puissant mais lourd et pas natif sur Mac ; **Google Sheets** est gratuit et collaboratif mais vit dans un navigateur et exige un compte Google. **Foglio** est gratuit, open source, minuscule et natif, et modifie directement le `.xlsx`, avec moins de fonctions avancées qu'Excel.",
    ],
    tableTitle: "Foglio, Excel, Numbers, LibreOffice et Google Sheets côte à côte",
    tableNote:
      "Prix et fonctionnalités vérifiés sur les pages officielles des éditeurs en novembre 2026 (sources ci-dessous) ; les prix d'Excel et de Numbers sont les prix publics en France, TVA comprise, et peuvent changer. Les chiffres de Foglio ont été mesurés sur un MacBook Air M4, macOS 27, Foglio 1.0.",
    sections: [
      {
        heading: "Lequel choisir ?",
        body: [
          "Choisissez l'outil selon le besoin, pas selon la marque. La plupart des gens n'utilisent qu'une petite partie de ce que ces apps savent faire.",
        ],
        bullets: [
          "**Choisissez Foglio** si vous voulez une app gratuite, rapide et respectueuse de votre vie privée, qui ouvre et enregistre les fichiers Excel sur votre Mac sans compte ni abonnement.",
          "**Choisissez Excel** si vous dépendez des macros (VBA), de Power Query, de vrais tableaux croisés dynamiques, de graphiques avancés, ou si vos fichiers doivent correspondre au pixel près à ceux de votre entreprise.",
          "**Choisissez Numbers** si vous créez des documents qui doivent être beaux, surtout pour vous, et vivez dans l'écosystème Apple, iPhone et iPad compris.",
          "**Choisissez LibreOffice Calc** si vous voulez une app gratuite avec tableaux croisés dynamiques, macros et une foule de fonctionnalités, et qu'une app lourde et non native ne vous dérange pas.",
          "**Choisissez Google Sheets** si plusieurs personnes modifient la même feuille en même temps et que travailler dans un navigateur avec un compte Google vous convient.",
        ],
      },
      {
        heading: "Là où Foglio gagne",
        body: [
          "Foglio est de loin l'app la plus légère de ce comparatif : 7,7 Mo à télécharger, contre des centaines de mégaoctets ou des gigaoctets pour les alternatives de bureau. Il affiche une fenêtre utilisable en 0,24 s, occupe environ 58 Mo de mémoire avec une feuille vide et reste à 0 % de CPU au repos.",
          "Il est gratuit sans conditions, open source, et fonctionne entièrement hors ligne, sans compte. Contrairement à Numbers, il modifie les fichiers `.xlsx` tels quels au lieu de les convertir, et sur un Mac en français, en italien, en allemand ou en espagnol, vous tapez les formules avec les mêmes noms de fonctions localisés qu'Excel.",
        ],
      },
      {
        heading: "Là où les autres gagnent",
        body: [
          "Excel est bien plus complet : macros, Power Query, vrais tableaux croisés dynamiques, beaucoup plus de types de graphiques, et c'est la référence pour le comportement de tout fichier Excel. LibreOffice a aussi des tableaux croisés et des macros, plus des outils de dessin et beaucoup plus de formats d'import et d'export. Google Sheets offre la meilleure collaboration en temps réel et fonctionne sur tout appareil doté d'un navigateur. Numbers et Excel ont des apps iPhone et iPad ; Foglio est réservé au Mac.",
          "Foglio est une version 1.0 développée par un petit projet open source. Les grandes suites ont des décennies de finition derrière elles. Si un fichier compte, gardez-en une copie.",
        ],
      },
    ],
    faq: [
      {
        q: "Quelle est la meilleure alternative gratuite à Excel sur Mac ?",
        a: "Cela dépend de vos besoins. Foglio est l'option gratuite la plus légère qui modifie directement le `.xlsx`. LibreOffice Calc est l'app de bureau gratuite la plus complète. Google Sheets est le meilleur pour collaborer. Numbers est préinstallé et gratuit, mais convertit les fichiers Excel dans son propre format. Notre [sélection de tableurs gratuits](/guides/free-spreadsheet-apps-for-mac/) présente d'autres options.",
      },
      {
        q: "Foglio prend-il en charge les macros ou VBA ?",
        a: "Non. Foglio ouvre les fichiers `.xlsm` mais n'exécute pas leurs macros. Si votre travail dépend de VBA, utilisez Microsoft Excel ; LibreOffice peut aussi exécuter une partie du code VBA.",
      },
      {
        q: "Foglio a-t-il des tableaux croisés dynamiques ?",
        a: "Pas encore de vrais tableaux croisés. *Summarize by* crée une feuille de synthèse dynamique à base de formules SOMME.SI.ENS et NB.SI.ENS, ce qui couvre les cas simples. Excel, LibreOffice, Numbers et Google Sheets ont tous des tableaux croisés dynamiques.",
      },
      {
        q: "Plusieurs personnes peuvent-elles modifier un fichier Foglio en même temps ?",
        a: "Non. Foglio est une app de bureau pour une personne à la fois. Pour la coédition en direct, Google Sheets ou Excel avec OneDrive sont de meilleurs choix.",
      },
      {
        q: "Les prix des concurrents sont-ils à jour ?",
        a: "Ils ont été vérifiés sur les pages officielles en novembre 2026 et sont les prix publics en France, TVA comprise. Les prix changent et varient selon le pays : suivez les liens vers les sources avant d'acheter.",
      },
    ],
  },

  technology: {
    h1: "Comment Foglio est conçu, et pourquoi il est si léger et rapide",
    intro: [
      "La plupart des apps de bureau modernes embarquent une copie d'un navigateur web, un environnement Java ou un gros framework multiplateforme. Foglio n'embarque rien de tout cela. C'est une app Mac native en Swift et AppKit, avec un moteur de tableur écrit en Rust et lié directement à l'app.",
      "Cette page explique l'architecture deux fois : d'abord simplement, puis avec assez de détails pour qu'un développeur s'y retrouve dans le [code source](https://github.com/GetFoglio/foglio).",
    ],
    sections: [
      {
        heading: "La version courte",
        body: [
          "Voyez Foglio comme deux parties. Celle que vous voyez (fenêtres, menus, grille de cellules) est écrite avec les outils d'Apple, elle ressemble donc et se comporte comme toutes les autres apps Mac. Celle qui fait les calculs (lire les fichiers, comprendre les formules, recalculer) est un moteur séparé écrit en Rust, un langage qui produit des programmes très rapides et compacts.",
          "Les deux parties communiquent par une petite interface toute simple. Rien entre les deux : pas de navigateur caché, pas de machine virtuelle, pas d'environnement d'exécution à télécharger. C'est pourquoi l'app entière pèse 7,7 Mo au téléchargement, se lance en 0,24 s et n'a besoin que d'environ 58 Mo de mémoire avec une feuille vide.",
        ],
      },
      {
        heading: "L'app Mac : Swift et AppKit",
        body: [
          "L'interface est écrite en Swift avec AppKit, le framework derrière le Finder et la plupart des apps d'Apple. Les documents sont de vrais documents macOS : éléments récents, Enregistrer sous, Revenir à, Dupliquer, onglets de fenêtre, plein écran, mode sombre, impression et export PDF fonctionnent comme vous l'attendez.",
          "La feuille elle-même est une grille `NSView` sur mesure, pas un contrôle de tableau. Elle ne demande au moteur que les cellules visibles, par lots prêts à dessiner, ce qui garde un défilement fluide sur des feuilles de centaines de milliers de lignes. Les graphiques, les images et la barre de formule sont aussi dessinés par l'app.",
          "Foglio contient aussi son propre lecteur de métafichiers EMF et WMF, le format d'images vectorielles des anciens documents Office (cliparts, équations MathType, diagrammes Visio collés). Les images que d'autres apps Mac affichent comme des cadres vides sont dessinées correctement et réenregistrées sans modification.",
        ],
      },
      {
        heading: "Le moteur : Rust et un IronCalc corrigé",
        body: [
          "Les formules sont analysées et évaluées par [IronCalc](https://github.com/ironcalc/IronCalc), un moteur de tableur open source en Rust. Foglio utilise un fork corrigé d'IronCalc 0.9.1, où chaque modification est signalée et documentée dans le dépôt.",
          "Le fork ajoute le **recalcul incrémental** : quand vous modifiez une cellule, seules les formules qui en dépendent sont recalculées, et non tout le classeur. Sur un classeur de 100 000 lignes et 300 000 formules, une modification prend 16 ms ; un recalcul complet prend 64 ms.",
          "Il ajoute aussi les **recherches indexées**. La première RECHERCHEV, EQUIV ou RECHERCHEX sur une plage la lit une fois et construit un index de hachage ; les recherches suivantes ne demandent qu'une seule consultation. 1 000 RECHERCHEV exactes sur 10 000 lignes sont passées de 1 703 ms dans IronCalc d'origine à 1,3 ms dans le fork de Foglio. Le fork corrige aussi une douzaine de fonctions, si bien que 191 des 195 fonctions de l'audit de compatibilité de Foglio donnent le même résultat qu'Excel sur tous les tests.",
        ],
        bullets: [
          "Les anciens fichiers `.xls`, les `.xlsb` binaires et les `.ods` de LibreOffice sont lus avec [calamine](https://github.com/tafia/calamine), un lecteur rapide en Rust.",
          "Les fichiers CSV et TSV passent par un importateur en Rust qui détecte l'encodage du texte, le séparateur et le séparateur décimal.",
          "Les formules saisies en français, en italien, en allemand ou en espagnol sont traduites dans la forme anglaise standard d'Excel avant d'être enregistrées.",
        ],
      },
      {
        heading: "Le pont : une simple interface C",
        body: [
          "Le moteur Rust est compilé en bibliothèque statique et expose une petite interface C (`foglio_core.h`) : ouvrir et enregistrer un fichier, modifier une cellule, renvoyer un lot de cellules visibles. Swift l'appelle directement via un en-tête de pont (bridging header). Pas de liaisons générées, pas de frameworks, pas de messages entre processus : un appel au moteur coûte à peu près autant qu'un appel de fonction ordinaire.",
        ],
      },
      {
        heading: "Pas de projet Xcode",
        body: [
          "Foglio se compile avec deux commandes : `cargo` compile la bibliothèque Rust et `swiftc` compile l'app et fait l'édition de liens. Un script shell produit une app universelle pour Apple silicon et Intel et l'emballe dans une image disque avec l'outil `hdiutil` d'Apple. Il vous faut les Command Line Tools de Xcode et Rust ; Xcode complet n'est pas nécessaire.",
          "Moins de couches, c'est moins de choses qui peuvent casser, des compilations plus rapides et un projet que chacun peut lire de bout en bout.",
        ],
      },
      {
        heading: "Testé avec de vrais événements clavier et souris",
        body: [
          "Foglio compte 83 tests d'interface qui pilotent la vraie app avec de vrais événements clavier et souris : saisie de formules, recopie de plages, tri, annulation, enregistrement et réouverture de fichiers. Les importateurs de fichiers et le moteur de formules ont leurs propres suites de tests en Rust, et un mode spécial revérifie chaque recalcul incrémental par rapport à un recalcul complet.",
        ],
      },
      {
        heading: "Pourquoi Foglio est si léger et rapide",
        body: [
          "Une app Electron transporte une copie complète du navigateur Chromium, souvent bien plus de 100 Mo avant même de faire quoi que ce soit. Une suite Java ou multiplateforme transporte son environnement d'exécution et sa propre boîte à outils d'interface. Foglio ne transporte que son propre code et utilise les frameworks déjà présents sur chaque Mac.",
          "Le cœur Rust est compilé avec optimisation complète à l'édition de liens et débarrassé des symboles de débogage. Résultat : une app universelle d'environ 20 Mo sur disque, 7,7 Mo en téléchargement compressé, qui reste à 0 % de CPU au repos.",
        ],
      },
    ],
    faq: [
      {
        q: "Foglio est-il une app Electron ou une app web ?",
        a: "Non. C'est une app AppKit native écrite en Swift. Elle ne contient aucun moteur de navigateur.",
      },
      {
        q: "Fonctionne-t-il nativement sur Apple silicon ?",
        a: "Oui. Foglio est une app universelle avec du code natif pour Apple silicon (arm64) et Intel (x86_64).",
      },
      {
        q: "Puis-je compiler Foglio moi-même ?",
        a: "Oui. Installez les Command Line Tools de Xcode et Rust, puis lancez `scripts/build.sh`. Le [README](https://github.com/GetFoglio/foglio#building-from-source) donne les commandes exactes.",
      },
      {
        q: "Les modifications d'IronCalc sont-elles reversées au projet d'origine ?",
        a: "Le fork est open source sous les mêmes licences qu'IronCalc, et chaque modification est marquée d'un commentaire `Foglio fork:` et décrite dans `third_party/README.md`, pour pouvoir être relue et réutilisée.",
      },
    ],
  },

  download: {
    h1: "Télécharger Foglio pour Mac",
    intro: [
      "Foglio 1.0 est gratuit. Une seule image disque universelle fonctionne sur tous les Mac avec macOS 14 Sonoma ou ultérieur, Apple silicon comme Intel.",
      "C'est une première version : elle gère les tableurs du quotidien de bout en bout, mais gardez une copie des fichiers importants.",
    ],
    steps: [
      {
        title: "Téléchargez l'image disque",
        text: "Cliquez sur le bouton de téléchargement pour obtenir `Foglio-1.0.dmg` (7,7 Mo) depuis les versions publiées du projet sur GitHub.",
      },
      {
        title: "Glissez Foglio dans Applications",
        text: "Ouvrez l'image disque et glissez l'icône de Foglio sur le raccourci Applications à côté. Puis éjectez l'image disque.",
      },
      {
        title: "Ouvrez-le une première fois",
        text: "macOS demande une confirmation la première fois, car Foglio n'est pas signé avec un identifiant Apple Developer payant. Les étapes sont ci-dessous ; vous ne le faites qu'une fois.",
      },
      {
        title: "Ouvrez vos tableaux",
        text: "Faites un double-clic sur un fichier `.xlsx` et choisissez Foglio dans « Ouvrir avec », ou glissez les fichiers sur l'icône de Foglio dans le Dock.",
      },
    ],
    gatekeeperTitle: "« Développeur non identifié » : ouvrir Foglio la première fois",
    gatekeeperText: [
      "Foglio 1.0 est signé ad hoc, et non signé et notarié avec un compte Apple Developer payant : Gatekeeper ne peut donc pas s'en porter garant et affiche un avertissement à la première ouverture. C'est normal pour les petits projets open source, et vous pouvez lire chaque ligne du [code source](https://github.com/GetFoglio/foglio) ou compiler l'app vous-même.",
      "**macOS 15 Sequoia ou ultérieur :** faites un double-clic sur Foglio et fermez l'avertissement. Ouvrez **Réglages Système ▸ Confidentialité et sécurité**, faites défiler jusqu'au message concernant Foglio et cliquez sur **Ouvrir quand même**, puis confirmez avec votre mot de passe ou Touch ID.",
      "**macOS 14 Sonoma :** dans Applications, faites un clic droit (ou Contrôle-clic) sur Foglio, choisissez **Ouvrir**, puis cliquez sur **Ouvrir** dans la fenêtre de dialogue.",
      "Ensuite, Foglio s'ouvre normalement, comme n'importe quelle autre app.",
    ],
    requirementsTitle: "Configuration requise",
    requirements: [
      "macOS 14 Sonoma ou ultérieur",
      "Mac Apple silicon ou Intel (app universelle)",
      "Environ 20 Mo d'espace disque",
      "Aucun compte ni connexion Internet nécessaire",
      "Interface en anglais (ou en italien) ; formules en français sur un Mac en français",
    ],
    sourceTitle: "Vous préférez le compiler vous-même ?",
    sourceText: [
      "Foglio est open source sous licences MIT et Apache-2.0. Avec les Command Line Tools de Xcode et Rust installés, `scripts/build.sh` compile la même app universelle à partir des sources en quelques minutes, sans Xcode.",
      "Notes de version, anciennes versions et suivi des problèmes sont sur [GitHub](https://github.com/GetFoglio/foglio/releases). Curieux de savoir comment ça marche ? Lisez la page sur [la technologie](/technology/).",
    ],
    faq: [
      {
        q: "Le téléchargement est-il sûr ?",
        a: "L'image disque est compilée à partir du code source public et publiée sur la page des versions du projet sur GitHub. L'avertissement de macOS apparaît parce que l'app n'est pas notariée avec un compte Apple payant, pas parce que quoi que ce soit y a été détecté.",
      },
      {
        q: "Comment mettre à jour Foglio ?",
        a: "Foglio ne vérifie pas lui-même les mises à jour, puisqu'il n'établit aucune connexion réseau. Téléchargez la nouvelle version depuis cette page ou depuis les versions GitHub et remplacez l'app dans Applications.",
      },
      {
        q: "Comment le désinstaller ?",
        a: "Glissez Foglio d'Applications vers la Corbeille. Vos tableaux sont des fichiers ordinaires et restent là où vous les avez enregistrés.",
      },
      {
        q: "Puis-je faire de Foglio l'app par défaut pour les fichiers xlsx ?",
        a: "Oui. Sélectionnez un fichier `.xlsx` dans le Finder, choisissez Fichier ▸ Lire les informations, sélectionnez Foglio sous **Ouvrir avec** et cliquez sur **Tout modifier…**.",
      },
      {
        q: "Existe-t-il une version pour iPhone, iPad, Windows ou Linux ?",
        a: "Non. Foglio est uniquement une app Mac. Le moteur en Rust est multiplateforme, mais l'interface est écrite avec AppKit.",
      },
    ],
  },

  positioning: {
    title: "Nous n'essayons pas d'être Excel",
    text: [
      "Excel fait mille choses, et certaines (macros, Power Pivot, coédition en temps réel) Foglio ne les fera probablement jamais. Ce n'est pas grave : copier Excel fonction par fonction n'est pas l'objectif.",
      "L'objectif, c'est un tableur qui fasse partie de votre Mac : natif, rapide, minuscule, économe en mémoire et en batterie, et capable d'ouvrir **pratiquement tous les fichiers Excel que vous recevez** (nous visons 99 sur 100) sans les abîmer quand vous les réenregistrez.",
    ],
    points: [
      { title: "Natif", text: "Une vraie app Mac en Swift et AppKit. Aucun moteur de navigateur caché, aucun environnement d'exécution à installer." },
      { title: "Rapide et léger", text: "7,7 Mo à télécharger, ouverture en un quart de seconde, environ 58 Mo de mémoire avec une feuille ouverte." },
      { title: "Compatible", text: "Lit et écrit le `.xlsx` standard et garde vos formules dans la forme d'Excel : le fichier s'ouvre partout." },
    ],
  },
  alternativesIndex: {
    h1: "Alternatives à Excel, Numbers, LibreOffice et Google Sheets sur Mac",
    intro: [
      "Chacune de ces pages explique ce que vous gagnez et ce que vous perdez en passant à Foglio depuis une app précise, avec une partie sur les cas où il vaut mieux garder ce que vous avez. Pour une aide pas à pas, consultez les [guides](/guides/).",
    ],
  },
  guidesIndex: {
    h1: "Guides des tableurs sur Mac",
    intro: [
      "Des réponses pratiques aux problèmes courants avec les tableurs sur Mac : ouvrir des fichiers Excel et CSV sans Excel, corriger les caractères bizarres et les colonnes mal découpées, écrire les formules en français. Chaque guide indique aussi comment faire sans Foglio. Vous venez d'une autre app ? Consultez les [alternatives](/alternatives/).",
    ],
  },
};
