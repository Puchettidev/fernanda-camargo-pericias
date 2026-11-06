import type { Service } from "./service-data";
import { services } from "./service-data";
import { contact, profile, serviceArea, siteName, siteUrl } from "./site-config";

export const businessId = `${siteUrl}/#professional-service`;

type JsonLd = Record<string, unknown>;

/** ProfessionalService (subtipo de LocalBusiness) usado na home. */
export function businessJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": businessId,
    name: siteName,
    description:
      "Perícia econômico-financeira e contratual, assistência técnica judicial e cálculos em Muriaé/MG e região.",
    url: siteUrl,
    image: `${siteUrl}/capa-fernandinha.png`,
    logo: `${siteUrl}/icone-fernanda.png`,
    telephone: "+55-32-99172-0299",
    email: contact.email,
    priceRange: "Sob consulta",
    // TODO: Fernanda enviar — endereço completo (rua, número, CEP) se houver atendimento presencial.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Muriaé",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    areaServed: serviceArea.map((city) => ({
      "@type": "City",
      name: `${city}, MG`,
    })),
    ...(profile.googleBusinessUrl ? { sameAs: [profile.googleBusinessUrl] } : {}),
    founder: {
      "@type": "Person",
      name: "Fernanda Camargo Rodrigues",
      jobTitle: "Administradora",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Registro profissional",
        name: "CRA-MG 01-058746/D",
        recognizedBy: {
          "@type": "Organization",
          name: "Conselho Regional de Administração de Minas Gerais",
        },
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${siteUrl}/servicos/${service.slug}`,
        },
      })),
    },
  };
}

export function faqJsonLd(faqs: [string, string][]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function serviceJsonLd(service: Service): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.seoDescription,
    url: `${siteUrl}/servicos/${service.slug}`,
    areaServed: serviceArea.map((city) => ({ "@type": "City", name: `${city}, MG` })),
    provider: {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: siteName,
      url: siteUrl,
      telephone: "+55-32-99172-0299",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

/** Serializa JSON-LD com segurança para <script>. */
export function jsonLdScript(data: JsonLd | JsonLd[]) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
