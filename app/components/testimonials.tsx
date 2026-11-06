import { Quote } from "lucide-react";

/**
 * Depoimentos ficam ocultos até existirem depoimentos REAIS, autorizados por
 * escrito pelos clientes. Não usar textos fictícios.
 */
// TODO: Fernanda enviar — depoimentos reais e autorizados; depois mudar para true.
export const SHOW_TESTIMONIALS = false;

type Testimonial = {
  text: string;
  author: string;
  /** ex.: "Advogada, Muriaé/MG" */
  role: string;
};

const testimonials: Testimonial[] = [
  // { text: "...", author: "Nome", role: "Advogado(a), Cidade/MG" },
];

export function Testimonials() {
  if (!SHOW_TESTIMONIALS || testimonials.length === 0) return null;

  return (
    <section className="section testimonials" id="depoimentos">
      <div className="section-heading compact">
        <p className="eyebrow">Depoimentos</p>
        <h2>O que dizem os clientes</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <figure key={item.author}>
            <Quote size={26} strokeWidth={1.8} aria-hidden="true" />
            <blockquote>{item.text}</blockquote>
            <figcaption>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
