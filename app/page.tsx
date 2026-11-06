import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CircleCheck,
  CircleHelp,
  Clock,
  FileSearch,
  FileUp,
  Gavel,
  Landmark,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";
import { ContactForm } from "./components/contact-form";
import { InlineCta } from "./components/inline-cta";
import { ServiceIcon } from "./components/service-icon";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { Testimonials } from "./components/testimonials";
import { services } from "./service-data";
import {
  contact,
  createWhatsappUrl,
  lawyerWhatsappMessage,
  profile,
  siteUrl,
} from "./site-config";

const whatsappUrl = createWhatsappUrl();

const bankingExperience = [
  "Operações de crédito",
  "Contratos bancários",
  "Juros, tarifas e encargos",
  "Documentação financeira",
  "Procedimentos e controles internos",
  "Identificação de inconsistências",
];

const trustMarkers = [
  {
    title: "Sigilo profissional",
    text: "Documentos e informações tratados com responsabilidade.",
    icon: ShieldCheck,
  },
  {
    title: "Método e fundamentação",
    text: "Conclusões organizadas e justificadas, sem antecipar resultados.",
    icon: FileSearch,
  },
  {
    title: "Vivência bancária",
    text: "Prática real com crédito, contratos, tarifas e encargos.",
    icon: Banknote,
  },
  {
    title: "Atuação regional",
    text: "Muriaé/MG e região da Zona da Mata.",
    icon: MapPin,
  },
];

const steps = [
  {
    title: "Contato",
    text: "Você descreve a situação e informa os documentos disponíveis.",
  },
  {
    title: "Avaliação inicial",
    text: "Definição do escopo, dos documentos necessários e do prazo.",
  },
  {
    title: "Análise",
    text: "Exame dos contratos, cálculos e informações financeiras.",
  },
  {
    title: "Entrega",
    text: "Apresentação do trabalho conforme o serviço contratado.",
  },
];

const timeline = [
  {
    year: "15 anos",
    title: "Atuação no setor bancário",
    text: "Contratos, operações de crédito, tarifas, encargos e documentação financeira.",
  },
  {
    year: "2014",
    title: "Graduação em Administração",
    text: "UNIFAMINAS.",
  },
  {
    year: "2018",
    title: "MBA em Gestão Estratégica de Negócios",
    text: "Universidade FUMEC.",
  },
  {
    year: "2027",
    title: "Pós-graduação em Perícia Judicial e Extrajudicial",
    text: "Estácio de Sá. Em andamento, com conclusão prevista para 2027.",
  },
  {
    year: "Idioma",
    title: "Inglês fluente",
    text: "",
  },
];

