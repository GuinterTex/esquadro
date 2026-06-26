import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const WA = (msg: string) => "https://wa.me/5545991251098?text=" + encodeURIComponent(msg);

function IconConfeitaria({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 28c0-6 4.5-11 12-11s12 5 12 11v6H12v-6Z"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinejoin="round"
      />
      <path
        d="M18 17c1.2-3 4.2-6 8.5-6 3.8 0 6.5 2.2 8 5"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinecap="round"
      />
      <path d="M15 36h22" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" opacity={0.85} />
      <path
        d="M28 14v-3m4 3v-3m-12 8l-2.5 4m17.5-4l2.5 4"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCasa({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M14 22c6-5 14-5 20 0v14H14V22Z"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinejoin="round"
      />
      <path d="M18 26h12M18 30h8" stroke="currentColor" strokeWidth={1.15} strokeLinecap="round" opacity={0.9} />
      <path
        d="M22 36h10c2 0 3.5 1.6 3.5 3.5V38H14v-.5c0-1.9 1.6-3.5 3.5-3.5h4.5Z"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <path d="M24 14v5" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" />
    </svg>
  );
}

function IconCafe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 30c0-6 4.5-10 10.5-10h8C37 20 41 24 41 30v2H12v-2Z"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinejoin="round"
      />
      <path d="M41 26h2.5c2 0 3.5 1.6 3.5 3.5S45.5 33 43.5 33H41" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" />
      <path
        d="M18 14c0 2 1.6 3 3 3m4-5c0 2 1.6 3 3 3m4-4c0 2 1.6 3 3 3"
        stroke="currentColor"
        strokeWidth={1.15}
        strokeLinecap="round"
      />
      <path d="M14 38h22" stroke="currentColor" strokeWidth={1.15} strokeLinecap="round" opacity={0.85} />
    </svg>
  );
}

const cards = [
  {
    brand: "MayCakes Confeitaria",
    text: "Bolos e cestas sob encomenda para momentos inesquecíveis.",
    cta: "Encomendar",
    href: WA("Olá, May! Quero encomendar bolos ou cestas na MayCakes Confeitaria."),
    Icon: IconConfeitaria,
  },
  {
    brand: "MayCakes Casa",
    text: "Quiches e massas gourmet congeladas. Sabor de verdade na sua casa.",
    cta: "Conhecer Linha",
    href: WA("Olá, May! Quero conhecer a linha MayCakes Casa — quiches e massas gourmet congeladas."),
    Icon: IconCasa,
  },
  {
    brand: "MayCakes Café",
    text: "Cafés especiais moídos na hora. A pausa perfeita para o seu dia.",
    cta: "Ver Cardápio",
    href: WA("Olá, May! Quero ver o cardápio do MayCakes Café."),
    Icon: IconCafe,
  },
];

export type NovidadeBannerProps = {
  onHidden?: () => void;
};

export function NovidadeBanner({ onHidden }: NovidadeBannerProps) {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onHiddenRef = useRef(onHidden);
  onHiddenRef.current = onHidden;

  const dismiss = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setVisible(false);
    onHiddenRef.current?.();
  }, []);

  const cancelAutoDismiss = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(dismiss, 10_000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [dismiss]);

  if (!visible) return null;

  return (
    <section
      className="relative z-40 pt-16 md:pt-[4.75rem] border-b border-white/10 bg-[var(--color-petrol)]"
      aria-label="Novidades por categoria"
      onPointerDownCapture={(e) => {
        const el = e.target as HTMLElement;
        if (el.closest("[data-novidade-close]")) return;
        cancelAutoDismiss();
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5 relative">
        <button
          type="button"
          data-novidade-close
          onClick={dismiss}
          className="absolute top-2 right-2 md:top-3 md:right-3 z-10 p-2 rounded-md text-[var(--color-gold)] hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
          aria-label="Fechar aviso de novidades"
        >
          <X className="w-5 h-5" strokeWidth={1.75} />
        </button>

        <h2 className="font-display text-xl md:text-2xl text-[var(--color-cream)] text-center pr-10 mb-4 md:mb-5">
          Novidade por aqui! ✨
        </h2>

        <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-1 md:pb-0 snap-x snap-mandatory md:snap-none [-webkit-overflow-scrolling:touch]">
          {cards.map((c) => (
            <article
              key={c.brand}
              className="snap-center shrink-0 w-[min(100%,18.5rem)] sm:w-[min(100%,20rem)] md:w-auto rounded-lg border border-white/15 bg-white/[0.06] px-4 py-4 flex flex-col gap-3 min-h-[11rem] md:min-h-0"
            >
              <div className="flex items-start gap-3">
                <c.Icon className="w-11 h-11 text-[var(--color-gold)] shrink-0 opacity-95" />
                <div className="min-w-0">
                  <h3 className="font-display text-lg text-[var(--color-cream)] leading-tight">{c.brand}</h3>
                  <p className="mt-2 font-sans text-sm text-white/85 leading-relaxed">{c.text}</p>
                </div>
              </div>
              <div className="mt-auto pt-1">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex font-sans text-xs tracking-[0.14em] uppercase font-semibold px-4 py-2 rounded-md border border-white/45 text-[var(--color-cream)] hover:bg-white/10 transition-colors"
                >
                  {c.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
