const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/ParcelPreviewMap-BEyq2fSi.js", "assets/jsx-runtime-B-hcVAMW.js", "assets/leaflet-fQAXqZhn.js", "assets/index-BOVbX_32.js", "assets/leaflet-vh-t_kPv.css", "assets/FieldLocationPicker-BZaXzrNX.js", "assets/Marker-CqPhLdbL.js", "assets/dynamic-C4CD9P0Z.js", "assets/geometry-Cw4oE72P.js"]))) => i.map(i => d[i]);
import {
  a as e,
  n as t,
  t as n
} from "./jsx-runtime-B-hcVAMW.js";
import {
  n as r
} from "./navigation-a6DIvD_7.js";
import {
  n as i,
  o as a,
  t as o
} from "./index-BOVbX_32.js";
import {
  t as s
} from "./dynamic-C4CD9P0Z.js";
import {
  n as c,
  r as l
} from "./geometry-Cw4oE72P.js";
import {
  t as u
} from "./cn-B9URw_CD.js";
import {
  a as d,
  n as f,
  r as p,
  t as m
} from "./farm-storage-BBPkHbBE.js";
import {
  n as h,
  t as g
} from "./card-BDHQYkqg.js";
import {
  t as _
} from "./button-hay3EtyF.js";
var v = e(t(), 1),
  y = 2406;

function b(e) {
  return e.replace(/[\u0966-\u096F]/g, e => String(e.charCodeAt(0) - y))
}

function x(e) {
  return b(e).trim().toUpperCase().replace(/\s+/g, ``).replace(/-/g, `/`)
}

function S(e) {
  return /^\d{1,5}(\/[0-9A-Z]{1,4})?$/.test(e)
}
var C = n(),
  w = s(() => o(() => import(`./ParcelPreviewMap-BEyq2fSi.js`), __vite__mapDeps([0, 1, 2, 3, 4])), {
    ssr: !1,
    loading: () => (0, C.jsx)(`div`, {
      className: `h-56 bg-muted/40 rounded-xl flex items-center justify-center animate-pulse border border-border`,
      children: (0, C.jsx)(`span`, {
        className: `text-3xl`,
        children: `🗺️`
      })
    })
  }),
  T = `https://bhunakasha.mahabhumi.gov.in/`,
  E = `w-full px-3 py-3 rounded-xl border border-border bg-card text-foreground text-sm outline-none focus:border-primary transition-colors`;

