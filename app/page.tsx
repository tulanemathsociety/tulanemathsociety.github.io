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

const whatWeDo = [
  {
    icon: Brain,
    title: "Weekly problem-solving nights",
    description:
      "Weekly collaborative sessions centered on mathematical problem solving.",
  },
  {
    icon: Trophy,
    title: "Putnam preparation",
    description:
      "Regular preparation sessions for students interested in the Putnam Competition.",
  },
  {
    icon: Mic,
    title: "Undergraduate talks",
    description:
      "Short talks by students and faculty on mathematical topics of broad interest.",
  },
  {
    icon: PartyPopper,
    title: "Social events",
    description:
      "Community events that bring together students, faculty, and prospective members.",
  },
  {
    icon: Briefcase,
    title: "Career & grad school panels",
    description:
      "Panels and advising related to research opportunities, graduate study, and careers.",
  },
  {
    icon: Compass,
    title: "Peer advising & resources",
    description:
      "Guidance on coursework, proof writing, LaTeX, and related academic resources.",
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
              <span className="font-semibold text-tulane-navy">Notice:</span>{" "}
              the regular meeting time for the semester has not yet been
              finalized. Please email the club for the latest schedule
              information.
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
          title="Mathematical programming for Tulane undergraduates"
          description="The club offers regular academic and community programming for students interested in mathematics, including majors, non-majors, and students from related fields."
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

      {/* Weekly puzzle teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl border border-tulane-warm-gray bg-white p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
              Weekly puzzle
            </p>
            <h2 className="mt-2 font-serif text-3xl text-tulane-navy sm:text-4xl">
              Launching soon
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-tulane-charcoal/85">
              The weekly puzzle series has not yet begun. Future puzzles and
              solutions will be published on the puzzle page.
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
