# PraxisNova AI - Website

Vollstaendige Next.js Website fuer praxisnovaai.com

## Projektstruktur

```
src/app/
  page.tsx                          -> Homepage (/)
  layout.tsx                        -> Root Layout
  globals.css                       -> Global Styles
  automatisierung/
    page.tsx                        -> Automatisierung Uebersicht (/automatisierung)
    immobilien/page.tsx             -> Immobilienmakler Paket (/automatisierung/immobilien)
    handwerk/page.tsx               -> Handwerk Paket (/automatisierung/handwerk)
    bau/page.tsx                    -> Bauunternehmen Paket (/automatisierung/bau)
  ueber-uns/page.tsx                -> Ueber uns (/ueber-uns)
  impressum/page.tsx                -> Impressum (/impressum)
  datenschutz/page.tsx              -> Datenschutz (/datenschutz)

src/components/
  Nav.tsx                           -> Navigation (sticky, mobile-responsive)
  Footer.tsx                        -> Footer mit Links

public/images/
  anjuli.jpg                        -> Foto Anjuli Hertle
  samantha.jpg                      -> Foto Samantha Meyer
```

## Setup

### 1. Abhaengigkeiten installieren

```bash
npm install
```

### 2. Umgebungsvariablen

Erstelle eine `.env.local` Datei im Root-Verzeichnis:

```
HUBSPOT_ACCESS_TOKEN=dein_token
HUBSPOT_PORTAL_ID=147989409
BREVO_API_KEY=dein_key
BREVO_LIST_ID=3
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/meyer-samantha-praxisnovaai/30min
NEXT_PUBLIC_SITE_URL=https://www.praxisnovaai.com
```

### 3. Lokal starten

```bash
npm run dev
```

Oeffne http://localhost:3000

### 4. Build testen

```bash
npm run build
```

## Deployment auf Vercel

### Schritt 1: GitHub Repo anlegen

```bash
git init
git add .
git commit -m "Initial commit - PraxisNova AI Website"
git branch -M main
git remote add origin https://github.com/DEIN_USERNAME/praxisnova-ai.git
git push -u origin main
```

### Schritt 2: Vercel verbinden

1. Gehe zu vercel.com
2. "New Project" > GitHub Repo auswaehlen
3. Framework: Next.js (wird automatisch erkannt)
4. Environment Variables hinzufuegen (alle aus .env.local)
5. Deploy klicken

### Schritt 3: Domain verbinden (praxisnovaai.com)

1. In Vercel: Project Settings > Domains > "www.praxisnovaai.com" hinzufuegen
2. Vercel zeigt dir zwei DNS-Eintraege:
   - A Record: @ -> 76.76.21.21
   - CNAME: www -> cname.vercel-dns.com
3. In Squarespace (wo eure Domain verwaltet wird):
   - Gehe zu Domains > DNS-Einstellungen
   - Alte Eintraege entfernen (oder deaktivieren)
   - Neue A und CNAME Eintraege hinzufuegen
4. Warten auf DNS-Propagation (meist unter 2 Stunden, max. 48h)

## Noch auszufuellen (Impressum)

Im Impressum muessen noch eingetragen werden:
- Vollstaendige Adresse
- USt-ID (falls vorhanden)
- Handelsregisternummer (falls GmbH/UG)

## Technologie

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (Animationen)
- Keine externen UI-Bibliotheken

## Farben (Brand)

- Hintergrund: #0A0A0A (bg), #060606 (bg-dark)
- Akzent: #E8472A (coral / orange-rot)
- Karten: #111111
- Text muted: #555555
