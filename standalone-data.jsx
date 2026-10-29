function __asset(id){
  if (typeof window!=="undefined" && window.__resources && window.__resources[id]) return window.__resources[id];
  const F={"mpB17First":"assets/standalone/marketing/building-17-first-floor.jpg","mpB17Second":"assets/standalone/marketing/building-17-second-floor.jpg","mpB17Third":"assets/standalone/marketing/building-17-third-floor.jpg","elevB17Crop":"assets/standalone/marketing/building-17-elevation-crop.jpg","elevB17Sheet":"assets/standalone/marketing/building-17-elevation.jpg","mpB14First":"assets/standalone/marketing/building-14-first-floor.jpg","mpB14Second":"assets/standalone/marketing/building-14-second-floor.jpg","mpB14Third":"assets/standalone/marketing/building-14-third-floor.jpg","elevB14Crop":"assets/standalone/marketing/building-14-elevation-crop.jpg","elevB14Sheet":"assets/standalone/marketing/building-14-elevation.jpg","sb55p1":"assets/storyboards/pages/lot-55-p1.jpg","sb55p2":"assets/storyboards/pages/lot-55-p2.jpg","sb55p3":"assets/storyboards/pages/lot-55-p3.jpg","sb55p4":"assets/storyboards/pages/lot-55-p4.jpg","sb55p5":"assets/storyboards/pages/lot-55-p5.jpg","sb57p1":"assets/storyboards/pages/lot-57-p1.jpg","sb57p2":"assets/storyboards/pages/lot-57-p2.jpg","sb57p3":"assets/storyboards/pages/lot-57-p3.jpg","sb57p4":"assets/storyboards/pages/lot-57-p4.jpg","sb57p5":"assets/storyboards/pages/lot-57-p5.jpg","sb70p1":"assets/storyboards/pages/lot-70-p1.jpg","sb70p2":"assets/storyboards/pages/lot-70-p2.jpg","sb70p3":"assets/storyboards/pages/lot-70-p3.jpg","sb70p4":"assets/storyboards/pages/lot-70-p4.jpg","sb70p5":"assets/storyboards/pages/lot-70-p5.jpg","sb70p6":"assets/storyboards/pages/lot-70-p6.jpg","sb70p7":"assets/storyboards/pages/lot-70-p7.jpg","sb69p1":"assets/storyboards/pages/lot-69-p1.jpg","sb69p2":"assets/storyboards/pages/lot-69-p2.jpg","sb69p3":"assets/storyboards/pages/lot-69-p3.jpg","sb69p4":"assets/storyboards/pages/lot-69-p4.jpg","sb68p1":"assets/storyboards/pages/lot-68-p1.jpg","sb68p2":"assets/storyboards/pages/lot-68-p2.jpg","sb68p3":"assets/storyboards/pages/lot-68-p3.jpg","sb68p4":"assets/storyboards/pages/lot-68-p4.jpg","sb68p5":"assets/storyboards/pages/lot-68-p5.jpg","sb68p6":"assets/storyboards/pages/lot-68-p6.jpg","sb57p1":"assets/storyboards/pages/lot-57-p1.jpg","sb57p2":"assets/storyboards/pages/lot-57-p2.jpg","sb57p3":"assets/storyboards/pages/lot-57-p3.jpg","sb57p4":"assets/storyboards/pages/lot-57-p4.jpg","sb57p5":"assets/storyboards/pages/lot-57-p5.jpg","sb72p1":"assets/storyboards/pages/lot-72-p1.jpg","sb72p2":"assets/storyboards/pages/lot-72-p2.jpg","sb72p3":"assets/storyboards/pages/lot-72-p3.jpg","sb72p4":"assets/storyboards/pages/lot-72-p4.jpg","sb72p5":"assets/storyboards/pages/lot-72-p5.jpg","sb73p1":"assets/storyboards/pages/lot-73-p1.jpg","sb73p2":"assets/storyboards/pages/lot-73-p2.jpg","sb73p3":"assets/storyboards/pages/lot-73-p3.jpg","sb73p4":"assets/storyboards/pages/lot-73-p4.jpg","sb71p1":"assets/storyboards/pages/lot-71-p1.jpg","sb71p2":"assets/storyboards/pages/lot-71-p2.jpg","sb71p3":"assets/storyboards/pages/lot-71-p3.jpg","sb71p4":"assets/storyboards/pages/lot-71-p4.jpg","sb71p5":"assets/storyboards/pages/lot-71-p5.jpg","sb71p6":"assets/storyboards/pages/lot-71-p6.jpg","sb56p1":"assets/storyboards/pages/lot-56-p1.jpg","sb56p2":"assets/storyboards/pages/lot-56-p2.jpg","sb56p3":"assets/storyboards/pages/lot-56-p3.jpg","sb56p4":"assets/storyboards/pages/lot-56-p4.jpg","sb56p5":"assets/storyboards/pages/lot-56-p5.jpg","sb54p1":"assets/storyboards/pages/lot-54-p1.jpg","sb54p2":"assets/storyboards/pages/lot-54-p2.jpg","sb54p3":"assets/storyboards/pages/lot-54-p3.jpg","sb54p4":"assets/storyboards/pages/lot-54-p4.jpg","sb54p5":"assets/storyboards/pages/lot-54-p5.jpg","sb53p1":"assets/storyboards/pages/lot-53-p1.jpg","sb53p2":"assets/storyboards/pages/lot-53-p2.jpg","sb53p3":"assets/storyboards/pages/lot-53-p3.jpg","sb53p4":"assets/storyboards/pages/lot-53-p4.jpg","sb53p5":"assets/storyboards/pages/lot-53-p5.jpg","mpB13First":"assets/standalone/marketing/building-13-first-floor.jpg","mpB13Second":"assets/standalone/marketing/building-13-second-floor.jpg","mpB13Third":"assets/standalone/marketing/building-13-third-floor.jpg","elevB13Crop":"assets/standalone/marketing/building-13-elevation-crop.jpg","elevB13Sheet":"assets/standalone/marketing/building-13-elevation.jpg","pavAerial":"assets/pavilion/aerial.jpg","pavFirepit":"assets/pavilion/aerial-firepit.jpg","pavPool":"assets/pavilion/pool.jpg","pavEntrance":"assets/pavilion/entrance.jpg","buyerJourney":"assets/buyer-journey-map.pdf","medleyMap":"assets/standalone/medley-site-map.jpg","empireLogo":"assets/empire-homes-logo.png","empireLogoColor":"assets/empire-homes-logo-color.png","tableauLogo":"assets/tableau-logo.png","tableauLogoColor":"assets/tableau-logo-color.png","storyboardPdf":"assets/design-collection-storyboard.pdf","landscape1":"assets/standalone/landscape-1.jpg","landscape2":"assets/standalone/landscape-2.jpg","landscape3":"assets/standalone/landscape-3.jpg","landscape4":"assets/standalone/landscape-4.jpg","landscape5":"assets/standalone/landscape-5.jpg","mpB2First":"assets/standalone/marketing/building-2-first-floor.jpg","mpB2Second":"assets/standalone/marketing/building-2-second-floor.jpg","mpB2Third":"assets/standalone/marketing/building-2-third-floor.jpg","elevB2Crop":"assets/standalone/marketing/building-2-elevation-crop.jpg","elevB2Sheet":"assets/standalone/marketing/building-2-elevation.jpg","mpB3First":"assets/standalone/marketing/building-3-first-floor.jpg","mpB3Second":"assets/standalone/marketing/building-3-second-floor.jpg","mpB3Third":"assets/standalone/marketing/building-3-third-floor.jpg","elevB3Crop":"assets/standalone/marketing/building-3-elevation-crop.jpg","elevB3Sheet":"assets/standalone/marketing/building-3-elevation.jpg","mpB7First":"assets/standalone/marketing/building-7-first-floor.jpg","mpB7Second":"assets/standalone/marketing/building-7-second-floor.jpg","mpB7Third":"assets/standalone/marketing/building-7-third-floor.jpg","elevB7Crop":"assets/standalone/marketing/building-7-elevation-crop.jpg","elevB7Sheet":"assets/standalone/marketing/building-7-elevation.jpg","mpB8First":"assets/standalone/marketing/building-8-first-floor.jpg","mpB8Second":"assets/standalone/marketing/building-8-second-floor.jpg","mpB8Third":"assets/standalone/marketing/building-8-third-floor.jpg","elevB8Crop":"assets/standalone/marketing/building-8-elevation-crop.jpg","elevB8Sheet":"assets/standalone/marketing/building-8-elevation.jpg","mpB16First":"assets/standalone/marketing/building-16-first-floor.jpg","mpB16Second":"assets/standalone/marketing/building-16-second-floor.jpg","mpB16Third":"assets/standalone/marketing/building-16-third-floor.jpg","elevB16Crop":"assets/standalone/marketing/building-16-elevation-crop.jpg","elevB16Sheet":"assets/standalone/marketing/building-16-elevation.jpg","renderHarleigh":"assets/standalone/renderings/harleigh-slab.jpg","renderHaydenBasement":"assets/standalone/renderings/hayden-basement.jpg","renderHaydenSlab":"assets/standalone/renderings/hayden-slab.jpg","renderRaleigh":"assets/standalone/renderings/raleigh.jpg","lotsJson":"assets/lots.json","lotDataJson":"assets/lot-data.json","roofImg":"assets/standalone/schemes/roof.jpg","gutterImg":"assets/standalone/schemes/gutter-bronze.jpg","lightWellsworth":"assets/standalone/schemes/light-wellsworth.jpg","lightHowell":"assets/standalone/schemes/light-howell.jpg","brick1":"assets/standalone/schemes/brick-1.jpg","brick2":"assets/standalone/schemes/brick-2.jpg","brick3":"assets/standalone/schemes/brick-3.jpg","brick4":"assets/standalone/schemes/brick-4.jpg","brick5":"assets/standalone/schemes/brick-5.jpg","brick6":"assets/standalone/schemes/brick-6.jpg","brick7":"assets/standalone/schemes/brick-7.jpg","brick8":"assets/standalone/schemes/brick-8.jpg","brick9":"assets/standalone/schemes/brick-9.jpg","brick10":"assets/standalone/schemes/brick-10.jpg","brickMosswood":"assets/standalone/schemes/brick-mosswood.jpg","floorplanHarleigh":"assets/standalone/floorplan-harleigh.jpg","floorplanHaydenSlab":"assets/standalone/floorplan-hayden-slab.jpg","floorplanRaleigh":"assets/standalone/floorplan-raleigh.jpg","floorplanSheetRaleigh":"assets/standalone/floorplan-sheet-raleigh.jpg","floorplanSheetHarleigh":"assets/standalone/floorplan-sheet-harleigh.jpg","floorplanSheetHaydenSlab":"assets/standalone/floorplan-sheet-hayden-slab.jpg","lifeShopping":"assets/standalone/lifestyle/shopping.jpg","lifeBikeMarket":"assets/standalone/lifestyle/bike-market.jpg","lifeCocktail":"assets/standalone/lifestyle/cocktail.jpg","lifeCafeLaptop":"assets/standalone/lifestyle/cafe-laptop.jpg","lifeIceCream":"assets/standalone/lifestyle/ice-cream.jpg","lifeDiningPizza":"assets/standalone/lifestyle/dining-pizza.jpg","lifeBarista":"assets/standalone/lifestyle/barista.jpg","lifeParkFamily":"assets/standalone/lifestyle/park-family.jpg","lifePug":"assets/standalone/lifestyle/pug.jpg","lifeDog":"assets/standalone/lifestyle/dog.jpg","lifeWellness":"assets/standalone/lifestyle/wellness.jpg","lifeBoutiqueHats":"assets/standalone/lifestyle/boutique-hats.jpg","sb65p1":"assets/storyboards/pages/lot-65-p1.jpg","sb65p2":"assets/storyboards/pages/lot-65-p2.jpg","sb65p3":"assets/storyboards/pages/lot-65-p3.jpg","sb65p4":"assets/storyboards/pages/lot-65-p4.jpg","sb65p5":"assets/storyboards/pages/lot-65-p5.jpg","sb65p6":"assets/storyboards/pages/lot-65-p6.jpg","sb66p1":"assets/storyboards/pages/lot-66-p1.jpg","sb66p2":"assets/storyboards/pages/lot-66-p2.jpg","sb66p3":"assets/storyboards/pages/lot-66-p3.jpg","sb66p4":"assets/storyboards/pages/lot-66-p4.jpg","sb66p5":"assets/storyboards/pages/lot-66-p5.jpg","sb66p6":"assets/storyboards/pages/lot-66-p6.jpg","sb66p7":"assets/storyboards/pages/lot-66-p7.jpg","sb66p8":"assets/storyboards/pages/lot-66-p8.jpg","sb67p1":"assets/storyboards/pages/lot-67-p1.jpg","sb67p2":"assets/storyboards/pages/lot-67-p2.jpg","sb67p3":"assets/storyboards/pages/lot-67-p3.jpg","sb67p4":"assets/storyboards/pages/lot-67-p4.jpg","sb67p5":"assets/storyboards/pages/lot-67-p5.jpg","sb67p6":"assets/storyboards/pages/lot-67-p6.jpg","sb67p7":"assets/storyboards/pages/lot-67-p7.jpg","sb64p1":"assets/storyboards/pages/lot-64-p1.jpg","sb64p2":"assets/storyboards/pages/lot-64-p2.jpg","sb64p3":"assets/storyboards/pages/lot-64-p3.jpg","sb64p4":"assets/storyboards/pages/lot-64-p4.jpg","sb50p1":"assets/storyboards/pages/lot-50-p1.jpg","sb50p2":"assets/storyboards/pages/lot-50-p2.jpg","sb50p3":"assets/storyboards/pages/lot-50-p3.jpg","sb50p4":"assets/storyboards/pages/lot-50-p4.jpg","sb50p5":"assets/storyboards/pages/lot-50-p5.jpg","sb50p6":"assets/storyboards/pages/lot-50-p6.jpg","sb50p7":"assets/storyboards/pages/lot-50-p7.jpg"};
  return F[id]||id;
}

