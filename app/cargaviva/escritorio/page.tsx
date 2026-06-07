import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Oswald } from "next/font/google";
import {
  ClipboardCheck,
  FileSearch,
  MapPinned,
  Route,
  ShieldCheck,
  Tags,
  UsersRound,
} from "lucide-react";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OfficeAssessment from "./OfficeAssessment";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";
const pageBackground = "/images/cargaviva/bkgd-cargaviva.png";
const presentationVideo =
  "/video/cargaviva-escritorio-apresentacao.mp4";

const headingFont = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const officeBenefits = [
  {
    icon: ClipboardCheck,
    title: "Solicite fretes",
    text: "Preencha as informações da solicitação e o aplicativo entregará a lista de caminhoneiros aptos a atender o frete. Após selecionar o motorista, o mesmo irá enviar uma proposta de valor que poderá ser aceita ou renegociada. Após o aceite da proposta o solicitante deverá efetuar o pagamento para confirmar o frete. O valor pago ficará retido em segurança até que o frete seja concluído, sendo repassado ao motorista após a finalização do serviço.  ",
  },
  {
    icon: UsersRound,
    title: "Escritório, clientes e motoristas em sintonia",
    text: "Com o CargaViva não há informações e tratativas espalhadas em conversas de whatsapp, anotações, planilhas ou até mesmo dependendo da memória de alguém. Toda a informação sobre os fretes estarão no sistema para que sejam consultadas por quem precisa, no momento que for preciso. Além disso, a comunicação entre ambas as partes são feitas dentro do aplicativo pelo chat interno vinculado a cada solicitação.",
  },
  {
    icon: MapPinned,
    title: "Rastreamento e segurança",
    text: "O motorista só pode iniciar o transporte estando com a localização ativada, e caso desabilite em qualquer momento durante o transporte, o aplicativo bloqueia qualquer ação até que seja reabilitada. Também é enviado um aviso ao solicitante contendo a informação, a ultima coordenada registrada e horário. Sendo assim, o rastreio fica disponível durante toda a jornada, mesmo quando o motorista estiver passando por uma região sem cobertura de internet através do rastreio offline. Além disso, o motorista só consegue finalizar o transporte estando dentro de um raio de 500 metros do local de destino marcado na solicitação. Ou seja, quando o cliente questionar onde está sua carga, você não terá trabalho nem dificuldade para informar.",
  },
  {
    icon: FileSearch,
    title: "Histórico para conferência",
    text: "Se sua equipe precisar consultar informações sobre fretes passados, seja por qual motivo for, com o CargaViva você estará amparado. A solicitação é salva com os dados de origem, destino e carga; Informações do caminhoneiro e solicitante envolvidos; Tratativas de valor e pagamento; Conversas trocadas no chat interno; Linha do tempo com data e horário em que cada etapa do processo foi realizada. ",
  },
] as const;

const officeHighlights = [
  "Centralize pedidos que hoje ficam espalhados no WhatsApp.",
  "Acompanhe status, motorista, documentação e pagamento em um só fluxo.",
  "Tenha um histórico completo de cada frete para consultar quando precisar.",
  "Gere mais confiança para seus clientes com rastreamento em tempo real da carga.",
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  description:
    "Apresentação dedicada do CargaViva Fretes para escritórios e operações de apoio.",
  name: "CargaViva Fretes para Escritórios",
  url: `${siteUrl}/cargaviva/escritorio`,
};

