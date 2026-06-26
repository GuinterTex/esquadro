import { Ornament } from "./Ornament";
import tradicional from "@/assets/cake-tradicional.jpg";
import recheado from "@/assets/cake-recheado.jpg";
import gourmet from "@/assets/cake-gourmet.jpg";
import bento from "@/assets/cake-bento.jpg";

const WHATSAPP = (msg: string) =>
  "https://wa.me/5545991251098?text=" + encodeURIComponent(msg);

const cakes = [
  {
    img: tradicional,
    name: "Tradicionais",
    desc: "Os sabores que aquecem lembranças e reúnem famílias.",
    price: "R$ 45,00",
    alt: "Bolo tradicional artesanal feito do zero - MayCakes Confeitaria Toledo PR",
    link: WHATSAPP("May, quero bolo tradicional."),
  },
  {
    img: recheado,
    name: "Recheados",
    desc: "Camadas generosas de recheios cremosos que conquistam.",
    price: "R$ 85,00",
    alt: "Bolo recheado artesanal Red Velvet com cream cheese - MayCakes Toledo PR",
    link: WHATSAPP("May, quero bolo recheado."),
  },
  {
    img: gourmet,
    name: "Gourmet",
    desc: "Receitas exclusivas para momentos inesquecíveis.",
    price: "R$ 65,00",
    alt: "Bolo gourmet vulcão de cenoura com chocolate belga derretendo - MayCakes Toledo",
    link: WHATSAPP("May, quero bolo gourmet."),
  },
  {
    img: bento,
    name: "Bento Cakes",
    desc: "Pequenos no tamanho, gigantes no sabor e no carinho.",
    price: "R$ 65,00",
    alt: "Bento Cake personalizado de chocolate belga com morango - MayCakes Toledo PR",
    link: WHATSAPP("May, quero bento cake."),
  },
];

export function Cakes() {
  return (
    <section id="bolos" className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow">Nossos Bolos</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2 text-[var(--color-petrol)]">
            Para todos os momentos
          </h2>
          <Ornament className="mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cakes.map((c) => (
            <article
              key={c.name}
              className="group bg-white rounded-lg overflow-hidden border border-[var(--color-gold)]/20 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-cream)]">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  width={768}
                  height={576}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-[var(--color-petrol)] mb-2">
                  {c.name}
                </h3>
                <p className="text-sm text-[var(--color-petrol)]/70 leading-relaxed min-h-[3rem]">
                  {c.desc}
                </p>
                <p className="mt-4 text-sm text-[var(--color-petrol)]/80">
                  A partir de{" "}
                  <span className="text-[var(--color-gold)] font-semibold">{c.price}</span>
                </p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center bg-[var(--color-petrol)] hover:bg-[var(--color-cream)] text-white hover:text-[var(--color-petrol)] border border-transparent hover:border-[var(--color-petrol)] text-xs tracking-[0.18em] font-semibold px-5 py-2.5 rounded-md transition-all duration-300"
                >
                  QUERO ESTE BOLO
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
