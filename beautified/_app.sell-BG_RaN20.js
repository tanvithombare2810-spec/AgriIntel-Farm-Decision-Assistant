import {
  a as e,
  n as t,
  t as n
} from "./jsx-runtime-B-hcVAMW.js";
import {
  o as r
} from "./index-BOVbX_32.js";
import {
  t as i
} from "./cn-B9URw_CD.js";
import {
  i as a,
  r as o
} from "./farm-storage-BBPkHbBE.js";
import {
  t as s
} from "./link-CPEWifot.js";
import {
  i as c,
  n as l,
  r as u,
  t as d
} from "./card-BDHQYkqg.js";
import {
  r as f
} from "./format-C70v0cF0.js";
var p = e(t(), 1),
  m = {
    soybean: {
      en: `Soybean`,
      mr: `सोयाबीन`,
      hi: `सोयाबीन`
    },
    wheat: {
      en: `Wheat`,
      mr: `गहू`,
      hi: `गेहूं`
    },
    cotton: {
      en: `Cotton`,
      mr: `कापूस`,
      hi: `कपास`
    },
    onion: {
      en: `Onion`,
      mr: `कांदा`,
      hi: `प्याज`
    },
    tur: {
      en: `Tur`,
      mr: `तूर`,
      hi: `अरहर / तूर`
    },
    jowar: {
      en: `Jowar`,
      mr: `ज्वारी`,
      hi: `ज्वार`
    },
    sugarcane: {
      en: `Sugarcane`,
      mr: `ऊस`,
      hi: `गन्ना`
    }
  };

function h(e, t) {
  let n = m[(e || `soybean`).toLowerCase()];
  return n ? n[t] || n.en : e.charAt(0).toUpperCase() + e.slice(1)
}

