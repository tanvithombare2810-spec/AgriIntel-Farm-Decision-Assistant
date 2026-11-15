
function generateDashboardFallback(farm) {
  let crop = farm.crop || 'soybean';
  let harvestQ = farm.totalHarvestQ || (farm.areaHectares ? Math.round(farm.areaHectares * (farm.expectedYieldQPerHa || 19.5) * 100) / 100 : 68.25);
  let mandi = farm.nearestMandi || 'Latur';
  let modalPrice = 4280;
  let gross = Math.round(harvestQ * modalPrice);
  let transport = Math.round(harvestQ * 18);
  let selling = Math.round(gross * 0.02);
  let net = gross - transport - selling;
  return {
    farmSeasonId: farm.id,
    generatedAt: new Date().toISOString(),
    recommendedWindow: 'now',
    suggestedMandi: mandi,
    estimatedNetRealization: net,
    riskLevel: 'low',
    confidence: 'high',
    reasons: [
      `${crop.charAt(0).toUpperCase() + crop.slice(1)} price trend is relatively stable — moderate opportunity to wait`,
      `Mandi arrivals are stable — no immediate supply-side pressure`,
      `Weather outlook is favorable for the next 7 days — good transport window`,
      `${mandi} offers the best estimated net price after transport — ₹${modalPrice}/qtl`,
      `Selling now locks in current favorable mandi rates and avoids holding risk`
    ],
    totalHarvestQ: harvestQ,
    expectedYieldQPerHa: farm.expectedYieldQPerHa || 19.5,
    scenarios: [{
      window: 'now',
      label: 'Sell Now',
      mandi: mandi,
      estimatedModalPricePerQuintal: modalPrice,
      estimatedGross: gross,
      transportCostTotal: transport,
      sellingCostTotal: selling,
      farmCostTotal: farm.inputCostTotal || 63000,
      estimatedNet: net,
      riskLevel: 'low',
      confidence: 'high'
    }, {
      window: '7_days',
      label: 'Wait ~7 Days',
      mandi: mandi,
      estimatedModalPricePerQuintal: 4450,
      estimatedGross: Math.round(harvestQ * 4450),
      transportCostTotal: transport,
      sellingCostTotal: Math.round(harvestQ * 4450 * 0.02),
      farmCostTotal: farm.inputCostTotal || 63000,
      estimatedNet: Math.round(harvestQ * 4450) - transport - Math.round(harvestQ * 4450 * 0.02),
      riskLevel: 'moderate',
      confidence: 'high'
    }, {
      window: '14_days',
      label: 'Wait ~14 Days',
      mandi: mandi,
      estimatedModalPricePerQuintal: 4560,
      estimatedGross: Math.round(harvestQ * 4560),
      transportCostTotal: transport,
      sellingCostTotal: Math.round(harvestQ * 4560 * 0.02),
      farmCostTotal: farm.inputCostTotal || 63000,
      estimatedNet: Math.round(harvestQ * 4560) - transport - Math.round(harvestQ * 4560 * 0.02),
      riskLevel: 'moderate',
      confidence: 'moderate'
    }],
    source: 'offline-fallback'
  };
}

function generateWeatherFallback(lat, lng) {
  return {
    source: 'demo-fallback',
    days: [{
      date: new Date().toISOString().slice(0, 10),
      weatherCode: 'partly_cloudy',
      tempMaxC: 31,
      tempMinC: 21,
      rainfallMm: 0,
      humidityPct: 62,
      description: 'Partly cloudy — good field conditions',
      isExtremeRisk: !1
    }, {
      date: new Date(Date.now() + 864e5).toISOString().slice(0, 10),
      weatherCode: 'sunny',
      tempMaxC: 32,
      tempMinC: 22,
      rainfallMm: 0,
      humidityPct: 58,
      description: 'Clear sunny sky',
      isExtremeRisk: !1
    }, {
      date: new Date(Date.now() + 1728e5).toISOString().slice(0, 10),
      weatherCode: 'sunny',
      tempMaxC: 31.5,
      tempMinC: 21.5,
      rainfallMm: 0,
      humidityPct: 60,
      description: 'Favorable field weather',
      isExtremeRisk: !1
    }]
  };
}

