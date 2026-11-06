import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  ClipboardCheck,
  Clock,
  FileUp,
  Gavel,
  Landmark,
  CircleHelp,
  FileSearch,
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "./components/contact-form";
import { InlineCta } from "./components/inline-cta";
import { ServiceIcon } from "./components/service-icon";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { services } from "./service-data";
import { contact, createWhatsappUrl, lawyerWhatsappMessage, siteUrl } from "./site-config";

const whatsappUrl = createWhatsappUrl();

const bankingExperience = [
  "Produtos bancários",
  "Operações de crédito",
  "Contratos",
  "Juros, tarifas e encargos",
  "Documentação financeira",
  "Procedimentos operacionais",
  "Controles internos",
  "Análise de inconsistências",
];

const steps = [
  {
    title: "Contato inicial",
    text: "O cliente apresenta a necessidade e os documentos disponíveis.",
  },
  {
    title: "Análise preliminar",
    text: "É realizada uma avaliação inicial da demanda e da documentação necessária.",
  },
  {
    title: "Análise técnica",
    text: "Documentos, contratos, cálculos e informações financeiras são examinados de forma criteriosa.",
  },
  {
    title: "Entrega técnica",
    text: "Apresentação do trabalho técnico conforme o serviço contratado.",
  },
];

const qualifications = [
  ["Graduação em Administração", "UNIFAMINAS - 2014"],
  ["MBA em Gestão Estratégica de Negócios", "FUMEC - 2018"],
  [
    "Pós-graduanda em Perícia Judicial e Extrajudicial",
    "Estácio de Sá - em andamento, conclusão prevista: 2027",
  ],
  ["Registro profissional", "CRA-MG 01-058746/D"],
  ["Idioma", "Inglês fluente"],
];

const audiences = [
  "Advogados",
  "Escritórios de advocacia",
  "Empresas",
  "Pessoas físicas",
  "Profissionais envolvidos em demandas judiciais",
  "Partes interessadas em análise técnica de contratos ou operações financeiras",
];

const trustMarkers = [
  {
    title: "Sigilo profissional",
    text: "Tratamento responsável das informações e documentos compartilhados.",
    icon: ShieldCheck,
  },
  {
    title: "Análise criteriosa",
    text: "Avaliação técnica com organização, método e fundamentação.",
    icon: FileSearch,
  },
  {
    title: "Experiência bancária",
    text: "Vivência prática em contratos, crédito, encargos, tarifas e operações.",
    icon: Banknote,
  },
  {
    title: "Atuação regional",
    text: "Atendimento em Muriaé - MG e região, conforme a natureza da demanda.",
    icon: MapPin,
  },
];

