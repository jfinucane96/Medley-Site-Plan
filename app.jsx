// Tableau at Medley — main app
const { useState, useEffect, useMemo, useRef } = React;
const M = window.MEDLEY;

// ---------- helpers ----------
const fmt$ = n => '$' + Number(n||0).toLocaleString();
const fmtK = n => '$' + Math.round((n||0)/1000) + 'k';
function classNames(...xs) { return xs.filter(Boolean).join(' '); }

// ---------- icons ----------
const Icon = {
  Search:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  X:       () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><path d="M18 6 6 18M6 6l12 12"/></svg>,
  Heart:   ({filled}) => <svg viewBox="0 0 24 24" fill={filled?'currentColor':'none'} stroke="currentColor" strokeWidth="1.6" width="16" height="16"><path d="M12 21s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.65-9.5 9-9.5 9Z"/></svg>,
  Reset:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>,
  Plus:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M12 5v14M5 12h14"/></svg>,
  Minus:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14"/></svg>,
  Check:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="14" height="14"><path d="m5 12 5 5L20 7"/></svg>,
  Play:    () => <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M8 5v14l11-7L8 5Z"/></svg>,
  Edit:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14"><path d="m13 4 7 7L9 22H2v-7L13 4Z"/></svg>,
  Save:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14"><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8l4 4v12a2 2 0 0 1-2 2Z"/><path d="M9 21v-7h6v7M9 3v4h6"/></svg>,
  Bed:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><path d="M2 11v8M2 11h20v8M2 11V7a2 2 0 0 1 2-2h6v6M14 11h6v-2a2 2 0 0 0-2-2h-4v4Z"/></svg>,
  Bath:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><path d="M2 12h20v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-3ZM5 12V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2M5 19v2M19 19v2"/></svg>,
  Sqft:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><path d="M3 3h18v18H3z"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>,
  Garage:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="14" height="14"><path d="M3 21V10l9-6 9 6v11M6 21V13h12v8M6 16h12"/></svg>,
  Print:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14"><path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="9" rx="1"/><path d="M6 18h12v4H6z"/><circle cx="17.5" cy="12.5" r=".8" fill="currentColor"/></svg>,
  ChevLeft:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="m15 6-6 6 6 6"/></svg>,
  ChevRight: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="m9 6 6 6-6 6"/></svg>,
  Clock:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="14" height="14"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2.5"/></svg>,
  Savings:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="14" height="14"><path d="M20.59 13.41 11.83 22A2 2 0 0 1 9 22l-7-7a2 2 0 0 1 0-2.83l8.59-8.59A2 2 0 0 1 12 3h7a2 2 0 0 1 2 2v7a2 2 0 0 1-.41 1.41Z"/><circle cx="16.5" cy="7.5" r="1.4" fill="currentColor"/></svg>,
  Mail:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/><path d="m3 7 9 6 9-6"/></svg>,
  MapPin:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><path d="M12 22s8-9 8-13a8 8 0 1 0-16 0c0 4 8 13 8 13Z"/><circle cx="12" cy="9" r="3"/></svg>,
};

// ---------- Map ----------
// The full-screen phone page (map.html) sets window.MAP_ONLY and keeps its own saved view.
const VIEW_KEY = window.MAP_ONLY ? 'medley-view-phone' : 'medley-view';

function SitePlanMap({ lots, filteredIds, selected, onSelect, colorMode, showLabels, favorites, editMode, onMovePin, onOpenPavilion }) {
  const frameRef = useRef(null);
  const stageRef = useRef(null);
  const svgRef = useRef(null);
  // Restore the saved default view (zoom + pan) so the map opens at the framing
  // it was last left at. Saved to localStorage on change below.
  const SAVED_VIEW = (() => {
    try { return JSON.parse(localStorage.getItem(VIEW_KEY) || 'null'); } catch (e) { return null; }
  })();
  const [zoom, setZoom] = useState(SAVED_VIEW && SAVED_VIEW.zoom ? SAVED_VIEW.zoom : 1);
  const [pan, setPan] = useState(SAVED_VIEW && SAVED_VIEW.pan ? SAVED_VIEW.pan : {x:0, y:0});
  const [drag, setDrag] = useState(null);

  // Persist the current view so it becomes the default on the next visit.
  useEffect(() => {
    if (editMode) return; // don't capture transient edit-mode framing
    const id = setTimeout(() => {
      try { localStorage.setItem(VIEW_KEY, JSON.stringify({ zoom, pan })); } catch (e) {}
    }, 250);
    return () => clearTimeout(id);
  }, [zoom, pan, editMode]);

  const resetView = () => { setZoom(1); setPan({x:0,y:0}); };

  function onWheel(e) {
    e.preventDefault();
    const delta = -e.deltaY * 0.0015;
    setZoom(z => Math.min(5, Math.max(1, z * (1 + delta))));
  }
  // Touch + mouse: one pointer pans, two pointers pinch-zoom (about the fingers' midpoint).
  const ptrs = useRef(new Map());
  const gest = useRef(null);
  const lastMoved = useRef(false);
  const viewRef = useRef({ zoom, pan });
  viewRef.current = { zoom, pan };

  function beginGesture() {
    const v = viewRef.current;
    const pts = [...ptrs.current.values()];
    if (pts.length === 1) {
      gest.current = { mode: 'pan', sx: pts[0].x, sy: pts[0].y, px: v.pan.x, py: v.pan.y, moved: gest.current ? gest.current.moved : false };
    } else if (pts.length >= 2) {
      const [a, b] = pts;
      gest.current = { mode: 'pinch', dist: Math.hypot(a.x - b.x, a.y - b.y) || 1, z: v.zoom, px: v.pan.x, py: v.pan.y,
                       mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2, moved: true };
    } else {
      gest.current = null;
    }
  }
  function onPointerDown(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (editMode && e.target.closest('.lot-marker')) return;
    if (ptrs.current.size === 0) gest.current = null;
    lastMoved.current = false;
    ptrs.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    beginGesture();
    if (ptrs.current.size === 1) gest.current.moved = false;
    setDrag(true);
  }
  function onPointerMove(e) {
    if (!ptrs.current.has(e.pointerId) || !gest.current) return;
    ptrs.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = gest.current;
    if (g.mode === 'pan') {
      const dx = e.clientX - g.sx, dy = e.clientY - g.sy;
      if (!g.moved && Math.hypot(dx, dy) < 6) return;
      g.moved = true;
      setPan({ x: g.px + dx, y: g.py + dy });
    } else {
      const [a, b] = [...ptrs.current.values()];
      const z = Math.min(6, Math.max(1, g.z * (Math.hypot(a.x - b.x, a.y - b.y) / g.dist)));
      const r = frameRef.current.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const sx = (a.x + b.x) / 2, sy = (a.y + b.y) / 2;
      setZoom(z);
      setPan({ x: sx - cx - z * (g.mx - cx - g.px) / g.z, y: sy - cy - z * (g.my - cy - g.py) / g.z });
    }
  }
  function onPointerEnd(e) {
    if (!ptrs.current.delete(e.pointerId)) return;
    const wasMoved = !!(gest.current && gest.current.moved);
    lastMoved.current = wasMoved;
    beginGesture();
    if (gest.current) gest.current.moved = wasMoved;
    else setDrag(false);
  }
  // A drag or pinch that ends over a lot pin must not also count as a tap on it.
  function onClickCapture(e) {
    if (lastMoved.current) e.stopPropagation();
    lastMoved.current = false;
  }

  // SVG → image coords mapping for edit-mode placement
  function svgPointFromClient(clientX, clientY) {
    const svg = svgRef.current;
    if (!svg) return null;
    const pt = svg.createSVGPoint();
    pt.x = clientX; pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return null;
    const sp = pt.matrixTransform(ctm.inverse());
    return { x: sp.x / 1071, y: sp.y / 773 };
  }

  // Edit mode: dragging an individual pin
  const pinDragRef = useRef(null);
  function onPinMouseDown(e, lot) {
    if (!editMode) return;
    e.stopPropagation();
    pinDragRef.current = { n: lot.n };
    document.body.style.cursor = 'grabbing';
  }
  function onSvgMouseMove(e) {
    if (!pinDragRef.current) return;
    const sp = svgPointFromClient(e.clientX, e.clientY);
    if (!sp) return;
    onMovePin(pinDragRef.current.n, sp);
  }
  function onSvgMouseUp() {
    if (pinDragRef.current) {
      pinDragRef.current = null;
      document.body.style.cursor = '';
    }
  }
  useEffect(() => {
    if (!editMode) return;
    window.addEventListener('mousemove', onSvgMouseMove);
    window.addEventListener('mouseup', onSvgMouseUp);
    return () => {
      window.removeEventListener('mousemove', onSvgMouseMove);
      window.removeEventListener('mouseup', onSvgMouseUp);
    };
  }, [editMode]);

  const visible = useMemo(() => new Set(filteredIds), [filteredIds]);

  function lotFill(lot) {
    if (colorMode === 'phase') return (M.PHASE_INFO[lot.phase] || {color:'#888'}).color;
    return (M.PLAN_INFO[lot.planName] || {color:'#888'}).color;
  }

  return (
    <div className="map-shell">
      <div
        className="map-frame"
        ref={frameRef}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onPointerLeave={(e) => { if (e.pointerType === 'mouse') onPointerEnd(e); }}
        onClickCapture={onClickCapture}
        style={{ cursor: drag ? 'grabbing' : (editMode ? 'crosshair' : 'grab') }}
      >
        <div
          className={classNames('map-stage', drag && 'no-anim')}
          ref={stageRef}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
          }}
        >
          <img src="assets/medley-site-map.png" alt="Tableau at Medley site plan" draggable="false"/>
          <svg
            ref={svgRef}
            viewBox="0 0 1071 773"
            preserveAspectRatio="xMidYMid meet"
            className="map-svg"
          >
            {filteredIds.length < lots.length && !editMode && (
              <defs>
                <mask id="lot-mask">
                  <rect width="1071" height="773" fill="white"/>
                  {lots.filter(l => !visible.has(l.n)).map(l => (
                    <circle key={l.n} cx={l.x*1071} cy={l.y*773} r="11" fill="black"/>
                  ))}
                </mask>
              </defs>
            )}
            {filteredIds.length < lots.length && !editMode && (
              <rect width="1071" height="773" fill="#FFFFFF" opacity="0.55"
                    style={{pointerEvents:'none'}} mask="url(#lot-mask)"/>
            )}

            {lots.map(lot => {
              const inFilter = visible.has(lot.n) || editMode;
              const isSel = selected && selected.n === lot.n;
              const isFav = favorites.has(lot.n);
              const cx = lot.x * 1071, cy = lot.y * 773;
              const fill = editMode && lot.unplaced && !lot.hasOverride
                ? '#888'
                : (lot.isModel ? '#D6552B' : lotFill(lot));

              return (
                <g key={lot.n}
                   className={classNames('lot-marker', !inFilter && 'dim', isSel && 'sel', lot.phase === 'Sold' && 'sold')}
                   onClick={(e) => { e.stopPropagation(); if (!editMode) onSelect(lot); }}
                   onMouseDown={(e) => onPinMouseDown(e, lot)}
                   style={{cursor: editMode ? 'grab' : 'pointer'}}
                >
                  {isSel && (
                    <circle cx={cx} cy={cy} r="13" fill="none"
                            stroke="var(--ink)" strokeWidth="2" className="sel-ring"/>
                  )}
                  <circle cx={cx} cy={cy} r={isSel ? 7.5 : (editMode ? 8 : 5.5)}
                          fill={fill}
                          stroke="#1B1F1A"
                          strokeWidth={isFav ? 2 : 1.4}
                          opacity={inFilter ? 1 : 0.18}/>
                  {isFav && (
                    <circle cx={cx} cy={cy} r={isSel ? 9.5 : 7.5} fill="none"
                            stroke="#D6552B" strokeWidth="1.8"/>
                  )}
                  {(editMode || showLabels) && inFilter && (
                    <text x={cx} y={cy + 2.4} textAnchor="middle"
                          fontSize={editMode ? "7" : "5.5"}
                          fontWeight="700" fill="#fff"
                          style={{pointerEvents:'none', fontFamily:'system-ui'}}>
                      {lot.n}
                    </text>
                  )}
                  <title>Lot {lot.n} · {lot.planName} · {lot.phase}</title>
                </g>
              );
            })}
            <g className="pavilion-pin" onClick={(e) => { e.stopPropagation(); if (!editMode && onOpenPavilion) onOpenPavilion(); }} style={{cursor:'pointer'}}>
              <path d="M291 362 c-6 -8 -10 -13 -10 -19 a10 10 0 1 1 20 0 c0 6 -4 11 -10 19z" fill="#003349" stroke="#FFFFFF" strokeWidth="1.6"/>
              <circle cx="291" cy="343" r="3.6" fill="#D9C756"/>
              <title>Tableau Pavilion · view renderings</title>
            </g>
          </svg>
        </div>
      </div>

      <div className="map-controls">
        <button onClick={() => setZoom(z => Math.min(5, z * 1.25))} title="Zoom in"><Icon.Plus/></button>
        <button onClick={() => setZoom(z => Math.max(1, z / 1.25))} title="Zoom out"><Icon.Minus/></button>
        <button onClick={resetView} title="Reset view"><Icon.Reset/></button>
      </div>

      <div className="map-compass" title="North">
        <div className="compass-needle"></div>
        <span>N</span>
      </div>
    </div>
  );
}

