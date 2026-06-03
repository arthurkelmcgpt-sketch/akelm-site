import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Oswald } from "next/font/google";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OfficeAssessment from "./escritorio/OfficeAssessment";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";
const pageBackground = "/images/cargaviva/bkgd-cargaviva.png";
const playStoreUrl =
  "https://play.google.com/store/apps/details?id=br.com.akelm.cargavivafretes";

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
    "Olá, quero saber mais sobre o lançamento do CargaViva Fretes.";

  return `https://wa.me/5555999171727?text=${encodeURIComponent(message)}`;
};

type PreviewBox = {
  body: string;
  detail: string;
  title: string;
};

const previewBoxes: PreviewBox[] = [
  {
    body: "Cadastre-se e comece a usar o CargaViva Fretes.",
    detail:
      "Faça o cadastro inicial para acessar a plataforma. Após criar o perfil, você pode começar a solicitar fretes. Cadastre um caminhão e você poderá receber propostas de fretes compatíveis com os limites que definiu.",
    title: "Cadastro",
  },
  {
    body: "Acesse a aba de solicitações e preencha os detalhes do frete.",
    detail:
      "Basta colocar seus dados, detalhes da carga e selecionar origem e destino no mapa para que o aplicativo encontre os motoristas mais próximos e compatíveis com a sua demanda. Se você for caminhoneiro, sempre que for selecionado para um frete receberá instantaneamente uma notificação para analisar cada detalhe e fazer sua proposta.",
    title: "Solicitação",
  },
  {
    body: "Aceite ou renegocie a proposta, e depois disso o transporte será confirmado.",
    detail:
      "Ao receber uma proposta, o solicitante pode aceitar ou renegociar com o motorista. O motorista pode ajustar o valor ou recusar a solicitação. Depois de acertados os valores, o solicitante faz o pagamento via código Pix copia e cola no app de banco. Para segurança de ambas as partes, o valor fica retido até a conclusão do frete.",
    title: "Confirmação e pagamento",
  },
  {
    body: "O caminhoneiro dará início ao transporte e o cliente poderá acompanhar o rastreamento.",
    detail:
      "Com o frete confirmado, o motorista pode iniciar a operação. O cliente tem acesso ao rastreamento em tempo real para acompanhar o progresso e a localização do seu rebanho. O motorista tem acesso à tela de navegação que o guiará até origem e destino.",
    title: "Transporte em andamento",
  },
  {
    body: "Após o término do frete, o motorista encerra no app e o cliente avalia o serviço prestado.",
    detail:
      "Depois de concluído o transporte, o motorista registra o encerramento do frete no aplicativo, e o cliente avalia a experiência. A avaliação ajuda a criar uma reputação confiável para o motorista e também é o gatilho para liberar o pagamento. Caso o cliente não avalie em até 24 horas após o encerramento, o pagamento é liberado automaticamente. O motorista também pode acionar o suporte para solicitar liberação imediata, caso esteja tudo certo.",
    title: "Conclusão e avaliação",
  },
] as const;

const capabilityItems = [
  {
    icon: "route",
    text: "Solicitação de frete com origem, destino, carga e observações.",
  },
  {
    icon: "drivers",
    text: "Matching de motoristas compatíveis com a demanda.",
  },
  {
    icon: "proposal",
    text: "Propostas, renegociação de valores e confirmação do transporte.",
  },
  {
    icon: "payment",
    text: "Pagamento seguro via Pix com valor retido até a conclusão.",
  },
  {
    icon: "tracking",
    text: "Rastreamento ao vivo do motorista durante o frete.",
  },
  {
    icon: "chat",
    text: "Chat interno, notificações e histórico da solicitação.",
  },
];

