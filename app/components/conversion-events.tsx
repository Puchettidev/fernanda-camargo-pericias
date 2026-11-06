"use client";

import { useEffect } from "react";
import { track } from "../lib/analytics";

/** De onde veio o clique: data-cta do link ou o id da seção mais próxima. */
function locationOf(link: HTMLAnchorElement) {
  return link.dataset.cta ?? link.closest("[id]")?.id ?? (link.closest("footer") ? "rodape" : "pagina");
}

/**
 * Dispara eventos de conversão no dataLayer para qualquer link de WhatsApp,
 * telefone ou e-mail do site. O envio do formulário é medido no próprio
 * componente do formulário.
 */
export function ConversionEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("https://wa.me/")) {
        track("whatsapp_click", { cta_location: locationOf(link) });
      } else if (href.startsWith("tel:")) {
        track("phone_click", { cta_location: locationOf(link) });
      } else if (href.startsWith("mailto:")) {
        track("email_click", { cta_location: locationOf(link) });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
