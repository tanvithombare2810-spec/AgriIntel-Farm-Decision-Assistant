// Leaflet loader. Loads Leaflet 1.9.4 from a CDN once, then shares it.
const V = `1.9.4`;
const JS = [
  `https://cdnjs.cloudflare.com/ajax/libs/leaflet/${V}/leaflet.js`,
  `https://cdn.jsdelivr.net/npm/leaflet@${V}/dist/leaflet.js`
];
const CSS = `https://cdnjs.cloudflare.com/ajax/libs/leaflet/${V}/leaflet.css`;
let pending = null;

function ensureCss() {
  if (typeof document === `undefined`) return;
  if (document.querySelector(`link[data-leaflet-css]`)) return;
  const l = document.createElement(`link`);
  l.rel = `stylesheet`;
  l.href = CSS;
  l.setAttribute(`data-leaflet-css`, `1`);
  document.head.appendChild(l);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement(`script`);
    s.src = src;
    s.async = true;
    s.onload = () => (window.L && window.L.map ? resolve(window.L) : reject(new Error(`Leaflet did not initialise`)));
    s.onerror = () => reject(new Error(`Could not load ${src}`));
    document.head.appendChild(s);
  });
}

export function loadLeaflet() {
  if (typeof window === `undefined`) return Promise.reject(new Error(`Map needs a browser`));
  ensureCss();
  if (window.L && window.L.map) return Promise.resolve(window.L);
  if (pending) return pending;
  pending = (async () => {
    let lastErr;
    for (const src of JS) {
      try { return await loadScript(src); } catch (e) { lastErr = e; }
    }
    pending = null;
    throw new Error(`Map library could not be loaded. Check your internet connection. (${lastErr && lastErr.message})`);
  })();
  return pending;
}

export const TILE_SAT = `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`;
export const TILE_STREET = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;
export const ATTR_SAT = `Imagery &copy; Esri, Maxar, Earthstar Geographics`;
export const ATTR_STREET = `&copy; OpenStreetMap contributors`;
export default loadLeaflet;
