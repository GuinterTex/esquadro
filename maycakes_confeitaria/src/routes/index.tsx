import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { NovidadeBanner } from "@/components/NovidadeBanner";
import { Hero } from "@/components/Hero";
import { WhyMayCakes } from "@/components/WhyMayCakes";
import { Cakes } from "@/components/Cakes";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Ebook } from "@/components/Ebook";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const SITE_URL = "https://maycakes.com.br";
const OG_IMAGE = "/og-image.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Bolos Artesanais Toledo PR | MayCakes Confeitaria Premium",
      },
      {
        name: "description",
        content:
          "Bolos artesanais frescos em Toledo PR ✓ Red Velvet, Bento Cakes e Gourmet feitos do zero ✓ Encomenda WhatsApp ✓ Apenas 6 por dia. Peça já!",
      },
      { name: "author", content: "MayCakes Confeitaria" },
      { name: "robots", content: "index, follow" },
      { name: "geo.region", content: "BR-PR" },
      { name: "geo.placename", content: "Toledo" },
      {
        property: "og:title",
        content: "Bolos Artesanais Toledo PR | MayCakes Confeitaria Premium",
      },
      {
        property: "og:description",
        content:
          "Bolos frescos feitos do zero em Toledo PR. Red Velvet, Bento Cakes, Gourmet. Apenas 6 encomendas por dia para garantir qualidade premium.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "MayCakes Confeitaria" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bolos Artesanais Toledo PR | MayCakes" },
      { name: "twitter:description", content: "Bolos frescos artesanais em Toledo PR. Encomenda via WhatsApp. Apenas 6 por dia." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "MayCakes Confeitaria Premium",
          description:
            "Confeitaria artesanal premium em Toledo-PR especializada em bolos frescos feitos do zero com chocolate belga, geleias próprias e ingredientes nobres. Aceitamos apenas 6 encomendas por dia.",
          url: SITE_URL,
          telephone: "+55-45-99125-1098",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Atendimento sob encomenda",
            addressLocality: "Toledo",
            addressRegion: "PR",
            postalCode: "85900-000",
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -24.7139,
            longitude: -53.7431,
          },
          priceRange: "R$ 35 - R$ 150",
          servesCuisine: ["Confeitaria", "Bolos Artesanais", "Bento Cakes"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          sameAs: [
            "https://www.instagram.com/maycakes_oficial/",
            "https://www.facebook.com/profile.php?id=61585483083834",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Quanto custa um bolo de aniversário na MayCakes?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nossos bolos recheados começam em R$ 85,00 o quilo. O preço final depende do tamanho, sabor e personalização. Entre em contato pelo WhatsApp para orçamento personalizado em até 10 minutos.",
              },
            },
            {
              "@type": "Question",
              name: "Vocês fazem entrega em Toledo?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim! Atendemos toda Toledo e região com entrega caprichada. Confirmamos o valor do frete no momento do pedido via WhatsApp.",
              },
            },
            {
              "@type": "Question",
              name: "Com quanto tempo de antecedência preciso encomendar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Recomendamos 48 horas de antecedência para garantir a data desejada, pois aceitamos apenas 6 encomendas por dia para manter nosso padrão de qualidade premium.",
              },
            },
            {
              "@type": "Question",
              name: "Os bolos da MayCakes são frescos ou congelados?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Todos os nossos bolos são feitos do zero no dia da entrega. Não trabalhamos com produtos congelados. É por isso que aceitamos poucas encomendas por dia.",
              },
            },
            {
              "@type": "Question",
              name: "Quais sabores de bolo vocês oferecem?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Trabalhamos com bolos tradicionais (milho, cenoura, fubá, torta paraguaia), recheados (chocolate, red velvet, dois amores, quatro leites) e gourmet exclusivos (vulcão de cenoura, chocolate belga com maracujá, abacaxi com cocada). Consulte nosso cardápio completo ou peça sabores personalizados.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Bolos Artesanais em Toledo PR", item: `${SITE_URL}#bolos` },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [novidadeBannerVisible, setNovidadeBannerVisible] = useState(true);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <NovidadeBanner onHidden={() => setNovidadeBannerVisible(false)} />
      <Hero compactTop={novidadeBannerVisible} />
      <WhyMayCakes />
      <Cakes />
      <Testimonials />
      <Faq />
      <Ebook />
      <Footer />
      <Toaster richColors position="top-center" />
    </main>
  );
}
