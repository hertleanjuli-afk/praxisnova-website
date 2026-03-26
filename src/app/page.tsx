'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';
import { trackClick, trackPageView, trackScrollDepth, initTracking } from '@/lib/tracking';

const CORAL = '#E8472A';

/* ââ Animation Helpers ââ */
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
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

/* ââ Icons ââ */
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
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
function ChevronDown({ open }: { open: boolean }) {
  return (
    <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0 }}>
      <polyline points="5,8 10,13 15,8" />
    </motion.svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={CORAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3,8 7,12 13,4" />
    </svg>
  );
}

/* ââ ServiceItem ââ */
interface ServiceItemProps {
  number: string; label: string; title: string; price: string; priceNote: string;
  description?: string; features: string[]; ctaText: string; ctaHref: string;
  ctaExternal?: boolean; highlight?: boolean; badge?: string; trackingId: string;
}

function ServiceItem({ number, label, title, price, priceNote, description, features, ctaText, ctaHref, ctaExternal, highlight, badge, trackingId }: ServiceItemProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const midpoint = Math.ceil(features.length / 2);
  const col1 = features.slice(0, midpoint);
  const col2 = features.slice(midpoint);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }} style={{ borderTop: '1px solid #1E2947', position: 'relative' }}>
      {badge && (
        <div style={{ position: 'absolute', top: -1, right: 0, background: CORAL, color: '#fff', fontSize: 10, fontWeight: 700, padding: '4px 12px', borderRadius: '0 0 6px 6px', letterSpacing: '0.04em' }}>
          {badge}
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '28px 0', display: 'flex', alignItems: 'flex-start', gap: 24, textAlign: 'left' }} className="service-item-btn">
        <span style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 700, color: highlight ? CORAL : '#1E2947', lineHeight: 1, flexShrink: 0, minWidth: 64 }} className="service-number">{number}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{label}</div>
          <div style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#fff', marginBottom: 6, lineHeight: 1.2 }}>{title}</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>{price}</span>
            <span style={{ fontSize: 13, color: '#555' }}>{priceNote}</span>
          </div>
          {description && <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, marginTop: 8, marginBottom: 0 }}>{description}</p>}
        </div>
        <ChevronDown open={open} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
            <div style={{ paddingBottom: 28, paddingLeft: 88 }} className="service-expanded">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 32px', marginBottom: 20 }} className="feature-grid">
                {col1.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: CORAL, fontSize: 13, marginTop: 2, flexShrink: 0 }}>â</span>
                    <span style={{ fontSize: 14, color: '#888', lineHeight: 1.75 }}>{f}</span>
                  </div>
                ))}
                {col2.map((f, i) => (
                  <div key={i + midpoint} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: CORAL, fontSize: 13, marginTop: 2, flexShrink: 0 }}>â</span>
                    <span style={{ fontSize: 14, color: '#888', lineHeight: 1.75 }}>{f}</span>
                  </div>
                ))}
              </div>
              {ctaExternal ? (
                <a href={ctaHref} target="_blank" rel="noreferrer" onClick={() => trackClick(trackingId, ctaText)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: highlight ? CORAL : 'transparent', border: highlight ? 'none' : '1px solid #1E2947', color: highlight ? '#fff' : '#888', padding: '11px 24px', borderRadius: 7, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                  {ctaText} <ArrowRight />
                </a>
              ) : (
                <Link href={ctaHref} onClick={() => trackClick(trackingId, ctaText)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: highlight ? CORAL : 'transparent', border: highlight ? 'none' : '1px solid #1E2947', color: highlight ? '#fff' : '#888', padding: '11px 24px', borderRadius: 7, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
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

/* ââ Page ââ */
export default function Page() {
  useEffect(() => {
    initTracking();
    trackPageView();
    trackScrollDepth();
  }, []);

  return (
    <main style={{ background: '#080C1A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      {/* ââ HERO ââ */}
      <section style={{ padding: '80px 32px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,71,42,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#141E3A', border: '1px solid #1E2947', color: '#888', fontSize: 13, padding: '5px 14px', borderRadius: 20, marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: CORAL, animation: 'pulse 2s infinite' }} />
              KI-Automatisierung fÃ¼r Bau, Handwerk & Immobilien
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.5px', margin: '0 0 24px' }}>
            <span style={{ color: '#fff' }}>In 2 Stunden wissen,</span><br />
            <span style={{ color: CORAL }}>wo KI Ihnen am meisten bringt.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#888', margin: '0 0 36px', lineHeight: 1.75 }}>
            Unser KI-Quickcheck analysiert Ihre Prozesse und zeigt konkret, wie viel Zeit und Geld Sie mit Automatisierung sparen. FÃ¼r einmalig â¬490.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
              onClick={() => trackClick('hero_cta_primary', 'KI-Quickcheck buchen')}
              style={{ background: CORAL, color: '#fff', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
              KI-Quickcheck buchen â â¬490
            </a>
            <a href="#angebote"
              onClick={() => trackClick('hero_cta_secondary', 'Alle Leistungen ansehen')}
              style={{ background: 'transparent', color: '#999', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none', border: '1px solid #1E2947' }}>
              Alle Leistungen ansehen
            </a>
          </motion.div>

          <p style={{ fontSize: 12, color: '#2D3A5C', marginTop: 16 }}>
            Capmo Effizienzstudie, Deutsche Baubranche
          </p>
        </div>
      </section>

      {/* ââ STATS ââ */}
      <FadeUp>
        <section style={{ padding: '0 32px 72px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, maxWidth: 1100, margin: '0 auto', background: '#1E2947', borderRadius: 10, overflow: 'hidden' }} className="stats-grid">
            {[
              { value: 8.3, suffix: ' Std.', label: 'pro Woche verschwendet', source: 'Capmo, Baubranche DE' },
              { value: 50, suffix: '%', label: 'der Betriebe nicht KI-bereit', source: 'PwC Deutschland 2025' },
              { label: '45 zu 8 Min.', isText: true, sub: 'Angebotserstellung mit KI', source: 'PraxisNova' },
              { value: 490, suffix: ' â¬', label: 'fÃ¼r Ihren KI-Quickcheck', source: 'Einmaliger Festpreis' },
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

      {/* ââ PROBLEM SECTION ââ */}
      <FadeUp>
        <section style={{ padding: '24px 32px 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Der Alltag in der Baubranche</div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, letterSpacing: '-0.3px', margin: '0 0 12px', color: '#fff' }}>Wo geht Ihre Zeit wirklich hin?</h2>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.75 }}>Drei Branchen. Dieselben Probleme. Eine LÃ¶sung.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, maxWidth: 1100, margin: '0 auto' }} className="three-col">
            {[
              { Icon: BuildingIcon, title: 'Bauunternehmen', problems: ['Angebote kosten Stunden statt Minuten', 'Subunternehmer-Kommunikation frisst Baustellen-Zeit', 'Projektdokumentation bindet FachkrÃ¤fte unnÃ¶tig'] },
              { Icon: WrenchIcon, title: 'Handwerksbetriebe', problems: ['Anfragen bleiben stundenlang unbeantwortet', 'Angebote werden manuell geschrieben statt automatisiert', 'Rechnungen und Mahnungen kosten wertvolle Arbeitszeit'] },
              { Icon: KeyIcon, title: 'Immobilienprofis', problems: ['ExposÃ©-Erstellung ist repetitiv und nicht skalierbar', 'Lead-Nachverfolgung kostet zu viel Zeit', 'Kundenbetreuung ohne KI nicht ausbaubar'] },
            ].map((sector, i) => (
              <motion.div key={i} whileHover={{ y: -3, borderColor: '#1E2947' }}
                style={{ background: '#0F1629', border: '1px solid #1E2947', borderRadius: 10, padding: 28, transition: 'border-color 0.3s' }}>
                <div style={{ marginBottom: 16 }}><sector.Icon /></div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 18px' }}>{sector.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sector.problems.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                      <span style={{ color: CORAL, fontSize: 15, marginTop: 1, flexShrink: 0 }}>Ã</span>
                      <span style={{ fontSize: 15, color: '#777', lineHeight: 1.75 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeUp>

      
          {/* Forderungsmanagement Pilot */}
          <FadeUp>
            <section style={{ padding: '80px 0 60px' }}>
              <div style={{ maxWidth: 900, margin: '0 auto', border: '2px solid #E8472A', borderRadius: 12, padding: '48px 40px', position: 'relative', background: 'linear-gradient(135deg, rgba(232,71,42,0.04) 0%, rgba(30,41,71,0.02) 100%)' }}>
                <div style={{ position: 'absolute', top: -1, left: 32, background: '#E8472A', color: '#fff', fontSize: 10, fontWeight: 700, padding: '6px 16px', borderRadius: '0 0 6px 6px', letterSpacing: '0.08em' }}>
                  NEU: KOSTENLOSES PILOTPROJEKT
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#fff', marginTop: 8, marginBottom: 8 }}>Automatisches Forderungsmanagement</h2>
                <p style={{ fontSize: 18, color: CORAL, fontWeight: 600, marginBottom: 20 }}>Nie wieder offenen Rechnungen hinterherlaufen.</p>
                <p style={{ fontSize: 15, color: '#888', lineHeight: 1.75, marginBottom: 28 }}>Unser KI-Mahnsystem verschickt automatisch freundliche Zahlungserinnerungen in 3 Stufen. Kein Aufwand, läuft im Hintergrund.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
                  {[
                    { t: 'Stufe 1', d: 'Freundliche Erinnerung', day: 'Tag 3' },
                    { t: 'Stufe 2', d: 'Bestimmte Nachfassung', day: 'Tag 10' },
                    { t: 'Stufe 3', d: 'Letzte Mahnung', day: 'Tag 21' }
                  ].map(({ t, d, day }) => (
                    <div key={t} style={{ background: 'rgba(30,41,71,0.5)', borderRadius: 8, padding: '20px 16px', textAlign: 'center' }}>
                      <div style={{ fontSize: 13, color: CORAL, fontWeight: 700, marginBottom: 6 }}>{t}</div>
                      <div style={{ fontSize: 14, color: '#fff', fontWeight: 600, marginBottom: 4 }}>{d}</div>
                      <div style={{ fontSize: 12, color: '#666' }}>{day}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'rgba(232,71,42,0.08)', borderRadius: 8, padding: '14px 20px', marginBottom: 24, textAlign: 'center' }}>
                  <p style={{ fontSize: 16, color: '#fff', fontWeight: 600, margin: 0 }}>Für 3 Unternehmen richten wir das komplett kostenlos ein.</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <a href={SITE_CONFIG.calendly} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackClick('cta_forderung_pilot')}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: CORAL, color: '#fff', padding: '14px 32px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                    Kostenlos testen <ArrowRight />
                  </a>
                </div>
              </div>
            </section>
          </FadeUp>

          {/* ââ VALUE LADDER / ANGEBOTE ââ */}
      <FadeUp>
        <section id="angebote" style={{ padding: '24px 32px 80px', background: '#0F1629' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Unsere Leistungen</div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, letterSpacing: '-0.3px', margin: '0 0 12px', color: '#fff' }}>Von der Analyse bis zur Vollautomatisierung</h2>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.75 }}>Starten Sie klein, skalieren Sie wenn es passt. Kein Risiko, kein Lock-in.</p>
          </div>

          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <ServiceItem
              number="00"
              label="Kostenlos"
              title="KI-Potenzialrechner"
              price="â¬0"
              priceNote="Online, in 2 Minuten"
              description="Finden Sie in 2 Minuten heraus, wie viel Zeit und Geld KI-Automatisierung in Ihrem Unternehmen sparen kann."
              features={['5 gezielte Fragen zu Ihren Prozessen', 'Sofortige Potenzialanalyse', 'Personalisierte EinsparungsschÃ¤tzung', 'Kein Account nÃ¶tig']}
              ctaText="Jetzt berechnen"
              ctaHref="/#potenzialrechner"
              trackingId="value_00_rechner"
            />

            <ServiceItem
              number="01"
              label="Einstieg"
              title="KI-Quickcheck"
              price="â¬490"
              priceNote="einmalig, auf Rechnung"
              description="In 2 Stunden analysieren wir Ihre Prozesse und liefern einen konkreten Report mit ROI-Berechnung und Handlungsempfehlungen."
              features={['45-Minuten Remote-Interview', 'Personalisierter Audit-Report (8â12 Seiten)', 'Konkrete ROI-Berechnung: Stunden und Euro', 'Priorisierter Automatisierungs-Fahrplan', '15-Minuten Follow-up Call', 'Unter â¬500 â keine Gremiumsfreigabe nÃ¶tig']}
              ctaText="Quickcheck buchen"
              ctaHref={SITE_CONFIG.calendly}
              ctaExternal
              highlight
              badge="EMPFOHLEN"
              trackingId="value_01_quickcheck"
            />

            <ServiceItem
              number="02"
              label="Laufende Automatisierung"
              title="KI-Autopilot"
              price="â¬1.500/Monat"
              priceNote="keine EinrichtungsgebÃ¼hr, 3 Monate Minimum"
              description="Wir bauen, warten und optimieren Ihre KI-Automatisierungen kontinuierlich. Sie sehen jeden Monat, was es bringt."
              features={['Bis zu 3 neue Automatisierungen pro Monat', 'Monitoring und Wartung aller aktiven Automationen', 'Monatlicher ROI-Report', 'Priority Support (E-Mail + optional Slack)', 'Quartalsweise Strategie-Review (30 Min.)', 'DSGVO-konform, EU-Server']}
              ctaText="ErstgesprÃ¤ch buchen"
              ctaHref={SITE_CONFIG.calendly}
              ctaExternal
              trackingId="value_02_autopilot"
            />

            <ServiceItem
              number="03"
              label="Team-Enablement"
              title="KI-Workshop Pro"
              price="â¬4.900"
              priceNote="pro Unternehmen, Flatrate"
              description="4-stÃ¼ndiger Workshop fÃ¼r bis zu 12 Personen. Ihr Team lernt, KI eigenstÃ¤ndig im Alltag einzusetzen."
              features={['4 Stunden intensiv, online oder vor Ort', 'Bis 12 Teilnehmer', 'MaÃgeschneiderte Ãbungen mit Ihren echten Prozessen', 'Branchenspezifische Prompt-Bibliothek', '30-Tage Follow-up Check-in', 'Ideal nach 2â3 Monaten KI-Autopilot']}
              ctaText="Workshop anfragen"
              ctaHref={SITE_CONFIG.calendly}
              ctaExternal
              trackingId="value_03_workshop"
            />
            <div style={{ borderTop: '1px solid #1E2947' }} />
          </div>
        </section>
      </FadeUp>

      {/* ââ BRANCHEN OVERVIEW ââ */}
      <FadeUp>
        <section style={{ padding: '24px 32px 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>BranchenlÃ¶sungen</div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, letterSpacing: '-0.3px', margin: '0 0 12px', color: '#fff' }}>Drei Branchen. MaÃgeschneiderte KI.</h2>
            <p style={{ fontSize: 16, color: '#888', lineHeight: 1.75 }}>Jede Branche hat eigene Prozesse. Unsere LÃ¶sungen sind darauf zugeschnitten.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, maxWidth: 1100, margin: '0 auto' }} className="three-col">
            {[
              {
                Icon: KeyIcon, title: 'Immobilienmakler', sub: 'Kein Lead geht verloren',
                points: ['Lead-Erfassung aus ImmoScout24 & Website', 'KI-basiertes Lead-Scoring', 'Automatische CRM-BefÃ¼llung'],
                href: '/automatisierung/immobilien', badge: 'MEISTGEBUCHT',
              },
              {
                Icon: WrenchIcon, title: 'Handwerksbetriebe', sub: 'Anfragen, Angebote, Rechnungen',
                points: ['Automatische AnfragebestÃ¤tigung', 'KI-Angebotsgenerierung', 'Automatische Rechnungen (ZUGFeRD)'],
                href: '/automatisierung/handwerk', badge: null,
              },
              {
                Icon: BuildingIcon, title: 'Bauunternehmen', sub: 'Kommunikation und Dokumentation',
                points: ['Automatischer Wochenbericht', 'MÃ¤ngelmanagement mit Eskalation', 'Subunternehmer-Koordination'],
                href: '/automatisierung/bau', badge: null,
              },
            ].map((sector, i) => (
              <motion.div key={i} whileHover={{ y: -3, borderColor: '#1E2947' }}
                style={{ background: '#0F1629', border: '1px solid #1E2947', borderRadius: 10, padding: 28, transition: 'border-color 0.3s', position: 'relative' }}>
                {sector.badge && (
                  <div style={{ position: 'absolute', top: 12, right: 12, background: CORAL, color: '#fff', fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 4, letterSpacing: '0.04em' }}>
                    {sector.badge}
                  </div>
                )}
                <div style={{ marginBottom: 16 }}><sector.Icon /></div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', margin: '0 0 6px' }}>{sector.title}</h3>
                <p style={{ fontSize: 14, color: CORAL, margin: '0 0 16px' }}>{sector.sub}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                  {sector.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                      <span style={{ color: CORAL, fontSize: 13, marginTop: 2, flexShrink: 0 }}>â</span>
                      <span style={{ fontSize: 14, color: '#777', lineHeight: 1.6 }}>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link href={sector.href} onClick={() => trackClick(`branch_${i}`, sector.title)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#888', textDecoration: 'none' }}>
                  Details ansehen <ArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ââ TEAM ââ */}
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
                <p style={{ fontSize: 15, color: '#888', lineHeight: 1.75, margin: '0 0 16px' }}>{person.bio}</p>
                <a href={person.linkedin} target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#777', textDecoration: 'none' }}>
                  <LinkedInIcon /> LinkedIn Profil
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ââ CTA ââ */}
      <FadeUp>
        <section style={{ padding: '80px 32px', textAlign: 'center', background: '#0F1629', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(232,71,42,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 30px)', fontWeight: 600, color: '#fff', margin: '0 0 14px' }}>
            Bereit fÃ¼r Ihren KI-Quickcheck?
          </h2>
          <p style={{ fontSize: 17, color: '#888', margin: '0 0 32px', lineHeight: 1.75 }}>
            In 2 Stunden wissen Sie genau, wo KI Ihrem Unternehmen<br />am meisten Zeit und Geld spart. FÃ¼r einmalig â¬490.
          </p>
          <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
            onClick={() => trackClick('cta_bottom', 'KI-Quickcheck buchen')}
            style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '15px 36px', borderRadius: 9, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
            Jetzt KI-Quickcheck buchen
          </a>
          <div style={{ fontSize: 13, color: '#2D3A5C', marginTop: 14 }}>
            Auf Rechnung Â· Keine Vorinstallation Â· Ergebnis in 48 Stunden
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
