import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarDays,
  LayoutDashboard,
  LockKeyhole,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import AkelMedScrollMotion from "./AkelMedScrollMotion";

const inter = Inter({ subsets: ["latin"] });

type Highlight = {
  description: string;
  icon: LucideIcon;
  pill: string;
  pillTone: "brand" | "neutral" | "success";
  title: string;
};

type CapabilityGroup = {
  description: string;
  items: string[];
  title: string;
};

const summaryCards = [
  {
    description:
      "Visão rápida do plano, indicadores da clínica, compromissos do dia, retornos próximos, pendências e movimentações recentes.",
    label: "Painel clínico",
    value: "Centro de controle",
  },
  {
    description:
      "Cadastro completo com dados administrativos, convênio, histórico de saúde, consentimentos e visão financeira do paciente.",
    label: "Pacientes",
    value: "Base clínica unificada",
  },
  {
    description:
      "Atendimento com SOAP, sinais vitais, perfil clínico, prescrições, exames, documentos e anexos no mesmo fluxo.",
    label: "Atendimento",
    value: "Prontuário em produção",
  },
  {
    description:
      "Recebimentos, despesas, baixas, estornos, lançamentos automáticos da agenda e extrato individual por paciente.",
    label: "Financeiro",
    value: "Rotina financeira conectada",
  },
] as const;

const workflowHighlights: Highlight[] = [
  {
    description:
      "Acompanhe assinatura, indicadores da operação, leitura financeira, compromissos do dia, retornos previstos, atividades recentes e solicitações que exigem ação.",
    icon: LayoutDashboard,
    pill: "Dashboard",
    pillTone: "brand",
    title: "Leitura imediata do que está rodando bem e do que virou gargalo",
  },
  {
    description:
      "Organize agenda diária por horários e capacidade, acompanhe a visão geral, trate cancelamentos e processe solicitações recebidas pelo canal online.",
    icon: CalendarDays,
    pill: "Agenda",
    pillTone: "neutral",
    title: "Agenda configurável com fila digital e controle real de disponibilidade",
  },
  {
    description:
      "Encontre pacientes com busca e autocomplete, acesse a ficha completa e navegue por dados administrativos, contatos, LGPD, histórico clínico e extrato.",
    icon: Users,
    pill: "Pacientes",
    pillTone: "success",
    title: "Cada paciente com contexto clínico, operacional e financeiro no mesmo lugar",
  },
];

const governanceHighlights: Highlight[] = [
  {
    description:
      "Autenticação, perfil próprio, troca de senha, bloqueio por tentativas inválidas, usuários por função, perfis personalizados e controle de acesso por tela.",
    icon: ShieldCheck,
    pill: "Acessos",
    pillTone: "brand",
    title: "Permissões organizadas de acordo com a função de cada pessoa na clínica",
  },
  {
    description:
      "Defina dias ativos, turnos, intervalos por horário, acompanhe trilhas de auditoria e monitore o uso do plano por usuários e pacientes.",
    icon: CalendarDays,
    pill: "Operação interna",
    pillTone: "neutral",
    title: "Configurações que sustentam agenda, rotina interna e regras de uso",
  },
  {
    description:
      "Publique o link da clínica, receba solicitações online, use API autenticada para consultar horários e criar pedidos, além de cobrança com comprovante e webhooks.",
    icon: LockKeyhole,
    pill: "Canais digitais",
    pillTone: "success",
    title: "Agenda fora do balcão, sem perder controle dentro do sistema",
  },
];

