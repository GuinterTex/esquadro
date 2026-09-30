// Preço fica fora da página e fora do JSON-LD, para o schema não divergir do que se vê.
// COLOCAR_PRECO não é emitido. A URL da landing continua placeholder até você trocar.

export const LINK_HOTMART = "https://go.hotmart.com/B107584219H?dp=1";
export const LINKEDIN = "https://www.linkedin.com/in/flavionpaz/";
export const URL_DA_LANDING = "COLOCAR_URL_DA_LANDING";

export const UTM = "utm_source=esquadro&utm_medium=landing&utm_campaign=trilha";

export const seo = {
  title: "Esquadro. Do dado à resposta.",
  description:
    "Trilha escrita para avaliação de sistemas de IA, para você ler e avaliar o sistema inteiro e julgar o que o slide esconde.",
  ogAlt: "Maquete das cinco placas do Esquadro sobre fundo navy.",
};

export function hrefCompra() {
  const juncao = LINK_HOTMART.includes("?") ? "&" : "?";
  return `${LINK_HOTMART}${juncao}${UTM}`;
}

export function ogImage() {
  const caminho = "/assets/og.jpg";
  if (URL_DA_LANDING.startsWith("http://") || URL_DA_LANDING.startsWith("https://")) {
    const base = URL_DA_LANDING.endsWith("/") ? URL_DA_LANDING : `${URL_DA_LANDING}/`;
    return new URL(caminho, base).href;
  }
  return `${URL_DA_LANDING}${caminho}`;
}

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: seo.title,
    description: seo.description,
    inLanguage: "pt-BR",
    url: URL_DA_LANDING,
    image: ogImage(),
    provider: {
      "@type": "Person",
      name: "Flávio Paz",
    },
    offers: {
      "@type": "Offer",
      url: hrefCompra(),
    },
    isAccessibleForFree: false,
  };
}
