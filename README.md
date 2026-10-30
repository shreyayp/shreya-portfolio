# Shreya Y P — Analytics Portfolio (Next.js)

A distinctive, responsive portfolio built with **Next.js App Router, React, TypeScript, Framer Motion, and Lucide icons**.

## Visual direction
An editorial data-studio aesthetic rather than a generic admin dashboard:
- Ink / graphite background, acid-lime accent, muted blue details
- Space Grotesk + Playfair Display typography
- Animated orbital data motif and reveal-on-scroll transitions
- Project case-study modals, interactive capability selector, responsive navigation
- Light/dark theme toggle

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build
```bash
npm run build
```

## Deploy
Recommended: import this project into Vercel and deploy with the default Next.js settings. The project currently has `output: "export"` enabled for static export; remove that line from `next.config.ts` if you prefer a standard server-rendered Vercel deployment. If keeping static export, deploy the generated `out/` folder to a static host.

## Content accuracy
Project summaries are based on the supplied README files:
- RetailPulse: sales and inventory ETL, SQLite, SQL, Streamlit / Plotly dashboard.
- WeatherScope India: Open-Meteo API ingestion, SQLite snapshots, reports and Power BI.
- TrustLayer: NYC 311 data quality pipeline; explicitly **not** a dashboard.

Caveats from the source documentation are preserved in the case-study details. No unverified performance metrics, customer claims, or credential verification links have been added.
