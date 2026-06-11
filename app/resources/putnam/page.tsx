import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Archive,
  Hash,
  Sigma,
  Infinity as InfinityIcon,
  Network,
  Calculator,
  ExternalLink,
  Compass,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { FadeIn } from "@/components/FadeIn";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Putnam Study Resources",
  description:
    "Reference guide for Tulane students preparing for the William Lowell Putnam Mathematical Competition.",
};

const books = [
  {
    title: "Putnam and Beyond",
    author: "Răzvan Gelca, Titu Andreescu",
    note:
      "Comprehensive collection of problems organized by topic with full solutions. A standard reference for sustained preparation.",
    level: "All levels",
  },
  {
    title: "Problem-Solving Strategies",
    author: "Arthur Engel",
    note:
      "Emphasizes techniques such as invariants, extremal arguments, and combinatorial reasoning that transfer well to Putnam study.",
    level: "Intermediate",
  },
  {
    title: "The Art of Problem Solving, Volume 2",
    author: "Sandor Lehoczky, Richard Rusczyk",
    note:
      "Accessible starting point for students without previous competition experience.",
    level: "Beginner",
  },
  {
    title: "Mathematical Olympiad Challenges",
    author: "Titu Andreescu, Răzvan Gelca",
    note:
      "Problems organized by method. Useful for focused work on a single technique at a time.",
    level: "Intermediate",
  },
  {
    title: "The William Lowell Putnam Mathematical Competition (1985–2000)",
    author: "Kedlaya, Poonen, Vakil",
    note:
      "Collection of problems from 1985 to 2000 with multiple solutions and historical commentary.",
    level: "All levels",
  },
  {
    title: "How to Solve It",
    author: "George Pólya",
    note:
      "Classic short work on mathematical method and problem-solving practice.",
    level: "All levels",
  },
];

const archives = [
  {
    title: "Putnam Archive (Kiran Kedlaya)",
    href: "https://kskedlaya.org/putnam-archive/",
    note: "Extensive archive of Putnam problems and solutions from 1985 onward, maintained by a former Putnam Fellow.",
  },
  {
    title: "Art of Problem Solving: Putnam Forum",
    href: "https://artofproblemsolving.com/community/c7_putnam",
    note: "Discussion forum for individual competition years, often with multiple solution approaches for each problem.",
  },
  {
    title: "Putnam Competition (official MAA)",
    href: "https://maa.org/math-competitions/putnam-competition",
    note: "Official rules, registration information, and recent results.",
  },
  {
    title: "AoPS Wiki: Putnam",
    href: "https://artofproblemsolving.com/wiki/index.php/Putnam_competitions",
    note: "Yearly problem index with links to archived discussion threads.",
  },
];

const topics = [
  {
    icon: Hash,
    name: "Number theory",
    why: "Roughly two problems per exam. Heavy on modular arithmetic, divisibility, primes, and Fermat / Euler.",
    drill: [
      "Fermat's little theorem and Euler's theorem (and when each applies)",
      "Chinese Remainder Theorem and lifting the exponent",
      "Order of an element mod n; primitive roots",
      "p-adic valuation and 2-adic tricks",
    ],
  },
  {
    icon: Network,
    name: "Combinatorics",
    why: "Counting, pigeonhole, generating functions, and graph-coloring arguments. Often dressed up in unfamiliar settings.",
    drill: [
      "Bijective proofs and double counting",
      "Pigeonhole and extremal principle",
      "Generating functions for closed forms",
      "Inclusion-exclusion on small cases",
    ],
  },
  {
    icon: InfinityIcon,
    name: "Analysis & calculus",
    why: "Introductory problems often resemble calculus or real analysis exercises. Later problems require stronger analytic judgment.",
    drill: [
      "Series convergence tests and tricky sums",
      "Mean value theorem, intermediate value theorem",
      "Suprema, limits, and ε-N estimates",
      "Integration tricks (symmetry, substitution, differentiation under the integral)",
    ],
  },
  {
    icon: Sigma,
    name: "Linear algebra",
    why: "Eigenvalues, determinants, and rank arguments. Surprisingly versatile on combinatorial problems too.",
    drill: [
      "Determinant identities and the Cauchy-Binet formula",
      "Trace tricks (especially tr(AB) = tr(BA))",
      "Characteristic and minimal polynomial",
      "Rank-nullity in disguise",
    ],
  },
  {
    icon: Calculator,
    name: "Inequalities & algebra",
    why: "AM-GM, Cauchy-Schwarz, and algebraic substitutions. Reliable material for structured practice, especially on introductory problems.",
    drill: [
      "AM-GM and weighted AM-GM",
      "Cauchy-Schwarz in Engel (Titu) form",
      "Power mean inequality",
      "Smoothing / tangent line tricks",
    ],
  },
  {
    icon: Compass,
    name: "Geometry",
    why: "Less frequent than other topics, but still represented regularly. Often overlaps with linear algebra or complex numbers.",
    drill: [
      "Complex numbers for plane geometry",
      "Vectors, dot products, cross products",
      "Affine transformations (and when they preserve the problem)",
      "Classic theorems: Ptolemy, Ceva, Menelaus",
    ],
  },
];

