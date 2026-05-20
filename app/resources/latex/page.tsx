import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Apple,
  Monitor,
  Terminal,
  Cloud,
  HardDrive,
  FileCode2,
  ExternalLink,
  CheckCircle2,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";
import { FadeIn } from "@/components/FadeIn";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Beginner's LaTeX Guide",
  description:
    "How to install and start writing LaTeX on macOS (MacTeX + TeXShop), Windows (MiKTeX), and Linux (TeX Live), plus a comparison with Overleaf and a starter template for problem sets.",
};

const overleafPros = [
  "Nothing to install. Works in any browser.",
  "Real-time collaboration with classmates.",
  "Forced cloud backup and version history.",
  "Always-fresh package versions.",
  "Free tier is enough for most coursework.",
];

const overleafCons = [
  "Requires an internet connection to compile.",
  "Free tier limits compile time on long documents (slow theses).",
  "Free tier limits collaborators per project.",
  "You don't learn how a real TeX install works.",
  "Files live on a third-party server.",
];

const localPros = [
  "Compiles offline, instantly, with no time limits.",
  "Works on huge documents (theses, lecture notes, books).",
  "Integrates with your editor of choice (VS Code, Vim, Emacs, TeXShop).",
  "Full control over packages and fonts.",
  "Your files stay in your own Git repo / Drive / Dropbox.",
];

const localCons = [
  "First install is 2 to 5 GB and can take a while.",
  "Collaboration needs Git or a shared folder.",
  "You manage updates yourself (one command, but still).",
  "Slightly steeper learning curve.",
];

const editors = [
  {
    name: "TeXShop",
    platforms: "macOS only",
    notes:
      "Bundled with MacTeX. Clean, simple, native Mac feel. Great default for new Mac users.",
  },
  {
    name: "TeXstudio",
    platforms: "macOS, Windows, Linux",
    notes:
      "Cross-platform, free, with a built-in symbol palette and structure view. Friendly for beginners on any OS.",
  },
  {
    name: "VS Code + LaTeX Workshop",
    platforms: "macOS, Windows, Linux",
    notes:
      "Modern editor most CS-minded students already use. Install the LaTeX Workshop extension and you get live PDF preview, snippets, and Git integration.",
  },
  {
    name: "Overleaf",
    platforms: "Browser",
    notes:
      "If you'd rather not install anything, Overleaf is a great starting point. You can always export the .tex source later and switch to a local setup.",
  },
];

const starterTemplate = `\\documentclass[11pt]{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{amsmath, amssymb, amsthm}
\\usepackage{hyperref}

\\newtheorem{problem}{Problem}
\\newenvironment{solution}
  {\\noindent\\textit{Solution.}\\quad}
  {\\hfill$\\square$\\par\\medskip}

\\title{Math 1230 Problem Set 1}
\\author{Your Name}
\\date{\\today}

\\begin{document}
\\maketitle

\\begin{problem}
Prove that $\\sqrt{2}$ is irrational.
\\end{problem}

\\begin{solution}
Suppose, for contradiction, that $\\sqrt{2} = p/q$ in lowest terms with
$p, q \\in \\mathbb{Z}$ and $\\gcd(p, q) = 1$. Then $p^2 = 2 q^2$, so $p^2$
is even, so $p$ is even. Write $p = 2k$. Then $4 k^2 = 2 q^2$, so $q^2$ is
even, so $q$ is even. But then $\\gcd(p, q) \\geq 2$, contradicting our
assumption.
\\end{solution}

\\end{document}`;

