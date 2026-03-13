import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 relative w-full py-32 flex items-center justify-center bg-[#111827] overflow-hidden"
    >

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      >
        <source src="/video/hero-akelm.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#111827]/80"></div>

      {/* Glow esquerdo */}
      <div className="absolute w-[700px] h-[700px] bg-[#7F1D1D] opacity-20 blur-3xl rounded-full top-[-200px] left-[-200px]" />

      {/* Glow direito */}
      <div className="absolute w-[700px] h-[700px] bg-[#EF4444] opacity-20 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />

      {/* Conteúdo */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">

        {/* TEXTO */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Sobre a Akelm Tecnologia
          </h2>

          <p className="mt-8 text-lg text-gray-300">
            A Akelm Tecnologia atua na gestão da infraestrutura de redes e desenvolvimento de soluções técnologicas voltadas para empresas de pequeno, médio e grande porte.
          </p>

          <p className="mt-6 text-gray-400">
            Com experiência em gestão de redes, desenvolvimento de
            sistemas e criação de plataformas SaaS, a empresa busca
            entregar soluções que combinam estabilidade, segurança
            e alta performance.
          </p>

        </div>

        {/* FOTO */}
        <div className="flex justify-center lg:justify-end">

          <div className="relative">

            {/* glow atrás da foto */}
            <div className="absolute w-[260px] h-[260px] bg-[#EF4444] blur-[120px] opacity-30 rounded-full"></div>

            <Image
              src="/images/Foto-institucional.png"
              alt="Arthur - Akelm Tecnologia"
              width={260}
              height={260}
              className="relative rounded-full object-cover border border-white/10 shadow-xl"
              priority
            />

          </div>

        </div>

      </div>

    </section>
  );
}