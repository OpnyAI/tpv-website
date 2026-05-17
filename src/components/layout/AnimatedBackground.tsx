import { cn } from "@/lib/utils";

export type AnimatedBackgroundProps = {
  variant?: "image" | "video" | "none";
  intensity?: "low" | "medium" | "high";
  className?: string;
};

const intensityClasses: Record<NonNullable<AnimatedBackgroundProps["intensity"]>, string> = {
  low: "opacity-35",
  medium: "opacity-55",
  high: "opacity-75",
};

export function AnimatedBackground({
  variant = "image",
  intensity = "medium",
  className,
}: AnimatedBackgroundProps) {
  if (variant === "none") {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-tpv-dark",
        className,
      )}
      aria-hidden="true"
    >
      {variant === "video" ? (
        <video
          className={cn(
            "hidden h-full w-full object-cover mix-blend-screen md:block",
            intensityClasses[intensity],
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/video-posters/tpv-background-lines-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/backgrounds/tpv-background-lines.mp4" type="video/mp4" />
        </video>
      ) : null}

      <div
        className={cn(
          "absolute inset-0 bg-[url('/images/backgrounds/tpv-background-lines.png')] bg-cover bg-center md:mix-blend-screen",
          variant === "video" ? "md:hidden" : "",
          intensityClasses[intensity],
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-tpv-deep/90 via-tpv-dark/86 to-tpv-deep" />
      <div className="absolute -left-24 top-20 hidden h-72 w-72 rounded-full bg-tpv-magenta/20 blur-3xl md:block" />
      <div className="absolute right-0 top-1/3 hidden h-96 w-96 rounded-full bg-tpv-violet/18 blur-3xl md:block" />
      <div className="absolute bottom-0 left-1/2 hidden h-80 w-80 -translate-x-1/2 rounded-full bg-tpv-accent/12 blur-3xl md:block" />
    </div>
  );
}
