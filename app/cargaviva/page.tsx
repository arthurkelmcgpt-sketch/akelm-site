import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ScrollMotion from "@/components/ScrollMotion/ScrollMotion";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";
const pageBackground = "/images/cargaviva/bkgd-cargaviva.png";

const buildWhatsAppLink = () => {
  const message =
    "Olá, quero saber mais sobre o lançamento do CargaViva Fretes.";

  return `https://wa.me/55999171727?text=${encodeURIComponent(message)}`;
};

const earlyAccessFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSeDhNWwvRLLAVMvU3pv43vbc3-3zuQ4EexbpS5HJJ7OWGF94A/viewform?usp=dialog";

type PreviewBox = {
  align: "left" | "right";
  body: string;
  detail: string;
  tone: "dark" | "light";
  title: string;
};

const previewBoxes: PreviewBox[] = [
  {
    align: "left",
    body: "Cadastre-se e comece a usar o CargaViva Fretes.",
    detail:
      "Faça o cadastro inical para acessar a plataforma, após criado o perfil, você pode começar a solicitar fretes. Cadastre um caminhão e você poderá receber propostas de fretes compatíveis com os limites que você definiu.",
    title: "Cadastro",
    tone: "dark",
  },
  {
    align: "right",
    body: "Acesse a aba de solicitações e preencha os detalhes do frete.",
    detail:
      "Basta colocar seus dados, detalhes da carga e selecionar origem e destino no mapa para que o aplicativo encontre os motoristas mais próximos e compatíveis com a sua demanda. Se você for caminhoneiro, sempre que você for selecionado para um frete receberá instantaneamente uma notificação para analisar cada detalhe e fazer sua proposta.",
    title: "Solicitação",
    tone: "light",
  },
  {
    align: "left",
    body: "Aceite ou renegocie a proposta, e depois disso o transporte será confirmado.",
    detail:
      "Ao receber uma proposta o solicitante pode aceitar, ou então renegociar com o motorista. O motorista pode ajustar o valor ou então recusar a solicitação. Depois de acertados os valores, o solicitante deverá fazer o pagamento via código pix copia e cola no seu APP de banco, para segurança de ambas as partes o valor fica retido até a conclusão do frete.",
    title: "Confirmação e pagamento",
    tone: "dark",
  },
  {
    align: "right",
    body: "O caminhoneiro dará inicio ao transporte e o cliente poderá acompanhar o rastreamento.",
    detail:
      "Com o frete confirmado, o motorista pode iniciar a operação. O cliente tem acesso a um rastreamento em tempo real para acompanhar o progresso e a localização do seu rebanho. O motorista tem acesso à tela de navegação que o guiará até origem e destino.",
    title: "Transporte em andamento",
    tone: "light",
  },
  {
    align: "left",
    body: "Após o término do frete, o motorista irá encerra-lo no APP e o cliente deverá avaliar o serviço prestado.",
    detail:
      "Depois de concluído o transporte, o motorista deve registrar o encerramento do frete no aplicativo, e o cliente deverá avaliar a experiência. A avaliação não apenas ajuda a criar uma reputação confiável para o motorista, mas também é o gatilho para liberar o pagamento. Caso o cliente não faça a avaliação em até 24 horas após o encerramento, o pagamento é liberado automaticamente, e o motorista também pode neste meio tempo entrar em contato com o suporte solicitando a liberação imediata, dessa forma nossa equipe irá analisar e caso esteja tudo certo, liberamos o pagamento.",
    title: "Conclusão e avaliação",
    tone: "dark",
  },
  
] as const;

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
  title: "CargaViva Fretes | Em breve",
  description:
    "CargaViva Fretes é uma plataforma para organizar o transporte de animais com mais segurança, visibilidade e confiança. Página oficial em breve.",
  alternates: {
    canonical: "/cargaviva",
  },
  openGraph: {
    title: "CargaViva Fretes | Em breve",
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
      "Página em breve do CargaViva Fretes, plataforma para modernizar o transporte de animais.",
    images: ["/images/cargaviva/oferecimento.png"],
    title: "CargaViva Fretes | Em breve",
  },
};

