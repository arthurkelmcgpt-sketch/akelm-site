import type { Metadata } from "next";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Solutions from "@/components/Solutions/Solutions";

import Network from "@/components/Network/Network";
import Systems from "@/components/Systems/Systems";
import SaaS from "@/components/SaaS/SaaS";
import AkelMed from "@/components/AkelMed/AkelMed";
import Dedicated from "@/components/Dedicated/Dedicated";

import Contact from "@/components/Contact/Contact";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import ScrollMotion from "@/components/ScrollMotion/ScrollMotion";
import HomeFaqDrawer from "@/components/HomeFaqDrawer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";

type HomeFaq = {
  answer: string;
  question: string;
};

const homeFaqs: HomeFaq[] = [
  {
    question: "Quais serviços a Akelm Tecnologia oferece?",
    answer:
      "A Akelm Tecnologia oferece gestão de redes, desenvolvimento de sistemas, plataformas SaaS e sistemas dedicados para empresas que precisam de soluções sob medida.",
  },
  {
    question: "A Akelm Tecnologia desenvolve sistemas para empresas?",
    answer:
      "Sim. A empresa desenvolve sistemas sob medida para automatizar processos, organizar operações internas e criar experiências digitais mais eficientes para o negócio.",
  },
  {
    question: "Vocês trabalham com infraestrutura e gestão de redes?",
    answer:
      "Sim. A Akelm Tecnologia atua com monitoramento, estruturação e suporte de redes para manter a operação da empresa estável, segura e escalável.",
  },
  {
    question: "A Akelm Tecnologia faz plataformas SaaS?",
    answer:
      "Sim. O desenvolvimento de plataformas SaaS faz parte da atuação da empresa, com foco em sistemas web escaláveis, multiusuários e alta disponibilidade.",
  },
  {
    question: "A Akelm Tecnologia é de que cidade?",
    answer:
      "A Akelm Tecnologia é de Caçapava do Sul, no Rio Grande do Sul, e atende empresas que buscam soluções em tecnologia, sistemas e infraestrutura de TI.",
  },
];

const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Akelm Tecnologia",
    url: siteUrl,
    logo: `${siteUrl}/images/akelm-logo-principal.png`,
    description:
      "Akelm Tecnologia entrega soluções em T.I, desenvolvimento de sistemas, plataformas SaaS e gestão de redes para empresas.",
    sameAs: [
      "https://www.instagram.com/akelmtecnologia/",
      "https://www.linkedin.com/company/akelm-tecnologia/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+55 55 99917-1727",
        email: "arthur@akelm.com.br",
        availableLanguage: ["Portuguese"],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Akelm Tecnologia",
    url: siteUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gestão de Redes",
    serviceType: "Gestão de redes para empresas",
    provider: {
      "@type": "Organization",
      name: "Akelm Tecnologia",
      url: siteUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Desenvolvimento de Sistemas",
    serviceType: "Desenvolvimento de sistemas para empresas",
    provider: {
      "@type": "Organization",
      name: "Akelm Tecnologia",
      url: siteUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plataformas SaaS",
    serviceType: "Criação de plataformas SaaS",
    provider: {
      "@type": "Organization",
      name: "Akelm Tecnologia",
      url: siteUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sistemas Dedicados",
    serviceType: "Desenvolvimento de software corporativo dedicado",
    provider: {
      "@type": "Organization",
      name: "Akelm Tecnologia",
      url: siteUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export const metadata: Metadata = {
  title: "Akelm Tecnologia | Soluções em T.I completas",
  description:
    "Akelm Tecnologia entrega soluções em T.I, desenvolvimento de sistemas, plataformas SaaS e gestão de redes para empresas.",
  keywords: [
    "gestão de redes",
    "desenvolvimento de sistemas",
    "plataformas SaaS",
    "sistemas dedicados",
    "infraestrutura de TI",
    "software para empresas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Akelm Tecnologia | Soluções em T.I completas",
    description:
      "Akelm Tecnologia entrega soluções em T.I, desenvolvimento de sistemas, plataformas SaaS e gestão de redes para empresas.",
    url: "/",
    type: "website",
    siteName: "Akelm Tecnologia",
    images: [
      {
        url: "/images/Foto-institucional.png",
        width: 1200,
        height: 630,
        alt: "Akelm Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akelm Tecnologia | Soluções em T.I completas",
    description:
      "Akelm Tecnologia entrega soluções em T.I, desenvolvimento de sistemas, plataformas SaaS e gestão de redes para empresas.",
    images: ["/images/Foto-institucional.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollMotion />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeStructuredData),
          }}
        />

        <Hero />
        <Solutions />
        <Network />
        <Systems />
        <SaaS />
        <AkelMed />
        <Dedicated />
        <Contact />
        <About />
        <HomeFaqDrawer faqs={homeFaqs} />
      </main>

      <Footer />
    </>
  );
}

