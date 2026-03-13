import { Settings, Database, Link } from "lucide-react";
import Image from "next/image";

export default function Dedicated() {
  return (
    <section id="dedicados" className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Imagem */}
        <div className="relative">

          <div className="absolute inset-0 bg-red-100 blur-3xl opacity-40 rounded-2xl"></div>

          <div className="relative h-[380px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/images/dedicated.jpg"
              alt="Sistema corporativo dedicado"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* Texto */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
            Sistemas Dedicados
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Desenvolvemos software corporativo sob medida para atender
            necessidades específicas de cada empresa.
          </p>

          <p className="mt-4 text-gray-600">
            Criamos soluções integradas aos processos internos da empresa,
            permitindo automação de operações, integração com sistemas
            existentes e maior controle das atividades.
          </p>

          {/* Benefícios */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 text-gray-700">
              <Settings className="text-[#EF4444]" size={22} />
              Software desenvolvido sob medida
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Database className="text-[#EF4444]" size={22} />
              Integração com sistemas existentes
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Link className="text-[#EF4444]" size={22} />
              Automação de processos internos
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}