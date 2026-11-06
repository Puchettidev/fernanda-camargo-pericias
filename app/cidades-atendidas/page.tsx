import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { InlineCta } from "../components/inline-cta";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { breadcrumbJsonLd, jsonLdScript } from "../seo";
import { services } from "../service-data";
import { createWhatsappUrl, serviceArea, siteUrl } from "../site-config";

const title = "Cidades Atendidas: Muriaé/MG e Zona da Mata";
const description = `Perícia econômico-financeira, contratual e assistência técnica judicial em ${serviceArea
  .slice(0, 5)
  .join(", ")} e região da Zona da Mata mineira.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cidades-atendidas" },
  openGraph: {
    title: `${title} | Fernanda Camargo Perícias`,
    description,
    url: `${siteUrl}/cidades-atendidas`,
    siteName: "Fernanda Camargo Perícias",
    type: "website",
    locale: "pt_BR",
  },
};

export default function CitiesPage() {
  const structuredData = breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Cidades atendidas", path: "/cidades-atendidas" },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <SiteHeader />

      <section className="simple-hero">
        <div className="section simple-hero-inner">
          <p className="eyebrow">Área de atendimento</p>
          <h1>Cidades atendidas</h1>
          <p className="service-page-lead">
            Atendimento a partir de Muriaé/MG para advogados, empresas e pessoas
            físicas da Zona da Mata mineira.
          </p>
          <a
            className="button primary large"
            href={createWhatsappUrl(undefined, "Olá, Fernanda. Gostaria de saber se você atende a minha cidade.")}
            target="_blank"
            rel="noreferrer"
            data-cta="cidades-topo"
          >
            <MessageCircle size={19} strokeWidth={2} aria-hidden="true" />
            Perguntar sobre a minha cidade
          </a>
        </div>
      </section>

      <section className="section">
        {/* TODO: Fernanda confirmar a lista de cidades em app/site-config.ts (serviceArea) */}
        <ul className="city-grid">
          {serviceArea.map((city) => (
            <li key={city}>
              <MapPin size={22} strokeWidth={1.8} aria-hidden="true" />
              <span>
                <strong>{city}</strong>
                <small>Minas Gerais</small>
              </span>
            </li>
          ))}
        </ul>
        <p className="city-note">
          Atende também outras cidades da região. Não encontrou a sua? Envie uma
          mensagem para confirmar.
        </p>
      </section>

      <section className="section city-services">
        <div className="section-heading compact">
          <p className="eyebrow">Serviços disponíveis na região</p>
          <h2>O que pode ser feito no seu caso</h2>
        </div>
        <div className="related-links">
          {services.map((service) => (
            <Link href={`/servicos/${service.slug}`} key={service.slug}>
              {service.title}
              <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <InlineCta
        id="cta-cidades"
        tone="dark"
        title="Tem um processo ou contrato para analisar?"
        text="Conte brevemente o caso e a cidade. A Fernanda retorna com os próximos passos."
        buttonLabel="Falar pelo WhatsApp"
      />

      <SiteFooter />
    </main>
  );
}
