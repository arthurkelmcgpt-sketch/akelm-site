import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "AkelMed", href: "/akelmed" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

type NavbarProps = {
  variant?: "dark" | "light";
};

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const isLight = variant === "light";
  const headerClass = isLight
    ? "bg-[#F3F4F6]/86 border-[#E5E7EB] shadow-[0_10px_30px_rgba(17,24,39,0.05)]"
    : "bg-[#111827]/80 border-white/5";
  const navClass = isLight ? "text-[#374151]" : "text-gray-300";
  const linkClass = isLight ? "hover:text-[#111827]" : "hover:text-white";
  const logoSrc = isLight
    ? "/images/akelmtec-logo-4000.png"
    : "/images/akelmtecwhite-logo-4000.png";
  const ctaClass = isLight
    ? "bg-gradient-to-r from-[#7F1D1D] to-[#EF4444] text-white shadow-[0_12px_24px_rgba(127,29,29,0.18)]"
    : "bg-[#EF4444] text-white";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur ${headerClass}`}>

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoSrc}
            alt="Akelm Tecnologia"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Navegação */}
        <nav className={`hidden md:flex items-center gap-8 text-sm ${navClass}`}>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${linkClass}`}
            >
              {link.label}
            </Link>
          ))}

        </nav>

        {/* CTA */}
        <Link
          href="/#contato"
          className={`hidden md:inline-block px-5 py-2 rounded-md text-sm transition hover:-translate-y-px ${ctaClass}`}
        >
          Falar conosco
        </Link>

      </div>

    </header>
  );
}
