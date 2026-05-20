import * as React from "react";
import { cn } from "@/lib/utils";

type Tone =
  | "green"
  | "olive"
  | "blue"
  | "sky"
  | "navy"
  | "cream";

const tones: Record<Tone, string> = {
  green: "bg-tulane-pale-green text-tulane-green",
  olive: "bg-[#f3f5dd] text-[#5f6a1f]",
  blue: "bg-[#dff1f4] text-tulane-blue",
  sky: "bg-[#e3f4fb] text-tulane-blue",
  navy: "bg-[#e3e6ee] text-tulane-navy",
  cream: "bg-tulane-cream text-tulane-charcoal",
};

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({
  tone = "green",
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center  px-2.5 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export function categoryTone(category: string): Tone {
  switch (category) {
    case "Problem Solving":
      return "green";
    case "Putnam Prep":
      return "blue";
    case "Talk":
      return "navy";
    case "Social":
      return "olive";
    case "Career / Grad School":
      return "sky";
    default:
      return "cream";
  }
}
