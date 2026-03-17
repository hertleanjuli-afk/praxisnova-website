import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PraxisNova AI - KI-Schulung und Prozessautomatisierung',
  description: 'KI-Schulung und Prozessautomatisierung fuer Bau, Handwerk und Immobilien. Workshops, individuelle Automatisierung und Beratung. DSGVO-konform auf EU-Servern.',
  openGraph: {
    title: 'PraxisNova AI',
    description: '8,3 Stunden pro Woche verschwendet. Wir aendern das.',
    url: 'https://www.praxisnovaai.com',
    siteName: 'PraxisNova AI',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