// Tableau at Medley — data layer
// Loads the spreadsheet (assets/lot-data.json) and merges it with detected
// dot positions (assets/lots.json). Positions can be overridden by localStorage
// (the Edit Positions mode persists user corrections there).

// Design Collection (storyboard EB#) → price.
// Placeholder values — update with the real prices from the spreadsheet
// once the Design Collection Price column is finalized.
const DESIGN_COLLECTION_PRICES = {
  EB1:  10000,
  EB2:  12000,
  EB3:  14000,
  EB4:  16000,
  EB5:  18000,
  EB6:  20000,
  EB7:  22000,
  EB8:  24000,
  EB9:  25000,
  EB10: 28000,
};

// Per-lot Design Collection storyboards (PDF). Keyed by lot number.
// Provided for lots 6–10; other lots fall back to the placeholder storyboard.
const STORYBOARD_PDFS = {
  6:  'assets/storyboards/lot-6.pdf',
  7:  'assets/storyboards/lot-7.pdf',
  8:  'assets/storyboards/lot-8.pdf',
  9:  'assets/storyboards/lot-9.pdf',
  10: 'assets/storyboards/lot-10.pdf',
};

// Per-lot Design Collection storyboards as page images (preferred — they render
// in the on-screen viewer AND print cleanly). Keyed by lot number; array of
// page-image paths in order. When present, these take priority over the PDF.
const STORYBOARD_PAGE_COUNTS = { 50: 7, 53: 5, 54: 5, 55: 5, 56: 5, 57: 5, 64: 4, 65: 6, 66: 8, 67: 7, 68: 6, 69: 4, 70: 7, 71: 6, 72: 5, 73: 4 };
const STORYBOARD_PAGES = Object.fromEntries(
  Object.entries(STORYBOARD_PAGE_COUNTS).map(([lot, count]) => [
    lot,
    Array.from({ length: count }, (_, i) => __asset('sb' + lot + 'p' + (i + 1))),
  ])
);

