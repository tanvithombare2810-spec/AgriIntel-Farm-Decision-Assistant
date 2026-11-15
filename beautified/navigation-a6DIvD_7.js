import {
  n as e
} from "./jsx-runtime-B-hcVAMW.js";
import {
  d as t,
  l as n,
  u as r
} from "./index-BOVbX_32.js";

function i(e) {
  let i = t();
  return r(i.stores.location, n(e, i))
}
e();

function a() {
  return i({
    select: e => e.pathname
  })
}

function o() {
  let e = t();
  return {
    push: t => e.history.push(t),
    replace: t => e.history.replace(t),
    back: () => e.history.back(),
    refresh: () => e.invalidate(),
    prefetch: e => {}
  }
}
export {
  o as n, a as t
};