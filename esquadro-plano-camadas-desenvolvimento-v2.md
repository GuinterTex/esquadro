# Esquadro, plano de desenvolvimento em camadas, versão 2

Para construir a landing com o Grok Code, uma camada por vez, na ordem. Cada camada depende da anterior estar de pé. Não pule, não junte duas.

## Como usar
- Cole uma camada por vez no Grok Code. Deixe ele executar.
- Confira o resultado contra o critério de aceite da camada. Se falhar, peça patch da camada, não a próxima.
- Só quando a camada passar, cole a próxima.
- Cada camada termina mandando o agente parar e pedir a seguinte, para você segurar o portão.

## O que este plano entrega, e o que não entrega
Entrega uma página sóbria, rápida, na marca, que converte quem chega e não vaza o tráfego. Não entrega tráfego. A venda depende também do funil de conteúdo, LinkedIn e newsletter, que leva gente qualificada até aqui. Página pronta não é venda, é a superfície onde a venda acontece.

## Fontes da verdade, mantenha abertas
- Copy e visual: esquadro-prompt-final-v0.
- Cor, fonte, símbolo, marca: o documento-mãe.
- Conversão: esquadro-checklist-conversao.
- SEO e JSON-LD: esquadro-cta-seo-spec.
- Três placeholders que só você troca: COLOCAR_LINK_HOTMART, COLOCAR_URL_DA_LANDING, COLOCAR_PRECO.

## Decisões suas ainda abertas, resolva antes da camada que depende delas
- Preço. Entra no herói, entra só no checkout da Hotmart, ou some da página. Afeta a camada 3, o JSON-LD da camada 2 e a camada 7. Não deixe o agente inventar.
- Número de conteúdos. O texto diz nove módulos, o print da Hotmart mostra dez conteúdos. Ou o décimo é a aula zero, Antes de começar, e o texto explica isso, ou o número se corrige. Afeta a camada 3 e a 7.
- Domínio. Onde a página mora, para o COLOCAR_URL_DA_LANDING. Afeta a camada 2 e a 7.

## Regras que valem em todas as camadas
- Só Esquadro, autor Flávio Paz. Nada de Cimbre em texto, metadado, nome de arquivo ou comentário.
- Sem travessão. Sentence case.
- Um só navy de marca, o #0D2A4A, rege a página inteira, header, seção, botão, rodapé. O azul mais escuro da foto de estúdio, perto de #1A2436, não é token, é luz de estúdio. Ele só pode aparecer como exceção local atrás da maquete no herói, para a foto costurar com o fundo, e em lugar nenhum mais. Segundo navy fora do herói é bug, não decisão.
- A foto da maquete é imagem-assinatura, não paleta. Papel dela: Open Graph e social. No herói, o símbolo é o vetor leve, não a foto pesada, por causa do LCP.

---

## Camada 0. Fundação técnica, libs e tokens

Objetivo: o alicerce onde tudo assenta. Nenhum conteúdo ainda.

Escopo:
- Projeto React com Tailwind. Se for Next, use next/font.
- Carregar IBM Plex Sans, pesos 400, 500, 600, e JetBrains Mono 400, com display swap.
- Tokens de cor como variáveis, e só estes: fundo #0D2A4A, giz #F2F4F6, mudo #C5CDD6, filete branco a 25 por cento, régua branco a 30 por cento, botão fundo #F2F4F6 texto #0D2A4A hover #FFFFFF.
- Um token de fundo, o #0D2A4A. Não criar um segundo token de navy. O #1A2436 não é token, é exceção local do herói tratada na camada 5.
- Escala tipográfica e espaçamento base, grid, sentence case por padrão.
- Base de acessibilidade: foco visível global, um só H1 permitido por página por convenção do time.

Libs, decisão travada: React mais Tailwind. Para primitivos acessíveis use Radix, ou shadcn sobre Radix, apenas onde o teclado importa, que nesta página é o acordeão do FAQ. Todo o resto é feito à mão com Tailwind. Proibido, e cada um por motivo: biblioteca de animação, Framer Motion ou Lottie, pesa e atrasa o LCP. Biblioteca de ícone, a página não usa ícone. Kit de UI que imponha visual próprio. Segunda família de fonte além das duas. Toda lib é peso e é um visual, e o nosso diferencial é sobriedade e velocidade.