// Buildings with official marketing sets → their lots. Assets resolved via __asset().
const BUILDING_LOTS = {
  2:  [6, 7, 8, 9, 10],
  3:  [11, 12, 13, 14],
  7:  [30, 31, 32, 33, 34, 35],
  8:  [36, 37, 38, 39],
  13: [49, 50, 51, 52],
  14: [53, 54, 55, 56, 57],
  16: [62, 63, 64, 65, 66, 67],
  17: [68, 69, 70, 71, 72, 73],
};
const MARKETING_PLAN_SETS = {};
const ELEVATION_MARKETING = {};
for (const [b, lots] of Object.entries(BUILDING_LOTS)) {
  for (const n of lots) {
    MARKETING_PLAN_SETS[n] = [
      { label: 'First Floor',  src: __asset(`mpB${b}First`)  },
      { label: 'Second Floor', src: __asset(`mpB${b}Second`) },
      { label: 'Third Floor',  src: __asset(`mpB${b}Third`)  },
    ];
    ELEVATION_MARKETING[n] = {
      image: __asset(`elevB${b}Crop`),
      sheet: __asset(`elevB${b}Sheet`),
    };
  }
}

// Per-plan artist's renderings — Elevation-card image for lots without an
// official black/white architectural elevation. Keyed by Floor Plan Name.
const PLAN_RENDERINGS = {
  'Harleigh Slab':   __asset('renderHarleigh'),
  'Hayden Basement': __asset('renderHaydenBasement'),
  'Hayden Slab':     __asset('renderHaydenSlab'),
  'Raleigh Slab':    __asset('renderRaleigh'),
};

