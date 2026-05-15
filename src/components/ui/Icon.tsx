export type IconName =
  | "phone"
  | "mail"
  | "arrow-up-right"
  | "menu"
  | "close"
  | "chevron-right"
  | "chevron-left"
  | "play"
  | "map-pin"
  | "instagram"
  | "linkedin"
  | "whatsapp"
  | "tiktok"
  | "x"
  | "video";

export type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className }: IconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true,
  };

  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...commonProps}>
          <path
            {...strokeProps}
            d="M6.6 4.8 8.7 4c.6-.2 1.2.1 1.5.7l1 2.4c.2.5.1 1.1-.3 1.5L9.8 9.8a10.4 10.4 0 0 0 4.4 4.4l1.2-1.1c.4-.4 1-.5 1.5-.3l2.4 1c.6.3.9.9.7 1.5l-.8 2.1c-.2.6-.8 1-1.4 1A13.2 13.2 0 0 1 5.2 5.6c0-.6.4-1.2 1.4-1.4Z"
          />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <path {...strokeProps} d="M4 6h16v12H4z" />
          <path {...strokeProps} d="m4 7 8 6 8-6" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg {...commonProps}>
          <path {...strokeProps} d="M7 17 17 7" />
          <path {...strokeProps} d="M9 7h8v8" />
        </svg>
      );
    case "menu":
      return (
        <svg {...commonProps}>
          <path {...strokeProps} d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...commonProps}>
          <path {...strokeProps} d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...commonProps}>
          <path {...strokeProps} d="m9 5 7 7-7 7" />
        </svg>
      );
    case "chevron-left":
      return (
        <svg {...commonProps}>
          <path {...strokeProps} d="m15 5-7 7 7 7" />
        </svg>
      );
    case "play":
      return (
        <svg {...commonProps}>
          <path
            d="M9 6.8v10.4c0 .7.8 1.1 1.4.7l7.4-5.2c.5-.4.5-1.1 0-1.5L10.4 6c-.6-.4-1.4 0-1.4.8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...commonProps}>
          <path
            {...strokeProps}
            d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Z"
          />
          <path {...strokeProps} d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect {...strokeProps} x="5" y="5" width="14" height="14" rx="4" />
          <path {...strokeProps} d="M15.2 11.4A3.2 3.2 0 1 1 12.6 8.8" />
          <path d="M16.4 7.8h.1" {...strokeProps} />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps}>
          <path {...strokeProps} d="M6.5 10v8M10.5 18v-4.5c0-2.3 1.4-3.6 3.3-3.6 1.8 0 3.2 1.2 3.2 3.8V18M10.5 10v8" />
          <path d="M6.5 7h.1" {...strokeProps} />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...commonProps}>
          <path
            {...strokeProps}
            d="M5.4 19 6.5 15.8A7.2 7.2 0 1 1 9 18.2L5.4 19Z"
          />
          <path
            {...strokeProps}
            d="M9.4 8.8c.2 3 2.7 5.4 5.8 5.8l1-1.3-1.7-1-1 .7c-1.1-.4-1.9-1.2-2.3-2.3l.7-1-1-1.7-1.5.8Z"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...commonProps}>
          <path
            {...strokeProps}
            d="M14 4v9.2a3.8 3.8 0 1 1-3.8-3.8h.6v3h-.6a.8.8 0 1 0 .8.8V4h3Z"
          />
          <path {...strokeProps} d="M14 6.8c1.1 1.6 2.5 2.4 4.4 2.5" />
        </svg>
      );
    case "x":
      return (
        <svg {...commonProps}>
          <path {...strokeProps} d="m6 5 12 14M18 5 6 19" />
        </svg>
      );
    case "video":
      return (
        <svg {...commonProps}>
          <path {...strokeProps} d="M4 7h11v10H4z" />
          <path {...strokeProps} d="m15 10 5-3v10l-5-3" />
        </svg>
      );
  }
}
