import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");
const professionalServiceId = absoluteUrl("/#professional-service");

const socialProfileUrls = siteConfig.socialLinks
  .filter(({ label }) => label !== "WhatsApp")
  .map(({ href }) => href);

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.baseUrl,
  description: siteConfig.description,
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  founder: {
    "@type": "Person",
    name: "Heinrich Obholz",
  },
  sameAs: socialProfileUrls,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  publisher: {
    "@id": organizationId,
  },
  inLanguage: "de-DE",
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": professionalServiceId,
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  description: siteConfig.description,
  areaServed: [
    {
      "@type": "Country",
      name: "Deutschland",
    },
    ...["Hamburg", "Frankfurt", "Stuttgart", "Nürnberg", "München"].map(
      (name) => ({
        "@type": "City",
        name,
      }),
    ),
  ],
  serviceType: [
    "AV-Technik",
    "Medientechnik",
    "Konferenzraumtechnik",
    "Digital Signage",
    "LED-Walls",
    "Videowalls",
    "Content Creation",
    "AV-Support",
    "Wartung audiovisueller Systeme",
  ],
  provider: {
    "@id": organizationId,
  },
};
