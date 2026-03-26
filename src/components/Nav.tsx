'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';

const CORAL = '#E8472A';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(8,12,26,0.85)' : '#080C1A',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid #1E2947',
      padding: '14px 32px',
      transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        .nav-link { font-size: 14px; color: #888; text-decoration: none; transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
        .nav-cta { transition: transform 0.2s, box-shadow 0.2s; }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(232,71,42,0.3); }
      `}</style>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: CORAL }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '-0.3px' }}>PraxisNova AI</span>
        </Link>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="hidden-mobile">
          <Link href="/#angebote" className="nav-link">Workshops</Link>
          <Link href="/automatisierung" className="nav-link">KI-Automatisierung</Link>
          <Link href="/ueber-uns" className="nav-link">Über uns</Link>
          <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
            className="nav-cta"
            style={{ background: CORAL, color: '#fff', padding: '9px 18px', borderRadius: 7, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Kostenlosen Audit buchen
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
          className="show-mobile"
          aria-label="Menü öffnen"
        >
          <div style={{ width: 22, height: 2, background: '#fff', marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: '#fff', marginBottom: 5 }} />
          <div style={{ width: 22, height: 2, background: '#fff' }} />
        </button>
      </div>

      {open && (
        <div style={{ padding: '16px 32px 20px', borderTop: '1px solid #1E2947', background: '#080C1A' }}>
          <Link href="/#angebote" onClick={() => setOpen(false)}
            style={{ display: 'block', fontSize: 16, color: '#888', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid #1E2947' }}>
            Workshops
          </Link>
          <Link href="/automatisierung" onClick={() => setOpen(false)}
            style={{ display: 'block', fontSize: 16, color: '#888', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid #1E2947' }}>
            KI-Automatisierung
          </Link>
          <Link href="/ueber-uns" onClick={() => setOpen(false)}
            style={{ display: 'block', fontSize: 16, color: '#888', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid #1E2947' }}>
            Über uns
          </Link>
          <a href={SITE_CONFIG.calendly} target="_blank" rel="noreferrer"
            style={{ display: 'block', marginTop: 16, background: CORAL, color: '#fff', padding: '12px', borderRadius: 7, fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center' }}>
            Kostenlosen Audit buchen
          </a>
        </div>
      )}
    </nav>
  );
}
