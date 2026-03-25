'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';
import { trackClick, trackPageView, initTracking } from '@/lib/tracking';

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
    roi: 'Spart 5–10 Stunden Admin / Monat',
  },
  {
    href: '/automatisierung/handwerk',
    label: 'Handwerksbetriebe',
    tagline: 'Anfragen, Angebote, Rechnungen automatisiert',
    desc: 'Vom eingehenden Kundenauftrag bis zur bezahlten Rechnung läuft alles automatisch. Inklusive ZUGFeRD E-Rechnung.',
    features: ['Automatische Anfragebestätigung in 2 Minuten', 'KI-Angebotsgenerierung vom Handy aus', 'Online-Terminbuchung ohne Telefon', 'Automatische Rechnungen (ZUGFeRD-konform)', 'Mahnwesen & Bewertungsanfragen'],
    roi: 'Spart bis zu 8 Stunden / Woche',
    highlight: true,
  },
  {
    href: '/automatisierung/bau',
    label: 'Bauunternehmen',
    tagline: 'Kommunikation, Reporting, Mängelmanagement',
    desc: 'Automatischer Wochenbericht für den Bauherrn, Mängeltracking mit Eskalation und digitale Übergabedokumentation.',
    features: ['Projektstart-Automatisierung', 'Automatischer Wochenbericht für Bauherrn', 'Mängelmanagement mit Eskalation', 'Subunternehmer-Koordination', 'Übergabedokumentation automatisch'],
    roi: 'Spart 10–15 Stunden Koordination / Woche',
  },
];

export default function AutomatisierungPage() {
  useEffect(() => {
    initTracking();
    trackPageView();
  }, []);

  return (
    <main style={{ background: '#080C1A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      <section style={{ padding: '80px 32px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,71,42,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Branchenlösungen</div>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 700, letterSpacing: '-0.4px', margin: '0 0 18px', color: '#fff' }}>
            Drei Branchen. Maßgeschneiderte KI.
          </h1>
          <p style={{ fontSize: 17, color: '#888', lineHeight: 1.75, margin: '0 0 32px' }}>
            Jede Branche hat eigene Prozesse und Anforderungen. Starten Sie mit einem KI-Quickcheck (€490) und wir zeigen Ihnen genau, wo die größten Hebel liegen.
          </p>
          <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
            onClick={() => trackClick('auto_hero_cta', 'KI-Quickcheck buchen')}
            style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '13px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
            KI-Quickcheck buchen — €490
          </a>
        </div>
      </section>

      <section style={{ padding: '16px 32px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 1100, margin: '0 auto' }} className="three-col">
          {PAKETE.map((pkg, i) => (
            <motion.div key={i} whileHover={{ y: -4, borderColor: '#1E2947' }}
              style={{ background: '#0F1629', border: pkg.highlight ? `1px solid ${CORAL}44` : '1px solid #1E2947', borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s' }}>
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

              <div style={{ background: '#080C1A', border: '1px solid #1E2947', borderRadius: 8, padding: '14px 16px', marginBottom: 16 }}>
                <div style={{ fontSize: 12, color: CORAL + 'cc' }}>{pkg.roi}</div>
                <div style={{ fontSize: 12, color: '#2D3A5C', marginTop: 4 }}>Genauer Umfang wird im KI-Quickcheck definiert</div>
              </div>

              <Link href={pkg.href}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '12px', textAlign: 'center', background: pkg.highlight ? CORAL : 'transparent', border: pkg.highlight ? 'none' : `1px solid ${CORAL}44`, color: pkg.highlight ? '#fff' : CORAL, borderRadius: 8, fontSize: 14, textDecoration: 'none', fontWeight: 600 }}>
                Details und Workflow ansehen <ArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 28, fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>So starten Sie</h2>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.75 }}>In drei Schritten von der Analyse zur Automatisierung.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="three-col">
            {[
              { step: '01', title: 'KI-Quickcheck', desc: '2-Stunden-Audit Ihrer Prozesse. Sie erhalten einen konkreten Report mit ROI-Zahlen und Fahrplan.', price: '€490 einmalig' },
              { step: '02', title: 'KI-Autopilot', desc: 'Wir setzen die Automatisierungen um und optimieren sie laufend. Jeden Monat sehen Sie den Impact.', price: '€1.500/Monat' },
              { step: '03', title: 'KI-Workshop Pro', desc: 'Ihr Team lernt, KI eigenständig einzusetzen. 4 Stunden, bis 12 Personen, maßgeschneidert.', price: '€4.900 einmalig' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#0F1629', border: '1px solid #1E2947', borderRadius: 10, padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: CORAL, marginBottom: 12 }}>{s.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 10px' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.75, margin: '0 0 12px' }}>{s.desc}</p>
                <div style={{ fontSize: 13, color: '#555' }}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', background: '#0F1629', border: '1px solid #1E2947', borderRadius: 12, padding: '44px 36px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 14px', color: '#fff' }}>Nicht sicher, wo Sie anfangen sollen?</h2>
          <p style={{ fontSize: 16, color: '#888', margin: '0 0 28px', lineHeight: 1.75 }}>
            Der KI-Quickcheck zeigt Ihnen in 2 Stunden genau, wo die größten Automations-Hebel in Ihrem Unternehmen liegen — mit konkreten Zahlen.
          </p>
          <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
            onClick={() => trackClick('auto_bottom_cta', 'KI-Quickcheck buchen')}
            style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '13px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
            KI-Quickcheck buchen — €490
          </a>
          <div style={{ fontSize: 12, color: '#2D3A5C', marginTop: 14 }}>
            Auf Rechnung · Keine Vorinstallation · Ergebnis in 48 Stunden
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) { .three-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
