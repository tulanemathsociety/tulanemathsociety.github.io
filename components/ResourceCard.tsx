import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import type { Resource } from "@/lib/types";
import { Badge } from "./Badge";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const isExternal = /^https?:/.test(resource.href);
  const isPlaceholder = resource.href === "#";

  return (
    <a
      href={resource.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-disabled={isPlaceholder || undefined}
      className="group flex h-full flex-col rounded-2xl border border-tulane-warm-gray bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-tulane-green/40 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <Badge tone="cream">{resource.category}</Badge>
        <ArrowUpRight
          className="h-4 w-4 text-tulane-green opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <h3 className="mt-3 font-serif text-lg text-tulane-navy">
        {resource.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-tulane-charcoal/80">
        {resource.description}
      </p>
      {isPlaceholder && (
        <p className="mt-3 text-xs italic text-tulane-charcoal/50">
          Link coming soon
        </p>
      )}
    </a>
  );
}