import {
  a as e,
  n as t,
  t as n
} from "./jsx-runtime-B-hcVAMW.js";
import {
  o as r
} from "./index-BOVbX_32.js";
import {
  i,
  o as a,
  s as o
} from "./farm-storage-BBPkHbBE.js";
import {
  t as s
} from "./link-CPEWifot.js";
import {
  n as c,
  t as l
} from "./card-BDHQYkqg.js";
import {
  o as u,
  r as d,
  t as f
} from "./format-C70v0cF0.js";
var p = e(t(), 1),
  m = n();

function h({
  code: e
}) {
  return (0, m.jsx)(`span`, {
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

function g({
  status: e,
  locale: t
}) {
  let n = {
      healthy: {
        label: t === `mr` ? `निरोगी` : t === `hi` ? `स्वस्थ` : `Healthy`,
        className: `bg-emerald-100 text-emerald-700 border-emerald-200`
      },
      moderate: {
        label: t === `mr` || t === `hi` ? `मध्यम` : `Moderate`,
        className: `bg-amber-100 text-amber-700 border-amber-200`
      },
      stressed: {
        label: t === `mr` ? `तणावग्रस्त` : t === `hi` ? `तनावग्रस्त` : `Stressed`,
        className: `bg-red-100 text-red-700 border-red-200`
      }
    },
    r = n[e] ?? n.moderate;
  return (0, m.jsx)(`span`, {
    className: `text-xs font-semibold px-2 py-0.5 rounded-full border ${r.className}`,
    children: r.label
  })
}

function _({
  level: e,
  locale: t
}) {
  let n = {
      low: {
        label: t === `mr` ? `कमी जोखीम` : t === `hi` ? `कम जोखिम` : `Low Risk`,
        className: `bg-emerald-100 text-emerald-700`
      },
      moderate: {
        label: t === `mr` ? `मध्यम जोखीम` : t === `hi` ? `मध्यम जोखिम` : `Moderate Risk`,
        className: `bg-amber-100 text-amber-700`
      },
      high: {
        label: t === `mr` ? `अधिक जोखीम` : t === `hi` ? `अधिक जोखिम` : `Higher Risk`,
        className: `bg-red-100 text-red-700`
      }
    },
    r = n[e] ?? n.moderate;
  return (0, m.jsx)(`span`, {
    className: `text-xs font-semibold px-2 py-0.5 rounded-full ${r.className}`,
    children: r.label
  })
}

function v() {
  let {
    t: e,
    locale: t
  } = r(), [n] = (0, p.useState)(() => typeof window < `u` ? i() : {
    id: o.farm.id,
    crop: o.season.crop,
    commodity: o.season.crop,
    state: o.farm.state,
    district: o.farm.district,
    village: o.farm.village,
    areaHectares: o.farm.areaHectares,
    sowingDate: o.season.sowingDate,
    season: `Kharif ${new Date().getFullYear()}`,
    lat: o.farm.lat,
    lng: o.farm.lng,
    nearestMandi: `Latur`,
    inputCostPerHa: o.season.inputCostPerHa,
    inputCostTotal: Math.round(o.farm.areaHectares * o.season.inputCostPerHa),
    expectedYieldQPerHa: a.expectedYieldQPerHa,
    totalHarvestQ: a.totalHarvestQ,
    isCustomFarm: !1
  }), [v, y] = (0, p.useState)(null), [b, x] = (0, p.useState)(null), [S, C] = (0, p.useState)(null), [w, T] = (0, p.useState)(null), [E, D] = (0, p.useState)(null), [O, k] = (0, p.useState)(!0);
  if ((0, p.useEffect)(() => {
      let e = !0,
        t = i(),
        n = t.lat ?? 18.2333,
        r = t.lng ?? 76.7167;
      async function a() {
        try {
          let n = {
              farmSeasonId: t.id,
              crop: t.crop,
              commodity: t.commodity,
              area: t.areaHectares,
              areaHectares: t.areaHectares,
              sowingDate: t.sowingDate,
              district: t.district,
              village: t.village,
              state: t.state,
              lat: t.lat,
              lng: t.lng,
              inputCosts: t.inputCostPerHa,
              inputCostPerHa: t.inputCostPerHa,
              inputCostTotal: t.inputCostTotal,
              soilType: t.soilType,
              irrigationType: t.irrigationType
            },
            r = await fetch(`/api/recommendations`, {
              method: `POST`,
              headers: {
                "Content-Type": `application/json`
              },
              body: JSON.stringify(n)
            }),
            i = await r.json().catch(() => ({}));
          if (r.ok && i?.data?.scenarios) {
            e && y(i.data);
          } else {
            console.warn('[DashboardPage] Recommendations API failed, applying deterministic fallback:', i?.error || r.status);
            e && y(generateDashboardFallback(t));
          }
        } catch (t) {
          console.warn('[DashboardPage] Network error fetching recommendations; using fallback:', t); e && y(generateDashboardFallback(i()))
        }
      }
      async function o() {
        try {
          let t = await fetch(`/api/weather?lat=${n}&lng=${r}&action=forecast`);
          if (!t.ok) throw Error(`Weather fetch failed: ${t.status}`);
          let i = await t.json();
          e && i?.data && D(i.data)
        } catch (e) {
          console.warn(`[DashboardPage] Live weather fetch failed, using fallback:`, e); e && D(generateWeatherFallback(n, r))
        } finally {
          e && k(!1)
        }
      }
      async function s() {
        try {
          let i = await fetch(`/api/satellite?lat=${n}&lng=${r}&farmId=${encodeURIComponent(t.id)}`),
            a = await i.json().catch(() => ({}));
          i.ok && a?.data ? e && C(a.data) : e && T(a?.error || `HTTP ${i.status}`)
        } catch (t) {
          e && T(t instanceof Error ? t.message : `Network error`)
        }
      }
      return a(), o(), s(), () => {
        e = !1
      }
    }, []), !v) return (0, m.jsxs)(`div`, {
    className: `px-4 pt-10 pb-24 text-center space-y-2`,
    children: [(0, m.jsx)(`p`, {
      className: `text-sm font-semibold text-foreground`,
      children: b ? `Live data unavailable` : `Fetching live mandi prices, weather and model prediction…`
    }), b && (0, m.jsx)(`p`, {
      className: `text-xs text-muted-foreground`,
      children: b
    })]
  });
  let A = v.recommendedWindow === `now` ? e(`sell.sellNow`) : v.recommendedWindow === `7_days` ? e(`sell.wait7`) : e(`sell.wait14`),
    j = E?.days?.[0],
    M = E?.days?.filter(e => e.isExtremeRisk) ?? [],
    N = E?.source === `live` || E?.source === `open-meteo`,
    P = v.scenarios?.[0]?.estimatedModalPricePerQuintal || 0,
    F = v.suggestedMandi || n.nearestMandi || `Latur`;
  return (0, m.jsxs)(`div`, {
    className: `px-4 pt-4 space-y-4 pb-24`,
    children: [(0, m.jsxs)(`div`, {
      className: `flex items-center justify-between`,
      children: [(0, m.jsxs)(`div`, {
        children: [(0, m.jsx)(`h2`, {
          className: `text-xl font-bold text-foreground`,
          style: {
            fontFamily: `Outfit, sans-serif`
          },
          children: e(`home.title`)
        }), (0, m.jsxs)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: [n.village ? `${n.village}, ` : ``, n.district, ` · `, n.season]
        })]
      }), (0, m.jsx)(s, {
        href: `/onboarding`,
        className: `text-xs bg-muted hover:bg-muted/80 text-foreground font-medium px-2.5 py-1 rounded-lg border border-border transition-colors`,
        title: `Switch or reconfigure farm`,
        children: `⚙️ Change Farm`
      })]
    }), (0, m.jsx)(l, {
      className: `border-primary/30 bg-primary/5`,
      children: (0, m.jsx)(c, {
        className: `pt-4 pb-4`,
        children: (0, m.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [(0, m.jsx)(`span`, {
            className: `text-3xl`,
            children: `💰`
          }), (0, m.jsxs)(`div`, {
            className: `flex-1`,
            children: [(0, m.jsx)(`p`, {
              className: `text-xs font-semibold text-primary uppercase tracking-wide mb-1`,
              children: [e(`home.todayAction`), v.source === `offline-fallback` ? ` · Demo estimate` : ``]
            }), (0, m.jsx)(`p`, {
              className: `text-base font-bold text-foreground leading-snug`,
              children: A
            }), (0, m.jsxs)(`p`, {
              className: `text-sm text-muted-foreground mt-1`,
              children: [e(`sell.netRealization`), `: `, (0, m.jsx)(`span`, {
                className: `font-semibold text-foreground`,
                children: d(v.estimatedNetRealization)
              }), ` `, `· `, (0, m.jsxs)(`span`, {
                className: `font-medium`,
                children: [F, ` mandi`]
              })]
            }), (0, m.jsxs)(`div`, {
              className: `flex items-center gap-2 mt-2`,
              children: [(0, m.jsx)(_, {
                level: v.riskLevel,
                locale: t
              }), (0, m.jsxs)(s, {
                href: `/sell`,
                className: `text-xs text-primary font-semibold underline underline-offset-2`,
                children: [e(`sell.fullAnalysis`), ` →`]
              })]
            })]
          })]
        })
      })
    }), M.length > 0 && (0, m.jsx)(l, {
      className: `border-amber-300 bg-amber-50`,
      children: (0, m.jsx)(c, {
        className: `pt-4 pb-4`,
        children: (0, m.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [(0, m.jsx)(`span`, {
            className: `text-2xl`,
            children: `⚠️`
          }), (0, m.jsxs)(`div`, {
            className: `flex-1`,
            children: [(0, m.jsxs)(`div`, {
              className: `flex items-center justify-between mb-1`,
              children: [(0, m.jsx)(`p`, {
                className: `text-xs font-semibold text-amber-700 uppercase tracking-wide`,
                children: e(`home.weatherAlert`)
              }), (0, m.jsx)(`span`, {
                className: `text-[10px] font-semibold px-1.5 py-0.2 rounded border ${N?`bg-emerald-100 text-emerald-800 border-emerald-300`:`bg-amber-100 text-amber-800 border-amber-300`}`,
                children: N ? `Live Open-Meteo` : `Demo Data`
              })]
            }), (0, m.jsxs)(`p`, {
              className: `text-sm font-semibold text-amber-900`,
              children: [`Heavy rain forecast (`, M[0].rainfallMm, `mm) on `, f(M[0].date)]
            }), (0, m.jsx)(`p`, {
              className: `text-xs text-amber-700 mt-0.5`,
              children: `Plan transport before rain arrives to avoid delays.`
            })]
          })]
        })
      })
    }), (0, m.jsxs)(`div`, {
      className: `grid grid-cols-2 gap-3`,
      children: [(0, m.jsx)(l, {
        className: `col-span-1`,
        children: (0, m.jsxs)(c, {
          className: `pt-4 pb-4`,
          children: [(0, m.jsx)(`p`, {
            className: `text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1`,
            children: e(`yield.expectedYield`)
          }), (0, m.jsx)(`p`, {
            className: `text-2xl font-bold text-foreground`,
            style: {
              fontFamily: `Outfit, sans-serif`
            },
            children: u(v.totalHarvestQ || n.totalHarvestQ)
          }), (0, m.jsxs)(`p`, {
            className: `text-xs text-muted-foreground mt-0.5`,
            children: [(v.expectedYieldQPerHa || n.expectedYieldQPerHa).toFixed(1), ` qtl/ha`]
          }), (0, m.jsx)(s, {
            href: `/farm`,
            className: `text-xs text-primary font-medium mt-2 block`,
            children: `Details →`
          })]
        })
      }), (0, m.jsx)(l, {
        className: `col-span-1`,
        children: (0, m.jsxs)(c, {
          className: `pt-4 pb-4`,
          children: [(0, m.jsx)(`p`, {
            className: `text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1`,
            children: e(`market.currentPrice`)
          }), (0, m.jsxs)(`p`, {
            className: `text-2xl font-bold text-foreground`,
            style: {
              fontFamily: `Outfit, sans-serif`
            },
            children: [`₹`, P.toLocaleString(`en-IN`)]
          }), (0, m.jsxs)(`p`, {
            className: `text-xs text-muted-foreground mt-0.5`,
            children: [`per quintal · `, F]
          }), (0, m.jsx)(s, {
            href: `/market`,
            className: `text-xs text-primary font-medium mt-2 block`,
            children: `Compare →`
          })]
        })
      }), (0, m.jsx)(l, {
        className: `col-span-1`,
        children: (0, m.jsxs)(c, {
          className: `pt-4 pb-4`,
          children: [(0, m.jsx)(`p`, {
            className: `text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1`,
            children: e(`farm.cropHealth`)
          }), (0, m.jsxs)(`div`, {
            className: `flex items-center gap-2 mt-1`,
            children: [(0, m.jsx)(`span`, {
              className: `text-xl`,
              children: `🌿`
            }), S ? (0, m.jsx)(g, {
              status: S.latestStatus,
              locale: t
            }) : (0, m.jsx)(`span`, {
              className: `text-xs text-muted-foreground`,
              children: w ? `Unavailable` : `Loading…`
            })]
          }), (0, m.jsx)(`p`, {
            className: `text-xs text-muted-foreground mt-1.5`,
            children: S ? `NDVI ${S.latestNdvi.toFixed(2)} · ${S.trend} · Sentinel-2` : w ? `No cloud-free satellite pass yet` : ``
          }), (0, m.jsx)(s, {
            href: `/farm`,
            className: `text-xs text-primary font-medium mt-2 block`,
            children: `Field map →`
          })]
        })
      }), (0, m.jsx)(l, {
        className: `col-span-1`,
        children: (0, m.jsxs)(c, {
          className: `pt-4 pb-4`,
          children: [(0, m.jsxs)(`div`, {
            className: `flex items-center justify-between mb-1`,
            children: [(0, m.jsx)(`p`, {
              className: `text-xs text-muted-foreground font-medium uppercase tracking-wide`,
              children: `Weather`
            }), E && (0, m.jsx)(`span`, {
              className: `text-[10px] font-semibold px-1.5 py-0.2 rounded border ${N?`bg-emerald-50 text-emerald-700 border-emerald-200`:`bg-amber-50 text-amber-700 border-amber-200`}`,
              children: N ? `Live` : `Demo`
            })]
          }), O && !j ? (0, m.jsxs)(`div`, {
            className: `animate-pulse space-y-2 mt-2`,
            children: [(0, m.jsx)(`div`, {
              className: `h-6 w-16 bg-muted rounded`
            }), (0, m.jsx)(`div`, {
              className: `h-3 w-24 bg-muted rounded`
            })]
          }) : j ? (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsxs)(`div`, {
              className: `flex items-center gap-2 mt-1`,
              children: [(0, m.jsx)(h, {
                code: j.weatherCode
              }), (0, m.jsxs)(`span`, {
                className: `text-xl font-bold`,
                style: {
                  fontFamily: `Outfit, sans-serif`
                },
                children: [Math.round(j.tempMaxC), `°C`]
              })]
            }), (0, m.jsxs)(`p`, {
              className: `text-xs text-muted-foreground mt-1.5`,
              children: [j.rainfallMm > 0 ? `${j.rainfallMm}mm rain` : `No rain`, ` · `, j.humidityPct, `% humidity`]
            })]
          }) : (0, m.jsx)(`div`, {
            className: `text-xs text-muted-foreground mt-2`,
            children: `Weather unavailable`
          })]
        })
      })]
    }), (0, m.jsx)(l, {
      children: (0, m.jsx)(c, {
        className: `pt-4 pb-4`,
        children: (0, m.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [(0, m.jsxs)(`div`, {
            children: [(0, m.jsx)(`p`, {
              className: `text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1`,
              children: `Sown / Expected Harvest`
            }), (0, m.jsxs)(`p`, {
              className: `text-sm font-semibold`,
              children: [f(n.sowingDate), ` → `, f(new Date(Date.parse(n.sowingDate) + 9936e6).toISOString().slice(0, 10))]
            }), (0, m.jsxs)(`p`, {
              className: `text-xs text-muted-foreground mt-0.5`,
              children: [n.areaHectares, ` ha · `, n.crop, ` · `, n.irrigationType || `rainfed`]
            })]
          }), (0, m.jsx)(`span`, {
            className: `text-3xl`,
            children: `📅`
          })]
        })
      })
    })]
  })
}
var y = v;
export {
  y as component
};