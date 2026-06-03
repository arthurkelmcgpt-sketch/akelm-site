"use client";

import { type FormEvent, useMemo, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  RotateCcw,
} from "lucide-react";

type Answer = {
  label: string;
  next: string;
  score?: number;
  tags?: string[];
  value: string;
};

type Question = {
  id: string;
  answers: Answer[];
  eyebrow: string;
  title: string;
};

type SelectedAnswer = {
  answer: Answer;
  question: Question;
};

type Solution = {
  feature: string;
  proof: string;
  text: string;
  title: string;
};

type DiagnosticPoint = {
  evidence: string;
  solutionTags: string[];
  title: string;
  weight: number;
};

type SolutionMatch = Solution & {
  reasons: string[];
};

type NarrativeParagraph = {
  text: string;
};

type ProfileReport = {
  focus: string;
  title: string;
};

type ContactInfo = {
  city: string;
  name: string;
  phone: string;
};

type ParticipantTag = "profile_driver" | "profile_office" | "profile_requester";

type AppFeature = {
  profiles: ParticipantTag[];
  title: string;
};

type PdfImage = {
  data: string;
  height: number;
  name: string;
  ratio: number;
  width: number;
};

const questions: Record<string, Question> = {
  start: {
    id: "start",
    eyebrow: "Perfil",
    title: "Qual e o seu papel na operacao de fretes?",
    answers: [
      {
        label: "Sou de um escritorio ou equipe administrativa",
        value: "atua como escritorio ou equipe administrativa",
        next: "office_type",
        tags: ["profile_office"],
      },
      {
        label: "Sou caminhoneiro ou transportador",
        value: "atua como caminhoneiro ou transportador",
        next: "driver_work_source",
        tags: ["profile_driver"],
      },
      {
        label: "Sou solicitante avulso de fretes",
        value: "atua como solicitante avulso de fretes",
        next: "requester_frequency",
        tags: ["profile_requester"],
      },
    ],
  },
  office_type: {
    id: "office_type",
    eyebrow: "Tipo de escritorio",
    title: "Que tipo de operacao mais parece com a sua?",
    answers: [
      {
        label: "Escritorio pequeno ou familiar",
        value: "opera como escritorio pequeno ou familiar",
        next: "office_role",
        tags: ["small_office", "structured_request"],
        score: 4,
      },
      {
        label: "Remate, leiloeira ou evento agropecuario",
        value: "opera em remates, leiloeiras ou eventos agropecuarios",
        next: "office_role",
        tags: ["auction_event", "peak_operation", "desktop_control"],
        score: 10,
      },
      {
        label: "Assessoria que atende varios clientes",
        value: "atua como assessoria com varios clientes",
        next: "office_role",
        tags: ["advisory", "standardization", "desktop_control"],
        score: 8,
      },
      {
        label: "Sindicato, cooperativa ou associacao",
        value: "atua como sindicato, cooperativa ou associacao",
        next: "office_role",
        tags: ["cooperative", "driver_matching", "history_trace"],
        score: 6,
      },
      {
        label: "Escritorio grande com equipe dividida",
        value: "opera como escritorio grande com equipe dividida",
        next: "office_role",
        tags: ["large_office", "governance", "desktop_control"],
        score: 12,
      },
    ],
  },
  office_role: {
    id: "office_role",
    eyebrow: "Responsabilidade",
    title: "Qual papel o escritorio assume no frete?",
    answers: [
      {
        label: "Apenas indica motoristas",
        value: "apenas indica motoristas",
        next: "office_volume",
        tags: ["driver_matching", "previous_service"],
        score: 4,
      },
      {
        label: "Coordena cliente, motorista e agenda",
        value: "coordena cliente, motorista e agenda",
        next: "office_volume",
        tags: ["workflow_core", "status_tracking", "chat_history"],
        score: 8,
      },
      {
        label: "Contrata ou intermedeia a contratacao",
        value: "contrata ou intermedeia a contratacao",
        next: "office_volume",
        tags: ["payment_flow", "history_trace", "legal_responsibility"],
        score: 12,
      },
      {
        label: "Acompanha ate entrega, pagamento ou fechamento",
        value: "acompanha entrega, pagamento ou fechamento",
        next: "office_volume",
        tags: ["full_cycle", "live_tracking", "payment_flow", "rating"],
        score: 12,
      },
    ],
  },
  office_volume: {
    id: "office_volume",
    eyebrow: "Volume",
    title: "Qual volume aproximado de fretes passa pelo escritorio?",
    answers: [
      {
        label: "Ate 30 fretes por mes",
        value: "tem ate 30 fretes por mes",
        next: "office_entry",
        tags: ["starter_fit"],
        score: 4,
      },
      {
        label: "Entre 30 e 100 fretes por mes",
        value: "tem entre 30 e 100 fretes por mes",
        next: "office_entry",
        tags: ["desktop_control", "status_tracking"],
        score: 8,
      },
      {
        label: "Mais de 100 fretes por mes",
        value: "tem mais de 100 fretes por mes",
        next: "office_entry",
        tags: ["scale_pressure", "desktop_control", "governance"],
        score: 14,
      },
      {
        label: "Poucos dias concentram muitos fretes",
        value: "tem picos concentrados em poucos dias",
        next: "office_entry",
        tags: ["peak_operation", "desktop_control", "status_tracking"],
        score: 14,
      },
    ],
  },
  office_entry: {
    id: "office_entry",
    eyebrow: "Entrada do pedido",
    title: "Como a solicitacao de frete chega hoje?",
    answers: [
      {
        label: "WhatsApp, audio ou ligacao",
        value: "recebe solicitacoes por WhatsApp, audio ou ligacao",
        next: "office_request_quality",
        tags: ["structured_request", "intake_informal", "history_trace"],
        score: 12,
      },
      {
        label: "Planilha preenchida pela equipe",
        value: "organiza solicitacoes em planilha",
        next: "office_request_quality",
        tags: ["structured_request", "desktop_control", "manual_control"],
        score: 8,
      },
      {
        label: "Formulario ou sistema proprio",
        value: "usa formulario ou sistema proprio",
        next: "office_request_quality",
        tags: ["structured_request", "medium_maturity"],
        score: 4,
      },
      {
        label: "Cada cliente manda de um jeito",
        value: "recebe cada solicitacao em um formato diferente",
        next: "office_request_quality",
        tags: ["structured_request", "standardization", "rework"],
        score: 12,
      },
    ],
  },
  office_request_quality: {
    id: "office_request_quality",
    eyebrow: "Dados do frete",
    title: "Os dados do frete costumam chegar completos?",
    answers: [
      {
        label: "Sim, quase sempre",
        value: "normalmente recebe dados completos",
        next: "office_driver_source",
        tags: ["medium_maturity"],
      },
      {
        label: "Nao, faltam origem, destino, peso ou horario",
        value: "precisa completar origem, destino, peso ou horario depois",
        next: "office_driver_source",
        tags: ["structured_request", "rework", "route_distance"],
        score: 10,
      },
      {
        label: "So ficam completos perto do carregamento",
        value: "so completa dados perto do carregamento",
        next: "office_driver_source",
        tags: ["structured_request", "gta_module", "operational_risk"],
        score: 12,
      },
      {
        label: "Depende muito do cliente ou evento",
        value: "a qualidade dos dados depende do cliente ou evento",
        next: "office_driver_source",
        tags: ["standardization", "desktop_control"],
        score: 8,
      },
    ],
  },
  office_driver_source: {
    id: "office_driver_source",
    eyebrow: "Motoristas",
    title: "Como o escritorio escolhe ou encontra motoristas?",
    answers: [
      {
        label: "Agenda de contatos conhecidos",
        value: "usa agenda de contatos conhecidos",
        next: "office_driver_choice",
        tags: ["driver_matching", "previous_service"],
        score: 6,
      },
      {
        label: "Grupos de WhatsApp",
        value: "procura motoristas em grupos de WhatsApp",
        next: "office_driver_choice",
        tags: ["driver_matching", "difficult_comparison", "chat_history"],
        score: 10,
      },
      {
        label: "Memoria da equipe",
        value: "depende da memoria da equipe para achar motorista",
        next: "office_driver_choice",
        tags: ["driver_matching", "key_person_dependency", "history_trace"],
        score: 10,
      },
      {
        label: "Base organizada de parceiros",
        value: "tem base organizada de parceiros",
        next: "office_driver_choice",
        tags: ["previous_service", "rating", "medium_maturity"],
        score: 4,
      },
    ],
  },
  office_driver_choice: {
    id: "office_driver_choice",
    eyebrow: "Criterio",
    title: "O que mais pesa para escolher o caminhoneiro?",
    answers: [
      {
        label: "Distancia, raio de atuacao e disponibilidade",
        value: "prioriza distancia, raio de atuacao e disponibilidade",
        next: "office_documents",
        tags: ["route_distance", "driver_matching", "truck_profile"],
        score: 8,
      },
      {
        label: "Historico de servicos anteriores",
        value: "prioriza historico de servicos anteriores",
        next: "office_documents",
        tags: ["previous_service", "history_trace"],
        score: 6,
      },
      {
        label: "Preco e condicao de pagamento",
        value: "prioriza preco e condicao de pagamento",
        next: "office_documents",
        tags: ["pricing_estimate", "payment_flow"],
        score: 6,
      },
      {
        label: "Avaliacao e confiabilidade",
        value: "prioriza avaliacao e confiabilidade",
        next: "office_documents",
        tags: ["rating", "driver_matching"],
        score: 6,
      },
    ],
  },
  office_documents: {
    id: "office_documents",
    eyebrow: "Documentos",
    title: "Quando documentos e GTA sao conferidos?",
    answers: [
      {
        label: "Antes de buscar motorista",
        value: "confere documentos antes de buscar motorista",
        next: "office_monitoring",
        tags: ["gta_module", "medium_maturity"],
      },
      {
        label: "Durante a negociacao",
        value: "confere documentos durante a negociacao",
        next: "office_monitoring",
        tags: ["gta_module", "document_gate"],
        score: 8,
      },
      {
        label: "Perto do carregamento",
        value: "confere documentos perto do carregamento",
        next: "office_monitoring",
        tags: ["gta_module", "operational_risk"],
        score: 12,
      },
      {
        label: "Nao existe um padrao claro",
        value: "nao tem padrao claro de conferencia documental",
        next: "office_monitoring",
        tags: ["gta_module", "standardization", "history_trace"],
        score: 12,
      },
    ],
  },
  office_monitoring: {
    id: "office_monitoring",
    eyebrow: "Acompanhamento",
    title: "Durante o transporte, como o status e acompanhado?",
    answers: [
      {
        label: "Cliente pergunta varias vezes",
        value: "cliente pergunta status varias vezes",
        next: "office_communication",
        tags: ["live_tracking", "status_tracking"],
        score: 10,
      },
      {
        label: "Equipe fica ligando para motorista",
        value: "equipe liga para motorista para buscar status",
        next: "office_communication",
        tags: ["live_tracking", "status_rework", "chat_history"],
        score: 12,
      },
      {
        label: "Cliente e equipe cobram o tempo todo",
        value: "cliente e equipe cobram status o tempo todo",
        next: "office_communication",
        tags: ["live_tracking", "status_rework", "desktop_control"],
        score: 14,
      },
      {
        label: "So acompanhamos se houver problema",
        value: "acompanha apenas quando ha problema",
        next: "office_communication",
        tags: ["status_tracking", "history_trace"],
        score: 6,
      },
    ],
  },
  office_communication: {
    id: "office_communication",
    eyebrow: "Comunicacao",
    title: "Onde ficam mensagens, combinados e ocorrencias do frete?",
    answers: [
      {
        label: "WhatsApp do responsavel",
        value: "mantem mensagens no WhatsApp do responsavel",
        next: "office_finance",
        tags: ["chat_history", "key_person_dependency", "history_trace"],
        score: 12,
      },
      {
        label: "Grupos diferentes por cliente ou evento",
        value: "usa grupos diferentes por cliente ou evento",
        next: "office_finance",
        tags: ["chat_history", "fragmented_history", "standardization"],
        score: 12,
      },
      {
        label: "Ligacoes e audios",
        value: "resolve muitos combinados por ligacoes e audios",
        next: "office_finance",
        tags: ["chat_history", "history_trace"],
        score: 10,
      },
      {
        label: "Sistema ou registro por frete",
        value: "registra comunicacao por frete",
        next: "office_finance",
        tags: ["medium_maturity", "history_trace"],
        score: 4,
      },
    ],
  },
  office_finance: {
    id: "office_finance",
    eyebrow: "Financeiro",
    title: "Pagamento, repasse ou comprovantes entram no fluxo?",
    answers: [
      {
        label: "Sim, mas separado da operacao",
        value: "financeiro participa separado da operacao",
        next: "office_desktop_use",
        tags: ["payment_flow", "financial_trace"],
        score: 10,
      },
      {
        label: "Sim, com comprovantes e conferencia manual",
        value: "financeiro usa comprovantes e conferencia manual",
        next: "office_desktop_use",
        tags: ["payment_flow", "receipt_history"],
        score: 10,
      },
      {
        label: "Nao, o escritorio so coordena operacao",
        value: "escritorio coordena apenas a operacao",
        next: "office_desktop_use",
        tags: ["status_tracking"],
        score: 2,
      },
      {
        label: "Sim, integrado ao controle do frete",
        value: "financeiro integrado ao controle do frete",
        next: "office_desktop_use",
        tags: ["payment_flow", "medium_maturity"],
        score: 4,
      },
    ],
  },
  office_desktop_use: {
    id: "office_desktop_use",
    eyebrow: "Uso no escritorio",
    title: "Como a equipe provavelmente usaria o CargaViva no dia a dia?",
    answers: [
      {
        label: "Uma pessoa no celular",
        value: "uma pessoa usaria principalmente no celular",
        next: "result",
        tags: ["mobile_first", "structured_request"],
        score: 4,
      },
      {
        label: "Equipe acompanhando no computador",
        value: "equipe acompanharia no computador",
        next: "result",
        tags: ["desktop_control", "governance"],
        score: 10,
      },
      {
        label: "Tela grande em dias de remate ou evento",
        value: "usaria tela grande em dias de evento",
        next: "result",
        tags: ["desktop_control", "peak_operation", "status_tracking"],
        score: 12,
      },
      {
        label: "Suporte consultando casos e historico",
        value: "suporte consultaria casos e historico",
        next: "result",
        tags: ["management_support", "history_trace", "desktop_control"],
        score: 10,
      },
    ],
  },
  driver_work_source: {
    id: "driver_work_source",
    eyebrow: "Rotina do motorista",
    title: "Como normalmente chegam as oportunidades de frete?",
    answers: [
      {
        label: "WhatsApp, grupos ou ligacoes",
        value: "recebe oportunidades por WhatsApp, grupos ou ligacoes",
        next: "driver_availability",
        tags: ["profile_driver", "organized_demand", "chat_history"],
        score: 10,
      },
      {
        label: "Clientes conhecidos recorrentes",
        value: "trabalha com clientes conhecidos recorrentes",
        next: "driver_availability",
        tags: ["profile_driver", "previous_service", "rating"],
        score: 6,
      },
      {
        label: "Busca oportunidades compativeis com meu caminhao",
        value: "busca oportunidades compativeis com o caminhao",
        next: "driver_availability",
        tags: ["profile_driver", "driver_matching", "truck_profile"],
        score: 8,
      },
    ],
  },
  driver_availability: {
    id: "driver_availability",
    eyebrow: "Cadastro operacional",
    title: "O que mais precisa aparecer para o cliente te escolher melhor?",
    answers: [
      {
        label: "Tipo, placa e capacidade do caminhao",
        value: "quer destacar tipo, placa e capacidade do caminhao",
        next: "driver_pain",
        tags: ["truck_profile", "driver_matching"],
        score: 8,
      },
      {
        label: "Cidade base, raio e disponibilidade",
        value: "quer destacar cidade base, raio e disponibilidade",
        next: "driver_pain",
        tags: ["truck_profile", "route_distance"],
        score: 8,
      },
      {
        label: "Preco, Pix e reputacao",
        value: "quer destacar preco, Pix e reputacao",
        next: "driver_pain",
        tags: ["pricing_estimate", "payment_flow", "rating"],
        score: 8,
      },
    ],
  },
  driver_pain: {
    id: "driver_pain",
    eyebrow: "Gargalo",
    title: "Qual ponto mais atrapalha depois que aparece um frete?",
    answers: [
      {
        label: "Pedido vem incompleto",
        value: "recebe pedidos incompletos",
        next: "driver_payment",
        tags: ["structured_request", "organized_demand"],
        score: 10,
      },
      {
        label: "Muita ligacao para alinhar detalhes",
        value: "recebe muitas ligacoes para alinhar detalhes",
        next: "driver_payment",
        tags: ["chat_history", "status_tracking"],
        score: 8,
      },
      {
        label: "Comprovacao, pagamento ou repasse",
        value: "tem gargalo em comprovacao, pagamento ou repasse",
        next: "driver_payment",
        tags: ["payment_flow", "receipt_history"],
        score: 10,
      },
      {
        label: "Cliente quer acompanhar a viagem",
        value: "cliente quer acompanhar a viagem",
        next: "driver_payment",
        tags: ["live_tracking", "location_alert"],
        score: 10,
      },
    ],
  },
  driver_payment: {
    id: "driver_payment",
    eyebrow: "Fechamento",
    title: "O que voce quer deixar mais claro no fechamento?",
    answers: [
      {
        label: "Proposta e valor combinados",
        value: "quer registrar proposta e valor combinados",
        next: "result",
        tags: ["proposal_flow", "history_trace"],
        score: 8,
      },
      {
        label: "Pagamento Pix e repasse",
        value: "quer organizar pagamento Pix e repasse",
        next: "result",
        tags: ["payment_flow", "financial_trace"],
        score: 8,
      },
      {
        label: "Avaliacao depois do frete",
        value: "quer receber avaliacao depois do frete",
        next: "result",
        tags: ["rating"],
        score: 6,
      },
    ],
  },
  requester_frequency: {
    id: "requester_frequency",
    eyebrow: "Demanda",
    title: "Com que frequencia voce solicita fretes?",
    answers: [
      {
        label: "De vez em quando",
        value: "solicita fretes de vez em quando",
        next: "requester_request_flow",
        tags: ["profile_requester", "starter_fit"],
        score: 4,
      },
      {
        label: "Com recorrencia",
        value: "solicita fretes com recorrencia",
        next: "requester_request_flow",
        tags: ["profile_requester", "previous_service", "status_tracking"],
        score: 8,
      },
      {
        label: "Em eventos, remates ou periodos concentrados",
        value: "solicita em eventos, remates ou periodos concentrados",
        next: "requester_request_flow",
        tags: ["profile_requester", "peak_operation", "desktop_control"],
        score: 10,
      },
    ],
  },
  requester_request_flow: {
    id: "requester_request_flow",
    eyebrow: "Pedido",
    title: "Como voce monta o pedido de frete hoje?",
    answers: [
      {
        label: "Mando mensagem para conhecidos",
        value: "manda mensagem para conhecidos",
        next: "requester_driver_choice",
        tags: ["structured_request", "driver_matching", "chat_history"],
        score: 10,
      },
      {
        label: "Peço ajuda para escritorio ou assessoria",
        value: "pede ajuda para escritorio ou assessoria",
        next: "requester_driver_choice",
        tags: ["profile_office", "desktop_control", "structured_request"],
        score: 8,
      },
      {
        label: "Tenho dados, mas comparo tudo manualmente",
        value: "compara dados manualmente",
        next: "requester_driver_choice",
        tags: ["driver_matching", "route_distance", "pricing_estimate"],
        score: 10,
      },
    ],
  },
  requester_driver_choice: {
    id: "requester_driver_choice",
    eyebrow: "Escolha",
    title: "O que te da mais seguranca para escolher o motorista?",
    answers: [
      {
        label: "Ver motoristas compativeis com a carga",
        value: "quer ver motoristas compativeis com a carga",
        next: "requester_monitoring",
        tags: ["driver_matching", "truck_profile"],
        score: 8,
      },
      {
        label: "Comparar distancia, valor e disponibilidade",
        value: "quer comparar distancia, valor e disponibilidade",
        next: "requester_monitoring",
        tags: ["route_distance", "pricing_estimate", "driver_matching"],
        score: 8,
      },
      {
        label: "Ver avaliacao e historico anterior",
        value: "quer ver avaliacao e historico anterior",
        next: "requester_monitoring",
        tags: ["rating", "previous_service"],
        score: 8,
      },
    ],
  },
  requester_monitoring: {
    id: "requester_monitoring",
    eyebrow: "Acompanhamento",
    title: "Depois que o frete sai, o que voce mais quer acompanhar?",
    answers: [
      {
        label: "Status de cada etapa",
        value: "quer acompanhar status de cada etapa",
        next: "requester_payment",
        tags: ["status_tracking", "history_trace"],
        score: 8,
      },
      {
        label: "Localizacao ao vivo no mapa",
        value: "quer acompanhar localizacao ao vivo no mapa",
        next: "requester_payment",
        tags: ["live_tracking", "location_alert"],
        score: 10,
      },
      {
        label: "Mensagens e combinados",
        value: "quer acompanhar mensagens e combinados",
        next: "requester_payment",
        tags: ["chat_history", "history_trace"],
        score: 8,
      },
    ],
  },
  requester_payment: {
    id: "requester_payment",
    eyebrow: "Pagamento",
    title: "Pagamento e documentos tambem entram na sua preocupacao?",
    answers: [
      {
        label: "Sim, quero pagar por Pix com clareza",
        value: "quer pagar por Pix com clareza",
        next: "result",
        tags: ["payment_flow", "financial_trace"],
        score: 8,
      },
      {
        label: "Sim, preciso guardar comprovantes e GTA",
        value: "precisa guardar comprovantes e GTA",
        next: "result",
        tags: ["receipt_history", "gta_module", "history_trace"],
        score: 10,
      },
      {
        label: "Nao muito, meu foco e achar e acompanhar",
        value: "foca em achar motorista e acompanhar",
        next: "result",
        tags: ["driver_matching", "status_tracking"],
        score: 4,
      },
    ],
  },
};

