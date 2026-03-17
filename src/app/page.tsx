'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const CORAL = '#E8472A';

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
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

export default function Page() {
  return (
    <main style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ padding: '80px 32px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(232,71,42,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#141414', border: '1px solid #2a2a2a', color: '#888', fontSize: 12, padding: '5px 14px', borderRadius: 20, marginBottom: 24 }}>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.5px', margin: '0 0 20px' }}>
            <span style={{ color: '#fff' }}>8,3 Stunden pro Woche.</span>
            <br />
            <span style={{ color: CORAL }}>Einfach verschwendet.</span>
          </h1>

          <p style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: '#555', margin: '0 0 36px', lineHeight: 1.65 }}>
            Bauunternehmen, Handwerksbetriebe und Immobilienprofis verlieren t&#228;glich wertvolle Zeit
            durch ineffiziente Abl&#228;ufe. Wir zeigen eurem Team in einem halben Tag wie KI das &#228;ndert.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
              style={{ background: CORAL, color: '#fff', padding: '13px 28px', borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
              Workshops entdecken
            </a>
            <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
              style={{ background: 'transparent', color: '#777', padding: '13px 28px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid #222' }}>
              Kostenlosen Audit buchen
            </a>
          </div>

          <p style={{ fontSize: 11, color: '#2a2a2a', marginTop: 16 }}>
            Capmo Effizienzstudie, Deutsche Baubranche
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <FadeUp>
        <section style={{ padding: '0 32px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, maxWidth: 1100, margin: '0 auto', background: '#181818', borderRadius: 10, overflow: 'hidden' }} className="stats-grid">
            {[
              { value: 8.3, suffix: ' Std.', label: 'pro Woche verschwendet', source: 'Capmo, Baubranche DE' },
              { value: 50, suffix: '%', label: 'der Betriebe nicht KI-bereit', source: 'PwC Deutschland 2025' },
              { label: '45 zu 8 Min.', isText: true, sub: 'Angebotserstellung mit KI', source: 'PraxisNova' },
              { value: 6, suffix: ' Wochen', label: 'Amortisationszeit', source: 'PraxisNova' },
            ].map((stat, i) => (
              <div key={i} style={{ background: '#0A0A0A', padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 700, color: CORAL, marginBottom: 4 }}>
                  {stat.isText ? stat.label : <CountUp target={stat.value as number} suffix={stat.suffix} />}
                </div>
                <div style={{ fontSize: 12, color: '#444', marginBottom: 4 }}>{stat.isText ? stat.sub : stat.label}</div>
                <div style={{ fontSize: 10, color: '#2a2a2a' }}>{stat.source}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── PROBLEM SECTION ── */}
      <FadeUp>
        <section style={{ padding: '24px 32px 72px' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ fontSize: 10, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Der Alltag in der Baubranche</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.3px', margin: '0 0 10px' }}>Wo geht eure Zeit wirklich hin?</h2>
            <p style={{ fontSize: 14, color: '#555' }}>Drei Branchen. Dieselben Probleme. Eine L&#246;sung.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, maxWidth: 1100, margin: '0 auto' }} className="three-col">
            {[
              {
                Icon: BuildingIcon,
                title: 'Bauunternehmen',
                problems: [
                  'Angebote kosten Stunden statt Minuten',
                  'Subunternehmer-Kommunikation frisst Baustellen-Zeit',
                  'Projektdokumentation bindet Fachkr&#228;fte unn&#246;tig',
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
                  'Expos&#233;-Erstellung ist repetitiv und nicht skalierbar',
                  'Lead-Nachverfolgung kostet zu viel Zeit',
                  'Kundenbetreuung ohne KI nicht ausbaubar',
                ],
              },
            ].map((sector, i) => (
              <motion.div key={i} whileHover={{ y: -3 }}
                style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 10, padding: 24 }}>
                <div style={{ marginBottom: 16 }}><sector.Icon /></div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', margin: '0 0 16px' }}>{sector.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sector.problems.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                      <span style={{ color: CORAL, fontSize: 14, marginTop: 1, flexShrink: 0 }}>&#215;</span>
                      <span style={{ fontSize: 13, color: '#444', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: p }} />
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
        <section id="angebote" style={{ padding: '24px 32px 72px', background: '#060606' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ fontSize: 10, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Unsere Angebote</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, letterSpacing: '-0.3px', margin: '0 0 10px' }}>Einstieg oder Vollautomatisierung</h2>
            <p style={{ fontSize: 14, color: '#555' }}>Workshops f&#252;r schnelle Ergebnisse. KI-Automatisierung f&#252;r nachhaltigen Vorsprung.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, maxWidth: 1100, margin: '0 auto' }} className="three-col">
            {/* STARTER */}
            <motion.div whileHover={{ y: -3 }} style={{ background: '#060606', border: '1px solid #1a1a1a', borderRadius: 10, padding: 22 }}>
              <div style={{ fontSize: 10, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Workshop</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 6 }}>Starter</div>
              <div style={{ fontSize: 12, color: '#444', lineHeight: 1.6, marginBottom: 18 }}>
                4 Stunden online, bis 12 Personen, 3 sofort umsetzbare Use Cases, 10 Bau-Prompts inklusive, 30 Tage E-Mail-Support
              </div>
              <div style={{ height: 1, background: '#1a1a1a', marginBottom: 14 }} />
              <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>&#8364;4.900</div>
              <div style={{ fontSize: 11, color: '#333', marginBottom: 16 }}>pro Unternehmen, Flatrate</div>
              <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
                style={{ display: 'block', width: '100%', padding: '10px', textAlign: 'center', background: 'transparent', border: '1px solid #222', color: '#555', borderRadius: 7, fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>
                Workshop anfragen
              </a>
            </motion.div>

            {/* PROFESSIONAL */}
            <motion.div whileHover={{ y: -3 }} style={{ background: '#060606', border: `1px solid ${CORAL}44`, borderRadius: 10, padding: 22, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, right: 14, background: CORAL, color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: '0 0 6px 6px', letterSpacing: '0.04em' }}>BELIEBT</div>
              <div style={{ fontSize: 10, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Workshop</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 6 }}>Professional</div>
              <div style={{ fontSize: 12, color: '#444', lineHeight: 1.6, marginBottom: 18 }}>
                7 Stunden online, bis 15 Personen, eigene Workflows entwickeln, Prompt-Bibliothek, 60 Tage Support und 2 Follow-up Calls
              </div>
              <div style={{ height: 1, background: '#1a1a1a', marginBottom: 14 }} />
              <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>&#8364;7.900</div>
              <div style={{ fontSize: 11, color: '#333', marginBottom: 16 }}>pro Unternehmen, Flatrate</div>
              <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
                style={{ display: 'block', width: '100%', padding: '10px', textAlign: 'center', background: CORAL, color: '#fff', borderRadius: 7, fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>
                Workshop anfragen
              </a>
            </motion.div>

            {/* AUTOMATISIERUNG */}
            <motion.div whileHover={{ y: -3 }} style={{ background: '#060606', border: '1px solid #1a1a1a', borderRadius: 10, padding: 22 }}>
              <div style={{ fontSize: 10, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Premium</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 6 }}>KI-Prozessautomatisierung</div>
              <div style={{ fontSize: 12, color: '#444', lineHeight: 1.6, marginBottom: 18 }}>
                Audit, Konzept, Umsetzung, Training, laufende Wartung. Individuelle Workflows f&#252;r euer Unternehmen. DSGVO-konform auf EU-Servern.
              </div>
              <div style={{ height: 1, background: '#1a1a1a', marginBottom: 14 }} />
              <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>ab &#8364;1.800</div>
              <div style={{ fontSize: 11, color: '#333', marginBottom: 16 }}>Einrichtung + monatliche Wartung ab &#8364;500</div>
              <Link href="/automatisierung"
                style={{ display: 'block', width: '100%', padding: '10px', textAlign: 'center', background: 'transparent', border: '1px solid #222', color: '#555', borderRadius: 7, fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>
                Pakete ansehen
              </Link>
            </motion.div>
          </div>
        </section>
      </FadeUp>

      {/* ── AUTOMATISIERUNG OVERVIEW ── */}
      <FadeUp>
        <section style={{ padding: '24px 32px 72px' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{ fontSize: 10, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>KI-Automatisierung</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, letterSpacing: '-0.3px', margin: '0 0 10px' }}>Drei Branchen. Drei Pakete.</h2>
            <p style={{ fontSize: 14, color: '#555' }}>Jedes Paket ist produktisiert, sofort einsetzbar und DSGVO-konform.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, maxWidth: 1100, margin: '0 auto' }} className="three-col">
            {[
              {
                href: '/automatisierung/immobilien',
                label: 'Immobilienmakler',
                tagline: 'Kein Lead geht mehr verloren',
                features: ['Lead-Erfassung aus ImmoScout24', 'KI-basiertes Lead-Scoring', 'Automatische CRM-Bef&#252;llung', 'Besichtigungsautomatisierung', 'Google-Bewertungsanfragen'],
                price: 'ab &#8364;2.500',
                retainer: '+ ab &#8364;600 / Monat',
              },
              {
                href: '/automatisierung/handwerk',
                label: 'Handwerksbetriebe',
                tagline: 'Anfragen, Angebote, Rechnungen',
                features: ['Automatische Anfragebestätigung', 'KI-Angebotsgenerierung', 'Online-Terminbuchung', 'Automatische Rechnungen (ZUGFeRD)', 'Mahnwesen & Bewertungsanfragen'],
                price: 'ab &#8364;1.800',
                retainer: '+ ab &#8364;500 / Monat',
                highlight: true,
              },
              {
                href: '/automatisierung/bau',
                label: 'Bauunternehmen',
                tagline: 'Kommunikation und Dokumentation',
                features: ['Projektstart-Automatisierung', 'Automatischer Wochenbericht', 'M&#228;ngelmanagement mit Eskalation', 'Subunternehmer-Koordination', '&#220;bergabedokumentation (automatisch)'],
                price: 'ab &#8364;3.500',
                retainer: '+ ab &#8364;800 / Monat',
              },
            ].map((pkg, i) => (
              <motion.div key={i} whileHover={{ y: -3 }}
                style={{ background: '#111', border: pkg.highlight ? `1px solid ${CORAL}44` : '1px solid #1a1a1a', borderRadius: 10, padding: 24, display: 'flex', flexDirection: 'column' }}>
                {pkg.highlight && (
                  <div style={{ fontSize: 10, color: CORAL, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Meistgebucht</div>
                )}
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>{pkg.label}</h3>
                <p style={{ fontSize: 12, color: CORAL, margin: '0 0 16px' }}>{pkg.tagline}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', flex: 1 }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                      <span style={{ color: CORAL, fontSize: 12, marginTop: 2, flexShrink: 0 }}>&#10003;</span>
                      <span style={{ fontSize: 12, color: '#444', lineHeight: 1.45 }} dangerouslySetInnerHTML={{ __html: f }} />
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 14, marginBottom: 14 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#fff' }} dangerouslySetInnerHTML={{ __html: pkg.price }} />
                  <div style={{ fontSize: 11, color: '#333' }} dangerouslySetInnerHTML={{ __html: pkg.retainer }} />
                  <div style={{ fontSize: 10, color: '#2a2a2a', marginTop: 4 }}>Genauer Preis nach kostenlosem Audit</div>
                </div>
                <Link href={pkg.href}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, width: '100%', padding: '10px', textAlign: 'center', background: pkg.highlight ? CORAL : 'transparent', border: pkg.highlight ? 'none' : '1px solid #222', color: pkg.highlight ? '#fff' : '#555', borderRadius: 7, fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>
                  Mehr erfahren <ArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── TEAM ── */}
      <FadeUp>
        <section id="team" style={{ padding: '24px 32px 72px', background: '#060606' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 600, color: '#fff', letterSpacing: '-0.3px', margin: '0 0 8px' }}>Euer Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, maxWidth: 800, margin: '0 auto' }} className="two-col">
            {[
              {
                name: 'Anjuli Hertle',
                title: 'KI-Trainerin & Gr&#252;nderin',
                text: 'Vertriebsexpertin mit Fokus auf die Baubranche. Anjuli zeigt eurem Team wie KI Angebote, Kommunikation und Akquise konkret beschleunigt.',
                linkedin: 'https://www.linkedin.com/in/anjuli-hertle-a12335179',
                photo: '',
              },
              {
                name: 'Samantha Meyer',
                title: 'KI-Trainerin & Co-Gr&#252;nderin',
                text: 'Spezialistin f&#252;r digitale Prozesse und Automatisierung. Samantha bringt strukturiertes Denken und technisches Know-how zusammen und sorgt daf&#252;r, dass KI-L&#246;sungen bei euch wirklich funktionieren.',
                linkedin: 'https://www.linkedin.com/in/samantha-meyer-005b41277',
                photo: '',
              },
            ].map((person, i) => (
              <motion.div key={i} whileHover={{ y: -2 }}
                style={{ background: '#0A0A0A', border: '1px solid #1a1a1a', borderRadius: 10, padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>{person.name}</div>
                    <div style={{ fontSize: 12, color: CORAL }} dangerouslySetInnerHTML={{ __html: person.title }} />
                  </div>
                </div>
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.65, margin: '0 0 16px' }} dangerouslySetInnerHTML={{ __html: person.text }} />
                <a href={person.linkedin} target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#777', textDecoration: 'none' }}
                  
                  >
                  <LinkedInIcon /> LinkedIn Profil
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── CTA ── */}
      <FadeUp>
        <section style={{ padding: '72px 32px', textAlign: 'center', background: '#060606', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(232,71,42,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <h2 style={{ fontSize: 26, fontWeight: 600, color: '#fff', margin: '0 0 12px' }}>15 Minuten. Kein Risiko.</h2>
          <p style={{ fontSize: 15, color: '#555', margin: '0 0 28px', lineHeight: 1.6 }}>
            Wir zeigen euch konkret wie viel Zeit euer Team zur&#252;ckgewinnt<br />und was das f&#252;r euren Jahresumsatz bedeutet.
          </p>
          <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '15px 36px', borderRadius: 9, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}
            
            >
            Kostenlosen Audit buchen
          </a>
          <div style={{ fontSize: 12, color: '#2a2a2a', marginTop: 14 }}>
            Kein IT-Aufwand &#183; Keine Vorinstallation &#183; Sofort umsetzbar
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
        }
      `}</style>
    </main>
  );
}
