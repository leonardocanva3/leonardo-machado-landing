import type { Metadata } from "next";
import Script from "next/script";
import { DentistasLanding } from "./dentistas-landing";

const metaPixelId = "1801694090845175";

export const metadata: Metadata = {
  title: "98 Prompts Estratégicos para Dentistas | Leonardo Machado",
  description:
    "Mini treinamento prático de ChatGPT e biblioteca com 98 prompts estratégicos para Dentistas criarem conteúdos com mais clareza, consistência e praticidade.",
  alternates: {
    canonical: "https://www.oleonardomachado.com.br/dentistas",
  },
  openGraph: {
    title: "98 Prompts Estratégicos para Dentistas | Leonardo Machado",
    description:
      "Mini treinamento prático de ChatGPT e biblioteca com 98 prompts estratégicos para Dentistas criarem conteúdos com mais clareza, consistência e praticidade.",
    url: "https://www.oleonardomachado.com.br/dentistas",
    siteName: "Leonardo Machado",
    locale: "pt_BR",
    type: "website",
  },
};

function DentistasMetaPixel() {
  return (
    <>
      <Script id="meta-pixel-dentistas" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          if (!window.__dentistasMetaPixelPageViewSent) {
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
            window.__dentistasMetaPixelPageViewSent = true;
          }
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          height="1"
          src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
          style={{ display: "none" }}
          width="1"
        />
      </noscript>
    </>
  );
}

export default function DentistasPage() {
  return (
    <>
      <DentistasMetaPixel />
      <DentistasLanding />
    </>
  );
}
