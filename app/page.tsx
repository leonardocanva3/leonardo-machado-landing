import { AgencyConversationSection } from "@/app/components/agency-conversation-section";
import { ConversionProofStrip } from "@/app/components/conversion-proof-strip";
import { FinalCta } from "@/app/components/final-cta";
import { FloatingWhatsapp } from "@/app/components/floating-whatsapp";
import { Faq } from "@/app/components/faq";
import { GoogleAdsSection } from "@/app/components/google-ads-section";
import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";
import { IntroSection } from "@/app/components/intro-section";
import { ProcessSection } from "@/app/components/process-section";
import { ServicesSection } from "@/app/components/services-section";
import { WhoIsLeoSection } from "@/app/components/who-is-leo-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(64,131,199,0.24),transparent_28%),radial-gradient(circle_at_88%_2%,rgba(226,232,240,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_18%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/40 to-transparent" />

      <div className="relative z-10">
        <Header />
        <Hero />
        <ConversionProofStrip />
        <AgencyConversationSection />
        <GoogleAdsSection />
        <ServicesSection />
        <IntroSection />
        <WhoIsLeoSection />
        <ProcessSection />
        <Faq />
        <FinalCta />
      </div>

      <FloatingWhatsapp />
    </main>
  );
}
