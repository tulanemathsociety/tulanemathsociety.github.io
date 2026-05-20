"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Sparkles, Trophy } from "lucide-react";
import { Button } from "./Button";
import { LINKS } from "@/lib/links";

interface IntegrationBeeFeatureProps {
  variant?: "spotlight" | "ribbon";
}

export function IntegrationBeeFeature({
  variant = "spotlight",
}: IntegrationBeeFeatureProps) {
  if (variant === "ribbon") {
    return (
      <aside className="relative isolate overflow-hidden rounded-2xl border border-tulane-blue/30 bg-tulane-navy text-white">
        <BeeBackdrop />
        <div className="relative flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-4">
            <div
              aria-hidden
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tulane-sky/15 font-serif text-3xl text-tulane-sky"
            >
              ∫
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-sky">
                Coming this fall
              </p>
              <p className="mt-1 font-serif text-xl leading-tight">
                Integration Bee — speed-integration tournament
              </p>
            </div>
          </div>
          <Button
            href={LINKS.mailingList}
            variant="secondary"
            size="sm"
            external
          >
            Sign up to compete
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </aside>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative isolate overflow-hidden rounded-3xl border border-tulane-green/20 bg-tulane-navy text-white shadow-lg"
      aria-labelledby="integration-bee-heading"
    >
      <BeeBackdrop />

      <div className="relative grid gap-10 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-tulane-sky/40 bg-tulane-sky/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-tulane-sky">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Featured event · Tentative
          </p>

          <h2
            id="integration-bee-heading"
            className="mt-5 font-serif text-4xl leading-tight sm:text-5xl"
          >
            The Tulane Integration Bee
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            A bracket-style speed-integration tournament — Calc II–ready,
            spectator-friendly, and built around the kind of clever
            substitutions that make integrals fun. We&apos;re planning this for
            the fall; tell us you&apos;re in and we&apos;ll make it happen.
          </p>

          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-sky/80">
                When
              </dt>
              <dd className="mt-1 text-white">Fall 2026 · TBD</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-sky/80">
                Where
              </dt>
              <dd className="mt-1 text-white">Tulane uptown · TBA</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-sky/80">
                Who
              </dt>
              <dd className="mt-1 text-white">Any Tulane undergrad</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={LINKS.mailingList} variant="secondary" external>
              <Trophy className="h-4 w-4" aria-hidden />
              I want to compete
            </Button>
            <Button
              href={LINKS.mailingList}
              variant="outline"
              external
              className="border-white/40 text-white hover:bg-white/10"
            >
              <CalendarDays className="h-4 w-4" aria-hidden />
              Help organize
            </Button>
          </div>
        </div>

        <div className="hidden md:col-span-5 md:flex md:items-center md:justify-center">
          <IntegralArt />
        </div>
      </div>
    </motion.section>
  );
}

function BeeBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-25"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 25%, rgba(111,197,232,0.45), transparent 45%), radial-gradient(circle at 85% 70%, rgba(155,166,74,0.4), transparent 45%)",
      }}
    />
  );
}

function IntegralArt() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 320"
      className="h-56 w-56 sm:h-64 sm:w-64"
    >
      <defs>
        <linearGradient id="ibIntegral" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#6FC5E8" />
          <stop offset="100%" stopColor="#E7F2E0" />
        </linearGradient>
      </defs>

      {/* faint grid */}
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 40}
            y1="20"
            x2={40 + i * 40}
            y2="300"
          />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="20"
            y1={40 + i * 40}
            x2="300"
            y2={40 + i * 40}
          />
        ))}
      </g>

      {/* shaded area under curve */}
      <path
        d="M40,220 Q120,80 200,180 T280,140 L280,260 L40,260 Z"
        fill="rgba(111,197,232,0.18)"
      />
      <path
        d="M40,220 Q120,80 200,180 T280,140"
        fill="none"
        stroke="#6FC5E8"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* giant integral symbol */}
      <text
        x="160"
        y="200"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="240"
        fill="url(#ibIntegral)"
        fillOpacity="0.95"
        style={{ fontStyle: "italic" }}
      >
        ∫
      </text>

      {/* bounds + dx */}
      <text
        x="222"
        y="92"
        fontFamily="Georgia, serif"
        fontSize="22"
        fill="#E7F2E0"
      >
        b
      </text>
      <text
        x="222"
        y="232"
        fontFamily="Georgia, serif"
        fontSize="22"
        fill="#E7F2E0"
      >
        a
      </text>
      <text
        x="244"
        y="200"
        fontFamily="Georgia, serif"
        fontSize="22"
        fill="#E7F2E0"
      >
        dx
      </text>
    </svg>
  );
}
