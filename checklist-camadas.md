# Checklist, Esquadro

Servidor local: http://localhost:5173/
Primitivos: http://localhost:5173/?vista=primitivos

Medição abaixo é do build de produção, em http://localhost:4173/, com Lighthouse headless. O servidor do dia a dia é o de desenvolvimento, na porta 5173.

## Onde entram as imagens

Nenhuma imagem foi gerada nem copiada. Os lugares já estão ligados.

| Arquivo | Papel | Onde aparece |
| --- | --- | --- |
| `public/assets/simbolo.svg` | Vetor das cinco placas, linha branca, estático | Herói, topo e favicon |
| `public/assets/og.jpg` | Foto da maquete, 1200 por 630, comprimida | Só Open Graph e Twitter. Não entra no corpo |

Depois de soltar o `simbolo.svg`, reinicie o servidor. A página só passa a pedi-lo quando o arquivo existe na hora da subida. O desenho precisa ter cinco placas. Quatro placas não passam na camada 1.

## Camada 0. Fundação

- [x] React e Tailwind.
- [x] IBM Plex Sans 400, 500 e 600, JetBrains Mono 400, `font-display: swap`, só o recorte latino.
- [x] Tokens: fundo `#0D2A4A`, giz `#F2F4F6`, mudo `#C5CDD6`, filete branco a 25%, régua branco a 30%, hover do botão `#FFFFFF`.
- [x] Um só token de navy. A paleta padrão do Tailwind foi zerada.
- [x] Radix só no acordeão do FAQ.
- [x] Sem biblioteca de animação, de ícone ou de kit de UI.

Dependências de runtime: `react`, `react-dom`, `@radix-ui/react-accordion`, `@fontsource/ibm-plex-sans`, `@fontsource/jetbrains-mono`.

Ferramentas de build: `vite`, `@vitejs/plugin-react`, `tailwindcss`, `@tailwindcss/vite`.

## Camada 1. Primitivos

- [x] Botão único, giz no navy, 48px de altura. No mobile de 390px a largura útil fica em 350px.
- [x] Filete sólido e régua tracejada.
- [x] Símbolo em dois tamanhos, com o lugar reservado. O arquivo ainda não está na pasta, então o desenho não aparece.
- [x] Wrapper de seção com grid e três ritmos de espaço.
- [x] Escala de H1, H2, H3, corpo e kicker em mono.
- [x] Página de teste em `?vista=primitivos`, fora da navegação da trilha.

## Camada 2. Esqueleto e head

- [x] Ordem: topo, herói, por que existe, o que sai sabendo, para quem é e não é, como se organiza, nove módulos, método, autor, o que não promete, perguntas, chamada final, rodapé.
- [x] Um H1. H2 em cada seção. H3 nos módulos e nas perguntas. Conferido no navegador.
- [x] Navegação com quatro links: A trilha, Módulos, Autor, Perguntas.
- [x] `lang="pt-BR"`, sem `noindex`, `robots.txt` permitindo a visita.
- [x] Title: "Esquadro. Do dado à resposta." (29 caracteres).
- [x] Description: a linha de apoio do plano (107 caracteres).
- [x] Open Graph e Twitter com a imagem 1200 por 630 apontando para `public/assets/og.jpg`.
- [x] JSON-LD do tipo Course, com os placeholders de link e de URL.
- [ ] A especificação `esquadro-cta-seo-spec` não está na pasta. Title, description e JSON-LD saíram das frases que o próprio plano trava, não de um arquivo de spec separado.

## Camada 3. Copy

- [x] Herói no texto que o plano manda, sem mudança: kicker, H1, cena e linha de apoio.
- [x] Nove módulos, números 01 a 09 em mono, título e uma linha, sem card e sem ícone.
- [x] Linha discreta: a aula zero, Antes de começar, é o décimo conteúdo.
- [x] Quatro perguntas: formato, programar, certificado, acesso.
- [x] Autor, Flávio Paz, sem foto.
- [x] Seção do que não promete presente.
- [x] Preço fora da página e fora do JSON-LD. Nenhum valor foi inventado.
- [ ] O arquivo `esquadro-prompt-final-v0` não está na pasta. Fora do herói, o texto foi escrito para caber no outline do plano e no índice dos nove módulos. Não é a copy verbatim desse arquivo.
- [ ] A resposta de certificado está como "não promete", porque inventar um certificado quebraria a regra de não prometer o que o plano não afirma. Se a Hotmart incluir certificado, essa frase troca.

