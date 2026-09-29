import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.fernandacamargopericias.com.br";

export const metadata: Metadata = {
  title: {
    default:
      "Perícia Econômico-Financeira em Muriaé MG | Fernanda Camargo Perícias",
    template: "%s | Fernanda Camargo Perícias",
  },
  description:
    "Perícia econômico-financeira, assistência técnica judicial, análise de contratos e cálculos em Muriaé/MG e região.",
  keywords: [
    "perícia econômico-financeira",
    "perícia econômico-financeira em Muriaé",
    "perícia contratual",
    "análise de contratos bancários",
    "análise de juros",
    "cálculos financeiros",
    "cálculos trabalhistas",
    "assistência técnica judicial",
    "Fernanda Camargo Perícias",
  ],
  authors: [{ name: "Fernanda Camargo Perícias" }],
  creator: "Fernanda Camargo Perícias",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "Fernanda Camargo Perícias | Perícia Econômico-Financeira e Contratual",
    description:
      "Perícias econômico-financeiras e contratuais, assistência técnica e análises financeiras em Muriaé/MG e região.",
    url: siteUrl,
    siteName: "Fernanda Camargo Perícias",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/capa-fernandinha.png",
        width: 2048,
        height: 745,
        alt: "Fernanda Camargo Perícias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fernanda Camargo Perícias | Perícia Econômico-Financeira e Contratual",
    description:
      "Perícias econômico-financeiras e contratuais, assistência técnica e análises financeiras em Muriaé/MG e região.",
    images: [
      {
        url: "/capa-fernandinha.png",
        alt: "Fernanda Camargo Perícias",
      },
    ],
  },
  icons: {
    icon: "/icone-fernanda.png",
    shortcut: "/icone-fernanda.png",
    apple: "/icone-fernanda.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
