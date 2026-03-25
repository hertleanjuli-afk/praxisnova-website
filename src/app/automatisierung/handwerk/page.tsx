'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';
import { trackClick, trackPageView, initTracking } from '@/lib/tracking';

const CORAL = '#E8472A';

const STEPS = [
  { num: '1', title: 'Anfrage kommt an', detail: 'E-Mail, Website-Formular oder WhatsApp. n8n liest die Nachricht automatisch aus.' },
  { num: '2', title: 'KI erfasst Jobdetails', detail: 'Art des Auftrags, Adresse, Dringlichkeit und Kontaktdaten werden automatisch extrahiert.' },
  { num: '3', title: 'Bestätigung in 2 Minuten', detail: 'Kunde erhält sofort eine professionelle Eingangsbestätigung, 24/7.' },
  { num: '4', title: 'Termin online gebucht', detail: 'Kunde bucht Vor-Ort-Termin selbst über Cal.com. Keine Telefonate.' },
  { num: '5', title: 'KI-Angebot vom Handy', detail: 'Meister füllt kurzes Formular nach dem Termin. KI erstellt Angebot als PDF.' },
  { num: '6', title: 'Meister prüft und sendet', detail: 'Angebot wird mit einem Klick freigegeben und automatisch an den Kunden gesendet.' },
  { num: '7', title: 'Rechnung nach Auftragsabschluss', detail: 'Auftrag abgeschlossen: Rechnung wird automatisch als ZUGFeRD E-Rechnung erstellt und versendet.' },
  { num: '8', title: 'Mahnwesen automatisch', detail: 'Unbezahlt nach 14 Tagen: Erinnerung. Nach 28 Tagen: Mahnung. Alles automatisch.' },
  { num: '9', title: 'Google-Bewertung anfordern', detail: '3 Tage nach Abschluss: automatische Bewertungsanfrage per WhatsApp oder E-Mail.' },
];

export default function HandwerkPage() {
  useEffect(() => { initTracking(); trackPageView(); }, []);

  return (
    <main style={{ background: '#080C1A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      <section style={{ padding: '72px 32px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,71,42,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          <Link href="/automatisierung" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#888', textDecoration: 'none', marginBottom: 24 }}>
            ← Alle Pakete
          </Link>
          <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Branchenlösung Handwerk</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.4px', margin: '0 0 18px', color: '#fff' }}>
            Anfragen, Angebote, Rechnungen automatisiert
          </h1>
          <p style={{ fontSize: 17, color: '#888', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 560 }}>
            Sie verlieren jeden Monat Aufträge, weil Antworten zu spät kommen und Angebote zu lange brauchen. Wir automatisieren alles zwischen Anfrage und Rechnung.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: CORAL }}>8 Std.</div>
              <div style={{ fontSize: 13, color: '#666' }}>gespart pro Woche</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: CORAL }}>45→8 Min.</div>
              <div style={{ fontSize: 13, color: '#666' }}>Angebotserstellung</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: CORAL }}>6 Wochen</div>
              <div style={{ fontSize: 13, color: '#666' }}>Amortisationszeit</div>
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
                'Automatische Anfragebestätigung in 2 Minuten, 24/7',
                'Online-Terminbuchung ohne Telefon (Cal.com)',
                'KI-Angebotsgenerierung vom Handy nach dem Termin',
                'Automatische Rechnung nach Auftragsabschluss',
                'ZUGFeRD E-Rechnung (gesetzlich ab 2025 erforderlich)',
                'Automatisches Mahnwesen (GoBD-konform)',
                'Google-Bewertungsanfrage 3 Tage nach Abschluss',
                'DSGVO-konforme Datenhaltung auf EU-Servern',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
                  <span style={{ color: CORAL, flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 15, color: '#888', lineHeight: 1.75 }}>{item}</span>
                </div>
              ))}

              <div style={{ background: '#0F1629', border: `1px solid ${CORAL}33`, borderRadius: 10, padding: 20, marginTop: 22 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: CORAL, marginBottom: 8 }}>Rechtlicher Vorteil</div>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.75, margin: 0 }}>
                  Seit Januar 2025 müssen alle deutschen Unternehmen E-Rechnungen im ZUGFeRD/XRechnung-Format empfangen können. Dieses Paket beinhaltet GoBD-konforme, ZUGFeRD-Rechnungen. Ihr Steuerberater wird es Ihnen danken.
                </p>
              </div>
            </div>

            <div>
              <div style={{ background: '#080C1A', border: '1px solid #1E2947', borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>Einrichtung</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: CORAL }}>Starten Sie mit dem KI-Quickcheck</div>
                <div style={{ height: 1, background: '#1E2947', margin: '14px 0' }} />
                <div style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>Monatliche Wartung</div>
                <div style={{ fontSize: 26, fontWeight: 700, color: '#fff' }}>€490 einmalig</div>
                <div style={{ height: 1, background: '#1E2947', margin: '14px 0' }} />
                {[
                  ['Aufbauzeit', 'ca. 10 Werktage'],
                  ['Datenhaltung', 'EU-Server (DSGVO)'],
                  ['Vertragslaufzeit', 'Monatlich kündbar'],
                  ['Format', 'ZUGFeRD / XRechnung'],
                  ['Einweisung', '1h Telefontermin inklusive'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, color: '#666' }}>{k}</span>
                    <span style={{ fontSize: 14, color: '#999' }}>{v}</span>
                  </div>
                ))}
                <div style={{ fontSize: 12, color: '#2D3A5C', marginTop: 10 }}>Danach KI-Autopilot ab €1.500/Monat</div>
              </div>

              <div style={{ background: '#0F1629', border: `1px solid ${CORAL}33`, borderRadius: 12, padding: 22 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 8 }}>Ihr ROI</div>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.75, margin: '0 0 8px' }}>
                  Ein 3-Personen-Betrieb verbringt 6–8 Stunden pro Woche mit Admin. Bei 60€/Std. Opportunitätskosten sind das bis zu <span style={{ color: '#fff' }}>20.000€ verschwendet pro Jahr</span>.
                </p>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.75, margin: 0 }}>
                  Ab <span style={{ color: CORAL }}>500€/Monat</span> ist das schon nach wenigen Wochen amortisiert.
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
          onClick={() => trackClick('handwerk_cta', 'KI-Quickcheck buchen — €490')}
          style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '13px 32px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
          KI-Quickcheck buchen — €490
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
