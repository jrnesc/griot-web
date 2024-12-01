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
    <section className="text-gray-600 min-h-screen flex flex-col items-center">
      <div className="flex-grow max-w-7xl mx-auto flex flex-col px-5 py-20 items-center md:flex-row md:justify-center md:w-full">
        <div className="flex flex-col items-center pt-6 mb-10 md:mb-20 lg:flex-grow md:w-1/2 md:ml-0">
          <h2 className="mt-16 mb-8 xl:w-3/4 text-lg text-600 font-bold text-center">
            Coming soon
          </h2>
          <h1 className="mb-3 text-4xl sm:text-5xl xl:w-2/2 text-gray-900 font-bold text-center">
            Autonomous knowledge hub for your team
          </h1>
          <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-center">
            Integrate Confluence, JIRA, GitHub and MongoDB into a single hub.
          </p>
          <div className="py-8 mt-2 md:mt-0">
              <BusinessSubscribeButton email={email} onSubscribe={handleSubscribe} />
          </div>
        </div>
      </div>
    </section>
  );
}