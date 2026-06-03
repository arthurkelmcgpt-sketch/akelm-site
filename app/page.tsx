import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Oswald } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";

const headingFont = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Akelm Tecnologia | Serviços digitais para empresas",
  description:
    "A Akelm Tecnologia desenvolve serviços digitais para empresas que precisam organizar processos, reduzir retrabalho e crescer com segurança.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Akelm Tecnologia | Serviços digitais para empresas",
    description:
      "Tecnologia, automação e produtos digitais para transformar operação em resultado.",
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
    title: "Akelm Tecnologia | Serviços digitais para empresas",
    description:
      "Tecnologia, automação e produtos digitais para transformar operação em resultado.",
    images: ["/images/Foto-institucional.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Akelm Tecnologia",
  url: siteUrl,
  description:
    "Serviços digitais para empresas, com desenvolvimento de sistemas, aplicativos e automações.",
};

const solutionCards = [
  {
    number: "01",
    title: "CargaViva Fretes",
    label: "Transporte",
    text: "O CargaViva Fretes intermedia o contrato de fretes de animais, entrega segurança e praticidade para todos os envolvidos.",
    href: "/cargaviva",
    background: "/images/home/background-cargaviva.png",
    className: "bg-[#08281c] text-white",
  },
  {
    number: "02",
    title: "Redes de Computadores",
    label: "Infraestrutura",
    text: "Referência em redes de computadores em Caçapava do Sul. Da implementação à soluções de problemas.",
    href: "https://wa.me/5555999171727?text=Ol%C3%A1%2C%20preciso%20dos%20seus%20servi%C3%A7os%20de%20redes%20de%20computadores.",
    className: "bg-[#a31621] text-white",
  },
  {
    number: "03",
    title: "Sites e Sistemas Dedicados",
    label: "Sob medida",
    text: "Criação e gestão de sites que impulsionam sua marca, e de sistemas para controle da sua demanda seja ela qual for.",
    href: "https://wa.me/5555999171727?text=Ol%C3%A1%2C%20gostaria%20de%20or%C3%A7ar%20um%20site%2Fsistema%20dedicado.",
    className: "bg-[#071525] text-white",
  },
  {
    number: "04",
    title: "AkelMed",
    label: "Saúde",
    text: "Sistema de gestão completo para Clínicas e consultórios médicos.",
    href: "/akelmed",
    background: "/images/home/background-akelmed.png",
    className: "bg-[#f3f4f6] text-white",
  },
];

const footerLinks = [
  { label: "Serviços", href: "/#solucoes" },
  { label: "AkelMed", href: "/akelmed" },
  { label: "CargaViva", href: "/cargaviva" },
  { label: "Contato", href: "/#contato" },
];

function NetworkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10"
      viewBox="0 0 64 64"
      fill="none"
    >
      <rect x="10" y="8" width="44" height="28" rx="5" fill="#071525" />
      <rect x="15" y="13" width="34" height="16" rx="2" fill="#d7e6ee" />
      <path d="M32 36v8M20 52h24M24 44h16" stroke="#a31621" strokeWidth="4" strokeLinecap="round" />
      <circle cx="14" cy="52" r="5" fill="#a31621" />
      <circle cx="32" cy="52" r="5" fill="#071525" />
      <circle cx="50" cy="52" r="5" fill="#a31621" />
    </svg>
  );
}

function SystemsIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10"
      viewBox="0 0 64 64"
      fill="none"
    >
      <rect x="7" y="10" width="50" height="36" rx="6" fill="#071525" />
      <rect x="12" y="16" width="40" height="8" rx="2" fill="#a31621" />
      <path d="M16 32h12M16 39h21M36 32h12" stroke="#d7e6ee" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 54h16M32 46v8" stroke="#a31621" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

type MarqueeItem = {
  label: string;
  content: ReactNode;
};

const marqueeItems: MarqueeItem[] = [
  {
    label: "CargaViva",
    content: (
      <Image
        src="/images/cargaviva/logo-horizontal-primary.png"
        alt="CargaViva Fretes"
        width={150}
        height={48}
        className="h-10 w-auto object-contain"
      />
    ),
  },
  {
    label: "AkelMed",
    content: (
      <Image
        src="/images/akelmed/akelmed-logo.png"
        alt="AkelMed"
        width={150}
        height={72}
        className="h-11 w-auto object-contain"
      />
    ),
  },
  {
    label: "Redes de computadores",
    content: <NetworkIcon />,
  },
  {
    label: "Sites e sistemas dedicados",
    content: <SystemsIcon />,
  },
];

