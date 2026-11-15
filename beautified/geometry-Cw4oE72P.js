import {
  n as e
} from "./dynamic-C4CD9P0Z.js";

function t(e) {
  if (!e || e.length < 3) return 0;
  let t = 6378137,
    n = Math.PI / 180,
    r = 0;
  for (let t = 0; t < e.length; t++) {
    let i = e[t],
      a = e[(t + 1) % e.length];
    r += (a[1] - i[1]) * n * (2 + Math.sin(i[0] * n) + Math.sin(a[0] * n))
  }
  r = Math.abs(r * t * t / 2);
  let i = r / 1e4;
  return Math.max(.1, Math.round(i * 100) / 100)
}

function n(e, t) {
  let n = .0018,
    r = .0022,
    i = e - n / 2,
    a = e + n / 2,
    o = t - r / 2,
    s = t + r / 2;
  return {
    type: `Polygon`,
    coordinates: [
      [
        [o, i],
        [s, i],
        [s, a],
        [o, a],
        [o, i]
      ]
    ]
  }
}

function r(t) {
  if (t.length < 3) return n(e.lat, e.lng);
  let r = t.map(([e, t]) => [t, e]),
    i = r[0],
    a = r[r.length - 1];
  return (i[0] !== a[0] || i[1] !== a[1]) && r.push([i[0], i[1]]), {
    type: `Polygon`,
    coordinates: [r]
  }
}

function i(e) {
  return e?.coordinates?.[0] ? e.coordinates[0].map(([e, t]) => [t, e]) : []
}
export {
  r as i, n, i as r, t
};