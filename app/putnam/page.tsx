import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Putnam & Competitions",
  description:
    "Simple information about Tulane Math Club's Putnam prep and competition interests.",
};

const helpfulLinks = [
  {
    title: "Putnam study resources",
    description: "Books, archives, and a short starter plan.",
    href: "/resources/putnam",
  },
  {
    title: "Official Putnam page (MAA)",
    description: "Basic information about the competition itself.",
    href: "https://maa.org/student-programs/putnam-competition/",
  },
];

export default function PutnamPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/40">
        <MathPatternBackground variant="graph" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
            Putnam & Competitions
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-tulane-navy sm:text-5xl">
            Putnam, kept simple.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-tulane-charcoal/85">
            If you are curious about the Putnam, this is the place to start.
            Our approach is beginner-friendly and collaborative.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr,1fr]">
          <div>
            <h2 className="font-serif text-2xl text-tulane-navy">
              What this page is for
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-tulane-charcoal/85">
              <p>
                The Putnam is a hard undergraduate math competition, but you do
                not need prior contest experience to be interested in it.
              </p>
              <p>
                When the club runs prep, it is usually a small group working
                through problems together. The goal is to learn how these
                problems feel, not to perform.
              </p>
            </div>

            <h2 className="mt-8 font-serif text-2xl text-tulane-navy">
              What to expect
            </h2>
            <ul className="mt-4 space-y-2 text-tulane-charcoal/85">
              <li>Open to any Tulane undergraduate.</li>
              <li>Questions and partial attempts are welcome.</li>
              <li>We keep the tone relaxed and beginner-friendly.</li>
              <li>
                If there is interest in COMAP / MCM, we can help connect
                students looking for teammates.
              </li>
            </ul>
          </div>

          <div className="border border-tulane-warm-gray bg-white p-6">
            <h2 className="font-serif text-2xl text-tulane-navy">
              This semester
            </h2>
            <p className="mt-3 leading-relaxed text-tulane-charcoal/80">
              We are keeping this page simple until meeting times and prep plans
              are set. If you want updates, email us or join the GroupMe.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={LINKS.email}>Email us</Button>
              <Button href={LINKS.groupme} external variant="outline">
                Join the GroupMe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-tulane-warm-gray bg-tulane-cream/30">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
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
      </section>
    </>
  );
}
