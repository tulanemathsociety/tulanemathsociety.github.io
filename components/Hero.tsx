"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { Button } from "./Button";
import { MathPatternBackground } from "./MathPatternBackground";
import { LINKS } from "@/lib/links";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray">
      <MathPatternBackground variant="graph" />
      <MathPatternBackground variant="equations" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-tulane-green/30 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-tulane-green"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Undergraduate community
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 font-serif text-4xl leading-[1.05] text-tulane-navy sm:text-5xl md:text-6xl"
            >
              Tulane Math Club
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-tulane-charcoal/85 sm:text-xl"
            >
              Puzzles, proofs, Putnam prep, talks, and community for anyone
              curious about math — no major or prior contest experience required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href={LINKS.mailingList} external>
                Join the Mailing List
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/events" variant="outline">
                <CalendarDays className="h-4 w-4" aria-hidden />
                See Upcoming Events
              </Button>
              <Button href="/putnam" variant="ghost">
                Prepare for Putnam
              </Button>
            </motion.div>

            <p className="mt-6 text-sm text-tulane-charcoal/60">
              No formal application. Just show up to any event.
            </p>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative aspect-square w-full max-w-md mx-auto"
      aria-hidden
    >
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        role="img"
        aria-label="Decorative math and wave illustration"
      >
        <defs>
          <linearGradient id="heroGreen" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#255C4E" />
            <stop offset="100%" stopColor="#688C3E" />
          </linearGradient>
          <linearGradient id="heroBlue" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#138094" />
            <stop offset="100%" stopColor="#6FC5E8" />
          </linearGradient>
        </defs>

        {/* graph paper grid */}
        <g stroke="#255C4E" strokeOpacity="0.08" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v-${i}`} x1={40 + i * 40} y1="20" x2={40 + i * 40} y2="380" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h-${i}`} x1="20" y1={40 + i * 40} x2="380" y2={40 + i * 40} />
          ))}
        </g>

        {/* axes */}
        <line x1="40" y1="200" x2="380" y2="200" stroke="#001B3F" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="#001B3F" strokeOpacity="0.3" strokeWidth="1.5" />

        {/* animated wave (sin) */}
        <motion.path
          d="M40,200 C90,140 130,260 180,200 S260,140 320,200 S380,260 380,200"
          fill="none"
          stroke="url(#heroBlue)"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />

        {/* parabola */}
        <motion.path
          d="M60,360 Q200,40 340,360"
          fill="none"
          stroke="url(#heroGreen)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
        />

        {/* unit circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="#9BA64A"
          strokeWidth="2"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.4, delay: 0.4 }}
        />

        {/* points */}
        {[
          { x: 100, y: 240, c: "#255C4E" },
          { x: 160, y: 130, c: "#138094" },
          { x: 240, y: 270, c: "#688C3E" },
          { x: 300, y: 150, c: "#001B3F" },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="5"
            fill={p.c}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          />
        ))}

        {/* equation label */}
        <text
          x="200"
          y="58"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="18"
          fill="#001B3F"
          fillOpacity="0.85"
        >
          f(x) = sin(x)
        </text>
      </svg>
    </motion.div>
  );
}
