import {
  i as e,
  r as t
} from "./index-BOVbX_32.js";
var n = {
    farm: {
      id: `demo-soybean-maharashtra`,
      userId: `demo-user-001`,
      name: `Patil Farm`,
      state: `Maharashtra`,
      district: `Latur`,
      village: `Ausa`,
      lat: 18.2333,
      lng: 76.7167,
      areaHectares: 3.5,
      fieldGeoJson: {
        type: `Polygon`,
        coordinates: [
          [
            [76.7145, 18.2312],
            [76.7189, 18.2312],
            [76.7189, 18.2354],
            [76.7145, 18.2354],
            [76.7145, 18.2312]
          ]
        ]
      }
    },
    season: {
      id: `demo-season-kharif-2026`,
      farmId: `demo-soybean-maharashtra`,
      crop: `soybean`,
      season: `kharif_2026`,
      sowingDate: `2026-06-20`,
      expectedHarvestDate: `2026-10-25`,
      areaHectares: 3.5,
      soilType: `black`,
      irrigationType: `rainfed`,
      inputCostPerHa: 18e3
    }
  },
  r = {
    farmSeasonId: `demo-season-kharif-2024`,
    predictedAt: `2024-10-01T07:00:00+05:30`,
    modelVersion: `v1`,
    expectedYieldQPerHa: 19.5,
    totalHarvestQ: 68.25,
    confidenceLow: 16.2,
    confidenceHigh: 22.8,
    source: `demo`,
    explanation: [{
      factor: `Historical yield data`,
      value: `Avg 18.2 qtl/ha in Latur (last 5 years)`,
      impactDirection: `positive`,
      impactMagnitude: `high`
    }, {
      factor: `Weather conditions`,
      value: `580 mm total rainfall — near average`,
      impactDirection: `positive`,
      impactMagnitude: `medium`
    }, {
      factor: `Crop health (NDVI)`,
      value: `Peak NDVI 0.78 — good vegetation`,
      impactDirection: `positive`,
      impactMagnitude: `medium`
    }, {
      factor: `Late rainfall stress`,
      value: `Heavy rain forecast near harvest`,
      impactDirection: `negative`,
      impactMagnitude: `low`
    }, {
      factor: `Soil type`,
      value: `Black soil — suitable for soybean`,
      impactDirection: `positive`,
      impactMagnitude: `low`
    }],
    inputSnapshot: {
      modelVersion: `v1`,
      crop: `soybean`,
      state: `Maharashtra`,
      district: `Latur`,
      season: `kharif`,
      sowingDate: `2024-06-20`,
      areaHectares: 3.5,
      soilType: `black`,
      irrigationType: `rainfed`,
      avgTempC: 28.4,
      totalRainfallMm: 580,
      avgHumidityPct: 74,
      rainyDaysCount: 42,
      latestNdvi: .62,
      avgNdvi: .59,
      historicalAvgYieldQPerHa: 18.2
    }
  },
  i = `agriintel_farm`,
  a = class {
    getStoredFarmSync() {
      if (typeof window > `u`) return null;
      try {
        let e = localStorage.getItem(i);
        return e ? JSON.parse(e) : null
      } catch (e) {
        return console.warn(`[LocalFarmStorage] Error reading localStorage:`, e), null
      }
    }
    async getFarm(e) {
      return this.getStoredFarmSync()
    }
    async saveFarm(e, t) {
      if (!(typeof window > `u`)) try {
        localStorage.setItem(i, JSON.stringify(e)), window.dispatchEvent(new Event(`storage`))
      } catch (e) {
        console.error(`[LocalFarmStorage] Error writing to localStorage:`, e)
      }
    }
    async resetToDemo() {
      if (!(typeof window > `u`)) try {
        localStorage.removeItem(i), window.dispatchEvent(new Event(`storage`))
      } catch (e) {
        console.error(`[LocalFarmStorage] Error resetting to demo:`, e)
      }
    }
  },
  o = new class {
    localFallback = new a;
    getStoredFarmSync() {
      return this.localFallback.getStoredFarmSync()
    }
    async getFarm(n) {
      let r = t();
      if (!r || !e() || !n) return this.localFallback.getFarm(n);
      try {
        let {
          data: e,
          error: t
        } = await r.from(`farms`).select(`*`).eq(`user_id`, n).order(`updated_at`, {
          ascending: !1
        }).limit(1).maybeSingle();
        if (t) return console.warn(`[SupabaseFarmStorage] Query error, falling back to local:`, t.message), this.localFallback.getFarm(n);
        if (e) {
          let t = {
            id: e.id,
            userId: e.user_id,
            name: e.name,
            crop: e.crop,
            commodity: e.commodity || e.crop,
            state: e.state,
            district: e.district,
            village: e.village,
            areaHectares: e.area_hectares,
            sowingDate: e.sowing_date,
            soilType: e.soil_type,
            irrigationType: e.irrigation_type,
            lat: e.lat,
            lng: e.lng,
            fieldGeoJson: e.field_geojson,
            inputCosts: e.input_cost_per_ha,
            inputCostPerHa: e.input_cost_per_ha,
            createdAt: e.created_at
          };
          return await this.localFallback.saveFarm(t, n), t
        }
        return this.localFallback.getFarm(n)
      } catch (e) {
        return console.warn(`[SupabaseFarmStorage] Network/DB exception, falling back to local:`, e), this.localFallback.getFarm(n)
      }
    }
    async saveFarm(n, r) {
      await this.localFallback.saveFarm(n, r);
      let i = t();
      if (!i || !e()) return;
      let a = r || n.userId;
      if (!(!a || a.startsWith(`demo-`) || a === `local-user`)) try {
        let e = {
            id: n.id || `farm-${Date.now()}`,
            user_id: a,
            name: n.name || `My Farm`,
            crop: n.crop,
            commodity: n.commodity || n.crop,
            state: n.state || `Maharashtra`,
            district: n.district || `Latur`,
            village: n.village || ``,
            area_hectares: typeof n.areaHectares == `number` ? n.areaHectares : parseFloat(String(n.areaHectares || 3.5)),
            sowing_date: n.sowingDate,
            soil_type: n.soilType,
            irrigation_type: n.irrigationType,
            lat: n.lat ?? n.latitude,
            lng: n.lng ?? n.longitude,
            field_geojson: n.fieldGeoJson,
            input_cost_per_ha: n.inputCostPerHa ?? n.inputCosts,
            updated_at: new Date().toISOString()
          },
          {
            error: t
          } = await i.from(`farms`).upsert(e);
        t && console.warn(`[SupabaseFarmStorage] Upsert warning (kept in local):`, t.message)
      } catch (e) {
        console.warn(`[SupabaseFarmStorage] Cloud sync failed, local copy preserved:`, e)
      }
    }
    async resetToDemo() {
      await this.localFallback.resetToDemo()
    }
  },
  s = {
    Latur: {
      lat: 18.4088,
      lng: 76.5604,
      nearestMandi: `Latur`
    },
    Sangli: {
      lat: 16.8524,
      lng: 74.5815,
      nearestMandi: `Sangli`
    },
    Nanded: {
      lat: 19.1383,
      lng: 77.321,
      nearestMandi: `Nanded`
    },
    Solapur: {
      lat: 17.6599,
      lng: 75.9064,
      nearestMandi: `Solapur`
    },
    Pune: {
      lat: 18.5204,
      lng: 73.8567,
      nearestMandi: `Pune`
    },
    Osmanabad: {
      lat: 18.186,
      lng: 76.0419,
      nearestMandi: `Latur`
    },
    Satara: {
      lat: 17.6805,
      lng: 74.0183,
      nearestMandi: `Pune`
    },
    Kolhapur: {
      lat: 16.705,
      lng: 74.2433,
      nearestMandi: `Sangli`
    },
    Ahmednagar: {
      lat: 19.0948,
      lng: 74.748,
      nearestMandi: `Pune`
    },
    Nashik: {
      lat: 19.9975,
      lng: 73.7898,
      nearestMandi: `Pune`
    },
    Aurangabad: {
      lat: 19.8762,
      lng: 75.3433,
      nearestMandi: `Nanded`
    },
    Jalna: {
      lat: 19.8347,
      lng: 75.8816,
      nearestMandi: `Nanded`
    },
    Beed: {
      lat: 18.9891,
      lng: 75.7601,
      nearestMandi: `Latur`
    },
    Parbhani: {
      lat: 19.2686,
      lng: 76.7708,
      nearestMandi: `Nanded`
    },
    Hingoli: {
      lat: 19.7196,
      lng: 77.1485,
      nearestMandi: `Nanded`
    },
    Buldhana: {
      lat: 20.5292,
      lng: 76.1843,
      nearestMandi: `Nanded`
    },
    Washim: {
      lat: 20.1095,
      lng: 77.135,
      nearestMandi: `Nanded`
    },
    Yavatmal: {
      lat: 20.3888,
      lng: 78.1204,
      nearestMandi: `Nanded`
    }
  },
  c = {
    soybean: 19.5,
    wheat: 28,
    cotton: 12,
    onion: 80,
    tur: 10,
    jowar: 15,
    sugarcane: 750
  },
  l = {
    soybean: 18e3,
    wheat: 16e3,
    cotton: 25e3,
    onion: 35e3,
    tur: 15e3,
    jowar: 12e3,
    sugarcane: 45e3
  },
  u = {
    black: 1.05,
    alluvial: 1.03,
    loamy: 1.02,
    red: .98,
    sandy: .92
  },
  d = {
    irrigated: 1.15,
    partial: 1.05,
    rainfed: 1
  };