// ---------- Legend ----------
function Legend({ colorMode }) {
  const items = colorMode === 'phase'
    ? M.PHASES.map(p => ({ id: p, ...M.PHASE_INFO[p] }))
    : Object.values(M.PLAN_INFO);
  return (
    <div className="legend">
      <div className="legend-header">
        <h3>Legend</h3>
      </div>
      <ul className="legend-list">
        {items.map(it => (
          <li key={it.id || it.name}>
            <span className="sw" style={{background: it.color}}></span>
            <span>{it.name || it.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- Filters ----------
function Filters({
  lots, search, setSearch, phases, setPhases, programs, setPrograms,
  plans, setPlans, priceRange, setPriceRange, favoritesOnly, setFavoritesOnly,
  favoriteCount, resetAll, activePhases, activePrograms, onPrintFavorites,
  storyboards, setStoryboards, beds, setBeds, sqftRange, setSqftRange,
  landscapes, setLandscapes,
}) {
  const [min, max] = useMemo(() => {
    if (!lots.length) return [0, 0];
    const ps = lots.map(l => l.price);
    return [Math.min(...ps), Math.max(...ps)];
  }, [lots]);

  const [sqftMin, sqftMax] = useMemo(() => {
    if (!lots.length) return [0, 0];
    const ps = lots.map(l => l.sqft).filter(Boolean);
    return [Math.min(...ps), Math.max(...ps)];
  }, [lots]);

  const allStoryboards = useMemo(() => {
    // Always show the full EB1–EB10 range so users can pre-filter even before
    // lots are tagged with all collections.
    return Array.from({length: 10}, (_, i) => `EB${i + 1}`);
  }, []);

  const allBeds = useMemo(() => {
    const s = new Set();
    lots.forEach(l => l.beds && s.add(l.beds));
    return [...s].sort((a,b) => a - b);
  }, [lots]);

  const allLandscapes = useMemo(() => {
    const s = new Set();
    lots.forEach(l => l.landscaping && l.landscaping !== 'buyer' && s.add(l.landscaping));
    // Always include 1–3 (the three named packages we have visuals for) even
    // if not in current data, so filter shows them as options.
    [1, 2, 3].forEach(n => s.add(n));
    return [...s].sort((a,b) => a - b);
  }, [lots]);

  useEffect(() => {
    if (priceRange[0] === null && lots.length > 0 && isFinite(min)) {
      setPriceRange([min, max]);
    }
  }, [min, max, lots.length]);

  useEffect(() => {
    if (sqftRange[0] === null && lots.length > 0 && isFinite(sqftMin)) {
      setSqftRange([sqftMin, sqftMax]);
    }
  }, [sqftMin, sqftMax, lots.length]);

  function toggleSet(set, setter, value) {
    const next = new Set(set);
    next.has(value) ? next.delete(value) : next.add(value);
    setter(next);
  }

  return (
    <div className="filters">
      <div className="filter-group">
        <label className="filter-search">
          <span className="search-icon"><Icon.Search/></span>
          <input
            type="text"
            placeholder="Search lot #"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && <button className="clear" onClick={()=>setSearch('')}><Icon.X/></button>}
        </label>
      </div>

      <div className="filter-group">
        <h4>Sales Status</h4>
        {activePhases.map(p => (
          <label key={p} className="chk">
            <input type="checkbox" checked={phases.has(p)} onChange={()=>toggleSet(phases,setPhases,p)}/>
            <span className="dot" style={{background:M.PHASE_INFO[p]?.color || '#888'}}></span>
            <span>{p}</span>
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h4>Floor Plan</h4>
        {Object.values(M.PLAN_INFO).map(pl => (
          <label key={pl.id} className="chk">
            <input type="checkbox" checked={plans.has(pl.name)} onChange={()=>toggleSet(plans,setPlans,pl.name)}/>
            <span className="dot" style={{background:pl.color}}></span>
            <span>{pl.name}</span>
          </label>
        ))}
      </div>

      {allBeds.length > 0 && (
        <div className="filter-group">
          <h4>Bedrooms</h4>
          <div className="bed-pills">
            {allBeds.map(b => (
              <button
                key={b}
                type="button"
                className={classNames('bed-pill', beds.has(b) && 'on')}
                onClick={()=>toggleSet(beds,setBeds,b)}
              >
                {b} <span>BD</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="filter-group">
        <h4>Square Feet</h4>
        <div className="price-row">
          <span className="muted">Up to</span>
          <span>{(sqftRange[1] ?? sqftMax).toLocaleString()} sqft</span>
        </div>
        <input type="range" min={sqftMin} max={sqftMax} step="50"
               value={sqftRange[1] ?? sqftMax}
               onChange={e=>setSqftRange([sqftMin, +e.target.value])}/>
      </div>


      {allLandscapes.length > 0 && (
        <div className="filter-group">
          <h4>Landscape Package</h4>
          {allLandscapes.map(n => (
            <label key={n} className="chk">
              <input type="checkbox" checked={landscapes.has(n)} onChange={()=>toggleSet(landscapes,setLandscapes,n)}/>
              <span>#{n}{LANDSCAPE_PACKAGES[n] ? ' · ' + LANDSCAPE_PACKAGES[n].name : ''}</span>
            </label>
          ))}
        </div>
      )}

      <div className="filter-group">
        <label className="chk fav-toggle">
          <input type="checkbox" checked={favoritesOnly} onChange={e=>setFavoritesOnly(e.target.checked)}/>
          <span className="heart"><Icon.Heart filled={favoritesOnly}/></span>
          <span>Favorites only</span>
          {favoriteCount > 0 && <span className="muted">({favoriteCount})</span>}
        </label>
        {favoriteCount > 0 && (
          <button type="button" className="print-favs-btn" onClick={onPrintFavorites}>
            <Icon.Print/> Print Favorites ({favoriteCount})
          </button>
        )}
      </div>

      <button className="reset-btn" onClick={resetAll}><Icon.Reset/> Reset filters</button>
    </div>
  );
}

// ---------- Drawer ----------
function Drawer({ lot, onClose, favorites, toggleFavorite }) {
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(null);
  const [elevationOpen, setElevationOpen] = useState(false);
  if (!lot) return null;

  const plan  = M.PLAN_INFO[lot.planName] || {};
  const phase = M.PHASE_INFO[lot.phase] || { label: lot.phase, color: '#888' };
  const program = M.PROGRAM_INFO[lot.program] || { tagline: '', accent: '#888' };
  const ext = lot.exterior || {};
  const elevKey = lot.elevation && lot.elevation !== 'N/A' ? lot.elevation : 'A';
  const elev  = M.ELEVATION_STYLES[elevKey] || M.ELEVATION_STYLES.A;
  const isFav = favorites.has(lot.n);

  // Model homes (lots 10 & 35) render the full standard lot preview like every
  // other lot.

  return (
    <aside className="drawer" key={lot.n}>
      <header className="drawer-head">
        <div className="head-left">
          <div className="lot-tag" style={{background:plan.color}}>Lot {lot.n}</div>
          <div className="head-text">
            <div className="eyebrow">Tableau at Medley · Bldg {lot.building}</div>
            <h2>{plan.name} · Elevation {lot.elevation}</h2>
            {lot.address && <div className="drawer-address"><Icon.MapPin/> {lot.address}</div>}
          </div>
        </div>
        <div className="head-actions">
          <button className={classNames('fav-btn', isFav && 'on')}
                  onClick={()=>toggleFavorite(lot.n)}
                  title={isFav?'Remove from favorites':'Save to favorites'}>
            <Icon.Heart filled={isFav}/>
          </button>
          <button className="close-btn" onClick={onClose} title="Close"><Icon.X/></button>
        </div>
      </header>

      <div className="drawer-body">
        <div className="status-banner" style={{borderColor:phase.color}}>
          <div className="status-line">
            <span className="status-dot" style={{background:phase.color}}></span>
            <span className="status-label">{phase.label}</span>
          </div>
          <span className="status-meta">Construction Start #{lot.constructionStart}</span>
        </div>


        {/* Spec strip */}
        <section className="spec-strip">
          <div className="spec"><Icon.Bed/><div><span className="spec-num">{lot.beds}</span><span className="spec-label">Beds</span></div></div>
          <div className="spec"><Icon.Bath/><div><span className="spec-num">{lot.baths}</span><span className="spec-label">Baths</span></div></div>
          <div className="spec"><Icon.Sqft/><div><span className="spec-num">{lot.sqft ? Number(lot.sqft).toLocaleString() : '—'}</span><span className="spec-label">Sq Ft</span></div></div>
          <div className="spec"><Icon.Garage/><div><span className="spec-num">{lot.garage}</span><span className="spec-label">Garage</span></div></div>
        </section>

        {lot.phase === 'For Sale' && (
          <section className="card movein-card">
            <div className="eyebrow">Move-In Date</div>
            <h3>{lot.moveInDate || 'TBD'}</h3>
          </section>
        )}

        {/* Program */}
        <section className="card program-card">
          <div className="card-head">
            <div className="eyebrow">Design Program</div>
            <h3>{lot.program}</h3>
          </div>
          <p className="program-tag">{program.tagline}</p>
          <p className="program-desc">{program.description}</p>
          {lot.program === 'Embrace' && (lot.storyboardPdf || lot.storyboardPages) && (
            <button type="button" className="design-collection-btn" onClick={() => setCollectionOpen(true)}>
              View Design Collection
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12" aria-hidden="true"><path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>
            </button>
          )}
          <div className="prog-stripe" style={{background:program.accent}}></div>
        </section>

        {/* Elevation */}
        <section className="card">
          <div className="card-head">
            <h3>Elevation {lot.elevation}</h3>
          </div>
          {lot.elevationImage ? (
            <React.Fragment>
              <button
                type="button"
                className="floorplan-figure"
                onClick={() => setElevationOpen(true)}
                title={lot.elevationIsRendering ? `Expand ${lot.planName} rendering` : 'Expand front elevation'}
                aria-label={lot.elevationIsRendering ? `Expand ${lot.planName} artist's rendering` : `Expand Building ${lot.building} front elevation`}
              >
                <img src={lot.elevationImage} alt={lot.elevationIsRendering ? `${lot.planName} artist's rendering` : `Building ${lot.building} front elevation`} loading="lazy"/>
                <span className="floorplan-expand">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  <span>Expand</span>
                </span>
              </button>
              <div className="elev-strip">
                {M.ELEVATIONS.map(L => (
                  <span key={L} className={classNames('elev-chip', L === lot.elevation && 'on')}>{L}</span>
                ))}
              </div>
              <p className="hint">{lot.elevationIsRendering ? `Artist's rendering of the ${lot.planName} — representative only; final architectural elevation to follow.` : `Building ${lot.building} front elevation — Lot ${lot.n} is unit ${lot.elevation}.`}</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ElevationPlaceholder letter={lot.elevation} palette={elev.palette}/>
              <div className="elev-strip">
                {M.ELEVATIONS.map(L => (
                  <span key={L} className={classNames('elev-chip', L === lot.elevation && 'on')}>{L}</span>
                ))}
              </div>
              <p className="hint">Replace placeholder with renderings when available.</p>
            </React.Fragment>
          )}
        </section>

        {/* Color Scheme — full Empire exterior materials package */}
        <section className="card scheme-card">
          <div className="card-head">
            <div className="eyebrow">Exterior Color Package</div>
            <h3>{(ext.brick && ext.brick.name) || '—'}{ext.brick && ext.brick.image ? ' Brick' : ''}</h3>
          </div>

          {ext.brick && ext.brick.image ? (
            <div className="scheme-hero">
              <img src={ext.brick.image} alt={`${ext.brick.name} brick`} loading="lazy"/>
              <div className="scheme-hero-tag">
                <span className="muted">Brick</span>
                <strong>{ext.brick.name}</strong>
              </div>
            </div>
          ) : (
            <div className="scheme-hero" style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:120,background:'repeating-linear-gradient(45deg,#F2EFE6,#F2EFE6 8px,#EBE6D3 8px,#EBE6D3 16px)'}}>
              <div style={{textAlign:'center'}}>
                <strong style={{display:'block',color:'#3D423C'}}>{(ext.brick && ext.brick.name) || '—'}</strong>
                <span className="hint" style={{fontFamily:'ui-monospace,monospace'}}>brick graphic pending</span>
              </div>
            </div>
          )}

          <div className="paint-grid">
            <PaintBlock label="Siding &amp; Trim" color={ext.sidingTrim}/>
            <PaintBlock label="Front Door &amp; Garage Door" color={ext.frontDoor}/>
          </div>

          <div className="materials-grid">
            <div className="material-row">
              <div className="material-thumb"><img src={ext.roof.image} alt="Roof"/></div>
              <div className="material-meta"><span className="muted">Roof</span><strong>{ext.roof.name}</strong></div>
            </div>
            <div className="material-row">
              <div className="material-thumb"><img src={ext.gutters.image} alt="Gutters"/></div>
              <div className="material-meta"><span className="muted">Gutters &amp; Metal Roof</span><strong>{ext.gutters.name}</strong></div>
            </div>
            <div className="material-row">
              <div className="material-thumb mortar-thumb">
                <svg viewBox="0 0 36 36" width="100%" height="100%">
                  <rect width="36" height="36" fill="#F0EBDF"/>
                  <g fill="#C9B89A">
                    <rect x="2"  y="3"  width="12" height="6" rx="0.6"/>
                    <rect x="16" y="3"  width="18" height="6" rx="0.6"/>
                    <rect x="2"  y="11" width="20" height="6" rx="0.6"/>
                    <rect x="24" y="11" width="10" height="6" rx="0.6"/>
                    <rect x="2"  y="19" width="10" height="6" rx="0.6"/>
                    <rect x="14" y="19" width="20" height="6" rx="0.6"/>
                    <rect x="2"  y="27" width="22" height="6" rx="0.6"/>
                    <rect x="26" y="27" width="8"  height="6" rx="0.6"/>
                  </g>
                </svg>
              </div>
              <div className="material-meta"><span className="muted">Mortar</span><strong>{ext.mortar}</strong></div>
            </div>
          </div>

          <div className="lighting-block">
            <div className="paint-label muted">Exterior Lighting · {ext.lighting.description}</div>
            <div className="lighting-options">
              {ext.lighting.options.map(opt => (
                <div key={opt.name} className="lighting-option">
                  <div className="lighting-thumb"><img src={opt.image} alt={opt.name}/></div>
                  <strong>{opt.name}</strong>
                </div>
              ))}
            </div>
            <p className="hint" style={{margin:'4px 0 0'}}>{ext.lighting.note}</p>
          </div>
        </section>

        {/* Structural options */}
        <section className="card">
          <div className="card-head">
            <div className="eyebrow">Optional Structural Upgrades</div>
            <h3>{lot.options.length} selection{lot.options.length===1?'':'s'}</h3>
          </div>
          <ul className="options-list">
            {lot.options.map(o => (
              <li key={o}><span className="opt-check"><Icon.Check/></span><span>{o}</span></li>
            ))}
            {lot.options.length === 0 && <li className="muted">No structural options listed.</li>}
          </ul>
        </section>

        {/* Floor Plan — official architectural marketing sheet */}
        <section className="card">
          <div className="card-head">
            <div className="eyebrow">Floor Plan · {lot.planName}</div>
            <h3>Architectural Marketing Set</h3>
          </div>
          {lot.marketingPlans ? (
            <div className="marketing-plans">
              {lot.marketingPlans.map((mp, i) => (
                <button
                  key={mp.label}
                  type="button"
                  className="floorplan-figure marketing-plan-figure"
                  onClick={() => setMarketingOpen(i)}
                  title={`Expand ${mp.label} plan`}
                  aria-label={`Expand ${mp.label} marketing plan`}
                >
                  <img src={mp.src} alt={`Building ${lot.building} — ${mp.label} marketing plan`} loading="lazy"/>
                  <span className="floorplan-expand">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                    <span>Expand</span>
                  </span>
                  <span className="marketing-plan-caption">{mp.label}</span>
                </button>
              ))}
            </div>
          ) : plan.floorplan ? (
            <button
              type="button"
              className="floorplan-figure"
              onClick={() => setPlanOpen(true)}
              title="Expand floor plan"
              aria-label={`Expand ${lot.planName} floor plan`}
            >
              <img src={plan.floorplan} alt={`${lot.planName} floor plan`} loading="lazy"/>
              <span className="floorplan-expand">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
                <span>Expand</span>
              </span>
            </button>
          ) : (
            <React.Fragment>
              <div className={classNames('levels-grid', plan.levels && plan.levels.length === 3 && 'three')}>
                {(plan.levels || ['Main Level','Second Level']).map((lvl, i) => (
                  <FloorPlanPlaceholder key={lvl} label={lvl} variant={i} planColor={plan.color}/>
                ))}
              </div>
              <p className="hint">Official floor-plan rendering coming soon for this plan.</p>
            </React.Fragment>
          )}
        </section>

        {/* Landscape Package */}
        {lot.landscaping === 'buyer' ? (
        <section className="card">
          <div className="card-head">
            <div className="eyebrow">Landscape Package</div>
            <h3>Buyer Selection</h3>
          </div>
          <p className="program-desc" style={{marginTop:0}}>Choose your landscape package from the following options:</p>
          <div className="landscape-choices">
            {[1,2,3,4,5].map(k => (
              <div key={k} className="landscape-choice">
                <img src={LANDSCAPE_PACKAGES[k].image} alt={LANDSCAPE_PACKAGES[k].name} loading="lazy"/>
                <span>{LANDSCAPE_PACKAGES[k].name}</span>
              </div>
            ))}
          </div>
          <p className="hint">Preliminary renderings — final plant species and quantities will be provided in your homeowner package.</p>
        </section>
        ) : (
        <section className="card">
          <div className="card-head">
            <div className="eyebrow">Landscape Package #{lot.landscaping || '—'}</div>
            <h3>{LANDSCAPE_PACKAGES[lot.landscaping]?.name || `Package #${lot.landscaping || '—'}`}</h3>
          </div>
          <LandscapePlaceholder pkg={lot.landscaping || 1}/>
          {LANDSCAPE_PACKAGES[lot.landscaping]?.description && (
            <p className="program-desc" style={{marginTop:0}}>{LANDSCAPE_PACKAGES[lot.landscaping].description}</p>
          )}
          {lot.landscapeNote && <p className="program-desc" style={{marginTop:0}}><strong>{lot.landscapeNote}</strong></p>}
          <p className="hint">Preliminary rendering — final plant species and quantities will be provided in your homeowner package.</p>
        </section>
        )}

        {/* Print + Email */}
        <div className="cta-row">
          <button className="cta primary" onClick={() => printLotSheet(lot)}>
            <Icon.Print/> <span>Print Lot Sheet (PDF)</span>
          </button>
          <button
            className="cta secondary"
            onClick={() => emailLotSheet(lot)}
          >
            <Icon.Mail/> <span>Email Lot Sheet (PDF)</span>
          </button>
        </div>

        <footer className="drawer-foot">
          Prices, sizes, and specifications subject to change without notice. E. & O.E.
          Illustrations are artist's concept.
        </footer>
      </div>
      {collectionOpen && (
        <DesignCollectionModal lot={lot} onClose={() => setCollectionOpen(false)}/>
      )}
      {planOpen && plan.floorplan && (
        <FloorPlanModal lot={lot} src={plan.floorplan} onClose={() => setPlanOpen(false)}/>
      )}
      {marketingOpen !== null && lot.marketingPlans && lot.marketingPlans[marketingOpen] && (
        <FloorPlanModal
          lot={lot}
          src={lot.marketingPlans[marketingOpen].src}
          label={lot.marketingPlans[marketingOpen].label}
          onClose={() => setMarketingOpen(null)}
        />
      )}
      {elevationOpen && lot.elevationSheet && (
        <FloorPlanModal
          lot={lot}
          src={lot.elevationSheet}
          label={lot.elevationIsRendering ? lot.planName : `Front Elevation`}
          kind={lot.elevationIsRendering ? 'rendering' : 'elevation'}
          onClose={() => setElevationOpen(false)}
        />
      )}
    </aside>
  );
}

// ---------- Tableau Pavilion Modal ----------
function PavilionModal({ onClose }) {
  const [idx, setIdx] = useState(0);
  const n = PAVILION_IMAGES.length;
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % n);
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + n) % n);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const img = PAVILION_IMAGES[idx];
  return (
    <div className="tour-backdrop" onClick={onClose}>
      <div className="tour-modal pavilion-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Tableau Pavilion renderings">
        <header className="tour-head">
          <div>
            <div className="tour-eyebrow">Community Amenity</div>
            <h2>Tableau Pavilion</h2>
          </div>
          <button className="tour-close" onClick={onClose} aria-label="Close"><Icon.X/></button>
        </header>
        <div className="pavilion-stage">
          <img src={img.src} alt={img.caption}/>
          <button className="gnav pavilion-prev" onClick={() => setIdx((idx - 1 + n) % n)} aria-label="Previous"><Icon.ChevLeft/></button>
          <button className="gnav pavilion-next" onClick={() => setIdx((idx + 1) % n)} aria-label="Next"><Icon.ChevRight/></button>
        </div>
        <div className="pavilion-thumbs">
          {PAVILION_IMAGES.map((p, i) => (
            <button key={i} className={classNames('pavilion-thumb', i === idx && 'active')} onClick={() => setIdx(i)} aria-label={p.caption}>
              <img src={p.src} alt=""/>
            </button>
          ))}
        </div>
        <footer className="tour-foot">
          <span className="muted">{img.caption} · Artist's rendering</span>
          <span className="muted">{idx + 1} / {n}</span>
        </footer>
      </div>
    </div>
  );
}

// ---------- Buyer Journey Map Modal ----------
function BuyerJourneyModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const src = 'assets/buyer-journey-map.pdf';
  return (
    <div className="tour-backdrop" onClick={onClose}>
      <div className="tour-modal journey-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Buyer Journey Map">
        <header className="tour-head">
          <div>
            <div className="tour-eyebrow">Empire Homes</div>
            <h2>Buyer Journey Map</h2>
          </div>
          <button className="tour-close" onClick={onClose} aria-label="Close buyer journey map"><Icon.X/></button>
        </header>
        <div className="journey-frame-wrap">
          <iframe src={src + '#view=FitH&toolbar=0'} title="Buyer Journey Map"></iframe>
        </div>
        <footer className="tour-foot">
          <span className="muted">From contract to closing</span>
          <a className="amenity-link" href={src} target="_blank" rel="noopener">Open PDF →</a>
        </footer>
      </div>
    </div>
  );
}

// ---------- Floor Plan Modal ----------
function FloorPlanModal({ lot, src, label, kind, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const isRendering = kind === 'rendering';
  const eyebrow = isRendering ? `Artist's Rendering · Lot ${lot.n}`
    : label ? `Building ${lot.building} · ${label}` : `Floor Plan · Lot ${lot.n}`;
  const title = isRendering ? lot.planName : label ? `${label} Plan` : lot.planName;
  const alt = isRendering ? `${lot.planName} artist's rendering`
    : label ? `Building ${lot.building} ${label} plan` : `${lot.planName} floor plan`;
  const foot = isRendering ? `Artist's rendering of the ${lot.planName} — Tableau at Medley. Elevations, materials, and finishes may vary.`
    : label ? `Official Building ${lot.building} ${label.toLowerCase()} marketing plan — Tableau at Medley.`
    : `Official ${lot.planName} floor plan — Tableau at Medley.`;

  return (
    <div className="tour-backdrop" onClick={onClose}>
      <div className="tour-modal floorplan-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Floor plan for Lot ${lot.n}`}>
        <header className="tour-head">
          <div>
            <div className="tour-eyebrow">{eyebrow}</div>
            <h2>{title}</h2>
          </div>
          <button className="tour-close" onClick={onClose} aria-label="Close floor plan"><Icon.X/></button>
        </header>
        <div className="floorplan-frame-wrap">
          <img src={src} alt={alt}/>
        </div>
        <footer className="tour-foot">
          <span className="muted">{foot}</span>
          <a className="amenity-link" href={src} target="_blank" rel="noopener">Open full size →</a>
        </footer>
      </div>
    </div>
  );
}

// ---------- Design Collection Modal ----------
function DesignCollectionModal({ lot, onClose }) {
  const pages = lot.storyboardPages || null;
  const hasReal = !!(lot.storyboardPdf || pages);
  const src = lot.storyboardPdf || 'assets/design-collection-storyboard.pdf';
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="tour-backdrop" onClick={onClose}>
      <div className="tour-modal collection-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Design collection for Lot ${lot.n}`}>
        <header className="tour-head">
          <div>
            <div className="tour-eyebrow">Design Collection · {lot.program}</div>
            <h2>Storyboard · Lot {lot.n}</h2>
          </div>
          <button className="tour-close" onClick={onClose} aria-label="Close design collection"><Icon.X/></button>
        </header>
        {pages ? (
          <div className="collection-pages-wrap">
            {pages.map((p, i) => (
              <img key={i} src={p} alt={`Design Collection page ${i + 1}`} className="collection-page"/>
            ))}
          </div>
        ) : (
          <div className="collection-frame-wrap">
            <iframe
              src={src + '#view=FitH&toolbar=1'}
              title="Design Collection Storyboard"
              allowFullScreen
            />
          </div>
        )}
        <footer className="tour-foot">
          <span className="muted">{hasReal ? `Design Collection storyboard · Lot ${lot.n}` : 'Placeholder storyboard — swap with the program-specific design collection PDF when ready.'}</span>
          {pages
            ? <a className="amenity-link" href={pages[0]} target="_blank" rel="noopener">Open pages in new tab →</a>
            : <a className="amenity-link" href={src} target="_blank" rel="noopener">Open as standalone PDF →</a>}
        </footer>
      </div>
    </div>
  );
}

function ElevationPlaceholder({ letter, palette }) {
  return (
    <div className="elev-ph" style={{background: palette[0]}}>
      <svg viewBox="0 0 200 110" width="100%" height="100%">
        <rect width="200" height="110" fill={palette[0]}/>
        <polygon points="20,55 100,18 180,55" fill={palette[1]}/>
        <rect x="30" y="55" width="140" height="50" fill={palette[2]}/>
        <rect x="92" y="75" width="16" height="30" fill={palette[1]}/>
        <rect x="50" y="70" width="22" height="18" fill={palette[0]} stroke={palette[1]} strokeWidth="1"/>
        <rect x="128" y="70" width="22" height="18" fill={palette[0]} stroke={palette[1]} strokeWidth="1"/>
        <rect x="142" y="80" width="32" height="25" fill={palette[1]} opacity="0.6"/>
        <rect x="0" y="105" width="200" height="5" fill={palette[1]} opacity="0.3"/>
      </svg>
      <div className="elev-stamp">Elevation {letter}</div>
    </div>
  );
}

function SchemePlaceholder({ scheme }) {
  return (
    <div className="scheme-ph">
      <svg viewBox="0 0 200 110" width="100%" height="100%">
        <rect width="200" height="110" fill="#F2EFE6"/>
        <polygon points="20,55 100,18 180,55" fill={scheme.roofHex}/>
        <rect x="30" y="55" width="140" height="50" fill={scheme.sidingHex}/>
        <rect x="92" y="75" width="16" height="30" fill={scheme.accentHex}/>
        <rect x="50" y="70" width="22" height="18" fill="#F8F7EE" stroke={scheme.trimHex} strokeWidth="1.5"/>
        <rect x="128" y="70" width="22" height="18" fill="#F8F7EE" stroke={scheme.trimHex} strokeWidth="1.5"/>
        <rect x="30" y="55" width="140" height="3" fill={scheme.trimHex}/>
        <rect x="30" y="103" width="140" height="2" fill={scheme.trimHex}/>
      </svg>
      <div className="scheme-stamp">{scheme.name}</div>
    </div>
  );
}

function PaintBlock({ label, color }) {
  if (!color) return null;
  const swatch = color.hex
    ? { background: color.hex }
    : { background: 'repeating-linear-gradient(45deg,#EDE9DD,#EDE9DD 4px,#E2DCC8 4px,#E2DCC8 8px)' };
  return (
    <div className="paint-block">
      <div className="paint-swatch lg" style={swatch}></div>
      <div className="paint-info">
        <span className="paint-label">{label}</span>
        <strong className="paint-name">{color.name}</strong>
        <span className="paint-code muted">{color.code || (color.choice ? 'Selected at design studio' : '')}</span>
      </div>
    </div>
  );
}

// ---------- Landscape package metadata ----------
const LANDSCAPE_PACKAGES = {
  1: {
    name: 'Designer Turf',
    description: 'Faux grass framed by layered plantings for a clean, versatile, pet-friendly retreat.',
    image: 'assets/landscapes/landscape-1.png',
  },
  2: {
    name: 'Architectural Stone Pavers',
    description: 'Premium stone pavers with perimeter plantings for a refined, low-maintenance space ideal for entertaining.',
    image: 'assets/landscapes/landscape-2.png',
  },
  3: {
    name: 'Slate Stone Mulch',
    description: 'Slate stone mulch with layered plantings for a modern, low-upkeep landscape with rich texture and contrast.',
    image: 'assets/landscapes/landscape-3.png',
  },
  4: {
    name: 'Natural Lawn',
    description: 'A classic, fully sodded lawn for a timeless, open and versatile courtyard.',
    image: 'assets/landscapes/landscape-4.png',
  },
  5: {
    name: 'Natural Plantings',
    description: 'A lush, layered landscape of shrubs and greenery for a rich, natural, low-maintenance retreat.',
    image: 'assets/landscapes/landscape-5.png',
  },
};
// Expose so the print packet builder (print-packet.js) can read it
window.LANDSCAPE_PACKAGES = LANDSCAPE_PACKAGES;

// ---------- Floor plan & landscape placeholders ----------
function FloorPlanPlaceholder({ label, variant, planColor }) {
  // Three distinct schematic layouts so each level reads differently.
  // Walls = #2a2a26 on cream paper; openings = breaks in walls.
  const wall = '#2a2a26';
  const accent = planColor || '#003349';
  const layouts = [
    // Variant 0 — Main Level: open kitchen/living + dining + foyer + garage
    <g key="m">
      <rect x="6" y="6" width="188" height="98" fill="none" stroke={wall} strokeWidth="2"/>
      <path d={"M6 70 L70 70 M82 70 L130 70 M142 70 L194 70"} stroke={wall} strokeWidth="1.6"/>
      <path d={"M70 6 L70 70 M130 70 L130 104"} stroke={wall} strokeWidth="1.6"/>
      <path d={"M70 38 L194 38 M120 6 L120 38"} stroke={wall} strokeWidth="1.2"/>
      <text x="33" y="42" textAnchor="middle" fontSize="6.5" fill={wall} fontFamily="Inter">GARAGE</text>
      <text x="95" y="24" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">FOYER</text>
      <text x="156" y="24" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">DINING</text>
      <text x="33" y="92" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">FLEX</text>
      <text x="100" y="90" textAnchor="middle" fontSize="7" fill={accent} fontFamily="Inter" fontWeight="600">LIVING</text>
      <text x="162" y="92" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">KITCHEN</text>
      <circle cx="156" cy="86" r="3" fill="none" stroke={wall} strokeWidth=".8"/>
      <rect x="146" y="78" width="20" height="3" fill={wall} opacity=".35"/>
    </g>,
    // Variant 1 — Second Level: owner's suite + 3 beds + 2 baths + laundry
    <g key="s">
      <rect x="6" y="6" width="188" height="98" fill="none" stroke={wall} strokeWidth="2"/>
      <path d="M6 55 L100 55 M112 55 L194 55" stroke={wall} strokeWidth="1.6"/>
      <path d="M70 6 L70 55 M130 55 L130 104 M60 55 L60 104 M100 6 L100 55" stroke={wall} strokeWidth="1.6"/>
      <path d="M150 55 L150 80 M150 80 L194 80" stroke={wall} strokeWidth="1.2"/>
      <text x="38" y="32" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">BED 2</text>
      <text x="85" y="32" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">BATH</text>
      <text x="147" y="32" textAnchor="middle" fontSize="7" fill={accent} fontFamily="Inter" fontWeight="600">OWNER'S</text>
      <text x="33" y="84" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">BED 3</text>
      <text x="95" y="84" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">BED 4</text>
      <text x="170" y="72" textAnchor="middle" fontSize="5.5" fill={wall} fontFamily="Inter">BATH</text>
      <text x="170" y="94" textAnchor="middle" fontSize="5.5" fill={wall} fontFamily="Inter">LAUNDRY</text>
    </g>,
    // Variant 2 — Basement Level: rec room + media + storage
    <g key="b">
      <rect x="6" y="6" width="188" height="98" fill="none" stroke={wall} strokeWidth="2"/>
      <path d="M6 70 L70 70 M80 70 L194 70" stroke={wall} strokeWidth="1.6"/>
      <path d="M70 6 L70 70 M140 70 L140 104" stroke={wall} strokeWidth="1.6"/>
      <path d="M35 6 L35 70 M105 6 L105 70" stroke={wall} strokeWidth="1.2" opacity=".7"/>
      <text x="20" y="42" textAnchor="middle" fontSize="5.5" fill={wall} fontFamily="Inter">MECH</text>
      <text x="52" y="42" textAnchor="middle" fontSize="5.5" fill={wall} fontFamily="Inter">STOR</text>
      <text x="87" y="42" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">BED 5</text>
      <text x="147" y="42" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">BATH</text>
      <text x="40" y="90" textAnchor="middle" fontSize="7" fill={accent} fontFamily="Inter" fontWeight="600">REC ROOM</text>
      <text x="167" y="90" textAnchor="middle" fontSize="6" fill={wall} fontFamily="Inter">MEDIA</text>
    </g>,
  ];
  // For 3-level plans the array order is Basement, Main, Second — pick layout by label.
  const labelKey = label.toLowerCase();
  const idx = labelKey.includes('basement') ? 2 : labelKey.includes('second') || labelKey.includes('third') ? 1 : 0;
  return (
    <div className="floor-ph">
      <svg viewBox="0 0 200 110" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <rect width="200" height="110" fill="#FBF8EF"/>
        {layouts[idx]}
        <line x1="6" y1="108" x2="46" y2="108" stroke={accent} strokeWidth="1"/>
      </svg>
      <div className="floor-stamp">{label}</div>
    </div>
  );
}

function LandscapePlaceholder({ pkg }) {
  const real = LANDSCAPE_PACKAGES[pkg];
  if (real && real.image) {
    return (
      <div className="landscape-ph real">
        <img src={real.image} alt={real.name} loading="lazy"/>
        <div className="landscape-stamp">Package #{pkg}</div>
      </div>
    );
  }
  // Vary tree/shrub composition based on package number to differentiate.
  const seed = ((pkg || 1) * 9301 + 49297) % 233280;
  const rand = (i) => {
    const s = (seed + i * 1117) % 233280;
    return s / 233280;
  };
  const trees = [];
  const shrubs = [];
  const palette = ['#5C7A52', '#4F6E48', '#6E8A5C', '#3F5B3A'];
  for (let i = 0; i < 5; i++) {
    trees.push({
      cx: 18 + rand(i) * 164,
      cy: 28 + rand(i+10) * 18,
      r: 8 + rand(i+20) * 6,
      fill: palette[i % palette.length],
    });
  }
  for (let i = 0; i < 8; i++) {
    shrubs.push({
      cx: 14 + rand(i+50) * 172,
      cy: 78 + rand(i+60) * 8,
      r: 4 + rand(i+70) * 3,
      fill: palette[(i+1) % palette.length],
    });
  }
  return (
    <div className="landscape-ph">
      <svg viewBox="0 0 200 110" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        {/* lawn */}
        <rect width="200" height="110" fill="#E8E6D5"/>
        <rect x="0" y="55" width="200" height="55" fill="#D3DAB7"/>
        {/* house footprint */}
        <rect x="42" y="62" width="116" height="32" fill="#F1EBDD" stroke="#2a2a26" strokeWidth="1.2"/>
        <rect x="92" y="80" width="16" height="14" fill="#2a2a26" opacity=".6"/>
        {/* driveway */}
        <rect x="76" y="94" width="48" height="16" fill="#C6BBA4"/>
        {/* walkway */}
        <path d="M100 94 L100 110" stroke="#C6BBA4" strokeWidth="4"/>
        {/* trees */}
        {trees.map((t,i) => (
          <g key={'t'+i}>
            <circle cx={t.cx} cy={t.cy} r={t.r} fill={t.fill}/>
            <circle cx={t.cx-2} cy={t.cy-2} r={t.r*0.4} fill="#fff" opacity=".15"/>
          </g>
        ))}
        {/* shrubs along foundation */}
        {shrubs.map((s,i) => (
          <circle key={'s'+i} cx={s.cx} cy={s.cy} r={s.r} fill={s.fill}/>
        ))}
        {/* sidewalk */}
        <rect x="0" y="103" width="200" height="2" fill="#D9D2BD"/>
      </svg>
      <div className="landscape-stamp">Package #{pkg}</div>
    </div>
  );
}

// ---------- Virtual Tour Modal ----------
// Default video URL — Harleigh model walkthrough hosted on empirehomes.com.
// Per-lot override possible via lot.virtualTourUrl in the data layer.
const DEFAULT_TOUR_URL = 'https://empirehomes.com/wp-content/uploads/2025/05/03185412/Preserve-at-Lenox-Park-Harleigh-Model_NEW_LOGO-COMPRESS.mp4';

function VirtualTourModal({ lot, onClose }) {
  const videoRef = useRef(null);
  const src = lot.virtualTourUrl || DEFAULT_TOUR_URL;

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Autoplay once mounted (muted so browsers allow it; user can unmute).
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => { /* autoplay blocked — user clicks play */ });
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      if (v) v.pause();
    };
  }, [onClose]);

  return (
    <div className="tour-backdrop" onClick={onClose}>
      <div className="tour-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Virtual tour for Lot ${lot.n}`}>
        <header className="tour-head">
          <div>
            <div className="tour-eyebrow">Model Home Virtual Tour · Lot {lot.n}</div>
            <h2>{lot.planName}{lot.elevation && lot.elevation !== 'N/A' ? ` · Elevation ${lot.elevation}` : ''}</h2>
          </div>
          <button className="tour-close" onClick={onClose} aria-label="Close virtual tour"><Icon.X/></button>
        </header>
        <div className="tour-video-wrap">
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            preload="metadata"
            poster=""
          >
            Your browser does not support embedded video.
            <a href={src} target="_blank" rel="noopener">Open the tour in a new tab.</a>
          </video>
        </div>
        <footer className="tour-foot">
          <span className="muted">Tour shows the Harleigh model at our Preserve at Lenox Park community — representative of the floor plan offered at Tableau at Medley.</span>
          <a className="amenity-link" href={src} target="_blank" rel="noopener">Open in new tab →</a>
        </footer>
      </div>
    </div>
  );
}

const PAVILION_IMAGES = [
  { src: 'assets/pavilion/aerial.jpg', caption: 'Pool and pavilion from above' },
  { src: 'assets/pavilion/aerial-firepit.jpg', caption: 'Fire pit and outdoor dining' },
  { src: 'assets/pavilion/pool.jpg', caption: 'Resort-style pool with sun shelf' },
  { src: 'assets/pavilion/entrance.jpg', caption: 'Pavilion entrance' },
];
// ---------- Amenity / Lifestyle Modal ----------
const AMENITY_IMAGES = [
  ...PAVILION_IMAGES,
  { src: 'assets/lifestyle/shopping.jpg',     caption: 'Boutique shopping, steps from home' },
  { src: 'assets/lifestyle/bike-market.jpg',  caption: 'Fresh markets and easy errands' },
  { src: 'assets/lifestyle/cocktail.jpg',     caption: 'Craft cocktails and evenings out' },
  { src: 'assets/lifestyle/cafe-laptop.jpg',  caption: 'Work from your favorite cafe' },
  { src: 'assets/lifestyle/ice-cream.jpg',    caption: 'Sweet moments together' },
  { src: 'assets/lifestyle/dining-pizza.jpg', caption: 'Dining, from sandwiches to sushi' },
  { src: 'assets/lifestyle/barista.jpg',      caption: 'Local shops and friendly faces' },
  { src: 'assets/lifestyle/park-family.jpg',  caption: 'Green spaces to gather' },
  { src: 'assets/lifestyle/pug.jpg',          caption: 'Pet-friendly paths and parks' },
  { src: 'assets/lifestyle/dog.jpg',          caption: 'A community that loves its dogs' },
  { src: 'assets/lifestyle/wellness.jpg',     caption: 'Wellness and an active lifestyle' },
  { src: 'assets/lifestyle/boutique-hats.jpg', caption: 'Discover curated boutiques' },
];

function AmenityModal({ onClose }) {
  const scrollerRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    // Lock body scroll while open
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(280, el.clientWidth * 0.7);
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <div className="amenity-backdrop" onClick={onClose}>
      <div className="amenity-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="amenity-title">
        <button className="amenity-close" onClick={onClose} aria-label="Close amenities"><Icon.X/></button>

        <header className="amenity-head">
          <div className="amenity-eyebrow">Community Lifestyle · Tableau at Medley</div>
          <h2 id="amenity-title">A Perfectly Beautiful Balance</h2>
        </header>

        <div className="amenity-body">
          <p>
            A <em>tableau</em> is a scene with both beauty and meaning, and that is exactly what you will find in this new community. Nestled within Medley in John's Creek, Tableau is a townhome neighborhood thoughtfully curated to bring everyday living into balance, with a wide array of possibilities just steps from your welcome mat.
          </p>
          <p>
            Pop out your door and discover walkable streets, lush green spaces, and a central plaza that invites neighbors to mingle and stay awhile. Restaurants and new favorite neighborhood hangouts serve up everything from sandwiches to sushi, croissants to chimichurri. Plus, boutiques for the splurges and shops for the necessities make hopping in the car obsolete.
          </p>
          <p>
            Back at home, away from the bustle, you'll find your own modern retreat with open areas for entertaining, kitchens that brighten your days, and options for custom outdoor spaces. Floor plans balance spaces for gathering with room to escape. At Tableau, balance is more than a design — it's a way of life.
          </p>
        </div>

        <div className="amenity-gallery">
          <div className="amenity-gallery-head">
            <div className="amenity-gallery-label">Photo Gallery · {AMENITY_IMAGES.length} images</div>
            <div className="amenity-gallery-nav">
              <button className="gnav" onClick={() => scrollBy(-1)} aria-label="Previous"><Icon.ChevLeft/></button>
              <button className="gnav" onClick={() => scrollBy(1)} aria-label="Next"><Icon.ChevRight/></button>
            </div>
          </div>
          <div className="amenity-scroller" ref={scrollerRef}>
            {AMENITY_IMAGES.map((img, i) => (
              <figure className="amenity-tile" key={i}>
                <img src={img.src} alt={img.caption} loading="lazy" referrerPolicy="no-referrer"/>
              </figure>
            ))}
          </div>
        </div>

        <footer className="amenity-foot">
          <span className="muted">Tableau Pavilion images are artist's renderings. Lifestyle photography representative of the Medley community experience.</span>
          <a className="amenity-link" href="https://empirehomes.com/us/georgia/johns-creek/tableau-at-medley/" target="_blank" rel="noopener">Full community page →</a>
        </footer>
      </div>
    </div>
  );
}

// ---------- Stats bar ----------
function StatsBar({ lots, filtered, activePhases }) {
  const counts = useMemo(() => {
    const c = {};
    for (const p of activePhases) c[p] = 0;
    for (const l of filtered) if (c[l.phase] != null) c[l.phase]++;
    return c;
  }, [filtered, activePhases]);
  return (
    <div className="stats-bar">
      <div className="stat">
        <span className="stat-num">{filtered.length}</span>
        <span className="stat-label">{filtered.length === lots.length ? 'Total Homesites' : 'Matching Lots'}</span>
      </div>
      {activePhases.map(p => (
        <div className="stat" key={p}>
          <span className="stat-num">{counts[p] || 0}</span>
          <span className="stat-label">{p}</span>
        </div>
      ))}
    </div>
  );
}

// ---------- Top bar ----------
function TopBar({ editMode, onToggleEdit, onOpenAmenities, onOpenJourney, showEdit }) {
  return (
    <header className="top-bar">
      <div className="brand">
        <a href="https://empirehomes.com" target="_blank" rel="noopener" title="Empire Homes" className="brand-logo-link">
          <img src="assets/empire-homes-logo.png" alt="Empire Homes" className="brand-logo"/>
        </a>
      </div>
      <div className="community">
        <img src="assets/tableau-logo.png" alt="Tableau at Medley" className="community-logo"/>
      </div>
      <div className="top-actions">
        {showEdit && (
          <button className={classNames('ghost-link', editMode && 'active')} onClick={onToggleEdit} title="Unlock lot positions to drag dots into place">
            <Icon.Edit/> {editMode ? 'Lock & Save Positions' : 'Unlock Positions'}
          </button>
        )}
        <button className="ghost-link" onClick={onOpenJourney}>Buyer Journey Map</button>
        <a className="ghost-link" href="Floor Plans.html" target="_blank" rel="noopener">Floor Plans</a>
        <button className="ghost-link" onClick={onOpenAmenities}>Lifestyle</button>
        <a className="ghost-link" href="https://medleyjohnscreek.com/" target="_blank" rel="noopener">Medley</a>
        <a className="primary-link" href="https://empirehomes.com/us/georgia/johns-creek/tableau-at-medley/?utm_source=google&utm_medium=cpc&utm_campaign=tableau-at-medley-community-branded&utm_term=search&utm_content=in-state" target="_blank" rel="noopener">TABLEAU</a>
        <a className="map-icon-btn" href="https://www.google.com/maps/@34.0617282,-84.1653869,900m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" title="View site in Google Maps" aria-label="View site in Google Maps">
          <Icon.MapPin/>
        </a>
      </div>
    </header>
  );
}

// ---------- Countdown Banner ----------
// Editable announcement banner with a live countdown. To swap the announcement
// later, change EVENT_TITLE / EVENT_DESCRIPTION / EVENT_DATE (ISO format).
const ANNOUNCEMENT = /*ANNOUNCEMENT-BEGIN*/{
  title: 'Medley Grand Opening',
  dateLabel: 'October 29th',
  date: '2026-10-29T10:00:00',
  enabled: true,
}/*ANNOUNCEMENT-END*/;

function CountdownBanner({ announcement }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!announcement.enabled) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [announcement.enabled]);

  if (!announcement.enabled) return null;

  const target = new Date(announcement.date).getTime();
  const diff = Math.max(0, target - now);
  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins  = Math.floor((diff / (1000 * 60)) % 60);
  const isPast = diff <= 0;

  return (
    <div className="countdown-strip" role="status" aria-live="polite">
      <span className="cd-strip-title">GRAND OPENING CELEBRATION</span>
    </div>
  );
}

