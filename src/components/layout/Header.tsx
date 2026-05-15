"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { CTA_CLICK, PHONE_CLICK } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const figmaNavigation = [
  { label: "REFERENZEN", href: "/#referenzen" },
  { label: "ÜBER UNS", href: "/#ueber-uns" },
  { label: "SERVICE", href: "/#service" },
  { label: "KONTAKT", href: "/#kontakt" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-6 sm:pt-7">
      <div className="mx-auto w-full max-w-[1320px] lg:w-[87vw]">
        <div className="rounded-full border border-[rgba(163,0,255,0.24)] bg-[rgba(31,24,56,0.86)] shadow-[inset_0_1px_0_rgba(248,247,255,0.045),0_18px_52px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
          <div className="flex h-[66px] items-center justify-between gap-4 px-4 sm:h-[70px] sm:px-9 lg:h-[72px] lg:px-10">
            <Link
              href="/"
              className="rounded-full text-[2.2rem] font-semibold leading-none tracking-[-0.04em] text-tpv-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpv-accent sm:text-[2.65rem]"
              aria-label="TPV Startseite"
              onClick={closeMenu}
            >
              TPV.
            </Link>

            <nav
              className="hidden items-center gap-10 xl:gap-12 lg:flex"
              aria-label="Hauptnavigation"
            >
              {figmaNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[clamp(0.94rem,0.78vw,1rem)] font-semibold uppercase tracking-[0.035em] text-tpv-white transition hover:text-tpv-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpv-accent"
                  data-track-event={CTA_CLICK}
                  data-track-label={`nav:${item.label}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.phoneHref}
                className="hidden h-11 items-center gap-3 rounded-full border border-tpv-magenta/42 bg-gradient-to-r from-tpv-accent/10 to-tpv-violet/12 py-1.5 pl-2 pr-5 text-[clamp(1rem,0.82vw,1.06rem)] font-medium text-tpv-white shadow-[0_0_22px_rgba(255,54,95,0.12)] transition hover:bg-white/[0.08] lg:inline-flex"
                aria-label="Telefon +49 911 25392 666"
                data-track-event={PHONE_CLICK}
                data-track-label="header-phone"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-tpv-deep/70">
                  <Icon name="phone" size={17} />
                </span>
                +49 911 25392 666
              </a>

              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-tpv-magenta/50 bg-white/[0.04] text-white shadow-glowSoft lg:hidden"
                aria-label="Telefon +49 911 25392 666"
                data-track-event={PHONE_CLICK}
                data-track-label="mobile-header-phone"
              >
                <Icon name="phone" size={18} />
              </a>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white lg:hidden"
                aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen((current) => !current)}
              >
                <Icon name={isOpen ? "close" : "menu"} size={21} />
              </button>
            </div>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "mt-3 rounded-[2rem] border border-tpv-magenta/35 bg-tpv-deep/94 p-4 shadow-card backdrop-blur-2xl transition lg:hidden",
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {figmaNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/[0.08]"
                onClick={closeMenu}
                data-track-event={CTA_CLICK}
                data-track-label={`mobile-nav:${item.label}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-3 rounded-full border border-tpv-magenta/60 bg-white/[0.04] px-5 py-4 text-sm font-medium text-white"
              data-track-event={PHONE_CLICK}
              data-track-label="mobile-menu-phone"
            >
              <Icon name="phone" size={18} />
              +49 911 25392 666
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
