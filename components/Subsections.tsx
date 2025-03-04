import Image from 'next/image';

export default function Subsections() {
  return (
    <div className="max-w-6xl mx-auto p-4 text-center" id="features">
      <div className="mb-8">
        <span className="material-symbols-outlined">neurology</span>
        <h1 className="text-4xl font-bold mt-2 text-gray-900">Cloud Storage</h1>
        <p className="text-lg text-gray-600">Make connections across all of your media types</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="p-6 w-full md:w-1/2">
          <Image src="/Group 151.png" alt="Phone" width={800} height={600} className="w-full max-w-md mx-auto" />
        </div>
        <div className="ml-0 md:ml-8 w-full md:w-1/2 text-left flex items-center px-8 py-4">
          <p className="text-lg text-gray-600">
            Upload PDFs, ePUBs, YouTube videos, Google Docs, Obisidian + Notion notes and we&apos;ll turn them into a search engine for you
          </p>
        </div>
      </div>

      <div className="mb-8 mt-20">
        <span className="material-symbols-outlined">box</span>
        <h1 className="text-4xl font-bold mt-2 text-gray-900">Create Your Own Insights</h1>
        <p className="text-lg text-gray-600">Consume content you actually want to see</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="p-6 w-full md:w-1/2">
          <Image src="/Group 152.png" alt="Phone" width={800} height={600} className="w-full max-w-md mx-auto" />
        </div>
        <div className="ml-0 md:ml-8 w-full md:w-1/2 text-left flex items-center px-8 py-4">
          <p className="text-lg text-gray-600">
            Create your own articles + mini-courses from any of your sources.
            <br />
            You can compare ideas from your favourite authors, analyse your own notes or consume your sources in an easier medium
          </p>
        </div>
      </div>

      <div className="mb-8 mt-20">
        <span className="material-symbols-outlined">Psychiatry</span>
        <h1 className="text-4xl font-bold mt-2 text-gray-900">Curiosity To Clarity</h1>
        <p className="text-lg text-gray-600">Surround yourself with the smartest ideas</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="p-6 w-full md:w-1/2">
          <Image src="/Group 148.png" alt="Phone" width={800} height={600} className="w-full max-w-md mx-auto" />
        </div>
        <div className="ml-0 md:ml-8 w-full md:w-1/2 text-left flex items-center px-8 py-4">
          <p className="text-lg text-gray-600">

            Having a dedicated space for your own sources allows you to focus on the information that matters most to you. Griot becomes an expert on the sources that you draw inspiration from
          </p>
        </div>
      </div>

      <div className="mb-8 mt-20">
        <span className="material-symbols-outlined">Brightness_7</span>
        <h1 className="text-4xl font-bold mt-2 text-gray-900">Look Beyond The Tool</h1>
        <p className="text-lg text-gray-600">Grasp your knowledge at its root</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="p-6 w-full md:w-1/2">
          <Image src="/Group 155.png" alt="Phone" width={800} height={600} className="w-full max-w-md mx-auto" />
        </div>
        <div className="ml-0 md:ml-8 w-full md:w-1/2 text-left flex items-center px-8 py-4">
          <p className="text-lg text-gray-600">Griot provides quotes and references from your sources with every answer. Never second guess an answer, instead validate and expand your own understanding</p>
        </div>
      </div>
    </div>
  );
}