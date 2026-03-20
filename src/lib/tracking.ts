function getVisitorId(): string {
  if (typeof window === 'undefined') return '';
  let vid = localStorage.getItem('pn_vid');
  if (!vid) {
    vid = crypto.randomUUID();
    localStorage.setItem('pn_vid', vid);
  }
  return vid;
}

export function trackClick(buttonId: string, buttonText: string) {
  if (typeof window === 'undefined') return;
  fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      visitorId: getVisitorId(),
      page: window.location.pathname,
      buttonId,
      buttonText,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
    }),
  }).catch(() => {});
}

export function trackPageView() {
  if (typeof window === 'undefined') return;
  fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      visitorId: getVisitorId(),
      page: window.location.pathname,
      buttonId: 'pageview',
      buttonText: document.title,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
    }),
  }).catch(() => {});
}
