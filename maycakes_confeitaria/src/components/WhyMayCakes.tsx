import { Leaf, Boxes, FlaskConical, CalendarClock } from "lucide-react";
import { Ornament } from "./Ornament";

const items = [
  {
    icon: Leaf,
    title: "Feito do Zero",
    desc: "Nada de congelados. Tudo fresquinho, todo dia.",
  },
  {
    icon: Boxes,
    title: "Ingredientes Nobres",
    desc: "Chocolate Belga, manteiga premium, frutas selecionadas e geleias artesanais.",
  },
  {
    icon: FlaskConical,
    title: "Geleias Artesanais",
    desc: "Produzidas por nós, com frutas de verdade e receita exclusiva.",
  },
  {
    icon: CalendarClock,
    title: "Atendimento Humano de Verdade",
    desc: "Cada pedido confirmado com 48h de antecedência para garantir perfeição.",
  },
];

export function WhyMayCakes() {
  return (
    <section id="sobre" className="bg-[var(--color-cream)] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow">Por que</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2 text-[var(--color-petrol)]">
            MayCakes?
          </h2>
          <Ornament className="mt-4" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative">
          {items.map((it, i) => (
            <div key={it.title} className="text-center px-2 md:px-4 relative">
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-6 bottom-6 w-px bg-[var(--color-gold)]/20" />
              )}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full text-[var(--color-gold)] mb-5">
                <it.icon className="w-9 h-9" strokeWidth={1.4} />
              </div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-[var(--color-petrol)] mb-3">
                {it.title}
              </h3>
              <p className="text-sm text-[var(--color-petrol)]/70 leading-relaxed max-w-[18rem] mx-auto">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
