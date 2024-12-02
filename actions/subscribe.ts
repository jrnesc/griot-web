'use server';

import { z } from 'zod';
import { Resend } from 'resend';

import Welcome from '@/emails/Welcome';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export const subscribe = async (_prevState: any, formData: FormData) => {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { error: contactError } = await resend.contacts.create({
    email: validatedFields.data.email,
    unsubscribed: false,
    audienceId: '4dfabf70-e19a-4605-ae1f-ca7107245a1c',
  });

  if (contactError) {
    return { message: contactError.message };
  }

  const { error: emailError } = await resend.emails.send({
    from: 'Griot <team@usegriot.com>',
    to: [validatedFields.data.email],
    subject: 'Hello Griot',
    react: Welcome(),
  });

  if (emailError) {
    return { message: emailError.message };
  }
};
