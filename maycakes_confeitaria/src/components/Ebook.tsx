import { useState } from "react";
import { Gift, BookOpen, ChefHat, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP = (name: string, contact: string) =>
  "https://wa.me/5545991251098?text=" +
  encodeURIComponent(
    `Olá MayCakes! Sou ${name} (${contact}) e quero receber a técnica grátis do brigadeiro artesanal!`,
  );

export function Ebook() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      toast.error("Preencha seu nome e contato.");
      return;
    }
    toast.success("Tudo certo! Abrindo WhatsApp para enviar sua técnica grátis.");
    window.open(WHATSAPP(name, contact), "_blank");
    setName("");
    setContact("");
  };

  return (
    <section
      id="ebook"
      className="bg-[var(--color-petrol)] text-white py-20 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Texto */}
        <div>
          <p className="eyebrow">Aprenda com A May</p>
          <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight">
            Transforme paixão{" "}
            <span className="block italic text-[var(--color-gold)]">em propósito.</span>
          </h2>
          <p className="mt-5 text-white/75 max-w-md leading-relaxed">
            Com o ebook Alquimia de Sabores, você vai aprender técnicas, receitas
            e segredos para criar bolos incríveis e até construir seu próprio
            negócio.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { icon: BookOpen, label: "Receitas exclusivas testadas e aprovadas" },
              { icon: ChefHat, label: "Técnicas profissionais" },
              { icon: TrendingUp, label: "Para fazer, vender e lucrar" },
            ].map((f) => (
              <div key={f.label} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full text-[var(--color-gold)] mb-2">
                  <f.icon className="w-7 h-7" strokeWidth={1.4} />
                </div>
                <p className="text-[0.7rem] text-white/70 leading-snug">{f.label}</p>
              </div>
            ))}
          </div>

          <a
            href="#ebook-form"
            className="mt-8 inline-flex items-center justify-center bg-[var(--color-gold)] hover:bg-[var(--color-gold-soft)] text-[var(--color-petrol)] font-semibold tracking-wider text-sm px-6 py-4 rounded-md transition-colors shadow-[var(--shadow-gold)]"
          >
            QUERO COMEÇAR NA CONFEITARIA
            <span className="ml-2 text-xs font-normal opacity-80">
              Quero aprender a alquimia dos sabores
            </span>
          </a>
        </div>

        {/* Form */}
        <div>
          <form
            id="ebook-form"
            onSubmit={submit}
            className="bg-[var(--color-petrol-deep)] border border-[var(--color-gold)]/40 rounded-lg p-6 md:p-8"
          >
            <div className="flex items-start gap-3 mb-5">
              <Gift className="w-7 h-7 text-[var(--color-gold)] shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] font-bold text-[var(--color-gold)]">
                  GANHE UMA TÉCNICA GRÁTIS!
                </p>
                <p className="text-xs text-white/70 mt-1">
                  Receba agora o segredo do ponto do brigadeiro artesanal.
                </p>
              </div>
            </div>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full bg-transparent border border-white/15 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-[var(--color-gold)] transition-colors mb-3"
            />
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Seu melhor e-mail ou WhatsApp"
              className="w-full bg-transparent border border-white/15 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-[var(--color-gold)] transition-colors mb-4"
            />
            <button
              type="submit"
              className="w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-soft)] text-[var(--color-petrol)] font-semibold text-sm tracking-wider py-3 rounded-md transition-colors"
            >
              QUERO RECEBER AGORA!
            </button>
            <p className="text-center text-[0.7rem] text-white/50 mt-3">
              100% gratuito. Sem spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
