import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

import Navbar from "@/components/Navbar/Navbar";
import AkelMedFaqDrawer from "./AkelMedFaqDrawer";
import ScrollMotion from "@/components/ScrollMotion/ScrollMotion";

type DrawerSubItem = {
  description: string;
  title: string;
};

type DrawerItem = {
  description: string;
  subItems?: DrawerSubItem[];
  title: string;
};

type Module = {
  drawerItems: DrawerItem[];
  image: string;
  summary: string;
  title: string;
};

type Plan = {
  includes: string[];
  bonus?: string[];
  limits: {
    patients: string;
    users: string;
  };
  name: string;
  priceSuffix?: string;
  noteBelowPrice: string;
  price: string;
  summary: string;
};

const modules: Module[] = [
  {
    drawerItems: [
      {
        description:
          "Visão rápida do painel clínico, número de consultas do dia, consultas concluídas no mês, retornos agedados, visualização do plano contratado e o status geral do mesmo, alertas de solicitação de agendamentos online e muito mais, tudo de forma clara e visualização imediata ao abrir o sistema.",
        title: "Visão Operacional",
      },
      {
        description:
          "Resumo do fluxo de caixa, com entradas do dia, contas a receber, recebíveis vencidos e contas a pagar.",
        title: "Saúde do caixa",
      },
      {
        description:
          "Tendência de consultas por dia, consultas por profissional médico, status das consultas (finalizadas, canceladas e em aberto).",
        title: "Gráficos de produtividade",
      },
      {
        description:
          "Lista detalhada dos agendamentos do dia, com status, horários e profissionais envolvidos. Lista de próximos retornos combinados em consultas anteriores, com os mesmos detalhes do agendamento do dia.",
        title: "Agenda do dia e Próximos retornos",
      },
      {
        description:
          "Veja as ultimas atividas dentro do sistema, quem fez, quando fez, o que foi feito e paciente envolvido, para ter total controle do que acontece na clínica e garantir a segurança dos dados.",
        title: "Auditoria",
      },
    ],
    image: "/images/akelmed/tela-dashboard-4.png",
    summary:
      "Tenha a sua disposição um painel de controle que mostra tudo que está acontecendo na clínica em tempo real, com gráficos e indicadores para que você possa tomar decisões rápidas e acertivas.",
    title: "Dashboard",
  },
  {
    drawerItems: [
      {
        description:
          "Uma representação visual da agenda do dia, com uma linha do tempo por horário, mostrando o médico, o status do horário (livre, ocupado, confirmado) e a capacidade de atendimento.",
        title: "Agenda Diária Visual",
      },
      {
        description:
          "Uma lista operacional de todas as consultas (passadas e futuras), com filtros avançados por paciente, status e profissional.",
        title: "Gestão de Agendamentos",
      },
      {
        description:
          "Formulários inteligentes para marcar novas consultas ou editar existentes, com ajuda visual para encontrar horários disponíveis.",
        title: "Criação e Edição de Consultas",
      },
      {
        description:
          "",
        subItems: [
          {
            description:
              "Uma interface para aprovar uma solicitação, onde a equipe pode vincular o pedido a um paciente já existente, ajustar o horário e confirmar o agendamento na agenda interna.",
            title: "Tela de Triagem",
          },
          {
            description:
              "Leitura operacional dos pedidos recebidos pelo link público, com foco em resposta rápida e organização da fila.",
            title: "Painel de Solicitações",
          },
        ],
        title: "Solicitações de Agendamento Online",
      },
      {
        description:
          "Uma área para o administrador configurar os dias e horários de funcionamento da clínica e de cada profissional, incluindo a ativação de múltiplos turnos.",
        title: "Configuração de Horários da Clínica",
      },
    ],
    image: "/images/akelmed/tela-agendamento-4.png",
    summary:
      "Este módulo é o coração da recepção, com uma agenda visual super ágil para marcar consultas e organizar os horários de toda a equipe. Com ele, você também recebe e aprova facilmente os pedidos de agendamento feitos online pelos seus pacientes.",
    title: "Agenda",
  },
  {
    drawerItems: [
      {
        description:
          "Uma lista principal para buscar, filtrar e visualizar todos os pacientes da clínica. A tela exibe informações rápidas como telefone, CPF e idade, sem a necessidade de abrir o cadastro completo.",
        title: "Cadastro Central de Pacientes",
      },
      {
        description:
          "Um formulário otimizado para cadastrar um novo paciente de forma rápida, focando em dados essenciais como nome, CPF e telefone, mas permitindo a inclusão de informações complementares.",
        title: "Criação de Novos Pacientes",
      },
      {
        description:
          "Uma visualização em formato de linha do tempo de todos os atendimentos, prontuários e documentos relacionados ao paciente.",
        title: "Histórico Clínico",
      },
      {
        description:
          "Acesso rápido ao saldo e a todos os lançamentos financeiros vinculados ao paciente.",
        title: "Histórico Financeiro",
      },
      
      {
        description:
          "Uma tela de edição e visualização que organiza todas as informações do paciente em seções claras",
        subItems: [
          {
            description:
              "Informações básicas de identificação.",
            title: "Dados Cadastrais",
          },
          {
            description:
              "Detalhes como estado civil, profissão, convênio, etc.",
            title: "Dados Administrativos",
          },
          {
            description:
              "Configuração de valor padrão para consultas.",
            title: "Dados Financeiros",
          },
          {
            description:
              "Gestão do consentimento do paciente para uso de seus dados.",
            title: "Consentimento (LGPD)",
          },
        ],
        title: "Perfil Completo do Paciente (360°)",
      },
     
    ],
    image: "/images/akelmed/tela-cadastro-3.png",
    summary:
      "Este módulo reúne tudo sobre os seus pacientes em um só lugar, permitindo cadastros super rápidos e uma visão completa em 360 graus de cada perfil.Com ele, o histórico de consultas, informações financeiras e os documentos de quem você atende ficam organizados e sempre a um clique de distância.",
    title: "Gestão de Pacientes",
  },
  {
    drawerItems: [
      {
        description:
          "Uma visão clara dos pacientes agendados para o dia, destacando quem é o próximo, quem está em espera ou atrasado.",
        title: "Fila de Atendimento do Médico",
      },
      {
        description:
          "O prontuário eletrônico em si, onde o médico registra a consulta. Ele é estruturado no modelo SOAP (Subjetivo, Objetivo, Avaliação, Plano) e permite:",
        subItems: [
          {
            description:
              "",
            title: "Registrar queixas e histórico do paciente.",
          },
           {
            description:
              "",
            title: "Anotar sinais vitais (pressão, peso, altura, etc.).",
          },
          {
            description:
              "",
            title: "Fazer a avaliação e diagnóstico.",
          },
          {
            description:
              "",
            title: "Definir o plano de tratamento.",
          },
        ],
        title: "Tela de Atendimento (SOAP)",
      },
      {
        description:
          "Integrado ao atendimento, o sistema gera diversos documentos padronizados:",
        subItems: [
          {
            description:
              "Comuns, antibióticos e controladas (receituário azul, amarelo).",
            title: "Prescrições",
          },
           {
            description:
              "",
            title: "Solicitações de Exames.",
          },
          {
            description:
              "",
            title: "Atestados Médicos e Declarações de Comparecimento.",
          },
          {
            description:
              "",
            title: "Pedidos de Retorno.",
          },
        ],
        title: "Geração de Documentos Clínicos",
      },
      {
        description:
          "Permite anexar arquivos (como resultados de exames externos) diretamente ao prontuário do paciente.",
        title: "Gestão de Anexos",
      },
      {
        description:
          "Uma tela otimizada para a leitura de atendimentos passados, com uma narrativa visual que facilita o entendimento da evolução do paciente.",
        title: "Visualização de Histórico",
      },
    ],
    image: "/images/akelmed/tela-prontuario-3.png",
    summary:
      "Este módulo é o espaço seguro do médico, unindo a fila de pacientes do dia a um prontuário eletrônico completo e super fácil de usar. Nele, o profissional registra a consulta, gera receitas e atestados rapidamente, além de ter o histórico e os exames do paciente sempre à mão.",
    title: "Atendimento Médico (Prontuário Eletrônico)",
  },
  {
    drawerItems: [
      {
        description:
          "Uma visão geral com indicadores, filtros por período e destaque para anomalias ou pendências.",
        title: "Painel Financeiro (Dashboard)",
      },
      {
        description:
          "Lista de todas as contas a pagar e a receber, com status (aberto, pago, vencido) e saldos.",
        title: "Gestão de Lançamentos",
      },
      {
        description:
          "Uma tela específica para registrar o pagamento de um lançamento, informando o valor pago, a data, a forma de pagamento (dinheiro, cartão, etc.) e a conta onde o dinheiro entrou (caixa, conta bancária). Permite registrar descontos, juros e multas.",
        title: "Registro de Baixa (Liquidação)",
      },
      {
        description:
          "Uma área de configurações onde o administrador pode definir:",
        subItems: [
          {
            description:
              "(Ex: Receita de Consulta, Despesa com Aluguel).",
            title: "Categorias",
          },
           {
            description:
              "(Ex: Caixa da Recepção, Banco Itaú).",
            title: "Contas Financeiras..",
          },
          {
            description:
              "(Ex: Pix, Cartão de Crédito).",
            title: "Formas de Pagamento.",
          },
          {
            description:
              "(Ex: Clínica, Laboratório, Setor de T.I) Para uma análise gerencial mais detalhada.",
            title: "Centros de Custo.",
          },
        ],
        title: "Cadastros Financeiros",
      },
    ],
    image: "/images/akelmed/tela-financeiro-3.png",
    summary:
      "Este módulo cuida da saúde financeira da sua clínica, entregando um painel super claro para você controlar todas as contas a pagar e a receber sem estresse. Nele, fica fácil registrar pagamentos e organizar todo o dinheiro que entra e sai usando categorias, contas bancárias e formas de pagamento personalizadas.",
    title: "Financeiro",
  },
  {
    drawerItems: [
      {
        description:
          "Criação de logins para médicos, secretárias, administradores, entre outros, vinculando-os a uma sede específica.",
        title: "Cadastro de Usuários",
      },
      {
        description:
          "O sistema possui perfis (Admin, Medico, Secretaria) que definem as permissões de cada usuário, controlando quais menus e funcionalidades eles podem acessar. Também é possível criar novos perfis personalizados.",
        title: "Perfis de Acesso (RBAC)",
      },
      {
        description:
          "Uma tela de configuração avançada para customizar em detalhe o que cada perfil de usuário pode ver ou fazer.",
        title: "Matriz de Permissões",
      },
      {
        description:
          "O sistema registra um log detalhado de ações importantes realizadas pelos usuários, como login, alteração de dados de pacientes e registros financeiros, garantindo segurança e rastreabilidade.",
        title: "Auditoria de Ações",
      },
    ],
    image: "/images/akelmed/tela-acesso-3.png",
    summary:
      "Este módulo garante a segurança da sua clínica, permitindo cadastrar a equipe e controlar exatamente o que cada perfil pode acessar ou alterar no sistema. Ele também mantém um histórico transparente de tudo o que é feito, trazendo total tranquilidade e controle para a sua gestão.",
    title: "Gestão de Equipe e Acessos",
  },
];

