import Link from 'next/link';

const CORAL = '#E8472A';

export default function Footer() {
  return (
    <footer style={{ background: '#060606', borderTop: '1px solid #181818', padding: '36px 32px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1100, margin: '0 auto 24px' }}
        className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: CORAL }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>PraxisNova AI</span>
          </div>
          <div style={{ fontSize: 12, color: '#333' }}>KI-Schulung und Prozessautomatisierung</div>
        </div>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {[
            { label: 'Workshops', href: '/#angebote' },
            { label: 'KI-Automatisierung', href: '/automatisierung' },
            { label: 'Impressum', href: '/impressum' },
            { label: 'Datenschutz', href: '/datenschutz' },
          ].map(link => (
            <Link key={link.label} href={link.href}
              style={{ fontSize: 12, color: '#333', textDecoration: 'none' }}
              className="footer-link"
              >
              {link.label}
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'right' }}>
          <a href="mailto:info@praxisnovaai.com"
            style={{ fontSize: 12, color: '#333', textDecoration: 'none' }}>
            info@praxisnovaai.com
          </a>
        </div>
      </div>
      <div style={{ textAlign: 'center', borderTop: '1px solid #111', paddingTop: 20 }}>
        <span style={{ fontSize: 11, color: '#222' }}>&#169; 2026 PraxisNova AI. Alle Rechte vorbehalten.</span>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          .footer-grid > div:last-child { text-align: center !important; }
        }
      `}</style>
    </footer>
  );
}
