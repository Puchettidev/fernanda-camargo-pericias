import Image from "next/image";
import Link from "next/link";
import { createWhatsappUrl } from "../site-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/#inicio" className="brand" aria-label="Fernanda Camargo Perícias - início">
        <Image src="/icone-fernanda.png" alt="" width={44} height={44} priority />
        <span>
          <strong>Fernanda Camargo</strong>
          <small>Perícias</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        <Link href="/#sobre">Sobre</Link>
        <Link href="/#servicos">Serviços</Link>
        <Link href="/#experiencia">Experiência</Link>
        <Link href="/#como-funciona">Como funciona</Link>
        <Link href="/#contato">Contato</Link>
      </nav>
      <a className="header-cta" href={createWhatsappUrl()} target="_blank" rel="noreferrer">
        Falar com a Fernanda
      </a>
    </header>
  );
}
