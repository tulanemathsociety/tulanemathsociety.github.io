import type { Metadata } from "next";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { resources } from "@/lib/resources";
import { ResourcesBrowser } from "./ResourcesBrowser";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Selected Tulane Math Club resources and academic links.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/40">
        <MathPatternBackground variant="graph" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
              For Tulane math students
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-tulane-navy sm:text-5xl">
              Resources
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tulane-charcoal/85">
              A concise set of academic links, references, and tools for Tulane
              students interested in mathematics.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ResourcesBrowser resources={resources} />
      </section>
    </>
  );
}