const questionExplanations: Record<string, string> = {
  driver_availability:
    "Aqui queremos entender quais dados do seu caminhao mais influenciam a decisao de quem contrata.",
  driver_pain:
    "Escolha o gargalo que mais aparece depois que existe uma oportunidade real de frete.",
  driver_payment:
    "Esta pergunta identifica o que precisa ficar mais bem registrado no final da negociacao ou do transporte.",
  driver_work_source:
    "Responda pensando na forma mais comum como voce fica sabendo de fretes hoje.",
  office_desktop_use:
    "Aqui queremos entender se o escritorio usaria mais o celular, o computador ou uma visao de suporte.",
  office_documents:
    "Esta pergunta mede quando a parte documental entra na operacao e se ela pode gerar risco perto do carregamento.",
  office_driver_choice:
    "Escolha o criterio que mais pesa na hora de decidir qual caminhoneiro faz o frete.",
  office_driver_source:
    "Responda pensando no primeiro caminho usado para achar ou acionar motoristas.",
  office_entry:
    "Aqui queremos saber como a demanda nasce antes de virar um frete organizado.",
  office_finance:
    "Marque como pagamento, repasse ou comprovantes entram na rotina do frete, mesmo que seja parcialmente.",
  office_monitoring:
    "Esta pergunta identifica se o status do frete ja e claro ou se ainda depende de cobrancas manuais.",
  office_request_quality:
    "Responda pensando se a equipe recebe dados suficientes para buscar motorista sem retrabalho.",
  office_role:
    "Escolha a responsabilidade real do escritorio, nao necessariamente o que esta em contrato.",
  office_type:
    "Use a opcao que mais se aproxima da sua realidade, mesmo que o nome nao seja exatamente o seu.",
  office_volume:
    "Uma estimativa basta. O objetivo e medir pressao operacional, nao acertar um numero exato.",
  office_communication:
    "Aqui avaliamos onde ficam os combinados que depois precisam ser consultados.",
  requester_driver_choice:
    "Escolha o fator que mais te ajuda a confiar que aquele motorista e adequado para o frete.",
  requester_frequency:
    "Responda pela frequencia normal, considerando tambem epocas de maior movimento.",
  requester_monitoring:
    "Esta pergunta identifica o que mais importa para voce depois que o transporte ja esta combinado.",
  requester_payment:
    "Marque se pagamento, comprovante ou documento tambem fazem parte da sua preocupacao.",
  requester_request_flow:
    "Aqui queremos entender como voce transforma uma necessidade de transporte em pedido de frete.",
  start:
    "Essa escolha muda o caminho do teste para perguntas mais adequadas ao seu tipo de operacao.",
};

