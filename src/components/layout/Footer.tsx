import Link from "next/link";
import { siteConfig } from "@/data/site";
import { CTA_CLICK } from "@/lib/tracking";
import { Icon, type IconName } from "@/components/ui/Icon";

const servicesLinks = [
  { label: "Projektierung & Kalkulation", href: "/#service" },
  { label: "Systemintegration & Projektleitung", href: "/#service" },
  { label: "Content Creation & Digital Media", href: "/#service" },
  { label: "Premium Service & Support", href: "/#service" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

const socialLinks: Array<{ label: string; href: string; icon: IconName }> = [
  { label: "X", href: "/#kontakt", icon: "x" },
  { label: "Instagram", href: "/#kontakt", icon: "instagram" },
  { label: "LinkedIn", href: "/#kontakt", icon: "linkedin" },
  { label: "WhatsApp", href: "tel:+4991125392666", icon: "whatsapp" },
  { label: "TikTok", href: "/#kontakt", icon: "tiktok" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-tpv-magenta/18 bg-tpv-deep px-[5vw] py-14 text-white lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-cover bg-center opacity-[0.18] mix-blend-screen saturate-[0.52] brightness-[0.7]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(5,0,21,0.72)] via-[rgba(11,2,40,0.78)] to-[rgba(5,0,21,0.86)]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-tpv-magenta/12 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-tpv-violet/12 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.35fr_0.82fr_0.68fr]">
        <div>
          <Link
            href="/"
            className="inline-block text-[clamp(3.25rem,5vw,6rem)] font-medium leading-none tracking-[-0.06em] text-white"
          >
            TPV.
          </Link>
          <p className="mt-6 max-w-[560px] text-[clamp(1rem,1.05vw,1.16rem)] leading-7 text-white/70">
            Ihr Partner für visionäre Medientechnik und integrierte AV Lösung.
            Qualität, Innovation und Menschlichkeit stehen bei uns an erster
            Stelle.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-white/16 bg-white/[0.04] text-white transition hover:border-tpv-magenta/70 hover:text-tpv-accent hover:shadow-glowSoft"
                aria-label={item.label}
                data-track-event={CTA_CLICK}
                data-track-label={`footer-social:${item.label}`}
              >
                <Icon name={item.icon} size={23} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium text-white">Leistungen</h2>
          <ul className="mt-6 space-y-4">
            {servicesLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-white/68 transition hover:text-tpv-accent"
                  data-track-event={CTA_CLICK}
                  data-track-label={`footer:${item.label}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium text-white">Rechtliches</h2>
          <ul className="mt-6 space-y-4">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-white/68 transition hover:text-tpv-accent"
                  data-track-event={CTA_CLICK}
                  data-track-label={`footer:${item.label}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="text-left text-white/68 transition hover:text-tpv-accent"
                data-track-event={CTA_CLICK}
                data-track-label="footer:Cookie Einstellungen"
              >
                Cookie Einstellungen
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-12 flex max-w-[1440px] flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
        <p>© {siteConfig.copyright}. Alle Rechte vorbehalten.</p>
        <p>Entwickelt für die Zukunft der Kommunikation</p>
      </div>
    </footer>
  );
}
