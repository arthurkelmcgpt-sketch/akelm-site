import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";
const pageBackground = "/images/cargaviva/bkgd-cargaviva.png";
const desktopDownloadHref =
  "/downloads/CargaViva%20Fretes%20Desktop%20Setup%200.1.0.zip";
const desktopDownloadName = "CargaViva-Fretes-Desktop-Setup-0.1.0.zip";
const desktopVersion = "0.1.0";
const desktopUpdatedAt = "26/05/2026";
const desktopFileSize = "87,0 MB";

const buildWhatsAppLink = () => {
  const message =
    "Olá, preciso de suporte com o download desktop do CargaViva Fretes.";

  return `https://wa.me/5555999171727?text=${encodeURIComponent(message)}`;
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  description:
    "Página oficial de download da versão desktop do CargaViva Fretes para Windows.",
  name: "Download Desktop - CargaViva Fretes",
  url: `${siteUrl}/cargaviva/download/desktop`,
};

export const metadata: Metadata = {
  title: "Download Desktop | CargaViva Fretes",
  description: "Baixe a versão desktop do CargaViva Fretes para Windows.",
  alternates: {
    canonical: "/cargaviva/download/desktop",
  },
  openGraph: {
    title: "Download Desktop | CargaViva Fretes",
    description:
      "Página oficial de download da versão desktop do CargaViva Fretes para Windows.",
    images: [
      {
        alt: "Identidade visual do CargaViva Fretes",
        height: 1920,
        url: "/images/cargaviva/oferecimento.png",
        width: 1080,
      },
    ],
    type: "website",
    url: "/cargaviva/download/desktop",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Página oficial de download da versão desktop do CargaViva Fretes para Windows.",
    images: ["/images/cargaviva/oferecimento.png"],
    title: "Download Desktop | CargaViva Fretes",
  },
};

const downloadSpecs = [
  `Versão ${desktopVersion}`,
  `Atualizado em ${desktopUpdatedAt}`,
  "Windows 10 ou superior",
  desktopDownloadName,
  desktopFileSize,
] as const;

const instructions = [
  "Baixe o arquivo ZIP.",
  "Extraia o conteúdo.",
  "Execute o instalador.",
  "Se já houver uma versão instalada, o instalador atualizará automaticamente.",
] as const;

export default function CargaVivaDesktopDownloadPage() {
  return (
    <>
      <Navbar variant="light" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="relative min-h-screen overflow-hidden bg-[#061b10] pt-24 text-slate-900">
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
              "linear-gradient(180deg, rgba(2,10,6,0.18) 0%, rgba(2,10,6,0.34) 100%)",
          }}
        />

        <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/90 shadow-[0_28px_80px_rgba(2,10,6,0.26)] backdrop-blur">
            <div className="border-b border-[#e7e2d7] px-5 py-8 sm:px-8 sm:py-10">
              <span className="inline-flex items-center rounded-full border border-[#1B4332]/12 bg-[#1B4332]/8 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#1B4332]">
                CargaViva Fretes
              </span>

              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-[#163126] sm:text-5xl">
                Download Desktop para Windows
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#4f5f57] sm:text-lg">
                Página oficial de download da versão desktop do CargaViva
                Fretes para Windows.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/cargaviva"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7d1c2] bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-[#163126] transition hover:border-[#CA6702]/30 hover:bg-[#fff7ed]"
                >
                  Voltar para CargaViva
                </Link>

                <a
                  href="https://play.google.com/store/apps/details?id=br.com.akelm.cargavivafretes"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#1B4332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24533f]"
                >
                  Ver versão para celular
                </a>
              </div>
            </div>

            <div className="px-5 py-6 sm:px-8 sm:py-8">
              <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                <article className="rounded-[1.5rem] border border-[#e6e0d4] bg-[#fffdfa] p-5 shadow-[0_14px_40px_rgba(27,67,50,0.04)] sm:p-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#9f5304]">
                    Aplicativo oficial
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#163126]">
                    CargaViva Fretes Desktop
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#5f6d66] sm:text-base">
                    Aplicativo oficial para Windows da plataforma CargaViva
                    Fretes.
                  </p>

                  <a
                    href={desktopDownloadHref}
                    download={desktopDownloadName}
                    className="mt-6 block w-full rounded-[1.4rem] bg-gradient-to-r from-[#1B4332] to-[#2d6a4f] px-6 py-6 text-white shadow-[0_22px_45px_rgba(27,67,50,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_55px_rgba(27,67,50,0.36)]"
                  >
                    <span className="block text-center text-xl font-semibold sm:text-2xl">
                      Baixar para Windows
                    </span>
                    <span className="mt-4 grid grid-cols-1 gap-2 text-center text-[0.72rem] leading-5 text-white/68 sm:grid-cols-2 sm:text-xs">
                      {downloadSpecs.map((item) => (
                        <span
                          key={item}
                          className="rounded-[0.8rem] border border-white/10 bg-black/10 px-3 py-2"
                        >
                          {item}
                        </span>
                      ))}
                    </span>
                  </a>
                </article>

                <div className="grid gap-5">
                  <article className="rounded-[1.5rem] border border-[#d8e2dc] bg-[#f7fbf8] p-5 shadow-[0_14px_40px_rgba(27,67,50,0.04)] sm:p-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#1B4332]">
                      Instruções
                    </p>
                    <ol className="mt-4 grid gap-3">
                      {instructions.map((item, index) => (
                        <li
                          key={item}
                          className="rounded-[1rem] border border-[#d8e2dc] bg-white px-4 py-3 text-sm leading-7 text-[#42544b] sm:text-base"
                        >
                          <span className="font-semibold text-[#163126]">
                            {index + 1}.
                          </span>{" "}
                          {item}
                        </li>
                      ))}
                    </ol>
                  </article>

                  <article className="rounded-[1.5rem] border border-[#f1d7b3] bg-[#fff8ee] p-5 shadow-[0_14px_40px_rgba(202,103,2,0.08)] sm:p-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#9f5304]">
                      Aviso útil
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[#6f5a43] sm:text-base">
                      Este instalador é distribuído oficialmente pela
                      Akelm/CargaViva. Como a versão desktop ainda é nova,
                      alguns navegadores podem exibir aviso de arquivo pouco
                      baixado. O Windows também pode exibir aviso na hora de
                      extrair ou executar o arquivo `.exe`; nesse caso, basta
                      clicar em manter e prosseguir apenas se o download foi
                      feito por esta página oficial.
                    </p>
                  </article>

                  <article className="rounded-[1.5rem] border border-[#d8e2dc] bg-[#f7fbf8] p-5 shadow-[0_14px_40px_rgba(27,67,50,0.04)] sm:p-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#1B4332]">
                      Suporte
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[#42544b] sm:text-base">
                      Em caso de dúvida, chame nosso suporte.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={buildWhatsAppLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[#1B4332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24533f]"
                      >
                        Falar no WhatsApp
                      </a>
                      <a
                        href="mailto:arthur@akelm.com.br"
                        className="inline-flex items-center justify-center rounded-full border border-[#d7d1c2] bg-white px-5 py-3 text-sm font-semibold text-[#163126] transition hover:border-[#CA6702]/30 hover:bg-[#fff7ed]"
                      >
                        Enviar e-mail
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </>
  );
}
