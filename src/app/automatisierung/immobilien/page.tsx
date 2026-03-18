'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';

const CORAL = '#E8472A';

const STEPS = [
  { num: '1', title: 'Lead kommt an', detail: 'Anfrage aus ImmoScout24, Immowelt oder Ihrer Website landet automatisch in n8n' },
  { num: '2', title: 'KI bewertet den Lead', detail: 'Score 1–10 anhand von Kaufbereitschaft, Budget-Hinweisen und Anfragentext' },
  { num: '3', title: 'CRM wird aktualisiert', detail: 'Heißer Lead wird automatisch als Kontakt in Ihrem CRM angelegt (onOffice u.a.)' },
  { num: '4', title: 'Antwort in 2 Minuten', detail: 'Personalisierte Bestätigung mit Objektnamen wird sofort versendet' },
  { num: '5', title: 'Besichtigung gebucht', detail: 'Interessent bucht Termin online. Erinnerungen 24h und 1h vorher automatisch.' },
  { num: '6', title: 'Follow-up nach Besichtigung', detail: '2 Stunden nach dem Termin: automatische Nachfass-E-Mail' },
  { num: '7', title: 'Bewertungsanfrage', detail: 'Nach erfolgreichem Abschluss: automatische Google-Bewertungsanfrage' },
];

export default function ImmobilienPage() {
  return (
    <main style={{ background: '#080C1A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      <section style={{ padding: '72px 32px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,71,42,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          <Link href="/automatisierung" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#888', textDecoration: 'none', marginBottom: 24 }}>
            ← Alle Pakete
          </Link>
          <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Immobilienmakler Paket</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.4px', margin: '0 0 18px', color: '#fff' }}>
            Kein Lead geht mehr verloren
          </h1>
          <p style={{ fontSize: 17, color: '#888', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 560 }}>
            Jede Anfrage wird innerhalb von 2 Minuten beantwortet, automatisch in Ihrem CRM erfasst und der Besichtigungstermin wird ohne Ihren Eingriff vereinbart und erinnert.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: CORAL }}>40%</div>
              <div style={{ fontSize: 13, color: '#666' }}>weniger Admin-Zeit</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: CORAL }}>2 Min.</div>
              <div style={{ fontSize: 13, color: '#666' }}>Reaktionszeit</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: CORAL }}>21x</div>
              <div style={{ fontSize: 13, color: '#666' }}>höhere Abschlusswahrscheinlichkeit</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '16px 32px 72px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 32, color: '#fff' }}>So läuft der automatisierte Prozess ab</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 16, flexShrink: 0 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: CORAL, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                    {step.num}
                  </div>
                  {i < STEPS.length - 1 && <div style={{ width: 1, flex: 1, background: '#1E2947', margin: '4px 0' }} />}
                </div>
                <div style={{ paddingBottom: i < STEPS.length - 1 ? 24 : 0, paddingTop: 4 }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{step.title}</div>
                  <div style={{ fontSize: 15, color: '#777', lineHeight: 1.75 }}>{step.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 32px 72px', background: '#0F1629' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', paddingTop: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="two-col">
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 22, color: '#fff' }}>Im Paket enthalten</h2>
              {[
                'Lead-Erfassung aus ImmoScout24, Immowelt und Website-Formular',
                'KI-basiertes Lead-Scoring mit automatischer Weiterleitung',
                'Automatische CRM-Befüllung (onOffice, FlowFact, Propstack u.a.)',
                'Personalisierte Erstantwort innerhalb von 2 Minuten',
                'Online-Terminbuchung mit automatischen Erinnerungen (24h + 1h)',
                'Nachfass-Sequenz nach der Besichtigung',
                'Automatische Google-Bewertungsanfrage nach Abschluss',
                'DSGVO-konforme Einwilligungsprüfung und Audit-Log',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
                  <span style={{ color: CORAL, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 15, color: '#888', lineHeight: 1.75 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ background: '#080C1A', border: '1px solid #1E2947', borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>Einrichtung</div>
                <div style={{ fontSize: 26, fontWeight: 700, color: '#fff' }}>ab €2.500</div>
                <div style={{ height: 1, background: '#1E2947', margin: '14px 0' }} />
                <div style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>Monatliche Wartung</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>ab €600 / Monat</div>
                <div style={{ height: 1, background: '#1E2947', margin: '14px 0' }} />
                {[
                  ['Aufbauzeit', 'ca. 10 Werktage'],
                  ['Datenhaltung', 'EU-Server (DSGVO)'],
                  ['Vertragslaufzeit', 'Monatlich kündbar'],
                  ['Technologie', 'n8n + Make (EU)'],
                  ['Einweisung', '1h Telefontermin inklusive'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, color: '#666' }}>{k}</span>
                    <span style={{ fontSize: 14, color: '#999' }}>{v}</span>
                  </div>
                ))}
                <div style={{ fontSize: 12, color: '#2D3A5C', marginTop: 10 }}>Genauer Preis nach kostenlosem Audit</div>
              </div>

              <div style={{ background: '#0F1629', border: `1px solid ${CORAL}33`, borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8 }}>Ihr ROI</div>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.75, margin: '0 0 8px' }}>
                  Ein typischer Makler verbringt 5–10 Stunden pro Monat mit manuellem Lead-Management.
                  Bei einem Stundensatz von 80€ sind das bis zu <span style={{ color: '#fff' }}>800€ verschwendet pro Monat</span>.
                </p>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.75, margin: 0 }}>
                  Reaktion in unter 2 Minuten erhöht die Abschlusswahrscheinlichkeit um das <span style={{ color: CORAL }}>21-fache</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 14px', color: '#fff' }}>Bereit für Ihren kostenlosen Erstcheck?</h2>
        <p style={{ fontSize: 16, color: '#888', margin: '0 0 28px', lineHeight: 1.75 }}>
          Wir analysieren Ihren aktuellen Lead-Prozess in 30 Minuten und zeigen Ihnen genau, wo Automatisierung sofort wirkt.
        </p>
        <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
          style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '13px 32px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
          Kostenlosen Audit buchen
        </a>
        <div style={{ fontSize: 12, color: '#2D3A5C', marginTop: 14 }}>
          Kein IT-Aufwand · Keine Vorinstallation · Sofort umsetzbar
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
