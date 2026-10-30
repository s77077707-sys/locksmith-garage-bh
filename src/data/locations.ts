export type Location = {
  name: string;
  state: "NC" | "SC";
  county: string;
  population: number;
  slug: string;
};

export const locations: Location[] = [
  // North Carolina - Major Cities
  { name: "Charlotte", state: "NC", county: "Mecklenburg", population: 964784, slug: "charlotte-nc" },
  { name: "Raleigh", state: "NC", county: "Wake", population: 506306, slug: "raleigh-nc" },
  { name: "Greensboro", state: "NC", county: "Guilford", population: 308667, slug: "greensboro-nc" },
  { name: "Durham", state: "NC", county: "Durham", population: 305561, slug: "durham-nc" },
  { name: "Winston-Salem", state: "NC", county: "Forsyth", population: 257271, slug: "winston-salem-nc" },
  { name: "Fayetteville", state: "NC", county: "Cumberland", population: 209120, slug: "fayetteville-nc" },
  { name: "Cary", state: "NC", county: "Wake", population: 183582, slug: "cary-nc" },
  { name: "Wilmington", state: "NC", county: "New Hanover", population: 126809, slug: "wilmington-nc" },
  { name: "High Point", state: "NC", county: "Guilford", population: 120571, slug: "high-point-nc" },
  { name: "Concord", state: "NC", county: "Cabarrus", population: 114598, slug: "concord-nc" },
  { name: "Greenville", state: "NC", county: "Pitt", population: 96443, slug: "greenville-nc" },
  { name: "Asheville", state: "NC", county: "Buncombe", population: 93523, slug: "asheville-nc" },
  { name: "Gastonia", state: "NC", county: "Gaston", population: 87067, slug: "gastonia-nc" },
  { name: "Apex", state: "NC", county: "Wake", population: 80419, slug: "apex-nc" },
  { name: "Jacksonville", state: "NC", county: "Onslow", population: 72732, slug: "jacksonville-nc" },
  { name: "Huntersville", state: "NC", county: "Mecklenburg", population: 68535, slug: "huntersville-nc" },
  { name: "Chapel Hill", state: "NC", county: "Orange", population: 63565, slug: "chapel-hill-nc" },
  { name: "Kannapolis", state: "NC", county: "Cabarrus", population: 61708, slug: "kannapolis-nc" },
  { name: "Burlington", state: "NC", county: "Alamance", population: 61496, slug: "burlington-nc" },
  { name: "Wake Forest", state: "NC", county: "Wake", population: 58147, slug: "wake-forest-nc" },
  { name: "Mooresville", state: "NC", county: "Iredell", population: 55842, slug: "mooresville-nc" },
  { name: "Rocky Mount", state: "NC", county: "Nash", population: 55120, slug: "rocky-mount-nc" },
  { name: "Holly Springs", state: "NC", county: "Wake", population: 50288, slug: "holly-springs-nc" },
  { name: "Wilson", state: "NC", county: "Wilson", population: 49572, slug: "wilson-nc" },
  { name: "Fuquay-Varina", state: "NC", county: "Wake", population: 48536, slug: "fuquay-varina-nc" },
  { name: "Hickory", state: "NC", county: "Catawba", population: 45975, slug: "hickory-nc" },
  { name: "Indian Trail", state: "NC", county: "Union", population: 44303, slug: "indian-trail-nc" },
  { name: "Monroe", state: "NC", county: "Union", population: 42644, slug: "monroe-nc" },
  { name: "Garner", state: "NC", county: "Wake", population: 41562, slug: "garner-nc" },
  { name: "Salisbury", state: "NC", county: "Rowan", population: 36879, slug: "salisbury-nc" },
  { name: "Leland", state: "NC", county: "Brunswick", population: 35731, slug: "leland-nc" },
  { name: "Cornelius", state: "NC", county: "Mecklenburg", population: 35094, slug: "cornelius-nc" },
  { name: "New Bern", state: "NC", county: "Craven", population: 34724, slug: "new-bern-nc" },
  { name: "Goldsboro", state: "NC", county: "Wayne", population: 35012, slug: "goldsboro-nc" },
  { name: "Sanford", state: "NC", county: "Lee", population: 34138, slug: "sanford-nc" },
  { name: "Clayton", state: "NC", county: "Johnston", population: 32633, slug: "clayton-nc" },
  { name: "Matthews", state: "NC", county: "Mecklenburg", population: 32769, slug: "matthews-nc" },
  { name: "Morrisville", state: "NC", county: "Wake", population: 32466, slug: "morrisville-nc" },
  { name: "Statesville", state: "NC", county: "Iredell", population: 32181, slug: "statesville-nc" },
  { name: "Mint Hill", state: "NC", county: "Mecklenburg", population: 29476, slug: "mint-hill-nc" },
  { name: "Kernersville", state: "NC", county: "Forsyth", population: 29128, slug: "kernersville-nc" },
  { name: "Asheboro", state: "NC", county: "Randolph", population: 27990, slug: "asheboro-nc" },
  { name: "Thomasville", state: "NC", county: "Davidson", population: 27733, slug: "thomasville-nc" },
  { name: "Waxhaw", state: "NC", county: "Union", population: 23140, slug: "waxhaw-nc" },
  { name: "Bolton", state: "NC", county: "Columbus", population: 448, slug: "bolton-nc" },

  // South Carolina - Major Cities
  { name: "Charleston", state: "SC", county: "Charleston", population: 159423, slug: "charleston-sc" },
  { name: "Columbia", state: "SC", county: "Richland", population: 147035, slug: "columbia-sc" },
  { name: "North Charleston", state: "SC", county: "Charleston", population: 129245, slug: "north-charleston-sc" },
  { name: "Mount Pleasant", state: "SC", county: "Charleston", population: 95469, slug: "mount-pleasant-sc" },
  { name: "Rock Hill", state: "SC", county: "York", population: 75911, slug: "rock-hill-sc" },
  { name: "Greenville", state: "SC", county: "Greenville", population: 75310, slug: "greenville-sc" },
  { name: "Summerville", state: "SC", county: "Dorchester", population: 53177, slug: "summerville-sc" },
  { name: "Goose Creek", state: "SC", county: "Berkeley", population: 52010, slug: "goose-creek-sc" },
  { name: "Greer", state: "SC", county: "Greenville", population: 50007, slug: "greer-sc" },
  { name: "Sumter", state: "SC", county: "Sumter", population: 43094, slug: "sumter-sc" },
  { name: "Myrtle Beach", state: "SC", county: "Horry", population: 40937, slug: "myrtle-beach-sc" },
  { name: "Spartanburg", state: "SC", county: "Spartanburg", population: 38732, slug: "spartanburg-sc" },
  { name: "Hilton Head Island", state: "SC", county: "Beaufort", population: 38654, slug: "hilton-head-island-sc" },
  { name: "Florence", state: "SC", county: "Florence", population: 39243, slug: "florence-sc" },
  { name: "Anderson", state: "SC", county: "Anderson", population: 31323, slug: "anderson-sc" },
  { name: "Aiken", state: "SC", county: "Aiken", population: 33808, slug: "aiken-sc" },
  { name: "Bluffton", state: "SC", county: "Beaufort", population: 36807, slug: "bluffton-sc" },
  { name: "Conway", state: "SC", county: "Horry", population: 30627, slug: "conway-sc" },
  { name: "Cope", state: "SC", county: "Orangeburg", population: 37, slug: "cope-sc" },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function getLocationsByState(state: "NC" | "SC"): Location[] {
  return locations.filter((loc) => loc.state === state);
}
