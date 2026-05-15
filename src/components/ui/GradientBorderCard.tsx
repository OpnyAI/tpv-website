import { cn } from "@/lib/utils";

export type GradientBorderCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientBorderCard({
  children,
  className,
}: GradientBorderCardProps) {
  return (
    <div className={cn("tpv-gradient-border bg-tpv-card/75 p-6 shadow-card backdrop-blur-xl", className)}>
      {children}
    </div>
  );
}
