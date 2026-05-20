import type { ClubEvent } from "./types";
import { LINKS } from "./links";

// Edit this file to add, remove, or update club events.
// Dates are ISO YYYY-MM-DD; times use a friendly 12-hour string.
export const events: ClubEvent[] = [
  {
    id: "weekly-problem-solving",
    title: "Weekly Problem Solving Night",
    category: "Problem Solving",
    date: "2026-09-08",
    time: "6:00 – 7:30 PM",
    location: "Gibson Hall 310",
    description:
      "Bring a snack, a notebook, and a friend. We work through fun problems in small groups — no prep required and no wrong answers.",
    rsvpUrl: LINKS.wavesync,
  },
  {
    id: "putnam-prep-session",
    title: "Putnam Prep Session",
    category: "Putnam Prep",
    date: "2026-09-12",
    time: "2:00 – 4:00 PM",
    location: "Stanley Thomas 316",
    description:
      "Casual workshop on a Putnam-style topic each week. Beginners are welcome — we walk through technique together.",
    rsvpUrl: LINKS.wavesync,
  },
  {
    id: "faculty-lightning-talks",
    title: "Faculty Lightning Talks",
    category: "Talk",
    date: "2026-09-19",
    time: "5:00 – 6:30 PM",
    location: "Boggs Center 105",
    description:
      "Three Tulane math professors share a favorite idea in 15 minutes each. Pizza after, questions encouraged.",
    rsvpUrl: LINKS.wavesync,
  },
  {
    id: "student-faculty-lunch",
    title: "Student–Faculty Lunch",
    category: "Social",
    date: "2026-09-25",
    time: "12:30 – 1:45 PM",
    location: "LBC Race Courtyard",
    description:
      "An informal lunch with faculty from across pure and applied math. Bring a question, or just come eat with us.",
    rsvpUrl: LINKS.wavesync,
  },
  {
    id: "math-game-night",
    title: "Math Game Night",
    category: "Social",
    date: "2026-10-03",
    time: "7:00 – 9:00 PM",
    location: "LBC Qatar Ballroom",
    description:
      "Set, SET-the-card-game, Hex, Nim, Tak — and our infamous tournament of dice probability puzzles.",
    rsvpUrl: LINKS.wavesync,
  },
  {
    id: "latex-workshop",
    title: "LaTeX Workshop",
    category: "Talk",
    date: "2026-10-10",
    time: "3:00 – 4:30 PM",
    location: "Gibson Hall 310",
    description:
      "A friendly intro to LaTeX for problem sets, theses, and homework. We use Overleaf — bring a laptop.",
    rsvpUrl: LINKS.wavesync,
  },
  {
    id: "reu-grad-panel",
    title: "REU & Grad School Panel",
    category: "Career / Grad School",
    date: "2026-10-17",
    time: "5:30 – 7:00 PM",
    location: "Stanley Thomas 316",
    description:
      "Current Tulane students and recent alumni share how they applied to REUs and graduate programs in math, stats, and CS.",
    rsvpUrl: LINKS.wavesync,
  },
  {
    id: "modeling-team-mixer",
    title: "Modeling Competition Team Mixer",
    category: "Career / Grad School",
    date: "2026-10-24",
    time: "4:00 – 5:30 PM",
    location: "Gibson Hall 310",
    description:
      "Looking for a teammate for COMAP / MCM? Meet the modeling crew, see past problems, and team up.",
    rsvpUrl: LINKS.wavesync,
  },
  {
    id: "integration-bee",
    title: "Integration Bee (tentative)",
    category: "Social",
    date: "2026-11-14",
    time: "6:00 – 8:00 PM",
    location: "TBA",
    description:
      "A bracket-style speed integration tournament — Calc II–ready, spectator-friendly, prizes on the line. Tentatively planned for this semester; email us if you'd want to compete or help organize.",
    rsvpUrl: LINKS.wavesync,
  },
];
