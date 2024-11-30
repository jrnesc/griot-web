import { Resend } from 'resend';

console.log('Resend API Key:', process.env.RESEND_API_KEY);
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
    const response = await createContact(email, firstName, lastName);
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return new Response('Error creating contact', { status: 500 });
  }
}