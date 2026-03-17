'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const CORAL = '#E8472A';

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function UeberUnsPage() {
  return (
    <main style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />

      <section style={{ padding: '72px 32px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,71,42,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 10, color: CORAL, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Das Team</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.4px', margin: '0 0 16px' }}>
            &#220;ber uns
          </h1>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.65, margin: 0 }}>
            PraxisNova AI wurde von zwei Expertinnen gegr&#252;ndet, die eines verbindet: die Baubranche braucht keine weiteren Buzzwords, sondern Automatisierungen, die wirklich funktionieren.
          </p>
        </div>
      </section>

      <section style={{ padding: '32px 32px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 900, margin: '0 auto' }} className="two-col">
          {[
            {
              name: 'Anjuli Hertle',
              title: 'KI-Trainerin & Gr\u00fcnderin',
              photo: '/images/anjuli.jpg',
              linkedin: 'https://www.linkedin.com/in/anjuli-hertle-a12335179',
              bio: [
                'Anjuli bringt jahrelange Erfahrung im Vertrieb und in der Baubranche mit. Sie wei\u00df aus erster Hand, wo die echten Zeitfresser im Betriebsalltag stecken.',
                'Als KI-Trainerin zeigt sie Teams praxisnah, wie K\u00fcnstliche Intelligenz Angebote, Kommunikation und Akquise konkret beschleunigt. Ohne Fachchinesisch, ohne Vorwissen.',
                'Ihr Ansatz: Jede Automatisierung muss innerhalb von Wochen amortisiert sein, sonst lohnt sie sich nicht.',
              ],
            },
            {
              name: 'Samantha Meyer',
              title: 'KI-Trainerin & Co-Gr\u00fcnderin',
              photo: '/images/samantha.jpg',
              linkedin: 'https://www.linkedin.com/in/samantha-meyer-005b41277',
              bio: [
                'Samantha ist Spezialistin f\u00fcr digitale Prozesse und Automatisierung. Sie verbindet strukturiertes Denken mit tiefem technischen Know-how.',
                'Sie baut die Automatisierungsworkflows, die im Betriebsalltag wirklich funktionieren. DSGVO-konform, auf EU-Servern, mit klarer \u00dcbergabe an das Team.',
                'Ihr Anspruch: KI-L\u00f6sungen, die nicht nach drei Monaten wieder im Regal verstauben.',
              ],
            },
          ].map((person, i) => (
            <motion.div key={i} whileHover={{ y: -2 }}
              style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ marginBottom: 20 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>{person.name}</h2>
                  <div style={{ fontSize: 13, color: CORAL }}>{person.title}</div>
                </div>
                {person.bio.map((para, j) => (
                  <p key={j} style={{ fontSize: 13, color: '#555', lineHeight: 1.7, margin: '0 0 12px' }}>{para}</p>
                ))}
                <a href={person.linkedin} target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#777', textDecoration: 'none', marginTop: 8, padding: '8px 14px', border: '1px solid #222', borderRadius: 6 }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#444'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#777'; e.currentTarget.style.borderColor = '#222'; }}>
                  <LinkedInIcon /> LinkedIn Profil
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 16px' }}>Unsere Mission</h2>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, margin: '0 0 16px' }}>
            Wir glauben, dass KI in der Baubranche kein Luxus f\u00fcr Gro\u00dfkonzerne sein darf. Jeder Handwerksbetrieb, jeder Makler und jedes Bauunternehmen soll die Vorteile der Automatisierung nutzen k\u00f6nnen, ohne eine IT-Abteilung zu ben\u00f6tigen.
          </p>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, margin: 0 }}>
            DSGVO-konform. Auf EU-Servern. Mit echter Unterst\u00fctzung von Menschen, die die Branche kennen.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 32px 80px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', background: '#060606', border: '1px solid #1a1a1a', borderRadius: 12, padding: '40px 36px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, margin: '0 0 12px' }}>Lernt uns kennen</h2>
          <p style={{ fontSize: 14, color: '#555', margin: '0 0 24px', lineHeight: 1.6 }}>
            15 Minuten. Kein Risiko. Wir zeigen euch konkret, was Automatisierung f\u00fcr euren Betrieb bedeutet.
          </p>
          <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', background: CORAL, color: '#fff', padding: '12px 28px', borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            Kostenlosen Audit buchen
          </a>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}
