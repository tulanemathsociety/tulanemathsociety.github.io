import {
  Brain,
  Trophy,
  Mic,
  Users,
  Briefcase,
  Clock,
  FileText,
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
    title: "Problem-solving sessions",
    description:
      "Regular meetings centered on collaborative work at the board.",
  },
  {
    icon: Trophy,
    title: "Putnam preparation",
    description:
      "Collaborative preparation for students interested in the Putnam Mathematical Competition.",
  },
  {
    icon: Mic,
    title: "Student and faculty talks",
    description:
      "Short presentations on pure and applied topics, research interests, and elegant arguments.",
  },
  {
    icon: Users,
    title: "Department community",
    description:
      "Occasional lunches and conversations with students and faculty across the department.",
  },
  {
    icon: Briefcase,
    title: "Academic and professional guidance",
    description:
      "Shared information about courses, REUs, graduate study, and related opportunities.",
  },
  {
    icon: FileText,
    title: "Writing and technical resources",
    description:
      "References on proof writing, LaTeX, and other tools useful in upper-level coursework.",
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
              the regular meeting schedule for Fall 2026 is still being
              finalized. Updates will be posted through the GroupMe.
            </span>
          </p>
          <a
            href={LINKS.groupme}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start text-sm font-medium text-tulane-green hover:text-tulane-secondary-green sm:self-auto"
          >
            Join the GroupMe →
          </a>
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="An undergraduate mathematics community at Tulane"
          description="The club organizes problem-solving sessions, Putnam preparation, talks, and shared academic resources for students interested in mathematics."
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
              Not yet launched
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-tulane-charcoal/85">
              The weekly puzzle series has not yet begun. When the first puzzle
              is posted, it will appear on the puzzle page.
            </p>
            <Button href="/puzzle" variant="outline" className="mt-6">
              View puzzle page
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
