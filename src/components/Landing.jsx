import { useEffect } from "react";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Compra } from "./Compra.jsx";
import { Faq } from "./Faq.jsx";
import { Section } from "../primitives/Section.jsx";
import { Regua } from "../primitives/Rules.jsx";
import { Symbol } from "../primitives/Symbol.jsx";
import { H1, H2, H3, Kicker, Corpo } from "../primitives/Type.jsx";
import {
  h1,
  kicker,
  cena,
  apoio,
  ancora,
  aulaZero,
  modulos,
  porQue,
  saiSabendo,
  paraQuem,
  organiza,
  metodo,
  autor,
  naoPromete,
  chamada,
} from "../copy.js";

function irPara(alvo) {
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  alvo.scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "start" });
  const heading = /^H[1-3]$/.test(alvo.tagName) ? alvo : alvo.querySelector("h1, h2, h3");
  const foco = heading ?? alvo;
  foco.tabIndex = -1;
  foco.focus({ preventScroll: true });
}

export function Landing() {
  useEffect(() => {
    function aoClicar(event) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest("a[href^='#']");
      if (!link) return;
      const id = decodeURIComponent(link.getAttribute("href").slice(1));
      const alvo = document.getElementById(id);
      if (!alvo) return;
      event.preventDefault();
      irPara(alvo);
      const hash = `#${id}`;
      if (window.location.hash !== hash) history.pushState(null, "", hash);
    }
    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main>
        <Section id="conteudo" tabIndex={-1} space="curto" width="ampla" className="hero">
          <div className="grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Kicker>{kicker}</Kicker>
              <div className="mt-3">
                <H1 tabIndex={-1}>{h1}</H1>
              </div>
              <p className="mt-4 text-lg text-giz">{cena}</p>
              <p className="mt-3 text-giz">{apoio}</p>
              <Compra />
              <p className="mt-4">
                <a href="#modulos" className="inline-flex min-h-11 items-center text-giz underline underline-offset-4">
                  {ancora}
                </a>
              </p>
            </div>
            <div className="hidden md:col-span-5 md:block md:justify-self-end">
              <Symbol variant="hero" />
            </div>
          </div>
        </Section>

        <Regua />

        <Section space="medio">
          <H2 id="trilha" tabIndex={-1}>{porQue.titulo}</H2>
          <div className="mt-6 space-y-4">
            {porQue.paragrafos.map((texto) => (
              <Corpo key={texto}>{texto}</Corpo>
            ))}
          </div>
        </Section>

        <Regua />

        <Section space="largo">
          <H2 marco>{saiSabendo.titulo}</H2>
          <div className="mt-6 space-y-4">
            <Corpo>{saiSabendo.abertura}</Corpo>
            <ul className="list-disc space-y-3 pl-5 text-giz marker:text-giz">
              {saiSabendo.itens.map((texto) => (
                <li key={texto} className="pl-1">
                  {texto}
                </li>
              ))}
            </ul>
            <Corpo>{saiSabendo.fecho}</Corpo>
          </div>
        </Section>

        <Regua />

        <Section space="medio">
          <H2>{paraQuem.titulo}</H2>
          <div className="mt-6 space-y-4">
            <Corpo>{paraQuem.e}</Corpo>
            <Corpo>{paraQuem.nao}</Corpo>
          </div>
        </Section>

        <Regua />

        <Section space="medio">
          <H2>{organiza.titulo}</H2>
          <div className="mt-6 space-y-4">
            {organiza.paragrafos.map((texto) => (
              <Corpo key={texto}>{texto}</Corpo>
            ))}
          </div>
        </Section>

        <Regua />

        <Section space="largo">
          <H2 id="modulos" tabIndex={-1}>Os nove módulos</H2>
          <ol className="mt-8 space-y-6">
            {modulos.map((modulo) => (
              <li key={modulo.numero} className="grid grid-cols-[3rem_1fr] gap-x-4">
                <span className="pt-1 font-mono text-sm text-mudo">{modulo.numero}</span>
                <div>
                  <H3>{modulo.titulo}</H3>
                  <p className="mt-1 text-mudo">{modulo.linha}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-mudo">{aulaZero}</p>
          <Compra />
        </Section>

        <Regua />

        <Section space="medio">
          <H2>{metodo.titulo}</H2>
          <div className="mt-6 space-y-4">
            <Corpo>{metodo.intro}</Corpo>
            {metodo.selos.map((selo) => (
              <p key={selo.nome} className="text-giz"><span className="font-medium">{selo.nome}</span>{` ${selo.linha}`}</p>
            ))}
            <Corpo>{metodo.fecho}</Corpo>
          </div>
        </Section>

        <Regua />

        <Section space="medio">
          <H2 id="autor" tabIndex={-1}>{autor.titulo}</H2>
          <div className="mt-6">
            <Corpo>{autor.linha}</Corpo>
          </div>
          {/* Espaço para depoimento real futuro. Não publicar prova social, número de aluno, selo, estrela nem escassez até existir depoimento verificável. */}
        </Section>

        <Regua />

        <Section space="medio">
          <H2>{naoPromete.titulo}</H2>
          <div className="mt-6">
            <Corpo>{naoPromete.texto}</Corpo>
          </div>
        </Section>

        <Regua />

        <Section space="medio">
          <H2 id="perguntas" tabIndex={-1}>Perguntas sobre formato, programação, certificado e acesso</H2>
          <div className="mt-6 border-b border-filete">
            <Faq />
          </div>
        </Section>

        <Regua />

        <Section space="largo">
          <H2 marco>{chamada.titulo}</H2>
          <div className="mt-6">
            <Corpo>{chamada.linha}</Corpo>
          </div>
          <Compra />
        </Section>
      </main>
      <Footer />
    </>
  );
}
