import { useEffect, useState } from "react";
import { Symbol } from "../primitives/Symbol.jsx";
import { nav } from "../copy.js";

const idsNav = nav.map((item) => item.href.slice(1));

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [ativa, setAtiva] = useState("");

  useEffect(() => {
    const pares = idsNav
      .map((id) => {
        const alvo = document.getElementById(id);
        const secao = alvo?.closest("section") ?? alvo;
        return secao ? { id, secao } : null;
      })
      .filter(Boolean);
    const nota = new Map(pares.map((par) => [par.secao, 0]));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const cobre = entry.intersectionRect.height / window.innerHeight;
          const valor = entry.isIntersecting ? Math.max(entry.intersectionRatio, cobre) : 0;
          nota.set(entry.target, valor);
        }
        let melhor = "";
        let maior = 0.35;
        for (const [secao, valor] of nota) {
          if (valor < maior) continue;
          maior = valor;
          melhor = pares.find((par) => par.secao === secao)?.id ?? "";
        }
        setAtiva(melhor ? `#${melhor}` : "");
      },
      { threshold: [0, 0.35, 1], rootMargin: "-88px 0px 0px 0px" },
    );
    for (const par of pares) observer.observe(par.secao);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!aberto) return undefined;
    function fechar(event) {
      if (event.key === "Escape") setAberto(false);
    }
    document.addEventListener("keydown", fechar);
    return () => document.removeEventListener("keydown", fechar);
  }, [aberto]);

  return (
    <header className="sticky top-0 z-30 border-b border-filete bg-fundo">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-3 px-5 py-4 md:flex-nowrap md:px-8">
        <div className="flex items-center gap-3">
          <Symbol variant="topo" />
          <span className="text-base font-medium text-giz">Esquadro</span>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-sm text-giz md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-secao"
          onClick={() => setAberto((valor) => !valor)}
        >
          {aberto ? "Fechar" : "Menu"}
        </button>
        <nav
          id="menu-secao"
          aria-label="Seções"
          className={aberto ? "block w-full md:w-auto" : "hidden w-full md:block md:w-auto"}
        >
          <ul className="flex flex-col md:flex-row md:flex-wrap md:gap-x-5 md:gap-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`flex min-h-11 w-full items-center text-sm text-giz md:inline-flex md:w-auto md:min-w-11 ${ativa === item.href ? "is-active" : ""}`}
                  onClick={() => setAberto(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
