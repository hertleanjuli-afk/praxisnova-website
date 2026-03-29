import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_ORIGIN = 'https://www.praxisnovaai.com';
const MAX_FIELD_LENGTH = 500;

// Simple in-memory rate limiter (per IP, 30 requests per minute for tracking)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function sanitize(val: unknown, maxLen = MAX_FIELD_LENGTH): string | null {
  if (typeof val !== 'string') return null;
  return val.substring(0, maxLen).trim() || null;
}

function corsHeaders(origin?: string | null) {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (origin === ALLOWED_ORIGIN || process.env.NODE_ENV === 'development') {
    headers['Access-Control-Allow-Origin'] = origin || '*';
  }
  return headers;
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(req.headers.get('origin')) });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  const headers = corsHeaders(origin);
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false }, { status: 429, headers });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400, headers });
  }

  const payload = {
    visitorId: sanitize(body.visitorId, 100),
    page: sanitize(body.page, 200),
    buttonId: sanitize(body.buttonId, 100),
    buttonText: sanitize(body.buttonText, 200),
    referrer: sanitize(body.referrer, 500),
    timestamp: sanitize(body.timestamp, 50),
    utm_source: sanitize(body.utm_source, 100),
    utm_medium: sanitize(body.utm_medium, 100),
    utm_campaign: sanitize(body.utm_campaign, 100),
    utm_content: sanitize(body.utm_content, 100),
    scroll_depth: typeof body.scroll_depth === 'number' ? body.scroll_depth : undefined,
    secret: process.env.INBOUND_WEBHOOK_SECRET,
  };

  if (!payload.visitorId) {
    return NextResponse.json({ ok: false }, { status: 400, headers });
  }

  try {
    await fetch('https://praxisnova-sales-control.vercel.app/api/webhooks/website-clicks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // Silently fail – tracking should not block the user
  }

  return NextResponse.json({ ok: true }, { headers });
}
