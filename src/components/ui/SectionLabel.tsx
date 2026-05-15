import { cn } from "@/lib/utils";

export type SectionLabelProps = {
  children: React.ReactNode;
  withLine?: boolean;
  className?: string;
};

export function SectionLabel({
  children,
  withLine = true,
  className,
}: SectionLabelProps) {
  return (
    <p className={cn("tpv-kicker flex items-center gap-3", className)}>
      {withLine ? (
        <span className="h-px w-10 bg-gradient-to-r from-tpv-accent to-tpv-magenta" />
      ) : null}
      <span>{children}</span>
    </p>
  );
}
