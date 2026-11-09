import type { Article } from "../types";

// Brazilian Portuguese (pt-BR). Same slugs and order as the English articles.
// The Foglio app is in English and Italian only; formula names are not localized for Portuguese.
const UPDATED = "2026-11-09";

export const alternatives: Article[] = [
  // ───────────────────────────────────────────────────────────────────
  {
    slug: "excel-for-mac",
    meta: {
      title: "Alternativa gratuita ao Excel para Mac que abre xlsx",
      description:
        "Quer usar Excel no Mac sem assinar o Microsoft 365? O Foglio é um app grátis e de código aberto que abre e salva xlsx. Veja o que ele faz e o que não faz.",
    },
    h1: "Uma alternativa gratuita ao Excel para Mac que abre seus arquivos xlsx",
    intro: [
      "O Microsoft Excel para Mac é excelente, mas não é grátis. Para editar planilhas no app de desktop você precisa de uma assinatura do Microsoft 365 (no Brasil, o Personal custa R$ 509 por ano e o Family R$ 599) ou de uma licença avulsa do Office Home 2024 (R$ 899 na loja da Microsoft no Brasil quando conferimos, em novembro de 2026). Se você só abre um orçamento, uma nota ou um relatório que alguém mandou por e-mail algumas vezes por mês, é muito dinheiro.",
      "O Foglio é um app de planilha grátis e de código aberto para macOS que lê e grava os mesmos arquivos `.xlsx`, entende cerca de 500 funções do Excel e usa os atalhos de teclado do Excel para Mac. Esta página explica o que você mantém, o que perde e quando o Excel ainda é a escolha certa.",
    ],
    sections: [
      {
        heading: "O que você mantém ao trocar",
        body: [
          "O Foglio foi pensado para parecer familiar a quem já usou o Excel. A grade, a barra de fórmulas com a Caixa de Nome, as abas das planilhas, as somas na barra de status e os menus estão onde você espera. A maioria dos atalhos é igual: ⌘1 para Formatar Células, ⌘D para preencher para baixo, F4 para alternar referências com `$`, ⇧⌘T para AutoSoma, ⌘K para hiperlink.",
        ],
        bullets: [
          "**Seus arquivos.** O `.xlsx` abre e salva com fontes, preenchimentos, bordas, formatos de número, células mescladas, largura de colunas, painéis congelados, comentários, validação de dados, formatação condicional, hiperlinks, gráficos e imagens.",
          "**Suas fórmulas.** Cerca de 500 funções, incluindo SUMIFS, XLOOKUP, INDEX/MATCH, FILTER, SORT, UNIQUE, LET e LAMBDA. Na auditoria de compatibilidade do Foglio, 191 de 195 funções de uso comum batem com o Excel em todos os testes.",
          "**Os nomes das funções.** O Foglio não traduz as funções para o português: num Mac em português você digita os nomes em inglês (`=SUM(A1:A10)`, `=VLOOKUP(…)` em vez de `SOMA` e `PROCV`), com vírgula entre os argumentos, como na maioria dos tutoriais na internet. O arquivo guarda a forma padrão, então abre normalmente no Excel em português, que mostra `SOMA` e `PROCV`.",
          "**Seus hábitos.** Alça de preenchimento, Colar Especial, AutoFiltro, classificação em vários níveis, Localizar e Substituir, Ir Para, Remover Duplicatas, Texto para Colunas, congelar painéis, Mostrar Fórmulas e o navegador de Inserir Função estão todos lá (com os menus em inglês).",
        ],
      },
      {
        heading: "O que você ganha",
        body: [
          "**Não custa nada, para sempre.** Sem assinatura, sem período de teste, sem conta, sem anúncios. O Foglio tem licença MIT e Apache-2.0, e o código-fonte está no [GitHub](https://github.com/GetFoglio/foglio).",
          "**É minúsculo e rápido.** O download tem 7,5 MB e o app instalado ocupa cerca de 19 MB, contra mais de um gigabyte só do Excel. O Foglio abre uma janela utilizável em 0,24 s e usa cerca de 58 MB de memória com uma planilha vazia. Uma pasta de trabalho com 100.000 linhas e 300.000 fórmulas abre em 1,1 s e, depois de uma edição, recalcula em 16 ms.",
          "**Tudo fica no seu Mac.** O Foglio não faz conexões de rede por conta própria e não tem telemetria. Você não precisa entrar em nenhuma conta para abrir um arquivo.",
        ],
      },
      {
        heading: "O que você perde",
        body: [
          "O Foglio 1.0 é a primeira versão de um projeto pequeno e não tenta ser o Excel inteiro. Antes de cancelar uma assinatura, confira se o seu trabalho não depende de nada disto:",
        ],
        bullets: [
          "**Macros e VBA.** Arquivos `.xlsm` abrem, mas as macros não são executadas nem mantidas quando você salva.",
          "**Tabelas dinâmicas.** Ainda não há tabelas dinâmicas de verdade. O *Summarize by* cria uma planilha de resumo atualizada com fórmulas SUMIFS e COUNTIFS, o que resolve os casos simples.",
          "**Power Query, conexões de dados e suplementos.** Não estão disponíveis.",
          "**Formas, caixas de texto e SmartArt.** São ignoradas ao abrir o arquivo. Gráficos e imagens são mantidos.",
          "**Barras de dados, conjuntos de ícones e minigráficos.** Ainda não são desenhados; as outras regras de formatação condicional e as escalas de cor funcionam.",
          "**Pastas de trabalho protegidas por senha.** Não abrem.",
          "**Comentários encadeados** aparecem como notas simples, e não há coautoria em tempo real.",
          "**Gráficos** cobrem os tipos comuns (colunas, barras, linhas, pizza, rosca, área, dispersão, empilhados), não toda a variedade do Excel.",
          "**Interface em português.** O Foglio está em inglês e italiano; menus e mensagens aparecem em inglês num Mac em português.",
        ],
      },
      {
        heading: "Outras formas de usar arquivos do Excel no Mac de graça",
        body: [
          "O Foglio não é a única opção, e dependendo do que você precisa outra pode servir melhor:",
        ],
        bullets: [
          "**Excel para a web** é grátis com uma conta Microsoft e é o Excel de verdade, no navegador (e em português). Seus arquivos ficam no OneDrive, e faltam alguns recursos da versão de desktop.",
          "**Apple Numbers** é grátis e já vem instalado em muitos Macs. Ele converte arquivos `.xlsx` para o formato próprio e exporta de volta para Excel quando você pede.",
          "**LibreOffice Calc** é grátis, de código aberto e muito completo, com tabelas dinâmicas e macros, mas é um download grande e não tem a aparência nem o comportamento de um app nativo de Mac.",
          "**Google Sheets** é grátis com uma conta Google e a melhor escolha quando várias pessoas editam ao mesmo tempo.",
        ],
        sub: [
          {
            heading: "Como eles se comparam",
            body: [
              "A [tabela comparativa completa](/compare/) coloca os cinco lado a lado, com fontes para cada preço e tamanho, e o [panorama de apps de planilha grátis](/guides/free-spreadsheet-apps-for-mac/) acrescenta mais algumas opções. Há também páginas dedicadas ao [Numbers](/alternatives/numbers/), ao [LibreOffice](/alternatives/libreoffice/) e ao [Google Sheets](/alternatives/google-sheets/).",
            ],
          },
        ],
      },
      {
        heading: "Quando vale continuar com o Excel",
        body: [
          "Continue pagando pelo Excel se o seu trabalho roda em macros, Power Query ou tabelas dinâmicas, se você troca modelos complexos com colegas que precisam que tudo volte exatamente igual, se a sua empresa exige o Microsoft 365 ou se você quer o Copilot. O Excel também tem versões para iPhone, iPad e Windows, e está todo em português; o Foglio é só para Mac.",
          "Muita gente acaba usando os dois: o Foglio para os arquivos rápidos do dia a dia, porque abre na hora, e o Excel para as poucas pastas de trabalho pesadas que precisam dele.",
        ],
      },
      {
        heading: "Como testar o Foglio com seus próprios arquivos",
        body: [
          "[Baixe o Foglio](/download/) (7,5 MB, macOS 14 ou posterior), arraste-o para Aplicativos e abra. Como o Foglio 1.0 não é notarizado pela Apple, o macOS pede confirmação na primeira vez; a página de download mostra como. Depois abra uma cópia de uma planilha real com File ▸ Open ou clique com o botão direito num arquivo `.xlsx` e escolha Abrir Com ▸ Foglio.",
          "Confira o que importa para você: totais, buscas, datas, formatos de número, gráficos. Guarde o original até ter certeza. Se algo parecer errado, [relate no GitHub](https://github.com/GetFoglio/foglio/issues) com um arquivo de exemplo.",
        ],
      },
    ],
    faq: [
      {
        q: "Existe uma versão gratuita do Excel para Mac?",
        a: "O app de desktop precisa de uma assinatura do Microsoft 365 ou de uma licença do Office para criar e editar arquivos. O Excel para a web é grátis com uma conta Microsoft. Alternativas de desktop grátis que abrem arquivos do Excel incluem o Foglio, o LibreOffice Calc e o Apple Numbers.",
      },
      {
        q: "Um arquivo salvo pelo Foglio abre direito no Excel?",
        a: "Sim. O Foglio salva arquivos `.xlsx` padrão, com as fórmulas na forma em inglês que o Excel usa internamente; o Excel em português as mostra traduzidas (`SOMA`, `PROCV`). Formatação, gráficos, imagens, comentários, validação e formatação condicional são gravados de volta. Recursos que o Foglio não suporta, como macros, formas e tabelas dinâmicas, não são preservados, então guarde o original de arquivos complexos.",
      },
      {
        q: "O Foglio usa os mesmos atalhos de teclado do Excel para Mac?",
        a: "Na maioria, sim: ⌘1 Formatar Células, ⌘D / ⌘R preencher, F4 referências absolutas, ⇧⌘T AutoSoma, ⌥⇧⌘V colar valores, ⌃; inserir data, ⌥↓ abrir uma lista de validação e muitos outros. O README no GitHub tem a lista completa.",
      },
      {
        q: "O Foglio é tão rápido quanto o Excel em arquivos grandes?",
        a: "Não medimos o Excel, então não vamos dizer que ganhamos dele. No nosso Mac de testes, o Foglio abre uma pasta de trabalho com 100.000 linhas e 300.000 fórmulas em 1,1 s e recalcula em 16 ms depois de uma edição, o que parece instantâneo.",
      },
      {
        q: "Posso usar o Foglio no trabalho?",
        a: "Sim. As licenças MIT e Apache-2.0 permitem uso comercial sem custo. Como em qualquer software 1.0, guarde cópias dos arquivos importantes.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternativa gratuita ao Excel no Mac",
    cardText: "Abra e salve arquivos xlsx sem assinar o Microsoft 365, sabendo exatamente do que você abre mão.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "numbers",
    meta: {
      title: "Alternativa ao Numbers que edita arquivos do Excel | Foglio",
      description:
        "O Numbers converte arquivos do Excel para o formato dele. O Foglio é um app grátis para Mac que edita xlsx direto, com fórmulas e atalhos do Excel.",
    },
    h1: "Uma alternativa ao Numbers que trabalha com arquivos do Excel do jeito que eles são",
    intro: [
      "O Apple Numbers é um bom app. É grátis, tem um design lindo e sincroniza com o iPhone e o iPad. Mas ele é construído em torno da sua própria ideia de planilha: uma tela livre com tabelas posicionadas sobre ela, salva como `.numbers`. Quando alguém manda um arquivo do Excel, o Numbers importa, converte, e você precisa lembrar de exportar de volta para Excel antes de reenviar.",
      "O Foglio faz o contrário. É um app grátis e de código aberto para Mac que trabalha diretamente com arquivos `.xlsx`, com a grade do Excel, os nomes de função do Excel e os atalhos do Excel para Mac. Se as suas planilhas vêm de usuários do Excel e voltam para eles, essa diferença pesa todo dia.",
    ],
    sections: [
      {
        heading: "Por que quem usa Excel estranha o Numbers",
        body: [
          "Nada disso é defeito; são escolhas de design. Elas só atrapalham quando você trabalha com arquivos do Excel.",
        ],
        bullets: [
          "**Importar e exportar em vez de abrir e salvar.** Um `.xlsx` aberto no Numbers vira um documento do Numbers. Salvar cria um arquivo `.numbers`; para devolver, é preciso usar Arquivo ▸ Exportar Para ▸ Excel, e algumas coisas mudam no caminho.",
          "**Tabelas numa tela, não uma grade única.** Uma planilha do Numbers tem várias tabelas separadas, então planilhas grandes do Excel podem ser divididas ou remodeladas na importação.",
          "**Atalhos e menus diferentes.** Muitos atalhos do Excel para Mac não fazem nada, ou fazem outra coisa, no Numbers.",
          "**Requisito de sistema mais novo.** O Numbers atual da App Store exige macOS 26; o Foglio roda no macOS 14 e posteriores.",
        ],
      },
      {
        heading: "O que o Foglio faz diferente",
        bullets: [
          "**Edita o `.xlsx` no próprio formato.** Abra um arquivo do Excel, altere, pressione ⌘S, e ele continua sendo um arquivo do Excel. Sem etapa de exportação.",
          "**Uma grade por planilha, como no Excel.** Cabeçalhos de linha e coluna, painéis congelados, Caixa de Nome (digite `B12` ou `Sheet2!A1:C9` para pular), abas que você pode renomear, colorir, ocultar e reordenar.",
          "**As fórmulas e os nomes do Excel.** Cerca de 500 funções, incluindo XLOOKUP, SUMIFS, FILTER, LET e LAMBDA. Num Mac em português você as digita em inglês (`=SUM(A1:A10)`, não `SOMA`); em italiano, alemão, espanhol e francês o Foglio usa os nomes locais ([lista italiano–inglês](/guides/excel-functions-italian-english/)).",
          "**Atalhos do Excel para Mac.** ⌘1, ⌘D, F4, ⇧⌘T, ⌥⇧⌘V e dezenas de outros funcionam como no Excel.",
          "**Arquivos que o Numbers tem dificuldade de abrir.** O Foglio abre `.xls` antigos, `.xlsb` binários e `.ods` do LibreOffice, além de arquivos CSV em qualquer codificação comum, com detecção automática do delimitador. Ele até desenha clip-arts antigos em EMF/WMF dentro de arquivos do Office.",
        ],
        body: [],
      },
      {
        heading: "O que o Numbers faz melhor",
        body: [
          "Seja honesto sobre o que você faz no Numbers. Se for alguma destas coisas, o Numbers pode continuar sendo a melhor ferramenta:",
        ],
        bullets: [
          "**Apresentação.** Modelos, tabelas com estilo, gráficos interativos e layout livre deixam os documentos do Numbers bonitos sem esforço.",
          "**iPhone e iPad.** O Numbers roda em todos os seus aparelhos Apple e sincroniza pelo iCloud. O Foglio é só para Mac.",
          "**Colaboração.** O Numbers permite colaboração em tempo real pelo iCloud. O Foglio é um app de desktop para um usuário.",
          "**Tabelas dinâmicas.** O Numbers tem; o Foglio oferece só o *Summarize by*, um resumo atualizado mais simples.",
          "**Português.** O Numbers está todo em português, inclusive as funções. O Foglio tem interface em inglês e italiano.",
          "**Apple Intelligence.** O Numbers integra as Ferramentas de Escrita e, com uma assinatura do Apple Creator Studio, um assistente que sugere fórmulas e tabelas. O Foglio não tem recursos de IA.",
        ],
      },
      {
        heading: "Tamanho e velocidade",
        body: [
          "A página do Numbers na App Store mostra 661 MB (uma única página para Mac, iPhone e iPad). O Foglio tem 7,5 MB de download e cerca de 19 MB instalado. Abre uma janela utilizável em 0,24 s, fica em 0 % de CPU em repouso e usa cerca de 58 MB de memória com uma planilha vazia. Uma pasta de trabalho com 100.000 linhas e 300.000 fórmulas abre em 1,1 s no nosso Mac de testes.",
          "O Numbers já vem instalado em muitos Macs, então o tamanho talvez não importe para você. O tempo de abertura e o jeito como ele lida com planilhas muito grandes do Excel talvez importem.",
        ],
      },
      {
        heading: "Quando vale ficar com o Numbers",
        body: [
          "Se as suas planilhas são pessoais, raramente saem dos seus aparelhos Apple e você valoriza mais a aparência do que a compatibilidade com o Excel, fique com o Numbers. Ele é grátis, caprichado e bem integrado. Se você divide o orçamento da casa com a família no iPhone, a colaboração do Numbers pelo iCloud é difícil de bater.",
          "Se, por outro lado, você abre anexos do Excel com frequência, devolve arquivos `.xlsx` para colegas ou clientes, ou simplesmente pensa em Excel, o Foglio elimina a etapa de conversão. Muita gente usa os dois: o Numbers para documentos pessoais bonitos, o Foglio como app padrão para `.xlsx` e `.csv`.",
        ],
      },
      {
        heading: "Deixe o Foglio como padrão para arquivos do Excel",
        body: [
          "Depois de [baixar o Foglio](/download/), selecione qualquer arquivo `.xlsx` no Finder, pressione ⌘I (Obter Informações), escolha o Foglio em **Abrir com** e clique em **Alterar Tudo…**. A partir daí, clicar duas vezes em arquivos do Excel abre o Foglio, e o Numbers continua disponível para os próprios documentos. Repita com `.csv` se quiser.",
          "Para uma visão mais ampla de todas as opções, veja o [comparativo de apps de planilha para Mac](/compare/) ou o guia para [abrir arquivo xlsx no Mac sem Excel](/guides/open-xlsx-on-mac-without-excel/).",
        ],
      },
    ],
    faq: [
      {
        q: "O Foglio abre arquivos .numbers?",
        a: "Não. O Foglio não lê o formato `.numbers` da Apple. No Numbers, use Arquivo ▸ Exportar Para ▸ Excel para criar um `.xlsx` que o Foglio consegue abrir.",
      },
      {
        q: "O Foglio é grátis como o Numbers?",
        a: "Sim. O Foglio é grátis, sem nenhuma versão paga, e também é de código aberto, sob MIT e Apache-2.0.",
      },
      {
        q: "O Numbers mantém minhas fórmulas do Excel?",
        a: "O Numbers converte a maioria das fórmulas comuns na importação e de volta na exportação, mas funções que ele não tem, recursos específicos do Excel e o layout podem mudar. O Foglio mantém a pasta de trabalho no formato do Excel do começo ao fim.",
      },
      {
        q: "O Foglio roda no meu Mac mais antigo?",
        a: "O Foglio precisa do macOS 14 Sonoma ou posterior, em Apple silicon ou Intel. A versão atual do Numbers exige macOS 26.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternativa ao Numbers para Excel",
    cardText: "Edite arquivos xlsx no próprio formato, com a grade, os nomes de função e os atalhos do Excel, sem convertê-los.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "libreoffice",
    meta: {
      title: "Alternativa leve ao LibreOffice Calc para Mac | Foglio",
      description:
        "O LibreOffice é grátis, mas grande e não é um app nativo de Mac. O Foglio é uma planilha de 7,5 MB em Swift e Rust. Quando usar cada um, sem exageros.",
    },
    h1: "Uma alternativa leve e nativa ao LibreOffice Calc no Mac",
    intro: [
      "O LibreOffice é um dos grandes projetos de software livre: uma suíte de escritório completa, grátis para todos, com uma planilha (o Calc) que tem tabelas dinâmicas, macros, uma biblioteca enorme de funções e suporte a quase todos os formatos de arquivo, tudo em português. Se você quer um substituto grátis para o Excel, ele é a primeira sugestão óbvia.",
      "No Mac, porém, ele mostra suas raízes multiplataforma. A imagem de disco para Apple silicon tem cerca de 300 MB, ele instala uma suíte inteira mesmo que você só queira planilhas, e a interface, as janelas de diálogo e os atalhos não combinam muito com o resto do macOS. O Foglio é outro equilíbrio: muito menor, nativo e focado só em planilhas.",
    ],
    sections: [
      {
        heading: "Dois apps grátis e de código aberto com objetivos diferentes",
        body: [
          "Os dois são grátis e de código aberto, e os dois funcionam totalmente offline, sem conta e sem telemetria. A diferença está no escopo. O LibreOffice quer ser uma alternativa completa ao Microsoft Office em todas as plataformas de desktop. O Foglio quer ser o jeito mais rápido e leve de abrir e editar planilhas do Excel do dia a dia no Mac, e nada além disso.",
        ],
        bullets: [
          "**Foglio:** interface em Swift/AppKit (em inglês e italiano), motor em Rust, só para Mac, MIT / Apache-2.0, 7,5 MB de download, cerca de 19 MB instalado.",
          "**LibreOffice:** suíte em C++ com toolkit de interface próprio (disponível em português), para Windows, macOS e Linux, MPL-2.0, cerca de 300 MB de download e até 800 MB em disco segundo os requisitos de sistema.",
        ],
      },
      {
        heading: "Onde o Foglio é melhor",
        bullets: [
          "**Tamanho e abertura.** O Foglio abre uma janela utilizável em 0,24 s e usa cerca de 58 MB de memória com uma planilha vazia, com 0 % de CPU em repouso.",
          "**Um app nativo de Mac.** Documentos reais do macOS, abas de janela, modo escuro, janelas padrão de Abrir e Salvar, zoom com pinça, rolagem suave numa grade própria e os atalhos de teclado do Excel para Mac.",
          "**O jeito do Excel de fazer as coisas.** O `.xlsx` é o formato próprio do Foglio, não um filtro de importação. As funções usam os nomes do Excel: em inglês num Mac em português (`VLOOKUP`), ou os nomes locais em italiano, alemão e espanhol (`CERCA.VERT`, `SVERWEIS`, `BUSCARV`).",
          "**Funções modernas do Excel.** O Foglio suporta LAMBDA, além de XLOOKUP, FILTER, SORT e LET. O LibreOffice adicionou XLOOKUP, FILTER e LET em 2024, mas, no momento em que escrevemos, não implementa LAMBDA.",
          "**Velocidade em pastas de trabalho grandes.** Graças ao recálculo incremental e às buscas indexadas, uma edição numa pasta com 100.000 linhas e 300.000 fórmulas recalcula em 16 ms no nosso Mac de testes.",
        ],
        body: [],
      },
      {
        heading: "Onde o LibreOffice Calc é melhor",
        body: [
          "O LibreOffice tem décadas de desenvolvimento e, para muitas tarefas, simplesmente faz mais:",
        ],
        bullets: [
          "**Tabelas dinâmicas** (com campos calculados nas versões recentes). O Foglio oferece só o *Summarize by*.",
          "**Macros** em LibreOffice Basic e Python, com suporte parcial a VBA do Excel. O Foglio não executa macros.",
          "**Mais tipos de gráfico**, formas, ferramentas de desenho e caixas de texto.",
          "**Salvar em mais formatos**, incluindo `.ods`, `.xls` e muitos outros. O Foglio abre `.xls` e `.ods` (valores, fórmulas e datas), mas salva só em `.xlsx`, CSV e PDF.",
          "**Arquivos protegidos por senha**, barras de dados, conjuntos de ícones e minigráficos, que o Foglio ainda não suporta.",
          "**Interface e funções em português**, para quem prefere tudo no próprio idioma.",
          "**Uma suíte inteira**: Writer, Impress, Draw e Base vêm no mesmo download.",
          "**Versões para Windows e Linux**, se você trabalha em várias plataformas.",
        ],
      },
      {
        heading: "Quando vale manter o LibreOffice",
        body: [
          "Mantenha o LibreOffice se você precisa de tabelas dinâmicas ou macros, usa o OpenDocument como formato principal, também precisa de editor de texto e apresentações, ou usa a mesma suíte no Windows ou no Linux. É um projeto maduro e confiável, e não custa nada deixá-lo instalado.",
          "Escolha o Foglio se o que você faz de verdade é abrir planilhas que mandam para você, corrigir alguns números e devolver, e quer um app que abre na hora, combina com o resto do Mac e não usa 800 MB de disco para isso. Os dois podem conviver: deixe o Foglio como padrão para `.xlsx` e `.csv` e abra o LibreOffice para os trabalhos que precisam dele.",
        ],
      },
      {
        heading: "Trocar é fácil porque os arquivos são os mesmos",
        body: [
          "Não há migração. Os dois apps leem e gravam `.xlsx`, então um arquivo editado num abre no outro. Se você tem arquivos `.ods`, o Foglio abre os valores, as fórmulas e as datas e salva como `.xlsx`; a formatação dos `.ods` ainda não é importada, então guarde os originais. O mesmo vale para arquivos `.xls` antigos; veja [como abrir arquivos .xls no Mac](/guides/open-xls-on-mac/).",
          "[Baixe o Foglio](/download/), teste com alguns arquivos reais e confira os detalhes na [tabela comparativa](/compare/). Se tiver curiosidade sobre por que ele é tão pequeno, leia [como o Foglio é feito](/technology/).",
        ],
      },
    ],
    faq: [
      {
        q: "O Foglio é baseado no LibreOffice?",
        a: "Não. O Foglio é um projeto separado. A interface é escrita em Swift/AppKit e o motor de fórmulas é um fork com correções do IronCalc, um motor de planilha de código aberto em Rust. Ele usa a biblioteca calamine, em Rust, para ler `.xls`, `.xlsb` e `.ods`.",
      },
      {
        q: "Os dois são grátis para uso comercial?",
        a: "Sim. O LibreOffice é MPL-2.0 e o Foglio é MIT e Apache-2.0. Os dois podem ser usados no trabalho sem custo.",
      },
      {
        q: "Qual dos dois abre arquivos do Excel melhor?",
        a: "Depende do arquivo. O LibreOffice suporta mais recursos do Excel no geral (tabelas dinâmicas, macros, formas). O Foglio trata o `.xlsx` como formato nativo e bate com os resultados do Excel em 191 de 195 funções auditadas. Teste seus próprios arquivos nos dois.",
      },
      {
        q: "O Foglio salva arquivos .ods?",
        a: "Não. O Foglio abre `.ods` e salva como `.xlsx`. Se você precisa manter arquivos OpenDocument, use o LibreOffice.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternativa mais leve ao LibreOffice",
    cardText: "Uma planilha nativa de 7,5 MB para os arquivos do Excel do dia a dia, e quando o LibreOffice ainda é a melhor ferramenta.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "google-sheets",
    meta: {
      title: "Alternativa offline ao Google Sheets para Mac | Foglio",
      description:
        "Quer planilhas que funcionam offline e ficam no seu Mac? O Foglio é um app de desktop grátis e privado, sem conta. E quando o Google Sheets ainda é melhor.",
    },
    h1: "Uma alternativa offline e privada ao Google Sheets para Mac",
    intro: [
      "O Google Sheets (Planilhas Google) é grátis, capaz e imbatível quando várias pessoas precisam editar a mesma planilha ao mesmo tempo. Mas tem condições: você precisa de uma conta Google, seus arquivos ficam nos servidores do Google, ele roda numa aba do navegador, e trabalhar offline exige Chrome ou Edge, uma extensão e alguma configuração feita com antecedência.",
      "O Foglio é um app de planilha grátis e de código aberto que roda inteiramente no seu Mac. Sem conta, sem login, sem conexões de rede por conta própria. Seus arquivos são `.xlsx` comuns, numa pasta que você escolhe. Veja como os dois se comparam, com honestidade.",
    ],
    sections: [
      {
        heading: "Por que as pessoas procuram uma alternativa ao Google Sheets",
        bullets: [
          "**Trabalho offline.** No avião, no ônibus ou com o Wi-Fi fraco do hotel, um app de desktop simplesmente funciona. O modo offline do Google precisa ser ativado enquanto você está on-line, exige a extensão Documentos Google off-line no Chrome ou no Edge, e só uma conta por perfil do navegador pode usá-lo.",
          "**Privacidade.** Alguns dados não deveriam ir para lugar nenhum: folha de pagamento, despesas médicas, lista de clientes. Com o Foglio, o arquivo nunca sai do seu Mac, a não ser que você o envie.",
          "**Sem conta.** Nem todo mundo tem, ou quer, uma conta Google, e algumas empresas não permitem armazenamento pessoal na nuvem.",
          "**Um app de Mac de verdade.** Uma aba do navegador não é um app de Mac: sem itens recentes, sem abas de janela próprias, sem a janela de impressão nativa, sem os atalhos do Mac. O Foglio é escrito em Swift/AppKit.",
          "**Arquivos locais grandes.** Abrir um `.xlsx` grande no Sheets significa enviá-lo e convertê-lo, e o Google impõe um limite de 20 milhões de células por planilha. O Foglio abre uma pasta de trabalho com 100.000 linhas e 300.000 fórmulas em 1,1 s no nosso Mac de testes.",
        ],
        body: [],
      },
      {
        heading: "O que você mantém do Google Sheets",
        body: [
          "A maior parte do que você faz no Sheets funciona do mesmo jeito no Foglio. As fórmulas usam a mesma sintaxe do Excel e os nomes de função em inglês: SUMIFS, XLOOKUP, FILTER, SORT, UNIQUE, LET e LAMBDA estão lá, entre cerca de 500 funções. Se o seu Sheets está configurado para o Brasil, você conhece as funções como `SOMA` ou `PROCV`; no Foglio, digite `SUM` e `VLOOKUP`. AutoFiltro, classificação, listas suspensas de validação, formatação condicional com escalas de cor, gráficos, localizar e substituir, painéis congelados e comentários são todos suportados.",
          "Para trazer uma planilha, use Arquivo ▸ Fazer download ▸ Microsoft Excel (.xlsx) no Google Sheets e abra o arquivo no Foglio. Formatação, fórmulas e gráficos vêm junto; funções exclusivas do Google, como GOOGLEFINANCE, IMPORTRANGE ou QUERY, não têm equivalente no Foglio nem no Excel.",
        ],
      },
      {
        heading: "O que o Google Sheets faz melhor",
        bullets: [
          "**Colaboração em tempo real.** Vários cursores na mesma planilha, comentários com menções, histórico de versões. O Foglio é um app de desktop para um usuário.",
          "**Qualquer aparelho.** O Sheets roda em qualquer navegador e tem apps para iPhone, iPad e Android. O Foglio só roda em Macs com macOS 14 ou posterior.",
          "**Dados on-line.** Funções como IMPORTRANGE, IMPORTHTML e GOOGLEFINANCE puxam dados ao vivo da web. O Foglio não se conecta à internet.",
          "**Automação e IA.** Apps Script para automação e, dependendo do plano, o Gemini para ajudar com fórmulas e análises. O Foglio não tem macros nem recursos de IA.",
          "**Tabelas dinâmicas e mais tipos de gráfico.** O Foglio oferece o *Summarize by* para resumos simples e os tipos de gráfico mais comuns.",
          "**Português.** O Sheets está em português, inclusive as funções; o Foglio tem interface em inglês e italiano.",
        ],
        body: [],
      },
      {
        heading: "Quando vale continuar no Google Sheets",
        body: [
          "Se a sua planilha é um espaço compartilhado, como o controle de tarefas da equipe, a lista de viagem da família ou uma lista de inscrição, o Google Sheets é a ferramenta certa e o Foglio não está tentando substituí-lo. O mesmo vale para planilhas que puxam dados ao vivo da web ou que você precisa editar pelo celular.",
          "Se a planilha é só sua, local ou confidencial, um app de desktop faz mais sentido. Muita gente usa os dois: o Google Sheets para documentos compartilhados e o Foglio para finanças pessoais, dados de clientes e os arquivos do Excel que chegam por e-mail.",
        ],
      },
      {
        heading: "Seus arquivos, na sua pasta",
        body: [
          "O Foglio salva arquivos `.xlsx` padrão onde você quiser: na pasta Documentos, num disco externo ou, se preferir, numa pasta sincronizada como o iCloud Drive ou o Dropbox. Como são arquivos do Excel, você sempre pode enviar um para o Google Sheets depois. Não há aprisionamento em nenhuma direção.",
          "[Baixe o Foglio](/download/) de graça (7,5 MB, macOS 14+). Para ver como ele se sai também contra o Excel, o Numbers e o LibreOffice, leia o [comparativo completo](/compare/).",
        ],
      },
    ],
    faq: [
      {
        q: "O Google Sheets funciona offline no Mac?",
        a: "Sim, com limites: você precisa do Chrome ou do Microsoft Edge, da extensão Documentos Google off-line, e precisa ativar o acesso offline enquanto está conectado. Só uma conta por perfil do navegador pode usá-lo. Um app de desktop como o Foglio, o Numbers, o LibreOffice ou o Excel funciona offline sem configuração.",
      },
      {
        q: "O Foglio envia meus arquivos para algum lugar?",
        a: "Não. O Foglio não tem sistema de contas, armazenamento na nuvem nem telemetria, e não faz conexões de rede por conta própria. Ele só abre uma página da web quando você clica num hiperlink dentro de uma célula.",
      },
      {
        q: "Posso abrir um arquivo do Google Sheets no Foglio?",
        a: "Baixe antes com Arquivo ▸ Fazer download ▸ Microsoft Excel (.xlsx) no Google Sheets e depois abra o `.xlsx` no Foglio. Um arquivo de atalho `.gsheet` do Google Drive para computador é só um link e não pode ser aberto offline.",
      },
      {
        q: "Minhas fórmulas do Google Sheets funcionam no Foglio?",
        a: "As fórmulas padrão funcionam, porque os dois seguem a sintaxe do Excel; no Foglio, use os nomes em inglês (`SUM`, não `SOMA`). Funções específicas do Google, como QUERY, IMPORTRANGE, GOOGLEFINANCE e SPARKLINE, não existem no Foglio.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Alternativa offline ao Google Sheets",
    cardText: "Uma planilha de desktop grátis, sem conta e sem nuvem, e quando o Google Sheets ainda é a ferramenta certa.",
  },
];

export const guides: Article[] = [
  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-xlsx-on-mac-without-excel",
    meta: {
      title: "Como abrir arquivo xlsx no Mac sem Excel | Foglio",
      description:
        "Quatro jeitos grátis de abrir e editar arquivos xlsx do Excel no Mac sem o Microsoft Excel: Visualização Rápida, Numbers, app de desktop ou navegador.",
    },
    h1: "Como abrir arquivo xlsx no Mac sem Excel",
    intro: [
      "Alguém mandou uma planilha por e-mail, você clica duas vezes e o Mac abre o Numbers, pergunta qual app usar ou avisa que você precisa de uma assinatura do Microsoft 365. Você não precisa comprar o Excel para ler ou editar um arquivo `.xlsx`. Estas são as opções grátis, da mais rápida à mais completa, com os prós e contras de cada uma.",
    ],
    sections: [
      {
        heading: "1. Só para ver: Visualização Rápida",
        body: [
          "Se você só precisa ler o arquivo, selecione-o no Finder e pressione a **barra de espaço**. A Visualização Rápida (Quick Look) mostra uma prévia das planilhas sem abrir nenhum app. Não dá para editar, classificar nem copiar fórmulas, e arquivos complexos podem não aparecer exatamente como são, mas é instantâneo e já vem no Mac.",
        ],
      },
      {
        heading: "2. Edite num app de desktop grátis",
        body: [
          "Para alterar o arquivo e devolvê-lo como `.xlsx`, o caminho mais direto é um app de desktop que trate o formato do Excel como próprio. O [Foglio](/) é um app grátis e de código aberto para Mac feito exatamente para isso: abre e salva `.xlsx` com formatação, fórmulas, gráficos, imagens e comentários, e usa os nomes de função (em inglês) e os atalhos de teclado do Excel.",
        ],
        sub: [
          {
            heading: "Passo a passo com o Foglio",
            body: [],
            bullets: [
              "[Baixe o Foglio](/download/) (7,5 MB, macOS 14 ou posterior) e arraste-o para Aplicativos.",
              "Na primeira vez, confirme o aviso de segurança do macOS: no macOS 15 ou posterior, vá em Ajustes do Sistema ▸ Privacidade e Segurança ▸ **Abrir Mesmo Assim**; no macOS 14, clique com o botão direito no app e escolha **Abrir**.",
              "Clique com o botão direito no arquivo `.xlsx` no Finder e escolha **Abrir Com ▸ Foglio**, ou arraste-o para o ícone do Foglio.",
              "Edite e pressione ⌘S. O arquivo é salvo como `.xlsx`, pronto para devolver.",
            ],
          },
          {
            heading: "Fique de olho",
            body: [
              "O Foglio não executa macros, não tem tabelas dinâmicas de verdade, ignora formas e SmartArt e não abre arquivos protegidos por senha. A interface está em inglês. Em planilhas comuns isso raramente é problema, mas guarde o original de qualquer arquivo complexo. O [LibreOffice Calc](/alternatives/libreoffice/) é outra opção de desktop grátis, maior, mas com tabelas dinâmicas, macros e interface em português.",
            ],
          },
        ],
      },
      {
        heading: "3. Use o Apple Numbers",
        body: [
          "O Numbers é grátis, da Apple, e muitas vezes já está instalado. Clique com o botão direito no arquivo e escolha **Abrir Com ▸ Numbers**. O Numbers importa a pasta de trabalho e a converte num documento do Numbers; quando terminar, use **Arquivo ▸ Exportar Para ▸ Excel** para criar um `.xlsx` de novo. Se você só pressionar ⌘S, terá um arquivo `.numbers`, que quem usa Excel não consegue abrir.",
          "Funciona bem com arquivos simples. Planilhas grandes, algumas fórmulas e a formatação podem mudar na ida e volta, e o Numbers atual exige macOS 26. Veja [Numbers vs Foglio](/alternatives/numbers/) para os detalhes.",
        ],
      },
      {
        heading: "4. Use o navegador: Excel para a web ou Google Sheets",
        body: [
          "O **Excel para a web** é grátis com uma conta Microsoft: envie o arquivo para o OneDrive e abra no navegador. É o Excel de verdade, sem alguns recursos da versão de desktop. O **Google Sheets** abre arquivos `.xlsx` enviados ao Google Drive, convertendo-os ou editando no modo de compatibilidade com o Office no Chrome; baixe como `.xlsx` quando terminar.",
          "Os dois exigem conexão com a internet e uma conta, e os dois significam enviar o arquivo para um serviço na nuvem. Evite esse caminho com dados confidenciais, como folha de pagamento ou prontuários médicos. Mais sobre isso na página da [alternativa ao Google Sheets](/alternatives/google-sheets/).",
        ],
      },
      {
        heading: "Para valer sempre: defina o app padrão",
        body: [
          "Para que todo `.xlsx` abra no app que você prefere, selecione um no Finder, pressione ⌘I (Obter Informações), escolha o app em **Abrir com** e clique em **Alterar Tudo…**.",
        ],
      },
      {
        heading: "Qual opção escolher?",
        bullets: [
          "**Só ler:** Visualização Rápida.",
          "**Editar e devolver, com privacidade e offline:** um app de desktop grátis, como o Foglio ou o LibreOffice.",
          "**Documentos bonitos para você mesmo:** Numbers.",
          "**Trabalhar no arquivo com outras pessoas ao mesmo tempo:** Excel para a web ou Google Sheets.",
        ],
        body: ["A [página de comparação](/compare/) mostra todas as diferenças lado a lado."],
      },
    ],
    faq: [
      {
        q: "O Mac abre arquivos xlsx sem instalar nada?",
        a: "Você pode ver uma prévia com a Visualização Rápida (selecione o arquivo e pressione a barra de espaço). Para editar, precisa de um app: o Numbers é grátis, da Apple, e o Foglio e o LibreOffice são downloads grátis.",
      },
      {
        q: "Por que meu arquivo xlsx abre no Numbers?",
        a: "O Numbers é o app padrão de planilhas em muitos Macs. Mude isso no Finder com Obter Informações ▸ Abrir com ▸ Alterar Tudo….",
      },
      {
        q: "E os arquivos .xlsm com macros?",
        a: "Os apps grátis abrem os dados, mas só o Excel executa macros VBA de forma confiável. O Foglio abre arquivos `.xlsm` sem executar as macros, e elas não são mantidas quando você salva.",
      },
      {
        q: "É seguro enviar arquivos de trabalho para um visualizador on-line?",
        a: "Depende do arquivo e das regras da sua empresa. Conversores e visualizadores on-line grátis recebem uma cópia dos seus dados. Um app de desktop mantém o arquivo no seu Mac.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Abrir arquivo xlsx sem Excel",
    cardText: "Visualização Rápida, Numbers, um app de desktop grátis ou o navegador: quatro jeitos grátis de abrir e editar Excel no Mac.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-xls-on-mac",
    meta: {
      title: "Como abrir arquivos .xls antigos do Excel no Mac | Foglio",
      description:
        "Tem um .xls antigo do Excel 97–2003 que o Numbers recusa? Como abrir xls no Mac de graça, converter para xlsx e lidar com arquivos que nem são xls.",
    },
    h1: "Como abrir arquivos .xls antigos do Excel no Mac",
    intro: [
      "O `.xls` é o formato binário que o Excel usava antes de 2007, e ele continua em todo lugar: extratos de banco, sistemas de contabilidade, dados do governo, arquivos antigos. Os apps modernos de Mac lidam com ele pior do que com o `.xlsx`. O Numbers, por exemplo, pode recusar alguns arquivos com uma mensagem dizendo que o documento foi criado numa versão do Excel não suportada.",
      "Veja como abrir um arquivo `.xls` no Mac de graça, como convertê-lo para o formato moderno `.xlsx` e o que fazer quando o arquivo nem é um `.xls` de verdade.",
    ],
    sections: [
      {
        heading: "Opção 1: abra no Foglio e salve como xlsx",
        body: [
          "O [Foglio](/) é um app de planilha grátis e de código aberto para Mac. Ele lê arquivos `.xls` com o calamine, uma biblioteca rápida em Rust para formatos antigos do Excel, e também abre arquivos `.xlsb` binários.",
        ],
        bullets: [
          "[Baixe o Foglio](/download/) e arraste-o para Aplicativos.",
          "Clique com o botão direito no arquivo `.xls` e escolha **Abrir Com ▸ Foglio** (ou use File ▸ Open dentro do Foglio).",
          "Confira os dados e escolha **File ▸ Save As…** para salvar uma cópia `.xlsx`. O Foglio não grava o formato `.xls` antigo.",
        ],
        sub: [
          {
            heading: "O que é importado",
            body: [
              "De arquivos `.xls` e `.xlsb`, o Foglio importa **valores, fórmulas e datas**, em todas as planilhas. A formatação das células, como fontes, cores e bordas, ainda não é importada desses formatos antigos, e as macros nunca são executadas. Se você precisa da aparência original de uma pasta de trabalho antiga, o LibreOffice ou o Excel preservam mais.",
            ],
          },
        ],
      },
      {
        heading: "Opção 2: LibreOffice Calc",
        body: [
          "O LibreOffice Calc é grátis, de código aberto e tem décadas de experiência com `.xls`, incluindo a formatação. Ele também salva de volta em `.xls` se algum sistema que você usa ainda exige esse formato. É um download maior (cerca de 300 MB para Apple silicon) e não é um app nativo de Mac, mas para arquivos antigos ele é muito completo. Veja [LibreOffice vs Foglio](/alternatives/libreoffice/).",
        ],
      },
      {
        heading: "Opção 3: Numbers ou Excel",
        body: [
          "O Numbers abre muitos arquivos `.xls`: botão direito ▸ Abrir Com ▸ Numbers. Se ele recusar, converta antes o arquivo para `.xlsx` com o Foglio ou o LibreOffice e depois importe no Numbers. O Microsoft Excel, claro, abre qualquer `.xls`, mas precisa de assinatura ou licença para editar.",
        ],
      },
      {
        heading: "Quando o “.xls” não é xls",
        body: [
          "Muitos sites e sistemas empresariais antigos exportam arquivos com extensão `.xls` que na verdade são outra coisa. Se o arquivo mostra marcações estranhas, tudo numa coluna só ou texto embaralhado, confira o que ele realmente é:",
        ],
        bullets: [
          "**Tabelas HTML.** Alguns sistemas geram uma página da web e a chamam de `.xls`. Abra no TextEdit; se aparecer `<table>` ou `<html>`, renomeie a cópia para `.html` e abra no navegador, ou copie a tabela para uma planilha.",
          "**Texto separado por tabulação ou vírgula.** Se o TextEdit mostra linhas de texto simples, renomeie a cópia para `.csv` ou `.txt`. O Foglio abre esses arquivos detectando automaticamente a codificação, o delimitador e o separador decimal; veja [como abrir CSV no Mac](/guides/open-csv-on-mac/).",
          "**Um `.xlsx` com a extensão errada.** Se o arquivo é na verdade um `.xlsx` (no TextEdit, ele começa com as letras `PK`), renomeie a cópia para `.xlsx`.",
          "**SpreadsheetML (XML).** Arquivos XML do Excel 2003 começam com `<?xml` e mencionam `urn:schemas-microsoft-com:office:spreadsheet`. O Foglio não lê esses arquivos; o LibreOffice e o Excel leem.",
        ],
      },
      {
        heading: "Convertendo muitos arquivos .xls",
        body: [
          "O Foglio converte um arquivo por vez. Para um arquivo morto grande, o LibreOffice converte em lote pelo Terminal com a opção de linha de comando `--convert-to xlsx`. Seja qual for a ferramenta, guarde os `.xls` originais até conferir os resultados.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual é a diferença entre xls e xlsx?",
        a: "O `.xls` é o formato binário do Excel de 1997–2003. O `.xlsx` é o formato baseado em XML que o Excel usa desde 2007. Arquivos `.xlsx` são menores, mais robustos e suportados por todos os apps modernos.",
      },
      {
        q: "O Foglio salva arquivos .xls?",
        a: "Não. O Foglio abre `.xls` e salva como `.xlsx`. Se você precisa gravar `.xls`, use o LibreOffice ou o Excel.",
      },
      {
        q: "Por que o Numbers diz que o arquivo foi criado numa versão não suportada do Excel?",
        a: "O Numbers não importa algumas variantes antigas de `.xls`. Abra o arquivo no Foglio ou no LibreOffice, salve como `.xlsx`, e o Numbers vai conseguir importá-lo.",
      },
      {
        q: "Arquivos xls antigos com macros são perigosos?",
        a: "Macros podem conter código malicioso. O Foglio nunca executa macros, então abrir um `.xls` ou `.xlsm` nele não as executa. Tenha cuidado ao ativar macros no Excel em arquivos que você não esperava receber.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Abrir arquivos .xls antigos no Mac",
    cardText: "Abra arquivos do Excel 97–2003 de graça, converta para xlsx e identifique exportações que não são xls de verdade.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "open-csv-on-mac",
    meta: {
      title: "Abrir CSV no Mac: corrigir colunas e acentos | Foglio",
      description:
        "CSV abrindo numa coluna só, com acentos estranhos ou decimais errados? Por que isso acontece no Mac e como abrir arquivos CSV direito, com ou sem Excel.",
    },
    h1: "Como abrir CSV no Mac (e corrigir colunas, acentos e decimais)",
    intro: [
      "O CSV parece o formato mais simples que existe: linhas de texto, valores separados por vírgulas. Na prática, é a origem de uma série de pequenos desastres. Tudo vai parar na coluna A. Letras acentuadas viram `Ã©`. Preços de `1,50` viram `150`. Os zeros à esquerda somem do CEP.",
      "Este guia explica as três coisas que dão errado, como abrir um CSV corretamente no Mac com ou sem Excel e como salvar um que os outros consigam abrir.",
    ],
    sections: [
      {
        heading: "Por que arquivos CSV abrem errado",
        sub: [
          {
            heading: "1. O delimitador",
            body: [
              "Apesar do nome, muitos arquivos CSV não são separados por vírgula. Em países que escrevem decimais com vírgula (Brasil, Itália, Alemanha, França, Espanha e muitos outros), o Excel exporta CSV com **ponto e vírgula**. Outros sistemas usam tabulação ou barra vertical. Se o app adivinha o delimitador errado, cada linha inteira acaba numa única coluna.",
            ],
          },
          {
            heading: "2. A codificação do texto",
            body: [
              "Um arquivo CSV não diz qual codificação de caracteres usa. Os arquivos modernos costumam ser UTF-8, mas exportações de programas antigos do Windows muitas vezes são Windows-1252, e algumas ferramentas gravam UTF-16. Lido com a codificação errada, `é` vira `Ã©`, `ç` vira `Ã§` e `€` vira lixo.",
            ],
          },
          {
            heading: "3. O separador decimal",
            body: [
              "`1,500` significa um e meio no Brasil e mil e quinhentos nos EUA. Se o app lê os números com a convenção do seu Mac em vez da do arquivo, os valores ficam errados em silêncio, o que é pior do que um erro visível.",
            ],
          },
        ],
        body: [],
      },
      {
        heading: "O jeito fácil: um app que detecta as três coisas",
        body: [
          "O [Foglio](/) é um app de planilha grátis e de código aberto para Mac que analisa o arquivo antes de importá-lo:",
        ],
        bullets: [
          "**Delimitador:** escolhe entre vírgula, ponto e vírgula, tabulação e barra vertical verificando qual divide as primeiras linhas de forma mais consistente, ignorando separadores entre aspas.",
          "**Codificação:** lê UTF-8 (com ou sem marca de ordem de bytes) e UTF-16, e recorre ao Windows-1252 para exportações antigas de idiomas da Europa Ocidental, incluindo o português.",
          "**Decimais:** descobre se o arquivo escreve `1.234,56` ou `1,234.56` e lê cada número de acordo, seja qual for a região do seu Mac.",
          "**Segurança:** texto que começa com `=` é mantido como texto, nunca executado como fórmula, então um CSV malicioso não consegue disparar cálculos.",
        ],
        sub: [
          {
            heading: "Passo a passo",
            body: [
              "[Baixe o Foglio](/download/), clique com o botão direito no arquivo `.csv` e escolha **Abrir Com ▸ Foglio**. Arquivos `.tsv` e `.txt` funcionam do mesmo jeito. Quando terminar, salve como pasta de trabalho do Excel (`.xlsx`) para manter fórmulas e formatação, ou de novo como CSV.",
            ],
          },
        ],
      },
      {
        heading: "Outras formas de abrir um CSV no Mac",
        bullets: [
          "**Numbers:** clique duas vezes ou use Abrir Com ▸ Numbers. Funciona bem com arquivos limpos em UTF-8 separados por vírgula; com ponto e vírgula ou outras codificações, confira as opções de importação e o resultado com atenção.",
          "**Excel:** use **Dados ▸ Obter Dados ▸ De Texto/CSV** (ou o antigo assistente de importação de texto) em vez de clicar duas vezes, para escolher o delimitador, a codificação (Origem do Arquivo) e o tipo de cada coluna.",
          "**LibreOffice Calc:** mostra uma janela de importação de texto onde você escolhe o conjunto de caracteres, os separadores e os tipos de coluna. Muito completo.",
          "**Google Sheets:** Arquivo ▸ Importar ▸ Fazer upload, com detecção automática ou personalizada do separador. Exige enviar os dados para a nuvem.",
          "**TextEdit:** não é uma planilha, mas é útil para ver o que realmente tem dentro do arquivo.",
        ],
        body: [],
      },
      {
        heading: "Mantenha zeros à esquerda e números longos",
        body: [
          "CEPs, códigos de produto e telefones como `00123` parecem números para qualquer planilha e perdem os zeros. Identificadores longos, como CPF, CNPJ, números de cartão ou chaves de acesso de nota fiscal, são arredondados depois de 15 dígitos. Se essas colunas importam, peça a exportação com esses valores entre aspas e com um prefixo, abra o CSV num app que permita definir colunas como Texto durante a importação (o assistente do Excel, o LibreOffice) ou guarde o arquivo original intacto como referência.",
        ],
      },
      {
        heading: "Salvar um CSV que os outros consigam abrir",
        body: [
          "O CSV guarda só os valores de uma planilha: sem fórmulas, formatação ou outras planilhas. O Foglio avisa antes de salvar e oferece salvar como pasta de trabalho do Excel. Quando você salva em CSV, o Foglio grava UTF-8 com marca de ordem de bytes (para o Excel reconhecer a codificação). O delimitador acompanha o formato de números do Foglio: `;` quando ele usa vírgula decimal (Macs com região na Itália, Alemanha, Espanha ou França, como faz o Excel) e `,` nos demais casos. Num Mac com região Brasil, o padrão do Foglio é o formato em inglês, com vírgula como delimitador; nos ajustes do app (Settings) é possível escolher outro formato de números e datas.",
          "Se o arquivo vai para alguém em outro país, diga qual delimitador e qual separador decimal você usou, ou mande um `.xlsx`. Isso evita todos os problemas desta página. Para arquivos do Excel, veja [como abrir arquivo xlsx no Mac sem Excel](/guides/open-xlsx-on-mac-without-excel/).",
        ],
      },
    ],
    faq: [
      {
        q: "Por que meu CSV abre numa coluna só?",
        a: "O app usou o delimitador errado: normalmente o arquivo usa ponto e vírgula e o app esperava vírgulas, ou o contrário. Use uma janela de importação para escolher o delimitador, ou um app como o Foglio, que o detecta automaticamente.",
      },
      {
        q: "Como corrijo caracteres estranhos como Ã© ou Ã§ num CSV?",
        a: "O arquivo foi lido com a codificação de texto errada, geralmente UTF-8 lido como Windows-1252 ou o contrário. Abra de novo escolhendo a codificação certa (UTF-8 costuma ser a resposta), ou com um app que a detecte.",
      },
      {
        q: "Como abro um CSV com vírgula decimal num Mac configurado em inglês dos EUA?",
        a: "O Foglio detecta a convenção decimal do arquivo e lê `1,5` como um e meio, seja qual for a região do seu Mac. No Excel, use a importação de texto e defina o separador decimal nas opções avançadas.",
      },
      {
        q: "CSV ou xlsx: qual é melhor para compartilhar?",
        a: "O `.xlsx` mantém fórmulas, formatação e várias planilhas, e não tem ambiguidade de codificação nem de delimitador. Use CSV quando um sistema pedir especificamente esse formato.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Abrir CSV no Mac",
    cardText: "Corrija CSVs numa coluna só, acentos embaralhados e vírgulas decimais erradas, com ou sem Excel.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "free-spreadsheet-apps-for-mac",
    meta: {
      title: "Apps de planilha grátis para Mac comparados (2026)",
      description:
        "Planilha grátis para Mac em 2026:Numbers, LibreOffice, Google Sheets, Excel para a web, ONLYOFFICE e Foglio. Para quem é cada um.",
    },
    h1: "Planilha grátis para Mac: um panorama honesto dos apps",
    intro: [
      "Você não precisa pagar por uma planilha no Mac. Existem várias opções realmente grátis, e cada uma é boa numa coisa diferente. Este panorama foi escrito pelo projeto Foglio, então leve em conta o nosso entusiasmo pelo Foglio; tentamos ser justos sobre onde os outros são melhores.",
      "Aqui, “grátis” quer dizer que você pode criar, editar e salvar planilhas sem custo e sem período de teste.",
    ],
    sections: [
      {
        heading: "Apple Numbers",
        body: [
          "**Ideal para:** documentos pessoais bonitos e quem usa aparelhos Apple.",
          "O Numbers é grátis, muitas vezes já vem instalado e roda no Mac, no iPhone e no iPad, com sincronização pelo iCloud e colaboração em tempo real. A tela com tabelas livres e os modelos deixam os documentos caprichados com pouco esforço, tudo em português. Modelos premium e recursos de IA exigem uma assinatura do Apple Creator Studio, mas o app básico é grátis.",
          "**Cuidado com:** arquivos do Excel são importados e convertidos para `.numbers`, então é preciso exportar de volta para `.xlsx`; a versão atual exige macOS 26. Mais em [Numbers vs Foglio](/alternatives/numbers/).",
        ],
      },
      {
        heading: "LibreOffice Calc",
        body: [
          "**Ideal para:** quem quer a planilha de desktop grátis mais completa, e para quem usa OpenDocument.",
          "O LibreOffice é de código aberto (MPL-2.0) e roda no macOS, no Windows e no Linux, em português. O Calc tem tabelas dinâmicas, macros em Basic e Python com suporte parcial a VBA, uma biblioteca de funções enorme e ótima importação e exportação de formatos antigos. Funciona offline, sem conta e, por escolha do projeto, sem recursos de IA.",
          "**Cuidado com:** cerca de 300 MB para baixar, uma suíte de escritório inteira instalada e uma interface que não parece nativa no macOS. Mais em [LibreOffice vs Foglio](/alternatives/libreoffice/).",
        ],
      },
      {
        heading: "Google Sheets",
        body: [
          "**Ideal para:** trabalhar na mesma planilha com outras pessoas.",
          "O Google Sheets roda em qualquer navegador e no celular, com a melhor colaboração em tempo real que existe, histórico de versões, automação com Apps Script e funções que puxam dados da web.",
          "**Cuidado com:** você precisa de uma conta Google, os arquivos ficam nos servidores do Google e o uso offline exige Chrome ou Edge com uma extensão. Mais na [alternativa ao Google Sheets](/alternatives/google-sheets/).",
        ],
      },
      {
        heading: "Excel para a web",
        body: [
          "**Ideal para:** quem usa o Excel de vez em quando e quer o original de graça.",
          "A Microsoft oferece o Excel no navegador sem custo, com uma conta Microsoft. Ele abre arquivos `.xlsx` com fidelidade, porque é o Excel, e permite coautoria pelo OneDrive.",
          "**Cuidado com:** exige conexão com a internet e o OneDrive, e alguns recursos da versão de desktop (como executar macros VBA) não estão disponíveis. O Excel para Mac de desktop precisa de assinatura ou licença para editar.",
        ],
      },
      {
        heading: "ONLYOFFICE Desktop Editors",
        body: [
          "**Ideal para:** quem quer uma suíte grátis parecida com o Office, com a interface de faixa de opções que já conhece.",
          "O ONLYOFFICE Desktop Editors é uma suíte grátis e de código aberto (AGPL-3.0) para Mac, Windows e Linux que usa o Office Open XML (`.xlsx`) como formato nativo e inclui um editor de planilhas com tabelas dinâmicas.",
          "**Cuidado com:** é um app multiplataforma feito com tecnologia web, então o download é maior e ele parece menos um app de Mac do que um app nativo.",
        ],
      },
      {
        heading: "Foglio",
        body: [
          "**Ideal para:** abrir e editar os arquivos do Excel do dia a dia com rapidez, privacidade e um app nativo.",
          "O Foglio é grátis e de código aberto (MIT / Apache-2.0), escrito em Swift/AppKit com um motor em Rust. Tem 7,5 MB de download, abre em 0,24 s, edita `.xlsx` diretamente, entende cerca de 500 funções do Excel e detecta codificações e delimitadores de CSV. Sem conta, sem telemetria, sem conexões de rede por conta própria.",
          "**Cuidado com:** é uma versão 1.0; a interface está em inglês e italiano, e num Mac em português as funções são digitadas em inglês (`SUM`, `VLOOKUP`). Não há tabelas dinâmicas (só o *Summarize by*, mais simples), macros, colaboração nem versão para iPhone ou iPad, e ele não abre arquivos protegidos por senha. Veja o [comparativo completo](/compare/).",
        ],
      },
      {
        heading: "Guia rápido: qual app grátis para qual tarefa",
        bullets: [
          "**Anexos do Excel que você precisa editar e devolver:** Foglio, LibreOffice ou Excel para a web.",
          "**Uma planilha compartilhada da família ou da equipe:** Google Sheets ou Numbers.",
          "**Tabelas dinâmicas ou macros, offline e de graça:** LibreOffice Calc.",
          "**Orçamentos e listas pessoais bonitos:** Numbers.",
          "**Dados confidenciais que não podem sair do Mac:** um app de desktop sem nuvem: Foglio, LibreOffice, ou Numbers com o iCloud desativado para ele.",
          "**Tudo em português, inclusive as funções:** Numbers, LibreOffice, Google Sheets ou Excel para a web.",
          "**Um Mac antigo:** o LibreOffice suporta macOS 11 e o Foglio macOS 14; o Numbers mais recente exige macOS 26.",
        ],
        body: [],
      },
    ],
    faq: [
      {
        q: "Existe um Excel totalmente grátis para Mac?",
        a: "O Excel para a web é grátis com uma conta Microsoft; o Excel para Mac de desktop precisa de assinatura ou licença para editar. Apps de desktop grátis que abrem e salvam arquivos do Excel incluem o Foglio, o LibreOffice Calc e o ONLYOFFICE.",
      },
      {
        q: "Qual app de planilha grátis é mais compatível com o Excel?",
        a: "O Excel para a web, porque é o Excel. Entre os apps de desktop, o LibreOffice suporta mais recursos do Excel no geral, enquanto o Foglio e o ONLYOFFICE usam o `.xlsx` como formato nativo. Teste seus próprios arquivos: a compatibilidade depende do que há neles.",
      },
      {
        q: "Qual é o mais leve?",
        a: "O Foglio, com 7,5 MB de download e cerca de 19 MB instalado. O Google Sheets e o Excel para a web não instalam nada, mas precisam de navegador e conexão com a internet.",
      },
      {
        q: "Esses apps são grátis para uso em empresas?",
        a: "O Foglio (MIT / Apache-2.0), o LibreOffice (MPL-2.0) e o ONLYOFFICE Desktop Editors (AGPL-3.0) podem ser usados no trabalho sem custo. O Numbers é grátis para todos. O Google e a Microsoft oferecem planos pagos para empresas com recursos extras.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Apps de planilha grátis para Mac",
    cardText: "Numbers, LibreOffice, Google Sheets, Excel para a web, ONLYOFFICE e Foglio: para quem é cada um.",
  },

  // ───────────────────────────────────────────────────────────────────
  {
    slug: "excel-functions-italian-english",
    meta: {
      title: "Funções do Excel em italiano e inglês: lista | Foglio",
      description:
        "VLOOKUP é CERCA.VERT, SUM é SOMMA, IF é SE. Lista prática das funções do Excel em italiano e inglês, e por que as fórmulas usam ponto e vírgula na Itália.",
    },
    h1: "Nomes das funções do Excel em italiano e inglês",
    intro: [
      "O Excel traduz os nomes das funções. Num Mac em italiano, `SUM` é `SOMMA`, `VLOOKUP` é `CERCA.VERT` e `IF` é `SE`, e os argumentos são separados por ponto e vírgula. Ótimo para quem fala italiano, confuso para quem segue um tutorial em inglês ou trabalha com colegas italianos.",
      "Abaixo está uma lista prática das funções mais usadas nos dois idiomas, seguida das regras que costumam confundir: separadores, vírgula decimal e o que acontece quando um arquivo passa de um idioma para outro. No fim, explicamos como fica a situação em português.",
    ],
    sections: [
      {
        heading: "Matemática e estatística",
        body: [],
        bullets: [
          "`SUM` → `SOMMA`",
          "`SUMIF` → `SOMMA.SE`",
          "`SUMIFS` → `SOMMA.PIÙ.SE`",
          "`SUMPRODUCT` → `MATR.SOMMA.PRODOTTO`",
          "`AVERAGE` → `MEDIA`",
          "`AVERAGEIF` → `MEDIA.SE`",
          "`COUNT` → `CONTA.NUMERI`",
          "`COUNTA` → `CONTA.VALORI`",
          "`COUNTBLANK` → `CONTA.VUOTE`",
          "`COUNTIF` → `CONTA.SE`",
          "`COUNTIFS` → `CONTA.PIÙ.SE`",
          "`ROUND` → `ARROTONDA`",
          "`ROUNDUP` → `ARROTONDA.PER.ECC`",
          "`ROUNDDOWN` → `ARROTONDA.PER.DIF`",
        ],
      },
      {
        heading: "Lógica",
        body: [],
        bullets: [
          "`IF` → `SE`",
          "`IFS` → `PIÙ.SE`",
          "`IFERROR` → `SE.ERRORE`",
          "`IFNA` → `SE.NON.DISP.`",
          "`AND` → `E`",
          "`OR` → `O`",
          "`NOT` → `NON`",
        ],
      },
      {
        heading: "Busca e matrizes dinâmicas",
        body: [],
        bullets: [
          "`VLOOKUP` → `CERCA.VERT`",
          "`HLOOKUP` → `CERCA.ORIZZ`",
          "`XLOOKUP` → `CERCA.X`",
          "`INDEX` → `INDICE`",
          "`MATCH` → `CONFRONTA`",
          "`INDIRECT` → `INDIRETTO`",
          "`OFFSET` → `SCARTO`",
          "`FILTER` → `FILTRO`",
          "`SORT` → `ORDINA`",
        ],
      },
      {
        heading: "Texto",
        body: [],
        bullets: [
          "`LEFT` → `SINISTRA`",
          "`RIGHT` → `DESTRA`",
          "`MID` → `STRINGA.ESTRAI`",
          "`LEN` → `LUNGHEZZA`",
          "`TRIM` → `ANNULLA.SPAZI`",
          "`UPPER` → `MAIUSC`",
          "`LOWER` → `MINUSC`",
          "`SUBSTITUTE` → `SOSTITUISCI`",
          "`CONCATENATE` → `CONCATENA`",
          "`TEXTJOIN` → `TESTO.UNISCI`",
          "`TEXT` → `TESTO`",
          "`VALUE` → `VALORE`",
        ],
      },
      {
        heading: "Datas",
        body: [
          "Muitas funções têm o mesmo nome nos dois idiomas, por exemplo `MAX`, `MIN`, `LET` e `LAMBDA`.",
        ],
        bullets: [
          "`TODAY` → `OGGI`",
          "`NOW` → `ADESSO`",
          "`YEAR` → `ANNO`",
          "`MONTH` → `MESE`",
          "`DAY` → `GIORNO`",
          "`WEEKDAY` → `GIORNO.SETTIMANA`",
          "`EDATE` → `DATA.MESE`",
          "`EOMONTH` → `FINE.MESE`",
          "`DATEDIF` → `DATA.DIFF`",
          "`NETWORKDAYS` → `GIORNI.LAVORATIVI.TOT`",
        ],
      },
      {
        heading: "Ponto e vírgula e vírgula decimal",
        body: [
          "Na Itália, um e meio se escreve `1,5`, como no Brasil. Como a vírgula já está ocupada, o Excel em italiano separa os argumentos das funções com **ponto e vírgula**: `=SE(A1>1,5;\"sì\";\"no\")` é a forma italiana de `=IF(A1>1.5,\"yes\",\"no\")`. Alemanha, França, Espanha e boa parte da Europa continental funcionam do mesmo jeito, assim como o Excel em português do Brasil.",
          "Quem decide isso são os ajustes de região do Mac, não só o idioma: um Mac em inglês configurado com região da Itália também usa vírgula decimal no Excel.",
        ],
      },
      {
        heading: "Os arquivos não ligam para o idioma em que você digita",
        body: [
          "Um arquivo `.xlsx` sempre guarda as fórmulas em inglês e com vírgulas: `SUM(A1:A10)`, não `SOMMA` nem `SOMA`. Cada cópia do Excel as traduz para o idioma do usuário na hora de exibir. Assim, um colega italiano, um americano e um brasileiro podem compartilhar o mesmo arquivo sem quebrar nada, desde que todos os apps sigam essa regra.",
          "Copiar e colar o texto de uma fórmula é diferente: colar `=VLOOKUP(A2,B:C,2,FALSE)` de um site em inglês no Excel em italiano dá erro. Traduza os nomes com a lista acima e troque as vírgulas por ponto e vírgula.",
        ],
      },
      {
        heading: "Fórmulas localizadas no Foglio, e o caso do português",
        body: [
          "O [Foglio](/), a planilha grátis e de código aberto para Mac, segue a mesma convenção do Excel em italiano, alemão, espanhol e francês. Num Mac em italiano você digita `=SOMMA(A1:A10;B2)`, `CERCA.VERT` ou `SE.ERRORE` com ponto e vírgula e vírgula decimal, com sugestões de preenchimento e descrições em italiano; no disco, o arquivo mantém a forma em inglês do Excel. Alemão (`SUMME`, `SVERWEIS`), espanhol (`SUMA`, `BUSCARV`) e francês (`SOMME`, `RECHERCHEV`) funcionam do mesmo jeito, e o navegador de Inserir Função lista as ~500 funções com os nomes localizados.",
          "**O Foglio não traduz as funções para o português.** No Excel em português, `VLOOKUP` se chama `PROCV`, `SUM` é `SOMA` e `IF` é `SE`, mas no Foglio esses nomes não funcionam: num Mac em português você digita os nomes em inglês (`SUM`, `IF`, `VLOOKUP`), por padrão com vírgula entre os argumentos e ponto decimal, como num Excel em inglês. Nos ajustes do Foglio (Settings) dá para escolher outro formato de números e datas. Os arquivos continuam padrão e aparecem traduzidos no Excel em português.",
          "O Google Sheets e o LibreOffice também traduzem os nomes das funções conforme as configurações, inclusive para o português, e o Numbers também. Se você segue tutoriais em inglês, o Show Formulas (menu View) do Foglio ajuda a comparar o que você digitou com o que o tutorial mostra.",
        ],
      },
    ],
    faq: [
      {
        q: "Como se chama o VLOOKUP no Excel em italiano?",
        a: "`CERCA.VERT`. Os argumentos são os mesmos, separados por ponto e vírgula: `=CERCA.VERT(A2;B:C;2;FALSO)`. O XLOOKUP é `CERCA.X`. No Excel em português, o VLOOKUP se chama `PROCV`.",
      },
      {
        q: "Por que minha fórmula dá erro no Excel em italiano?",
        a: "Geralmente porque ela usa nomes em inglês ou vírgulas entre os argumentos. Use os nomes em italiano e ponto e vírgula, e escreva os decimais com vírgula.",
      },
      {
        q: "Dá para usar os nomes das funções em inglês?",
        a: "O Excel segue o idioma do Office e do sistema. O Foglio segue o idioma e a região do Mac; mudá-los em Ajustes do Sistema ▸ Geral ▸ Idioma e Região muda também os nomes das funções. Em português, o Foglio sempre usa os nomes em inglês, porque não tem tradução para o português.",
      },
      {
        q: "Um arquivo feito no Excel em italiano funciona no Excel em inglês ou em português?",
        a: "Sim. O arquivo guarda as fórmulas em inglês internamente, então qualquer versão do Excel, e o Foglio, as mostra no próprio idioma.",
      },
    ],
    updated: UPDATED,
    cardTitle: "Funções do Excel: italiano ↔ inglês",
    cardText: "Cerca de 50 nomes de funções do Excel traduzidos, de SOMMA a CERCA.VERT, e por que as fórmulas italianas usam ponto e vírgula.",
  },
];
