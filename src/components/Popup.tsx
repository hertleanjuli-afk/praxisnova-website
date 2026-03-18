'use client';
import { useEffect, useState } from 'react';

const CORAL = '#E8472A';

export default function Popup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name }),
    });
    setSent(true);
  }

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 32, right: 32, zIndex: 1000,
      background: '#0F1629', border: '1px solid #1E2947', borderRadius: 16,
      padding: 28, maxWidth: 360, boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    }}>
      <button
        onClick={() => setShow(false)}
        style={{
          position: 'absolute', top: 12, right: 16, background: 'none',
          border: 'none', color: '#555', fontSize: 20, cursor: 'pointer',
        }}
        aria-label="Schließen"
      >
        ×
      </button>

      {sent ? (
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
          <p style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>Danke! Wir melden uns in Kürze.</p>
        </div>
      ) : (
        <>
          <p style={{ fontSize: 14, color: CORAL, fontWeight: 600, marginBottom: 6 }}>
            Kostenlosen Erstcheck sichern
          </p>
          <p style={{ fontSize: 16, color: '#fff', fontWeight: 700, marginBottom: 8, lineHeight: 1.5 }}>
            Wir zeigen Ihnen in 15 Min., wo Sie Zeit verlieren.
          </p>
          <p style={{ fontSize: 13, color: '#555', marginBottom: 16, lineHeight: 1.75 }}>
            Kein Risiko. Keine Verpflichtung.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ihr Name"
              required
              style={{
                width: '100%', background: '#141E3A', border: '1px solid #1E2947',
                borderRadius: 8, padding: '10px 12px', color: '#fff', fontSize: 14,
                marginBottom: 8, boxSizing: 'border-box',
              }}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Ihre E-Mail"
              required
              style={{
                width: '100%', background: '#141E3A', border: '1px solid #1E2947',
                borderRadius: 8, padding: '10px 12px', color: '#fff', fontSize: 14,
                marginBottom: 12, boxSizing: 'border-box',
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%', background: CORAL, color: '#fff', border: 'none',
                borderRadius: 8, padding: '12px', fontSize: 14, fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Jetzt Erstcheck sichern →
            </button>
          </form>
        </>
      )}
    </div>
  );
}
