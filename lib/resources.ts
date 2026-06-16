import type { Resource } from "./types";
import { LINKS } from "./links";

// Edit this file to add or update resources.
export const resources: Resource[] = [
  {
    id: "department",
    title: "Tulane Department of Mathematics",
    category: "Coursework",
    description:
      "Official department page for courses, major requirements, advising, and departmental news.",
    href: LINKS.mathDept,
  },
  {
    id: "how-to-prove-it",
    title: "How to Prove It",
    category: "Proofs",
    description:
      "Daniel Velleman's standard introduction to proof: logic, quantifiers, induction, relations, and mathematical writing.",
    href: "https://www.cambridge.org/core/books/how-to-prove-it/6D2965D6130A35D2C8D8CF457C75CE6B",
  },
  {
    id: "overleaf",
    title: "Overleaf",
    category: "LaTeX",
    description:
      "Online LaTeX editor for writing problem sets and notes in the browser.",
    href: "https://www.overleaf.com/",
  },
  {
    id: "mactex",
    title: "MacTeX for macOS",
    category: "LaTeX",
    description:
      "Local LaTeX distribution for macOS. Terminal install: `brew install --cask mactex-no-gui`.",
    href: "https://www.tug.org/mactex/",
  },
  {
    id: "miktex",
    title: "MiKTeX for Windows",
    category: "LaTeX",
    description:
      "Local LaTeX distribution for Windows. Terminal install: `winget install MiKTeX.MiKTeX`.",
    href: "https://miktex.org/download",
  },
  {
    id: "tex-live",
    title: "TeX Live for Linux",
    category: "LaTeX",
    description:
      "Standard LaTeX distribution for Linux. On Debian or Ubuntu, a common terminal install is `sudo apt install texlive-full`.",
    href: "https://www.tug.org/texlive/",
  },
  {
    id: "putnam-archive",
    title: "Putnam Archive",
    category: "Putnam",
    description:
      "Problems and solutions from past Putnam competitions, maintained by Kiran Kedlaya.",
    href: "https://kskedlaya.org/putnam-archive/",
  },
  {
    id: "putnam-official",
    title: "Official Putnam information (MAA)",
    category: "Putnam",
    description:
      "Competition overview, institutional participation details, and current announcements.",
    href: "https://maa.org/student-programs/putnam-competition/",
  },
  {
    id: "putnam-and-beyond",
    title: "Putnam and Beyond",
    category: "Putnam",
    description:
      "A standard text for students who want a sustained collection of advanced competition problems and solutions.",
    href: "https://link.springer.com/book/10.1007/978-0-387-68452-5",
  },
  {
    id: "reu-list",
    title: "REU Search (NSF)",
    category: "Research",
    description:
      "Official NSF directory of Research Experiences for Undergraduates in mathematics and related fields.",
    href: "https://www.nsf.gov/crssprgm/reu/list_result.jsp?unitid=5044",
  },
  {
    id: "mathprograms",
    title: "MathPrograms.org",
    category: "Research",
    description:
      "Application portal used by many mathematics REUs, summer schools, and related programs.",
    href: "https://www.mathprograms.org/",
  },
  {
    id: "clifford-library",
    title: "Alfred H. Clifford Mathematics Research Library",
    category: "Research",
    description:
      "Once it reopens, this is an excellent place to study and browse mathematics literature on campus.",
    href: "https://library.tulane.edu/places/Alfred-H-Clifford-Mathematics-Research-Library",
  },
  {
    id: "grad-school",
    title: "AMS undergraduate and graduate study resources",
    category: "Grad School",
    description:
      "American Mathematical Society guidance on undergraduate opportunities, graduate study, and early career planning.",
    href: "https://www.ams.org/programs/students/undergrad/undergrad",
  },
  {
    id: "ams-careers",
    title: "AMS career resources",
    category: "Careers",
    description:
      "Profiles and guidance on careers for students trained in mathematics.",
    href: "https://www.ams.org/profession/career-info/career-index",
  },
  {
    id: "abstract-algebra",
    title: "Abstract Algebra",
    category: "Books",
    description:
      "Dummit and Foote's standard undergraduate algebra text on groups, rings, fields, and Galois theory.",
    href: "https://www.wiley.com/en-us/Abstract+Algebra,+3rd+Edition-p-9780471433347",
  },
  {
    id: "real-analysis",
    title: "Introduction to Real Analysis",
    category: "Books",
    description:
      "Bartle and Sherbert's rigorous introduction to limits, continuity, differentiation, integration, and sequences of functions.",
    href: "https://www.wiley.com/en-us/search?pq=Introduction+to+Real+Analysis+Bartle+Sherbert",
  },
  {
    id: "book-of-proof",
    title: "Book of Proof",
    category: "Books",
    description:
      "Richard Hammack's free proof text, useful alongside a first formal course in proof writing.",
    href: "https://www.people.vcu.edu/~rhammack/BookOfProof/",
  },
];
