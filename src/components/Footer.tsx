import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

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

export default function Footer() {
  return (
    <footer style={{ background: '#0F1629', borderTop: '1px solid #1E2947', padding: '36px 32px 24px' }}>
      <style>{`
        .footer-link { font-size: 13px; color: #555; text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: #999; }
        .footer-social { color: #444; transition: color 0.2s; }
        .footer-social:hover { color: ${CORAL}; }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          .footer-grid > div:last-child { text-align: center !important; }
        }
      `}</style>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1100, margin: '0 auto 24px' }}
        className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: CORAL }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>PraxisNova AI</span>
          </div>
          <div style={{ fontSize: 13, color: '#555', lineHeight: 1.75 }}>KI-Schulung und Prozessautomatisierung</div>
          <a href={SITE_CONFIG.linkedinFirma} target="_blank" rel="noreferrer"
            className="footer-social"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, textDecoration: 'none', fontSize: 13 }}>
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Link href="/#angebote" className="footer-link">Workshops</Link>
          <Link href="/automatisierung" className="footer-link">KI-Automatisierung</Link>
          <Link href="/ueber-uns" className="footer-link">Über uns</Link>
          <Link href="/impressum" className="footer-link">Impressum</Link>
          <Link href="/datenschutz" className="footer-link">Datenschutz</Link>
        </div>
        <div style={{ textAlign: 'right' }}>
          <a href={`mailto:${SITE_CONFIG.email}`} className="footer-link">
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>
      <div style={{ textAlign: 'center', borderTop: '1px solid #1E2947', paddingTop: 20 }}>
        <span style={{ fontSize: 12, color: '#1E2947' }}>© 2026 PraxisNova AI. Alle Rechte vorbehalten.</span>
      </div>
    </footer>
  );
}
