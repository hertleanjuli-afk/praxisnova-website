import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-Automatisierung für Bauunternehmen | PraxisNova AI',
  description: 'Automatischer Wochenbericht, Mängelmanagement mit Eskalation und Subunternehmer-Koordination für Bauunternehmen. KI-gestützte Projektdokumentation.',
  alternates: { canonical: '/automatisierung/bau' },
  openGraph: {
    title: 'KI-Automatisierung für Bauunternehmen | PraxisNova AI',
    description: 'Automatischer Wochenbericht, Mängelmanagement und Subunternehmer-Koordination – vollautomatisiert mit KI.',
    url: 'https://www.praxisnovaai.com/automatisierung/bau',
  },
}

export default function BauLayout({ children }: { children: React.ReactNode }) {
  return children
}
