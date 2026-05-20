import { Button } from "@/components/Button";
import { MathPatternBackground } from "@/components/MathPatternBackground";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden">
      <MathPatternBackground variant="graph" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="font-serif text-7xl text-tulane-green sm:text-8xl">404</p>
        <h1 className="mt-4 font-serif text-3xl text-tulane-navy sm:text-4xl">
          This page is undefined.
        </h1>
        <p className="mt-4 max-w-xl text-tulane-charcoal/80">
          The page you&apos;re looking for isn&apos;t here — probably a typo, or
          a link from somewhere old. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Home</Button>
          <Button href="/events" variant="outline">
            Events
          </Button>
          <Button href="/about" variant="ghost">
            About / Join
          </Button>
        </div>
      </div>
    </section>
  );
}
