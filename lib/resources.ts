import type { Resource } from "./types";
import { LINKS } from "./links";

// Edit this file to add or update resources. Use real URLs when available.
export const resources: Resource[] = [
  {
    id: "course-planning",
    title: "Math Course Planning Guide",
    category: "Coursework",
    description:
      "A walk-through of Tulane's math curriculum — proof-based vs applied tracks, prereqs, and recommended sequences.",
    href: LINKS.mathDept,
  },
  {
    id: "proof-writing",
    title: "Proof-Writing Tips",
    category: "Proofs",
    description:
      "Short guide to writing clear proofs: structure, common pitfalls, and how to handle the dreaded \"clearly\".",
    href: "#",
  },
  {
    id: "latex-guide",
    title: "Beginner's LaTeX Guide",
    category: "LaTeX",
    description:
      "Set up Overleaf, learn the essentials, and use our problem-set template. Pairs with the LaTeX Workshop event.",
    href: "#",
  },
  {
    id: "putnam-archive",
    title: "Putnam Problem Archive",
    category: "Putnam",
    description:
      "Links to past problems and solutions, plus a curated \"start here\" set chosen for accessibility.",
    href: "#",
  },
  {
    id: "reu-list",
    title: "REU & Summer Programs",
    category: "Research",
    description:
      "A running list of NSF REUs, summer schools, and Tulane research opportunities, with application timelines.",
    href: "#",
  },
  {
    id: "grad-school",
    title: "Grad School Advice",
    category: "Grad School",
    description:
      "Statements, recommendations, the GRE-or-not question, and how to choose programs that fit how you actually like to work.",
    href: "#",
  },
  {
    id: "applied-careers",
    title: "Applied Math & Industry Careers",
    category: "Careers",
    description:
      "Where math majors land outside academia — quant, data, software, actuarial, policy — and how to prepare.",
    href: "#",
  },
  {
    id: "recommended-books",
    title: "Recommended Reading",
    category: "Books",
    description:
      "Books we keep recommending: from \"How to Prove It\" to popular math, plus picks across analysis, algebra, and applied math.",
    href: "#",
  },
];
