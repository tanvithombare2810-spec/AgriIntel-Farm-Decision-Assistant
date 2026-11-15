# KisanWise (AgriIntel) — Fixed & Optimized Edition

This package contains the fully audited, debugged, and optimized version of the **KisanWise (AgriIntel)** smart farm decision assistant ([kisanwise.lovable.app](https://kisanwise.lovable.app/)).

---

## 🛠️ Summary of Fixes Applied

### 1. Dashboard 502 / Open-Meteo 429 Rate-Limit Crash Resiliency
- **File**: `assets/_app.dashboard-BiHcAE1f.js`
- **Fix**: Added `generateDashboardFallback(farm)` and `generateWeatherFallback(lat, lng)`. If `/api/recommendations` or `/api/weather` returns HTTP 502 or 429, the dashboard seamlessly generates reliable, deterministic estimates and weather data rather than crashing on a blank `"Live data unavailable"` screen.

### 2. Onboarding Step 3 Land Record Deadlock
- **File**: `assets/onboarding-4V_VkHJP.js`
- **Fix**: When `/api/land-record` returns `NOT_CONFIGURED` or `NOT_FOUND`, the component automatically toggles to the `"map"` tab (`setTimeout(() => setActiveTab('map'), 800)`) and validation `M()` permits proceeding using the district centroid coordinates. Farmers are no longer permanently trapped on Step 3.

### 3. Onboarding Step 5 Confirmation Header Bug
- **File**: `assets/onboarding-4V_VkHJP.js`
- **Fix**: Replaced incorrect title key `t("onboarding.step4")` ("Farm Details") with `t("onboarding.step5")` ("Confirmation").

### 4. Homepage Card 1 Lockout Barrier
- **File**: `assets/routes-oj0J3F39.js`
- **Fix**: Converted Card 1 CTA (*"Open Today's Dashboard →"*) to automatically invoke `enterDemoMode()` if the user is unauthenticated before routing to `/dashboard`. First-time users are no longer blocked by the lock screen modal.

### 5. Farm Area Consistency Mismatch
- **File**: `assets/routes-oj0J3F39.js`
- **Fix**: Corrected the hardcoded `2.0 ha (Soybean)` on the landing page to `3.5 ha (Soybean)`, matching the database default and the $3.5 \text{ ha} \times 19.5 \text{ q/ha} = 68.25 \text{ quintals}$ harvest model.

### 6. Mobile Phone Number Login
- **File**: `assets/login-DjDaIvC5.js`
- **Fix**: Replaced `type="email"` with `type="text"` and updated input placeholder to `farmer@example.com or 10-digit mobile` so Indian farmers entering 10-digit phone numbers are not blocked by browser HTML5 email validation.

### 7. Mobile Viewport & Navigation Bar Overlap
- **File**: `assets/_app.ask-CGkV8kjd.js`
- **Fix**: Updated container padding from `pb-2` to `pb-24` so the textarea and microphone buttons sit comfortably above the fixed bottom navigation bar on mobile screens.

### 8. Voice AI Context Fallback
- **File**: `assets/_app.ask-CGkV8kjd.js`
- **Fix**: Added fallback farm pricing context if the live recommendations endpoint fails, ensuring the AI assistant always knows the active crop and current market price.

### 9. Distance-Based Mandi Transport Calculation
- **File**: `assets/_app.sell-BG_RaN20.js`
- **Fix**: Replaced flat ₹18/qtl transport cost with distance-scaled rates (e.g. ₹18 for Latur, ₹30 for Solapur, ₹45 for Pune) in the offline fallback model, correctly honoring the app's selling proposition.

### 10. My Farm page crash
- **Files**: `assets/dynamic-C4CD9P0Z.js`, `assets/_app.farm-BJlrt6ke.js`
- **Fix**: Lazy-loaded map chunks are now wrapped in an error boundary, so a map/chunk failure shows a message instead of "This page didn't load". The `/api/satellite` response is now normalized (`readings`, `fieldBoundary`, `healthZones` default to safe values) before it is stored, and the NDVI history chart tolerates missing readings.

### 11. Market page empty history / mandi list
- **File**: `assets/_app.market-yMOOPnTJ.js`
- **Fix**: Removed the hardcoded ₹4,280 / ₹4,300 fallbacks that made the headline look real when no data loaded (now shows "—"). A 200 response with no `data` now triggers the demo fallback. If live data lacks `priceHistory` or `nearbyMandis`, those sections are filled from demo data and tagged "Demo data". Empty states now show messages, and mandi rows tolerate missing fields.

### 12. Honest live / demo labelling
- **Files**: `assets/index-BOVbX_32.js`, `assets/routes-oj0J3F39.js`, `assets/_app.dashboard-BiHcAE1f.js`, HTML meta tags
- **Fix**: Removed blanket "live" claims (sample-field banner, meta descriptions, landing copy). Each card keeps its own Live / Demo / Unavailable badge; the dashboard's offline recommendation is tagged "Demo estimate".

---

## 📁 Package Structure

```
kisanwise_fixed/
├── assets/                    # Production-ready JavaScript bundles and CSS with fixes
│   ├── _app.dashboard-BiHcAE1f.js
│   ├── onboarding-4V_VkHJP.js
│   ├── routes-oj0J3F39.js
│   ├── login-DjDaIvC5.js
│   ├── _app.ask-CGkV8kjd.js
│   ├── _app.sell-BG_RaN20.js
│   └── ... (all app chunks)
├── pages/                     # Complete HTML pages
│   ├── index.html
│   ├── dashboard.html
│   ├── onboarding.html
│   ├── farm.html
│   ├── market.html
│   ├── sell.html
│   ├── ask.html
│   ├── login.html
│   ├── signup.html
│   └── history.html
├── beautified/                # Clean, unminified, formatted source code for reference
└── README.md
```

---

## 🚀 How to Run Locally

You can test and preview the application locally using Python's built-in HTTP server:

```bash
# From within the extracted zip folder:
python -m http.server 8000
```

Then open `http://localhost:8000/pages/index.html` in your web browser.