const plans: Plan[] = [
  {
    includes: [
      "Dashboard completo",
      "Agenda e agendamento online",
      "Gestão completa de pacientes",
      "Atendimento médico (prontuário eletrônico)",
      "Financeiro",
      "Gestão de equipe e acessos",
    ],
    limits: {
      patients: "Até 1000 pacientes",
      users: "Até 3 usuários",
    },
    name: "START",
    noteBelowPrice: "Sem fidelidade",
    price: "R$ 149,00",
    priceSuffix: "/mês",
    summary:
      "Ideal para consultórios menores ou que estão começando, mas não querem abrir mão de uma gestão completa.",
  },
  {
    includes: [
      "Dashboard completo",
      "Agenda e agendamento online",
      "Gestão completa de pacientes",
      "Atendimento médico (prontuário eletrônico)",
      "Financeiro",
      "Gestão de equipe e acessos",
    ],
    limits: {
      patients: "Até 5000 pacientes",
      users: "Até 10 usuários",
    },
    name: "PROFESSIONAL",
    noteBelowPrice: "Ou R$ 399,00 sem fidelidade",
    price: "R$ 299,00",
    priceSuffix: "/12 meses",
    summary:
      "Perfeito para consultórios de médio porte que buscam uma solução robusta e uma gestão completa, com um ótimo custo-benefício.",
  },
  {
    includes: [
      "Dashboard completo",
      "Agenda e agendamento online",
      "Gestão completa de pacientes",
      "Atendimento médico (prontuário eletrônico)",
      "Financeiro",
      "Gestão de equipe e acessos",
    ],
    limits: {
      patients: "",
      users: "",
    },
    bonus: [
      "Acompanha um site profissional para sua marca totalmente personalizado e integrado ao sistema. Hospedagem, manutenção e atualizações do site já inclusos no valor mensal.",
      "Página de agendamento online integrada ao seu site, ao invés de usar o link público padrão, para uma experiência mais personalizada à sua marca.",
    ],
    name: "ENTERPRISE",
    noteBelowPrice: "Ou R$ 990,00 sem fidelidade",
    price: "R$ 699,00",
    priceSuffix: "/12 meses",
    summary:
      "Pensado para clínicas e consultórios que buscam uma solução completa, e que desejam alavancar a imagem da sua clínica com um sistema  e site público Premium.",
  },
];

