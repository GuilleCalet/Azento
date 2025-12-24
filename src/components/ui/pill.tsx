import { cn } from "@/lib/utils";

type PillProps = {
  children: React.ReactNode;
  className?: string;
};

export const Pill = ({ children, className }: PillProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
};
