import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Fernanda Camargo Perícias | Perícia Econômico-Financeira em Muriaé MG",
  description:
    "Perícia econômico-financeira e contratual em Muriaé/MG. Análise de contratos bancários, juros, encargos, cálculos e assistência técnica.",
  keywords: [
    "perícia econômico-financeira",
    "perícia econômico-financeira em Muriaé",
    "perícia financeira Muriaé MG",
    "perícia contratual",
    "perícia bancária",
    "análise de contratos bancários",
    "análise de juros",
    "cálculos financeiros",
    "assistência técnica judicial",
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
      "Análise técnica, precisão e confiança para demandas econômico-financeiras e contratuais.",
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
