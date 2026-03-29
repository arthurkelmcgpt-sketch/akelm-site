import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akelm.com.br";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akelm Tecnologia",
    template: "%s | Akelm Tecnologia",
  },
  description: "Soluções completas em T.I para empresas.",
  icons: {
    icon: "/images/akelm-icon-32.png",
  },
  openGraph: {
    title: "Akelm Tecnologia",
    description: "Soluções completas em T.I para empresas.",
    url: siteUrl,
    siteName: "Akelm Tecnologia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akelm Tecnologia",
    description: "Soluções completas em T.I para empresas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

