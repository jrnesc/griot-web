import Image from 'next/image';

import Subsections from '@/components/Subsections';
import SubscribeForm from '@/components/SubscribeForm';

export default function Home() {
  return (
    <section className="text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col px-5 py-36 items-center">
        <div className="flex flex-col pt-6 mb-12 items-center text-center">
          <h1 className="mb-5 text-4xl sm:text-5xl items-center text-gray-900 font-bold">
            Endless Knowledge,<br/>Infinite Discovery
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-600">
            {/* Stay connected to your most important information */}
            Our knowledge bases are growing everyday, make navigating them easier
          </p>
        </div>
        <div className="mx-auto flex justify-center">
          <Image src="/Group 176.png" alt="phone" width={2500} height={2000} className="w-full max-w-xl" />
        </div>
      </div>

      <div className="mt-0 mb-0">
        <Subsections />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="py-24 md:py-36">
          <h1 className="mb-5 text-4xl sm:text-5xl text-gray-900 font-semibold">
            Subscribe
          </h1>
          <h1 className="mb-9 text-xl sm:text-2xl text-gray-600 font-semibold">
            Join our newsletter to improve your learning journey
          </h1>
          <div className="mx-auto md:w-1/2">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
}
