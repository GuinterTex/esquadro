import { useState } from "react";

const SRC = "/assets/autor.jpg";

export function ImagemAutor() {
  const [pronta, setPronta] = useState(false);

  return (
    <figure className="imagem-autor">
      <div className="imagem-autor-miolo">
        <img
          src={SRC}
          alt="Retrato de Flávio Paz"
          width={400}
          height={500}
          loading="lazy"
          decoding="async"
          className={pronta ? "imagem-autor-foto" : "imagem-autor-foto imagem-autor-foto-oculta"}
          onLoad={() => setPronta(true)}
          onError={(event) => {
            event.currentTarget.classList.add("imagem-autor-foto-oculta");
          }}
        />
      </div>
      {pronta ? null : (
        <img src="/assets/simbolo.svg" alt="" className="imagem-autor-marca" />
      )}
    </figure>
  );
}