const answerExplanationsByValue: Record<string, string> = {
  "acompanha apenas quando ha problema":
    "Use se o escritorio nao acompanha cada etapa, mas precisa agir quando algo foge do normal.",
  "acompanha entrega, pagamento ou fechamento":
    "Use se o escritorio segue o frete ate concluir, cobrar, pagar ou resolver pendencias finais.",
  "a qualidade dos dados depende do cliente ou evento":
    "Use se alguns clientes mandam tudo certo, mas outros exigem muita complementacao.",
  "apenas indica motoristas":
    "Use se o escritorio aproxima as partes, mas nao conduz todo o andamento do frete.",
  "atua como assessoria com varios clientes":
    "Use se o escritorio organiza demandas de diferentes clientes, produtores ou propriedades.",
  "atua como caminhoneiro ou transportador":
    "Use se voce oferece fretes, cadastra caminhao ou quer receber oportunidades de transporte.",
  "atua como escritorio ou equipe administrativa":
    "Use se voce organiza fretes para clientes, eventos, assessoria, cooperativa ou equipe interna.",
  "atua como sindicato, cooperativa ou associacao":
    "Use se a entidade ajuda associados a organizar ou encontrar transporte.",
  "atua como solicitante avulso de fretes":
    "Use se voce contrata fretes para sua necessidade propria, sem operar como escritorio.",
  "busca oportunidades compativeis com o caminhao":
    "Use se voce quer receber fretes que batam com capacidade, raio, agenda e tipo do seu veiculo.",
  "cliente e equipe cobram status o tempo todo":
    "Use se a equipe vira ponte constante entre cliente e motorista para atualizar o andamento.",
  "cliente pergunta status varias vezes":
    "Use se a principal pressao vem do cliente querendo saber onde esta a carga.",
  "compara dados manualmente":
    "Use se voce ate tem informacoes, mas compara motorista, preco, distancia e disponibilidade fora de um sistema.",
  "confere documentos antes de buscar motorista":
    "Use se documentos e exigencias ja sao resolvidos antes de acionar transportador.",
  "confere documentos durante a negociacao":
    "Use se a documentacao costuma ser tratada enquanto motorista e cliente ainda estao alinhando o frete.",
  "confere documentos perto do carregamento":
    "Use se GTA ou outros documentos aparecem muito perto da hora de carregar.",
  "contrata ou intermedeia a contratacao":
    "Use se o escritorio participa de aceite, valor, proposta ou formalizacao entre cliente e motorista.",
  "coordena cliente, motorista e agenda":
    "Use se o escritorio organiza datas, horarios, contato e andamento entre as partes.",
  "cliente quer acompanhar a viagem":
    "Use se a pressao maior e mostrar ao cliente onde o transporte esta durante o trajeto.",
  "depende da memoria da equipe para achar motorista":
    "Use se a escolha acontece mais pelo que alguem lembra do que por uma base consultavel.",
  "equipe acompanharia no computador":
    "Use se mais de uma pessoa precisa acompanhar fretes em tela de escritorio.",
  "equipe liga para motorista para buscar status":
    "Use se o status depende de telefonar ou mandar mensagem para o motorista.",
  "escritorio coordena apenas a operacao":
    "Use se pagamento e repasse ficam fora da responsabilidade do escritorio.",
  "financeiro integrado ao controle do frete":
    "Use se cobranca, pagamento ou comprovante ja ficam ligados ao frete no mesmo controle.",
  "financeiro participa separado da operacao":
    "Use se uma pessoa ou setor cuida do dinheiro fora do fluxo operacional.",
  "financeiro usa comprovantes e conferencia manual":
    "Use se a baixa depende de imagem, PDF, print, planilha ou validacao manual.",
  "foca em achar motorista e acompanhar":
    "Use se pagamento e documentos nao sao a parte central da sua preocupacao.",
  "guarda ou precisa guardar comprovantes e GTA":
    "Use se documentos e comprovantes precisam ser recuperados depois do frete.",
  "manda mensagem para conhecidos":
    "Use se voce costuma procurar diretamente motoristas que ja conhece.",
  "mantem mensagens no WhatsApp do responsavel":
    "Use se as informacoes ficam no celular ou conversa de uma pessoa especifica.",
  "nao tem padrao claro de conferencia documental":
    "Use se cada frete ou pessoa confere documentos de um jeito diferente.",
  "normalmente recebe dados completos":
    "Use se origem, destino, carga, horario e observacoes chegam prontos na maioria das vezes.",
  "opera como escritorio grande com equipe dividida":
    "Use se setores ou varias pessoas participam da mesma operacao de frete.",
  "opera como escritorio pequeno ou familiar":
    "Use se poucas pessoas centralizam a rotina, geralmente com processo mais direto.",
  "opera em remates, leiloeiras ou eventos agropecuarios":
    "Use se ha dias de grande movimento, muitos carregamentos ou operacao concentrada por evento.",
  "pede ajuda para escritorio ou assessoria":
    "Use se outra equipe ajuda voce a organizar motorista, dados ou andamento do frete.",
  "precisa completar origem, destino, peso ou horario depois":
    "Use se a equipe precisa voltar ao cliente para buscar informacoes basicas.",
  "precisa guardar comprovantes e GTA":
    "Use se comprovantes, GTA ou documentos precisam ficar acessiveis depois.",
  "prioriza avaliacao e confiabilidade":
    "Use se historico, reputacao e seguranca pesam mais que apenas valor.",
  "prioriza distancia, raio de atuacao e disponibilidade":
    "Use se o encaixe geografico e agenda do motorista sao decisivos.",
  "prioriza historico de servicos anteriores":
    "Use se motoristas que ja trabalharam bem tem preferencia.",
  "prioriza preco e condicao de pagamento":
    "Use se valor, Pix, prazo ou forma de pagamento definem a escolha.",
  "procura motoristas em grupos de WhatsApp":
    "Use se a busca acontece mandando a demanda em grupos ou listas de contatos.",
  "quer acompanhar localizacao ao vivo no mapa":
    "Use se saber onde a carga esta durante a viagem e importante para voce.",
  "quer acompanhar mensagens e combinados":
    "Use se conversas, ajustes e orientacoes precisam ficar registradas.",
  "quer acompanhar status de cada etapa":
    "Use se voce quer saber em qual fase o frete esta, mesmo sem mapa ao vivo.",
  "quer comparar distancia, valor e disponibilidade":
    "Use se a escolha depende de cruzar custo, agenda e proximidade.",
  "quer destacar cidade base, raio e disponibilidade":
    "Use se sua area de atuacao e horarios sao fundamentais para receber bons pedidos.",
  "quer destacar preco, Pix e reputacao":
    "Use se voce quer deixar claro valor, forma de receber e confiabilidade.",
  "quer destacar tipo, placa e capacidade do caminhao":
    "Use se a compatibilidade da carga depende muito das caracteristicas do veiculo.",
  "quer organizar pagamento Pix e repasse":
    "Use se voce precisa de clareza sobre recebimento, repasse ou confirmacao financeira.",
  "quer pagar por Pix com clareza":
    "Use se voce quer codigo Pix, QR code, valor e status de pagamento bem definidos.",
  "quer receber avaliacao depois do frete":
    "Use se reputacao e feedback do cliente ajudam a conseguir novos fretes.",
  "quer registrar proposta e valor combinados":
    "Use se valor, mensagem e aceite precisam ficar documentados.",
  "quer ver avaliacao e historico anterior":
    "Use se voce prefere decidir olhando reputacao e servicos passados.",
  "quer ver motoristas compativeis com a carga":
    "Use se seu foco e saber quais motoristas realmente podem fazer aquele transporte.",
  "recebe muitas ligacoes para alinhar detalhes":
    "Use se a combinacao do frete exige conversa repetida para esclarecer pontos.",
  "recebe oportunidades por WhatsApp, grupos ou ligacoes":
    "Use se seus fretes chegam principalmente por contato direto e conversas.",
  "recebe pedidos incompletos":
    "Use se as demandas chegam sem dados suficientes para calcular ou propor.",
  "recebe solicitacoes por WhatsApp, audio ou ligacao":
    "Use se o pedido chega em conversas, antes de virar um registro estruturado.",
  "recebe cada solicitacao em um formato diferente":
    "Use se nao existe um padrao de informacoes entre clientes ou eventos.",
  "registra comunicacao por frete":
    "Use se cada frete ja tem seu proprio historico de mensagens ou observacoes.",
  "resolve muitos combinados por ligacoes e audios":
    "Use se informacoes importantes ficam em falas que depois sao dificeis de consultar.",
  "solicita em eventos, remates ou periodos concentrados":
    "Use se sua demanda aparece forte em datas especificas ou eventos.",
  "solicita fretes com recorrencia":
    "Use se voce contrata fretes com alguma frequencia e cria historico com motoristas.",
  "solicita fretes de vez em quando":
    "Use se sua necessidade e ocasional e voce quer resolver sem montar uma estrutura propria.",
  "so completa dados perto do carregamento":
    "Use se informacoes essenciais costumam aparecer tarde, aumentando o risco de correria.",
  "tem ate 30 fretes por mes":
    "Use se a operacao ainda e pequena ou moderada, com acompanhamento mais proximo.",
  "tem entre 30 e 100 fretes por mes":
    "Use se ja existe volume suficiente para gerar retrabalho e necessidade de controle.",
  "tem gargalo em comprovacao, pagamento ou repasse":
    "Use se depois do aceite ainda existe inseguranca sobre pagar, comprovar ou receber.",
  "tem mais de 100 fretes por mes":
    "Use se o volume exige processo, visao consolidada e menos dependencia de memoria.",
  "tem picos concentrados em poucos dias":
    "Use se a maior dificuldade aparece em dias de evento, remate, safra ou janela curta.",
  "trabalha com clientes conhecidos recorrentes":
    "Use se boa parte dos fretes vem de relacoes ja existentes.",
  "tem base organizada de parceiros":
    "Use se voces ja mantem uma lista ou cadastro confiavel de motoristas parceiros.",
  "uma pessoa usaria principalmente no celular":
    "Use se a operacao e centralizada e o app mobile ja atende o principal uso.",
  "usa agenda de contatos conhecidos":
    "Use se a primeira escolha vem de uma lista de motoristas de confianca.",
  "usa formulario ou sistema proprio":
    "Use se ja existe algum jeito estruturado de receber dados antes do CargaViva.",
  "usa grupos diferentes por cliente ou evento":
    "Use se cada cliente, evento ou equipe tem seu proprio grupo de comunicacao.",
  "usa planilha ou sistema proprio":
    "Use se a demanda ja e organizada fora de conversas, mas ainda nao integrada ao CargaViva.",
  "organiza solicitacoes em planilha":
    "Use se a equipe transforma pedidos em linhas de planilha para conseguir controlar.",
  "suporte consultaria casos e historico":
    "Use se alguem precisa pesquisar fretes, contas, pagamentos ou problemas depois.",
  "usaria tela grande em dias de evento":
    "Use se uma visao em computador ou monitor ajudaria nos momentos de maior movimento.",
};

const getQuestionExplanation = (questionId: string) =>
  questionExplanations[questionId] ??
  "Responda com a opcao que mais representa a sua rotina hoje.";

const getAnswerExplanation = (answer: Answer) =>
  answerExplanationsByValue[answer.value] ??
  "Escolha esta opcao se ela for a mais parecida com a sua realidade atual.";

const tagScores: Record<string, number> = {
  chat_history: 9,
  desktop_control: 10,
  difficult_comparison: 8,
  document_gate: 8,
  financial_trace: 8,
  fragmented_history: 10,
  full_cycle: 8,
  governance: 10,
  gta_module: 8,
  history_trace: 8,
  intake_informal: 8,
  key_person_dependency: 8,
  legal_responsibility: 6,
  live_tracking: 10,
  location_alert: 6,
  manual_control: 6,
  management_support: 8,
  mobile_first: 3,
  operational_risk: 10,
  organized_demand: 8,
  payment_flow: 10,
  peak_operation: 10,
  previous_service: 6,
  pricing_estimate: 6,
  proposal_flow: 8,
  rating: 6,
  receipt_history: 8,
  rework: 8,
  route_distance: 8,
  scale_pressure: 10,
  standardization: 8,
  status_rework: 8,
  status_tracking: 8,
  structured_request: 10,
  truck_profile: 8,
  workflow_core: 6,
};

const solutionsByTag: Record<string, Solution> = {
  profile_office: {
    title: "Operação do escritório dentro do CargaViva",
    feature: "Perfil para equipe, app mobile e desktop",
    text:
      "coloca pedido, motorista, proposta, pagamento, status, conversa, documentos e avaliação no mesmo lugar.",
    proof:
      "Recurso disponível para uso no celular e na versão desktop.",
  },
  profile_driver: {
    title: "Mais demanda organizada para o caminhoneiro",
    feature: "Cadastro de caminhão, propostas e reputação",
    text:
      "ajuda o motorista a receber pedidos mais completos, enviar proposta, combinar pagamento, compartilhar localização e construir reputação.",
    proof:
      "O motorista cadastra dados do caminhão, disponibilidade, valores e forma de recebimento.",
  },
  profile_requester: {
    title: "Frete mais claro para quem contrata",
    feature: "Pedido, comparação, Pix, rastreio e avaliação",
    text:
      "permite montar o pedido, comparar motoristas, aceitar proposta, pagar, acompanhar no mapa e avaliar no final.",
    proof:
      "O fluxo cobre o frete desde o pedido até a avaliação.",
  },
  structured_request: {
    title: "Transformar conversas em pedidos organizados",
    feature: "Solicitar frete no app e no desktop",
    text:
      "transforma áudio, ligação ou mensagem solta em um pedido com origem, destino, carga, data, horário e observações.",
    proof:
      "O pedido já nasce com os dados que a equipe e o motorista precisam.",
  },
  standardization: {
    title: "Padronizar pedidos entre clientes, eventos e equipe",
    feature: "Campos importantes e resumo por frete",
    text:
      "cria um jeito único de registrar fretes, mesmo quando cada cliente manda as informações de um jeito.",
    proof:
      "Cada frete fica com origem, destino, carga, responsáveis, status e histórico.",
  },
  driver_matching: {
    title: "Encontrar motoristas compatíveis com menos improviso",
    feature: "Sugestão por caminhão, base, raio, agenda e capacidade",
    text:
      "mostra motoristas que combinam melhor com aquele frete, considerando distância, capacidade, disponibilidade e valor.",
    proof:
      "A comparação aparece para ajudar a escolher com menos chute.",
  },
  truck_profile: {
    title: "Usar dados reais do caminhão na decisão",
    feature: "Perfil de caminhão e disponibilidade",
    text:
      "considera tipo de caminhão, capacidade, cidade base, raio de atuação, dias disponíveis e valor informado pelo motorista.",
    proof:
      "Esses dados ajudam a encaixar melhor demanda e motorista.",
  },
  route_distance: {
    title: "Comparar distância e rota antes de decidir",
    feature: "Mapa, origem, destino e distância",
    text:
      "ajuda a visualizar origem, destino, rota e distância antes de fechar com o motorista.",
    proof:
      "O mapa deixa a decisão mais clara antes do aceite.",
  },
  previous_service: {
    title: "Valorizar quem já prestou bom serviço",
    feature: "Histórico de parceria e serviços anteriores",
    text:
      "ajuda a lembrar quando cliente e motorista já trabalharam bem juntos.",
    proof:
      "O histórico ajuda a decidir com mais confiança.",
  },
  rating: {
    title: "Criar reputação por avaliação",
    feature: "Avaliação do motorista",
    text:
      "permite avaliar o motorista no fim do frete, para considerar confiança e não só preço.",
    proof:
      "As avaliações ajudam nas próximas escolhas.",
  },
  pricing_estimate: {
    title: "Dar mais clareza sobre valor antes da proposta",
    feature: "Preço por km, valor padrão e estimativa",
    text:
      "dá mais base para conversar sobre preço antes da proposta final.",
    proof:
      "O valor fica mais fácil de comparar.",
  },
  proposal_flow: {
    title: "Registrar proposta e aceite no histórico",
    feature: "Fluxo de proposta",
    text:
      "guarda valor, mensagem e aceite dentro do frete, reduzindo combinado perdido.",
    proof:
      "A proposta fica vinculada ao transporte.",
  },
  status_tracking: {
    title: "Acompanhar o frete por etapas claras",
    feature: "Meus fretes, linha do tempo e histórico de status",
    text:
      "mostra se o frete está em proposta, pagamento, confirmado, em transporte, concluído ou cancelado.",
    proof:
      "Todos acompanham a mesma etapa do frete.",
  },
  live_tracking: {
    title: "Reduzir ligações com rastreamento ao vivo",
    feature: "Localização ao vivo do motorista",
    text:
      "mostra a posição do motorista no mapa durante o transporte, quando ele inicia a viagem pelo app.",
    proof:
      "O cliente e a equipe podem acompanhar a carga sem depender só de ligação.",
  },
  location_alert: {
    title: "Saber quando a localização fica indisponível",
    feature: "Aviso de localização desligada",
    text:
      "avisa quando a localização deixa de aparecer e mantém referência da última posição conhecida.",
    proof:
      "Isso evita ficar no escuro durante o transporte.",
  },
  chat_history: {
    title: "Tirar combinados do WhatsApp pessoal",
    feature: "Chat interno por frete",
    text:
      "deixa a conversa ligada ao frete certo e mantém o combinado consultável depois.",
    proof:
      "A conversa deixa de ficar perdida em grupos e celulares pessoais.",
  },
  gta_module: {
    title: "Vincular GTA e documentos ao frete correto",
    feature: "Identificação e anexo de GTA",
    text:
      "permite informar e anexar documentos do transporte para deixar tudo preso ao frete correto.",
    proof:
      "Documento e transporte ficam juntos para consulta.",
  },
  payment_flow: {
    title: "Conectar pagamento ao fluxo do frete",
    feature: "Pagamento Pix e repasse",
    text:
      "ajuda a organizar pagamento, confirmação e repasse junto do próprio frete.",
    proof:
      "A parte financeira acompanha o mesmo transporte.",
  },
  receipt_history: {
    title: "Guardar comprovantes dentro do frete",
    feature: "Comprovante e histórico financeiro",
    text:
      "deixa comprovantes e ocorrências conectados ao transporte, em vez de soltos em conversas.",
    proof:
      "Fica mais fácil conferir depois.",
  },
  financial_trace: {
    title: "Dar rastreabilidade para fechamento e suporte",
    feature: "Status de pagamento e suporte",
    text:
      "ajuda a conferir pagamentos, pendências e repasses sem separar isso do andamento do frete.",
    proof:
      "A conferência fica ligada ao transporte certo.",
  },
  desktop_control: {
    title: "Operar no computador sem perder o vínculo com o app",
    feature: "CargaViva Fretes Desktop para Windows",
    text:
      "dá uma tela maior para acompanhar pedidos, mapas, conversas, documentos, pagamentos, motoristas e status.",
    proof:
      "Ideal para escritório, equipe e dias de maior movimento.",
  },
  management_support: {
    title: "Apoiar casos de exceção com consulta rápida",
    feature: "Consulta de fretes, contas e pagamentos",
    text:
      "ajuda a equipe a encontrar rapidamente um frete, uma conta, um pagamento ou uma pendência.",
    proof:
      "O suporte não precisa depender só de relatos soltos.",
  },
  governance: {
    title: "Diminuir dependência de memória e pessoa-chave",
    feature: "Histórico por frete e painel de acompanhamento",
    text:
      "deixa dados, status, documentos, mensagens e decisões ligados ao frete, não à memória de uma pessoa.",
    proof:
      "Mais gente consegue acompanhar sem perder o fio da operação.",
  },
  history_trace: {
    title: "Criar uma linha do tempo consultável",
    feature: "Histórico operacional do transporte",
    text:
      "guarda pedido, motorista escolhido, proposta, pagamento, documento, início, fim, conversa e avaliação.",
    proof:
      "Assim fica mais simples explicar depois o que aconteceu.",
  },
  peak_operation: {
    title: "Dar previsibilidade para dias de pico",
    feature: "Dashboard, tags, status e desktop em tela grande",
    text:
      "ajuda a enxergar vários fretes ao mesmo tempo, com origem, destino, responsáveis e status.",
    proof:
      "Bom para remate, evento e dia de muito carregamento.",
  },
  organized_demand: {
    title: "Receber demandas mais completas",
    feature: "Pedido estruturado para o motorista",
    text:
      "ajuda o caminhoneiro a receber origem, destino, carga, horário e observações antes de responder.",
    proof:
      "Menos pergunta picada e mais clareza antes da proposta.",
  },
  mobile_first: {
    title: "Começar simples pelo celular",
    feature: "App mobile como operação principal",
    text:
      "permite solicitar, acompanhar, conversar, pagar, cadastrar caminhão e rastrear pelo celular.",
    proof:
      "Serve bem para quem quer começar sem montar estrutura grande.",
  },
};