function g(e, t, n = `soybean`) {
  if (t === `en`) return e;
  let r = h(n, t);
  if (/price trend is relatively stable/i.test(e) || /prices are relatively stable/i.test(e)) return t === `mr` ? `${r}चे भाव सध्या तुलनेने स्थिर आहेत — थोडी वाट पाहण्याची संधी आहे` : `${r} के भाव अभी अपेक्षाकृत स्थिर हैं — प्रतीक्षा करने का मध्यम अवसर है`;
  if (/prices have softened recently/i.test(e)) {
    let n = e.match(/\(([-\d.]+)%\)/),
      i = n ? n[1] : ``;
    return t === `mr` ? `${r}चे भाव नुकतेच थोडे घसरले आहेत${i?` (${i}%)`:``} — लवकर विक्री केल्याने पुढील तोट्याची जोखीम कमी होते` : `${r} की कीमतों में हाल ही में गिरावट आई है${i?` (${i}%)`:``} — जल्दी बेचने से नुकसान का जोखिम कम होता है`
  }
  if (/prices are rising/i.test(e)) {
    let n = e.match(/\(([-\d.]+)%\)/),
      i = n ? n[1] : ``;
    return t === `mr` ? `${r}चे भाव वाढत आहेत${i?` (${i}%)`:``} — माल रोखून ठेवल्यास चांगला नफा मिळू शकतो` : `${r} की कीमतें बढ़ रही हैं${i?` (${i}%)`:``} — माल रोके रखने से अधिक लाभ की संभावना है`
  }
  if (/mandi arrivals are stable/i.test(e) || /arrivals are stable/i.test(e)) return t === `mr` ? `मंडईतील आवक स्थिर आहे — बाजारात पुरवठ्याचा तत्काळ कोणताही दबाव नाही` : `मंडी में आवक स्थिर है — बाजार में आपूर्ति का कोई तत्काल दबाव नहीं है`;
  if (/arrivals at mandis are rising/i.test(e) || /arrivals are rising/i.test(e)) return t === `mr` ? `मंडईत आवक वाढत आहे — पुढील २ आठवड्यांत पुरवठा वाढल्याने भाव थोडे कमी होऊ शकतात` : `मंडी में आवक बढ़ रही है — अगले 2 हफ्तों में आपूर्ति बढ़ने से भाव थोड़े नरम हो सकते हैं`;
  if (/market arrivals are low/i.test(e) || /arrivals are low/i.test(e)) return t === `mr` ? `मंडईतील आवक कमी आहे — पुरवठा कमी असल्याने भावाला चांगला आधार मिळू शकतो` : `मंडी में आवक कम है — कम आपूर्ति से कीमतों को समर्थन मिल सकता है`;
  if (/weather outlook is favorable/i.test(e) || /favorable for the next/i.test(e)) return t === `mr` ? `पुढील ७ दिवसांचे हवामान अनुकूल आहे — वाहतूक करण्यासाठी चांगला कालावधी आहे` : `अगले 7 दिनों के लिए मौसम अनुकूल है — परिवहन के लिए अच्छा समय है`;
  if (/some rain expected/i.test(e)) return t === `mr` ? `या आठवड्यात पावसाची शक्यता आहे — वाहतुकीचे नियोजन काळजीपूर्वक करा` : `इस सप्ताह बारिश की संभावना है — परिवहन का समय सावधानी से तय करें`;
  if (/heavy rain forecast/i.test(e)) return t === `mr` ? `पुढील ५ दिवसांत मुसळधार पावसाचा अंदाज आहे — काढणी किंवा वाहतुकीत अडथळा येऊ शकतो` : `अगले 5 दिनों में भारी बारिश का अनुमान है — कटाई या परिवहन में बाधा आ सकती है`;
  let i = e.match(/(.+) offers the best estimated net price after transport — (₹[\d,]+)\/qtl/i);
  if (i) {
    let e = i[1]?.trim() || ``,
      n = i[2]?.trim() || ``;
    return t === `mr` ? `वाहतूक खर्च वजा जाता ${e} मंडईत सर्वोत्तम अंदाजित निव्वळ भाव (${n}/क्विंटल) मिळतो` : `परिवहन खर्च घटाने के बाद ${e} मंडी में सबसे अच्छा अनुमानित शुद्ध भाव (${n}/क्विंटल) मिल रहा है`
  }
  return /selling now locks in/i.test(e) || /selling now/i.test(e) ? t === `mr` ? `आत्ताच विक्री केल्याने चालू चांगला बाजारभाव सुरक्षित होतो आणि माल साठवण्याचा धोका टळतो` : `अभी बेचने से मौजूदा अच्छा भाव पक्का होता है और माल रोके रखने का जोखिम नहीं रहता` : /waiting ~7 days/i.test(e) || /wait ~7 days/i.test(e) ? t === `mr` ? `सुमारे ७ दिवस थांबल्यास वाहतूक व साठवणूक जोखीम विचारात घेऊनही जास्त निव्वळ नफा मिळण्याचा अंदाज आहे` : `लगभग 7 दिन रुकने पर परिवहन और जोखिम के बावजूद अधिक शुद्ध लाभ मिलने का अनुमान है` : /14-day hold/i.test(e) || /wait ~14 days/i.test(e) ? t === `mr` ? `हवामान आणि बाजार स्थिर राहिल्यास १४ दिवस थांबल्यास जास्तीत जास्त फायदा होण्याची शक्यता आहे` : `मौसम और बाजार स्थिर रहने पर 14 दिन रुकने से अधिकतम लाभ की संभावना है` : e
}
var _ = n();

function v({
  level: e,
  locale: t
}) {
  let n = {
      low: `bg-emerald-100 text-emerald-700 border-emerald-300`,
      moderate: `bg-amber-100 text-amber-700 border-amber-300`,
      high: `bg-red-100 text-red-700 border-red-300`
    },
    r = {
      low: {
        en: `Low Risk`,
        mr: `कमी जोखीम`,
        hi: `कम जोखिम`
      },
      moderate: {
        en: `Moderate Risk`,
        mr: `मध्यम जोखीम`,
        hi: `मध्यम जोखिम`
      },
      high: {
        en: `Higher Risk`,
        mr: `अधिक जोखीम`,
        hi: `अधिक जोखिम`
      }
    },
    i = r[e]?.[t] ?? r.moderate[t];
  return (0, _.jsx)(`span`, {
    className: `text-xs font-semibold px-2 py-0.5 rounded-full border ${n[e]??n.moderate}`,
    children: i
  })
}

