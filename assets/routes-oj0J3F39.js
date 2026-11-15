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
  o as a
} from "./index-BOVbX_32.js";
import {
  i as o
} from "./farm-storage-BBPkHbBE.js";
import {
  t as s
} from "./link-CPEWifot.js";
import {
  n as c,
  t as l
} from "./card-BDHQYkqg.js";
import {
  t as u
} from "./LanguageSwitcher-BeIIurXB.js";
var d = e(t(), 1),
  f = n();

function p({
  onEnterDemo: e
}) {
  let t = r(),
    {
      t: n
    } = a(),
    {
      enterDemoMode: p,
      isAuthenticated: m,
      user: h
    } = i(),
    [g, _] = (0, d.useState)(null);
  (0, d.useEffect)(() => {
    function e() {
      try {
        _(o())
      } catch {}
    }
    return e(), window.addEventListener(`storage`, e), () => window.removeEventListener(`storage`, e)
  }, []);
  let v = () => {
      p(), e ? e() : t.push(`/dashboard`)
    },
    y = [{
      num: `1`,
      title: `Today's Action & Alerts`,
      route: `/dashboard`,
      desc: `Check daily selling recommendation, heavy rain alerts, and prevailing APMC rates.`,
      icon: `🌱`,
      badge: `Step 1`
    }, {
      num: `2`,
      title: `Satellite Field Map & Health`,
      route: `/farm`,
      desc: `Inspect high-res satellite imagery, NDVI crop vigor zones, and ML yield forecasts.`,
      icon: `🗺️`,
      badge: `Step 2`
    }, {
      num: `3`,
      title: `APMC Market Comparison`,
      route: `/market`,
      desc: `Compare Agmarknet mandi modal prices, arrival volumes, and price trends.`,
      icon: `📊`,
      badge: `Step 3`
    }, {
      num: `4`,
      title: `Sell Decision & Net Profit`,
      route: `/sell`,
      desc: `Calculate optimal selling window (Now vs Wait) with transport cost deduction.`,
      icon: `💰`,
      badge: `Step 4`
    }, {
      num: `5`,
      title: `Multilingual Voice AI`,
      route: `/ask`,
      desc: `Ask questions in Marathi, Hindi, or English and get instant answers with active farm data.`,
      icon: `🎙️`,
      badge: `Step 5`
    }],
    b = [{
      title: n(`landing.featHealthTitle`),
      desc: n(`landing.featHealthDesc`),
      icon: `🌱`,
      tag: `NDVI Satellite`
    }, {
      title: n(`landing.featWeatherTitle`),
      desc: n(`landing.featWeatherDesc`),
      icon: `🌦️`,
      tag: `Rain Alerts`
    }, {
      title: n(`landing.featYieldTitle`),
      desc: n(`landing.featYieldDesc`),
      icon: `📊`,
      tag: `ML Prediction`
    }, {
      title: n(`landing.featMarketTitle`),
      desc: n(`landing.featMarketDesc`),
      icon: `📈`,
      tag: `Agmarknet APMC`
    }, {
      title: n(`landing.featSellTitle`),
      desc: n(`landing.featSellDesc`),
      icon: `💰`,
      tag: `Net Realization`
    }, {
      title: n(`landing.featAiTitle`),
      desc: n(`landing.featAiDesc`),
      icon: `🎙️`,
      tag: `Voice in 3 Languages`
    }];
  return (0, f.jsxs)(`div`, {
    className: `min-h-screen bg-background text-foreground flex flex-col max-w-md mx-auto relative px-4 pb-12`,
    children: [(0, f.jsxs)(`header`, {
      className: `sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border py-3 -mx-4 px-4 flex items-center justify-between mb-2`,
      children: [(0, f.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [(0, f.jsx)(`span`, {
          className: `text-2xl`,
          children: `🌾`
        }), (0, f.jsxs)(`div`, {
          children: [(0, f.jsx)(`h1`, {
            className: `text-base font-bold text-primary leading-none`,
            style: {
              fontFamily: `Outfit, sans-serif`
            },
            children: `AgriIntel`
          }), (0, f.jsx)(`p`, {
            className: `text-[10px] text-muted-foreground leading-none mt-0.5`,
            children: n(`common.tagline`)
          })]
        })]
      }), (0, f.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [(0, f.jsx)(u, {}), m ? (0, f.jsx)(s, {
          href: `/dashboard`,
          className: `text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors`,
          children: `Dashboard`
        }) : (0, f.jsx)(s, {
          href: `/login`,
          className: `text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-colors`,
          children: n(`auth.login`)
        })]
      })]
    }), (0, f.jsxs)(`section`, {
      className: `text-center py-4 space-y-3`,
      children: [(0, f.jsxs)(`div`, {
        className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-medium`,
        children: [(0, f.jsx)(`span`, {
          children: `🇮🇳`
        }), ` Designed for Farmers in Maharashtra`]
      }), (0, f.jsx)(`h2`, {
        className: `text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-tight`,
        style: {
          fontFamily: `Outfit, sans-serif`
        },
        children: n(`landing.heroTitle`)
      }), (0, f.jsx)(`p`, {
        className: `text-xs sm:text-sm text-muted-foreground leading-relaxed px-1`,
        children: n(`landing.heroSubtitle`)
      })]
    }), (0, f.jsxs)(`section`, {
      className: `space-y-3 my-2`,
      "aria-label": `Farmer Action Center`,
      children: [(0, f.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [(0, f.jsxs)(`div`, {
          children: [(0, f.jsxs)(`h3`, {
            className: `text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-1.5`,
            children: [(0, f.jsx)(`span`, {
              children: `⚡`
            }), ` Farmer Action Center`]
          }), (0, f.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: `Select an action to proceed with your farm workflow`
          })]
        }), (0, f.jsx)(`span`, {
          className: `text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20`,
          children: `Ordered Flow`
        })]
      }), (0, f.jsxs)(`div`, {
        className: `space-y-2.5`,
        children: [(0, f.jsx)(l, {
          className: `border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-card shadow-sm hover:border-primary transition-all`,
          children: (0, f.jsxs)(c, {
            className: `p-3.5 space-y-2.5`,
            children: [(0, f.jsxs)(`div`, {
              className: `flex items-start justify-between`,
              children: [(0, f.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0, f.jsx)(`span`, {
                  className: `w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0`,
                  children: `1`
                }), (0, f.jsxs)(`div`, {
                  children: [(0, f.jsx)(`h4`, {
                    className: `text-sm font-bold text-foreground`,
                    children: `Open Farmer Dashboard`
                  }), (0, f.jsx)(`p`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: g?.village ? `Active Farm: ${g.village}, ${g.district} · ${g.areaHectares} ha (${g.crop})` : g ? `Active Farm: ${g.district} · ${g.areaHectares} ha (${g.crop})` : `Patil Farm, Latur · 3.5 ha (Soybean)`
                  })]
                })]
              }), (0, f.jsx)(`span`, {
                className: `text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300`,
                children: `Ready`
              })]
            }), (0, f.jsxs)(`button`, {
              type: `button`,
              id: `action-open-dashboard`,
              onClick: () => {
                if (!m) p();
                t.push(`/dashboard`);
              },
              className: `w-full py-2.5 px-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shadow-xs transition-colors text-center flex items-center justify-center gap-1.5 cursor-pointer`,
              children: [(0, f.jsx)(`span`, {
                children: `🌾`
              }), ` Open Today's Dashboard →`]
            })]
          })
        }), (0, f.jsx)(l, {
          className: `border border-border bg-card hover:border-border/80 transition-all`,
          children: (0, f.jsxs)(c, {
            className: `p-3.5 space-y-2`,
            children: [(0, f.jsx)(`div`, {
              className: `flex items-start justify-between`,
              children: (0, f.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0, f.jsx)(`span`, {
                  className: `w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center shrink-0`,
                  children: `2`
                }), (0, f.jsxs)(`div`, {
                  children: [(0, f.jsx)(`h4`, {
                    className: `text-sm font-semibold text-foreground`,
                    children: `Set Up / Change Your Farm`
                  }), (0, f.jsx)(`p`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: `Pinpoint your field on satellite map, draw custom boundaries, and set crop.`
                  })]
                })]
              })
            }), (0, f.jsxs)(s, {
              href: `/onboarding`,
              id: `hero-get-started`,
              className: `w-full py-2.5 px-4 rounded-xl border border-border bg-muted/40 hover:bg-muted text-foreground font-semibold text-xs transition-colors text-center flex items-center justify-center gap-1.5`,
              children: [(0, f.jsx)(`span`, {
                children: `🌱`
              }), ` Start Farm Setup / Change Field →`]
            })]
          })
        }), (0, f.jsx)(l, {
          className: `border border-amber-200 bg-amber-50/40 hover:bg-amber-50/70 transition-all`,
          children: (0, f.jsxs)(c, {
            className: `p-3.5 space-y-2`,
            children: [(0, f.jsxs)(`div`, {
              className: `flex items-start justify-between`,
              children: [(0, f.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0, f.jsx)(`span`, {
                  className: `w-6 h-6 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0`,
                  children: `3`
                }), (0, f.jsxs)(`div`, {
                  children: [(0, f.jsx)(`h4`, {
                    className: `text-sm font-semibold text-amber-950`,
                    children: `Try a Sample Field`
                  }), (0, f.jsx)(`p`, {
                    className: `text-[11px] text-amber-800`,
                    children: `Load a sample soybean field in Latur — with satellite, weather and mandi data, each labelled Live, Demo or Unavailable.`
                  })]
                })]
              }), (0, f.jsx)(`span`, {
                className: `text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300`,
                children: `Instant`
              })]
            }), (0, f.jsxs)(`button`, {
              type: `button`,
              id: `hero-explore-demo`,
              onClick: v,
              className: `w-full py-2.5 px-4 rounded-xl border border-amber-300 bg-amber-100/60 hover:bg-amber-200/60 text-amber-950 font-semibold text-xs transition-colors text-center flex items-center justify-center gap-1.5 cursor-pointer`,
              children: [(0, f.jsx)(`span`, {
                children: `⚡`
              }), ` Load Sample Field →`]
            })]
          })
        }), (0, f.jsx)(l, {
          className: `border border-border bg-card hover:border-border/80 transition-all`,
          children: (0, f.jsxs)(c, {
            className: `p-3.5 space-y-2`,
            children: [(0, f.jsx)(`div`, {
              className: `flex items-start justify-between`,
              children: (0, f.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0, f.jsx)(`span`, {
                  className: `w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center shrink-0`,
                  children: `4`
                }), (0, f.jsxs)(`div`, {
                  children: [(0, f.jsx)(`h4`, {
                    className: `text-sm font-semibold text-foreground`,
                    children: m ? `Signed in as ${h?.email||`Farmer`}` : `Farmer Login / Sign Up`
                  }), (0, f.jsx)(`p`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: `Secure cloud account to sync multiple field boundaries across mobile devices.`
                  })]
                })]
              })
            }), (0, f.jsxs)(s, {
              href: `/login`,
              id: `action-login`,
              className: `w-full py-2.5 px-4 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-xs transition-colors text-center flex items-center justify-center gap-1.5`,
              children: [(0, f.jsx)(`span`, {
                children: `🔑`
              }), ` `, m ? `Switch Account / Profile →` : `Sign In / Register →`]
            })]
          })
        })]
      })]
    }), (0, f.jsxs)(`div`, {
      className: `p-3.5 rounded-xl bg-primary/5 border border-primary/20 space-y-1 my-3`,
      children: [(0, f.jsx)(`p`, {
        className: `text-xs font-semibold text-primary uppercase tracking-wider`,
        children: `Our Promise`
      }), (0, f.jsxs)(`p`, {
        className: `text-xs text-foreground font-medium italic`,
        children: [`“`, n(`landing.corePromise`), `”`]
      })]
    }), (0, f.jsxs)(`section`, {
      className: `py-4 space-y-3`,
      children: [(0, f.jsxs)(`div`, {
        children: [(0, f.jsx)(`h3`, {
          className: `text-base font-bold`,
          style: {
            fontFamily: `Outfit, sans-serif`
          },
          children: n(`landing.howItWorksTitle`)
        }), (0, f.jsx)(`p`, {
          className: `text-xs text-muted-foreground`,
          children: `How AgriIntel guides farmers through each stage`
        })]
      }), (0, f.jsx)(`div`, {
        className: `space-y-2`,
        children: y.map(e => (0, f.jsxs)(s, {
          href: e.route,
          className: `flex items-start gap-3 p-3 rounded-xl border border-border bg-card hover:bg-muted/40 transition-colors block`,
          children: [(0, f.jsx)(`div`, {
            className: `w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5`,
            children: e.num
          }), (0, f.jsxs)(`div`, {
            className: `flex-1 min-w-0`,
            children: [(0, f.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [(0, f.jsxs)(`p`, {
                className: `text-xs font-semibold text-foreground flex items-center gap-1.5`,
                children: [(0, f.jsx)(`span`, {
                  children: e.icon
                }), ` `, e.title]
              }), (0, f.jsx)(`span`, {
                className: `text-[10px] text-primary font-medium`,
                children: `View →`
              })]
            }), (0, f.jsx)(`p`, {
              className: `text-[11px] text-muted-foreground mt-0.5 leading-snug`,
              children: e.desc
            })]
          })]
        }, e.num))
      })]
    }), (0, f.jsxs)(`section`, {
      className: `py-3 space-y-3`,
      children: [(0, f.jsxs)(`div`, {
        children: [(0, f.jsx)(`h3`, {
          className: `text-base font-bold`,
          style: {
            fontFamily: `Outfit, sans-serif`
          },
          children: n(`landing.featuresTitle`)
        }), (0, f.jsx)(`p`, {
          className: `text-xs text-muted-foreground`,
          children: `Built around actual agricultural decision moments`
        })]
      }), (0, f.jsx)(`div`, {
        className: `grid grid-cols-2 gap-2.5`,
        children: b.map((e, t) => (0, f.jsx)(l, {
          className: `border border-border bg-card`,
          children: (0, f.jsxs)(c, {
            className: `p-3 space-y-1.5`,
            children: [(0, f.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [(0, f.jsx)(`span`, {
                className: `text-xl`,
                children: e.icon
              }), (0, f.jsx)(`span`, {
                className: `text-[9px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground font-medium`,
                children: e.tag
              })]
            }), (0, f.jsx)(`p`, {
              className: `text-xs font-semibold text-foreground leading-tight`,
              children: e.title
            }), (0, f.jsx)(`p`, {
              className: `text-[10px] text-muted-foreground leading-snug line-clamp-2`,
              children: e.desc
            })]
          })
        }, t))
      })]
    }), (0, f.jsxs)(`section`, {
      className: `py-3 space-y-2`,
      children: [(0, f.jsx)(`h3`, {
        className: `text-base font-bold`,
        style: {
          fontFamily: `Outfit, sans-serif`
        },
        children: n(`landing.howToUseTitle`)
      }), (0, f.jsx)(l, {
        className: `border border-border bg-card/40`,
        children: (0, f.jsxs)(c, {
          className: `p-3.5 space-y-2 text-xs text-muted-foreground leading-relaxed`,
          children: [(0, f.jsxs)(`p`, {
            children: [(0, f.jsx)(`strong`, {
              className: `text-foreground`,
              children: `1. Morning Check:`
            }), ` Open AgriIntel every morning to see Today’s Action summary, rain alerts, and prevailing APMC rates.`]
          }), (0, f.jsxs)(`p`, {
            children: [(0, f.jsx)(`strong`, {
              className: `text-foreground`,
              children: `2. Pre-Harvest:`
            }), ` Check the Satellite view on “My Farm” to track field maturity and inspect stressed zones.`]
          }), (0, f.jsxs)(`p`, {
            children: [(0, f.jsx)(`strong`, {
              className: `text-foreground`,
              children: `3. Mandi Selection:`
            }), ` Use the “Sell” screen to calculate whether transporting to a neighboring mandi offers higher net profit after deducting transport costs.`]
          }), (0, f.jsxs)(`p`, {
            children: [(0, f.jsx)(`strong`, {
              className: `text-foreground`,
              children: `4. Ask in Your Voice:`
            }), ` Speak into the AI assistant in Marathi, Hindi, or English to get immediate clarity on decisions.`]
          })]
        })
      })]
    }), (0, f.jsxs)(`footer`, {
      className: `mt-4 pt-4 border-t border-border text-center space-y-2 text-[10px] text-muted-foreground`,
      children: [(0, f.jsx)(`p`, {
        className: `leading-normal`,
        children: n(`landing.disclaimer`)
      }), (0, f.jsxs)(`p`, {
        className: `font-semibold text-muted-foreground/80`,
        children: [`AgriIntel © `, new Date().getFullYear(), ` · Transparent Decision Support for Farmers`]
      })]
    })]
  })
}

function m() {
  return (0, f.jsx)(p, {})
}
var h = m;
export {
  h as component
};