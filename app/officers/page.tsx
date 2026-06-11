import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { OfficerCard } from "@/components/OfficerCard";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { FadeIn } from "@/components/FadeIn";
import { officers } from "@/lib/officers";

export const metadata: Metadata = {
  title: "Officers",
  description:
    "Current Tulane Math Club officers and faculty advisor, with contact information.",
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
            titleAs="h1"
            description="Current club officers and faculty advisor. Contact any officer with questions about meetings or programming."
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
      </section>
    </>
  );
}
