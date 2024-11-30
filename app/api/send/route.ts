import { Resend } from 'resend';
import fetch from 'node-fetch';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function createContact(email: string, firstName: string, lastName: string) {
  return resend.contacts.create({
    email: email,
    firstName: firstName,
    lastName: lastName,
    unsubscribed: false,
    audienceId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
  });
}

export async function POST(req: Request) {
  console.log('Initializing Resend with API Key:', process.env.RESEND_API_KEY);

  const { email, firstName, lastName } = await req.json();

  try {
    const response = await fetch(`https://api.resend.com/audiences/78261eea-8f8b-4381-83c6-79fa7120f1cf/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        unsubscribed: false,
      }),
    });

    return new Response('Request sent', { status: 200 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return new Response('Error creating contact', { status: 500 });
  }
}