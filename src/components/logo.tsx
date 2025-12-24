import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-serif text-xl font-semibold tracking-tight text-foreground",
        className
      )}
      aria-label="AZento Home"
    >
      <span className="rounded-sm bg-foreground px-2 py-1 text-xs uppercase tracking-[0.18em] text-background">
        AZ
      </span>
      <span className="leading-none">ento Home</span>
    </Link>
  );
};

export default Logo;