function f() {
  return o.getStoredFarmSync()
}

function p(e) {
  o.saveFarm(e)
}

function m() {
  let e = f();
  if (e && (e.crop || e.district || e.areaHectares)) {
    let t = String(e.crop || e.commodity || `soybean`).toLowerCase(),
      i = e.district || `Latur`,
      a = e.state || `Maharashtra`,
      o = e.village || ``,
      f = e.areaHectares ?? e.area ?? 3.5,
      p = typeof f == `number` ? f : parseFloat(String(f)),
      m = isNaN(p) || p <= 0 ? 3.5 : p,
      h = s[i] ?? {
        lat: 18.2333,
        lng: 76.7167,
        nearestMandi: `Latur`
      },
      g = typeof e.lat == `number` ? e.lat : typeof e.latitude == `number` ? e.latitude : h.lat,
      _ = typeof e.lng == `number` ? e.lng : typeof e.longitude == `number` ? e.longitude : h.lng,
      v = e.soilType || `black`,
      y = e.irrigationType || `rainfed`,
      b = c[t] ?? r.expectedYieldQPerHa ?? 19.5,
      x = u[v] ?? 1,
      S = d[y] ?? 1,
      C = Math.round(b * x * S * 10) / 10,
      w = Math.round(m * C * 100) / 100,
      T;
    T = e.inputCostPerHa ? Number(e.inputCostPerHa) : e.inputCosts ? Number(e.inputCosts) : l[t] ?? 18e3;
    let E = e.inputCostTotal ? Number(e.inputCostTotal) : Math.round(m * T);
    return {
      id: e.id || `farm-custom`,
      crop: t,
      commodity: t,
      state: a,
      district: i,
      village: o,
      areaHectares: m,
      sowingDate: e.sowingDate || `${new Date().getFullYear()}-06-20`,
      season: `Kharif ${new Date().getFullYear()}`,
      soilType: v,
      irrigationType: y,
      lat: g,
      lng: _,
      nearestMandi: h.nearestMandi,
      inputCostPerHa: T,
      inputCostTotal: E,
      expectedYieldQPerHa: C,
      totalHarvestQ: w,
      isCustomFarm: !0,
      fieldGeoJson: e.fieldGeoJson ?? n.farm.fieldGeoJson
    }
  }
  let t = n.farm,
    i = n.season,
    a = r;
  return {
    id: t.id,
    crop: i.crop,
    commodity: i.crop,
    state: t.state,
    district: t.district,
    village: t.village,
    areaHectares: t.areaHectares,
    sowingDate: i.sowingDate,
    season: `Kharif ${new Date().getFullYear()}`,
    soilType: i.soilType,
    irrigationType: i.irrigationType,
    lat: t.lat,
    lng: t.lng,
    nearestMandi: `Latur`,
    inputCostPerHa: i.inputCostPerHa,
    inputCostTotal: Math.round(t.areaHectares * i.inputCostPerHa),
    expectedYieldQPerHa: a.expectedYieldQPerHa,
    totalHarvestQ: a.totalHarvestQ,
    isCustomFarm: !1,
    fieldGeoJson: t.fieldGeoJson
  }
}
var h = {
  soybean: {
    en: `Soybean`,
    mr: `सोयाबीन`,
    hi: `सोयाबीन`
  },
  wheat: {
    en: `Wheat`,
    mr: `गहू`,
    hi: `गेहूं`
  },
  cotton: {
    en: `Cotton`,
    mr: `कापूस`,
    hi: `कपास`
  },
  onion: {
    en: `Onion`,
    mr: `कांदा`,
    hi: `प्याज`
  },
  tur: {
    en: `Tur`,
    mr: `तूर`,
    hi: `अरहर / तूर`
  },
  jowar: {
    en: `Jowar`,
    mr: `ज्वारी`,
    hi: `ज्वार`
  },
  sugarcane: {
    en: `Sugarcane`,
    mr: `ऊस`,
    hi: `गन्ना`
  }
};

function g(e, t) {
  if (!e) return t === `mr` || t === `hi` ? `सोयाबीन` : `Soybean`;
  let n = e.toLowerCase();
  if (t && (t === `mr` || t === `hi`)) {
    let e = h[n];
    if (e) return e[t]
  }
  return e.charAt(0).toUpperCase() + e.slice(1)
}
export {
  p as a, m as i, s as n, r as o, g as r, n as s, l as t
};