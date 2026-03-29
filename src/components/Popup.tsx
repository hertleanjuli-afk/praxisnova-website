'use client';
import { useEffect, useState } from 'react';

const CORAL = '#E8472A';
const DISMISS_KEY = 'pn_popup_dismissed';
const SUBMITTED_KEY = 'pn_popup_submitted';
const CONSENT_KEY = 'pn_cookie_consent';
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

function isValidEmail(email: string) {
  return email.includes('@') && email.includes('.');
}

export default function Popup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);
  const [dsgvo, setDsgvo] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem(SUBMITTED_KEY);
    if (submitted) return;

    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed) {
      const elapsed = Date.now() - parseInt(dismissed, 10);
      if (elapsed < SEVEN_DAYS) return;
    }

    // Respect marketing consent: if user explicitly rejected marketing, don't show popup
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent) {
      try {
        const parsed = JSON.parse(consent);
        if (parsed.marketing === false) return;
      } catch { /* show popup if consent is corrupted */ }
    }

    const timer = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  function handleDismiss() {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setShow(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
    const visitorId = typeof window !== 'undefined' ? localStorage.getItem('pn_vid') || '' : '';
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, visitorId }),
      });
    } catch {
      // silently ignore
    }
    localStorage.setItem(SUBMITTED_KEY, '1');
    setSent(true);
  }

  if (!show) return null;

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .pn-popup {
            bottom: 0 !important;
            right: 0 !important;
            left: 0 !important;
            max-width: 100% !important;
            border-radius: 16px 16px 0 0 !important;
          }
        }
      `}</style>
      <div className="pn-popup" style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 1000,
        background: '#0F1629', border: '1px solid #1E2947', borderRadius: 16,
        padding: 28, maxWidth: 360, boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}>
        <button
          onClick={handleDismiss}
          style={{
            position: 'absolute', top: 12, right: 16, background: 'none',
            border: 'none', color: '#555', fontSize: 20, cursor: 'pointer',
          }}
          aria-label="Schließen"
        >
          ×
        </button>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
            <p style={{ color: '#fff', fontWeight: 600, fontSize: 16, marginBottom: 8 }}>
              Danke! Wir melden uns innerhalb von 24 Stunden.
            </p>
            <p style={{ color: '#888', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Prüfen Sie Ihr Postfach für die Bestätigung. Oder buchen Sie direkt Ihren kostenlosen Audit:
            </p>
            <a
              href="https://calendly.com/meyer-samantha-praxisnovaai/30min"
              target="_blank" rel="noreferrer"
              style={{
                display: 'inline-block', background: CORAL, color: '#fff',
                padding: '10px 20px', borderRadius: 7, fontSize: 14,
                fontWeight: 700, textDecoration: 'none',
              }}
            >
              Kostenlosen Audit buchen
            </a>
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
                onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                type="email"
                placeholder="Ihre E-Mail"
                required
                style={{
                  width: '100%', background: '#141E3A',
                  border: `1px solid ${emailError ? CORAL : '#1E2947'}`,
                  borderRadius: 8, padding: '10px 12px', color: '#fff', fontSize: 14,
                  marginBottom: emailError ? 4 : 12, boxSizing: 'border-box',
                }}
              />
              {emailError && (
                <p style={{ fontSize: 11, color: CORAL, margin: '0 0 8px' }}>
                  Bitte geben Sie eine gültige E-Mail-Adresse ein.
                </p>
              )}
              <label style={{
                display: 'flex', alignItems: 'flex-start', gap: 8,
                fontSize: 11, color: '#888', marginBottom: 12, cursor: 'pointer', lineHeight: 1.4,
              }}>
                <input
                  type="checkbox"
                  checked={dsgvo}
                  onChange={(e) => setDsgvo(e.target.checked)}
                  required
                  style={{ marginTop: 2, accentColor: CORAL }}
                />
                <span>
                  Ich stimme zu, dass PraxisNova AI mich per E-Mail kontaktiert.{' '}
                  <a href="/datenschutz" target="_blank" style={{ color: CORAL, textDecoration: 'underline' }}>
                    Datenschutz
                  </a>.
                </span>
              </label>
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
    </>
  );
}
