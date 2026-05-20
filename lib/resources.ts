import type { Resource } from "./types";
import { LINKS } from "./links";

// Edit this file to add or update resources.
// `href` can be an internal path (e.g. "/resources/latex") or an external URL.
export const resources: Resource[] = [
  {
    id: "latex-guide",
    title: "Beginner's LaTeX Guide",
    category: "LaTeX",
    description:
      "Install TeXShop / MacTeX (Mac), MiKTeX (Windows), or TeX Live (Linux), pick an editor, and write your first problem set. Includes a starter template and an Overleaf vs. local comparison.",
    href: "/resources/latex",
  },
  {
    id: "putnam-archive",
    title: "Putnam Study Resources",
    category: "Putnam",
    description:
      "Books, problem archives (Kedlaya, AoPS, official MAA), topic-by-topic study advice, and a four-week starter plan. Built for first-time competitors.",
    href: "/resources/putnam",
  },
  {
    id: "course-planning",
    title: "Math Course Planning Guide",
    category: "Coursework",
    description:
      "Tulane's math curriculum, proof-based vs. applied tracks, prereqs, and recommended sequences. Maintained by the Department of Mathematics.",
    href: LINKS.mathDept,
  },
  {
    id: "proof-writing",
    title: "How to Prove It",
    category: "Proofs",
    description:
      "Daniel Velleman's classic textbook. The standard first proof book at Tulane: logic, set theory, induction, and how to write the dreaded epsilon-delta proof clearly.",
    href: "https://www.cambridge.org/core/books/how-to-prove-it/6D2965D6130A35D2C8D8CF457C75CE6B",
  },
  {
    id: "proof-handouts",
    title: "Tulane Proof-Writing Handouts",
    category: "Proofs",
    description:
      "Short PDFs from Math 3050 and 3070 (Intro to Proof) on common proof structures, when to use induction vs. contradiction, and how to avoid the word \"clearly\".",
    href: LINKS.mathDept,
  },
  {
    id: "reu-list",
    title: "REU Search (NSF)",
    category: "Research",
    description:
      "The official NSF Research Experiences for Undergraduates directory. Filter by math, statistics, or applied math. Most applications open in November and close in February.",
    href: "https://www.nsf.gov/crssprgm/reu/list_result.jsp?unitid=5044",
  },
  {
    id: "mathprograms",
    title: "MathPrograms.org",
    category: "Research",
    description:
      "Where most math REUs and summer schools post their applications. Make an account once; reuse it for every application.",
    href: "https://www.mathprograms.org/",
  },
  {
    id: "grad-school",
    title: "Mathematics GRE & Grad School",
    category: "Grad School",
    description:
      "AMS guide to applying to math PhD programs: statements, recommendations, the subject GRE (or not), and how to choose programs that fit how you actually like to work.",
    href: "https://www.ams.org/programs/students/undergrad/undergrad",
  },
  {
    id: "ams-careers",
    title: "AMS Career Resources",
    category: "Careers",
    description:
      "Where math majors land outside academia: quant finance, data, software, actuarial, policy. Profiles, interviews, and starting-salary data from the American Mathematical Society.",
    href: "https://www.ams.org/profession/career-info/career-index",
  },
  {
    id: "siam-careers",
    title: "SIAM Careers in Applied Math",
    category: "Careers",
    description:
      "Stories from people who use math in industry. Especially useful if you're interested in operations research, modeling, scientific computing, or biostatistics.",
    href: "https://www.siam.org/students-education/programs-initiatives/thinking-of-a-career-in-applied-mathematics",
  },
  {
    id: "recommended-books",
    title: "Recommended Reading",
    category: "Books",
    description:
      "Books we keep recommending. From How to Prove It and How to Solve It to Visual Complex Analysis, A Mathematician's Apology, and Spivak's Calculus.",
    href: "/resources/reading",
  },
];
