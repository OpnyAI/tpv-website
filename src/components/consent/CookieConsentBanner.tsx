"use client";

import Link from "next/link";
import type { CookieConsent } from "@/lib/consent";
import { GradientButton } from "@/components/ui/GradientButton";

type CookieConsentBannerProps = {
  onDecision: (consent: CookieConsent) => void;
};

export function CookieConsentBanner({
  onDecision,
}: CookieConsentBannerProps) {
  return (
    <aside
      aria-label="Cookie-Einstellungen"
      data-cookie-consent-banner
      className="fixed bottom-[calc(8px+env(safe-area-inset-bottom))] left-[50dvw] z-[200] w-[calc(100dvw-1.75rem)] max-w-[52rem] -translate-x-1/2 overflow-hidden rounded-[1.35rem] border border-tpv-violet/35 bg-[rgba(9,2,31,0.88)] p-[1px] text-white shadow-[0_24px_80px_rgba(0,0,0,0.52),0_0_42px_rgba(163,0,255,0.16),0_0_24px_rgba(255,54,95,0.08)] backdrop-blur-2xl sm:bottom-5 sm:w-[calc(100dvw-2.5rem)] sm:rounded-[1.65rem]"
    >
      <div className="relative overflow-hidden rounded-[calc(1.35rem-1px)] bg-[linear-gradient(135deg,rgba(26,14,56,0.94),rgba(7,1,25,0.96))] p-3.5 shadow-[inset_0_1px_0_rgba(248,247,255,0.07)] sm:rounded-[calc(1.65rem-1px)] sm:px-6 sm:py-5">
        <div className="pointer-events-none absolute -right-14 -top-20 h-40 w-40 rounded-full bg-tpv-violet/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-36 w-44 rounded-full bg-tpv-accent/10 blur-3xl" />

        <div className="relative flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between md:gap-7">
          <p className="max-w-[34rem] text-sm leading-[1.4] text-white/76 sm:hidden">
            Wir verwenden Google Analytics zur Auswertung der Website-Nutzung.
            Das Tracking erfolgt nur mit Ihrer Zustimmung. Details finden Sie in
            unserer{" "}
            <Link
              href="/datenschutz"
              className="font-medium text-tpv-accent transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpv-accent focus-visible:ring-offset-2 focus-visible:ring-offset-tpv-deep"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>

          <p className="hidden max-w-[34rem] text-[0.95rem] leading-6 text-white/76 sm:block">
            Wir verwenden Google Analytics, um die Nutzung unserer Website
            auszuwerten und unser Angebot zu verbessern. Das Tracking erfolgt nur
            mit Ihrer Zustimmung. Details finden Sie in unserer{" "}
            <Link
              href="/datenschutz"
              className="font-medium text-tpv-accent transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpv-accent focus-visible:ring-offset-2 focus-visible:ring-offset-tpv-deep"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>

          <div className="grid w-full shrink-0 grid-cols-2 gap-2 md:w-auto md:gap-3">
            <GradientButton
              variant="outline"
              size="md"
              className="min-h-11 w-full min-w-0 justify-center border-white/20 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_28px_rgba(0,0,0,0.18)] hover:border-tpv-magenta/65 hover:bg-white/[0.075] [&>span]:px-3 [&>span]:py-2.5 sm:[&>span]:px-5 sm:[&>span]:py-3 md:min-w-[8.75rem]"
              onClick={() => onDecision("rejected")}
            >
              Ablehnen
            </GradientButton>
            <GradientButton
              variant="outline"
              size="md"
              className="min-h-11 w-full min-w-0 justify-center border-white/20 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_28px_rgba(0,0,0,0.18)] hover:border-tpv-magenta/65 hover:bg-white/[0.075] [&>span]:px-3 [&>span]:py-2.5 sm:[&>span]:px-5 sm:[&>span]:py-3 md:min-w-[8.75rem]"
              onClick={() => onDecision("accepted")}
            >
              Akzeptieren
            </GradientButton>
          </div>
        </div>
      </div>
    </aside>
  );
}