// ---------- Edit Positions bar ----------
function EditBar({ lots, onSave, onDownload, onReset, onExit }) {
  const unplaced = lots.filter(l => l.unplaced && !l.hasOverride).length;
  const placed = lots.length - unplaced;
  return (
    <div className="edit-bar">
      <div className="edit-info">
        <span className="edit-pill">Edit Mode</span>
        <span>{placed} placed · <strong>{unplaced} need placement</strong></span>
        <span className="muted">Drag any dot to fine-tune. Unplaced lots cluster on the right edge.</span>
      </div>
      <div className="edit-actions">
        <button className="ghost-link" onClick={onReset}>Reset to detected</button>
        <button className="ghost-link" onClick={onDownload}><Icon.Save/> Download JSON</button>
        <button className="primary-link" onClick={onSave}>Save &amp; Exit</button>
      </div>
    </div>
  );
}

// ---------- Print + Email helpers ----------
// Sets document.title so the browser's "Save as PDF" dialog pre-fills the
// filename. Pattern: "Tableau at Medley - Lot # Information Sheet - MM-DD-YYYY"
// (dashes instead of slashes — slashes get mangled by macOS/Windows filename rules).
function lotSheetFilename(lot) {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `Tableau at Medley - Lot ${lot.n} Information Sheet - ${mm}-${dd}-${yyyy}`;
}

