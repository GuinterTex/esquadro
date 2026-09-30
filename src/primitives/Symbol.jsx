const ALT_HEROI =
  "Cinco placas de acrílico fosco empilhadas, símbolo do Esquadro.";

// Foto da maquete, 1024×1363, fundo transparente. Só no herói: no topo de 44px ela perde o detalhe.
const MAQUETE_HEROI = "/assets/maquete-heroi.png";

const MARCA = "/assets/simbolo.svg";

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

  return (
    <span
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center"
      data-asset-slot="simbolo-topo"
    >
      <img
        src={MARCA}
        alt=""
        width={32}
        height={32}
        decoding="async"
        className="h-8 w-8 object-contain"
      />
    </span>
  );
}
