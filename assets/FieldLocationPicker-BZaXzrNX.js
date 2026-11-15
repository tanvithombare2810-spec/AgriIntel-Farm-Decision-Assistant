import { a as interop, n as getReact } from "./jsx-runtime-B-hcVAMW.js";
import { loadLeaflet, TILE_SAT, ATTR_SAT } from "./leaflet-fQAXqZhn.js";
import { pinIcon, vertexIcon } from "./Marker-CqPhLdbL.js";
import { i as toPolygon, n as boxAt, r as toPositions, t as areaHa } from "./geometry-Cw4oE72P.js";

const React = interop(getReact(), 1);
const h = React.createElement;

const DISTRICTS = {
  latur: [18.4088, 76.5604], pune: [18.5204, 73.8567], solapur: [17.6599, 75.9064],
  nashik: [19.9975, 73.7898], nagpur: [21.1458, 79.0882], aurangabad: [19.8762, 75.3433],
  kolhapur: [16.705, 74.2433], satara: [17.6805, 74.0183], sangli: [16.8524, 74.5815],
  ahmednagar: [19.0948, 74.748], jalgaon: [21.0077, 75.5626], amravati: [20.9374, 77.7796],
  akola: [20.7096, 77.0082], yavatmal: [20.3888, 78.1204], nanded: [19.1383, 77.321],
  osmanabad: [18.1861, 76.0419], beed: [18.9891, 75.7601], parbhani: [19.2704, 76.7747],
  jalna: [19.8347, 75.8816], buldhana: [20.5293, 76.1842], wardha: [20.7453, 78.6022]
};

function FieldLocationPicker({ initialLat, initialLng, initialPolygon, district, onLocationChange }) {
  const box = React.useRef(null);
  const ref = React.useRef({});
  const cb = React.useRef(onLocationChange);
  cb.current = onLocationChange;
  const [pts, setPts] = React.useState(() => {
    const p = initialPolygon && initialPolygon.coordinates ? toPositions(initialPolygon) : [];
    return p.length > 1 ? p.slice(0, -1) : []; // drop closing point
  });
  const [err, setErr] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  const ptsRef = React.useRef(pts);
  ptsRef.current = pts;

  function emit(list) {
    if (!cb.current) return;
    if (list.length >= 3) {
      const lat = list.reduce((s, p) => s + p[0], 0) / list.length;
      const lng = list.reduce((s, p) => s + p[1], 0) / list.length;
      cb.current({ lat, lng, polygon: toPolygon(list), areaHectares: areaHa(list) });
    } else if (list.length >= 1) {
      const poly = boxAt(list[0][0], list[0][1]);
      cb.current({ lat: list[0][0], lng: list[0][1], polygon: poly, areaHectares: 0 });
    }
  }
  function setList(list) { setPts(list); emit(list); }

  React.useEffect(() => {
    let dead = false;
    loadLeaflet().then(L => {
      if (dead || !box.current) return;
      const start = [isFinite(initialLat) ? Number(initialLat) : 18.2333, isFinite(initialLng) ? Number(initialLng) : 76.7167];
      const map = L.map(box.current, { zoomControl: true }).setView(start, 17);
      L.tileLayer(TILE_SAT, { maxZoom: 19, attribution: ATTR_SAT }).addTo(map);
      ref.current = { L, map, layer: L.layerGroup().addTo(map) };
      map.on(`click`, e => setList([...ptsRef.current, [e.latlng.lat, e.latlng.lng]]));
      setReady(true);
      setTimeout(() => map.invalidateSize(), 200);
    }).catch(e => !dead && setErr(e.message || `Map failed to load`));
    return () => { dead = true; try { ref.current.map && ref.current.map.remove(); } catch (e) {} ref.current = {}; };
  }, []);

  // draw current points
  React.useEffect(() => {
    const r = ref.current;
    if (!ready || !r.map) return;
    const { L, layer } = r;
    layer.clearLayers();
    if (pts.length >= 3) L.polygon(pts, { color: `#10b981`, weight: 3, fillColor: `#10b981`, fillOpacity: 0.3 }).addTo(layer);
    else if (pts.length === 2) L.polyline(pts, { color: `#10b981`, weight: 3 }).addTo(layer);
    pts.forEach((p, i) => {
      L.marker(p, { icon: i === 0 && pts.length < 3 ? pinIcon(L) : vertexIcon(L), draggable: true })
        .on(`dragend`, e => {
          const ll = e.target.getLatLng();
          const next = ptsRef.current.slice(); next[i] = [ll.lat, ll.lng]; setList(next);
        }).addTo(layer);
    });
  }, [ready, pts]);

  // jump to district
  React.useEffect(() => {
    const r = ref.current;
    if (!ready || !r.map || !district) return;
    const c = DISTRICTS[String(district).toLowerCase().trim()];
    if (c && ptsRef.current.length < 3) r.map.setView(c, 13);
  }, [ready, district]);

  function useMyLocation() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(pos => {
      const r = ref.current;
      if (r.map) r.map.setView([pos.coords.latitude, pos.coords.longitude], 18);
    }, () => {}, { enableHighAccuracy: true, timeout: 10000 });
  }

  if (err) {
    return h(`div`, { className: `h-64 bg-muted/40 rounded-xl flex flex-col items-center justify-center p-4 text-center gap-2 border border-border` },
      h(`span`, { className: `text-3xl` }, `🗺️`),
      h(`p`, { className: `text-xs text-muted-foreground` }, err),
      h(`button`, { className: `text-xs underline text-primary`, onClick: () => window.location.reload() }, `Reload`));
  }
  const b = `text-xs font-semibold px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted`;
  const area = pts.length >= 3 ? areaHa(pts) : 0;
  return h(`div`, { className: `space-y-2` },
    h(`p`, { className: `text-xs text-muted-foreground` }, `Tap the corners of your field on the satellite map. Drag a point to adjust it.`),
    h(`div`, { ref: box, className: `agri-map rounded-xl border border-border overflow-hidden`, style: { height: 300 } }),
    h(`div`, { className: `flex flex-wrap items-center gap-2` },
      h(`button`, { type: `button`, className: b, onClick: () => setList(pts.slice(0, -1)), disabled: !pts.length }, `↩ Undo`),
      h(`button`, { type: `button`, className: b, onClick: () => setList([]), disabled: !pts.length }, `Clear`),
      h(`button`, { type: `button`, className: b, onClick: useMyLocation }, `📍 My location`),
      h(`span`, { className: `text-xs text-muted-foreground ml-auto` },
        pts.length >= 3 ? `${pts.length} corners · ${area} ha` : `${pts.length} corner${pts.length === 1 ? `` : `s`} (need 3+)`)));
}
export { FieldLocationPicker as default };
