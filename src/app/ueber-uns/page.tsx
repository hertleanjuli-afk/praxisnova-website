import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';

export const metadata = {
  title: 'Über uns | PraxisNova AI – Gründerinnen & Team',
  description: 'Lernen Sie die Gründerinnen von PraxisNova AI kennen: Anjuli Hertle und Samantha Meyer – KI-Strategie und Prozessautomatisierung für Bau, Handwerk & Immobilien.',
  alternates: { canonical: '/ueber-uns' },
};

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
    <main style={{ background: '#080C1A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />
      <section style={{ padding: '80px 32px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#141E3A', border: '1px solid #1E2947', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#888', marginBottom: 24 }}>
            ÜBER UNS
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 24 }}>
            Zwei Gründerinnen.<br />Eine Mission.
          </h1>
          <p style={{ fontSize: 17, color: '#888', lineHeight: 1.75, maxWidth: 500, margin: '0 auto 56px' }}>
            Wir helfen kleinen und mittelständischen Unternehmen dabei, KI sinnvoll einzusetzen und repetitive Prozesse zu automatisieren.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }} className="two-col">
          {SITE_CONFIG.team.map((person, i) => {
            const imgSrc = i === 0 ? '/images/anjuli.png' : '/images/samantha.png';
            return (
            <div key={i} style={{ background: '#0F1629', border: '1px solid #1E2947', borderRadius: 16, padding: 32 }}>
              <div style={{ width: 64, height: 64, borderRadius: 32, overflow: 'hidden', marginBottom: 20 }}>
                <Image src={imgSrc} alt={`${person.name} – ${person.role}`} width={64} height={64} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6, color: '#fff' }}>{person.name}</h2>
              <p style={{ fontSize: 14, color: '#E8472A', marginBottom: 18 }}>{person.role}</p>
              <p style={{ fontSize: 16, color: '#888', lineHeight: 1.75, marginBottom: 22 }}>
                {person.bio}
              </p>
              <a href={person.linkedin} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#777', textDecoration: 'none' }}>
                <LinkedInIcon /> LinkedIn Profil →
              </a>
            </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href={SITE_CONFIG.linkedinFirma} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, color: '#888', textDecoration: 'none', border: '1px solid #1E2947', padding: '10px 24px', borderRadius: 8 }}>
            <LinkedInIcon /> PraxisNova AI auf LinkedIn folgen
          </a>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
