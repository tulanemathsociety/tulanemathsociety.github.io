import {
  Brain,
  Trophy,
  Mic,
  PartyPopper,
  Briefcase,
  Compass,
  ArrowRight,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { events } from "@/lib/events";

const whatWeDo = [
  {
    icon: Brain,
    title: "Weekly problem-solving nights",
    description:
      "Small groups, a stack of fun problems, and a whiteboard. The best way to meet the rest of the club.",
  },
  {
    icon: Trophy,
    title: "Putnam preparation",
    description:
      "Beginner-friendly weekly sessions. We treat the Putnam as a puzzle, not a gauntlet.",
  },
  {
    icon: Mic,
    title: "Undergraduate talks",
    description:
      "Students and faculty share favorite ideas in 15–30 minute talks. Pizza and questions follow.",
  },
  {
    icon: PartyPopper,
    title: "Social events",
    description:
      "Game nights, student–faculty lunches, and end-of-semester gatherings around the city.",
  },
  {
    icon: Briefcase,
    title: "Career & grad school panels",
    description:
      "REUs, graduate programs, and what alumni actually do — quant, data, software, research, teaching.",
  },
  {
    icon: Compass,
    title: "Peer advising & resources",
    description:
      "Course planning, LaTeX, proof writing, and a growing list of things-we-wish-we-knew-sooner.",
  },
];

export default function HomePage() {
  const upcoming = events.slice(0, 3);

  return (
    <>
      <Hero />

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="A welcoming math community at Tulane"
          description="Anyone curious about math is welcome — math majors, CS majors, physics, econ, biomedical, philosophy, undecided. Come for whichever of these sounds fun."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map((item, i) => (
            <FadeIn
              as="li"
              key={item.title}
              delay={i * 0.05}
              className="rounded-2xl border border-tulane-warm-gray bg-white p-6 transition-colors hover:border-tulane-green/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tulane-pale-green text-tulane-green">
                <item.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 font-serif text-xl text-tulane-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-tulane-charcoal/80">
                {item.description}
              </p>
            </FadeIn>
          ))}
        </ul>
      </section>

      {/* Upcoming events preview */}
      <section className="border-y border-tulane-warm-gray bg-tulane-cream/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Coming up"
              title="Upcoming events"
              description="A few things on the calendar. Drop in to any of them — no RSVP required, though it helps us plan snacks."
            />
            <Button href="/events" variant="outline" size="sm">
              View all events
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event, i) => (
              <FadeIn key={event.id} delay={i * 0.05}>
                <EventCard event={event} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* No formal process */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl border border-tulane-warm-gray bg-white p-8 sm:p-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
              How to join
            </p>
            <h2 className="mt-2 font-serif text-3xl leading-tight text-tulane-navy sm:text-4xl">
              No formal process to join — just show up.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-tulane-charcoal/85">
              There&apos;s no application, no dues, no test. Come to any
              meeting that sounds interesting, bring a friend, and you&apos;re
              a member. If you want a heads-up about events, hop on our
              mailing list.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/about">What to expect</Button>
              <Button href="/events" variant="outline">
                Next event
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              "Any major, any year",
              "No prior contest experience needed",
              "Show up to one event, or all of them",
              "Free, always",
              "Curious questions warmly welcomed",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-tulane-pale-green/60 px-4 py-3 text-tulane-navy"
              >
                <span
                  aria-hidden
                  className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-tulane-green"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </>
  );
}
