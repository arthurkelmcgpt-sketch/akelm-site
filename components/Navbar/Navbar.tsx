import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "AkelMed", href: "/akelmed" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111827]/80 backdrop-blur border-b border-white/5">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/akelmtecwhite-logo-4000.png"
            alt="Akelm Tecnologia"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}

        </nav>

        {/* CTA */}
        <Link
          href="/#contato"
          className="hidden md:inline-block px-5 py-2 bg-[#EF4444] text-white rounded-md text-sm hover:bg-red-600 transition"
        >
          Falar conosco
        </Link>

      </div>

    </header>
  );
}