"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "li";
}

export function FadeIn({
  delay = 0,
  className,
  children,
  as = "div",
}: FadeInProps) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
