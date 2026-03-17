import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, name } = await req.json();
  
  await fetch('https://api.hubspot.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      properties: { email, firstname: name, lead_source: 'Website Popup' }
    })
  });

  return NextResponse.json({ ok: true });
}
