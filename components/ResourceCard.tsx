import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Resource } from "@/lib/types";
import { Badge } from "./Badge";

interface ResourceCardProps {
  resource: Resource;
}

const cardClasses =
  "group flex h-full flex-col border border-tulane-warm-gray bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-tulane-green/40 hover:shadow-md";

export function ResourceCard({ resource }: ResourceCardProps) {
  const isExternal = /^https?:/.test(resource.href);
  const isPlaceholder = resource.href === "#";
  const isInternal = resource.href.startsWith("/");

  const inner = (
    <>
      <div className="flex items-center justify-between">
        <Badge tone="cream">{resource.category}</Badge>
        {isInternal ? (
          <ArrowRight
            className="h-4 w-4 text-tulane-green opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden
          />
        ) : (
          <ArrowUpRight
            className="h-4 w-4 text-tulane-green opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden
          />
        )}
      </div>
      <h3 className="mt-3 font-serif text-lg text-tulane-navy">
        {resource.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-tulane-charcoal/80">
        {resource.description}
      </p>
      {isInternal && !isPlaceholder && (
        <p className="mt-3 text-xs font-medium text-tulane-green">
          Open guide →
        </p>
      )}
      {isPlaceholder && (
        <p className="mt-3 text-xs italic text-tulane-charcoal/50">
          Link coming soon
        </p>
      )}
    </>
  );

  if (isInternal && !isPlaceholder) {
    return (
      <Link href={resource.href} className={cardClasses}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={resource.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-disabled={isPlaceholder || undefined}
      className={cardClasses}
    >
      {inner}
    </a>
  );
}
