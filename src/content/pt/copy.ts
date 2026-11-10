import type { SiteCopy } from "../types";

// Brazilian Portuguese (pt-BR). Note: the Foglio app itself is in English and Italian only,
// and formula names are not localized for Portuguese (English names are used on a Portuguese Mac).
export const copyPt: SiteCopy = {
  ui: {
    navCompare: "Comparar",
    navTechnology: "Tecnologia",
    navAlternatives: "Alternativas",
    navGuides: "Guias",
    navDownload: "Baixar",
    download: "Baixar para Mac",
    downloadSub: "Grátis · macOS 14+ · Apple silicon e Intel · 7,5 MB",
    starOnGitHub: "Deixe uma estrela no GitHub",
    readMore: "Saiba mais",
    faqTitle: "Perguntas frequentes",
    updated: "Atualizado em",
    languageLabel: "Idioma",
    sources: "Fontes",
    allReleases: "Todas as versões e checksums",
    smallerIsBetter: "menor é melhor",
    lookupTitle: "1.000 VLOOKUP (PROCV) em 10.000 linhas",
    lookupSub: "{before} segundos no motor original: cerca de {times}× mais rápido",
    tested: "Testado em um Mac com processador M4, macOS 27.",
    opens: "Abre",
    arch: [
      "Janelas, menus, documentos e uma grade própria desenhada com AppKit",
      "Núcleo em Rust",
      "Modelo da pasta de trabalho, motor de fórmulas IronCalc (fork com correções), xlsx / xls / ods / csv",
      "Arquitetura: um app em Swift/AppKit chama um núcleo em Rust por meio de uma interface C simples",
    ],
    skipToContent: "Pular para o conteúdo",
    footerTagline: "Uma planilha grátis e de código aberto para Mac. Nativa, levíssima e compatível com Excel.",
    footerLicense: "O Foglio é software livre, com licença dupla MIT e Apache-2.0.",
    footerTrademark:
      "Excel é marca registrada da Microsoft Corporation. Numbers é marca registrada da Apple Inc. Google Sheets é marca registrada da Google LLC. LibreOffice é marca registrada da The Document Foundation. O Foglio é um projeto independente, sem vínculo com nenhuma delas e sem o endosso de nenhuma delas.",
    notFoundTitle: "Esta planilha está vazia",
    notFoundText: "A página que você procurava não existe ou mudou de endereço. Volte para a página inicial ou abra um dos guias.",
    backHome: "Voltar para a página inicial",
    yes: "Sim",
    no: "Não",
    partial: "Em parte",
    home: "Página inicial do Foglio",
    menu: "Menu",
    openSource: "Código aberto",
    releases: "Versões",
    issues: "Relatar um problema",
    moreGuides: "Mais guias",
    moreAlternatives: "Outras alternativas",
    screenshotAlt: "Foglio num Mac com um arquivo do Excel aberto (interface em inglês): uma planilha de vendas mensais com receita, custos, lucro e margem, linha de totais e um gráfico de colunas",
  },

  meta: {
    home: {
      title: "Foglio: planilha grátis para Mac, compatível com Excel",
      description:
        "O Foglio é uma planilha grátis e de código aberto para macOS. Abre e salva arquivos xlsx do Excel, tem ~500 funções e baixa em 7,5 MB. Sem conta.",
      ogTitle: "Foglio: planilha grátis, nativa e de código aberto para Mac",
    },
    compare: {
      title: "Foglio vs Excel, Numbers, LibreOffice e Google Sheets",
      description:
        "Foglio vs Excel, Numbers, LibreOffice e Google Sheets no Mac: preço, tamanho, velocidade, suporte a xlsx, macros, tabelas dinâmicas e privacidade.",
    },
    technology: {
      title: "Como o Foglio é feito: Swift, AppKit e Rust | Foglio",
      description:
        "Por dentro do Foglio: um app nativo em Swift/AppKit sobre um motor em Rust (fork do IronCalc). Por que baixa em 7,5 MB, abre em 0,24 s e calcula rápido.",
    },
    download: {
      title: "Baixar o Foglio para Mac: planilha grátis | Foglio",
      description:
        "Baixe o Foglio 1.0, planilha grátis para macOS 14 ou posterior. App universal para Apple silicon e Intel, imagem de disco de 7,5 MB. Veja como instalar.",
    },
    alternatives: {
      title: "Alternativas ao Excel, Numbers e Google Sheets | Foglio",
      description:
        "Procurando uma alternativa ao Excel, ao Numbers, ao LibreOffice Calc ou ao Google Sheets no Mac? Guias honestos sobre quando o Foglio serve e quando não.",
    },
    guides: {
      title: "Guias de planilha no Mac: abrir xlsx, xls e CSV | Foglio",
      description:
        "Guias práticos de planilha no Mac: abrir arquivos do Excel e CSV sem Excel, corrigir acentos e colunas, entender os nomes das funções e muito mais.",
    },
  },

  home: {
    eyebrow: "Grátis · Código aberto · Nativo para macOS",
    h1: "A planilha grátis para Mac que abre seus arquivos do Excel",
    subtitle:
      "O Foglio é uma planilha grátis para Mac: um app pequeno, rápido e nativo para o dia a dia. Abre e salva `.xlsx`, abre `.xls`, `.ods` e `.csv` e entende ~500 funções do Excel. Sem assinatura, sem conta, sem anúncios.",
    badges: [
      "Grátis para sempre, MIT / Apache-2.0",
      "Download de 7,5 MB, abre em 0,24 s",
      "Swift/AppKit nativo, sem Electron",
      "Sem conta, sem telemetria",
    ],
    statLabels: {
      download: "Tamanho do download",
      launch: "Da abertura à primeira janela",
      memory: "Memória com uma planilha vazia",
      open100k: "Abrir um xlsx de 100.000 linhas",
      recalc: "Editar e recalcular 300 mil fórmulas",
      price: "Preço, para sempre",
    },
    featuresTitle: "Tudo o que você precisa nas planilhas do dia a dia",
    featuresIntro:
      "O Foglio cobre o que a maioria das pessoas realmente faz numa planilha: listas, orçamentos, notas e faturas, relatórios, dados que chegam em arquivos do Excel de outras pessoas. Parece o Excel e se comporta como um app de Mac.",
    features: [
      {
        icon: "file",
        title: "Abre arquivos do Excel",
        text: "Lê e grava `.xlsx` com formatação, gráficos, imagens, comentários e validação de dados. Também abre `.xls`, `.xlsb`, `.xlsm`, `.ods`, `.csv` e `.tsv`.",
      },
      {
        icon: "function",
        title: "~500 funções do Excel",
        text: "SUMIFS, XLOOKUP, FILTER, SORT, UNIQUE, LET, LAMBDA, datas, texto, estatística e finanças. 191 das 195 funções auditadas batem com o Excel em todos os testes.",
      },
      {
        icon: "globe",
        title: "Nomes de função padrão do Excel",
        text: "Num Mac em português, você digita as funções em inglês (`=SUM(A1:A10)`, `VLOOKUP`), como na maioria dos tutoriais. Em italiano, alemão, espanhol e francês, elas aparecem no idioma local.",
      },
      {
        icon: "bolt",
        title: "Rápido em planilhas grandes",
        text: "Uma pasta de trabalho com 100.000 linhas e 300.000 fórmulas abre em 1,1 s e recalcula em 16 ms depois de uma edição, graças ao recálculo incremental.",
      },
      {
        icon: "feather",
        title: "Pequeno e leve",
        text: "Download de 7,5 MB, 19 MB instalado, cerca de 58 MB de memória com uma planilha vazia e 0 % de CPU em repouso. As ventoinhas ficam quietas.",
      },
      {
        icon: "apple",
        title: "Um app de Mac de verdade",
        text: "Feito em Swift e AppKit: itens recentes, abas de janela, modo escuro, impressão e exportação em PDF, zoom com pinça e os atalhos de teclado do Excel para Mac.",
      },
      {
        icon: "chart",
        title: "Gráficos e imagens",
        text: "Gráficos de colunas, barras, linhas, pizza, rosca, área e dispersão, salvos no `.xlsx`. Insira, recorte e comprima imagens; até clip-arts antigos em EMF/WMF aparecem.",
      },
      {
        icon: "filter",
        title: "Ferramentas de dados",
        text: "Classificar, AutoFiltro, Localizar e Substituir, Remover Duplicatas, Texto para Colunas, listas suspensas de validação, formatação condicional e um resumo simples (Summarize by).",
      },
      {
        icon: "lock",
        title: "Privado por padrão",
        text: "Sem conta, sem anúncios, sem métricas. O Foglio não faz nenhuma conexão de rede por conta própria: seus arquivos ficam no seu Mac.",
      },
    ],
    speedTitle: "Tão leve que você esquece que está aberto",
    speedIntro:
      "O Foglio não carrega um motor de navegador, um runtime Java nem um framework embutido. Por isso baixa em segundos e abre antes de você mexer o mouse.",
    speedNote:
      "Números do Foglio medidos em um MacBook Air M4 (16 GB), macOS 27, Foglio 1.0, novembro de 2026: medianas de várias execuções, memória segundo o `footprint`. Os tamanhos dos concorrentes são os de download ou instalação informados nas lojas e páginas de download em novembro de 2026.",
    freeTitle: "Uma planilha grátis para Mac, e continua grátis",
    freeText: [
      "O Foglio não tem preço, período de teste, assinatura nem versão paga. Você não precisa de ID Apple, conta Microsoft ou conta Google para usá-lo, e não há anúncios.",
      "O código-fonte está no [GitHub](https://github.com/GetFoglio/foglio) sob as licenças MIT e Apache-2.0: qualquer pessoa pode ler, compilar, corrigir ou criar um fork. Suas planilhas são arquivos `.xlsx` padrão que abrem no Excel, no Numbers, no LibreOffice e no Google Sheets: nada de ficar preso a um app.",
    ],
    compareTitle: "Como ele se compara",
    compareText:
      "O Excel tem mais recursos, o Google Sheets tem colaboração ao vivo, o Numbers tem modelos lindos. O Foglio é a opção gratuita, leve e nativa que abre arquivos do Excel direito. Veja o [comparativo completo](/compare/) com todos os detalhes, inclusive onde os outros ganham.",
    techTitle: "Feito como um app de Mac deve ser",
    techText:
      "Uma interface em Swift/AppKit com grade própria, sobre um motor de cálculo em Rust (um fork do IronCalc com correções) ligado como uma simples biblioteca estática. Leia [como o Foglio é feito](/technology/) e por que isso o deixa pequeno e rápido.",
    formatsTitle: "Abre os arquivos que mandam para você",
    formatsText:
      "`.xlsx` e `.xlsm` do Excel, `.xls` antigos e `.xlsb` binários, `.ods` do LibreOffice e `.csv` / `.tsv` com detecção automática de codificação, delimitador e separador decimal. Salva em `.xlsx` e exporta CSV e PDF. Veja os guias para [abrir arquivo xlsx no Mac sem Excel](/guides/open-xlsx-on-mac-without-excel/), [abrir arquivos .xls antigos](/guides/open-xls-on-mac/) e [abrir CSV no Mac](/guides/open-csv-on-mac/).",
    alternativesTitle: "Vindo de outro app?",
    alternativesText:
      "Notas honestas para quem vem do [Excel para Mac](/alternatives/excel-for-mac/), do [Numbers](/alternatives/numbers/), do [LibreOffice Calc](/alternatives/libreoffice/) ou do [Google Sheets](/alternatives/google-sheets/), incluindo quando vale continuar com eles. Estão todas na [página de alternativas](/alternatives/).",
    ctaTitle: "Teste com as suas próprias planilhas",
    ctaText:
      "São 7,5 MB de download e não custa nada. O Foglio 1.0 é uma primeira versão, então guarde cópias de segurança dos arquivos importantes enquanto testa.",
    faq: [
      {
        q: "O Foglio é grátis mesmo?",
        a: "Sim. Não há preço, período de teste, assinatura, compra dentro do app nem anúncios. O Foglio é software de código aberto sob as licenças MIT e Apache-2.0.",
      },
      {
        q: "O Foglio abre e salva arquivos do Excel?",
        a: "Sim. Ele lê e grava `.xlsx` com formatação, gráficos, imagens, comentários, validação de dados e formatação condicional. Também abre `.xls`, `.xlsb`, `.xlsm` e `.ods`, além de arquivos de texto CSV/TSV. Salva em `.xlsx` e exporta CSV e PDF.",
      },
      {
        q: "Ele substitui o Microsoft Excel por completo?",
        a: "Nas planilhas do dia a dia, muitas vezes sim. Em alguns trabalhos, não: o Foglio não executa macros (VBA), não tem tabelas dinâmicas de verdade (oferece o *Summarize by*, mais simples), ignora formas e SmartArt e não abre arquivos protegidos por senha. O [comparativo](/compare/) lista as diferenças.",
      },
      {
        q: "O app está em português?",
        a: "Não. A interface do Foglio está em inglês e italiano. Num Mac em português, os menus aparecem em inglês e as funções são digitadas com os nomes em inglês (`SUM`, `IF`, `VLOOKUP`), não `SOMA` ou `PROCV`. Os arquivos são `.xlsx` padrão e abrem normalmente no Excel em português.",
      },
      {
        q: "Em quais Macs ele roda?",
        a: "Em qualquer Mac com macOS 14 Sonoma ou posterior, com Apple silicon ou Intel. É um único app universal.",
      },
      {
        q: "Por que o macOS diz que o Foglio é de um desenvolvedor não identificado?",
        a: "O Foglio 1.0 não é assinado com um Developer ID pago da Apple, então o macOS pede confirmação na primeira vez. No macOS 15 ou posterior, vá em Ajustes do Sistema ▸ Privacidade e Segurança e clique em **Abrir Mesmo Assim**; no macOS 14, clique com o botão direito no app e escolha **Abrir**. A [página de download](/download/) explica cada passo.",
      },
      {
        q: "O Foglio coleta dados ou exige conta?",
        a: "Não. Não há conta, login, métricas nem telemetria. O Foglio não faz conexões de rede por conta própria; ele só abre um link na web quando você clica num hiperlink dentro de uma célula.",
      },
      {
        q: "Dá para digitar fórmulas em português?",
        a: "Não. O Foglio traduz os nomes das funções para italiano, alemão, espanhol e francês, mas não para português. Num Mac em português, use os nomes em inglês com vírgula entre os argumentos: `=IF(A1>10,\"sim\",\"não\")`. Os arquivos sempre guardam a forma padrão em inglês, então abrem corretamente em qualquer Excel. Veja a [lista de funções italiano–inglês](/guides/excel-functions-italian-english/).",
      },
      {
        q: "O Foglio está pronto?",
        a: "O Foglio 1.0 dá conta das planilhas do dia a dia do começo ao fim e é coberto por 69 testes automatizados de interface, mas é uma primeira versão. Guarde cópias dos arquivos importantes e relate problemas no [GitHub](https://github.com/GetFoglio/foglio/issues).",
      },
    ],
  },

  compare: {
    h1: "Foglio vs Excel, Numbers, LibreOffice e Google Sheets",
    intro: [
      "Não existe uma única planilha ideal para Mac. Existe a que combina com o que você faz. Esta página coloca o Foglio ao lado dos quatro apps entre os quais os usuários de Mac mais costumam escolher, e é honesta de propósito: onde outro app é melhor, a tabela diz.",
      "Resumindo: o **Excel** é o mais completo e o mais caro; o **Numbers** é grátis e bonito, mas converte os arquivos do Excel; o **LibreOffice Calc** é grátis e poderoso, mas grande e não é um app nativo de Mac; o **Google Sheets** é grátis e colaborativo, mas vive no navegador e exige conta Google. O **Foglio** é grátis, de código aberto, minúsculo e nativo, e edita `.xlsx` diretamente, com menos recursos avançados que o Excel.",
    ],
    tableTitle: "Foglio, Excel, Numbers, LibreOffice e Google Sheets lado a lado",
    tableNote:
      "Preços e recursos conferidos nas páginas oficiais de cada fabricante em novembro de 2026 (fontes abaixo); os preços do Excel e do Numbers são os de tabela no Brasil, em reais, e podem mudar. Os números do Foglio foram medidos em um MacBook Air M4, macOS 27, Foglio 1.0.",
    sections: [
      {
        heading: "Qual escolher?",
        body: [
          "Escolha a ferramenta pelo trabalho, não pela marca. A maioria das pessoas usa só uma fração do que qualquer um desses apps faz.",
        ],
        bullets: [
          "**Escolha o Foglio** se você quer um app grátis, rápido e privado que abre e salva arquivos do Excel no Mac, sem conta e sem assinatura.",
          "**Escolha o Excel** se depende de macros (VBA), Power Query, tabelas dinâmicas de verdade, gráficos avançados, ou precisa reproduzir os arquivos da empresa nos mínimos detalhes.",
          "**Escolha o Numbers** se monta documentos que precisam ficar bonitos, principalmente para uso pessoal, e vive no ecossistema da Apple, incluindo iPhone e iPad.",
          "**Escolha o LibreOffice Calc** se precisa de um app grátis com tabelas dinâmicas, macros e muitos recursos, e não se importa com um app grande e não nativo.",
          "**Escolha o Google Sheets** se várias pessoas editam a mesma planilha ao mesmo tempo e você não se incomoda em trabalhar no navegador com uma conta Google.",
        ],
      },
      {
        heading: "Onde o Foglio ganha",
        body: [
          "O Foglio é, com folga, o menor app deste comparativo: 7,5 MB de download contra centenas de megabytes ou gigabytes das alternativas de desktop. Abre uma janela utilizável em 0,24 s, usa cerca de 58 MB de memória com uma planilha vazia e fica em 0 % de CPU em repouso.",
          "É grátis sem condições, de código aberto, e funciona totalmente offline e sem conta. Ao contrário do Numbers, edita arquivos `.xlsx` no próprio formato em vez de convertê-los, e usa os mesmos nomes de função do Excel (em inglês num Mac em português).",
        ],
      },
      {
        heading: "Onde os outros ganham",
        body: [
          "O Excel é muito mais completo: macros, Power Query, tabelas dinâmicas de verdade, muito mais tipos de gráfico e o comportamento de referência para qualquer arquivo do Excel. O LibreOffice também tem tabelas dinâmicas e macros, além de ferramentas de desenho e muito mais formatos de importação e exportação. O Google Sheets tem a melhor colaboração em tempo real e roda em qualquer aparelho com navegador. Numbers e Excel têm apps para iPhone e iPad; o Foglio é só para Mac.",
          "Os apps grandes também estão em português, inclusive os nomes das funções (o Excel em português usa `PROCV` e `SOMA`); o Foglio tem interface só em inglês e italiano. E o Foglio é a versão 1.0 de um pequeno projeto de código aberto, enquanto as grandes suítes têm décadas de refinamento. Se um arquivo é importante, guarde uma cópia.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual é a melhor alternativa gratuita ao Excel para Mac?",
        a: "Depende do que você precisa. O Foglio é a opção grátis mais leve que edita `.xlsx` diretamente. O LibreOffice Calc é o app de desktop grátis mais completo. O Google Sheets é o melhor para colaboração. O Numbers já vem instalado e é grátis, mas converte os arquivos do Excel para o formato dele. Nosso [panorama de apps de planilha grátis](/guides/free-spreadsheet-apps-for-mac/) traz mais opções.",
      },
      {
        q: "O Foglio suporta macros ou VBA?",
        a: "Não. O Foglio abre arquivos `.xlsm`, mas não executa as macros. Se o seu trabalho depende de VBA, use o Microsoft Excel; o LibreOffice também roda parte do VBA.",
      },
      {
        q: "O Foglio tem tabela dinâmica?",
        a: "Ainda não tem tabelas dinâmicas de verdade. O *Summarize by* cria uma planilha de resumo atualizada com fórmulas SUMIFS e COUNTIFS, o que resolve os casos simples. Excel, LibreOffice, Numbers e Google Sheets têm tabelas dinâmicas.",
      },
      {
        q: "Várias pessoas podem editar um arquivo do Foglio ao mesmo tempo?",
        a: "Não. O Foglio é um app de desktop para uma pessoa por vez. Para edição simultânea, o Google Sheets ou o Excel com OneDrive são a melhor escolha.",
      },
      {
        q: "Os preços dos concorrentes estão atualizados?",
        a: "Foram conferidos nas páginas oficiais em novembro de 2026 e são os preços de tabela no Brasil, em reais. Os preços mudam e variam por país, então confira os links das fontes antes de comprar.",
      },
    ],
  },

  technology: {
    h1: "Como o Foglio é feito, e por que isso o deixa pequeno e rápido",
    intro: [
      "A maioria dos apps de desktop modernos traz uma cópia de um navegador, um runtime Java ou um grande framework multiplataforma. O Foglio não traz nenhum deles. É um app nativo de Mac em Swift e AppKit, com o motor de planilha escrito em Rust e ligado diretamente ao app.",
      "Esta página explica a arquitetura duas vezes: primeiro em palavras simples, depois com detalhes suficientes para um desenvolvedor se orientar no [código-fonte](https://github.com/GetFoglio/foglio).",
    ],
    sections: [
      {
        heading: "A versão curta",
        body: [
          "Pense no Foglio como duas partes. A parte que você vê (janelas, menus, a grade de células) é feita com as ferramentas da própria Apple, então tem a aparência e o comportamento de qualquer outro app de Mac. A parte que faz as contas (ler arquivos, entender fórmulas, recalcular) é um motor separado escrito em Rust, uma linguagem que gera programas muito rápidos e compactos.",
          "As duas partes conversam por uma interface pequena e simples. Não há nada no meio: nenhum navegador escondido, nenhuma máquina virtual, nenhum runtime para baixar. É por isso que o app inteiro baixa em 7,5 MB, abre em 0,24 s e precisa de cerca de 58 MB de memória com uma planilha vazia.",
        ],
      },
      {
        heading: "O app de Mac: Swift e AppKit",
        body: [
          "A interface é escrita em Swift sobre o AppKit, o framework por trás do Finder e da maioria dos apps do próprio Mac. Os documentos são documentos reais do macOS, então itens recentes, Salvar Como, Reverter, Duplicar, abas de janela, tela cheia, modo escuro, impressão e exportação em PDF funcionam como você espera.",
          "A planilha em si é uma grade `NSView` própria, não um controle de tabela. Ela pede ao motor só as células visíveis, em lotes prontos para desenhar, o que mantém a rolagem suave mesmo com centenas de milhares de linhas. Gráficos, imagens e a barra de fórmulas também são desenhados pelo app.",
          "O Foglio tem ainda seu próprio leitor de metarquivos EMF e WMF, o formato de imagem vetorial dos documentos antigos do Office (clip-arts, equações do MathType, diagramas do Visio colados). Imagens que outros apps de Mac mostram como caixas vazias aparecem direitinho e são salvas de volta sem alterações.",
        ],
      },
      {
        heading: "O motor: Rust e um IronCalc com correções",
        body: [
          "As fórmulas são interpretadas e calculadas pelo [IronCalc](https://github.com/ironcalc/IronCalc), um motor de planilha de código aberto em Rust. O Foglio usa um fork do IronCalc 0.9.1 com correções, e cada mudança está marcada e documentada no repositório.",
          "O fork adiciona **recálculo incremental**: quando você edita uma célula, só as fórmulas que dependem dela são recalculadas, e não a pasta de trabalho inteira. Numa pasta com 100.000 linhas e 300.000 fórmulas, uma edição leva 16 ms; um recálculo completo leva 64 ms.",
          "Ele também adiciona **buscas indexadas**. A primeira busca com VLOOKUP, MATCH ou XLOOKUP num intervalo lê esse intervalo uma vez e monta um índice hash; as buscas seguintes são uma única consulta. 1.000 VLOOKUP exatos em 10.000 linhas passaram de 1.703 ms no IronCalc original para 1,3 ms no fork do Foglio. O fork também corrige uma dúzia de funções, de modo que 191 das 195 funções da auditoria de compatibilidade do Foglio batem com o Excel em todos os testes.",
        ],
        bullets: [
          "Arquivos `.xls` antigos, `.xlsb` binários e `.ods` do LibreOffice são lidos com o [calamine](https://github.com/tafia/calamine), um leitor rápido em Rust.",
          "Arquivos CSV e TSV passam por um importador em Rust que detecta a codificação do texto, o delimitador e o separador decimal.",
          "Fórmulas digitadas em italiano, alemão, espanhol ou francês são convertidas para a forma padrão do Excel em inglês antes de serem gravadas. Em português, as funções já são digitadas em inglês.",
        ],
      },
      {
        heading: "A ponte: uma interface C simples",
        body: [
          "O motor em Rust é compilado como biblioteca estática e expõe uma pequena interface C (`foglio_core.h`): abrir e salvar um arquivo, editar uma célula, devolver um lote de células visíveis. O Swift chama essa interface diretamente por um bridging header. Não há bindings gerados, frameworks nem mensagens entre processos, então uma chamada ao motor custa mais ou menos o mesmo que uma chamada de função comum.",
        ],
      },
      {
        heading: "Sem projeto do Xcode",
        body: [
          "O Foglio é compilado com dois comandos: o `cargo` compila a biblioteca em Rust e o `swiftc` compila o app e faz a ligação. Um script de shell gera um app universal para Apple silicon e Intel e o empacota numa imagem de disco com o `hdiutil` da própria Apple. Você precisa das Command Line Tools do Xcode e do Rust; o Xcode completo não é necessário.",
          "Menos camadas significam menos coisas para dar errado, compilações mais rápidas e um projeto que qualquer pessoa consegue ler de ponta a ponta.",
        ],
      },
      {
        heading: "Testado com eventos reais de teclado e mouse",
        body: [
          "O Foglio tem 69 testes de interface que controlam o app de verdade com eventos reais de teclado e mouse: digitar fórmulas, preencher intervalos, classificar, desfazer, salvar e reabrir arquivos. Os importadores de arquivo e o motor de fórmulas têm suas próprias suítes de testes em Rust, e um modo especial confere cada recálculo incremental contra um recálculo completo.",
        ],
      },
      {
        heading: "Por que isso deixa o Foglio pequeno e rápido",
        body: [
          "Um app em Electron carrega uma cópia completa do navegador Chromium, normalmente bem mais de 100 MB antes de fazer qualquer coisa. Uma suíte em Java ou multiplataforma carrega seu runtime e seu próprio toolkit de interface. O Foglio carrega só o próprio código e usa os frameworks que já existem em todo Mac.",
          "O núcleo em Rust é compilado com otimização completa na ligação (LTO) e sem símbolos de depuração. O resultado é um app universal de cerca de 19 MB em disco, 7,5 MB como download compactado, que fica em 0 % de CPU em repouso.",
        ],
      },
    ],
    faq: [
      {
        q: "O Foglio é um app Electron ou web?",
        a: "Não. É um app AppKit nativo escrito em Swift. Não há nenhum motor de navegador dentro dele.",
      },
      {
        q: "Ele roda nativamente no Apple silicon?",
        a: "Sim. O Foglio é um app universal com código nativo tanto para Apple silicon (arm64) quanto para Intel (x86_64).",
      },
      {
        q: "Posso compilar o Foglio eu mesmo?",
        a: "Sim. Instale as Command Line Tools do Xcode e o Rust e rode `scripts/build.sh`. O [README](https://github.com/GetFoglio/foglio#building-from-source) traz os comandos exatos.",
      },
      {
        q: "As mudanças no IronCalc são enviadas ao projeto original?",
        a: "O fork é de código aberto sob as mesmas licenças do IronCalc, e cada mudança está marcada com um comentário `Foglio fork:` e descrita em `third_party/README.md`, para que possa ser revisada e reaproveitada.",
      },
    ],
  },

  download: {
    h1: "Baixar o Foglio para Mac",
    intro: [
      "O Foglio 1.0 é grátis. Uma única imagem de disco universal funciona em qualquer Mac com macOS 14 Sonoma ou posterior, seja Apple silicon ou Intel.",
      "É uma primeira versão: dá conta das planilhas do dia a dia do começo ao fim, mas guarde cópias dos arquivos importantes. A interface do app está em inglês (e italiano).",
    ],
    steps: [
      {
        title: "Baixe a imagem de disco",
        text: "Clique no botão de download para baixar o `Foglio-1.0.dmg` (7,5 MB) da página de versões do projeto no GitHub.",
      },
      {
        title: "Arraste o Foglio para Aplicativos",
        text: "Abra a imagem de disco e arraste o ícone do Foglio para o atalho da pasta Aplicativos ao lado. Depois, ejete a imagem de disco.",
      },
      {
        title: "Abra pela primeira vez",
        text: "Na primeira vez, o macOS pede confirmação porque o Foglio não é assinado com um Developer ID pago da Apple. Os passos estão logo abaixo; você só faz isso uma vez.",
      },
      {
        title: "Abra suas planilhas",
        text: "Clique duas vezes num arquivo `.xlsx` e escolha o Foglio em Abrir Com, ou arraste os arquivos para o ícone do Foglio no Dock.",
      },
    ],
    gatekeeperTitle: "“Desenvolvedor não identificado”: como abrir o Foglio na primeira vez",
    gatekeeperText: [
      "O Foglio 1.0 tem assinatura ad hoc, e não uma assinatura com notarização feita com uma conta paga de desenvolvedor da Apple. Por isso o Gatekeeper não pode atestar o app e mostra um aviso na primeira vez que você o abre. Isso é normal em pequenos projetos de código aberto, e você pode ler cada linha do [código-fonte](https://github.com/GetFoglio/foglio) ou compilar o app você mesmo.",
      "**macOS 15 Sequoia ou posterior:** clique duas vezes no Foglio e feche o aviso. Abra **Ajustes do Sistema ▸ Privacidade e Segurança**, role até a mensagem sobre o Foglio, clique em **Abrir Mesmo Assim** e confirme com sua senha ou com o Touch ID.",
      "**macOS 14 Sonoma:** na pasta Aplicativos, clique com o botão direito (ou com Control pressionado) no Foglio, escolha **Abrir** e clique em **Abrir** na janela que aparece.",
      "Depois disso, o Foglio abre normalmente como qualquer outro app.",
    ],
    requirementsTitle: "Requisitos",
    requirements: [
      "macOS 14 Sonoma ou posterior",
      "Mac com Apple silicon ou Intel (app universal)",
      "Cerca de 19 MB de espaço em disco",
      "Não precisa de conta nem de conexão com a internet",
    ],
    sourceTitle: "Prefere compilar você mesmo?",
    sourceText: [
      "O Foglio é de código aberto sob MIT e Apache-2.0. Com as Command Line Tools do Xcode e o Rust instalados, o `scripts/build.sh` gera o mesmo app universal a partir do código-fonte em poucos minutos, sem o Xcode.",
      "Notas de versão, versões anteriores e o rastreador de problemas estão no [GitHub](https://github.com/GetFoglio/foglio/releases). Quer saber como funciona por dentro? Leia sobre [a tecnologia](/technology/).",
    ],
    faq: [
      {
        q: "O download é seguro?",
        a: "A imagem de disco é gerada a partir do código-fonte público e publicada na página de versões do projeto no GitHub. O aviso do macOS aparece porque o app não é notarizado com uma conta paga da Apple, não porque algo foi detectado nele.",
      },
      {
        q: "Como atualizo o Foglio?",
        a: "O Foglio não procura atualizações sozinho, porque não faz conexões de rede. Baixe a nova versão nesta página ou nas versões do GitHub e substitua o app na pasta Aplicativos.",
      },
      {
        q: "Como desinstalo?",
        a: "Arraste o Foglio da pasta Aplicativos para o Lixo. Suas planilhas são arquivos comuns e continuam onde você as salvou.",
      },
      {
        q: "Posso deixar o Foglio como app padrão para arquivos xlsx?",
        a: "Sim. Selecione um arquivo `.xlsx` no Finder, escolha Arquivo ▸ Obter Informações, selecione o Foglio em **Abrir com** e clique em **Alterar Tudo…**.",
      },
      {
        q: "Existe versão para iPhone, iPad, Windows ou Linux?",
        a: "Não. O Foglio é só para Mac. O motor é em Rust multiplataforma, mas a interface é feita em AppKit.",
      },
    ],
  },

  positioning: {
    title: "Não estamos tentando ser o Excel",
    text: [
      "O Excel faz mil coisas, e algumas delas (macros, Power Pivot, coautoria em tempo real) o Foglio provavelmente nunca vai fazer. Tudo bem: copiar o Excel recurso por recurso não é o objetivo.",
      "O objetivo é uma planilha que pareça parte do seu Mac: nativa, rápida, minúscula, leve com a memória e com a bateria, e capaz de abrir **praticamente qualquer arquivo do Excel que você receber** (a meta é 99 de cada 100) sem problemas de compatibilidade e sem estragar nada quando você salva de volta.",
    ],
    points: [
      { title: "Nativo", text: "Um app de Mac de verdade em Swift e AppKit. Nenhum navegador escondido, nenhum runtime para instalar." },
      { title: "Rápido e pequeno", text: "7,5 MB para baixar, abre em um quarto de segundo, cerca de 58 MB de memória com uma planilha aberta." },
      { title: "Compatível", text: "Lê e grava `.xlsx` padrão e guarda as fórmulas na forma do próprio Excel, para o arquivo abrir em qualquer lugar." },
    ],
  },
  alternativesIndex: {
    h1: "Alternativas ao Excel, Numbers, LibreOffice e Google Sheets",
    intro: [
      "Cada uma destas páginas explica o que você ganha e o que perde ao trocar um app específico pelo Foglio, com uma seção sobre quando é melhor continuar com o que você já usa. Para ajuda passo a passo, veja os [guias](/guides/).",
    ],
  },
  guidesIndex: {
    h1: "Guias de planilha para Mac",
    intro: [
      "Respostas práticas para problemas comuns com planilhas no Mac: abrir arquivos do Excel e CSV sem Excel, corrigir caracteres estranhos e colunas erradas, e entender os nomes das funções em outros idiomas. Cada guia também mostra como resolver sem o Foglio. Vindo de outro app? Veja as [alternativas](/alternatives/).",
    ],
  },
};
