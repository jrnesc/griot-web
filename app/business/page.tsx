'use client';

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { createContact } from '@/app/api/send/route';
import BusinessSubscribeButton from '@/components/BusinessSubscribeButton';

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
      <div className="max-w-7xl mx-auto flex flex-col px-5 py-20 items-center md:flex-row">
        <div className="flex flex-col items-center pt-6 mb-10 md:mb-20 text-center lg:flex-grow md:w-1/2 md:ml-24">
          <h2 className="mb-2 xl:w-3/4 text-lg text-600 font-bold">
            Coming soon
          </h2>
          <h1 className="mb-3 text-4xl sm:text-5xl items-center xl:w-2/2 text-gray-900 font-bold">
            Griot for businesses
          </h1>
          <p className="mb-4 xl:w-3/4 text-lg text-gray-600">
            Integrate Confluence, JIRA, GitHub and MongoDB into a single hub.<br/><br/>Save money and time planning and building.
          </p>
          <div className="mb-8 md:py-20 mt-2 md:mt-0">
              <BusinessSubscribeButton email={email} onSubscribe={handleSubscribe} />
            </div>
          <div className="flex justify-center w-full max-w-full" style={{ height: 'auto' }}>
            <Image src="/business.png" alt="phone" width={500} height={300} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </ section>
  );
}