const PLAN_INFO = {
  'Harleigh Slab':    { id: 'H',  name: 'Harleigh Slab',    base: 820000, color: '#C76D72', levels: ['Main Level', 'Second Level'], floorplan: __asset('floorplanHarleigh') },
  'Hayden Basement':  { id: 'HB', name: 'Hayden Basement',  base: 820000, color: '#A98EBA', levels: ['Basement Level', 'Main Level', 'Second Level'], floorplan: null },
  'Hayden Slab':      { id: 'HS', name: 'Hayden Slab',      base: 836400, color: '#7FB28A', levels: ['Main Level', 'Second Level'], floorplan: __asset('floorplanHaydenSlab') },
  'Raleigh Slab':     { id: 'R',  name: 'Raleigh Slab',     base: 675000, color: '#7CB8CD', levels: ['Main Level', 'Second Level'], floorplan: __asset('floorplanRaleigh') },
};
// Reverse: detected-color code → plan name
const PLAN_BY_CODE = { H:'Harleigh Slab', HB:'Hayden Basement', HS:'Hayden Slab', R:'Raleigh Slab' };

// Phase set — display statuses for the legend.
// Colors map to the Empire brand palette (Bedtime Blue + accents).
const PHASE_INFO = {
  'Future':              { label: 'Future',              color: '#C6DCDA' }, // mint mist
  'Buildable Lot':       { label: 'Buildable Lot',       color: '#0E9C6B' }, // emerald
  'For Sale':            { label: 'For Sale',            color: '#D9C756' }, // yellow
  'Developer Hold':      { label: 'Developer Hold',      color: '#003349' }, // navy blue
  'Model Home':          { label: 'Model Home',          color: '#D6552B' }, // terracotta
  'Sold':                { label: 'Sold',                color: '#6B2233' }, // burgundy
};
const PHASES = ['Future', 'For Sale', 'Model Home', 'Sold'];

