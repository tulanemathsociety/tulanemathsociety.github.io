import type { Metadata } from "next";
import { Sparkles, Send, Compass } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { PuzzleCard } from "@/components/PuzzleCard";
import { FadeIn } from "@/components/FadeIn";
import { getCurrentPuzzle, getPastPuzzles } from "@/lib/puzzles";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Weekly Puzzle",
  description:
    "A new mathematical puzzle every week from the Tulane Math Club. Send in your solution; past puzzles and solutions live in the archive.",
};

export default function PuzzlePage() {
  const current = getCurrentPuzzle();
  const archive = getPastPuzzles();

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/50">
        <MathPatternBackground variant="graph" />
        <MathPatternBackground variant="equations" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2  border border-tulane-green/30 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-tulane-green">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Updated weekly
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-tulane-navy sm:text-5xl">
            The Weekly Puzzle
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-tulane-charcoal/85">
            One mathematical puzzle, every Tuesday. Send in your solution by
            email, drop by a meeting, or just enjoy it on your own. Past
            puzzles and solutions are below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
          This week
        </p>
        <div className="mt-4">
          <PuzzleCard puzzle={current} variant="current" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <FadeIn>
            <div className=" border border-tulane-warm-gray bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center  bg-tulane-pale-green text-tulane-green">
                <Compass className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="mt-4 font-serif text-xl text-tulane-navy">
                How it works
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-tulane-charcoal/85">
                A new puzzle appears here each Tuesday. They&apos;re chosen to
                be approachable with pen and paper, no special background
                required. Try the hint first; the solution gets posted with
                the next week&apos;s puzzle.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className=" border border-tulane-warm-gray bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center  bg-tulane-pale-green text-tulane-green">
                <Send className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="mt-4 font-serif text-xl text-tulane-navy">
                How to submit
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-tulane-charcoal/85">
                Email us your solution before the deadline, or bring it to
                the next meeting. We love elegant solutions, but partial
                credit is real, and so is &quot;here&apos;s where I got
                stuck.&quot;
              </p>
              <Button
                href={LINKS.email}
                variant="outline"
                size="sm"
                className="mt-4"
              >
                <Send className="h-4 w-4" aria-hidden />
                Email a solution
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className=" border border-tulane-green/30 bg-tulane-pale-green/60 p-6">
              <div className="flex h-11 w-11 items-center justify-center  bg-white text-tulane-green">
                <Sparkles className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="mt-4 font-serif text-xl text-tulane-navy">
                Suggest a puzzle
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-tulane-charcoal/85">
                Got a favorite problem you&apos;d like to share? We&apos;re
                always taking suggestions. We credit the submitter.
              </p>
              <Button href={LINKS.email} size="sm" className="mt-4">
                Send a puzzle
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {archive.length > 0 && (
        <section className="border-t border-tulane-warm-gray bg-tulane-cream/30">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Archive"
              title="Past puzzles & solutions"
              description="Tap a card to reveal the hint or the full solution. Solvers are listed with permission."
            />
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {archive.map((p, i) => (
                <FadeIn as="li" key={p.id} delay={i * 0.05}>
                  <PuzzleCard puzzle={p} variant="archive" />
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
