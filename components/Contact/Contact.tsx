export default function Contact() {
  return (
    <section id="contato" className="w-full py-28 bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-6 text-center relative">

        {/* Glow */}
        <div className="absolute inset-0 bg-red-100 blur-3xl opacity-30 rounded-2xl"></div>

        <div className="relative">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
            Entre em contato
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Precisa desenvolver um sistema, plataforma SaaS
            ou melhorar a infraestrutura tecnológica da sua empresa?
          </p>

          <p className="mt-2 text-gray-600">
            Fale diretamente conosco.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">

            <a
              href="https://wa.me/5555999171727"
              className="px-8 py-4 bg-[#EF4444] text-white rounded-lg font-medium transition hover:bg-red-600"
            >
              Falar no WhatsApp
            </a>

            <a
              href="mailto:arthur.kelm@outlook.com"
              className="px-8 py-4 border border-gray-400 text-[#111827] rounded-lg font-medium transition hover:border-[#111827]"
            >
              Enviar email
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}