import Image from "next/image";
import Link from "next/link";
import { services } from "../service-data";
import { contact, createWhatsappUrl, profile, serviceArea } from "../site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image src="/icone-fernanda.png" alt="" width={48} height={48} />
            <strong>Fernanda Camargo Perícias</strong>
          </Link>
          <p>Perícia econômico-financeira, contratual e assistência técnica judicial.</p>
          <p className="footer-registry">
            Fernanda Camargo Rodrigues
            <br />
            Administradora · CRA-MG 01-058746/D
          </p>
        </div>

        <nav className="footer-col" aria-label="Serviços">
          <h2>Serviços</h2>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/servicos/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2>Contato</h2>
          <ul>
            <li>
              <a href={createWhatsappUrl()} target="_blank" rel="noreferrer" data-cta="rodape">
                WhatsApp {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phoneHref}`}>Telefone {contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={profile.mapsUrl} target="_blank" rel="noreferrer">
                Ver no mapa
              </a>
            </li>
            {profile.googleBusinessUrl ? (
              <li>
                <a href={profile.googleBusinessUrl} target="_blank" rel="noreferrer">
                  Perfil no Google
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="footer-col">
          <h2>Cidades atendidas</h2>
          <p className="footer-cities">{serviceArea.join(" · ")} e região</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Fernanda Camargo Perícias. Todos os direitos reservados.</span>
        <span>Muriaé - MG</span>
      </div>
    </footer>
  );
}
