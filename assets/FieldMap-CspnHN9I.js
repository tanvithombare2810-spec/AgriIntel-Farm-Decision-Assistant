import { a as interop, n as getReact } from "./jsx-runtime-B-hcVAMW.js";
import { loadLeaflet, TILE_SAT, TILE_STREET, ATTR_SAT, ATTR_STREET } from "./leaflet-fQAXqZhn.js";
import { pinIcon } from "./Marker-CqPhLdbL.js";

const React = interop(getReact(), 1);
const h = React.createElement;
const STATUS_COLOR = { healthy: `#10b981`, moderate: `#f59e0b`, stressed: `#ef4444` };

function validPts(arr) {
  return Array.isArray(arr) && arr.length >= 3 &&
    arr.every(p => Array.isArray(p) && isFinite(p[0]) && isFinite(p[1]));
}

function FieldMap(props) {
  const { lat, lng, farmName, crop, fieldBoundary, healthZones, latestStatus, latestNdvi,
    healthyPct, moderatePct, stressedPct } = props;
  const box = React.useRef(null);
  const ref = React.useRef({});
  const [err, setErr] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  const [sat, setSat] = React.useState(true);

  // create map once
  React.useEffect(() => {
    let dead = false;
    loadLeaflet().then(L => {
      if (dead || !box.current) return;
      const c = [isFinite(lat) ? lat : 18.2333, isFinite(lng) ? lng : 76.7167];
      const map = L.map(box.current, { zoomControl: true, attributionControl: true }).setView(c, 17);
      ref.current = { L, map, layers: L.layerGroup().addTo(map) };
      setReady(true);
      setTimeout(() => map.invalidateSize(), 200);
    }).catch(e => !dead && setErr(e.message || `Map failed to load`));
    return () => {
      dead = true;
      try { ref.current.map && ref.current.map.remove(); } catch (e) {}
      ref.current = {};
    };
  }, []);

  // base tiles
  React.useEffect(() => {
    const r = ref.current;
    if (!ready || !r.map) return;
    if (r.tile) r.map.removeLayer(r.tile);
    r.tile = r.L.tileLayer(sat ? TILE_SAT : TILE_STREET, {
      maxZoom: sat ? 19 : 19, attribution: sat ? ATTR_SAT : ATTR_STREET
    }).addTo(r.map);
  }, [ready, sat]);

  // field overlays
  React.useEffect(() => {
    const r = ref.current;
    if (!ready || !r.map) return;
    const { L, map, layers } = r;
    layers.clearLayers();
    const centre = [isFinite(lat) ? lat : 18.2333, isFinite(lng) ? lng : 76.7167];
    let bounds = null;
    if (Array.isArray(healthZones)) {
      healthZones.forEach(z => {
        if (!z || !validPts(z.polygon)) return;
        const col = z.color || STATUS_COLOR[z.status] || `#10b981`;
        L.polygon(z.polygon, { color: col, weight: 1, fillColor: col, fillOpacity: 0.45 })
          .bindTooltip(`${z.label || z.status}${z.description ? ` - ${z.description}` : ``}`, { sticky: true })
          .addTo(layers);
      });
    }
    if (validPts(fieldBoundary)) {
      const b = L.polygon(fieldBoundary, { color: `#ffffff`, weight: 3, fill: false }).addTo(layers);
      bounds = b.getBounds();
    }
    L.marker(centre, { icon: pinIcon(L, STATUS_COLOR[latestStatus] || `#10b981`) })
      .bindPopup(`<b>${farmName || `My Field`}</b>${crop ? `<br/>${crop}` : ``}${isFinite(latestNdvi) ? `<br/>NDVI ${Number(latestNdvi).toFixed(2)}` : ``}`)
      .addTo(layers);
    if (bounds && bounds.isValid()) map.fitBounds(bounds, { padding: [24, 24], maxZoom: 18 });
    else map.setView(centre, 17);
  }, [ready, lat, lng, fieldBoundary, healthZones, latestStatus, latestNdvi, farmName, crop]);

  if (err) {
    return h(`div`, { className: `h-64 bg-muted/40 rounded-lg flex flex-col items-center justify-center p-4 text-center gap-2` },
      h(`span`, { className: `text-3xl` }, `🗺️`),
      h(`p`, { className: `text-xs text-muted-foreground` }, err),
      h(`button`, { className: `text-xs underline text-primary`, onClick: () => window.location.reload() }, `Reload`));
  }

  const btn = on => `text-[11px] font-semibold px-2 py-1 rounded-md border ${on ? `bg-primary text-primary-foreground border-primary` : `bg-card text-foreground border-border`}`;
  return h(`div`, null,
    h(`div`, { className: `flex items-center justify-between px-4 pt-3 pb-2` },
      h(`div`, null,
        h(`p`, { className: `text-sm font-semibold` }, farmName || `My Field`),
        h(`p`, { className: `text-xs text-muted-foreground capitalize` }, crop || ``)),
      h(`div`, { className: `flex gap-1` },
        h(`button`, { type: `button`, className: btn(sat), onClick: () => setSat(true) }, `Satellite`),
        h(`button`, { type: `button`, className: btn(!sat), onClick: () => setSat(false) }, `Map`))),
    h(`div`, { ref: box, className: `agri-map`, style: { height: 260 } }),
    h(`div`, { className: `flex flex-wrap gap-x-4 gap-y-1 px-4 py-2 text-[11px] text-muted-foreground` },
      h(`span`, null, `🟢 Healthy ${healthyPct ?? 0}%`),
      h(`span`, null, `🟡 Moderate ${moderatePct ?? 0}%`),
      h(`span`, null, `🔴 Stressed ${stressedPct ?? 0}%`)));
}
export { FieldMap as default };
