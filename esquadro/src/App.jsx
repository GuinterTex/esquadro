import { Mark } from "./Mark.jsx";

const CHECKOUT = "COLOCAR_LINK_HOTMART";

const modules = [
  {
    number: "01",
    title: "Fundamentos e a lente.",
    text: "As três relações entre os termos, para classificar a frase antes de discutir a ferramenta.",
  },
  {
    number: "02",
    title: "O mapa do sistema.",
    text: "A cadeia do dado à resposta, o que roda na preparação e o que roda no pedido.",
  },
  {
    number: "03",
    title: "A camada de dados.",
    text: "Por que o teto do resultado está no dado, e o tempo real de fachada.",
  },
  {
    number: "04",
    title: "Arquitetura e modelo.",
    text: "O que significa proprietária, onde o modelo roda e o que isso decide.",
  },
  {
    number: "05",
    title: "Camada semântica e regras.",
    text: "Traduzir o número e julgar com a regra, e onde a regra deve morar.",
  },
  {
    number: "06",
    title: "A camada do agente.",
    text: "Se o caso precisa de um, contrato de ação e por que mais agentes não é mais inteligência.",
  },
  {
    number: "07",
    title: "Alucinação, guardrails e confiança.",
    text: "As classes de erro, as famílias de controle e a confiança medida.",
  },
  {
    number: "08",
    title: "O motor de decisão.",
    text: "Cálculo fixo contra modelo que aprende, e o drift que corrói em silêncio.",
  },
  {
    number: "09",
    title: "Capstone.",
    text: "Uma solução inteira avaliada camada por camada até um veredito de três saídas.",
  },
];

const outcomes = [
  "Localizar em que camada você está, o que roda antes do pedido e o que roda nele.",
  "Ver onde o número nasce e onde a regra de negócio mora.",
  "Decidir se o caso precisa mesmo de um agente.",
  "Saber se a saída é vigiada e se o motor continua válido.",
  "Juntar tudo num veredito de três saídas que você defende numa mesa.",
];

const questions = [
  {
    q: "Em que formato é a trilha.",
    a: "Texto, nove módulos, leitura de cerca de vinte minutos por módulo, com quiz ao fim de cada um.",
  },
  {
    q: "Preciso saber programar.",
    a: "Não. É para quem decide e para quem constrói, sem exigir treino de modelo.",
  },
  {
    q: "Tem certificado.",
    a: "Não. O valor é o critério, não o diploma.",
  },
  {
    q: "Como acesso.",
    a: "A compra e o acesso são pelo Hotmart, no botão da página.",
  },
];

function BuyLink({ className = "" }) {
  return (
    <a
      href={CHECKOUT}
      className={`inline-flex min-h-11 items-center justify-center whitespace-nowrap bg-[#F2F4F6] px-5 py-3 font-sans text-base font-medium text-[#0D2A4A] hover:bg-white ${className}`}
    >
      Comprar a trilha
    </a>
  );
}

function Rule() {
  return (
    <svg
      role="separator"
      aria-hidden="true"
      width="100%"
      height="14"
      className="block max-w-full overflow-hidden font-mono text-white/30"
    >
      <text
        x="0"
        y="11"
        fill="currentColor"
        fontFamily="JetBrains Mono, monospace"
        fontSize="12"
        fontWeight="400"
        letterSpacing="4"
      >
        {"- ".repeat(140)}
      </text>
    </svg>
  );
}

function Divider() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <Rule />
    </div>
  );
}

