import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ScrollMotion from "@/components/ScrollMotion/ScrollMotion";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";
const pageBackground = "/images/cargaviva/bkgd-cargaviva.png";

type TermsSection = {
  paragraphs?: string[];
  points?: string[];
  title: string;
};

const termsSections: TermsSection[] = [
  {
    title: "1. Quem somos",
    paragraphs: [
      "O CargaViva Fretes é um aplicativo desenvolvido e mantido pela Akelm Tecnologia, empresa detentora dos direitos sobre a plataforma, marca, software, telas, textos e demais elementos do app.",
      "Ao criar uma conta, acessar ou usar o aplicativo, você confirma que leu, entendeu e aceita estes Termos de Uso.",
      "O CargaViva Fretes atua como plataforma de tecnologia para aproximar clientes que precisam contratar fretes e motoristas que oferecem serviços de transporte. A Akelm Tecnologia não é transportadora, não executa fretes e não assume a responsabilidade direta pela realização do transporte.",
    ],
  },
  {
    title: "2. Quem pode usar",
    paragraphs: [
      "O aplicativo deve ser usado apenas por pessoas maiores de 18 anos e legalmente capazes de contratar serviços.",
      "Ao se cadastrar, você se compromete a informar dados verdadeiros, completos e atualizados. Informações falsas, incompletas ou desatualizadas podem levar à suspensão ou encerramento da conta.",
      "Cada usuário é responsável por manter sua senha segura e por todas as atividades realizadas em sua conta.",
    ],
  },
  {
    title: "3. Cliente e motorista",
    paragraphs: [
      "No CargaViva Fretes, um mesmo usuário pode solicitar fretes como cliente e também atuar como motorista depois de cadastrar um caminhão.",
      "Cliente é o usuário que cria uma solicitação de frete, informa origem, destino, carga e escolhe uma proposta.",
      "Motorista é o usuário que cadastra um caminhão, envia propostas e presta o serviço de transporte quando escolhido.",
      "Frete é o serviço combinado entre cliente e motorista por meio do aplicativo.",
    ],
  },
  {
    title: "4. Pagamentos e repasses",
    paragraphs: [
      "Os pagamentos feitos pelo aplicativo são processados pela Asaas Gestão Financeira Instituição de Pagamento S.A. Ao pagar ou receber valores pela plataforma, você também fica sujeito aos termos e regras da Asaas.",
      "Para gerar cobranças, confirmar pagamentos e realizar repasses, poderão ser solicitados dados como nome, CPF ou CNPJ, data de nascimento, endereço e informações financeiras. Esses dados são usados para operar o pagamento e o repasse do frete.",
      "O CargaViva Fretes pode cobrar uma taxa de serviço sobre fretes concluídos. Quando houver taxa, ela será considerada no fluxo de pagamento e repasse informado no aplicativo.",
      "O pagamento do cliente deve ser realizado conforme as instruções exibidas no app. O frete só deve seguir para as próximas etapas depois da confirmação de pagamento.",
      "Cada usuário é responsável por suas próprias obrigações fiscais, tributárias, notas fiscais, documentos de transporte, licenças e demais exigências legais aplicáveis.",
    ],
  },
  {
    title: "5. Responsabilidades do cliente",
    paragraphs: [
      "O cliente deve informar corretamente os dados do frete, incluindo origem, destino, tipo de animal, quantidade, observações e qualquer cuidado necessário.",
      "O cliente também deve garantir que a carga esteja regular e adequada para transporte, respeitando leis, normas sanitárias, documentação e demais exigências aplicáveis.",
      "Ao aceitar uma proposta, o cliente se compromete a realizar o pagamento conforme as condições exibidas no aplicativo.",
    ],
  },
  {
    title: "6. Responsabilidades do motorista",
    paragraphs: [
      "O motorista deve informar dados verdadeiros sobre si, seu caminhão, sua disponibilidade, documentos e condições de transporte.",
      "O motorista é responsável por manter o veículo em boas condições, possuir habilitação, autorizações, seguros, licenças e documentos necessários para executar o frete.",
      "Ao aceitar ou realizar um frete, o motorista deve cumprir os combinados, agir com cuidado no transporte da carga e manter comunicação adequada com o cliente.",
    ],
  },
  {
    title: "7. Localização durante o transporte",
    paragraphs: [
      "Para dar mais segurança e transparência ao frete, o aplicativo pode coletar a localização do motorista durante a etapa de transporte em andamento.",
      "Esse rastreamento é usado para permitir que o cliente acompanhe a carga no mapa. A localização ao vivo fica vinculada ao frete em andamento e deve ser encerrada quando o frete for concluído ou cancelado.",
      "Ao iniciar um transporte pelo app, o motorista concorda com o uso da localização para essa finalidade.",
    ],
  },
  {
    title: "8. Uso correto do aplicativo",
    paragraphs: [
      "Você se compromete a usar o CargaViva Fretes de forma honesta, respeitosa e dentro da lei.",
    ],
    points: [
      "Não use o aplicativo para fraudes, golpes, informações falsas ou atividades ilegais.",
      "Não tente prejudicar outros usuários, a plataforma ou os sistemas da Akelm Tecnologia.",
      "Não publique conteúdos ofensivos, ilegais, enganosos ou que violem direitos de terceiros.",
      "Não use o aplicativo para finalidade diferente da solicitação, organização, acompanhamento e prestação de fretes.",
    ],
  },
  {
    title: "9. Conteúdos enviados pelo usuário",
    paragraphs: [
      "Você é responsável pelas informações, fotos, comprovantes, avaliações e demais conteúdos que enviar pelo aplicativo.",
      "Ao enviar conteúdo, você autoriza a Akelm Tecnologia a usar esse material na medida necessária para operar, registrar, verificar, melhorar e prestar suporte relacionado ao CargaViva Fretes.",
    ],
  },
  {
    title: "10. Intermediação e limitação de responsabilidade",
    paragraphs: [
      "A Akelm Tecnologia fornece a tecnologia que conecta clientes e motoristas. A execução do frete, a condição da carga, a regularidade dos documentos, a condução do veículo, atrasos, danos, acidentes e demais fatos do transporte são de responsabilidade das partes envolvidas no frete.",
      "A plataforma é fornecida conforme disponível. Podem ocorrer falhas de internet, GPS, notificações, serviços de terceiros, mapas, pagamentos ou indisponibilidades temporárias.",
      "Nada nestes Termos cria relação de emprego, sociedade, representação comercial, agência ou parceria entre a Akelm Tecnologia e os usuários. O motorista atua como profissional autônomo e independente.",
    ],
  },
  {
    title: "11. Serviços de terceiros",
    paragraphs: [
      "O aplicativo pode usar ou abrir serviços de terceiros, como Asaas, Google Maps, WhatsApp, Firebase e outros recursos necessários ao funcionamento da plataforma.",
      "Esses serviços possuem suas próprias regras, termos e políticas. A Akelm Tecnologia não controla e não se responsabiliza por indisponibilidades, mudanças ou condutas desses terceiros.",
    ],
  },
  {
    title: "12. Suspensão e encerramento",
    paragraphs: [
      "A Akelm Tecnologia pode suspender ou encerrar contas que violem estes Termos, pratiquem fraudes, causem prejuízos a outros usuários, usem dados falsos ou coloquem a segurança da plataforma em risco.",
      "O usuário também pode solicitar suporte para encerrar ou ajustar sua conta, observadas as obrigações pendentes e registros necessários.",
    ],
  },
  {
    title: "13. Alterações destes Termos",
    paragraphs: [
      "Estes Termos podem ser atualizados para refletir mudanças no aplicativo, na operação, em exigências legais ou em serviços de terceiros.",
      "Quando houver alteração relevante, o aplicativo poderá solicitar novo aceite.",
    ],
  },
  {
    title: "14. Lei aplicável e foro",
    paragraphs: [
      "Estes Termos são regidos pelas leis da República Federativa do Brasil.",
      "Fica eleito o foro da Comarca de Caçapava do Sul, Estado do Rio Grande do Sul, para resolver controvérsias relacionadas a estes Termos, salvo quando a lei determinar foro diferente.",
    ],
  },
  {
    title: "15. Suporte",
    paragraphs: [
      "Em caso de dúvidas sobre estes Termos ou sobre o uso do aplicativo, entre em contato pelo canal de suporte informado no CargaViva Fretes ou pelo WhatsApp (55) 99917-1727.",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  description:
    "Termos de Uso do CargaViva Fretes, plataforma da Akelm Tecnologia para organização de fretes.",
  name: "Termos de Uso - CargaViva Fretes",
  url: `${siteUrl}/cargaviva/termosdeuso`,
};

export const metadata: Metadata = {
  title: "Termos de Uso | CargaViva Fretes",
  description:
    "Leia os Termos de Uso do CargaViva Fretes, aplicativo da Akelm Tecnologia para organização e intermediação de fretes.",
  alternates: {
    canonical: "/cargaviva/termosdeuso",
  },
  openGraph: {
    title: "Termos de Uso | CargaViva Fretes",
    description:
      "Página oficial com os Termos de Uso do CargaViva Fretes.",
    images: [
      {
        alt: "Identidade visual do CargaViva Fretes",
        height: 1920,
        url: "/images/cargaviva/oferecimento.png",
        width: 1080,
      },
    ],
    type: "article",
    url: "/cargaviva/termosdeuso",
  },
  twitter: {
    card: "summary_large_image",
    description: "Página oficial com os Termos de Uso do CargaViva Fretes.",
    images: ["/images/cargaviva/oferecimento.png"],
    title: "Termos de Uso | CargaViva Fretes",
  },
};

export default function CargaVivaTermsPage() {
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
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,6,0.18)_0%,rgba(2,10,6,0.34)_100%)]"
        />

        <section className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6 sm:pb-16">
          <div
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/90 shadow-[0_28px_80px_rgba(2,10,6,0.26)] backdrop-blur"
            data-reveal
          >
            <div className="border-b border-[#e7e2d7] px-5 py-8 sm:px-8 sm:py-10">
              <span className="inline-flex items-center rounded-full border border-[#1B4332]/12 bg-[#1B4332]/8 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#1B4332]">
                CargaViva Fretes
              </span>

              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-[#163126] sm:text-5xl">
                Termos de Uso
              </h1>

              <p className="mt-4 text-sm font-medium uppercase tracking-[0.22em] text-[#9f5304]">
                Última atualização: 19 de abril de 2026
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[#4f5f57] sm:text-lg">
                Esta página reúne os termos aplicáveis ao uso do CargaViva
                Fretes, aplicativo desenvolvido e mantido pela Akelm Tecnologia.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/cargaviva"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7d1c2] bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-[#163126] transition hover:border-[#CA6702]/30 hover:bg-[#fff7ed]"
                >
                  Voltar para CargaViva
                </Link>

                <a
                  href="https://wa.me/5555999171727"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#1B4332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24533f]"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className="px-5 py-6 sm:px-8 sm:py-8">
              <div className="grid gap-5">
                {termsSections.map((section, index) => (
                  <article
                    key={section.title}
                    className="rounded-[1.5rem] border border-[#e6e0d4] bg-[#fffdfa] p-5 shadow-[0_14px_40px_rgba(27,67,50,0.04)] sm:p-6"
                    data-reveal
                    data-reveal-delay={index * 30 + 40}
                  >
                    <h2 className="text-xl font-semibold tracking-tight text-[#163126] sm:text-2xl">
                      {section.title}
                    </h2>

                    <div className="mt-4 grid gap-4">
                      {section.paragraphs?.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-[#5f6d66] sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.points?.length ? (
                        <ul className="grid gap-3">
                          {section.points.map((point) => (
                            <li
                              key={point}
                              className="rounded-2xl border border-[#dcd6ca] bg-white px-4 py-3 text-sm leading-7 text-[#5f6d66] sm:text-base"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </>
  );
}
