// Edit this file weekly to rotate the puzzle.
// The first item in `puzzles` is treated as the current week; the rest go into the archive.

export type Difficulty = "Warm-up" | "Standard" | "Tricky";

export interface Puzzle {
  id: string;
  week: number;
  releasedOn: string; // ISO date YYYY-MM-DD
  deadline?: string; // ISO date YYYY-MM-DD; when solutions close
  title: string;
  difficulty: Difficulty;
  statement: string;
  hint?: string;
  solution?: string; // omit until you're ready to publish
  solvers?: string[]; // names of students who solved it
}

export const puzzles: Puzzle[] = [
  {
    id: "harmonic-five",
    week: 1,
    releasedOn: "2026-09-08",
    deadline: "2026-09-14",
    title: "Crossing five",
    difficulty: "Standard",
    statement:
      "Find the smallest positive integer n such that 1 + 1/2 + 1/3 + … + 1/n exceeds 5. Closed-form arguments welcome; clever bounds even more so.",
    hint: "The harmonic numbers grow like ln(n) + γ. Use this to estimate n, then check carefully around your estimate.",
    solvers: [],
  },
  {
    id: "domino-tilings",
    week: 0,
    releasedOn: "2026-09-01",
    deadline: "2026-09-07",
    title: "Tiling a 2 × 10 board",
    difficulty: "Warm-up",
    statement:
      "In how many ways can you tile a 2 × 10 board using 1 × 2 dominoes (placed either horizontally or vertically)?",
    hint: "Let T(n) be the number of tilings of a 2 × n board. Find a recurrence by considering the leftmost piece.",
    solution:
      "T(n) satisfies T(n) = T(n − 1) + T(n − 2) with T(1) = 1, T(2) = 2, which gives the Fibonacci sequence shifted by one. So T(10) = F(11) = 89.",
    solvers: ["Anna L.", "Marcus W.", "Priya S."],
  },
  {
    id: "two-reds",
    week: -1,
    releasedOn: "2026-08-25",
    deadline: "2026-08-31",
    title: "Divisibility detour",
    difficulty: "Standard",
    statement:
      "Find all positive integers n such that n + 1 divides n² + 1.",
    hint: "Polynomial long division. What is n² + 1 modulo n + 1?",
    solution:
      "Since n² + 1 = (n + 1)(n − 1) + 2, we have (n² + 1) mod (n + 1) = 2. So (n + 1) | (n² + 1) iff (n + 1) | 2, which gives n + 1 ∈ {1, 2}, hence n = 1.",
    solvers: ["Devi T.", "Jonas K."],
  },
];

export function getCurrentPuzzle(): Puzzle {
  return puzzles[0];
}

export function getPastPuzzles(): Puzzle[] {
  return puzzles.slice(1);
}
