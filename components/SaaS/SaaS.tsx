import { Cloud, Server, Users } from "lucide-react";
import Image from "next/image";

export default function SaaS() {
  return (
    <section id="saas" className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div data-reveal data-reveal-delay={50} data-reveal-origin="left">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
            Plataformas SaaS
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Desenvolvemos plataformas SaaS modernas, escaláveis e
            preparadas para múltiplos usuários e acesso remoto.
          </p>

          <p className="mt-4 text-gray-600">
            Nossas soluções utilizam arquitetura cloud e são projetadas
            para oferecer alta disponibilidade, segurança e facilidade
            de expansão conforme o crescimento do negócio.
          </p>

          <div className="mt-8 space-y-4">

            <div
              className="flex items-center gap-3 text-gray-700"
              data-reveal
              data-reveal-delay={150}
              data-reveal-origin="left"
            >
              <Cloud className="text-[#EF4444]" size={22} />
              Arquitetura baseada em cloud
            </div>

            <div
              className="flex items-center gap-3 text-gray-700"
              data-reveal
              data-reveal-delay={210}
              data-reveal-origin="left"
            >
              <Users className="text-[#EF4444]" size={22} />
              Suporte a múltiplos usuários
            </div>

            <div
              className="flex items-center gap-3 text-gray-700"
              data-reveal
              data-reveal-delay={270}
              data-reveal-origin="left"
            >
              <Server className="text-[#EF4444]" size={22} />
              Escalabilidade e alta disponibilidade
            </div>

          </div>

        </div>

        {/* Imagem */}
        <div
          className="relative"
          data-reveal
          data-reveal-delay={110}
          data-reveal-origin="right"
        >

          <div className="absolute inset-0 bg-red-100 blur-3xl opacity-40 rounded-2xl"></div>

          <div className="relative h-[380px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="scroll-parallax-media h-full" data-parallax="12">
              <Image
                src="/images/saas.jpg"
                alt="Plataformas SaaS"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
