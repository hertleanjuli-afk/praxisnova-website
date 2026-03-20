import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const res = await fetch('https://praxisnova-sales-control.vercel.app/api/webhooks/website-clicks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...body,
        secret: process.env.INBOUND_WEBHOOK_SECRET,
      }),
    });

    if (!res.ok) {
      console.error('[track] Sales Control responded with', res.status, await res.text().catch(() => ''));
    }
  } catch (err) {
    console.error('[track] Failed to forward to Sales Control:', err);
  }

  return NextResponse.json({ ok: true });
}