const studyPlan = [
  {
    label: "Week 1",
    title: "Read one A1 and one B1 per day",
    body: "A1 and B1 are typically the most accessible problems on each session. Spend twenty minutes on each without consulting notes, and record partial observations even when a full solution does not emerge.",
  },
  {
    label: "Week 2",
    title: "Pick one topic and drill it",
    body: "Choose number theory or inequalities (highest yield for beginners). Work through a chapter of Putnam and Beyond on that topic.",
  },
  {
    label: "Week 3",
    title: "Take a mock half-Putnam",
    body: "Three hours, six problems from one session of a recent year. No interruptions. Then go through every problem afterward with the solution.",
  },
  {
    label: "Week 4",
    title: "Come to prep, bring your write-ups",
    body: "Bring written solutions and partial attempts to a preparation session for discussion and review.",
  },
];

export default function PutnamResourcesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-green text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, rgba(111,197,232,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(155,166,74,0.4), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-tulane-sky hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All resources
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-tulane-sky">
            Resource guide
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
            Putnam Study Resources
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Books, archives, and topic-based guidance for students preparing
            for the Putnam Competition.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/putnam" variant="secondary">
              Prep schedule & sign up
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href={LINKS.email}
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10"
            >
              Email the prep coordinator
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2">
            <SectionHeader
              eyebrow="Orientation"
              title="A starting point for new participants"
            />
            <div className="mt-6 space-y-4 text-tulane-charcoal/85">
              <p>
                The Putnam rewards sustained exposure to proof-based problem
                solving. Because median scores are often very low, progress is
                best measured through stronger methods, clearer write-ups, and
                increased familiarity with recurring problem types.
              </p>
              <p>
                A practical first step is to read past problems alongside
                complete solutions. Even unsuccessful attempts become useful
                once you compare them with a finished argument and identify the
                key observation or method.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="border border-tulane-warm-gray bg-tulane-pale-green/50 p-6">
              <h3 className="font-serif text-xl text-tulane-navy">
                Quick orientation
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-tulane-charcoal/85">
                <li>
                  <span className="font-semibold text-tulane-navy">Format:</span>{" "}
                  Two 3-hour sessions (A and B), 6 problems each, scored 0 to
                  10 per problem.
                </li>
                <li>
                  <span className="font-semibold text-tulane-navy">A1 / B1:</span>{" "}
                  Typically the most accessible problem on each session.
                </li>
                <li>
                  <span className="font-semibold text-tulane-navy">A6 / B6:</span>{" "}
                  Usually among the most difficult problems on the exam.
                </li>
                <li>
                  <span className="font-semibold text-tulane-navy">Tone:</span>{" "}
                  Short statements, proof-based reasoning, and limited
                  computation.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-tulane-warm-gray bg-tulane-cream/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Books"
            title="What to read"
            description="A small selection of books for technique, worked examples, and sustained practice."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {books.map((b, i) => (
              <FadeIn as="li" key={b.title} delay={i * 0.04}>
                <div className="flex h-full flex-col border border-tulane-warm-gray bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-tulane-pale-green text-tulane-green">
                      <BookOpen className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
                      {b.level}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-tulane-navy">
                    {b.title}
                  </h3>
                  <p className="text-xs text-tulane-charcoal/60">{b.author}</p>
                  <p className="mt-3 text-sm leading-relaxed text-tulane-charcoal/85">
                    {b.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </ul>
          <p className="mt-8 text-sm text-tulane-charcoal/70">
            Department and university libraries hold copies of several of these
            titles. Contact the club if you need help locating one.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problem archives"
          title="Where to find past problems"
          description="Past problems and solutions are the most useful long-term preparation resource."
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {archives.map((a, i) => (
            <FadeIn as="li" key={a.title} delay={i * 0.05}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-tulane-warm-gray bg-white p-6 transition-colors hover:border-tulane-green/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-tulane-pale-green text-tulane-green">
                      <Archive className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-serif text-lg text-tulane-navy">
                      {a.title}
                    </h3>
                  </div>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-tulane-charcoal/40 transition-colors group-hover:text-tulane-green"
                    aria-hidden
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-tulane-charcoal/85">
                  {a.note}
                </p>
              </a>
            </FadeIn>
          ))}
        </ul>
      </section>

      <section className="border-y border-tulane-warm-gray bg-tulane-cream/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Topics"
            title="Core subject areas"
            description="Most Putnam problems draw from a recurring set of undergraduate topics."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((t, i) => (
              <FadeIn as="li" key={t.name} delay={i * 0.04}>
                <div className="flex h-full flex-col border border-tulane-warm-gray bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center bg-tulane-pale-green text-tulane-green">
                      <t.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-serif text-xl text-tulane-navy">
                      {t.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-tulane-charcoal/85">
                    {t.why}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-tulane-green">
                    Suggested topics
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-tulane-charcoal/85">
                    {t.drill.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-tulane-green"
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="A starter plan"
          title="Your first month"
          description="A four-week introductory plan for students beginning preparation."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {studyPlan.map((s, i) => (
            <FadeIn as="li" key={s.label} delay={i * 0.05}>
              <div className="flex h-full flex-col border border-tulane-warm-gray bg-white p-6">
                <span className="inline-flex w-fit items-center bg-tulane-pale-green px-3 py-1 text-xs font-semibold uppercase tracking-wide text-tulane-green">
                  {s.label}
                </span>
                <h3 className="mt-4 font-serif text-lg text-tulane-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-tulane-charcoal/85">
                  {s.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 border border-tulane-warm-gray bg-tulane-green p-8 text-white sm:p-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl sm:text-3xl">
              Attend a preparation session
            </h2>
            <p className="mt-3 text-white/85">
              Preparation sessions provide structured time to work through
              problems with other students and review solution methods.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href="/putnam" variant="secondary">
              See the schedule
            </Button>
            <Button
              href={LINKS.email}
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10"
            >
              Email us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
