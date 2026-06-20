import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/app/components/google-analytics";
import { StructuredData } from "@/app/components/structured-data";
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
  metadataBase: new URL("https://www.oleonardomachado.com.br"),
  title: "Leonardo Machado | Sites Premium que Geram Clientes",
  description:
    "Landing Pages, Google Ads e SEO para empresas que querem crescer com presença digital forte, performance e conversão.",
  keywords: [
    "Leonardo Machado",
    "Sites Premium que Geram Clientes",
    "desenvolvedor web",
    "Google Ads",
    "landing pages",
    "sites profissionais",
    "designer de sistemas",
    "tráfego pago",
    "SEO",
  ],
  authors: [{ name: "Leonardo Machado" }],
  creator: "Leonardo Machado",
  publisher: "Leonardo Machado",
  openGraph: {
    title: "Leonardo Machado | Sites Premium que Geram Clientes",
    description:
      "Landing Pages, Google Ads e SEO para empresas que querem crescer com presença digital forte, performance e conversão.",
    url: "https://www.oleonardomachado.com.br",
    siteName: "Leonardo Machado",
    images: ["/images/leo-profile.png"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Machado | Sites Premium que Geram Clientes",
    description:
      "Landing Pages, Google Ads e SEO para empresas que querem crescer com presença digital forte, performance e conversão.",
    images: ["/images/leo-profile.png"],
  },
  alternates: {
    canonical: "https://www.oleonardomachado.com.br",
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
      <body className="flex min-h-full flex-col">
        <StructuredData />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
