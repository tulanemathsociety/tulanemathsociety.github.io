"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";
import { Button } from "./Button";
import { LINKS } from "@/lib/links";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/puzzle", label: "Puzzle" },
  { href: "/putnam", label: "Putnam" },
  { href: "/resources", label: "Resources" },
  { href: "/officers", label: "Officers" },
  { href: "/about", label: "About / Join" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-tulane-warm-gray/70 bg-white/85 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:bg-tulane-green focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="min-w-0 shrink focus:outline-none"
          aria-label="Tulane Math Club home"
        >
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    " px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-tulane-pale-green text-tulane-green"
                      : "text-tulane-charcoal hover:bg-tulane-warm-gray/60 hover:text-tulane-navy",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden shrink-0 lg:block">
          <Button href={LINKS.email} size="sm">
            Email us
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-tulane-charcoal hover:bg-tulane-warm-gray lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-tulane-warm-gray lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block  px-3 py-2 text-base font-medium",
                      active
                        ? "bg-tulane-pale-green text-tulane-green"
                        : "text-tulane-charcoal hover:bg-tulane-warm-gray/60",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Button href={LINKS.email} className="w-full">
                Email us
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
