import type { Metadata } from "next";
import Image from "next/image";
import {
  Banknote,
  BarChart3,
  BellRing,
  ClipboardCheck,
  CircleCheck,
  History,
  Handshake,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Megaphone,
  MapPinned,
  MapPin,
  MessageCircle,
  Phone,
  Mic2,
  Navigation,
  Network,
  Radio,
  Route,
  SearchCheck,
  ShieldCheck,
  Star,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";

const audience = [
  {
    icon: Users,
    title: "Clientes",
    description:
      "Produtores rurais, pecuaristas, organizadores de eventos e qualquer pessoa ou empresa que precise transportar animais e busca uma forma segura e prática de contratar um transportador qualificado.",
  },
  {
    icon: Truck,
    title: "Motoristas",
    description:
      "Caminhoneiros autônomos que possuem veículos adequados para o transporte de animais e desejam encontrar novas oportunidades de frete, otimizando suas demandas e aumentando seu faturamento.",
  },
] as const;

const flow = [
  {
    icon: ClipboardCheck,
    title: "Solicitação",
    description:
      "O cliente cria um pedido de frete, detalhando origem, destino, tipo e quantidade de animais.",
  },
  {
    icon: SearchCheck,
    title: "Matching Inteligente",
    description:
      "A plataforma busca e apresenta ao cliente uma lista de motoristas compatíveis, com base na localização, capacidade do caminhão e disponibilidade.",
  },
  {
    icon: Handshake,
    title: "Negociação e Proposta",
    description:
      "O cliente seleciona um motorista, que por sua vez analisa a solicitação e envia uma proposta de valor.",
  },
  {
    icon: ShieldCheck,
    title: "Pagamento Seguro",
    description:
      "Após o cliente aceitar a proposta, o pagamento é realizado diretamente no aplicativo via Pix, através da integração com a plataforma Asaas. O valor fica retido com segurança até a conclusão do serviço.",
  },
  {
    icon: MessageCircle,
    title: "Confirmação e Comunicação",
    description:
      "Com o pagamento confirmado, o transporte é agendado. Um chat interno e privado é habilitado para que cliente e motorista possam alinhar os detalhes finais, sem a necessidade de compartilhar contatos telefônicos.",
  },
  {
    icon: MapPinned,
    title: "Execução e Rastreamento",
    description:
      "Antes de iniciar a viagem, o motorista confirma no app que conferiu a documentação obrigatória (GTA). Durante o percurso, o cliente acompanha a localização em tempo real e a plataforma aplica uma camada de proteção contra desvio de rota.",
  },
  {
    icon: Star,
    title: "Conclusão e Avaliação",
    description:
      "Ao finalizar a entrega, o motorista encerra a corrida no aplicativo. O cliente então avalia o serviço prestado, ajudando a construir a reputação dos motoristas na plataforma.",
  },
  {
    icon: Banknote,
    title: "Transferência de valor",
    description:
      "Com a confirmação de ambas as partes de que o serviço foi executado, o valor até então retido é liberado para o motorista.",
  },
] as const;

const differentials = [
  {
    title: "Conta Única e Flexível",
    description:
      "Um mesmo usuário pode atuar tanto como cliente, solicitando fretes, quanto como motorista, ofertando seu caminhão, tudo no mesmo cadastro.",
  },
  {
    title: "Privacidade e Segurança na Comunicação",
    description:
      "O chat interno por transporte elimina a troca de números de telefone, protegendo os dados de ambos os usuários.",
  },
  {
    title: "Rastreamento ao Vivo",
    description:
      "Transparência total para o cliente, que pode acompanhar sua carga durante toda a viagem, receber alertas se a localização for desabilitada e abrir a última coordenada capturada no Google Maps.",
  },
  {
    title: "Histórico de Parceria",
    description:
      "O sistema destaca motoristas que já prestaram serviços para o cliente anteriormente, incentivando a confiança e a fidelidade.",
  },
  {
    title: "Confirmação de Documentação (GTA)",
    description:
      "Um passo obrigatório no app que formaliza a verificação dos documentos dos animais, aumentando a conformidade e a segurança da operação.",
  },
  {
    title: "Pagamento Automatizado",
    description:
      "A integração com o Asaas para cobranças via Pix automatiza a identificação dos pagamentos, tornando o processo mais rápido e menos suscetível a erros.",
  },
] as const;

const routeProtectionFeatures = [
  {
    icon: ShieldCheck,
    title: "Localização obrigatória durante o transporte",
    description:
      "O motorista não consegue iniciar a viagem sem localização ativa e permissão autorizada. Se a localização for desligada durante o transporte, o app bloqueia a navegação até que ela seja reabilitada.",
  },
  {
    icon: BellRing,
    title: "Alerta imediato para cliente e motorista",
    description:
      "Quando a localização é desabilitada, o backend registra o horário local do ocorrido. O cliente recebe uma notificação de alerta e o motorista também é avisado para reabilitar a localização.",
  },
  {
    icon: MapPinned,
    title: "Última posição preservada",
    description:
      "A tela do cliente mostra que o motorista desabilitou a localização, informa o horário correto e exibe a última localização capturada, com botão para abrir a coordenada no Google Maps.",
  },
  {
    icon: Navigation,
    title: "Finalização com raio de segurança",
    description:
      "O motorista só consegue finalizar o transporte se estiver dentro de 500 metros do destino marcado pelo cliente. Fora desse raio, o app explica o bloqueio e orienta acionar o suporte se a descarga tiver ocorrido no local correto.",
  },
] as const;

const marketCities = [
  {
    city: "Alegrete",
    cattle: "576.978",
    horses: "19.784",
    sheep: "192.550",
  },
  {
    city: "Sant'Ana do Livramento",
    cattle: "528.034",
    horses: "24.452",
    sheep: "295.453",
  },
  {
    city: "Uruguaiana",
    cattle: "365.849",
    horses: "19.853",
    sheep: "137.773",
  },
  {
    city: "Dom Pedrito",
    cattle: "317.430",
    horses: "14.658",
    sheep: "94.456",
  },
  {
    city: "Bagé",
    cattle: "237.402",
    horses: "15.255",
    sheep: "88.468",
  },
  {
    city: "Lavras do Sul",
    cattle: "184.287",
    horses: "8.226",
    sheep: "65.117",
  },
  {
    city: "Caçapava do Sul",
    cattle: "167.348",
    horses: "6.672",
    sheep: "63.002",
  },
] as const;

const marketStats = [
  {
    label: "Bovinos na Campanha",
    value: "+3,9 mi",
    note: "aprox. 34% do rebanho bovino do RS",
  },
  {
    label: "Ovinos na Campanha",
    value: "1,4 mi",
    note: "aprox. 47% do rebanho ovino do RS",
  },
  {
    label: "Equinos",
    value: "170 mil",
    note: "base relevante para deslocamentos especializados",
  },
  {
    label: "Potencial semanal",
    value: "~234",
    note: "fretes carregados por semana como valor central estimado",
  },
] as const;

const marketingChannels = [
  {
    icon: Radio,
    title: "Rádio regional",
    description:
      "Patrocínio de programas agropecuários em emissoras locais da região, escolhendo horários em que o produtor costuma ouvir notícias e músicas tradicionalistas.",
    highlight:
      "A PNAD 2022 constatou que o rádio ainda é forte na região, presente no dia a dia em cerca de 65% dos domicílios.",
  },
  {
    icon: Megaphone,
    title: "Redes sociais e páginas locais",
    description:
      "No meio digital, focar a divulgação em páginas de noticiarios locais e regionais, reforçando a proximidade com a comunidade.",
    highlight: "Confiança, recorrência e engajamento em canais já usados pela comunidade.", 
  },
  {
    icon: ClipboardCheck,
    title: "Parcerias em remates e eventos",
    description:
      "Associação da marca CargaViva a feiras de terneiros, exposições e leilões, com patrocínio de catálogos, banners nas pistas e promotores para explicar o aplicativo.",
    highlight: "Presença direta onde produtores e transportadores já negociam.",
  },
  {
    icon: Network,
    title: "Boca a boca e agentes locais",
    description:
      "Atuação com divulgadores regionais, como motoristas experientes e pecuaristas, para que recomendem o aplicativo dentro das suas redes de contatos.",
    highlight: "A recomendação pessoal tem peso real no meio rural.",
  },
  {
    icon: MapPin,
    title: "Foco geográfico",
    description:
      "Comunicação inicial voltada ao Pampa gaúcho, concentrando esforços nas cidades com maior número de remates e rebanhos.",
    highlight: "Campanhas mais eficientes e mensuração precisa dos resultados.",
  },
] as const;

const supportReasons = [
  {
    title: "O problema é real",
    description:
      "O CargaViva não nasceu de uma ideia avulsa, e sim de uma dor real, identificada na conversa entre pecuaristas e nossa empresa. Há grande volume de bovinos, ovinos e equinos no Pampa gaúcho, mas a contratação de transporte ainda depende muito de contato informal, baixa rastreabilidade e pouca previsibilidade.",
  },
  {
    title: "O mercado existe",
    description:
      "Como mostrado na seção de mercado, a demanda é enorme. Neste estudo tivemos como base apenas as saídas de eventos de remates. Ainda há as chegadas aos remates e eventos, transferências por fora, idas a frigoríficos e outros deslocamentos. Na prática, os números são muito maiores que os apresentados.",
  },
  {
    title: "O produto é bom",
    description:
      "O aplicativo é robusto, seguro e intuitivo. Está pronto, testado e validado. Resolve um problema concreto e tem ampla margem para crescimento e incremento de novas funcionalidades.",
  },
  {
    title: "Evolução tecnológica no meio rural",
    description:
      "Essa é a hora. O meio rural está abraçando novas tecnologias e soluções digitais, como plataformas que operam semanalmente vários eventos de remates. Ainda não há concorrência direta no nosso nicho; seremos pioneiros e queremos ser referência em tecnologia para transporte animal.",
  },
] as const;

const footerLinks = [
  {
    href: "/",
    label: "Site da Akelm",
  },
  {
    href: "/cargaviva",
    label: "Página principal do CargaViva",
  },
  {
    href: "/cargaviva/termosdeuso",
    label: "Termos de uso",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "PresentationDigitalDocument",
  description:
    "Apresentação comercial do CargaViva Fretes, plataforma digital para conectar clientes que precisam transportar animais a motoristas autônomos qualificados.",
  name: "Apresentação APP CargaViva Fretes",
  url: `${siteUrl}/cargaviva/apresenta%C3%A7%C3%A3o`,
};

export const metadata: Metadata = {
  title: "Apresentação APP CargaViva Fretes",
  description:
    "Apresentação comercial do CargaViva Fretes: plataforma digital para transporte de animais com segurança, transparência e praticidade.",
  alternates: {
    canonical: "/cargaviva/apresentação",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Apresentação APP CargaViva Fretes",
    description:
      "Plataforma digital especializada que conecta clientes e motoristas autônomos para o transporte de animais.",
    images: [
      {
        alt: "Capa do CargaViva Fretes",
        height: 876,
        url: "/images/cargaviva/cargaviva-capa.png",
        width: 1794,
      },
    ],
    type: "website",
    url: "/cargaviva/apresentação",
  },
};

export default function CargaVivaPresentationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-[#F8F9FA] text-[#1B4332]">
        <section className="relative isolate min-h-[92vh] overflow-hidden bg-[#03170d] text-white">
          <Image
            src="/images/cargaviva/cargaviva-capa.png"
            alt="CargaViva Fretes"
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,23,13,0.96)_0%,rgba(3,23,13,0.82)_34%,rgba(3,23,13,0.35)_68%,rgba(3,23,13,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,23,13,0.08)_0%,rgba(3,23,13,0.32)_74%,#03170d_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-between px-5 py-8 sm:px-8 lg:px-0">
            <div className="flex items-center justify-between gap-4">
              <Image
                src="/images/cargaviva/logo-horizontal-light.png"
                alt="CargaViva Fretes"
                width={210}
                height={74}
                priority
                className="h-auto w-44 sm:w-56"
              />
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/82 backdrop-blur">
                Apresentação comercial
              </span>
            </div>

            <div className="ml-auto max-w-3xl rounded-[1.35rem] border border-white/10 bg-[#03170d]/58 p-5 pb-6 pt-5 text-left shadow-[0_28px_80px_rgba(0,0,0,0.2)] backdrop-blur-[2px] sm:p-7 lg:mb-8 lg:max-w-[720px] lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f6a63a]">
                Apresentação APP CargaViva Fretes
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.8rem] lg:leading-[0.96]">
                Segurança, transparência e praticidade para o transporte de animais.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
                O CargaViva Fretes é uma plataforma digital especializada que
                atua como intermediária, conectando clientes que necessitam de
                transporte de animais a motoristas de caminhão autônomos que
                oferecem este serviço.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                O objetivo é trazer mais segurança, transparência e praticidade
                para a demanda de um nicho muito importante sobretudo para a
                nossa região, que é a pecuária.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#03170d] px-5 pb-8 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
            {[
              ["Especialização", "Transporte de animais"],
              ["Conexão", "Clientes e motoristas autônomos"],
              ["Experiência", "Fluxo rastreável de ponta a ponta"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[1.25rem] border border-white/10 bg-white/8 p-5 text-white shadow-[0_22px_55px_rgba(0,0,0,0.18)] backdrop-blur"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#f6a63a]">
                  {label}
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CA6702]">
                Para quem é?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1B4332] sm:text-5xl">
                Dois públicos conectados por uma operação mais simples.
              </h2>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {audience.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-[#dde5df] bg-white p-6 shadow-[0_22px_60px_rgba(27,67,50,0.08)] sm:p-8"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B4332] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#1B4332]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-[#495057]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#102f23] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="lg:sticky lg:top-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f6a63a]">
                  Como funciona?
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Uma experiência completa e totalmente rastreável.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/76">
                  O fluxo de solicitação é projetado para ser intuitivo e seguro
                  para ambas as partes, desde o pedido inicial até a liberação do
                  valor ao motorista.
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/8 p-5 shadow-[0_22px_55px_rgba(0,0,0,0.14)] backdrop-blur sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#CA6702] text-white">
                      <History className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#f6a63a]">
                        Diferenciais
                      </p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight">
                        Principais Diferenciais e Funcionalidades
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {differentials.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-[1rem] border border-white/10 bg-[#03170d]/34 p-4"
                      >
                        <h4 className="text-sm font-semibold leading-6 text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-white/70">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-[#CA6702]/35 bg-[#CA6702]/12 p-5 shadow-[0_22px_55px_rgba(0,0,0,0.14)] backdrop-blur sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#CA6702] text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#f6a63a]">
                        Segurança operacional
                      </p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight">
                        Camada de proteção contra desvio de rota
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/76">
                    O CargaViva trata o rastreamento como parte central da
                    segurança do frete. Entre iniciar e finalizar o transporte,
                    o app exige localização ativa, registra interrupções,
                    notifica as partes e mantém evidências para que o cliente
                    saiba exatamente o que aconteceu.
                  </p>

                  <div className="mt-5 grid gap-3">
                    {routeProtectionFeatures.map((feature) => {
                      const Icon = feature.icon;

                      return (
                        <article
                          key={feature.title}
                          className="rounded-[1rem] border border-white/10 bg-[#03170d]/42 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f6a63a]">
                              <Icon className="h-4 w-4" />
                            </span>
                            <div>
                              <h4 className="text-sm font-semibold leading-6 text-white">
                                {feature.title}
                              </h4>
                              <p className="mt-1 text-sm leading-6 text-white/70">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute bottom-8 left-[1.65rem] top-8 w-px bg-gradient-to-b from-[#CA6702] via-white/18 to-[#CA6702] sm:left-1/2 sm:-translate-x-1/2"
                />

                {flow.map((item, index) => {
                  const Icon = item.icon;
                  const isLeft = index % 2 === 0;

                  return (
                    <div
                      key={item.title}
                      className={[
                        "relative grid gap-4 pb-8 last:pb-0 sm:grid-cols-[1fr_auto_1fr] sm:items-center",
                        isLeft ? "" : "sm:[&>article]:col-start-3",
                      ].join(" ")}
                    >
                      <article
                        className={[
                          "relative ml-16 rounded-[1.35rem] border border-white/10 bg-white/9 p-5 shadow-[0_22px_55px_rgba(0,0,0,0.16)] backdrop-blur sm:ml-0 sm:p-6",
                          isLeft ? "sm:text-right" : "sm:text-left",
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "mb-4 flex items-center gap-3",
                            isLeft ? "sm:justify-end" : "sm:justify-start",
                          ].join(" ")}
                        >
                          <span className="text-sm font-semibold text-white/42">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#CA6702] text-white">
                            <Icon className="h-5 w-5" />
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/76 sm:text-base">
                          {item.description}
                        </p>
                      </article>

                      <div className="absolute left-0 top-5 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#CA6702]/45 bg-[#102f23] text-white shadow-[0_16px_38px_rgba(0,0,0,0.22)] sm:static sm:col-start-2 sm:row-start-1">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CA6702]">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>

                      {index < flow.length - 1 ? (
                        <div
                          aria-hidden="true"
                          className="absolute left-[1.15rem] top-[4.65rem] z-10 h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#CA6702] sm:left-1/2 sm:top-auto sm:bottom-3 sm:-translate-x-1/2"
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#f1f4f0] px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CA6702]">
                  O mercado
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1B4332] sm:text-5xl">
                  Um nicho regional grande, ativo e ainda pouco digitalizado.
                </h2>
                <div className="mt-5 grid gap-4 text-base leading-8 text-[#495057]">
                  <p>
                    O Pampa gaúcho, que abrange a Campanha, Sudoeste e partes
                    da Fronteira Oeste, concentra alguns dos maiores rebanhos de
                    animais do estado. De acordo com nossa base de dados, a
                    região da Campanha possui mais de 3,9 milhões de bovinos,
                    1,4 milhão de ovinos e cerca de 170 mil equinos.
                  </p>
                  <p>
                    Esse volume representa aproximadamente 34% do rebanho
                    bovino e 47% do rebanho ovino do Rio Grande do Sul, criando
                    uma demanda recorrente por logística especializada.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {marketStats.map((stat) => (
                    <article
                      key={stat.label}
                      className="rounded-[1.25rem] border border-[#d8e0da] bg-white p-5 shadow-[0_18px_45px_rgba(27,67,50,0.07)]"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#CA6702]">
                        {stat.label}
                      </p>
                      <strong className="mt-2 block text-3xl font-semibold tracking-tight text-[#1B4332]">
                        {stat.value}
                      </strong>
                      <p className="mt-2 text-sm leading-6 text-[#64716b]">
                        {stat.note}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[#d8e0da] bg-white p-4 shadow-[0_24px_70px_rgba(27,67,50,0.08)] sm:p-6">
                <div className="flex flex-col gap-4 border-b border-[#e3e8e4] pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#CA6702]">
                      Municípios estratégicos
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1B4332]">
                      Rebanhos por praça
                    </h3>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B4332] text-white">
                    <MapPin className="h-6 w-6" />
                  </span>
                </div>

                <div className="mt-5 overflow-hidden rounded-[1.15rem] border border-[#e3e8e4]">
                  <div className="grid grid-cols-[1.28fr_0.8fr_0.8fr_0.8fr] bg-[#1B4332] px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/72 sm:text-xs">
                    <span>Município</span>
                    <span className="text-right">Bovinos</span>
                    <span className="text-right">Equinos</span>
                    <span className="text-right">Ovinos</span>
                  </div>

                  {marketCities.map((item) => (
                    <div
                      key={item.city}
                      className="grid grid-cols-[1.28fr_0.8fr_0.8fr_0.8fr] border-t border-[#e3e8e4] px-4 py-3 text-xs text-[#495057] sm:text-sm"
                    >
                      <strong className="font-semibold text-[#1B4332]">
                        {item.city}
                      </strong>
                      <span className="text-right">{item.cattle}</span>
                      <span className="text-right">{item.horses}</span>
                      <span className="text-right">{item.sheep}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <article className="rounded-[1.15rem] border border-[#d8e0da] bg-[#f8faf8] p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CA6702] text-white">
                        <BarChart3 className="h-5 w-5" />
                      </span>
                      <h4 className="text-base font-semibold text-[#1B4332]">
                        Atividade comercial constante
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#64716b]">
                      Uma feira regional de terneiros em 2026 somou 1.423
                      animais em um único evento. Em uma semana, uma produtora
                      local transmitiu 9 remates, reforçando a recorrência da
                      demanda.
                    </p>
                  </article>

                  <article className="rounded-[1.15rem] border border-[#d8e0da] bg-[#f8faf8] p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CA6702] text-white">
                        <TrendingUp className="h-5 w-5" />
                      </span>
                      <h4 className="text-base font-semibold text-[#1B4332]">
                        Captura inicial viável
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#64716b]">
                      Ao cruzar rebanho, frequência de leilões e capacidade
                      média de caminhões, estimamos 190 a 265 fretes carregados
                      por semana. Com apenas 10% de captura, a plataforma já
                      superaria 20 fretes semanais.
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#d8e0da] bg-[#1B4332] p-6 text-white shadow-[0_24px_70px_rgba(27,67,50,0.16)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f6a63a]">
                Tese de oportunidade
              </p>
              <p className="mt-3 max-w-5xl text-base leading-8 text-white/80 sm:text-lg">
                Além da pecuária de corte e ovina, o agronegócio gaúcho
                participa fortemente da economia estadual: o relatório
                Radiografia da Agropecuária Gaúcha 2020 destaca que a cadeia
                agropecuária responde por 40% do PIB do estado. Esse contexto
                mostra que investir em logística e tecnologia para o setor não é
                apenas oportuno, mas estratégico.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fffdfa] px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
              <div className="lg:sticky lg:top-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#CA6702]">
                  Marketing
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1B4332] sm:text-5xl">
                  Comunicação pensada para a realidade do meio rural.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#495057]">
                  Para atingir produtores e transportadores do interior, o plano
                  combina canais tradicionais, presença em eventos e influência
                  comunitária. A estratégia parte de onde esse público já se
                  informa, negocia e constrói confiança.
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-[#d8e0da] bg-[#1B4332] p-6 text-white shadow-[0_22px_60px_rgba(27,67,50,0.14)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CA6702]">
                      <Mic2 className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#f6a63a]">
                        Estratégia de entrada
                      </p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight">
                        Ser conhecido por quem realmente precisa.
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/78">
                    A combinação entre rádio, mídias sociais, presença em eventos
                    e influência comunitária permitirá que o CargaViva seja
                    rapidamente conhecido e experimentado por quem precisa de uma
                    solução de transporte animal.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {marketingChannels.map((channel, index) => {
                  const Icon = channel.icon;

                  return (
                    <article
                      key={channel.title}
                      className="grid gap-4 rounded-[1.35rem] border border-[#d8e0da] bg-white p-5 shadow-[0_20px_55px_rgba(27,67,50,0.07)] sm:grid-cols-[auto_1fr] sm:p-6"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f7eadc] text-[#CA6702]">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="pt-2 text-sm font-semibold text-[#1B4332]/34">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-[#1B4332]">
                          {channel.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[#495057] sm:text-base">
                          {channel.description}
                        </p>
                        <p className="mt-4 rounded-[1rem] border border-[#f0dec9] bg-[#fff7ed] px-4 py-3 text-sm font-medium leading-6 text-[#8a4a05]">
                          {channel.highlight}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#03170d] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="lg:sticky lg:top-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f6a63a]">
                  Conclusão
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Por que apoiar o CargaViva?
                </h2>
                <p className="mt-5 text-base leading-8 text-white/76">
                  Apoiar o CargaViva é vincular sua imagem ou sua marca a um
                  serviço que estará no dia a dia dos pecuaristas, ajudando o
                  ecossistema como um todo a ganhar mais controle, segurança e
                  eficiência no transporte de rebanhos.
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/8 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CA6702] text-white">
                      <Route className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#f6a63a]">
                        Convite
                      </p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight">
                        Você pode fazer parte disso.
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/76">
                    O CargaViva está aqui para somar forças com o agro. Nasce de
                    um problema real e entrega uma solução pronta para
                    resolvê-lo.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {supportReasons.map((reason, index) => (
                  <article
                    key={reason.title}
                    className="rounded-[1.35rem] border border-white/10 bg-white/8 p-5 shadow-[0_22px_55px_rgba(0,0,0,0.16)] backdrop-blur sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#CA6702] text-white">
                        <CircleCheck className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#f6a63a]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold tracking-tight">
                          {reason.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/74 sm:text-base">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#071d12] px-5 py-10 text-white sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr_0.8fr]">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#f6a63a]">
                Desenvolvido por
              </p>
              <Image
                src="/images/akelmtecwhite-logo-4000.png"
                alt="Akelm Tecnologia"
                width={190}
                height={64}
                className="mt-4 h-auto w-40"
              />
              <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                A Akelm Tecnologia desenvolve soluções digitais para empresas,
                com foco em sistemas sob medida, plataformas SaaS e produtos
                que aproximam tecnologia da operação real dos negócios.
              </p>
              <div className="mt-5 grid gap-1 text-sm leading-6 text-white/58">
                <p>Akelm Tecnologia LTDA</p>
                <p>R. Barão de Caçapava - 1376</p>
                <p>Caçapava do Sul - RS</p>
              </div>
            </div>

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#f6a63a]">
                Fale conosco
              </p>
              <div className="mt-4 grid gap-3">
                <a
                  href="https://wa.me/5555999171727?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20o%20CargaViva%20Fretes."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#CA6702]/50 hover:bg-[#CA6702]/18"
                >
                  <Phone className="h-5 w-5 text-[#f6a63a]" />
                  WhatsApp: (55) 99917-1727
                </a>
                <a
                  href="mailto:arthur@akelm.com.br"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#CA6702]/50 hover:bg-[#CA6702]/18"
                >
                  <Mail className="h-5 w-5 text-[#f6a63a]" />
                  arthur@akelm.com.br
                </a>
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.instagram.com/akelmtecnologia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram da Akelm Tecnologia"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:border-[#CA6702]/50 hover:bg-[#CA6702]/18"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/akelm-tecnologia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn da Akelm Tecnologia"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:border-[#CA6702]/50 hover:bg-[#CA6702]/18"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#f6a63a]">
                Links úteis
              </p>
              <nav className="mt-4 grid gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#CA6702]/50 hover:bg-[#CA6702]/18"
                  >
                    <Home className="h-4 w-4 text-[#f6a63a]" />
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Akelm Tecnologia. Todos os direitos reservados.</p>
            <p>CargaViva Fretes - Segurança e praticidade para o transporte do seu rebanho.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
