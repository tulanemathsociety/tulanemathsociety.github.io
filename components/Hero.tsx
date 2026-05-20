"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { Button } from "./Button";
import { LINKS } from "@/lib/links";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-tulane-warm-gray"
      aria-labelledby="hero-heading"
    >
      {/* Background photo */}
      <Image
        src="/images/hero-gibson.jpg"
        alt="Gibson Hall on Tulane University's uptown campus"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Tint + readability overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-tulane-charcoal/85 via-tulane-charcoal/65 to-tulane-green/55"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-tulane-charcoal/60 via-transparent to-transparent"
      />

      {/* Subtle math pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2  border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Undergraduate community
          </motion.span>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 font-serif text-4xl leading-[1.05] text-white drop-shadow sm:text-5xl md:text-6xl"
          >
            Tulane Math Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl"
          >
            Puzzles, proofs, Putnam prep, talks, and community for anyone
            curious about math. No major or prior contest experience required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href={LINKS.email}>
              Email us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href="/events"
              variant="outline"
              className="border-white/60 text-white hover:bg-white/10"
            >
              <CalendarDays className="h-4 w-4" aria-hidden />
              See Upcoming Events
            </Button>
            <Button
              href="/putnam"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              Prepare for Putnam
            </Button>
          </motion.div>

          <p className="mt-6 text-sm text-white/75">
            No formal application. Just show up to any event.
          </p>
        </div>
      </div>

      {/* Photo credit */}
      <p className="absolute bottom-2 right-3 text-[10px] uppercase tracking-wider text-white/55">
        Gibson Hall · Tulane University
      </p>
    </section>
  );
}