const PROGRAM_INFO = {
  'Envision': {
    tagline: 'Envision Your Whole Home',
    description: "Starting before construction, design choices are yours to bring to life. The Envision path offers flexibility and freedom for those who dream of shaping a home that reflects their own unique vision. Guided by our professionals at our Homebase design labs, you'll select everything—from structural options and layouts to curated finishes and personalized details. From foundation to finish, it's in your hand.",
    accent: '#7CB8CD'
  },
  'Evolve': {
    tagline: 'Evolve Your Look In The Process',
    description: "Beauty lies in the details. With the Evolve path, your personality shines through as you step in mid-construction to select the features and finishes—flooring, tile, lighting, plumbing, paint, and countertops—available at the point you join the process, defining your home's aesthetic. These details create the biggest impact, curating a space that feels unmistakably your own.",
    accent: '#7FB28A'
  },
  'Embrace': {
    tagline: 'Embrace Convenient Designs',
    description: "When convenience is key, the Embrace path surrounds you with thoughtful design collections, each styled with comfort, beauty and timeless appeal. Perfect for those who would rather leave the decisions to the experts, this path lets you simply select the look that speaks to you—then put out the welcome mat and settle in.",
    accent: '#C76D72'
  },
};
const PROGRAMS = ['Embrace','Evolve','Envision'];

