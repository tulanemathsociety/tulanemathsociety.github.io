import * as React from "react";
import { Lightbulb, Send, Users } from "lucide-react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { formatEventDate } from "@/lib/date";
import type { Puzzle, Difficulty } from "@/lib/puzzles";
import { LINKS } from "@/lib/links";

type Tone = "green" | "olive" | "blue" | "navy";
const difficultyTone: Record<Difficulty, Tone> = {
  "Warm-up": "green",
  Standard: "blue",
  Tricky: "navy",
};

interface PuzzleCardProps {
  puzzle: Puzzle;
  variant?: "current" | "archive";
}

export function PuzzleCard({ puzzle, variant = "archive" }: PuzzleCardProps) {
  const isCurrent = variant === "current";

  return (
    <article
      className={
        isCurrent
          ? " border border-tulane-green/20 bg-white p-6 shadow-md sm:p-8"
          : " border border-tulane-warm-gray bg-white p-6"
      }
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="cream">Week {puzzle.week}</Badge>
        <Badge tone={difficultyTone[puzzle.difficulty]}>
          {puzzle.difficulty}
        </Badge>
        <span className="text-xs text-tulane-charcoal/60">
          Released {formatEventDate(puzzle.releasedOn)}
          {puzzle.deadline ? ` · Solutions due ${formatEventDate(puzzle.deadline)}` : ""}
        </span>
      </div>

      <h3
        className={
          isCurrent
            ? "mt-4 font-serif text-3xl leading-tight text-tulane-navy sm:text-4xl"
            : "mt-3 font-serif text-xl text-tulane-navy"
        }
      >
        {puzzle.title}
      </h3>

      <p
        className={
          isCurrent
            ? "mt-4 text-base leading-relaxed text-tulane-charcoal/90 sm:text-lg"
            : "mt-3 text-sm leading-relaxed text-tulane-charcoal/85"
        }
      >
        {puzzle.statement}
      </p>

      {puzzle.hint && (
        <details className="group mt-5  border border-tulane-warm-gray bg-tulane-pale-green/40 p-4">
          <summary className="flex cursor-pointer items-center gap-2 text-sm font-medium text-tulane-green">
            <Lightbulb className="h-4 w-4" aria-hidden />
            Show a hint
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-tulane-charcoal/85">
            {puzzle.hint}
          </p>
        </details>
      )}

      {puzzle.solution && (
        <details className="group mt-3  border border-tulane-warm-gray bg-tulane-cream/50 p-4">
          <summary className="cursor-pointer text-sm font-medium text-tulane-navy">
            Show the solution
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-tulane-charcoal/85">
            {puzzle.solution}
          </p>
        </details>
      )}

      {isCurrent && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button href={LINKS.email}>
            <Send className="h-4 w-4" aria-hidden />
            Email a solution
          </Button>
          <span className="text-sm text-tulane-charcoal/65">
            Or bring it to the next meeting. Both count.
          </span>
        </div>
      )}

      {puzzle.solvers && puzzle.solvers.length > 0 && (
        <div className="mt-5 flex items-start gap-2  bg-tulane-warm-gray/50 px-3 py-2 text-xs text-tulane-charcoal/85">
          <Users
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-tulane-green"
            aria-hidden
          />
          <p>
            <span className="font-semibold text-tulane-navy">Solvers:</span>{" "}
            {puzzle.solvers.join(", ")}
          </p>
        </div>
      )}
    </article>
  );
}
