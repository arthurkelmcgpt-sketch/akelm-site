"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Serviços", href: "/#solucoes" },
  { label: "AkelMed", href: "/akelmed" },
  { label: "CargaViva", href: "/cargaviva" },
  { label: "Contato", href: "/#contato" },
];

type NavbarProps = {
  variant?: "dark" | "light" | "hero";
};

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const isLight = variant === "light";
  const isHero = variant === "hero";
  const headerClass = isHero
    ? hasScrolled
      ? "border-white/10 bg-[#071525]/95 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl"
      : "border-transparent bg-transparent"
    : isLight
      ? "border-[#E5E7EB] bg-[#F3F4F6]/86 shadow-[0_10px_30px_rgba(17,24,39,0.05)]"
      : "border-white/5 bg-[#111827]/80";
  const navClass = isLight ? "text-[#374151]" : "text-white";
  const linkClass = isLight ? "hover:text-[#111827]" : "hover:text-[#ff4b55]";
  const logoSrc = isLight
    ? "/images/akelmtec-logo-4000.png"
    : "/images/akelmtecwhite-logo-4000.png";
  const ctaClass = isHero
    ? "bg-white text-[#081017] hover:bg-[#a31621] hover:text-white"
    : isLight
      ? "bg-gradient-to-r from-[#7F1D1D] to-[#EF4444] text-white shadow-[0_12px_24px_rgba(127,29,29,0.18)]"
      : "bg-[#EF4444] text-white hover:bg-[#dc2626]";

  useEffect(() => {
    if (!isHero) return;

    const updateHeader = () => {
      setHasScrolled(window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, [isHero]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${isHero && !hasScrolled ? "" : "backdrop-blur"} ${headerClass}`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 ${
          isHero ? "h-24" : "h-16"
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src={logoSrc}
            alt="Akelm Tecnologia"
            width={isHero ? 148 : 120}
            height={isHero ? 50 : 40}
            priority
          />
        </Link>

        <nav
          className={`hidden items-center gap-9 text-sm font-semibold uppercase tracking-[0.08em] md:flex ${navClass}`}
        >
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

        <Link
          href="/#contato"
          className={`hidden px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition hover:-translate-y-px md:inline-block ${ctaClass}`}
        >
          Falar conosco
        </Link>
      </div>
    </header>
  );
}
