import { ShieldCheck, CalendarDays, FileText } from "lucide-react";
import Image from "next/image";

export default function AkelMed() {
  return (
    <section id="akelmed" className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div data-reveal data-reveal-delay={50} data-reveal-origin="left">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
            AkelMed
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Plataforma SaaS desenvolvida para gestão de clínicas e
            consultórios médicos, com prontuário eletrônico,
            controle de atendimentos e organização completa
            da rotina médica.
          </p>

          <p className="mt-4 text-gray-600">
            O sistema foi projetado com foco em segurança,
            performance e simplicidade de uso, permitindo
            que profissionais da saúde foquem no atendimento
            ao paciente enquanto a plataforma cuida da gestão.
          </p>

          {/* Funcionalidades */}
          <div className="mt-8 space-y-4">

            <div
              className="flex items-center gap-3 text-gray-700"
              data-reveal
              data-reveal-delay={150}
              data-reveal-origin="left"
            >
              <CalendarDays className="text-[#EF4444]" size={22} />
              Agenda médica e gestão de consultas
            </div>

            <div
              className="flex items-center gap-3 text-gray-700"
              data-reveal
              data-reveal-delay={210}
              data-reveal-origin="left"
            >
              <FileText className="text-[#EF4444]" size={22} />
              Prontuário eletrônico completo
            </div>

            <div
              className="flex items-center gap-3 text-gray-700"
              data-reveal
              data-reveal-delay={270}
              data-reveal-origin="left"
            >
              <ShieldCheck className="text-[#EF4444]" size={22} />
              Segurança e controle de acesso
            </div>

          </div>

          <a
            href="/akelmed"
            className="inline-block mt-10 px-8 py-4 bg-[#EF4444] text-white rounded-lg font-medium transition hover:bg-red-600"
          >
            Conhecer o sistema
          </a>

        </div>

        {/* Preview do sistema */}
        <div
          className="relative"
          data-reveal
          data-reveal-delay={110}
          data-reveal-origin="right"
        >

          <div className="absolute inset-0 bg-red-100 blur-3xl opacity-40 rounded-2xl"></div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">

            <div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>

            <div className="relative h-[380px]">
              <div className="scroll-parallax-media h-full" data-parallax="12">
                <Image
                  src="/images/akelmed/akelmmedbkg.png"
                  alt="Interface do sistema AkelMed"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
