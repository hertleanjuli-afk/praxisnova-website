'use client';

import { useState } from 'react';
import Link from 'next/link';

const CORAL = '#E8472A';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#0A0A0A', borderBottom: '1px solid #181818',
      padding: '14px 32px',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        .nav-link { font-size: 13px; color: #555; text-decoration: none; }
        .nav-link:hover { color: #999; }
      `}</style>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: CORAL }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '-0.3px' }}>PraxisNova AI</span>
        </Link>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="hidden-mobile">
          <Link href="/#angebote" className="nav-link">Workshops</Link>
          <Link href="/automatisierung" className="nav-link">KI-Automatisierung</Link>
          <Link href="/ueber-uns" className="nav-link">&Uuml;ber uns</Link>
          <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
            style={{ background: CORAL, color: '#fff', padding: '9px 18px', borderRadius: 7, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
            Kostenlosen Audit buchen
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
          className="show-mobile"
          aria-label="Menu"
        >
          <div style={{ width: 22, height: 2, background: '#fff', marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: '#fff', marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: '#fff' }} />
        </button>
      </div>

      {open && (
        <div style={{ padding: '16px 32px 20px', borderTop: '1px solid #181818', background: '#0A0A0A' }}>
          <Link href="/#angebote" onClick={() => setOpen(false)}
            style={{ display: 'block', fontSize: 15, color: '#888', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid #181818' }}>
            Workshops
          </Link>
          <Link href="/automatisierung" onClick={() => setOpen(false)}
            style={{ display: 'block', fontSize: 15, color: '#888', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid #181818' }}>
            KI-Automatisierung
          </Link>
          <Link href="/ueber-uns" onClick={() => setOpen(false)}
            style={{ display: 'block', fontSize: 15, color: '#888', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid #181818' }}>
            &Uuml;ber uns
          </Link>
          <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min" target="_blank" rel="noreferrer"
            style={{ display: 'block', marginTop: 16, background: CORAL, color: '#fff', padding: '12px', borderRadius: 7, fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center' }}>
            Kostenlosen Audit buchen
          </a>
        </div>
      )}
    </nav>
  );
}
