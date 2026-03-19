import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, name } = await req.json();

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
        source: 'website_popup',
        secret: 'pn_inbound_2026_secret',
      }),
    }),
  ]);

  return NextResponse.json({ ok: true });
}
