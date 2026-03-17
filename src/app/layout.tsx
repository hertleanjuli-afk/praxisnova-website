import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PraxisNova AI - KI-Schulung und Prozessautomatisierung',
  description: 'KI-Schulung und Prozessautomatisierung fuer Bau, Handwerk und Immobilien. Workshops, individuelle Automatisierung und Beratung. DSGVO-konform auf EU-Servern.',
  openGraph: {
    title: 'PraxisNova AI',
    description: '8,3 Stunden pro Woche verschwendet. Wir aendern das.',
    url: 'https://www.praxisnovaai.com',
    siteName: 'PraxisNova AI',
    locale: 'de_DE',
    type: 'website',
  },
}


'use client';
import { useEffect, useState } from 'react';

function Popup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name })
    });
    setSent(true);
  }

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000, background: '#111', border: '1px solid #1E1E1E', borderRadius: 16, padding: 28, maxWidth: 340, boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
      <button onClick={() => setShow(false)} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', color: '#555', fontSize: 18, cursor: 'pointer' }}>×</button>
      {sent ? (
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
          <p style={{ color: '#fff', fontWeight: 600 }}>Danke! Wir melden uns bald.</p>
        </div>
      ) : (
        <>
          <p style={{ fontSize: 13, color: '#E8472A', fontWeight: 600, marginBottom: 6 }}>Kostenlosen Audit sichern</p>
          <p style={{ fontSize: 14, color: '#fff', fontWeight: 700, marginBottom: 8 }}>Wir zeigen euch in 15 Min. wie viel Zeit ihr verliert.</p>
          <p style={{ fontSize: 12, color: '#555', marginBottom: 16 }}>Kein Risiko. Keine Verpflichtung.</p>
          <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Euer Name" required style={{ width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 8, padding: '10px 12px', color: '#fff', fontSize: 13, marginBottom: 8, boxSizing: 'border-box' }} />
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Eure E-Mail" required style={{ width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 8, padding: '10px 12px', color: '#fff', fontSize: 13, marginBottom: 12, boxSizing: 'border-box' }} />
            <button type="submit" style={{ width: '100%', background: '#E8472A', color: '#fff', border: 'none', borderRadius: 8, padding: '11px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Jetzt Audit sichern →</button>
          </form>
        </>
      )}
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}<Popup /></body>
    </html>
  )
}
