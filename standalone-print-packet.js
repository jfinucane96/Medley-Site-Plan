function __asset(id){
  if (typeof window!=="undefined" && window.__resources && window.__resources[id]) return window.__resources[id];
  const F={"homeownerApp1":"assets/homeowner-app-p1.jpg","homeownerApp2":"assets/homeowner-app-p2.jpg","medleyMap":"assets/standalone/medley-site-map.jpg","empireLogo":"assets/empire-homes-logo.png","empireLogoColor":"assets/empire-homes-logo-color.png","tableauLogo":"assets/tableau-logo.png","tableauLogoColor":"assets/tableau-logo-color.png","storyboardPdf":"assets/design-collection-storyboard.pdf","landscape1":"assets/standalone/landscape-1.jpg","landscape2":"assets/standalone/landscape-2.jpg","landscape3":"assets/standalone/landscape-3.jpg","lotsJson":"assets/lots.json","lotDataJson":"assets/lot-data.json","roofImg":"assets/standalone/schemes/roof.jpg","gutterImg":"assets/standalone/schemes/gutter-bronze.jpg","lightWellsworth":"assets/standalone/schemes/light-wellsworth.jpg","lightHowell":"assets/standalone/schemes/light-howell.jpg","brick1":"assets/standalone/schemes/brick-1.jpg","brick2":"assets/standalone/schemes/brick-2.jpg","brick3":"assets/standalone/schemes/brick-3.jpg","brick4":"assets/standalone/schemes/brick-4.jpg","brick5":"assets/standalone/schemes/brick-5.jpg","brick6":"assets/standalone/schemes/brick-6.jpg","brick7":"assets/standalone/schemes/brick-7.jpg","brick8":"assets/standalone/schemes/brick-8.jpg","brick9":"assets/standalone/schemes/brick-9.jpg","brick10":"assets/standalone/schemes/brick-10.jpg","brickMosswood":"https://ngabrick.com/wp-content/uploads/2025/09/PhenixCityCollection-WEB-MOSSWOOD-qoun0mnwvlb9sf93uow15a0emx6vck07mg7o20whxs.jpg","floorplanHarleigh":"assets/floorplan-harleigh.png","floorplanHaydenSlab":"assets/floorplan-hayden-slab.png","floorplanRaleigh":"assets/floorplan-raleigh.png","floorplanSheetRaleigh":"assets/floorplan-sheet-raleigh.png","floorplanSheetHarleigh":"assets/floorplan-sheet-harleigh.png","floorplanSheetHaydenSlab":"assets/floorplan-sheet-hayden-slab.png","lifeShopping":"assets/standalone/lifestyle/shopping.jpg","lifeBikeMarket":"assets/standalone/lifestyle/bike-market.jpg","lifeCocktail":"assets/standalone/lifestyle/cocktail.jpg","lifeCafeLaptop":"assets/standalone/lifestyle/cafe-laptop.jpg","lifeIceCream":"assets/standalone/lifestyle/ice-cream.jpg","lifeDiningPizza":"assets/standalone/lifestyle/dining-pizza.jpg","lifeBarista":"assets/standalone/lifestyle/barista.jpg","lifeParkFamily":"assets/standalone/lifestyle/park-family.jpg","lifePug":"assets/standalone/lifestyle/pug.jpg","lifeDog":"assets/standalone/lifestyle/dog.jpg","lifeWellness":"assets/standalone/lifestyle/wellness.jpg","lifeBoutiqueHats":"assets/standalone/lifestyle/boutique-hats.jpg","sb6p1":"assets/storyboards/pages/lot-6-p1.jpg","sb6p2":"assets/storyboards/pages/lot-6-p2.jpg","sb6p3":"assets/storyboards/pages/lot-6-p3.jpg","sb6p4":"assets/storyboards/pages/lot-6-p4.jpg","sb6p5":"assets/storyboards/pages/lot-6-p5.jpg","sb6p6":"assets/storyboards/pages/lot-6-p6.jpg","sb6p7":"assets/storyboards/pages/lot-6-p7.jpg","sb7p1":"assets/storyboards/pages/lot-7-p1.jpg","sb7p2":"assets/storyboards/pages/lot-7-p2.jpg","sb7p3":"assets/storyboards/pages/lot-7-p3.jpg","sb7p4":"assets/storyboards/pages/lot-7-p4.jpg","sb7p5":"assets/storyboards/pages/lot-7-p5.jpg","sb7p6":"assets/storyboards/pages/lot-7-p6.jpg","sb8p1":"assets/storyboards/pages/lot-8-p1.jpg","sb8p2":"assets/storyboards/pages/lot-8-p2.jpg","sb8p3":"assets/storyboards/pages/lot-8-p3.jpg","sb8p4":"assets/storyboards/pages/lot-8-p4.jpg","sb8p5":"assets/storyboards/pages/lot-8-p5.jpg","sb8p6":"assets/storyboards/pages/lot-8-p6.jpg","sb8p7":"assets/storyboards/pages/lot-8-p7.jpg","sb8p8":"assets/storyboards/pages/lot-8-p8.jpg","sb9p1":"assets/storyboards/pages/lot-9-p1.jpg","sb9p2":"assets/storyboards/pages/lot-9-p2.jpg","sb9p3":"assets/storyboards/pages/lot-9-p3.jpg","sb9p4":"assets/storyboards/pages/lot-9-p4.jpg","sb9p5":"assets/storyboards/pages/lot-9-p5.jpg","sb9p6":"assets/storyboards/pages/lot-9-p6.jpg","sb9p7":"assets/storyboards/pages/lot-9-p7.jpg","sb9p8":"assets/storyboards/pages/lot-9-p8.jpg","sb9p9":"assets/storyboards/pages/lot-9-p9.jpg","sb10p1":"assets/storyboards/pages/lot-10-p1.jpg","sb10p2":"assets/storyboards/pages/lot-10-p2.jpg","sb10p3":"assets/storyboards/pages/lot-10-p3.jpg","sb10p4":"assets/storyboards/pages/lot-10-p4.jpg","sb10p5":"assets/storyboards/pages/lot-10-p5.jpg","sb10p6":"assets/storyboards/pages/lot-10-p6.jpg","sb10p7":"assets/storyboards/pages/lot-10-p7.jpg","sb10p8":"assets/storyboards/pages/lot-10-p8.jpg","sb10p9":"assets/storyboards/pages/lot-10-p9.jpg","sb30p1":"assets/storyboards/pages/lot-30-p1.jpg","sb30p2":"assets/storyboards/pages/lot-30-p2.jpg","sb30p3":"assets/storyboards/pages/lot-30-p3.jpg","sb30p4":"assets/storyboards/pages/lot-30-p4.jpg","sb30p5":"assets/storyboards/pages/lot-30-p5.jpg","sb31p1":"assets/storyboards/pages/lot-31-p1.jpg","sb31p2":"assets/storyboards/pages/lot-31-p2.jpg","sb31p3":"assets/storyboards/pages/lot-31-p3.jpg","sb31p4":"assets/storyboards/pages/lot-31-p4.jpg","sb31p5":"assets/storyboards/pages/lot-31-p5.jpg","sb32p1":"assets/storyboards/pages/lot-32-p1.jpg","sb32p2":"assets/storyboards/pages/lot-32-p2.jpg","sb32p3":"assets/storyboards/pages/lot-32-p3.jpg","sb32p4":"assets/storyboards/pages/lot-32-p4.jpg","sb32p5":"assets/storyboards/pages/lot-32-p5.jpg","sb33p1":"assets/storyboards/pages/lot-33-p1.jpg","sb33p2":"assets/storyboards/pages/lot-33-p2.jpg","sb33p3":"assets/storyboards/pages/lot-33-p3.jpg","sb33p4":"assets/storyboards/pages/lot-33-p4.jpg","sb33p5":"assets/storyboards/pages/lot-33-p5.jpg","sb33p6":"assets/storyboards/pages/lot-33-p6.jpg","sb33p7":"assets/storyboards/pages/lot-33-p7.jpg","sb33p8":"assets/storyboards/pages/lot-33-p8.jpg","sb34p1":"assets/storyboards/pages/lot-34-p1.jpg","sb34p2":"assets/storyboards/pages/lot-34-p2.jpg","sb34p3":"assets/storyboards/pages/lot-34-p3.jpg","sb34p4":"assets/storyboards/pages/lot-34-p4.jpg","sb34p5":"assets/storyboards/pages/lot-34-p5.jpg","sb34p6":"assets/storyboards/pages/lot-34-p6.jpg","sb34p7":"assets/storyboards/pages/lot-34-p7.jpg","sb35p1":"assets/storyboards/pages/lot-35-p1.jpg","sb35p2":"assets/storyboards/pages/lot-35-p2.jpg","sb35p3":"assets/storyboards/pages/lot-35-p3.jpg","sb35p4":"assets/storyboards/pages/lot-35-p4.jpg","sb35p5":"assets/storyboards/pages/lot-35-p5.jpg","sb35p6":"assets/storyboards/pages/lot-35-p6.jpg","sb35p7":"assets/storyboards/pages/lot-35-p7.jpg","sb35p8":"assets/storyboards/pages/lot-35-p8.jpg","sb35p9":"assets/storyboards/pages/lot-35-p9.jpg"};
  return F[id]||id;
}

