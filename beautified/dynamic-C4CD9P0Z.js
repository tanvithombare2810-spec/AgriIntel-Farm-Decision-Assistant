import {
  a as e,
  n as t,
  t as n
} from "./jsx-runtime-B-hcVAMW.js";
var r = {
  lat: 18.2333,
  lng: 76.7167
};

function i(e, t) {
  let n = typeof e == `number` ? e : parseFloat(String(e)),
    i = typeof t == `number` ? t : parseFloat(String(t));
  return !isNaN(n) && !isNaN(i) && n >= -90 && n <= 90 && i >= -180 && i <= 180 ? {
    valid: !0,
    lat: n,
    lng: i
  } : {
    valid: !1,
    lat: r.lat,
    lng: r.lng
  }
}

function a(e) {
  if (!e || typeof e != `object`) return !1;
  let t = e;
  if (t.type !== `Polygon` || !Array.isArray(t.coordinates) || t.coordinates.length === 0) return !1;
  let n = t.coordinates[0];
  return !Array.isArray(n) || n.length < 3 ? !1 : n.every(e => Array.isArray(e) && e.length >= 2 && typeof e[0] == `number` && typeof e[1] == `number` && !isNaN(e[0]) && !isNaN(e[1]))
}

function o(e) {
  return e >= .6 ? `healthy` : e >= .4 ? `moderate` : `stressed`
}

function s(e) {
  if (!a(e)) return [];
  let t = e.coordinates[0];
  return t ? t.map(([e, t]) => [t, e]) : []
}

function c(e, t, n = 55, r = 35, i = 10) {
  let a = .0018,
    o = .0022,
    s = e - a / 2,
    c = e + a / 2,
    l = t - o / 2,
    u = t + o / 2,
    d = [
      [s, l],
      [s, u],
      [c, u],
      [c, l],
      [s, l]
    ],
    f = l + o * .35,
    p = s + a * .3,
    m = {
      status: `stressed`,
      label: `Stressed Zone (${i}%)`,
      color: `#ef4444`,
      areaPct: i,
      description: `Low vegetation vigor, inspect soil moisture or localized pests`,
      polygon: [
        [s, l],
        [s, f],
        [p, f],
        [p, l],
        [s, l]
      ]
    },
    h = l + o * .55,
    g = {
      status: `moderate`,
      label: `Moderate Zone (${r}%)`,
      color: `#f59e0b`,
      areaPct: r,
      description: `Adequate vegetative growth, moderate canopy cover`,
      polygon: [
        [p, l],
        [p, f],
        [s, f],
        [s, h],
        [c, h],
        [c, l],
        [p, l]
      ]
    };
  return {
    fieldBoundary: d,
    healthZones: [{
      status: `healthy`,
      label: `Healthy Zone (${n}%)`,
      color: `#10b981`,
      areaPct: n,
      description: `Dense, vigorous canopy with strong chlorophyll activity`,
      polygon: [
        [s, h],
        [s, u],
        [c, u],
        [c, h],
        [s, h]
      ]
    }, g, m]
  }
}

