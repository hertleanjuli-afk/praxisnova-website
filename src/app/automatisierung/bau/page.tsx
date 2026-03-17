'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const CORAL = '#E8472A';

const STEPS = [
  { num: '1', title: 'Neues Projekt startet', detail: 'Projekt wird angelegt. Google Drive-Ordner wird automatisch strukturiert erstellt.' },
  { num: '2', title: 'Alle Beteiligten informiert', detail: 'Bauherr erh\u00e4lt Willkommens-E-Mail. Alle Subunternehmer bekommen ihr Briefing-Paket automatisch.' },
  { num: '3', title: 'Wochenbericht jeden Montag', detail: 'n8n fragt jeden Subunternehmer per Formular nach Status. KI kompiliert daraus einen professionellen PDF-Bericht.' },
  { num: '4', title: 'Bericht automatisch versendet', detail: 'Bauherr erh\u00e4lt jeden Montag fr\u00fch seinen Projektbericht. Kein manuelles Schreiben.' },
  { num: '5', title: 'M\u00e4ngel per Handy erfassen', detail: 'Bauleiter fotografiert M\u00e4ngel direkt vom Handy. Automatisch protokolliert mit Foto, Standort und Verantwortlichem.' },
  { num: '6', title: 'Subunternehmer wird informiert', detail: 'Zust\u00e4ndiger Subunternehmer erh\u00e4lt sofort Benachrichtigung mit Deadline.' },
  { num: '7', title: 'Eskalation bei \u00dcberschreitung', detail: 'Deadline \u00fcberschritten? Automatische Eskalation an den Projektleiter.' },
  { num: '8', title: '\u00dcbergabedokumentation', detail: 'Projektabschluss: KI kompiliert alle Protokolle, Fotos und Freigaben in ein vollst\u00e4ndiges \u00dcbergabedokument.' },
];

export default function BauPage() {
  return (
    <main style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      <section style={{ padding: '64px 32px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,71,42,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          <Link href="/automatisierung" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#555', textDecoration: 'none', marginBottom: 24 }}>
            &#8592; Alle Pakete
          </Link>
          <div style={{ fontSize: 10, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Bauunternehmen Paket</div>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.4px', margin: '0 0 16px' }}>
            Kommunikation, Reporting, M\u00e4ngelmanagement
          </h1>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.65, margin: '0 0 28px', maxWidth: 560 }}>
            Jeder Bauherr beschwert sich \u00fcber schlechte Kommunikation. Wir automatisieren den Wochenbericht, das M\u00e4ngelprotokoll und die \u00dcbergabedokumentation.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: CORAL }}>10\u201315 Std.</div>
              <div style={{ fontSize: 11, color: '#444' }}>gespart pro Woche</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: CORAL }}>0</div>
              <div style={{ fontSize: 11, color: '#444' }}>vergessene M\u00e4ngel</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: CORAL }}>Automatisch</div>
              <div style={{ fontSize: 11, color: '#444' }}>Bauherr-Kommunikation</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '16px 32px 64px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 28 }}>So l\u00e4uft der automatisierte Prozess ab</h2>
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
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{step.title}</div>
                  <div style={{ fontSize: 13, color: '#444', lineHeight: 1.5 }}>{step.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 32px 64px', background: '#060606' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', paddingTop: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="two-col">
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20 }}>Im Paket enthalten</h2>
              {[
                'Projektstart-Automatisierung mit Google Drive-Struktur',
                'Automatischer Wochenbericht als PDF f\u00fcr den Bauherrn',
                'M\u00e4ngelerfassung per Handy mit Foto und Standort',
                'Automatische Zuweisung an Subunternehmer mit Deadline',
                'Eskalationsworkflow bei \u00dcberschreitung der Deadline',
                'Subunternehmer-Koordination bei Plan\u00e4nderungen',
                '\u00dcbergabedokumentation automatisch aus Projektprotokollen',
                'DSGVO-konforme Datenhaltung auf EU-Servern',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{ color: CORAL, flexShrink: 0, marginTop: 2 }}>&#10003;</span>
                  <span style={{ fontSize: 13, color: '#555', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            <div>
              <div style={{ background: '#0A0A0A', border: '1px solid #1a1a1a', borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: '#444', marginBottom: 4 }}>Einrichtung</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: '#fff' }}>ab &#8364;3.500</div>
                <div style={{ height: 1, background: '#1a1a1a', margin: '14px 0' }} />
                <div style={{ fontSize: 13, color: '#444', marginBottom: 4 }}>Monatliche Wartung</div>
                <div style={{ fontSize: 20, fontWeight: 600, color: '#fff' }}>ab &#8364;800 / Monat</div>
                <div style={{ height: 1, background: '#1a1a1a', margin: '14px 0' }} />
                {[
                  ['Aufbauzeit', 'ca. 14 Werktage'],
                  ['Datenhaltung', 'EU-Server (DSGVO)'],
                  ['Vertragslaufzeit', 'Monatlich k\u00fcndbar'],
                  ['Technologie', 'n8n + Google Drive'],
                  ['Einweisung', 'Bauleiter + B\u00fcro separat'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: '#444' }}>{k}</span>
                    <span style={{ fontSize: 12, color: '#777' }}>{v}</span>
                  </div>
                ))}
                <div style={{ fontSize: 11, color: '#2a2a2a', marginTop: 10 }}>Genauer Preis nach kostenlosem Audit</div>
              </div>

              <div style={{ background: '#111', border: `1px solid ${CORAL}33`, borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 8 }}>Euer ROI</div>
                <p style={{ fontSize: 12, color: '#444', lineHeight: 1.6, margin: '0 0 8px' }}>
                  Ein mittelgro\u00dfes Bauunternehmen verschwendet 10\u201315 Stunden pro Woche mit manueller Koordination. Bei 60\u20ac/Std. sind das bis zu <span style={{ color: '#fff' }}>48.000\u20ac pro Jahr</span> an verlorenem Overhead.
                </p>
                <p style={{ fontSize: 12, color: '#444', lineHeight: 1.6, margin: 0 }}>
                  Ab <span style={{ color: CORAL }}>800\u20ac/Monat</span> ist das in wenigen Wochen amortisiert. Dazu kommen verbesserte Bauherren-Beziehungen und mehr Folgeauftr\u00e4ge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 12px' }}>Bereit f\u00fcr euren kostenlosen Erstcheck?</h2>
        <p style={{ fontSize: 14, color: '#555', margin: '0 0 24px', lineHeight: 1.6 }}>
          Wir analysieren eure aktuellen Prozesse in 30 Minuten und zeigen euch genau, wo Automatisierung sofort wirkt.
        </p>
        <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
          style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '13px 32px', borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
          Kostenlosen Audit buchen
        </a>
        <div style={{ fontSize: 11, color: '#2a2a2a', marginTop: 12 }}>
          Kein IT-Aufwand &#183; Keine Vorinstallation &#183; Sofort umsetzbar
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
