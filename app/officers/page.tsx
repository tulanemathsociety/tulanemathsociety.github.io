import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { OfficerCard } from "@/components/OfficerCard";
import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { FadeIn } from "@/components/FadeIn";
import { officers } from "@/lib/officers";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Officers",
  description:
    "Meet the Tulane Math Club officers and faculty advisor. Get in touch about events, talks, or getting involved.",
};

export default function OfficersPage() {
  const exec = officers.filter((o) => !o.isAdvisor);
  const advisors = officers.filter((o) => o.isAdvisor);

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/40">
        <MathPatternBackground variant="graph" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The team"
            title="Officers & advisor"
            description="The students who keep the club running, and the faculty advisor who helps us along. Email any of us; we like getting emails."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exec.map((o, i) => (
            <FadeIn as="li" key={o.id} delay={i * 0.04}>
              <OfficerCard officer={o} />
            </FadeIn>
          ))}
        </ul>

        {advisors.length > 0 && (
          <div className="mt-14">
            <h2 className="font-serif text-2xl text-tulane-navy">
              Faculty advisor
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advisors.map((o) => (
                <li key={o.id}>
                  <OfficerCard officer={o} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-16 grid items-center gap-6  border border-tulane-warm-gray bg-tulane-cream/40 p-8 sm:p-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl text-tulane-navy sm:text-3xl">
              Want to help run an event?
            </h2>
            <p className="mt-3 text-tulane-charcoal/85">
              You don&apos;t have to be an officer to lead a problem-solving
              session, suggest a talk, or co-host a social with another club.
              Tell us what you have in mind. Small ideas are welcome.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href={LINKS.email}>
              Email us
            </Button>
            <Button href="/about" variant="outline">
              About the club
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
