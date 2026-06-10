import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Weekly Puzzle",
  description:
    "Tulane Math Club's weekly puzzle page. The first puzzle has not been posted yet.",
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
            Nothing is posted yet.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tulane-charcoal/85">
            We have not launched the weekly puzzle yet. When the first one is
            ready, it will appear here.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="border border-tulane-warm-gray bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-tulane-navy">
            Weekly puzzle coming soon
          </h2>
          <p className="mt-3 leading-relaxed text-tulane-charcoal/80">
            Once the puzzle series starts, this page will hold the current
            puzzle and later an archive of older ones.
          </p>
          <p className="mt-3 leading-relaxed text-tulane-charcoal/80">
            For now, the best place for updates is the GroupMe or the club
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