function D({
  district: e,
  village: t,
  onVillageChange: n,
  initialSurvey: r = ``,
  resolved: i,
  onResolved: o,
  area712: s,
  onArea712Change: c,
  onFallbackToDraw: u
}) {
  let {
    t: d
  } = a(), [f, p] = (0, v.useState)(r), [m, h] = (0, v.useState)(``), [g, y] = (0, v.useState)(`idle`), [b, D] = (0, v.useState)(``), O = x(f), k = !!e && !!t.trim() && S(O) && g !== `loading`;

  function A() {
    i && o(null), g === `error` && y(`idle`)
  }
  async function j() {
    if (k) {
      y(`loading`), D(``);
      try {
        let n = new URLSearchParams({
          district: e,
          village: t.trim(),
          survey: O
        });
        m.trim() && n.set(`taluka`, m.trim());
        let r = await fetch(`/api/land-record?${n.toString()}`),
          i = await r.json().catch(() => ({}));
        if (r.ok && i?.data) {
          o(i.data), y(`idle`);
          return
        }
        y(`error`);
        let errMsg = i?.reason === `NOT_CONFIGURED` || i?.error === `NOT_CONFIGURED` ? `Land records unconfigured. Switching to satellite map.` : i?.error === `NOT_FOUND` ? d(`onboarding.surveyNotFound`) : d(`onboarding.surveyUnreachable`);
        D(errMsg);
        if (typeof S === 'function') {
          setTimeout(() => S(`map`), 800);
        }
      } catch {
        y(`error`), D(d(`onboarding.surveyUnreachable`))
      }
    }
  }
  return (0, C.jsxs)(`div`, {
    className: `space-y-3`,
    children: [(0, C.jsx)(`div`, {
      className: `rounded-xl bg-primary/5 border border-primary/20 p-3 text-xs text-muted-foreground`,
      children: d(`onboarding.surveySubtitle`)
    }), (0, C.jsxs)(`div`, {
      children: [(0, C.jsxs)(`label`, {
        htmlFor: `survey-village`,
        className: `text-xs font-medium text-muted-foreground block mb-1`,
        children: [d(`onboarding.villageLabel`), ` *`]
      }), (0, C.jsx)(`input`, {
        id: `survey-village`,
        type: `text`,
        value: t,
        onChange: e => {
          n(e.target.value), A()
        },
        placeholder: `e.g. Ausa`,
        className: E
      })]
    }), (0, C.jsxs)(`div`, {
      className: `grid grid-cols-2 gap-3`,
      children: [(0, C.jsxs)(`div`, {
        children: [(0, C.jsx)(`label`, {
          htmlFor: `survey-taluka`,
          className: `text-xs font-medium text-muted-foreground block mb-1`,
          children: d(`onboarding.talukaLabel`)
        }), (0, C.jsx)(`input`, {
          id: `survey-taluka`,
          type: `text`,
          value: m,
          onChange: e => {
            h(e.target.value), A()
          },
          className: E
        })]
      }), (0, C.jsxs)(`div`, {
        children: [(0, C.jsxs)(`label`, {
          htmlFor: `survey-number`,
          className: `text-xs font-medium text-muted-foreground block mb-1`,
          children: [d(`onboarding.surveyNumberLabel`), ` *`]
        }), (0, C.jsx)(`input`, {
          id: `survey-number`,
          type: `text`,
          inputMode: `text`,
          autoComplete: `off`,
          value: f,
          onChange: e => {
            p(e.target.value), A()
          },
          onKeyDown: e => e.key === `Enter` && j(),
          placeholder: d(`onboarding.surveyNumberHint`),
          className: E
        })]
      })]
    }), (0, C.jsx)(_, {
      id: `fetch-survey-btn`,
      onClick: j,
      disabled: !k,
      className: `w-full bg-primary text-primary-foreground hover:bg-primary/90`,
      children: d(g === `loading` ? `onboarding.surveyFetching` : `onboarding.surveyFetch`)
    }), (0, C.jsxs)(_, {
      id: `open-bhunakasha-btn`,
      type: `button`,
      variant: `outline`,
      disabled: !t.trim(),
      onClick: () => window.open(T, `_blank`, `noopener,noreferrer`),
      className: `w-full`,
      children: [`🗺️ `, d(`onboarding.openBhunakasha`)]
    }), (0, C.jsx)(`p`, {
      className: `text-[11px] text-muted-foreground -mt-1`,
      children: d(`onboarding.bhunakashaHint`)
    }), (0, C.jsxs)(`div`, {
      children: [(0, C.jsx)(`label`, {
        htmlFor: `area-712`,
        className: `text-xs font-medium text-muted-foreground block mb-1`,
        children: d(`onboarding.area712Label`)
      }), (0, C.jsx)(`input`, {
        id: `area-712`,
        type: `number`,
        inputMode: `decimal`,
        step: `0.01`,
        min: `0`,
        value: s,
        onChange: e => c(e.target.value),
        placeholder: d(`onboarding.area712Hint`),
        className: E
      })]
    }), g === `error` && (0, C.jsxs)(`div`, {
      className: `rounded-xl border border-destructive/40 bg-destructive/5 p-3 text-xs space-y-2`,
      role: `alert`,
      children: [(0, C.jsx)(`p`, {
        className: `text-foreground`,
        children: b
      }), (0, C.jsxs)(`button`, {
        type: `button`,
        onClick: u,
        className: `text-primary font-semibold underline underline-offset-2 cursor-pointer`,
        children: [d(`onboarding.tabDraw`), ` →`]
      })]
    }), i && (0, C.jsxs)(`div`, {
      className: `space-y-2`,
      children: [(0, C.jsx)(w, {
        positions: l(i.polygon)
      }), (0, C.jsxs)(`div`, {
        className: `rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-3 text-xs space-y-1.5`,
        children: [(0, C.jsxs)(`p`, {
          className: `font-semibold text-emerald-700`,
          children: [`✅ `, d(`onboarding.surveyFound`)]
        }), (0, C.jsxs)(`div`, {
          className: `flex justify-between`,
          children: [(0, C.jsx)(`span`, {
            className: `text-muted-foreground`,
            children: d(`onboarding.surveyNoShort`)
          }), (0, C.jsx)(`span`, {
            className: `font-semibold`,
            children: i.surveyNumber
          })]
        }), (0, C.jsxs)(`div`, {
          className: `flex justify-between`,
          children: [(0, C.jsx)(`span`, {
            className: `text-muted-foreground`,
            children: d(`onboarding.villageLabel`)
          }), (0, C.jsxs)(`span`, {
            className: `font-semibold`,
            children: [i.village, `, `, i.district]
          })]
        }), (0, C.jsxs)(`div`, {
          className: `flex justify-between`,
          children: [(0, C.jsx)(`span`, {
            className: `text-muted-foreground`,
            children: d(`onboarding.surveyArea`)
          }), (0, C.jsxs)(`span`, {
            className: `font-semibold`,
            children: [i.areaHectares, ` ha`]
          })]
        }), i.source === `demo-simulated` && (0, C.jsxs)(`p`, {
          className: `text-[11px] text-amber-700 pt-1`,
          children: [`⚠️ `, d(`onboarding.surveySimulated`)]
        })]
      })]
    })]
  })
}
var O = s(() => o(() => import(`./FieldLocationPicker-BZaXzrNX.js`), __vite__mapDeps([5, 1, 2, 3, 4, 6, 7, 8])), {
    ssr: !1,
    loading: () => (0, C.jsxs)(`div`, {
      className: `h-64 bg-muted/40 rounded-xl flex flex-col items-center justify-center p-4 text-center animate-pulse border border-border`,
      children: [(0, C.jsx)(`span`, {
        className: `text-3xl mb-1`,
        children: `🗺️`
      }), (0, C.jsx)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: `Loading interactive field map...`
      })]
    })
  }),
  k = [{
    id: `soybean`,
    label: `Soybean`,
    labelMr: `सोयाबीन`,
    labelHi: `सोयाबीन`,
    icon: `🌿`
  }, {
    id: `sugarcane`,
    label: `Sugarcane`,
    labelMr: `ऊस`,
    labelHi: `गन्ना`,
    icon: `🎋`
  }, {
    id: `wheat`,
    label: `Wheat`,
    labelMr: `गहू`,
    labelHi: `गेहूं`,
    icon: `🌾`
  }, {
    id: `cotton`,
    label: `Cotton`,
    labelMr: `कापूस`,
    labelHi: `कपास`,
    icon: `🪴`
  }, {
    id: `onion`,
    label: `Onion`,
    labelMr: `कांदा`,
    labelHi: `प्याज`,
    icon: `🧅`
  }, {
    id: `tur`,
    label: `Tur (Pigeon Pea)`,
    labelMr: `तूर`,
    labelHi: `अरहर / तूर`,
    icon: `🫘`
  }, {
    id: `jowar`,
    label: `Jowar`,
    labelMr: `ज्वारी`,
    labelHi: `ज्वार`,
    icon: `🌽`
  }],
  A = [`Latur`, `Nanded`, `Osmanabad`, `Solapur`, `Sangli`, `Satara`, `Kolhapur`, `Pune`, `Ahmednagar`, `Nashik`, `Aurangabad`, `Jalna`, `Beed`, `Parbhani`, `Hingoli`, `Buldhana`, `Washim`, `Yavatmal`];

