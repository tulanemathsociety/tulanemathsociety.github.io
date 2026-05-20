import * as React from "react";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { Button } from "./Button";
import { LINKS } from "@/lib/links";

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-tulane-green/15 bg-tulane-green text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 60%, rgba(111,197,232,0.4), transparent 45%)",
        }}
      />
      <div className="relative grid gap-8 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Stay in touch
          </p>
          <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">
            Join us — no formal process, just show up.
          </h2>
          <p className="mt-4 max-w-xl text-white/85">
            Get a short email each week with what we&apos;re up to. Or drop into
            our Discord, follow us on Instagram, and come to the next meeting.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-5 md:items-end md:justify-center">
          <Button
            href={LINKS.mailingList}
            variant="secondary"
            external
            className="w-full sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Mailing list
          </Button>
          <Button
            href={LINKS.discord}
            variant="secondary"
            external
            className="w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Discord
          </Button>
          <Button
            href={LINKS.instagram}
            variant="secondary"
            external
            className="w-full sm:w-auto"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
