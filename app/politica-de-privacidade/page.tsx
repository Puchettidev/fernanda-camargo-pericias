import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { contact, siteUrl } from "../site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Fernanda Camargo Perícias trata dados pessoais e cookies, conforme a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: { url: `${siteUrl}/politica-de-privacidade` },
};

// TODO: Fernanda enviar — revisar o texto com um(a) advogado(a) e informar CPF/CNPJ se desejar identificá-los.
const updatedAt = "6 de novembro de 2026";

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />

      <section className="simple-hero">
        <div className="section simple-hero-inner">
          <p className="eyebrow">LGPD</p>
          <h1>Política de Privacidade</h1>
          <p className="service-page-lead">Última atualização: {updatedAt}.</p>
        </div>
      </section>

      <article className="section legal-text">
        <h2>1. Quem é a responsável pelos dados</h2>
        <p>
          Este site pertence a Fernanda Camargo Rodrigues (Fernanda Camargo
          Perícias), Administradora, CRA-MG 01-058746/D, com atuação em
          Muriaé/MG. Ela é a controladora dos dados pessoais tratados por meio
          do site. Contato: <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>

        <h2>2. Quais dados são coletados</h2>
        <ul>
          <li>
            <strong>Formulário de contato:</strong> nome, telefone, tipo de
            demanda e a mensagem que você escrever.
          </li>
          <li>
            <strong>WhatsApp e e-mail:</strong> as informações e os documentos
            que você decidir enviar na conversa.
          </li>
          <li>
            <strong>Navegação e cookies:</strong> somente com o seu
            consentimento, dados de uso do site e de interação com anúncios
            (por exemplo, páginas visitadas e cliques em botões de contato),
            coletados por ferramentas do Google, como o Google Tag Manager e o
            Google Ads.
          </li>
        </ul>

        <h2>3. Para que os dados são usados</h2>
        <ul>
          <li>Responder ao seu contato e avaliar a sua demanda.</li>
          <li>Prestar o serviço contratado e cumprir obrigações legais e profissionais.</li>
          <li>Medir o resultado dos anúncios e melhorar o site, se você aceitar os cookies.</li>
        </ul>
        <p>
          As bases legais são, conforme o caso, o consentimento, a execução de
          procedimentos preliminares a um contrato a seu pedido, o cumprimento
          de obrigação legal e o exercício regular de direitos (art. 7º da Lei
          nº 13.709/2018).
        </p>

        <h2>4. Com quem os dados podem ser compartilhados</h2>
        <p>
          Os dados não são vendidos. Podem ser processados por fornecedores
          necessários ao funcionamento do site e do atendimento: hospedagem
          (Vercel), envio do formulário (Formspree), mensagens (WhatsApp) e
          medição de anúncios (Google). Também podem ser compartilhados quando
          exigido por lei ou por ordem judicial.
        </p>

        <h2>5. Por quanto tempo os dados são guardados</h2>
        <p>
          Pelo tempo necessário para responder ao contato e prestar o serviço,
          e depois pelo prazo exigido por lei ou necessário para o exercício de
          direitos. Os documentos de casos são tratados com sigilo profissional.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Cookies de medição e publicidade só são ativados se você clicar em
          “Aceitar” no aviso de cookies. Você pode mudar a escolha a qualquer
          momento pelo link “Preferências de cookies”, no rodapé, ou apagando os
          cookies do navegador.
        </p>

        <h2>7. Seus direitos</h2>
        <p>
          Você pode pedir a confirmação do tratamento, o acesso, a correção, a
          anonimização, a portabilidade ou a exclusão dos seus dados, além de
          informações sobre compartilhamento e a revogação do consentimento
          (art. 18 da LGPD). Basta enviar um e-mail para{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>

        <h2>8. Segurança</h2>
        <p>
          São adotadas medidas razoáveis para proteger os dados contra acesso
          não autorizado, perda ou uso indevido.
        </p>

        <h2>9. Alterações</h2>
        <p>
          Esta política pode ser atualizada. A data da última versão aparece no
          topo da página.
        </p>
      </article>

      <SiteFooter />
    </main>
  );
}
