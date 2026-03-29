import type { Metadata } from "next";

import AkelMedPublicPage from "./AkelMedPublicPage";

export const metadata: Metadata = {
  title: "AkelMed",
  description:
    "AkelMed é uma plataforma completa para gestão de consultórios e clínicas médicas, com módulos para agenda, atendimento, financeiro, pacientes e equipe.",
  alternates: {
    canonical: "/akelmed",
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
    title: "AkelMed | Gestão completa para clínicas e consultórios",
    description:
      "AkelMed é uma plataforma completa para gestão de consultórios e clínicas médicas, com módulos para agenda, atendimento, financeiro, pacientes e equipe.",
    url: "/akelmed",
    type: "website",
    images: [
      {
        url: "/images/akelmed/gemini-header-akelmed-3.png",
        width: 1200,
        height: 630,
        alt: "AkelMed - gestão completa para clínicas e consultórios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AkelMed | Gestão completa para clínicas e consultórios",
    description:
      "AkelMed é uma plataforma completa para gestão de consultórios e clínicas médicas, com módulos para agenda, atendimento, financeiro, pacientes e equipe.",
    images: ["/images/akelmed/gemini-header-akelmed-3.png"],
  },
};

export default function AkelMedPage() {
  return <AkelMedPublicPage />;
}

