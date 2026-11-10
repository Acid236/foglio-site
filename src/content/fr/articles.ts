import type { Article } from "../types";

const UPDATED = "2026-11-09";

/** Excel function names: [English, French]. Names from the formula engine's fr locale (IronCalc language data). */
type Fn = [string, string];

const FN_MATH: Fn[] = [
  ["SUM", "SOMME"],
  ["SUMIF", "SOMME.SI"],
  ["SUMIFS", "SOMME.SI.ENS"],
  ["SUMPRODUCT", "SOMMEPROD"],
  ["AVERAGE", "MOYENNE"],
  ["AVERAGEIF", "MOYENNE.SI"],
  ["COUNT", "NB"],
  ["COUNTA", "NBVAL"],
  ["COUNTBLANK", "NB.VIDE"],
  ["COUNTIF", "NB.SI"],
  ["COUNTIFS", "NB.SI.ENS"],
  ["ROUND", "ARRONDI"],
  ["ROUNDUP", "ARRONDI.SUP"],
  ["ROUNDDOWN", "ARRONDI.INF"],
];
const FN_LOGIC: Fn[] = [
  ["IF", "SI"],
  ["IFS", "SI.CONDITIONS"],
  ["IFERROR", "SIERREUR"],
  ["IFNA", "SI.NON.DISP"],
  ["AND", "ET"],
  ["OR", "OU"],
  ["NOT", "NON"],
];
const FN_LOOKUP: Fn[] = [
  ["VLOOKUP", "RECHERCHEV"],
  ["HLOOKUP", "RECHERCHEH"],
  ["XLOOKUP", "RECHERCHEX"],
  ["INDEX", "INDEX"],
  ["MATCH", "EQUIV"],
  ["INDIRECT", "INDIRECT"],
  ["OFFSET", "DECALER"],
  ["CHOOSE", "CHOISIR"],
  ["FILTER", "FILTRE"],
  ["SORT", "TRIER"],
  ["UNIQUE", "UNIQUE"],
];
const FN_TEXT: Fn[] = [
  ["LEFT", "GAUCHE"],
  ["RIGHT", "DROITE"],
  ["MID", "STXT"],
  ["LEN", "NBCAR"],
  ["TRIM", "SUPPRESPACE"],
  ["UPPER", "MAJUSCULE"],
  ["LOWER", "MINUSCULE"],
  ["SUBSTITUTE", "SUBSTITUE"],
  ["CONCATENATE", "CONCATENER"],
  ["CONCAT", "CONCAT"],
  ["TEXTJOIN", "JOINDRE.TEXTE"],
  ["TEXT", "TEXTE"],
  ["VALUE", "CNUM"],
];
const FN_DATE: Fn[] = [
  ["TODAY", "AUJOURDHUI"],
  ["NOW", "MAINTENANT"],
  ["YEAR", "ANNEE"],
  ["MONTH", "MOIS"],
  ["DAY", "JOUR"],
  ["WEEKDAY", "JOURSEM"],
  ["EDATE", "MOIS.DECALER"],
  ["EOMONTH", "FIN.MOIS"],
  ["NETWORKDAYS", "NB.JOURS.OUVRES"],
];
const fnList = (list: Fn[]) => list.map(([en, fr]) => `\`${en}\` → \`${fr}\``);

