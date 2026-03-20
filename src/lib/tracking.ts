function getVisitorId(): string {
  if (typeof window === 'undefined') return '';
  let vid = localStorage.getItem('pn_vid');
  if (!vid) {
    vid = crypto.randomUUID();
    localStorage.setItem('pn_vid', vid);
  }
  return vid;
}

function captureEmailVid() {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const vid = params.get('vid');
  if (vid) {
    localStorage.setItem('pn_vid', vid);
  }
}

function captureUtm() {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;
  const hasUtm = keys.some((k) => params.has(k));
  if (hasUtm) {
    const utm: Record<string, string> = {};
    keys.forEach((k) => {
      const v = params.get(k);
      if (v) utm[k] = v;
    });
    localStorage.setItem('pn_utm', JSON.stringify(utm));
  }
}

function getUtm(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem('pn_utm') || '{}');
  } catch {
    return {};
  }
}

/** Call once on page load to capture email vid + UTM params */
export function initTracking() {
  captureEmailVid();
  captureUtm();
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
      ...getUtm(),
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
      ...getUtm(),
    }),
  }).catch(() => {});
}

export function trackScrollDepth() {
  if (typeof window === 'undefined') return;
  const thresholds = [25, 50, 75, 100];
  const fired = new Set<number>();

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);

    for (const t of thresholds) {
      if (percent >= t && !fired.has(t)) {
        fired.add(t);
        fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            visitorId: getVisitorId(),
            page: window.location.pathname,
            buttonId: `scroll_${t}`,
            buttonText: `${t}% scroll depth`,
            referrer: document.referrer,
            timestamp: new Date().toISOString(),
            ...getUtm(),
          }),
        }).catch(() => {});
      }
    }

    if (fired.size === thresholds.length) {
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}
