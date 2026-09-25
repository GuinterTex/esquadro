const ALT_HEROI =
  "Cinco placas de acrílico fosco empilhadas, símbolo do Esquadro.";

// Foto da maquete, 1024×1363, fundo transparente. Só no herói: no topo de 44px ela perde o detalhe.
const MAQUETE_HEROI = "/assets/maquete-heroi.png";

// Asset esperado em public/assets/simbolo.svg. Serve o topo e o favicon.
const SRC = "/assets/simbolo.svg";

export function Symbol({ variant = "hero" }) {
  const hero = variant === "hero";

  if (hero) {
    return (
      <span className="hidden w-full md:block" data-asset-slot="simbolo-heroi">
        <picture>
          <source media="(min-width: 768px)" srcSet={MAQUETE_HEROI} />
          <img
            alt={ALT_HEROI}
            width={1024}
            height={1363}
            decoding="async"
            fetchPriority="high"
            className="h-auto w-full object-contain"
          />
        </picture>
      </span>
    );
  }

  const height = 44;
  const width = Math.round(height * (184 / 294));

  if (!__SIMBOLO_PRONTO__) {
    return (
      <span
        className="hidden"
        data-asset-slot="simbolo-topo"
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
