"use client"

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [activePanel, setActivePanel] = useState<'spending' | 'shopping' | 'investment'>('spending');

  const images = {
    spending: '/collections.png',
    shopping: '/spaces.png',
    investment: '/investment-mockup.png',
  } as const;

  return (
    <section className="text-gray-600">
      <div className="max-w-7xl mx-auto flex px-5 py-24 flex-col items-center md:flex-row">
        <div className="flex flex-col pt-6 mb-20 md:mb-40 items-center text-center lg:flex-grow md:w-1/2 md:ml-24 md:items-start md:text-left">
          <h1 className="mb-5 text-5xl sm:text-6xl items-center xl:w-2/2 text-gray-900 font-bold">
            Connect dots,<br />
            elevate your thinking
          </h1>
          <p className="mb-4 xl:w-3/4 text-lg text-gray-600">
            You deserve a tool that helps you focus on the information that truly matters
          </p>
        </div>
        <div className="mx-auto lg:mr-36">
          <Image 
            src="/demo.gif"  // Replace with your actual GIF file path
            alt="animated demo" 
            width={300} 
            height={300}
            className="rounded-[32px]" // Adjusted positioning
            priority  // Ensures the GIF loads immediately
          />
        </div>
      </div>

      {/* New Time Saver Section */}
      <div className="max-w-7xl mx-auto px-5 py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Image 
              src="/move-money-icon.png"  // Add this icon to your public folder
              alt="Move Money Icon" 
              width={24} 
              height={24}
            />
          </div>
          <h2 className="text-6xl font-serif mb-4 text-gray-900">A Time Saver.</h2>
          <p className="text-gray-600">Automation across your all your accounts.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Image 
              src="/phone-mockup.png"  // Add your phone mockup image
              alt="App Interface" 
              width={500} 
              height={600}
              className="rounded-3xl bg-purple-100 p-8"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-3xl font-serif">Worry-Free Finances</h3>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">BETA</span>
            </div>
            <p className="text-gray-600 text-lg">
              Automatically save and pay off debt every day, week, or month without causing overdrafts or missing rent.
            </p>
          </div>
        </div>
      </div>

      {/* New Real-time Insights Section */}
      <div className="max-w-7xl mx-auto px-5 py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Image 
              src="/smarter-money-icon.png"
              alt="Smarter Money Icon" 
              width={24} 
              height={24}
            />
          </div>
          <h2 className="text-6xl font-serif mb-4 text-gray-900">Real-time Insights.</h2>
          <p className="text-gray-600">Be informed on your spending, investing, and credit.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <div className="rounded-3xl bg-green-200 p-8">
              <Image 
                src={images[activePanel]}
                alt="App Interface" 
                width={500} 
                height={600}
                className="rounded-3xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-4">
            {/* Spending Panel */}
            <div className="border-b border-gray-200">
              <button 
                onClick={() => setActivePanel('spending')}
                className="w-full py-4 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-serif">Spending Monitor</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">SHOW</span>
                  </div>
                  {activePanel === 'spending' && (
                    <p className="text-gray-600 mt-2">
                      Budget without needing a budget. We'll monitor your spending and let you know when you're over or under your normal spending.
                    </p>
                  )}
                </div>
                <span className={`text-2xl transition-transform ${activePanel === 'spending' ? 'rotate-180' : ''}`}>
                  {activePanel === 'spending' ? '−' : '+'}
                </span>
              </button>
            </div>

            {/* Shopping Panel */}
            <div className="border-b border-gray-200">
              <button 
                onClick={() => setActivePanel('shopping')}
                className="w-full py-4 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-serif">Shopping Analysis</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">SHOW</span>
                  </div>
                  {activePanel === 'shopping' && (
                    <p className="text-gray-600 mt-2">
                      Track your shopping patterns and get insights on where you might be overspending.
                    </p>
                  )}
                </div>
                <span className={`text-2xl transition-transform ${activePanel === 'shopping' ? 'rotate-180' : ''}`}>
                  {activePanel === 'shopping' ? '−' : '+'}
                </span>
              </button>
            </div>

            {/* Investment Panel */}
            <div className="border-b border-gray-200">
              <button 
                onClick={() => setActivePanel('investment')}
                className="w-full py-4 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-serif">Investment Tracking</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">SHOW</span>
                  </div>
                  {activePanel === 'investment' && (
                    <p className="text-gray-600 mt-2">
                      Monitor your investments and get real-time updates on your portfolio performance.
                    </p>
                  )}
                </div>
                <span className={`text-2xl transition-transform ${activePanel === 'investment' ? 'rotate-180' : ''}`}>
                  {activePanel === 'investment' ? '−' : '+'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="py-24 md:py-36">
          <h1 className="mb-5 text-5xl sm:text-6xl text-gray-900 font-semibold">
            Subscribe to our newsletter
          </h1>
          <h1 className="mb-9 text-2xl text-gray-600 font-semibold">
            Enter your email address to start your knowledge journey.
          </h1>
          <div className="mx-auto md:w-3/4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="w-full sm:w-3/4 flex mx-auto relative border border-gray-600 rounded-lg">
              <input
                type="email"
                id="email"
                className="py-3 px-4 block w-full rounded-s-lg focus:ring-0 focus:ring-offset-0"
              />
              <button
                type="button"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 rounded-e-md bg-orange-400"
              >
                <span className="font-semibold text-md text-white pt-1">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