const ELEVATIONS = ['A','B','C','D','E','F','G','H','I','J'];
const ELEVATION_STYLES = {
  A: { style: 'Traditional Craftsman', palette: ['#E3DCC8','#3A4030','#A86E48'] },
  B: { style: 'Modern Farmhouse',      palette: ['#F2EFE6','#22221F','#7C6A4B'] },
  C: { style: 'Coastal Shingle',       palette: ['#D9DFD9','#3D5A6C','#C9B89A'] },
  D: { style: 'European Cottage',      palette: ['#C9B89A','#5C4630','#3A4030'] },
  E: { style: 'Transitional Brick',    palette: ['#B86F4F','#2C2620','#D8CFB8'] },
  F: { style: 'Contemporary',          palette: ['#22221F','#9C9285','#E0D9C9'] },
  G: { style: 'Classic Colonial',      palette: ['#E8E1CF','#3A2E25','#7C2A2A'] },
  H: { style: 'Tudor Revival',         palette: ['#5C4630','#D8CFB8','#1F1B16'] },
  I: { style: 'Modern Prairie',        palette: ['#8C7956','#2C2620','#D8CFB8'] },
  J: { style: 'Mountain Lodge',        palette: ['#3A2E25','#A86E48','#5E6B4E'] },
};

// Sherwin Williams paint colors used across the Medley exterior schemes.
// Hex values are the official SW renderings — used for solid-color CSS chips.
const SW = {
  ShojiWhite:       { code: 'SW7042', name: 'Shoji White',       hex: '#DDD7C2' },
  FawnBrindle:      { code: 'SW7640', name: 'Fawn Brindle',      hex: '#A89A86' },
  LibraryPewter:    { code: 'SW0038', name: 'Library Pewter',    hex: '#AAA295' },
  Cyberspace:       { code: 'SW7076', name: 'Cyberspace',        hex: '#424547' },
  EllusiveGreen:    { code: 'SW9164', name: 'Ellusive Green',    hex: '#BCBDA8' },
  Rosemary:         { code: 'SW6187', name: 'Rosemary',          hex: '#5C5945' },
  CastIron:         { code: 'SW6202', name: 'Cast Iron',         hex: '#525150' },
  AccessibleBeige:  { code: 'SW7036', name: 'Accessible Beige',  hex: '#CBB89E' },
  BlackFox:         { code: 'SW7020', name: 'Black Fox',         hex: '#3F3D38' },
  Alabaster:        { code: 'SW7008', name: 'Alabaster',         hex: '#E5E1D6' },
  MountainRoad:     { code: 'SW7743', name: 'Mountain Road',     hex: '#585E4E' },
};
// Sherwin-Williams lookup by code (paint cells in the spreadsheet read "SW#### Name").
const SW_BY_CODE = Object.fromEntries(Object.values(SW).map(s => [s.code, s]));
function resolvePaint(cell) {
  if (!cell) return null;
  if (/designer/i.test(cell)) return { choice: true, name: "Designer's Choice from Offering", code: '', hex: null };
  const m = cell.match(/SW\s*0*?(\d{3,4})/i);
  if (m) {
    const code = 'SW' + m[1].padStart(4, '0');
    if (SW_BY_CODE[code]) return SW_BY_CODE[code];
    return { code, name: cell.replace(/SW\d+/i, '').trim(), hex: '#B9B2A2' };
  }
  return { code: '', name: cell, hex: '#B9B2A2' };
}

// Brick name → marketing photo (graphics from the Exterior Schemes deck).
const BRICK_IMAGES = {
  'Logan Canyon':        __asset('brick1'),
  'Frasier Canyon':      __asset('brick2'),
  'Nottingham Tudor':    __asset('brick3'),
  'Steeplechase Canyon': __asset('brick4'),
  'Marshton Queen':      __asset('brick5'),
  'Magnolia Bay':        __asset('brick6'),
  'Riverwalk Queen':     __asset('brick7'),
  'Old Edisto':          __asset('brick8'),
  'Spanish Moss Blend':  __asset('brick9'),
  'Waters Edge':         __asset('brick10'),
  'Mosswood':            __asset('brickMosswood'),
};
// Build the per-lot exterior package from the spreadsheet's discrete columns.
function buildExterior(r) {
  return {
    brick:     { name: r.brick || '—', image: BRICK_IMAGES[r.brick] || null },
    mortar:    r.mortar || '—',
    sidingTrim: resolvePaint(r.siding),
    frontDoor:  resolvePaint(r.door),
    roof:      SHARED.roof,
    gutters:   SHARED.gutters,
    lighting:  lightingForBuilding(r.building),
  };
}

// Exterior sconce fixture varies by building. Buildings not listed here use Howell.
const WELLWORTH_BUILDINGS = new Set([9, 10, 13, 14, 15, 19, 20, 21, 22]);
function lightingForBuilding(building) {
  return WELLWORTH_BUILDINGS.has(building) ? SHARED.lightingWellworth : SHARED.lightingHowell;
}

