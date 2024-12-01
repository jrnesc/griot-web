'use client';

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { createContact } from '@/app/api/send/route';
import SubscribeButton from '@/components/SubscribeButton';

export default function BusinessPage() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (email: string) => {
    console.log('Subscribing with email:', email);
    try {
      await createContact(email, 'J', 'E');
      console.log('Subscription successful');
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  };
  return (
    <section className="text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col px-5 py-36 items-center md:flex-row">
        <div className="flex flex-col items-center pt-6 mb-20 md:mb-40 text-center lg:flex-grow md:w-1/2 md:ml-24">
          <h2 className="mb-4 xl:w-3/4 text-lg text-600 font-bold">
            Coming soon
          </h2>
          <h1 className="mb-5 text-4xl sm:text-5xl items-center xl:w-2/2 text-gray-900 font-bold">
            Griot for businesses
          </h1>
          <p className="mb-16 xl:w-3/4 text-lg text-gray-600">
            Integrate Confluence, JIRA, GitHub and MongoDB into a single hub.<br/><br/>Save money and time planning and building.
          </p>
          <div className="flex justify-center w-full max-w-full" style={{ height: 'auto' }}>
            <Image src="/business.png" alt="phone" width={500} height={300} className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="py-24 md:py-36">
          <h1 className="mb-5 text-4xl sm:text-5xl text-gray-900 font-semibold">Start streamlining product development</h1>
          <h1 className="mb-9 text-xl sm:text-2xl text-gray-600 font-semibold">Sign up to to book your demo</h1>
          <div className="mx-auto md:w-1/2 flex flex-col md:flex-row items-center">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="w-full sm:w-3/4 flex relative border border-gray-600 rounded-2xl mr-2">
              <input
                type="email"
                id="email"
                className="py-3 px-4 block w-full rounded-2xl focus:ring-0 focus:ring-offset-0"
                onChange={(e) => setEmail(e.target.value)} // Capture email input
              />
            </div>
            <div className="mt-2 md:mt-0">
              <SubscribeButton email={email} onSubscribe={handleSubscribe} />
            </div>
          </div>
        </div>
      </div>
    </ section>
  );
}