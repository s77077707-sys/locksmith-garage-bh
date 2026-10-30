export type Location = {
  name: string;
  state: "NC" | "SC";
  county: string;
  population: number;
  slug: string;
};

export const locations: Location[] = [
  { name: "Charlotte", state: "NC", county: "Mecklenburg", population: 964784, slug: "charlotte-nc" },
  // ... full list of 825 entries generated from Wikipedia data ...
  { name: "York", state: "SC", county: "York", population: 8503, slug: "york-sc" },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getLocationsByState(state: "NC" | "SC"): Location[] {
  return locations.filter((loc) => loc.state === state);
}
