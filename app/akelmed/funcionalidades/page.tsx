import type { Metadata } from "next";

import AkelMedPublicPage from "../AkelMedPublicPage";

export const metadata: Metadata = {
  title: "AkelMed | Funcionalidades completas",
  description:
    "Conheça a página completa da AkelMed com módulos, planos, limites, bônus e detalhes técnicos para clínicas e consultórios.",
  alternates: {
    canonical: "/akelmed/funcionalidades",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "AkelMed | Funcionalidades completas",
    description:
      "Conheça a página completa da AkelMed com módulos, planos, limites, bônus e detalhes técnicos para clínicas e consultórios.",
    url: "/akelmed/funcionalidades",
    type: "website",
    images: [
      {
        url: "/images/akelmed/gemini-header-akelmed-3.png",
        width: 1200,
        height: 630,
        alt: "AkelMed - funcionalidades completas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AkelMed | Funcionalidades completas",
    description:
      "Conheça a página completa da AkelMed com módulos, planos, limites, bônus e detalhes técnicos para clínicas e consultórios.",
    images: ["/images/akelmed/gemini-header-akelmed-3.png"],
  },
};

export default function AkelMedFunctionalidadesPage() {
  return <AkelMedPublicPage />;
}
