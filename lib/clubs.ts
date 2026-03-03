// ─── Types ────────────────────────────────────────────────────────────────────

export interface Club {
  id: string;
  name: string;
  location: string;
  /** Matches filename in /public/logos/{logoSlug}.svg */
  logoSlug: string;
  conference: "East" | "West";
  record: { wins: number; draws: number; losses: number };
  director: string;
}

export function getPoints(record: Club["record"]): number {
  return record.wins * 3 + record.draws;
}

// ─── Fake data — 10 clubs across NC and SC ───────────────────────────────────
// To swap for Airtable: replace CLUBS with an async fetch that returns Club[]
// and pass the result to <ClubDirectory clubs={clubs} />.
// Store logoSlug as a plain text field in Airtable; keep SVGs in /public/logos/.

export const CLUBS: Club[] = [
  // ── East Conference ──────────────────────────────────────────────────────
  {
    id: "charlotte-fc",
    name: "Charlotte FC",
    location: "Charlotte, NC",
    logoSlug: "charlotte-fc",
    conference: "East",
    record: { wins: 12, draws: 3, losses: 2 },
    director: "Marcus Webb",
  },
  {
    id: "durham-united",
    name: "Durham United",
    location: "Durham, NC",
    logoSlug: "durham-united",
    conference: "East",
    record: { wins: 10, draws: 4, losses: 3 },
    director: "Sarah Chen",
  },
  {
    id: "raleigh-athletic",
    name: "Raleigh Athletic",
    location: "Raleigh, NC",
    logoSlug: "raleigh-athletic",
    conference: "East",
    record: { wins: 9, draws: 5, losses: 3 },
    director: "James Okafor",
  },
  {
    id: "triangle-fc",
    name: "Triangle FC",
    location: "Cary, NC",
    logoSlug: "triangle-fc",
    conference: "East",
    record: { wins: 8, draws: 3, losses: 6 },
    director: "Lisa Park",
  },
  {
    id: "coastal-sc",
    name: "Coastal SC",
    location: "Wilmington, NC",
    logoSlug: "coastal-sc",
    conference: "East",
    record: { wins: 6, draws: 4, losses: 7 },
    director: "Carlos Rivera",
  },
  // ── West Conference ──────────────────────────────────────────────────────
  {
    id: "greensboro-fc",
    name: "Greensboro FC",
    location: "Greensboro, NC",
    logoSlug: "greensboro-fc",
    conference: "West",
    record: { wins: 11, draws: 2, losses: 4 },
    director: "Tom Bradley",
  },
  {
    id: "winston-salem-sc",
    name: "Winston-Salem SC",
    location: "Winston-Salem, NC",
    logoSlug: "winston-salem-sc",
    conference: "West",
    record: { wins: 9, draws: 3, losses: 5 },
    director: "Diana Moore",
  },
  {
    id: "asheville-fc",
    name: "Asheville FC",
    location: "Asheville, NC",
    logoSlug: "asheville-fc",
    conference: "West",
    record: { wins: 7, draws: 6, losses: 4 },
    director: "Patrick Hughes",
  },
  {
    id: "columbia-united",
    name: "Columbia United",
    location: "Columbia, SC",
    logoSlug: "columbia-united",
    conference: "West",
    record: { wins: 5, draws: 4, losses: 8 },
    director: "Amara Johnson",
  },
  {
    id: "charleston-fc",
    name: "Charleston FC",
    location: "Charleston, SC",
    logoSlug: "charleston-fc",
    conference: "West",
    record: { wins: 4, draws: 5, losses: 8 },
    director: "Robert Kim",
  },
];