const buildWhatsAppLink = (planName: string) => {
  const message = `Olá, quero saber mais sobre o plano *${planName}* do sistema AkelMed`;

  return `https://wa.me/55999171727?text=${encodeURIComponent(message)}`;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akelm.com.br";

const akelmedFaqs = [
  {
    answer:
      "Sim. O AkelMed foi criado para gestão de clínicas e consultórios médicos, reunindo agenda, pacientes, prontuário eletrônico, financeiro e controle de equipe em uma única plataforma web.",
    question: "O AkelMed serve para clínicas e consultórios médicos?",
  },
  {
    answer:
      "O sistema organiza a rotina em módulos de dashboard, agenda, gestão de pacientes, prontuário eletrônico, financeiro e permissões de acesso, o que ajuda a centralizar a operação clínica.",
    question: "Quais módulos o AkelMed oferece?",
  },
  {
    answer:
      "Sim. O módulo de agenda inclui visualização diária, criação e edição de consultas, solicitação online de agendamentos e configuração de horários da clínica e dos profissionais.",
    question: "O AkelMed tem agenda médica e agendamento online?",
  },
  {
    answer:
      "Sim. O prontuário eletrônico do AkelMed permite registrar a consulta, acompanhar histórico do paciente, gerar documentos clínicos e organizar o atendimento médico com mais agilidade.",
    question: "O sistema tem prontuário eletrônico?",
  },
  {
    answer:
      "Sim. Os planos foram pensados para atender desde consultórios menores até clínicas com operação maior, com limites de usuários e pacientes bem definidos e opção de contratação pelo WhatsApp.",
    question: "O AkelMed é indicado para gestão de clínicas de qual porte?",
  },
] as const;

const akelmedStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    applicationCategory: "BusinessApplication",
    description:
      "AkelMed é uma plataforma completa para gestão de consultórios e clínicas médicas, com módulos para agenda, atendimento, financeiro, pacientes e equipe.",
    name: "AkelMed",
    operatingSystem: "Web",
    url: `${siteUrl}/akelmed`,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: akelmedFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function AkelMedPublicPage() {
  return (
    <>
      <Navbar variant="light" />
      <ScrollMotion />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(akelmedStructuredData) }} />

      <main className="min-h-screen bg-[linear-gradient(180deg,#f7f5f1_0%,#f1ece4_100%)] text-slate-900">
        <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:py-10 lg:py-12">
          <div className="rounded-[2.25rem] border border-slate-200 bg-white/75 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur" data-reveal>
            <div className="relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
              <div className="scroll-parallax-media relative aspect-[16/9] min-h-[540px]" data-parallax="10">
                <Image
                  src="/images/akelmed/gemini-header-akelmed-3.png"
                  alt="Header do AkelMed com a interface do sistema em destaque"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/20 to-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

                <div className="absolute left-6 top-6 inline-flex items-center rounded-full border border-red-500/25 bg-red-950/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-red-50 shadow-[0_10px_30px_rgba(127,29,29,0.22)] backdrop-blur-md">
                  AkelMed
                </div>

                <div className="absolute left-6 top-24 max-w-xl rounded-[1.75rem] border border-white/12 bg-white/10 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:left-8 sm:top-28 sm:p-7">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-white/70">
                    Conheça nosso sistema:
                  </p>
                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[3.1rem] lg:leading-[1.04]">
                    A AkelMed é uma plataforma completa para gestão de consultórios e clínicas médicas.
                  </h1>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/82 sm:text-base">
                    Projetada com total isolamento de dados, o sistema organiza
                    as operações em módulos que atendem desde a recepção e o
                    financeiro até o atendimento clínico detalhado, com um
                    foco em clareza, organização e uma experiência de uso
                    premium.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/92">
                      Isolamento de dados
                    </span>
                    <span className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/92">
                      LGPD
                    </span>
                    <span className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/92">
                      Gestão clínica completa!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="max-w-3xl" data-reveal data-reveal-delay={60}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-900/70">
                Módulos da plataforma
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Todos os recursos que você precisa para organizar o seu consultório em um só lugar.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Veja como cada módulo do sistema AkelMed foi pensado para atender às necessidades específicas do seu consultório, desde a recepção até o atendimento médico e a gestão financeira, tudo interligado em uma experiência fluida e eficiente.
              </p>
            </div>

            <div className="mt-8 grid gap-6">
              {modules.map((module, index) => (
                <article
                  className="overflow-hidden rounded-[2rem] border border-red-500/15 bg-red-950/5 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                  key={module.title}
                  data-reveal
                  data-reveal-delay={index * 80 + 80}
                >
                  <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                    <div
                      className={[
                        "p-6 sm:p-8",
                        index % 2 === 1 ? "lg:order-2" : "",
                      ].join(" ")}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-red-900/60">
                        {module.title}
                      </p>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
                        {module.summary}
                      </p>
                    </div>

                    <div
                      className={[
                        "scroll-parallax-media relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px]",
                        index % 2 === 1 ? "lg:order-1" : "",
                      ].join(" ")}
                      data-parallax={index % 2 === 0 ? "12" : "8"}
                    >
                      <Image
                        alt={`${module.title} do AkelMed`}
                        className="h-full w-full object-cover object-center"
                        fill
                        sizes="(max-width: 1024px) 100vw, 52vw"
                        src={module.image}
                      />
                    </div>
                  </div>

                  <details className="group border-t border-red-500/10 bg-red-950/5 px-6 py-5 sm:px-8">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl border border-red-500/15 bg-white/90 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-red-200 hover:bg-red-50/60">
                      <span>Veja todas as funcionalidades deste módulo</span>
                      <span className="text-red-900 transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <div className="mt-5 columns-1 md:columns-2 md:gap-4">
                      {module.drawerItems.map((item) => (
                        <div
                          className="mb-4 inline-block w-full break-inside-avoid rounded-2xl border border-red-500/10 bg-white/95 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                          key={item.title}
                        >
                          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-900/75">
                            {item.title}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-700">
                            {item.description}
                          </p>

                          {item.subItems?.length ? (
                            <div className="mt-4 grid gap-3">
                              {item.subItems.map((subItem) => (
                                <div
                                  className="break-inside-avoid rounded-xl border border-red-500/10 bg-red-950/5 px-4 py-3"
                                  key={subItem.title}
                                >
                                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-900/70">
                                    {subItem.title}
                                  </p>
                                  <p className="mt-2 text-sm leading-7 text-slate-700">
                                    {subItem.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </div>


          <section className="mt-12" data-reveal data-reveal-delay={120}>
            <div className="max-w-3xl" data-reveal data-reveal-delay={60}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-900/70">
                Planos
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Escolha o plano que melhor encaixa na sua demanda.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Todos os planos contemplam implementação, treinamento e suporte online 24/7.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  className="flex h-full flex-col rounded-[2rem] border border-red-500/15 bg-red-950/5 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                  key={plan.name}
                  data-reveal
                  data-reveal-delay={plan.name === "START" ? 60 : plan.name === "PROFESSIONAL" ? 140 : 220}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-900/60">
                    Plano {plan.name}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    {plan.summary}
                  </p>

                  <div className="mt-6 flex-1 rounded-2xl border border-red-500/10 bg-white/90 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900/70">
                      Módulos
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {plan.includes.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-900/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 rounded-2xl border border-red-500/10 bg-red-950/5 p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900/70">
                        Limites
                      </p>
                      <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                        <p className="flex flex-wrap items-center gap-2">
                          <strong>Usuários:</strong> {plan.limits.users}
                          {plan.name === "ENTERPRISE" ? (
                            <span className="rounded-full border border-red-500/20 bg-red-900 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
                              Ilimitado
                            </span>
                          ) : null}
                        </p>
                        <p className="flex flex-wrap items-center gap-2">
                          <strong>Pacientes:</strong> {plan.limits.patients}
                          {plan.name === "ENTERPRISE" ? (
                            <span className="rounded-full border border-red-500/20 bg-red-900 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
                              Ilimitados
                            </span>
                          ) : null}
                        </p>
                      </div>
                    </div>

                    {plan.bonus?.length ? (
                      <div className="mt-5 rounded-2xl border border-red-500/10 bg-red-50 p-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-900/70">
                          Bonus
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                          {plan.bonus.map((item) => (
                            <li className="flex gap-3" key={item}>
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-900/70" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap items-end gap-2">
                      <p className="text-3xl font-semibold tracking-tight text-red-900">
                        {plan.price}
                      </p>
                      {plan.priceSuffix ? (
                        <p className="pb-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                          {plan.priceSuffix}
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                      {plan.noteBelowPrice}
                    </p>
                  </div>

                  <a
                    className="mt-3 inline-flex items-center justify-center rounded-full bg-red-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
                    href={buildWhatsAppLink(plan.name)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contrate
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-8 max-w-4xl text-xs leading-6 text-slate-500" data-reveal data-reveal-delay={180}>
              Todos os planos possuem avaliação gratuita por 7 dias. Após esse
              período, é cobrada a taxa de implementação no valor da
              mensalidade do plano escolhido. A primeira mensalidade é
              proporcional aos dias usados a partir da implementação.
            </p>

            <footer className="mt-14 overflow-hidden rounded-[2.5rem] border border-red-500/10 bg-[#111827] text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)]" data-reveal data-reveal-delay={220}>
              <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">
                    Entre em contato
                  </p>
                  <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                    Descubra como o AkelMed pode ajudar no dia a dia do seu consultório e transformar a gestão da sua clínica.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                    Fale com a gente para tirar dúvidas, e solicite uma demonstração gratuita do sistema, para conhecer na prática as funcionalidades e como elas podem facilitar a rotina do seu consultório.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      className="inline-flex items-center justify-center rounded-full bg-red-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
                      href={buildWhatsAppLink("START")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Falar no WhatsApp
                    </a>

                    <a
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                      href="mailto:arthur@akelm.com.br"
                    >
                      Enviar email
                    </a>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                      Contato
                    </p>
                    <div className="mt-3 space-y-2 text-sm leading-7 text-white/80">
                      <p>WhatsApp: (55) 99917-1727</p>
                      <p>Email: arthur@akelm.com.br</p>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                      Resumo
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      Gestão clínica, agendamento, prontuário, financeiro e
                      acessos em uma experiência mais clara e premium.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                      Redes sociais
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-red-900 hover:text-white"
                        href="https://www.instagram.com/akelmtecnologia/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram da Akelm Tecnologia"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>

                      <a
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-red-900 hover:text-white"
                        href="https://www.linkedin.com/company/akelm-tecnologia/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn da Akelm Tecnologia"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-5 sm:px-8 lg:px-10">
                <div className="flex flex-col gap-3 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">
                  <p>Akelm Tecnologia LTDA</p>
                  <p>Caçapava do Sul - RS</p>
                  <p>
                    &copy; {new Date().getFullYear()} Akelm Tecnologia. Todos
                    os direitos reservados.
                  </p>
                </div>
              </div>
            </footer>
          </section>
        </section>
      </main>
      <AkelMedFaqDrawer faqs={akelmedFaqs} />
    </>
  );
}




