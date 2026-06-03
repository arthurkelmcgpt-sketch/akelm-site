import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Oswald } from "next/font/google";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";
const pageBackground = "/images/cargaviva/bkgd-cargaviva.png";

const headingFont = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type PrivacySection = {
  paragraphs?: string[];
  points?: string[];
  title: string;
};

const privacySections: PrivacySection[] = [
  {
    title: "1. Quem controla os dados",
    paragraphs: [
      "O controlador dos dados tratados no aplicativo é a Akelm Tecnologia, desenvolvedora e mantenedora do CargaViva Fretes.",
      "Canal de contato para assuntos de privacidade, suporte, exclusão de conta ou dúvidas sobre dados pessoais:",
      "WhatsApp: +55 55 99917-1727",
    ],
  },
  {
    title: "2. Dados que podemos coletar",
    paragraphs: [
      "Coletamos somente dados necessários para criar contas, autenticar usuários, conectar clientes e motoristas, processar pagamentos, acompanhar fretes, oferecer suporte, manter a segurança da plataforma e cumprir obrigações legais.",
    ],
  },
  {
    title: "2.1. Dados de cadastro e conta",
    paragraphs: ["Podemos coletar:"],
    points: [
      "nome completo;",
      "e-mail;",
      "telefone;",
      "senha, quando a conta for criada por e-mail e senha;",
      "identificadores de autenticação vinculados a login Google ou Apple, quando o usuário escolher esses métodos;",
      "tipo de perfil da conta, como perfil padrão ou office;",
      "status da conta, confirmação de e-mail, data de criação e data de atualização;",
      "dados de sessão e autenticação, como token de acesso, usados para manter o usuário logado com segurança.",
      "As senhas não devem ser compartilhadas com terceiros. A plataforma utiliza mecanismos de autenticação para proteger o acesso à conta.",
    ],
  },
  {
    title: "2.2. Dados fiscais, cadastrais complementares e de pagamento",
    paragraphs: [
      "Para viabilizar cobranças, repasses e conferências, especialmente quando houver integração com a Asaas, podemos coletar:",
    ],
    points: [
      "CPF ou CNPJ;",
      "data de nascimento;",
      "CEP, endereço, número, complemento, cidade e estado;",
      "chave Pix informada pelo motorista;",
      "dados de cobrança, pagamento, status do pagamento, vencimento, comprovantes, links de fatura, boleto ou Pix;",
      "identificadores de cliente, cobrança, pagamento, split, repasse ou transferência gerados pela Asaas;",
      "informações de falha, contestação, confirmação, liberação ou cancelamento de pagamento.",
      "O CargaViva Fretes não deve divulgar publicamente dados financeiros, documentos de identificação, comprovantes ou dados sensíveis de pagamento.",
    ],
  },
  {
    title: "2.3. Dados de frete, transporte e carga",
    paragraphs: [
      "Para operar a solicitação e execução do frete, podemos coletar:",
    ],
    points: [
      "nome e telefone do cliente informados no pedido;",
      "origem e destino do frete, incluindo endereços, descrições e coordenadas;",
      "data e horário desejados;",
      "tipo de animal ou carga, quantidade, peso estimado e observações;",
      "motorista selecionado, proposta, valor, mensagem da proposta e histórico de status;",
      "confirmação de documentação/GTA, anotações de suporte, início, conclusão ou cancelamento do transporte;",
      "avaliações, notas e comentários sobre o serviço.",
      "Esses dados são usados para matching entre clientes e motoristas, organização do frete, cálculo de rota, comunicação entre as partes, pagamento, acompanhamento operacional e suporte.",
    ],
  },
  {
    title: "2.4. Dados do motorista e do caminhão",
    paragraphs: [
      "Quando o usuário atua como motorista ou cadastra caminhão, podemos coletar:",
    ],
    points: [
      "placa ou identificador do caminhão;",
      "tipo de caminhão;",
      "capacidade em peso e quantidade de animais;",
      "cidade base, coordenadas da base e raio de atuação;",
      "dias e horários de disponibilidade;",
      "observações, preço por quilômetro ou valor padrão de frete;",
      "chave Pix para repasses;",
      "avaliações e histórico de serviços.",
      "Esses dados ajudam a exibir motoristas compatíveis para clientes, calcular distâncias, estimar preços, organizar propostas e realizar repasses.",
    ],
  },
  {
    title: "2.5. Dados de localização",
    paragraphs: [
      "O CargaViva Fretes pode coletar e tratar dados de localização, incluindo localização precisa, latitude, longitude, precisão estimada, velocidade, direção e horários de captura.",
      "Usamos localização para:",
    ],
    points: [
      "permitir que cliente ou motorista escolham origem, destino ou base operacional no mapa;",
      "calcular distância entre base do motorista, origem e destino;",
      "buscar motoristas compatíveis;",
      "calcular e exibir rotas;",
      "permitir rastreamento ao vivo do motorista durante o frete em andamento;",
      "registrar a posição de conclusão do transporte, quando aplicável;",
      "identificar problemas operacionais, como localização desligada durante um transporte.",
      "Durante o transporte em andamento, quando o motorista inicia a viagem no app e concede a permissão necessária, o aplicativo pode coletar a localização do motorista em primeiro plano ou em segundo plano, inclusive com a tela bloqueada, para que o cliente acompanhe a carga no mapa. O rastreamento ao vivo deve ser encerrado quando o frete for concluído ou cancelado.",
      "Se o motorista negar a permissão, revogar a permissão, desligar o GPS ou impedir a coleta em segundo plano, alguns recursos de rastreamento e acompanhamento podem deixar de funcionar. O app também pode registrar ou comunicar que a localização está indisponível para fins de segurança, suporte e transparência do frete.",
    ],
  },
  {
    title: "2.6. Mensagens, comprovantes, arquivos e conteúdo enviado pelo usuário",
    paragraphs: ["Podemos tratar conteúdos que o usuário envia pelo aplicativo, como:"],
    points: [
      "mensagens de chat vinculadas a um frete;",
      "comprovantes de pagamento, como imagem ou PDF selecionado pelo usuário;",
      "fotos ou imagens de eventos/avisos, quando cadastradas por usuário autorizado;",
      "comentários, avaliações, anotações e justificativas enviadas no fluxo do frete.",
      "O app acessa arquivos apenas quando o usuário escolhe enviar um arquivo pelo seletor do sistema. O aplicativo não precisa acessar toda a galeria de mídia, contatos, microfone, câmera, SMS ou agenda para operar suas funções principais.",
    ],
  },
  {
    title: "2.7. Dados de dispositivo, notificações e diagnóstico",
    paragraphs: [
      "Para manter a conta logada, entregar notificações e apoiar suporte técnico, podemos coletar:",
    ],
    points: [
      "identificador de instalação gerado pelo app;",
      "plataforma do dispositivo;",
      "nome ou identificação do dispositivo informado pelo sistema;",
      "token de notificação do Firebase Cloud Messaging;",
      "status de permissão de notificação;",
      "status de permissão de localização;",
      "informação se o serviço de localização está ativo;",
      "indicativo de permissão de localização em segundo plano;",
      "data e hora da última verificação;",
      "logs técnicos, registros de erro, horários de acesso, endereço IP e metadados de requisição tratados pela API ou infraestrutura.",
      "Esses dados ajudam a enviar alertas sobre fretes, chat, pagamentos e rastreamento, além de diagnosticar falhas de permissão, GPS, notificações ou sessão.",
    ],
  },
  {
    title: "3. Como usamos os dados",
    paragraphs: ["Usamos os dados para:"],
    points: [
      "criar, autenticar, manter e proteger contas;",
      "permitir login por e-mail e senha, Google ou Apple;",
      "conectar clientes e motoristas;",
      "criar, negociar, aceitar, rejeitar, acompanhar, concluir ou cancelar fretes;",
      "exibir mapas, rotas, distâncias e rastreamento;",
      "processar cobranças, confirmações, comprovantes, splits, repasses e suporte financeiro;",
      "enviar notificações locais e push sobre fretes, chat, pagamentos, avaliações e eventos;",
      "manter histórico operacional, status e auditoria de solicitações;",
      "oferecer chat e suporte entre as partes envolvidas;",
      "administrar a plataforma, combater fraude, abuso, uso indevido ou violações dos Termos de Uso;",
      "corrigir erros, melhorar estabilidade, qualidade e segurança;",
      "cumprir obrigações legais, regulatórias, fiscais e determinações de autoridades competentes;",
      "exercer direitos da Akelm Tecnologia, dos usuários ou de terceiros em processos administrativos, judiciais ou extrajudiciais.",
    ],
  },
  {
    title: "4. Bases legais",
    paragraphs: [
      "Quando aplicável pela Lei Geral de Proteção de Dados, tratamos dados pessoais com fundamento em uma ou mais das seguintes bases legais:",
    ],
    points: [
      "execução de contrato ou procedimentos preliminares relacionados ao uso do app;",
      "cumprimento de obrigação legal ou regulatória;",
      "exercício regular de direitos;",
      "proteção do crédito, prevenção à fraude e segurança;",
      "legítimo interesse, quando compatível com os direitos do usuário;",
      "consentimento, especialmente para recursos que dependem de permissões do dispositivo, como notificações e localização.",
      "O usuário pode revogar permissões do dispositivo nas configurações do sistema operacional. A revogação pode limitar ou impedir o funcionamento de recursos essenciais, como rastreamento do motorista durante transporte.",
    ],
  },
  {
    title: "5. Com quem compartilhamos dados",
    paragraphs: [
      "Compartilhamos dados somente quando necessário para operar a plataforma, cumprir obrigações legais, proteger direitos ou viabilizar serviços contratados.",
    ],
  },
  {
    title: "5.1. Entre cliente e motorista",
    paragraphs: [
      "Clientes e motoristas podem visualizar informações necessárias para executar o frete, como dados da carga, origem, destino, datas, propostas, status, mensagens, identificação do motorista, dados do caminhão e avaliações. Durante o transporte em andamento, o cliente pode visualizar a localização ao vivo do motorista no mapa.",
      "O aplicativo busca reduzir exposição desnecessária de dados de contato entre as partes e privilegia a comunicação pelo chat interno quando disponível.",
    ],
  },
  {
    title: "5.2. Prestadores de serviço e integrações",
    paragraphs: [
      "Podemos compartilhar dados com prestadores que ajudam a operar o CargaViva Fretes, incluindo:",
    ],
    points: [
      "Asaas Gestão Financeira Instituição de Pagamento S.A., para criação de clientes, cobranças, pagamentos, Pix, boletos, splits, repasses, transferências, confirmações e webhooks;",
      "Google Maps, Google Routes e serviços relacionados do Google, para exibição de mapas, cálculo de rotas, coordenadas e navegação;",
      "Firebase Cloud Messaging/Google, para envio de notificações push e gerenciamento de tokens de dispositivo;",
      "Google Sign-In e Apple Sign In, quando o usuário escolhe autenticar por esses provedores;",
      "provedores de hospedagem, banco de dados, infraestrutura, logs, monitoramento e armazenamento usados pela API;",
      "WhatsApp, quando o usuário decide abrir contato de suporte ou compartilhar informações por esse canal externo.",
      "Esses terceiros podem tratar dados de acordo com suas próprias políticas de privacidade e termos.",
    ],
  },
  {
    title: "5.3. Suporte, administração e obrigações legais",
    paragraphs: [
      "Usuários autorizados de administração e suporte podem acessar dados da plataforma quando necessário para atendimento, auditoria, resolução de problemas, moderação, segurança, pagamentos, repasses, cancelamentos, prevenção a fraude ou cumprimento de obrigações legais.",
      "Também podemos compartilhar dados com autoridades públicas, judiciais, administrativas ou reguladoras quando houver obrigação legal, ordem válida ou necessidade de defesa de direitos.",
    ],
  },
  {
    title: "6. Permissões usadas pelo aplicativo",
    paragraphs: [
      "O aplicativo pode solicitar permissões do Android ou do sistema operacional para:",
    ],
    points: [
      "acesso à internet, necessário para comunicação com a API e serviços de terceiros;",
      "localização aproximada e precisa, para mapas, origem, destino, base do motorista, rotas e rastreamento;",
      "localização em segundo plano, para manter o rastreamento do motorista durante fretes em andamento;",
      "serviço em primeiro plano, para manter o acompanhamento de localização ativo durante o transporte;",
      "notificações, para alertas sobre fretes, mensagens, pagamentos, eventos e status;",
      "seleção de arquivos, apenas quando o usuário escolhe anexar comprovante ou imagem permitida.",
      "O app não solicita permissão ampla de contatos, SMS, microfone ou câmera para suas funções principais.",
    ],
  },
  {
    title: "7. Segurança dos dados",
    paragraphs: [
      "Adotamos medidas técnicas e organizacionais para proteger dados pessoais, incluindo:",
    ],
    points: [
      "autenticação por conta e token de acesso;",
      "armazenamento local seguro de token, perfil em cache, identificador de instalação e aceite de termos quando necessário;",
      "comunicação com a API de produção por HTTPS;",
      "controles de acesso por perfil e permissão;",
      "restrição de dados sensíveis a usuários e funções que precisam deles;",
      "validações de acesso para que apenas participantes autorizados vejam fretes, chats, comprovantes e localizações;",
      "registros de auditoria e histórico de status para investigação e suporte.",
      "Apesar dos esforços de segurança, nenhum sistema é totalmente imune a incidentes. Caso ocorra incidente relevante envolvendo dados pessoais, avaliaremos as medidas cabíveis conforme a legislação aplicável.",
    ],
  },
  {
    title: "8. Retenção e exclusão de dados",
    paragraphs: [
      "Mantemos dados pessoais pelo tempo necessário para as finalidades descritas nesta Política, incluindo operação da conta, execução de fretes, pagamentos, repasses, auditoria, suporte, prevenção a fraude, cumprimento legal/regulatório e exercício de direitos.",
      "Em geral:",
    ],
    points: [
      "dados de conta são mantidos enquanto a conta estiver ativa e por período adicional necessário para cumprir obrigações legais ou resolver pendências;",
      "registros de fretes, pagamentos, comprovantes, chats, avaliações, status e suporte podem ser mantidos como histórico operacional e prova de transações;",
      "a localização ao vivo atual do motorista deve ser encerrada ao final ou cancelamento do frete;",
      "históricos de localização vinculados ao transporte podem ser mantidos pelo tempo necessário para suporte, auditoria, segurança, disputa, comprovação operacional e defesa de direitos;",
      "tokens de notificação e identificadores de dispositivo podem ser desativados ou removidos quando a conta sair do dispositivo, quando o usuário solicitar ou quando deixarem de ser necessários;",
      "arquivos enviados, como comprovantes, podem ser mantidos enquanto forem necessários para pagamento, auditoria, suporte, obrigações legais ou defesa de direitos.",
      "Quando não houver mais necessidade de manter dados pessoais, eles poderão ser excluídos, anonimizados ou agregados, conforme tecnicamente possível e permitido por lei.",
    ],
  },
  {
    title: "9. Como solicitar acesso, correção ou exclusão",
    paragraphs: ["O usuário pode solicitar:"],
    points: [
      "confirmação sobre tratamento de dados;",
      "acesso aos dados pessoais;",
      "correção de dados incompletos, inexatos ou desatualizados;",
      "exclusão ou anonimização de dados desnecessários, excessivos ou tratados em desconformidade;",
      "informações sobre compartilhamento;",
      "revogação de consentimento, quando aplicável;",
      "exclusão da conta e dos dados associados, observadas retenções legais, regulatórias, antifraude, financeiras, operacionais e de defesa de direitos.",
      "Para exercer esses direitos ou solicitar exclusão de conta, entre em contato pelo WhatsApp +55 55 99917-1727 e informe o e-mail cadastrado e a solicitação desejada.",
      "Ao receber uma solicitação, poderemos pedir informações adicionais para confirmar a identidade do solicitante e proteger a conta contra acesso indevido.",
    ],
  },
  {
    title: "10. Crianças e adolescentes",
    paragraphs: [
      "O CargaViva Fretes é destinado a pessoas maiores de 18 anos e legalmente capazes de contratar serviços. O aplicativo não é direcionado a crianças. Caso identifiquemos cadastro ou uso por menor sem base legal adequada, poderemos suspender ou excluir a conta.",
    ],
  },
  {
    title: "11. Transferências internacionais",
    paragraphs: [
      "Alguns prestadores de serviço, como Google, Firebase, Apple, Asaas ou provedores de infraestrutura, podem processar dados em servidores localizados no Brasil ou em outros países. Quando isso ocorrer, adotaremos medidas compatíveis com a legislação aplicável e com as finalidades descritas nesta Política.",
    ],
  },
  {
    title: "12. O que não fazemos",
    paragraphs: [
      "O CargaViva Fretes não vende dados pessoais dos usuários.",
      "Também não usamos dados de localização para publicidade comportamental, venda de perfis ou monitoramento fora das finalidades operacionais do aplicativo. Imagens de parceiros ou divulgações exibidas no app, quando houver, não dependem de segmentação comportamental baseada nos dados pessoais do usuário.",
    ],
  },
  {
    title: "13. Alterações nesta Política",
    paragraphs: [
      "Esta Política pode ser atualizada para refletir mudanças no aplicativo, em integrações, na operação, em exigências legais ou em orientações de plataformas como a Google Play.",
      "Quando houver alteração relevante, poderemos avisar pelo aplicativo, por atualização do documento ou por outro meio adequado. A data de última atualização no início do documento indica a versão mais recente.",
    ],
  },
  {
    title: "14. Contato",
    paragraphs: [
      "Para dúvidas, solicitações de privacidade, suporte, exclusão de conta ou reclamações sobre tratamento de dados pessoais, fale com a Akelm Tecnologia pelo WhatsApp:",
      "+55 55 99917-1727",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  description:
    "Política de Privacidade do CargaViva Fretes, plataforma da Akelm Tecnologia para organização de fretes.",
  name: "Política de Privacidade - CargaViva Fretes",
  url: `${siteUrl}/cargaviva/politicadeprivacidade`,
};

export const metadata: Metadata = {
  title: "Política de Privacidade | CargaViva Fretes",
  description:
    "Leia a Política de Privacidade do CargaViva Fretes, aplicativo da Akelm Tecnologia para organização e intermediação de fretes.",
  alternates: {
    canonical: "/cargaviva/politicadeprivacidade",
  },
  openGraph: {
    title: "Política de Privacidade | CargaViva Fretes",
    description:
      "Página oficial com a Política de Privacidade do CargaViva Fretes.",
    images: [
      {
        alt: "Identidade visual do CargaViva Fretes",
        height: 1920,
        url: "/images/cargaviva/oferecimento.png",
        width: 1080,
      },
    ],
    type: "article",
    url: "/cargaviva/politicadeprivacidade",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Página oficial com a Política de Privacidade do CargaViva Fretes.",
    images: ["/images/cargaviva/oferecimento.png"],
    title: "Política de Privacidade | CargaViva Fretes",
  },
};

export default function CargaVivaPrivacyPolicyPage() {
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
        <section className="relative flex min-h-[64vh] items-end overflow-hidden px-6 pb-20 pt-28 text-white">
          <Image
            src={pageBackground}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,6,0.94)_0%,rgba(2,10,6,0.66)_48%,rgba(2,10,6,0.24)_100%),linear-gradient(180deg,rgba(2,10,6,0.2)_0%,rgba(2,10,6,0.75)_100%)]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <Image
              src="/images/cargaviva/logo-horizontal-light.png"
              alt="CargaViva Fretes"
              width={260}
              height={92}
              className="mb-8 h-auto w-52 object-contain"
              priority
            />
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#ca6702]">
              Documento oficial
            </p>
            <h1
              className={`${headingFont.className} mt-4 max-w-5xl text-[clamp(3.2rem,7.6vw,7.6rem)] font-bold uppercase leading-[0.86] tracking-[-0.055em]`}
            >
              Política de Privacidade
            </h1>
            <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-white/78 sm:text-lg">
              Como o CargaViva Fretes trata dados pessoais e informações dos
              usuários.
            </p>
            <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.2em] text-white/70">
              Última atualização: 22 de maio de 2026
            </p>
          </div>
        </section>

        <section className="bg-[#f5efe2] px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <h2
                className={`${headingFont.className} text-5xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
              >
                Seus dados, explicados de forma clara.
              </h2>
              <p className="mt-6 text-sm font-medium leading-7 text-[#49645a]">
                O aplicativo é desenvolvido e mantido pela Akelm Tecnologia e
                atua como plataforma para aproximar clientes que precisam
                contratar fretes e motoristas que oferecem serviços de
                transporte.
              </p>
              <p className="mt-4 text-sm font-medium leading-7 text-[#49645a]">
                Ao criar uma conta, acessar ou usar o CargaViva Fretes, você
                declara que leu e compreendeu esta Política. Caso não concorde
                com as práticas aqui descritas, não utilize o aplicativo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/cargaviva"
                  className="inline-flex bg-[#1b4332] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-[#ca6702]"
                >
                  Voltar ao CargaViva
                </Link>
                <Link
                  href="/cargaviva/termosdeuso"
                  className="inline-flex border border-[#1b4332]/18 bg-white px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#1b4332] transition hover:-translate-y-1 hover:border-[#ca6702] hover:text-[#ca6702]"
                >
                  Termos de uso
                </Link>
              </div>
            </div>

            <div className="grid gap-4 text-sm font-medium leading-7 text-[#23463a] md:grid-cols-2">
              <div className="bg-white p-7 shadow-[0_22px_70px_rgba(13,59,42,0.08)]">
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ca6702]">
                  Controlador
                </span>
                <p className="mt-4">
                  A Akelm Tecnologia é a responsável pelos dados tratados no
                  CargaViva Fretes.
                </p>
              </div>
              <div className="bg-[#1b4332] p-7 text-white shadow-[0_22px_70px_rgba(13,59,42,0.16)]">
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ca6702]">
                  Privacidade e suporte
                </span>
                <p className="mt-4">
                  Para dúvidas, solicitações ou exclusão de conta, fale pelo
                  WhatsApp +55 55 99917-1727.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-1">
              {privacySections.map((section, index) => (
                <article
                  key={section.title}
                  className={[
                    "grid gap-8 p-7 md:grid-cols-[0.28fr_0.72fr] md:p-10",
                    index % 2 === 0 ? "bg-white" : "bg-[#f5efe2]",
                  ].join(" ")}
                >
                  <div>
                    <span
                      className={`${headingFont.className} text-5xl font-bold text-[#ca6702]`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className={`${headingFont.className} mt-5 text-3xl font-bold uppercase leading-none tracking-[-0.04em] text-[#0d3b2a]`}
                    >
                      {section.title.replace(/^\d+(?:\.\d+)?\.\s*/, "")}
                    </h2>
                  </div>

                  <div className="grid gap-4">
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm font-medium leading-7 text-[#23463a]"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.points?.length ? (
                      <ul className="mt-2 grid gap-3 md:grid-cols-2">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="border-l-4 border-[#ca6702] bg-white px-5 py-4 text-sm font-medium leading-7 text-[#23463a] shadow-[0_14px_40px_rgba(13,59,42,0.05)]"
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

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/cargaviva"
                className="inline-flex bg-[#1b4332] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-[#ca6702]"
              >
                Voltar ao CargaViva
              </Link>
              <a
                href="https://wa.me/5555999171727"
                target="_blank"
                rel="noreferrer"
                className="inline-flex border border-[#1b4332]/18 bg-white px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#1b4332] transition hover:-translate-y-1 hover:border-[#ca6702] hover:text-[#ca6702]"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="light" />
    </>
  );
}
