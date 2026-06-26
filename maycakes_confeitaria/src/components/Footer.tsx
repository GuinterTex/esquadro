import { MapPin, Phone, Clock, Calendar, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-[var(--color-petrol-deep)] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Mapa */}
        <div>
          <h3 className="text-xs tracking-[0.2em] font-bold text-[var(--color-gold)] mb-4">
            ONDE ESTAMOS
          </h3>
          <div className="rounded-md overflow-hidden border border-white/10">
            <iframe
              title="Localização MayCakes Toledo PR"
              src="https://www.google.com/maps?q=Toledo,PR&output=embed"
              width="100%"
              height="160"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: "block" }}
            />
          </div>
          <p className="mt-3 text-sm text-white/75 flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-gold)]" />
            <span>
              <span className="block font-semibold text-white">MayCakes Confeitaria</span>
              <span className="block text-xs">Toledo - PR · CEP 85900-000</span>
              <span className="block text-xs">Atendimento sob encomenda</span>
              <span className="block text-xs">Atendemos toda Toledo e região</span>
            </span>
          </p>
        </div>

        {/* Atendimento */}
        <div id="encomendas">
          <h3 className="text-xs tracking-[0.2em] font-bold text-[var(--color-gold)] mb-4">
            ATENDIMENTO
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-[var(--color-gold)]" />
              <div>
                <p>Atendimento via WhatsApp</p>
                <p className="text-white font-medium">(45) 99125-1098</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-[var(--color-gold)]" />
              <div>
                <p>Segunda a Sexta</p>
                <p className="text-white font-medium">08h às 18h</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-[var(--color-gold)]" />
              <div>
                <p>Sábado</p>
                <p className="text-white font-medium">08h às 18h</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Calendar className="w-4 h-4 mt-0.5 text-[var(--color-gold)]" />
              <p>Aceitamos encomendas com até 48h de antecedência</p>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs tracking-[0.2em] font-bold text-[var(--color-gold)] mb-4">
            LINKS RÁPIDOS
          </h3>
          <ul className="space-y-2 text-sm text-white/75">
            {[
              "Bolos Tradicionais",
              "Bolos Recheados",
              "Bolos Gourmet",
              "Bento Cakes",
              "Encomendas",
              "Cursos",
              "Sobre Nós",
              "Contato",
            ].map((l) => (
              <li key={l}>
                <a href="#bolos" className="hover:text-[var(--color-gold)] transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xs tracking-[0.2em] font-bold text-[var(--color-gold)] mb-4">
            SIGA MAYCAKES
          </h3>
          <p className="text-sm text-white/75 mb-5">
            Acompanhe nossas delícias e novidades todos os dias!
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/maycakes_oficial/" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585483083834" },
              { Icon: MessageCircle, href: "https://wa.me/5545991251098" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[var(--color-gold)]/40 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] transition-colors"
                aria-label="Rede social MayCakes"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
        <p>© 2026 MayCakes Confeitaria. Todos os direitos reservados.</p>
        <p>Confeitaria Premium em Toledo - PR <span className="text-[var(--color-gold)]">♥</span></p>
        <p>Desenvolvido com carinho para você <span className="text-[var(--color-gold)]">♥</span></p>
      </div>
    </footer>
  );
}
