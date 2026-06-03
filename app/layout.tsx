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
  title: "Leonardo Machado | Design que Vende",
  description:
    "Desenvolvimento web, Google Ads e soluções digitais com design premium e função comercial.",
  keywords: [
    "Leonardo Machado",
    "Design que Vende",
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
  icons: {
    icon: [{ url: "/images/favicon-leonardo-machado.png", type: "image/png" }],
    shortcut: "/images/favicon-leonardo-machado.png",
    apple: "/images/favicon-leonardo-machado.png",
  },
  openGraph: {
    title: "Leonardo Machado | Design que Vende",
    description:
      "Soluções digitais com design premium, Google Ads e função comercial.",
    url: "https://oleonardomachado.com.br",
    siteName: "Leonardo Machado",
    images: ["/images/leo-profile.png"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Machado | Design que Vende",
    description:
      "Soluções digitais com design premium, Google Ads e função comercial.",
    images: ["/images/leo-profile.png"],
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
