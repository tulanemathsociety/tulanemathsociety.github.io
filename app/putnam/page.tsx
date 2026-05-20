import type { Metadata } from "next";
import {
  BookOpen,
  CalendarDays,
  Lightbulb,
  Archive,
  Users,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { FadeIn } from "@/components/FadeIn";
import { IntegrationBeeFeature } from "@/components/IntegrationBeeFeature";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Putnam & Competitions",
  description:
    "Friendly, beginner-welcoming Putnam preparation and team formation for the Mathematical Contest in Modeling (COMAP / MCM) at Tulane.",
};

const schedule = [
  { week: "Week 1", topic: "Welcome session — Putnam, demystified" },
  { week: "Week 2", topic: "Inequalities & clever substitutions" },
  { week: "Week 3", topic: "Combinatorics & counting tricks" },
  { week: "Week 4", topic: "Number theory: GCDs, mods, and Bezout" },
  { week: "Week 5", topic: "Functional equations" },
  { week: "Week 6", topic: "Mock Putnam (A session)" },
  { week: "Week 7", topic: "Generating functions" },
  { week: "Week 8", topic: "Mock Putnam (B session)" },
];

export default function PutnamPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, rgba(111,197,232,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(155,166,74,0.4), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-sky">
            Putnam & Competitions
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
            Competition math, treated as a puzzle — not a test.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Tulane Math Club&apos;s Putnam prep is open to everyone, regardless
            of background. We work through problems together, take it slow, and
            celebrate clever ideas — including the wrong ones.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#start-here" variant="secondary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Start here
            </Button>
            <Button
              href={LINKS.email}
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10"
            >
              Email the prep coordinator
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <IntegrationBeeFeature variant="ribbon" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2">
            <SectionHeader eyebrow="The basics" title="What is the Putnam?" />
            <div className="mt-6 space-y-4 text-tulane-charcoal/85">
              <p>
                The William Lowell Putnam Mathematical Competition is an annual
                six-hour exam taken by undergraduates across the United States
                and Canada. Twelve short problems, no calculators, lots of
                cleverness — and a long, weird tradition of being humbling for
                everyone, including future Fields medalists.
              </p>
              <p>
                You don&apos;t need to be a math major to take it, and you
                don&apos;t need to expect a high score to enjoy it. The Tulane
                Math Club Putnam Prep meets weekly to work through the kinds of
                problems and techniques that show up, in a small-group format
                that makes it easy to ask anything.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className=" border border-tulane-warm-gray bg-tulane-pale-green/50 p-6">
              <h3 className="font-serif text-xl text-tulane-navy">
                Quick facts
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-tulane-charcoal/85">
                <li>
                  <span className="font-semibold text-tulane-navy">When:</span>{" "}
                  First Saturday of December
                </li>
                <li>
                  <span className="font-semibold text-tulane-navy">Format:</span>{" "}
                  Two 3-hour sessions, 12 problems total
                </li>
                <li>
                  <span className="font-semibold text-tulane-navy">Who:</span>{" "}
                  Any Tulane undergraduate
                </li>
                <li>
                  <span className="font-semibold text-tulane-navy">Cost:</span>{" "}
                  Free — Tulane covers it
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        id="start-here"
        className="border-y border-tulane-warm-gray bg-tulane-cream/30"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Start here"
            title="If you've never done competition math before"
            description="A short on-ramp. Skim it, then come to a prep session."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Read one problem",
                body: "Pick any Putnam A1 from the past ten years. A1s are the friendliest. Try it for 20 minutes — no Googling.",
              },
              {
                icon: Lightbulb,
                title: "Don't aim to solve",
                body: "Aim to notice. Write down everything you observe about the problem. Ideas count more than answers.",
              },
              {
                icon: Users,
                title: "Come to a session",
                body: "Bring what you wrote. We'll work the problem together — and you'll already have something to contribute.",
              },
            ].map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <div className="h-full  border border-tulane-warm-gray bg-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center  bg-tulane-pale-green text-tulane-green">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-tulane-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-tulane-charcoal/80">
                    {s.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeader
              eyebrow="Fall semester"
              title="Weekly prep schedule"
              description="Topics rotate; mock Putnams give you a low-stakes run before the real thing."
            />
            <ol className="mt-8 space-y-3">
              {schedule.map((s) => (
                <li
                  key={s.week}
                  className="flex items-start gap-4  border border-tulane-warm-gray bg-white p-4"
                >
                  <span className="inline-flex h-9 min-w-[3.5rem] items-center justify-center  bg-tulane-pale-green px-2 text-xs font-semibold uppercase tracking-wide text-tulane-green">
                    {s.week}
                  </span>
                  <span className="pt-1.5 text-tulane-charcoal">{s.topic}</span>
                </li>
              ))}
            </ol>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn>
              <div className=" border border-tulane-green/30 bg-tulane-pale-green/60 p-6">
                <div className="flex items-center gap-2 text-tulane-green">
                  <Lightbulb className="h-5 w-5" aria-hidden />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                    Practice problem of the week
                  </p>
                </div>
                <p className="mt-4 font-serif text-lg text-tulane-navy">
                  Find all positive integers <em>n</em> such that{" "}
                  <em>n</em> divides <em>2ⁿ + 1</em>.
                </p>
                <p className="mt-3 text-sm text-tulane-charcoal/75">
                  Try it. Sketch a couple of small cases. Bring whatever you
                  find to the next prep session — even if it&apos;s a dead end.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className=" border border-tulane-warm-gray bg-white p-6">
                <div className="flex items-center gap-2 text-tulane-blue">
                  <Archive className="h-5 w-5" aria-hidden />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                    Past problem archive
                  </p>
                </div>
                <p className="mt-3 text-tulane-charcoal/85">
                  We&apos;re building a curated archive of past Putnam problems
                  organized by topic and difficulty, with hints rather than
                  full solutions. Coming soon.
                </p>
                <Button href="#" variant="outline" size="sm" className="mt-4">
                  Browse archive (coming soon)
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className=" border border-tulane-warm-gray bg-white p-6">
                <div className="flex items-center gap-2 text-tulane-blue">
                  <CalendarDays className="h-5 w-5" aria-hidden />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                    COMAP / MCM
                  </p>
                </div>
                <h3 className="mt-3 font-serif text-xl text-tulane-navy">
                  Mathematical Contest in Modeling
                </h3>
                <p className="mt-2 text-tulane-charcoal/85">
                  A weekend-long applied math competition. Teams of three pick
                  one open-ended real-world problem and write a paper. We help
                  form teams and host a mixer in October.
                </p>
                <Button href="/events" variant="outline" size="sm" className="mt-4">
                  Find a team
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
