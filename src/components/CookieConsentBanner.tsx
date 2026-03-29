'use client';

import { useEffect, useState } from 'react';

const CORAL = '#E8472A';
const CONSENT_KEY = 'pn_cookie_consent';
const CONSENT_TIMESTAMP_KEY = 'pn_cookie_consent_timestamp';

type ConsentSettings = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsentBanner() {
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  // Load consent status on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (!savedConsent) {
      // No consent saved, show banner
      setShow(true);
    } else {
      // Consent already exists, don't show banner
      try {
        const parsed = JSON.parse(savedConsent);
        setConsent(parsed);
      } catch {
        // Invalid JSON, show banner again
        setShow(true);
      }
    }
  }, []);

  // Expose a global function to reopen the banner from Footer
  useEffect(() => {
    if (typeof window === 'undefined') return;
    (window as any).__openCookieSettings = () => {
      // Load current consent into state so settings panel shows correct toggles
      try {
        const saved = localStorage.getItem(CONSENT_KEY);
        if (saved) setConsent(JSON.parse(saved));
      } catch { /* use defaults */ }
      setShowSettings(true);
      setShow(true);
    };
    return () => { delete (window as any).__openCookieSettings; };
  }, []);

  const saveConsent = (settings: ConsentSettings) => {
    if (typeof window === 'undefined') return;

    // If analytics consent was revoked, delete tracking data
    const prevConsent = localStorage.getItem(CONSENT_KEY);
    if (prevConsent) {
      try {
        const prev = JSON.parse(prevConsent);
        if (prev.analytics === true && settings.analytics === false) {
          localStorage.removeItem('pn_vid');
          localStorage.removeItem('pn_utm');
        }
      } catch { /* ignore */ }
    }

    localStorage.setItem(CONSENT_KEY, JSON.stringify(settings));
    localStorage.setItem(CONSENT_TIMESTAMP_KEY, new Date().toISOString());
    setConsent(settings);
    setShow(false);
    setShowSettings(false);

    // Fire custom event for tracking scripts to listen to
    window.dispatchEvent(
      new CustomEvent('cookie-consent-updated', {
        detail: settings,
      })
    );
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleNecessaryOnly = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSaveSettings = () => {
    saveConsent(consent);
  };

  if (!show) return null;

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .pn-cookie-banner {
            bottom: 0 !important;
            right: 0 !important;
            left: 0 !important;
            max-width: 100% !important;
            border-radius: 16px 16px 0 0 !important;
            max-height: 90vh;
            overflow-y: auto;
          }
        }
      `}</style>

      <div
        className="pn-cookie-banner"
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          left: 'auto',
          zIndex: 9999,
          background: '#0A0A0A',
          border: '1px solid #1A1A1A',
          borderRadius: 12,
          padding: 24,
          maxWidth: 420,
          boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
        }}
      >
        {!showSettings ? (
          <>
            {/* Main consent view */}
            <div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: 12,
                  margin: '0 0 12px 0',
                }}
              >
                Datenschutz & Cookies
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#CCCCCC',
                  marginBottom: 20,
                  lineHeight: 1.6,
                  margin: '0 0 20px 0',
                }}
              >
                Wir nutzen Cookies für essenzielle Funktionen und zur Verbesserung unserer Website. Sie
                können Ihre Einstellungen jederzeit anpassen.{' '}
                <a
                  href="/datenschutz"
                  style={{
                    color: CORAL,
                    textDecoration: 'underline',
                    fontWeight: 600,
                  }}
                >
                  Zur Datenschutzerklärung
                </a>
              </p>

              {/* Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <button
                  onClick={handleAcceptAll}
                  style={{
                    width: '100%',
                    background: CORAL,
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: 8,
                    padding: '12px 16px',
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#D63A1F')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = CORAL)}
                >
                  Alle akzeptieren
                </button>

                <button
                  onClick={handleNecessaryOnly}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    color: '#FFFFFF',
                    border: '1px solid #333333',
                    borderRadius: 8,
                    padding: '12px 16px',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1A1A1A';
                    e.currentTarget.style.borderColor = '#444444';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = '#333333';
                  }}
                >
                  Nur notwendige
                </button>

                <button
                  onClick={() => setShowSettings(true)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    color: CORAL,
                    border: 'none',
                    borderRadius: 8,
                    padding: '12px 16px',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Einstellungen
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Settings view */}
            <div>
              <button
                onClick={() => setShowSettings(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: CORAL,
                  fontSize: 14,
                  cursor: 'pointer',
                  marginBottom: 16,
                  fontWeight: 600,
                  padding: 0,
                }}
              >
                ← Zurück
              </button>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: 20,
                  margin: '0 0 20px 0',
                }}
              >
                Cookie-Einstellungen
              </h3>

              {/* Notwendig (Required) */}
              <div
                style={{
                  marginBottom: 20,
                  paddingBottom: 20,
                  borderBottom: '1px solid #1A1A1A',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                  }}
                >
                  <label
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#FFFFFF',
                      cursor: 'not-allowed',
                      margin: 0,
                    }}
                  >
                    Notwendig
                  </label>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    style={{
                      width: 18,
                      height: 18,
                      cursor: 'not-allowed',
                      accentColor: CORAL,
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: '#888888',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  Erforderlich für die Grundfunktionen der Website (Sitzung, Authentifizierung, Sicherheit).
                </p>
              </div>

              {/* Analyse (Analytics) */}
              <div
                style={{
                  marginBottom: 20,
                  paddingBottom: 20,
                  borderBottom: '1px solid #1A1A1A',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                  }}
                >
                  <label
                    htmlFor="analytics-toggle"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      margin: 0,
                    }}
                  >
                    Analyse
                  </label>
                  <input
                    id="analytics-toggle"
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        analytics: e.target.checked,
                      })
                    }
                    style={{
                      width: 18,
                      height: 18,
                      cursor: 'pointer',
                      accentColor: CORAL,
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: '#888888',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  Ermöglicht anonyme Nutzungsanalysen zur Verbesserung der Website.
                </p>
              </div>

              {/* Marketing */}
              <div
                style={{
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 8,
                  }}
                >
                  <label
                    htmlFor="marketing-toggle"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      margin: 0,
                    }}
                  >
                    Marketing
                  </label>
                  <input
                    id="marketing-toggle"
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) =>
                      setConsent({
                        ...consent,
                        marketing: e.target.checked,
                      })
                    }
                    style={{
                      width: 18,
                      height: 18,
                      cursor: 'pointer',
                      accentColor: CORAL,
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: '#888888',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  Ermöglicht Werbung basierend auf Ihren Interessen.
                </p>
              </div>

              {/* Save Settings Button */}
              <button
                onClick={handleSaveSettings}
                style={{
                  width: '100%',
                  background: CORAL,
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 8,
                  padding: '12px 16px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginTop: 12,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#D63A1F')}
                onMouseLeave={(e) => (e.currentTarget.style.background = CORAL)}
              >
                Einstellungen speichern
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