const audienceItems = [
  {
    number: "1.",
    text: "Pecuaristas que precisam contratar fretes de animais com mais segurança e menos correria.",
  },
  {
    number: "2.",
    text: "Caminhoneiros que querem receber oportunidades compatíveis com sua disponibilidade e área de atuação.",
  },
  {
    number: "3.",
    text: "Escritórios, assessorias e equipes que organizam fretes para clientes e precisam centralizar informações.",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  const commonProps = {
    "aria-hidden": true,
    className: "h-9 w-9",
    fill: "none",
    viewBox: "0 0 48 48",
  };

  if (type === "route") {
    return (
      <svg {...commonProps}>
        <path d="M13 35c0-8 22-5 22-19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 5" />
        <path d="M13 14a6 6 0 1 0 0 .1M35 34a6 6 0 1 0 0 .1" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  if (type === "drivers") {
    return (
      <svg {...commonProps}>
        <circle cx="18" cy="17" r="5" stroke="currentColor" strokeWidth="3" />
        <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="3" opacity="0.55" />
        <path d="M8 36c2-7 18-7 20 0M27 35c2-5 10-5 13 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "proposal") {
    return (
      <svg {...commonProps}>
        <rect x="10" y="8" width="28" height="32" rx="4" stroke="currentColor" strokeWidth="3" />
        <path d="M17 18h14M17 25h14M17 32h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M33 31l3 3 6-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "payment") {
    return (
      <svg {...commonProps}>
        <rect x="8" y="13" width="32" height="22" rx="4" stroke="currentColor" strokeWidth="3" />
        <path d="M8 20h32M18 29h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M33 28l3 3 6-7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "tracking") {
    return (
      <svg {...commonProps}>
        <path d="M24 42s13-12 13-24a13 13 0 1 0-26 0c0 12 13 24 13 24Z" stroke="currentColor" strokeWidth="3" />
        <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M10 12h28v20H20l-8 7v-7h-2V12Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M17 20h14M17 26h9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  applicationCategory: "BusinessApplication",
  description:
    "CargaViva Fretes é uma plataforma para modernizar o transporte de animais, conectando clientes e motoristas em uma jornada digital com mais segurança, visibilidade e confiança.",
  name: "CargaViva Fretes",
  operatingSystem: "Android, iOS, Web",
  url: `${siteUrl}/cargaviva`,
};

export const metadata: Metadata = {
  title: "CargaViva Fretes",
  description:
    "CargaViva Fretes é uma plataforma para organizar o transporte de animais com mais segurança, visibilidade e confiança.",
  alternates: {
    canonical: "/cargaviva",
  },
  openGraph: {
    title: "CargaViva Fretes",
    description:
      "Tecnologia para organizar o transporte de animais com mais segurança, visibilidade e confiança.",
    images: [
      {
        alt: "Identidade visual do CargaViva Fretes",
        height: 1920,
        url: "/images/cargaviva/oferecimento.png",
        width: 1080,
      },
    ],
    type: "website",
    url: "/cargaviva",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "CargaViva Fretes, plataforma para modernizar o transporte de animais.",
    images: ["/images/cargaviva/oferecimento.png"],
    title: "CargaViva Fretes",
  },
};

export default function CargaVivaPage() {
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
        <section className="relative flex min-h-[78vh] items-end overflow-hidden px-6 pb-20 pt-28 text-white">
          <Image
            src={pageBackground}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,6,0.94)_0%,rgba(2,10,6,0.64)_42%,rgba(2,10,6,0.18)_100%),linear-gradient(180deg,rgba(2,10,6,0.2)_0%,rgba(2,10,6,0.72)_100%)]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <Image
              src="/images/cargaviva/logo-horizontal-light.png"
              alt="CargaViva Fretes"
              width={260}
              height={92}
              className="mb-8 h-auto w-52 object-contain"
              priority
            />
            <h1
              className={`${headingFont.className} max-w-4xl text-[clamp(3.8rem,8.2vw,8.4rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em]`}
            >
              cONTRATE E OFEREÇA 
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/78 sm:text-lg">
              Segurança e praticidade para quem precisa de fretes, mais demanda
              e visibilidade para os caminhoneiros autônomos.
            </p>
          </div>
          <div className="absolute bottom-8 right-6 z-10 flex flex-col gap-3 sm:right-10 lg:right-16">
            <Link
              href="#teste-interativo"
              className="inline-flex items-center justify-center border border-white/20 bg-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:-translate-y-1 hover:border-[#ca6702] hover:bg-[#ca6702]"
            >
              Teste interativo
            </Link>
            <Link
              href="#downloads"
              className="inline-flex items-center justify-center border border-white/20 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#08281c] transition hover:-translate-y-1 hover:bg-[#ca6702] hover:text-white"
            >
              Downloads
            </Link>
          </div>
        </section>

        <section className="bg-[#f5efe2] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.34fr_0.66fr]">
            <h2
              className={`${headingFont.className} text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
            >
              O que é o CargaViva Fretes?
            </h2>
            <div className="grid gap-8 text-sm font-medium leading-7 text-[#23463a] md:grid-cols-2">
              <p>
                Você pecuarista, já se encontrou na situação de precisar
                transportar seu rebanho e perder tempo correndo atrás de
                caminhoneiros? E você motorista, já teve dificuldade para
                encontrar demanda por não conseguir chegar até os clientes?
              </p>
              <div>
                <p>
                  Seja você cliente ou motorista, o CargaViva Fretes é a sua
                  nova ferramenta para conectar quem precisa contratar fretes e
                  quem oferece transporte.
                </p>
                <a
                  className="mt-7 inline-flex bg-[#ca6702] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-[#1b4332]"
                  href={buildWhatsAppLink()}
                  rel="noreferrer"
                  target="_blank"
                >
                  Saiba mais sobre o CargaViva Fretes
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
            <div>
              <p className="text-sm uppercase leading-6 tracking-[0.02em] text-[#ca6702]">
                Veja na prática
              </p>
              <h2
                className={`${headingFont.className} mt-3 text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
              >
                Como solicitar um frete
              </h2>
              <p className="mt-6 text-sm font-medium leading-7 text-[#49645a]">
                Basta preencher os dados básicos do frete e o aplicativo lhe mostrará os caminhoneiros compatíveis.
              </p>
            </div>

            <div className="relative overflow-hidden bg-[#0d3b2a] shadow-[0_30px_90px_rgba(13,59,42,0.2)]">
              <div className="relative aspect-square w-full">
                <video
                  autoPlay
                  className="h-full w-full object-contain object-center"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source
                    src="/video/cargaviva-como-ser-solicitante-web.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 pb-24">
          <div className="mx-auto max-w-7xl">
            <h2
              className={`${headingFont.className} max-w-3xl text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
            >
              Com o CargaViva Fretes, você terá:
            </h2>

            <div className="mt-14 grid gap-x-20 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {capabilityItems.map((item) => (
                <div key={item.text} className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center text-[#ca6702]">
                    <CapabilityIcon type={item.icon} />
                  </div>
                  <p className="pt-2 text-sm font-medium leading-7 text-[#23463a]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p
              className={`${headingFont.className} mt-16 text-center text-4xl font-bold uppercase tracking-[-0.03em] text-[#ca6702]`}
            >
              E muito mais...
            </p>
          </div>
        </section>

        <section className="bg-white px-6 pb-24">
          <div className="mx-auto max-w-7xl">
            <h2
              className={`${headingFont.className} text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
            >
              Como funciona o fluxo do frete?
            </h2>
            <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-[#49645a]">
              
            </p>

            <div className="mt-12 grid gap-1 md:grid-cols-2 xl:grid-cols-5">
              {previewBoxes.map((item, index) => (
                <article
                  key={item.title}
                  className={[
                    "min-h-[320px] p-7",
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
                  <h3
                    className={`${headingFont.className} mt-10 text-3xl font-bold uppercase leading-none tracking-[-0.04em]`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm font-semibold leading-6 opacity-82">
                    {item.body}
                  </p>
                  <p className="mt-5 text-xs font-medium leading-6 opacity-68">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 pb-24">
          <div className="mx-auto max-w-7xl">
            <h2
              className={`${headingFont.className} text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
            >
              Para quem o CargaViva é indicado?
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {audienceItems.map((item) => (
                <div key={item.number}>
                  <span
                    className={`${headingFont.className} text-4xl font-bold text-[#ca6702]`}
                  >
                    {item.number}
                  </span>
                  <p className="mt-7 text-sm font-medium leading-7 text-[#23463a]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="teste-interativo"
          className="relative overflow-hidden bg-[#ca6702] px-6 py-24 text-[#08281c]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,255,255,0.2),transparent_28%),linear-gradient(90deg,rgba(202,103,2,1)_0%,rgba(202,103,2,0.94)_48%,rgba(27,67,50,0.22)_100%)]" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#1b4332]">
                Teste interativo
              </p>
              <h2
                className={`${headingFont.className} mt-4 max-w-2xl text-5xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-6xl`}
              >
                Veja como o CargaViva pode ajudar no seu caso
              </h2>
              <p className="mt-7 max-w-xl text-sm font-semibold leading-7 text-[#163126]">
                Responda algumas perguntas rápidas sobre a sua operação e gere
                um relatório completo mostrando como o CargaViva pode lhe ajudar
                no dia a dia.
              </p>
              <p className="mt-6 text-sm font-semibold leading-7 text-[#163126]/75">
                Ao final, você poderá baixar o relatório em PDF e entender quais
                recursos fazem mais sentido para o seu perfil.
              </p>
            </div>

            <div className="rounded-none bg-[#f5efe2] p-4 shadow-[0_28px_90px_rgba(8,40,28,0.18)] md:p-6">
              <OfficeAssessment compact />
            </div>
          </div>
        </section>

        <section id="downloads" className="bg-[#f5efe2] px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
            <div>
              <h2
                className={`${headingFont.className} text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
              >
                Baixe o aplicativo
              </h2>
              <p className="mt-6 text-sm font-medium leading-7 text-[#49645a]">
                Acesse pelo celular na Google Play ou baixe a versão desktop
                para Windows.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                className="flex min-h-[130px] items-center gap-5 bg-[#1b4332] px-8 py-7 text-white transition hover:-translate-y-1 hover:bg-[#24533f]"
                href={playStoreUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src="/images/cargaviva/google-play-icon.png"
                  alt="Google Play"
                  width={42}
                  height={42}
                  className="h-11 w-11 object-contain"
                />
                <span>
                  <span className="block text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">
                    Celular
                  </span>
                  <span className="mt-2 block text-2xl font-extrabold">
                    Google Play
                  </span>
                </span>
              </a>

              <Link
                className="flex min-h-[130px] items-center gap-5 bg-[#ca6702] px-8 py-7 text-white transition hover:-translate-y-1 hover:bg-[#ee9b00]"
                href="/cargaviva/download/desktop"
              >
                <Image
                  src="/images/cargaviva/desktop-icon.png"
                  alt="Windows desktop"
                  width={46}
                  height={46}
                  className="h-12 w-12 object-contain"
                />
                <span>
                  <span className="block text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                    Desktop
                  </span>
                  <span className="mt-2 block text-2xl font-extrabold">
                    Windows
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center bg-[#1b4332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24533f]"
              href={buildWhatsAppLink()}
              rel="noreferrer"
              target="_blank"
            >
              Saiba mais sobre o CargaViva Fretes
            </a>
            <a
              className="inline-flex items-center justify-center border border-[#d7d1c2] bg-white px-5 py-3 text-sm font-semibold text-[#163126] transition hover:border-[#ca6702]/40 hover:bg-[#fff7ed]"
              href="mailto:arthur@akelm.com.br"
            >
              Falar com a Akelm
            </a>
            <Link
              className="inline-flex items-center justify-center border border-[#1b4332]/12 bg-white px-5 py-3 text-sm font-semibold text-[#1b4332] transition hover:border-[#1b4332]/25 hover:bg-[#f8fbf8]"
              href="/cargaviva/termosdeuso"
            >
              Ver termos de uso
            </Link>
            <Link
              className="inline-flex items-center justify-center border border-[#1b4332]/12 bg-white px-5 py-3 text-sm font-semibold text-[#1b4332] transition hover:border-[#1b4332]/25 hover:bg-[#f8fbf8]"
              href="/cargaviva/politicadeprivacidade"
            >
              Ver política de privacidade
            </Link>
            <Link
              className="inline-flex items-center justify-center border border-[#1b4332]/12 bg-white px-5 py-3 text-sm font-semibold text-[#1b4332] transition hover:border-[#1b4332]/25 hover:bg-[#f8fbf8]"
              href="/cargaviva/testeinterativo"
            >
              Fazer teste interativo
            </Link>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </>
  );
}
