import { LINKEDIN } from "../site.js";

export function Footer() {
  return (
    <footer className="border-t border-filete">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 text-left md:px-8">
        <p className="font-medium text-giz">Esquadro</p>
        <p className="mt-1 text-mudo">Flávio Paz</p>
        <p className="mt-4 text-sm text-mudo">Trilha escrita para avaliação de sistemas de IA.</p>
        <p className="mt-4 text-sm text-mudo">© 2026 Flávio Paz. Conteúdo autoral.</p>
        <p className="mt-4">
          <a
            href={LINKEDIN}
            rel="me noopener"
            target="_blank"
            className="text-giz underline underline-offset-4"
          >
            LinkedIn de Flávio Paz
          </a>
        </p>
      </div>
    </footer>
  );
}
