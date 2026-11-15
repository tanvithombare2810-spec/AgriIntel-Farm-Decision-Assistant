import {
  a as e,
  n as t,
  t as n
} from "./jsx-runtime-B-hcVAMW.js";
import {
  n as r,
  t as i
} from "./navigation-a6DIvD_7.js";
import {
  n as a,
  o,
  s
} from "./index-BOVbX_32.js";
import {
  t as c
} from "./cn-B9URw_CD.js";
import {
  i as l
} from "./farm-storage-BBPkHbBE.js";
import {
  t as u
} from "./link-CPEWifot.js";
import {
  t as d
} from "./LanguageSwitcher-BeIIurXB.js";
var f = e(t(), 1);

function p() {
  return !1
}
var m = n(),
  h = `agriintel-accounts`,
  g = `agriintel-active-account`;

function _({
  fallbackName: e,
  fallbackLocation: t
}) {
  let n = [{
      id: `default`,
      farmer: `Suresh Patil`,
      farm: e,
      location: t
    }],
    [r, i] = (0, f.useState)(n),
    [a, o] = (0, f.useState)(`default`),
    [s, c] = (0, f.useState)(!1),
    [l, u] = (0, f.useState)(!1),
    [d, p] = (0, f.useState)({
      farmer: ``,
      farm: ``,
      location: ``
    });
  (0, f.useEffect)(() => {
    try {
      let e = JSON.parse(localStorage.getItem(h) || `null`);
      Array.isArray(e) && e.length && i(e);
      let t = localStorage.getItem(g);
      t && o(t)
    } catch {}
  }, []);
  let _ = (e, t) => {
      i(e), o(t), localStorage.setItem(h, JSON.stringify(e)), localStorage.setItem(g, t)
    },
    v = r.find(e => e.id === a) ?? r[0] ?? n[0],
    y = v.id === "default" ? e : v.farm,
    b = v.id === "default" ? t : v.location,
    x = () => {
      if (!d.farmer.trim() || !d.farm.trim()) return;
      let e = {
        id: crypto.randomUUID(),
        ...d
      };
      _([...r, e], e.id), p({
        farmer: ``,
        farm: ``,
        location: ``
      }), u(!1), c(!1)
    },
    S = e => {
      if (r.length === 1) return;
      let t = r.filter(t => t.id !== e);
      _(t, e === a ? t[0].id : a)
    },
    C = e => e.split(` `).map(e => e[0]).join(``).slice(0, 2).toUpperCase();
  return (0, m.jsxs)(m.Fragment, {
    children: [(0, m.jsxs)(`button`, {
      type: `button`,
      onClick: () => c(!0),
      className: `text-[10px] text-muted-foreground leading-none px-1.5 py-1 rounded-md hover:bg-muted cursor-pointer`,
      title: `Switch account`,
      children: [y, ` · `, b, ` ▾`]
    }), s && (0, m.jsx)(`div`, {
      className: `fixed inset-0 z-[100] flex items-end justify-center bg-black/40`,
      onClick: () => {
        c(!1), u(!1)
      },
      children: (0, m.jsxs)(`div`, {
        className: `w-full max-w-md rounded-t-3xl bg-card p-5 pb-8 shadow-xl`,
        onClick: e => e.stopPropagation(),
        children: [(0, m.jsx)(`div`, {
          className: `mx-auto mb-4 h-1 w-10 rounded-full bg-muted`
        }), (0, m.jsxs)(`div`, {
          className: `mb-3 flex items-center justify-between`,
          children: [(0, m.jsx)(`h2`, {
            className: `text-base font-bold`,
            children: `Switch account`
          }), (0, m.jsx)(`button`, {
            type: `button`,
            onClick: () => c(!1),
            "aria-label": `Close`,
            className: `text-muted-foreground cursor-pointer`,
            children: `✕`
          })]
        }), (0, m.jsx)(`ul`, {
          className: `space-y-1`,
          children: r.map(e => (0, m.jsxs)(`li`, {
            className: `flex items-center gap-3 rounded-xl p-2 hover:bg-muted`,
            children: [(0, m.jsxs)(`button`, {
              type: `button`,
              className: `flex flex-1 items-center gap-3 text-left cursor-pointer`,
              onClick: () => {
                _(r, e.id), c(!1)
              },
              children: [(0, m.jsx)(`span`, {
                className: `flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground`,
                children: C(e.farmer)
              }), (0, m.jsxs)(`span`, {
                children: [(0, m.jsx)(`span`, {
                  className: `block text-sm font-semibold`,
                  children: e.farmer
                }), (0, m.jsxs)(`span`, {
                  className: `block text-xs text-muted-foreground`,
                  children: [e.farm, ` · `, e.location]
                })]
              })]
            }), e.id === v.id ? (0, m.jsx)(`span`, {
              className: `text-primary font-bold`,
              children: `✓`
            }) : (0, m.jsx)(`button`, {
              type: `button`,
              onClick: () => S(e.id),
              "aria-label": `Remove ${e.farmer}`,
              className: `cursor-pointer`,
              children: `🗑️`
            })]
          }, e.id))
        }), l ? (0, m.jsxs)(`div`, {
          className: `mt-3 space-y-2`,
          children: [
            [`farmer`, `farm`, `location`].map(e => (0, m.jsx)(`input`, {
              value: d[e],
              onChange: t => p({
                ...d,
                [e]: t.target.value
              }),
              placeholder: e === `farmer` ? `Farmer name` : e === `farm` ? `Farm name` : `Location (e.g. Pune, MH)`,
              className: `w-full rounded-xl border border-border bg-background px-3 py-2 text-sm`
            }, e)), (0, m.jsx)(`button`, {
              type: `button`,
              onClick: x,
              className: `w-full rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground cursor-pointer`,
              children: `Add account`
            })
          ]
        }) : (0, m.jsxs)(`button`, {
          type: `button`,
          onClick: () => u(!0),
          className: `mt-2 flex w-full items-center gap-3 rounded-xl p-2 text-sm font-semibold text-primary hover:bg-muted cursor-pointer`,
          children: [(0, m.jsx)(`span`, {
            className: `flex size-10 items-center justify-center rounded-full border-2 border-dashed border-primary`,
            children: `+`
          }), `Add account`]
        })]
      })
    })]
  })
}
var v = [{
  href: `/dashboard`,
  key: `home`,
  icon: `🌱`
}, {
  href: `/farm`,
  key: `farm`,
  icon: `🗺️`
}, {
  href: `/market`,
  key: `market`,
  icon: `📊`
}, {
  href: `/sell`,
  key: `sell`,
  icon: `💰`
}, {
  href: `/ask`,
  key: `ask`,
  icon: `🎙️`
}];

