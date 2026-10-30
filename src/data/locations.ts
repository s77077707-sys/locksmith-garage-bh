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
  // --- North Carolina: Major & Medium Cities (Individual Pages) ---
  { name: "Charlotte", state: "NC", county: "Mecklenburg", population: 964784, slug: "charlotte-nc", nearby: ["Matthews", "Mint Hill", "Pineville", "Huntersville"], localNote: "Serving the greater Charlotte metro including all surrounding suburbs." },
  { name: "Raleigh", state: "NC", county: "Wake", population: 506306, slug: "raleigh-nc", nearby: ["Cary", "Apex", "Wake Forest", "Garner"], localNote: "Full coverage across the Triangle area." },
  { name: "Greensboro", state: "NC", county: "Guilford", population: 308667, slug: "greensboro-nc", nearby: ["High Point", "Kernersville", "Summerfield"], localNote: "Serving Greensboro and the Triad." },
  { name: "Durham", state: "NC", county: "Durham", population: 305561, slug: "durham-nc", nearby: ["Chapel Hill", "Hillsborough"], localNote: "Covering Durham and nearby Research Triangle communities." },
  { name: "Winston-Salem", state: "NC", county: "Forsyth", population: 257271, slug: "winston-salem-nc", nearby: ["Kernersville", "Clemmons", "Lewisville"], localNote: "Serving Winston-Salem and surrounding Forsyth County." },
  { name: "Fayetteville", state: "NC", county: "Cumberland", population: 209120, slug: "fayetteville-nc", nearby: ["Hope Mills", "Spring Lake"], localNote: "Military-friendly service across Fayetteville and Fort Liberty area." },
  { name: "Cary", state: "NC", county: "Wake", population: 183582, slug: "cary-nc", nearby: ["Apex", "Morrisville", "Holly Springs"], localNote: "Fast response across Cary and western Wake County." },
  { name: "Wilmington", state: "NC", county: "New Hanover", population: 126809, slug: "wilmington-nc", nearby: ["Leland", "Carolina Beach", "Wrightsville Beach"], localNote: "Serving the Wilmington area and coastal communities." },
  { name: "High Point", state: "NC", county: "Guilford", population: 120571, slug: "high-point-nc", nearby: ["Thomasville", "Archdale", "Jamestown"], localNote: "Covering High Point and the furniture capital area." },
  { name: "Concord", state: "NC", county: "Cabarrus", population: 114598, slug: "concord-nc", nearby: ["Kannapolis", "Harrisburg", "Midland"], localNote: "Serving Concord, Kannapolis, and the Charlotte Motor Speedway area." },
  { name: "Asheville", state: "NC", county: "Buncombe", population: 93523, slug: "asheville-nc", nearby: ["Black Mountain", "Woodfin", "Weaverville"], localNote: "Mountain coverage including Asheville and surrounding Blue Ridge communities." },
  { name: "Gastonia", state: "NC", county: "Gaston", population: 87067, slug: "gastonia-nc", nearby: ["Belmont", "Mount Holly", "Dallas"], localNote: "Serving Gastonia and western Gaston County." },
  { name: "Boone", state: "NC", county: "Watauga", population: 19929, slug: "boone-nc", nearby: ["Blowing Rock", "Banner Elk", "Valle Crucis"], localNote: "Serving the High Country including Boone, Blowing Rock, and Banner Elk." },
  { name: "Hickory", state: "NC", county: "Catawba", population: 45975, slug: "hickory-nc", nearby: ["Conover", "Newton", "Long View"], localNote: "Covering Hickory and the Unifour area." },
  { name: "Mooresville", state: "NC", county: "Iredell", population: 55842, slug: "mooresville-nc", nearby: ["Lake Norman", "Troutman", "Davidson"], localNote: "Serving Mooresville and the Lake Norman region." },
  { name: "Chapel Hill", state: "NC", county: "Orange", population: 63565, slug: "chapel-hill-nc", nearby: ["Carrboro", "Hillsborough", "Durham"], localNote: "University area coverage for Chapel Hill and Carrboro." },
  { name: "Apex", state: "NC", county: "Wake", population: 80419, slug: "apex-nc", nearby: ["Cary", "Holly Springs", "Fuquay-Varina"], localNote: "Fast service across Apex and southwestern Wake County." },
  { name: "Holly Springs", state: "NC", county: "Wake", population: 50288, slug: "holly-springs-nc", nearby: ["Apex", "Fuquay-Varina", "Cary"], localNote: "Serving Holly Springs and southern Wake County." },
  { name: "Fuquay-Varina", state: "NC", county: "Wake", population: 48536, slug: "fuquay-varina-nc", nearby: ["Holly Springs", "Angier", "Lillington"], localNote: "Covering Fuquay-Varina and southern Wake / Harnett border." },
  { name: "Huntersville", state: "NC", county: "Mecklenburg", population: 68535, slug: "huntersville-nc", nearby: ["Cornelius", "Davidson", "Charlotte"], localNote: "Serving Huntersville and northern Mecklenburg." },
  { name: "Kannapolis", state: "NC", county: "Cabarrus", population: 61708, slug: "kannapolis-nc", nearby: ["Concord", "Landis", "China Grove"], localNote: "Serving Kannapolis and the Cabarrus-Rowan border." },
  { name: "Burlington", state: "NC", county: "Alamance", population: 61496, slug: "burlington-nc", nearby: ["Graham", "Mebane", "Elon"], localNote: "Covering Burlington and Alamance County." },
  { name: "Wake Forest", state: "NC", county: "Wake", population: 58147, slug: "wake-forest-nc", nearby: ["Rolesville", "Youngsville", "Raleigh"], localNote: "Serving Wake Forest and northern Wake County." },
  { name: "Rocky Mount", state: "NC", county: "Nash", population: 55120, slug: "rocky-mount-nc", nearby: ["Nashville", "Tarboro", "Whitakers"], localNote: "Serving Rocky Mount and the Nash-Edgecombe area." },
  { name: "Wilson", state: "NC", county: "Wilson", population: 49572, slug: "wilson-nc", nearby: ["Elm City", "Stantonsburg"], localNote: "Covering Wilson and surrounding Wilson County." },
  { name: "Jacksonville", state: "NC", county: "Onslow", population: 72732, slug: "jacksonville-nc", nearby: ["Swansboro", "Richlands", "Camp Lejeune area"], localNote: "Military-friendly service for Jacksonville and Onslow County." },
  { name: "Greenville", state: "NC", county: "Pitt", population: 96443, slug: "greenville-nc", nearby: ["Winterville", "Ayden", "Farmville"], localNote: "Serving Greenville and Pitt County." },
  { name: "Monroe", state: "NC", county: "Union", population: 42644, slug: "monroe-nc", nearby: ["Indian Trail", "Waxhaw", "Stallings"], localNote: "Covering Monroe and Union County." },
  { name: "Salisbury", state: "NC", county: "Rowan", population: 36879, slug: "salisbury-nc", nearby: ["China Grove", "Landis", "Spencer"], localNote: "Serving Salisbury and Rowan County." },
  { name: "Leland", state: "NC", county: "Brunswick", population: 35731, slug: "leland-nc", nearby: ["Wilmington", "Belville", "Navassa"], localNote: "Serving Leland and northern Brunswick County." },
  { name: "New Bern", state: "NC", county: "Craven", population: 34724, slug: "new-bern-nc", nearby: ["Havelock", "Trent Woods", "James City"], localNote: "Covering New Bern and Craven County." },
  { name: "Goldsboro", state: "NC", county: "Wayne", population: 35012, slug: "goldsboro-nc", nearby: ["Mount Olive", "Fremont"], localNote: "Serving Goldsboro and Wayne County." },
  { name: "Sanford", state: "NC", county: "Lee", population: 34138, slug: "sanford-nc", nearby: ["Broadway", "Jonesboro"], localNote: "Covering Sanford and Lee County." },
  { name: "Statesville", state: "NC", county: "Iredell", population: 32181, slug: "statesville-nc", nearby: ["Troutman", "Mooresville"], localNote: "Serving Statesville and central Iredell County." },
  { name: "Asheboro", state: "NC", county: "Randolph", population: 27990, slug: "asheboro-nc", nearby: ["Randleman", "Archdale"], localNote: "Covering Asheboro and Randolph County." },
  { name: "Thomasville", state: "NC", county: "Davidson", population: 27733, slug: "thomasville-nc", nearby: ["High Point", "Lexington", "Archdale"], localNote: "Serving Thomasville and the Davidson-Guilford border." },
  { name: "Shelby", state: "NC", county: "Cleveland", population: 23309, slug: "shelby-nc", nearby: ["Kings Mountain", "Boiling Springs"], localNote: "Covering Shelby and Cleveland County." },
  { name: "Hendersonville", state: "NC", county: "Henderson", population: 15867, slug: "hendersonville-nc", nearby: ["Fletcher", "Mills River", "Flat Rock"], localNote: "Serving Hendersonville and Henderson County." },
  { name: "Southern Pines", state: "NC", county: "Moore", population: 17357, slug: "southern-pines-nc", nearby: ["Pinehurst", "Aberdeen", "Whispering Pines"], localNote: "Covering the Sandhills including Southern Pines and Pinehurst." },
  { name: "Pinehurst", state: "NC", county: "Moore", population: 18670, slug: "pinehurst-nc", nearby: ["Southern Pines", "Aberdeen"], localNote: "Serving Pinehurst and the golf capital area." },
  { name: "Elizabeth City", state: "NC", county: "Pasquotank", population: 19622, slug: "elizabeth-city-nc", nearby: ["Camden", "Hertford"], localNote: "Serving Elizabeth City and the Albemarle region." },
  { name: "Kinston", state: "NC", county: "Lenoir", population: 19705, slug: "kinston-nc", nearby: ["La Grange", "Grifton"], localNote: "Covering Kinston and Lenoir County." },
  { name: "Lumberton", state: "NC", county: "Robeson", population: 18955, slug: "lumberton-nc", nearby: ["Pembroke", "Rowland"], localNote: "Serving Lumberton and Robeson County." },
  { name: "Morganton", state: "NC", county: "Burke", population: 17849, slug: "morganton-nc", nearby: ["Valdese", "Drexel"], localNote: "Covering Morganton and Burke County." },
  { name: "Albemarle", state: "NC", county: "Stanly", population: 17769, slug: "albemarle-nc", nearby: ["Badin", "Norwood"], localNote: "Serving Albemarle and Stanly County." },
  { name: "Lenoir", state: "NC", county: "Caldwell", population: 18372, slug: "lenoir-nc", nearby: ["Hudson", "Granite Falls"], localNote: "Covering Lenoir and Caldwell County." },
  { name: "Eden", state: "NC", county: "Rockingham", population: 15500, slug: "eden-nc", nearby: ["Reidsville", "Madison"], localNote: "Serving Eden and Rockingham County." },
  { name: "Henderson", state: "NC", county: "Vance", population: 15013, slug: "henderson-nc", nearby: ["Oxford", "Kittrell"], localNote: "Covering Henderson and Vance County." },
  { name: "Reidsville", state: "NC", county: "Rockingham", population: 14692, slug: "reidsville-nc", nearby: ["Eden", "Madison"], localNote: "Serving Reidsville and Rockingham County." },
  { name: "Roanoke Rapids", state: "NC", county: "Halifax", population: 14386, slug: "roanoke-rapids-nc", nearby: ["Weldon", "Gaston"], localNote: "Covering Roanoke Rapids and Halifax County." },
  { name: "Newton", state: "NC", county: "Catawba", population: 13822, slug: "newton-nc", nearby: ["Conover", "Hickory", "Maiden"], localNote: "Serving Newton and Catawba County." },
  { name: "Smithfield", state: "NC", county: "Johnston", population: 13114, slug: "smithfield-nc", nearby: ["Selma", "Clayton", "Four Oaks"], localNote: "Covering Smithfield and Johnston County." },
  { name: "Lincolnton", state: "NC", county: "Lincoln", population: 12465, slug: "lincolnton-nc", nearby: ["Denver", "Maiden"], localNote: "Serving Lincolnton and Lincoln County." },
  { name: "Kings Mountain", state: "NC", county: "Cleveland", population: 12117, slug: "kings-mountain-nc", nearby: ["Shelby", "Bessemer City"], localNote: "Covering Kings Mountain and the Cleveland-Gaston border." },
  { name: "Morehead City", state: "NC", county: "Carteret", population: 10434, slug: "morehead-city-nc", nearby: ["Beaufort", "Atlantic Beach", "Newport"], localNote: "Serving Morehead City and the Crystal Coast." },
  { name: "Waynesville", state: "NC", county: "Haywood", population: 11006, slug: "waynesville-nc", nearby: ["Maggie Valley", "Canton"], localNote: "Covering Waynesville and Haywood County." },
  { name: "Mount Airy", state: "NC", county: "Surry", population: 10682, slug: "mount-airy-nc", nearby: ["Pilot Mountain", "Dobson"], localNote: "Serving Mount Airy and Surry County." },
  { name: "Washington", state: "NC", county: "Beaufort", population: 9910, slug: "washington-nc", nearby: ["Chocowinity", "Bath"], localNote: "Covering Washington and Beaufort County." },
  { name: "Oxford", state: "NC", county: "Granville", population: 8985, slug: "oxford-nc", nearby: ["Creedmoor", "Butner"], localNote: "Serving Oxford and Granville County." },
  { name: "Rockingham", state: "NC", county: "Richmond", population: 8815, slug: "rockingham-nc", nearby: ["Hamlet", "Ellerbe"], localNote: "Covering Rockingham and Richmond County." },
  { name: "Dunn", state: "NC", county: "Harnett", population: 8814, slug: "dunn-nc", nearby: ["Erwin", "Benson"], localNote: "Serving Dunn and Harnett County." },
  { name: "Black Mountain", state: "NC", county: "Buncombe", population: 8491, slug: "black-mountain-nc", nearby: ["Asheville", "Swannanoa", "Montreat"], localNote: "Serving Black Mountain and eastern Buncombe County." },
  { name: "Clinton", state: "NC", county: "Sampson", population: 8466, slug: "clinton-nc", nearby: ["Newton Grove", "Roseboro"], localNote: "Covering Clinton and Sampson County." },
  { name: "Roxboro", state: "NC", county: "Person", population: 8380, slug: "roxboro-nc", nearby: ["Timberlake"], localNote: "Serving Roxboro and Person County." },
  { name: "Brevard", state: "NC", county: "Transylvania", population: 8098, slug: "brevard-nc", nearby: ["Pisgah Forest", "Rosman"], localNote: "Covering Brevard and Transylvania County." },
  { name: "Kill Devil Hills", state: "NC", county: "Dare", population: 7731, slug: "kill-devil-hills-nc", nearby: ["Nags Head", "Kitty Hawk", "Southern Shores"], localNote: "Serving the Outer Banks including Kill Devil Hills." },
  { name: "Forest City", state: "NC", county: "Rutherford", population: 7410, slug: "forest-city-nc", nearby: ["Spindale", "Rutherfordton"], localNote: "Covering Forest City and Rutherford County." },
  { name: "Marion", state: "NC", county: "McDowell", population: 7440, slug: "marion-nc", nearby: ["Old Fort", "Nebo"], localNote: "Serving Marion and McDowell County." },
  { name: "King", state: "NC", county: "Stokes", population: 7977, slug: "king-nc", nearby: ["Walnut Cove", "Danbury"], localNote: "Covering King and Stokes County." },
  { name: "Siler City", state: "NC", county: "Chatham", population: 8155, slug: "siler-city-nc", nearby: ["Pittsboro"], localNote: "Serving Siler City and Chatham County." },
  { name: "Butner", state: "NC", county: "Granville", population: 8112, slug: "butner-nc", nearby: ["Creedmoor", "Oxford"], localNote: "Covering Butner and Granville County." },
  { name: "Elon", state: "NC", county: "Alamance", population: 11366, slug: "elon-nc", nearby: ["Burlington", "Gibsonville"], localNote: "Serving Elon and northern Alamance County." },
  { name: "Summerfield", state: "NC", county: "Guilford", population: 11327, slug: "summerfield-nc", nearby: ["Greensboro", "Oak Ridge"], localNote: "Covering Summerfield and northern Guilford County." },
  { name: "Tarboro", state: "NC", county: "Edgecombe", population: 10979, slug: "tarboro-nc", nearby: ["Princeville", "Rocky Mount"], localNote: "Serving Tarboro and Edgecombe County." },
  { name: "Winterville", state: "NC", county: "Pitt", population: 10973, slug: "winterville-nc", nearby: ["Greenville", "Ayden"], localNote: "Covering Winterville and southern Pitt County." },
  { name: "Aberdeen", state: "NC", county: "Moore", population: 10066, slug: "aberdeen-nc", nearby: ["Pinehurst", "Southern Pines"], localNote: "Serving Aberdeen and the Sandhills." },
  { name: "Gibsonville", state: "NC", county: "Guilford", population: 9876, slug: "gibsonville-nc", nearby: ["Elon", "Burlington"], localNote: "Covering Gibsonville and the Alamance-Guilford border." },
  { name: "Hillsborough", state: "NC", county: "Orange", population: 9800, slug: "hillsborough-nc", nearby: ["Chapel Hill", "Carrboro"], localNote: "Serving Hillsborough and Orange County." },
  // --- Additional Cities Added ---
  { name: "Garner", state: "NC", county: "Wake", population: 41562, slug: "garner-nc", nearby: ["Raleigh", "Clayton"], localNote: "Serving Garner and southern Wake County." },
  { name: "Cornelius", state: "NC", county: "Mecklenburg", population: 35094, slug: "cornelius-nc", nearby: ["Huntersville", "Davidson"], localNote: "Serving Cornelius and Lake Norman area." },
  { name: "Matthews", state: "NC", county: "Mecklenburg", population: 32769, slug: "matthews-nc", nearby: ["Mint Hill", "Charlotte"], localNote: "Covering Matthews and southeastern Mecklenburg." },
  { name: "Clayton", state: "NC", county: "Johnston", population: 32633, slug: "clayton-nc", nearby: ["Garner", "Smithfield"], localNote: "Serving Clayton and western Johnston County." },
  { name: "Mint Hill", state: "NC", county: "Mecklenburg", population: 29476, slug: "mint-hill-nc", nearby: ["Matthews", "Charlotte"], localNote: "Serving Mint Hill and eastern Mecklenburg." },
  { name: "Kernersville", state: "NC", county: "Forsyth", population: 29128, slug: "kernersville-nc", nearby: ["Winston-Salem", "Greensboro"], localNote: "Covering Kernersville and the Triad border." },
  { name: "Indian Trail", state: "NC", county: "Union", population: 44303, slug: "indian-trail-nc", nearby: ["Monroe", "Waxhaw"], localNote: "Serving Indian Trail and Union County." },
  { name: "Waxhaw", state: "NC", county: "Union", population: 23140, slug: "waxhaw-nc", nearby: ["Indian Trail", "Monroe"], localNote: "Covering Waxhaw and southern Union County." },
  { name: "Clemmons", state: "NC", county: "Forsyth", population: 22471, slug: "clemmons-nc", nearby: ["Winston-Salem", "Lewisville"], localNote: "Serving Clemmons and western Forsyth County." },
  { name: "Knightdale", state: "NC", county: "Wake", population: 21829, slug: "knightdale-nc", nearby: ["Raleigh", "Wendell"], localNote: "Covering Knightdale and eastern Wake County." },
  { name: "Carrboro", state: "NC", county: "Orange", population: 21079, slug: "carrboro-nc", nearby: ["Chapel Hill", "Hillsborough"], localNote: "Serving Carrboro and the Chapel Hill area." },
  { name: "Mebane", state: "NC", county: "Alamance", population: 20654, slug: "mebane-nc", nearby: ["Burlington", "Graham"], localNote: "Covering Mebane and western Alamance County." },
  { name: "Harrisburg", state: "NC", county: "Cabarrus", population: 20335, slug: "harrisburg-nc", nearby: ["Concord", "Kannapolis"], localNote: "Serving Harrisburg and Cabarrus County." },
  { name: "Lexington", state: "NC", county: "Davidson", population: 19904, slug: "lexington-nc", nearby: ["Thomasville", "High Point"], localNote: "Covering Lexington and Davidson County." },
  { name: "Hope Mills", state: "NC", county: "Cumberland", population: 18102, slug: "hope-mills-nc", nearby: ["Fayetteville"], localNote: "Serving Hope Mills and southern Cumberland County." },
  { name: "Mount Holly", state: "NC", county: "Gaston", population: 18723, slug: "mount-holly-nc", nearby: ["Gastonia", "Belmont"], localNote: "Covering Mount Holly and eastern Gaston County." },
  { name: "Havelock", state: "NC", county: "Craven", population: 17407, slug: "havelock-nc", nearby: ["New Bern"], localNote: "Military-friendly service for Havelock and Cherry Point area." },
  { name: "Wendell", state: "NC", county: "Wake", population: 16845, slug: "wendell-nc", nearby: ["Knightdale", "Zebulon"], localNote: "Serving Wendell and eastern Wake County." },
  { name: "Davidson", state: "NC", county: "Mecklenburg", population: 16276, slug: "davidson-nc", nearby: ["Cornelius", "Huntersville"], localNote: "Covering Davidson and Lake Norman." },
  { name: "Belmont", state: "NC", county: "Gaston", population: 16044, slug: "belmont-nc", nearby: ["Gastonia", "Mount Holly"], localNote: "Serving Belmont and Gaston County." },
  { name: "Laurinburg", state: "NC", county: "Scotland", population: 15130, slug: "laurinburg-nc", nearby: ["Maxton"], localNote: "Covering Laurinburg and Scotland County." },
  { name: "Graham", state: "NC", county: "Alamance", population: 19311, slug: "graham-nc", nearby: ["Burlington", "Mebane"], localNote: "Serving Graham and Alamance County." },
  { name: "Stallings", state: "NC", county: "Union", population: 17617, slug: "stallings-nc", nearby: ["Indian Trail", "Matthews"], localNote: "Covering Stallings and Union County." },
  { name: "Morrisville", state: "NC", county: "Wake", population: 32466, slug: "morrisville-nc", nearby: ["Cary", "Apex"], localNote: "Covering Morrisville and western Wake County." },
  { name: "Charleston", state: "SC", county: "Charleston", population: 159423, slug: "charleston-sc", nearby: ["North Charleston", "Mount Pleasant"], localNote: "Serving the Charleston metro and Lowcountry." },
  { name: "Columbia", state: "SC", county: "Richland", population: 147035, slug: "columbia-sc", nearby: ["West Columbia", "Cayce"], localNote: "Full coverage across the Columbia metro area." },
  { name: "North Charleston", state: "SC", county: "Charleston", population: 129245, slug: "north-charleston-sc", nearby: ["Charleston", "Goose Creek"], localNote: "Serving North Charleston and northern Charleston County." },
  { name: "Mount Pleasant", state: "SC", county: "Charleston", population: 95469, slug: "mount-pleasant-sc", nearby: ["Charleston"], localNote: "Covering Mount Pleasant and East Cooper." },
  { name: "Rock Hill", state: "SC", county: "York", population: 75911, slug: "rock-hill-sc", nearby: ["Fort Mill", "Tega Cay"], localNote: "Serving Rock Hill and York County near the Charlotte border." },
  { name: "Greenville", state: "SC", county: "Greenville", population: 75310, slug: "greenville-sc", nearby: ["Greer", "Mauldin"], localNote: "Covering Greenville and the Upstate." },
  { name: "Summerville", state: "SC", county: "Dorchester", population: 53177, slug: "summerville-sc", nearby: ["Goose Creek"], localNote: "Serving Summerville and Dorchester County." },
  { name: "Goose Creek", state: "SC", county: "Berkeley", population: 52010, slug: "goose-creek-sc", nearby: ["North Charleston"], localNote: "Covering Goose Creek and Berkeley County." },
  { name: "Greer", state: "SC", county: "Greenville", population: 50007, slug: "greer-sc", nearby: ["Greenville", "Spartanburg"], localNote: "Serving Greer and the Greenville-Spartanburg corridor." },
  { name: "Myrtle Beach", state: "SC", county: "Horry", population: 40937, slug: "myrtle-beach-sc", nearby: ["North Myrtle Beach"], localNote: "Serving the Grand Strand including Myrtle Beach." },
  { name: "Spartanburg", state: "SC", county: "Spartanburg", population: 39978, slug: "spartanburg-sc", nearby: ["Greer"], localNote: "Covering Spartanburg and Spartanburg County." },
  { name: "Fort Mill", state: "SC", county: "York", population: 38673, slug: "fort-mill-sc", nearby: ["Rock Hill", "Tega Cay"], localNote: "Serving Fort Mill and the Charlotte southern suburbs." },
  { name: "Hilton Head Island", state: "SC", county: "Beaufort", population: 38196, slug: "hilton-head-island-sc", nearby: ["Bluffton"], localNote: "Covering Hilton Head Island and southern Beaufort County." },
  { name: "Bluffton", state: "SC", county: "Beaufort", population: 36807, slug: "bluffton-sc", nearby: ["Hilton Head Island"], localNote: "Serving Bluffton and the Lowcountry." },
  { name: "Aiken", state: "SC", county: "Aiken", population: 33808, slug: "aiken-sc", nearby: ["North Augusta"], localNote: "Covering Aiken and Aiken County." },
  { name: "Anderson", state: "SC", county: "Anderson", population: 31323, slug: "anderson-sc", nearby: ["Easley"], localNote: "Covering Anderson and Anderson County." },
  { name: "Conway", state: "SC", county: "Horry", population: 30627, slug: "conway-sc", nearby: ["Myrtle Beach"], localNote: "Serving Conway and Horry County." },
  { name: "Easley", state: "SC", county: "Pickens", population: 27319, slug: "easley-sc", nearby: ["Greenville"], localNote: "Serving Easley and Pickens County." },
  { name: "Lexington", state: "SC", county: "Lexington", population: 25729, slug: "lexington-sc", nearby: ["West Columbia"], localNote: "Serving Lexington and Lexington County." },
  { name: "Greenwood", state: "SC", county: "Greenwood", population: 22745, slug: "greenwood-sc", nearby: [], localNote: "Covering Greenwood and Greenwood County." },
  { name: "Clemson", state: "SC", county: "Pickens", population: 18941, slug: "clemson-sc", nearby: ["Pendleton"], localNote: "University area coverage for Clemson." },
  { name: "Orangeburg", state: "SC", county: "Orangeburg", population: 13280, slug: "orangeburg-sc", nearby: [], localNote: "Serving Orangeburg and Orangeburg County." },
  { name: "Gaffney", state: "SC", county: "Cherokee", population: 12484, slug: "gaffney-sc", nearby: [], localNote: "Covering Gaffney and Cherokee County." },
  { name: "Newberry", state: "SC", county: "Newberry", population: 10866, slug: "newberry-sc", nearby: [], localNote: "Covering Newberry and Newberry County." },
  { name: "Sumter", state: "SC", county: "Sumter", population: 43094, slug: "sumter-sc", nearby: [], localNote: "Military-friendly service for Sumter and Sumter County." },
  { name: "Florence", state: "SC", county: "Florence", population: 41231, slug: "florence-sc", nearby: [], localNote: "Covering Florence and the Pee Dee region." },
  // --- Small Town Groups (to avoid thin content) ---
  { name: "Small Towns of Watauga & Avery County", state: "NC", county: "Watauga / Avery", population: 5000, slug: "small-towns-watauga-avery-nc", isGroup: true, includedTowns: ["Blowing Rock", "Banner Elk", "Valle Crucis", "Sugar Mountain", "Beech Mountain"], nearby: ["Boone"], localNote: "Serving smaller High Country communities." },
  { name: "Small Towns of Brunswick County", state: "NC", county: "Brunswick", population: 8000, slug: "small-towns-brunswick-nc", isGroup: true, includedTowns: ["Shallotte", "Ocean Isle Beach", "Sunset Beach", "Calabash", "Oak Island"], nearby: ["Leland", "Wilmington"], localNote: "Covering coastal Brunswick County communities." },
  { name: "Small Towns of Carteret County", state: "NC", county: "Carteret", population: 6000, slug: "small-towns-carteret-nc", isGroup: true, includedTowns: ["Beaufort", "Atlantic Beach", "Emerald Isle", "Pine Knoll Shores", "Newport"], nearby: ["Morehead City"], localNote: "Serving Crystal Coast communities." },
  { name: "Small Towns of Dare County (Outer Banks)", state: "NC", county: "Dare", population: 5000, slug: "small-towns-dare-nc", isGroup: true, includedTowns: ["Nags Head", "Kitty Hawk", "Southern Shores", "Manteo", "Duck"], nearby: ["Kill Devil Hills"], localNote: "Covering Outer Banks communities." },
  { name: "Small Towns of York & Lancaster County", state: "SC", county: "York / Lancaster", population: 8000, slug: "small-towns-york-lancaster-sc", isGroup: true, includedTowns: ["Clover", "York", "McConnells", "Sharon", "Hickory Grove", "Kershaw", "Heath Springs"], nearby: ["Rock Hill", "Fort Mill"], localNote: "Serving smaller communities near the Charlotte border." },
  { name: "Small Towns of Horry County (Grand Strand)", state: "SC", county: "Horry", population: 18000, slug: "small-towns-horry-sc", isGroup: true, includedTowns: ["North Myrtle Beach", "Surfside Beach", "Garden City", "Little River", "Loris", "Aynor"], nearby: ["Myrtle Beach", "Conway"], localNote: "Covering smaller Grand Strand communities." },
  { name: "Small Towns of Beaufort & Jasper County", state: "SC", county: "Beaufort / Jasper", population: 10000, slug: "small-towns-beaufort-jasper-sc", isGroup: true, includedTowns: ["Port Royal", "Ridgeland", "Hardeeville", "Yemassee"], nearby: ["Hilton Head Island", "Bluffton", "Beaufort"], localNote: "Serving smaller Lowcountry communities." },
  { name: "Small Towns of Greenville & Spartanburg County", state: "SC", county: "Greenville / Spartanburg", population: 15000, slug: "small-towns-upstate-sc", isGroup: true, includedTowns: ["Travelers Rest", "Taylors", "Duncan", "Inman", "Wellford", "Woodruff"], nearby: ["Greenville", "Spartanburg", "Greer"], localNote: "Covering smaller Upstate communities." },
  { name: "Small Towns of Charleston County", state: "SC", county: "Charleston", population: 8000, slug: "small-towns-charleston-sc", isGroup: true, includedTowns: ["Folly Beach", "Isle of Palms", "Sullivan's Island", "Awendaw", "McClellanville"], nearby: ["Charleston", "Mount Pleasant"], localNote: "Serving smaller Charleston County communities." }
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
