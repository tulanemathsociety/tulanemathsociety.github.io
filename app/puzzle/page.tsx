import type { Metadata } from "next";
import { MathPatternBackground } from "@/components/MathPatternBackground";

export const metadata: Metadata = {
  title: "Weekly Puzzle",
  description:
    "Tulane Math Club weekly puzzle page. The series has not yet begun.",
};

export default function PuzzlePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/50">
        <MathPatternBackground variant="graph" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
              Weekly puzzle
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-tulane-navy sm:text-5xl">
              The weekly puzzle series has not yet begun.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tulane-charcoal/85">
              When the series launches, the current problem will appear here.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl border border-tulane-warm-gray bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-tulane-navy">
            No puzzle is currently posted
          </h2>
          <p className="mt-3 leading-relaxed text-tulane-charcoal/80">
            This page is being kept in place for the first weekly puzzle.
          </p>
          <p className="mt-3 leading-relaxed text-tulane-charcoal/80">
            Once the series begins, this page will also hold an archive of past
            problems.
          </p>
        </div>
      </section>
    </>
  );
}
