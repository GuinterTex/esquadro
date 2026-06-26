import { Star } from "lucide-react";
import { Ornament } from "./Ornament";
import { AnimatedAvatar } from "./AnimatedAvatar";
import e1 from "@/assets/event-1.jpg";
import e2 from "@/assets/event-2.jpg";
import e3 from "@/assets/event-3.jpg";
import e4 from "@/assets/event-4.jpg";
import e5 from "@/assets/event-5.jpg";

const testimonials = [
  {
    variant: "female-1" as const,
    name: "Juliana M.",
    city: "Toledo - PR",
    text: '"O bolo Red Velvet da MayCakes fez sucesso no meu aniversário! Úmido, saboroso e com aquele recheio incrível. Todos pediram o contato!"',
  },
  {
    variant: "couple" as const,
    name: "Carlos e Ana",
    city: "Toledo - PR",
    text: '"Escolhemos a MayCakes para o nosso casamento e foi perfeito! Bolo lindo, delicioso e feito com muito carinho."',
  },
  {
    variant: "female-2" as const,
    name: "Patrícia L.",
    city: "Toledo - PR",
    text: '"Os bento cakes são um mimo! Pequenos, fofos e o sabor é surpreendente. Já virei cliente fidelizada!"',
  },
];

export function Testimonials() {
  return (
    <section className="bg-[var(--color-cream)] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow">Prova Social</p>
          <h2 className="font-display text-3xl md:text-5xl mt-2 text-[var(--color-petrol)]">
            Histórias que adoçam a nossa
          </h2>
          <Ornament className="mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-lg p-5 border border-[var(--color-gold)]/15 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <AnimatedAvatar variant={t.variant} />
                <div>
                  <p className="font-semibold text-sm text-[var(--color-petrol)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-petrol)]/60">{t.city}</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-[var(--color-gold)] mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[var(--color-petrol)]/75 leading-relaxed italic">
                {t.text}
              </p>
            </div>
          ))}

          {/* Galeria */}
          <div className="grid grid-cols-3 gap-2 rounded-lg overflow-hidden">
            {[e1, e2, e3, e4, e5, e3].map((img, i) => (
              <div key={i} className="aspect-square">
                <img
                  src={img}
                  alt="Evento MayCakes"
                  loading="lazy"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Barra Google */}
        <div className="mt-10 pt-6 border-t border-[var(--color-gold)]/30 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          <p className="text-[var(--color-gold)] font-semibold tracking-wide">
            Nossos clientes recomendam!
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex gap-0.5 text-[var(--color-gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-[var(--color-petrol)]/75">
              Mais de <span className="font-bold text-[var(--color-petrol)]">2.000 bolos vendidos</span> e mais de <span className="font-bold text-[var(--color-petrol)]">200 avaliações positivas</span> no Instagram e no iFood
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
