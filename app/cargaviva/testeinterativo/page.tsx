import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OfficeAssessment from "../escritorio/OfficeAssessment";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";
const pageBackground = "/images/cargaviva/bkgd-cargaviva.png";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  description:
    "Teste interativo do CargaViva Fretes para gerar um relatório inicial sobre como a plataforma pode ajudar na operação.",
  name: "Teste Interativo - CargaViva Fretes",
  url: `${siteUrl}/cargaviva/testeinterativo`,
};

export const metadata: Metadata = {
  title: "Teste Interativo | CargaViva Fretes",
  description:
    "Responda algumas perguntas rápidas e gere um relatório completo sobre como o CargaViva pode ajudar no dia a dia da sua operação.",
  alternates: {
    canonical: "/cargaviva/testeinterativo",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CargaVivaInteractiveTestPage() {
  return (
    <>
      <Navbar variant="light" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="relative min-h-screen overflow-hidden bg-[#061b10] px-5 pb-16 pt-28 text-[#1B4332] sm:px-8 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url('${pageBackground}')`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(2,10,6,0.2) 0%, rgba(2,10,6,0.34) 100%)",
          }}
        />

        <section className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="rounded-[1.5rem] border border-[#dde5df] bg-[#fffaf2] p-6 shadow-[0_22px_60px_rgba(27,67,50,0.06)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#CA6702]">
                Teste interativo
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-[#1B4332] sm:text-5xl">
                
              </h1>
              <p className="mt-5 text-base leading-8 text-[#52625a] sm:text-lg">
                Responda algumas perguntas rápidas sobre a sua operação, e
                obtenha um relatório completo de como o CargaViva pode lhe
                ajudar no seu dia a dia.
              </p>
            </div>

            <OfficeAssessment compact />
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/cargaviva"
              className="inline-flex items-center justify-center rounded-full border border-[#d7d1c2] bg-white px-6 py-3 text-sm font-semibold text-[#163126] transition hover:border-[#CA6702]/40 hover:bg-[#fff7ed]"
            >
              Voltar para a página inicial do CargaViva
            </Link>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </>
  );
}