export default function CargaVivaPage() {
  return (
    <>
      <Navbar variant="light" />
      <ScrollMotion />

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
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,6,0.18)_0%,rgba(2,10,6,0.32)_100%)]"
        />

        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="flex flex-col items-center justify-center lg:items-center">
              <span className="inline-flex w-fit items-center rounded-full border border-[#e37c01]/12 bg-[#e37c01]/8 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#e37c01]">
                Já disponível
              </span>

              <h1 className="mt-5 max-w-xl text-center text-3xl font-semibold tracking-[-0.04em] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.02]">
                Apresentamos o CargaViva Fretes
              </h1>

              <div className="order-3 mt-6 w-full max-w-[500px]">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-black/15 shadow-[0_28px_70px_rgba(22,49,38,0.2)]">
                  <div className="relative aspect-square w-full">
                      <video
                        autoPlay
                        className="h-full w-full object-cover object-center"
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

              <div className="order-2 mt-5 w-full max-w-[500px] rounded-[1.55rem] border border-[#ddd7cb] bg-white/92 p-4 text-center shadow-[0_18px_45px_rgba(27,67,50,0.05)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#9f5304]">
                  Segurança e praticidade para quem precisa de fretes, mais demanda e visibilidade para os motoristas.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f6d66]">
                  Você pecuarista, já se encontrou na situação de precisar transportar seu rebanho e perder tempo correndo atrás de caminhoneiros? E você motorista, já teve dificulde para encontrar demanda por não conseguir chegar até os clientes? Seja você cliente ou motorista, o CargaViva Fretes é a sua nova ferramenta!
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div
                className="relative overflow-visible rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-[0_18px_50px_rgba(2,10,6,0.12)] backdrop-blur-[2px] sm:p-6"
              >
              <div className="inline-flex rounded-full border border-[#1B4332]/10 bg-white/85 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#1B4332] shadow-[0_12px_30px_rgba(27,67,50,0.08)]">
                Fluxo de solicitação
              </div>

              <div className="mt-5 grid gap-4">
                {previewBoxes.map((item, index) => {
                  const isDark = item.tone === "dark";
                  const isLeft = item.align === "left";

                  return (
                    <div
                      key={item.title}
                      className={[
                          "group relative isolate z-0 flex overflow-visible transition-all duration-300 hover:z-50",
                          isLeft ? "justify-start pr-8 sm:pr-14" : "justify-end pl-8 sm:pl-14",
                        ].join(" ")}
                        style={{
                          marginTop: index === 0 ? "0px" : index % 2 === 0 ? "-2px" : "6px",
                        }}
                    >
                      <div
                        className={[
                          "relative z-10 max-w-[320px] rounded-[1.45rem] border px-4 py-4 shadow-[0_18px_45px_rgba(27,67,50,0.08)] transition duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_24px_55px_rgba(27,67,50,0.14)]",
                          isDark
                            ? "border-[#1B4332]/12 bg-[#1B4332] text-white"
                            : "border-white/80 bg-white/92 text-slate-700",
                        ].join(" ")}
                      >
                        <p
                          className={[
                            "text-[0.65rem] font-semibold uppercase tracking-[0.22em]",
                            isDark ? "text-[#f9d7ad]" : "text-[#9f5304]",
                          ].join(" ")}
                        >
                          {item.title}
                        </p>
                        <p
                          className={[
                            "mt-2 text-sm leading-6",
                            isDark ? "text-white/84" : "text-slate-700",
                          ].join(" ")}
                        >
                          {item.body}
                        </p>

                        <div
                          className={[
                            "pointer-events-none absolute top-1/2 z-[60] w-[260px] -translate-y-1/2 rounded-[1.25rem] border border-white/70 bg-white/92 p-4 text-left shadow-[0_24px_70px_rgba(15,23,42,0.14)] backdrop-blur-md opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-[-50%] group-hover:scale-100 invisible scale-95",
                            isLeft ? "left-[calc(100%+14px)]" : "right-[calc(100%+14px)]",
                          ].join(" ")}
                        >
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#1B4332]">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-700">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex w-full items-center justify-center rounded-[1rem] bg-gradient-to-r from-[#CA6702] to-[#f59e0b] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_22px_45px_rgba(202,103,2,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_26px_55px_rgba(202,103,2,0.42)] sm:text-base"
                  href={earlyAccessFormLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  O aplicativo já está disponível por acesso antecipado,
                  solicite acesso e saia na frente
                </a>

                <a
                  className="inline-flex items-center justify-center rounded-full bg-[#1B4332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24533f]"
                  href={buildWhatsAppLink()}
                  rel="noreferrer"
                  target="_blank"
                >
                  Saiba mais sobre o CargaViva Fretes
                </a>

                <a
                  className="inline-flex items-center justify-center rounded-full border border-[#d7d1c2] bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-[#163126] transition hover:border-[#CA6702]/30 hover:bg-[#fff7ed]"
                  href="mailto:arthur@akelm.com.br"
                >
                  Falar com a Akelm
                </a>

                <Link
                  className="inline-flex items-center justify-center rounded-full border border-[#1B4332]/12 bg-white px-5 py-3 text-sm font-semibold text-[#1B4332] transition hover:border-[#1B4332]/25 hover:bg-[#f8fbf8]"
                  href="/cargaviva/termosdeuso"
                >
                  Ver termos de uso
                </Link>

                <div className="group relative">
                  <button
                    aria-disabled="true"
                    className="inline-flex h-[46px] items-center gap-2 rounded-full border border-white/25 bg-black/45 px-4 text-left text-white/60 opacity-55 shadow-[0_14px_35px_rgba(2,10,6,0.16)] transition hover:opacity-85"
                    type="button"
                  >
                    <span className="h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-white/70" />
                    <span className="leading-none">
                      <span className="block text-[0.5rem] font-semibold uppercase tracking-[0.14em]">
                        Disponível no
                      </span>
                      <span className="block text-sm font-semibold">
                        Google Play
                      </span>
                    </span>
                  </button>
                  <span className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-50 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#1B4332] opacity-0 shadow-[0_12px_28px_rgba(2,10,6,0.18)] transition group-hover:opacity-100">
                    Em breve
                  </span>
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
