# PraxisNova AI – Website

Marketing-Website für [praxisnovaai.com](https://www.praxisnovaai.com). KI-Automatisierung für Bau, Handwerk und Immobilien.

## Features

- **9 Seiten**: Homepage, Potenzialrechner, 3 Branchenlösungen, Über uns, Impressum, Datenschutz
- **KI-Potenzialrechner**: Interaktiver ROI-Rechner mit 5 Fragen
- **Lead-Erfassung**: Exit-Intent Popup mit HubSpot CRM Integration
- **DSGVO-konform**: Cookie-Consent-Banner mit 3 Stufen, Consent-Verwaltung im Footer
- **Tracking**: Website-Klicks, Scroll-Tiefe, UTM-Parameter (nur mit Consent)
- **Schema.org**: Organization, WebSite, 4 Service-Schemas
- **SEO**: Per-Page Metadata, Canonical URLs, Open Graph, Sitemap

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (Animationen)
- Geist Font

## Setup

```bash
npm install
cp .env.example .env.local   # Werte ausfüllen
npm run dev                   # http://localhost:3000
```

## Umgebungsvariablen

| Variable | Beschreibung |
|----------|-------------|
| `HUBSPOT_ACCESS_TOKEN` | HubSpot CRM API Token |
| `HUBSPOT_PORTAL_ID` | HubSpot Portal ID |
| `BREVO_API_KEY` | Brevo E-Mail Marketing Key |
| `BREVO_LIST_ID` | Brevo Kontaktliste ID |
| `INBOUND_WEBHOOK_SECRET` | Secret für Sales Control Webhook |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly Buchungslink |
| `NEXT_PUBLIC_SITE_URL` | Website URL |

## Projektstruktur

```
src/
  app/
    page.tsx                           – Homepage
    potenzialrechner/page.tsx          – KI-Potenzialrechner
    automatisierung/page.tsx           – Automatisierung Übersicht
    automatisierung/immobilien/        – Immobilienmakler Paket
    automatisierung/handwerk/          – Handwerk Paket
    automatisierung/bau/               – Bauunternehmen Paket
    ueber-uns/page.tsx                 – Über uns
    impressum/page.tsx                 – Impressum
    datenschutz/page.tsx               – Datenschutzerklärung
    api/lead/route.ts                  – Lead-Erfassung (HubSpot + Webhook)
    api/track/route.ts                 – Click-Tracking (Sales Control)
  components/
    Nav.tsx                            – Navigation (sticky, responsive)
    Footer.tsx                         – Footer mit Cookie-Einstellungen
    Popup.tsx                          – Exit-Intent Lead-Capture
    CookieConsentBanner.tsx            – DSGVO Cookie-Banner
    WebsiteTracker.tsx                 – Analytics (consent-aware)
  lib/
    tracking.ts                        – Tracking-Funktionen (consent-aware)
  config/
    site.ts                            – Zentrale Konfiguration
```

## API-Sicherheit

- Input-Validierung (E-Mail-Regex, Feldlängen)
- Rate Limiting (5/min Lead, 30/min Track)
- CORS (nur praxisnovaai.com)
- Security Headers (X-Content-Type-Options, X-Frame-Options, CSP)

## Brand-Farben

| Element | Hex |
|---------|-----|
| Hintergrund | #0A0A0A |
| Akzent (Coral) | #E8472A |
| Karten | #111111 |
| Text muted | #555555 |