const diagnosticByTag: Record<string, DiagnosticPoint> = {
  chat_history: {
    title: "Combinados e mensagens podem ficar espalhados",
    evidence:
      "As respostas indicam que parte da comunicacao ainda depende de WhatsApp, ligacoes, audios ou grupos separados.",
    solutionTags: ["chat_history", "history_trace"],
    weight: 9,
  },
  desktop_control: {
    title: "A operacao tende a precisar de uma visao de escritorio",
    evidence:
      "As respostas apontam uso por equipe, tela grande, volume maior ou acompanhamento em computador.",
    solutionTags: ["desktop_control", "status_tracking", "history_trace"],
    weight: 8,
  },
  difficult_comparison: {
    title: "Comparar motoristas manualmente gera inseguranca",
    evidence:
      "A escolha do motorista parece depender de grupos, memoria ou comparacoes fora de um criterio unico.",
    solutionTags: [
      "driver_matching",
      "route_distance",
      "pricing_estimate",
      "rating",
    ],
    weight: 9,
  },
  financial_trace: {
    title: "Financeiro e operacao precisam conversar melhor",
    evidence:
      "As respostas indicam preocupacao com status financeiro, confirmacao, repasse ou suporte de pagamento.",
    solutionTags: ["financial_trace", "payment_flow", "receipt_history"],
    weight: 8,
  },
  fragmented_history: {
    title: "O historico fica fragmentado entre canais",
    evidence:
      "Quando grupos, conversas e planilhas se misturam, fica dificil reconstruir o que aconteceu em cada frete.",
    solutionTags: ["history_trace", "chat_history", "desktop_control"],
    weight: 9,
  },
  governance: {
    title: "Varias pessoas precisam olhar para o mesmo frete",
    evidence:
      "As respostas indicam equipe dividida, suporte interno ou necessidade de menos dependencia de uma pessoa.",
    solutionTags: ["governance", "desktop_control", "history_trace"],
    weight: 9,
  },
  gta_module: {
    title: "Documentos e GTA precisam ficar vinculados ao transporte",
    evidence:
      "O teste identificou necessidade de conferencia, registro ou recuperacao de documentos por frete.",
    solutionTags: ["gta_module", "history_trace"],
    weight: 8,
  },
  history_trace: {
    title: "A operacao precisa de trilha consultavel",
    evidence:
      "As respostas mostram necessidade de consultar depois proposta, status, documentos, pagamento, chat ou conclusao.",
    solutionTags: ["history_trace", "status_tracking", "chat_history"],
    weight: 8,
  },
  intake_informal: {
    title: "Pedidos chegam por canais informais",
    evidence:
      "O fluxo atual parece depender de WhatsApp, audio, ligacao ou formatos diferentes por cliente.",
    solutionTags: ["structured_request", "standardization", "history_trace"],
    weight: 10,
  },
  key_person_dependency: {
    title: "A operacao depende muito da memoria de uma pessoa",
    evidence:
      "As respostas indicam que parte do conhecimento fica com um responsavel, nao no registro do frete.",
    solutionTags: ["governance", "history_trace", "desktop_control"],
    weight: 9,
  },
  legal_responsibility: {
    title: "O escritorio participa de uma etapa sensivel da contratacao",
    evidence:
      "Quando o escritorio intermedeia ou acompanha ate fechamento, rastreabilidade importa mais.",
    solutionTags: ["history_trace", "payment_flow", "gta_module"],
    weight: 7,
  },
  live_tracking: {
    title: "Existe demanda por acompanhamento durante a viagem",
    evidence:
      "O teste identificou cobranca de status, necessidade de mapa ou acompanhamento da carga em andamento.",
    solutionTags: ["live_tracking", "status_tracking", "location_alert"],
    weight: 10,
  },
  location_alert: {
    title: "A localizacao durante o transporte e um ponto de seguranca",
    evidence:
      "As respostas indicam que acompanhar a viagem ou saber quando o GPS falha tem valor para a operacao.",
    solutionTags: ["location_alert", "live_tracking"],
    weight: 7,
  },
  manual_control: {
    title: "Planilhas e controles manuais ainda seguram o processo",
    evidence:
      "O teste encontrou controles que podem funcionar, mas exigem conferencia manual e nao carregam status automaticamente.",
    solutionTags: ["desktop_control", "status_tracking", "history_trace"],
    weight: 7,
  },
  management_support: {
    title: "Casos de suporte precisam de consulta rapida",
    evidence:
      "As respostas apontam necessidade de localizar historico, pagamento, dispositivo, conta ou transporte em casos de excecao.",
    solutionTags: ["management_support", "financial_trace", "history_trace"],
    weight: 8,
  },
  operational_risk: {
    title: "Algumas pendencias aparecem tarde demais",
    evidence:
      "Quando dados ou documentos so ficam claros perto do carregamento, o risco operacional aumenta.",
    solutionTags: ["structured_request", "gta_module", "status_tracking"],
    weight: 10,
  },
  organized_demand: {
    title: "O motorista precisa receber demanda mais completa",
    evidence:
      "As respostas do caminhoneiro indicam gargalo em pedido incompleto ou alinhamento antes da proposta.",
    solutionTags: ["organized_demand", "structured_request", "proposal_flow"],
    weight: 8,
  },
  payment_flow: {
    title: "Pagamento, Pix ou repasse fazem parte da dor",
    evidence:
      "O teste identificou necessidade de controlar cobranca, Pix, comprovante, repasse ou confirmacao financeira.",
    solutionTags: ["payment_flow", "financial_trace", "receipt_history"],
    weight: 10,
  },
  peak_operation: {
    title: "Dias de pico precisam de mais visibilidade",
    evidence:
      "As respostas indicam remate, evento, safra ou muitos fretes concentrados em poucos dias.",
    solutionTags: ["peak_operation", "desktop_control", "status_tracking"],
    weight: 9,
  },
  previous_service: {
    title: "Historico de relacionamento influencia a escolha",
    evidence:
      "As respostas mostram que servicos anteriores, parceiros conhecidos ou recorrencia pesam na decisao.",
    solutionTags: ["previous_service", "rating", "driver_matching"],
    weight: 6,
  },
  pricing_estimate: {
    title: "Preco precisa ser comparado com mais clareza",
    evidence:
      "O teste identificou preocupacao com preco, valor estimado, Pix ou condicao de fechamento.",
    solutionTags: ["pricing_estimate", "proposal_flow", "payment_flow"],
    weight: 7,
  },
  proposal_flow: {
    title: "Proposta e aceite precisam ficar registrados",
    evidence:
      "As respostas indicam necessidade de deixar valor, mensagem e combinados mais claros.",
    solutionTags: ["proposal_flow", "history_trace"],
    weight: 8,
  },
  rating: {
    title: "Confiabilidade do motorista precisa aparecer na decisao",
    evidence:
      "As respostas apontam importancia de avaliacao, reputacao ou historico para escolher transportador.",
    solutionTags: ["rating", "previous_service", "driver_matching"],
    weight: 6,
  },
  receipt_history: {
    title: "Comprovantes e evidencias precisam ficar no frete certo",
    evidence:
      "O teste identificou preocupacao com comprovantes, documentos, ocorrencias ou conferencia posterior.",
    solutionTags: ["receipt_history", "payment_flow", "history_trace"],
    weight: 8,
  },
  rework: {
    title: "A equipe perde tempo completando informacoes depois",
    evidence:
      "As respostas indicam retrabalho para completar dados que deveriam entrar no pedido desde o inicio.",
    solutionTags: ["structured_request", "standardization"],
    weight: 8,
  },
  route_distance: {
    title: "Distancia, rota e localizacao pesam na decisao",
    evidence:
      "As respostas mostram que origem, destino, base do motorista, raio e distancia sao criterios importantes.",
    solutionTags: ["route_distance", "driver_matching", "truck_profile"],
    weight: 8,
  },
  scale_pressure: {
    title: "O volume ja pressiona o controle atual",
    evidence:
      "Fretes em maior quantidade exigem acompanhar status, fila, documentos e fechamento sem depender de memoria.",
    solutionTags: ["desktop_control", "status_tracking", "governance"],
    weight: 9,
  },
  standardization: {
    title: "Falta padrao unico entre clientes ou eventos",
    evidence:
      "O teste identificou formatos diferentes de pedido, conferencia ou controle dependendo do cliente/evento.",
    solutionTags: ["standardization", "structured_request", "desktop_control"],
    weight: 8,
  },
  status_rework: {
    title: "Buscar status consome tempo da equipe",
    evidence:
      "As respostas indicam ligacoes, cobrancas repetidas ou necessidade de informar cliente e equipe durante o frete.",
    solutionTags: ["status_tracking", "live_tracking", "chat_history"],
    weight: 9,
  },
  status_tracking: {
    title: "Status do frete precisa ser mais claro",
    evidence:
      "O teste identificou necessidade de acompanhar etapas ou consultar em que ponto cada frete esta.",
    solutionTags: ["status_tracking", "history_trace"],
    weight: 8,
  },
  structured_request: {
    title: "O pedido precisa nascer completo",
    evidence:
      "As respostas apontam que origem, destino, carga, horario ou observacoes precisam ficar estruturados desde o inicio.",
    solutionTags: ["structured_request", "route_distance", "history_trace"],
    weight: 10,
  },
  truck_profile: {
    title: "Dados do caminhao precisam entrar no encaixe do frete",
    evidence:
      "As respostas indicam que capacidade, especie, base, raio ou disponibilidade do caminhao pesam na compatibilidade.",
    solutionTags: ["truck_profile", "driver_matching"],
    weight: 8,
  },
  workflow_core: {
    title: "O escritorio participa do miolo da operacao",
    evidence:
      "As respostas indicam que o escritorio coordena agenda, cliente, motorista ou etapas ate o fechamento.",
    solutionTags: ["status_tracking", "chat_history", "history_trace"],
    weight: 6,
  },
};

const humanProblemByTag: Record<string, string> = {
  chat_history:
    "parte dos combinados importantes ainda pode estar ficando espalhada em conversas, grupos, ligacoes ou audios",
  desktop_control:
    "a operacao parece precisar de uma visao mais confortavel para escritorio, especialmente quando existe equipe ou volume para acompanhar",
  difficult_comparison:
    "a escolha do motorista pode depender de comparacoes manuais, o que dificulta enxergar rapidamente quem realmente combina com aquele frete",
  financial_trace:
    "pagamento, repasse ou confirmacao financeira parecem precisar de mais rastreabilidade junto com a operacao",
  fragmented_history:
    "o historico do frete pode estar ficando dividido entre varios canais, dificultando recuperar depois o que foi combinado",
  governance:
    "mais de uma pessoa pode precisar acompanhar o mesmo frete sem depender da memoria de um unico responsavel",
  gta_module:
    "documentos e GTA aparecem como uma parte sensivel da operacao e precisam ficar vinculados ao frete correto",
  history_trace:
    "existe valor em conseguir reconstruir a linha do tempo do frete sem procurar informacao em varios lugares",
  intake_informal:
    "a demanda tende a nascer em canais informais antes de virar um pedido organizado",
  key_person_dependency:
    "uma parte do controle pode estar concentrada em quem lembra dos motoristas, combinados ou detalhes do frete",
  legal_responsibility:
    "o escritorio participa de uma etapa sensivel de contratacao ou intermediacao, entao o registro do que aconteceu ganha mais importancia",
  live_tracking:
    "ha dificuldade ou necessidade de informar cliente e equipe sobre onde a carga esta durante o trajeto",
  location_alert:
    "a localizacao durante a viagem aparece como ponto de seguranca e transparencia",
  manual_control:
    "planilhas e controles manuais ainda seguram parte do processo, mas exigem conferencia e atualizacao constante",
  management_support:
    "casos de excecao parecem exigir consulta rapida de conta, transporte, pagamento, dispositivo ou historico",
  operational_risk:
    "algumas informacoes ou pendencias podem aparecer tarde demais, perto do carregamento",
  organized_demand:
    "o motorista pode estar recebendo pedidos sem todos os detalhes necessarios para responder com seguranca",
  payment_flow:
    "pagamento, Pix, comprovante ou repasse fazem parte da preocupacao operacional",
  peak_operation:
    "os dias de maior movimento podem concentrar muitos fretes e gerar dificuldade para enxergar tudo ao mesmo tempo",
  previous_service:
    "historico de servicos anteriores e relacoes de confianca influenciam a escolha do motorista",
  pricing_estimate:
    "preco, valor estimado ou condicao de pagamento aparecem como pontos relevantes na decisao",
  proposal_flow:
    "proposta, valor e aceite precisam ficar mais claros para evitar combinados perdidos",
  rating:
    "confiabilidade e reputacao do motorista entram como criterio importante de decisao",
  receipt_history:
    "comprovantes, documentos e evidencias precisam ficar ligados ao frete certo para consulta posterior",
  rework:
    "a equipe pode estar perdendo tempo completando informacoes que poderiam entrar no pedido desde o inicio",
  route_distance:
    "distancia, rota, base do motorista e disponibilidade pesam bastante na escolha do transporte",
  scale_pressure:
    "o volume de fretes ja pressiona o controle atual e pode tornar conversas ou memoria insuficientes",
  standardization:
    "falta um padrao unico para receber pedidos e comparar informacoes entre clientes ou eventos",
  status_rework:
    "parte do tempo da equipe pode estar indo para buscar status manualmente com motorista ou cliente",
  status_tracking:
    "o status de cada frete precisa ficar mais claro para quem acompanha a operacao",
  structured_request:
    "o pedido precisa nascer mais completo, com origem, destino, carga, horario e observacoes bem definidos",
  truck_profile:
    "os dados do caminhao precisam entrar melhor no encaixe entre demanda e motorista",
  workflow_core:
    "o escritorio esta no miolo da operacao, coordenando etapas que precisam permanecer conectadas",
};