function y({
  children: e
}) {
  let t = i(),
    n = r(),
    s = p(),
    {
      t: h,
      locale: g
    } = o(),
    {
      user: y,
      isAuthenticated: b,
      isDemo: x,
      signOut: S,
      enterDemoMode: C
    } = a(),
    w = x || s,
    [T, E] = (0, f.useState)(() => {
      if (typeof window < `u`) {
        let e = l();
        return {
          name: e.isCustomFarm ? e.village ? `${e.village} Farm` : `My Farm` : `Patil Farm`,
          location: `${e.district}, MH`
        }
      }
      return {
        name: `Patil Farm`,
        location: `Latur, MH`
      }
    });
  return (0, f.useEffect)(() => {
    function e() {
      let e = l(),
        t = e.isCustomFarm ? e.village ? `${e.village} Farm` : `My Farm` : `Patil Farm`,
        n = `${e.district}, MH`;
      E({
        name: t,
        location: n
      })
    }
    return e(), window.addEventListener(`storage`, e), () => window.removeEventListener(`storage`, e)
  }, []), t === `/` ? (0, m.jsx)(`div`, {
    className: `min-h-screen bg-background`,
    children: e
  }) : !b && !w ? (0, m.jsxs)(`div`, {
    className: `flex flex-col min-h-screen max-w-md mx-auto relative bg-background px-4 py-12 items-center justify-center text-center space-y-4`,
    children: [(0, m.jsx)(`span`, {
      className: `text-4xl`,
      children: `🔒`
    }), (0, m.jsx)(`h2`, {
      className: `text-xl font-bold text-foreground`,
      style: {
        fontFamily: `Outfit, sans-serif`
      },
      children: h(`auth.loginTitle`)
    }), (0, m.jsx)(`p`, {
      className: `text-xs text-muted-foreground max-w-xs`,
      children: `Please log in to view your field analytics, or explore instantly in demo mode.`
    }), (0, m.jsxs)(`div`, {
      className: `flex flex-col gap-2 w-full max-w-xs pt-2`,
      children: [(0, m.jsx)(u, {
        href: `/login`,
        className: `w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs text-center`,
        children: h(`auth.login`)
      }), (0, m.jsxs)(`button`, {
        type: `button`,
        onClick: () => {
          C(), n.push(`/dashboard`)
        },
        className: `w-full py-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-xs cursor-pointer`,
        children: [`⚡ `, h(`auth.exploreDemoBtn`)]
      }), (0, m.jsx)(u, {
        href: `/`,
        className: `text-xs text-muted-foreground hover:text-foreground pt-1`,
        children: `← Back to Landing Page`
      })]
    })]
  }) : (0, m.jsxs)(`div`, {
    className: `flex flex-col min-h-screen max-w-md mx-auto relative bg-background`,
    children: [w && (0, m.jsx)(`div`, {
      className: `sticky top-0 z-50 bg-amber-50 border-b border-amber-200 px-3 py-1.5 text-center flex items-center justify-between`,
      children: (0, m.jsxs)(`p`, {
        className: `text-xs text-amber-700 font-medium leading-tight text-center flex-1`,
        children: [`📋 `, h(`common.demoMode`)]
      })
    }), (0, m.jsxs)(`header`, {
      className: `sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center justify-between`,
      style: {
        top: w ? `32px` : `0`
      },
      children: [(0, m.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [(0, m.jsxs)(u, {
          href: `/`,
          className: `flex items-center gap-1.5`,
          title: `Return to Landing Page`,
          children: [(0, m.jsx)(`span`, {
            className: `text-2xl`,
            children: `🌾`
          }), (0, m.jsx)(`div`, {
            children: (0, m.jsx)(`h1`, {
              className: `text-base font-bold text-primary leading-none`,
              style: {
                fontFamily: `Outfit, sans-serif`
              },
              children: `AgriIntel`
            })
          })]
        }), (0, m.jsx)(_, {
          fallbackName: T.name,
          fallbackLocation: T.location
        })]
      }), (0, m.jsxs)(`div`, {
        className: `flex items-center gap-1.5`,
        children: [(0, m.jsxs)(u, {
          href: `/`,
          className: `text-xs font-semibold px-2 py-1 rounded-md border border-border bg-card hover:bg-muted text-foreground transition-colors flex items-center gap-1`,
          title: `Landing Page & Actions`,
          children: [(0, m.jsx)(`span`, {
            children: `🏠`
          }), (0, m.jsx)(`span`, {
            className: `hidden sm:inline text-[11px]`,
            children: g === `mr` ? `मुख्यपृष्ठ` : g === `hi` ? `होम` : `Home`
          })]
        }), (0, m.jsx)(d, {}), (0, m.jsx)(u, {
          href: `/onboarding`,
          className: `text-xs text-muted-foreground hover:text-primary transition-colors p-1`,
          "aria-label": `Farm settings`,
          title: `Farm setup / Change field`,
          children: `⚙️`
        }), (0, m.jsx)(`button`, {
          type: `button`,
          onClick: async () => {
            await S(), n.push(`/`)
          },
          className: `text-xs text-muted-foreground hover:text-red-600 transition-colors p-1 cursor-pointer`,
          "aria-label": `Sign out`,
          title: y?.isDemo ? `Exit Demo Mode` : `Sign out`,
          children: `🚪`
        })]
      })]
    }), (0, m.jsx)(`main`, {
      className: `flex-1 overflow-y-auto pb-safe`,
      children: e
    }), (0, m.jsxs)(`nav`, {
      className: `fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 bg-background/95 backdrop-blur border-t border-border`,
      "aria-label": `Main navigation`,
      children: [(0, m.jsx)(`div`, {
        className: `flex items-center justify-around px-1 py-2`,
        children: v.map(e => {
          let n = e.href === `/dashboard` ? t === `/dashboard` : t.startsWith(e.href),
            r = h(`nav.${e.key}`);
          return (0, m.jsxs)(u, {
            href: e.href,
            id: `nav-${e.key}`,
            className: c(`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[56px]`, n ? `bg-primary/10 text-primary` : `text-muted-foreground hover:text-foreground hover:bg-muted`),
            "aria-current": n ? `page` : void 0,
            children: [(0, m.jsx)(`span`, {
              className: `text-xl leading-none`,
              children: e.icon
            }), (0, m.jsx)(`span`, {
              className: c(`text-[10px] font-medium leading-tight`, n && `font-semibold`),
              children: r
            })]
          }, e.href)
        })
      }), (0, m.jsx)(`div`, {
        className: `h-safe-bottom`,
        style: {
          height: `env(safe-area-inset-bottom, 0px)`
        }
      })]
    })]
  })
}
var b = () => (0, m.jsx)(y, {
  children: (0, m.jsx)(s, {})
});
export {
  b as component
};