import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'PraxisNova AI – KI-Automatisierung für Bau, Handwerk & Immobilien';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200, height: 630, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: '#080C1A', position: 'relative',
        }}
      >
        {/* Subtle radial glow */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(232,71,42,0.12) 0%, transparent 70%)',
        }} />

        {/* Shield logo */}
        <svg width="80" height="94" viewBox="0 0 24 28" style={{ marginBottom: 32 }}>
          <path d="M12 1C12 1 0 5.5 0 15c0 7 4.8 11.5 12 13c7.2-1.5 12-6 12-13C24 5.5 12 1 12 1z" fill="#E8472A" />
          <circle cx="12" cy="11" r="2" fill="white" />
          <circle cx="8" cy="16" r="1.5" fill="white" />
          <circle cx="16" cy="16" r="1.5" fill="white" />
          <circle cx="10" cy="21" r="1.2" fill="white" />
          <circle cx="14" cy="21" r="1.2" fill="white" />
          <line x1="12" y1="13" x2="8" y2="14.5" stroke="white" strokeWidth="0.8" />
          <line x1="12" y1="13" x2="16" y2="14.5" stroke="white" strokeWidth="0.8" />
          <line x1="8" y1="17.5" x2="10" y2="19.8" stroke="white" strokeWidth="0.8" />
          <line x1="16" y1="17.5" x2="14" y2="19.8" stroke="white" strokeWidth="0.8" />
          <line x1="10" y1="21" x2="14" y2="21" stroke="white" strokeWidth="0.8" />
        </svg>

        {/* Brand name */}
        <div style={{ fontSize: 56, fontWeight: 700, color: '#fff', letterSpacing: '-1px', marginBottom: 12 }}>
          PraxisNova AI
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 24, color: '#888', letterSpacing: '0.02em' }}>
          KI-Automatisierung für Bau, Handwerk & Immobilien
        </div>

        {/* Accent line */}
        <div style={{
          width: 80, height: 3, background: '#E8472A', borderRadius: 2, marginTop: 28,
        }} />
      </div>
    ),
    { ...size }
  );
}
