import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Navbar lockup: Tulane Math Club shield mark + serif wordmark.
 * The PNG mark lives in /public/logos/math-club-mark.png.
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
        "inline-flex items-center gap-3 leading-none",
        className,
      )}
    >
      <Image
        src="/logos/math-club-mark.png"
        alt=""
        width={256}
        height={256}
        priority
        className={cn(
          "h-10 w-10 sm:h-11 sm:w-11",
          compact && "h-9 w-9 sm:h-10 sm:w-10",
        )}
      />
      <span className="flex flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-tulane-green">
          Tulane
        </span>
        <span className="font-serif text-lg tracking-wide text-tulane-navy">
          Math Club
        </span>
      </span>
    </span>
  );
}
