import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-tulane-green text-white hover:bg-tulane-secondary-green",
  secondary: "bg-tulane-cream text-tulane-navy hover:bg-tulane-warm-gray",
  outline:
    "border border-tulane-green text-tulane-green hover:bg-tulane-pale-green",
  ghost: "text-tulane-green hover:bg-tulane-pale-green",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-12 px-6 text-base",
};

interface BaseButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  external?: boolean;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
}

interface NativeButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function styleClasses(
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button(props: ButtonProps) {
  const { variant, size, className, children } = props;
  const classes = styleClasses(variant, size, className);

  if (props.href !== undefined) {
    const { href, external, target, rel, onClick, ...rest } = props;
    void rest;

    const isHttp = /^https?:/.test(href);
    const isProtocolLink = /^(https?:|mailto:|#)/.test(href);
    const useAnchor = external || isProtocolLink;

    if (useAnchor) {
      return (
        <a
          href={href}
          className={classes}
          target={target ?? (isHttp ? "_blank" : undefined)}
          rel={rel ?? (isHttp ? "noopener noreferrer" : undefined)}
          onClick={onClick}
          aria-label={props["aria-label"]}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={props["aria-label"]}>
        {children}
      </Link>
    );
  }

  const {
    variant: _v,
    size: _s,
    className: _c,
    children: _ch,
    href: _h,
    ...buttonRest
  } = props;
  void _v;
  void _s;
  void _c;
  void _ch;
  void _h;

  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
