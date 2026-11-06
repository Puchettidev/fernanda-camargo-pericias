export const siteUrl = "https://www.fernandacamargopericias.com.br";
export const siteName = "Fernanda Camargo Perícias";

export const contact = {
  whatsappNumber: "5532991720299",
  phoneDisplay: "(32) 99172-0299",
  phoneHref: "+5532991720299",
  email: "fernandacamargopericias@gmail.com",
};

/** Cidades atendidas (rodapé, página /cidades-atendidas e dados estruturados). */
// TODO: Fernanda confirmar — lista provisória, revisar quais cidades realmente atende.
export const serviceArea = [
  "Muriaé",
  "Cataguases",
  "Ubá",
  "Leopoldina",
  "Carangola",
  "Viçosa",
];

export const profile = {
  /**
   * Caminho da foto em /public, ex.: "/fernanda-camargo.jpg".
   * Enquanto for null, a seção "Sobre" aparece só com texto (sem espaço vazio).
   */
  // TODO: Fernanda enviar — foto profissional (vertical, 4:5, fundo neutro).
  photo: null as string | null,
  /** Link do Perfil da Empresa no Google. O botão "Perfil no Google" só aparece quando preenchido. */
  // TODO: Fernanda enviar — link do Perfil da Empresa no Google (ex.: https://g.page/...).
  googleBusinessUrl: "",
  /** Link do Google Maps do perfil/endereço. O botão "Ver no mapa" só aparece quando preenchido. */
  // TODO: Fernanda enviar — link do Google Maps quando houver perfil ou local de atendimento.
  mapsUrl: "",
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
