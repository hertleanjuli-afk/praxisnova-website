'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';
import { trackClick, trackPageView, trackScrollDepth, initTracking } from '@/lib/tracking';

const CORAL = '#E8472A';

/* ── Animation Helpers ── */

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
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
  return (
    <span ref={ref}>
      {prefix}{target % 1 !== 0 ? count.toFixed(1).replace('.', ',') : count}{suffix}
    </span>
  );
}

/* ── Icons ── */

function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke={CORAL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="14" width="22" height="11" rx="1.5" />
      <rect x="9" y="7" width="10" height="9" rx="1" />
      <line x1="14" y1="3" x2="14" y2="7" />
      <line x1="7" y1="18" x2="7" y2="25" strokeOpacity="0.4" />
      <line x1="14" y1="18" x2="14" y2="25" strokeOpacity="0.4" />
      <line x1="21" y1="18" x2="21" y2="25" strokeOpacity="0.4" />
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
      <circle cx="10" cy="13" r="6" />
      <line x1="16" y1="13" x2="26" y2="13" />
      <line x1="23" y1="13" x2="23" y2="17" />
      <line x1="26" y1="13" x2="26" y2="17" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="7" x2="12" y2="7" />
      <polyline points="8,3 12,7 8,11" />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25 }}
      style={{ flexShrink: 0 }}
    >
      <polyline points="5,8 10,13 15,8" />
    </motion.svg>
  );
}

/* ── ServiceItem ── */

interface ServiceItemProps {
  number: string;
  label: string;
  title: string;
  price: string;
  priceNote: string;
  description?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  ctaExternal?: boolean;
  highlight?: boolean;
  badge?: string;
  trackingId: string;
}

function ServiceItem({ number, label, title, price, priceNote, description, features, ctaText, ctaHref, ctaExternal, highlight, badge, trackingId }: ServiceItemProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const midpoint = Math.ceil(features.length / 2);
  const col1 = features.slice(0, midpoint);
  const col2 = features.slice(midpoint);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ borderTop: '1px solid #1E2947', position: 'relative' }}
    >
      {badge && (
        <div style={{
          position: 'absolute', top: -1, right: 0,
          background: CORAL, color: '#fff', fontSize: 10, fontWeight: 700,
          padding: '4px 12px', borderRadius: '0 0 6px 6px', letterSpacing: '0.04em',
        }}>
          {badge}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: '28px 0', display: 'flex', alignItems: 'flex-start', gap: 24,
          textAlign: 'left',
        }}
        className="service-item-btn"
      >
        <span style={{
          fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700,
          color: highlight ? CORAL : '#1E2947',
          lineHeight: 1, flexShrink: 0, minWidth: 64,
        }}
        className="service-number"
        >
          {number}
        </span>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
            {label}
          </div>
          <div style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#fff', marginBottom: 6, lineHeight: 1.2 }}>
            {title}
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>{price}</span>
            <span style={{ fontSize: 13, color: '#555' }}>{priceNote}</span>
          </div>
          {description && (
            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, marginTop: 8, marginBottom: 0 }}>{description}</p>
          )}
        </div>

        <ChevronDown open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: 28, paddingLeft: 88 }} className="service-expanded">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 32px', marginBottom: 20 }} className="feature-grid">
                {col1.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: CORAL, fontSize: 13, marginTop: 2, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: '#888', lineHeight: 1.75 }}>{f}</span>
                  </div>
                ))}
                {col2.map((f, i) => (
                  <div key={i + midpoint} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: CORAL, fontSize: 13, marginTop: 2, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: '#888', lineHeight: 1.75 }}>{f}</span>
                  </div>
                ))}
              </div>

              {ctaExternal ? (
                <a
                  href={ctaHref} target="_blank" rel="noreferrer"
                  onClick={() => trackClick(trackingId, ctaText)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: highlight ? CORAL : 'transparent',
                    border: highlight ? 'none' : '1px solid #1E2947',
                    color: highlight ? '#fff' : '#888',
                    padding: '11px 24px', borderRadius: 7, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  }}
                >
                  {ctaText} <ArrowRight />
                </a>
              ) : (
                <Link
                  href={ctaHref}
                  onClick={() => trackClick(trackingId, ctaText)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: highlight ? CORAL : 'transparent',
                    border: highlight ? 'none' : '1px solid #1E2947',
                    color: highlight ? '#fff' : '#888',
                    padding: '11px 24px', borderRadius: 7, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  }}
                >
                  {ctaText} <ArrowRight />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Launch Banner ── */