function l(e, t, n, r, l) {
  let u = i(n, r),
    d = (e.readings || []).map(e => ({
      farmId: e.farmId || t,
      observedAt: e.observedAt || new Date().toISOString(),
      ndvi: typeof e.ndvi == `number` ? e.ndvi : .62,
      healthStatus: e.healthStatus || o(e.ndvi),
      cloudCoverPct: typeof e.cloudCoverPct == `number` ? e.cloudCoverPct : 10,
      imageUrl: e.imageUrl,
      source: e.source || `demo`
    })),
    f = d[0],
    p = typeof e.latestNdvi == `number` ? e.latestNdvi : f?.ndvi ?? .62,
    m = e.latestStatus || o(p),
    h = typeof e.avgNdvi == `number` ? e.avgNdvi : d.length > 0 ? Number((d.reduce((e, t) => e + t.ndvi, 0) / d.length).toFixed(2)) : .65,
    g = e.fieldBoundary,
    _ = e.healthZones;
  if (l && a(l) && !(_ && _.length)) {
    g = s(l);
    let t = l.coordinates[0],
      n = t.map(e => e[1]),
      r = t.map(e => e[0]),
      i = Math.min(...n),
      a = Math.max(...n),
      o = Math.min(...r),
      c = Math.max(...r),
      u = a - i,
      d = c - o,
      f = o + d * .35,
      p = i + u * .3,
      m = o + d * .55,
      h = e.stressedPct ?? 10,
      v = e.moderatePct ?? 35,
      y = e.healthyPct ?? 55;
    _ = [{
      status: `stressed`,
      label: `Stressed Zone (${h}%)`,
      color: `#ef4444`,
      areaPct: h,
      description: `Low vegetation vigor, inspect soil moisture or localized pests`,
      polygon: [
        [i, o],
        [i, f],
        [p, f],
        [p, o],
        [i, o]
      ]
    }, {
      status: `moderate`,
      label: `Moderate Zone (${v}%)`,
      color: `#f59e0b`,
      areaPct: v,
      description: `Adequate vegetative growth, moderate canopy cover`,
      polygon: [
        [p, o],
        [p, f],
        [i, f],
        [i, m],
        [a, m],
        [a, o],
        [p, o]
      ]
    }, {
      status: `healthy`,
      label: `Healthy Zone (${y}%)`,
      color: `#10b981`,
      areaPct: y,
      description: `Dense, vigorous canopy with strong chlorophyll activity`,
      polygon: [
        [i, m],
        [i, c],
        [a, c],
        [a, m],
        [i, m]
      ]
    }]
  }
  return l && a(l) && !g && (g = s(l)), g ||= c(u.lat, u.lng).fieldBoundary, e.source && e.source !== `demo` ? _ = e.healthZones ?? [] : _ ||= [], {
    farmId: e.farmId || t,
    latestNdvi: p,
    avgNdvi: h,
    latestStatus: m,
    trend: e.trend || `stable`,
    readings: d,
    healthyPct: e.healthyPct ?? 55,
    moderatePct: e.moderatePct ?? 35,
    stressedPct: e.stressedPct ?? 10,
    lastObservedAt: e.lastObservedAt || new Date().toISOString(),
    fieldBoundary: g,
    healthZones: _,
    source: e.source || `demo`
  }
}
var u = e(t(), 1),
  d = n();

class __ChunkBoundary extends u.Component {
  constructor(p) { super(p); this.state = { err: null }; }
  static getDerivedStateFromError(err) { return { err }; }
  componentDidCatch(err) { console.error('[LazyChunk] failed to render:', err); }
  render() { return this.state.err ? this.props.fallback(this.state.err) : this.props.children; }
}

function f(e, t = {}) {
  let n = (0, u.lazy)(async () => {
    let t = await e();
    return {
      default: t.default ?? t
    }
  });
  return function(e) {
    let [r, i] = (0, u.useState)(!1);
    (0, u.useEffect)(() => i(!0), []);
    let a = t.loading ? t.loading() : null;
    return r ? (0, d.jsx)(__ChunkBoundary, {
      fallback: () => (0, d.jsxs)(`div`, {
        className: `h-64 bg-muted/40 rounded-lg flex flex-col items-center justify-center p-4 text-center gap-2`,
        children: [(0, d.jsx)(`span`, { className: `text-3xl`, children: `🗺️` }),
          (0, d.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: `The satellite map could not load. Your other farm data is still shown below.` }),
          (0, d.jsx)(`button`, { className: `text-xs underline text-primary`, onClick: () => window.location.reload(), children: `Reload` })]
      }),
      children: (0, d.jsx)(u.Suspense, {
        fallback: a,
        children: (0, d.jsx)(n, {
          ...e
        })
      })
    }) : (0, d.jsx)(d.Fragment, {
      children: a
    })
  }
}
export {
  a as i, r as n, l as r, f as t
};