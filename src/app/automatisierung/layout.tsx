import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KI-Automatisierung für Bau, Handwerk & Immobilien',
  description: 'KI-Prozessautomatisierung für Immobilienmakler, Handwerker und Bauunternehmen. Lead-Erfassung bis Rechnungsstellung.',
  alternates: { canonical: '/automatisierung' },
  openGraph: {
    title: 'KI-Automatisierung für Bau, Handwerk & Immobilien',
    description: 'Maßgeschneiderte KI-Prozessautomatisierung für drei Branchen. DSGVO-konform auf EU-Servern.',
    url: 'https://www.praxisnovaai.com/automatisierung',
  },
}

export default function AutomatisierungLayout({ children }: { children: React.ReactNode }) {
  return children
}
