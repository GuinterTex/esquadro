import { useState } from "react";
import { Logo } from "./Logo";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5545991251098?text=" +
  encodeURIComponent("Olá, quero fazer uma encomenda na MayCakes!");

const links = [
  { label: "Início", href: "#hero" },
  { label: "Bolos", href: "#bolos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Encomendas", href: "#encomendas" },
  { label: "FAQ", href: "#faq" },
  { label: "Cursos", href: "#ebook" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-[var(--color-petrol)]">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <a href="#hero" aria-label="MayCakes — Início">
          <Logo light />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs tracking-[0.18em] uppercase text-white/85 hover:text-[var(--color-gold)] transition-colors font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-soft)] text-[var(--color-petrol)] px-5 py-2.5 rounded-md text-sm font-semibold tracking-wide transition-colors shadow-[var(--shadow-gold)]"
          >
            <MessageCircle className="w-4 h-4" />
            Quero meu bolo fresquinho
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[var(--color-petrol-deep)] border-t border-white/10">
          <ul className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm tracking-[0.15em] uppercase text-white/85 hover:text-[var(--color-gold)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-gold)] text-[var(--color-petrol)] px-5 py-3 rounded-md text-sm font-semibold w-full justify-center mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                Quero meu bolo fresquinho
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
