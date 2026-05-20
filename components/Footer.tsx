import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle, Mail, ExternalLink } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { LINKS } from "@/lib/links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-tulane-warm-gray bg-tulane-cream/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-tulane-charcoal/80">
              An informal undergraduate community at Tulane University for
              anyone who enjoys mathematical ideas, problem solving, and
              meeting other curious students.
            </p>
            <a
              href={LINKS.mathDept}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-xl border border-tulane-warm-gray bg-white/70 px-3 py-2 transition-colors hover:border-tulane-green/40"
              aria-label="Tulane University — Department of Mathematics"
            >
              <Image
                src="/logos/tulane-shield-wordmark.svg"
                alt="Tulane University"
                width={132}
                height={187}
                className="h-10 w-auto"
              />
              <span className="flex flex-col text-left leading-tight">
                <span className="text-xs uppercase tracking-[0.18em] text-tulane-charcoal/60">
                  An undergraduate org at
                </span>
                <span className="text-sm font-semibold text-tulane-navy">
                  Tulane University
                </span>
              </span>
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-green">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/events"
                  className="text-tulane-charcoal hover:text-tulane-green"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/putnam"
                  className="text-tulane-charcoal hover:text-tulane-green"
                >
                  Putnam & Competitions
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-tulane-charcoal hover:text-tulane-green"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/officers"
                  className="text-tulane-charcoal hover:text-tulane-green"
                >
                  Officers
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-tulane-charcoal hover:text-tulane-green"
                >
                  About / Join
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-green">
              Connect
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={LINKS.mailingList}
                  className="inline-flex items-center gap-2 text-tulane-charcoal hover:text-tulane-green"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Mailing list
                </a>
              </li>
              <li>
                <a
                  href={LINKS.discord}
                  className="inline-flex items-center gap-2 text-tulane-charcoal hover:text-tulane-green"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Discord
                </a>
              </li>
              <li>
                <a
                  href={LINKS.instagram}
                  className="inline-flex items-center gap-2 text-tulane-charcoal hover:text-tulane-green"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={LINKS.wavesync}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-tulane-charcoal hover:text-tulane-green"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  WaveSync
                </a>
              </li>
              <li>
                <a
                  href={LINKS.mathDept}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-tulane-charcoal hover:text-tulane-green"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  Math Department
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-tulane-warm-gray pt-6 text-xs text-tulane-charcoal/60 sm:flex-row sm:items-center">
          <p>© {year} Tulane Math Club. Built by students, for students.</p>
          <p>New Orleans, Louisiana</p>
        </div>
      </div>
    </footer>
  );
}
