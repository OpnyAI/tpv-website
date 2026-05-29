import { Icon, type IconName } from "@/components/ui/Icon";
import { contactCards } from "@/data/contact";
import { siteConfig } from "@/data/site";
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
  Anruf: "+49 911 25392 666",
  Chat: "+49 911 25392 666",
  Videocall: "Hier vereinbaren",
};

const eventByTitle: Record<string, string> = {
  "E-Mail": EMAIL_CLICK,
  Anruf: PHONE_CLICK,
  Chat: PHONE_CLICK,
  Videocall: VIDEOCALL_CLICK,
};

const hrefByTitle: Record<string, string> = {
  "E-Mail": "mailto:info@tpv-av.de",
  Anruf: "tel:+4991125392666",
  Chat: "https://wa.me/4991125392666",
  Videocall: siteConfig.bookingUrl,
};

export function ContactSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 lg:px-10 lg:pb-[7rem] lg:pt-[8rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,0,21,0.62)_0%,rgba(11,2,40,0.72)_48%,rgba(5,0,21,0.7)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-[38%_top] bg-cover opacity-[0.24] mix-blend-screen saturate-[0.62] brightness-[0.78]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(5,0,21,0.62)] via-[rgba(11,2,40,0.74)] to-[rgba(5,0,21,0.84)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,54,95,0.075)_0%,rgba(163,0,255,0.04)_42%,transparent_72%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] min-w-0">
        <span
          id="kontakt"
          className="block scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-36"
          aria-hidden="true"
        />
        <h2 className="mx-auto max-w-[calc(100vw-2rem)] break-words text-center text-[clamp(2.35rem,10vw,3rem)] font-medium uppercase leading-[1.04] tracking-[0.02em] text-tpv-accent lg:text-[clamp(3rem,4vw,4.75rem)] lg:leading-[1.05] lg:tracking-[0.03em]">
          JETZT KONTAKTIEREN
        </h2>

        <div className="mx-auto mt-11 w-full max-w-[1160px] overflow-hidden rounded-[1.75rem] border border-white/65 bg-[rgba(5,8,24,0.24)] shadow-[0_18px_64px_rgba(0,0,0,0.22)] backdrop-blur-[2px] lg:mt-14 lg:rounded-[2rem]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => {
              const icon = iconByTitle[card.title] ?? "arrow-up-right";
              const eventName = eventByTitle[card.title] ?? CTA_CLICK;
              const href = hrefByTitle[card.title] ?? card.href;
              const content = (
                <>
                  <Icon
                    name={icon}
                    size={34}
                    className="mx-auto text-[#F4F1FA] transition-colors duration-200 group-hover:text-white"
                  />
                  <span className="mt-5 block text-[clamp(0.9rem,4vw,1rem)] font-medium uppercase tracking-[0.16em] text-tpv-accent lg:text-[clamp(1rem,1vw,1.125rem)] lg:tracking-[0.18em]">
                    {labelByTitle[card.title] ?? card.title}
                  </span>
                  <span className="mt-3 block max-w-full break-words text-[clamp(1.08rem,5vw,1.32rem)] font-normal leading-[1.15] text-[#F4F1FA] lg:text-[clamp(1.25rem,1.55vw,1.75rem)]">
                    {valueByTitle[card.title] ?? card.value}
                  </span>
                </>
              );

              return (
                <div
                  key={card.title}
                  className={cn(
                    "relative text-center",
                    index < contactCards.length - 1 && "border-b border-white/30 sm:border-b-0",
                    index < contactCards.length - 2 && "sm:border-b sm:border-white/30 lg:border-b-0",
                  )}
                >
                  {index < contactCards.length - 1 && (
                    <span
                      className="pointer-events-none absolute right-0 top-1/2 hidden h-[68px] w-px -translate-y-1/2 bg-white/45 lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    aria-label={`${labelByTitle[card.title] ?? card.title} ${valueByTitle[card.title] ?? card.value}`}
                    className="group flex min-h-[142px] w-full flex-col items-center justify-center px-6 py-7 text-white transition-[background-color,box-shadow,color] duration-200 ease-out hover:bg-white/[0.045] hover:shadow-[inset_0_0_28px_rgba(255,255,255,0.035)] focus-visible:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpv-accent/70 focus-visible:ring-inset lg:min-h-[164px] lg:px-8 lg:py-8"
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
