export type Location = {
  name: string;
  state: "NC" | "SC";
  county: string;
  population: number;
  slug: string;
  isGroup?: boolean;
  includedTowns?: string[];
  nearby?: string[];
  localNote?: string;
};

export const locations: Location[] = [
  { name: "Aberdeen", state: "NC", county: "Moore", population: 10000, slug: "aberdeen-nc", nearby: [], localNote: "Local service." },
  { name: "Ahoskie", state: "NC", county: "Hertford", population: 4800, slug: "ahoskie-nc", nearby: [], localNote: "Local service." }
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getLocationsByState(state: "NC" | "SC"): Location[] {
  return locations.filter((loc) => loc.state === state);
}

export function getIndividualLocations(): Location[] {
  return locations.filter((loc) => !loc.isGroup);
}

export function getGroupedLocations(): Location[] {
  return locations.filter((loc) => loc.isGroup);
}
