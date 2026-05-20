import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { resources } from "@/lib/resources";
import { ResourcesBrowser } from "./ResourcesBrowser";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "A growing library of Tulane Math Club resources: course planning, proof writing, LaTeX, Putnam archive, REUs, grad school advice, careers, and books.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/40">
        <MathPatternBackground variant="graph" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="For Tulane math students"
            title="Resources"
            description="Things we keep recommending: course planning, proof writing, LaTeX, REUs, grad school, and more. Curated by students, updated as we go."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ResourcesBrowser resources={resources} />
      </section>
    </>
  );
}
