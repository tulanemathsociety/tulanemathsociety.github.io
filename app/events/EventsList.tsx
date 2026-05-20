"use client";

import * as React from "react";
import { EventCard } from "@/components/EventCard";
import { cn } from "@/lib/utils";
import type { ClubEvent, EventCategory } from "@/lib/types";

const CATEGORIES: ("All" | EventCategory)[] = [
  "All",
  "Problem Solving",
  "Putnam Prep",
  "Talk",
  "Social",
  "Career / Grad School",
];

interface EventsListProps {
  events: ClubEvent[];
}

export function EventsList({ events }: EventsListProps) {
  const [filter, setFilter] = React.useState<"All" | EventCategory>("All");

  const filtered =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter events by category"
        className="flex flex-wrap gap-2"
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
                " border px-3.5 py-1.5 text-sm font-medium transition-colors",
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
        <p className="mt-10  border border-dashed border-tulane-warm-gray bg-tulane-cream/30 p-8 text-center text-tulane-charcoal/70">
          No events in this category yet. Check back soon, or{" "}
          <a
            href="mailto:mathclub@tulane.edu"
            className="font-medium text-tulane-green underline"
          >
            suggest one
          </a>
          .
        </p>
      ) : (
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <li key={event.id}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