const capabilityGroups: CapabilityGroup[] = [
  {
    description: "Visibilidade imediata da rotina, sem depender de várias telas abertas ao mesmo tempo.",
    items: [
      "Dashboard com situação do plano, indicadores, gráficos, agenda do dia e retornos programados",
      "Pendências de solicitação e visão financeira resumida conforme o perfil de acesso",
      "Atividades recentes da equipe para acompanhar recepção, atendimento e operação",
    ],
    title: "Dashboard e rotina diária",
  },
  {
    description: "Controle da agenda interna e da entrada online com regras claras de disponibilidade.",
    items: [
      "Agenda diária com mapa de horários, capacidade por faixa, vagas livres e encaixes parciais",
      "Visão geral e lista de cancelados com criação, edição, cancelamento e reativação de consultas",
      "Configuração de dias ativos, turnos, intervalo por slot e fila de solicitações recebidas online",
    ],
    title: "Agenda e solicitações online",
  },
  {
    description: "Cadastro do paciente tratado como base operacional da clínica, não como formulário solto.",
    items: [
      "Busca, autocomplete, criação, edição e ficha completa do paciente",
      "Dados civis, contatos, endereço, convênio, responsável, emergência e preferência de comunicação",
      "Consentimento LGPD, linha do tempo clínica e extrato financeiro individual",
    ],
    title: "Pacientes e cadastro",
  },
  {
    description: "Área clínica preparada para registrar atendimento de forma prática e documentada.",
    items: [
      "Lista de atendimentos por data e status, abertura pela consulta agendada e prontuário SOAP",
      "Sinais vitais, perfil clínico contínuo, anexos e retorno por data fixa ou por quantidade de dias",
      "Receitas comuns, antibióticas e controladas, exames, aviso de retorno, atestado e declaração",
    ],
    title: "Atendimento e prontuário",
  },
  {
    description: "Financeiro ligado ao que acontece na agenda e no histórico do paciente.",
    items: [
      "Painel com caixa do dia, contas a receber, contas a pagar, vencimentos e lançamentos recentes",
      "Lançamentos manuais e recebíveis gerados a partir da agenda, com baixa, estorno e cancelamento",
      "Cadastros de categorias, contas, formas de pagamento, centros de custo e comprovante de baixa",
    ],
    title: "Financeiro e cobrança",
  },
  {
    description: "Estrutura de acesso e operação para manter o sistema sob controle no dia a dia.",
    items: [
      "Usuários com papel, sede, CRM/UF, status ativo ou inativo, troca de senha e perfil próprio",
      "Perfis personalizados com menus, blocos do dashboard, permissões operacionais e auditoria de ações",
      "Limites por plano, envio de comprovante da assinatura e API autenticada de agendamento",
    ],
    title: "Equipe, acessos e assinatura",
  },
];

const demoDetails = [
  {
    label: "Roteiro",
    value: "Visão guiada por dashboard, agenda, pacientes, prontuário, financeiro, acessos e assinatura",
  },
  {
    label: "Perfil",
    value: "Clínicas e consultórios com recepção, equipe médica e operação multiusuário",
  },
  {
    label: "Integrações",
    value: "Link público de agendamento, API autenticada e fila online",
  },
] as const;

const pillToneClass = {
  brand: "status-pill status-pill-brand",
  neutral: "status-pill status-pill-neutral",
  success: "status-pill status-pill-success",
} as const;

