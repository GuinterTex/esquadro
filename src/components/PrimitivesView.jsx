import { Button } from "../primitives/Button.jsx";
import { Filete, Regua } from "../primitives/Rules.jsx";
import { Section } from "../primitives/Section.jsx";
import { Symbol } from "../primitives/Symbol.jsx";
import { H1, H2, H3, Kicker, Corpo } from "../primitives/Type.jsx";

export function PrimitivesView() {
  return (
    <main className="bg-fundo">
      <Section space="medio" width="ampla">
        <Kicker>Página de teste</Kicker>
        <div className="mt-3">
          <H1>Primitivos</H1>
        </div>
        <div className="mt-4">
          <Corpo mudo>Blocos isolados. Esta vista não entra na navegação da trilha.</Corpo>
        </div>

        <div className="mt-12">
          <H2>Botão</H2>
          <div className="mt-4">
            <Button href="#acao">Comprar a trilha</Button>
          </div>
        </div>

        <div className="mt-12">
          <H2>Filete</H2>
          <div className="mt-4">
            <Filete />
          </div>
        </div>

        <div className="mt-12">
          <H2>Régua</H2>
          <div className="mt-4">
            <Regua />
          </div>
        </div>

        <div className="mt-12">
          <H2>Símbolo</H2>
          <div className="mt-6 flex flex-wrap items-end gap-10">
            <Symbol variant="hero" />
            <Symbol variant="topo" />
          </div>
        </div>

        <div className="mt-12">
          <H2>Escala</H2>
          <div className="mt-6 space-y-4">
            <H3>Subtítulo de módulo</H3>
            <Corpo>Corpo em giz, sobre o navy, no tamanho de leitura.</Corpo>
            <Corpo mudo>Linha muda, no mesmo tamanho, para conferir contraste.</Corpo>
            <p className="font-mono text-sm text-mudo">01 número em mono</p>
          </div>
        </div>
      </Section>
    </main>
  );
}
