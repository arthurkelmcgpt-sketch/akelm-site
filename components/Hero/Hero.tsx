export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#111827]">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
      >
        <source src="/video/hero-akelm.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#111827]/80"></div>

      {/* Background glow */}
      <div className="absolute w-[700px] h-[700px] bg-[#7F1D1D] opacity-20 blur-3xl rounded-full top-[-150px] left-[-250px]" />
      <div className="absolute w-[700px] h-[700px] bg-[#EF4444] opacity-20 blur-3xl rounded-full bottom-[-250px] right-[-250px]" />

      {/* Content */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        data-reveal
        data-reveal-delay={40}
        data-reveal-origin="up"
      >

        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          data-reveal
          data-reveal-delay={80}
          data-reveal-origin="up"
        >
          Soluções em T.I completas
          <span className="block text-[#EF4444]">
            Para tua empresa
          </span>
        </h1>

        <p
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          data-reveal
          data-reveal-delay={140}
          data-reveal-origin="up"
        >
          Da gestão de redes ao desenvolvimento de plataformas SaaS e sistemas
          dedicados, a Akelm Tecnologia entrega soluções inteligentes e
          escaláveis para empresas que precisam evoluir tecnologicamente.
        </p>

        <div
          className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
          data-reveal
          data-reveal-delay={200}
          data-reveal-origin="up"
        >

          <a
            href="#solucoes"
            className="px-8 py-4 bg-[#EF4444] text-white rounded-lg font-medium transition-all duration-300 hover:bg-red-600 hover:scale-[1.03]"
          >
            Conhecer soluções
          </a>

          <a
            href="/akelmed"
            className="px-8 py-4 border border-gray-500 text-white rounded-lg font-medium transition-all duration-300 hover:border-white hover:scale-[1.03]"
          >
            Conhecer o AkelMed
          </a>

        </div>

      </div>

    </section>
  );
}
