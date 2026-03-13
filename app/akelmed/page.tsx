import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export const metadata = {
  title: "AkelMed — Sistema de gestão clínica e prontuário eletrônico",
  description:
    "Plataforma SaaS para clínicas e consultórios médicos com agenda médica, prontuário eletrônico, gestão de pacientes e controle de acessos.",
};

export default function AkelMedPage() {
  return (
    <>
      <Navbar />

      <main className="scroll-smooth">

        {/* HERO */}
        <section
          id="hero"
          className="min-h-screen bg-[#111827] text-white flex items-center pt-24 relative overflow-hidden"
        >
          <div className="absolute w-[500px] h-[500px] bg-[#7F1D1D] blur-[140px] opacity-30 rounded-full left-[-100px] top-[-100px]" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            <div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AkelMed
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Sistema de gestão clínica e prontuário eletrônico
                desenvolvido para clínicas que precisam de organização,
                controle e segurança das informações médicas.
              </p>

              <a
                href="#demo"
                className="inline-block bg-[#EF4444] hover:bg-[#dc2626] text-white px-7 py-3 rounded-lg font-semibold transition"
              >
                Solicitar demonstração
              </a>

            </div>

            <div className="flex justify-center lg:justify-end relative">

              <div className="absolute w-[800px] h-[800px] bg-[#7F1D1D] blur-[160px] opacity-30 rounded-full"></div>

              <Image
                src="/images/akelmed/akelmed-exemple.png"
                alt="Interface do sistema AkelMed"
                width={1400}
                height={900}
                priority
                className="relative w-full max-w-[620px] h-auto"
              />

            </div>

          </div>
        </section>


        {/* FUNCIONALIDADES */}
<section id="funcionalidades" className="py-32 bg-white">
  <div className="max-w-[1400px] mx-auto px-6">

    <div className="text-center mb-24">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Funcionalidades do AkelMed
      </h2>

      <p className="text-lg text-gray-600">
        Um sistema completo para gestão clínica,
        atendimento médico e organização de pacientes.
      </p>
    </div>


    {/* DASHBOARD */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Painel clínico inteligente
        </h3>

        <p className="text-gray-600 mb-6">
          Tenha uma visão completa da operação da clínica em um único painel.
          O dashboard apresenta métricas de atendimentos, pacientes,
          atividades recentes e indicadores importantes.
        </p>

        <p className="text-gray-600">
          Com gráficos e informações organizadas, o sistema permite
          acompanhar rapidamente o desempenho da clínica e tomar
          decisões baseadas em dados.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden p-2">
        <Image
          src="/images/akelmed/dashboard.png"
          alt="Painel clínico do AkelMed"
          width={1600}
          height={1000}
          className="w-full h-auto rounded-xl"
        />
      </div>

    </div>


    {/* AGENDA */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">

      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden p-2 order-2 lg:order-1">
        <Image
          src="/images/akelmed/agenda1.png"
          alt="Agenda médica"
          width={1600}
          height={1000}
          className="w-full h-auto rounded-xl"
        />
      </div>

      <div className="order-1 lg:order-2">

        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Agenda médica inteligente
        </h3>

        <p className="text-gray-600 mb-6">
          Visualize horários disponíveis, consultas agendadas
          e organize o fluxo de atendimento da clínica de forma
          simples e eficiente.
        </p>

        <p className="text-gray-600">
          Reagende consultas e mantenha controle completo
          do fluxo de pacientes ao longo do dia.
        </p>

      </div>

    </div>

  </div>
</section>


{/* PRONTUÁRIO */}
<section id="prontuario" className="py-32 bg-[#F3F4F6]">
  <div className="max-w-[1400px] mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden p-2">
        <Image
          src="/images/akelmed/prontuario1.png"
          alt="Prontuário eletrônico"
          width={1600}
          height={1000}
          className="w-full h-auto rounded-xl"
        />
      </div>

      <div>

        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Prontuário eletrônico completo
        </h3>

        <p className="text-gray-600 mb-6">
          Registre atendimentos utilizando o modelo clínico SOAP,
          mantendo histórico detalhado do paciente, sinais vitais
          e plano terapêutico.
        </p>

        <p className="text-gray-600">
          Gere receitas médicas, solicitações de exames
          e atestados diretamente do prontuário.
        </p>

      </div>

    </div>

  </div>
</section>


{/* PACIENTES */}
<section id="pacientes" className="py-32 bg-white">
  <div className="max-w-[1400px] mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

      <div>

        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Gestão completa de pacientes
        </h3>

        <p className="text-gray-600 mb-6">
          Cadastre pacientes com todos os dados clínicos
          e administrativos, incluindo histórico médico,
          contatos e convênios.
        </p>

        <p className="text-gray-600">
          Todas as informações ficam vinculadas ao histórico
          de atendimentos do paciente.
        </p>

      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden p-2">
        <Image
          src="/images/akelmed/paciente1.png"
          alt="Cadastro de paciente"
          width={1600}
          height={1000}
          className="w-full h-auto rounded-xl"
        />
      </div>

    </div>

  </div>
</section>


{/* SEGURANÇA */}
<section id="seguranca" className="py-32 bg-[#F3F4F6]">
  <div className="max-w-[1400px] mx-auto px-6">

    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Segurança e controle do sistema
      </h2>

      <p className="text-lg text-gray-600">
        Controle completo de acessos e auditoria de atividades
        para garantir segurança das informações clínicas.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden p-2">
        <Image
          src="/images/akelmed/acesso1.png"
          alt="Controle de acessos"
          width={1600}
          height={1000}
          className="w-full h-auto rounded-xl"
        />
      </div>

      <div>

        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Controle de permissões e auditoria
        </h3>

        <p className="text-gray-600 mb-6">
          Gerencie níveis de acesso para diferentes profissionais
          da clínica e mantenha controle total das atividades.
        </p>

        <p className="text-gray-600">
          Todas as ações são registradas em logs de auditoria.
        </p>

      </div>

    </div>

  </div>

    {/* TODAS AS FUNCIONALIDADES */}
<section className="py-28 bg-white border-t border-gray-200">

  <div className="max-w-[1400px] mx-auto px-6">

    <details className="group">

      <summary className="cursor-pointer list-none text-center">

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Ver todas as funcionalidades do AkelMed
        </h2>

        <p className="text-gray-600">
          Mais de 60 funcionalidades para gestão clínica completa
        </p>

        <div className="mt-6 text-red-500 font-medium">
          Clique para expandir
        </div>

      </summary>


      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-gray-700">


        {/* PACIENTES */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Gestão de pacientes
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Cadastro completo de pacientes</li>
            <li>Validação automática de CPF</li>
            <li>Histórico completo de atendimentos</li>
            <li>Dados administrativos e clínicos</li>
            <li>Contato de emergência e convênios</li>
            <li>Consentimento LGPD</li>
            <li>Ficha médica permanente</li>

          </ul>
        </div>


        {/* AGENDA */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Agenda e agendamentos
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Agenda médica diária em grade</li>
            <li>Slots automáticos de consulta</li>
            <li>Criação rápida de consultas</li>
            <li>Reagendamento de consultas</li>
            <li>Cancelamento e reativação</li>
            <li>Verificação de conflitos de horário</li>
            <li>Filtros por paciente e data</li>
            <li>Lista de consultas canceladas</li>
            <li>Contagem de consultas por período</li>

          </ul>
        </div>


        {/* PRONTUÁRIO */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Prontuário eletrônico
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Modelo clínico SOAP</li>
            <li>Registro de sinais vitais</li>
            <li>Histórico clínico completo</li>
            <li>Prescrição médica com múltiplos medicamentos</li>
            <li>Solicitação de exames</li>
            <li>Registro de retorno médico</li>
            <li>Emissão de atestado médico</li>
            <li>Anexos clínicos</li>

          </ul>
        </div>


        {/* DOCUMENTOS */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Documentos médicos
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Receita médica comum</li>
            <li>Receita de antibiótico</li>
            <li>Receitas de controle especial</li>
            <li>Solicitação de exames laboratoriais</li>
            <li>Atestado médico</li>
            <li>Declaração de comparecimento</li>
            <li>Aviso de retorno</li>
            <li>Documentos para impressão/PDF</li>

          </ul>
        </div>


        {/* USUÁRIOS */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Usuários e acessos
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Sistema de login seguro</li>
            <li>Bloqueio por excesso de tentativas</li>
            <li>Gestão completa de usuários</li>
            <li>Perfis de acesso (Admin, Médico, Secretaria)</li>
            <li>Controle de permissões</li>
            <li>Alteração de senha</li>

          </ul>
        </div>


        {/* AUDITORIA */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Auditoria
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Registro de todas as ações</li>
            <li>Logs de auditoria por usuário</li>
            <li>Histórico de alterações</li>
            <li>Rastreabilidade completa</li>

          </ul>
        </div>


        {/* DASHBOARD */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Dashboard
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Painel operacional da clínica</li>
            <li>Total de pacientes e consultas</li>
            <li>Consultas do dia e do mês</li>
            <li>Indicadores de atendimentos</li>
            <li>Gráficos de consultas por período</li>
            <li>Gráficos por médico</li>
            <li>Próximos retornos</li>
            <li>Atividades recentes</li>

          </ul>
        </div>


        {/* SEGURANÇA */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Segurança e infraestrutura
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Arquitetura multi-tenant</li>
            <li>Isolamento de dados por clínica</li>
            <li>Rate limiting</li>
            <li>Proteção de arquivos</li>
            <li>Health checks do sistema</li>
            <li>Backups automáticos</li>
            <li>Jobs em background</li>

          </ul>
        </div>


        {/* MEDICAMENTOS */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">
            Base de medicamentos
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Banco de medicamentos integrado</li>
            <li>Autocomplete na prescrição</li>
            <li>Busca incremental por nome ou apresentação</li>

          </ul>
        </div>


      </div>


      <div className="text-center mt-16 text-sm text-gray-500">

        Sistema estruturado e preparado para evolução contínua,
        permitindo criação de novos módulos e atualizações frequentes.

        <div className="mt-3 font-medium">
          AkelMed — Versão 1.8
        </div>

      </div>

    </details>

  </div>

</section>

</section>


        {/* CTA FINAL */}
        <section className="py-32 bg-[#111827] text-white relative overflow-hidden">

          <div className="absolute w-[600px] h-[600px] bg-[#7F1D1D] blur-[140px] opacity-20 rounded-full left-[-200px] top-[-200px]" />

          <div className="max-w-5xl mx-auto px-6 text-center relative">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Solicite uma demonstração do AkelMed
            </h2>

            <p className="text-xl text-gray-300 mb-12">
              Veja na prática como o AkelMed pode ajudar sua clínica
              a organizar atendimentos, prontuários e gestão de pacientes.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">

              <a
                href="https://wa.me/5555991942215"
                className="bg-[#EF4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
              >
                Falar no WhatsApp
              </a>

              <a
                href="mailto:arthur.kelm@outlook.com"
                className="border border-gray-500 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
              >
                Enviar email
              </a>

            </div>

          </div>
        </section>


        {/* ÂNCORA PARA SCROLL */}
        <div id="demo" className="scroll-mt-24"></div>

      </main>

      <Footer />
    </>
  );
}