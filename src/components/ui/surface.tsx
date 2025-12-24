import { cn } from "@/lib/utils";
import React from "react";

type SurfaceProps = {
  children: React.ReactNode;
  className?: string;
};

const Surface = ({ children, className }: SurfaceProps) => {
  return (
    <div
      className={cn(
        "rounded-[18px] border border-border/70 bg-card/90 shadow-soft backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Surface;
