'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';

const CORAL = '#E8472A';

const STEPS = [
  { num: '1', title: 'Neues Projekt startet', detail: 'Projekt wird angelegt. Google Drive-Ordner wird automatisch strukturiert erstellt.' },
  { num: '2', title: 'Alle Beteiligten informiert', detail: 'Bauherr erhält Willkommens-E-Mail. Alle Subunternehmer bekommen ihr Briefing-Paket automatisch.' },
  { num: '3', title: 'Wochenbericht jeden Montag', detail: 'n8n fragt jeden Subunternehmer per Formular nach Status. KI kompiliert daraus einen professionellen PDF-Bericht.' },
  { num: '4', title: 'Bericht automatisch versendet', detail: 'Bauherr erhält jeden Montag früh seinen Projektbericht. Kein manuelles Schreiben.' },
  { num: '5', title: 'Mängel per Handy erfassen', detail: 'Bauleiter fotografiert Mängel direkt vom Handy. Automatisch protokolliert mit Foto, Standort und Verantwortlichem.' },
  { num: '6', title: 'Subunternehmer wird informiert', detail: 'Zuständiger Subunternehmer erhält sofort Benachrichtigung mit Deadline.' },
  { num: '7', title: 'Eskalation bei Überschreitung', detail: 'Deadline überschritten? Automatische Eskalation an den Projektleiter.' },
  { num: '8', title: 'Übergabedokumentation', detail: 'Projektabschluss: KI kompiliert alle Protokolle, Fotos und Freigaben in ein vollständiges Übergabedokument.' },
];

export default function BauPage() {
  return (
    <main style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      <section style={{ padding: '72px 32px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,71,42,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          <Link href="/automatisierung" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#888', textDecoration: 'none', marginBottom: 24 }}>
            ← Alle Pakete
          </Link>
          <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Bauunternehmen Paket</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.4px', margin: '0 0 18px', color: '#fff' }}>
            Kommunikation, Reporting, Mängelmanagement
          </h1>
          <p style={{ fontSize: 17, color: '#888', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 560 }}>
            Jeder Bauherr beschwert sich über schlechte Kommunikation. Wir automatisieren den Wochenbericht, das Mängelprotokoll und die Übergabedokumentation.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: CORAL }}>10–15 Std.</div>
              <div style={{ fontSize: 13, color: '#666' }}>gespart pro Woche</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: CORAL }}>0</div>
              <div style={{ fontSize: 13, color: '#666' }}>vergessene Mängel</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: CORAL }}>Automatisch</div>
              <div style={{ fontSize: 13, color: '#666' }}>Bauherr-Kommunikation</div>
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
                  {i < STEPS.length - 1 && <div style={{ width: 1, flex: 1, background: '#1a1a1a', margin: '4px 0' }} />}
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

      <section style={{ padding: '0 32px 72px', background: '#060606' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', paddingTop: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="two-col">
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 22, color: '#fff' }}>Im Paket enthalten</h2>
              {[
                'Projektstart-Automatisierung mit Google Drive-Struktur',
                'Automatischer Wochenbericht als PDF für den Bauherrn',
                'Mängelerfassung per Handy mit Foto und Standort',
                'Automatische Zuweisung an Subunternehmer mit Deadline',
                'Eskalationsworkflow bei Überschreitung der Deadline',
                'Subunternehmer-Koordination bei Planänderungen',
                'Übergabedokumentation automatisch aus Projektprotokollen',
                'DSGVO-konforme Datenhaltung auf EU-Servern',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
                  <span style={{ color: CORAL, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 15, color: '#888', lineHeight: 1.75 }}>{item}</span>
                </div>
              ))}
            </div>

            <div>
              <div style={{ background: '#0A0A0A', border: '1px solid #1a1a1a', borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>Einrichtung</div>
                <div style={{ fontSize: 26, fontWeight: 700, color: '#fff' }}>ab €3.500</div>
                <div style={{ height: 1, background: '#1a1a1a', margin: '14px 0' }} />
                <div style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>Monatliche Wartung</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>ab €800 / Monat</div>
                <div style={{ height: 1, background: '#1a1a1a', margin: '14px 0' }} />
                {[
                  ['Aufbauzeit', 'ca. 14 Werktage'],
                  ['Datenhaltung', 'EU-Server (DSGVO)'],
                  ['Vertragslaufzeit', 'Monatlich kündbar'],
                  ['Technologie', 'n8n + Google Drive'],
                  ['Einweisung', 'Bauleiter + Büro separat'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, color: '#666' }}>{k}</span>
                    <span style={{ fontSize: 14, color: '#999' }}>{v}</span>
                  </div>
                ))}
                <div style={{ fontSize: 12, color: '#333', marginTop: 10 }}>Genauer Preis nach kostenlosem Audit</div>
              </div>

              <div style={{ background: '#111', border: `1px solid ${CORAL}33`, borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8 }}>Ihr ROI</div>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.75, margin: '0 0 8px' }}>
                  Ein mittelgroßes Bauunternehmen verschwendet 10–15 Stunden pro Woche mit manueller Koordination. Bei 60€/Std. sind das bis zu <span style={{ color: '#fff' }}>48.000€ pro Jahr</span> an verlorenem Overhead.
                </p>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.75, margin: 0 }}>
                  Ab <span style={{ color: CORAL }}>800€/Monat</span> ist das in wenigen Wochen amortisiert. Dazu kommen verbesserte Bauherren-Beziehungen und mehr Folgeaufträge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 14px', color: '#fff' }}>Bereit für Ihren kostenlosen Erstcheck?</h2>
        <p style={{ fontSize: 16, color: '#888', margin: '0 0 28px', lineHeight: 1.75 }}>
          Wir analysieren Ihre aktuellen Prozesse in 30 Minuten und zeigen Ihnen genau, wo Automatisierung sofort wirkt.
        </p>
        <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
          style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '13px 32px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
          Kostenlosen Audit buchen
        </a>
        <div style={{ fontSize: 12, color: '#333', marginTop: 14 }}>
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
