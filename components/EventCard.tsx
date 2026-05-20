import * as React from "react";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import type { ClubEvent } from "@/lib/types";
import { formatEventDate, shortMonth, dayOfMonth } from "@/lib/date";
import { Badge, categoryTone } from "./Badge";

interface EventCardProps {
  event: ClubEvent;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group flex h-full flex-col  border border-tulane-warm-gray bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-tulane-green/40 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div
          className="flex h-16 w-16 shrink-0 flex-col items-center justify-center  bg-tulane-pale-green text-tulane-green"
          aria-hidden
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest">
            {shortMonth(event.date)}
          </span>
          <span className="font-serif text-2xl leading-none">
            {dayOfMonth(event.date)}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone={categoryTone(event.category)}>{event.category}</Badge>
            {event.tentative && (
              <span className="inline-flex items-center border border-tulane-olive/50 bg-tulane-olive/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-tulane-olive">
                Tentative
              </span>
            )}
          </div>
          <h3 className="mt-2 font-serif text-xl leading-snug text-tulane-navy">
            {event.title}
          </h3>
          <p className="sr-only">{formatEventDate(event.date)}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-tulane-charcoal/80">
        {event.description}
      </p>

      <dl className="mt-4 space-y-1.5 text-sm text-tulane-charcoal/80">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-tulane-green" aria-hidden />
          <dt className="sr-only">Time</dt>
          <dd>{event.time}</dd>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-tulane-green" aria-hidden />
          <dt className="sr-only">Location</dt>
          <dd>{event.location}</dd>
        </div>
      </dl>

      <div className="mt-5 pt-4 border-t border-tulane-warm-gray/70">
        <a
          href={event.rsvpUrl}
          className="inline-flex items-center gap-1 text-sm font-medium text-tulane-green hover:text-tulane-secondary-green"
        >
          RSVP / Get details
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </a>
      </div>
    </article>
  );
}
