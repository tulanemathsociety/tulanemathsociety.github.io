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
    "Books, archives, and topic-by-topic study advice for the William Lowell Putnam Mathematical Competition. Curated for Tulane undergrads of any level.",
};

const books = [
  {
    title: "Putnam and Beyond",
    author: "Răzvan Gelca, Titu Andreescu",
    note:
      "The most comprehensive single book. ~800 problems organized by topic with full solutions. The standard reference for serious prep.",
    level: "All levels",
  },
  {
    title: "Problem-Solving Strategies",
    author: "Arthur Engel",
    note:
      "Olympiad-flavored but the techniques (invariants, extremal principle, coloring) transfer directly to Putnam. Great for building intuition.",
    level: "Intermediate",
  },
  {
    title: "The Art of Problem Solving, Volume 2",
    author: "Sandor Lehoczky, Richard Rusczyk",
    note:
      "Reads like a friendly mentor. Best on-ramp if you have no contest background. Skip Vol. 1 if you've taken Calc I.",
    level: "Beginner",
  },
  {
    title: "Mathematical Olympiad Challenges",
    author: "Titu Andreescu, Răzvan Gelca",
    note:
      "Problems grouped by trick. Useful for drilling a single technique at a time.",
    level: "Intermediate",
  },
  {
    title: "The William Lowell Putnam Mathematical Competition (1985–2000)",
    author: "Kedlaya, Poonen, Vakil",
    note:
      "Every problem from 1985 to 2000 with multiple solutions and historical notes. Worth owning.",
    level: "All levels",
  },
  {
    title: "How to Solve It",
    author: "George Pólya",
    note:
      "Not a problem book. The book on mathematical problem solving. Short, old, still the best 80 pages on the topic.",
    level: "All levels",
  },
];

const archives = [
  {
    title: "Putnam Archive (Kiran Kedlaya)",
    href: "https://kskedlaya.org/putnam-archive/",
    note: "The definitive archive. Every Putnam problem and solution from 1985 onward, maintained by a former Putnam Fellow.",
  },
  {
    title: "Art of Problem Solving: Putnam Forum",
    href: "https://artofproblemsolving.com/community/c7_putnam",
    note: "Active discussion of each year's problems. Often has multiple elegant solutions per problem.",
  },
  {
    title: "Putnam Competition (official MAA)",
    href: "https://maa.org/math-competitions/putnam-competition",
    note: "Official rules, registration, and recent winners. Where Tulane registers students each year.",
  },
  {
    title: "AoPS Wiki: Putnam",
    href: "https://artofproblemsolving.com/wiki/index.php/Putnam_competitions",
    note: "Yearly problem indexes with links to discussion threads. Easy to browse.",
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
    why: "The A1 / B1 problems often look like cleverly-disguised calculus questions. Real analysis intuition pays off later.",
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
    why: "AM-GM, Cauchy-Schwarz, and clever substitutions. The easiest topic to drill, and high yield on A1 / B1.",
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
    why: "Less common than the others, but worth a week. Often blends with linear algebra or complex numbers.",
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
    body: "A1 and B1 are the easiest problem on each session. Twenty minutes each, no looking up. Write down whatever you observe, even if you don't solve it.",
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
    body: "The fastest way to improve is to talk through your reasoning with someone else. That's what the weekly Putnam prep session is for.",
  },
];

export default function PutnamResourcesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-navy text-white">
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
            Books, archives, and topic-by-topic advice for studying the Putnam.
            Built for Tulane students who&apos;ve never done competition math
            before, and useful for people who have.
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
              eyebrow="How to use this page"
              title="If you've never studied for Putnam before"
            />
            <div className="mt-6 space-y-4 text-tulane-charcoal/85">
              <p>
                The Putnam isn&apos;t a test of how much math you&apos;ve
                taken; it&apos;s a test of how you think about problems. The
                median score is famously 0 or 1 out of 120. That&apos;s not a
                joke about how hard it is. It&apos;s a sign that the people
                who do well aren&apos;t the ones who&apos;ve memorized the
                most theorems; they&apos;re the ones who&apos;ve seen the most
                problems and recognize patterns.
              </p>
              <p>
                The cheapest, highest-yield thing you can do is read past
                problems and their solutions. Even when you can&apos;t solve
                one, reading a clean solution and asking &quot;what would I
                have needed to notice?&quot; teaches you the pattern. Do that
                fifty times and the next A1 looks familiar.
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
                  The easiest problem on each session. Most accessible to
                  first-timers.
                </li>
                <li>
                  <span className="font-semibold text-tulane-navy">A6 / B6:</span>{" "}
                  Brutally hard. Skip them at first.
                </li>
                <li>
                  <span className="font-semibold text-tulane-navy">Tone:</span>{" "}
                  Short, elegant problems. Cleverness over computation.
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
            description="You don't need to own all of these. Pick one for technique and one for problems."
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
            The Tulane Math Department library has copies of most of these.
            Email an officer if you can&apos;t find one.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problem archives"
          title="Where to find past problems"
          description="Old problems are the curriculum. These four cover everything you need."
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
            title="What actually shows up"
            description="Putnam problems cluster around a handful of topics. Drill one at a time."
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
                    Drill these
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
          description="If you're starting from zero, here's a low-effort, four-week ramp."
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
        <div className="grid items-center gap-6 border border-tulane-warm-gray bg-tulane-navy p-8 text-white sm:p-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl sm:text-3xl">
              Come to a prep session
            </h2>
            <p className="mt-3 text-white/85">
              Weekly, friendly, beginners welcome. The fastest way to make
              progress is to work through problems with other students.
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
