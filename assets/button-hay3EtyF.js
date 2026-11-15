import {
  a as e,
  n as t,
  t as n
} from "./jsx-runtime-B-hcVAMW.js";
import {
  a as r
} from "./card-BDHQYkqg.js";
import {
  a as i,
  i as a,
  n as o,
  r as s,
  t as c
} from "./dist-ml1Uni3P.js";
var l = e(t(), 1);

function u() {
  return typeof window < `u`
}

function d(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function f(e) {
  return u() ? e instanceof HTMLElement || e instanceof d(e).HTMLElement : !1
}
var p = {
    ...l
  },
  m = p.useInsertionEffect,
  h = m && m !== p.useLayoutEffect ? m : e => e();

function g(e) {
  let t = s(_).current;
  return t.next = e, h(t.effect), t.trampoline
}

function _() {
  let e = {
    next: void 0,
    callback: v,
    trampoline: (...t) => e.callback?.(...t),
    effect: () => {
      e.callback = e.next
    }
  };
  return e
}

function v() {}
var y = typeof document < `u` ? l.useLayoutEffect : () => {};

function b(e, t) {
  return function(n, ...r) {
    let i = new URL(e);
    return i.searchParams.set(`code`, n.toString()), r.forEach(e => i.searchParams.append(`args[]`, e)), `${t} error #${n}; visit ${i} for the full message.`
  }
}
var x = b(`https://base-ui.com/production-error`, `Base UI`),
  S = l.createContext(void 0);

function C(e = !1) {
  let t = l.useContext(S);
  if (t === void 0 && !e) throw Error(x(16));
  return t
}

function w(e) {
  let {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: i = 0,
    isNativeButton: a
  } = e, o = r && t !== !1, s = r && t === !1;
  return {
    props: l.useMemo(() => {
      let e = {
        onKeyDown(e) {
          n && t && e.key !== `Tab` && e.preventDefault()
        }
      };
      return r || (e.tabIndex = i, !a && n && (e.tabIndex = t ? i : -1)), (a && (t || o) || !a && n) && (e[`aria-disabled`] = n), a && (!t || s) && (e.disabled = n), e
    }, [r, n, t, o, s, a, i])
  }
}

function T(e, t, {
  detail: n = 0,
  pointerType: r = ``
} = {}) {
  e.dispatchEvent(new(d(e)).PointerEvent(`click`, {
    bubbles: !0,
    cancelable: !0,
    composed: !0,
    detail: n,
    pointerType: r,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    altKey: t.altKey,
    metaKey: t.metaKey
  }))
}

function E(e = {}) {
  let {
    disabled: t = !1,
    focusableWhenDisabled: n,
    tabIndex: r = 0,
    native: o = !0,
    composite: s
  } = e, c = l.useRef(null), u = C(!0), d = s ?? u !== void 0, {
    props: f
  } = w({
    focusableWhenDisabled: n,
    disabled: t,
    composite: d,
    tabIndex: r,
    isNativeButton: o
  }), p = l.useCallback(() => {
    let e = c.current;
    D(e) && d && t && f.disabled === void 0 && e.disabled && (e.disabled = !1)
  }, [t, f.disabled, d]);
  return y(p, [p]), {
    getButtonProps: l.useCallback((e = {}) => {
      let {
        onClick: n,
        onMouseDown: r,
        onKeyUp: s,
        onKeyDown: c,
        onPointerDown: l,
        ...u
      } = e;
      return i({
        onClick(e) {
          if (t) {
            e.preventDefault();
            return
          }
          n?.(e)
        },
        onMouseDown(e) {
          t || r?.(e)
        },
        onKeyDown(e) {
          if (t || (a(e), c?.(e), e.baseUIHandlerPrevented)) return;
          let n = e.target === e.currentTarget,
            r = e.currentTarget,
            i = D(r),
            s = !o && O(r),
            l = n && (o ? i : !s),
            u = e.key === `Enter`,
            f = e.key === ` `,
            p = r.getAttribute(`role`),
            m = p?.startsWith(`menuitem`) || p === `option` || p === `gridcell`;
          if (n && d && f) {
            if (e.defaultPrevented && m) return;
            e.preventDefault(), (!o || i) && (e.preventBaseUIHandler(), T(r, e));
            return
          }
          if (!l || o || !f && !u) {
            n && s && f && e.preventDefault();
            return
          }
          e.defaultPrevented || (e.preventDefault(), u && (e.preventBaseUIHandler(), T(r, e)))
        },
        onKeyUp(e) {
          if (!t) {
            if (a(e), s?.(e), e.target === e.currentTarget && o && d && D(e.currentTarget) && e.key === ` `) {
              e.preventDefault();
              return
            }
            e.baseUIHandlerPrevented || e.target === e.currentTarget && !o && !d && !e.defaultPrevented && e.key === ` ` && (e.preventBaseUIHandler(), T(e.currentTarget, e))
          }
        },
        onPointerDown(e) {
          if (t) {
            e.preventDefault();
            return
          }
          l?.(e)
        }
      }, o ? {
        type: `button`
      } : {
        role: `button`
      }, f, u)
    }, [t, f, d, o]),
    buttonRef: g(e => {
      c.current = e, p()
    })
  }
}

function D(e) {
  return f(e) && e.tagName === `BUTTON`
}

function O(e) {
  return f(e) && e.tagName === `A` && !!e.href
}
var k = l.forwardRef(function(e, t) {
    let {
      render: n,
      className: r,
      disabled: i = !1,
      focusableWhenDisabled: a = !1,
      nativeButton: s = !0,
      style: c,
      ...l
    } = e, {
      getButtonProps: u,
      buttonRef: d
    } = E({
      disabled: i,
      focusableWhenDisabled: a,
      native: s
    });
    return o(`button`, e, {
      state: {
        disabled: i
      },
      ref: [t, d],
      props: [l, u]
    })
  }),
  A = n(),
  j = c(`group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`, {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground hover:bg-primary/80`,
        outline: `border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,
        secondary: `bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,
        ghost: `hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50`,
        destructive: `bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40`,
        link: `text-primary underline-offset-4 hover:underline`
      },
      size: {
        default: `h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,
        xs: `h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3`,
        sm: `h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5`,
        lg: `h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,
        icon: `size-8`,
        "icon-xs": `size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3`,
        "icon-sm": `size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg`,
        "icon-lg": `size-9`
      }
    },
    defaultVariants: {
      variant: `default`,
      size: `default`
    }
  });

function M({
  className: e,
  variant: t = `default`,
  size: n = `default`,
  ...i
}) {
  return (0, A.jsx)(k, {
    "data-slot": `button`,
    className: r(j({
      variant: t,
      size: n,
      className: e
    })),
    ...i
  })
}
export {
  M as t
};