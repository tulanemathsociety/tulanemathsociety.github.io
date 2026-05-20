import * as React from "react";
import { Mail } from "lucide-react";
import type { Officer } from "@/lib/types";
import { Badge } from "./Badge";

interface OfficerCardProps {
  officer: Officer;
}

export function OfficerCard({ officer }: OfficerCardProps) {
  return (
    <article className="flex h-full flex-col  border border-tulane-warm-gray bg-white p-5 shadow-sm transition-all duration-200 hover:border-tulane-green/40 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div
          aria-hidden
          className="flex h-14 w-14 shrink-0 items-center justify-center  bg-tulane-green font-serif text-lg text-white"
        >
          {officer.initials}
        </div>
        <div className="min-w-0">
          <h3 className="font-serif text-lg text-tulane-navy">
            {officer.name}
          </h3>
          <Badge
            tone={officer.isAdvisor ? "navy" : "green"}
            className="mt-1"
          >
            {officer.role}
          </Badge>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-tulane-charcoal/80">
        {officer.bio}
      </p>
      <div className="mt-auto pt-4">
        <a
          href={`mailto:${officer.email}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-tulane-green hover:text-tulane-secondary-green"
        >
          <Mail className="h-4 w-4" aria-hidden />
          {officer.email}
        </a>
      </div>
    </article>
  );
}
