const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/FieldMap-CspnHN9I.js", "assets/jsx-runtime-B-hcVAMW.js", "assets/leaflet-fQAXqZhn.js", "assets/index-BOVbX_32.js", "assets/leaflet-vh-t_kPv.css", "assets/Marker-CqPhLdbL.js"]))) => i.map(i => d[i]);
import {
  a as e,
  n as t,
  t as n
} from "./jsx-runtime-B-hcVAMW.js";
import {
  o as r,
  t as i
} from "./index-BOVbX_32.js";
import {
  r as a,
  r as __normSat,
  t as o
} from "./dynamic-C4CD9P0Z.js";
import {
  i as s,
  o as c,
  r as l,
  s as u
} from "./farm-storage-BBPkHbBE.js";
import {
  t as d
} from "./link-CPEWifot.js";
import {
  a as f,
  i as p,
  n as m,
  r as h,
  t as g
} from "./card-BDHQYkqg.js";
import {
  i as _,
  n as v,
  o as y,
  t as b
} from "./format-C70v0cF0.js";
import {
  a as x,
  n as S,
  t as C
} from "./dist-ml1Uni3P.js";

function w(e) {
  return S(e.defaultTagName ?? `div`, e, e)
}
var T = e(t(), 1),
  E = C(`group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!`, {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground [a]:hover:bg-primary/80`,
        secondary: `bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80`,
        destructive: `bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20`,
        outline: `border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground`,
        ghost: `hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50`,
        link: `text-primary underline-offset-4 hover:underline`
      }
    },
    defaultVariants: {
      variant: `default`
    }
  });

function D({
  className: e,
  variant: t = `default`,
  render: n,
  ...r
}) {
  return w({
    defaultTagName: `span`,
    props: x({
      className: f(E({
        variant: t
      }), e)
    }, r),
    render: n,
    state: {
      slot: `badge`,
      variant: t
    }
  })
}
var O = {
    farmId: `demo-soybean-maharashtra`,
    latestNdvi: .62,
    latestStatus: `moderate`,
    trend: `stable`,
    healthyPct: 55,
    moderatePct: 35,
    stressedPct: 10,
    lastObservedAt: `2024-09-28T10:30:00+05:30`,
    source: `demo`,
    readings: [{
      farmId: `demo-soybean-maharashtra`,
      observedAt: `2024-09-28T10:30:00+05:30`,
      ndvi: .62,
      healthStatus: `moderate`,
      cloudCoverPct: 15,
      source: `demo`
    }, {
      farmId: `demo-soybean-maharashtra`,
      observedAt: `2024-09-14T10:15:00+05:30`,
      ndvi: .68,
      healthStatus: `moderate`,
      cloudCoverPct: 10,
      source: `demo`
    }, {
      farmId: `demo-soybean-maharashtra`,
      observedAt: `2024-08-31T10:00:00+05:30`,
      ndvi: .71,
      healthStatus: `healthy`,
      cloudCoverPct: 20,
      source: `demo`
    }, {
      farmId: `demo-soybean-maharashtra`,
      observedAt: `2024-08-17T10:20:00+05:30`,
      ndvi: .75,
      healthStatus: `healthy`,
      cloudCoverPct: 8,
      source: `demo`
    }, {
      farmId: `demo-soybean-maharashtra`,
      observedAt: `2024-08-03T10:10:00+05:30`,
      ndvi: .78,
      healthStatus: `healthy`,
      cloudCoverPct: 5,
      source: `demo`
    }, {
      farmId: `demo-soybean-maharashtra`,
      observedAt: `2024-07-20T09:55:00+05:30`,
      ndvi: .52,
      healthStatus: `moderate`,
      cloudCoverPct: 30,
      source: `demo`
    }, {
      farmId: `demo-soybean-maharashtra`,
      observedAt: `2024-07-06T10:05:00+05:30`,
      ndvi: .35,
      healthStatus: `moderate`,
      cloudCoverPct: 25,
      source: `demo`
    }, {
      farmId: `demo-soybean-maharashtra`,
      observedAt: `2024-06-22T09:45:00+05:30`,
      ndvi: .18,
      healthStatus: `stressed`,
      cloudCoverPct: 40,
      source: `demo`
    }]
  },
  k = n(),
  A = o(() => i(() => import(`./FieldMap-CspnHN9I.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5])), {
    ssr: !1,
    loading: () => (0, k.jsxs)(`div`, {
      className: `h-64 bg-muted/40 rounded-lg flex flex-col items-center justify-center p-4 text-center animate-pulse`,
      children: [(0, k.jsx)(`span`, {
        className: `text-3xl mb-1`,
        children: `🗺️`
      }), (0, k.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: `Loading interactive field map...`
      })]
    })
  });

