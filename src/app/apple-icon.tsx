import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: '#080C1A', borderRadius: 36,
        }}
      >
        <svg width="120" height="140" viewBox="0 0 24 28">
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
      </div>
    ),
    { ...size }
  );
}