const faqs = [
  [
    "Quais contratos podem ser analisados?",
    "Contratos bancários de empréstimo pessoal, empresarial, habitacional, financiamento de veículos e outras operações financeiras.",
  ],
  [
    "O serviço pode ser judicial e extrajudicial?",
    "Sim. A atuação pode apoiar demandas judiciais ou análises realizadas fora do processo, conforme a necessidade apresentada.",
  ],
  [
    "Quais documentos são necessários?",
    "A documentação depende do caso. Em geral, contratos, demonstrativos, extratos, planilhas, comprovantes e informações financeiras ajudam na análise inicial.",
  ],
  [
    "Como começa o atendimento?",
    "O primeiro contato serve para entender a demanda, verificar os documentos disponíveis e orientar os próximos passos técnicos.",
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
  serviceType: [
    ...services.map((service) => service.title),
  ],
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
            alt="Símbolo Fernanda Camargo Perícias"
            width={720}
            height={720}
            priority
          />
          <div className="hero-proof" aria-label="Credenciais profissionais">
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
          <h2>Análises técnicas para diferentes necessidades</h2>
          <p>
            Entenda o objetivo de cada serviço, quando ele pode ser solicitado e
            como apresentar sua demanda à Fernanda.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <div className="service-icon">
                  <ServiceIcon name={service.icon} />
                </div>
                <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <div className="service-situation">
                  <strong>Quando solicitar</strong>
                  <p>{service.situation}</p>
                </div>
                <div className="service-actions">
                  <Link className="text-link" href={`/servicos/${service.slug}`}>
                    Entender o serviço
                    <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
                  </Link>
                  <a
                    className="text-link secondary-link"
                    href={createWhatsappUrl(service.title)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar pelo WhatsApp
                  </a>
                </div>
                </div>
              </article>
          ))}
        </div>
      </section>

      <InlineCta
        id="cta-servicos"
        title="Não sabe qual serviço se aplica ao seu caso?"
        text="Descreva a situação em poucas linhas. A Fernanda indica o caminho e os documentos necessários."
        buttonLabel="Descrever meu caso"
      />

      <section className="section lawyers" id="advogados">
        <div className="section-heading">
          <p className="eyebrow">Para advogados e escritórios</p>
          <h2>Assistência técnica para o seu processo</h2>
          <p>
            Suporte técnico em questões financeiras e contratuais, do exame dos
            documentos até a organização das conclusões.
          </p>
        </div>
        <div className="lawyers-grid">
          <article>
            <Gavel size={28} strokeWidth={1.8} aria-hidden="true" />
            <h3>Como ajuda no processo</h3>
            <ul>
              <li>Leitura técnica de contratos, cálculos e demonstrativos.</li>
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
              O escopo e o prazo de entrega são definidos no primeiro contato,
              considerando os prazos do processo.
            </p>
          </article>
          <article>
            <FileUp size={28} strokeWidth={1.8} aria-hidden="true" />
            <h3>Envio de documentos</h3>
            <p>
              Petição, laudo, contratos, extratos e planilhas podem ser enviados
              pelo WhatsApp ou por e-mail, em PDF, imagem ou planilha.
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

      <section className="section about" id="sobre">
        <div className="section-heading">
          <p className="eyebrow">Sobre a profissional</p>
          <h2>Experiência profissional aplicada à análise técnica</h2>
        </div>
        <div className="about-grid">
          <div className="text-block">
            <p>
              Fernanda Camargo Rodrigues é Administradora, registrada no CRA-MG,
              com MBA em Gestão Estratégica de Negócios e Pós-graduanda em
              Perícia Judicial e Extrajudicial.
            </p>
            <p>
              Possui 15 anos de experiência no setor bancário, com atuação direta
              em operações financeiras, contratos, produtos bancários, crédito,
              análise documental e rotinas administrativas e operacionais.
            </p>
            <p>
              Sua trajetória proporciona conhecimento prático sobre contratos,
              operações bancárias, encargos, tarifas e informações financeiras,
              aplicado atualmente à análise econômico-financeira, contratual e
              assistência técnica.
            </p>
          </div>
          <aside className="about-card">
            <span className="card-kicker">Atuação pautada por</span>
            <ul>
              <li>Análise criteriosa</li>
              <li>Organização</li>
              <li>Responsabilidade</li>
              <li>Sigilo profissional</li>
              <li>Imparcialidade</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section trust">
        <div className="section-heading compact">
          <p className="eyebrow">Confiança técnica</p>
          <h2>Base para uma análise segura e bem documentada</h2>
        </div>
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

      <section className="experience-band" id="experiencia">
        <div className="section experience-content">
          <div>
            <p className="eyebrow">Diferencial técnico</p>
            <h2>15 anos de experiência no setor bancário</h2>
            <p>
              A vivência profissional em ambiente bancário oferece repertório
              prático para compreender documentos, contratos, operações de
              crédito, procedimentos internos e informações financeiras com
              profundidade e responsabilidade.
            </p>
          </div>
          <div className="data-card" aria-label="Áreas de experiência bancária">
            {bankingExperience.map((item) => (
              <span key={item}>
                <ClipboardCheck size={18} strokeWidth={1.8} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
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

      <section className="section dual">
        <div className="section-heading">
          <p className="eyebrow">Judicial e extrajudicial</p>
          <h2>Análise técnica para diferentes contextos</h2>
        </div>
        <div className="dual-grid">
          <article>
            <span className="number">
              <Scale size={30} strokeWidth={1.7} aria-hidden="true" />
              01
            </span>
            <h3>Perícia Judicial</h3>
            <p>
              A análise técnica pode auxiliar na compreensão de questões
              financeiras e contratuais existentes em processos judiciais,
              oferecendo apoio fundamentado às partes e seus representantes.
            </p>
          </article>
          <article>
            <span className="number">
              <FileSearch size={30} strokeWidth={1.7} aria-hidden="true" />
              02
            </span>
            <h3>Perícia Extrajudicial</h3>
            <p>
              Análises técnicas podem ser utilizadas para conferir contratos,
              operações, valores e documentos fora do ambiente judicial, conforme
              a necessidade apresentada.
            </p>
          </article>
        </div>
      </section>

      <section className="section audience">
        <div className="section-heading compact">
          <p className="eyebrow">Para quem são os serviços</p>
          <h2>Atendimento técnico conforme a natureza da demanda</h2>
        </div>
        <div className="audience-list">
          {audiences.map((item) => (
            <span key={item}>
              <ClipboardCheck size={17} strokeWidth={1.8} aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section process" id="como-funciona">
        <div className="section-heading">
          <p className="eyebrow">Como funciona</p>
          <h2>Um processo claro, organizado e responsável</h2>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section qualifications">
        <div className="section-heading compact">
          <p className="eyebrow">Formação e qualificação</p>
          <h2>Base acadêmica e registro profissional</h2>
        </div>
        <div className="qualification-grid">
          {qualifications.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <InlineCta
        id="cta-processo"
        title="Prefere conversar antes de enviar qualquer documento?"
        buttonLabel="Tirar uma dúvida rápida"
      />

      <section className="section faq">
        <div className="section-heading compact">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Dúvidas comuns antes da análise técnica</h2>
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