const outcomeBySolutionTag: Record<string, string> = {
  chat_history:
    "Assim, quando surgir uma duvida, a equipe consulta o historico do proprio frete em vez de procurar mensagens soltas.",
  desktop_control:
    "Assim, o escritorio ganha uma tela de acompanhamento mais adequada para volume, equipe e dias de pico.",
  driver_matching:
    "Assim, a escolha deixa de ser apenas por lembranca ou tentativa e passa a considerar compatibilidade real com o frete.",
  financial_trace:
    "Assim, a parte financeira deixa de ficar separada da operacao e passa a acompanhar o mesmo historico do transporte.",
  governance:
    "Assim, mais pessoas conseguem trabalhar sobre a mesma informacao sem depender de uma conversa paralela.",
  gta_module:
    "Assim, documentos e confirmacoes deixam de ficar soltos e passam a acompanhar o transporte certo.",
  history_trace:
    "Assim, fica mais facil explicar depois o que aconteceu, quem participou e em que etapa o frete parou ou avancou.",
  live_tracking:
    "Assim, quando o cliente perguntar, voce consegue passar uma informacao mais exata sobre o andamento da carga.",
  location_alert:
    "Assim, se a localizacao ficar indisponivel, a operacao sabe disso e ainda tem referencia da ultima posicao conhecida.",
  management_support:
    "Assim, casos de excecao podem ser investigados com mais rapidez e menos dependencia de relatos manuais.",
  organized_demand:
    "Assim, o motorista recebe um pedido mais claro antes de aceitar ou montar a proposta.",
  payment_flow:
    "Assim, pagamento e repasse entram no mesmo fluxo do frete, reduzindo duvida sobre o que ja foi confirmado.",
  peak_operation:
    "Assim, dias de remate, evento ou safra ficam mais acompanhaveis, mesmo com varios fretes acontecendo perto um do outro.",
  previous_service:
    "Assim, a operacao consegue valorizar relacoes que ja deram certo sem depender apenas da memoria da equipe.",
  pricing_estimate:
    "Assim, a conversa sobre valor comeca com mais contexto e menos comparacao manual.",
  proposal_flow:
    "Assim, valor, mensagem e aceite ficam registrados como parte do transporte.",
  rating:
    "Assim, a escolha do motorista pode considerar reputacao e experiencia anterior, nao apenas contato ou preco.",
  receipt_history:
    "Assim, comprovantes e evidencias ficam mais faceis de localizar quando houver conferencia ou suporte.",
  route_distance:
    "Assim, a decisao considera mapa, distancia e rota antes de o escritorio ou cliente fechar com o motorista.",
  standardization:
    "Assim, cada pedido entra no mesmo formato e a equipe reduz retrabalho para completar informacoes.",
  status_tracking:
    "Assim, cliente, escritorio e motorista passam a enxergar o frete por etapas mais claras.",
  structured_request:
    "Assim, o frete ja comeca com informacoes suficientes para acionar motorista, calcular rota e reduzir retrabalho.",
  truck_profile:
    "Assim, capacidade, base, raio e disponibilidade do caminhao ajudam a evitar escolhas incompatveis.",
};

const allParticipantTags: ParticipantTag[] = [
  "profile_driver",
  "profile_office",
  "profile_requester",
];

const officeAndRequesterTags: ParticipantTag[] = [
  "profile_office",
  "profile_requester",
];

const appFeatureCatalog: AppFeature[] = [
  {
    title: "Conta híbrida solicitante/caminhoneiro",
    profiles: allParticipantTags,
  },
  {
    title: "Solicitação de frete inteligente",
    profiles: allParticipantTags,
  },
  {
    title: "Matching de caminhoneiros compatíveis",
    profiles: allParticipantTags,
  },
  {
    title:
      "Ordenação de caminhoneiro por histórico com o solicitante, proximidade, melhor avaliação e menor preço",
    profiles: officeAndRequesterTags,
  },
  {
    title: "Lista de solicitações",
    profiles: allParticipantTags,
  },
  {
    title:
      "Ordenação da lista de solicitações por data de abertura e data do frete",
    profiles: allParticipantTags,
  },
  {
    title: "Acompanhamento de status da solicitação",
    profiles: allParticipantTags,
  },
  {
    title: "Negociação de valores",
    profiles: allParticipantTags,
  },
  {
    title: "Pagamento intermediado de forma segura via PIX",
    profiles: allParticipantTags,
  },
  {
    title: "Confirmação automática de pagamento",
    profiles: allParticipantTags,
  },
  {
    title:
      "Identificação da GTA, UF, série GTA e número GTA, além da opção de anexo do documento",
    profiles: officeAndRequesterTags,
  },
  {
    title: "Download/visualização do documento GTA",
    profiles: allParticipantTags,
  },
  {
    title:
      "Documentação completa da solicitação para visualização durante e após o transporte",
    profiles: allParticipantTags,
  },
  {
    title:
      "Confirmação de documentação pelo motorista antes de iniciar o transporte",
    profiles: ["profile_driver"],
  },
  {
    title: "Bloqueio do transporte por falta de permissão de localização",
    profiles: officeAndRequesterTags,
  },
  {
    title: "Rastreio ao vivo do motorista durante o transporte",
    profiles: officeAndRequesterTags,
  },
  {
    title:
      "Detecção de localização desabilitada pelo motorista e alerta ao cliente quando motorista desabilita localização",
    profiles: officeAndRequesterTags,
  },
  {
    title:
      "Rota planejada, quilometragem do transporte e abertura de navegação",
    profiles: ["profile_driver"],
  },
  {
    title: "Avaliação do caminhoneiro após conclusão do transporte",
    profiles: officeAndRequesterTags,
  },
  {
    title: "Liberação de pagamento automática após confirmação de conclusão",
    profiles: allParticipantTags,
  },
  {
    title: "Chat interno por transporte",
    profiles: allParticipantTags,
  },
  {
    title:
      "Notificações instantâneas para recebimento de solicitações, atualizações da solicitação e trocas de mensagens",
    profiles: allParticipantTags,
  },
  {
    title: "Cadastro de múltiplos caminhões por perfil",
    profiles: ["profile_driver"],
  },
  {
    title: "Gestão de múltiplos caminhões por perfil",
    profiles: ["profile_driver"],
  },
  {
    title: "Ativação/desativação de caminhão",
    profiles: ["profile_driver"],
  },
  {
    title:
      "Personalização de caminhão por: tipo de caminhão, capacidade máxima em kg, capacidade por tipo de animal, habilitar/desabilitar transporte por espécie, base operacional do caminhão, raio de atuação, dias disponíveis, janela de horário disponível, preço por km e quilometragem mínima para cobrar por km",
    profiles: ["profile_driver"],
  },
  {
    title:
      "Visualização das avaliações, média de avaliação e quantidade de avaliações",
    profiles: ["profile_driver"],
  },
  {
    title: "Listagem de eventos/avisos",
    profiles: allParticipantTags,
  },
  {
    title:
      "Anúncio de eventos dentro da plataforma com notificações personalizadas para toda base de usuários",
    profiles: ["profile_office"],
  },
  {
    title: "Botões de ajuda em cada tela",
    profiles: allParticipantTags,
  },
  {
    title: "Tags para organizar solicitações [desktop]",
    profiles: allParticipantTags,
  },
  {
    title:
      "Criação de tags padrão e tags personalizadas por solicitação [desktop]",
    profiles: allParticipantTags,
  },
  {
    title: "Busca de solicitação por qualquer termo envolvido a ela [desktop]",
    profiles: allParticipantTags,
  },
  {
    title:
      "Painel multiuso com seleção de modo: Dashboard, acompanhar solicitações e informações do perfil [desktop]",
    profiles: allParticipantTags,
  },
  {
    title:
      "Painel \"Acompanhar solicitações\": monitore rastreio e status de todas as solicitações abertas em uma única tela [desktop]",
    profiles: allParticipantTags,
  },
  {
    title:
      "Painel \"Informações do perfil\": visualização completa de todas as informações do perfil [desktop]",
    profiles: allParticipantTags,
  },
  {
    title:
      "Painel \"Dashboard\": dashboard com métricas operacionais de solicitante, caminhoneiro ou conta híbrida e KPIs financeiros [desktop]",
    profiles: allParticipantTags,
  },
];

const officeProfileReports: Record<string, ProfileReport> = {
  advisory: {
    title: "Como o CargaViva ajuda uma assessoria com varios clientes",
    focus:
      "O ganho principal esta em padronizar pedidos, separar historico por frete e manter escritorio, cliente e motorista olhando para a mesma linha operacional.",
  },
  auction_event: {
    title: "Como o CargaViva ajuda remates, leiloeiras e eventos",
    focus:
      "O ganho principal esta em transformar dias de pico em uma fila acompanhavel: pedidos estruturados, motoristas compativeis, status, mapa e evidencias por transporte.",
  },
  cooperative: {
    title: "Como o CargaViva ajuda cooperativas, sindicatos e associacoes",
    focus:
      "O ganho principal esta em organizar indicacoes, historico de parceiros, escolhas de motorista e acompanhamento sem expor mais dados do que o necessario.",
  },
  large_office: {
    title: "Como o CargaViva ajuda escritorios com equipe dividida",
    focus:
      "O ganho principal esta em dar uma central de acompanhamento no desktop, com trilha de status, chat, documentos, pagamentos e suporte por frete.",
  },
  small_office: {
    title: "Como o CargaViva ajuda escritorios pequenos",
    focus:
      "O ganho principal esta em tirar a operacao da memoria e do WhatsApp pessoal, mantendo o pedido, motorista, status e comprovacoes no mesmo lugar.",
  },
};

const participantProfiles: Record<
  string,
  {
    label: string;
    summary: string;
  }
> = {
  profile_driver: {
    label: "caminhoneiro ou transportador",
    summary:
      "Pelas suas respostas, o CargaViva tende a ajudar principalmente a receber pedidos mais completos, mostrar seu caminhao para demandas compativeis e registrar proposta, Pix, localizacao e avaliacao.",
  },
  profile_office: {
    label: "escritorio ou equipe administrativa",
    summary:
      "Pelas suas respostas, o CargaViva tende a ajudar principalmente a centralizar pedidos, encontrar motoristas compativeis, acompanhar o frete e manter historico operacional para a equipe.",
  },
  profile_requester: {
    label: "solicitante avulso de fretes",
    summary:
      "Pelas suas respostas, o CargaViva tende a ajudar principalmente a montar o pedido, comparar motoristas, pagar com mais clareza, acompanhar no mapa e avaliar ao final.",
  },
};

const fallbackProfile = participantProfiles.profile_office;

const emptyContactInfo: ContactInfo = {
  city: "",
  name: "",
  phone: "",
};

const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits ? `(${digits}` : "";
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const getParticipantTagFromTags = (tags: string[]) =>
  (tags.find((tag) => tag.startsWith("profile_")) ??
    "profile_office") as ParticipantTag;

