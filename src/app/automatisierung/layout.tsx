import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-Automatisierung für Bau, Handwerk & Immobilien | PraxisNova AI',
  description: 'Maßgeschneiderte KI-Prozessautomatisierung für Immobilienmakler, Handwerksbetriebe und Bauunternehmen. Von der Lead-Erfassung bis zur automatischen Rechnungsstellung.',
  alternates: { canonical: '/automatisierung' },
  openGraph: {
    title: 'KI-Automatisierung für Bau, Handwerk & Immobilien | PraxisNova AI',
    description: 'Maßgeschneiderte KI-Prozessautomatisierung für drei Branchen. DSGVO-konform auf EU-Servern.',
    url: 'https://www.praxisnovaai.com/automatisierung',
  },
}

export default function AutomatisierungLayout({ children }: { children: React.ReactNode }) {
  return children
}
