import { ChevronDown } from "lucide-react";
import { Ornament } from "./Ornament";

const faqs = [
  {
    q: "Quanto custa um bolo de aniversário na MayCakes?",
    a: "Nossos bolos recheados começam em R$ 85,00 o quilo. O preço final depende do tamanho, sabor e personalização. Entre em contato pelo WhatsApp para orçamento personalizado em até 10 minutos.",
  },
  {
    q: "Vocês fazem entrega em Toledo?",
    a: "Sim! Atendemos toda Toledo e região com entrega caprichada. Confirmamos o valor do frete no momento do pedido via WhatsApp.",
  },
  {
    q: "Com quanto tempo de antecedência preciso encomendar?",
    a: "Recomendamos 48 horas de antecedência para garantir a data desejada, pois aceitamos apenas 6 encomendas por dia para manter nosso padrão de qualidade premium.",
  },
  {
    q: "Os bolos da MayCakes são frescos ou congelados?",
    a: "Todos os nossos bolos são feitos do zero no dia da entrega. Não trabalhamos com produtos congelados. É por isso que aceitamos poucas encomendas por dia.",
  },
  {
    q: "Quais sabores de bolo vocês oferecem?",
    a: "Trabalhamos com bolos tradicionais (milho, cenoura, fubá, torta paraguaia), recheados (chocolate, red velvet, dois amores, quatro leites) e gourmet exclusivos (vulcão de cenoura, chocolate belga com maracujá, abacaxi com cocada). Consulte nosso cardápio completo ou peça sabores personalizados.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow">Perguntas Frequentes</p>
          <h2 className="font-display text-3xl md:text-5xl mt-2 text-[var(--color-petrol)]">
            Tudo que você precisa saber
          </h2>
          <Ornament className="mt-4" />
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group border border-[var(--color-gold)]/25 rounded-lg overflow-hidden bg-[var(--color-cream)]/40"
            >
              <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-5 py-4 hover:bg-[var(--color-cream)]/70 transition-colors">
                <span className="font-display text-lg md:text-xl text-[var(--color-petrol)]">{item.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-[var(--color-gold)] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-sm md:text-base text-[var(--color-petrol)]/80 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}