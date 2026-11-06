import { ArrowRight, MessageCircle } from "lucide-react";
import { createWhatsappUrl } from "../site-config";

type InlineCtaProps = {
  title: string;
  text?: string;
  buttonLabel: string;
  /** identifica o CTA nos eventos de conversão */
  id: string;
  message?: string;
  tone?: "light" | "dark";
};

export function InlineCta({ title, text, buttonLabel, id, message, tone = "light" }: InlineCtaProps) {
  return (
    <aside className={`inline-cta inline-cta-${tone}`} aria-label={title}>
      <div className="inline-cta-inner">
        <div>
          <p className="inline-cta-title">{title}</p>
          {text ? <p className="inline-cta-text">{text}</p> : null}
        </div>
        <a
          className="button primary large"
          href={createWhatsappUrl(undefined, message)}
          target="_blank"
          rel="noreferrer"
          data-cta={id}
        >
          <MessageCircle size={19} strokeWidth={2} aria-hidden="true" />
          {buttonLabel}
          <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
