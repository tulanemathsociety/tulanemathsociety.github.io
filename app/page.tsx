import {
  Brain,
  Trophy,
  Mic,
  PartyPopper,
  Briefcase,
  Compass,
  Clock,
} from "lucide-react";
import { LINKS } from "@/lib/links";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { IntegrationBeeFeature } from "@/components/IntegrationBeeFeature";

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
  return (
    <>
      <Hero />

      {/* Meeting time notice */}
      <section className="border-b border-tulane-warm-gray bg-tulane-cream/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="flex items-start gap-3 text-sm text-tulane-charcoal">
            <Clock
              className="mt-0.5 h-4 w-4 shrink-0 text-tulane-green"
              aria-hidden
            />
            <span>
              <span className="font-semibold text-tulane-navy">Heads up:</span>{" "}
              our weekly meeting time is still being decided for the semester.
              Email us and we&apos;ll let you know as soon as it&apos;s set.
            </span>
          </p>
          <a
            href={LINKS.email}
            className="self-start text-sm font-medium text-tulane-green hover:text-tulane-secondary-green sm:self-auto"
          >
            Email us →
          </a>
        </div>
      </section>

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

      {/* Weekly puzzle teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl border border-tulane-warm-gray bg-white p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
              Weekly puzzle
            </p>
            <h2 className="mt-2 font-serif text-3xl text-tulane-navy sm:text-4xl">
              Coming soon
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-tulane-charcoal/85">
              We have not posted the first weekly puzzle yet. When it is ready,
              it will live on the puzzle page.
            </p>
            <Button href="/puzzle" variant="outline" className="mt-6">
              Puzzle page
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </>
  );
}
