import * as React from "react";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { LINKS } from "@/lib/links";

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden border border-tulane-green/15 bg-tulane-green text-white">
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
            Join us. No formal process, just show up.
          </h2>
          <p className="mt-4 max-w-xl text-white/85">
            Email us with a question, a puzzle, or just to say hi, or come
            to the next meeting. That&apos;s all there is to it.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-5 md:items-end md:justify-center">
          <Button
            href={LINKS.groupme}
            variant="secondary"
            className="w-full sm:w-auto"
            external
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Join the GroupMe
          </Button>
          <Button
            href={LINKS.email}
            variant="outline"
            className="w-full border-white/60 text-white hover:bg-white/10 sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {LINKS.emailAddress}
          </Button>
        </div>
      </div>
    </section>
  );
}
