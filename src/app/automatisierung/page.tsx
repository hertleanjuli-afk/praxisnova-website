'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const CORAL = '#E8472A';

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="7" x2="12" y2="7" />
      <polyline points="8,3 12,7 8,11" />
    </svg>
  );
}

const PAKETE = [
  {
    href: '/automatisierung/immobilien',
    label: 'Immobilienmakler',
    tagline: 'Kein Lead geht mehr verloren',
    desc: 'Von der Portalanfrage bis zum gebuchten Besichtigungstermin vollständig automatisiert. Antwortzeit: unter 2 Minuten.',
    features: ['Lead-Erfassung aus ImmoScout24 & Website', 'KI-basiertes Lead-Scoring', 'Automatische CRM-Befüllung (onOffice u.a.)', 'Besichtigung online buchen mit Erinnerungen', 'Follow-up & Google-Bewertungsanfragen'],
    price: 'ab \u20ac2.500',
    retainer: '+ ab \u20ac600 / Monat',
    roi: 'Spart 5–10 Stunden Admin / Monat',
  },
  {
    href: '/automatisierung/handwerk',
    label: 'Handwerksbetriebe',
    tagline: 'Anfragen, Angebote, Rechnungen automatisiert',
    desc: 'Vom eingehenden Kundenauftrag bis zur bezahlten Rechnung läuft alles automatisch. Inklusive ZUGFeRD E-Rechnung.',
    features: ['Automatische Anfragebestätigung in 2 Minuten', 'KI-Angebotsgenerierung vom Handy aus', 'Online-Terminbuchung ohne Telefon', 'Automatische Rechnungen (ZUGFeRD-konform)', 'Mahnwesen & Bewertungsanfragen'],
    price: 'ab \u20ac1.800',
    retainer: '+ ab \u20ac500 / Monat',
    roi: 'Spart bis zu 8 Stunden / Woche',
    highlight: true,
  },
  {
    href: '/automatisierung/bau',
    label: 'Bauunternehmen',
    tagline: 'Kommunikation, Reporting, Mängelmanagement',
    desc: 'Automatischer Wochenbericht für den Bauherrn, Mängeltracking mit Eskalation und digitale Übergabedokumentation.',
    features: ['Projektstart-Automatisierung', 'Automatischer Wochenbericht für Bauherrn', 'Mängelmanagement mit Eskalation', 'Subunternehmer-Koordination', 'Übergabedokumentation automatisch'],
    price: 'ab \u20ac3.500',
    retainer: '+ ab \u20ac800 / Monat',
    roi: 'Spart 10–15 Stunden Koordination / Woche',
  },
];

export default function AutomatisierungPage() {
  return (
    <main style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      <section style={{ padding: '72px 32px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,71,42,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 10, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>KI-Automatisierung</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.4px', margin: '0 0 16px' }}>
            Drei Branchen. Drei Pakete.
          </h1>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.65, margin: '0 0 32px' }}>
            Jedes Paket ist produktisiert, sofort einsetzbar und DSGVO-konform auf EU-Servern.
            Der genaue Preis hängt von euren bestehenden Tools ab und wird im kostenlosen Audit festgelegt.
          </p>
          <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '12px 28px', borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Kostenlosen Audit buchen
          </a>
        </div>
      </section>

      <section style={{ padding: '16px 32px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 1100, margin: '0 auto' }} className="three-col">
          {PAKETE.map((pkg, i) => (
            <motion.div key={i} whileHover={{ y: -4 }}
              style={{ background: '#111', border: pkg.highlight ? `1px solid ${CORAL}44` : '1px solid #1a1a1a', borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column' }}>
              {pkg.highlight && (
                <div style={{ fontSize: 10, color: CORAL, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Meistgebucht</div>
              )}
              <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 6px' }}>{pkg.label}</h2>
              <p style={{ fontSize: 13, color: CORAL, margin: '0 0 12px', fontWeight: 500 }}>{pkg.tagline}</p>
              <p style={{ fontSize: 13, color: '#444', lineHeight: 1.6, margin: '0 0 20px' }}>{pkg.desc}</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                {pkg.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 10 }}>
                    <span style={{ color: CORAL, fontSize: 12, marginTop: 2, flexShrink: 0 }}>&#10003;</span>
                    <span style={{ fontSize: 13, color: '#555', lineHeight: 1.45 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <div style={{ background: '#0A0A0A', border: '1px solid #1a1a1a', borderRadius: 8, padding: '14px 16px', marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{pkg.price}</div>
                <div style={{ fontSize: 12, color: '#444', marginBottom: 4 }}>{pkg.retainer}</div>
                <div style={{ fontSize: 11, color: '#2a2a2a' }}>Genauer Preis nach kostenlosem Audit</div>
                <div style={{ fontSize: 11, color: CORAL + 'cc', marginTop: 6 }}>{pkg.roi}</div>
              </div>

              <Link href={pkg.href}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '11px', textAlign: 'center', background: pkg.highlight ? CORAL : 'transparent', border: pkg.highlight ? 'none' : `1px solid ${CORAL}44`, color: pkg.highlight ? '#fff' : CORAL, borderRadius: 8, fontSize: 13, textDecoration: 'none', fontWeight: 600 }}>
                Details und Workflow ansehen <ArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', background: '#060606', border: '1px solid #1a1a1a', borderRadius: 12, padding: '40px 36px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 12px' }}>Nicht sicher, welches Paket passt?</h2>
          <p style={{ fontSize: 14, color: '#555', margin: '0 0 24px', lineHeight: 1.6 }}>
            Im kostenlosen 15-Minuten-Audit analysieren wir eure aktuellen Prozesse und empfehlen das passende Paket mit konkreten ROI-Zahlen.
          </p>
          <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '12px 28px', borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Kostenlosen Audit buchen
          </a>
          <div style={{ fontSize: 11, color: '#2a2a2a', marginTop: 12 }}>
            Kein IT-Aufwand &#183; Keine Vorinstallation &#183; Sofort umsetzbar
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