const accentText = (value: string) =>
  value
    .replace(/\bAderencia\b/g, "Aderência")
    .replace(/\bAlem\b/g, "Além")
    .replace(/\bRelatorio\b/g, "Relatório")
    .replace(/\bSolucoes\b/g, "Soluções")
    .replace(/\bQual e\b/g, "Qual é")
    .replace(/\bO objetivo e\b/g, "O objetivo é")
    .replace(/\boperacao ainda e\b/g, "operação ainda é")
    .replace(/\bsua necessidade e\b/g, "sua necessidade é")
    .replace(/\bO ganho principal esta\b/g, "O ganho principal está")
    .replace(/\besta em\b/g, "está em")
    .replace(/\besta confirmado\b/g, "está confirmado")
    .replace(/\besta durante\b/g, "está durante")
    .replace(/\besta no\b/g, "está no")
    .replace(/\besta na\b/g, "está na")
    .replace(/\besta com\b/g, "está com")
    .replace(/\be importante\b/g, "é importante")
    .replace(/\be pequena\b/g, "é pequena")
    .replace(/\be centralizada\b/g, "é centralizada")
    .replace(/\be organizada\b/g, "é organizada")
    .replace(/\be ocasional\b/g, "é ocasional")
    .replace(/\be receber\b/g, "é receber")
    .replace(/\bVoce\b/g, "Você")
    .replace(/\bvoce\b/g, "você")
    .replace(/\bnao\b/g, "não")
    .replace(/\bNao\b/g, "Não")
    .replace(/\bja\b/g, "já")
    .replace(/\bJa\b/g, "Já")
    .replace(/\bate\b/g, "até")
    .replace(/\bAte\b/g, "Até")
    .replace(/\btambem\b/g, "também")
    .replace(/\bTambem\b/g, "Também")
    .replace(/\bunico\b/g, "único")
    .replace(/\bunica\b/g, "única")
    .replace(/\bproprio\b/g, "próprio")
    .replace(/\bpropria\b/g, "própria")
    .replace(/\bvarios\b/g, "vários")
    .replace(/\bvarias\b/g, "várias")
    .replace(/\boperacao\b/g, "operação")
    .replace(/\boperacoes\b/g, "operações")
    .replace(/\bescritorio\b/g, "escritório")
    .replace(/\bescritorios\b/g, "escritórios")
    .replace(/\bsolicitacao\b/g, "solicitação")
    .replace(/\bsolicitacoes\b/g, "solicitações")
    .replace(/\bcaminhao\b/g, "caminhão")
    .replace(/\bcaminhoes\b/g, "caminhões")
    .replace(/\blocalizacao\b/g, "localização")
    .replace(/\bposicao\b/g, "posição")
    .replace(/\binformacao\b/g, "informação")
    .replace(/\binformacoes\b/g, "informações")
    .replace(/\bobservacoes\b/g, "observações")
    .replace(/\bhistorico\b/g, "histórico")
    .replace(/\bavaliacao\b/g, "avaliação")
    .replace(/\bavaliacoes\b/g, "avaliações")
    .replace(/\bconfirmacao\b/g, "confirmação")
    .replace(/\bconfirmacoes\b/g, "confirmações")
    .replace(/\bdocumentacao\b/g, "documentação")
    .replace(/\bcontratacao\b/g, "contratação")
    .replace(/\bintermediacao\b/g, "intermediação")
    .replace(/\bdecisao\b/g, "decisão")
    .replace(/\bvisao\b/g, "visão")
    .replace(/\bpreco\b/g, "preço")
    .replace(/\bdistancia\b/g, "distância")
    .replace(/\bdistancias\b/g, "distâncias")
    .replace(/\bduvida\b/g, "dúvida")
    .replace(/\bduvidas\b/g, "dúvidas")
    .replace(/\bnecessario\b/g, "necessário")
    .replace(/\bnecessarios\b/g, "necessários")
    .replace(/\bcompativel\b/g, "compatível")
    .replace(/\bcompativeis\b/g, "compatíveis")
    .replace(/\bincompativel\b/g, "incompatível")
    .replace(/\bincompativeis\b/g, "incompatíveis")
    .replace(/\brelacao\b/g, "relação")
    .replace(/\brelacoes\b/g, "relações")
    .replace(/\bconfianca\b/g, "confiança")
    .replace(/\bresponsavel\b/g, "responsável")
    .replace(/\bresponsaveis\b/g, "responsáveis")
    .replace(/\bpendencias\b/g, "pendências")
    .replace(/\bevidencias\b/g, "evidências")
    .replace(/\bservicos\b/g, "serviços")
    .replace(/\bpratico\b/g, "prático")
    .replace(/\bpraticos\b/g, "práticos")
    .replace(/\bpadronizacao\b/g, "padronização")
    .replace(/\bconclusao\b/g, "conclusão")
    .replace(/\bconcluido\b/g, "concluído")
    .replace(/\barea\b/g, "área")
    .replace(/\bserie\b/g, "série")
    .replace(/\bnumero\b/g, "número")
    .replace(/\baudios\b/g, "áudios")
    .replace(/\baudio\b/g, "áudio")
    .replace(/\bligacao\b/g, "ligação")
    .replace(/\bligacoes\b/g, "ligações")
    .replace(/\bFormulario\b/g, "Formulário")
    .replace(/\bformulario\b/g, "formulário")
    .replace(/\bproxima\b/g, "próxima")
    .replace(/\bproximo\b/g, "próximo")
    .replace(/\brapida\b/g, "rápida")
    .replace(/\bmemoria\b/g, "memória")
    .replace(/\bselecao\b/g, "seleção")
    .replace(/\bopcao\b/g, "opção")
    .replace(/\bopcoes\b/g, "opções")
    .replace(/\bcodigo\b/g, "código")
    .replace(/\bveiculo\b/g, "veículo")
    .replace(/\bso\b/g, "só")
    .replace(/\bgestao\b/g, "gestão")
    .replace(/\bcobranca\b/g, "cobrança")
    .replace(/\bcobrancas\b/g, "cobranças")
    .replace(/\bliberacao\b/g, "liberação")
    .replace(/\bhorario\b/g, "horário")
    .replace(/\bhorarios\b/g, "horários");

const toPdfText = (value: string) => {
  const clean = accentText(value).replace(/\r?\n/g, " ").trim();
  const winAnsiMap: Record<number, number> = {
    0x2013: 0x2d,
    0x2014: 0x2d,
    0x2018: 0x27,
    0x2019: 0x27,
    0x201c: 0x22,
    0x201d: 0x22,
    0x2022: 0x95,
  };
  const bytes: number[] = [];

  for (let index = 0; index < clean.length; index += 1) {
    const code = clean.charCodeAt(index);
    bytes.push(code <= 255 ? code : winAnsiMap[code] ?? 0x3f);
  }

  return `<${bytes.map((byte) => byte.toString(16).padStart(2, "0")).join("").toUpperCase()}>`;
};

const loadPdfImage = (
  src: string,
  name: string,
  backgroundColor = "#0f3829",
): Promise<PdfImage> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const maxWidth = 720;
      const scale = Math.min(1, maxWidth / image.naturalWidth);
      const width = Math.max(1, Math.round(image.naturalWidth * scale));
      const height = Math.max(1, Math.round(image.naturalHeight * scale));
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        reject(new Error("Canvas indisponivel para gerar o PDF."));
        return;
      }

      canvas.width = width;
      canvas.height = height;
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);

      const base64 = canvas.toDataURL("image/jpeg", 0.92).split(",")[1];
      resolve({
        data: atob(base64),
        height,
        name,
        ratio: width / height,
        width,
      });
    };
    image.onerror = () => reject(new Error(`Nao foi possivel carregar ${src}.`));
    image.src = src;
  });

const loadReportFooterImages = async () => {
  try {
    return await Promise.all([
      loadPdfImage(
        "/images/cargaviva/report-akelm-logo.png",
        "ImAkelm",
      ),
      loadPdfImage(
        "/images/cargaviva/report-cargaviva-logo.png",
        "ImCargaViva",
        "#0f3829",
      ),
    ]);
  } catch {
    return [];
  }
};

const uploadReportPdf = async (
  pdfBlob: Blob,
  contactInfo: ContactInfo,
  profile: string,
) => {
  const formData = new FormData();
  formData.append("file", pdfBlob, "relatorio-cargaviva.pdf");
  formData.append("name", contactInfo.name);
  formData.append("phone", contactInfo.phone);
  formData.append("city", contactInfo.city);
  formData.append("profile", profile);

  const response = await fetch("/api/cargaviva/relatorios", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Não foi possível salvar o relatório no Blob.");
  }
};

const wrapText = (text: string, maxLength: number) => {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;

    if (next.length > maxLength) {
      if (current) {
        lines.push(current);
      }
      current = word;
      return;
    }

    current = next;
  });

  if (current) {
    lines.push(current);
  }

  return lines;
};

const unique = (items: string[]) => Array.from(new Set(items));

const uniqueSolutions = (solutions: SolutionMatch[]) => {
  const seen = new Set<string>();
  return solutions.filter((solution) => {
    if (seen.has(solution.title)) {
      return false;
    }

    seen.add(solution.title);
    return true;
  });
};

const getDiagnosticPoints = (tags: string[]) =>
  tags
    .map((tag) => ({ point: diagnosticByTag[tag], tag }))
    .filter(
      (item): item is { point: DiagnosticPoint; tag: string } =>
        Boolean(item.point),
    )
    .sort((left, right) => right.point.weight - left.point.weight);

const getAnswerReasonsByTag = (history: SelectedAnswer[]) => {
  const reasonsByTag: Record<string, string[]> = {};

  history.forEach((item) => {
    item.answer.tags?.forEach((tag) => {
      reasonsByTag[tag] = reasonsByTag[tag] ?? [];
      reasonsByTag[tag].push(item.answer.value);
    });
  });

  return reasonsByTag;
};

const buildSolutionMatches = (
  diagnostics: Array<{ point: DiagnosticPoint; tag: string }>,
  reasonsByTag: Record<string, string[]>,
) => {
  const matches = diagnostics.flatMap(({ point, tag }) =>
    point.solutionTags
      .map((solutionTag) => {
        const solution = solutionsByTag[solutionTag];

        if (!solution) {
          return null;
        }

        const directReasons = reasonsByTag[tag] ?? [];
        const reasonText =
          directReasons.length > 0
            ? directReasons.slice(0, 2).join("; ")
            : point.evidence;

        return {
          ...solution,
          reasons: [point.title, reasonText],
        };
      })
      .filter(Boolean),
  );

  return uniqueSolutions(matches as SolutionMatch[]).slice(0, 7);
};

const getProfileFeatures = (participantTag: string) => {
  const normalizedTag = allParticipantTags.includes(participantTag as ParticipantTag)
    ? (participantTag as ParticipantTag)
    : "profile_office";

  return appFeatureCatalog
    .filter((feature) => feature.profiles.includes(normalizedTag))
    .map((feature) => feature.title);
};

const normalizeSearchText = (value: string) =>
  accentText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const recommendedFeatureNeedlesByTag: Record<string, string[]> = {
  chat_history: ["chat interno", "notificacoes instantaneas"],
  desktop_control: [
    "painel multiuso",
    "painel acompanhar solicitacoes",
    "tags para organizar",
    "busca de solicitacao",
  ],
  difficult_comparison: [
    "ordenacao de caminhoneiro",
    "matching de caminhoneiros",
  ],
  financial_trace: [
    "confirmacao automatica de pagamento",
    "liberacao de pagamento automatica",
  ],
  fragmented_history: [
    "lista de solicitacoes",
    "busca de solicitacao",
    "chat interno",
    "documentacao completa",
  ],
  governance: [
    "painel multiuso",
    "painel dashboard",
    "informacoes do perfil",
  ],
  gta_module: [
    "identificacao da gta",
    "download/visualizacao do documento gta",
    "documentacao completa",
    "confirmacao de documentacao",
  ],
  history_trace: [
    "lista de solicitacoes",
    "acompanhamento de status",
    "chat interno",
    "documentacao completa",
  ],
  intake_informal: ["solicitacao de frete inteligente"],
  key_person_dependency: [
    "busca de solicitacao",
    "painel acompanhar solicitacoes",
    "tags para organizar",
  ],
  legal_responsibility: [
    "negociacao de valores",
    "pagamento intermediado",
    "confirmacao automatica de pagamento",
  ],
  live_tracking: ["rastreio ao vivo"],
  location_alert: [
    "bloqueio do transporte",
    "deteccao de localizacao desabilitada",
  ],
  manual_control: [
    "tags para organizar",
    "criacao de tags",
    "painel acompanhar solicitacoes",
  ],
  management_support: [
    "botoes de ajuda",
    "busca de solicitacao",
    "informacoes do perfil",
  ],
  operational_risk: [
    "acompanhamento de status",
    "notificacoes instantaneas",
    "identificacao da gta",
    "documentacao completa",
  ],
  organized_demand: ["solicitacao de frete inteligente"],
  payment_flow: [
    "pagamento intermediado",
    "confirmacao automatica de pagamento",
    "liberacao de pagamento automatica",
  ],
  peak_operation: [
    "painel acompanhar solicitacoes",
    "painel dashboard",
    "tags para organizar",
  ],
  previous_service: ["ordenacao de caminhoneiro"],
  pricing_estimate: ["ordenacao de caminhoneiro", "negociacao de valores"],
  proposal_flow: ["negociacao de valores"],
  rating: ["avaliacao do caminhoneiro", "visualizacao das avaliacoes"],
  receipt_history: [
    "download/visualizacao do documento gta",
    "documentacao completa",
  ],
  rework: ["solicitacao de frete inteligente"],
  route_distance: [
    "ordenacao de caminhoneiro",
    "rota planejada",
    "matching de caminhoneiros",
  ],
  scale_pressure: [
    "painel dashboard",
    "painel acompanhar solicitacoes",
    "ordenacao da lista",
  ],
  standardization: [
    "solicitacao de frete inteligente",
    "ordenacao da lista",
    "tags para organizar",
  ],
  status_rework: ["acompanhamento de status", "notificacoes instantaneas"],
  status_tracking: ["acompanhamento de status", "lista de solicitacoes"],
  structured_request: ["solicitacao de frete inteligente"],
  truck_profile: [
    "cadastro de multiplos caminhoes",
    "gestao de multiplos caminhoes",
    "personalizacao de caminhao",
  ],
  workflow_core: [
    "painel acompanhar solicitacoes",
    "chat interno",
    "acompanhamento de status",
  ],
};

const defaultRecommendedFeatureNeedles: Record<ParticipantTag, string[]> = {
  profile_driver: [
    "solicitacao de frete inteligente",
    "lista de solicitacoes",
    "acompanhamento de status",
    "negociacao de valores",
    "chat interno",
    "cadastro de multiplos caminhoes",
  ],
  profile_office: [
    "solicitacao de frete inteligente",
    "matching de caminhoneiros",
    "ordenacao de caminhoneiro",
    "acompanhamento de status",
    "rastreio ao vivo",
    "painel acompanhar solicitacoes",
  ],
  profile_requester: [
    "solicitacao de frete inteligente",
    "matching de caminhoneiros",
    "ordenacao de caminhoneiro",
    "pagamento intermediado",
    "rastreio ao vivo",
    "avaliacao do caminhoneiro",
  ],
};