const faqs: [string, string][] = [
  [
    "Quais contratos podem ser analisados?",
    "Empréstimos pessoais e empresariais, financiamentos habitacionais e de veículos, entre outras operações financeiras.",
  ],
  [
    "O serviço pode ser judicial e extrajudicial?",
    "Sim. O trabalho pode apoiar um processo em andamento ou uma análise feita antes ou fora dele.",
  ],
  [
    "Quais documentos são necessários?",
    "Depende do caso. Em geral: contrato, demonstrativos, extratos, planilhas e comprovantes.",
  ],
  [
    "Como começa o atendimento?",
    "Por uma conversa para entender a demanda, verificar os documentos disponíveis e definir os próximos passos.",
  ],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#professional-service`,
  name: "Fernanda Camargo Perícias",
  description:
    "Perícia econômico-financeira e contratual em Muriaé/MG, com análise de contratos bancários, juros, encargos, cálculos e assistência técnica judicial.",
  image: `${siteUrl}/capa-fernandinha.png`,
  logo: `${siteUrl}/icone-fernanda.png`,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Muriaé, Minas Gerais, Brasil",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muriaé",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  telephone: "+55 32 99172-0299",
  email: "fernandacamargopericias@gmail.com",
  url: siteUrl,
  founder: {
    "@type": "Person",
    name: "Fernanda Camargo Rodrigues",
    jobTitle: "Administradora",
  },
  serviceType: services.map((service) => service.title),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteHeader />

      <section className="hero section" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Perícia econômico-financeira · Muriaé/MG e região</p>
          <h1>Dúvidas sobre juros, contrato bancário ou cálculo em um processo?</h1>
          <p className="hero-subtitle">
            Assistência técnica e perícia para advogados, empresas e pessoas
            físicas. Leitura de contratos, juros, encargos e valores, com
            conclusões claras e fundamentadas.
          </p>
          <div className="hero-actions">
            <a
              className="button primary large hero-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-cta="hero"
            >
              <MessageCircle size={20} strokeWidth={2} aria-hidden="true" />
              Enviar minha dúvida pelo WhatsApp
            </a>
            <a className="button secondary large" href="#servicos">
              Ver serviços
            </a>
          </div>
          <ul className="hero-badges" aria-label="Credenciais">
            <li>
              <Landmark size={18} strokeWidth={1.9} aria-hidden="true" />
              15 anos no setor bancário
            </li>
            <li>
              <BadgeCheck size={18} strokeWidth={1.9} aria-hidden="true" />
              Administradora · CRA-MG 01-058746/D
            </li>
            <li>
              <ShieldCheck size={18} strokeWidth={1.9} aria-hidden="true" />
              Sigilo profissional
            </li>
          </ul>
        </div>
        <div className="hero-visual">
          <Image
            className="hero-logo"
            src="/icone-fernanda.png"
            alt="Logotipo Fernanda Camargo Perícias"
            width={460}
            height={460}
            sizes="(max-width: 680px) 190px, 230px"
            priority
          />
          <div className="hero-proof">
            <div>
              <strong>Judicial</strong>
              <span>e extrajudicial</span>
            </div>
            <div>
              <strong>Muriaé</strong>
              <span>e região · Zona da Mata</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="section-heading">
          <p className="eyebrow">Serviços</p>
          <h2>Como a Fernanda pode ajudar</h2>
          <p>Escolha o serviço mais próximo da sua situação ou fale direto pelo WhatsApp.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.slug}>
              <div className="service-icon">
                <ServiceIcon name={service.icon} size={28} />
              </div>
              <h3>
                <Link href={`/servicos/${service.slug}`}>{service.title}</Link>
              </h3>
              <p>{service.summary}</p>
              <div className="service-actions">
                <Link
                  className="text-link"
                  href={`/servicos/${service.slug}`}
                  aria-label={`Saiba mais sobre ${service.title}`}
                >
                  Saiba mais
                  <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
                </Link>
                <a
                  className="text-link whatsapp-link"
                  href={createWhatsappUrl(service.title)}
                  target="_blank"
                  rel="noreferrer"
                  data-cta={`card-${service.slug}`}
                  aria-label={`Falar pelo WhatsApp sobre ${service.title}`}
                >
                  <MessageCircle size={17} strokeWidth={2} aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <InlineCta
        id="cta-servicos"
        title="Não sabe qual serviço se aplica ao seu caso?"
        text="Descreva a situação em poucas linhas. A Fernanda indica o caminho e os documentos."
        buttonLabel="Descrever meu caso"
      />

      <section className="section lawyers" id="advogados">
        <div className="section-heading">
          <p className="eyebrow">Para advogados e escritórios</p>
          <h2>Assistência técnica para o seu processo</h2>
          <p>Suporte em questões financeiras e contratuais, do exame dos documentos às conclusões.</p>
        </div>
        <div className="lawyers-grid">
          <article>
            <Gavel size={28} strokeWidth={1.8} aria-hidden="true" />
            <h3>Como ajuda no processo</h3>
            <ul>
              <li>Leitura de contratos, cálculos e demonstrativos.</li>
              {/* TODO: Fernanda confirmar se atua na formulação de quesitos e na análise do laudo do perito do juízo */}
              <li>Apoio na formulação de quesitos e na análise do laudo pericial.</li>
              <li>Conclusões organizadas para subsidiar a argumentação.</li>
            </ul>
          </article>
          <article>
            <Clock size={28} strokeWidth={1.8} aria-hidden="true" />
            <h3>Prazo de resposta</h3>
            {/* TODO: Fernanda enviar — prazo real de retorno do primeiro contato (ex.: "em até 1 dia útil") */}
            <p>
              Escopo e prazo de entrega são definidos no primeiro contato,
              considerando os prazos do processo.
            </p>
          </article>
          <article>
            <FileUp size={28} strokeWidth={1.8} aria-hidden="true" />
            <h3>Envio de documentos</h3>
            <p>
              Petição, laudo, contratos, extratos e planilhas pelo WhatsApp ou
              por e-mail, em PDF, imagem ou planilha.
            </p>
          </article>
        </div>
        <div className="lawyers-actions">
          <a
            className="button primary large"
            href={createWhatsappUrl(undefined, lawyerWhatsappMessage)}
            target="_blank"
            rel="noreferrer"
            data-cta="advogados"
          >
            <MessageCircle size={19} strokeWidth={2} aria-hidden="true" />
            Falar sobre um processo
          </a>
          <a className="text-link" href={`mailto:${contact.email}`}>
            Enviar documentos por e-mail
            <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="experience-band" id="experiencia">
        <div className="section experience-content">
          <div>
            <p className="eyebrow">Diferencial</p>
            <h2>15 anos dentro do setor bancário</h2>
            <p>
              Quem já trabalhou com contratos e operações de crédito no dia a dia
              sabe onde procurar. Essa vivência orienta cada análise.
            </p>
          </div>
          <ul className="data-card" aria-label="Áreas de experiência bancária">
            {bankingExperience.map((item) => (
              <li key={item}>
                <CircleCheck size={18} strokeWidth={1.9} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <h2 className="visually-hidden" id="trust-title">
          Compromissos de atuação
        </h2>
        <div className="trust-grid">
          {trustMarkers.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title}>
                <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <InlineCta
        id="cta-documentos"
        tone="dark"
        title="Já tem o contrato ou o extrato em mãos?"
        text="Envie os documentos para uma avaliação inicial da demanda."
        buttonLabel="Enviar documentos"
        message="Olá, Fernanda. Tenho documentos de um caso e gostaria de uma avaliação inicial."
      />

      <section className="section about" id="sobre">
        <div className="about-layout">
          <figure className="about-photo">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt="Fernanda Camargo Rodrigues, administradora e perita econômico-financeira"
                width={640}
                height={800}
                sizes="(max-width: 980px) 360px, 380px"
              />
            ) : (
              // TODO: Fernanda enviar — foto profissional (vertical, 4:5, fundo neutro). Salvar em /public e preencher profile.photo em site-config.ts
              <div className="about-photo-placeholder" role="img" aria-label="Foto da Fernanda em breve">
                <span>FC</span>
              </div>
            )}
            <figcaption>
              <strong>Fernanda Camargo Rodrigues</strong>
              <span>Administradora · CRA-MG 01-058746/D</span>
            </figcaption>
          </figure>

          <div className="about-content">
            <p className="eyebrow">Sobre a profissional</p>
            <h2>Quem faz a análise do seu caso</h2>
            <div className="text-block">
              <p>
                Fernanda Camargo Rodrigues é Administradora registrada no CRA-MG,
                com MBA em Gestão Estratégica de Negócios e pós-graduação em
                andamento em Perícia Judicial e Extrajudicial.
              </p>
              <p>
                Foram 15 anos no setor bancário, lidando diretamente com
                contratos, crédito, tarifas, encargos e documentação financeira.
                Essa vivência hoje embasa seu trabalho de perícia e assistência
                técnica.
              </p>
            </div>
            <ul className="values-list" aria-label="Princípios de atuação">
              <li>Análise criteriosa</li>
              <li>Organização</li>
              <li>Responsabilidade</li>
              <li>Sigilo profissional</li>
              <li>Imparcialidade</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section credentials" id="formacao">
        <div className="section-heading compact">
          <p className="eyebrow">Formação e registro</p>
          <h2>Trajetória e qualificação</h2>
        </div>
        <div className="credentials-layout">
          <article className="registry-card">
            <BadgeCheck size={34} strokeWidth={1.7} aria-hidden="true" />
            <span className="card-kicker">Registro profissional · CRA-MG</span>
            <strong>01-058746/D</strong>
            <p>Administradora registrada no Conselho Regional de Administração de Minas Gerais.</p>
          </article>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={item.title}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  {item.text ? <p>{item.text}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials />

      <InlineCta
        id="cta-conversa"
        title="Prefere conversar antes de enviar qualquer documento?"
        buttonLabel="Tirar uma dúvida rápida"
      />

      <section className="section process" id="como-funciona">
        <div className="section-heading">
          <p className="eyebrow">Como funciona</p>
          <h2>Do primeiro contato à entrega</h2>
        </div>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section faq" id="perguntas-frequentes">
        <div className="section-heading compact">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Antes de começar</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <article key={question}>
              <CircleHelp size={24} strokeWidth={1.8} aria-hidden="true" />
              <div>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="section contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Contato</p>
            <h2>Apresente sua demanda</h2>
            <p>
              Conte brevemente o caso. O primeiro contato serve para entender a
              necessidade e indicar os documentos.
            </p>
            <a
              className="button primary large"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-cta="contato"
            >
              <MessageCircle size={19} strokeWidth={2} aria-hidden="true" />
              Falar pelo WhatsApp
            </a>
            <address>
              <strong>Fernanda Camargo Perícias</strong>
              <span>Muriaé - MG</span>
              <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span className="address-links">
                <a href={profile.mapsUrl} target="_blank" rel="noreferrer">
                  <MapPin size={17} strokeWidth={2} aria-hidden="true" />
                  Ver no mapa
                </a>
                {profile.googleBusinessUrl ? (
                  <a href={profile.googleBusinessUrl} target="_blank" rel="noreferrer">
                    <Star size={17} strokeWidth={2} aria-hidden="true" />
                    Perfil no Google
                  </a>
                ) : null}
              </span>
              <small>
                Atendimento com sigilo profissional e tratamento responsável das
                informações compartilhadas.
              </small>
            </address>
          </div>
          <ContactForm demandOptions={services.map((service) => service.title)} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
