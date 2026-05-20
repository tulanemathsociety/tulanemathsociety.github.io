import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Navbar lockup: official Tulane horizontal wordmark + "Math Club" subtitle.
 * Logo files live in /public/logos/.
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
        src="/logos/tulane-wordmark.svg"
        alt="Tulane University"
        width={247}
        height={84}
        priority
        className={cn(
          "h-8 w-auto sm:h-9",
          compact && "h-7 sm:h-8",
        )}
      />
      <span
        aria-hidden
        className="hidden h-7 w-px bg-tulane-warm-gray sm:block"
      />
      <span className="hidden font-serif text-lg tracking-wide text-tulane-green sm:inline">
        Math Club
      </span>
    </span>
  );
}