function y({
  level: e,
  locale: t
}) {
  let n = {
      high: `bg-blue-100 text-blue-700`,
      moderate: `bg-slate-100 text-slate-600`,
      low: `bg-orange-100 text-orange-700`
    },
    r = t === `mr` ? e === `high` ? `उच्च विश्वासार्हता` : e === `low` ? `कमी विश्वासार्हता` : `मध्यम विश्वासार्हता` : t === `hi` ? e === `high` ? `उच्च विश्वसनीयता` : e === `low` ? `कम विश्वसनीयता` : `मध्यम विश्वसनीयता` : `${e.charAt(0).toUpperCase()+e.slice(1)} confidence`;
  return (0, _.jsx)(`span`, {
    className: `text-xs font-medium px-2 py-0.5 rounded-full ${n[e]??n.moderate}`,
    children: r
  })
}

function b({
  label: e,
  value: t,
  bold: n,
  negative: r
}) {
  return (0, _.jsxs)(`div`, {
    className: i(`flex justify-between items-center py-1.5`, n && `font-semibold border-t border-border pt-2 mt-1`),
    children: [(0, _.jsx)(`span`, {
      className: i(`text-sm`, n ? `text-foreground font-bold` : `text-muted-foreground`),
      children: e
    }), (0, _.jsx)(`span`, {
      className: i(`text-sm font-medium`, r ? `text-red-600` : n ? `text-primary text-base font-bold` : `text-foreground`),
      children: t
    })]
  })
}

function x(e) {
  let t = e.totalHarvestQ || 68.25,
    n = e.inputCostTotal || 63e3,
    r = e.nearestMandi || `Latur`,
    i = 4280,
    a = 4451,
    s = 4558,
    c = [{
      window: `now`,
      label: `Sell Now`,
      mandi: r,
      estimatedModalPricePerQuintal: i,
      estimatedGross: Math.round(t * i),
      transportCostTotal: Math.round(t * (r === 'Pune' ? 45 : r === 'Solapur' ? 30 : 18)),
      sellingCostTotal: Math.round(t * i * .02),
      farmCostTotal: n,
      estimatedNet: Math.round(t * i) - Math.round(t * 18) - Math.round(t * i * .02),
      riskLevel: `low`,
      confidence: `high`,
      weatherRisk: `low`,
      priceRiskPct: 2.1
    }, {
      window: `7_days`,
      label: `Wait ~7 Days`,
      mandi: r,
      estimatedModalPricePerQuintal: a,
      estimatedGross: Math.round(t * a),
      transportCostTotal: Math.round(t * (r === 'Pune' ? 45 : r === 'Solapur' ? 30 : 18)),
      sellingCostTotal: Math.round(t * a * .02),
      farmCostTotal: n,
      estimatedNet: Math.round(t * a) - Math.round(t * 18) - Math.round(t * a * .02),
      riskLevel: `moderate`,
      confidence: `high`,
      weatherRisk: `low`,
      priceRiskPct: 4.5
    }, {
      window: `14_days`,
      label: `Wait ~14 Days`,
      mandi: r,
      estimatedModalPricePerQuintal: s,
      estimatedGross: Math.round(t * s),
      transportCostTotal: Math.round(t * (r === 'Pune' ? 45 : r === 'Solapur' ? 30 : 18)),
      sellingCostTotal: Math.round(t * s * .02),
      farmCostTotal: n,
      estimatedNet: Math.round(t * s) - Math.round(t * 18) - Math.round(t * s * .02),
      riskLevel: `moderate`,
      confidence: `moderate`,
      weatherRisk: `low`,
      priceRiskPct: 7.2
    }];
  return {
    farmSeasonId: e.id,
    generatedAt: new Date().toISOString(),
    recommendedWindow: `now`,
    suggestedMandi: r,
    estimatedNetRealization: c[0].estimatedNet,
    riskLevel: `low`,
    confidence: `high`,
    reasons: [`${o(e.crop)} price trend is relatively stable — moderate opportunity to wait`, `Mandi arrivals are stable — no immediate supply-side pressure`, `Weather outlook is favorable for the next 7 days — good transport window`, `${r} offers the best estimated net price after transport — ₹${i}/qtl`, `Selling now locks in current favorable mandi rates and avoids holding risk`],
    scenarios: c,
    source: `demo`
  }
}

