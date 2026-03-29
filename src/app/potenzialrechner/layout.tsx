import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-Potenzialrechner – Kostenlos Einsparpotenzial berechnen',
  description: 'In 2 Minuten berechnen, wie viel Zeit und Geld KI in deinem Betrieb spart. Kostenlos, ohne Anmeldung.',
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
