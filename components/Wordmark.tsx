import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Tulane Math Club wordmark.
 *
 * NOTE: This is an unofficial text-based wordmark created for this site.
 * Official Tulane marks (shield, seal, "Angry Wave", athletics logos)
 * require approval from Tulane's licensing/brand offices and are NOT
 * used here. Replace this component if and when approved assets land.
 */
export function Wordmark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span
      aria-label="Tulane Math Club"
      className={cn(
        "inline-flex items-center gap-2 font-serif leading-none text-tulane-navy",
        className,
      )}
    >
      <span
        aria-hidden
        className="flex h-9 w-9 items-center justify-center rounded-full bg-tulane-green text-base font-semibold text-white"
      >
        Σ
      </span>
      <span className="flex flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-tulane-green">
          Tulane
        </span>
        <span
          className={cn(
            "font-serif text-lg text-tulane-navy",
            compact ? "tracking-tight" : "tracking-wide",
          )}
        >
          Math Club
        </span>
      </span>
    </span>
  );
}
