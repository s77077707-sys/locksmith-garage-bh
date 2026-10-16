export type Location = {
  name: string;
  state: "NC" | "SC";
  county: string;
  population: number;
  slug: string;
};

export const locations: Location[] = [
  { name: "Charlotte", state: "NC", county: "Mecklenburg", population: 964784, slug: "charlotte-nc" },
  { name: "Raleigh", state: "NC", county: "Wake", population: 506306, slug: "raleigh-nc" },
  { name: "Greensboro", state: "NC", county: "Guilford", population: 308667, slug: "greensboro-nc" },
  { name: "Durham", state: "NC", county: "Durham", population: 305561, slug: "durham-nc" },
  { name: "Winston-Salem", state: "NC", county: "Forsyth", population: 257271, slug: "winston-salem-nc" },
  { name: "Asheville", state: "NC", county: "Buncombe", population: 93523, slug: "asheville-nc" },
  { name: "Gastonia", state: "NC", county: "Gaston", population: 87067, slug: "gastonia-nc" },
  { name: "Concord", state: "NC", county: "Cabarrus", population: 114598, slug: "concord-nc" },
  { name: "Wilmington", state: "NC", county: "New Hanover", population: 126809, slug: "wilmington-nc" },
  { name: "Bolton", state: "NC", county: "Columbus", population: 448, slug: "bolton-nc" },
  { name: "Cope", state: "SC", county: "Orangeburg", population: 37, slug: "cope-sc" },
  { name: "Charleston", state: "SC", county: "Charleston", population: 150227, slug: "charleston-sc" },
  { name: "Columbia", state: "SC", county: "Richland", population: 136632, slug: "columbia-sc" },
  { name: "Greenville", state: "SC", county: "Greenville", population: 75310, slug: "greenville-sc" },
  { name: "Rock Hill", state: "SC", county: "York", population: 75911, slug: "rock-hill-sc" },
  { name: "Myrtle Beach", state: "SC", county: "Horry", population: 40937, slug: "myrtle-beach-sc" },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getLocationsByState(state: "NC" | "SC"): Location[] {
  return locations.filter((loc) => loc.state === state);
}