Fora de escopo agora: qualquer seção, qualquer copy, qualquer imagem.

Critério de aceite: a página sobe em branco, com o fundo navy correto, as duas fontes carregando com swap, os tokens aplicáveis por classe, um único token de navy, e zero dependência além das travadas acima. Rode o listador de dependências e confirme que não entrou animação, ícone nem kit de UI.

Ao terminar, pare, mostre o package de dependências e os tokens, e peça a Camada 1. Não avance sozinho.

---

## Camada 1. Sistema de design, os primitivos

Objetivo: os blocos reutilizáveis, antes de qualquer página.

Escopo, cada um como componente isolado, renderizados numa página de teste:
- Botão de ação, único estilo, giz no navy, alto contraste, alvo grande, para a lei de Fitts. Estados de hover por opacidade, sem cor nova.
- Filete e régua tracejada, a régua em branco a 30 por cento, divisória entre seções.
- O símbolo, SVG das cinco placas isométricas empilhadas em linha branca, estático, sem animação. Uma versão grande para o herói e uma reduzida para o topo e o favicon, que sobreviva pequena. O favicon é o vetor chapado das cinco placas, nunca a foto, e precisa continuar legível em tamanho mínimo.
- Wrapper de seção, com o ritmo de espaço e o grid.
- Escala de heading e de corpo aplicada.

Fora de escopo: montar a página, escrever copy final.

Critério de aceite: uma página de teste mostra cada primitivo. O botão é nítido e grande no mobile. O símbolo tem cinco placas, nunca quatro, e continua legível reduzido. Nenhum segundo azul apareceu.

Ao terminar, pare, mostre a página de primitivos, e peça a Camada 2.

---

## Camada 2. Esqueleto semântico e head de SEO

Objetivo: a espinha da página, com a hierarquia certa, sem copy final.

Escopo:
- Estrutura semântica na ordem: topo com navegação, herói, por que existe, o que sai sabendo, para quem é e não é, como se organiza, os nove módulos, método, autor, o que não promete, perguntas, chamada final, rodapé.
- Um H1 só. Cada seção em H2. Subtítulo de módulo, se houver, em H3, sem pular nível.
- Placeholders de texto curtos, marcados, em cada bloco. Ainda não é a copy.
- Head de SEO: title e meta da espec, Open Graph com título, descrição e a imagem social, idioma pt-BR, sem noindex.
- A imagem de Open Graph é a foto da maquete das cinco placas sobre o navy, exportada em 1200 por 630, comprimida. É o papel de assinatura da foto. Ela não entra no corpo da página, só na OG e no social.
- O bloco JSON-LD de curso da espec, com os placeholders COLOCAR.

Fora de escopo: copy final, acabamento visual, microcopy.

Critério de aceite: o esboço de headings mostra um H1 e H2 por seção, na ordem certa. O head traz title, meta, OG com a foto 1200 por 630 comprimida, e o JSON-LD. Nenhum Cimbre em nenhum metadado. Navegação com no máximo os quatro links, A trilha, Módulos, Autor, Perguntas.

Ao terminar, pare, mostre o outline de headings e o head, e peça a Camada 3.

---

## Camada 3. Conteúdo e copy

Objetivo: despejar a copy aprovada em cada bloco. Aqui entra a estratégia de conteúdo.

