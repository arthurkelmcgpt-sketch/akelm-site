import { Layers, Zap, Workflow } from "lucide-react";
import Image from "next/image";

export default function Systems() {
  return (
    <section id="sistemas" className="w-full py-28 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Imagem */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-red-100 blur-3xl opacity-40 rounded-2xl"></div>

          {/* Imagem real */}
          <div className="relative h-[380px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">

            <Image
              src="/images/development.jpg"
              alt="Desenvolvimento de sistemas"
              fill
              className="object-cover"
            />

          </div>

        </div>

        {/* Texto */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
            Desenvolvimento de Sistemas
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Desenvolvemos sistemas web personalizados para automação
            de processos empresariais e digitalização de operações.
          </p>

          <p className="mt-4 text-gray-600">
            Nossas soluções são projetadas para integrar processos,
            aumentar produtividade e reduzir falhas operacionais,
            utilizando arquitetura moderna e escalável.
          </p>

          {/* Benefícios */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3 text-gray-700">
              <Layers className="text-[#EF4444]" size={22} />
              Sistemas personalizados sob medida
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Workflow className="text-[#EF4444]" size={22} />
              Automação de processos empresariais
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Zap className="text-[#EF4444]" size={22} />
              Arquitetura moderna e escalável
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}