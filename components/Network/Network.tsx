import { Activity, ShieldCheck, Network as NetworkIcon } from "lucide-react";
import Image from "next/image";

export default function Network() {
  return (
    <section id="redes" className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div data-reveal data-reveal-delay={50} data-reveal-origin="left">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
            Gestão de Redes
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Monitoramento, administração e suporte técnico especializado
            para infraestrutura de redes corporativas.
          </p>

          <p className="mt-4 text-gray-600">
            Atuamos na análise, estabilidade e segurança da rede,
            garantindo que a infraestrutura tecnológica da empresa
            opere com máxima confiabilidade e desempenho.
          </p>

          {/* Benefícios */}
          <div className="mt-8 space-y-4">

            <div
              className="flex items-center gap-3 text-gray-700"
              data-reveal
              data-reveal-delay={140}
              data-reveal-origin="left"
            >
              <Activity className="text-[#EF4444]" size={22} />
              Monitoramento contínuo da infraestrutura
            </div>

            <div
              className="flex items-center gap-3 text-gray-700"
              data-reveal
              data-reveal-delay={200}
              data-reveal-origin="left"
            >
              <ShieldCheck className="text-[#EF4444]" size={22} />
              Segurança e estabilidade da rede
            </div>

            <div
              className="flex items-center gap-3 text-gray-700"
              data-reveal
              data-reveal-delay={260}
              data-reveal-origin="left"
            >
              <NetworkIcon className="text-[#EF4444]" size={22} />
              Suporte técnico especializado
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

          {/* Glow */}
          <div className="absolute inset-0 bg-red-100 blur-3xl opacity-40 rounded-2xl"></div>

          {/* Imagem real */}
          <div className="relative h-[380px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="scroll-parallax-media h-full" data-parallax="12">
              <Image
                src="/images/Gestão-de-Redes.png"
                alt="Infraestrutura de rede"
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
