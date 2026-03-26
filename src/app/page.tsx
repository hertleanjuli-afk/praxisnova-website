'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';
import { trackClick, trackPageView, trackScrollDepth, initTracking } from '@/lib/tracking';

/* ── Design Tokens ── */
const CORAL = '#E8472A';
const TEXT_PRIMARY = '#F0F0F5';
const TEXT_SECONDARY = '#A0A8C0';
const TEXT_MUTED = '#5A6380';
const TEXT_FAINT = '#2D3A5C';
const BG = '#080C1A';
const BG_ELEVATED = '#0D1225';
const BG_CARD = '#0F1629';
const BORDER = '#1A2340';
const BORDER_HOVER = '#2A3660';

/* ── Animation Helpers ── */
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}

function CountUp({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(parseFloat(start.toFixed(1))); }
    }, 1800 / steps);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{target % 1 !== 0 ? count.toFixed(1).replace('.', ',') : count}{suffix}</span>;
}

/* ── Icons ── */
function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={CORAL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="14" width="22" height="11" rx="1.5" /><rect x="9" y="7" width="10" height="9" rx="1" />
      <line x1="14" y1="3" x2="14" y2="7" /><line x1="7" y1="18" x2="7" y2="25" strokeOpacity="0.4" />
      <line x1="14" y1="18" x2="14" y2="25" strokeOpacity="0.4" /><line x1="21" y1="18" x2="21" y2="25" strokeOpacity="0.4" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={CORAL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4a4 4 0 0 1 0 8l-10 10a3 3 0 1 1-4-4L16 8a4 4 0 0 1 4-4z" />
      <circle cx="7" cy="21" r="1.5" fill={CORAL} stroke="none" />
    </svg>
  );
}
function KeyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={CORAL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="13" r="6" /><line x1="16" y1="13" x2="26" y2="13" />
      <line x1="23" y1="13" x2="23" y2="17" /><line x1="26" y1="13" x2="26" y2="17" />
    </svg>
  );
}
function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="7" x2="12" y2="7" /><polyline points="8,3 12,7 8,11" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={CORAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3,8 7,12 13,4" />
    </svg>
  );
}

/* ── Reusable Card Component ── */
function PremiumCard({ children, className = '', hover = true, glow = false, style = {} }: {
  children: React.ReactNode; className?: string; hover?: boolean; glow?: boolean; style?: React.CSSProperties
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.25 } } : undefined}
      style={{
        background: BG_CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 14,
        padding: 32,
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease',
        ...(glow ? { boxShadow: `0 0 40px rgba(232,71,42,0.06), inset 0 1px 0 rgba(255,255,255,0.03)` } : {}),
        ...style,
      }}
      className={className}
      onMouseEnter={(e) => { if (hover) (e.currentTarget as HTMLElement).style.borderColor = BORDER_HOVER; }}
      onMouseLeave={(e) => { if (hover) (e.currentTarget as HTMLElement).style.borderColor = BORDER; }}
    >
      {children}
    </motion.div>
  );
}

