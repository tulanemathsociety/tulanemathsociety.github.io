import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Weekly Puzzle",
  description:
    "Weekly puzzle page for Tulane Math Club. The first puzzle has not yet been posted.",
};

export default function PuzzlePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/50">
        <MathPatternBackground variant="graph" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
            Weekly puzzle
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-tulane-navy sm:text-5xl">
            No puzzle has been posted yet.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tulane-charcoal/85">
            The weekly puzzle series has not yet begun. The first problem will
            be posted here once the series is launched.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="border border-tulane-warm-gray bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-tulane-navy">
            Weekly puzzle series
          </h2>
          <p className="mt-3 leading-relaxed text-tulane-charcoal/80">
            This page will eventually contain the current puzzle together with
            an archive of earlier problems and solutions.
          </p>
          <p className="mt-3 leading-relaxed text-tulane-charcoal/80">
            For current updates, please use the GroupMe or contact the club by
            email.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={LINKS.groupme} external>
              Join the GroupMe
            </Button>
            <Button href={LINKS.email} variant="outline">
              Email us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
