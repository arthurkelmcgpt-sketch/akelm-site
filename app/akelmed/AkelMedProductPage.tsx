import Image from "next/image";
import { Montserrat, Oswald } from "next/font/google";
import {
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardList,
  Instagram,
  Linkedin,
  LockKeyhole,
  Stethoscope,
  UsersRound,
  WalletCards,
} from "lucide-react";

import Navbar from "@/components/Navbar/Navbar";
import AkelMedFaqDrawer from "./AkelMedFaqDrawer";

const headingFont = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const modules = [
  {
    icon: ChartNoAxesCombined,
    image: "/images/akelmed/tela-dashboard-4.png",
    summary:
      "Painel de controle em tempo real, com indicadores, consultas do dia, fluxo financeiro, produtividade e auditoria.",
    title: "Dashboard",
  },
  {
    icon: CalendarDays,
    image: "/images/akelmed/tela-agendamento-4.png",
    summary:
      "Agenda visual para organizar horários, receber solicitações online e controlar a rotina da recepção com mais agilidade.",
    title: "Agenda",
  },
  {
    icon: UsersRound,
    image: "/images/akelmed/tela-cadastro-3.png",
    summary:
      "Cadastro rápido, perfil completo do paciente, histórico clínico, financeiro e documentos sempre acessíveis.",
    title: "Gestão de Pacientes",
  },
  {
    icon: Stethoscope,
    image: "/images/akelmed/tela-prontuario-3.png",
    summary:
      "Prontuário eletrônico com atendimento SOAP, histórico, anexos, receitas, atestados e documentos clínicos.",
    title: "Atendimento Médico",
  },
  {
    icon: WalletCards,
    image: "/images/akelmed/tela-financeiro-3.png",
    summary:
      "Controle de contas a pagar e receber, baixa de pagamentos, categorias, contas financeiras e visão clara do caixa.",
    title: "Financeiro",
  },
  {
    icon: LockKeyhole,
    image: "/images/akelmed/tela-acesso-3.png",
    summary:
      "Usuários, perfis de acesso, matriz de permissões e auditoria para proteger a operação e os dados da clínica.",
    title: "Equipe e Acessos",
  },
] as const;

const plans = [
  {
    limits: ["Até 3 usuários", "Até 1000 pacientes"],
    name: "START",
    note: "Sem fidelidade",
    price: "R$ 149,00",
    suffix: "/mês",
    summary:
      "Ideal para consultórios menores ou que estão começando, mas não querem abrir mão de uma gestão completa.",
  },
  {
    limits: ["Até 10 usuários", "Até 5000 pacientes"],
    name: "PROFESSIONAL",
    note: "Ou R$ 399,00 sem fidelidade",
    price: "R$ 299,00",
    suffix: "/12 meses",
    summary:
      "Perfeito para consultórios de médio porte que buscam uma solução robusta e com ótimo custo-benefício.",
  },
  {
    limits: ["Usuários ilimitados", "Pacientes ilimitados", "Site profissional incluso"],
    name: "ENTERPRISE",
    note: "Ou R$ 990,00 sem fidelidade",
    price: "R$ 699,00",
    suffix: "/12 meses",
    summary:
      "Pensado para clínicas que desejam sistema completo, site público premium e agendamento online integrado à marca.",
  },
] as const;

const akelmedFaqs = [
  {
    answer:
      "Sim. O AkelMed foi criado para gestão de clínicas e consultórios médicos, reunindo agenda, pacientes, prontuário eletrônico, financeiro e controle de equipe em uma única plataforma web.",
    question: "O AkelMed serve para clínicas e consultórios médicos?",
  },
  {
    answer:
      "O sistema organiza a rotina em módulos de dashboard, agenda, gestão de pacientes, prontuário eletrônico, financeiro e permissões de acesso.",
    question: "Quais módulos o AkelMed oferece?",
  },
  {
    answer:
      "Sim. O módulo de agenda inclui visualização diária, criação e edição de consultas, solicitação online de agendamentos e configuração de horários.",
    question: "O AkelMed tem agenda médica e agendamento online?",
  },
  {
    answer:
      "Sim. O prontuário eletrônico permite registrar a consulta, acompanhar histórico do paciente, gerar documentos clínicos e organizar o atendimento médico.",
    question: "O sistema tem prontuário eletrônico?",
  },
] as const;

