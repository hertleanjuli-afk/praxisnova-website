'use client';

import { useEffect } from 'react';

const TRACKER_API = 'https://praxisnova-sales-control.vercel.app/api/track-click';
const CONSENT_KEY = 'pn_cookie_consent';
const VISITOR_ID_KEY = 'pn_vid';

interface TrackingData {
  visitor_id: string;
  page: string;
  button_id?: string;
  button_text?: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  timestamp?: string;
  scroll_depth?: number;
}

function getVisitorId(): string {
  if (typeof window === 'undefined') return '';
  let vid = localStorage.getItem(VISITOR_ID_KEY);
  if (!vid) {
    vid = crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, vid);
  }
  return vid;
}

function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
  };
}

function canTrack(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) return false;
    const parsed = JSON.parse(consent);
    return parsed.analytics === true;
  } catch {
    return false;
  }
}

function sendTracking(data: TrackingData): void {
  if (!canTrack()) return;

  fetch(TRACKER_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).catch(() => {
    // Silently fail
  });
}

export function trackPageView(): void {
  const utm = getUtmParams();
  sendTracking({
    visitor_id: getVisitorId(),
    page: typeof window !== 'undefined' ? window.location.pathname : '/',
    button_id: 'pageview',
    button_text: typeof window !== 'undefined' ? document.title : '',
    referrer: typeof window !== 'undefined' ? document.referrer : '',
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_content: utm.utm_content,
    timestamp: new Date().toISOString(),
  });
}

export function trackButtonClick(buttonId: string, buttonText: string): void {
  const utm = getUtmParams();
  sendTracking({
    visitor_id: getVisitorId(),
    page: typeof window !== 'undefined' ? window.location.pathname : '/',
    button_id: buttonId,
    button_text: buttonText,
    referrer: typeof window !== 'undefined' ? document.referrer : '',
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_content: utm.utm_content,
    timestamp: new Date().toISOString(),
  });
}

export function trackScrollDepth(): void {
  if (typeof window === 'undefined') return;

  const thresholds = [25, 50, 75, 100];
  const fired = new Set<number>();
  const utm = getUtmParams();

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);

    for (const threshold of thresholds) {
      if (percent >= threshold && !fired.has(threshold)) {
        fired.add(threshold);
        sendTracking({
          visitor_id: getVisitorId(),
          page: window.location.pathname,
          button_id: `scroll_${threshold}`,
          button_text: `${threshold}% scroll depth`,
          referrer: document.referrer,
          utm_source: utm.utm_source,
          utm_medium: utm.utm_medium,
          utm_campaign: utm.utm_campaign,
          utm_content: utm.utm_content,
          scroll_depth: threshold,
          timestamp: new Date().toISOString(),
        });
      }
    }

    if (fired.size === thresholds.length) {
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => {
    window.removeEventListener('scroll', onScroll);
  } as unknown as void;
}

export default function WebsiteTracker() {
  useEffect(() => {
    // Track page view on mount
    trackPageView();

    // Track scroll depth
    trackScrollDepth();

    // Listen for button clicks with data-track attribute
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const buttonId = target.getAttribute('data-track-id');
      const buttonText = target.getAttribute('data-track-text');

      if (buttonId && buttonText) {
        trackButtonClick(buttonId, buttonText);
      }
    };

    document.addEventListener('click', handleClick, true);

    // Listen for consent updates
    const handleConsentUpdate = () => {
      // Re-track page view if consent was just granted
      if (canTrack()) {
        trackPageView();
      }
    };

    window.addEventListener('cookie-consent-updated', handleConsentUpdate);

    return () => {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('cookie-consent-updated', handleConsentUpdate);
    };
  }, []);

  // This component doesn't render anything
  return null;
}
