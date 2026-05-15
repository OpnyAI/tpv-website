import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { ReferencesSection } from "@/components/sections/ReferencesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { siteConfig } from "@/data/site";
import { absoluteUrl, createCanonicalUrl } from "@/lib/seo";

const homeDescription =
  "TPV-AV plant und realisiert professionelle Medientechnik, LED-Walls, Konferenzraumtechnik, Showroom-Lösungen und AV-Systeme für Unternehmen.";

export const metadata: Metadata = {
  title: "Professionelle Audio-/Video-Lösungen für Unternehmen",
  description: homeDescription,
  alternates: {
    canonical: createCanonicalUrl("/"),
  },
  openGraph: {
    title: "Professionelle Audio-/Video-Lösungen für Unternehmen",
    description: homeDescription,
    url: createCanonicalUrl("/"),
    images: [
      {
        url: absoluteUrl(siteConfig.defaultOgImage),
        alt: siteConfig.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professionelle Audio-/Video-Lösungen für Unternehmen",
    description: homeDescription,
    images: [absoluteUrl(siteConfig.defaultOgImage)],
  },
};

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-cover bg-top opacity-22 mix-blend-screen sm:opacity-34"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-tpv-dark/50 via-tpv-dark/86 to-tpv-deep"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <HeroSection />
        <ReferencesSection />
        <AboutSection />
        <ServicesSection />
        <LocationsSection />
        <ContactSection />
        <FaqSection />
      </div>
    </main>
  );
}