function S() {
  let {
    t: e,
    locale: t
  } = r(), [n, m] = (0, p.useState)(`now`), [h, S] = (0, p.useState)(!0), [C, w] = (0, p.useState)(null), [T, E] = (0, p.useState)(null), [D, O] = (0, p.useState)(!0), [k, A] = (0, p.useState)(null), [j, M] = (0, p.useState)(!1), [N, P] = (0, p.useState)(0);
  if ((0, p.useEffect)(() => {
      let e = !1;
      async function t() {
        O(!0);
        let t = a();
        w(t);
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
        };
        try {
          let r = await fetch(`/api/recommendations`, {
            method: `POST`,
            headers: {
              "Content-Type": `application/json`
            },
            body: JSON.stringify(n)
          });
          if (!r.ok) throw Error(`Server returned HTTP ${r.status}`);
          let i = await r.json();
          if (!i.data || !i.data.scenarios || !i.data.scenarios[0]) throw Error(`Incomplete recommendation data received`);
          if (!e) {
            let e = i.data;
            E(e), m(e.recommendedWindow), M(!1), A(null), w(t), i.farmContext?.totalHarvestQ && w(e => e && {
              ...e,
              totalHarvestQ: i.farmContext.totalHarvestQ
            }), O(!1)
          }
        } catch (n) {
          if (console.warn(`[sell-page] Engine API fetch failed; using deterministic fallback:`, n), !e) {
            M(!0);
            let e = x(t);
            E(e), m(e.recommendedWindow), w(t), O(!1)
          }
        }
      }
      t();
      let n = e => {
        e.key === `agriintel_farm` && (O(!0), t())
      };
      return window.addEventListener(`storage`, n), () => {
        e = !0, window.removeEventListener(`storage`, n)
      }
    }, [N]), D) return (0, _.jsxs)(`div`, {
    className: `px-4 pt-4 space-y-4 animate-pulse`,
    children: [(0, _.jsxs)(`div`, {
      children: [(0, _.jsx)(`div`, {
        className: `h-6 w-44 bg-muted rounded mb-1`
      }), (0, _.jsx)(`div`, {
        className: `h-4 w-56 bg-muted/60 rounded`
      })]
    }), (0, _.jsx)(d, {
      className: `border-primary/20 bg-primary/5`,
      children: (0, _.jsxs)(l, {
        className: `pt-4 pb-4 space-y-3`,
        children: [(0, _.jsx)(`div`, {
          className: `h-3 w-20 bg-muted rounded`
        }), (0, _.jsx)(`div`, {
          className: `h-6 w-52 bg-muted rounded`
        }), (0, _.jsx)(`div`, {
          className: `h-4 w-40 bg-muted rounded`
        }), (0, _.jsxs)(`div`, {
          className: `flex gap-2 pt-1`,
          children: [(0, _.jsx)(`div`, {
            className: `h-5 w-16 bg-muted rounded-full`
          }), (0, _.jsx)(`div`, {
            className: `h-5 w-24 bg-muted rounded-full`
          })]
        })]
      })
    })]
  });
  if (k || !T || !T.scenarios || !T.scenarios[0]) return (0, _.jsxs)(`div`, {
    className: `px-4 pt-10 text-center space-y-4`,
    children: [(0, _.jsx)(`span`, {
      className: `text-4xl block`,
      children: `⚠️`
    }), (0, _.jsx)(`h2`, {
      className: `text-lg font-bold`,
      style: {
        fontFamily: `Outfit, sans-serif`
      },
      children: e(`common.error`)
    }), (0, _.jsx)(`p`, {
      className: `text-sm text-muted-foreground max-w-xs mx-auto`,
      children: k || `No recommendation could be generated for this farm profile.`
    }), (0, _.jsxs)(`div`, {
      className: `flex justify-center gap-3 pt-2`,
      children: [(0, _.jsx)(`button`, {
        onClick: () => {
          O(!0), P(e => e + 1)
        },
        className: `px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors`,
        children: e(`common.retry`)
      }), (0, _.jsx)(s, {
        href: `/onboarding`,
        className: `px-4 py-2 border border-border bg-card text-foreground text-sm font-semibold rounded-xl hover:border-primary/40 transition-colors`,
        children: e(`onboarding.title`)
      })]
    })]
  });
  let {
    scenarios: F,
    recommendedWindow: I,
    reasons: L,
    suggestedMandi: R,
    riskLevel: z,
    confidence: B,
    source: V
  } = T, H = F.find(e => e.window === n) ?? F[0], U = C?.totalHarvestQ ?? 68.25, W = C?.crop || `soybean`, G = o(W, t), K = C?.season ?? `Kharif ${new Date().getFullYear()}`, q = t => e(t === `now` ? `sell.sellNow` : t === `7_days` ? `sell.wait7` : `sell.wait14`);
  return (0, _.jsxs)(`div`, {
    className: `px-4 pt-4 space-y-4 pb-24`,
    children: [(0, _.jsxs)(`div`, {
      children: [(0, _.jsx)(`h2`, {
        className: `text-xl font-bold`,
        style: {
          fontFamily: `Outfit, sans-serif`
        },
        children: e(`sell.title`)
      }), (0, _.jsxs)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: [G, ` · `, U, ` `, e(`market.quintals`), ` · `, K]
      })]
    }), (0, _.jsx)(d, {
      className: `border-primary bg-primary/5`,
      children: (0, _.jsx)(l, {
        className: `pt-4 pb-4`,
        children: (0, _.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [(0, _.jsx)(`span`, {
            className: `text-3xl`,
            children: `🎯`
          }), (0, _.jsxs)(`div`, {
            className: `flex-1`,
            children: [(0, _.jsx)(`p`, {
              className: `text-xs font-semibold text-primary uppercase tracking-wide mb-1`,
              children: e(`sell.recommendation`)
            }), (0, _.jsx)(`p`, {
              className: `text-lg font-bold text-foreground leading-snug`,
              children: q(I)
            }), (0, _.jsxs)(`p`, {
              className: `text-sm text-muted-foreground mt-0.5`,
              children: [e(`sell.suggestedMandi`), `: `, (0, _.jsx)(`span`, {
                className: `font-semibold text-foreground`,
                children: R
              })]
            }), (0, _.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-2 mt-2`,
              children: [(0, _.jsx)(v, {
                level: z,
                locale: t
              }), (0, _.jsx)(y, {
                level: B,
                locale: t
              }), (j || V === `demo`) && (0, _.jsx)(`span`, {
                className: `text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300`,
                children: j ? `Offline` : `Unavailable`
              })]
            })]
          })]
        })
      })
    }), (0, _.jsxs)(`div`, {
      children: [(0, _.jsx)(`p`, {
        className: `text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2`,
        children: e(`sell.simulate`)
      }), (0, _.jsx)(`div`, {
        className: `flex gap-2`,
        children: F.map(r => {
          let a = r.window === I,
            o = r.window === n,
            s = q(r.window);
          return (0, _.jsxs)(`button`, {
            id: `scenario-${r.window}`,
            onClick: () => m(r.window),
            className: i(`flex-1 rounded-xl border py-3 px-2 text-center transition-all duration-200 relative`, o ? `border-primary bg-primary/10 shadow-sm` : `border-border bg-card hover:border-primary/40`),
            children: [a && (0, _.jsx)(`span`, {
              className: `absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap`,
              children: e(`common.suggested`)
            }), (0, _.jsx)(`p`, {
              className: `text-[11px] font-semibold text-foreground leading-tight`,
              children: s
            }), (0, _.jsx)(`p`, {
              className: `text-sm font-bold text-primary mt-1`,
              children: f(r.estimatedNet)
            }), (0, _.jsx)(`p`, {
              className: `text-[10px] text-muted-foreground`,
              children: e(`sell.netRealization`)
            }), (0, _.jsx)(`div`, {
              className: `mt-1.5`,
              children: (0, _.jsx)(v, {
                level: r.riskLevel,
                locale: t
              })
            })]
          }, r.window)
        })
      })]
    }), (0, _.jsxs)(d, {
      children: [(0, _.jsx)(u, {
        className: `pb-2 pt-4`,
        children: (0, _.jsxs)(c, {
          className: `text-base`,
          children: [q(H.window), ` — `, e(`sell.netRealization`)]
        })
      }), (0, _.jsxs)(l, {
        children: [(0, _.jsxs)(`div`, {
          className: `space-y-0`,
          children: [(0, _.jsx)(b, {
            label: e(`sell.estPriceAt`, {
              mandi: H.mandi
            }),
            value: `₹${H.estimatedModalPricePerQuintal.toLocaleString(`en-IN`)}/${e(`market.quintals`)}`
          }), (0, _.jsx)(b, {
            label: `${e(`sell.grossValue`)} (${U} ${e(`market.quintals`)})`,
            value: f(H.estimatedGross)
          }), (0, _.jsx)(b, {
            label: e(`sell.transportCost`),
            value: `− ${f(H.transportCostTotal)}`,
            negative: !0
          }), (0, _.jsx)(b, {
            label: e(`sell.sellingCosts`),
            value: `− ${f(H.sellingCostTotal)}`,
            negative: !0
          }), (0, _.jsx)(b, {
            label: e(`sell.netRealization`),
            value: f(H.estimatedNet),
            bold: !0
          }), (0, _.jsx)(b, {
            label: e(`sell.farmCosts`),
            value: `− ${f(H.farmCostTotal)}`,
            negative: !0
          }), (0, _.jsx)(b, {
            label: e(`sell.estimatedProfit`),
            value: f(H.estimatedNet - H.farmCostTotal),
            bold: !0
          })]
        }), (0, _.jsx)(`p`, {
          className: `text-xs text-muted-foreground italic mt-3`,
          children: e(`sell.disclaimer`)
        })]
      })]
    }), (0, _.jsx)(d, {
      children: (0, _.jsxs)(l, {
        className: `pt-4 pb-4`,
        children: [(0, _.jsxs)(`button`, {
          id: `why-explanation-toggle`,
          onClick: () => S(!h),
          className: `w-full flex items-center justify-between text-left`,
          children: [(0, _.jsxs)(`span`, {
            className: `text-sm font-semibold text-foreground`,
            children: [`💡 `, e(`sell.whyTitle`)]
          }), (0, _.jsx)(`span`, {
            className: `text-muted-foreground text-sm`,
            children: h ? `▲` : `▼`
          })]
        }), h && (0, _.jsx)(`div`, {
          className: `mt-3 space-y-2`,
          children: L.map((e, n) => (0, _.jsxs)(`div`, {
            className: `flex items-start gap-2 text-sm`,
            children: [(0, _.jsxs)(`span`, {
              className: `text-primary font-bold shrink-0`,
              children: [n + 1, `.`]
            }), (0, _.jsx)(`p`, {
              className: `text-muted-foreground leading-snug`,
              children: g(e, t, W)
            })]
          }, n))
        })]
      })
    }), (0, _.jsx)(d, {
      className: `border-dashed border-muted-foreground/30`,
      children: (0, _.jsx)(l, {
        className: `pt-3 pb-3`,
        children: (0, _.jsxs)(`p`, {
          className: `text-xs text-muted-foreground text-center leading-relaxed`,
          children: [`⚠️ `, e(`sell.disclaimer`)]
        })
      })
    }), (0, _.jsx)(`div`, {
      className: `h-2`
    })]
  })
}
var C = S;
export {
  C as component
};