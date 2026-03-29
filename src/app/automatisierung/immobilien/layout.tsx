import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-Automatisierung für Immobilienmakler | PraxisNova AI',
  description: 'Automatische Lead-Erfassung aus ImmoScout24, KI-basiertes Lead-Scoring und CRM-Befüllung für Immobilienmakler. Kein Lead geht verloren.',
  alternates: { canonical: '/automatisierung/immobilien' },
  openGraph: {
    title: 'KI-Automatisierung für Immobilienmakler | PraxisNova AI',
    description: 'Lead-Erfassung, KI-Scoring und automatische CRM-Befüllung für Immobilienprofis.',
    url: 'https://www.praxisnovaai.com/automatisierung/immobilien',
  },
}

export default function ImmobilienLayout({ children }: { children: React.ReactNode }) {
  return children
}