// All schemes share these trim options.
const TRIM_OPTIONS = [SW.ShojiWhite, SW.FawnBrindle, SW.LibraryPewter];

// Shared package details — same lighting / gutters / roof across every scheme.
const SHARED = {
  roof:    { name: 'Weathered Wood (Architectural)', image: __asset('roofImg') },
  gutters: { name: 'Bronze', image: __asset('gutterImg') },
  lightingHowell: {
    description: 'Visual Comfort Studio',
    options: [
      { name: 'Howell', image: __asset('lightWellsworth') },
    ],
    note: '18″H',
  },
  lightingWellworth: {
    description: 'Visual Comfort Studio',
    options: [
      { name: 'Wellworth', image: __asset('lightHowell') },
    ],
    note: '18″H',
  },
};

const COLOR_SCHEMES = [
  { id: 1,  brick: { name: 'Logan Canyon',          image: __asset('brick1')  }, mortar: 'Southern Antique Limestone',           siding: SW.ShojiWhite,   frontDoor: SW.LibraryPewter   },
  { id: 2,  brick: { name: 'Frasier Canyon',        image: __asset('brick2')  }, mortar: 'Southern Ivory',                       siding: SW.FawnBrindle,  frontDoor: SW.BlackFox        },
  { id: 3,  brick: { name: 'Nottingham Tudor',      image: __asset('brick3')   }, mortar: 'Southern Antique Limestone',           siding: SW.ShojiWhite,   frontDoor: SW.CastIron        },
  { id: 4,  brick: { name: 'Steeplechase Canyon',   image: __asset('brick4')  }, mortar: 'Coosa Everest White',                  siding: SW.ShojiWhite,   frontDoor: SW.Rosemary        },
  { id: 5,  brick: { name: 'Marshton Queen',        image: __asset('brick5')  }, mortar: 'Coosa Antique Buff — or — Coosa Brown', siding: SW.FawnBrindle,  frontDoor: SW.Cyberspace      },
  { id: 6,  brick: { name: 'Magnolia Bay',          image: __asset('brick6')  }, mortar: 'Coosa Everest White',                  siding: SW.ShojiWhite,   frontDoor: SW.FawnBrindle     },
  { id: 7,  brick: { name: 'Riverwalk Queen',       image: __asset('brick7')  }, mortar: 'Coosa Antique Buff',                   siding: SW.FawnBrindle,  frontDoor: SW.CastIron        },
  { id: 8,  brick: { name: 'Old Edisto',            image: __asset('brick8')  }, mortar: 'Coosa Antique Buff',                   siding: SW.FawnBrindle,  frontDoor: SW.BlackFox        },
  { id: 9,  brick: { name: 'Spanish Moss Blend',    image: __asset('brick9')  }, mortar: 'Southern Antique Limestone — or — Coosa Brown', siding: SW.ShojiWhite, frontDoor: SW.AccessibleBeige },
  { id: 10, brick: { name: 'Waters Edge',           image: __asset('brick10') }, mortar: 'Coosa Antique Buff',                   siding: SW.FawnBrindle,  frontDoor: SW.CastIron        },
  // 11 & 12: documentation pending — keep slots so spreadsheet ids 11 / 12 still resolve.
  { id: 11, tbd: true, brick: { name: 'Pending Selection', image: null }, mortar: '—', siding: SW.ShojiWhite,  frontDoor: SW.FawnBrindle },
  { id: 12, tbd: true, brick: { name: 'Pending Selection', image: null }, mortar: '—', siding: SW.FawnBrindle, frontDoor: SW.BlackFox    },
].map(s => ({
  ...s,
  name: `Scheme #${s.id}`,
  trim: TRIM_OPTIONS,
  roof: SHARED.roof,
  gutters: SHARED.gutters,
  lighting: SHARED.lightingHowell,
  // Legacy hex aliases used by the small SchemePlaceholder house illustration.
  sidingHex:    s.siding.hex,
  trimHex:      s.siding.hex,          // trim chip = lightest trim option for contrast
  accentHex:    s.frontDoor.hex,        // front-door pop
  roofHex:      '#5E5853',              // weathered-wood approximation
}));

// Parse a comma-separated options string into an array
function parseOptions(s) {
  if (!s) return [];
  return s.split(/[,;]/).map(x => x.trim()).filter(Boolean);
}

