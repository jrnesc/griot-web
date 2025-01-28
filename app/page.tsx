import Image from 'next/image';

import Subsections from '@/components/Subsections';
import SubscribeForm from '@/components/SubscribeForm';

export default function Home() {
  return (
    <section className="text-gray-600">
      {/* Product Hunt Badge */}
      <div className="flex justify-center pt-36">
        <a 
          href="https://www.producthunt.com/posts/griot?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-griot" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=822187&theme=dark&t=1738060326652" 
            alt="Griot - Your AI Library | Product Hunt" 
            width="250" 
            height="54" 
          />
        </a>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col px-5 py-36 items-center md:flex-row">
        <div className="flex flex-col pt-6 mb-20 md:mb-40 items-center text-center lg:flex-grow md:w-1/2 md:ml-24 md:items-start md:text-left">
          <h1 className="mb-5 text-4xl sm:text-5xl items-center xl:w-2/2 text-gray-900 font-bold">
            Your AI Library
          </h1>
          <p className="mb-4 xl:w-3/4 text-lg text-gray-600">
            Build a space for your most important sources
          </p>
        </div>
        <div className="mx-auto lg:mr-36 md:ml-4">
          <Image src="/phone_2.png" alt="phone" width={250} height={100} className="w-full max-w-xs" />
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
