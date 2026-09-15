import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Fernanda Camargo Perícias | Perícia Econômico-Financeira em Muriaé MG",
  description:
    "Perícia econômico-financeira em Muriaé/MG para contratos bancários, análise de juros, encargos, cálculos financeiros e assistência técnica judicial.",
  keywords: [
    "perícia econômico-financeira",
    "perícia econômico-financeira em Muriaé",
    "perícia financeira Muriaé MG",
    "perícia contratual",
    "perícia bancária",
    "perícia bancária em Muriaé",
    "análise de contratos bancários",
    "análise de juros",
    "juros de contrato bancário",
    "cálculos financeiros",
    "assistência técnica judicial",
    "assistência técnica judicial em Muriaé",
    "perícia judicial",
    "perícia extrajudicial",
    "Fernanda Camargo Perícias",
  ],
  authors: [{ name: "Fernanda Camargo Perícias" }],
  creator: "Fernanda Camargo Perícias",
  metadataBase: new URL("https://fernandacamargopericias.com.br"),
  openGraph: {
    title:
      "Fernanda Camargo Perícias | Perícia Econômico-Financeira em Muriaé MG",
    description:
      "Análise técnica de contratos bancários, juros, cálculos financeiros e assistência judicial em Muriaé - MG.",
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
