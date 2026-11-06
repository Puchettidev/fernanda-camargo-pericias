"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { createWhatsappUrl } from "../site-config";

type WhatsappFloatProps = {
  /** slug do serviço -> título, para a mensagem pré-preenchida nas páginas de serviço */
  serviceTitles: Record<string, string>;
};

export function WhatsappFloat({ serviceTitles }: WhatsappFloatProps) {
  const pathname = usePathname();
  const slug = pathname?.startsWith("/servicos/") ? pathname.split("/")[2] : undefined;
  const service = slug ? serviceTitles[slug] : undefined;

  return (
    <a
      className="floating-whatsapp"
      href={createWhatsappUrl(service)}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com Fernanda pelo WhatsApp"
      data-cta="botao-flutuante"
    >
      <MessageCircle size={26} strokeWidth={2.1} aria-hidden="true" />
      <span className="floating-whatsapp-label">WhatsApp</span>
    </a>
  );
}
