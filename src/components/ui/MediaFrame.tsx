import { cn } from "@/lib/utils";

export type MediaFrameProps = {
  children: React.ReactNode;
  aspectRatio?: "video" | "square" | "wide" | "auto";
  className?: string;
};

const aspectRatioClasses: Record<NonNullable<MediaFrameProps["aspectRatio"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  auto: "",
};

export function MediaFrame({
  children,
  aspectRatio = "auto",
  className,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "tpv-gradient-border overflow-hidden rounded-4xl bg-tpv-deep shadow-glowSoft",
        aspectRatioClasses[aspectRatio],
        className,
      )}
    >
      {children}
    </div>
  );
}
