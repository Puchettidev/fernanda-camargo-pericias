export const siteUrl = "https://www.fernandacamargopericias.com.br";

export const contact = {
  whatsappNumber: "5532991720299",
  phoneDisplay: "(32) 99172-0299",
  phoneHref: "+5532991720299",
  email: "fernandacamargopericias@gmail.com",
};

export function createWhatsappUrl(service?: string) {
  const message = service
    ? `Olá, Fernanda. Gostaria de informações sobre ${service}.`
    : "Olá, Fernanda. Gostaria de informações sobre os serviços de perícia e análise econômico-financeira.";

  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
