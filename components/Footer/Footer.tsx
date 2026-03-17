import Link from "next/link";

type FooterProps = {
  variant?: "dark" | "light";
};

export default function Footer({ variant = "dark" }: FooterProps) {
  const isLight = variant === "light";
  const footerClass = isLight
    ? "border-t border-[#E5E7EB] bg-[#F8FAFC] text-[#6B7280]"
    : "bg-[#111827] text-gray-400";
  const titleClass = isLight ? "text-[#111827]" : "text-white";
  const linkClass = isLight ? "hover:text-[#111827]" : "hover:text-white";

  return (
    <footer className={`w-full py-16 ${footerClass}`}>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">

        {/* Marca + dados institucionais */}
        <div>

          <div className={`font-semibold text-lg mb-3 ${titleClass}`}>
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

          <Link href="/#solucoes" className={`transition ${linkClass}`}>
            Soluções
          </Link>

          <Link href="/akelmed" className={`transition ${linkClass}`}>
            AkelMed
          </Link>

          <Link href="/#sobre" className={`transition ${linkClass}`}>
            Sobre
          </Link>

          <Link href="/#contato" className={`transition ${linkClass}`}>
            Contato
          </Link>

        </div>


        {/* Copyright */}
        <div className="text-sm text-center md:text-right">

          © {new Date().getFullYear()} Akelm Tecnologia. Todos os direitos reservados.

        </div>

      </div>

    </footer>
  );
}
