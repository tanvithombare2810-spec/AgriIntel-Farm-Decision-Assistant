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
  t as o
} from "./link-CPEWifot.js";
import {
  n as s,
  t as c
} from "./card-BDHQYkqg.js";
import {
  t as l
} from "./LanguageSwitcher-BeIIurXB.js";
import {
  t as u
} from "./button-hay3EtyF.js";
var d = e(t(), 1),
  f = n();

function p() {
  let e = r(),
    {
      signIn: t,
      enterDemoMode: n,
      isCloudAuth: p
    } = i(),
    {
      t: m
    } = a(),
    [h, g] = (0, d.useState)(``),
    [_, v] = (0, d.useState)(``),
    [y, b] = (0, d.useState)(``),
    [x, S] = (0, d.useState)(!1);
  return (0, f.jsxs)(`div`, {
    className: `min-h-screen bg-background flex flex-col max-w-md mx-auto px-4 py-8`,
    children: [(0, f.jsxs)(`div`, {
      className: `flex items-center justify-between mb-8`,
      children: [(0, f.jsxs)(o, {
        href: `/`,
        className: `flex items-center gap-2`,
        children: [(0, f.jsx)(`span`, {
          className: `text-2xl`,
          children: `🌾`
        }), (0, f.jsx)(`h1`, {
          className: `text-xl font-bold text-primary`,
          style: {
            fontFamily: `Outfit, sans-serif`
          },
          children: `AgriIntel`
        })]
      }), (0, f.jsx)(l, {})]
    }), (0, f.jsxs)(`div`, {
      className: `flex-1 flex flex-col justify-center space-y-6`,
      children: [(0, f.jsxs)(`div`, {
        className: `text-center space-y-1`,
        children: [(0, f.jsx)(`h2`, {
          className: `text-2xl font-bold`,
          style: {
            fontFamily: `Outfit, sans-serif`
          },
          children: m(`auth.loginTitle`)
        }), (0, f.jsx)(`p`, {
          className: `text-xs text-muted-foreground`,
          children: m(`auth.loginSubtitle`)
        })]
      }), y && (0, f.jsx)(`div`, {
        className: `bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-xl text-xs`,
        children: y
      }), (0, f.jsx)(c, {
        className: `border border-border shadow-sm`,
        children: (0, f.jsxs)(s, {
          className: `p-5`,
          children: [(0, f.jsxs)(`form`, {
            onSubmit: async n => {
              if (n.preventDefault(), !h) {
                b(`Please enter your email or phone number`);
                return
              }
              S(!0), b(``);
              let r = await t(h, _);
              S(!1), r.error ? b(r.error) : e.push(`/dashboard`)
            },
            className: `space-y-4`,
            children: [(0, f.jsxs)(`div`, {
              children: [(0, f.jsx)(`label`, {
                className: `text-xs font-semibold text-foreground block mb-1.5`,
                children: m(`auth.emailLabel`)
              }), (0, f.jsx)(`input`, {
                type: `text`,
                id: `login-email`,
                required: !0,
                placeholder: `farmer@example.com or 10-digit mobile`,
                value: h,
                onChange: e => g(e.target.value),
                className: `w-full px-3 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm outline-none focus:border-primary transition-colors`
              })]
            }), (0, f.jsxs)(`div`, {
              children: [(0, f.jsx)(`div`, {
                className: `flex justify-between items-center mb-1.5`,
                children: (0, f.jsx)(`label`, {
                  className: `text-xs font-semibold text-foreground`,
                  children: m(`auth.passwordLabel`)
                })
              }), (0, f.jsx)(`input`, {
                type: `password`,
                id: `login-password`,
                placeholder: `••••••••`,
                value: _,
                onChange: e => v(e.target.value),
                className: `w-full px-3 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm outline-none focus:border-primary transition-colors`
              })]
            }), (0, f.jsx)(u, {
              type: `submit`,
              id: `login-submit-btn`,
              disabled: x,
              className: `w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2.5 rounded-xl text-sm`,
              children: m(x ? `common.loading` : `auth.login`)
            })]
          }), (0, f.jsxs)(`div`, {
            className: `relative my-4`,
            children: [(0, f.jsx)(`div`, {
              className: `absolute inset-0 flex items-center`,
              children: (0, f.jsx)(`div`, {
                className: `w-full border-t border-border`
              })
            }), (0, f.jsx)(`div`, {
              className: `relative flex justify-center text-[10px] uppercase`,
              children: (0, f.jsx)(`span`, {
                className: `bg-card px-2 text-muted-foreground font-medium`,
                children: `Or`
              })
            })]
          }), (0, f.jsxs)(`button`, {
            type: `button`,
            id: `login-demo-btn`,
            onClick: () => {
              n(), e.push(`/dashboard`)
            },
            className: `w-full py-2.5 px-4 rounded-xl border border-amber-300 bg-amber-50/60 hover:bg-amber-100/60 text-amber-900 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer`,
            children: [(0, f.jsx)(`span`, {
              children: `⚡`
            }), ` `, m(`auth.exploreDemoBtn`)]
          })]
        })
      }), (0, f.jsxs)(`p`, {
        className: `text-center text-xs text-muted-foreground`,
        children: [m(`auth.dontHaveAccount`), ` `, (0, f.jsx)(o, {
          href: `/signup`,
          className: `text-primary font-semibold hover:underline`,
          children: m(`auth.signup`)
        })]
      }), (0, f.jsx)(`p`, {
        className: `text-center text-[11px] text-muted-foreground/80`,
        children: p ? `🔒 Secured by Supabase Cloud Auth` : `📋 Offline/Demo mode active: Instant local session`
      })]
    })]
  })
}
var m = p;
export {
  m as component
};