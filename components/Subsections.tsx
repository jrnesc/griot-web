export default function Subsections() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mt-20">Upload Your Sources.</h1>
        <p className="text-lg text-gray-600">Make connections across all of your media types.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="p-6 w-full md:w-1/2">
          <img src="/social+comp.png" alt="Phone" className="w-full max-w-md mx-auto" />
        </div>
        <div className="ml-0 md:ml-8 w-full md:w-1/2 text-left">
          <p className="text-lg text-gray-600">Upload PDFs, ePUBs, YouTube videos, Google Docs and Obsidian notes, and Griot will create a search engine so you can start making connections no-one has seen before. Powered by GPT4, Gemini and Claude.</p>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mt-20">Curiosity To Clarity.</h1>
        <p className="text-lg text-gray-600">Make connections across all of your media types.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="p-6 w-full md:w-1/2">
          <img src="/search+gradient.png" alt="Phone" className="w-full max-w-md mx-auto" />
        </div>
        <div className="ml-0 md:ml-8 w-full md:w-1/2 text-left">
          <p className="text-lg text-gray-600">Having a curated space for your own sources reduces your time to mental clarity. Griot becomes an expert on the sources that you draw inspiration from.</p>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mt-20">Look Beyond The Tool.</h1>
        <p className="text-lg text-gray-600">Grasp knowledge at its root.</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="p-6 w-full md:w-1/2">
          <img src="/search+gradient.png" alt="Phone" className="w-full max-w-md mx-auto" />
        </div>
        <div className="ml-0 md:ml-8 w-full md:w-1/2 text-left">
          <p className="text-lg text-gray-600">Griot provides quotes and references from your sources with every answer. Never second guess, validate and expand your own understanding.</p>
        </div>
      </div>
    </div>
  );
}