function j() {
  let e = r(),
    {
      t,
      locale: n
    } = a(),
    {
      user: o
    } = i(),
    [s, l] = (0, v.useState)(1),
    [y, b] = (0, v.useState)({
      crop: ``,
      state: `Maharashtra`,
      district: ``,
      village: ``,
      lat: 18.2333,
      lng: 76.7167,
      fieldGeoJson: c(18.2333, 76.7167),
      areaHectares: `3.5`,
      sowingDate: `${new Date().getFullYear()}-06-20`,
      soilType: `black`,
      irrigationType: `rainfed`,
      inputCostPerHa: `18000`,
      landRecord: null,
      area712: ``
    }),
    [x, S] = (0, v.useState)(`survey`);

  function w(e, t) {
    b(n => {
      let r = {
        ...n,
        [e]: t
      };
      if (e === `district` && typeof t == `string` && f[t]) {
        let e = f[t];
        r.lat = e.lat, r.lng = e.lng, r.fieldGeoJson = c(e.lat, e.lng), n.landRecord && n.landRecord.district !== t && (r.landRecord = null)
      }
      return e === `crop` && typeof t == `string` && m[t] && (r.inputCostPerHa = String(m[t])), r
    })
  }

  function T(e) {
    b(t => ({
      ...t,
      lat: e.lat,
      lng: e.lng,
      fieldGeoJson: e.polygon,
      areaHectares: e.areaHectares > 0 ? String(e.areaHectares) : t.areaHectares
    }))
  }

  function E(e) {
    b(t => e ? {
      ...t,
      landRecord: e,
      lat: e.centroid.lat,
      lng: e.centroid.lng,
      fieldGeoJson: e.polygon,
      areaHectares: t.area712 || String(e.areaHectares)
    } : {
      ...t,
      landRecord: null
    })
  }

  function j(e) {
    b(t => ({
      ...t,
      area712: e,
      ...e ? {
        areaHectares: e
      } : {}
    }))
  }

  function M() {
    return s === 1 ? !!y.crop : s === 2 ? !!y.district : s === 3 ? x === `survey` ? (!!y.landRecord || (!!y.lat && !!y.lng)) : !!y.lat && !!y.lng && !!y.fieldGeoJson : s !== 4 || !!y.areaHectares && !!y.sowingDate
  }
  async function N() {
    let t = parseFloat(y.areaHectares) || 3.5,
      {
        landRecord: n,
        area712: r,
        ...i
      } = y,
      a = x === `survey` && !!n,
      s = {
        ...i,
        ...a ? {
          surveyNumber: n.surveyNumber,
          taluka: n.taluka,
          landRecordSource: n.source
        } : {},
        areaHectares: t,
        inputCostPerHa: parseFloat(y.inputCostPerHa) || 18e3,
        inputCosts: parseFloat(y.inputCostPerHa) || 18e3,
        id: `farm-${Date.now()}`,
        userId: o?.id || `local-user`,
        name: y.village ? `${y.village} Farm` : `My Farm`,
        commodity: y.crop,
        createdAt: new Date().toISOString()
      };
    d(s), e.push(`/dashboard`)
  }
  return (0, C.jsxs)(`div`, {
    className: `min-h-screen bg-background flex flex-col max-w-md mx-auto px-4 py-6`,
    children: [(0, C.jsxs)(`div`, {
      className: `mb-6`,
      children: [(0, C.jsxs)(`div`, {
        className: `flex items-center justify-between mb-4`,
        children: [(0, C.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [(0, C.jsx)(`span`, {
            className: `text-2xl`,
            children: `🌾`
          }), (0, C.jsx)(`h1`, {
            className: `text-xl font-bold text-primary`,
            style: {
              fontFamily: `Outfit, sans-serif`
            },
            children: `AgriIntel`
          })]
        }), (0, C.jsx)(`span`, {
          className: `text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium`,
          children: t(`common.appName`)
        })]
      }), (0, C.jsx)(`h2`, {
        className: `text-2xl font-bold mb-1`,
        style: {
          fontFamily: `Outfit, sans-serif`
        },
        children: t(`onboarding.title`)
      }), (0, C.jsxs)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: [`Step `, s, ` of `, 5]
      }), (0, C.jsx)(`div`, {
        className: `flex gap-1.5 mt-3`,
        children: Array.from({
          length: 5
        }).map((e, t) => (0, C.jsx)(`div`, {
          className: u(`flex-1 h-1.5 rounded-full transition-all duration-300`, t < s ? `bg-primary` : `bg-muted`)
        }, t))
      })]
    }), s === 1 && (0, C.jsxs)(`div`, {
      className: `space-y-3 flex-1`,
      children: [(0, C.jsxs)(`div`, {
        children: [(0, C.jsx)(`p`, {
          className: `text-base font-semibold`,
          children: t(`onboarding.cropLabel`)
        }), (0, C.jsx)(`p`, {
          className: `text-xs text-muted-foreground mt-0.5`,
          children: `Select your primary seasonal crop`
        })]
      }), (0, C.jsx)(`div`, {
        className: `grid grid-cols-2 gap-3`,
        children: k.map(e => {
          let t = n === `mr` ? e.labelMr : n === `hi` ? e.labelHi : e.label;
          return (0, C.jsxs)(`button`, {
            id: `crop-${e.id}`,
            onClick: () => w(`crop`, e.id),
            className: u(`p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer`, y.crop === e.id ? `border-primary bg-primary/10 shadow-sm` : `border-border bg-card hover:border-primary/40`),
            children: [(0, C.jsx)(`span`, {
              className: `text-2xl block mb-1`,
              children: e.icon
            }), (0, C.jsx)(`p`, {
              className: `text-sm font-semibold`,
              children: e.label
            }), (0, C.jsx)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: t
            })]
          }, e.id)
        })
      })]
    }), s === 2 && (0, C.jsxs)(`div`, {
      className: `space-y-4 flex-1`,
      children: [(0, C.jsxs)(`div`, {
        children: [(0, C.jsx)(`p`, {
          className: `text-base font-semibold`,
          children: t(`onboarding.step2`)
        }), (0, C.jsx)(`p`, {
          className: `text-xs text-muted-foreground mt-0.5`,
          children: `Choose your district in Maharashtra`
        })]
      }), (0, C.jsxs)(`div`, {
        children: [(0, C.jsx)(`label`, {
          htmlFor: `district`,
          className: `text-xs font-medium text-muted-foreground block mb-1`,
          children: t(`onboarding.districtLabel`)
        }), (0, C.jsxs)(`select`, {
          id: `district`,
          value: y.district,
          onChange: e => w(`district`, e.target.value),
          className: `w-full px-3 py-3 rounded-xl border border-border bg-card text-foreground text-sm outline-none focus:border-primary transition-colors`,
          children: [(0, C.jsx)(`option`, {
            value: ``,
            children: `Select District`
          }), A.map(e => (0, C.jsx)(`option`, {
            value: e,
            children: e
          }, e))]
        })]
      }), (0, C.jsxs)(`div`, {
        children: [(0, C.jsxs)(`label`, {
          htmlFor: `village`,
          className: `text-xs font-medium text-muted-foreground block mb-1`,
          children: [t(`onboarding.villageLabel`), ` (Optional)`]
        }), (0, C.jsx)(`input`, {
          id: `village`,
          type: `text`,
          placeholder: `e.g. Ausa, Renapur`,
          value: y.village,
          onChange: e => w(`village`, e.target.value),
          className: `w-full px-3 py-3 rounded-xl border border-border bg-card text-foreground text-sm outline-none focus:border-primary transition-colors`
        })]
      })]
    }), s === 3 && (0, C.jsxs)(`div`, {
      className: `space-y-3 flex-1`,
      children: [(0, C.jsxs)(`div`, {
        children: [(0, C.jsx)(`p`, {
          className: `text-base font-semibold`,
          children: t(`onboarding.surveyTitle`)
        }), (0, C.jsx)(`p`, {
          className: `text-xs text-muted-foreground mt-0.5`,
          children: x === `survey` ? t(`onboarding.surveyIntro`) : `Use GPS, tap map to place your pin, or draw your exact field boundaries.`
        })]
      }), (0, C.jsx)(`div`, {
        className: `flex rounded-xl bg-muted p-1 gap-1`,
        role: `tablist`,
        children: [`survey`, `draw`].map(e => (0, C.jsx)(`button`, {
          id: `boundary-mode-${e}`,
          type: `button`,
          role: `tab`,
          "aria-selected": x === e,
          onClick: () => S(e),
          className: u(`flex-1 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer`, x === e ? `bg-card text-foreground shadow-sm` : `text-muted-foreground hover:text-foreground`),
          children: e === `survey` ? `📄 ${t(`onboarding.tabSurvey`)}` : `✏️ ${t(`onboarding.tabDraw`)}`
        }, e))
      }), x === `survey` ? (0, C.jsx)(D, {
        district: y.district,
        village: y.village,
        onVillageChange: e => w(`village`, e),
        resolved: y.landRecord,
        onResolved: E,
        area712: y.area712,
        onArea712Change: j,
        onFallbackToDraw: () => S(`draw`)
      }) : (0, C.jsx)(O, {
        initialLat: y.lat,
        initialLng: y.lng,
        initialPolygon: y.fieldGeoJson,
        district: y.district,
        onLocationChange: T
      })]
    }), s === 4 && (0, C.jsxs)(`div`, {
      className: `space-y-4 flex-1`,
      children: [(0, C.jsxs)(`div`, {
        children: [(0, C.jsx)(`p`, {
          className: `text-base font-semibold`,
          children: t(`onboarding.step3`)
        }), (0, C.jsx)(`p`, {
          className: `text-xs text-muted-foreground mt-0.5`,
          children: `Enter sowing dates and agricultural practices`
        })]
      }), (0, C.jsxs)(`div`, {
        children: [(0, C.jsx)(`label`, {
          htmlFor: `area`,
          className: `text-xs font-medium text-muted-foreground block mb-1`,
          children: t(`onboarding.areaLabel`)
        }), (0, C.jsx)(`input`, {
          id: `area`,
          type: `number`,
          step: `0.1`,
          min: `0.1`,
          value: y.areaHectares,
          onChange: e => w(`areaHectares`, e.target.value),
          className: `w-full px-3 py-3 rounded-xl border border-border bg-card text-foreground text-sm outline-none focus:border-primary transition-colors`
        })]
      }), (0, C.jsxs)(`div`, {
        children: [(0, C.jsx)(`label`, {
          htmlFor: `sowingDate`,
          className: `text-xs font-medium text-muted-foreground block mb-1`,
          children: t(`onboarding.sowingDateLabel`)
        }), (0, C.jsx)(`input`, {
          id: `sowingDate`,
          type: `date`,
          value: y.sowingDate,
          onChange: e => w(`sowingDate`, e.target.value),
          className: `w-full px-3 py-3 rounded-xl border border-border bg-card text-foreground text-sm outline-none focus:border-primary transition-colors`
        })]
      }), (0, C.jsxs)(`div`, {
        className: `grid grid-cols-2 gap-3`,
        children: [(0, C.jsxs)(`div`, {
          children: [(0, C.jsx)(`label`, {
            htmlFor: `soil`,
            className: `text-xs font-medium text-muted-foreground block mb-1`,
            children: t(`onboarding.soilTypeLabel`)
          }), (0, C.jsxs)(`select`, {
            id: `soil`,
            value: y.soilType,
            onChange: e => w(`soilType`, e.target.value),
            className: `w-full px-3 py-2.5 rounded-xl border border-border bg-card text-foreground text-xs outline-none focus:border-primary`,
            children: [(0, C.jsx)(`option`, {
              value: `black`,
              children: t(`onboarding.black`)
            }), (0, C.jsx)(`option`, {
              value: `red`,
              children: t(`onboarding.red`)
            }), (0, C.jsx)(`option`, {
              value: `alluvial`,
              children: t(`onboarding.alluvial`)
            }), (0, C.jsx)(`option`, {
              value: `loamy`,
              children: t(`onboarding.loamy`)
            }), (0, C.jsx)(`option`, {
              value: `sandy`,
              children: t(`onboarding.sandy`)
            })]
          })]
        }), (0, C.jsxs)(`div`, {
          children: [(0, C.jsx)(`label`, {
            htmlFor: `irrigation`,
            className: `text-xs font-medium text-muted-foreground block mb-1`,
            children: t(`onboarding.irrigationLabel`)
          }), (0, C.jsxs)(`select`, {
            id: `irrigation`,
            value: y.irrigationType,
            onChange: e => w(`irrigationType`, e.target.value),
            className: `w-full px-3 py-2.5 rounded-xl border border-border bg-card text-foreground text-xs outline-none focus:border-primary`,
            children: [(0, C.jsx)(`option`, {
              value: `rainfed`,
              children: t(`onboarding.rainfed`)
            }), (0, C.jsx)(`option`, {
              value: `irrigated`,
              children: t(`onboarding.irrigated`)
            }), (0, C.jsx)(`option`, {
              value: `partial`,
              children: t(`onboarding.partial`)
            })]
          })]
        })]
      }), (0, C.jsxs)(`div`, {
        children: [(0, C.jsx)(`label`, {
          htmlFor: `inputCost`,
          className: `text-xs font-medium text-muted-foreground block mb-1`,
          children: t(`onboarding.inputCostLabel`)
        }), (0, C.jsx)(`input`, {
          id: `inputCost`,
          type: `number`,
          step: `500`,
          placeholder: `18000`,
          value: y.inputCostPerHa,
          onChange: e => w(`inputCostPerHa`, e.target.value),
          className: `w-full px-3 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm outline-none focus:border-primary`
        })]
      })]
    }), s === 5 && (0, C.jsxs)(`div`, {
      className: `space-y-4 flex-1`,
      children: [(0, C.jsxs)(`div`, {
        className: `text-center py-2`,
        children: [(0, C.jsx)(`span`, {
          className: `text-4xl block mb-2`,
          children: `🌱`
        }), (0, C.jsx)(`p`, {
          className: `text-lg font-bold`,
          style: {
            fontFamily: `Outfit, sans-serif`
          },
          children: t(`onboarding.step5`)
        }), (0, C.jsx)(`p`, {
          className: `text-xs text-muted-foreground mt-1`,
          children: t(`onboarding.doneMessage`)
        })]
      }), (0, C.jsx)(g, {
        className: `border border-border bg-card/60`,
        children: (0, C.jsxs)(h, {
          className: `p-4 space-y-3 text-xs`,
          children: [(0, C.jsxs)(`div`, {
            className: `flex justify-between border-b border-border/50 pb-2`,
            children: [(0, C.jsx)(`span`, {
              className: `text-muted-foreground`,
              children: `Crop`
            }), (0, C.jsx)(`span`, {
              className: `font-semibold`,
              children: p(y.crop, n)
            })]
          }), (0, C.jsxs)(`div`, {
            className: `flex justify-between border-b border-border/50 pb-2`,
            children: [(0, C.jsx)(`span`, {
              className: `text-muted-foreground`,
              children: `Location`
            }), (0, C.jsxs)(`span`, {
              className: `font-semibold`,
              children: [y.village ? `${y.village}, ` : ``, y.district, `, `, y.state]
            })]
          }), (0, C.jsxs)(`div`, {
            className: `flex justify-between border-b border-border/50 pb-2`,
            children: [(0, C.jsx)(`span`, {
              className: `text-muted-foreground`,
              children: `Coordinates`
            }), (0, C.jsxs)(`span`, {
              className: `font-mono text-[11px]`,
              children: [y.lat.toFixed(4), `, `, y.lng.toFixed(4)]
            })]
          }), x === `survey` && y.landRecord && (0, C.jsxs)(`div`, {
            className: `flex justify-between border-b border-border/50 pb-2`,
            children: [(0, C.jsx)(`span`, {
              className: `text-muted-foreground`,
              children: t(`onboarding.surveyNoShort`)
            }), (0, C.jsx)(`span`, {
              className: `font-semibold`,
              children: y.landRecord.surveyNumber
            })]
          }), (0, C.jsxs)(`div`, {
            className: `flex justify-between border-b border-border/50 pb-2`,
            children: [(0, C.jsx)(`span`, {
              className: `text-muted-foreground`,
              children: `Field Boundary`
            }), (0, C.jsxs)(`span`, {
              className: `font-semibold text-emerald-600`,
              children: [y.fieldGeoJson.coordinates[0].length - 1, ` vertices (GeoJSON Polygon)`]
            })]
          }), (0, C.jsxs)(`div`, {
            className: `flex justify-between border-b border-border/50 pb-2`,
            children: [(0, C.jsx)(`span`, {
              className: `text-muted-foreground`,
              children: `Calculated Area`
            }), (0, C.jsxs)(`span`, {
              className: `font-semibold`,
              children: [y.areaHectares, ` ha`]
            })]
          }), (0, C.jsxs)(`div`, {
            className: `flex justify-between border-b border-border/50 pb-2`,
            children: [(0, C.jsx)(`span`, {
              className: `text-muted-foreground`,
              children: `Sowing Date`
            }), (0, C.jsx)(`span`, {
              className: `font-semibold`,
              children: y.sowingDate
            })]
          }), (0, C.jsxs)(`div`, {
            className: `flex justify-between`,
            children: [(0, C.jsx)(`span`, {
              className: `text-muted-foreground`,
              children: `Soil & Irrigation`
            }), (0, C.jsxs)(`span`, {
              className: `font-semibold capitalize`,
              children: [y.soilType, ` · `, y.irrigationType]
            })]
          })]
        })
      })]
    }), (0, C.jsxs)(`div`, {
      className: `flex gap-3 mt-6 pt-4 border-t border-border`,
      children: [s > 1 && (0, C.jsx)(_, {
        variant: `outline`,
        onClick: () => l(e => e - 1),
        className: `flex-1`,
        children: t(`common.back`)
      }), s < 5 ? (0, C.jsx)(_, {
        id: `step-${s}-next`,
        onClick: () => l(e => e + 1),
        disabled: !M(),
        className: `flex-1 bg-primary text-primary-foreground hover:bg-primary/90`,
        children: t(`common.next`)
      }) : (0, C.jsx)(_, {
        id: `finish-setup-btn`,
        onClick: N,
        className: `flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold`,
        children: t(`common.submit`)
      })]
    })]
  })
}
var M = j;
export {
  M as component
};