import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_ORIGIN = 'https://www.praxisnovaai.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 200;

// Simple in-memory rate limiter (per IP, 5 requests per minute)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
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
    return NextResponse.json({ error: 'Zu viele Anfragen. Bitte versuche es später erneut.' }, { status: 429, headers });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ungültiger Request-Body.' }, { status: 400, headers });
  }

  const email = typeof body.email === 'string' ? body.email.trim().substring(0, MAX_FIELD_LENGTH) : '';
  const name = typeof body.name === 'string' ? body.name.trim().substring(0, MAX_FIELD_LENGTH) : '';
  const visitorId = typeof body.visitorId === 'string' ? body.visitorId.substring(0, 100) : '';

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Bitte gib eine gültige E-Mail-Adresse ein.' }, { status: 400, headers });
  }

  await Promise.allSettled([
    fetch('https://api.hubspot.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        properties: { email, firstname: name, lead_source: 'Website Popup' },
      }),
    }),
    fetch('https://praxisnova-sales-control.vercel.app/api/webhooks/inbound', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        visitorId,
        source: 'website_popup',
        secret: process.env.INBOUND_WEBHOOK_SECRET,
      }),
    }),
  ]);

  return NextResponse.json({ ok: true }, { headers });
}
