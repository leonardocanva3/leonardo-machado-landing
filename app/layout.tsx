import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oleonardomachado.com.br"),
  title: {
    default:
      "Leonardo Machado | Desenvolvedor Web e Especialista em Google Ads",
    template: "%s | Leonardo Machado",
  },
  description:
    "Leonardo Machado, desenvolvedor web, designer de sistemas e especialista em Google Ads. Landing pages, sites profissionais e design que vende com estratégia.",
  keywords: [
    "Leonardo Machado",
    "Léo",
    "Design que Vende",
    "desenvolvedor web Leonardo Machado",
    "designer de sistemas",
    "especialista em Google Ads",
    "landing pages",
    "sites profissionais",
    "design que vende",
    "Google Ads",
    "SEO",
    "sistemas web",
  ],
  authors: [{ name: "Leonardo Machado" }],
  creator: "Leonardo Machado",
  publisher: "Leonardo Machado",
  openGraph: {
    title: "Leonardo Machado | Design que Vende",
    description:
      "Desenvolvedor web, designer de sistemas e especialista em Google Ads para empresas que querem vender com mais clareza.",
    url: "https://oleonardomachado.com.br",
    siteName: "Leonardo Machado",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Machado | Desenvolvedor Web e Google Ads",
    description:
      "Landing pages, sites profissionais, sistemas web e Google Ads com estratégia antes da execução.",
  },
  alternates: {
    canonical: "https://oleonardomachado.com.br",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