function Section({ id, title, children }) {
  const titleId = `${id}-titulo`;
  return (
    <section id={id} aria-labelledby={titleId} className="py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <h2
          id={titleId}
          className="max-w-3xl font-sans text-[1.75rem] font-semibold leading-tight text-[#F2F4F6] md:text-4xl"
        >
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Prose({ children, mute = false }) {
  return (
    <p
      className={`max-w-2xl text-base leading-7 md:text-lg ${mute ? "text-[#C5CDD6]" : "text-[#F2F4F6]"}`}
    >
      {children}
    </p>
  );
}

export function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header id="topo" className="sticky top-0 z-10 border-b border-white/25 bg-[#0D2A4A]">
        <nav
          aria-label="Seções da trilha"
          className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:gap-8 md:px-8"
        >
          <a href="#topo" className="inline-flex w-fit items-center gap-3 font-sans text-lg font-medium text-[#F2F4F6]">
            <Mark decorative className="h-11" strokeWidth={1.75} />
            <span>Esquadro</span>
          </a>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <a className="font-sans text-base font-medium text-[#F2F4F6] underline-offset-4 hover:underline" href="#trilha">
                A trilha
              </a>
            </li>
            <li>
              <a className="font-sans text-base font-medium text-[#F2F4F6] underline-offset-4 hover:underline" href="#modulos">
                Módulos
              </a>
            </li>
            <li>
              <a className="font-sans text-base font-medium text-[#F2F4F6] underline-offset-4 hover:underline" href="#autor">
                Autor
              </a>
            </li>
            <li>
              <a className="font-sans text-base font-medium text-[#F2F4F6] underline-offset-4 hover:underline" href="#perguntas">
                Perguntas
              </a>
            </li>
          </ul>
          <BuyLink className="w-full md:w-auto" />
        </nav>
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section aria-labelledby="titulo" className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <div>
            <p className="font-sans text-sm font-medium text-[#C5CDD6]">Trilha escrita. Sistemas de IA.</p>
            <h1
              id="titulo"
              className="mt-4 max-w-3xl font-sans text-[2.125rem] font-semibold leading-[1.15] text-[#F2F4F6] sm:text-5xl lg:text-[3.25rem]"
            >
              Esquadro. Do dado à resposta.
            </h1>
            <p className="mt-5 max-w-xl font-sans text-lg leading-7 text-[#C5CDD6]">
              Trilha escrita de arquitetura de sistemas de IA. Nove módulos para montar e para avaliar.
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#F2F4F6] md:text-lg">
              Cada módulo entrega uma camada, do dado à resposta, e uma pergunta que o slide do fornecedor não faz. Você sai sabendo onde o número nasce, onde a regra mora e o que o fornecedor preferiu não mostrar.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-8">
              <BuyLink className="w-full sm:w-auto" />
              <a
                href="#modulos"
                className="inline-flex min-h-11 items-center justify-center font-sans text-base font-medium text-[#F2F4F6] underline decoration-white/40 underline-offset-4 hover:decoration-[#F2F4F6] sm:justify-start"
              >
                Ver os nove módulos
              </a>
            </div>
          </div>
          <figure className="lg:justify-self-end">
            <Mark titleId="marca-heroi" className="h-56 sm:h-64 lg:h-[26rem]" strokeWidth={2} />
          </figure>
        </section>

        <Divider />

        <Section id="trilha" title="A lista de definições não protege na reunião.">
          <Prose>
            Definição de IA a internet já tem. O que falta a quem decide e a quem constrói é uma lente para ler o sistema inteiro e saber onde está pisando. Onde o número nasce, onde a regra mora, se o caso pede um agente, se a saída é vigiada, se o motor foi validado. Esta trilha entrega a lente e uma pergunta por camada.
          </Prose>
        </Section>

        <Divider />

        <Section id="leitura" title="No fim, você lê uma solução de IA inteira.">
          <ol className="max-w-3xl list-none border-t border-white/25 p-0">
            {outcomes.map((item, index) => (
              <li
                key={item}
                className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-baseline gap-4 border-b border-white/25 py-5"
              >
                <span className="font-sans text-lg font-medium tabular-nums text-[#F2F4F6]">{index + 1}</span>
                <span className="text-base leading-7 text-[#F2F4F6]">{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-base leading-7 text-[#F2F4F6] md:text-lg">
            Você não sai cientista de dados, e não precisa ser um para decidir bem sobre isso.
          </p>
        </Section>

        <Divider />

        <Section id="para-quem" title="Para quem é, e para quem não é.">
          <div className="grid max-w-5xl gap-0 md:grid-cols-2">
            <div className="border-b border-white/25 pb-8 md:border-b-0 md:border-r md:pr-12 md:pb-0">
              <h3 className="font-sans text-xl font-medium text-[#F2F4F6]">É para</h3>
              <p className="mt-4 max-w-md text-base leading-7 text-[#F2F4F6]">
                product manager, tech lead, arquiteto de solução, especialista de negócio que avalia ou constrói IA sem terceirizar o julgamento para o fornecedor.
              </p>
            </div>
            <div className="pt-8 md:pt-0 md:pl-12">
              <h3 className="font-sans text-xl font-medium text-[#F2F4F6]">Não é</h3>
              <p className="mt-4 max-w-md text-base leading-7 text-[#F2F4F6]">
                curso de prompt, certificação, formação de afiliado, implementação guiada de ferramenta. Não ensina a treinar modelo, e não vende atalho.
              </p>
            </div>
          </div>
        </Section>

        <Divider />

        <Section id="ordem" title="Nove módulos, na ordem que constrói o raciocínio.">
          <Prose>
            Cada módulo tem uma ideia, uma cena para ancorar, o que costuma quebrar, uma pergunta de prova e um quiz curto. A leitura de cada um cabe em cerca de vinte minutos. O quiz mede se o gesto ficou, não se a frase foi memorizada, quatro ou cinco acertos contam como pronto. A ordem importa, a lente do módulo um lê o termo, o mapa do dois lê o sistema, do três ao oito você desce e sobe camada por camada, e o nove aplica tudo.
          </Prose>
        </Section>

        <Divider />

        <Section id="modulos" title="Os nove módulos.">
          <ol className="max-w-3xl list-none border-t border-white/25 p-0">
            {modules.map((module) => (
              <li
                key={module.number}
                className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 border-b border-white/25 py-6 md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-x-6"
              >
                <span className="font-mono text-[2rem] font-normal leading-none text-[#F2F4F6] md:text-5xl">
                  {module.number}
                </span>
                <div>
                  <h3 className="font-sans text-lg font-medium text-[#F2F4F6] md:text-xl">{module.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#C5CDD6]">{module.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <BuyLink className="w-full sm:w-auto" />
          </div>
        </Section>

        <Divider />

        <Section id="metodo" title="O método por trás da trilha">
          <Prose>
            Você já viu curso de IA prometer certeza. Aqui, cada afirmação carrega o seu grau de confiança na cara. O que é fato tem fonte nomeada e datada. O que é prática consolidada vem com o limite dela no mesmo fôlego. O que é tese minha, eu declaro como tese. O que não se sustenta em nenhum dos três é adjetivo, e adjetivo não decide uma compra que custa caro.
          </Prose>
        </Section>

        <Divider />

        <Section id="leva" title="O que você leva não é mais um glossário.">
          <Prose>
            Conceito solto existe de graça. O que esta trilha articula é o caminho do dado à resposta, o método de separar fato, opinião e hipótese, e os artefatos que entram na mesa, uma pergunta por camada e o mapa numa página.
          </Prose>
        </Section>

        <Divider />

        <Section id="autor" title="Quem escreve.">
          <Prose>
            Flávio Paz, dezessete anos construindo produto e tecnologia em setor financeiro e indústria, no Brasil e fora. A trilha é o método que ele usa para ler um sistema, escrito para você aplicar.
          </Prose>
        </Section>

        <Divider />

        <Section id="limites" title="O que esta trilha não promete.">
          <Prose>
            Não certifica. Não garante que a próxima compra sai perfeita. Ler uma evasão bem-educada se afia com mesa real e repetição. O que você leva daqui é a moldura e as perguntas certas, e o degrau seguinte, o de aplicar, é seu.
          </Prose>
        </Section>

        <Divider />

        <Section id="perguntas" title="Perguntas.">
          <div className="max-w-3xl border-t border-white/25">
            {questions.map((item) => (
              <details key={item.q} className="border-b border-white/25">
                <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-6 py-5 text-left font-sans text-lg font-medium text-[#F2F4F6]">
                  <span>{item.q}</span>
                  <span aria-hidden="true" className="faq-icon shrink-0 font-sans text-xl font-normal leading-none" />
                </summary>
                <p className="max-w-2xl pb-5 text-base leading-7 text-[#C5CDD6]">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <Divider />

        <Section id="comecar" title="Comece a ler sistemas de IA do jeito de quem decide.">
          <BuyLink className="w-full sm:w-auto" />
        </Section>

        <Divider />
      </main>

      <footer className="mx-auto w-full max-w-6xl px-5 pt-10 pb-14 md:px-8">
        <a href="#topo" className="inline-flex items-center gap-3 font-sans text-lg font-medium text-[#F2F4F6]">
          <Mark decorative className="h-10" strokeWidth={1.75} />
          <span>Esquadro</span>
        </a>
        <p className="mt-4 max-w-md text-sm leading-6 text-[#C5CDD6]">
          Trilha escrita sobre sistemas de inteligência artificial, do dado à resposta.
        </p>
        <p className="mt-3 text-sm leading-6 text-[#F2F4F6]">Conteúdo de Flávio Paz.</p>
        <p className="mt-3 text-sm leading-6 text-[#C5CDD6]">Contato no canal da compra.</p>
      </footer>
    </>
  );
}
