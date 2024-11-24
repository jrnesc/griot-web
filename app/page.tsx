import Image from 'next/image';
import Subsections from '@/components/Subsections';

export default function Home() {
  return (
    <section className="text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col px-5 py-36 items-center md:flex-row">
        <div className="flex flex-col pt-6 mb-20 md:mb-40 items-center text-center lg:flex-grow md:w-1/2 md:ml-24 md:items-start md:text-left">
          <h1 className="mb-5 text-4xl sm:text-5xl items-center xl:w-2/2 text-gray-900 font-bold">
            Personal AI Search
          </h1>
          <p className="mb-4 xl:w-3/4 text-lg text-gray-600">
            Curate a space for your most important sources,<br/>reduce the time from curiosity to clarity
          </p>
        </div>
        <div className="mx-auto lg:mr-36 md:ml-4">
          <Image src="/app.png" alt="phone" width={250} height={100} className="w-full max-w-xs" />
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