const buildWhatsAppLink = (planName = "AkelMed") => {
  const message = `Olá, quero saber mais sobre o plano *${planName}* do sistema AkelMed`;

  return `https://wa.me/5555999171727?text=${encodeURIComponent(message)}`;
};

export default function AkelMedProductPage() {
  return (
    <>
      <Navbar variant="hero" />

      <main
        className={`${bodyFont.className} min-h-screen overflow-hidden bg-[#111827] text-[#111827]`}
      >
        <section className="relative flex min-h-screen items-end overflow-hidden bg-[#111827] px-6 pb-20 pt-28 text-white">
          <Image
            src="/images/akelmed-sales-bkg-3.png"
            alt=""
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.96)_0%,rgba(17,24,39,0.72)_48%,rgba(17,24,39,0.28)_100%),linear-gradient(180deg,rgba(17,24,39,0.12)_0%,rgba(17,24,39,0.86)_100%)]" />
          <div className="absolute right-[9%] top-[20%] hidden h-48 w-48 rounded-full border border-[#991b1b]/40 bg-[#991b1b]/16 blur-[1px] cargaviva-presentation-orbit lg:block" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
            <div>
              <Image
                src="/images/akelmed/akelmedwhite-logo.png"
                alt="AkelMed"
                width={300}
                height={115}
                priority
                className="mb-8 h-auto w-56 object-contain sm:w-64"
              />
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-red-300">
                Sistema para clínicas e consultórios
              </p>
              <h1
                className={`${headingFont.className} mt-5 max-w-5xl text-[clamp(3.2rem,7.6vw,7.8rem)] font-bold uppercase leading-[0.9] tracking-[-0.055em] text-white`}
              >
                Gestão médica completa, clara e segura.
              </h1>
              <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/78 sm:text-lg">
                O AkelMed organiza agenda, pacientes, prontuário, financeiro e
                equipe em uma plataforma web pensada para facilitar o dia a dia
                de clínicas e consultórios médicos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#planos"
                  className="inline-flex bg-red-900 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-red-800"
                >
                  Conhecer planos
                </a>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex border border-white/20 bg-white/10 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:-translate-y-1 hover:border-red-300 hover:bg-red-900"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-3 lg:pb-4">
              {["Agenda online", "Prontuário eletrônico", "Financeiro", "Permissões e auditoria"].map((item, index) => (
                <div
                  key={item}
                  className={[
                    "cargaviva-presentation-sheen border border-white/10 bg-white/10 p-5 text-white shadow-[0_22px_60px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-red-300/55 hover:bg-red-950/30",
                    index % 2 === 1 ? "lg:ml-8" : "",
                  ].join(" ")}
                >
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-red-300">
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

        <section className="bg-[#f3f4f6] px-6 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-red-900">
                Visão geral
              </p>
              <h2
                className={`${headingFont.className} mt-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#111827] sm:text-6xl`}
              >
                Uma plataforma para tirar a clínica do improviso.
              </h2>
              <p className="mt-6 text-sm font-medium leading-7 text-slate-600">
                Projetado com isolamento de dados, LGPD e uma experiência de uso
                premium, o AkelMed centraliza a operação clínica sem complicar a
                rotina da recepção, dos médicos e da gestão.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.08)]">
              <Image
                src="/images/akelmed/gemini-header-akelmed-3.png"
                alt="Tela do sistema AkelMed"
                width={1200}
                height={630}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-red-900">
                Módulos da plataforma
              </p>
              <h2
                className={`${headingFont.className} mt-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#111827] sm:text-6xl`}
              >
                Tudo que você precisa em um só lugar.
              </h2>
            </div>

            <div className="mt-12 grid gap-1">
              {modules.map((module, index) => {
                const Icon = module.icon;

                return (
                  <article
                    key={module.title}
                    className="grid gap-0 overflow-hidden border border-slate-200 bg-[#f9fafb] shadow-[0_22px_70px_rgba(15,23,42,0.06)] lg:grid-cols-[0.42fr_0.58fr]"
                  >
                    <div
                      className={[
                        "p-7 sm:p-9",
                        index % 2 === 1 ? "lg:order-2" : "",
                      ].join(" ")}
                    >
                      <span className="flex h-12 w-12 items-center justify-center bg-red-900 text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3
                        className={`${headingFont.className} mt-8 text-4xl font-bold uppercase leading-none tracking-[-0.04em] text-[#111827]`}
                      >
                        {module.title}
                      </h3>
                      <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
                        {module.summary}
                      </p>
                    </div>

                    <div
                      className={[
                        "relative min-h-[290px] bg-slate-950 lg:min-h-[430px]",
                        index % 2 === 1 ? "lg:order-1" : "",
                      ].join(" ")}
                    >
                      <Image
                        src={module.image}
                        alt={`${module.title} do AkelMed`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover object-center"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="planos" className="bg-[#111827] px-6 py-24 text-white sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-red-300">
                Planos
              </p>
              <h2
                className={`${headingFont.className} mt-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-6xl`}
              >
                Escolha o plano que encaixa na sua demanda.
              </h2>
              <p className="mt-6 text-sm font-medium leading-7 text-white/72">
                Todos os planos contemplam implementação, treinamento e suporte
                online 24/7.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className="flex h-full flex-col border border-white/10 bg-white/8 p-7 shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur transition hover:-translate-y-1 hover:border-red-300/45 hover:bg-white/12"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-red-300">
                    Plano {plan.name}
                  </p>
                  <h3
                    className={`${headingFont.className} mt-4 text-4xl font-bold uppercase tracking-[-0.04em]`}
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-7 text-white/72">
                    {plan.summary}
                  </p>
                  <ul className="mt-6 grid gap-2 text-sm font-semibold leading-6 text-white/78">
                    {plan.limits.map((item) => (
                      <li key={item} className="border-l-4 border-red-700 bg-black/16 px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <div className="flex flex-wrap items-end gap-2">
                      <strong className="text-4xl font-extrabold text-red-300">
                        {plan.price}
                      </strong>
                      <span className="pb-1 text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                        {plan.suffix}
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/48">
                      {plan.note}
                    </p>
                    <a
                      href={buildWhatsAppLink(plan.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex w-full justify-center bg-red-900 px-5 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-red-800"
                    >
                      Contratar
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f4f6] px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-red-900">
                Contato
              </p>
              <h2
                className={`${headingFont.className} mt-4 text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#111827]`}
              >
                Veja o AkelMed funcionando na prática.
              </h2>
              <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-slate-600">
                Fale com a gente para tirar dúvidas e solicitar uma demonstração
                gratuita do sistema.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex bg-red-900 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-red-800"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="mailto:arthur@akelm.com.br"
                  className="inline-flex border border-slate-300 bg-white px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#111827] transition hover:-translate-y-1 hover:border-red-900 hover:text-red-900"
                >
                  Enviar email
                </a>
              </div>
            </div>

            <div className="grid gap-4 bg-[#111827] p-7 text-white">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-red-300">
                Akelm Tecnologia
              </p>
              <p className="text-sm font-medium leading-7 text-white/72">
                Caçapava do Sul - RS
                <br />
                WhatsApp: (55) 99917-1727
                <br />
                Email: arthur@akelm.com.br
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/akelmtecnologia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram da Akelm Tecnologia"
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/12 bg-white/8 text-white transition hover:bg-red-900"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/akelm-tecnologia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn da Akelm Tecnologia"
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/12 bg-white/8 text-white transition hover:bg-red-900"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AkelMedFaqDrawer faqs={akelmedFaqs} />
    </>
  );
}
