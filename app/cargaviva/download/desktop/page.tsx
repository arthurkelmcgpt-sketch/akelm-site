import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Oswald } from "next/font/google";

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

const headingFont = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
      <Navbar variant="hero" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main
        className={`${bodyFont.className} min-h-screen overflow-hidden bg-[#061b10] text-[#062018]`}
      >
        <section className="relative flex min-h-[64vh] items-end overflow-hidden px-6 pb-20 pt-28 text-white">
          <Image
            src={pageBackground}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,6,0.94)_0%,rgba(2,10,6,0.68)_48%,rgba(2,10,6,0.24)_100%),linear-gradient(180deg,rgba(2,10,6,0.2)_0%,rgba(2,10,6,0.75)_100%)]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <Image
              src="/images/cargaviva/logo-horizontal-light.png"
              alt="CargaViva Fretes"
              width={260}
              height={92}
              className="mb-8 h-auto w-52 object-contain"
              priority
            />
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ca6702]">
              Download oficial
            </p>
            <h1
              className={`${headingFont.className} mt-4 max-w-5xl text-[clamp(3.2rem,7.6vw,7.6rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em]`}
            >
              CargaViva Desktop
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/78 sm:text-lg">
              Aplicativo oficial para Windows da plataforma CargaViva Fretes.
            </p>
          </div>
        </section>

        <section className="bg-[#f5efe2] px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <div>
              <h2
                className={`${headingFont.className} text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
              >
                Baixe para Windows com segurança.
              </h2>
              <p className="mt-6 text-sm font-medium leading-7 text-[#49645a]">
                Esta é a página oficial de distribuição da versão desktop do
                CargaViva Fretes. Baixe apenas por aqui para evitar arquivos
                alterados ou fontes desconhecidas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/cargaviva"
                  className="inline-flex bg-[#1b4332] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-[#ca6702]"
                >
                  Voltar ao CargaViva
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=br.com.akelm.cargavivafretes"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex border border-[#1b4332]/18 bg-white px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#1b4332] transition hover:-translate-y-1 hover:border-[#ca6702] hover:text-[#ca6702]"
                >
                  Versão para celular
                </a>
              </div>
            </div>

            <a
              href={desktopDownloadHref}
              download={desktopDownloadName}
              className="group block bg-[#1b4332] p-7 text-white shadow-[0_28px_90px_rgba(8,40,28,0.18)] transition hover:-translate-y-1 hover:bg-[#17402f]"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ca6702]">
                    Arquivo ZIP
                  </span>
                  <span
                    className={`${headingFont.className} mt-4 block text-5xl font-bold uppercase leading-none tracking-[-0.04em]`}
                  >
                    Baixar para Windows
                  </span>
                </div>
                <Image
                  src="/images/cargaviva/desktop-icon.png"
                  alt=""
                  width={88}
                  height={88}
                  className="h-20 w-20 object-contain transition group-hover:scale-105"
                />
              </div>

              <div className="mt-8 grid gap-2 text-[0.68rem] font-bold uppercase leading-5 tracking-[0.08em] text-white/70 sm:grid-cols-2">
                {downloadSpecs.map((item) => (
                  <span key={item} className="bg-white/8 px-4 py-3">
                    {item}
                  </span>
                ))}
              </div>
            </a>
          </div>
        </section>

        <section className="bg-white px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ca6702]">
                Instalação
              </p>
              <h2
                className={`${headingFont.className} mt-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
              >
                Como instalar
              </h2>
            </div>

            <ol className="grid gap-1 md:grid-cols-2">
              {instructions.map((item, index) => (
                <li
                  key={item}
                  className={[
                    "min-h-[180px] p-7",
                    index % 2 === 0
                      ? "bg-[#1b4332] text-white"
                      : "bg-[#f5efe2] text-[#0d3b2a]",
                  ].join(" ")}
                >
                  <span
                    className={`${headingFont.className} text-5xl font-bold text-[#ca6702]`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-8 text-sm font-bold leading-7">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#ca6702] px-6 py-20 text-[#08281c]">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.36fr_0.64fr]">
            <h2
              className={`${headingFont.className} text-5xl font-bold uppercase leading-none tracking-[-0.04em]`}
            >
              Aviso útil antes de baixar
            </h2>
            <div className="grid gap-6 text-sm font-semibold leading-7">
              <p>
                Este instalador é distribuído oficialmente pela Akelm/CargaViva.
                Como a versão desktop ainda é nova, alguns navegadores podem
                exibir aviso de arquivo pouco baixado.
              </p>
              <p>
                O Windows também pode exibir aviso na hora de extrair ou
                executar o arquivo `.exe`. Nesse caso, clique em manter e
                prossiga apenas se o download foi feito por esta página oficial.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5efe2] px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ca6702]">
                Suporte
              </p>
              <h2
                className={`${headingFont.className} mt-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
              >
                Ficou com dúvida?
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-sm font-medium leading-7 text-[#49645a]">
                Em caso de dúvida, chame nosso suporte. A equipe da Akelm pode
                ajudar com o download, instalação e primeiros passos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex bg-[#1b4332] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-[#ca6702]"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="mailto:arthur@akelm.com.br"
                  className="inline-flex border border-[#1b4332]/18 bg-white px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#1b4332] transition hover:-translate-y-1 hover:border-[#ca6702] hover:text-[#ca6702]"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </>
  );
}