## Camada 4. Conversão

- [x] Um único href de compra, repetido no herói, no fim dos módulos e na chamada final: `COLOCAR_LINK_HOTMART?utm_source=esquadro&utm_medium=landing&utm_campaign=trilha`.
- [x] Texto do botão: Comprar a trilha.
- [x] Reassurance sob cada botão: o clique segue para o checkout da Hotmart e o acesso é por lá.
- [x] "Ver os nove módulos" rola até `#modulos`. Testado.
- [x] Sem link de saída no corpo. Sem LinkedIn, blog ou marca externa.
- [x] Benefício antes de formato, na dobra e em "O que você sai sabendo".
- [x] Sem prova social, número de aluno, selo, estrela ou escassez. Há um comentário no código do autor para depoimento real futuro.
- [x] Dobra no 390 por 844: H1, cena, apoio e botão terminam em 491px, dentro da tela.

## Camada 5. Acabamento

- [x] Ritmo de espaço diferente entre seções. Dois tamanhos de H2.
- [x] Régua tracejada entre as seções. Filete no header e no rodapé.
- [x] Botão em giz, o bloco de maior contraste.
- [x] Hover de link por sublinhado. Hover do botão no branco já tokenizado.
- [x] Símbolo estático no herói e no topo, sem a foto da maquete no corpo.
- [x] Vinheta só no herói: `radial-gradient(ellipse at 50% 42%, #1A2436 0%, #0D2A4A 72%)`. Conferido no estilo computado. Nenhuma outra seção usa esse segundo azul.
- [x] 390px: H1, botão e navegação legíveis.
- [x] Sem Inter, Sora, mesh, glass, grão, brilho, emoji, foto de banco ou elevação de card.

## Camada 6. Performance, acesso e medição

Lighthouse no build de produção:

| | |
| --- | --- |
| Performance | 98 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 92 |
| LCP | 1,8 s |
| CLS | 0 |
| Bloqueio total | 0 ms |

- [x] Herói sem foto pesada. O LCP medido é texto.
- [x] Fontes com swap. Sem vídeo. Sem animação própria. `prefers-reduced-motion` zera o que um browser ainda tentasse mover.
- [x] Contraste do mudo `#C5CDD6` sobre `#0D2A4A`: 9,04 para 1. Sobre o centro da vinheta `#1A2436`: 9,69 para 1. Os dois passam AA.
- [x] Foco visível. Acordeão abre por teclado. `aria-expanded` conferido.
- [x] Alt do símbolo do herói descritivo. O do topo fica vazio enquanto o arquivo não existe, para não repetir o nome ao lado.
- [x] UTM de origem no link de compra.
- [ ] Analítica de visita e clique não foi ligada. Não havia endpoint, e um rastreador de terceiro pediria banner. O gancho `data-cta="compra"` está nos três botões para uma contagem futura sem cookie.

## Camada 7. QA

- [x] `COLOCAR_PRECO` não aparece. O campo `price` saiu do JSON-LD.
- [ ] `COLOCAR_LINK_HOTMART` e `COLOCAR_URL_DA_LANDING` continuam. O plano manda não inventar domínio nem checkout. O canonical inválido é o que tira o SEO de 100 e deixa 92.
- [ ] Rich Results Test e Schema Markup Validator não rodaram. Os dois pedem a URL pública.
- [ ] A imagem OG não renderiza no LinkedIn nem no WhatsApp enquanto `og.jpg` e a URL real não existirem.
- [x] Varredura do código do site sem a marca anterior, sem travessão e sem emoji.
- [x] Um só navy de marca fora da vinheta do herói.
- [x] Nove módulos no texto, com a aula zero explicada como décimo conteúdo. O print da Hotmart não estava na pasta. Se o print mostrar outra conta, a linha da aula zero é o patch.
- [ ] O teste dos cinco segundos com cinco a oito pessoas do perfil continua seu, como o plano fecha.

## O que ficou de fora de propósito

- Preço na página.
- Link real da Hotmart e URL da landing.
- Foto da maquete e vetor das cinco placas.
- Certificado afirmado.
- Currículo longo do autor.
- Rastreador.
- Qualquer menção à marca anterior.
