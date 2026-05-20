import type { ClubEvent } from "./types";
import { LINKS } from "./links";

// Edit this file to add, remove, or update club events.
// Dates are ISO YYYY-MM-DD; times use a friendly 12-hour string.
// `tentative: true` shows a "Tentative" badge on the card.
const TBD = "To be determined";

export const events: ClubEvent[] = [
  {
    id: "weekly-problem-solving",
    title: "Weekly Problem Solving Night",
    category: "Problem Solving",
    date: "2026-09-08",
    time: TBD,
    location: TBD,
    description:
      "Bring a snack, a notebook, and a friend. We work through fun problems in small groups. No prep required and no wrong answers.",
    rsvpUrl: LINKS.wavesync,
    tentative: true,
  },
  {
    id: "putnam-prep-session",
    title: "Putnam Prep Session",
    category: "Putnam Prep",
    date: "2026-09-12",
    time: TBD,
    location: TBD,
    description:
      "Casual workshop on a Putnam-style topic each week. Beginners are welcome; we walk through technique together.",
    rsvpUrl: LINKS.wavesync,
    tentative: true,
  },
  {
    id: "faculty-lightning-talks",
    title: "Faculty Lightning Talks",
    category: "Talk",
    date: "2026-09-19",
    time: TBD,
    location: TBD,
    description:
      "Three Tulane math professors share a favorite idea in 15 minutes each. Pizza after, questions encouraged.",
    rsvpUrl: LINKS.wavesync,
    tentative: true,
  },
  {
    id: "student-faculty-lunch",
    title: "Student–Faculty Lunch",
    category: "Social",
    date: "2026-09-25",
    time: TBD,
    location: TBD,
    description:
      "An informal lunch with faculty from across pure and applied math. Bring a question, or just come eat with us.",
    rsvpUrl: LINKS.wavesync,
    tentative: true,
  },
  {
    id: "math-game-night",
    title: "Math Game Night",
    category: "Social",
    date: "2026-10-03",
    time: TBD,
    location: TBD,
    description:
      "Set, SET-the-card-game, Hex, Nim, Tak, plus our infamous tournament of dice probability puzzles.",
    rsvpUrl: LINKS.wavesync,
    tentative: true,
  },
  {
    id: "latex-workshop",
    title: "LaTeX Workshop",
    category: "Talk",
    date: "2026-10-10",
    time: TBD,
    location: TBD,
    description:
      "A friendly intro to LaTeX for problem sets, theses, and homework. We cover both Overleaf and a local install (TeXShop / MiKTeX / TeX Live). Bring a laptop.",
    rsvpUrl: LINKS.wavesync,
    tentative: true,
  },
  {
    id: "reu-grad-panel",
    title: "REU & Grad School Panel",
    category: "Career / Grad School",
    date: "2026-10-17",
    time: TBD,
    location: TBD,
    description:
      "Current Tulane students and recent alumni share how they applied to REUs and graduate programs in math, stats, and CS.",
    rsvpUrl: LINKS.wavesync,
    tentative: true,
  },
  {
    id: "modeling-team-mixer",
    title: "Modeling Competition Team Mixer",
    category: "Career / Grad School",
    date: "2026-10-24",
    time: TBD,
    location: TBD,
    description:
      "Looking for a teammate for COMAP / MCM? Meet the modeling crew, see past problems, and team up.",
    rsvpUrl: LINKS.wavesync,
    tentative: true,
  },
  {
    id: "integration-bee",
    title: "Integration Bee",
    category: "Social",
    date: "2026-11-14",
    time: TBD,
    location: TBD,
    description:
      "A bracket-style speed integration tournament. Calc II ready, spectator-friendly, prizes on the line. Email us if you'd want to compete or help organize.",
    rsvpUrl: LINKS.wavesync,
    tentative: true,
  },
];
