import type { Resource } from "./types";

// Edit this file to add or update resources.
// `href` can be an internal path or an external URL.
export const resources: Resource[] = [
  {
    id: "how-to-prove-it",
    title: "How to Prove It",
    category: "Books",
    description:
      "Best first text for logic, sets, induction, and the structure of rigorous proofs.",
    href: "https://www.google.com/search?tbo=p&tbm=bks&q=How+to+Prove+It+Daniel+Velleman",
  },
  {
    id: "spivak-calculus",
    title: "Calculus",
    category: "Books",
    description:
      "Spivak's rigorous single-variable calculus text and a strong bridge into proof-based analysis.",
    href: "https://www.google.com/search?tbo=p&tbm=bks&q=Michael+Spivak+Calculus",
  },
  {
    id: "axler-linear-algebra",
    title: "Linear Algebra Done Right",
    category: "Books",
    description:
      "A standard honors linear algebra text and the book listed in MIT's undergraduate linear algebra readings.",
    href: "https://ocw.mit.edu/courses/18-700-linear-algebra-fall-2013/pages/readings/",
  },
  {
    id: "dummit-foote",
    title: "Abstract Algebra",
    category: "Books",
    description:
      "Dummit and Foote on groups, rings, fields, modules, and Galois theory. The main algebra recommendation.",
    href: "https://www.wiley.com/en-us/Abstract+Algebra%2C+3rd+Edition-p-9780471433347",
  },
  {
    id: "bartle-sherbert",
    title: "Introduction to Real Analysis",
    category: "Books",
    description:
      "Bartle and Sherbert on sequences, continuity, differentiation, integration, and the foundations of undergraduate analysis.",
    href: "https://www.wiley.com/en-us/Introduction+to+Real+Analysis%2C+4th+Edition-p-9781118017098",
  },
  {
    id: "overleaf",
    title: "Overleaf",
    category: "LaTeX",
    description:
      "Browser-based LaTeX editor with no local installation required.",
    href: "https://www.overleaf.com/",
  },
  {
    id: "texlive-install",
    title: "TeX Live Quick Install",
    category: "LaTeX",
    description: "Official install guide for local TeX and LaTeX setup.",
    href: "https://www.tug.org/texlive/quickinstall.html",
  },
  {
    id: "putnam-archive",
    title: "Putnam Study Resources",
    category: "Putnam",
    description:
      "Books, archives, topic guides, and a four-week introductory study plan for Putnam preparation.",
    href: "/resources/putnam",
  },
  {
    id: "reu-list",
    title: "REU Search (NSF)",
    category: "Research",
    description:
      "The official NSF Research Experiences for Undergraduates directory. Filter by math, statistics, or applied math. Most applications open in November and close in February.",
    href: "https://www.nsf.gov/funding/initiatives/reu/search?f%5b0%5d=reu_research_area:25741",
  },
  {
    id: "mathprograms",
    title: "MathPrograms.org",
    category: "Research",
    description:
      "Application portal used by many REUs and summer programs in mathematics.",
    href: "https://www.mathprograms.org/",
  },
  {
    id: "clifford-library",
    title: "Alfred H. Clifford Mathematics Research Library",
    category: "Research",
    description:
      "Once it reopens, this is an excellent place to study and access mathematics journals, dissertations, and related literature.",
    href: "https://library.tulane.edu/places/Alfred-H-Clifford-Mathematics-Research-Library",
  },
  {
    id: "grad-school",
    title: "Mathematics GRE & Grad School",
    category: "Grad School",
    description:
      "AMS guidance on applying to mathematics graduate programs, including statements, recommendations, and program selection.",
    href: "https://www.ams.org/learning-careers/students/applying",
  },
  {
    id: "ams-careers",
    title: "AMS Career Resources",
    category: "Careers",
    description:
      "American Mathematical Society career materials covering mathematical work in academia, industry, and public service.",
    href: "https://www.ams.org/learning-careers/learning-careers",
  },
];