const LAUNCH_END = new Date('2026-04-03T00:00:00');
const LAUNCH_TOTAL_DAYS = 14;

function LaunchBanner() {
  const now = new Date();
  const diffMs = LAUNCH_END.getTime() - now.getTime();
  const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (daysLeft <= 0) return null;

  const barPercent = (daysLeft / LAUNCH_TOTAL_DAYS) * 100;
  const label = daysLeft === 1 ? 'Letzter Tag!' : `${daysLeft} Tagen`;

  return (
    <FadeUp>
      <section style={{ padding: '0 32px 48px' }}>
        <div style={{
          maxWidth: 700, margin: '0 auto',
          background: 'linear-gradient(135deg, #0F1629 0%, #0B1125 100%)',
          border: `1px solid ${CORAL}33`,
          borderRadius: 14, padding: '28px 32px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 2,
            background: `linear-gradient(90deg, ${CORAL}, ${CORAL}88)`,
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 20 }}>🔥</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>
              Launch-Preis endet in {label} — Jetzt sichern!
            </span>
          </div>

          <div style={{ marginBottom: 10 }}>
            <div style={{
              height: 8, borderRadius: 4, background: '#1E2947', overflow: 'hidden',
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${barPercent}%` }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                style={{
                  height: '100%', borderRadius: 4,
                  background: `linear-gradient(90deg, ${CORAL}, #ff6b4a)`,
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: '#777' }}>
              Angebot läuft ab am 3. April 2026
            </span>
            <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
              onClick={() => trackClick('launch_banner_cta', 'Jetzt Platz sichern')}
              style={{
                background: CORAL, color: '#fff', padding: '8px 20px', borderRadius: 7,
                fontSize: 13, fontWeight: 700, textDecoration: 'none',
              }}>
              Jetzt Platz sichern
            </a>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}

/* ── Page ── */

export default function Page() {
  useEffect(() => { initTracking(); trackPageView(); trackScrollDepth(); }, []);

  return (
    <main style={{ background: '#080C1A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ padding: '80px 32px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,71,42,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#141E3A', border: '1px solid #1E2947', color: '#888', fontSize: 13, padding: '5px 14px', borderRadius: 20, marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: CORAL, animation: 'pulse 2s infinite' }} />
              KI-Schulung & Prozessautomatisierung für Bau & Immobilien
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.5px', margin: '0 0 24px' }}
          >
            <span style={{ color: '#fff' }}>8,3 Stunden pro Woche.</span>
            <br />
            <span style={{ color: CORAL }}>Einfach verschwendet.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#888', margin: '0 0 36px', lineHeight: 1.75 }}
          >
            Bauunternehmen, Handwerksbetriebe und Immobilienprofis verlieren täglich wertvolle Zeit
            durch ineffiziente Abläufe. Wir zeigen Ihrem Team in einem halben Tag, wie KI das ändert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#angebote"
              onClick={() => trackClick('hero_cta_primary', 'Workshops entdecken')}
              style={{ background: CORAL, color: '#fff', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
              Workshops entdecken
            </a>
            <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
              onClick={() => trackClick('hero_cta_secondary', 'Kostenlosen Audit buchen')}
              style={{ background: 'transparent', color: '#999', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none', border: '1px solid #1E2947' }}>
              Kostenlosen Audit buchen
            </a>
          </motion.div>

          <p style={{ fontSize: 12, color: '#2D3A5C', marginTop: 16 }}>
            Capmo Effizienzstudie, Deutsche Baubranche
          </p>
        </div>
      </section>

      {/* ── LAUNCH BANNER ── */}
      <LaunchBanner />

      {/* ── STATS ── */}
      <FadeUp>
        <section style={{ padding: '0 32px 72px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, maxWidth: 1100, margin: '0 auto', background: '#1E2947', borderRadius: 10, overflow: 'hidden' }} className="stats-grid">
            {[
              { value: 8.3, suffix: ' Std.', label: 'pro Woche verschwendet', source: 'Capmo, Baubranche DE' },
              { value: 50, suffix: '%', label: 'der Betriebe nicht KI-bereit', source: 'PwC Deutschland 2025' },
              { label: '45 zu 8 Min.', isText: true, sub: 'Angebotserstellung mit KI', source: 'PraxisNova' },
              { value: 6, suffix: ' Wochen', label: 'Amortisationszeit', source: 'PraxisNova' },
            ].map((stat, i) => (
              <div key={i} style={{ background: '#080C1A', padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: CORAL, marginBottom: 6 }}>
                  {stat.isText ? stat.label : <CountUp target={stat.value as number} suffix={stat.suffix} />}
                </div>
                <div style={{ fontSize: 14, color: '#666', marginBottom: 4, lineHeight: 1.75 }}>{stat.isText ? stat.sub : stat.label}</div>
                <div style={{ fontSize: 11, color: '#2D3A5C' }}>{stat.source}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── PROBLEM SECTION ── */}
      <FadeUp>
        <section style={{ padding: '24px 32px 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Der Alltag in der Baubranche</div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, letterSpacing: '-0.3px', margin: '0 0 12px', color: '#fff' }}>Wo geht Ihre Zeit wirklich hin?</h2>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.75 }}>Drei Branchen. Dieselben Probleme. Eine Lösung.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, maxWidth: 1100, margin: '0 auto' }} className="three-col">
            {[
              {
                Icon: BuildingIcon,
                title: 'Bauunternehmen',
                problems: [
                  'Angebote kosten Stunden statt Minuten',
                  'Subunternehmer-Kommunikation frisst Baustellen-Zeit',
                  'Projektdokumentation bindet Fachkräfte unnötig',
                ],
              },
              {
                Icon: WrenchIcon,
                title: 'Handwerksbetriebe',
                problems: [
                  'Anfragen bleiben stundenlang unbeantwortet',
                  'Angebote werden manuell geschrieben statt automatisiert',
                  'Rechnungen und Mahnungen kosten wertvolle Arbeitszeit',
                ],
              },
              {
                Icon: KeyIcon,
                title: 'Immobilienprofis',
                problems: [
                  'Exposé-Erstellung ist repetitiv und nicht skalierbar',
                  'Lead-Nachverfolgung kostet zu viel Zeit',
                  'Kundenbetreuung ohne KI nicht ausbaubar',
                ],
              },
            ].map((sector, i) => (
              <motion.div key={i} whileHover={{ y: -3, borderColor: '#1E2947' }}
                style={{ background: '#0F1629', border: '1px solid #1E2947', borderRadius: 10, padding: 28, transition: 'border-color 0.3s' }}>
                <div style={{ marginBottom: 16 }}><sector.Icon /></div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 18px' }}>{sector.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sector.problems.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                      <span style={{ color: CORAL, fontSize: 15, marginTop: 1, flexShrink: 0 }}>×</span>
                      <span style={{ fontSize: 15, color: '#777', lineHeight: 1.75 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── WORKSHOPS ── */}
      <FadeUp>
        <section id="angebote" style={{ padding: '24px 32px 80px', background: '#0F1629' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Unsere Angebote</div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, letterSpacing: '-0.3px', margin: '0 0 12px', color: '#fff' }}>Einstieg oder Vollautomatisierung</h2>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.75 }}>Workshops für schnelle Ergebnisse. KI-Automatisierung für nachhaltigen Vorsprung.</p>
          </div>

          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <ServiceItem
              number="01"
              label="Workshop"
              title="Starter"
              price="€4.900"
              priceNote="pro Unternehmen, Flatrate"
              features={['4 Stunden online', 'Bis 12 Personen', '3 sofort umsetzbare Use Cases', '10 branchenspezifische Prompts', '30 Tage E-Mail-Support']}
              ctaText="Workshop anfragen"
              ctaHref={SITE_CONFIG.calendly}
              ctaExternal
              trackingId="service_cta_01"
            />
            <ServiceItem
              number="02"
              label="Workshop"
              title="Professional"
              price="€7.900"
              priceNote="pro Unternehmen, Flatrate"
              features={['7 Stunden online', 'Bis 15 Personen', 'Eigene Workflows entwickeln', 'Maßgeschneiderte Prompt-Bibliothek', '60 Tage Support inkl. 2 Follow-up Calls']}
              ctaText="Workshop anfragen"
              ctaHref={SITE_CONFIG.calendly}
              ctaExternal
              highlight
              badge="BELIEBT"
              trackingId="service_cta_02"
            />
            <ServiceItem
              number="03"
              label="Premium"
              title="KI-Prozessautomatisierung"
              price="ab €1.800"
              priceNote="Einrichtung + monatliche Wartung ab €500"
              features={['Individueller Prozess-Audit', 'Maßgeschneidertes Automatisierungskonzept', 'Komplette Umsetzung', 'Team-Training', 'Laufende Wartung', 'DSGVO-konform EU-Server']}
              ctaText="Pakete ansehen"
              ctaHref="/automatisierung"
              trackingId="service_cta_03"
            />
            <div style={{ borderTop: '1px solid #1E2947' }} />
          </div>
        </section>
      </FadeUp>

      {/* ── AUTOMATISIERUNG OVERVIEW ── */}
      <FadeUp>
        <section style={{ padding: '24px 32px 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>KI-Automatisierung</div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, letterSpacing: '-0.3px', margin: '0 0 12px', color: '#fff' }}>Drei Branchen. Drei Pakete.</h2>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.75 }}>Jedes Paket ist produktisiert, sofort einsetzbar und DSGVO-konform.</p>
          </div>

          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <ServiceItem
              number="01"
              label="Immobilienmakler"
              title="Kein Lead geht mehr verloren"
              price="ab €2.500"
              priceNote="+ ab €600 / Monat"
              features={['Lead-Erfassung aus ImmoScout24', 'KI-basiertes Lead-Scoring', 'Automatische CRM-Befüllung', 'Besichtigungsautomatisierung', 'Google-Bewertungsanfragen']}
              ctaText="Mehr erfahren"
              ctaHref="/automatisierung/immobilien"
              trackingId="service_cta_immo"
            />
            <ServiceItem
              number="02"
              label="Handwerksbetriebe"
              title="Anfragen, Angebote, Rechnungen"
              price="ab €1.800"
              priceNote="+ ab €500 / Monat"
              features={['Automatische Anfragebestätigung', 'KI-Angebotsgenerierung', 'Online-Terminbuchung', 'Automatische Rechnungen (ZUGFeRD)', 'Mahnwesen & Bewertungsanfragen']}
              ctaText="Mehr erfahren"
              ctaHref="/automatisierung/handwerk"
              highlight
              badge="MEISTGEBUCHT"
              trackingId="service_cta_handwerk"
            />
            <ServiceItem
              number="03"
              label="Bauunternehmen"
              title="Kommunikation und Dokumentation"
              price="ab €3.500"
              priceNote="+ ab €800 / Monat"
              features={['Projektstart-Automatisierung', 'Automatischer Wochenbericht', 'Mängelmanagement mit Eskalation', 'Subunternehmer-Koordination', 'Übergabedokumentation (automatisch)']}
              ctaText="Mehr erfahren"
              ctaHref="/automatisierung/bau"
              trackingId="service_cta_bau"
            />
            <div style={{ borderTop: '1px solid #1E2947' }} />
          </div>
        </section>
      </FadeUp>

      {/* ── TEAM ── */}
      <FadeUp>
        <section id="team" style={{ padding: '24px 32px 80px', background: '#0F1629' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 600, color: '#fff', letterSpacing: '-0.3px', margin: '0 0 8px' }}>Ihr Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, maxWidth: 800, margin: '0 auto' }} className="two-col">
            {SITE_CONFIG.team.map((person, i) => (
              <motion.div key={i} whileHover={{ y: -2, borderColor: '#1E2947' }}
                style={{ background: '#080C1A', border: '1px solid #1E2947', borderRadius: 10, padding: 28, transition: 'border-color 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>{person.name}</div>
                    <div style={{ fontSize: 14, color: CORAL }}>{person.role}</div>
                  </div>
                </div>
                <p style={{ fontSize: 15, color: '#888', lineHeight: 1.75, margin: '0 0 16px' }}>
                  {person.bio}
                </p>
                <a href={person.linkedin} target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#777', textDecoration: 'none' }}>
                  <LinkedInIcon /> LinkedIn Profil
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── CTA ── */}
      <FadeUp>
        <section style={{ padding: '80px 32px', textAlign: 'center', background: '#0F1629', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(232,71,42,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 30px)', fontWeight: 600, color: '#fff', margin: '0 0 14px' }}>15 Minuten. Kein Risiko.</h2>
          <p style={{ fontSize: 17, color: '#888', margin: '0 0 32px', lineHeight: 1.75 }}>
            Wir zeigen Ihnen konkret, wie viel Zeit Ihr Team zurückgewinnt<br />und was das für Ihren Jahresumsatz bedeutet.
          </p>
          <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
            onClick={() => trackClick('cta_bottom', 'Kostenlosen Audit buchen')}
            style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '15px 36px', borderRadius: 9, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
            Kostenlosen Audit buchen
          </a>
          <div style={{ fontSize: 13, color: '#2D3A5C', marginTop: 14 }}>
            Kein IT-Aufwand · Keine Vorinstallation · Sofort umsetzbar
          </div>
        </section>
      </FadeUp>

      <Footer />

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @media (max-width: 768px) {
          .three-col { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .service-item-btn { flex-direction: column !important; gap: 12px !important; }
          .service-number { min-width: auto !important; }
          .service-expanded { padding-left: 0 !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
