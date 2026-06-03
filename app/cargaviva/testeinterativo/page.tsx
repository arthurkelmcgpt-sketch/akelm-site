import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Oswald } from "next/font/google";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OfficeAssessment from "../escritorio/OfficeAssessment";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";
const pageBackground = "/images/cargaviva/bkgd-cargaviva.png";

const headingFont = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
      <Navbar variant="hero" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main
        className={`${bodyFont.className} relative min-h-screen overflow-hidden bg-[#061b10] text-[#1b4332]`}
      >
        <section className="relative px-5 pb-20 pt-32 sm:px-8 lg:px-10">
          <Image
            src={pageBackground}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,6,0.94)_0%,rgba(2,10,6,0.72)_46%,rgba(2,10,6,0.5)_100%),linear-gradient(180deg,rgba(2,10,6,0.2)_0%,rgba(2,10,6,0.8)_100%)]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-10 max-w-4xl text-white">
              <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-[#ee9b00]">
                Teste interativo
              </p>
              <h1
                className={`${headingFont.className} mt-5 text-[clamp(3.5rem,7vw,7.2rem)] font-bold uppercase leading-[0.88] tracking-[-0.055em]`}
              >
                Descubra onde o CargaViva pode ajudar
              </h1>
              <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/78 sm:text-lg">
                Responda algumas perguntas rápidas sobre a sua operação e gere
                um relatório completo de como o CargaViva pode somar no seu dia
                a dia.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
              <div className="bg-[#f5efe2] p-7 shadow-[0_28px_90px_rgba(8,40,28,0.16)] sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#ca6702]">
                  Como funciona
                </p>
                <div className="mt-7 grid gap-4">
                  {[
                    "Você responde perguntas simples sobre seu perfil.",
                    "O teste identifica dificuldades e oportunidades.",
                    "No final, você gera um PDF personalizado.",
                  ].map((item, index) => (
                    <div key={item} className="flex gap-4">
                      <span
                        className={`${headingFont.className} text-3xl font-bold text-[#ca6702]`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1 text-sm font-semibold leading-6 text-[#1b4332]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/cargaviva"
                  className="mt-8 inline-flex border border-[#1b4332]/20 bg-white px-5 py-3 text-sm font-bold text-[#163126] transition hover:border-[#ca6702]/40 hover:bg-[#fff7ed]"
                >
                  Voltar para o CargaViva
                </Link>
              </div>

              <OfficeAssessment compact />
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </>
  );
}
