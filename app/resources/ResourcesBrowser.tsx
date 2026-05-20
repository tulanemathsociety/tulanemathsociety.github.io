"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";
import { cn } from "@/lib/utils";
import type { Resource, ResourceCategory } from "@/lib/types";

const CATEGORIES: ("All" | ResourceCategory)[] = [
  "All",
  "Coursework",
  "Proofs",
  "LaTeX",
  "Putnam",
  "Research",
  "Grad School",
  "Careers",
  "Books",
];

export function ResourcesBrowser({ resources }: { resources: Resource[] }) {
  const [filter, setFilter] = React.useState<"All" | ResourceCategory>("All");
  const [query, setQuery] = React.useState("");

  const filtered = resources.filter((r) => {
    const matchesCategory = filter === "All" || r.category === filter;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">Search resources</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-tulane-charcoal/50"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources…"
            className="h-11 w-full rounded-full border border-tulane-warm-gray bg-white pl-10 pr-4 text-sm shadow-sm placeholder:text-tulane-charcoal/40 focus:border-tulane-green focus:outline-none"
          />
        </label>
      </div>

      <div
        role="tablist"
        aria-label="Filter resources by category"
        className="mt-6 flex flex-wrap gap-2"
      >
        {CATEGORIES.map((cat) => {
          const active = cat === filter;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                active
                  ? "border-tulane-green bg-tulane-green text-white"
                  : "border-tulane-warm-gray bg-white text-tulane-charcoal hover:border-tulane-green/40 hover:text-tulane-navy",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-tulane-warm-gray bg-tulane-cream/30 p-8 text-center text-tulane-charcoal/70">
          Nothing matches that yet. Try a different search or filter.
        </p>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <li key={r.id}>
              <ResourceCard resource={r} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
