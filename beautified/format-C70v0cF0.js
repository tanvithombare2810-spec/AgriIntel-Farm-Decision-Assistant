function e(e, t = 0) {
  return new Intl.NumberFormat(`en-IN`, {
    style: `currency`,
    currency: `INR`,
    minimumFractionDigits: t,
    maximumFractionDigits: t
  }).format(e)
}

function t(e, t = 0) {
  return new Intl.NumberFormat(`en-IN`, {
    minimumFractionDigits: t,
    maximumFractionDigits: t
  }).format(e)
}

function n(e) {
  return new Date(e).toLocaleDateString(`en-IN`, {
    day: `numeric`,
    month: `short`,
    year: `numeric`
  })
}

function r(e) {
  return new Date(e).toLocaleDateString(`en-IN`, {
    day: `numeric`,
    month: `short`
  })
}

function i(e) {
  return e.toFixed(2)
}

function a(e) {
  return `${t(e,2)} ha`
}

function o(e) {
  return `${t(e,1)} qtl`
}

function s(e) {
  return `${e>=0?`+`:``}${e.toFixed(1)}%`
}
export {
  s as a, i, a as n, o, e as r, r as s, n as t
};