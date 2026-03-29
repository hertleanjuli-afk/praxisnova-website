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
              '@type': 'LocalBusiness',
              name: 'PraxisNova AI',
              description: 'KI-Schulung und Prozessautomatisierung für Bau, Handwerk und Immobilien',
              url: 'https://www.praxisnovaai.com',
              email: 'info@praxisnovaai.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'DE',
              },
              sameAs: [
                'https://www.linkedin.com/company/112236759/',
              ],
              founder: [
                { '@type': 'Person', name: 'Anjuli Hertle' },
                { '@type': 'Person', name: 'Samantha Meyer' },
              ],
              areaServed: 'DE',
              knowsLanguage: 'de',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PraxisNova AI',
              url: 'https://www.praxisnovaai.com',
              logo: 'https://www.praxisnovaai.com/logo.png',
              description: 'KI-Automatisierung und Schulung für Bau, Handwerk und Immobilien',
              sameAs: [
                'https://www.linkedin.com/company/112236759/',
              ],
              founder: [
                {
                  '@type': 'Person',
                  name: 'Anjuli Hertle',
                },
                {
                  '@type': 'Person',
                  name: 'Samantha Meyer',
                },
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+49',
                contactType: 'Sales',
                email: 'info@praxisnovaai.com',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Startseite',
                  item: 'https://www.praxisnovaai.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Services',
                  item: 'https://www.praxisnovaai.com/#services',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Über uns',
                  item: 'https://www.praxisnovaai.com/ueber-uns',
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'KI-Potenzialrechner',
                description: 'Kostenlos Ihr KI-Potenzial berechnen. Sehen Sie, wo KI in Ihrem Betrieb Zeit spart.',
                provider: {
                  '@type': 'Organization',
                  name: 'PraxisNova AI',
                },
                areaServed: 'DE',
                serviceType: 'KI-Beratung',
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'EUR',
                  price: '0',
                  priceValidUntil: '2025-12-31',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'KI-QuickCheck',
                description: '2-stündiger KI-Quickcheck mit Report und Umsetzungsplan für Ihren Betrieb.',
                provider: {
                  '@type': 'Organization',
                  name: 'PraxisNova AI',
                },
                areaServed: 'DE',
                serviceType: 'KI-Beratung',
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'EUR',
                  price: '490',
                  priceValidUntil: '2025-12-31',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'KI-Autopilot',
                description: 'Individuelle KI-Prozessautomatisierung für Ihren Betrieb. Custom Automatisierungen implementieren.',
                provider: {
                  '@type': 'Organization',
                  name: 'PraxisNova AI',
                },
                areaServed: 'DE',
                serviceType: 'KI-Automatisierung',
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'EUR',
                  price: '1500',
                  priceValidUntil: '2025-12-31',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'KI-Workshop Pro',
                description: '4-stündiger Workshop für bis zu 12 Personen. Ihr Team lernt, KI eigenständig im Alltag einzusetzen.',
                provider: {
                  '@type': 'Organization',
                  name: 'PraxisNova AI',
                },
                areaServed: 'DE',
                serviceType: 'KI-Training',
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'EUR',
                  price: '4900',
                  priceValidUntil: '2025-12-31',
                },
              },
            ]),
          }}
        />
      </head>
      <body>{children}<Popup /><CookieConsentBanner /><WebsiteTracker /></body>
    </html>
  )
}
