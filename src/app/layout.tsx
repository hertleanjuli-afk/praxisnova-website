import './globals.css'
import { GeistSans } from 'geist/font/sans'
import Popup from '@/components/Popup'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import WebsiteTracker from '@/components/WebsiteTracker'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PraxisNova AI | KI-Automatisierung für Bau, Handwerk & Immobilien',
  description: 'KI-Schulung und Prozessautomatisierung für Bau, Handwerk und Immobilien. Workshops, individuelle Automatisierung und Beratung. DSGVO-konform auf EU-Servern.',
  metadataBase: new URL('https://www.praxisnovaai.com'),
  alternates: {
    canonical: '/',
    languages: {
      de: 'https://www.praxisnovaai.com',
    },
  },
  openGraph: {
    title: 'PraxisNova AI | KI-Automatisierung für Bau, Handwerk & Immobilien',
    description: '8,3 Stunden pro Woche verschwendet \u2013 wir ändern das. KI-Workshops und Prozessautomatisierung für Bau, Handwerk und Immobilien.',
    url: 'https://www.praxisnovaai.com',
    siteName: 'PraxisNova AI',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PraxisNova AI | KI-Automatisierung für Bau, Handwerk & Immobilien',
    description: '8,3 Stunden pro Woche verschwendet \u2013 wir ändern das mit KI.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={GeistSans.className}>
      <head>
        <link rel="alternate" hrefLang="de" href="https://www.praxisnovaai.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.praxisnovaai.com/#organization',
                  name: 'PraxisNova AI',
                  url: 'https://www.praxisnovaai.com',
                  description: 'KI-Schulung und Prozessautomatisierung für Bau, Handwerk und Immobilien. DSGVO-konform auf EU-Servern.',
                  email: 'info@praxisnovaai.com',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Otto-Hahn-Str. 15',
                    postalCode: '72622',
                    addressLocality: 'Nürtingen',
                    addressCountry: 'DE',
                  },
                  sameAs: [
                    'https://www.linkedin.com/company/112236759/',
                  ],
                  founder: [
                    { '@type': 'Person', name: 'Anjuli Hertle' },
                    { '@type': 'Person', name: 'Samantha Meyer' },
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'Sales',
                    email: 'info@praxisnovaai.com',
                    availableLanguage: 'German',
                  },
                  areaServed: {
                    '@type': 'Country',
                    name: 'DE',
                  },
                  knowsLanguage: 'de',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.praxisnovaai.com/#website',
                  url: 'https://www.praxisnovaai.com',
                  name: 'PraxisNova AI',
                  publisher: { '@id': 'https://www.praxisnovaai.com/#organization' },
                  inLanguage: 'de-DE',
                },
                {
                  '@type': 'Service',
                  name: 'KI-Potenzialrechner',
                  description: 'Kostenlos Ihr KI-Potenzial berechnen. Sehen Sie, wo KI in Ihrem Betrieb Zeit spart.',
                  provider: { '@id': 'https://www.praxisnovaai.com/#organization' },
                  areaServed: 'DE',
                  serviceType: 'KI-Beratung',
                  url: 'https://www.praxisnovaai.com/potenzialrechner',
                  offers: {
                    '@type': 'Offer',
                    priceCurrency: 'EUR',
                    price: '0',
                    priceValidUntil: '2026-12-31',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'KI-QuickCheck',
                  description: '2-stündiger KI-Quickcheck mit Report und Umsetzungsplan für Ihren Betrieb.',
                  provider: { '@id': 'https://www.praxisnovaai.com/#organization' },
                  areaServed: 'DE',
                  serviceType: 'KI-Beratung',
                  offers: {
                    '@type': 'Offer',
                    priceCurrency: 'EUR',
                    price: '490',
                    priceValidUntil: '2026-12-31',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'KI-Autopilot',
                  description: 'Individuelle KI-Prozessautomatisierung für Ihren Betrieb. Bis zu 3 neue Automatisierungen pro Monat.',
                  provider: { '@id': 'https://www.praxisnovaai.com/#organization' },
                  areaServed: 'DE',
                  serviceType: 'KI-Automatisierung',
                  offers: {
                    '@type': 'Offer',
                    priceCurrency: 'EUR',
                    price: '1500',
                    priceValidUntil: '2026-12-31',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'KI-Workshop Pro',
                  description: '4-stündiger Workshop für bis zu 12 Personen. Ihr Team lernt, KI eigenständig im Alltag einzusetzen.',
                  provider: { '@id': 'https://www.praxisnovaai.com/#organization' },
                  areaServed: 'DE',
                  serviceType: 'KI-Training',
                  offers: {
                    '@type': 'Offer',
                    priceCurrency: 'EUR',
                    price: '4900',
                    priceValidUntil: '2026-12-31',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}<Popup /><CookieConsentBanner /><WebsiteTracker /></body>
    </html>
  )
}