Escopo:
- Usar a copy do esquadro-prompt-final-v0 em cada seção, verbatim, com uma correção de herói abaixo.
- Correção do herói, que as duas pesquisas pediram, porque o herói atual descreve o produto e passa raspando no teste dos cinco segundos. Trocar o topo do herói por, kicker em mono: Trilha escrita, sistemas de IA. H1: Esquadro. Do dado à resposta. Linha de cena, logo abaixo do H1, antes da linha de apoio: Na reunião, o fornecedor junta quatro termos numa frase só e mostra o slide. Linha de apoio: Trilha escrita de arquitetura de sistemas de IA, para ler o sistema inteiro e julgar o que o slide esconde. Assim o primeiro ecrã responde o que é, para quem, o que muda e o que clicar, sem rolar.
- Se a decisão de preço for mostrar na página, o preço entra aqui, perto do CTA do herói, com o valor real, nunca COLOCAR_PRECO à vista. Se a decisão for não mostrar, o herói não cita preço e manda para o checkout.
- Os nove módulos como lista numerada 01 a 09, número em mono, título e uma linha, sem card e sem ícone. Se o print da Hotmart ficar em dez conteúdos, incluir uma linha discreta explicando que a aula zero, Antes de começar, é o décimo conteúdo, para o número bater.
- FAQ com as quatro perguntas, formato, programar, certificado, acesso, e nada além.
- Autor, Flávio Paz, com o recorte seguro, sem foto de banco.
- A seção o que não promete, na íntegra.

Fora de escopo: mexer no layout, na cor, na performance.

Critério de aceite: um estranho do perfil, olhando só a dobra por cinco segundos, diz o que é, para quem e o que clicar. Cada H2, lido sozinho, informa. Nenhum placeholder de texto restante, exceto os três COLOCAR que ainda dependem de decisão sua.

Ao terminar, pare, mostre a página com a copy, e peça a Camada 4.

---

## Camada 4. Conversão e comportamento

Objetivo: aplicar o checklist de conversão sobre o conteúdo. Estratégia de comportamento.

Escopo, tudo do esquadro-checklist-conversao:
- Um único destino de compra na página, texto Comprar a trilha, apontando COLOCAR_LINK_HOTMART, repetido no herói, no fim dos módulos e na chamada final. A âncora Ver os nove módulos rola, não é segundo checkout.
- Microcopy de reassurance honesta abaixo de cada botão de compra: o que acontece ao clicar, que o acesso é pela Hotmart. Sem inventar.
- Dobra completa, H1, cena, apoio e botão visíveis sem rolar.
- Remover qualquer link de saída no corpo, só compra e âncora. Nada de LinkedIn, blog ou marca externa no meio.
- Benefício e resultado antes de formato, na dobra e no o que sai sabendo.
- Sem prova social, número de aluno, selo, estrela nem escassez. Deixar um espaço comentado no código para depoimento real futuro.

Fora de escopo: refino estético fino, performance.

Critério de aceite: rode o checklist de conversão inteiro. Um só href de compra na página. Reassurance presente. Zero link de saída no corpo. Zero prova falsa.

Ao terminar, pare, mostre o resultado contra o checklist, e peça a Camada 5.

---

## Camada 5. Acabamento visual, estratégia de design aplicada

Objetivo: o polimento que faz a página ler documento de engenharia. Estratégia de design.

Escopo:
- Ritmo tipográfico, variação de escala entre seções, muito espaço em branco, para não ficar plano na rolagem longa.
- Régua tracejada como divisória entre seções, parada.
- Hierarquia visual que guia o olho para o botão, o giz como única cor de ação.
- Hover de link por sublinhado ou opacidade, sem cor nova, sem elevação de card.
- Símbolo estático no herói, o vetor das cinco placas, com presença, e reduzido no topo. Não usar a foto da maquete no corpo do herói, por causa do peso.
- Exceção de cor do herói, a única da página. Se o herói precisar de profundidade de estúdio para a área do símbolo, usar uma vinheta radial leve em CSS, do #1A2436 no centro para o #0D2A4A nas bordas, atrás da maquete, sem terceiro stop, sem azul claro, sem ruído. Exemplo: background-color #0D2A4A, e no herói background-image radial-gradient elipse em 50 por cento 42 por cento, #1A2436 0 por cento, #0D2A4A 72 por cento. Em nenhuma outra seção esse segundo azul aparece.
- Ajuste fino de 390 pixels, H1, botão e navegação nítidos.
- Passar a lista anti-slop: sem segundo azul fora da vinheta do herói, sem Inter, Sora, mesh colorido, glass, grão, brilho, emoji, foto de banco.

