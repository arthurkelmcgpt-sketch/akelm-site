import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "@/components/Navbar/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";

export const metadata: Metadata = {
  title: "Akelm Tecnologia | Em manutenção",
  description: "Site temporariamente em manutenção.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Akelm Tecnologia | Em manutenção",
    description: "Site temporariamente em manutenção.",
    url: "/",
    type: "website",
    siteName: "Akelm Tecnologia",
    images: [
      {
        url: "/images/Foto-institucional.png",
        width: 1200,
        height: 630,
        alt: "Akelm Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akelm Tecnologia | Em manutenção",
    description: "Site temporariamente em manutenção.",
    images: ["/images/Foto-institucional.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Akelm Tecnologia",
  url: siteUrl,
  description: "Site temporariamente em manutenção.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-[#08101a] pt-16 text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <Image
          src="/images/home/background-akelm.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,16,26,0.9) 0%, rgba(8,16,26,0.72) 35%, rgba(8,16,26,0.68) 100%)",
          }}
        />

        <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
          <div className="rounded-[2rem] border border-white/12 bg-black/20 px-8 py-10 text-center shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.35em] text-white/70">
              Akelm Tecnologia
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[0.08em] text-white sm:text-6xl">
              EM MANUTENÇÃO
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
