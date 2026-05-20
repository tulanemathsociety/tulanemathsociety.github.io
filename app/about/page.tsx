import type { Metadata } from "next";
import {
  Mail,
  MessageCircle,
  Instagram,
  ExternalLink,
  CalendarDays,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { FadeIn } from "@/components/FadeIn";
import { faqs } from "@/lib/faqs";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "About & Join",
  description:
    "About Tulane Math Club — our mission, who we welcome, how to join, and answers to common questions.",
};

const joinOptions = [
  {
    icon: ExternalLink,
    title: "Join WaveSync",
    body: "Officially join the club on Tulane's student org platform.",
    cta: "Open WaveSync",
    href: LINKS.wavesync,
    external: true,
  },
  {
    icon: Mail,
    title: "Mailing list",
    body: "Get a short weekly email about upcoming meetings and events.",
    cta: "Email to subscribe",
    href: LINKS.mailingList,
    external: true,
  },
  {
    icon: MessageCircle,
    title: "Discord",
    body: "Casual chat between meetings — problems, memes, study buddies.",
    cta: "Join Discord",
    href: LINKS.discord,
    external: true,
  },
  {
    icon: Instagram,
    title: "Instagram",
    body: "Event reminders, recaps, and the occasional terrible math joke.",
    cta: "Follow",
    href: LINKS.instagram,
    external: true,
  },
  {
    icon: CalendarDays,
    title: "Come to the next meeting",
    body: "Truly, the easiest option. Find a time that works and drop in.",
    cta: "See events",
    href: "/events",
    external: false,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/40">
        <MathPatternBackground variant="graph" />
        <MathPatternBackground variant="equations" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
            About Tulane Math Club
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-tulane-navy sm:text-5xl">
            An undergraduate community for anyone curious about math.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-tulane-charcoal/85">
            Tulane Math Club is an informal undergraduate community for anyone
            who enjoys mathematical ideas, problem solving, and meeting other
            curious students.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn>
            <SectionHeader eyebrow="Mission" title="What we're about" />
            <div className="mt-6 space-y-4 text-tulane-charcoal/85">
              <p>
                We believe math is more fun in good company. Our goal is to
                give Tulane undergrads a low-pressure place to think about
                interesting problems, meet people who like the same things they
                do, and find their way into deeper mathematics — whether that
                means competitions, research, grad school, or just a happier
                Tuesday night.
              </p>
              <p>
                You don&apos;t have to be a math major. You don&apos;t have to
                be experienced. You don&apos;t have to be planning a career in
                math. Curious is enough.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="rounded-2xl border border-tulane-warm-gray bg-tulane-pale-green/50 p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-tulane-navy">
                We&apos;re especially glad to see…
              </h2>
              <ul className="mt-4 grid gap-2 text-tulane-charcoal/85">
                {[
                  "First-years and undecided students",
                  "Non-majors from CS, physics, econ, engineering, biology, philosophy, anywhere",
                  "Applied math, pure math, and stats students",
                  "Students returning to math after a break",
                  "Transfers, exchange, and grad students",
                  "Anyone who likes a good puzzle",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-tulane-green"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-tulane-warm-gray bg-tulane-cream/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Join"
            title="Five easy ways to be a member"
            description="Pick whichever you like — they all work. Officially: just show up to a meeting and you're in."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {joinOptions.map((opt, i) => (
              <FadeIn as="li" key={opt.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-tulane-warm-gray bg-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tulane-pale-green text-tulane-green">
                    <opt.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-tulane-navy">
                    {opt.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-tulane-charcoal/80">
                    {opt.body}
                  </p>
                  <div className="mt-auto pt-5">
                    <Button
                      href={opt.href}
                      variant="outline"
                      size="sm"
                      external={opt.external}
                    >
                      {opt.cta}
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Short answers. If yours isn't here, email any officer."
        />
        <dl className="mt-10 divide-y divide-tulane-warm-gray rounded-2xl border border-tulane-warm-gray bg-white">
          {faqs.map((item) => (
            <div key={item.id} className="p-6 sm:p-8">
              <dt className="font-serif text-lg text-tulane-navy">
                {item.question}
              </dt>
              <dd className="mt-2 text-tulane-charcoal/85">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
