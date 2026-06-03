const siteUrl = "https://www.oleonardomachado.com.br";

const services = [
  "Desenvolvimento Web",
  "Landing Pages",
  "Sites Profissionais",
  "Google Ads",
  "SEO",
  "Sistemas Web",
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leonardo Machado",
    alternateName: "Léo",
    brand: {
      "@type": "Brand",
      name: "Leonardo Machado | Design que Vende",
    },
    url: siteUrl,
    telephone: "+55 61 99456-3586",
    knowsAbout: services,
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    inLanguage: "pt-BR",
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Leonardo Machado | Design que Vende",
    url: siteUrl,
    telephone: "+55 61 99456-3586",
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    availableLanguage: "pt-BR",
    serviceType: services,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Leonardo Machado | Design que Vende",
    url: siteUrl,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Person",
      name: "Leonardo Machado",
      alternateName: "Léo",
    },
  },
];

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
