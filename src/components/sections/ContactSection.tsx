import { Icon, type IconName } from "@/components/ui/Icon";
import { contactCards } from "@/data/contact";
import {
  CTA_CLICK,
  EMAIL_CLICK,
  PHONE_CLICK,
  VIDEOCALL_CLICK,
} from "@/lib/tracking";
import { cn } from "@/lib/utils";

const iconByTitle: Record<string, IconName> = {
  "E-Mail": "mail",
  Anruf: "phone",
  Chat: "whatsapp",
  Videocall: "video",
};

const labelByTitle: Record<string, string> = {
  "E-Mail": "MAIL:",
  Anruf: "ANRUF:",
  Chat: "CHAT:",
  Videocall: "VIDEOCALL:",
};

const valueByTitle: Record<string, string> = {
  "E-Mail": "info@tpv-av.de",
  Anruf: "091125392 666",
  Chat: "091125392 666",
  Videocall: "Hier vereinbaren",
};

const eventByTitle: Record<string, string> = {
  "E-Mail": EMAIL_CLICK,
  Anruf: PHONE_CLICK,
  Chat: PHONE_CLICK,
  Videocall: VIDEOCALL_CLICK,
};

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden scroll-mt-28 px-6 py-20 md:scroll-mt-40 lg:px-10 lg:pb-[6.25rem] lg:pt-[5.625rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,0,21,0.78)_0%,rgba(11,2,40,0.82)_48%,rgba(5,0,21,0.86)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-cover bg-center opacity-[0.22] mix-blend-screen saturate-[0.62] brightness-[0.74]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(5,0,21,0.62)] via-[rgba(11,2,40,0.74)] to-[rgba(5,0,21,0.84)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,54,95,0.1)_0%,rgba(163,0,255,0.055)_42%,transparent_72%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <h2 className="text-center text-[clamp(2.375rem,9vw,2.875rem)] font-medium uppercase leading-none tracking-[0.032em] text-tpv-accent lg:text-[clamp(3rem,4.5vw,4.75rem)]">
          JETZT KONTAKTIEREN
        </h2>

        <div className="mx-auto mt-12 w-full max-w-[1120px] overflow-hidden rounded-[1.875rem] border border-white/70 bg-[rgba(8,2,32,0.38)] shadow-[0_22px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl lg:mt-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => {
              const icon = iconByTitle[card.title] ?? "arrow-up-right";
              const eventName = eventByTitle[card.title] ?? CTA_CLICK;
              const href =
                card.href === "#"
                  ? "mailto:info@tpv-av.de?subject=Videocall%20vereinbaren"
                  : card.href;
              const content = (
                <>
                  <Icon
                    name={icon}
                    size={38}
                    className="mx-auto text-[#F4F1FA] transition-colors duration-200 group-hover:text-white"
                  />
                  <span className="mt-4 block text-[clamp(0.9375rem,1vw,1.125rem)] font-semibold uppercase tracking-[0.18em] text-tpv-accent">
                    {labelByTitle[card.title] ?? card.title}
                  </span>
                  <span className="mt-2.5 block text-[clamp(1.25rem,1.55vw,1.6875rem)] font-medium leading-[1.15] text-[#F4F1FA]">
                    {valueByTitle[card.title] ?? card.value}
                  </span>
                </>
              );

              return (
                <div
                  key={card.title}
                  className={cn(
                    "relative border-white/60 text-center transition-colors duration-200",
                    index === 0 && "bg-[rgba(0,38,45,0.45)]",
                    index < contactCards.length - 1 &&
                      "border-b md:border-r lg:border-b-0 lg:border-r-0",
                  )}
                >
                  {index < contactCards.length - 1 && (
                    <span
                      className="pointer-events-none absolute right-0 top-1/2 hidden h-[100px] w-px -translate-y-1/2 bg-white/65 lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <a
                    href={href}
                    aria-label={`${labelByTitle[card.title] ?? card.title} ${valueByTitle[card.title] ?? card.value}`}
                    className="group flex min-h-[150px] w-full flex-col items-center justify-center px-6 py-7 text-white transition-colors duration-200 hover:bg-white/[0.035] focus-visible:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpv-accent/70 focus-visible:ring-inset lg:min-h-[180px]"
                    data-track-event={eventName}
                    data-track-label={`contact:${card.title}`}
                  >
                    {content}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