export const metadata: Metadata = {
  title: "CargaViva para Escritórios",
  description:
    "Página dedicada do CargaViva Fretes para escritórios, operações administrativas e fluxos de apoio.",
  alternates: {
    canonical: "/cargaviva/escritorio",
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
    url: "/cargaviva/escritorio",
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
      <Navbar variant="hero" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main
        className={`${bodyFont.className} min-h-screen overflow-hidden bg-[#061b10] text-[#062018]`}
      >
        <section className="relative flex min-h-screen items-end overflow-hidden bg-[#03170d] px-6 pb-20 pt-28 text-white">
          <Image
            src={pageBackground}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,6,0.94)_0%,rgba(2,10,6,0.68)_48%,rgba(2,10,6,0.24)_100%),linear-gradient(180deg,rgba(2,10,6,0.2)_0%,rgba(2,10,6,0.75)_100%)]" />
          <div className="absolute right-[10%] top-[22%] hidden h-44 w-44 rounded-full border border-[#ca6702]/30 bg-[#ca6702]/10 blur-[1px] cargaviva-presentation-orbit lg:block" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
            <div>
              <Image
                src="/images/cargaviva/logo-horizontal-light.png"
                alt="CargaViva Fretes"
                width={260}
                height={92}
                priority
                className="mb-8 h-auto w-52 object-contain sm:w-60"
              />
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ca6702]">
                CargaViva para escritórios
              </p>
              <h1
                className={`${headingFont.className} mt-5 max-w-5xl text-[clamp(3rem,7.1vw,7.2rem)] font-bold uppercase leading-[0.95] tracking-[-0.05em] text-white`}
              >
                Sistema de gestão para centralizar todas as informações de fretes.
              </h1>
              <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/78 sm:text-lg">
                O CargaViva Fretes ajuda escritórios, assessorias e equipes
                administrativas a organizar solicitações, motoristas, status,
                pagamentos, documentação e rastreamento em um único lugar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#teste"
                  className="inline-flex bg-[#ca6702] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-[#ee9b00]"
                >
                  Fazer teste
                </a>
                <a
                  href="#video"
                  className="inline-flex border border-white/20 bg-white/10 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:-translate-y-1 hover:border-[#ca6702] hover:bg-[#ca6702]"
                >
                  Ver apresentação
                </a>
              </div>
            </div>

            <div className="grid gap-3 lg:pb-4">
              {officeHighlights.map((item, index) => (
                <div
                  key={item}
                  className={[
                    "cargaviva-presentation-sheen border border-white/10 bg-white/10 p-5 text-white shadow-[0_22px_60px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-[#ca6702]/55 hover:bg-[#ca6702]/18",
                    index % 2 === 1 ? "lg:ml-8" : "",
                  ].join(" ")}
                >
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-[#ca6702]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-white/86">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="video" className="bg-[#f5efe2] px-6 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto grid w-full max-w-[1700px] gap-10 lg:grid-cols-[minmax(340px,480px)_minmax(0,1fr)] lg:items-center">
            <div className="max-w-[480px]">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ca6702]">
                Com o cargaviva...
              </p>
              <h2
                className={`${headingFont.className} mt-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a] sm:text-6xl`}
              >
                O escritório sai do improviso e ganha previsibilidade.
              </h2>
              <p className="mt-6 text-sm font-medium leading-7 text-[#49645a]">
                Em vez de controlar fretes por conversas, ligações e anotações,
                o escritório passa a ter um caminho mais claro para registrar
                demanda, encontrar motoristas, acompanhar transporte e consultar
                histórico.
              </p>
            </div>

            <div className="w-full justify-self-end overflow-hidden border border-[#d8e0da] bg-[#07391f] p-1 shadow-[0_28px_80px_rgba(27,67,50,0.12)]">
              <video
                className="aspect-video w-full object-cover"
                src={presentationVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Apresentação do CargaViva para escritórios"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#102f23] px-6 py-24 text-white sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ca6702]">
                Para o escritório
              </p>
              <h2
                className={`${headingFont.className} mt-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-6xl`}
              >
                Onde o CargaViva entra no dia a dia?
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {officeBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="border border-white/10 bg-white/8 p-6 shadow-[0_22px_55px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-[#ca6702]/50 hover:bg-white/12"
                  >
                    <span className="flex h-12 w-12 items-center justify-center bg-[#CA6702] text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-2xl font-bold tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-7 text-white/74 sm:text-base">
                      {benefit.text}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 grid gap-1 lg:grid-cols-[0.38fr_0.62fr]">
              <div className="bg-[#ca6702] p-7 text-white">
                <Tags className="h-10 w-10" />
                <h3
                  className={`${headingFont.className} mt-8 text-4xl font-bold uppercase leading-none tracking-[-0.04em]`}
                >
                  A ideia é trazer organização e controle para uma demanda que ainda carece de registros formais.
                </h3>
              </div>
              <div className="border border-white/10 bg-[#03170d]/42 p-7 shadow-[0_22px_55px_rgba(0,0,0,0.14)]">
                <p className="text-sm font-medium leading-7 text-white/78 sm:text-base">
                  A proposta não é substituir o relacionamento do escritório com
                  clientes e motoristas. É dar uma camada de organização,
                  rastreabilidade e segurança para que esse relacionamento fique
                  mais fácil de operar, especialmente com recursos de busca,
                  tags, painéis e acompanhamento das solicitações abertas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="teste"
          className="relative overflow-hidden bg-[#ca6702] px-6 py-24 text-[#08281c] sm:px-8 lg:px-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,255,255,0.2),transparent_28%),linear-gradient(90deg,rgba(202,103,2,1)_0%,rgba(202,103,2,0.94)_48%,rgba(27,67,50,0.22)_100%)]" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#1b4332]">
                Diagnóstico interativo
              </p>
              <h2
                className={`${headingFont.className} mt-4 max-w-2xl text-5xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-6xl`}
              >
                Veja como o CargaViva pode ajudar o seu escritório
              </h2>
              <p className="mt-7 max-w-xl text-sm font-semibold leading-7 text-[#163126]">
                Responda algumas perguntas rápidas sobre a operação e gere um
                relatório mostrando quais recursos do CargaViva fazem mais
                sentido para o seu caso.
              </p>
              <p className="mt-6 text-sm font-semibold leading-7 text-[#163126]/75">
                O relatório pode ser baixado em PDF ao final do teste.
              </p>
            </div>

            <div className="bg-[#f5efe2] p-4 shadow-[0_28px_90px_rgba(8,40,28,0.18)] md:p-6">
              <OfficeAssessment compact />
            </div>
          </div>
        </section>

        <section className="bg-[#f5efe2] px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ca6702]">
                Escritório, vamos conversar?
              </p>
              <h2
                className={`${headingFont.className} mt-3 text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
              >
                Quer conversar sobre a implantação?
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/5555999171727?text=Ol%C3%A1%2C%20quero%20entender%20o%20CargaViva%20para%20escrit%C3%B3rios."
                target="_blank"
                rel="noreferrer"
                className="inline-flex bg-[#1b4332] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-[#ca6702]"
              >
                Falar com a Akelm
              </a>
              <Link
                href="/cargaviva"
                className="inline-flex border border-[#1b4332]/18 bg-white px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#1b4332] transition hover:-translate-y-1 hover:border-[#ca6702] hover:text-[#ca6702]"
              >
                Página principal
                <Route className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </>
  );
}
