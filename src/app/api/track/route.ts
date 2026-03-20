import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  fetch('https://praxisnova-sales-control.vercel.app/api/webhooks/website-clicks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...body,
      secret: process.env.INBOUND_WEBHOOK_SECRET,
    }),
  }).catch(() => {});

  return NextResponse.json({ ok: true });
}
