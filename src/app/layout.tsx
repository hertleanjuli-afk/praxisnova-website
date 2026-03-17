import './globals.css'
import Popup from '@/components/Popup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PraxisNova AI | KI-Automatisierung für Bau, Handwerk & Immobilien',
  description: 'KI-Schulung und Prozessautomatisierung für Bau, Handwerk und Immobilien. Workshops, individuelle Automatisierung und Beratung. DSGVO-konform auf EU-Servern.',
  metadataBase: new URL('https://www.praxisnovaai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PraxisNova AI | KI-Automatisierung für Bau, Handwerk & Immobilien',
    description: '8,3 Stunden pro Woche verschwendet – wir ändern das. KI-Workshops und Prozessautomatisierung für Bau, Handwerk und Immobilien.',
    url: 'https://www.praxisnovaai.com',
    siteName: 'PraxisNova AI',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PraxisNova AI | KI-Automatisierung für Bau, Handwerk & Immobilien',
    description: '8,3 Stunden pro Woche verschwendet – wir ändern das mit KI.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
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
      </head>
      <body>{children}<Popup /></body>
    </html>
  )
}
