export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[#111827] text-gray-400">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">

        {/* Marca + dados institucionais */}
        <div>

          <div className="text-white font-semibold text-lg mb-3">
            Akelm Tecnologia
          </div>

          <div className="text-sm leading-relaxed">

            <div>Akelm Tecnologia LTDA</div>

            <div>CNPJ nº 65.563.745/0001-04</div>

            <div>Caçapava do Sul – RS</div>

          </div>

        </div>


        {/* Links */}
        <div className="flex justify-center gap-6 text-sm">

          <a href="#solucoes" className="hover:text-white transition">
            Soluções
          </a>

          <a href="#akelmed" className="hover:text-white transition">
            AkelMed
          </a>

          <a href="#sobre" className="hover:text-white transition">
            Sobre
          </a>

          <a href="#contato" className="hover:text-white transition">
            Contato
          </a>

        </div>


        {/* Copyright */}
        <div className="text-sm text-center md:text-right">

          © {new Date().getFullYear()} Akelm Tecnologia. Todos os direitos reservados.

        </div>

      </div>

    </footer>
  );
}