function j({
  code: e
}) {
  return (0, k.jsx)(`span`, {
    children: {
      sunny: `☀️`,
      partly_cloudy: `⛅`,
      cloudy: `☁️`,
      drizzle: `🌦️`,
      rain: `🌧️`,
      heavy_rain: `⛈️`,
      thunderstorm: `⛈️`,
      fog: `🌫️`,
      heatwave: `🌡️`
    } [e] ?? `🌤️`
  })
}

function M({
  healthy: e,
  moderate: t,
  stressed: n
}) {
  return (0, k.jsxs)(`div`, {
    className: `flex h-3 w-full rounded-full overflow-hidden gap-0.5`,
    children: [(0, k.jsx)(`div`, {
      className: `bg-emerald-500 h-full rounded-l-full transition-all`,
      style: {
        width: `${e}%`
      },
      title: `${e}% healthy`
    }), (0, k.jsx)(`div`, {
      className: `bg-amber-400 h-full transition-all`,
      style: {
        width: `${t}%`
      },
      title: `${t}% moderate`
    }), (0, k.jsx)(`div`, {
      className: `bg-red-500 h-full rounded-r-full transition-all`,
      style: {
        width: `${n}%`
      },
      title: `${n}% stressed`
    })]
  })
}

function N({
  readings: e
}) {
  let t = [...(e || [])].sort((e, t) => String(e.observedAt || ``).localeCompare(String(t.observedAt || ``))),
    n = Math.max(...t.map(e => e.ndvi));
  return (0, k.jsx)(`div`, {
    className: `flex items-end gap-1 h-12`,
    children: t.map((e, t) => {
      let r = n > 0 ? e.ndvi / n * 100 : 50,
        i = e.healthStatus === `healthy` ? `bg-emerald-500` : e.healthStatus === `moderate` ? `bg-amber-400` : `bg-red-400`;
      return (0, k.jsx)(`div`, {
        className: `flex-1 flex flex-col justify-end`,
        children: (0, k.jsx)(`div`, {
          className: `${i} rounded-t-sm opacity-90 transition-all`,
          style: {
            height: `${r}%`
          },
          title: `NDVI ${e.ndvi} on ${e.observedAt.split(`T`)[0]}`
        })
      }, t)
    })
  })
}

function P(e) {
  try {
    return new Date(e).toLocaleDateString(`en-IN`, {
      weekday: `short`
    })
  } catch {
    return e
  }
}