export default function AkelMedPublicPage() {
  return (
    <>
      <Navbar variant="light" />
      <AkelMedScrollMotion />

      <main className={`${inter.className} akelmed-page`}>
        <div className="akelmed-shell">
          <section
            className="surface-hero"
            data-reveal
            data-reveal-delay={40}
            data-reveal-origin="up"
          >
            <div
              className="surface-hero-copy"
              data-reveal
              data-reveal-delay={80}
              data-reveal-origin="left"
            >
              <span className="page-eyebrow">AkelMed</span>

              <h1>Agenda, prontuário, pacientes e financeiro trabalhando juntos e totalmente em conformidade com a lei Geral de Proteção de Dados (LGPD).</h1>

              <p>
                O AkelMed reúne a visão operacional da clínica, a agenda com
                horários configuráveis, o cadastro de pacientes, o atendimento
                estruturado, os documentos médicos, o financeiro e o controle
                de acessos em uma única plataforma pensada para rotina real.
              </p>

              <div className="surface-hero-actions">
                <a
                  href="https://wa.me/5555999171727"
                  className="ak-button ak-button-primary"
                >
                  Solicitar demonstração
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/downloads/Apresentacao-Akelmed.pdf"
                  download="Apresentacao-Akelmed.pdf"
                  className="ak-button ak-button-secondary"
                >
                  Receber apresentação
                </a>
              </div>

              <div className="surface-hero-meta">
                <div className="hero-meta-pill">
                  Visão
                  <strong>Dashboard, agenda, pacientes, atendimento, financeiro e acessos em um só fluxo</strong>
                </div>

                <div className="hero-meta-pill">
                  Alcance
                  <strong>Da recepção e da agenda do dia até o prontuário e a cobrança</strong>
                </div>

                <div className="hero-meta-pill">
                  Canais
                  <strong>Agendamento público, fila online e integração por API autenticada</strong>
                </div>
              </div>
            </div>

            <div
              className="surface-hero-side"
              data-reveal
              data-reveal-delay={140}
              data-reveal-origin="right"
            >
              <article
                className="summary-card summary-card-brand"
                data-reveal
                data-reveal-delay={120}
                data-reveal-origin="right"
              >
                <span>Cobertura do produto</span>
                <strong>Recepção, agenda, prontuário e financeiro deixam de viver separados e passam a operar no mesmo ambiente.</strong>
                <small>
                  A plataforma cobre dashboard, agenda, solicitações online,
                  pacientes, atendimento, documentos, financeiro, usuários,
                  permissões, auditoria e assinatura.
                </small>
              </article>

              <div
                className="akelmed-image-card"
                data-reveal
                data-reveal-delay={180}
                data-reveal-origin="right"
              >
                <div className="akelmed-preview-caption">
                  <span className="status-pill status-pill-neutral">Dashboard da clínica</span>
                  <p>Plano, agenda, retornos, pendências e atividades recentes condensados em uma única leitura.</p>
                </div>

                <div className="akelmed-parallax-media" data-parallax="18">
                  <Image
                    src="/images/akelmed/dashboard2.png"
                    alt="Dashboard operacional do AkelMed"
                    width={1600}
                    height={1000}
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="summary-grid" aria-label="Resumo do AkelMed">
            {summaryCards.map((card, index) => (
              <article
                className="summary-card"
                data-reveal
                data-reveal-delay={80 + index * 70}
                data-reveal-origin={index % 2 === 0 ? "left" : "right"}
                key={card.label}
              >
                <span>{card.label}</span>
                <strong>{card.value}</strong>
                <small>{card.description}</small>
              </article>
            ))}
          </section>

          <section
            className="module-panel"
            data-reveal
            data-reveal-delay={40}
            data-reveal-origin="up"
          >
            <div
              className="section-heading"
              data-reveal
              data-reveal-delay={90}
              data-reveal-origin="up"
            >
              <div>
  <span className="section-kicker">Financeiro</span>
  <h2>O painel financeiro mostra o que entrou, o que vence e o que exige ação antes de virar problema.</h2>
  <p>
    Caixa do dia, contas a receber e a pagar, lançamentos recentes,
    vencimentos, inadimplência e recebíveis gerados pela agenda em
    uma visão objetiva para a gestão financeira da clínica.
  </p>
</div>

              <span className="status-pill status-pill-brand">Fluxo da recepção</span>
            </div>

            <div className="akelmed-showcase">
              <div
                className="akelmed-image-card"
                data-reveal
                data-reveal-delay={150}
                data-reveal-origin="left"
              >
                <div className="akelmed-parallax-media" data-parallax="16">
                  <Image
                    src="/images/akelmed/financeiro.png"
                    alt="Dashboard, agenda e módulos operacionais do AkelMed"
                    width={1600}
                    height={1200}
                  />
                </div>
              </div>

              <div className="akelmed-feature-list">
                {workflowHighlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      className="akelmed-feature-item"
                      data-reveal
                      data-reveal-delay={200 + index * 80}
                      data-reveal-origin={index % 2 === 0 ? "right" : "up"}
                      key={item.title}
                    >
                      <div className="akelmed-icon-chip">
                        <Icon size={20} />
                      </div>

                      <div>
                        <span className={pillToneClass[item.pillTone]}>{item.pill}</span>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="akelmed-panel-grid">
            <article
              className="module-panel"
              data-reveal
              data-reveal-delay={40}
              data-reveal-origin="left"
            >
              <div
                className="section-heading"
                data-reveal
                data-reveal-delay={90}
                data-reveal-origin="up"
              >
                <div>
                  <span className="section-kicker">Atendimento</span>
                  <h2>Prontuário estruturado para registrar o atendimento sem quebrar a linha de raciocínio médica.</h2>
                  <p>
                    O fluxo parte da consulta agendada e segue para SOAP,
                    sinais vitais, perfil clínico, prescrições, exames,
                    retorno, observações e anexos com continuidade, sem virar
                    um conjunto de telas soltas.
                  </p>
                </div>

                <span className="status-pill status-pill-success">Prontuário estruturado</span>
              </div>

              <div className="akelmed-stack">
                <div
                  className="akelmed-image-card"
                  data-reveal
                  data-reveal-delay={150}
                  data-reveal-origin="left"
                >
                  <div className="akelmed-parallax-media" data-parallax="14">
                    <Image
                      src="/images/akelmed/prontuario2.png"
                      alt="Prontuário eletrônico e atendimento médico do AkelMed"
                      width={1600}
                      height={1000}
                    />
                  </div>
                </div>

                <div className="detail-list">
                  <div
                    className="detail-item"
                    data-reveal
                    data-reveal-delay={210}
                    data-reveal-origin="right"
                  >
                    <span>Prontuário</span>
                    <strong>Registro clínico em SOAP com subjetivo, objetivo, avaliação, plano e observações dentro de uma estrutura consistente.</strong>
                  </div>

                  <div
                    className="detail-item"
                    data-reveal
                    data-reveal-delay={270}
                    data-reveal-origin="right"
                  >
                    <span>Perfil clínico</span>
                    <strong>Tipo sanguíneo, alergias, doenças crônicas, medicação contínua, cirurgias, gestação, deficiência e histórico familiar em visão contínua.</strong>
                  </div>

                  <div
                    className="detail-item"
                    data-reveal
                    data-reveal-delay={330}
                    data-reveal-origin="right"
                  >
                    <span>Documentos</span>
                    <strong>Receitas por categoria, solicitação de exames, aviso de retorno, atestado e declaração emitidos a partir do próprio atendimento.</strong>
                  </div>
                </div>
              </div>
            </article>

            <article
              className="module-panel"
              data-reveal
              data-reveal-delay={110}
              data-reveal-origin="right"
            >
              <div
                className="section-heading"
                data-reveal
                data-reveal-delay={150}
                data-reveal-origin="up"
              >
                <div>
                  <span className="section-kicker">Equipe e acessos</span>
                  <h2>Usuários, permissões, horários e assinatura organizados sob a mesma camada de controle.</h2>
                  <p>
                    Não é só agenda e prontuário. O sistema também cobre a base
                    que mantém a clínica de pé: autenticação, perfis
                    personalizados, auditoria, horários operacionais, limites do
                    plano, agendamento online e validação da assinatura.
                  </p>
                </div>

                <span className="status-pill status-pill-neutral">Governança da clínica</span>
              </div>

              <div className="akelmed-stack">
                <div
                  className="akelmed-image-card"
                  data-reveal
                  data-reveal-delay={210}
                  data-reveal-origin="right"
                >
                  <div className="akelmed-parallax-media" data-parallax="14">
                    <Image
                      src="/images/akelmed/acessos2.png"
                      alt="Controle de acessos e administração do AkelMed"
                      width={1600}
                      height={1000}
                    />
                  </div>
                </div>

                <div className="akelmed-feature-list">
                  {governanceHighlights.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <article
                        className="akelmed-feature-item"
                        data-reveal
                        data-reveal-delay={270 + index * 80}
                        data-reveal-origin={index % 2 === 0 ? "left" : "up"}
                        key={item.title}
                      >
                        <div className="akelmed-icon-chip">
                          <Icon size={20} />
                        </div>

                        <div>
                          <span className={pillToneClass[item.pillTone]}>{item.pill}</span>
                          <strong>{item.title}</strong>
                          <p>{item.description}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </article>
          </section>

          <section
            className="module-panel"
            data-reveal
            data-reveal-delay={40}
            data-reveal-origin="up"
          >
            <div
              className="section-heading"
              data-reveal
              data-reveal-delay={90}
              data-reveal-origin="up"
            >
              <div>
                <span className="section-kicker">Funcionalidades</span>
                <h2>O AkelMed cobre a operação prática da clínica, não só uma vitrine de módulos soltos.</h2>
                <p>
                  A organização abaixo separa o sistema pelas frentes que a
                  equipe realmente usa no dia a dia: visão operacional, agenda,
                  pacientes, prontuário, financeiro, acessos, assinatura e
                  entrada online.
                </p>
              </div>

              <span className="status-pill status-pill-brand">Escopo atual do sistema</span>
            </div>

            <div className="akelmed-module-grid">
              {capabilityGroups.map((group, index) => (
                <article
                  className="akelmed-module-tile"
                  data-reveal
                  data-reveal-delay={160 + index * 65}
                  data-reveal-origin={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
                  key={group.title}
                >
                  <span className="status-pill status-pill-neutral">Módulo</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>

                  <ul className="feature-bullet-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="demo"
            className="module-panel akelmed-cta-panel"
            data-reveal
            data-reveal-delay={40}
            data-reveal-origin="up"
          >
            <div data-reveal data-reveal-delay={90} data-reveal-origin="left">
              <span className="section-kicker">Demonstração</span>
              <h2>Veja na pratica como o AkelMed pode ajudar você e sua equipe no dia a dia.</h2>
              <p>
                Entre em contato conosco e solicite uma demonstração.
              </p>

              <div className="surface-hero-actions">
                <a
                  href="https://wa.me/5555999171727"
                  className="ak-button ak-button-primary"
                >
                  Falar no WhatsApp
                  <ArrowRight size={18} />
                </a>

                <a
                  href="mailto:arthur.kelm@outlook.com"
                  className="ak-button ak-button-ghost"
                >
                  Enviar email
                </a>
              </div>
            </div>

            <div
              className="akelmed-cta-notes"
              data-reveal
              data-reveal-delay={150}
              data-reveal-origin="right"
            >
              <div className="detail-list">
                {demoDetails.map((item, index) => (
                  <div
                    className="detail-item"
                    data-reveal
                    data-reveal-delay={210 + index * 70}
                    data-reveal-origin="right"
                    key={item.label}
                  >
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer variant="light" />
    </>
  );
}
