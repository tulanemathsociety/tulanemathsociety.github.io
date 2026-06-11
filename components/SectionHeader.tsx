import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleAs = "h2",
}: SectionHeaderProps) {
  const TitleTag = titleAs;

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
          {eyebrow}
        </p>
      )}
      <TitleTag className="font-serif text-3xl leading-tight text-tulane-navy sm:text-4xl">
        {title}
      </TitleTag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-tulane-charcoal/80 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