export default function Home() {
  return (
    <>
      <Navbar variant="hero" />
      <main
        className={`${bodyFont.className} relative min-h-screen overflow-hidden bg-[#05080c] text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="relative flex min-h-screen items-end overflow-hidden bg-[#05080c] px-6 pb-[clamp(4.5rem,10vh,8rem)] pt-28">
          <div className="absolute inset-0 bg-[#05080c]" />

          <div className="absolute bottom-[clamp(2rem,5vw,5rem)] right-[clamp(0rem,3vw,3rem)] top-[clamp(5.5rem,9vw,7.5rem)] w-[min(58vw,920px)] overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-90 saturate-[0.82]"
              src="/video/akelm-home-background.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            />
          </div>

          <div className="pointer-events-none absolute bottom-[clamp(2rem,5vw,5rem)] right-[clamp(0rem,3vw,3rem)] top-[clamp(5.5rem,9vw,7.5rem)] w-[min(58vw,920px)] shadow-[inset_0_0_130px_100px_rgba(5,8,12,0.96),0_0_130px_95px_rgba(5,8,12,1)]" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[min(82vw,1220px)] bg-[radial-gradient(circle_at_3%_52%,rgba(5,8,12,1)_0%,rgba(5,8,12,0.98)_15%,rgba(5,8,12,0.58)_34%,transparent_58%),radial-gradient(circle_at_100%_0%,rgba(5,8,12,1)_0%,rgba(5,8,12,0.9)_24%,transparent_54%),radial-gradient(circle_at_100%_100%,rgba(5,8,12,1)_0%,rgba(5,8,12,0.9)_24%,transparent_54%),linear-gradient(90deg,rgba(5,8,12,1)_0%,rgba(5,8,12,0.82)_18%,transparent_44%),linear-gradient(180deg,rgba(5,8,12,1)_0%,transparent_26%,transparent_72%,rgba(5,8,12,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_72%,rgba(163,22,33,0.24),transparent_28%),linear-gradient(90deg,rgba(5,8,12,0.98)_0%,rgba(5,8,12,0.86)_38%,rgba(5,8,12,0.42)_70%,rgba(5,8,12,0.92)_100%)]" />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end">
            <div className="max-w-4xl">
              <h1
                className={`${headingFont.className} text-[clamp(4.2rem,8.6vw,9.5rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em]`}
              >
                <span className="block">Tecnologia</span>
                <span className="block text-[#a31621]">para tua</span>
                <span className="block">empresa</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/74 sm:text-lg">
                De gestão de redes a desenvolvimento de softwares, temos a
solução certa para a tua empresa evoluir tecnologicamente.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#solucoes"
                  className="inline-flex items-center justify-center bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-[#081017] transition hover:-translate-y-1 hover:bg-[#a31621] hover:text-white"
                >
                  Conheça os serviços
                </Link>
                <Link
                  href="#contato"
                  className="inline-flex items-center justify-center border border-white/28 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:border-[#a31621] hover:text-[#ff4b55]"
                >
                  Falar com a Akelm
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="solucoes"
          className="relative bg-white text-[#071525]"
        >
          <div className="border-y border-[#d9e0e6] bg-[#e8ecef] px-6 py-3">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-2.5 overflow-hidden text-center">
              <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.32em] text-[#a31621]">
                Atuação
              </p>
              <div className="akelm-marquee relative w-full overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#e8ecef] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#e8ecef] to-transparent" />
                <div className="akelm-marquee-track flex w-max items-center gap-12">
                  {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
                    (item, index) => (
                      <div
                        key={`${item.label}-${index}`}
                        className="group flex min-w-[178px] items-center justify-center gap-3 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                      >
                        {item.content}
                        <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#7b8792] transition group-hover:text-[#071525]">
                          {item.label}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-28 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em]">
                Conheça nossos
              </p>
              <h2
                className={`${headingFont.className} mt-1 text-4xl font-medium uppercase leading-[0.98] tracking-[-0.03em]`}
              >
                Serviços
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-7 text-[#66717d]">
                Conheça nosso APP CargaViva Fretes, nosso sistema para gestão
                de consultórios AkelMed e nossos serviços dedicados.
              </p>
            </div>

            <div className="grid gap-1 md:grid-cols-2 xl:grid-cols-4">
              {solutionCards.map((card) => (
                <Link
                  key={card.number}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`group relative min-h-[278px] overflow-hidden p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_34px_80px_rgba(7,21,37,0.22)] ${card.className}`}
                >
                  {card.background ? (
                    <>
                      <Image
                        src={card.background}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 260px"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,12,0.18),rgba(5,8,12,0.76)),linear-gradient(90deg,rgba(5,8,12,0.62),rgba(5,8,12,0.18))]" />
                    </>
                  ) : null}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.16),transparent_28%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full min-h-[222px] flex-col justify-start">
                    <h3
                      className={`${headingFont.className} flex min-h-[4.7rem] items-end text-[1.55rem] font-bold uppercase leading-[0.98] tracking-[-0.02em] transition duration-300 group-hover:-translate-y-1`}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-5 text-sm font-semibold leading-6 opacity-82 transition duration-300 group-hover:opacity-100">
                      {card.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-[#071525] px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.45fr_0.55fr]">
            <div>
              <Image
                src="/images/akelmtecwhite-logo-4000.png"
                alt="Akelm Tecnologia"
                width={160}
                height={54}
              />
              <p className="mt-8 max-w-sm text-sm leading-7 text-white/72">
                Soluções tecnologicas como gestão de redes, desenvolvimento de sites e sistemas dedicados para empresas que desejam evoluir tecnologicamente ou facilitar a gestão da operação no dia a dia.
              </p>
              <p className="mt-8 text-xs leading-6 text-white/52">
                Akelm Tecnologia LTDA
                <br />
                CNPJ nº 65.563.745/0001-04
                <br />
                Caçapava do Sul - RS
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#ff4b55]">
                  Entre em contato
                </p>
                <div className="mt-6 space-y-4 text-sm text-white/78">
                  <p>arthur@akelm.com.br</p>
                  <p>+55 55 99917-1727</p>
                </div>
                <Link
                  href="https://wa.me/5555999171727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex bg-white px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#071525] transition hover:-translate-y-1 hover:bg-[#a31621] hover:text-white"
                >
                  Falar com a gente
                </Link>
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#ff4b55]">
                  Navegue
                </p>
                <div className="mt-5 divide-y divide-white/10">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-4 text-sm text-white/72 transition hover:text-[#ff4b55]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Akelm Tecnologia. Todos os direitos reservados.</p>
            <Link
              href="https://www.instagram.com/akelmtecnologia/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#ff4b55]"
            >
              Instagram
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
