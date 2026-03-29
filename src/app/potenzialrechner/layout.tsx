import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-Potenzialrechner | PraxisNova AI – Kostenlos Einsparpotenzial berechnen',
  description: 'Berechnen Sie in 2 Minuten, wie viel Zeit und Geld KI-Automatisierung in Ihrem Bau-, Handwerks- oder Immobilienbetrieb spart. Kostenlos und ohne Anmeldung.',
  alternates: { canonical: '/potenzialrechner' },
  openGraph: {
    title: 'KI-Potenzialrechner | PraxisNova AI',
    description: 'In 2 Minuten Ihr KI-Einsparpotenzial berechnen – kostenlos und ohne Anmeldung.',
    url: 'https://www.praxisnovaai.com/potenzialrechner',
  },
}

export default function PotenzialrechnerLayout({ children }: { children: React.ReactNode }) {
  return children
}
