import { a as interop, n as getReact } from "./jsx-runtime-B-hcVAMW.js";
import { loadLeaflet, TILE_SAT, ATTR_SAT } from "./leaflet-fQAXqZhn.js";

const React = interop(getReact(), 1);
const h = React.createElement;

function ParcelPreviewMap({ positions }) {
  const box = React.useRef(null);
  const ref = React.useRef({});
  const [err, setErr] = React.useState(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let dead = false;
    loadLeaflet().then(L => {
      if (dead || !box.current) return;
      const map = L.map(box.current, { zoomControl: true }).setView([18.2333, 76.7167], 16);
      L.tileLayer(TILE_SAT, { maxZoom: 19, attribution: ATTR_SAT }).addTo(map);
      ref.current = { L, map, layer: L.layerGroup().addTo(map) };
      setReady(true);
      setTimeout(() => map.invalidateSize(), 200);
    }).catch(e => !dead && setErr(e.message || `Map failed to load`));
    return () => { dead = true; try { ref.current.map && ref.current.map.remove(); } catch (e) {} ref.current = {}; };
  }, []);

  React.useEffect(() => {
    const r = ref.current;
    if (!ready || !r.map) return;
    r.layer.clearLayers();
    const ok = Array.isArray(positions) && positions.length >= 3 &&
      positions.every(p => Array.isArray(p) && isFinite(p[0]) && isFinite(p[1]));
    if (!ok) return;
    const poly = r.L.polygon(positions, { color: `#10b981`, weight: 3, fillColor: `#10b981`, fillOpacity: 0.25 }).addTo(r.layer);
    r.map.fitBounds(poly.getBounds(), { padding: [20, 20], maxZoom: 18 });
  }, [ready, positions]);

  if (err) {
    return h(`div`, { className: `h-56 bg-muted/40 rounded-xl flex items-center justify-center p-4 text-center border border-border` },
      h(`p`, { className: `text-xs text-muted-foreground` }, err));
  }
  return h(`div`, { ref: box, className: `agri-map rounded-xl border border-border overflow-hidden`, style: { height: 224 } });
}
export { ParcelPreviewMap as default };
