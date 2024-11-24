export default function Subsections() {
  return (
    <div className="max-w-6xl mx-auto p-4 text-center">
      <div className="mb-8">
        <span className="material-symbols-outlined">neurology</span>
        <h1 className="text-4xl font-bold mt-2 text-gray-900">Upload Your Sources</h1>
        <p className="text-lg text-gray-600">Make connections across all of your media types</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="p-6 w-full md:w-1/2">
          <img src="/collection+gradient.png" alt="Phone" className="w-full max-w-md mx-auto" />
        </div>
        <div className="ml-0 md:ml-8 w-full md:w-1/2 text-left flex items-center px-8 py-4">
          <p className="text-lg text-gray-600">Upload PDFs, ePUBs, YouTube videos, Google Docs and Obsidian notes, and Griot will create a search engine to make research and brainstorming easier<br />Powered by GPT-4o</p>
        </div>
      </div>

      <div className="mb-8 mt-20">
        <span className="material-symbols-outlined">Psychiatry</span>
        <h1 className="text-4xl font-bold mt-2 text-gray-900">Curiosity To Clarity</h1>
        <p className="text-lg text-gray-600">Make connections across all of your media types</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="p-6 w-full md:w-1/2">
          <img src="/search+gradient.png" alt="Phone" className="w-full max-w-md mx-auto" />
        </div>
        <div className="ml-0 md:ml-8 w-full md:w-1/2 text-left flex items-center px-8 py-4">
          <p className="text-lg text-gray-600">Having a curated space for your own sources allows you to focus on the information that matters most to you. Griot becomes an expert on the sources that you draw inspiration from</p>
        </div>
      </div>

      <div className="mb-8 mt-20">
        <span className="material-symbols-outlined">Brightness_7</span>
        <h1 className="text-4xl font-bold mt-2 text-gray-900">Look Beyond The Tool</h1>
        <p className="text-lg text-gray-600">Grasp knowledge at its root</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="p-6 w-full md:w-1/2">
          <img src="/source+gradient.png" alt="Phone" className="w-full max-w-md mx-auto" />
        </div>
        <div className="ml-0 md:ml-8 w-full md:w-1/2 text-left flex items-center px-8 py-4">
          <p className="text-lg text-gray-600">Griot provides quotes and references from your sources with every answer. Never second guess an answer, instead validate and expand your own understanding</p>
        </div>
      </div>
    </div>
  );
}