export const alternatives: Article[] = [
  // ───────────────────────────────────────────────────────────────────
  {
    slug: "excel-for-mac",
    meta: {
      title: "Alternative gratuite à Excel pour Mac (xlsx) | Foglio",
      description:
        "Une alternative gratuite à Excel pour Mac, sans abonnement Microsoft 365 ? Foglio, tableur open source, ouvre et enregistre les xlsx. Ce qu'il fait, ou pas.",
    },
    h1: "Une alternative gratuite à Excel pour Mac qui ouvre vos fichiers xlsx",
    intro: [
      "Microsoft Excel pour Mac est excellent, mais il n'est pas gratuit. Pour modifier des feuilles de calcul dans l'app de bureau, il faut un abonnement Microsoft 365 (en France, Personnel coûte 99 € par an et Famille 129 €) ou une licence perpétuelle Microsoft Famille 2024 (149 € sur la boutique Microsoft française lors de notre vérification en novembre 2026). Si vous ouvrez seulement quelques fois par mois un budget, une facture ou un rapport reçu par e-mail, c'est cher payé.",
      "Foglio est une alternative gratuite à Excel pour Mac : un tableur open source qui lit et écrit les mêmes fichiers `.xlsx`, comprend environ 500 fonctions Excel et reprend les raccourcis clavier d'Excel pour Mac. Cette page explique ce que vous gardez, ce que vous perdez, et quand Excel reste le bon choix.",
    ],
    sections: [
      {
        heading: "Ce que vous gardez en changeant",
        body: [
          "Foglio a été conçu pour paraître familier à quiconque a déjà utilisé Excel. La grille, la barre de formule avec la zone Nom, les onglets de feuilles, les sommes dans la barre d'état et les menus sont là où vous les attendez. La plupart des raccourcis sont identiques : ⌘1 pour le format de cellule, ⌘D pour recopier vers le bas, F4 pour faire défiler les références `$`, ⇧⌘T pour la somme automatique, ⌘K pour un lien hypertexte.",
        ],
        bullets: [
          "**Vos fichiers.** Le `.xlsx` s'ouvre et s'enregistre avec polices, remplissages, bordures, formats de nombre, cellules fusionnées, largeurs de colonnes, volets figés, commentaires, validation des données, mise en forme conditionnelle, liens hypertexte, graphiques et images.",
          "**Vos formules.** Environ 500 fonctions, dont SOMME.SI.ENS, RECHERCHEX, INDEX/EQUIV, FILTRE, TRIER, UNIQUE, LET et LAMBDA. Dans l'audit de compatibilité de Foglio, 191 des 195 fonctions courantes donnent le même résultat qu'Excel sur tous les tests.",
          "**Votre langue.** Sur un Mac en français, vous tapez les formules avec les noms localisés d'Excel (`=SOMME(A1:A10)`, `=RECHERCHEV(…)`), avec le séparateur `;` et la virgule décimale. Cela marche aussi en italien, en allemand et en espagnol. Le fichier enregistre la forme anglaise standard, il s'ouvre donc dans n'importe quel Excel.",
          "**Vos habitudes.** Poignée de recopie, collage spécial, filtre automatique, tri sur plusieurs niveaux, rechercher et remplacer, atteindre, suppression des doublons, conversion de texte en colonnes, volets figés, affichage des formules et explorateur de fonctions : tout y est.",
        ],
      },
      {
        heading: "Ce que vous gagnez",
        body: [
          "**C'est gratuit, pour de bon.** Pas d'abonnement, pas d'essai, pas de compte, pas de publicité. Foglio est sous licences MIT et Apache-2.0, et le code source est sur [GitHub](https://github.com/GetFoglio/foglio).",
          "**C'est minuscule et rapide.** 7,7 Mo à télécharger et environ 20 Mo une fois installé, contre plus d'un gigaoctet pour Excel seul. Foglio affiche une fenêtre utilisable en 0,24 s et occupe environ 58 Mo de mémoire avec une feuille vide. Un classeur de 100 000 lignes et 300 000 formules s'ouvre en 1,1 s et se recalcule en 16 ms après une modification.",
          "**Tout reste sur votre Mac.** Foglio n'établit aucune connexion réseau de lui-même et n'a pas de télémétrie. Vous n'avez à vous connecter à rien pour ouvrir un fichier.",
        ],
      },
      {
        heading: "Ce que vous perdez",
        body: [
          "Foglio 1.0 est la première version d'un petit projet, et il n'essaie pas de refaire tout Excel. Avant de résilier un abonnement, vérifiez que votre travail ne dépend d'aucun de ces points :",
        ],
        bullets: [
          "**Macros et VBA.** Les fichiers `.xlsm` s'ouvrent et s'enregistrent avec leurs macros, mais les macros ne sont jamais exécutées.",
          "**Tableaux croisés dynamiques.** Pas encore de vrais tableaux croisés. *Summarize by* crée une feuille de synthèse dynamique à base de formules SOMME.SI.ENS et NB.SI.ENS, ce qui couvre les cas simples.",
          "**Power Query, connexions de données et compléments.** Non disponibles.",
          "**Formes, zones de texte et SmartArt.** Ignorés à l'ouverture d'un fichier. Les graphiques et les images sont conservés.",
          "**Barres de données, jeux d'icônes et graphiques sparkline.** Pas encore affichés ; les autres règles de mise en forme conditionnelle et les nuances de couleurs fonctionnent.",
          "**Classeurs protégés par mot de passe.** Impossible de les ouvrir.",
          "**Commentaires en fil de discussion** affichés comme de simples notes, et pas de coédition en temps réel.",
          "**Graphiques** limités aux types courants (histogramme, barres, courbes, secteurs, anneau, aires, nuage de points, empilés), pas toute la gamme d'Excel.",
        ],
      },
      {
        heading: "D'autres façons gratuites d'utiliser des fichiers Excel sur Mac",
        body: [
          "Foglio n'est pas la seule option, et selon vos besoins une autre pourrait mieux vous convenir :",
        ],
        bullets: [
          "**Excel pour le web** est gratuit avec un compte Microsoft : c'est le vrai Excel, dans un navigateur. Vos fichiers sont stockés sur OneDrive, et certaines fonctions de la version de bureau manquent.",
          "**Apple Numbers** est gratuit et préinstallé sur de nombreux Mac. Il convertit les fichiers `.xlsx` dans son propre format et réexporte vers Excel quand vous le demandez.",
          "**LibreOffice Calc** est gratuit, open source et très complet, tableaux croisés et macros compris, mais il est lourd à télécharger et ne ressemble pas à une app Mac native, ni ne se comporte comme telle.",
          "**Google Sheets** est gratuit avec un compte Google et c'est le meilleur choix quand plusieurs personnes modifient en même temps.",
        ],
        sub: [
          {
            heading: "Comment ils se comparent",
            body: [
              "Le [tableau comparatif complet](/compare/) met les cinq côte à côte, avec les sources de chaque prix et de chaque taille, et la [sélection de tableurs gratuits](/guides/free-spreadsheet-apps-for-mac/) en ajoute quelques-uns. Il existe aussi des pages dédiées à [Numbers](/alternatives/numbers/), [LibreOffice](/alternatives/libreoffice/) et [Google Sheets](/alternatives/google-sheets/).",
            ],
          },
        ],
      },
      {
        heading: "Quand garder Excel",
        body: [
          "Continuez à payer Excel si votre travail repose sur des macros, Power Query ou des tableaux croisés dynamiques, si vous échangez des modèles complexes avec des collègues qui ont besoin que tout passe à l'identique dans les deux sens, si votre entreprise impose Microsoft 365, ou si vous voulez Copilot. Excel existe aussi sur iPhone, iPad et Windows ; Foglio est réservé au Mac.",
          "Beaucoup finissent par utiliser les deux : Foglio pour les fichiers rapides du quotidien, parce qu'il s'ouvre instantanément, et Excel pour les quelques classeurs lourds qui l'exigent.",
        ],
      },
      {
        heading: "Essayer une alternative gratuite à Excel avec vos propres fichiers",
        body: [
          "[Téléchargez Foglio](/download/) (7,7 Mo, macOS 14 ou ultérieur), glissez-le dans Applications et ouvrez-le. Comme Foglio 1.0 n'est pas notarié par Apple, macOS demande une confirmation la première fois ; la page de téléchargement explique comment faire. Ouvrez ensuite la copie d'un vrai classeur avec File ▸ Open (les menus de Foglio sont en anglais), ou faites un clic droit sur un fichier `.xlsx` et choisissez Ouvrir avec ▸ Foglio.",
          "Vérifiez ce qui compte pour vous : totaux, recherches, dates, formats de nombre, graphiques. Gardez l'original tant que vous n'êtes pas sûr de vous. Si quelque chose ne va pas, [signalez-le sur GitHub](https://github.com/GetFoglio/foglio/issues) avec un fichier d'exemple.",
        ],
      },
    ],
    faq: [
      {
        q: "Existe-t-il une version gratuite d'Excel pour Mac ?",
        a: "L'app de bureau exige un abonnement Microsoft 365 ou une licence Office pour créer et modifier des fichiers. Excel pour le web est gratuit avec un compte Microsoft. Parmi les alternatives de bureau gratuites qui ouvrent les fichiers Excel, il y a Foglio, LibreOffice Calc et Apple Numbers.",
      },
      {
        q: "Un fichier enregistré par Foglio s'ouvrira-t-il correctement dans Excel ?",
        a: "Oui, Foglio enregistre des fichiers `.xlsx` standard, avec les formules dans la forme anglaise d'Excel. Mise en forme, graphiques, images, commentaires, validation et mise en forme conditionnelle sont réécrits. Ce que Foglio ne prend pas en charge, comme les formes ou les tableaux croisés dynamiques, n'est pas conservé : gardez l'original des fichiers complexes. Les macros sont conservées si vous enregistrez en `.xlsm`.",
      },
      {
        q: "Foglio utilise-t-il les mêmes raccourcis clavier qu'Excel pour Mac ?",
        a: "En grande partie, oui : ⌘1 format de cellule, ⌘D / ⌘R recopie, F4 références absolues, ⇧⌘T somme automatique, ⌥⇧⌘V coller les valeurs, ⌃; insérer la date, ⌥↓ ouvrir une liste de validation, et bien d'autres. Le README sur GitHub donne la liste complète.",
      },
      {
        q: "Foglio est-il aussi rapide qu'Excel sur les gros fichiers ?",
        a: "Nous n'avons pas mesuré Excel, donc nous ne prétendrons pas le battre. Sur notre Mac de test, Foglio ouvre un classeur de 100 000 lignes et 300 000 formules en 1,1 s et se recalcule en 16 ms après une modification, ce qui paraît instantané.",
      },
      {
        q: "Puis-je utiliser Foglio au travail ?",
        a: "Oui. Les licences MIT et Apache-2.0 autorisent l'usage commercial gratuitement. Comme pour tout logiciel en version 1.0, gardez une copie de vos fichiers importants.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternative gratuite à Excel pour Mac",
    cardText: "Ouvrez et enregistrez des xlsx sans abonnement Microsoft 365, en sachant exactement ce à quoi vous renoncez.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "numbers",
    meta: {
      title: "Alternative à Numbers qui modifie les xlsx | Foglio",
      description:
        "Numbers convertit les fichiers Excel. Foglio, app Mac gratuite, modifie le xlsx tel quel, avec les formules et raccourcis d'Excel. Lequel choisir et quand.",
    },
    h1: "Une alternative à Numbers qui garde vos fichiers Excel tels quels",
    intro: [
      "Apple Numbers est une bonne app. Elle est gratuite, superbement conçue et se synchronise avec votre iPhone et votre iPad. Mais elle repose sur sa propre idée du tableur : une page libre sur laquelle on pose des tableaux, enregistrée en `.numbers`. Quand quelqu'un vous envoie un fichier Excel, Numbers l'importe, le convertit, et vous devez penser à le réexporter vers Excel avant de le renvoyer.",
      "Foglio fait le choix inverse. C'est une app Mac gratuite et open source qui travaille directement sur les fichiers `.xlsx`, avec la grille d'Excel, les noms de fonctions d'Excel et les raccourcis d'Excel pour Mac. Si vos tableaux viennent d'utilisateurs d'Excel et doivent leur revenir, cette différence compte tous les jours.",
    ],
    sections: [
      {
        heading: "Pourquoi les habitués d'Excel trouvent Numbers déroutant",
        body: [
          "Aucun de ces points n'est un bug : ce sont des choix de conception. Ils se trouvent simplement gêner quand on travaille avec des fichiers Excel.",
        ],
        bullets: [
          "**Importer et exporter au lieu d'ouvrir et d'enregistrer.** Un `.xlsx` ouvert dans Numbers devient un document Numbers. L'enregistrement crée un fichier `.numbers` ; il faut passer par Fichier ▸ Exporter vers ▸ Excel pour le renvoyer, et certaines choses changent en route.",
          "**Des tableaux sur une page, pas une grande grille.** Une feuille Numbers contient plusieurs tableaux séparés, si bien que les grandes feuilles Excel peuvent être découpées ou remaniées à l'import.",
          "**Des raccourcis et des menus différents.** Beaucoup de raccourcis d'Excel pour Mac ne font rien, ou autre chose, dans Numbers.",
          "**Une configuration requise plus récente.** La version actuelle de Numbers sur l'App Store exige macOS 26 ; Foglio fonctionne sur macOS 14 et ultérieur.",
        ],
      },
      {
        heading: "Ce que Foglio fait autrement",
        bullets: [
          "**Il modifie le `.xlsx` sur place.** Ouvrez un fichier Excel, modifiez-le, appuyez sur ⌘S : c'est toujours un fichier Excel. Pas d'étape d'export.",
          "**Une grille par feuille, comme Excel.** En-têtes de lignes et de colonnes, volets figés, zone Nom (tapez `B12` ou `Sheet2!A1:C9` pour y aller), onglets de feuilles que l'on peut renommer, colorer, masquer et réorganiser.",
          "**Les formules et les noms d'Excel.** Environ 500 fonctions, dont RECHERCHEX, SOMME.SI.ENS, FILTRE, LET et LAMBDA, saisies dans la langue de votre Mac : `=SOMME(A1:A10)` sur un Mac en français, `=SOMMA(…)` sur un Mac en italien, `=SUMME(…)` sur un Mac en allemand ([fonctions Excel en français et en anglais](/guides/excel-functions-italian-english/)).",
          "**Les raccourcis d'Excel pour Mac.** ⌘1, ⌘D, F4, ⇧⌘T, ⌥⇧⌘V et des dizaines d'autres se comportent comme dans Excel.",
          "**Les fichiers qui posent problème à Numbers.** Foglio ouvre les anciens `.xls`, les `.xlsb` binaires et les `.ods` de LibreOffice, ainsi que les CSV dans tous les encodages courants, avec détection automatique du séparateur. Il affiche même les vieux cliparts EMF/WMF contenus dans les fichiers Office.",
        ],
        body: [],
      },
      {
        heading: "Ce que Numbers fait mieux",
        body: [
          "Soyez honnête sur l'usage que vous faites de Numbers. Si c'est l'un des suivants, Numbers reste peut-être le meilleur outil :",
        ],
        bullets: [
          "**La présentation.** Modèles, tableaux stylés, graphiques interactifs et mise en page libre donnent sans effort des documents superbes.",
          "**iPhone et iPad.** Numbers fonctionne sur tous vos appareils Apple et se synchronise via iCloud. Foglio est réservé au Mac.",
          "**La collaboration.** Numbers permet la collaboration en temps réel via iCloud. Foglio est une app de bureau pour un seul utilisateur.",
          "**Les tableaux croisés dynamiques.** Numbers en a ; Foglio ne propose que *Summarize by*, une synthèse dynamique plus simple.",
          "**Apple Intelligence.** Numbers intègre les Outils d'écriture et, avec un abonnement Apple Creator Studio, un assistant capable de suggérer formules et tableaux. Foglio n'a aucune fonction d'IA.",
        ],
      },
      {
        heading: "Taille et vitesse",
        body: [
          "La fiche App Store de Numbers indique 661 Mo (une seule fiche pour Mac, iPhone et iPad). Foglio pèse 7,7 Mo au téléchargement et environ 20 Mo une fois installé. Il affiche une fenêtre utilisable en 0,24 s, reste à 0 % de CPU au repos et occupe environ 58 Mo de mémoire avec une feuille vide. Un classeur de 100 000 lignes et 300 000 formules s'ouvre en 1,1 s sur notre Mac de test.",
          "Numbers est préinstallé sur de nombreux Mac, la taille vous importe donc peut-être peu. Le temps de démarrage et la gestion des très grandes feuilles Excel, en revanche, peuvent compter.",
        ],
      },
      {
        heading: "Quand rester sur Numbers",
        body: [
          "Si vos tableaux sont personnels, quittent rarement vos appareils Apple et que leur apparence compte plus pour vous que la compatibilité avec Excel, restez sur Numbers. Il est gratuit, soigné et bien intégré. Si vous partagez un budget familial avec des proches sur iPhone, la collaboration iCloud de Numbers est difficile à battre.",
          "Si au contraire vous ouvrez régulièrement des pièces jointes Excel, renvoyez des fichiers `.xlsx` à des collègues ou des clients, ou pensez tout simplement « Excel », Foglio supprime l'étape de conversion. Beaucoup gardent les deux : Numbers pour les jolis documents personnels, Foglio comme app par défaut pour le `.xlsx` et le `.csv`.",
        ],
      },
      {
        heading: "Faire de Foglio l'app par défaut pour les fichiers Excel",
        body: [
          "Après avoir [téléchargé Foglio](/download/), sélectionnez n'importe quel fichier `.xlsx` dans le Finder, appuyez sur ⌘I (Lire les informations), choisissez Foglio sous **Ouvrir avec** et cliquez sur **Tout modifier…**. Un double-clic sur un fichier Excel l'ouvrira désormais dans Foglio, et Numbers reste disponible pour ses propres documents. Faites de même pour le `.csv` si vous le souhaitez.",
          "Pour une vue d'ensemble de toutes les options, consultez le [comparatif des tableurs pour Mac](/compare/) ou le guide pour [ouvrir un fichier xlsx sur Mac sans Excel](/guides/open-xlsx-on-mac-without-excel/).",
        ],
      },
    ],
    faq: [
      {
        q: "Foglio peut-il ouvrir les fichiers .numbers ?",
        a: "Non. Foglio ne lit pas le format `.numbers` d'Apple. Dans Numbers, utilisez Fichier ▸ Exporter vers ▸ Excel pour créer un `.xlsx` que Foglio pourra ouvrir.",
      },
      {
        q: "Foglio est-il gratuit comme Numbers ?",
        a: "Oui. Foglio est gratuit, sans aucune offre payante, et il est en plus open source sous licences MIT et Apache-2.0.",
      },
      {
        q: "Numbers conserve-t-il mes formules Excel ?",
        a: "Numbers traduit la plupart des formules courantes à l'import et à l'export, mais les fonctions qui lui manquent, les fonctionnalités propres à Excel et la mise en page peuvent changer. Foglio garde le classeur au format Excel du début à la fin.",
      },
      {
        q: "Foglio fonctionnera-t-il sur mon ancien Mac ?",
        a: "Foglio demande macOS 14 Sonoma ou ultérieur, sur Apple silicon ou Intel. La version actuelle de Numbers exige macOS 26.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternative à Numbers pour fichiers Excel",
    cardText: "Modifiez vos xlsx sur place, avec la grille, les noms de fonctions et les raccourcis d'Excel, sans conversion.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "libreoffice",
    meta: {
      title: "Alternative légère à LibreOffice Calc sur Mac | Foglio",
      description:
        "LibreOffice est gratuit mais lourd et pas natif sur Mac. Foglio est un tableur open source de 7,7 Mo en Swift et Rust. Lequel choisir, en toute honnêteté.",
    },
    h1: "Une alternative légère et native à LibreOffice Calc sur Mac",
    intro: [
      "LibreOffice est l'un des grands projets du logiciel libre : une suite bureautique complète, gratuite pour tous, avec un tableur (Calc) qui offre tableaux croisés dynamiques, macros, une immense bibliothèque de fonctions et la prise en charge de presque tous les formats de fichiers. Quand on cherche un remplaçant gratuit à Excel, c'est la première suggestion qui vient.",
      "Sur Mac, pourtant, ses origines multiplateformes se voient. L'image disque pour Apple silicon pèse environ 300 Mo, elle installe toute une suite même si vous ne voulez que le tableur, et son interface, ses fenêtres de dialogue et ses raccourcis ne ressemblent pas tout à fait au reste de macOS. Foglio fait un autre compromis : beaucoup plus petit, natif, et centré uniquement sur le tableur.",
    ],
    sections: [
      {
        heading: "Deux apps gratuites et open source aux objectifs différents",
        body: [
          "Les deux apps sont gratuites et open source, et fonctionnent entièrement hors ligne, sans compte ni télémétrie. La différence, c'est le périmètre. LibreOffice veut être une alternative complète à Microsoft Office sur toutes les plateformes de bureau. Foglio veut être le moyen le plus rapide et le plus léger d'ouvrir et de modifier les tableurs Excel du quotidien sur Mac, et rien d'autre.",
        ],
        bullets: [
          "**Foglio :** interface Swift/AppKit, moteur Rust, Mac uniquement, MIT / Apache-2.0, 7,7 Mo à télécharger, environ 20 Mo une fois installé.",
          "**LibreOffice :** suite C++ avec sa propre boîte à outils d'interface, Windows, macOS et Linux, MPL-2.0, environ 300 Mo à télécharger, jusqu'à 800 Mo sur disque selon sa configuration requise.",
        ],
      },
      {
        heading: "Là où Foglio fait mieux",
        bullets: [
          "**Taille et démarrage.** Foglio affiche une fenêtre utilisable en 0,24 s et occupe environ 58 Mo de mémoire avec une feuille vide, à 0 % de CPU au repos.",
          "**Une app Mac native.** Vrais documents macOS, onglets de fenêtre, mode sombre, fenêtres Ouvrir et Enregistrer standard, zoom au pincement, défilement fluide sur une grille sur mesure, et raccourcis clavier d'Excel pour Mac.",
          "**La façon de faire d'Excel.** Le `.xlsx` est le format propre de Foglio, pas un filtre d'import. Les noms de fonctions suivent ceux d'Excel dans votre langue (`RECHERCHEV`, `CERCA.VERT`, `SVERWEIS`).",
          "**Les fonctions modernes d'Excel.** Foglio prend en charge LAMBDA ainsi que RECHERCHEX, FILTRE, TRIER et LET. LibreOffice a ajouté RECHERCHEX, FILTRE et LET en 2024 mais, au moment où nous écrivons, n'implémente pas LAMBDA.",
          "**La vitesse sur les gros classeurs.** Grâce au recalcul incrémental et aux recherches indexées, une modification dans un classeur de 100 000 lignes et 300 000 formules se recalcule en 16 ms sur notre Mac de test.",
        ],
        body: [],
      },
      {
        heading: "Là où LibreOffice Calc fait mieux",
        body: [
          "LibreOffice a des décennies de développement derrière lui, et pour beaucoup de tâches il est tout simplement plus capable :",
        ],
        bullets: [
          "**Tableaux croisés dynamiques** (avec champs calculés dans les versions récentes). Foglio ne propose que *Summarize by*.",
          "**Macros** en LibreOffice Basic et Python, avec une prise en charge partielle de VBA d'Excel. Foglio n'exécute aucune macro.",
          "**Plus de types de graphiques**, formes, outils de dessin et zones de texte.",
          "**L'enregistrement dans plus de formats**, dont `.ods`, `.xls` et bien d'autres. Foglio ouvre le `.xls` et l'`.ods` (valeurs, formules et dates) mais n'enregistre qu'en `.xlsx`, CSV et PDF.",
          "**Les fichiers protégés par mot de passe**, les barres de données, les jeux d'icônes et les graphiques sparkline, que Foglio ne prend pas encore en charge.",
          "**Une suite complète** : Writer, Impress, Draw et Base sont dans le même téléchargement.",
          "**Des versions Windows et Linux**, si vous travaillez sur plusieurs plateformes.",
        ],
      },
      {
        heading: "Quand garder LibreOffice",
        body: [
          "Gardez LibreOffice si vous avez besoin de tableaux croisés dynamiques ou de macros, si OpenDocument est votre format principal, s'il vous faut aussi un traitement de texte et des présentations, ou si vous utilisez la même suite sous Windows ou Linux. C'est un projet mûr et fiable, et le garder installé ne coûte rien.",
          "Choisissez Foglio si, concrètement, vous ouvrez des tableaux qu'on vous envoie, corrigez quelques chiffres et les renvoyez, et voulez une app qui démarre instantanément, ressemble au reste de votre Mac et n'occupe pas 800 Mo de disque pour cela. Les deux peuvent cohabiter : faites de Foglio l'app par défaut pour le `.xlsx` et le `.csv`, et ouvrez LibreOffice pour les tâches qui l'exigent.",
        ],
      },
      {
        heading: "Changer est facile, car les fichiers sont les mêmes",
        body: [
          "Il n'y a pas de migration. Les deux apps lisent et écrivent le `.xlsx` : un fichier modifié dans l'une s'ouvre dans l'autre. Si vous avez des fichiers `.ods`, Foglio ouvre leurs valeurs, formules et dates et les enregistre en `.xlsx` ; la mise en forme des `.ods` n'est pas encore reprise, alors gardez les originaux. Il en va de même pour les anciens fichiers `.xls` ; voir [comment ouvrir un fichier .xls sur Mac](/guides/open-xls-on-mac/).",
          "[Téléchargez Foglio](/download/), essayez-le sur quelques vrais fichiers, et consultez le [tableau comparatif](/compare/) pour les détails. Curieux de savoir pourquoi il est si petit ? Lisez [comment Foglio est conçu](/technology/).",
        ],
      },
    ],
    faq: [
      {
        q: "Foglio est-il basé sur LibreOffice ?",
        a: "Non. Foglio est un projet distinct. Son interface est écrite en Swift/AppKit, et son moteur de formules est un fork corrigé d'IronCalc, un moteur de tableur open source en Rust. Il utilise la bibliothèque Rust calamine pour lire les `.xls`, `.xlsb` et `.ods`.",
      },
      {
        q: "Les deux sont-ils gratuits pour un usage professionnel ?",
        a: "Oui. LibreOffice est sous MPL-2.0 et Foglio sous MIT et Apache-2.0. Les deux peuvent être utilisés au travail sans frais.",
      },
      {
        q: "Lequel ouvre le mieux les fichiers Excel ?",
        a: "Cela dépend du fichier. LibreOffice prend en charge plus de fonctionnalités d'Excel dans l'ensemble (tableaux croisés, macros, formes). Foglio traite le `.xlsx` comme son format natif et donne les mêmes résultats qu'Excel sur 191 des 195 fonctions auditées. Essayez vos propres fichiers dans les deux.",
      },
      {
        q: "Foglio enregistre-t-il les fichiers .ods ?",
        a: "Non. Foglio ouvre le `.ods` et enregistre en `.xlsx`. Si vous devez conserver des fichiers OpenDocument, utilisez LibreOffice.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternative légère à LibreOffice Calc",
    cardText: "Un tableur Mac natif de 7,7 Mo pour les fichiers Excel du quotidien, et quand LibreOffice reste le meilleur outil.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "google-sheets",
    meta: {
      title: "Alternative à Google Sheets hors ligne pour Mac | Foglio",
      description:
        "Un tableur hors ligne qui reste sur votre Mac ? Foglio est une app de bureau gratuite et privée, sans compte. Et quand Google Sheets reste le bon choix.",
    },
    h1: "Une alternative à Google Sheets hors ligne et privée pour Mac",
    intro: [
      "Google Sheets est gratuit, puissant et imbattable quand plusieurs personnes doivent modifier la même feuille en même temps. Mais il a ses conditions : il faut un compte Google, vos fichiers sont sur les serveurs de Google, tout se passe dans un onglet de navigateur, et le travail hors ligne exige Chrome ou Edge, une extension et une configuration faite à l'avance.",
      "Foglio est un tableur gratuit et open source qui fonctionne entièrement sur votre Mac. Pas de compte, pas de connexion, aucune connexion réseau de sa part. Vos fichiers sont de simples fichiers `.xlsx` dans le dossier de votre choix. Voici une comparaison honnête des deux.",
    ],
    sections: [
      {
        heading: "Pourquoi chercher une alternative à Google Sheets",
        bullets: [
          "**Travailler hors ligne.** Dans l'avion, le train ou avec le Wi-Fi capricieux d'un hôtel, une app de bureau fonctionne, tout simplement. Le mode hors ligne de Google doit être activé quand on est en ligne, nécessite l'extension Google Docs hors connexion dans Chrome ou Edge, et un seul compte par profil de navigateur peut l'utiliser.",
          "**La confidentialité.** Certaines données ne devraient être envoyées nulle part : fiches de paie, frais médicaux, listes de clients. Avec Foglio, le fichier ne quitte jamais votre Mac, sauf si vous l'envoyez.",
          "**Pas de compte.** Tout le monde n'a pas, ou ne veut pas, de compte Google, et certaines entreprises interdisent le stockage cloud personnel.",
          "**Une vraie app Mac.** Un onglet de navigateur n'est pas une app Mac : pas d'éléments récents, pas d'onglets de fenêtre à soi, pas de fenêtre d'impression native, pas de raccourcis Mac. Foglio est écrit en Swift/AppKit.",
          "**Les gros fichiers locaux.** Ouvrir un gros `.xlsx` dans Sheets implique de l'envoyer et de le convertir, et Google fixe une limite de 20 millions de cellules par feuille de calcul. Foglio ouvre un classeur de 100 000 lignes et 300 000 formules en 1,1 s sur notre Mac de test.",
        ],
        body: [],
      },
      {
        heading: "Ce que vous retrouvez de Google Sheets",
        body: [
          "L'essentiel de ce que vous faites dans Sheets fonctionne de la même façon dans Foglio. Les formules utilisent la même syntaxe de type Excel et les mêmes noms de fonctions : SOMME.SI.ENS, RECHERCHEX, FILTRE, TRIER, UNIQUE, LET et LAMBDA sont tous là, parmi environ 500 fonctions. Filtre automatique, tri, listes déroulantes de validation, mise en forme conditionnelle avec nuances de couleurs, graphiques, rechercher et remplacer, volets figés et commentaires sont pris en charge.",
          "Pour récupérer une feuille, utilisez Fichier ▸ Télécharger ▸ Microsoft Excel (.xlsx) dans Google Sheets et ouvrez le fichier dans Foglio. La mise en forme, les formules et les graphiques suivent ; les fonctions propres à Google comme GOOGLEFINANCE, IMPORTRANGE ou QUERY n'ont pas d'équivalent dans Foglio ni dans Excel.",
        ],
      },
      {
        heading: "Ce que Google Sheets fait mieux",
        bullets: [
          "**La collaboration en temps réel.** Plusieurs curseurs dans une feuille, commentaires avec mentions, historique des versions. Foglio est une app de bureau pour un seul utilisateur.",
          "**Tous les appareils.** Sheets fonctionne dans n'importe quel navigateur et a des apps iPhone, iPad et Android. Foglio ne tourne que sur Mac avec macOS 14 ou ultérieur.",
          "**Les données en ligne.** Des fonctions comme IMPORTRANGE, IMPORTHTML et GOOGLEFINANCE récupèrent des données en direct sur le web. Foglio ne se connecte pas à Internet.",
          "**L'automatisation et l'IA.** Apps Script pour automatiser et, selon votre offre, Gemini pour vous aider avec les formules et l'analyse. Foglio n'a ni macros ni fonctions d'IA.",
          "**Les tableaux croisés dynamiques et plus de types de graphiques.** Foglio propose *Summarize by* pour les synthèses simples et les types de graphiques courants.",
        ],
        body: [],
      },
      {
        heading: "Quand continuer à utiliser Google Sheets",
        body: [
          "Si votre tableur est un espace partagé, comme le suivi d'une équipe, la liste de bagages de la famille ou une feuille d'inscription, Google Sheets est le bon outil et Foglio n'essaie pas de le remplacer. C'est aussi vrai pour les feuilles qui récupèrent des données en direct sur le web, ou que vous devez modifier depuis un téléphone.",
          "Si la feuille est à vous, locale ou confidentielle, une app de bureau est plus logique. Beaucoup utilisent les deux : Google Sheets pour les documents partagés, Foglio pour les finances personnelles, les données clients et les fichiers Excel reçus par e-mail.",
        ],
      },
      {
        heading: "Vos fichiers, votre dossier",
        body: [
          "Foglio enregistre des fichiers `.xlsx` standard où vous voulez : votre dossier Documents, un disque externe, ou un dossier synchronisé comme iCloud Drive ou Dropbox si vous le choisissez. Comme ce sont des fichiers Excel, vous pouvez toujours en envoyer un sur Google Sheets plus tard. Aucun enfermement, dans un sens comme dans l'autre.",
          "[Téléchargez Foglio](/download/) gratuitement (7,7 Mo, macOS 14+). Pour voir comment il se situe aussi face à Excel, Numbers et LibreOffice, lisez le [comparatif complet](/compare/).",
        ],
      },
    ],
    faq: [
      {
        q: "Google Sheets peut-il fonctionner hors ligne sur Mac ?",
        a: "Oui, avec des limites : il faut Chrome ou Microsoft Edge, l'extension Google Docs hors connexion, et vous devez activer l'accès hors ligne pendant que vous êtes connecté. Un seul compte par profil de navigateur peut l'utiliser. Une app de bureau comme Foglio, Numbers, LibreOffice ou Excel fonctionne hors ligne sans configuration.",
      },
      {
        q: "Foglio envoie-t-il mes fichiers quelque part ?",
        a: "Non. Foglio n'a ni système de compte, ni stockage cloud, ni télémétrie, et n'établit aucune connexion réseau de lui-même. Il n'ouvre une page web que si vous cliquez sur un lien hypertexte dans une cellule.",
      },
      {
        q: "Puis-je ouvrir un fichier Google Sheets dans Foglio ?",
        a: "Téléchargez-le d'abord avec Fichier ▸ Télécharger ▸ Microsoft Excel (.xlsx) dans Google Sheets, puis ouvrez le `.xlsx` dans Foglio. Un fichier raccourci `.gsheet` de Google Drive pour ordinateur n'est qu'un lien et ne peut pas être ouvert hors ligne.",
      },
      {
        q: "Mes formules Google Sheets fonctionneront-elles dans Foglio ?",
        a: "Les formules standard, oui, puisque les deux suivent la syntaxe d'Excel. Les fonctions propres à Google comme QUERY, IMPORTRANGE, GOOGLEFINANCE et SPARKLINE ne sont pas disponibles dans Foglio.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternative à Google Sheets hors ligne",
    cardText: "Un tableur de bureau gratuit, sans compte ni cloud, et les cas où Google Sheets reste le bon outil.",
  },
];

export const guides: Article[] = [
  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-xlsx-on-mac-without-excel",
    meta: {
      title: "Ouvrir un fichier xlsx sur Mac sans Excel | Foglio",
      description:
        "Quatre façons gratuites d'ouvrir et modifier un fichier Excel xlsx sur Mac sans Microsoft Excel : Coup d'œil, Numbers, une app gratuite ou un navigateur.",
    },
    h1: "Comment ouvrir un fichier xlsx sur Mac sans Excel",
    intro: [
      "Quelqu'un vous a envoyé un tableur par e-mail, vous faites un double-clic, et votre Mac ouvre Numbers, vous demande quelle app utiliser, ou vous annonce qu'il faut un abonnement Microsoft 365. Pas besoin d'acheter Excel pour lire ou modifier un fichier `.xlsx`. Voici les options gratuites, de la plus rapide à la plus complète, avec les compromis de chacune.",
    ],
    sections: [
      {
        heading: "1. Simplement le consulter : Coup d'œil",
        body: [
          "Si vous avez seulement besoin de lire le fichier, sélectionnez-le dans le Finder et appuyez sur la **barre d'espace**. Coup d'œil affiche un aperçu des feuilles sans ouvrir d'app. Impossible de modifier, trier ou copier des formules, et les fichiers complexes peuvent s'afficher de façon imparfaite, mais c'est instantané et intégré au Mac.",
        ],
      },
      {
        heading: "2. Le modifier dans une app de bureau gratuite",
        body: [
          "Pour modifier le fichier et le renvoyer en `.xlsx`, le plus direct est une app de bureau qui traite le format d'Excel comme le sien. [Foglio](/) est un tableur gratuit et open source pour Mac conçu exactement pour ça : il ouvre et enregistre le `.xlsx` avec la mise en forme, les formules, les graphiques, les images et les commentaires, et utilise les noms de fonctions et les raccourcis clavier d'Excel.",
        ],
        sub: [
          {
            heading: "Les étapes avec Foglio",
            body: [],
            bullets: [
              "[Téléchargez Foglio](/download/) (7,7 Mo, macOS 14 ou ultérieur) et glissez-le dans Applications.",
              "La première fois, confirmez l'avertissement de sécurité de macOS : sur macOS 15 ou ultérieur, allez dans Réglages Système ▸ Confidentialité et sécurité ▸ **Ouvrir quand même** ; sur macOS 14, faites un clic droit sur l'app et choisissez **Ouvrir**.",
              "Faites un clic droit sur votre fichier `.xlsx` dans le Finder et choisissez **Ouvrir avec ▸ Foglio**, ou glissez-le sur l'icône de Foglio.",
              "Modifiez, puis appuyez sur ⌘S. Le fichier est enregistré en `.xlsx`, prêt à être renvoyé.",
            ],
          },
          {
            heading: "Points d'attention",
            body: [
              "Foglio n'exécute pas les macros, n'a pas de vrais tableaux croisés dynamiques, ignore les formes et les SmartArt, et ne peut pas ouvrir les fichiers protégés par mot de passe. Pour des tableaux ordinaires, c'est rarement un problème, mais gardez l'original de tout fichier complexe. [LibreOffice Calc](/alternatives/libreoffice/) est une autre option de bureau gratuite, plus lourde mais avec tableaux croisés et macros.",
            ],
          },
        ],
      },
      {
        heading: "3. Utiliser Apple Numbers",
        body: [
          "Numbers est gratuit chez Apple et souvent déjà installé. Faites un clic droit sur le fichier et choisissez **Ouvrir avec ▸ Numbers**. Numbers importe le classeur et le convertit en document Numbers ; une fois terminé, utilisez **Fichier ▸ Exporter vers ▸ Excel** pour recréer un `.xlsx`. Si vous appuyez simplement sur ⌘S, vous obtenez un fichier `.numbers`, que les utilisateurs d'Excel ne peuvent pas ouvrir.",
          "Cela marche bien pour les fichiers simples. Avec les grandes feuilles, certaines formules et la mise en forme peuvent changer à l'aller-retour, et la version actuelle de Numbers exige macOS 26. Voir [Numbers ou Foglio](/alternatives/numbers/) pour les détails.",
        ],
      },
      {
        heading: "4. Passer par un navigateur : Excel pour le web ou Google Sheets",
        body: [
          "**Excel pour le web** est gratuit avec un compte Microsoft : envoyez le fichier sur OneDrive et ouvrez-le dans le navigateur. C'est le vrai Excel, moins certaines fonctions de la version de bureau. **Google Sheets** peut ouvrir les fichiers `.xlsx` envoyés sur Google Drive, en les convertissant ou en les modifiant en mode compatibilité Office dans Chrome ; téléchargez-les en `.xlsx` une fois terminé.",
          "Les deux demandent une connexion Internet et un compte, et impliquent d'envoyer le fichier sur un service cloud. Évitez cette voie pour les données confidentielles comme les fiches de paie ou les dossiers médicaux. Plus de détails sur la page [alternative à Google Sheets](/alternatives/google-sheets/).",
        ],
      },
      {
        heading: "Rendre votre choix permanent : l'app par défaut",
        body: [
          "Pour que chaque `.xlsx` s'ouvre dans l'app de votre choix, sélectionnez-en un dans le Finder, appuyez sur ⌘I (Lire les informations), choisissez l'app sous **Ouvrir avec**, puis cliquez sur **Tout modifier…**.",
        ],
      },
      {
        heading: "Ouvrir un xlsx sur Mac sans Excel : quelle option choisir ?",
        bullets: [
          "**Seulement lire :** Coup d'œil.",
          "**Modifier et renvoyer, en privé et hors ligne :** une app de bureau gratuite comme Foglio ou LibreOffice.",
          "**De beaux documents pour vous-même :** Numbers.",
          "**Travailler sur le fichier à plusieurs en même temps :** Excel pour le web ou Google Sheets.",
        ],
        body: ["La [page comparatif](/compare/) présente toutes les différences côte à côte."],
      },
    ],
    faq: [
      {
        q: "Un Mac peut-il ouvrir un xlsx sans logiciel supplémentaire ?",
        a: "Vous pouvez en voir un aperçu avec Coup d'œil (sélectionnez le fichier et appuyez sur Espace). Pour le modifier, il faut une app : Numbers est gratuit chez Apple, et Foglio et LibreOffice sont des téléchargements gratuits.",
      },
      {
        q: "Pourquoi mon fichier xlsx s'ouvre-t-il dans Numbers ?",
        a: "Numbers est l'app par défaut pour les tableurs sur de nombreux Mac. Changez-la dans le Finder avec Lire les informations ▸ Ouvrir avec ▸ Tout modifier….",
      },
      {
        q: "Et les fichiers .xlsm avec des macros ?",
        a: "Les apps gratuites ouvrent les données, mais seul Excel exécute les macros VBA de façon fiable. Foglio ouvre les fichiers `.xlsm` sans exécuter les macros, et les conserve quand vous enregistrez en `.xlsm`.",
      },
      {
        q: "Est-il prudent d'envoyer des fichiers de travail à une visionneuse en ligne ?",
        a: "Cela dépend du fichier et des règles de votre entreprise. Les convertisseurs et visionneuses en ligne gratuits reçoivent une copie de vos données. Une app de bureau garde le fichier sur votre Mac.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Ouvrir un xlsx sans Excel",
    cardText: "Coup d'œil, Numbers, une app de bureau gratuite ou un navigateur : quatre façons gratuites d'ouvrir un fichier Excel sur Mac.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-xls-on-mac",
    meta: {
      title: "Ouvrir un ancien fichier .xls sur Mac | Foglio",
      description:
        "Un vieux fichier .xls d'Excel 97–2003 que Numbers refuse ? Comment l'ouvrir gratuitement sur Mac, le convertir en xlsx, et repérer les faux fichiers xls.",
    },
    h1: "Comment ouvrir un ancien fichier Excel .xls sur Mac",
    intro: [
      "Le `.xls` est le format binaire qu'Excel utilisait avant 2007, et on le trouve encore partout : exports bancaires, logiciels de comptabilité, données publiques, archives. Les apps Mac modernes le gèrent moins bien que le `.xlsx`. Numbers, par exemple, peut refuser certains fichiers en indiquant que le document a été créé avec une version d'Excel non prise en charge.",
      "Voici comment ouvrir gratuitement un fichier `.xls` sur Mac, comment le convertir au format moderne `.xlsx`, et que faire quand le fichier n'est pas vraiment un `.xls`.",
    ],
    sections: [
      {
        heading: "Option 1 : l'ouvrir dans Foglio et l'enregistrer en xlsx",
        body: [
          "[Foglio](/) est un tableur gratuit et open source pour Mac. Il lit les fichiers `.xls` avec calamine, une bibliothèque Rust rapide pour les anciens formats Excel, et ouvre aussi les fichiers `.xlsb` binaires.",
        ],
        bullets: [
          "[Téléchargez Foglio](/download/) et glissez-le dans Applications.",
          "Faites un clic droit sur le fichier `.xls` et choisissez **Ouvrir avec ▸ Foglio** (ou utilisez File ▸ Open dans Foglio).",
          "Vérifiez les données, puis choisissez **File ▸ Save As…** pour enregistrer une copie en `.xlsx`. Foglio n'écrit pas l'ancien format `.xls`.",
        ],
        sub: [
          {
            heading: "Ce qui est importé",
            body: [
              "Des fichiers `.xls` et `.xlsb`, Foglio importe les **valeurs, formules et dates**, sur toutes les feuilles. La mise en forme des cellules (polices, couleurs, bordures) n'est pas encore importée depuis ces anciens formats, et les macros ne sont jamais exécutées. Si vous avez besoin de l'aspect d'origine d'un vieux classeur, LibreOffice ou Excel en conserveront davantage.",
            ],
          },
        ],
      },
      {
        heading: "Option 2 : LibreOffice Calc",
        body: [
          "LibreOffice Calc est gratuit, open source et a des décennies d'expérience avec le `.xls`, mise en forme comprise. Il peut aussi réenregistrer en `.xls` si un système que vous utilisez l'exige encore. Le téléchargement est plus lourd (environ 300 Mo pour Apple silicon) et ce n'est pas une app Mac native, mais pour des archives de vieux classeurs il est très complet. Voir [LibreOffice ou Foglio](/alternatives/libreoffice/).",
        ],
      },
      {
        heading: "Option 3 : Numbers ou Excel",
        body: [
          "Numbers ouvre beaucoup de fichiers `.xls` : clic droit ▸ Ouvrir avec ▸ Numbers. S'il refuse, convertissez d'abord le fichier en `.xlsx` avec Foglio ou LibreOffice, puis importez-le dans Numbers. Microsoft Excel, bien sûr, ouvre n'importe quel `.xls`, mais il faut un abonnement ou une licence pour modifier.",
        ],
      },
      {
        heading: "Quand le « .xls » n'est pas un xls",
        body: [
          "Beaucoup de sites web et d'anciens logiciels de gestion exportent des fichiers nommés `.xls` qui sont en réalité autre chose. Si un fichier affiche des balises bizarres, tout dans une seule colonne ou du texte illisible, vérifiez ce qu'il est vraiment :",
        ],
        bullets: [
          "**Des tableaux HTML.** Certains systèmes écrivent une page web et l'appellent `.xls`. Ouvrez-le dans TextEdit ; si vous voyez `<table>` ou `<html>`, renommez la copie en `.html` et ouvrez-la dans un navigateur, ou copiez le tableau dans un tableur.",
          "**Du texte séparé par des tabulations ou des virgules.** Si TextEdit affiche de simples lignes de texte, renommez la copie en `.csv` ou `.txt`. Foglio les ouvre avec détection automatique de l'encodage, du séparateur et du séparateur décimal ; voir [comment ouvrir un CSV sur Mac](/guides/open-csv-on-mac/).",
          "**Un `.xlsx` avec la mauvaise extension.** Si le fichier est en fait un `.xlsx` (il commence par les lettres `PK` dans TextEdit), renommez la copie en `.xlsx`.",
          "**SpreadsheetML (XML).** Les fichiers XML d'Excel 2003 commencent par `<?xml` et mentionnent `urn:schemas-microsoft-com:office:spreadsheet`. Foglio ne les lit pas ; LibreOffice et Excel, si.",
        ],
      },
      {
        heading: "Convertir de nombreux fichiers .xls",
        body: [
          "Foglio convertit un fichier à la fois. Pour une grosse archive, LibreOffice peut convertir en masse depuis le Terminal avec son option en ligne de commande `--convert-to xlsx`. Quel que soit l'outil, gardez les fichiers `.xls` d'origine jusqu'à avoir vérifié le résultat.",
        ],
      },
    ],
    faq: [
      {
        q: "Quelle est la différence entre xls et xlsx ?",
        a: "Le `.xls` est le format binaire d'Excel de 1997–2003. Le `.xlsx` est le format basé sur XML qu'Excel utilise depuis 2007. Les fichiers `.xlsx` sont plus légers, plus robustes et pris en charge par toutes les apps modernes.",
      },
      {
        q: "Foglio peut-il enregistrer en .xls ?",
        a: "Non. Foglio ouvre le `.xls` et enregistre en `.xlsx`. Si vous devez écrire du `.xls`, utilisez LibreOffice ou Excel.",
      },
      {
        q: "Pourquoi Numbers dit-il que le fichier a été créé avec une version d'Excel non prise en charge ?",
        a: "Numbers n'importe pas certaines variantes anciennes du `.xls`. Ouvrez le fichier dans Foglio ou LibreOffice, enregistrez-le en `.xlsx`, et Numbers pourra l'importer.",
      },
      {
        q: "Les vieux fichiers xls avec macros sont-ils dangereux ?",
        a: "Les macros peuvent contenir du code malveillant. Foglio n'exécute jamais de macros : ouvrir un `.xls` ou un `.xlsm` avec lui ne les lance pas. Méfiez-vous avant d'activer les macros dans Excel pour des fichiers inattendus.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Ouvrir un ancien .xls sur Mac",
    cardText: "Ouvrez gratuitement les fichiers Excel 97–2003, convertissez-les en xlsx, et repérez les exports qui ne sont pas de vrais xls.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-csv-on-mac",
    meta: {
      title: "Ouvrir un CSV sur Mac : colonnes et accents | Foglio",
      description:
        "CSV dans une seule colonne, accents illisibles, décimales fausses ? Pourquoi cela arrive sur Mac et comment ouvrir un CSV correctement, avec ou sans Excel.",
    },
    h1: "Comment ouvrir un CSV sur Mac (et corriger colonnes, accents et décimales)",
    intro: [
      "Le CSV a l'air du format le plus simple qui soit : des lignes de texte, des valeurs séparées par des virgules. En pratique, c'est la source d'innombrables petites catastrophes. Tout atterrit dans la colonne A. Les lettres accentuées deviennent `Ã©`. Des prix de `1,50` deviennent `150`. Les zéros en tête des codes postaux disparaissent.",
      "Ce guide explique les trois choses qui coincent, comment ouvrir correctement un CSV sur Mac avec ou sans Excel, et comment en enregistrer un que les autres pourront ouvrir.",
    ],
    sections: [
      {
        heading: "Pourquoi les fichiers CSV s'ouvrent mal",
        sub: [
          {
            heading: "1. Le séparateur",
            body: [
              "Malgré leur nom (« comma-separated values »), beaucoup de fichiers CSV ne sont pas séparés par des virgules. Dans les pays qui écrivent les décimales avec une virgule (France, Italie, Allemagne, Espagne et bien d'autres), Excel exporte le CSV avec des **points-virgules**. D'autres systèmes utilisent des tabulations ou des barres verticales. Si l'app devine mal le séparateur, chaque ligne se retrouve dans une seule colonne.",
            ],
          },
          {
            heading: "2. L'encodage du texte",
            body: [
              "Un fichier CSV n'indique pas quel encodage de caractères il utilise. Les fichiers récents sont généralement en UTF-8, mais les exports d'anciens logiciels Windows sont souvent en Windows-1252, et certains outils écrivent en UTF-16. Lu avec le mauvais encodage, `é` devient `Ã©` et `€` devient du charabia.",
            ],
          },
          {
            heading: "3. Le séparateur décimal",
            body: [
              "`1,500` signifie un virgule cinq en France et mille cinq cents aux États-Unis. Si l'app lit les nombres selon la convention de votre Mac plutôt que celle du fichier, les valeurs sont fausses sans prévenir, ce qui est pire qu'une erreur visible.",
            ],
          },
        ],
        body: [],
      },
      {
        heading: "La solution simple : une app qui détecte les trois",
        body: [
          "[Foglio](/) est un tableur gratuit et open source pour Mac qui examine le fichier avant de l'importer :",
        ],
        bullets: [
          "**Séparateur :** choisit entre virgule, point-virgule, tabulation et barre verticale en vérifiant lequel découpe les premières lignes de la façon la plus régulière, en ignorant les séparateurs entre guillemets.",
          "**Encodage :** lit l'UTF-8 (avec ou sans indicateur d'ordre des octets, BOM) et l'UTF-16, et se rabat sur Windows-1252 pour les anciens exports d'Europe occidentale.",
          "**Décimales :** détermine si le fichier écrit `1.234,56` ou `1,234.56` et lit chaque nombre en conséquence, quelle que soit la région de votre Mac.",
          "**Sécurité :** un texte qui commence par `=` reste du texte et n'est jamais exécuté comme formule, donc un CSV malveillant ne peut pas déclencher de calculs.",
        ],
        sub: [
          {
            heading: "Les étapes",
            body: [
              "[Téléchargez Foglio](/download/), puis faites un clic droit sur le fichier `.csv` et choisissez **Ouvrir avec ▸ Foglio**. Les fichiers `.tsv` et `.txt` fonctionnent de la même façon. Une fois terminé, enregistrez-le en classeur Excel (`.xlsx`) pour conserver formules et mise en forme, ou de nouveau en CSV.",
            ],
          },
        ],
      },
      {
        heading: "Les autres façons d'ouvrir un CSV sur Mac",
        bullets: [
          "**Numbers :** double-clic ou Ouvrir avec ▸ Numbers. Cela marche bien pour les fichiers propres en UTF-8 séparés par des virgules ; avec des points-virgules ou d'autres encodages, vérifiez soigneusement les réglages d'import et le résultat.",
          "**Excel :** au lieu du double-clic, utilisez l'import de texte/CSV du menu **Données** (ou l'ancien assistant d'importation de texte), pour choisir le séparateur, l'encodage (origine du fichier) et le type de chaque colonne.",
          "**LibreOffice Calc :** affiche une fenêtre Import de texte où vous choisissez le jeu de caractères, les séparateurs et le type des colonnes. Très complet.",
          "**Google Sheets :** Fichier ▸ Importer, puis envoi du fichier, avec détection automatique ou personnalisée du séparateur. Il faut envoyer les données en ligne.",
          "**TextEdit :** ce n'est pas un tableur, mais c'est utile pour voir ce que contient vraiment le fichier.",
        ],
        body: [],
      },
      {
        heading: "Garder les zéros en tête et les longs nombres",
        body: [
          "Les codes postaux comme `01000`, les références produit et les numéros de téléphone comme `0612345678` ressemblent à des nombres pour n'importe quel tableur et perdent leur zéro initial. Les longs identifiants, comme les numéros de carte ou de type IBAN, sont arrondis au-delà de 15 chiffres. Si ces colonnes comptent, demandez un export avec ces valeurs entre guillemets et un préfixe, ouvrez le CSV dans une app qui permet de définir les colonnes en Texte à l'import (l'assistant d'import d'Excel, LibreOffice), ou gardez le fichier d'origine intact comme référence.",
        ],
      },
      {
        heading: "Enregistrer un CSV que les autres pourront ouvrir",
        body: [
          "Un CSV ne contient que les valeurs d'une seule feuille : ni formules, ni mise en forme, ni autres feuilles. Foglio vous prévient avant l'enregistrement et propose d'enregistrer plutôt en classeur Excel. Quand vous enregistrez bien en CSV, Foglio écrit de l'UTF-8 avec un indicateur d'ordre des octets (pour qu'Excel reconnaisse l'encodage) et utilise `;` comme séparateur sur les Mac réglés sur une région à virgule décimale, comme la France, exactement comme Excel.",
          "Si le fichier part chez quelqu'un dans un autre pays, précisez quel séparateur et quel séparateur décimal vous avez utilisés, ou envoyez plutôt un `.xlsx`. Cela évite tous les problèmes de cette page. Pour les fichiers Excel, voir [comment ouvrir un fichier xlsx sans Excel](/guides/open-xlsx-on-mac-without-excel/).",
        ],
      },
    ],
    faq: [
      {
        q: "Pourquoi mon CSV s'ouvre-t-il dans une seule colonne ?",
        a: "L'app a utilisé le mauvais séparateur : en général, le fichier utilise des points-virgules et l'app attendait des virgules, ou l'inverse. Choisissez le séparateur dans une fenêtre d'import, ou utilisez une app comme Foglio qui le détecte automatiquement.",
      },
      {
        q: "Comment corriger des caractères bizarres comme Ã© dans un CSV ?",
        a: "Le fichier a été lu avec le mauvais encodage, typiquement de l'UTF-8 lu comme du Windows-1252 ou l'inverse. Rouvrez-le en choisissant le bon encodage (UTF-8 dans la plupart des cas), ou avec une app qui le détecte.",
      },
      {
        q: "Comment ouvrir un CSV à points décimaux sur un Mac réglé en français ?",
        a: "Foglio détecte la convention décimale du fichier et lit `1.5` comme un virgule cinq, quelle que soit la région de votre Mac. Il fait de même dans l'autre sens pour un `1,5` sur un Mac réglé en anglais américain. Dans Excel, utilisez l'import de texte et définissez le séparateur décimal dans les options avancées.",
      },
      {
        q: "CSV ou xlsx : lequel est le mieux pour partager ?",
        a: "Le `.xlsx` conserve formules, mise en forme et plusieurs feuilles, sans aucune ambiguïté d'encodage ou de séparateur. Utilisez le CSV quand un système le demande explicitement.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Ouvrir un CSV sur Mac",
    cardText: "Corrigez les CSV en une seule colonne, les accents illisibles et les virgules décimales, avec ou sans Excel.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "free-spreadsheet-apps-for-mac",
    meta: {
      title: "Tableurs gratuits pour Mac : comparatif 2026 | Foglio",
      description:
        "Les tableurs gratuits pour Mac à connaître en 2026 : Numbers, LibreOffice, Google Sheets, Excel pour le web, ONLYOFFICE et Foglio. À qui s'adresse chacun.",
    },
    h1: "Tableurs gratuits pour Mac : un tour d'horizon honnête",
    intro: [
      "Pas besoin de payer pour avoir un tableur sur Mac. Il existe plusieurs options vraiment gratuites, chacune douée pour quelque chose de différent. Ce tour d'horizon est écrit par le projet Foglio, alors prenez notre enthousiasme pour Foglio avec un peu de recul ; nous avons essayé d'être justes sur les points où les autres font mieux.",
      "Ici, « gratuit » signifie que vous pouvez créer, modifier et enregistrer des feuilles de calcul sans payer, et sans période d'essai.",
    ],
    sections: [
      {
        heading: "Apple Numbers",
        body: [
          "**Idéal pour :** les documents personnels soignés et les utilisateurs d'appareils Apple.",
          "Numbers est gratuit, souvent préinstallé, et fonctionne sur Mac, iPhone et iPad avec synchronisation iCloud et collaboration en temps réel. Sa page de tableaux libres et ses modèles donnent des documents soignés sans grand effort. Les modèles premium et les fonctions d'IA demandent un abonnement Apple Creator Studio, mais l'app de base est gratuite.",
          "**Attention :** les fichiers Excel sont importés et convertis en `.numbers`, il faut donc réexporter en `.xlsx` ; la version actuelle exige macOS 26. Plus de détails dans [Numbers ou Foglio](/alternatives/numbers/).",
        ],
      },
      {
        heading: "LibreOffice Calc",
        body: [
          "**Idéal pour :** le tableur de bureau gratuit le plus complet, et les utilisateurs d'OpenDocument.",
          "LibreOffice est open source (MPL-2.0) et fonctionne sous macOS, Windows et Linux. Calc offre des tableaux croisés dynamiques, des macros en Basic et Python avec une prise en charge partielle de VBA, une vaste bibliothèque de fonctions et un excellent import et export des anciens formats. Il fonctionne hors ligne, sans compte et sans fonctions d'IA, par choix.",
          "**Attention :** environ 300 Mo à télécharger, une suite bureautique entière à installer, et une interface qui ne paraît pas native sur macOS. Plus de détails dans [LibreOffice ou Foglio](/alternatives/libreoffice/).",
        ],
      },
      {
        heading: "Google Sheets",
        body: [
          "**Idéal pour :** travailler sur la même feuille avec d'autres personnes.",
          "Google Sheets fonctionne dans n'importe quel navigateur et sur téléphone, avec la meilleure collaboration en temps réel du marché, l'historique des versions, l'automatisation par Apps Script et des fonctions qui récupèrent des données sur le web.",
          "**Attention :** il faut un compte Google, les fichiers sont sur les serveurs de Google, et l'usage hors ligne exige Chrome ou Edge avec une extension. Plus de détails sur la page [alternative à Google Sheets](/alternatives/google-sheets/).",
        ],
      },
      {
        heading: "Excel pour le web",
        body: [
          "**Idéal pour :** les utilisateurs occasionnels d'Excel qui veulent le vrai Excel gratuitement.",
          "Microsoft propose Excel dans le navigateur gratuitement avec un compte Microsoft. Il ouvre fidèlement les fichiers `.xlsx`, puisque c'est Excel, et permet la coédition via OneDrive.",
          "**Attention :** il faut une connexion Internet et OneDrive, et certaines fonctions de la version de bureau (comme l'exécution des macros VBA) ne sont pas disponibles. Excel pour Mac, la version de bureau, exige un abonnement ou une licence pour modifier.",
        ],
      },
      {
        heading: "ONLYOFFICE Desktop Editors",
        body: [
          "**Idéal pour :** ceux qui veulent une suite gratuite proche d'Office, avec une interface à ruban familière.",
          "ONLYOFFICE Desktop Editors est une suite gratuite et open source (AGPL-3.0) pour Mac, Windows et Linux qui utilise Office Open XML (`.xlsx`) comme format natif et comprend un tableur avec tableaux croisés dynamiques.",
          "**Attention :** c'est une app multiplateforme construite sur des technologies web, donc plus lourde à télécharger et moins « Mac » qu'une app native.",
        ],
      },
      {
        heading: "Foglio",
        body: [
          "**Idéal pour :** ouvrir et modifier les fichiers Excel du quotidien rapidement, en privé et en natif.",
          "Foglio est gratuit et open source (MIT / Apache-2.0), écrit en Swift/AppKit avec un moteur en Rust. Il pèse 7,7 Mo au téléchargement, s'ouvre en 0,24 s, modifie directement le `.xlsx`, comprend environ 500 fonctions Excel dans votre langue (`=SOMME()` sur un Mac en français) et détecte l'encodage et le séparateur des CSV. Pas de compte, pas de télémétrie, aucune connexion réseau de sa part. Son interface est en anglais (ou en italien).",
          "**Attention :** c'est une version 1.0 ; pas de tableaux croisés dynamiques (seulement *Summarize by*, plus simple), pas de macros, pas de collaboration, pas de version iPhone ou iPad, et il ne peut pas ouvrir les fichiers protégés par mot de passe. Voir le [comparatif complet](/compare/).",
        ],
      },
      {
        heading: "Tableurs gratuits pour Mac : lequel pour quel usage",
        bullets: [
          "**Des pièces jointes Excel à modifier et renvoyer :** Foglio, LibreOffice ou Excel pour le web.",
          "**Une feuille partagée en famille ou en équipe :** Google Sheets ou Numbers.",
          "**Tableaux croisés ou macros, hors ligne, gratuitement :** LibreOffice Calc.",
          "**De jolis budgets et listes personnels :** Numbers.",
          "**Des données confidentielles qui ne doivent pas quitter votre Mac :** une app de bureau sans cloud : Foglio, LibreOffice, ou Numbers avec iCloud désactivé pour lui.",
          "**Un vieux Mac :** LibreOffice prend en charge macOS 11 et Foglio macOS 14 ; la dernière version de Numbers exige macOS 26.",
        ],
        body: [],
      },
    ],
    faq: [
      {
        q: "Existe-t-il un Excel entièrement gratuit pour Mac ?",
        a: "Excel pour le web est gratuit avec un compte Microsoft ; Excel pour Mac, la version de bureau, exige un abonnement ou une licence pour modifier. Parmi les apps de bureau gratuites qui ouvrent et enregistrent les fichiers Excel, il y a Foglio, LibreOffice Calc et ONLYOFFICE.",
      },
      {
        q: "Quel tableur gratuit est le plus compatible avec Excel ?",
        a: "Excel pour le web, puisque c'est Excel. Parmi les apps de bureau, LibreOffice prend en charge le plus de fonctionnalités d'Excel dans l'ensemble, tandis que Foglio et ONLYOFFICE utilisent le `.xlsx` comme format natif. Testez vos propres fichiers : la compatibilité dépend de leur contenu.",
      },
      {
        q: "Lequel est le plus léger ?",
        a: "Foglio, avec 7,7 Mo à télécharger et environ 20 Mo une fois installé. Google Sheets et Excel pour le web n'installent rien, mais demandent un navigateur et une connexion Internet.",
      },
      {
        q: "Ces apps sont-elles gratuites pour un usage professionnel ?",
        a: "Foglio (MIT / Apache-2.0), LibreOffice (MPL-2.0) et ONLYOFFICE Desktop Editors (AGPL-3.0) peuvent être utilisés au travail sans frais. Numbers est gratuit pour tous. Google et Microsoft proposent des offres professionnelles payantes avec des fonctions supplémentaires.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Tableurs gratuits pour Mac",
    cardText: "Numbers, LibreOffice, Google Sheets, Excel pour le web, ONLYOFFICE et Foglio : à qui s'adresse chacun.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "excel-functions-italian-english",
    meta: {
      title: "Fonctions Excel français–anglais : la liste | Foglio",
      description:
        "RECHERCHEV se dit VLOOKUP, SOMME se dit SUM, SI se dit IF : plus de 50 fonctions Excel en français et en anglais, et pourquoi on utilise le point-virgule.",
    },
    h1: "Les fonctions Excel en français et en anglais",
    intro: [
      "Excel traduit les noms de ses fonctions. Sur un Mac en français, `VLOOKUP` devient `RECHERCHEV`, `SUM` devient `SOMME` et `IF` devient `SI`, et les arguments sont séparés par des points-virgules. Pratique tant que tout se passe en français, déroutant dès que l'on suit un tutoriel en anglais, copie une formule trouvée sur un forum ou travaille avec des collègues à l'étranger.",
      "Voici les fonctions Excel les plus utilisées en anglais et en français, classées par thème, suivies des règles qui piègent souvent : séparateurs, virgule décimale, et ce qui se passe quand un fichier change de langue.",
    ],
    sections: [
      {
        heading: "Mathématiques et statistiques : SOMME, NB.SI…",
        body: [],
        bullets: fnList(FN_MATH),
      },
      {
        heading: "Logique : SI, ET, OU",
        body: ["Les valeurs logiques s'écrivent `VRAI` et `FAUX` en français (`TRUE` et `FALSE` en anglais)."],
        bullets: fnList(FN_LOGIC),
      },
      {
        heading: "RECHERCHEV, RECHERCHEX et autres fonctions de recherche",
        body: [],
        bullets: fnList(FN_LOOKUP),
      },
      {
        heading: "Texte",
        body: [],
        bullets: fnList(FN_TEXT),
      },
      {
        heading: "Dates et heures",
        body: ["Certaines fonctions ont le même nom dans toutes les langues, par exemple `MAX`, `MIN`, `LET`, `LAMBDA` et `DATEDIF`."],
        bullets: fnList(FN_DATE),
      },
      {
        heading: "Points-virgules et virgule décimale",
        body: [
          "En France, un et demi s'écrit `1,5`. La virgule étant déjà prise, Excel en français sépare les arguments des fonctions par un **point-virgule** : `=SI(A1>1,5;\"oui\";\"non\")` est la forme française de `=IF(A1>1.5,\"yes\",\"no\")`. La Belgique, l'Italie, l'Allemagne, l'Espagne et la majeure partie de l'Europe continentale fonctionnent de la même façon.",
          "C'est la région choisie dans les réglages de votre Mac qui décide du séparateur, pas seulement la langue : un Mac en anglais réglé sur la région France utilise aussi la virgule décimale.",
        ],
      },
      {
        heading: "Passer une formule anglaise dans Excel en français",
        body: [
          "Un fichier `.xlsx` enregistre toujours les formules en anglais, avec des virgules : `SUM(A1:A10)`, pas `SOMME`. Chaque copie d'Excel les traduit dans la langue de son utilisateur à l'affichage. Un fichier créé dans un Excel américain s'ouvre donc sans problème dans un Excel français, avec les noms français.",
          "Copier-coller le texte d'une formule, c'est autre chose : coller `=VLOOKUP(A2,B:C,2,FALSE)` depuis un site en anglais dans Excel en français donne une erreur. Traduisez les noms avec la liste ci-dessus, remplacez les virgules par des points-virgules et `FALSE` par `FAUX` : `=RECHERCHEV(A2;B:C;2;FAUX)`.",
        ],
      },
      {
        heading: "Les formules en français dans Foglio",
        body: [
          "[Foglio](/), le tableur gratuit et open source pour Mac, suit la même convention qu'Excel. Sur un Mac en français, vous tapez `=SOMME(A1:A10;B2)`, `RECHERCHEV` ou `SIERREUR` avec des points-virgules et la virgule décimale ; sur le disque, le fichier garde la forme anglaise d'Excel. L'italien (`SOMMA`, `CERCA.VERT`), l'allemand (`SUMME`, `SVERWEIS`) et l'espagnol (`SUMA`, `BUSCARV`) fonctionnent de la même façon, et l'explorateur de fonctions (Insert Function) liste les ~500 fonctions sous leur nom localisé.",
          "L'interface de Foglio est en anglais et en italien, et les courtes descriptions des fonctions dans la saisie semi-automatique sont en anglais : en français, ce sont les formules qui suivent votre langue. Si vous suivez des tutoriels en anglais, l'affichage des formules (Show Formulas, menu View) vous aide à comparer ce que vous avez tapé avec le tutoriel. Google Sheets, LibreOffice et Numbers localisent aussi les noms de fonctions selon vos réglages.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment dit-on RECHERCHEV en anglais ?",
        a: "`VLOOKUP`. Les arguments sont les mêmes, mais séparés par des virgules dans Excel en anglais : `=VLOOKUP(A2,B:C,2,FALSE)` au lieu de `=RECHERCHEV(A2;B:C;2;FAUX)`. RECHERCHEX se dit `XLOOKUP` et RECHERCHEH `HLOOKUP`.",
      },
      {
        q: "Comment dit-on NB.SI en anglais ?",
        a: "`COUNTIF`. De même, NB.SI.ENS est `COUNTIFS`, SOMME.SI est `SUMIF`, SIERREUR est `IFERROR` et NBVAL est `COUNTA`.",
      },
      {
        q: "Pourquoi une formule anglaise donne-t-elle une erreur dans Excel en français ?",
        a: "Généralement parce qu'elle utilise des noms anglais ou des virgules entre les arguments. Utilisez les noms français, des points-virgules entre les arguments et la virgule décimale.",
      },
      {
        q: "Puis-je utiliser les noms de fonctions anglais ?",
        a: "Excel suit la langue d'Office et de votre système. Foglio suit la langue et la région de votre Mac : si vous les passez en anglais dans Réglages Système ▸ Général ▸ Langue et région, vous tapez aussi les fonctions en anglais.",
      },
      {
        q: "Un fichier créé avec Excel en français fonctionne-t-il dans Excel en anglais ?",
        a: "Oui. Le fichier enregistre les formules en anglais en interne, donc chaque version d'Excel, et Foglio aussi, les affiche dans sa propre langue.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Fonctions Excel : français ↔ anglais",
    cardText: "Plus de 50 noms de fonctions Excel traduits, de SOMME à RECHERCHEV, et pourquoi les formules françaises utilisent le point-virgule.",
  },
];
