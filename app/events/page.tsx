import type { Metadata } from "next";
import { CalendarPlus } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { events } from "@/lib/events";
import { LINKS } from "@/lib/links";
import { EventsList } from "./EventsList";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Tulane Math Club events: problem solving, Putnam prep, talks, social events, and career panels.",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/40">
        <MathPatternBackground variant="graph" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Calendar"
            title="Upcoming events"
            description="Weekly problem-solving, Putnam prep, talks, and the occasional game night. Filter by category, or scroll the full list."
          />
          <Button href={LINKS.calendar} variant="outline" external>
            <CalendarPlus className="h-4 w-4" aria-hidden />
            Subscribe to calendar
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <EventsList events={events} />
      </section>
    </>
  );
}
