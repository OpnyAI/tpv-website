import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type GradientButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
  trackingEvent?: string;
  trackingLabel?: string;
};

function isInternalHref(href: string): boolean {
  return href.startsWith("/") || href.startsWith("#");
}

export function GradientButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  trackingEvent,
  trackingLabel,
}: GradientButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpv-accent focus-visible:ring-offset-2 focus-visible:ring-offset-tpv-dark",
    "hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-5 py-3 text-[length:var(--text-nav)]",
    size === "lg" && "px-7 py-4 text-[length:var(--text-body)]",
    variant === "primary" &&
      "bg-gradient-to-r from-tpv-violet via-tpv-magenta to-tpv-accent shadow-glowSoft",
    variant === "outline" &&
      "border border-tpv-magenta/60 bg-white/[0.03] shadow-glowSoft backdrop-blur-xl",
    variant === "ghost" && "bg-white/[0.04] hover:bg-white/[0.08]",
    className,
  );

  const trackingAttributes = {
    "data-track-event": trackingEvent,
    "data-track-label": trackingLabel,
  };

  if (href) {
    if (isInternalHref(href)) {
      return (
        <Link
          href={href}
          aria-label={ariaLabel}
          className={classes}
          {...trackingAttributes}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...trackingAttributes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={classes}
      onClick={onClick}
      {...trackingAttributes}
    >
      {children}
    </button>
  );
}
