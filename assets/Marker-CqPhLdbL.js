// Marker helpers (CSS-only pins, so no image files are needed).
export function pinIcon(L, color = `#10b981`) {
  return L.divIcon({
    className: `agri-pin`,
    html: `<span style="background:${color}"></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 22]
  });
}
export function vertexIcon(L) {
  return L.divIcon({
    className: ``,
    html: `<div class="agri-vertex"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6]
  });
}
export default pinIcon;
