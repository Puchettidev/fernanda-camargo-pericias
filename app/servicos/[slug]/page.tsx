import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { ServiceIcon } from "../../components/service-icon";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { getService, services } from "../../service-data";
import { createWhatsappUrl, siteUrl } from "../../site-config";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  const canonical = `/servicos/${service.slug}`;

  return {
    title: `${service.title} em Muriaé MG`,
    description: service.summary,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} | Fernanda Camargo Perícias`,
      description: service.summary,
      url: `${siteUrl}${canonical}`,
      siteName: "Fernanda Camargo Perícias",
      type: "website",
      locale: "pt_BR",
      images: [
        {
          url: "/capa-fernandinha.png",
          width: 2048,
          height: 745,
          alt: "Fernanda Camargo Perícias",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Fernanda Camargo Perícias`,
      description: service.summary,
      images: ["/capa-fernandinha.png"],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = createWhatsappUrl(service.title);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: `${siteUrl}/servicos/${service.slug}`,
    areaServed: "Muriaé, Minas Gerais e região",
    provider: {
      "@type": "ProfessionalService",
      name: "Fernanda Camargo Perícias",
      url: siteUrl,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <section className="service-page-hero">
        <div className="section service-page-hero-inner">
          <div className="service-page-copy">
            <Link className="breadcrumb" href="/#servicos">
              <ArrowLeft size={17} strokeWidth={2} aria-hidden="true" />
              Todos os serviços
            </Link>
            <p className="eyebrow">Fernanda Camargo Perícias</p>
            <h1>{service.title}</h1>
            <p className="service-page-lead">{service.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} strokeWidth={2} aria-hidden="true" />
                Falar sobre este serviço
              </a>
              <Link className="button secondary" href="/#como-funciona">
                Como funciona o atendimento
              </Link>
            </div>
          </div>
          <div className="service-page-mark" aria-hidden="true">
            <ServiceIcon name={service.icon} size={72} />
          </div>
        </div>
      </section>

      <section className="section service-detail-layout">
        <div className="service-detail-main">
          <div className="detail-section">
            <p className="eyebrow">Quando solicitar</p>
            <h2>Em quais situações este serviço pode ajudar</h2>
            <p>{service.situation}</p>
          </div>

          <div className="detail-section">
            <p className="eyebrow">O que será considerado</p>
            <h2>Análise organizada conforme a demanda</h2>
            <ul className="service-detail-list">
              {service.details.map((detail) => (
                <li key={detail}>
                  <CheckCircle2 size={21} strokeWidth={1.8} aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-note">
            <strong>Cada atendimento começa pela análise da necessidade apresentada.</strong>
            <p>
              A documentação e o escopo do trabalho são definidos de acordo com as
              particularidades da demanda, sem conclusões antecipadas.
            </p>
          </div>
        </div>

        <aside className="service-contact-panel">
          <p className="eyebrow">Contato direto</p>
          <h2>Apresente sua demanda à Fernanda</h2>
          <p>
            Envie uma mensagem para explicar brevemente o caso e verificar os
            documentos necessários para a análise inicial.
          </p>
          <a className="button primary large" href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar pelo WhatsApp
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </a>
          <span>Atendimento em Muriaé - MG e região</span>
          <span>CRA-MG 01-058746/D</span>
        </aside>
      </section>

      <section className="related-services">
        <div className="section related-services-inner">
          <div>
            <p className="eyebrow">Outras necessidades</p>
            <h2>Conheça os demais serviços</h2>
          </div>
          <div className="related-links">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => (
                <Link href={`/servicos/${item.slug}`} key={item.slug}>
                  {item.title}
                  <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
                </Link>
              ))}
          </div>
          <Link className="text-link" href="/#servicos">
            Ver todos os serviços
            <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
