import {
  a as e,
  n as t
} from "./jsx-runtime-B-hcVAMW.js";
import {
  t as n
} from "./clsx-CjueKrWZ.js";

function r(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e || t) return {
    ...e,
    ...t
  }
}
var i = {};

function a(e, t, n, r, i) {
  if (!n && !r && !i && !e) return s(t);
  let a = s(e);
  return t && (a = c(a, t)), n && (a = c(a, n)), r && (a = c(a, r)), i && (a = c(a, i)), a
}

function o(e) {
  if (e.length === 0) return i;
  if (e.length === 1) return s(e[0]);
  let t = s(e[0]);
  for (let n = 1; n < e.length; n += 1) t = c(t, e[n]);
  return t
}

function s(e) {
  return f(e) ? {
    ...e(i)
  } : l(e)
}

function c(e, t) {
  return f(t) ? t(e) : u(e, t)
}

function l(e) {
  let t = {
    ...e
  };
  for (let e in t) {
    let n = t[e];
    d(e, n) && (t[e] = m(n))
  }
  return t
}

function u(e, t) {
  if (!t) return e;
  for (let n in t) {
    let i = t[n];
    switch (n) {
      case `style`:
        e[n] = r(e.style, i);
        break;
      case `className`:
        e[n] = g(e.className, i);
        break;
      default:
        e[n] = d(n, i) ? p(e[n], i) : i
    }
  }
  return e
}

function d(e, t) {
  let n = e.charCodeAt(0),
    r = e.charCodeAt(1),
    i = e.charCodeAt(2);
  return n === 111 && r === 110 && i >= 65 && i <= 90 && (typeof t == `function` || t === void 0)
}

function f(e) {
  return typeof e == `function`
}

function p(e, t) {
  return t ? e ? (...n) => {
    let r = n[0];
    if (_(r)) {
      let i = r;
      h(i);
      let a = t(...n);
      return i.baseUIHandlerPrevented || e?.(...n), a
    }
    let i = t(...n);
    return e?.(...n), i
  } : m(t) : e
}

function m(e) {
  return e && ((...t) => {
    let n = t[0];
    return _(n) && h(n), e(...t)
  })
}

function h(e) {
  return e.preventBaseUIHandler = () => {
    e.baseUIHandlerPrevented = !0
  }, e
}

function g(e, t) {
  return t ? e ? t + ` ` + e : t : e
}

function _(e) {
  return typeof e == `object` && !!e && `nativeEvent` in e
}
var v = e(t(), 1),
  y = {};

function b(e, t) {
  let n = v.useRef(y);
  return n.current === y && (n.current = e(t)), n
}

function x(e, t, n, r) {
  let i = b(C).current;
  return w(i, e, t, n, r) && E(i, [e, t, n, r]), i.callback
}

function S(e) {
  let t = b(C).current;
  return T(t, e) && E(t, e), t.callback
}

function C() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  }
}

function w(e, t, n, r, i) {
  return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i
}

function T(e, t) {
  return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n])
}

function E(e, t) {
  if (e.refs = t, t.every(e => e == null)) {
    e.callback = null;
    return
  }
  e.callback = n => {
    if (e.cleanup &&= (e.cleanup(), null), n != null) {
      let r = Array(t.length).fill(null);
      for (let e = 0; e < t.length; e += 1) {
        let i = t[e];
        if (i != null) switch (typeof i) {
          case `function`: {
            let t = i(n);
            typeof t == `function` && (r[e] = t);
            break
          }
          case `object`:
            i.current = n
        }
      }
      e.cleanup = () => {
        for (let e = 0; e < t.length; e += 1) {
          let n = t[e];
          if (n != null) switch (typeof n) {
            case `function`: {
              let t = r[e];
              typeof t == `function` ? t() : n(null);
              break
            }
            case `object`:
              n.current = null
          }
        }
      }
    }
  }
}
var D = 19;

function O(e) {
  return D >= e
}

function k(e) {
  if (!v.isValidElement(e)) return null;
  let t = e,
    n = t.props;
  return (O(19) ? n?.ref : t.ref) ?? null
}
Object.freeze([]);
var A = Object.freeze({});

function j(e, t) {
  let n = {};
  for (let r in e) {
    let i = e[r];
    if (t?.hasOwnProperty(r)) {
      let e = t[r](i);
      e != null && Object.assign(n, e);
      continue
    }
    i === !0 ? n[`data-${r.toLowerCase()}`] = `` : i && (n[`data-${r.toLowerCase()}`] = i.toString())
  }
  return n
}

function M(e, t) {
  return typeof e == `function` ? e(t) : e
}

function N(e, t) {
  return typeof e == `function` ? e(t) : e
}

function P(e, t, n = {}) {
  let r = t.render;
  n.enabled !== !1 && (r = R(r));
  let i = F(t, n, r);
  if (n.enabled === !1) return null;
  let a = n.state ?? A;
  return z(e, r, i, a)
}

function F(e, t, n) {
  let {
    className: i,
    style: a
  } = e, {
    state: o = A,
    ref: s,
    props: c,
    stateAttributesMapping: l,
    enabled: u = !0
  } = t, d = u ? M(i, o) : void 0, f = u ? N(a, o) : void 0, p = u ? j(o, l) : A, m = u && c ? I(c) : void 0, h = u ? r(p, m) ?? {} : A;
  return typeof document < `u` && (u ? h.ref = Array.isArray(s) ? S([h.ref, k(n), ...s]) : x(h.ref, k(n), s) : x(null, null)), u ? (d !== void 0 && (h.className = g(h.className, d)), f !== void 0 && (h.style = r(h.style, f)), h) : A
}

function I(e) {
  return Array.isArray(e) ? o(e) : a(void 0, e)
}
var L = Symbol.for(`react.lazy`);

function R(e) {
  if (e?.$$typeof !== L) return e;
  let t = v.Children.toArray(e)[0];
  return v.isValidElement(t) ? t : e
}

function z(e, t, n, r) {
  if (t) {
    if (typeof t == `function`) return t(n, r);
    let e = a(n, t.props);
    return e.ref = n.ref, v.cloneElement(t, e)
  }
  return B(e, n)
}

function B(e, t) {
  return e === `button` ? (0, v.createElement)(`button`, {
    type: `button`,
    ...t,
    key: t.key
  }) : e === `img` ? (0, v.createElement)(`img`, {
    alt: ``,
    ...t,
    key: t.key
  }) : v.createElement(e, t)
}
var V = e => typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e,
  H = n,
  U = (e, t) => n => {
    if (t?.variants == null) return H(e, n?.class, n?.className);
    let {
      variants: r,
      defaultVariants: i
    } = t, a = Object.keys(r).map(e => {
      let t = n?.[e],
        a = i?.[e];
      if (t === null) return null;
      let o = V(t) || V(a);
      return r[e][o]
    }), o = n && Object.entries(n).reduce((e, t) => {
      let [n, r] = t;
      return r === void 0 || (e[n] = r), e
    }, {});
    return H(e, a, t?.compoundVariants?.reduce((e, t) => {
      let {
        class: n,
        className: r,
        ...a
      } = t;
      return Object.entries(a).every(e => {
        let [t, n] = e;
        return Array.isArray(n) ? n.includes({
          ...i,
          ...o
        } [t]) : {
          ...i,
          ...o
        } [t] === n
      }) ? [...e, n, r] : e
    }, []), n?.class, n?.className)
  };
export {
  a,
  h as i,
  P as n,
  b as r,
  U as t
};