import { Pill } from "./ui/pill";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

const SectionHeader = ({
  eyebrow,
  title,
  description,
  className,
  align = "left"
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "",
        className
      )}
    >
      {eyebrow ? <Pill>{eyebrow}</Pill> : null}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
