import { MessageCircle, BookOpen, Clock } from "lucide-react";
import heroImg from "@/assets/hero-cake.jpg";

const WHATSAPP_URL =
  "https://wa.me/5545991251098?text=" +
  encodeURIComponent("Olá, quero fazer uma encomenda na MayCakes!");

export type HeroProps = {
  /** Quando o banner de novidades está visível, reduz o padding superior — o fluxo já empurrou o hero abaixo do header. */
  compactTop?: boolean;
};

export function Hero({ compactTop = false }: HeroProps) {
  return (
    <section
      id="hero"
      className={`relative text-[var(--color-petrol)] min-h-[100svh] flex items-end md:items-center pb-16 overflow-hidden ${compactTop ? "pt-12 md:pt-14" : "pt-28 md:pt-32"}`}
    >
      {/* Imagem de fundo full-bleed */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Bolo recheado de aniversário da MayCakes com morangos, mirtilos e chantilly"
          width={1920}
          height={1280}
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Overlay bege suave — degradê do topo claro para a base mais densa para legibilidade dos textos */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,240,232,0.35) 0%, rgba(245,240,232,0.55) 35%, rgba(237,230,216,0.85) 70%, rgba(237,230,216,0.96) 100%)",
          }}
        />
        {/* Reforço lateral — esquerda densa para legibilidade do texto, direita transparente para revelar o bolo destaque */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(245,240,232,0.95) 0%, rgba(245,240,232,0.78) 30%, rgba(245,240,232,0.25) 55%, rgba(245,240,232,0) 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 items-center w-full z-10">
        {/* Texto */}
        <div className="relative z-10">
          <p className="text-xs tracking-[0.3em] font-bold text-[var(--color-petrol)]/80 uppercase">
            Confeitaria Premium
          </p>
          <div className="my-4 flex items-center gap-3 text-[var(--color-gold)]">
            <span className="h-px w-12 bg-current opacity-70" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
            </svg>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[var(--color-petrol)]">
            <span className="sr-only">Bolos Artesanais em Toledo PR - MayCakes</span>
            <span aria-hidden="true">
              O sabor de uma{" "}
              <span className="block italic font-medium text-[var(--color-gold)]">
                memória feita
              </span>
              sob encomenda.
            </span>
          </h1>

          {/* H2 SEO visível com palavras-chave principais */}
          <h2 className="mt-3 text-sm md:text-base font-semibold tracking-wide text-[var(--color-petrol)]/75">
            Bolos Artesanais em Toledo PR — Feitos do Zero com Ingredientes Nobres
          </h2>

          <p className="mt-6 text-base md:text-lg text-[var(--color-petrol)]/80 max-w-md leading-relaxed">
            Bolos artesanais feitos do zero, com ingredientes selecionados e todo
            o cuidado que os momentos especiais merecem.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {/* CTA primário com hover invertido */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[var(--color-petrol)] hover:bg-[var(--color-cream)] text-white hover:text-[var(--color-petrol)] border border-transparent hover:border-[var(--color-petrol)] px-6 py-4 rounded-md transition-all duration-300 shadow-[var(--shadow-elegant)]"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--color-gold)] text-[var(--color-petrol)] transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </span>
              <span className="text-left">
                <span className="block text-sm font-bold tracking-wider">
                  FAZER ENCOMENDA
                </span>
                <span className="block text-xs text-white/75 group-hover:text-[var(--color-petrol)]/65 transition-colors duration-300">
                  Quero meu bolo fresquinho
                </span>
              </span>
            </a>

            {/* CTA secundário com hover invertido (claro → escuro) */}
            <a
              href="#bolos"
              className="group inline-flex items-center gap-3 bg-white/70 backdrop-blur border border-[var(--color-petrol)]/20 hover:bg-[var(--color-petrol)] hover:border-[var(--color-petrol)] text-[var(--color-petrol)] hover:text-white px-6 py-4 rounded-md transition-all duration-300"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-gold)]/60 text-[var(--color-gold)] group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-petrol)] transition-colors duration-300">
                <BookOpen className="w-5 h-5" />
              </span>
              <span className="text-left">
                <span className="block text-sm font-bold tracking-wider">
                  VER CARDÁPIO
                </span>
                <span className="block text-xs text-[var(--color-petrol)]/65 group-hover:text-white/75 transition-colors duration-300">
                  Nossos sabores
                </span>
              </span>
            </a>
          </div>

          <div className="mt-8 flex items-start gap-3 text-sm text-[var(--color-petrol)]/75">
            <Clock className="w-4 h-4 mt-0.5 text-[var(--color-gold)] shrink-0" />
            <p>
              Aceitamos apenas{" "}
              <span className="text-[var(--color-petrol)] font-semibold">
                6 encomendas por dia
              </span>{" "}
              para garantir qualidade e exclusividade para você.
            </p>
          </div>
        </div>

        {/* Espaço reservado da coluna direita — a imagem está posicionada em absoluto acima */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