/* ── Page ── */
export default function Page() {
  useEffect(() => {
    initTracking();
    trackPageView();
    trackScrollDepth();
  }, []);

  return (
    <main style={{ background: BG, color: TEXT_PRIMARY, minHeight: '100vh' }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ padding: 'clamp(80px, 12vh, 140px) 32px clamp(60px, 8vh, 100px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Gradient glow */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% -10%, rgba(232,71,42,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 40% 40% at 20% 80%, rgba(232,71,42,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 840, margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(232,71,42,0.08)', border: `1px solid rgba(232,71,42,0.15)`,
              color: TEXT_SECONDARY, fontSize: 13, fontWeight: 500, padding: '7px 18px', borderRadius: 24, marginBottom: 32,
              letterSpacing: '0.02em',
            }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: CORAL, animation: 'pulse 2s infinite' }} />
              KI-Automatisierung für Bau, Handwerk & Immobilien
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontSize: 'clamp(38px, 5.5vw, 64px)', fontWeight: 700, lineHeight: 1.06,
              letterSpacing: '-0.03em', margin: '0 0 28px',
            }}>
            <span style={{ color: TEXT_PRIMARY }}>In 2 Stunden wissen,</span><br />
            <span style={{ color: CORAL }}>wo KI Ihnen am meisten bringt.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: 'clamp(17px, 2vw, 20px)', color: TEXT_SECONDARY,
              margin: '0 auto 44px', lineHeight: 1.7, maxWidth: 620,
            }}>
            Unser KI-Quickcheck analysiert Ihre Prozesse und zeigt konkret, wie viel Zeit und Geld Sie mit Automatisierung sparen. Für einmalig €490.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
              onClick={() => trackClick('hero_cta_primary', 'KI-Quickcheck buchen')}
              className="cta-primary"
              style={{
                background: CORAL, color: '#fff', padding: '16px 32px', borderRadius: 10,
                fontSize: 16, fontWeight: 700, textDecoration: 'none', letterSpacing: '-0.01em',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
              KI-Quickcheck buchen — €490
            </a>
            <a href="#angebote"
              onClick={() => trackClick('hero_cta_secondary', 'Alle Leistungen ansehen')}
              className="cta-secondary"
              style={{
                background: 'transparent', color: TEXT_SECONDARY, padding: '16px 32px', borderRadius: 10,
                fontSize: 16, fontWeight: 600, textDecoration: 'none', border: `1px solid ${BORDER}`,
                transition: 'border-color 0.2s, color 0.2s',
              }}>
              Alle Leistungen ansehen
            </a>
          </motion.div>

          <p style={{ fontSize: 12, color: TEXT_FAINT, marginTop: 20, letterSpacing: '0.02em' }}>
            Capmo Effizienzstudie, Deutsche Baubranche
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <FadeUp>
        <section style={{ padding: '0 32px 100px' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
            maxWidth: 1100, margin: '0 auto', background: BORDER, borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
          }} className="stats-grid">
            {[
              { value: 8.3, suffix: ' Std.', label: 'pro Woche verschwendet', source: 'Capmo, Baubranche DE' },
              { value: 50, suffix: '%', label: 'der Betriebe nicht KI-bereit', source: 'PwC Deutschland 2025' },
              { label: '45 zu 8 Min.', isText: true, sub: 'Angebotserstellung mit KI', source: 'PraxisNova' },
              { value: 490, suffix: ' €', label: 'für Ihren KI-Quickcheck', source: 'Einmaliger Festpreis' },
            ].map((stat, i) => (
              <div key={i} style={{ background: BG_ELEVATED, padding: '36px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 700, color: CORAL, marginBottom: 8, letterSpacing: '-0.02em' }}>
                  {stat.isText ? stat.label : <CountUp target={stat.value as number} suffix={stat.suffix} />}
                </div>
                <div style={{ fontSize: 14, color: TEXT_SECONDARY, marginBottom: 6, lineHeight: 1.6 }}>{stat.isText ? stat.sub : stat.label}</div>
                <div style={{ fontSize: 11, color: TEXT_FAINT, letterSpacing: '0.02em' }}>{stat.source}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── PROBLEM SECTION ── */}
      <FadeUp>
        <section style={{ padding: '40px 32px 100px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>Der Alltag in der Baubranche</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 14px', color: TEXT_PRIMARY }}>Wo geht Ihre Zeit wirklich hin?</h2>
            <p style={{ fontSize: 17, color: TEXT_SECONDARY, lineHeight: 1.7 }}>Drei Branchen. Dieselben Probleme. Eine Lösung.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1100, margin: '0 auto' }} className="three-col">
            {[
              { Icon: BuildingIcon, title: 'Bauunternehmen', problems: ['Angebote kosten Stunden statt Minuten', 'Subunternehmer-Kommunikation frisst Baustellen-Zeit', 'Projektdokumentation bindet Fachkräfte unnötig'] },
              { Icon: WrenchIcon, title: 'Handwerksbetriebe', problems: ['Anfragen bleiben stundenlang unbeantwortet', 'Angebote werden manuell geschrieben statt automatisiert', 'Rechnungen und Mahnungen kosten wertvolle Arbeitszeit'] },
              { Icon: KeyIcon, title: 'Immobilienprofis', problems: ['Exposé-Erstellung ist repetitiv und nicht skalierbar', 'Lead-Nachverfolgung kostet zu viel Zeit', 'Kundenbetreuung ohne KI nicht ausbaubar'] },
            ].map((sector, i) => (
              <PremiumCard key={i}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(232,71,42,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <sector.Icon />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: TEXT_PRIMARY, margin: '0 0 20px', letterSpacing: '-0.01em' }}>{sector.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sector.problems.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
                      <span style={{ color: CORAL, fontSize: 15, marginTop: 2, flexShrink: 0, fontWeight: 500 }}>×</span>
                      <span style={{ fontSize: 15, color: TEXT_SECONDARY, lineHeight: 1.7 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </PremiumCard>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── FORDERUNGSMANAGEMENT / KOSTENLOSES PILOTPROJEKT ── */}
      <FadeUp>
        <section style={{ padding: '40px 32px 100px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <PremiumCard hover={false} glow style={{ padding: 'clamp(32px, 5vw, 56px)', border: `1px solid rgba(232,71,42,0.2)` }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(232,71,42,0.1)', border: `1px solid rgba(232,71,42,0.2)`,
                color: CORAL, fontSize: 12, fontWeight: 700, padding: '6px 16px', borderRadius: 20,
                textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 28,
              }}>
                Neu: Kostenloses Pilotprojekt
              </div>

              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: TEXT_PRIMARY, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
                  Automatisches Forderungsmanagement
                </h2>
                <p style={{ fontSize: 17, color: TEXT_SECONDARY, lineHeight: 1.7 }}>
                  Nie wieder offenen Rechnungen hinterherlaufen.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }} className="three-col">
                {[
                  { day: 'Tag 3', step: 'Stufe 1', desc: 'Freundliche Zahlungserinnerung per E-Mail', color: '#22C55E' },
                  { day: 'Tag 10', step: 'Stufe 2', desc: 'Bestimmte Mahnung mit Fristsetzung', color: '#EAB308' },
                  { day: 'Tag 21', step: 'Stufe 3', desc: 'Förmliche Mahnung mit Frist und Konsequenzhinweis', color: CORAL },
                ].map((item, i) => (
                  <div key={i} style={{
                    textAlign: 'center', padding: 24, background: BG_ELEVATED,
                    borderRadius: 12, border: `1px solid ${BORDER}`,
                  }}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: item.color, marginBottom: 6, letterSpacing: '-0.02em' }}>{item.day}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: TEXT_PRIMARY, marginBottom: 8 }}>{item.step}</div>
                    <p style={{ fontSize: 13, color: TEXT_SECONDARY, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 600, color: TEXT_PRIMARY, marginBottom: 24 }}>
                  Für 3 Unternehmen richten wir das komplett kostenlos ein.
                </p>
                <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer"
                  onClick={() => trackClick('forderung_cta', 'Kostenlos testen')}
                  className="cta-primary"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: CORAL, color: '#fff', fontWeight: 700,
                    padding: '14px 32px', borderRadius: 10, fontSize: 16, textDecoration: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}>
                  Kostenlos testen <ArrowRight />
                </a>
                <p style={{ fontSize: 13, color: TEXT_MUTED, marginTop: 16 }}>Im Gegenzug teilen Sie uns kurz Ihre Erfahrung mit.</p>
              </div>
            </PremiumCard>
          </div>
        </section>
      </FadeUp>

      {/* ── VALUE LADDER / ANGEBOTE — Side-by-side Pricing Cards ── */}
      <FadeUp>
        <section id="angebote" style={{ padding: '60px 32px 100px', background: BG_ELEVATED }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>Unsere Leistungen</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 14px', color: TEXT_PRIMARY }}>Von der Analyse bis zur Vollautomatisierung</h2>
            <p style={{ fontSize: 17, color: TEXT_SECONDARY, lineHeight: 1.7 }}>Starten Sie klein, skalieren Sie wenn es passt. Kein Risiko, kein Lock-in.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 1200, margin: '0 auto' }} className="pricing-grid">
            {[
              {
                label: 'Kostenlos', title: 'KI-Potenzialrechner', price: '€0', priceNote: 'Online, in 2 Minuten',
                description: 'Finden Sie in 2 Minuten heraus, wie viel Zeit und Geld KI-Automatisierung in Ihrem Unternehmen sparen kann.',
                features: ['5 gezielte Fragen zu Ihren Prozessen', 'Sofortige Potenzialanalyse', 'Personalisierte Einsparungsschätzung', 'Kein Account nötig'],
                ctaText: 'Jetzt berechnen', ctaHref: '/potenzialrechner', ctaExternal: false,
                highlight: false, badge: null, trackingId: 'value_00_rechner',
              },
              {
                label: 'Einstieg', title: 'KI-QuickCheck', price: '€490', priceNote: 'einmalig, auf Rechnung',
                description: 'In 2 Stunden analysieren wir Ihre Prozesse und liefern einen konkreten Report mit ROI-Berechnung und Handlungsempfehlungen.',
                features: ['45-Minuten Remote-Interview', 'Personalisierter Audit-Report (8–12 Seiten)', 'Konkrete ROI-Berechnung: Stunden und Euro', 'Priorisierter Automatisierungs-Fahrplan', '15-Minuten Follow-up Call', 'Unter €500 — keine Gremiumsfreigabe nötig'],
                ctaText: 'Quickcheck buchen', ctaHref: SITE_CONFIG.calendly, ctaExternal: true,
                highlight: true, badge: 'EMPFOHLEN', trackingId: 'value_01_quickcheck',
              },
              {
                label: 'Laufende Automatisierung', title: 'KI-Autopilot', price: '€1.500/Mo', priceNote: 'keine Einrichtungsgebühr, 3 Mon. Minimum',
                description: 'Wir bauen, warten und optimieren Ihre KI-Automatisierungen kontinuierlich. Sie sehen jeden Monat, was es bringt.',
                features: ['Bis zu 3 neue Automatisierungen pro Monat', 'Monitoring und Wartung aller aktiven Automationen', 'Monatlicher ROI-Report', 'Priority Support (E-Mail + optional Slack)', 'Quartalsweise Strategie-Review (30 Min.)', 'DSGVO-konform, EU-Server'],
                ctaText: 'Erstgespräch buchen', ctaHref: SITE_CONFIG.calendly, ctaExternal: true,
                highlight: false, badge: null, trackingId: 'value_02_autopilot',
              },
              {
                label: 'Team-Enablement', title: 'KI-Workshop Pro', price: '€4.900', priceNote: 'pro Unternehmen, Flatrate',
                description: '4-stündiger Workshop für bis zu 12 Personen. Ihr Team lernt, KI eigenständig im Alltag einzusetzen.',
                features: ['4 Stunden intensiv, online oder vor Ort', 'Bis 12 Teilnehmer', 'Maßgeschneiderte Übungen mit Ihren echten Prozessen', 'Branchenspezifische Prompt-Bibliothek', '30-Tage Follow-up Check-in', 'Ideal nach 2–3 Monaten KI-Autopilot'],
                ctaText: 'Workshop anfragen', ctaHref: SITE_CONFIG.calendly, ctaExternal: true,
                highlight: false, badge: null, trackingId: 'value_03_workshop',
              },
            ].map((pkg, i) => (
              <motion.div key={i}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  background: pkg.highlight ? BG_CARD : BG,
                  border: `1px solid ${pkg.highlight ? CORAL : BORDER}`,
                  borderRadius: 16, padding: 28, position: 'relative', display: 'flex', flexDirection: 'column',
                  boxShadow: pkg.highlight ? `0 0 40px rgba(232,71,42,0.1), 0 8px 32px rgba(0,0,0,0.2)` : '0 4px 16px rgba(0,0,0,0.15)',
                  transition: 'border-color 0.3s',
                }}>
                {pkg.badge && (
                  <div style={{
                    position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                    background: CORAL, color: '#fff', fontSize: 10, fontWeight: 700,
                    padding: '5px 16px', borderRadius: '0 0 8px 8px', letterSpacing: '0.06em',
                  }}>
                    {pkg.badge}
                  </div>
                )}

                <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, marginTop: pkg.badge ? 8 : 0 }}>{pkg.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: TEXT_PRIMARY, marginBottom: 8, letterSpacing: '-0.02em' }}>{pkg.title}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 28, fontWeight: 700, color: TEXT_PRIMARY, letterSpacing: '-0.02em' }}>{pkg.price}</span>
                  <span style={{ fontSize: 12, color: TEXT_MUTED }}>{pkg.priceNote}</span>
                </div>
                <p style={{ fontSize: 14, color: TEXT_SECONDARY, lineHeight: 1.7, marginBottom: 20, flex: '0 0 auto' }}>{pkg.description}</p>

                <div style={{ marginBottom: 24, flex: 1 }}>
                  {pkg.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 10 }}>
                      <span style={{ color: CORAL, fontSize: 13, marginTop: 3, flexShrink: 0 }}><CheckIcon /></span>
                      <span style={{ fontSize: 13, color: TEXT_SECONDARY, lineHeight: 1.6 }}>{f}</span>
                    </div>
                  ))}
                </div>

                {pkg.ctaExternal ? (
                  <a href={pkg.ctaHref} target="_blank" rel="noreferrer"
                    onClick={() => trackClick(pkg.trackingId, pkg.ctaText)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                      background: pkg.highlight ? CORAL : 'transparent',
                      border: pkg.highlight ? 'none' : `1px solid ${BORDER}`,
                      color: pkg.highlight ? '#fff' : TEXT_SECONDARY,
                      padding: '13px 20px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                      transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                      marginTop: 'auto',
                    }}>
                    {pkg.ctaText} <ArrowRight />
                  </a>
                ) : (
                  <Link href={pkg.ctaHref}
                    onClick={() => trackClick(pkg.trackingId, pkg.ctaText)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                      background: 'transparent', border: `1px solid ${BORDER}`, color: TEXT_SECONDARY,
                      padding: '13px 20px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                      transition: 'border-color 0.2s, color 0.2s',
                      marginTop: 'auto',
                    }}>
                    {pkg.ctaText} <ArrowRight />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── BRANCHEN OVERVIEW ── */}
      <FadeUp>
        <section style={{ padding: '60px 32px 100px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>Branchenlösungen</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 14px', color: TEXT_PRIMARY }}>Drei Branchen. Maßgeschneiderte KI.</h2>
            <p style={{ fontSize: 17, color: TEXT_SECONDARY, lineHeight: 1.7 }}>Jede Branche hat eigene Prozesse. Unsere Lösungen sind darauf zugeschnitten.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1100, margin: '0 auto' }} className="three-col">
            {[
              {
                Icon: KeyIcon, title: 'Immobilienmakler', sub: 'Kein Lead geht verloren',
                points: ['Lead-Erfassung aus ImmoScout24 & Website', 'KI-basiertes Lead-Scoring', 'Automatische CRM-Befüllung'],
                href: '/automatisierung/immobilien', badge: 'MEISTGEBUCHT',
              },
              {
                Icon: WrenchIcon, title: 'Handwerksbetriebe', sub: 'Anfragen, Angebote, Rechnungen',
                points: ['Automatische Anfragebestätigung', 'KI-Angebotsgenerierung', 'Automatische Rechnungen (ZUGFeRD)'],
                href: '/automatisierung/handwerk', badge: null,
              },
              {
                Icon: BuildingIcon, title: 'Bauunternehmen', sub: 'Kommunikation und Dokumentation',
                points: ['Automatischer Wochenbericht', 'Mängelmanagement mit Eskalation', 'Subunternehmer-Koordination'],
                href: '/automatisierung/bau', badge: null,
              },
            ].map((sector, i) => (
              <PremiumCard key={i} glow={!!sector.badge} style={sector.badge ? { border: `1px solid rgba(232,71,42,0.25)` } : {}}>
                {sector.badge && (
                  <div style={{
                    position: 'absolute', top: 16, right: 16,
                    background: 'rgba(232,71,42,0.12)', color: CORAL,
                    fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 6, letterSpacing: '0.06em',
                    border: '1px solid rgba(232,71,42,0.2)',
                  }}>
                    {sector.badge}
                  </div>
                )}
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(232,71,42,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <sector.Icon />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: TEXT_PRIMARY, margin: '0 0 6px', letterSpacing: '-0.01em' }}>{sector.title}</h3>
                <p style={{ fontSize: 14, color: CORAL, margin: '0 0 20px', fontWeight: 500 }}>{sector.sub}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
                  {sector.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 10 }}>
                      <span style={{ flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                      <span style={{ fontSize: 14, color: TEXT_SECONDARY, lineHeight: 1.6 }}>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link href={sector.href} onClick={() => trackClick(`branch_${i}`, sector.title)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>
                  Details ansehen <ArrowRight />
                </Link>
              </PremiumCard>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── TEAM ── */}
      <FadeUp>
        <section id="team" style={{ padding: '60px 32px 100px', background: BG_ELEVATED }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>Ihr Team</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 700, color: TEXT_PRIMARY, letterSpacing: '-0.03em', margin: 0 }}>Die Menschen hinter PraxisNova AI</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 800, margin: '0 auto' }} className="two-col">
            {SITE_CONFIG.team.map((person, i) => {
              const imgSrc = i === 0 ? '/images/anjuli.png' : '/images/samantha.png';
              return (
                <PremiumCard key={i} style={{ padding: 36, textAlign: 'center' }}>
                  <div style={{
                    width: 100, height: 100, borderRadius: '50%', margin: '0 auto 20px',
                    background: `${BG} url(${imgSrc}) center/cover no-repeat`,
                    border: `2px solid ${BORDER}`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }} />
                  <div style={{ fontSize: 20, fontWeight: 600, color: TEXT_PRIMARY, marginBottom: 4, letterSpacing: '-0.01em' }}>{person.name}</div>
                  <div style={{ fontSize: 14, color: CORAL, fontWeight: 500, marginBottom: 16 }}>{person.role}</div>
                  <p style={{ fontSize: 15, color: TEXT_SECONDARY, lineHeight: 1.7, margin: '0 0 20px' }}>{person.bio}</p>
                  <a href={person.linkedin} target="_blank" rel="noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: TEXT_MUTED, textDecoration: 'none', transition: 'color 0.2s' }}>
                    <LinkedInIcon /> LinkedIn Profil
                  </a>
                </PremiumCard>
              );
            })}
          </div>

          {/* Company LinkedIn */}
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href={SITE_CONFIG.linkedinFirma} target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14,
                color: TEXT_SECONDARY, textDecoration: 'none', padding: '10px 20px',
                border: `1px solid ${BORDER}`, borderRadius: 10, transition: 'border-color 0.2s, color 0.2s',
              }}>
              <LinkedInIcon /> PraxisNova AI auf LinkedIn folgen
            </a>
          </div>
        </section>
      </FadeUp>

      {/* ── CTA ── */}
      <FadeUp>
        <section style={{ padding: '100px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(232,71,42,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 700, color: TEXT_PRIMARY, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Bereit für Ihren KI-Quickcheck?
            </h2>
            <p style={{ fontSize: 18, color: TEXT_SECONDARY, margin: '0 0 40px', lineHeight: 1.7 }}>
              In 2 Stunden wissen Sie genau, wo KI Ihrem Unternehmen<br />am meisten Zeit und Geld spart. Für einmalig €490.
            </p>
            <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
              onClick={() => trackClick('cta_bottom', 'KI-Quickcheck buchen')}
              className="cta-primary"
              style={{
                display: 'inline-block', background: CORAL, color: '#fff',
                padding: '17px 40px', borderRadius: 10, fontSize: 17, fontWeight: 700,
                textDecoration: 'none', letterSpacing: '-0.01em',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
              Jetzt KI-Quickcheck buchen
            </a>
            <div style={{ fontSize: 13, color: TEXT_FAINT, marginTop: 16, letterSpacing: '0.01em' }}>
              Auf Rechnung · Keine Vorinstallation · Ergebnis in 48 Stunden
            </div>
          </div>
        </section>
      </FadeUp>

      <Footer />

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,71,42,0.3); }
        .cta-secondary:hover { border-color: ${BORDER_HOVER} !important; color: #fff !important; }
        @media (max-width: 1024px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .three-col { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
