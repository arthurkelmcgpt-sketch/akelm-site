import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardCheck,
  FileSearch,
  MapPinned,
  MonitorCheck,
  Route,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";
const youtubeEmbedUrl = "";

const officeBenefits = [
  {
    icon: ClipboardCheck,
    title: "Pedidos organizados",
    text: "O escritório deixa de depender de mensagens soltas e passa a acompanhar cada solicitação com origem, destino, carga, motorista e status.",
  },
  {
    icon: UsersRound,
    title: "Clientes e motoristas no mesmo fluxo",
    text: "A equipe consegue orientar clientes e motoristas sem perder o histórico de propostas, confirmações e ajustes importantes.",
  },
  {
    icon: MapPinned,
    title: "Mais visibilidade durante o transporte",
    text: "O rastreamento ajuda o escritório a responder dúvidas com mais segurança e acompanhar entregas em andamento.",
  },
  {
    icon: FileSearch,
    title: "Histórico para conferência",
    text: "Registros de status, avaliação, pagamento e conclusão facilitam auditoria, suporte e conferência posterior.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  description:
    "Apresentação dedicada do CargaViva Fretes para escritórios e operações de apoio.",
  name: "CargaViva Fretes para Escritórios",
  url: `${siteUrl}/cargaviva/escrit%C3%B3rio`,
};

export const metadata: Metadata = {
  title: "CargaViva para Escritórios",
  description:
    "Página dedicada do CargaViva Fretes para escritórios, operações administrativas e fluxos de apoio.",
  alternates: {
    canonical: "/cargaviva/escritório",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "CargaViva para Escritórios",
    description:
      "Apresentação dedicada do CargaViva Fretes para escritórios e operações administrativas.",
    images: [
      {
        alt: "Identidade visual do CargaViva Fretes",
        height: 876,
        url: "/images/cargaviva/cargaviva-capa.png",
        width: 1794,
      },
    ],
    type: "website",
    url: "/cargaviva/escritório",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Apresentação dedicada do CargaViva Fretes para escritórios e operações administrativas.",
    images: ["/images/cargaviva/cargaviva-capa.png"],
    title: "CargaViva para Escritórios",
  },
};

export default function CargaVivaOfficePage() {
  return (
    <>
      <Navbar variant="light" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-[#f8faf7] text-[#1B4332]">
        <section className="relative isolate min-h-[88vh] overflow-hidden bg-[#03170d] px-5 pb-14 pt-28 text-white sm:px-8 lg:px-10">
          <Image
            src="/images/cargaviva/cargaviva-capa.png"
            alt="CargaViva Fretes"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(3,23,13,0.96) 0%, rgba(3,23,13,0.84) 38%, rgba(3,23,13,0.42) 100%)",
            }}
          />

          <div className="relative z-10 mx-auto flex min-h-[calc(88vh-7rem)] max-w-7xl flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f6a63a]">
              CargaViva para escritórios
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold sm:text-6xl lg:text-7xl">
              Uma central para organizar fretes, clientes e motoristas.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              O CargaViva Fretes conecta clientes que precisam transportar
              animais a motoristas qualificados. Para escritórios, ele ajuda a
              transformar solicitações soltas em um fluxo operacional mais
              claro, rastreável e fácil de acompanhar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/cargaviva/testeinterativo"
                className="inline-flex items-center gap-2 rounded-full bg-[#CA6702] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b85f02]"
              >
                Iniciar teste
                <Route className="h-4 w-4" />
              </Link>
              <Link
                href="/cargaviva"
                className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Página principal
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#CA6702]">
                Visão geral
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1B4332] sm:text-5xl">
                O CargaViva organiza uma etapa que hoje costuma ficar espalhada.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#52625a]">
                Em vez de controlar fretes por conversas, ligações e anotações,
                o escritório passa a ter um caminho mais claro para registrar
                demanda, encontrar motoristas, acompanhar transporte e consultar
                histórico.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#dde5df] bg-[#f8faf7] p-4 shadow-[0_22px_60px_rgba(27,67,50,0.08)] sm:p-5">
              {youtubeEmbedUrl ? (
                <iframe
                  className="aspect-video w-full rounded-[1rem]"
                  src={youtubeEmbedUrl}
                  title="CargaViva para escritórios"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="flex aspect-video w-full flex-col items-center justify-center rounded-[1rem] border border-dashed border-[#9caf9f] bg-white px-6 text-center">
                  <MonitorCheck className="h-10 w-10 text-[#1B4332]" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#CA6702]">
                    Vídeo em breve
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#52625a]">
                    O espaço já está preparado para receber o link do YouTube e
                    reproduzir o vídeo diretamente nesta página.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#102f23] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f6a63a]">
                Para o escritório
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
                Onde o CargaViva entra no dia a dia.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {officeBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="rounded-[1.25rem] border border-white/10 bg-white/8 p-5 shadow-[0_22px_55px_rgba(0,0,0,0.16)] backdrop-blur sm:p-6"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CA6702] text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/74 sm:text-base">
                      {benefit.text}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-[#03170d]/42 p-5 text-white shadow-[0_22px_55px_rgba(0,0,0,0.14)] sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1B4332]">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <p className="text-sm leading-7 text-white/78 sm:text-base">
                  A proposta não é substituir o relacionamento do escritório com
                  clientes e motoristas. É dar uma camada de organização,
                  rastreabilidade e segurança para que esse relacionamento fique
                  mais fácil de operar.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/8 p-6 shadow-[0_22px_55px_rgba(0,0,0,0.16)] backdrop-blur sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f6a63a]">
                Próximo passo
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Faça o teste interativo do CargaViva
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/76 sm:text-base">
                Criamos uma página exclusiva para o diagnóstico interativo. Ela
                é o espaço onde vamos evoluir o questionário, as ramificações e
                o relatório final personalizado para cada perfil.
              </p>
              <div className="mt-6">
                <Link
                  href="/cargaviva/testeinterativo"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1B4332] transition hover:bg-[#fff3e6]"
                >
                  Abrir página do teste
                  <Route className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </>
  );
}
