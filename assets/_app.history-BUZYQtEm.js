import {
  t as e
} from "./jsx-runtime-B-hcVAMW.js";
import {
  t
} from "./link-CPEWifot.js";
var n = e(),
  r = [{
    season: `Kharif 2026`,
    crop: `Soybean`,
    emoji: `🌱`,
    area: `3.5 ha · rainfed`,
    sown: `19 Jun 2026`,
    harvested: `Expected 14 Oct 2026`,
    yieldQtl: `68.3 qtl (est.)`,
    yieldPerHa: `16.1 qtl/ha`,
    price: `₹4,380 / qtl today`,
    mandi: `Pune mandi`,
    net: `₹2,86,745 (est.)`,
    action: `Sell Now — advised 8 Oct 2026`,
    status: `In progress`,
    health: `NDVI 0.62 · Moderate`
  }, {
    season: `Summer 2026`,
    crop: `Green Gram (Moong)`,
    emoji: `🫛`,
    area: `1.5 ha · irrigated`,
    sown: `18 Mar 2026`,
    harvested: `08 Jun 2026`,
    yieldQtl: `6.4 qtl`,
    yieldPerHa: `4.3 qtl/ha`,
    price: `₹7,150 / qtl`,
    mandi: `Latur mandi`,
    net: `₹43,826`,
    action: `Sold in single lot — advised 30 May 2026`,
    status: `Completed`,
    health: `NDVI 0.58 · Good`
  }, {
    season: `Rabi 2025–26`,
    crop: `Gram (Chana)`,
    emoji: `🫘`,
    area: `2.0 ha · rainfed`,
    sown: `14 Oct 2025`,
    harvested: `26 Feb 2026`,
    yieldQtl: `19.8 qtl`,
    yieldPerHa: `9.9 qtl/ha`,
    price: `₹5,480 / qtl`,
    mandi: `Latur mandi`,
    net: `₹1,03,262`,
    action: `Held 3 weeks for MSP rise — advised 20 Jan 2026`,
    status: `Completed`,
    health: `NDVI 0.55 · Good`
  }, {
    season: `Kharif 2025`,
    crop: `Soybean`,
    emoji: `🌱`,
    area: `3.5 ha · rainfed`,
    sown: `21 Jun 2025`,
    harvested: `11 Oct 2025`,
    yieldQtl: `61.5 qtl`,
    yieldPerHa: `17.6 qtl/ha`,
    price: `₹4,010 / qtl`,
    mandi: `Pune mandi`,
    net: `₹2,36,842`,
    action: `Sold in two lots before rain — advised 28 Sep 2025`,
    status: `Completed`,
    health: `NDVI 0.60 · Moderate`
  }, {
    season: `Rabi 2024–25`,
    crop: `Wheat`,
    emoji: `🌾`,
    area: `2.5 ha · irrigated`,
    sown: `08 Nov 2024`,
    harvested: `18 Mar 2025`,
    yieldQtl: `92.0 qtl`,
    yieldPerHa: `36.8 qtl/ha`,
    price: `₹2,650 / qtl`,
    mandi: `Latur mandi`,
    net: `₹2,38,405`,
    action: `Stored 1 month, sold on price peak — advised 05 Apr 2025`,
    status: `Completed`,
    health: `NDVI 0.71 · Good`
  }];

function i() {
  let e = r.filter(e => e.status === `Completed`).reduce((e, t) => e + Number(t.net.replace(/[^\d]/g, ``)), 0);
  return (0, n.jsxs)(`div`, {
    className: `px-4 pt-4 pb-28 space-y-4`,
    children: [(0, n.jsxs)(`div`, {
      className: `flex items-center gap-2`,
      children: [(0, n.jsx)(t, {
        href: `/farm`,
        "aria-label": `Back to My Farm`,
        className: `flex size-8 items-center justify-center rounded-lg border border-border bg-card`,
        children: `←`
      }), (0, n.jsxs)(`div`, {
        children: [(0, n.jsx)(`h2`, {
          className: `text-xl font-bold`,
          style: {
            fontFamily: `Outfit, sans-serif`
          },
          children: `Farm History`
        }), (0, n.jsx)(`p`, {
          className: `text-sm text-muted-foreground`,
          children: `Season-by-season record`
        })]
      })]
    }), (0, n.jsxs)(`section`, {
      className: `grid grid-cols-3 gap-3`,
      children: [(0, n.jsxs)(`div`, {
        className: `rounded-2xl border border-border bg-card p-3 text-center shadow-xs`,
        children: [(0, n.jsx)(`p`, {
          className: `text-xl font-bold`,
          children: r.length
        }), (0, n.jsx)(`p`, {
          className: `text-[11px] text-muted-foreground`,
          children: `Seasons tracked`
        })]
      }), (0, n.jsxs)(`div`, {
        className: `rounded-2xl border border-border bg-card p-3 text-center shadow-xs`,
        children: [(0, n.jsx)(`p`, {
          className: `text-xl font-bold text-primary`,
          children: new Set(r.map(e => e.crop)).size
        }), (0, n.jsx)(`p`, {
          className: `text-[11px] text-muted-foreground`,
          children: `Crops grown`
        })]
      }), (0, n.jsxs)(`div`, {
        className: `rounded-2xl border border-border bg-card p-3 text-center shadow-xs`,
        children: [(0, n.jsxs)(`p`, {
          className: `text-xl font-bold text-primary`,
          children: [`₹`, (e / 1e5).toFixed(1), `L`]
        }), (0, n.jsx)(`p`, {
          className: `text-[11px] text-muted-foreground`,
          children: `Total net realized`
        })]
      })]
    }), (0, n.jsx)(`div`, {
      className: `space-y-4`,
      children: r.map(e => (0, n.jsx)(a, {
        season: e
      }, e.season))
    })]
  })
}

