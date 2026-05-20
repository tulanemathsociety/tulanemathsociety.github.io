import {
  Brain,
  Trophy,
  Mic,
  PartyPopper,
  Briefcase,
  Compass,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/EventCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { IntegrationBeeFeature } from "@/components/IntegrationBeeFeature";
import { Badge } from "@/components/Badge";
import { events } from "@/lib/events";
import { getCurrentPuzzle } from "@/lib/puzzles";
import { formatEventDate } from "@/lib/date";

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
      "REUs, graduate programs, and what alumni actually do: quant, data, software, research, teaching.",
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
  const currentPuzzle = getCurrentPuzzle();

  return (
    <>
      <Hero />

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="A welcoming math community at Tulane"
          description="Anyone curious about math is welcome: math majors, CS majors, physics, econ, biomedical, philosophy, undecided. Come for whichever of these sounds fun."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map((item, i) => (
            <FadeIn
              as="li"
              key={item.title}
              delay={i * 0.05}
              className=" border border-tulane-warm-gray bg-white p-6 transition-colors hover:border-tulane-green/40"
            >
              <div className="flex h-11 w-11 items-center justify-center  bg-tulane-pale-green text-tulane-green">
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

      {/* Featured event spotlight */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <IntegrationBeeFeature variant="spotlight" />
      </section>

      {/* Upcoming events preview */}
      <section className="border-y border-tulane-warm-gray bg-tulane-cream/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Coming up"
              title="Upcoming events"
              description="A few things on the calendar. Drop in to any of them. No RSVP required, though it helps us plan snacks."
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

      {/* Weekly puzzle teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative isolate overflow-hidden  border border-tulane-warm-gray bg-white shadow-sm">
            <div
              aria-hidden
              className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-br from-tulane-pale-green/50 via-white to-white md:block"
            />
            <div className="relative grid gap-8 px-6 py-10 sm:px-10 sm:py-12 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="inline-flex items-center gap-2  border border-tulane-green/30 bg-tulane-pale-green/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-tulane-green">
                  <Lightbulb className="h-3.5 w-3.5" aria-hidden />
                  Puzzle of the week · #{currentPuzzle.week}
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-tulane-navy sm:text-4xl">
                  {currentPuzzle.title}
                </h2>
                <p className="mt-4 max-w-xl text-tulane-charcoal/85">
                  {currentPuzzle.statement}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button href="/puzzle">
                    See the puzzle
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                  <Badge tone="cream">{currentPuzzle.difficulty}</Badge>
                  {currentPuzzle.deadline && (
                    <span className="text-sm text-tulane-charcoal/65">
                      Solutions due {formatEventDate(currentPuzzle.deadline)}
                    </span>
                  )}
                </div>
              </div>
              <div className="md:col-span-5 md:flex md:items-center md:justify-center">
                <PuzzleSigil />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* No formal process */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10  border border-tulane-warm-gray bg-white p-8 sm:p-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
              How to join
            </p>
            <h2 className="mt-2 font-serif text-3xl leading-tight text-tulane-navy sm:text-4xl">
              No formal process to join. Just show up.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-tulane-charcoal/85">
              There&apos;s no application, no dues, no test. Come to any
              meeting that sounds interesting, bring a friend, and you&apos;re
              a member. Email us if you want a heads-up about upcoming events.
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
                className="flex items-start gap-3  bg-tulane-pale-green/60 px-4 py-3 text-tulane-navy"
              >
                <span
                  aria-hidden
                  className="mt-1 inline-block h-1.5 w-1.5 shrink-0  bg-tulane-green"
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

function PuzzleSigil() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 280 220"
      className="h-40 w-full max-w-xs sm:h-48"
    >
      <defs>
        <linearGradient id="puzzleSigil" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#255C4E" />
          <stop offset="100%" stopColor="#138094" />
        </linearGradient>
      </defs>
      <g stroke="rgba(37,92,78,0.12)" strokeWidth="1">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`v-${i}`} x1={40 + i * 40} y1="20" x2={40 + i * 40} y2="200" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h-${i}`} x1="20" y1={40 + i * 40} x2="260" y2={40 + i * 40} />
        ))}
      </g>
      <text
        x="140"
        y="140"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="110"
        fill="url(#puzzleSigil)"
        fillOpacity="0.95"
        style={{ fontStyle: "italic" }}
      >
        ?
      </text>
      <text
        x="60"
        y="60"
        fontFamily="Georgia, serif"
        fontSize="20"
        fill="#001B3F"
        fillOpacity="0.55"
      >
        ∑
      </text>
      <text
        x="225"
        y="180"
        fontFamily="Georgia, serif"
        fontSize="20"
        fill="#001B3F"
        fillOpacity="0.55"
      >
        π
      </text>
      <text
        x="220"
        y="60"
        fontFamily="Georgia, serif"
        fontSize="18"
        fill="#001B3F"
        fillOpacity="0.45"
      >
        ∫
      </text>
      <text
        x="50"
        y="190"
        fontFamily="Georgia, serif"
        fontSize="18"
        fill="#001B3F"
        fillOpacity="0.45"
      >
        ζ
      </text>
    </svg>
  );
}
