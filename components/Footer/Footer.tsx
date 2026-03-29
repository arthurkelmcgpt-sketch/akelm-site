import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

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
  const socialClass = isLight
    ? "border border-[#E5E7EB] bg-white/80 text-[#111827] hover:border-[#111827] hover:bg-white"
    : "border border-white/10 bg-white/10 text-white/90 hover:border-red-500/30 hover:bg-red-900/25";

  return (
    <footer className={`w-full py-16 ${footerClass}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-3">
        <div>
          <div className={`mb-3 text-lg font-semibold ${titleClass}`}>
            Akelm Tecnologia
          </div>

          <div className="text-sm leading-relaxed">
            <div>Akelm Tecnologia LTDA</div>
            <div>CNPJ nº 65.563.745/0001-04</div>
            <div>Caçapava do Sul - RS</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 text-sm">
          <div className="flex flex-wrap justify-center gap-6">
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

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/akelmtecnologia/"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:-translate-y-0.5 ${socialClass}`}
              aria-label="Instagram da Akelm Tecnologia"
              rel="noreferrer"
              target="_blank"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.linkedin.com/company/akelm-tecnologia/"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:-translate-y-0.5 ${socialClass}`}
              aria-label="LinkedIn da Akelm Tecnologia"
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="text-center text-sm md:text-right">
          © {new Date().getFullYear()} Akelm Tecnologia. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
