'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';

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
    price: 'ab €2.500',
    retainer: '+ ab €600 / Monat',
    roi: 'Spart 5–10 Stunden Admin / Monat',
  },
  {
    href: '/automatisierung/handwerk',
    label: 'Handwerksbetriebe',
    tagline: 'Anfragen, Angebote, Rechnungen automatisiert',
    desc: 'Vom eingehenden Kundenauftrag bis zur bezahlten Rechnung läuft alles automatisch. Inklusive ZUGFeRD E-Rechnung.',
    features: ['Automatische Anfragebestätigung in 2 Minuten', 'KI-Angebotsgenerierung vom Handy aus', 'Online-Terminbuchung ohne Telefon', 'Automatische Rechnungen (ZUGFeRD-konform)', 'Mahnwesen & Bewertungsanfragen'],
    price: 'ab €1.800',
    retainer: '+ ab €500 / Monat',
    roi: 'Spart bis zu 8 Stunden / Woche',
    highlight: true,
  },
  {
    href: '/automatisierung/bau',
    label: 'Bauunternehmen',
    tagline: 'Kommunikation, Reporting, Mängelmanagement',
    desc: 'Automatischer Wochenbericht für den Bauherrn, Mängeltracking mit Eskalation und digitale Übergabedokumentation.',
    features: ['Projektstart-Automatisierung', 'Automatischer Wochenbericht für Bauherrn', 'Mängelmanagement mit Eskalation', 'Subunternehmer-Koordination', 'Übergabedokumentation automatisch'],
    price: 'ab €3.500',
    retainer: '+ ab €800 / Monat',
    roi: 'Spart 10–15 Stunden Koordination / Woche',
  },
];

export default function AutomatisierungPage() {
  return (
    <main style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      <section style={{ padding: '80px 32px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,71,42,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>KI-Automatisierung</div>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 700, letterSpacing: '-0.4px', margin: '0 0 18px', color: '#fff' }}>
            Drei Branchen. Drei Pakete.
          </h1>
          <p style={{ fontSize: 17, color: '#888', lineHeight: 1.75, margin: '0 0 32px' }}>
            Jedes Paket ist produktisiert, sofort einsetzbar und DSGVO-konform auf EU-Servern.
            Der genaue Preis hängt von Ihren bestehenden Tools ab und wird im kostenlosen Audit festgelegt.
          </p>
          <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '13px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
            Kostenlosen Audit buchen
          </a>
        </div>
      </section>

      <section style={{ padding: '16px 32px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 1100, margin: '0 auto' }} className="three-col">
          {PAKETE.map((pkg, i) => (
            <motion.div key={i} whileHover={{ y: -4, borderColor: '#2a2a2a' }}
              style={{ background: '#111', border: pkg.highlight ? `1px solid ${CORAL}44` : '1px solid #1a1a1a', borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s' }}>
              {pkg.highlight && (
                <div style={{ fontSize: 11, color: CORAL, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Meistgebucht</div>
              )}
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#fff', margin: '0 0 6px' }}>{pkg.label}</h2>
              <p style={{ fontSize: 14, color: CORAL, margin: '0 0 14px', fontWeight: 500 }}>{pkg.tagline}</p>
              <p style={{ fontSize: 15, color: '#777', lineHeight: 1.75, margin: '0 0 22px' }}>{pkg.desc}</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                {pkg.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 10 }}>
                    <span style={{ color: CORAL, fontSize: 13, marginTop: 3, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: '#888', lineHeight: 1.75 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <div style={{ background: '#0A0A0A', border: '1px solid #1a1a1a', borderRadius: 8, padding: '14px 16px', marginBottom: 16 }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{pkg.price}</div>
                <div style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>{pkg.retainer}</div>
                <div style={{ fontSize: 12, color: '#333' }}>Genauer Preis nach kostenlosem Audit</div>
                <div style={{ fontSize: 12, color: CORAL + 'cc', marginTop: 6 }}>{pkg.roi}</div>
              </div>

              <Link href={pkg.href}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '12px', textAlign: 'center', background: pkg.highlight ? CORAL : 'transparent', border: pkg.highlight ? 'none' : `1px solid ${CORAL}44`, color: pkg.highlight ? '#fff' : CORAL, borderRadius: 8, fontSize: 14, textDecoration: 'none', fontWeight: 600 }}>
                Details und Workflow ansehen <ArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', background: '#060606', border: '1px solid #1a1a1a', borderRadius: 12, padding: '44px 36px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 14px', color: '#fff' }}>Nicht sicher, welches Paket passt?</h2>
          <p style={{ fontSize: 16, color: '#888', margin: '0 0 28px', lineHeight: 1.75 }}>
            Im kostenlosen 15-Minuten-Audit analysieren wir Ihre aktuellen Prozesse und empfehlen das passende Paket mit konkreten ROI-Zahlen.
          </p>
          <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '13px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
            Kostenlosen Audit buchen
          </a>
          <div style={{ fontSize: 12, color: '#333', marginTop: 14 }}>
            Kein IT-Aufwand · Keine Vorinstallation · Sofort umsetzbar
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
