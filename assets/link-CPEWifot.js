import {
  t as e
} from "./jsx-runtime-B-hcVAMW.js";
import {
  c as t
} from "./index-BOVbX_32.js";
var n = e();

function r({
  href: e,
  prefetch: r,
  replace: i,
  ...a
}) {
  if (/^(https?:|mailto:|tel:|#)/.test(e)) return (0, n.jsx)(`a`, {
    href: e,
    ...a
  });
  let [o, s] = e.split(`#`), [c, l] = (o || `/`).split(`?`), u = l ? Object.fromEntries(new URLSearchParams(l)) : void 0;
  return (0, n.jsx)(t, {
    to: c,
    search: u,
    hash: s,
    replace: i,
    ...a
  })
}
export {
  r as t
};