function F() {
  let {
    t: e,
    locale: t
  } = r(), [n] = (0, T.useState)(() => typeof window < `u` ? s() : {
    id: u.farm.id,
    crop: u.season.crop,
    commodity: u.season.crop,
    state: u.farm.state,
    district: u.farm.district,
    village: u.farm.village,
    areaHectares: u.farm.areaHectares,
    sowingDate: u.season.sowingDate,
    season: `Kharif ${new Date().getFullYear()}`,
    lat: u.farm.lat,
    lng: u.farm.lng,
    nearestMandi: `Latur`,
    inputCostPerHa: u.season.inputCostPerHa,
    inputCostTotal: Math.round(u.farm.areaHectares * u.season.inputCostPerHa),
    expectedYieldQPerHa: c.expectedYieldQPerHa,
    totalHarvestQ: c.totalHarvestQ,
    isCustomFarm: !1,
    fieldGeoJson: u.farm.fieldGeoJson
  }), [i, o] = (0, T.useState)({
    ...c,
    explanation: []
  }), [f, x] = (0, T.useState)(!1), [S, C] = (0, T.useState)(null), [w, E] = (0, T.useState)(!1), [F, I] = (0, T.useState)(null), [L, R] = (0, T.useState)(() => a({
    farmId: n.id,
    latestNdvi: O.latestNdvi,
    latestStatus: O.latestStatus,
    trend: O.trend,
    readings: O.readings,
    healthyPct: O.healthyPct,
    moderatePct: O.moderatePct,
    stressedPct: O.stressedPct,
    lastObservedAt: O.lastObservedAt,
    source: `demo`
  }, n.id, n.lat, n.lng, n.fieldGeoJson)), [z, B] = (0, T.useState)(null), [V, H] = (0, T.useState)(!0);
  (0, T.useEffect)(() => {
    let e = !0;
    async function t() {
      let t = s(),
        n = t.lat ?? 18.2333,
        r = t.lng ?? 76.7167,
        i = t.id || `demo-soybean-maharashtra`;
      try {
        let a = `/api/satellite?lat=${n}&lng=${r}&farmId=${encodeURIComponent(i)}`;
        t.fieldGeoJson && (a += `&polygon=${encodeURIComponent(JSON.stringify(t.fieldGeoJson))}`);
        let o = await fetch(a),
          s = await o.json().catch(() => ({}));
        if (!o.ok || !s?.data) throw Error(s?.error || `Satellite fetch failed: ${o.status}`);
        e && (R(__normSat(s.data, i, n, r, t.fieldGeoJson)), E(!0))
      } catch (t) {
        e && I(t instanceof Error ? t.message : `Satellite unavailable`)
      }
      try {
        let t = await fetch(`/api/weather?lat=${n}&lng=${r}&action=forecast&days=7`);
        if (!t.ok) throw Error(`Weather fetch failed: ${t.status}`);
        let i = await t.json();
        e && i?.data && B(i.data)
      } catch (e) {
        console.warn(`[FarmPage] Live weather fetch failed:`, e)
      } finally {
        e && H(!1)
      }
      try {
        let n = {
            farmSeasonId: t.id,
            crop: t.crop,
            commodity: t.commodity,
            area: t.areaHectares,
            areaHectares: t.areaHectares,
            sowingDate: t.sowingDate,
            district: t.district,
            state: t.state,
            lat: t.lat,
            lng: t.lng,
            soilType: t.soilType,
            irrigationType: t.irrigationType,
            totalHarvestQ: t.totalHarvestQ
          },
          r = await fetch(`/api/recommendations`, {
            method: `POST`,
            headers: {
              "Content-Type": `application/json`
            },
            body: JSON.stringify(n)
          }),
          i = await r.json().catch(() => ({}));
        if (!r.ok) throw Error(i?.error || `HTTP ${r.status}`);
        e && i?.farmContext && (x(!0), o(e => ({
          ...e,
          expectedYieldQPerHa: i.farmContext.expectedYieldQPerHa ?? t.expectedYieldQPerHa,
          totalHarvestQ: i.farmContext.totalHarvestQ ?? t.totalHarvestQ,
          confidenceLow: i.farmContext.confidenceLow ?? Math.round((i.farmContext.expectedYieldQPerHa ?? t.expectedYieldQPerHa) * .85 * 10) / 10,
          confidenceHigh: i.farmContext.confidenceHigh ?? Math.round((i.farmContext.expectedYieldQPerHa ?? t.expectedYieldQPerHa) * 1.15 * 10) / 10,
          source: i.farmContext.yieldSource ?? `ml`,
          modelVersion: i.farmContext.modelVersion ?? e.modelVersion,
          explanation: i.data?.yieldExplanation ?? e.explanation
        })))
      } catch (t) {
        e && C(t instanceof Error ? t.message : `Prediction unavailable`)
      }
    }
    return t(), () => {
      e = !1
    }
  }, []);
  let U = {
      healthy: {
        label: `Healthy`,
        icon: `🟢`,
        color: `text-emerald-700 bg-emerald-50 border-emerald-200`
      },
      moderate: {
        label: `Moderate`,
        icon: `🟡`,
        color: `text-amber-700 bg-amber-50 border-amber-200`
      },
      stressed: {
        label: `Stressed`,
        icon: `🔴`,
        color: `text-red-700 bg-red-50 border-red-200`
      }
    },
    W = U[L.latestStatus] ?? U.moderate,
    G = {
      improving: {
        label: `Improving`,
        icon: `↑`,
        color: `text-emerald-600`
      },
      stable: {
        label: `Stable`,
        icon: `→`,
        color: `text-muted-foreground`
      },
      declining: {
        label: `Declining`,
        icon: `↓`,
        color: `text-red-600`
      }
    },
    K = G[L.trend] ?? G.stable,
    q = z?.source === `live` || z?.source === `open-meteo`,
    J = L.source === `live` || L.source === `sentinel-hub`,
    Y = z?.days?.[0],
    X = z?.days ? z.days.slice(0, 7).reduce((e, t) => e + t.rainfallMm, 0) : 0,
    Z = z?.days?.filter(e => e.isExtremeRisk) ?? [];
  return (0, k.jsxs)(`div`, {
    className: `px-4 pt-4 space-y-4`,
    children: [(0, k.jsxs)(`div`, {
      children: [(0, k.jsx)(`h2`, {
        className: `text-xl font-bold`,
        style: {
          fontFamily: `Outfit, sans-serif`
        },
        children: e(`farm.title`)
      }), (0, k.jsxs)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: [n.village ? `${n.village}, ` : ``, n.district, ` · `, v(n.areaHectares)]
      })]
    }), (0, k.jsxs)(d, {
      href: `/history`,
      className: `flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 shadow-xs hover:bg-muted transition-colors`,
      children: [(0, k.jsxs)(`span`, {
        className: `flex items-center gap-2 text-sm font-semibold`,
        children: [(0, k.jsx)(`span`, {
          className: `text-lg`,
          children: `📜`
        }), ` Farm History`, (0, k.jsx)(`span`, {
          className: `text-xs font-normal text-muted-foreground`,
          children: `· past seasons, yields & earnings`
        })]
      }), (0, k.jsx)(`span`, {
        className: `text-primary text-sm`,
        children: `→`
      })]
    }), (0, k.jsx)(g, {
      className: `overflow-hidden border-border/80 shadow-xs`,
      children: (0, k.jsx)(A, {
        lat: n.lat,
        lng: n.lng,
        farmName: n.village ? `${n.village} Field` : `My Field`,
        crop: l(n.crop, t),
        fieldBoundary: L.fieldBoundary,
        healthZones: L.healthZones,
        latestStatus: L.latestStatus,
        latestNdvi: L.latestNdvi,
        healthyPct: L.healthyPct,
        moderatePct: L.moderatePct,
        stressedPct: L.stressedPct
      })
    }), (0, k.jsxs)(g, {
      children: [(0, k.jsx)(h, {
        className: `pb-2 pt-4`,
        children: (0, k.jsxs)(p, {
          className: `text-base flex items-center justify-between`,
          children: [(0, k.jsx)(`span`, {
            children: e(`weather.title`)
          }), z && (0, k.jsx)(`span`, {
            className: `text-xs font-semibold px-2 py-0.5 rounded-full border ${q?`bg-emerald-50 text-emerald-700 border-emerald-300`:`bg-amber-50 text-amber-700 border-amber-300`}`,
            children: q ? `🟢 Live Open-Meteo` : `ℹ️ Demo Data`
          })]
        })
      }), (0, k.jsx)(m, {
        className: `space-y-3`,
        children: V && !Y ? (0, k.jsxs)(`div`, {
          className: `animate-pulse space-y-2 py-2`,
          children: [(0, k.jsx)(`div`, {
            className: `h-6 w-32 bg-muted rounded`
          }), (0, k.jsx)(`div`, {
            className: `h-4 w-48 bg-muted rounded`
          })]
        }) : Y ? (0, k.jsxs)(k.Fragment, {
          children: [(0, k.jsxs)(`div`, {
            className: `grid grid-cols-3 gap-2 py-1 text-center bg-muted/40 rounded-lg p-2.5`,
            children: [(0, k.jsxs)(`div`, {
              children: [(0, k.jsx)(`p`, {
                className: `text-[11px] text-muted-foreground uppercase font-medium`,
                children: e(`weather.temperature`)
              }), (0, k.jsxs)(`p`, {
                className: `text-base font-bold text-foreground mt-0.5`,
                children: [Math.round(Y.tempMaxC), `°C`, (0, k.jsxs)(`span`, {
                  className: `text-xs text-muted-foreground font-normal ml-1`,
                  children: [`/ `, Math.round(Y.tempMinC), `°`]
                })]
              }), (0, k.jsx)(`p`, {
                className: `text-[10px] text-muted-foreground mt-0.5`,
                children: Y.description
              })]
            }), (0, k.jsxs)(`div`, {
              children: [(0, k.jsx)(`p`, {
                className: `text-[11px] text-muted-foreground uppercase font-medium`,
                children: e(`weather.precipitation`)
              }), (0, k.jsxs)(`p`, {
                className: `text-base font-bold text-foreground mt-0.5`,
                children: [Y.rainfallMm, ` mm`]
              }), (0, k.jsxs)(`p`, {
                className: `text-[10px] text-muted-foreground mt-0.5`,
                children: [X.toFixed(1), `mm 7-day`]
              })]
            }), (0, k.jsxs)(`div`, {
              children: [(0, k.jsx)(`p`, {
                className: `text-[11px] text-muted-foreground uppercase font-medium`,
                children: e(`weather.humidity`)
              }), (0, k.jsxs)(`p`, {
                className: `text-base font-bold text-foreground mt-0.5`,
                children: [Y.humidityPct, `%`]
              }), (0, k.jsx)(`p`, {
                className: `text-[10px] text-emerald-600 mt-0.5`,
                children: `Optimal`
              })]
            })]
          }), Z.length > 0 && (0, k.jsxs)(`div`, {
            className: `flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-md p-2.5 text-xs text-amber-800`,
            children: [(0, k.jsx)(`span`, {
              className: `text-base`,
              children: `⚠️`
            }), (0, k.jsxs)(`div`, {
              children: [(0, k.jsx)(`p`, {
                className: `font-semibold`,
                children: `Heavy Rain Risk Detected`
              }), (0, k.jsxs)(`p`, {
                className: `mt-0.5 text-amber-700`,
                children: [Z[0].rainfallMm, `mm rain forecast on `, b(Z[0].date), `. Monitor field drainage and plan harvesting/transport ahead.`]
              })]
            })]
          }), (0, k.jsxs)(`div`, {
            children: [(0, k.jsx)(`p`, {
              className: `text-xs text-muted-foreground font-medium mb-1.5 uppercase tracking-wide`,
              children: `7-Day Forecast`
            }), (0, k.jsx)(`div`, {
              className: `grid grid-cols-7 gap-1 overflow-x-auto pb-1 text-center`,
              children: z?.days?.slice(0, 7).map((e, t) => (0, k.jsxs)(`div`, {
                className: `p-1.5 rounded border text-xs flex flex-col items-center justify-between min-w-[42px] ${t===0?`bg-primary/5 border-primary/30 font-semibold`:e.isExtremeRisk?`bg-amber-50/70 border-amber-300`:`bg-card border-border/60`}`,
                children: [(0, k.jsx)(`span`, {
                  className: `text-[10px] text-muted-foreground`,
                  children: t === 0 ? `Today` : P(e.date)
                }), (0, k.jsx)(`span`, {
                  className: `text-base my-0.5`,
                  children: (0, k.jsx)(j, {
                    code: e.weatherCode
                  })
                }), (0, k.jsxs)(`span`, {
                  className: `text-[11px] font-medium`,
                  children: [Math.round(e.tempMaxC), `°`]
                }), (0, k.jsx)(`span`, {
                  className: `text-[10px] ${e.rainfallMm>10?`font-bold text-blue-600`:`text-muted-foreground`}`,
                  children: e.rainfallMm > 0 ? `${e.rainfallMm}m` : `0`
                })]
              }, e.date))
            })]
          }), (0, k.jsxs)(`p`, {
            className: `text-xs text-muted-foreground italic`,
            children: [`Source: `, q ? `Open-Meteo live atmospheric models (Asia/Kolkata)` : `Demo fallback data — illustrative only`, `.`]
          })]
        }) : (0, k.jsx)(`div`, {
          className: `text-xs text-muted-foreground italic py-2`,
          children: `Weather service currently initializing.`
        })
      })]
    }), (0, k.jsxs)(g, {
      children: [(0, k.jsx)(h, {
        className: `pb-2 pt-4`,
        children: (0, k.jsxs)(p, {
          className: `text-base flex items-center justify-between`,
          children: [(0, k.jsx)(`span`, {
            children: e(`farm.cropHealth`)
          }), (0, k.jsxs)(`div`, {
            className: `flex items-center gap-1.5`,
            children: [(0, k.jsx)(`span`, {
              className: `text-xs font-semibold px-2 py-0.5 rounded-full border ${J?`bg-emerald-50 text-emerald-700 border-emerald-300`:`bg-amber-50 text-amber-700 border-amber-300`}`,
              children: J ? `🟢 Live Sentinel-2` : `ℹ️ Demo Satellite Data`
            }), (0, k.jsxs)(`span`, {
              className: `text-sm font-semibold px-2 py-1 rounded-full border ${W.color}`,
              children: [W.icon, ` `, W.label]
            })]
          })]
        })
      }), w ? (0, k.jsxs)(m, {
        className: `space-y-3`,
        children: [(0, k.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [(0, k.jsxs)(`div`, {
            children: [(0, k.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: e(`farm.ndvi`)
            }), (0, k.jsx)(`p`, {
              className: `text-2xl font-bold`,
              style: {
                fontFamily: `Outfit, sans-serif`
              },
              children: _(L.latestNdvi)
            }), (0, k.jsxs)(`p`, {
              className: `text-[11px] text-muted-foreground mt-0.5`,
              children: [`Season Average: `, (0, k.jsx)(`span`, {
                className: `font-semibold text-foreground`,
                children: L.avgNdvi ? L.avgNdvi.toFixed(2) : `—`
              })]
            })]
          }), (0, k.jsxs)(`div`, {
            className: `text-right`,
            children: [(0, k.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: e(`farm.trend`)
            }), (0, k.jsxs)(`p`, {
              className: `text-sm font-semibold ${K.color}`,
              children: [K.icon, ` `, K.label]
            })]
          })]
        }), (0, k.jsxs)(`div`, {
          children: [(0, k.jsx)(`p`, {
            className: `text-xs text-muted-foreground mb-1.5`,
            children: `Field Area Distribution`
          }), (0, k.jsx)(M, {
            healthy: L.healthyPct,
            moderate: L.moderatePct,
            stressed: L.stressedPct
          }), (0, k.jsxs)(`div`, {
            className: `flex justify-between text-xs text-muted-foreground mt-1`,
            children: [(0, k.jsxs)(`span`, {
              children: [L.healthyPct, `% healthy`]
            }), (0, k.jsxs)(`span`, {
              children: [L.moderatePct, `% moderate`]
            }), (0, k.jsxs)(`span`, {
              children: [L.stressedPct, `% stressed`]
            })]
          })]
        }), (0, k.jsxs)(`div`, {
          children: [(0, k.jsx)(`p`, {
            className: `text-xs text-muted-foreground mb-1.5`,
            children: `NDVI History (last 8 observations)`
          }), (0, k.jsx)(N, {
            readings: L.readings
          }), (0, k.jsxs)(`p`, {
            className: `text-xs text-muted-foreground mt-1`,
            children: [`Last observed: `, new Date(L.lastObservedAt).toLocaleDateString(`en-IN`, {
              day: `numeric`,
              month: `short`
            })]
          })]
        }), (0, k.jsxs)(`p`, {
          className: `text-xs text-muted-foreground italic`,
          children: [`Source: `, J ? `Sentinel-2 L2A Multispectral satellite observations (10m), ESA Copernicus via Microsoft Planetary Computer, cloud-masked` : `Unavailable`, `.`]
        })]
      }) : (0, k.jsx)(m, {
        children: (0, k.jsx)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: F ? `Live Sentinel-2 NDVI unavailable: ${F}` : `Fetching Sentinel-2 NDVI…`
        })
      })]
    }), (0, k.jsxs)(g, {
      children: [(0, k.jsx)(h, {
        className: `pb-2 pt-4`,
        children: (0, k.jsxs)(p, {
          className: `text-base flex items-center justify-between`,
          children: [(0, k.jsx)(`span`, {
            children: e(`yield.expectedYield`)
          }), (0, k.jsx)(`span`, {
            className: `text-xs font-semibold px-2 py-0.5 rounded-full border ${f?`bg-emerald-50 text-emerald-700 border-emerald-300`:`bg-amber-50 text-amber-700 border-amber-300`}`,
            children: f ? `🟢 Trained model · ${i.modelVersion}` : S ? `Unavailable` : `Loading…`
          })]
        })
      }), f ? (0, k.jsxs)(m, {
        className: `space-y-3`,
        children: [(0, k.jsxs)(`div`, {
          className: `flex items-end justify-between`,
          children: [(0, k.jsxs)(`div`, {
            children: [(0, k.jsx)(`p`, {
              className: `text-3xl font-bold text-primary`,
              style: {
                fontFamily: `Outfit, sans-serif`
              },
              children: y(i.totalHarvestQ)
            }), (0, k.jsxs)(`p`, {
              className: `text-sm text-muted-foreground`,
              children: [i.expectedYieldQPerHa.toFixed(1), ` qtl/ha`]
            })]
          }), (0, k.jsxs)(`div`, {
            className: `text-right text-sm text-muted-foreground`,
            children: [(0, k.jsx)(`p`, {
              children: `Range (estimated):`
            }), (0, k.jsxs)(`p`, {
              className: `font-medium text-foreground`,
              children: [i.confidenceLow.toFixed(1), `–`, i.confidenceHigh.toFixed(1), ` qtl/ha`]
            })]
          })]
        }), (0, k.jsxs)(`div`, {
          children: [(0, k.jsx)(`p`, {
            className: `text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2`,
            children: `Why this estimate?`
          }), (0, k.jsx)(`div`, {
            className: `space-y-1.5`,
            children: i.explanation.map((e, t) => (0, k.jsxs)(`div`, {
              className: `flex items-start gap-2`,
              children: [(0, k.jsx)(`span`, {
                className: `text-sm`,
                children: e.impactDirection === `positive` ? `✅` : e.impactDirection === `negative` ? `⚠️` : `➖`
              }), (0, k.jsxs)(`div`, {
                className: `flex-1 min-w-0`,
                children: [(0, k.jsx)(`p`, {
                  className: `text-xs font-medium text-foreground`,
                  children: e.factor
                }), (0, k.jsx)(`p`, {
                  className: `text-xs text-muted-foreground`,
                  children: e.value
                })]
              }), (0, k.jsx)(D, {
                variant: `outline`,
                className: `text-[10px] shrink-0 ${e.impactDirection===`positive`?`border-emerald-300 text-emerald-700`:e.impactDirection===`negative`?`border-red-300 text-red-700`:`border-muted text-muted-foreground`}`,
                children: e.impactMagnitude
              })]
            }, t))
          })]
        }), (0, k.jsx)(`p`, {
          className: `text-xs text-muted-foreground italic`,
          children: `Gradient-boosted model trained on official district Area-Production-Yield records (data.gov.in) and Open-Meteo weather. Not a guarantee.`
        })]
      }) : (0, k.jsx)(m, {
        children: (0, k.jsx)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: S ? `Prediction unavailable: ${S}` : `Running yield model on live weather…`
        })
      })]
    }), (0, k.jsx)(g, {
      children: (0, k.jsx)(m, {
        className: `pt-4 pb-4`,
        children: (0, k.jsxs)(`div`, {
          className: `grid grid-cols-2 gap-3 text-sm`,
          children: [(0, k.jsxs)(`div`, {
            children: [(0, k.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: `Crop`
            }), (0, k.jsx)(`p`, {
              className: `font-semibold capitalize`,
              children: n.crop
            })]
          }), (0, k.jsxs)(`div`, {
            children: [(0, k.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: `Season`
            }), (0, k.jsx)(`p`, {
              className: `font-semibold`,
              children: n.season
            })]
          }), (0, k.jsxs)(`div`, {
            children: [(0, k.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: `Sown On`
            }), (0, k.jsx)(`p`, {
              className: `font-semibold`,
              children: b(n.sowingDate)
            })]
          }), (0, k.jsxs)(`div`, {
            children: [(0, k.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: `Nearest APMC Mandi`
            }), (0, k.jsx)(`p`, {
              className: `font-semibold`,
              children: n.nearestMandi
            })]
          }), (0, k.jsxs)(`div`, {
            children: [(0, k.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: `Area`
            }), (0, k.jsx)(`p`, {
              className: `font-semibold`,
              children: v(n.areaHectares)
            })]
          }), (0, k.jsxs)(`div`, {
            children: [(0, k.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: `Soil / Irrigation`
            }), (0, k.jsxs)(`p`, {
              className: `font-semibold capitalize`,
              children: [n.soilType ?? `Black`, ` / `, n.irrigationType ?? `Rainfed`]
            })]
          })]
        })
      })
    }), (0, k.jsx)(`div`, {
      className: `h-2`
    })]
  })
}
var I = F;
export {
  I as component
};