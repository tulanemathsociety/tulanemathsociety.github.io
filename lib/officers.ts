import type { Officer } from "./types";

// Edit this file to update officer info each year.
// Use mailto: addresses ending in @tulane.edu.
export const officers: Officer[] = [
  {
    id: "president",
    name: "Eli Naig",
    role: "President",
    email: "enaig@tulane.edu",
    bio: "Bio coming soon.",
    initials: "EN",
  },
  {
    id: "vice-president",
    name: "Arnold Daniel",
    role: "Vice President",
    email: "adaniel12@tulane.edu",
    bio: "Bio coming soon.",
    initials: "AD",
  },
  {
    id: "treasurer",
    name: "Bryce Martin",
    role: "Treasurer",
    email: "bmartin13@tulane.edu",
    bio: "Bio coming soon.",
    initials: "BM",
  },
  {
    id: "secretary",
    name: "Finn Tierney",
    role: "Secretary",
    email: "ntierney1@tulane.edu",
    bio: "Bio coming soon.",
    initials: "FT",
  },
  {
    id: "faculty-advisor",
    name: "Victor H. Moll",
    role: "Faculty Advisor",
    email: "vhm@tulane.edu",
    bio: "Bio coming soon.",
    initials: "VM",
    isAdvisor: true,
  },
];
