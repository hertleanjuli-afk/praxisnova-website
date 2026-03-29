import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-Automatisierung für Handwerksbetriebe | PraxisNova AI',
  description: 'Automatische Anfragebestätigung, KI-Angebotsgenerierung und ZUGFeRD-Rechnungen für Handwerker. Von der Anfrage bis zur Google-Bewertung – vollautomatisiert.',
  alternates: { canonical: '/automatisierung/handwerk' },
  openGraph: {
    title: 'KI-Automatisierung für Handwerksbetriebe | PraxisNova AI',
    description: 'Automatische Anfragebestätigung, KI-Angebotsgenerierung und ZUGFeRD-Rechnungen. Vollautomatisiert in 9 Schritten.',
    url: 'https://www.praxisnovaai.com/automatisierung/handwerk',
  },
}

export default function HandwerkLayout({ children }: { children: React.ReactNode }) {
  return children
}