export default function LatexGuidePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-tulane-warm-gray bg-tulane-pale-green/40">
        <MathPatternBackground variant="graph" />
        <MathPatternBackground variant="equations" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-tulane-green hover:text-tulane-secondary-green"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All resources
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
            Resource guide
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-tulane-navy sm:text-5xl">
            Beginner&apos;s LaTeX Guide
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-tulane-charcoal/85">
            LaTeX is the standard typesetting system for math, physics, and CS.
            This guide walks you through installing it on macOS, Windows, and
            Linux, picking an editor, and writing your first problem set.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2">
            <SectionHeader
              eyebrow="Why LaTeX?"
              title="Math looks the way it should"
            />
            <div className="mt-6 space-y-4 text-tulane-charcoal/85">
              <p>
                LaTeX (pronounced &quot;LAY-tek&quot; or &quot;LAH-tek&quot;) is
                the tool mathematicians, physicists, and computer scientists use
                to write papers, theses, and homework. You write in plain text
                with markup like <code>$x^2 + y^2 = r^2$</code>, and LaTeX
                produces a beautifully typeset PDF.
              </p>
              <p>
                It&apos;s worth learning early. Most upper-level Tulane math
                courses expect typed proofs, and every graduate program, REU,
                and research advisor will assume you can write in LaTeX. Once
                you&apos;ve done one problem set in it, you&apos;ll never want
                to go back to Word&apos;s equation editor.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="border border-tulane-warm-gray bg-tulane-pale-green/50 p-6">
              <h3 className="font-serif text-xl text-tulane-navy">
                Two paths
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-tulane-charcoal/85">
                <li className="flex items-start gap-3">
                  <Cloud
                    className="mt-0.5 h-5 w-5 shrink-0 text-tulane-green"
                    aria-hidden
                  />
                  <span>
                    <span className="font-semibold text-tulane-navy">
                      Overleaf
                    </span>{" "}
                    runs in your browser. Easiest start, great for group work.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <HardDrive
                    className="mt-0.5 h-5 w-5 shrink-0 text-tulane-green"
                    aria-hidden
                  />
                  <span>
                    <span className="font-semibold text-tulane-navy">
                      Local install
                    </span>{" "}
                    runs on your laptop. Fast, offline, and what you&apos;ll
                    want for long documents.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-tulane-charcoal/65">
                You can switch between them anytime. The <code>.tex</code>{" "}
                files are identical.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        id="overleaf-vs-local"
        className="border-y border-tulane-warm-gray bg-tulane-cream/30"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pick a setup"
            title="Overleaf vs. a local install"
            description="Both produce identical PDFs. The trade-off is convenience vs. control."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="flex h-full flex-col border border-tulane-warm-gray bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center bg-tulane-pale-green text-tulane-green">
                    <Cloud className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-serif text-2xl text-tulane-navy">
                    Overleaf
                  </h3>
                </div>
                <p className="mt-3 text-sm text-tulane-charcoal/85">
                  Browser-based, no install. The fastest way to start.
                </p>
                <ProsCons pros={overleafPros} cons={overleafCons} />
                <div className="mt-6">
                  <Button
                    href="https://www.overleaf.com/"
                    variant="outline"
                    size="sm"
                    external
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    overleaf.com
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="flex h-full flex-col border border-tulane-warm-gray bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center bg-tulane-pale-green text-tulane-green">
                    <HardDrive className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-serif text-2xl text-tulane-navy">
                    Local install
                  </h3>
                </div>
                <p className="mt-3 text-sm text-tulane-charcoal/85">
                  Runs on your machine. Better for long documents and offline
                  work.
                </p>
                <ProsCons pros={localPros} cons={localCons} />
                <div className="mt-6">
                  <Button href="#install" variant="outline" size="sm">
                    Jump to install steps
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
          <p className="mt-8 max-w-3xl text-sm text-tulane-charcoal/75">
            <span className="font-semibold text-tulane-navy">
              Our recommendation:
            </span>{" "}
            start on Overleaf to learn the syntax in your first week, then
            install a local distribution once you&apos;re writing anything
            longer than a problem set. Tulane students working on a thesis or
            REU paper almost always end up local.
          </p>
        </div>
      </section>

      <section
        id="install"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Install LaTeX locally"
          title="Pick your operating system"
          description="Each distribution is free, official, and maintained by the TeX User Group (TUG) or its community. The download is large (2 to 5 GB), so give it some time."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <FadeIn>
            <PlatformCard
              icon={Apple}
              os="macOS"
              distribution="MacTeX"
              size="~5 GB"
              steps={[
                "Open https://www.tug.org/mactex/ and download MacTeX.pkg.",
                "Double-click the .pkg and follow the installer (admin password needed).",
                "Open TeXShop from /Applications. It comes with MacTeX.",
                "File → New, paste the starter template below, hit ⌘T to typeset.",
                "If you'd rather use VS Code, install the LaTeX Workshop extension and point it at /Library/TeX/texbin/.",
              ]}
              link={{ href: "https://www.tug.org/mactex/", label: "tug.org/mactex" }}
            />
          </FadeIn>

          <FadeIn delay={0.05}>
            <PlatformCard
              icon={Monitor}
              os="Windows"
              distribution="MiKTeX"
              size="~2 GB (basic) or ~5 GB (full)"
              steps={[
                "Open https://miktex.org/download and download the Windows installer.",
                "Run it. Choose 'Install missing packages on the fly: Yes' so you don't have to babysit it.",
                "Install TeXstudio from https://www.texstudio.org/ (or use VS Code + LaTeX Workshop).",
                "Open TeXstudio, paste the starter template below, press F5 to build and view.",
                "Alternative: TeX Live for Windows works the same way but is one big up-front download.",
              ]}
              link={{ href: "https://miktex.org/download", label: "miktex.org" }}
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <PlatformCard
              icon={Terminal}
              os="Linux"
              distribution="TeX Live"
              size="~5 GB"
              steps={[
                "Use your package manager. On Ubuntu / Debian: sudo apt install texlive-full.",
                "Fedora: sudo dnf install texlive-scheme-full. Arch: sudo pacman -S texlive-most texlive-lang.",
                "For the very latest TeX Live (newer than your distro ships), use the official installer from https://www.tug.org/texlive/.",
                "Install TeXstudio (sudo apt install texstudio) or use VS Code + LaTeX Workshop.",
                "Open the editor, paste the starter template, build with F5 or pdflatex on the command line.",
              ]}
              link={{ href: "https://www.tug.org/texlive/", label: "tug.org/texlive" }}
            />
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-tulane-warm-gray bg-tulane-cream/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Editors"
            title="Pick where you'll actually write"
            description="The distribution is the compiler. The editor is where you do the work. Try one; you can always switch."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {editors.map((e, i) => (
              <FadeIn as="li" key={e.name} delay={i * 0.05}>
                <div className="h-full border border-tulane-warm-gray bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-tulane-pale-green text-tulane-green">
                      <FileCode2 className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-tulane-navy">
                        {e.name}
                      </h3>
                      <p className="text-xs font-medium uppercase tracking-wide text-tulane-charcoal/60">
                        {e.platforms}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-tulane-charcoal/85">
                    {e.notes}
                  </p>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <SectionHeader
              eyebrow="Your first document"
              title="A starter template for problem sets"
              description="Copy this into a new file called problem-set-1.tex. Compile it. You're done."
            />
            <p className="mt-6 text-sm text-tulane-charcoal/80">
              It uses <code>amsmath</code>, <code>amssymb</code>, and{" "}
              <code>amsthm</code> (the AMS packages every math student needs)
              and defines a <code>problem</code> / <code>solution</code>{" "}
              environment so your homework looks tidy.
            </p>
          </FadeIn>

          <FadeIn delay={0.05} className="min-w-0 lg:col-span-3">
            <pre className="max-w-full overflow-x-auto border border-tulane-warm-gray bg-tulane-cream/40 p-6 font-mono text-xs leading-relaxed text-tulane-charcoal sm:text-sm">
              <code>{starterTemplate}</code>
            </pre>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-tulane-warm-gray bg-tulane-cream/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Going further"
            title="Trusted references"
            description="When you get stuck, these are the first places to look."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ReferenceCard
              title="Not So Short Intro to LaTeX2e"
              author="Tobias Oetiker et al."
              href="https://tobi.oetiker.ch/lshort/lshort.pdf"
              note="The classic free PDF. ~150 pages, covers everything you'll need for the first two years."
            />
            <ReferenceCard
              title="Overleaf Documentation"
              author="overleaf.com"
              href="https://www.overleaf.com/learn"
              note="Excellent topic-based tutorials. Useful even if you compile locally."
            />
            <ReferenceCard
              title="TeX Stack Exchange"
              author="tex.stackexchange.com"
              href="https://tex.stackexchange.com/"
              note="Where every weird LaTeX error you'll ever hit has already been answered."
            />
            <ReferenceCard
              title="Detexify"
              author="detexify.kirelabs.org"
              href="https://detexify.kirelabs.org/classify.html"
              note="Draw a symbol, get the LaTeX command. Genuinely magical."
            />
            <ReferenceCard
              title="AMS Short Math Guide"
              author="American Mathematical Society"
              href="https://mirror.ctan.org/info/short-math-guide/short-math-guide.pdf"
              note="A 17-page cheat sheet for math typesetting. Print it."
            />
            <ReferenceCard
              title="CTAN"
              author="ctan.org"
              href="https://ctan.org/"
              note="The Comprehensive TeX Archive Network. Every LaTeX package lives here."
            />
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 border border-tulane-warm-gray bg-white p-8 sm:p-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl text-tulane-navy sm:text-3xl">
              Stuck on the install?
            </h2>
            <p className="mt-3 text-tulane-charcoal/85">
              Email us. We&apos;ll walk you through it, or pair up at the next
              meeting. We also run a hands-on LaTeX workshop most semesters.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href={LINKS.email}>Email us</Button>
            <Button href="/events" variant="outline">
              See events
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="mt-5 grid gap-5 sm:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-green">
          Pros
        </p>
        <ul className="mt-3 space-y-2 text-sm text-tulane-charcoal/85">
          {pros.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-tulane-green"
                aria-hidden
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-charcoal/70">
          Trade-offs
        </p>
        <ul className="mt-3 space-y-2 text-sm text-tulane-charcoal/85">
          {cons.map((c) => (
            <li key={c} className="flex items-start gap-2">
              <XCircle
                className="mt-0.5 h-4 w-4 shrink-0 text-tulane-charcoal/55"
                aria-hidden
              />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface PlatformCardProps {
  icon: LucideIcon;
  os: string;
  distribution: string;
  size: string;
  steps: string[];
  link: { href: string; label: string };
}

function PlatformCard({
  icon: Icon,
  os,
  distribution,
  size,
  steps,
  link,
}: PlatformCardProps) {
  return (
    <div className="flex h-full flex-col border border-tulane-warm-gray bg-white p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center bg-tulane-pale-green text-tulane-green">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tulane-blue">
            {os}
          </p>
          <h3 className="font-serif text-xl text-tulane-navy">
            {distribution}
          </h3>
        </div>
      </div>
      <p className="mt-3 text-xs text-tulane-charcoal/65">Download: {size}</p>
      <ol className="mt-4 space-y-3 text-sm text-tulane-charcoal/85">
        {steps.map((step, i) => (
          <li key={step} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-tulane-green text-[11px] font-semibold text-white">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-auto pt-6">
        <Button href={link.href} variant="outline" size="sm" external>
          <ExternalLink className="h-4 w-4" aria-hidden />
          {link.label}
        </Button>
      </div>
    </div>
  );
}

function ReferenceCard({
  title,
  author,
  href,
  note,
}: {
  title: string;
  author: string;
  href: string;
  note: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col border border-tulane-warm-gray bg-white p-5 transition-colors hover:border-tulane-green/40"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg text-tulane-navy">{title}</h3>
          <ExternalLink
            className="h-4 w-4 shrink-0 text-tulane-charcoal/40 transition-colors group-hover:text-tulane-green"
            aria-hidden
          />
        </div>
        <p className="mt-1 text-xs text-tulane-charcoal/60">{author}</p>
        <p className="mt-3 text-sm leading-relaxed text-tulane-charcoal/85">
          {note}
        </p>
      </a>
    </li>
  );
}
