import type { Metadata } from "next";

import AkelMedPublicPage from "./AkelMedPublicPage";

export const metadata: Metadata = {
  title: "AkelMed | Sistema para clínicas e consultórios",
  description:
    "AkelMed é um sistema para clínicas e consultórios que organiza agenda, pacientes, atendimento e financeiro com uma apresentação mais comercial e voltada para conversão.",
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
    title: "AkelMed | Sistema para clínicas e consultórios",
    description:
      "AkelMed é um sistema para clínicas e consultórios que organiza agenda, pacientes, atendimento e financeiro com uma apresentação mais comercial e voltada para conversão.",
    url: "/akelmed",
    type: "website",
    images: [
      {
        url: "/images/akelmed/gemini-header-akelmed-3.png",
        width: 1200,
        height: 630,
        alt: "AkelMed - sistema para clínicas e consultórios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AkelMed | Sistema para clínicas e consultórios",
    description:
      "AkelMed é um sistema para clínicas e consultórios que organiza agenda, pacientes, atendimento e financeiro com uma apresentação mais comercial e voltada para conversão.",
    images: ["/images/akelmed/gemini-header-akelmed-3.png"],
  },
};

export default function AkelMedPage() {
  return <AkelMedPublicPage />;
}

