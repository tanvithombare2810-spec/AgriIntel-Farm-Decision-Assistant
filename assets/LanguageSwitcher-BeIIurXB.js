import {
  t as e
} from "./jsx-runtime-B-hcVAMW.js";
import {
  a as t,
  o as n
} from "./index-BOVbX_32.js";
import {
  t as r
} from "./cn-B9URw_CD.js";
var i = e();

function a() {
  let {
    locale: e,
    setLocale: a
  } = n();
  return (0, i.jsx)(`div`, {
    className: `flex items-center gap-0.5 bg-muted rounded-full p-0.5`,
    children: t.map(t => (0, i.jsx)(`button`, {
      id: `lang-switch-${t.code}`,
      onClick: () => a(t.code),
      className: r(`px-2 py-0.5 rounded-full text-[10px] font-medium transition-all duration-200 leading-tight`, e === t.code ? `bg-primary text-primary-foreground shadow-sm` : `text-muted-foreground hover:text-foreground`),
      "aria-label": `Switch to ${t.labelEn}`,
      "aria-pressed": e === t.code,
      children: t.label
    }, t.code))
  })
}
export {
  a as t
};