// Match real lot #s to detected positions by lot number directly.
// Now that we have manually-traced positions, just look up by n.
function assignPositions(realLots, positions, overrides) {
  const posByN = {};
  for (const p of positions) posByN[p.n] = p;

  return realLots.map(r => {
    const ov = overrides && overrides[r.lot];
    if (ov) return { lot: r, x: ov.x, y: ov.y, placed: true };
    const p = posByN[r.lot];
    if (p) return { lot: r, x: p.x, y: p.y, placed: false };
    // Fallback: queue at right edge
    return { lot: r, x: 0.95, y: 0.05 + r.lot * 0.005, placed: false, unplaced: true };
  });
}

async function loadLots() {
  const [dataRes, posRes] = await Promise.all([
    fetch(__asset('lotDataJson')),
    fetch(__asset('lotsJson')),
  ]);
  const realLots = await dataRes.json();
  const detected = await posRes.json();

  // Lot positions are STATIC — sourced exclusively from assets/lots.json.
  // Any leftover localStorage overrides from a prior edit session are wiped.
  try {
    if (localStorage.getItem('medley-positions')) {
      localStorage.removeItem('medley-positions');
    }
  } catch (e) {}
  const overrides = {};

  const assigned = assignPositions(realLots, detected, overrides);

  return assigned.map(a => {
    const r = a.lot;
    const planInfo = PLAN_INFO[r.planName] || {};
    // Model homes are tagged in the spreadsheet via the "Model Home" phase.
    const isModel = r.phase === 'Model Home';
    return {
      n: r.lot,
      x: a.x,
      y: a.y,
      unplaced: !!a.unplaced,
      hasOverride: !!overrides[r.lot],

      // Plan & program
      planName: r.planName,
      plan: planInfo.id,
      basePrice: planInfo.base || 0,
      premium: (r.premium == null ? null : r.premium),
      designCollectionPrice: 0,
      price: (planInfo.base || 0) + (r.premium || 0),
      program: r.program,

      // House details
      beds: r.beds,
      baths: r.baths,
      sqft: r.sqft,
      garage: r.garage,
      elevation: r.elevation,
      exterior: buildExterior(r),
      address: r.address || null,
      landscaping: r.landscaping,
      landscapeNote: r.landscapeNote || null,
      moveInDate: r.moveInDate || null,
      options: parseOptions(r.options),

      // Status
      phase: r.phase,
      building: r.building,
      constructionStart: r.constructionStart,
      completionDate: r.completionDate || null,
      storyboard: null,
      storyboardPdf: STORYBOARD_PDFS[r.lot] || null,
      storyboardPages: STORYBOARD_PAGES[r.lot] || null,
      marketingPlans: MARKETING_PLAN_SETS[r.lot] || null,
      elevationImage: (ELEVATION_MARKETING[r.lot] || {}).image || PLAN_RENDERINGS[r.planName] || null,
      elevationSheet: (ELEVATION_MARKETING[r.lot] || {}).sheet || PLAN_RENDERINGS[r.planName] || null,
      elevationIsRendering: !(ELEVATION_MARKETING[r.lot] || {}).image && !!PLAN_RENDERINGS[r.planName],

      // Model home
      isModel,
      virtualTourUrl: isModel ? '#' : null,
    };
  });
}

function savePositions(lots) {
  const map = {};
  for (const l of lots) {
    if (l.hasOverride || !l.unplaced) {
      map[l.n] = { x: +l.x.toFixed(4), y: +l.y.toFixed(4) };
    }
  }
  localStorage.setItem('medley-positions', JSON.stringify(map));
}

function clearPositions() {
  localStorage.removeItem('medley-positions');
}

function downloadPositions(lots) {
  const map = {};
  for (const l of lots) {
    map[l.n] = { x: +l.x.toFixed(4), y: +l.y.toFixed(4) };
  }
  const blob = new Blob([JSON.stringify(map, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'medley-lot-positions.json';
  a.click();
  URL.revokeObjectURL(url);
}

window.MEDLEY = {
  PLAN_INFO, PLAN_BY_CODE,
  PHASE_INFO, PHASES,
  PROGRAMS, PROGRAM_INFO,
  ELEVATIONS, ELEVATION_STYLES,
  COLOR_SCHEMES,
  loadLots, savePositions, clearPositions, downloadPositions,
};
