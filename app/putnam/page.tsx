import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Putnam & Competitions",
  description:
    "Tulane Math Club information about Putnam preparation and related competition activity.",
};

const helpfulLinks = [
  {
    title: "Putnam resources on the main resources page",
    description: "Archives, official links, and recommended texts.",
    href: "/resources#putnam",
  },
  {
    title: "Official Putnam page (MAA)",
    description: "Competition information, registration details, and announcements.",
    href: "https://maa.org/student-programs/putnam-competition/",
  },
];

export default function PutnamPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/40">
        <MathPatternBackground variant="graph" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
              Putnam & Competitions
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-tulane-navy sm:text-5xl">
              Putnam preparation
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tulane-charcoal/85">
              The club periodically organizes collaborative preparation for the
              William Lowell Putnam Mathematical Competition.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-[1.6fr,1fr]">
            <div>
              <h2 className="font-serif text-2xl text-tulane-navy">
                How the club approaches Putnam
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-tulane-charcoal/85">
                <p>
                  The Putnam is a demanding undergraduate examination, but prior
                  contest experience is not required in order to participate in
                  club preparation.
                </p>
                <p>
                  When preparation sessions are offered, they are typically run
                  as collaborative problem-solving meetings with an emphasis on
                  method, exposition, and steady improvement.
                </p>
              </div>

              <h2 className="mt-8 font-serif text-2xl text-tulane-navy">
                What to expect
              </h2>
              <ul className="mt-4 space-y-2 text-tulane-charcoal/85">
                <li>Open to any Tulane undergraduate.</li>
                <li>Questions, partial solutions, and discussion are encouraged.</li>
                <li>Sessions focus on clear write-ups as well as problem-solving technique.</li>
                <li>
                  Students interested in COMAP / MCM can use the club to find collaborators.
                </li>
              </ul>
            </div>

            <div className="border border-tulane-warm-gray bg-white p-6">
              <h2 className="font-serif text-2xl text-tulane-navy">Updates</h2>
              <p className="mt-3 leading-relaxed text-tulane-charcoal/80">
                Preparation sessions for Fall 2026 will be announced through
                the GroupMe once the schedule is finalized.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={LINKS.groupme} external>
                  Join the GroupMe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-tulane-warm-gray bg-tulane-cream/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-serif text-2xl text-tulane-navy">
              Helpful links
            </h2>
            <ul className="mt-6 divide-y divide-tulane-warm-gray border border-tulane-warm-gray bg-white">
              {helpfulLinks.map((item) => {
                const isExternal =
                  item.href.startsWith("http") || item.href.startsWith("mailto:");

                return (
                  <li key={item.title} className="p-5 sm:p-6">
                    {isExternal ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-lg font-medium text-tulane-green hover:text-tulane-secondary-green"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-tulane-green hover:text-tulane-secondary-green"
                      >
                        {item.title}
                      </Link>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-tulane-charcoal/80">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