Fora de escopo: mudar copy ou estrutura.

Critério de aceite: a página lê sóbria e sem cara de promoção, o que também é conversão, porque página com cara de anúncio é ignorada. Nenhum item da lista anti-slop presente. O botão é o elemento de maior contraste da tela. O segundo navy aparece só na vinheta do herói, em nenhum outro lugar.

Ao terminar, pare, mostre a página acabada, e peça a Camada 6.

---

## Camada 6. Performance, acessibilidade e medição

Objetivo: velocidade, acesso e medição como alavancas de conversão, não capricho.

Escopo:
- LCP tratado como alavanca. O elemento grande do herói é o símbolo em SVG, leve, não a foto. Fontes com swap, sem vídeo autoplay, sem imagem pesada no herói, defer do que está fora da tela. A foto da maquete só vive na OG, comprimida, não no corpo.
- Core Web Vitals verdes no teste.
- Contraste AA no corpo sobre o navy, confirmar o mudo #C5CDD6 no tamanho de texto usado.
- Foco visível, navegação por teclado, o acordeão do FAQ acessível via Radix.
- Respeitar prefers reduced motion, e como não há animação, garantir que nada se mexe sozinho.
- Alt text descritivo no símbolo e nas figuras.
- Medição, para você saber se converte. Colocar parâmetros de origem, UTM, no link COLOCAR_LINK_HOTMART, para a Hotmart atribuir de onde veio a compra. Opcional, uma analítica leve e sem cookie invasivo para contar visita e clique no CTA, respeitando a LGPD, sem rastreador que exija banner de consentimento pesado. Sem isso, você publica no escuro e não sabe o que ajustar.

Fora de escopo: nova seção, nova copy.

Critério de aceite: rode o Lighthouse e um verificador de acessibilidade. Performance e acessibilidade altas, contraste AA, foco visível, LCP baixo com o herói em SVG. O link de compra carrega os parâmetros de origem.

Ao terminar, pare, mostre os números, e peça a Camada 7.

---

## Camada 7. QA final e pré-publicação

Objetivo: fechar antes de publicar, sem deixar buraco.

Escopo:
- Trocar os três placeholders, COLOCAR_LINK_HOTMART, COLOCAR_URL_DA_LANDING, COLOCAR_PRECO. Se a decisão for não mostrar preço na página, remover o campo price do JSON-LD para não divergir.
- Resolver o número, nove módulos no texto igual ao que está na Hotmart. Se o print mostra dez conteúdos, ou se explica que o décimo é a aula zero, ou se corrige.
- Validar o JSON-LD no Rich Results Test e no Schema Markup Validator.
- Conferir title e meta no tamanho que o Google corta, e a imagem OG renderizando no LinkedIn e no WhatsApp.
- Varredura final de Cimbre em todo metadado, nome de arquivo e Open Graph.
- Confirmar que existe um só navy de marca na página, e que o segundo azul aparece só na vinheta do herói.

Fora de escopo: qualquer coisa nova. É trava, não construção.

Critério de aceite: nenhum COLOCAR no ar, schema válido, número de módulos coerente com a Hotmart, zero Cimbre, um só token de navy fora do herói, OG renderizando.

Validação que fecha, e é sua, não do agente: antes de mandar tráfego, o teste dos cinco segundos com cinco a oito pessoas do perfil, mostrando a dobra e perguntando o que é e você confiaria. O item que falhar vira patch de seção, não uma segunda landing.

Ao terminar, pare e reporte o estado final.

---

## Resumo da ordem e por que ela é essa
Fundação antes de primitivo, porque primitivo usa token e fonte. Primitivo antes de esqueleto, porque a página monta com os blocos. Esqueleto antes de copy, porque a copy precisa de lugar semântico. Copy antes de conversão, porque conversão ajusta o que já está escrito. Conversão antes de acabamento, porque não se pole o que ainda vai mudar de comportamento. Acabamento antes de performance, porque performance mede a página quase final. QA por último, porque trava o que já está pronto. Cada camada fecha um tipo de risco antes de abrir o próximo.
