const ALT_HEROI =
  "Cinco placas isométricas empilhadas em linha branca, símbolo do Esquadro.";

// Asset esperado em public/assets/simbolo.svg.
// O mesmo vetor serve o herói, o topo e o favicon. A foto da maquete não entra aqui.
const SRC = "/assets/simbolo.svg";

export function Symbol({ variant = "hero" }) {
  const hero = variant === "hero";
  const height = hero ? 220 : 44;
  const width = Math.round(height * (184 / 294));

  if (!__SIMBOLO_PRONTO__) {
    return (
      <span
        className={hero ? "inline-flex shrink-0" : "hidden"}
        style={hero ? { width, height } : undefined}
        data-asset-slot={hero ? "simbolo-heroi" : "simbolo-topo"}
        role={hero ? "img" : undefined}
        aria-label={hero ? ALT_HEROI : undefined}
      />
    );
  }

  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      style={{ width, height }}
      data-asset-slot={hero ? "simbolo-heroi" : "simbolo-topo"}
    >
      <img
        src={SRC}
        alt={hero ? ALT_HEROI : ""}
        width={width}
        height={height}
        decoding="async"
        fetchPriority={hero ? "high" : "low"}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
