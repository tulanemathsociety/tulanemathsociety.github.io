import type { Officer } from "./types";

// Edit this file to update officer info each year.
// Use mailto: addresses ending in @tulane.edu.
export const officers: Officer[] = [
  {
    id: "president",
    name: "Officer Name",
    role: "President",
    email: "mathclub@tulane.edu",
    bio: "Junior, math & CS double major. Loves combinatorics and is collecting a small Putnam scar collection.",
    initials: "MC",
  },
  {
    id: "vice-president",
    name: "Officer Name",
    role: "Vice President",
    email: "mathclub@tulane.edu",
    bio: "Sophomore, applied math. Interested in dynamical systems and the math of New Orleans flood control.",
    initials: "MC",
  },
  {
    id: "treasurer",
    name: "Officer Name",
    role: "Treasurer",
    email: "mathclub@tulane.edu",
    bio: "Senior, math & econ. Keeper of the pizza budget and patron saint of free snacks.",
    initials: "MC",
  },
  {
    id: "events-chair",
    name: "Officer Name",
    role: "Events Chair",
    email: "mathclub@tulane.edu",
    bio: "Junior, pure math. Plans everything from game nights to faculty talks. Always taking suggestions.",
    initials: "MC",
  },
  {
    id: "putnam-coordinator",
    name: "Officer Name",
    role: "Putnam Coordinator",
    email: "mathclub@tulane.edu",
    bio: "Sophomore, math. Runs weekly Putnam prep with a focus on beginners; no contest background needed.",
    initials: "MC",
  },
  {
    id: "outreach-chair",
    name: "Officer Name",
    role: "Outreach Chair",
    email: "mathclub@tulane.edu",
    bio: "First-year, math & physics. Connects the club with K-12 outreach and other student orgs across SSE.",
    initials: "MC",
  },
  {
    id: "faculty-advisor",
    name: "Faculty Advisor",
    role: "Faculty Advisor",
    email: "mathclub@tulane.edu",
    bio: "Faculty member in the Tulane Department of Mathematics. Mentor and academic liaison for the club.",
    initials: "FA",
    isAdvisor: true,
  },
];
