import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Recommended Reading",
  description:
    "Books the Tulane Math Club keeps recommending: proof writing, problem solving, popular math, and the classics from analysis, algebra, and applied math.",
};

interface Book {
  title: string;
  author: string;
  why: string;
}

const sections: { eyebrow: string; title: string; books: Book[] }[] = [
  {
    eyebrow: "Start here",
    title: "Proof writing & problem solving",
    books: [
      {
        title: "How to Prove It",
        author: "Daniel Velleman",
        why: "The standard intro-to-proof book. If you're about to take Math 3050 or 3070, read this first.",
      },
      {
        title: "How to Solve It",
        author: "George Pólya",
        why: "Short and old. Still the best book ever written on mathematical problem solving.",
      },
      {
        title: "The Art of Problem Solving, Volume 2",
        author: "Lehoczky & Rusczyk",
        why: "Friendly mentor in book form. Best on-ramp to competition math.",
      },
    ],
  },
  {
    eyebrow: "Pure math",
    title: "Analysis, algebra, topology",
    books: [
      {
        title: "Calculus",
        author: "Michael Spivak",
        why: "What calculus looks like when treated as analysis. The book that makes proof-based math click for a lot of students.",
      },
      {
        title: "Principles of Mathematical Analysis",
        author: "Walter Rudin",
        why: "Universally known as \"baby Rudin\". Concise, demanding, and standard. Use it with a study group.",
      },
      {
        title: "Abstract Algebra",
        author: "David Dummit & Richard Foote",
        why: "The thorough reference for groups, rings, fields, and Galois theory. Owned by most grad students.",
      },
      {
        title: "Visual Complex Analysis",
        author: "Tristan Needham",
        why: "Complex analysis explained with pictures instead of epsilons. A genuinely beautiful book.",
      },
      {
        title: "Topology",
        author: "James Munkres",
        why: "The default intro to point-set topology. Clear, careful, and well exercised.",
      },
    ],
  },
  {
    eyebrow: "Applied math & stats",
    title: "Modeling, probability, computing",
    books: [
      {
        title: "Introduction to Probability",
        author: "Blitzstein & Hwang",
        why: "Friendly, intuition-first probability. Pairs with the Harvard Stat 110 lectures on YouTube.",
      },
      {
        title: "Linear Algebra Done Right",
        author: "Sheldon Axler",
        why: "Linear algebra without determinants until the end. Reframes everything you saw in Math 3090.",
      },
      {
        title: "Numerical Linear Algebra",
        author: "Trefethen & Bau",
        why: "How to actually compute the things abstract linear algebra promises. Beautiful expository writing.",
      },
      {
        title: "All of Statistics",
        author: "Larry Wasserman",
        why: "Whirlwind tour of stats for math/CS students. Concise and rigorous.",
      },
    ],
  },
  {
    eyebrow: "Popular math",
    title: "For the bus, the beach, the break",
    books: [
      {
        title: "A Mathematician's Apology",
        author: "G. H. Hardy",
        why: "Hardy on what mathematics is and why he loved it. Short, melancholy, essential reading.",
      },
      {
        title: "Proofs from THE BOOK",
        author: "Aigner & Ziegler",
        why: "A collection of the most beautiful proofs the authors know. Browse a page, get amazed.",
      },
      {
        title: "Gödel, Escher, Bach",
        author: "Douglas Hofstadter",
        why: "On formal systems, self-reference, and consciousness. Long, weird, and worth it.",
      },
      {
        title: "The Mathematician's Lament",
        author: "Paul Lockhart",
        why: "Twenty-five pages on what's wrong with how we teach math. Read it; everyone you know in math has.",
      },
    ],
  },
];

export default function ReadingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/40">
        <MathPatternBackground variant="graph" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-tulane-green hover:text-tulane-secondary-green"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All resources
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
            Resource guide
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-tulane-navy sm:text-5xl">
            Recommended Reading
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-tulane-charcoal/85">
            Books we keep recommending. Most are in the Tulane libraries or
            cheap used; many have free legal PDFs from the authors. Ask any
            officer for a copy or a loan.
          </p>
        </div>
      </section>

      {sections.map((section, i) => (
        <section
          key={section.title}
          className={
            i % 2 === 0
              ? "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
              : "border-y border-tulane-warm-gray bg-tulane-cream/30"
          }
        >
          <div
            className={
              i % 2 === 0
                ? ""
                : "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
            }
          >
            <SectionHeader eyebrow={section.eyebrow} title={section.title} />
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.books.map((b, j) => (
                <FadeIn as="li" key={b.title} delay={j * 0.04}>
                  <div className="flex h-full flex-col border border-tulane-warm-gray bg-white p-6">
                    <div className="flex h-10 w-10 items-center justify-center bg-tulane-pale-green text-tulane-green">
                      <BookOpen className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-serif text-lg text-tulane-navy">
                      {b.title}
                    </h3>
                    <p className="text-xs text-tulane-charcoal/60">{b.author}</p>
                    <p className="mt-3 text-sm leading-relaxed text-tulane-charcoal/85">
                      {b.why}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