const findFeaturesByNeedles = (features: string[], needles: string[]) => {
  const normalizedFeatures = features.map((feature) => ({
    normalized: normalizeSearchText(feature).replace(/[“”"]/g, ""),
    title: feature,
  }));

  return unique(
    needles
      .map((needle) =>
        normalizedFeatures.find((feature) =>
          feature.normalized.includes(normalizeSearchText(needle)),
        )?.title,
      )
      .filter((feature): feature is string => Boolean(feature)),
  );
};

const getRecommendedProfileFeatures = (
  participantTag: string,
  tags: string[],
) => {
  const normalizedTag = allParticipantTags.includes(participantTag as ParticipantTag)
    ? (participantTag as ParticipantTag)
    : "profile_office";
  const profileFeatures = getProfileFeatures(normalizedTag);
  const tagNeedles = unique(
    tags.flatMap((tag) => recommendedFeatureNeedlesByTag[tag] ?? []),
  );
  const recommended = findFeaturesByNeedles(profileFeatures, tagNeedles);
  const defaults = findFeaturesByNeedles(
    profileFeatures,
    defaultRecommendedFeatureNeedles[normalizedTag],
  );

  return (recommended.length ? recommended : defaults).slice(0, 10);
};

const getRemainingProfileFeatures = (
  profileFeatures: string[],
  recommendedFeatures: string[],
) => {
  const recommendedSet = new Set(recommendedFeatures);

  return profileFeatures.filter((feature) => !recommendedSet.has(feature));
};

const lowerFirst = (value: string) =>
  value ? `${value.charAt(0).toLowerCase()}${value.slice(1)}` : value;

const formatHumanList = (items: string[]) => {
  const cleanItems = unique(items.filter(Boolean)).slice(0, 4);

  if (cleanItems.length === 0) {
    return "";
  }

  if (cleanItems.length === 1) {
    return cleanItems[0];
  }

  if (cleanItems.length === 2) {
    return `${cleanItems[0]} e ${cleanItems[1]}`;
  }

  return `${cleanItems.slice(0, -1).join(", ")} e ${
    cleanItems[cleanItems.length - 1]
  }`;
};

const quoteAnswer = (value: string) => `"${accentText(value)}"`;

const uniqueDiagnostics = (
  diagnostics: Array<{ point: DiagnosticPoint; tag: string }>,
) => {
  const seen = new Set<string>();
  return diagnostics.filter(({ point }) => {
    if (seen.has(point.title)) {
      return false;
    }

    seen.add(point.title);
    return true;
  });
};

const pickNarrativeSolutionTag = (point: DiagnosticPoint) => {
  const preferredOrder = [
    "structured_request",
    "driver_matching",
    "desktop_control",
    "live_tracking",
    "payment_flow",
    "gta_module",
    "chat_history",
    "history_trace",
  ];
  const preferred = preferredOrder.find((tag) => point.solutionTags.includes(tag));

  return (
    preferred ??
    point.solutionTags.find((candidate) => solutionsByTag[candidate]) ??
    point.solutionTags[0]
  );
};

const buildNarrativeParagraphs = (
  diagnostics: Array<{ point: DiagnosticPoint; tag: string }>,
  reasonsByTag: Record<string, string[]>,
) => {
  const selectedDiagnostics = uniqueDiagnostics(diagnostics).slice(0, 8);

  if (selectedDiagnostics.length === 0) {
    return [
      {
        text:
          "Pelo que você respondeu, sua rotina parece simples. Mesmo assim, o CargaViva pode ajudar deixando cada frete com pedido, motorista, status e histórico no mesmo lugar.",
      },
    ];
  }

  const grouped = selectedDiagnostics.reduce<
    Record<
      string,
      {
        items: Array<{ point: DiagnosticPoint; tag: string }>;
        weight: number;
      }
    >
  >((groups, item) => {
    const solutionTag = pickNarrativeSolutionTag(item.point);
    groups[solutionTag] = groups[solutionTag] ?? { items: [], weight: 0 };
    groups[solutionTag].items.push(item);
    groups[solutionTag].weight = Math.max(groups[solutionTag].weight, item.point.weight);
    return groups;
  }, {});

  const mainProblems = selectedDiagnostics
    .map(({ point, tag }) => humanProblemByTag[tag] ?? lowerFirst(point.evidence))
    .slice(0, 3);
  const intro =
    `Pelo que você respondeu, o CargaViva faz sentido principalmente porque ${formatHumanList(
      mainProblems,
    )}. Em resumo: a ideia é tirar o frete da conversa solta e deixar pedido, motorista, documento, status e histórico juntos.`;

  const body = Object.entries(grouped)
    .sort((left, right) => right[1].weight - left[1].weight)
    .slice(0, 4)
    .map(([solutionTag, group], index) => {
      const solution = solutionsByTag[solutionTag];
      const problems = group.items.map(
        ({ point, tag }) => humanProblemByTag[tag] ?? lowerFirst(point.evidence),
      );
      const reasons = unique(
        group.items.flatMap(({ tag }) => reasonsByTag[tag] ?? []),
      ).slice(0, 2);
      const reasonText = reasons.length
        ? ` Isso apareceu em respostas como ${formatHumanList(
            reasons.map(quoteAnswer),
          )}.`
        : "";
      const outcome =
        outcomeBySolutionTag[solutionTag] ??
        "Assim, a operacao passa a ter mais clareza, rastreabilidade e menos retrabalho.";
      const bridge =
        index === 0
          ? "Na pratica"
          : index === 1
            ? "Outro ponto importante"
            : index === 2
              ? "Tambem vale notar"
              : "Por fim";

      if (!solution) {
        return {
          text: `${bridge}, ${formatHumanList(
            problems,
          )}.${reasonText} O caminho aqui é manter essas informações em um registro único, para consultar depois sem caçar conversa antiga.`,
        };
      }

      return {
        text: `${bridge}, ${formatHumanList(problems)}.${reasonText} Nessa parte, o CargaViva entrega ${lowerFirst(
          solution.feature,
        )}: ${lowerFirst(solution.text)} ${outcome}`,
      };
    });

  return [{ text: intro }, ...body];
};

const downloadPdf = async (
  lines: string[],
  contactInfo: ContactInfo,
  profile: string,
) => {
  const footerImages = await loadReportFooterImages();
  const pageWidth = 595;
  const pageHeight = 842;
  const marginX = 46;
  const contentWidth = 503;
  const pages: string[][] = [];
  let currentPage: string[] = [];
  let y = 718;

  const color = {
    darkGreen: "0.06 0.22 0.16",
    green: "0.10 0.34 0.24",
    muted: "0.28 0.36 0.32",
    orange: "0.79 0.40 0.01",
    paleGreen: "0.93 0.97 0.94",
    paleOrange: "1 0.96 0.88",
    white: "1 1 1",
  };

  const pushRect = (
    x: number,
    rectY: number,
    width: number,
    height: number,
    fill: string,
  ) => {
    currentPage.push(`${fill} rg ${x} ${rectY} ${width} ${height} re f`);
  };

  const pushText = (
    text: string,
    x: number,
    textY: number,
    size: number,
    fill: string,
    font = "F1",
  ) => {
    currentPage.push(`${fill} rg BT /${font} ${size} Tf ${x} ${textY} Td ${toPdfText(text)} Tj ET`);
  };

  const pushImage = (
    imageName: string,
    x: number,
    imageY: number,
    width: number,
    height: number,
  ) => {
    currentPage.push(`q ${width} 0 0 ${height} ${x} ${imageY} cm /${imageName} Do Q`);
  };

  const fitImage = (
    image: PdfImage,
    maxWidth: number,
    maxHeight: number,
  ) => {
    const widthByHeight = maxHeight * image.ratio;
    const width = Math.min(maxWidth, widthByHeight);

    return {
      height: width / image.ratio,
      width,
    };
  };

  const addHeader = () => {
    pushRect(0, 770, pageWidth, 72, color.darkGreen);
    pushRect(0, 770, pageWidth, 5, color.orange);
    pushText("CargaViva Fretes", marginX, 810, 18, color.white, "F2");
    pushText("Relatório personalizado", marginX, 790, 10, color.paleOrange, "F1");
    pushText(
      contactInfo.name || "-",
      330,
      812,
      8,
      color.white,
      "F2",
    );
    pushText(
      `Contato: ${formatPhoneNumber(contactInfo.phone) || "-"}`,
      330,
      798,
      8,
      color.paleOrange,
    );
    pushText(
      `Cidade: ${contactInfo.city || "-"}`,
      330,
      784,
      8,
      color.paleOrange,
    );
  };

  const startPage = () => {
    if (currentPage.length) {
      pages.push(currentPage);
    }

    currentPage = [];
    y = 718;
    pushRect(0, 0, pageWidth, pageHeight, color.white);
    addHeader();
  };

  const ensureSpace = (height: number) => {
    if (y - height < 70) {
      startPage();
    }
  };

  const drawWrappedText = (
    text: string,
    x: number,
    maxChars: number,
    size: number,
    lineHeight: number,
    fill: string,
    font = "F1",
  ) => {
    const wrapped = wrapText(accentText(text), maxChars);

    wrapped.forEach((line) => {
      pushText(line, x, y, size, fill, font);
      y -= lineHeight;
    });
  };

  const addClosingFooter = () => {
    const closingText =
      "Este relatório é apenas um breve resumo de como o CargaViva pode somar no seu dia a dia. Entre em contato com nossa equipe para tirar dúvidas de forma mais completa, estamos sempre à disposição!";

    ensureSpace(194);
    y -= 10;
    pushRect(marginX, y - 66, contentWidth, 78, color.paleOrange);
    drawWrappedText(closingText, marginX + 18, 78, 10.5, 15, color.darkGreen, "F2");
    y -= 12;
    pushRect(marginX, y - 88, contentWidth, 96, color.darkGreen);
    pushText("Desenvolvido por", marginX + 18, y - 12, 8, color.paleOrange);

    const akelmLogo = footerImages.find((image) => image.name === "ImAkelm");
    const cargaVivaLogo = footerImages.find((image) => image.name === "ImCargaViva");

    if (akelmLogo) {
      const size = fitImage(akelmLogo, 92, 34);
      pushImage(
        akelmLogo.name,
        marginX + 18,
        y - 60,
        size.width,
        size.height,
      );
    } else {
      pushText("AKELM", marginX + 34, y - 48, 17, color.darkGreen, "F2");
    }

    if (cargaVivaLogo) {
      const size = fitImage(cargaVivaLogo, 166, 42);
      pushImage(
        cargaVivaLogo.name,
        marginX + 138,
        y - 62,
        size.width,
        size.height,
      );
    } else {
      pushText("CargaViva Fretes", marginX + 158, y - 48, 15, color.white, "F2");
    }

    pushRect(marginX + 314, y - 68, 170, 42, "0.08 0.28 0.20");
    pushText("Contato: +55 55 99917-1727", marginX + 330, y - 42, 8, color.paleOrange);
    pushText("www.akelm.com.br/cargaviva", marginX + 330, y - 58, 8, color.white, "F2");
    y -= 112;
  };

  startPage();

  lines.forEach((rawLine, index) => {
    const line = accentText(rawLine);

    if (!line.trim()) {
      y -= 12;
      return;
    }

    if (index === 0) {
      ensureSpace(64);
      pushRect(marginX, y - 34, contentWidth, 54, color.paleOrange);
      drawWrappedText(line, marginX + 18, 52, 20, 24, color.darkGreen, "F2");
      y -= 18;
      return;
    }

    if (line.endsWith(":") && !line.startsWith("- ")) {
      ensureSpace(36);
      y -= 8;
      pushRect(marginX, y - 5, 5, 20, color.orange);
      drawWrappedText(line.replace(":", ""), marginX + 14, 60, 14, 18, color.darkGreen, "F2");
      y -= 6;
      return;
    }

    if (line.startsWith("- ")) {
      const bulletText = line.slice(2);
      const wrapped = wrapText(bulletText, 76);
      const boxHeight = Math.max(36, wrapped.length * 15 + 18);

      ensureSpace(boxHeight + 8);
      pushRect(marginX, y - boxHeight + 12, contentWidth, boxHeight, color.paleGreen);
      pushText("•", marginX + 16, y - 3, 13, color.orange, "F2");
      wrapped.forEach((wrappedLine, lineIndex) => {
        pushText(
          wrappedLine,
          marginX + 34,
          y - lineIndex * 15,
          10,
          color.muted,
          lineIndex === 0 ? "F2" : "F1",
        );
      });
      y -= boxHeight + 8;
      return;
    }

    const isMeta =
      line.startsWith("Perfil identificado:") ||
      line.startsWith("Compatibilidade com o CargaViva:") ||
      line.startsWith("Foco:") ||
      line.startsWith("Resumo:");

    if (isMeta) {
      const wrapped = wrapText(line, 80);
      const boxHeight = Math.max(34, wrapped.length * 15 + 16);

      ensureSpace(boxHeight + 6);
      pushRect(marginX, y - boxHeight + 12, contentWidth, boxHeight, color.paleOrange);
      wrapped.forEach((wrappedLine, lineIndex) => {
        pushText(wrappedLine, marginX + 16, y - lineIndex * 15, 10, color.darkGreen, lineIndex === 0 ? "F2" : "F1");
      });
      y -= boxHeight + 6;
      return;
    }

    const wrapped = wrapText(line, 86);
    ensureSpace(wrapped.length * 15 + 12);
    drawWrappedText(line, marginX, 86, 10.5, 15, color.muted);
    y -= 8;
  });

  addClosingFooter();

  pages.push(currentPage);

  const fontRegularId = 3;
  const fontBoldId = 4;
  const imageObjectStartId = 5;
  const imageObjectIds = footerImages.map((_, index) => imageObjectStartId + index);
  const firstPageObjectId = imageObjectStartId + footerImages.length;
  const pageObjectIds = pages.map((_, index) => firstPageObjectId + index * 2);
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pageObjectIds
      .map((id) => `${id} 0 R`)
      .join(" ")}] /Count ${pages.length} >>`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
  ];

  footerImages.forEach((image) => {
    objects.push(
      `<< /Type /XObject /Subtype /Image /Width ${image.width} /Height ${image.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.data.length} >>\nstream\n${image.data}\nendstream`,
    );
  });

  const xObjectEntries = footerImages
    .map((image, index) => `/${image.name} ${imageObjectIds[index]} 0 R`)
    .join(" ");
  const xObjectResource = xObjectEntries ? `/XObject << ${xObjectEntries} >>` : "";

  pages.forEach((pageLines, pageIndex) => {
    const pageObjectId = pageObjectIds[pageIndex];
    const contentObjectId = pageObjectId + 1;
    const footer = `${color.muted} rg BT /F1 9 Tf 462 30 Td ${toPdfText(
      `Página ${pageIndex + 1} de ${pages.length}`,
    )} Tj ET`;
    const stream = [...pageLines, footer].join("\n");

    objects.push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> ${xObjectResource} >> /Contents ${contentObjectId} 0 R >>`,
      `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    );
  });

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  const pdfBytes = Uint8Array.from(pdf, (character) => character.charCodeAt(0) & 255);
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "relatorio-cargaviva.pdf";
  link.click();
  URL.revokeObjectURL(url);

  try {
    await uploadReportPdf(blob, contactInfo, profile);
  } catch (error) {
    console.warn("PDF gerado, mas não foi possível salvar no Vercel Blob.", error);
  }
};

type OfficeAssessmentProps = {
  compact?: boolean;
};

export default function OfficeAssessment({
  compact = false,
}: OfficeAssessmentProps) {
  const [currentQuestionId, setCurrentQuestionId] = useState("start");
  const [contactInfo, setContactInfo] = useState<ContactInfo>(emptyContactInfo);
  const [history, setHistory] = useState<SelectedAnswer[]>([]);

  const currentQuestion = questions[currentQuestionId] ?? questions.start;
  const selectedTags = unique(history.flatMap((item) => item.answer.tags ?? []));
  const selectedParticipantTag = getParticipantTagFromTags(selectedTags);
  const isOfficeProfile = selectedParticipantTag === "profile_office";
  const contactNameLabel = isOfficeProfile ? "Nome do escritório" : "Nome";
  const isContactStep = currentQuestionId === "contact";
  const isFinished = currentQuestionId === "result";
  const isContactInfoValid = Boolean(
    contactInfo.city.trim() &&
    contactInfo.name.trim() &&
    contactInfo.phone.trim(),
  );

  const result = useMemo(() => {
    const tags = unique(history.flatMap((item) => item.answer.tags ?? []));
    const score =
      history.reduce((total, item) => total + (item.answer.score ?? 0), 0) +
      tags.reduce((total, tag) => total + (tagScores[tag] ?? 0), 0);
    const level =
      score >= 92
        ? {
            label: "Compatibilidade muito alta",
            text: "Muitas respostas batem direto com recursos que o CargaViva já entrega no app e no desktop.",
          }
        : score >= 58
          ? {
              label: "Compatibilidade alta",
              text: "As respostas mostram ganhos práticos em organização, acompanhamento e histórico.",
            }
          : {
              label: "Compatibilidade inicial",
              text: "Mesmo em uma rotina simples, o CargaViva ajuda a deixar pedido, motorista e acompanhamento mais claros.",
            };
    const participantTag = getParticipantTagFromTags(tags);
    const participant = participantProfiles[participantTag] ?? fallbackProfile;
    const officeProfileTag = tags.find((tag) => officeProfileReports[tag]);
    const officeProfile = officeProfileTag
      ? officeProfileReports[officeProfileTag]
      : null;
    const diagnosticMatches = getDiagnosticPoints(tags);
    const reasonsByTag = getAnswerReasonsByTag(history);
    const diagnostics = unique(
      diagnosticMatches.map(({ point }) => `${point.title}|${point.evidence}`),
    )
      .map((item) => {
        const [title, evidence] = item.split("|");
        return { evidence, title };
      })
      .slice(0, 5);
    const solutions = buildSolutionMatches(diagnosticMatches, reasonsByTag);
    const narrativeParagraphs = buildNarrativeParagraphs(
      diagnosticMatches,
      reasonsByTag,
    );
    const profileFeatures = getProfileFeatures(participantTag);
    const diagnosticTags = diagnosticMatches.map(({ tag }) => tag);
    const recommendedFeatures = getRecommendedProfileFeatures(
      participantTag,
      diagnosticTags,
    );
    const remainingFeatures = getRemainingProfileFeatures(
      profileFeatures,
      recommendedFeatures,
    );

    return {
      diagnostics,
      level,
      narrativeParagraphs,
      officeProfile,
      participant,
      profileFeatures,
      recommendedFeatures,
      remainingFeatures,
      score,
      solutions,
      tags,
    };
  }, [history]);

  const reportLines = useMemo(() => {
    return [
      "Relatório personalizado - Como o CargaViva Fretes pode ajudar",
      "",
      `Perfil identificado: ${result.participant.label}.`,
      `Compatibilidade com o CargaViva: ${result.level.label}.`,
      result.officeProfile ? `Foco: ${result.officeProfile.focus}` : "",
      `Resumo: ${result.participant.summary}`,
      "",
      "Leitura personalizada:",
      ...result.narrativeParagraphs.map((item) => item.text),
      "",
      "Soluções do CargaViva que mais fazem sentido para o seu caso:",
      ...result.recommendedFeatures.map((feature) => `- ${feature}.`),
      "",
      "Além disso o CargaViva também lhe entrega:",
      ...result.remainingFeatures.map((feature) => `- ${feature}.`),
    ].filter(Boolean).map(accentText);
  }, [history, result]);

  const selectAnswer = (answer: Answer) => {
    setHistory((current) => [...current, { answer, question: currentQuestion }]);
    setCurrentQuestionId(answer.next === "result" ? "contact" : answer.next);
  };

  const updateContactInfo = (field: keyof ContactInfo, value: string) => {
    setContactInfo((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const finishContactStep = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isContactInfoValid) {
      return;
    }

    setCurrentQuestionId("result");
  };

  const goBackFromContact = () => {
    setHistory((current) => {
      const lastAnswer = current.at(-1);
      setCurrentQuestionId(lastAnswer?.question.id ?? "start");
      return current.slice(0, -1);
    });
  };

  const goBack = () => {
    setHistory((current) => {
      const next = current.slice(0, -1);
      const previousQuestion = next.at(-1)?.answer.next ?? "start";
      setCurrentQuestionId(current.length === 1 ? "start" : previousQuestion);
      return next;
    });
  };

  const restart = () => {
    setCurrentQuestionId("start");
    setContactInfo(emptyContactInfo);
    setHistory([]);
  };

  const panelClass = compact
    ? "border border-[#d7c79f] bg-[#fffaf2] p-5 shadow-[0_22px_70px_rgba(8,40,28,0.14)] sm:p-6"
    : "rounded-[1.5rem] border border-[#dde5df] bg-white p-5 shadow-[0_22px_60px_rgba(27,67,50,0.08)] sm:p-6";
  const iconClass = compact
    ? "flex h-11 w-11 shrink-0 items-center justify-center bg-[#1B4332] text-white"
    : "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#1B4332] text-white";
  const inputClass = compact
    ? "mt-2 w-full border border-[#d7c79f] bg-white px-4 py-3 text-sm text-[#163126] outline-none transition placeholder:text-[#9aa79f] focus:border-[#CA6702]"
    : "mt-2 w-full rounded-2xl border border-[#d8e0da] bg-[#fffdfa] px-4 py-3 text-sm text-[#163126] outline-none transition placeholder:text-[#9aa79f] focus:border-[#CA6702]/70";
  const primaryButtonClass = compact
    ? "inline-flex items-center gap-2 bg-[#1B4332] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#08281c] disabled:cursor-not-allowed disabled:bg-[#9aa79f]"
    : "inline-flex items-center gap-2 rounded-full bg-[#1B4332] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24533f] disabled:cursor-not-allowed disabled:bg-[#9aa79f]";
  const secondaryButtonClass = compact
    ? "inline-flex items-center gap-2 border border-[#d7c79f] bg-white px-5 py-3 text-sm font-bold text-[#163126] transition hover:-translate-y-0.5 hover:border-[#CA6702]/50 hover:bg-[#fff7ed]"
    : "inline-flex items-center gap-2 rounded-full border border-[#d7d1c2] bg-[#fffdf8] px-5 py-3 text-sm font-semibold text-[#163126] transition hover:border-[#CA6702]/30 hover:bg-[#fff7ed]";
  const answerButtonClass = compact
    ? "border border-[#d7c79f] bg-white px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-[#CA6702] hover:bg-[#fff7ed] hover:shadow-[0_12px_30px_rgba(202,103,2,0.12)]"
    : "rounded-[1rem] border border-[#d8e0da] bg-[#fffdfa] px-4 py-4 text-left transition hover:border-[#CA6702]/50 hover:bg-[#fff7ed]";
  const previewBoxClass = compact
    ? "mt-5 border border-[#d7c79f] bg-white p-4 text-sm leading-7 text-[#52625a] sm:text-base"
    : "mt-5 rounded-[1rem] border border-[#d8e0da] bg-[#f8faf7] p-4 text-sm leading-7 text-[#52625a] sm:text-base";
  const calloutClass = compact
    ? "mt-5 border border-[#d7c79f] bg-[#f5efe2] p-5"
    : "mt-5 rounded-[1.15rem] border border-[#eadbc5] bg-[#fffaf2] p-5";
  const stepIconClass = compact
    ? "mt-1 flex h-8 w-8 shrink-0 items-center justify-center bg-[#CA6702] text-white"
    : "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CA6702] text-white";

  return (
    <section
      id="diagnostico"
      className={
        compact
          ? "w-full"
          : "bg-[#f8faf7] px-5 py-14 sm:px-8 sm:py-20 lg:px-10"
      }
    >
      <div className={compact ? "w-full" : "mx-auto max-w-7xl"}>
        <div
          className={
            compact
              ? "w-full"
              : "grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
          }
        >
          {!compact ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#CA6702]">
                Teste interativo
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1B4332] sm:text-5xl">
                Veja como o CargaViva pode ajudar a sua operação.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#52625a]">
                O teste cruza suas respostas com recursos reais do CargaViva
                Fretes: pedido organizado, escolha de motorista, propostas,
                pagamento Pix, documentos, chat, rastreamento ao vivo,
                histórico e versão desktop. No final, o retorno mostra onde o
                produto entra na sua rotina, sem enrolação.
              </p>
            </div>
          ) : null}

          <div className={panelClass}>
            {isContactStep ? (
              <form onSubmit={finishContactStep}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#CA6702]">
                      Identificação do relatório
                    </p>
                    <h3
                      className={
                        compact
                          ? "mt-3 text-3xl font-extrabold uppercase leading-none tracking-[-0.04em] text-[#1B4332]"
                          : "mt-3 text-2xl font-semibold text-[#1B4332]"
                      }
                    >
                      Só falta identificar este diagnóstico.
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#52625a]">
                      Esses dados entram apenas no cabeçalho do PDF, para você
                      reconhecer de quem é o relatório depois. Não é uma ficha
                      de contato comercial.
                    </p>
                  </div>
                  <span className={iconClass}>
                    <FileText className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-6 grid gap-4">
                  <label className="block">
                    <span className="text-sm font-semibold text-[#1B4332]">
                      {contactNameLabel}
                    </span>
                    <input
                      type="text"
                      value={contactInfo.name}
                      onChange={(event) =>
                        updateContactInfo("name", event.target.value)
                      }
                      placeholder={
                        isOfficeProfile
                          ? "Ex.: Escritório São João"
                          : "Ex.: João da Silva"
                      }
                      className={inputClass}
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-[#1B4332]">
                        Número de contato
                      </span>
                      <input
                        type="tel"
                        value={contactInfo.phone}
                        onChange={(event) =>
                          updateContactInfo(
                            "phone",
                            formatPhoneNumber(event.target.value),
                          )
                        }
                        placeholder="Ex.: (55) 99917-1727"
                        className={inputClass}
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-semibold text-[#1B4332]">
                        Cidade
                      </span>
                      <input
                        type="text"
                        value={contactInfo.city}
                        onChange={(event) =>
                          updateContactInfo("city", event.target.value)
                        }
                        placeholder="Ex.: Santa Maria"
                        className={inputClass}
                      />
                    </label>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={!isContactInfoValid}
                    className={primaryButtonClass}
                  >
                    Gerar relatório
                  </button>
                  <button
                    type="button"
                    className={secondaryButtonClass}
                    onClick={goBackFromContact}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar uma pergunta
                  </button>
                </div>
              </form>
            ) : !isFinished ? (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#CA6702]">
                      {accentText(currentQuestion.eyebrow)}
                    </p>
                    <h3
                      className={
                        compact
                          ? "mt-3 text-3xl font-extrabold uppercase leading-none tracking-[-0.04em] text-[#1B4332]"
                          : "mt-3 text-2xl font-semibold text-[#1B4332]"
                      }
                    >
                      {accentText(currentQuestion.title)}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#52625a]">
                      {accentText(getQuestionExplanation(currentQuestion.id))}
                    </p>
                  </div>
                  <span className={iconClass}>
                    <ClipboardList className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  {currentQuestion.answers.map((answer) => (
                    <button
                      key={answer.label}
                      type="button"
                      className={answerButtonClass}
                      onClick={() => selectAnswer(answer)}
                    >
                      <span className="block text-sm font-semibold text-[#1B4332] sm:text-base">
                        {accentText(answer.label)}
                      </span>
                      <span className="mt-2 block text-xs font-medium leading-5 text-[#66756d] sm:text-sm">
                        {accentText(getAnswerExplanation(answer))}
                      </span>
                    </button>
                  ))}
                </div>

                {history.length ? (
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#52625a] transition hover:text-[#1B4332]"
                    onClick={goBack}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar uma pergunta
                  </button>
                ) : null}
              </>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#CA6702]">
                      Relatório gerado
                    </p>
                    <h3
                      className={
                        compact
                          ? "mt-3 text-3xl font-extrabold uppercase leading-none tracking-[-0.04em] text-[#1B4332]"
                          : "mt-3 text-2xl font-semibold text-[#1B4332]"
                      }
                    >
                      {accentText(
                        result.officeProfile?.title ??
                          `Como o CargaViva ajuda ${result.participant.label}`,
                      )}
                    </h3>
                  </div>
                  <span className={iconClass}>
                    <FileText className="h-5 w-5" />
                  </span>
                </div>

                <div className={previewBoxClass}>
                  <p className="font-semibold text-[#1B4332]">
                    {accentText(result.level.label)}
                  </p>
                  <p className="mt-2">{accentText(result.level.text)}</p>
                  <p className="mt-3">
                    {accentText(result.officeProfile?.focus ?? result.participant.summary)}
                  </p>
                </div>

                <div className={calloutClass}>
                  <div className="flex items-start gap-3">
                    <span className={stepIconClass}>
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#1B4332] sm:text-base">
                        Acesse o relatório completo pelo PDF.
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#52625a]">
                        A versão completa traz a leitura personalizada, as
                        soluções que mais fazem sentido para o seu caso e o
                        restante das funções disponíveis para este perfil.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className={primaryButtonClass}
                    onClick={() =>
                      downloadPdf(reportLines, contactInfo, result.participant.label)
                    }
                  >
                    <Download className="h-4 w-4" />
                    Baixar relatório em PDF
                  </button>
                  <button
                    type="button"
                    className={secondaryButtonClass}
                    onClick={restart}
                  >
                    <RotateCcw className="h-4 w-4" />
                    Refazer teste
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
