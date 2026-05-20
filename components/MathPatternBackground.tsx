import * as React from "react";
import { cn } from "@/lib/utils";

interface MathPatternBackgroundProps {
  variant?: "graph" | "equations" | "soft";
  className?: string;
}

/**
 * Decorative background patterns for the math-club visual language.
 * - "graph": faint graph-paper grid (Tulane green at low opacity)
 * - "equations": scattered LaTeX-ish equation glyphs
 * - "soft": a soft pale-green wash
 *
 * All variants are decorative and marked aria-hidden.
 */
export function MathPatternBackground({
  variant = "graph",
  className,
}: MathPatternBackgroundProps) {
  if (variant === "graph") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-graph-paper bg-graph-md opacity-70",
          className,
        )}
      />
    );
  }

  if (variant === "soft") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-b from-tulane-pale-green/60 via-white to-white",
          className,
        )}
      />
    );
  }

  // equations variant
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <span className="absolute left-[6%] top-[12%] font-serif text-2xl text-tulane-green/15 sm:text-3xl">
        e^(iπ) + 1 = 0
      </span>
      <span className="absolute right-[8%] top-[20%] font-serif text-xl text-tulane-blue/15 sm:text-2xl">
        ∑ 1/n²= π²/6
      </span>
      <span className="absolute left-[12%] bottom-[18%] font-serif text-2xl text-tulane-olive/20 sm:text-3xl">
        ∫ e^(-x²) dx
      </span>
      <span className="absolute right-[14%] bottom-[10%] font-serif text-xl text-tulane-navy/15 sm:text-2xl">
        ζ(s) = Σ 1/nˢ
      </span>
      <span className="absolute left-[40%] top-[8%] font-serif text-lg text-tulane-secondary-green/20 sm:text-xl">
        a² + b² = c²
      </span>
      <span className="absolute right-[36%] bottom-[28%] font-serif text-lg text-tulane-blue/15 sm:text-xl">
        ∇ × F = 0
      </span>
    </div>
  );
}