function printLotSheet(lot) {
  const filename = lotSheetFilename(lot);
  if (typeof window.buildLotPacketHTML !== 'function') {
    console.error('buildLotPacketHTML not loaded; falling back to window.print');
    window.print();
    return;
  }
  // Base href so relative <img src> inside the packet (e.g. assets/...) resolves.
  const baseHref = window.location.href.replace(/[^/]*(?:\?.*)?(?:#.*)?$/, '');
  const html = window.buildLotPacketHTML(lot, filename, baseHref);
  printPacketHTML(html);
}

// Renders a full packet HTML document in a hidden iframe and triggers print
// once images have loaded. Shared by single-lot and favorites printing.
function printPacketHTML(html) {
  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:8.5in;height:11in;border:0;';
  document.body.appendChild(iframe);

  const doc = iframe.contentDocument;
  doc.open();
  doc.write(html);
  doc.close();

  const triggerPrint = () => {
    try {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch (e) {
      console.error('Print failed', e);
    }
    setTimeout(() => iframe.remove(), 2000);
  };

  // Wait for images to load so brick photos / elevations / landscape render
  // in the print preview.
  const imgs = doc.querySelectorAll('img');
  if (imgs.length === 0) {
    setTimeout(triggerPrint, 200);
    return;
  }
  let remaining = imgs.length;
  let triggered = false;
  const fire = () => { if (!triggered) { triggered = true; triggerPrint(); } };
  imgs.forEach(img => {
    if (img.complete) { if (--remaining <= 0) fire(); return; }
    img.addEventListener('load',  () => { if (--remaining <= 0) fire(); });
    img.addEventListener('error', () => { if (--remaining <= 0) fire(); });
  });
  // Safety floor — fire after 3s even if some assets stall
  setTimeout(fire, 3000);
}

// Builds a combined packet for all favorited lots and prints it.
function printFavoriteSheets(lots) {
  if (!lots || lots.length === 0) return;
  if (typeof window.buildFavoritesPacketHTML !== 'function') {
    console.error('buildFavoritesPacketHTML not loaded; falling back to window.print');
    window.print();
    return;
  }
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const filename = `Tableau at Medley - Favorite Lots - ${mm}-${dd}-${d.getFullYear()}`;
  const baseHref = window.location.href.replace(/[^/]*(?:\?.*)?(?:#.*)?$/, '');
  const html = window.buildFavoritesPacketHTML(lots, filename, baseHref);
  printPacketHTML(html);
}

function emailLotSheet(lot) {
  const subject = `Tableau at Medley Lot #${lot.n} Info Sheet`;
  const body = [
    'Thank you for your interest in Tableau at Medley.',
    '',
    `Attached, please find the information sheet for lot #${lot.n}.`,
    '',
  ].join('\r\n');
  const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // Open the default email client so it pulls the signed-in identity + signature.
  window.location.href = mailto;
  // Then trigger Print so the agent can Save as PDF (with the pre-named filename)
  // and drag the file into the open email.
  setTimeout(() => printLotSheet(lot), 400);
}

// ---------- Preferred Lender Card (reused in single + favorites print) ----------
function PreferredLenderCard({ className }) {
  return (
    <section className={classNames('lender-card', className)}>
      <div className="lender-head">
        <div className="lender-eyebrow">Preferred Lenders</div>
        <h3>Save up to <em>$5,000</em> when you finance with one of our preferred lenders.</h3>
      </div>
      <div className="lender-grid">
        <div className="lender-row">
          <div className="lender-bank">Ameris Bank Mortgage Services</div>
          <div className="lender-contacts">
            <div className="lender-contact">
              <strong>Ronda Crowe</strong>
              <span>T · 404-992-5626</span>
              <span>E · ronda.crowe@amerisbank.com</span>
            </div>
          </div>
        </div>
        <div className="lender-row">
          <div className="lender-bank">BankSouth Mortgage</div>
          <div className="lender-contacts">
            <div className="lender-contact">
              <strong>Brian Williams</strong>
              <span>T · 404-822-4155</span>
              <span>E · bwilliams@banksouth.com</span>
            </div>
            <div className="lender-contact">
              <strong>Shachi Bhardwaj</strong>
              <span>T · 678-595-7904</span>
              <span>E · sbhardwaj@banksouth.com</span>
            </div>
          </div>
        </div>
        <div className="lender-row">
          <div className="lender-bank">CMG Home Loans</div>
          <div className="lender-contacts">
            <div className="lender-contact">
              <strong>Kyler Smith</strong>
              <span>T · 706-252-1781</span>
              <span>E · kylers@cmghomeloans.com</span>
            </div>
          </div>
        </div>
      </div>
      <p className="lender-note">
        You may choose any lender you want; however, we have established relationships with CMG Home Loans, Ameris Bank Mortgage Services, and BankSouth Mortgage. They know how Empire Homes works and will help ensure your home loan is completed on time so you receive your keys without delay.
      </p>
    </section>
  );
}

// ---------- App ----------
// Collapsible color key for the phone page.
function KeyPanel({ colorMode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mo-key">
      {open && <div className="mo-key-panel"><Legend colorMode={colorMode}/></div>}
      <button className="mo-key-btn" onClick={() => setOpen(o => !o)}>{open ? 'Hide key' : 'Key'}</button>
    </div>
  );
}

function App() {
  const [lots, setLots] = useState([]);
  const [selected, setSelected] = useState(null);
  const [colorMode, setColorMode] = useState('phase');
  // Positions are finalized and locked (sourced from assets/lots.json).
  // The "Unlock Positions" button is hidden in presentation mode. To reveal it,
  // press Ctrl/Cmd + Shift + E, or open the page with ?edit in the URL.
  const [editMode, setEditMode] = useState(false);
  const [showEdit, setShowEdit] = useState(() => {
    try { return /[?&]edit\b/.test(window.location.search); } catch (e) { return false; }
  });

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
        e.preventDefault();
        setShowEdit(v => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);
  const [pavilionOpen, setPavilionOpen] = useState(false);

  const [search, setSearch] = useState('');
  const [phases, setPhases] = useState(new Set(M.PHASES));
  const [programs, setPrograms] = useState(new Set(M.PROGRAMS));
  const [plans, setPlans] = useState(new Set(Object.keys(M.PLAN_INFO)));
  const [priceRange, setPriceRange] = useState([null, null]);
  const [storyboards, setStoryboards] = useState(new Set());
  const [beds, setBeds] = useState(new Set());
  const [sqftRange, setSqftRange] = useState([null, null]);
  const [landscapes, setLandscapes] = useState(new Set());
  const [favorites, setFavorites] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('medley-favs') || '[]')); }
    catch (e) { return new Set(); }
  });
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  useEffect(() => {
    M.loadLots().then(setLots);
  }, []);

  useEffect(() => {
    localStorage.setItem('medley-favs', JSON.stringify([...favorites]));
  }, [favorites]);

  function toggleFavorite(n) {
    const next = new Set(favorites);
    next.has(n) ? next.delete(n) : next.add(n);
    setFavorites(next);
  }

  // Print Favorites: build a combined multi-lot packet (same polished layout as
  // the single-lot sheet) and print it via a hidden iframe.
  function handlePrintFavorites() {
    if (favorites.size === 0) return;
    const favLots = [...favorites]
      .map(n => lots.find(l => l.n === n))
      .filter(Boolean)
      .sort((a, b) => a.n - b.n);
    printFavoriteSheets(favLots);
  }

  // Active filter chips reflect what's actually in the data
  const activePhases = useMemo(() => {
    const have = new Set(lots.map(l => l.phase));
    return M.PHASES.filter(p => have.has(p));
  }, [lots]);
  const activePrograms = useMemo(() => {
    // Always show all three programs in the filter, even if no lots are
    // assigned to one yet.
    return M.PROGRAMS;
  }, []);

  const filtered = useMemo(() => {
    return lots.filter(l => {
      if (search && !String(l.n).includes(search.trim())) return false;
      if (!phases.has(l.phase)) return false;
      if (!programs.has(l.program)) return false;
      if (!plans.has(l.planName)) return false;
      if (priceRange[0] != null && l.price < priceRange[0]) return false;
      if (priceRange[1] != null && l.price > priceRange[1]) return false;
      if (storyboards.size > 0 && !storyboards.has(l.storyboard)) return false;
      if (beds.size > 0 && !beds.has(l.beds)) return false;
      if (sqftRange[0] != null && l.sqft && l.sqft < sqftRange[0]) return false;
      if (sqftRange[1] != null && l.sqft && l.sqft > sqftRange[1]) return false;
      if (landscapes.size > 0 && !landscapes.has(l.landscaping)) return false;
      if (favoritesOnly && !favorites.has(l.n)) return false;
      return true;
    });
  }, [lots, search, phases, programs, plans, priceRange, storyboards, beds, sqftRange, landscapes, favoritesOnly, favorites]);

  function resetAll() {
    setSearch('');
    setPhases(new Set(M.PHASES));
    setPrograms(new Set(M.PROGRAMS));
    setPlans(new Set(Object.keys(M.PLAN_INFO)));
    setPriceRange([null, null]);
    setStoryboards(new Set());
    setBeds(new Set());
    setSqftRange([null, null]);
    setLandscapes(new Set());
    setFavoritesOnly(false);
  }

  // Edit mode handlers
  function handleMovePin(n, sp) {
    setLots(ls => ls.map(l => l.n === n
      ? { ...l, x: sp.x, y: sp.y, hasOverride: true, unplaced: false }
      : l));
  }
  function handleSaveExit() {
    M.savePositions(lots);
    setEditMode(false);
  }
  function handleDownload() {
    M.downloadPositions(lots);
  }
  function handleResetPositions() {
    if (!confirm('Reset all lot positions to the auto-detected starting points? Your manual placements will be cleared.')) return;
    M.clearPositions();
    M.loadLots().then(setLots);
  }
  function handleToggleEdit() {
    if (editMode) {
      handleSaveExit();
    } else {
      setEditMode(true);
      setSelected(null);
    }
  }

  // Auto-persist in-progress edits (debounced) so a reload during an edit
  // session doesn't discard manual placements.
  useEffect(() => {
    if (!editMode) return;
    const id = setTimeout(() => { try { M.savePositions(lots); } catch (e) {} }, 400);
    return () => clearTimeout(id);
  }, [lots, editMode]);

  // Tweaks
  const [t, setTweak] = (window.useTweaks
    ? window.useTweaks(window.TWEAK_DEFAULTS)
    : [window.TWEAK_DEFAULTS, ()=>{}]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--map-bg', t.mapBg);
  }, [t.accent, t.mapBg]);

  const labelsVisible = t.labelMode === 'always';

  // Phone landing page (map.html): just the map, edge to edge. Tapping a lot opens its
  // details as a full-screen sheet.
  if (window.MAP_ONLY) {
    return (
      <div className="app map-only">
        <SitePlanMap
          lots={lots}
          filteredIds={lots.map(l => l.n)}
          selected={selected}
          onSelect={setSelected}
          colorMode={colorMode}
          showLabels={labelsVisible}
          onOpenPavilion={() => setPavilionOpen(true)}
          favorites={favorites}
          editMode={false}
          onMovePin={() => {}}
        />
        <a className="mo-title" href="./">Tableau at Medley</a>
        <KeyPanel colorMode={colorMode}/>
        {selected && (
          <Drawer
            lot={selected}
            onClose={() => setSelected(null)}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
        {pavilionOpen && <PavilionModal onClose={() => setPavilionOpen(false)}/>}
      </div>
    );
  }

  return (
    <div className={classNames('app', editMode && 'edit-mode')}>
      <TopBar editMode={editMode} onToggleEdit={handleToggleEdit} onOpenAmenities={() => setAmenitiesOpen(true)} onOpenJourney={() => setJourneyOpen(true)} showEdit={showEdit}/>
      <CountdownBanner announcement={ANNOUNCEMENT}/>

      {editMode && (
        <EditBar
          lots={lots}
          onSave={handleSaveExit}
          onDownload={handleDownload}
          onReset={handleResetPositions}
          onExit={() => setEditMode(false)}
        />
      )}

      <main className="layout">
        <aside className="sidebar">
          <Legend colorMode={colorMode}/>
          <Filters
            lots={lots}
            search={search} setSearch={setSearch}
            phases={phases} setPhases={setPhases}
            programs={programs} setPrograms={setPrograms}
            plans={plans} setPlans={setPlans}
            priceRange={priceRange} setPriceRange={setPriceRange}
            storyboards={storyboards} setStoryboards={setStoryboards}
            beds={beds} setBeds={setBeds}
            sqftRange={sqftRange} setSqftRange={setSqftRange}
            landscapes={landscapes} setLandscapes={setLandscapes}
            favoritesOnly={favoritesOnly} setFavoritesOnly={setFavoritesOnly}
            favoriteCount={favorites.size}
            resetAll={resetAll}
            onPrintFavorites={handlePrintFavorites}
            activePhases={activePhases}
            activePrograms={activePrograms}
          />
        </aside>

        <section className={classNames('map-section', selected && 'with-drawer')}>
          <StatsBar lots={lots} filtered={filtered} activePhases={activePhases}/>
          <SitePlanMap
            lots={lots}
            filteredIds={filtered.map(l => l.n)}
            selected={selected}
            onSelect={setSelected}
            colorMode={colorMode}
            showLabels={labelsVisible}
            onOpenPavilion={() => setPavilionOpen(true)}
            favorites={favorites}
            editMode={editMode}
            onMovePin={handleMovePin}
          />
        </section>

        {selected && !editMode && (
          <Drawer
            lot={selected}
            onClose={()=>setSelected(null)}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
      </main>

      {amenitiesOpen && (
        <AmenityModal onClose={() => setAmenitiesOpen(false)}/>
      )}
      {journeyOpen && (
        <BuyerJourneyModal onClose={() => setJourneyOpen(false)}/>
      )}
      {pavilionOpen && (
        <PavilionModal onClose={() => setPavilionOpen(false)}/>
      )}

      {/* Favorites print stack — always mounted but display:none on screen.
          When the user clicks "Print Favorites", `body.printing-favorites` is
          set and the print stylesheet reveals only this stack instead of the
          live drawer. */}
      <div className="fav-print-stack" aria-hidden="true">
        {[...favorites].map(n => lots.find(l => l.n === n)).filter(Boolean).map(lot => (
          <Drawer
            key={'fp-' + lot.n}
            lot={lot}
            onClose={() => {}}
            favorites={favorites}
            toggleFavorite={() => {}}
          />
        ))}
        {favorites.size > 0 && <PreferredLenderCard className="fav-print-lender"/>}
      </div>

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection label="Look & feel"/>
          <window.TweakColor label="Accent" value={t.accent}
            options={['#D6552B','#2F7A5C','#3D5A6C','#7C2A2A','#1B1F1A']}
            onChange={v => setTweak('accent', v)}/>
          <window.TweakColor label="Map background" value={t.mapBg}
            options={['#F8F7EE','#FFFFFF','#EDE9DD']}
            onChange={v => setTweak('mapBg', v)}/>
          <window.TweakSection label="Markers"/>
          <window.TweakRadio label="Lot numbers" value={t.labelMode}
            options={['hover','always']}
            onChange={v => setTweak('labelMode', v)}/>
        </window.TweaksPanel>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
