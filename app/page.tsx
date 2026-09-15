import Image from "next/image";
import {
  BadgeDollarSign,
  Banknote,
  Calculator,
  ClipboardCheck,
  FileSearch,
  FileText,
  Scale,
} from "lucide-react";

const whatsappMessage =
  "Olá, Fernanda. Gostaria de informações sobre os serviços de perícia e análise econômico-financeira.";

const whatsappUrl = `https://wa.me/5532991720299?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const services = [
  {
    title: "Assistência Técnica Judicial",
    text: "Apoio técnico às partes e seus representantes em demandas que envolvam questões econômico-financeiras e contratuais.",
    icon: Scale,
  },
  {
    title: "Perícia Econômico-Financeira",
    text: "Análise dos juros de contratos bancários de empréstimo pessoal, empresarial, habitacional, financiamento de veículos e outras operações.",
    icon: BadgeDollarSign,
  },
  {
    title: "Perícia Contratual",
    text: "Análise técnica de contratos, condições financeiras, obrigações, encargos e informações relacionadas à execução contratual.",
    icon: FileText,
  },
  {
    title: "Contratos Bancários",
    text: "Análise de contratos e operações bancárias com atenção a juros, encargos, tarifas, evolução da dívida e demais componentes financeiros.",
    icon: Banknote,
  },
  {
    title: "Cálculos e Apuração de Valores",
    text: "Conferência, reconstrução e apuração de valores com base em documentos, contratos e informações financeiras.",
    icon: Calculator,
  },
  {
    title: "Análise Documental e Financeira",
    text: "Exame criterioso de documentos, demonstrativos, contratos e dados financeiros para identificação de inconsistências ou divergências.",
    icon: FileSearch,
  },
];

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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Fernanda Camargo Perícias",
  description:
    "Perícia econômico-financeira e contratual em Muriaé/MG, com análise de contratos bancários, juros, encargos, cálculos e assistência técnica judicial.",
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
  url: "https://fernandacamargopericias.com.br",
  founder: {
    "@type": "Person",
    name: "Fernanda Camargo Rodrigues",
    jobTitle: "Administradora",
  },
  serviceType: [
    "Perícia econômico-financeira",
    "Perícia contratual",
    "Análise de contratos bancários",
    "Assistência técnica judicial",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Fernanda Camargo Perícias">
          <Image src="/icone-fernanda.png" alt="" width={44} height={44} priority />
          <span>
            <strong>Fernanda Camargo</strong>
            <small>Perícias</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#experiencia">Experiência</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Fale com a Fernanda
        </a>
      </header>

      <section className="hero section" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Fernanda Camargo Perícias</p>
          <h1>Precisão técnica para decisões financeiras e contratuais.</h1>
          <p className="hero-subtitle">
            Perícias econômico-financeiras, análises contratuais e assistência
            técnica com experiência prática de 15 anos no setor bancário.
          </p>
          <div className="hero-meta">
            <span>Perícia Econômico-Financeira e Contratual</span>
            <span>Muriaé - MG e Região</span>
            <span>CRA-MG 01-058746/D</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar pelo WhatsApp
            </a>
            <a className="button secondary" href="#servicos">
              Conhecer os serviços
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <Image
            className="hero-logo"
            src="/icone-fernanda.png"
            alt=""
            width={720}
            height={720}
            priority
          />
          <div className="hero-panel">
            <span>15 anos</span>
            <p>experiência em operações bancárias, contratos e análise financeira</p>
          </div>
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

      <section className="section services" id="servicos">
        <div className="section-heading">
          <p className="eyebrow">Serviços</p>
          <h2>Perícia econômico-financeira e contratual</h2>
          <p>
            Análises técnicas para contratos, operações financeiras, valores,
            documentos e demandas que exigem clareza, método e fundamentação.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon" aria-hidden="true">
                  <Icon size={30} strokeWidth={1.8} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
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

      <section className="contact-section" id="contato">
        <div className="section contact-grid">
          <div>
            <p className="eyebrow">Contato</p>
            <h2>Precisa de uma análise técnica?</h2>
            <p>
              Entre em contato para apresentar sua demanda e verificar a
              possibilidade de atuação técnica no caso.
            </p>
            <a className="button primary large" href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar com Fernanda pelo WhatsApp
            </a>
          </div>
          <address>
            <strong>Fernanda Camargo Perícias</strong>
            <span>Muriaé - MG</span>
            <a href="tel:+5532991720299">(32) 99172-0299</a>
            <a href="mailto:fernandacamargopericias@gmail.com">
              fernandacamargopericias@gmail.com
            </a>
            <small>
              Atendimento com sigilo profissional e tratamento responsável das
              informações compartilhadas.
            </small>
          </address>
        </div>
      </section>

      <footer>
        <div>
          <strong>Fernanda Camargo Perícias</strong>
          <span>Administradora | Perícia Econômico-Financeira e Contratual</span>
        </div>
        <div>
          <span>CRA-MG 01-058746/D</span>
          <span>Muriaé - MG</span>
          <span>© 2026 Fernanda Camargo Perícias. Todos os direitos reservados.</span>
        </div>
      </footer>
    </main>
  );
}