function a({
  season: e
}) {
  let t = e.status === `In progress`;
  return (0, n.jsxs)(`section`, {
    className: `rounded-2xl border border-border bg-card p-5 shadow-sm`,
    children: [(0, n.jsxs)(`div`, {
      className: `flex items-start justify-between gap-2`,
      children: [(0, n.jsxs)(`div`, {
        className: `flex items-center gap-2.5`,
        children: [(0, n.jsx)(`span`, {
          className: `text-2xl`,
          children: e.emoji
        }), (0, n.jsxs)(`div`, {
          children: [(0, n.jsx)(`h2`, {
            className: `text-base font-bold leading-tight`,
            children: e.season
          }), (0, n.jsx)(`p`, {
            className: `text-sm text-muted-foreground`,
            children: e.crop
          })]
        })]
      }), (0, n.jsx)(`span`, {
        className: `rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${t?`bg-amber-100 text-amber-800`:`bg-green-100 text-green-800`}`,
        children: e.status
      })]
    }), (0, n.jsxs)(`p`, {
      className: `mt-1.5 text-xs text-muted-foreground`,
      children: [e.area, ` · `, e.health]
    }), (0, n.jsxs)(`div`, {
      className: `mt-3 grid grid-cols-2 gap-3 text-sm`,
      children: [(0, n.jsxs)(`div`, {
        children: [(0, n.jsx)(`p`, {
          className: `text-[11px] tracking-wide text-muted-foreground uppercase`,
          children: `Sown / Harvested`
        }), (0, n.jsxs)(`p`, {
          className: `mt-0.5 font-medium`,
          children: [e.sown, ` → `, e.harvested]
        })]
      }), (0, n.jsxs)(`div`, {
        children: [(0, n.jsx)(`p`, {
          className: `text-[11px] tracking-wide text-muted-foreground uppercase`,
          children: `Yield`
        }), (0, n.jsxs)(`p`, {
          className: `mt-0.5 font-medium`,
          children: [e.yieldQtl, ` `, (0, n.jsxs)(`span`, {
            className: `text-muted-foreground`,
            children: [`(`, e.yieldPerHa, `)`]
          })]
        })]
      }), (0, n.jsxs)(`div`, {
        children: [(0, n.jsx)(`p`, {
          className: `text-[11px] tracking-wide text-muted-foreground uppercase`,
          children: `Sold at`
        }), (0, n.jsxs)(`p`, {
          className: `mt-0.5 font-medium`,
          children: [e.price, ` `, (0, n.jsxs)(`span`, {
            className: `text-muted-foreground`,
            children: [`· `, e.mandi]
          })]
        })]
      }), (0, n.jsxs)(`div`, {
        children: [(0, n.jsx)(`p`, {
          className: `text-[11px] tracking-wide text-muted-foreground uppercase`,
          children: `Net Realization`
        }), (0, n.jsx)(`p`, {
          className: `mt-0.5 font-semibold text-primary`,
          children: e.net
        })]
      })]
    }), (0, n.jsxs)(`div`, {
      className: `mt-3 flex items-start gap-2 rounded-xl bg-muted px-3 py-2`,
      children: [(0, n.jsx)(`span`, {
        className: `text-sm`,
        children: `💰`
      }), (0, n.jsxs)(`p`, {
        className: `text-xs text-muted-foreground`,
        children: [(0, n.jsx)(`span`, {
          className: `font-semibold text-foreground`,
          children: `Advice followed: `
        }), e.action]
      })]
    })]
  })
}
var o = i;
export {
  o as component
};