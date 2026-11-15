import {
  a as e,
  n as t,
  t as n
} from "./jsx-runtime-B-hcVAMW.js";
import {
  o as r
} from "./index-BOVbX_32.js";
import {
  t as i
} from "./cn-B9URw_CD.js";
import {
  i as a
} from "./farm-storage-BBPkHbBE.js";
var o = e(t(), 1),
  s = n(),
  c = 0;

function l() {
  return String(++c)
}

function u(e) {
  return {
    crop: e.crop,
    district: e.district,
    state: e.state,
    village: e.village,
    areaHectares: e.areaHectares,
    sowingDate: e.sowingDate,
    ndvi: void 0,
    healthStatus: void 0,
    expectedYieldQPerHa: e.expectedYieldQPerHa,
    totalHarvestQ: e.totalHarvestQ,
    currentPrice: void 0,
    marketTrend: void 0,
    recommendedWindow: void 0,
    suggestedMandi: void 0,
    estimatedNetRealization: void 0,
    weatherSummary: void 0,
    dataSource: `demo`
  }
}
async function d(e, t) {
  let n = t.lat ?? 18.2333,
    r = t.lng ?? 76.7167;
  try {
    let t = await fetch(`/api/satellite?lat=${n}&lng=${r}`);
    if (t.ok) {
      let n = await t.json();
      n?.data && (e.ndvi = n.data.latestNdvi, e.healthStatus = n.data.latestStatus, (n.source === `live` || n.source === `sentinel-hub`) && (e.dataSource = `live`))
    }
  } catch {}
  try {
    let i = await fetch(`/api/recommendations`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`
      },
      body: JSON.stringify({
        commodity: t.commodity || t.crop,
        district: t.district,
        state: t.state,
        areaHectares: t.areaHectares,
        lat: n,
        lng: r,
        inputCostTotal: t.inputCostTotal
      })
    });
    if (i.ok) {
      let n = (await i.json())?.data;
      n && (e.recommendedWindow = n.recommendedWindow, e.suggestedMandi = n.suggestedMandi, e.estimatedNetRealization = n.estimatedNetRealization, e.currentPrice = n.scenarios?.[0]?.grossValue ? Math.round(n.scenarios[0].grossValue / (t.totalHarvestQ || 1)) : void 0, e.marketTrend = n.riskLevel === `low` ? `rising` : n.riskLevel === `moderate` ? `stable` : `falling`)
    }
  } catch {}
  try {
    let t = await fetch(`/api/weather?lat=${n}&lng=${r}&action=forecast&days=3`);
    if (t.ok) {
      let n = (await t.json())?.data?.days;
      if (Array.isArray(n) && n.length > 0) {
        let t = n[0];
        e.weatherSummary = `Today: ${t.description||t.weatherCode||`Clear`}, ${t.maxTempC??`--`}°C high, ${t.rainfallMm??0}mm rain`
      }
    }
  } catch {}
  if (!e.currentPrice) {
    e.currentPrice = 4280;
    e.recommendedWindow = 'now';
    e.suggestedMandi = t.nearestMandi || 'Latur';
    e.marketTrend = 'stable';
    e.weatherSummary = e.weatherSummary || 'Clear skies, optimal harvesting conditions';
  }
  return e;
}

function f() {
  let {
    t: e,
    locale: t,
    speechCode: n
  } = r(), [c, f] = (0, o.useState)([]), [p, m] = (0, o.useState)(``), [h, g] = (0, o.useState)(!1), [_, v] = (0, o.useState)(!1), [y, b] = (0, o.useState)(!1), [x, S] = (0, o.useState)(``), [C] = (0, o.useState)(() => {
    if (typeof window > `u`) return !0;
    let e = window;
    return !!(e.SpeechRecognition || e.webkitSpeechRecognition)
  }), [w] = (0, o.useState)(() => typeof window > `u` || `speechSynthesis` in window), T = (0, o.useRef)(null), E = (0, o.useRef)(null), D = (0, o.useRef)(null), O = (0, o.useRef)(null), k = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    let e = a();
    O.current = e;
    let t = u(e);
    k.current = t, d(t, e).then(e => {
      k.current = e
    })
  }, []), (0, o.useEffect)(() => {
    E.current?.scrollIntoView({
      behavior: `smooth`
    })
  }, [c, _]);
  let A = (0, o.useCallback)(async e => {
      if (!e.trim()) return;
      let n = {
        id: l(),
        role: `user`,
        text: e
      };
      f(e => [...e, n]), m(``), v(!0);
      try {
        let n = await (await fetch(`/api/ai`, {
            method: `POST`,
            headers: {
              "Content-Type": `application/json`
            },
            body: JSON.stringify({
              message: e,
              lang: t,
              farmContext: k.current || {}
            })
          })).json(),
          r = {
            id: l(),
            role: `assistant`,
            text: n.reply,
            source: n.source
          };
        f(e => [...e, r])
      } catch {
        let e = {
          mr: `सध्या कनेक्शन उपलब्ध नाही. कृपया पुन्हा प्रयत्न करा.`,
          hi: `अभी कनेक्शन उपलब्ध नहीं है। कृपया दोबारा कोशिश करें।`,
          en: `Connection unavailable. Please try again.`
        };
        f(n => [...n, {
          id: l(),
          role: `assistant`,
          text: e[t] ?? e.en,
          source: `error`
        }])
      } finally {
        v(!1)
      }
    }, [t]),
    j = (0, o.useCallback)(() => {
      if (!C) {
        S(e(`ask.noVoice`));
        return
      }
      S(``);
      let r = window,
        i = r.SpeechRecognition ?? r.webkitSpeechRecognition;
      if (!i) {
        S(e(`ask.noVoice`));
        return
      }
      let a = new i;
      a.continuous = !1, a.interimResults = !1, a.lang = n, D.current = a, a.onstart = () => g(!0), a.onend = () => {
        g(!1), D.current = null
      }, a.onerror = e => {
        g(!1), D.current = null, e.error !== `aborted` && S(t === `mr` ? `बोलणे समजले नाही. कृपया पुन्हा प्रयत्न करा किंवा टाइप करा.` : t === `hi` ? `बोलना समझ नहीं आया। कृपया दोबारा बोलें या टाइप करें।` : `Could not understand. Please try again or type your question.`)
      }, a.onresult = e => {
        let t = e.results[0]?.[0]?.transcript ?? ``;
        t && A(t)
      }, a.start()
    }, [C, n, t, e, A]),
    M = (0, o.useCallback)(() => {
      D.current?.stop()
    }, []),
    N = (0, o.useCallback)(e => {
      if (!w || typeof window > `u`) return;
      window.speechSynthesis.cancel();
      let t = new SpeechSynthesisUtterance(e);
      t.lang = n, t.rate = .9, t.onstart = () => b(!0), t.onend = () => b(!1), t.onerror = () => b(!1), window.speechSynthesis.speak(t)
    }, [n, w]),
    P = (0, o.useCallback)(() => {
      typeof window < `u` && `speechSynthesis` in window && (window.speechSynthesis.cancel(), b(!1))
    }, []),
    F = [{
      key: `q1`,
      text: e(`ask.q1`)
    }, {
      key: `q2`,
      text: e(`ask.q2`)
    }, {
      key: `q3`,
      text: e(`ask.q3`)
    }, {
      key: `q4`,
      text: e(`ask.q4`)
    }];
  return (0, s.jsxs)(`div`, {
    className: `flex flex-col h-full px-4 pt-4 pb-24`,
    children: [(0, s.jsxs)(`div`, {
      className: `mb-4`,
      children: [(0, s.jsx)(`h2`, {
        className: `text-xl font-bold`,
        style: {
          fontFamily: `Outfit, sans-serif`
        },
        children: e(`ask.title`)
      }), (0, s.jsx)(`p`, {
        className: `text-sm text-muted-foreground`,
        children: e(`ask.voicePrompt`)
      })]
    }), (0, s.jsxs)(`div`, {
      className: `flex-1 overflow-y-auto space-y-3 mb-4 min-h-[200px]`,
      children: [c.length === 0 && (0, s.jsxs)(`div`, {
        className: `text-center py-8`,
        children: [(0, s.jsx)(`div`, {
          className: `w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3`,
          children: (0, s.jsx)(`span`, {
            className: `text-4xl`,
            children: `🎙️`
          })
        }), (0, s.jsx)(`p`, {
          className: `text-sm text-muted-foreground font-medium`,
          children: e(`ask.voicePrompt`)
        }), (0, s.jsx)(`p`, {
          className: `text-xs text-muted-foreground mt-1`,
          children: e(`ask.placeholder`)
        })]
      }), c.map(n => (0, s.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [(0, s.jsx)(`div`, {
          className: i(`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed`, n.role === `user` ? `ml-auto bg-primary text-primary-foreground rounded-br-sm` : `mr-auto bg-card border border-border rounded-bl-sm`),
          children: n.text
        }), n.role === `assistant` && w && (0, s.jsxs)(`div`, {
          className: `flex items-center gap-1 mr-auto ml-1`,
          children: [(0, s.jsxs)(`button`, {
            onClick: () => y ? P() : N(n.text),
            className: `text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 px-2 py-0.5 rounded-lg hover:bg-muted`,
            "aria-label": y ? `Stop speaking` : `Play response`,
            children: [y ? `⏹️` : `🔊`, ` `, (0, s.jsx)(`span`, {
              children: y ? t === `mr` ? `थांबा` : t === `hi` ? `रुकें` : `Stop` : e(`common.listen`)
            })]
          }), n.source && (0, s.jsx)(`span`, {
            className: i(`text-[10px] px-1.5 py-0.5 rounded-full`, n.source === `demo` || n.source === `error` ? `bg-amber-50 text-amber-600 border border-amber-200` : `bg-emerald-50 text-emerald-600 border border-emerald-200`),
            children: n.source === `demo` ? `Demo` : n.source === `gemini` ? `AI` : n.source === `error` ? `Offline` : n.source
          })]
        })]
      }, n.id)), _ && (0, s.jsxs)(`div`, {
        className: `max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 bg-card border border-border`,
        children: [(0, s.jsx)(`p`, {
          className: `text-xs text-muted-foreground mb-1`,
          children: e(`ask.thinking`)
        }), (0, s.jsxs)(`div`, {
          className: `flex gap-1`,
          children: [(0, s.jsx)(`div`, {
            className: `w-2 h-2 bg-muted-foreground rounded-full animate-bounce`,
            style: {
              animationDelay: `0ms`
            }
          }), (0, s.jsx)(`div`, {
            className: `w-2 h-2 bg-muted-foreground rounded-full animate-bounce`,
            style: {
              animationDelay: `150ms`
            }
          }), (0, s.jsx)(`div`, {
            className: `w-2 h-2 bg-muted-foreground rounded-full animate-bounce`,
            style: {
              animationDelay: `300ms`
            }
          })]
        })]
      }), (0, s.jsx)(`div`, {
        ref: E
      })]
    }), c.length === 0 && (0, s.jsxs)(`div`, {
      className: `mb-3`,
      children: [(0, s.jsx)(`p`, {
        className: `text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2`,
        children: e(`ask.suggestedQuestions`)
      }), (0, s.jsx)(`div`, {
        className: `space-y-1.5`,
        children: F.map(e => (0, s.jsx)(`button`, {
          id: `suggested-q-${e.key}`,
          onClick: () => A(e.text),
          className: `w-full text-left text-sm px-3 py-2.5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200`,
          children: (0, s.jsx)(`span`, {
            className: `text-foreground`,
            children: e.text
          })
        }, e.key))
      })]
    }), x && (0, s.jsx)(`p`, {
      className: `text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-2`,
      children: x
    }), !C && c.length === 0 && (0, s.jsx)(`p`, {
      className: `text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-2`,
      children: e(`ask.noVoice`)
    }), (0, s.jsxs)(`div`, {
      className: `flex gap-2 items-end bg-card border border-border rounded-2xl px-3 py-2`,
      children: [(0, s.jsx)(`textarea`, {
        ref: T,
        id: `ask-text-input`,
        value: p,
        onChange: e => m(e.target.value),
        onKeyDown: e => {
          e.key === `Enter` && !e.shiftKey && (e.preventDefault(), A(p))
        },
        placeholder: e(`ask.placeholder`),
        rows: 1,
        className: `flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none outline-none leading-relaxed`,
        style: {
          minHeight: `24px`,
          maxHeight: `120px`
        }
      }), (0, s.jsxs)(`div`, {
        className: `flex gap-1.5 shrink-0`,
        children: [(0, s.jsx)(`button`, {
          id: `ask-send-button`,
          onClick: () => A(p),
          disabled: !p.trim() || _,
          className: `w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors`,
          "aria-label": `Send`,
          children: `→`
        }), (0, s.jsx)(`button`, {
          id: `ask-voice-button`,
          onClick: h ? M : j,
          disabled: _,
          className: i(`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200`, h ? `bg-red-500 text-white animate-pulse` : `bg-secondary text-secondary-foreground hover:bg-secondary/80`, !C && `opacity-40 cursor-not-allowed`),
          "aria-label": h ? `Stop listening` : e(`ask.speak`),
          children: h ? `⏹️` : `🎙️`
        })]
      })]
    }), (0, s.jsx)(`p`, {
      className: `text-[10px] text-muted-foreground text-center mt-1.5`,
      children: t === `mr` ? `उत्तरे AI अंदाज आहेत. कृती करण्यापूर्वी खात्री करा.` : t === `hi` ? `उत्तर AI अनुमान हैं। कृपया कार्य करने से पहले सत्यापित करें।` : `Responses are AI-generated estimates. Verify before acting.`
    })]
  })
}
var p = f;
export {
  p as component
};