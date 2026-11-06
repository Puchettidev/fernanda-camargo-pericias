export const siteUrl = "https://www.fernandacamargopericias.com.br";
export const siteName = "Fernanda Camargo Perícias";

export const contact = {
  whatsappNumber: "5532991720299",
  phoneDisplay: "(32) 99172-0299",
  phoneHref: "+5532991720299",
  email: "fernandacamargopericias@gmail.com",
};

/**
 * ID do formulário no Formspree (https://formspree.io), ex.: "xyzabcd".
 * Configure NEXT_PUBLIC_FORMSPREE_ID na Vercel. Sem ele, o formulário
 * abre o WhatsApp com os dados preenchidos.
 */
// TODO: Fernanda enviar — criar conta no Formspree com o e-mail do site e informar o ID do formulário.
export const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

const defaultMessage =
  "Olá, Fernanda. Gostaria de informações sobre os serviços de perícia e análise econômico-financeira.";

export function createWhatsappUrl(service?: string, customMessage?: string) {
  const message =
    customMessage ??
    (service ? `Olá, Fernanda. Gostaria de informações sobre ${service}.` : defaultMessage);

  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const lawyerWhatsappMessage =
  "Olá, Fernanda. Sou advogado(a) e gostaria de conversar sobre assistência técnica em um processo.";