// Print packet HTML builder
// Generates a self-contained 11-page Empire Homes-branded info packet
// for a single lot. Returns an HTML string that gets loaded into a
// hidden iframe and printed.
//
// All styles are inlined so the iframe doesn't depend on parent stylesheets
// loading. Asset URLs (images) resolve via the <base href> we set on injection.

(function () {
  // M is read fresh on every buildLotPacketHTML call because print-packet.js
  // loads before data.jsx — window.MEDLEY isn't populated when the IIFE runs.
  let M;
  const fmt$ = n => '$' + Number(n || 0).toLocaleString();
  const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  // -------- Shared bits --------
  const ADDRESS_LINE = '11650 Johns Creek Parkway, Johns Creek, GA 30097';
  const PHONE_LINE   = '404-882-6588 | Empirehomes.com';

  function pageFooter(page, total) {
    return `
      <footer class="page-footer">
        <div class="footer-addr">${ADDRESS_LINE}</div>
        <div class="footer-phone">${PHONE_LINE}</div>
        <div class="footer-page">${page} of ${total}</div>
      </footer>
    `;
  }

  function brandHeader() {
    return `
      <div class="brand-header">
        <img class="empire-mark" src="${__asset('empireLogoColor')}" alt="Empire Homes"/>
        <img class="tableau-mark" src="${__asset('tableauLogoColor')}" alt="Tableau at Medley"/>
      </div>
    `;
  }

  // ----- Page 1: Cover -----
  function pageCover(lot, total) {
    return `
      <section class="page page-cover">
        <div class="cover-top">
          <img class="cover-tableau" src="${__asset('tableauLogoColor')}" alt="Tableau at Medley"/>
        </div>
        <div class="cover-center">
          <div class="cover-eyebrow">A COMMUNITY BY EMPIRE HOMES</div>
          <h1 class="cover-title">HOMESITE<br/>INFORMATION</h1>
          <div class="cover-lot-pill">Lot ${lot.n} · ${esc(lot.planName)}</div>
        </div>
        <div class="cover-bottom">
          <img class="cover-empire" src="${__asset('empireLogoColor')}" alt="Empire Homes"/>
        </div>
        ${pageFooter(1, total)}
      </section>
    `;
  }

  // ----- Page 2: Summary -----
  function pageSummary(lot, total, page) {
    const phaseColor = (M.PHASE_INFO[lot.phase] || {}).color || '#003349';
    return `
      <section class="page">
        ${brandHeader()}
        <h2 class="page-title">SUMMARY</h2>
        <div class="summary-grid">
          <div class="summary-card lot-card">
            <div class="summary-eyebrow">Homesite</div>
            <div class="summary-lot-num">Lot ${lot.n}</div>
            <div class="summary-plan-line">${esc(lot.planName)} · Elevation ${esc(lot.elevation)}</div>
            <div class="summary-phase" style="border-color:${phaseColor}">
              <span class="summary-phase-dot" style="background:${phaseColor}"></span>
              ${esc(lot.phase)}
            </div>
          </div>
          <div class="summary-card stats-card">
            <div class="stat-row"><span class="stat-key">Beds</span><span class="stat-val">${lot.beds || '—'}</span></div>
            <div class="stat-row"><span class="stat-key">Baths</span><span class="stat-val">${lot.baths || '—'}</span></div>
            <div class="stat-row"><span class="stat-key">Square Feet</span><span class="stat-val">${(lot.sqft || 0).toLocaleString()}</span></div>
            <div class="stat-row"><span class="stat-key">Garage</span><span class="stat-val">${esc(lot.garage) || '—'}</span></div>
            <div class="stat-row"><span class="stat-key">Construction Start</span><span class="stat-val">#${esc(lot.constructionStart)}</span></div>
            ${lot.phase === 'For Sale' ? `<div class="stat-row"><span class="stat-key">Move-In Date</span><span class="stat-val">${esc(lot.moveInDate) || 'TBD'}</span></div>` : ''}<div class="stat-row"><span class="stat-key">Closing</span><span class="stat-val">${esc(lot.completionDate) || 'TBD'}</span></div>
          </div>
        </div>

        <div class="program-callout" style="border-left-color:${(M.PROGRAM_INFO[lot.program] || {}).accent || '#003349'}">
          <div class="program-eyebrow">Design Program</div>
          <div class="program-name">${esc(lot.program)}</div>
          <div class="program-tag">${esc((M.PROGRAM_INFO[lot.program] || {}).tagline || '')}</div>
          <p class="program-desc">${esc((M.PROGRAM_INFO[lot.program] || {}).description || '')}</p>
        </div>

        ${pageFooter(page, total)}
      </section>
    `;
  }

  // ----- Page 3: Elevation -----
  function pageElevation(lot, total, page) {
    const elev = M.ELEVATION_STYLES[lot.elevation] || M.ELEVATION_STYLES.A;
    const palette = elev.palette || ['#E3DCC8','#3A4030','#A86E48'];
    if (lot.elevationSheet) {
      return `
        <section class="page page-floorplan-sheet">
          <img class="floorplan-sheet-img" src="${lot.elevationSheet}" alt="${esc(lot.planName)} front elevation"/>
        </section>
      `;
    }
    return `
      <section class="page">
        ${brandHeader()}
        <h2 class="page-title">ELEVATION</h2>
        <div class="elev-letter-banner">
          <span class="elev-letter">${esc(lot.elevation)}</span>
          <div class="elev-label">
            <div class="elev-label-line1">Elevation ${esc(lot.elevation)}</div>
            <div class="elev-label-line2">${esc(elev.style)}</div>
          </div>
        </div>
        <div class="elev-image-wrap" style="background:${palette[0]}">
          <svg viewBox="0 0 200 110" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
            <rect width="200" height="110" fill="${palette[0]}"/>
            <polygon points="20,55 100,18 180,55" fill="${palette[1]}"/>
            <rect x="30" y="55" width="140" height="50" fill="${palette[2]}"/>
            <rect x="92" y="75" width="16" height="30" fill="${palette[1]}"/>
            <rect x="50" y="70" width="22" height="18" fill="${palette[0]}" stroke="${palette[1]}" stroke-width="1"/>
            <rect x="128" y="70" width="22" height="18" fill="${palette[0]}" stroke="${palette[1]}" stroke-width="1"/>
            <rect x="142" y="80" width="32" height="25" fill="${palette[1]}" opacity="0.6"/>
            <rect x="0" y="105" width="200" height="5" fill="${palette[1]}" opacity="0.3"/>
          </svg>
          <div class="elev-image-stamp">Placeholder rendering · replace with final elevation art</div>
        </div>
        <div class="elev-letters-strip">
          ${M.ELEVATIONS.map(L => `<span class="elev-chip ${L === lot.elevation ? 'on' : ''}">${L}</span>`).join('')}
        </div>
        <p class="hint">Elevations A through J represent the architectural varieties available within the ${esc(lot.planName)} floor plan.</p>
        ${pageFooter(page, total)}
      </section>
    `;
  }

  // ----- Page 4: Exterior Color -----
  function pageExteriorColor(lot, total, page) {
    const ext = lot.exterior || {};
    const brick = ext.brick || { name: '—', image: null };
    const siding = ext.sidingTrim || { name: '—', code: '', hex: null };
    const door = ext.frontDoor || { name: '—', code: '', hex: null };
    const swatchBg = c => c && c.hex ? c.hex : 'repeating-linear-gradient(45deg,#EDE9DD,#EDE9DD 4px,#E2DCC8 4px,#E2DCC8 8px)';
    return `
      <section class="page">
        ${brandHeader()}
        <h2 class="page-title">EXTERIOR<br/>COLOR</h2>
        <div class="scheme-headline">
          <div class="scheme-headline-num">Exterior Color Package</div>
          <div class="scheme-headline-brick">${esc(brick.name)}</div>
        </div>
        ${brick.image ? `
          <div class="scheme-hero">
            <img src="${brick.image}" alt="${esc(brick.name)}"/>
            <div class="scheme-hero-cap"><span>BRICK</span><strong>${esc(brick.name)}</strong></div>
          </div>
        ` : `<div class="scheme-pending">${esc(brick.name)} — brick graphic pending</div>`}

        <div class="scheme-paints">
          <div class="paint-card">
            <div class="paint-swatch" style="background:${swatchBg(siding)}"></div>
            <div class="paint-meta">
              <div class="paint-label">SIDING &amp; TRIM</div>
              <div class="paint-name">${esc(siding.name)}</div>
              <div class="paint-code">${esc(siding.code || '')}</div>
            </div>
          </div>
          <div class="paint-card">
            <div class="paint-swatch" style="background:${swatchBg(door)}"></div>
            <div class="paint-meta">
              <div class="paint-label">FRONT DOOR &amp; GARAGE DOOR</div>
              <div class="paint-name">${esc(door.name)}</div>
              <div class="paint-code">${esc(door.code || (door.choice ? 'Selected at design studio' : ''))}</div>
            </div>
          </div>
        </div>

        <div class="materials-block">
          <div class="block-label">MATERIALS</div>
          <div class="materials-row">
            <div class="material">
              <img class="material-thumb" src="${ext.roof.image}" alt="Roof"/>
              <div class="material-meta"><span>Roof</span><strong>${esc(ext.roof.name)}</strong></div>
            </div>
            <div class="material">
              <img class="material-thumb" src="${ext.gutters.image}" alt="Gutters"/>
              <div class="material-meta"><span>Gutters &amp; Metal</span><strong>${esc(ext.gutters.name)}</strong></div>
            </div>
            <div class="material">
              <div class="material-thumb mortar-thumb">
                <svg viewBox="0 0 36 36" width="100%" height="100%">
                  <rect width="36" height="36" fill="#F0EBDF"/>
                  <g fill="#C9B89A">
                    <rect x="2" y="3" width="12" height="6" rx="0.6"/>
                    <rect x="16" y="3" width="18" height="6" rx="0.6"/>
                    <rect x="2" y="11" width="20" height="6" rx="0.6"/>
                    <rect x="24" y="11" width="10" height="6" rx="0.6"/>
                    <rect x="2" y="19" width="10" height="6" rx="0.6"/>
                    <rect x="14" y="19" width="20" height="6" rx="0.6"/>
                    <rect x="2" y="27" width="22" height="6" rx="0.6"/>
                    <rect x="26" y="27" width="8"  height="6" rx="0.6"/>
                  </g>
                </svg>
              </div>
              <div class="material-meta"><span>Mortar</span><strong>${esc(ext.mortar)}</strong></div>
            </div>
          </div>
        </div>

        ${pageFooter(page, total)}
      </section>
    `;
  }

  // ----- Floor Plan: official marketing sheet (single full-bleed page) -----
  function pageFloorPlanSheet(lot, src) {
    return `
      <section class="page page-floorplan-sheet">
        <img class="floorplan-sheet-img" src="${src}" alt="${esc(lot.planName)} floor plan"/>
      </section>
    `;
  }

  // ----- Empire Homes Homeowner App flyer (two full-bleed pages) -----
  function pagesHomeownerApp() {
    return [__asset('homeownerApp1'), __asset('homeownerApp2')].map((src, i) => `
      <section class="page page-storyboard">
        <img class="storyboard-page-img" src="${src}" alt="Empire Homes Homeowner App page ${i + 1}"/>
      </section>
    `).join('');
  }

  // ----- Design Collection storyboard pages (one full-bleed page per image) -----
  function pagesStoryboard(lot) {
    const pages = lot.storyboardPages;
    if (!pages || !pages.length) return '';
    return pages.map((src, i) => `
      <section class="page page-storyboard">
        <img class="storyboard-page-img" src="${src}" alt="Design Collection page ${i + 1}"/>
      </section>
    `).join('');
  }

  // ----- Pages 5-7: Floor Plan(s) -----
  function pageFloorPlan(lot, label, levelKey, total, page) {
    // Schematic SVG layouts based on label
    const labelLow = label.toLowerCase();
    const wall = '#2a2a26';
    const accent = '#003349';
    let layout;
    if (labelLow.includes('lower') || labelLow.includes('basement')) {
      layout = `
        <rect x="6" y="6" width="188" height="98" fill="none" stroke="${wall}" stroke-width="2"/>
        <path d="M6 70 L70 70 M80 70 L194 70" stroke="${wall}" stroke-width="1.6"/>
        <path d="M70 6 L70 70 M140 70 L140 104" stroke="${wall}" stroke-width="1.6"/>
        <path d="M35 6 L35 70 M105 6 L105 70" stroke="${wall}" stroke-width="1.2" opacity=".7"/>
        <text x="20" y="42" text-anchor="middle" font-size="5.5" fill="${wall}" font-family="Arial">MECH</text>
        <text x="52" y="42" text-anchor="middle" font-size="5.5" fill="${wall}" font-family="Arial">STOR</text>
        <text x="87" y="42" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">BED 5</text>
        <text x="147" y="42" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">BATH</text>
        <text x="40" y="90" text-anchor="middle" font-size="7" fill="${accent}" font-family="Arial" font-weight="600">REC ROOM</text>
        <text x="167" y="90" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">MEDIA</text>
      `;
    } else if (labelLow.includes('second') || labelLow.includes('third') || labelLow.includes('upper')) {
      layout = `
        <rect x="6" y="6" width="188" height="98" fill="none" stroke="${wall}" stroke-width="2"/>
        <path d="M6 55 L100 55 M112 55 L194 55" stroke="${wall}" stroke-width="1.6"/>
        <path d="M70 6 L70 55 M130 55 L130 104 M60 55 L60 104 M100 6 L100 55" stroke="${wall}" stroke-width="1.6"/>
        <path d="M150 55 L150 80 M150 80 L194 80" stroke="${wall}" stroke-width="1.2"/>
        <text x="38" y="32" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">BED 2</text>
        <text x="85" y="32" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">BATH</text>
        <text x="147" y="32" text-anchor="middle" font-size="7" fill="${accent}" font-family="Arial" font-weight="600">OWNER'S</text>
        <text x="33" y="84" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">BED 3</text>
        <text x="95" y="84" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">BED 4</text>
        <text x="170" y="72" text-anchor="middle" font-size="5.5" fill="${wall}" font-family="Arial">BATH</text>
        <text x="170" y="94" text-anchor="middle" font-size="5.5" fill="${wall}" font-family="Arial">LAUNDRY</text>
      `;
    } else {
      // Main level
      layout = `
        <rect x="6" y="6" width="188" height="98" fill="none" stroke="${wall}" stroke-width="2"/>
        <path d="M6 70 L70 70 M82 70 L130 70 M142 70 L194 70" stroke="${wall}" stroke-width="1.6"/>
        <path d="M70 6 L70 70 M130 70 L130 104" stroke="${wall}" stroke-width="1.6"/>
        <path d="M70 38 L194 38 M120 6 L120 38" stroke="${wall}" stroke-width="1.2"/>
        <text x="33" y="42" text-anchor="middle" font-size="6.5" fill="${wall}" font-family="Arial">GARAGE</text>
        <text x="95" y="24" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">FOYER</text>
        <text x="156" y="24" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">DINING</text>
        <text x="33" y="92" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">FLEX</text>
        <text x="100" y="90" text-anchor="middle" font-size="7" fill="${accent}" font-family="Arial" font-weight="600">LIVING</text>
        <text x="162" y="92" text-anchor="middle" font-size="6" fill="${wall}" font-family="Arial">KITCHEN</text>
      `;
    }

    return `
      <section class="page">
        ${brandHeader()}
        <h2 class="page-title">FLOOR PLAN<br/><span class="page-title-sub">${esc(label.toUpperCase())}</span></h2>
        <div class="floor-meta">
          <div><span>Plan</span><strong>${esc(lot.planName)}</strong></div>
          <div><span>Beds</span><strong>${lot.beds || '—'}</strong></div>
          <div><span>Baths</span><strong>${lot.baths || '—'}</strong></div>
          <div><span>Sq Ft</span><strong>${(lot.sqft || 0).toLocaleString()}</strong></div>
          <div><span>Garage</span><strong>${esc(lot.garage) || '—'}</strong></div>
        </div>
        <div class="floor-image-wrap">
          <svg viewBox="0 0 200 110" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
            <rect width="200" height="110" fill="#FBF8EF"/>
            ${layout}
          </svg>
          <div class="floor-image-stamp">${esc(label)} · Placeholder · final architectural marketing set to follow</div>
        </div>
        ${pageFooter(page, total)}
      </section>
    `;
  }

  // ----- Page 8: Landscape Package -----
  function pageLandscape(lot, total, page) {
    const PKGS = window.LANDSCAPE_PACKAGES || {
      1: { name: 'Designer Turf',              description: 'Faux grass framed by layered plantings for a clean, versatile, pet-friendly retreat.', image: __asset('landscape1') },
      2: { name: 'Architectural Stone Pavers', description: 'Premium stone pavers with perimeter plantings for a refined, low-maintenance space ideal for entertaining.', image: __asset('landscape2') },
      3: { name: 'Slate Stone Mulch',          description: 'Slate stone mulch with layered plantings for a modern, low-upkeep landscape with rich texture and contrast.', image: __asset('landscape3') },
      4: { name: 'Natural Lawn',               description: 'A classic, fully sodded lawn for a timeless, open and versatile courtyard.', image: __asset('landscape4') },
      5: { name: 'Natural Plantings',          description: 'A lush, layered landscape of shrubs and greenery for a rich, natural, low-maintenance retreat.', image: __asset('landscape5') },
    };
    const pkg = PKGS[lot.landscaping];
    if (lot.landscaping === 'buyer') return `
      <section class="page">
        ${brandHeader()}
        <h2 class="page-title">LANDSCAPE<br/><span class="page-title-sub">PACKAGE</span></h2>
        <div class="landscape-headline">
          <div class="landscape-headline-name">Buyer Selection</div>
        </div>
        <p class="landscape-desc">Choose your landscape package from the following options:</p>
        <div class="landscape-choice-grid">
          ${[1,2,3,4,5].map(k => `
            <div class="landscape-choice">
              <img src="${PKGS[k].image}" alt="${esc(PKGS[k].name)}"/>
              <div class="landscape-choice-name">${esc(PKGS[k].name)}</div>
              <div class="landscape-choice-desc">${esc(PKGS[k].description)}</div>
            </div>`).join('')}
        </div>
        <p class="hint">Preliminary renderings — final plant species and quantities will be provided in your homeowner package.</p>
        ${pageFooter(page, total)}
      </section>
    `;
    return `
      <section class="page">
        ${brandHeader()}
        <h2 class="page-title">LANDSCAPE<br/><span class="page-title-sub">PACKAGE</span></h2>
        <div class="landscape-headline">
          <div class="landscape-headline-num">Package #${lot.landscaping || '—'}</div>
          ${pkg ? `<div class="landscape-headline-name">${esc(pkg.name)}</div>` : ''}
        </div>
        ${pkg && pkg.image ? `
          <div class="landscape-image-wrap">
            <img src="${pkg.image}" alt="${esc(pkg.name)}"/>
          </div>
        ` : ''}
        ${pkg && pkg.description ? `<p class="landscape-desc">${esc(pkg.description)}</p>` : ''}
        ${lot.landscapeNote ? `<p class="landscape-desc"><strong>${esc(lot.landscapeNote)}</strong></p>` : ''}
        <p class="hint">Preliminary rendering — final plant species and quantities will be provided in your homeowner package.</p>
        ${pageFooter(page, total)}
      </section>
    `;
  }

  // ----- Page 9: Features & Finishes -----
  function pageFeaturesFinishes(total, page) {
    return `
      <section class="page page-features">
        ${brandHeader()}
        <h2 class="page-title">FEATURES<br/>&amp; FINISHES</h2>
        <div class="features-grid">
          <div class="features-col">
            <h3 class="features-h">Exterior</h3>
            <ul>
              <li>Exteriors featuring natural queen size brick with smooth fiber cement siding and board &amp; batten accents per plan.</li>
              <li>Single hung vinyl windows with bronze exterior and white interior; SDL grid pattern per elevation.</li>
              <li>Fiberglass front door (style per elevation)</li>
              <li>Exterior locks – Level 2 Matte Black Kwikset (front door).</li>
              <li>Architectural roof shingles.</li>
              <li>Porch and dormer roofs- Metal (per elevation)</li>
              <li>Garage doors per plan with Genie garage door openers included.</li>
              <li>2 exterior hose bibbs- front and rear of house.</li>
              <li>Exterior waterproof receptacles.</li>
              <li>Pre-finished aluminum gutters and downspouts.</li>
              <li>Duradek porch flooring and wrapped Hardie porch columns per plan.</li>
            </ul>
            <h3 class="features-h">Interior</h3>
            <ul>
              <li>Interior Stairs- Site-built with coordinating LVP treads and painted risers.</li>
              <li>Garage to house stairs- Pine treads</li>
              <li>Monroe 2 panel flat shaker door (hollow core).</li>
              <li>Interior door hardware – Level 1 Matte Black Kwikset.</li>
              <li>Prewired fan/light kit brace and fan fixtures in Family Room and Owner's Bedroom. Additional locations per plan.</li>
              <li>Sherwin Williams wall paint and ceiling in flat with semi-gloss trim.</li>
              <li>Electric hot water heater.</li>
              <li>Goodman electric heat pump system.</li>
              <li>Wi-Fi capable thermostat standard. Some plans may be zoned.</li>
              <li>Modern Trim Package: 1x4 flat window and door trim, 1x6 flat baseboards.</li>
              <li>Ventilated wire shelving in closets and pantry.</li>
              <li>LED disc lights and fixtures per plan.</li>
              <li>9' Ceilings on first floor, 10' on main level, 9' top on floor</li>
            </ul>
            <h3 class="features-h">Flooring</h3>
            <ul>
              <li>Level 1 Hardwood floors in the foyer, kitchen, family room, dining room, mudroom, powder room, downstairs and upstairs hallways.</li>
              <li>Level 1 Carpet with 5.5lb pad in primary bedroom and closet, secondary bedrooms and closets.</li>
            </ul>
          </div>
          <div class="features-col">
            <h3 class="features-h">Kitchen</h3>
            <ul>
              <li>Level 3 Diamond Vibe painted or stained cabinets with soft-close doors and drawers</li>
              <li>42" high wall cabinets with 1-piece cove crown molding</li>
              <li>Level 1 Quartz countertops and Level 2 tile backsplash.</li>
              <li>Level 1- Single bowl stainless steel under-mount sink.</li>
              <li>Level 1 Moen Genta kitchen faucet in chrome (or equivalent)</li>
              <li>Whirlpool appliance package featuring: Level 1 30" Gas Range, Level 1 Stainless Steel Chimney Hood, Level 1 Microwave with 27" Trim Kit, and Level 2 Dishwasher</li>
              <li>Level 2 – Island pendants (2)</li>
              <li>Island with box column legs with smooth cabinet back panel.</li>
              <li>Level 3 – Cabinet hardware</li>
              <li>Garbage disposal (switch under sink)</li>
            </ul>
            <h3 class="features-h">Primary Bathroom</h3>
            <ul>
              <li>Raised vanity height to 36".</li>
              <li>Level 3 Diamond Vibe vanity cabinet.</li>
              <li>Level 1 quartz countertops with undermount sinks.</li>
              <li>Level 1 Moen Genta single lever faucet in chrome (or equivalent).</li>
              <li>Level 1 tile shower floor and tile walls.</li>
              <li>12" X 12" recessed shower niche.</li>
              <li>Level 1 frameless shower door. (80" H)</li>
              <li>Level 2 elongated, comfort-height toilet.</li>
              <li>Level 1 tile flooring.</li>
            </ul>
            <h3 class="features-h">Secondary Bathroom</h3>
            <ul>
              <li>Raised vanity height to 36"</li>
              <li>Level 3 Diamond Vibe vanity cabinet.</li>
              <li>Cultured marble countertop with integrated sink bowl.</li>
              <li>Level 1 Moen Genta faucet in chrome (or equivalent).</li>
              <li>Acrylic tub with Level 1 tile tub/shower surround.</li>
              <li>Elongated standard-height toilet.</li>
              <li>Level 1 tile flooring</li>
            </ul>
            <h3 class="features-h">Tech</h3>
            <ul>
              <li>Low voltage panel (location per plan).</li>
              <li>Cat6 media outlets in Primary Bedroom and Family Room.</li>
              <li>Pre-wired for security key pad in Primary Bedroom and Garage.</li>
              <li>200 AMP electrical service</li>
              <li>Pre-wired for future 50-amp EV charger</li>
            </ul>
          </div>
        </div>
        <p class="features-disclaimer">
          Specifications, terms, prices, features, dimensions, and availability are subject to change without notice. Please see a sales representative for more details. E.&amp; O.E.
        </p>
        ${pageFooter(page, total)}
      </section>
    `;
  }

  // ----- Page 10: HOA Info -----
  function pageHOA(total, page) {
    return `
      <section class="page">
        ${brandHeader()}
        <h2 class="page-title">HOA<br/><span class="page-title-sub">INFO</span></h2>
        <div class="hoa-lede">
          <strong>HOMEOWNER'S ASSOCIATION</strong>
        </div>
        <div class="hoa-cards">
          <div class="hoa-card">
            <div class="hoa-card-label">MONTHLY ASSESSMENT</div>
            <div class="hoa-card-value">$550</div>
          </div>
          <div class="hoa-card">
            <div class="hoa-card-label">CAPITAL CONTRIBUTION</div>
            <div class="hoa-card-value">$2,500</div>
          </div>
        </div>
        <div class="hoa-covers">
          <h3 class="features-h">Your Monthly Fees Cover</h3>
          <div class="hoa-cover-groups">
            <div class="hoa-cover-group">
              <h4 class="hoa-cover-sub">Tableau</h4>
              <ul class="hoa-list">
                <li>Amenity Pool Repair and Maintenance</li>
                <li>Exterior maintenance to include painting, roof repair and replacement</li>
                <li>Homeowner's Landscaping &amp; Common areas including irrigation</li>
                <li>Fire &amp; Liability Insurance</li>
                <li>Individual Household Cable/Internet</li>
                <li>Taxes and insurance on common areas</li>
                <li>Community streetlights</li>
                <li>Termite Bond</li>
                <li>Association Management Fee</li>
              </ul>
            </div>
            <div class="hoa-cover-group">
              <h4 class="hoa-cover-sub">Medley</h4>
              <ul class="hoa-list">
                <li>Medley Master Association</li>
                <li>Medley Street Maintenance, Repair &amp; Replacement</li>
                <li>Landscape Maintenance of common areas including ROW's in Tableau</li>
                <li>Medley Experience</li>
                <li>Future Concierge service access</li>
                <li>Security Patrol that will patrol the retail, apartments, hotel and Tableau</li>
                <li>Valet (additional fees apply)</li>
              </ul>
            </div>
          </div>
        </div>
        ${pageFooter(page, total)}
      </section>
    `;
  }

  // ----- Page 11: Preferred Lenders -----
  function pageLenders(total, page) {
    return `
      <section class="page page-lenders">
        ${brandHeader()}
        <h2 class="page-title">PREFERRED<br/><span class="page-title-sub">LENDERS</span></h2>
        <div class="lender-hero">
          Save up to <em>$5,000</em> if you finance through one of our preferred lenders.
        </div>
        <div class="lender-list">
          <div class="lender-block">
            <div class="lender-bank">Ameris Bank Mortgage Services</div>
            <div class="lender-contacts">
              <div class="lender-person">
                <strong>Ronda Crowe</strong>
                <span>T: 404-992-5626</span>
                <span>E: ronda.crowe@amerisbank.com</span>
              </div>
            </div>
          </div>
          <div class="lender-block">
            <div class="lender-bank">BankSouth Mortgage</div>
            <div class="lender-contacts">
              <div class="lender-person">
                <strong>Brian Williams</strong>
                <span>T: 404-822-4155</span>
                <span>E: bwilliams@banksouth.com</span>
              </div>
              <div class="lender-person">
                <strong>Shachi Bhardwaj</strong>
                <span>T: 678-595-7904</span>
                <span>E: sbhardwaj@banksouth.com</span>
              </div>
            </div>
          </div>
          <div class="lender-block">
            <div class="lender-bank">CMG Home Loans</div>
            <div class="lender-contacts">
              <div class="lender-person">
                <strong>Kyler Smith</strong>
                <span>T: 706-252-1781</span>
                <span>E: kylers@cmghomeloans.com</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lender-criteria">
          <div class="criteria-col">
            <h4>FINANCED PURCHASES</h4>
            <p>A letter from your Lender must include the following:</p>
            <ul>
              <li>Loan amount and/or Loan to Value Percentage</li>
              <li>State that Credit has been pulled</li>
              <li>Show no contingencies</li>
              <li>Estimated Sales Price</li>
              <li>State that income and assets have been verified</li>
            </ul>
          </div>
          <div class="criteria-col">
            <h4>CASH PURCHASES</h4>
            <p>Financial statement(s) must include the following:</p>
            <ul>
              <li>Balance of the account(s)</li>
              <li>Account numbers blacked out</li>
              <li>Account holder(s) name(s)</li>
              <li>Additional documentation may be required if funds are being gifted</li>
            </ul>
          </div>
        </div>

        <p class="lender-note">
          You may choose any lender; however, we have an established relationship with CMG Home Loans, Ameris Bank Mortgage Services, and BankSouth Banking and Mortgage. They know how Empire Homes operates and they are here to ensure your home loan is completed in time for you to receive the keys to your new home without delay.
        </p>
        <p class="lender-fineprint">
          ©2026. Empire Homes. Information subject to change. *$5,000 in closing costs breaks down to $2,500 contributed from seller and $2,500 as a lender credit from preferred lender. All sales through EAH Brokerage.
        </p>

        ${pageFooter(page, total)}
      </section>
    `;
  }

  // ---- Stylesheet (inlined; doesn't depend on parent) ----
  const STYLE = `
@page { size: Letter; margin: 0; }
* { box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
html, body { margin: 0; padding: 0; background: #fff; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #1B1F1A; }

.page {
  width: 8.5in;
  height: 11in;
  padding: 0.55in 0.6in 0.95in;
  position: relative;
  overflow: hidden;
  page-break-after: always;
  break-after: page;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.page:last-child { page-break-after: auto; break-after: auto; }

/* Brand header on every content page */
.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #E2DCC8;
  margin-bottom: 22px;
  height: 48px;
}
.brand-header .empire-mark { height: 36px; width: auto; }
.brand-header .tableau-mark { height: 28px; width: auto; }

/* Page title — large serif, all caps, navy */
.page-title {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.0;
  letter-spacing: 0.02em;
  color: #003349;
  margin: 0 0 28px;
  text-transform: uppercase;
  font-style: italic;
}
.page-title-sub {
  font-style: italic;
  display: block;
}

/* Footer on every page */
.page-footer {
  position: absolute;
  left: 0.6in;
  right: 0.6in;
  bottom: 0.45in;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  border-top: 1px solid #E2DCC8;
  font-size: 9px;
  letter-spacing: 0.06em;
  color: #5A5849;
}
.footer-addr { font-weight: 600; }
.footer-phone { color: #003349; font-weight: 500; }
.footer-page {
  font-style: italic;
  color: #6F2C3F;
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-size: 11px;
}

/* ===== Page 1 cover ===== */
.page-cover {
  background: #FFFFFF;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.page-cover::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 6px;
  background: #E06344;
}
.page-cover::after { content: none; }
.cover-top {
  padding-top: 0.8in;
  display: flex;
  justify-content: center;
}
.cover-tableau { height: 90px; width: auto; }
.cover-center {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.7in;
}
.cover-eyebrow {
  font-size: 11px;
  letter-spacing: 0.32em;
  color: #6F2C3F;
  font-weight: 700;
  margin-bottom: 28px;
}
.cover-title {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-weight: 600;
  font-size: 72px;
  line-height: 0.92;
  letter-spacing: 0.005em;
  color: #003349;
  margin: 0 0 38px;
}
.cover-lot-pill {
  display: inline-block;
  padding: 12px 24px;
  background: #003349;
  color: #F1F1DE;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  border-radius: 2px;
}
.cover-bottom {
  padding-bottom: 0.9in;
  display: flex;
  justify-content: center;
}
.cover-empire { height: 70px; width: auto; }

/* ===== Page 2 summary ===== */
.summary-grid {
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 14px;
  margin-bottom: 18px;
}
.summary-card {
  border: 1px solid #D9D2BD;
  background: #FFFCF4;
  border-radius: 2px;
  padding: 18px 20px;
}
.lot-card { display: flex; flex-direction: column; gap: 4px; background: #F4EBC2; color: #003349; border-color: #D9C756; }
.summary-eyebrow {
  font-size: 9.5px;
  letter-spacing: 0.22em;
  color: #6F2C3F;
  font-weight: 700;
  text-transform: uppercase;
}
.summary-lot-num {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 56px;
  line-height: 0.95;
  color: #003349;
  margin: 6px 0 4px;
}
.summary-plan-line {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #003349;
}
.summary-phase {
  margin-top: auto;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 2px;
  background: rgba(255,255,255,0.55);
  border: 1px solid;
  color: #003349;
  margin-top: 16px;
}
.summary-phase-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
.stats-card { display: flex; flex-direction: column; gap: 0; padding: 12px 18px; }
.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px solid #ECE7D6;
}
.stat-row:last-child { border-bottom: none; }
.stat-key {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6F2C3F;
  font-weight: 700;
}
.stat-val {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 18px;
  color: #003349;
  font-weight: 600;
}

.price-card {
  border: 1px solid #003349;
  border-top: 5px solid #003349;
  padding: 16px 20px;
  background: #FFF;
  margin-bottom: 16px;
}
.price-card-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 8px;
  border-bottom: 1px solid #ECE7D6;
  margin-bottom: 10px;
}
.price-label { font-size: 11px; font-weight: 700; letter-spacing: 0.22em; color: #6F2C3F; }
.price-value {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 36px;
  color: #003349;
  font-weight: 600;
  line-height: 1;
}
.price-breakdown { display: flex; flex-direction: column; gap: 4px; font-size: 12px; }
.price-row { display: flex; justify-content: space-between; color: #3D423C; }
.price-row span:last-child { color: #1B1F1A; font-weight: 500; }
.price-row.subtotal {
  font-weight: 700;
  border-top: 1px solid #E2DCC8;
  padding-top: 6px;
  margin-top: 4px;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.12em;
  color: #003349;
}
.price-row.subtotal span:last-child {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 18px;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 600;
  color: #003349;
}
.price-disclaimer {
  margin: 10px 0 0;
  padding-top: 8px;
  border-top: 1px solid #ECE7D6;
  font-size: 9.5px;
  line-height: 1.45;
  color: #7A766A;
}
.price-disclaimer em { font-style: italic; }

.program-callout {
  border: 1px solid #D9D2BD;
  border-left: 5px solid #003349;
  padding: 12px 16px;
  background: #FFFCF4;
}
.program-eyebrow {
  font-size: 9.5px;
  letter-spacing: 0.22em;
  font-weight: 700;
  text-transform: uppercase;
  color: #6F2C3F;
  margin-bottom: 4px;
}
.program-name {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 24px;
  color: #003349;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 4px;
}
.program-tag {
  font-size: 12px;
  color: #3D423C;
  font-style: italic;
}
.program-desc {
  font-size: 10.5px;
  line-height: 1.5;
  color: #3D423C;
  margin: 6px 0 0;
}

/* ===== Page 3 elevation ===== */
.elev-letter-banner {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 22px;
  padding-bottom: 14px;
  border-bottom: 1px solid #E2DCC8;
}
.elev-letter {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-weight: 700;
  font-size: 120px;
  color: #003349;
  line-height: 0.9;
}
.elev-label-line1 {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6F2C3F;
}
.elev-label-line2 {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 30px;
  color: #003349;
  font-weight: 500;
  line-height: 1;
  margin-top: 6px;
}
.elev-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid #D9D2BD;
  border-radius: 2px;
  overflow: hidden;
  background: #F2EFE6;
  margin-bottom: 18px;
}
.elev-image-wrap svg { width: 100%; height: 100%; display: block; }
.elev-image-stamp {
  position: absolute;
  left: 12px; bottom: 12px;
  padding: 5px 10px;
  background: rgba(0,51,73,0.85);
  color: #F1F1DE;
  font-size: 8.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 1px;
}
.elev-letters-strip {
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 12px;
}
.elev-chip {
  width: 32px; height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  background: #F1F1DE;
  border: 1px solid #D9D2BD;
  color: #7A766A;
  border-radius: 1px;
}
.elev-chip.on {
  background: #003349;
  color: #F1F1DE;
  border-color: #003349;
}
.hint {
  font-size: 11px;
  color: #7A766A;
  font-style: italic;
  line-height: 1.5;
  max-width: 92%;
}

/* ===== Page 4 exterior color ===== */
.scheme-headline {
  display: flex;
  align-items: baseline;
  gap: 18px;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #E2DCC8;
}
.scheme-headline-num {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6F2C3F;
}
.scheme-headline-brick {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 28px;
  color: #003349;
  font-weight: 600;
  line-height: 1;
}
.scheme-hero {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 6;
  border-radius: 2px;
  overflow: hidden;
  background: #2a2a26;
  margin-bottom: 16px;
}
.scheme-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
.scheme-hero-cap {
  position: absolute;
  left: 12px; bottom: 12px;
  padding: 6px 12px;
  background: rgba(0,51,73,0.92);
  color: #F1F1DE;
  border-radius: 2px;
  line-height: 1.1;
}
.scheme-hero-cap span {
  display: block;
  font-size: 9px;
  letter-spacing: 0.18em;
  color: #C6DCDA;
  font-weight: 700;
}
.scheme-hero-cap strong {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 16px;
  font-weight: 500;
}
.scheme-pending {
  text-align: center;
  font-style: italic;
  color: #7A766A;
  padding: 20px;
  background: #FFFCF4;
  border: 1px dashed #D9D2BD;
  margin-bottom: 16px;
}

.scheme-paints {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 14px;
}
.paint-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border: 1px solid #D9D2BD;
  background: #FFFCF4;
  border-radius: 2px;
}
.paint-swatch {
  width: 48px;
  height: 48px;
  border-radius: 2px;
  border: 1px solid rgba(0,51,73,0.18);
  flex-shrink: 0;
}
.paint-meta { display: flex; flex-direction: column; line-height: 1.15; }
.paint-label {
  font-size: 8.5px;
  letter-spacing: 0.18em;
  color: #6F2C3F;
  font-weight: 700;
}
.paint-name {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 16px;
  color: #003349;
  font-weight: 500;
  margin-top: 2px;
}
.paint-code {
  font-size: 9px;
  letter-spacing: 0.06em;
  color: #7A766A;
  font-weight: 600;
  margin-top: 1px;
}

.block-label {
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 700;
  color: #6F2C3F;
  margin-bottom: 6px;
}
.trim-block { margin-bottom: 12px; }
.trim-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}
.trim-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border: 1px solid #D9D2BD;
  background: #FFFCF4;
  border-radius: 2px;
}
.trim-swatch {
  width: 16px;
  height: 16px;
  border-radius: 1px;
  border: 1px solid rgba(0,51,73,0.18);
  flex-shrink: 0;
}
.trim-text { display: flex; flex-direction: column; line-height: 1.1; }
.trim-code { font-size: 8.5px; font-weight: 700; color: #7A766A; letter-spacing: 0.04em; }
.trim-name { font-size: 10px; color: #1B1F1A; }

.materials-block { margin-bottom: 12px; }
.materials-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
.material {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border: 1px solid #D9D2BD;
  background: #FFFCF4;
  border-radius: 2px;
}
.material-thumb { width: 44px; height: 44px; object-fit: cover; border-radius: 2px; }
.material-meta { display: flex; flex-direction: column; line-height: 1.15; }
.material-meta span {
  font-size: 8.5px;
  letter-spacing: 0.18em;
  font-weight: 700;
  text-transform: uppercase;
  color: #6F2C3F;
}
.material-meta strong {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 13px;
  color: #003349;
  font-weight: 500;
}

/* ===== Floor plan official marketing sheet (full-bleed) ===== */
.page-floorplan-sheet {
  padding: 0;
  align-items: center;
  justify-content: center;
}
.floorplan-sheet-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* ===== Design Collection storyboard pages (full-bleed) ===== */
.page-storyboard {
  padding: 0;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.storyboard-page-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* ===== Pages 5-7 floor plans ===== */
.floor-meta {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-bottom: 18px;
  padding: 14px 18px;
  background: #C6DCDA;
  border-radius: 2px;
}
.floor-meta > div { display: flex; flex-direction: column; line-height: 1.15; }
.floor-meta span {
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #003349;
  font-weight: 700;
}
.floor-meta strong {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 22px;
  font-weight: 700;
  color: #003349;
  margin-top: 2px;
  line-height: 1;
}
.floor-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 200 / 110;
  border: 1px solid #D9D2BD;
  border-radius: 2px;
  background: #FBF8EF;
  overflow: hidden;
}
.floor-image-wrap svg { width: 100%; height: 100%; display: block; }
.floor-image-stamp {
  position: absolute;
  left: 12px; bottom: 12px;
  padding: 5px 10px;
  background: rgba(0,51,73,0.85);
  color: #F1F1DE;
  font-size: 8.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 1px;
}

/* ===== Page 8 landscape ===== */
.landscape-headline {
  display: flex;
  align-items: baseline;
  gap: 18px;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #E2DCC8;
}
.landscape-headline-num {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6F2C3F;
}
.landscape-headline-name {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 28px;
  color: #003349;
  font-weight: 600;
  line-height: 1;
}
.landscape-image-wrap {
  width: 100%;
  aspect-ratio: 3 / 1;
  border: 1px solid #D9D2BD;
  border-radius: 2px;
  overflow: hidden;
  background: #2a2a26;
  margin-bottom: 14px;
}
.landscape-image-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
.landscape-choice-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 14px; margin-bottom: 12px; }
.landscape-choice img { width: 100%; aspect-ratio: 3 / 1; object-fit: cover; display: block; border-radius: 2px; }
.landscape-choice-name { font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #6F2C3F; margin-top: 5px; }
.landscape-choice-desc { font-size: 9.5px; line-height: 1.4; color: #3D423C; margin-top: 2px; }
.landscape-desc {
  font-size: 12.5px;
  line-height: 1.5;
  color: #3D423C;
  margin: 0 0 12px;
}

/* ===== Page 9 features ===== */
.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.features-col h3.features-h {
  font-family: 'Josefin Sans', Arial, sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #6F2C3F;
  margin: 14px 0 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid #E2DCC8;
}
.features-col h3.features-h:first-child { margin-top: 0; }
.features-col ul {
  list-style: none;
  padding: 0;
  margin: 0 0 6px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.features-col li {
  position: relative;
  padding-left: 12px;
  font-size: 9.5px;
  line-height: 1.45;
  color: #3D423C;
}
.features-col li::before {
  content: "";
  position: absolute;
  left: 0; top: 6px;
  width: 4px; height: 4px;
  background: #E06344;
  border-radius: 50%;
}
.features-disclaimer {
  margin: 10px 0 0;
  font-size: 8.5px;
  font-style: italic;
  color: #7A766A;
  text-align: center;
  padding-top: 8px;
  border-top: 1px solid #E2DCC8;
}

/* ===== Page 10 HOA ===== */
.hoa-lede {
  margin-bottom: 22px;
}
.hoa-lede strong {
  display: block;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6F2C3F;
  margin-bottom: 6px;
}
.hoa-lede p {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 18px;
  color: #003349;
  line-height: 1.35;
  margin: 0;
}
.hoa-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}
.hoa-card {
  border: 1px solid #003349;
  border-top: 5px solid #003349;
  border-radius: 2px;
  padding: 18px;
  background: #FFFCF4;
  text-align: center;
}
.hoa-card-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6F2C3F;
  margin-bottom: 8px;
}
.hoa-card-value {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 56px;
  color: #003349;
  font-weight: 700;
  line-height: 0.9;
}
.hoa-covers h3.features-h { margin-bottom: 8px; }
.hoa-cover-groups {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.hoa-cover-sub {
  font-family: 'Josefin Sans', Arial, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #003349;
  margin: 0 0 8px;
  padding-bottom: 5px;
  border-bottom: 1px solid #E2DCC8;
}
.hoa-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
}
.hoa-list li {
  position: relative;
  padding-left: 14px;
  font-size: 11px;
  color: #3D423C;
  line-height: 1.45;
}
.hoa-list li::before {
  content: "";
  position: absolute;
  left: 0; top: 6px;
  width: 5px; height: 5px;
  background: #E06344;
  border-radius: 50%;
}

/* ===== Page 11 lenders ===== */
.lender-hero {
  background: #003349;
  color: #F1F1DE;
  padding: 16px 24px;
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
  margin-bottom: 18px;
  border-radius: 2px;
  text-align: center;
}
.lender-hero em {
  color: #D9C756;
  font-style: italic;
  font-weight: 700;
}
.lender-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px; }
.lender-block {
  display: grid;
  grid-template-columns: 0.9fr 1.4fr;
  gap: 16px;
  padding: 12px 14px;
  border: 1px solid #D9D2BD;
  background: #FFFCF4;
  border-radius: 2px;
}
.lender-bank {
  font-family: 'New Atten', 'Atten New', 'Josefin Sans', Georgia, serif;
  font-style: italic;
  font-size: 18px;
  color: #003349;
  font-weight: 600;
  line-height: 1.1;
}
.lender-contacts { display: flex; flex-direction: column; gap: 8px; }
.lender-person { display: flex; flex-direction: column; line-height: 1.3; font-size: 10px; color: #3D423C; }
.lender-person strong {
  font-size: 11px;
  color: #6F2C3F;
  font-weight: 700;
  margin-bottom: 1px;
}

.lender-criteria {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 14px;
}
.criteria-col h4 {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6F2C3F;
  margin: 0 0 4px;
}
.criteria-col p { font-size: 10px; margin: 0 0 4px; color: #3D423C; }
.criteria-col ul {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 2px;
}
.criteria-col li {
  position: relative;
  padding-left: 12px;
  font-size: 9.5px;
  line-height: 1.4;
  color: #3D423C;
}
.criteria-col li::before {
  content: "";
  position: absolute;
  left: 0; top: 5px;
  width: 4px; height: 4px;
  background: #E06344;
  border-radius: 50%;
}
.lender-note {
  font-size: 10px;
  font-style: italic;
  line-height: 1.5;
  color: #3D423C;
  margin: 0 0 10px;
}
.lender-fineprint {
  font-size: 8px;
  color: #7A766A;
  line-height: 1.45;
  margin: 0;
}
`;

  function lotPacketBody(lot) {
    M = window.MEDLEY;
    const plan = M.PLAN_INFO[lot.planName] || {};
    const floorplanSrc = plan.floorplan || null;
    const marketingPlans = lot.marketingPlans || null;
    let levels;
    if (lot.planName && lot.planName.toLowerCase().includes('basement')) {
      levels = ['Lower Level', 'Main Level', 'Second Level'];
    } else {
      levels = ['Main Level', 'Second Level'];
    }
    const floorPlanPageCount = marketingPlans ? marketingPlans.length : (floorplanSrc ? 1 : levels.length);
    const total = 1 + 1 + 1 + 1 + floorPlanPageCount + 1 + 1 + 1 + 1;

    let page = 1;
    let out = '';
    out += pageCover(lot, total); page++;
    out += pageSummary(lot, total, page); page++;
    out += pageElevation(lot, total, page); page++;
    out += pageExteriorColor(lot, total, page); page++;
    if (marketingPlans) {
      for (const mp of marketingPlans) { out += pageFloorPlanSheet(lot, mp.src); page++; }
    } else if (floorplanSrc) {
      out += pageFloorPlanSheet(lot, floorplanSrc); page++;
    } else {
      for (const lv of levels) { out += pageFloorPlan(lot, lv, lv, total, page); page++; }
    }
    out += pageLandscape(lot, total, page); page++;
    out += pageFeaturesFinishes(total, page); page++;
    out += pageHOA(total, page); page++;
    out += pageLenders(total, page);
    out += pagesHomeownerApp();
    out += pagesStoryboard(lot);
    return out;
  }

  function wrapDoc(bodyHTML, filename, baseHref) {
    return [
      '<!doctype html>',
      '<html lang="en"><head>',
      '<meta charset="utf-8"/>',
      `<base href="${baseHref}">`,
      `<title>${filename}</title>`,
      '<link rel="preconnect" href="https://fonts.googleapis.com">',
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap">',
      `<style>${STYLE}</style>`,
      '</head><body>',
      bodyHTML,
      '</body></html>',
    ].join('\n');
  }

  function buildLotPacketHTML(lot, filename, baseHref) {
    M = window.MEDLEY;
    if (!M) { console.error('window.MEDLEY missing'); return ''; }
    return wrapDoc(lotPacketBody(lot), filename, baseHref);
  }

  // Combined packet for a list of favorite lots — one full packet per lot,
  // concatenated into a single printable document.
  function buildFavoritesPacketHTML(lots, filename, baseHref) {
    M = window.MEDLEY;
    if (!M) { console.error('window.MEDLEY missing'); return ''; }
    const body = (lots || []).map(lotPacketBody).join('\n');
    return wrapDoc(body, filename, baseHref);
  }

  // Expose to other scripts
  window.buildLotPacketHTML = buildLotPacketHTML;
  window.buildFavoritesPacketHTML = buildFavoritesPacketHTML;
})();
