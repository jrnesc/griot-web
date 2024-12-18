'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <section className="text-gray-600 min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-5 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="flex flex-col md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
            <h2 className="mt-16 mb-8 xl:w-3/4 text-lg text-600 font-bold text-leading">
            About
            </h2>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              <i>Griot AI</i> helps you create your own searchable library of information.
              <br/>
              Privately, or with others.
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              We understand that the best quality information comes from our own personal libraries.
              <br/>
              Whether that&apos;s your books (eBooks), personal notes, or even that YouTube &apos;watch later&apos; playlist full of math lectures.
            </p>


            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              We&apos;ve realised that the sources that exist within our own communities are usually the best when it comes to writing, studying and researching.
              <br/>
              We&apos;ll always find a niche book or YouTube recommendation from a friend that goes onto to change our perspective of the work we&apos;re doing for months, sometimes years.
            </p>
            
            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              The great thing with perspectives, is that you can never have too many. 
              <br/>
              Each one helps you create a more composed picture of the world.            
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              But, knowing how to be critical, knowing which perspective is the right one at a given moment is hard.
              <br/>
              In those moments having too many makes things difficult .          
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              Our aim with <i>Griot AI</i> is to reduce the noise, make connections where you wouldn&apos;t normally expect them and arrive at better conclusions.
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              We help you create a space from your own sources to gain mental clarity faster.
            </p>

            <h2 className="mt-16 mb-8 xl:w-3/4 text-lg text-600 font-bold text-leading">
              What does Griot AI do?
            </h2>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              <i>Griot AI</i> takes your books and videos and transforms them into a search engine.
              <br/>
              We then use AI to contextualise the results for you.
              <br/>
              We then connect you with other people doing the same.            
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              <i>Griot AI</i> is special because it bridges the gap between unrelated frameworks of thinking.
              <br/>
              Allowing for the exploration of concepts that extend beyond our traditional boundaries.
              <br/>
              Much like an how an artist explores many disciplines to perfect their craft.
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              Picture yourself talking to Fanon, Jung and Aurelius about humanity&apos;s collective consciousness.
              <br/>
              Imagine asking Cedric Robinson and Herodotus about the history of the world.
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              <i>Imagine the knowledge you could acquire...</i>
            </p>

            <h2 className="mt-16 mb-8 xl:w-3/4 text-lg text-600 font-bold text-leading">
              Who is Griot AI for?
            </h2>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              We built <i>Griot AI</i> for life-long learners.
              <br/>
              People that believe in continuous growth.
              <br/>
              Students, writers, actors, mathematicians, historians.
              <br/>
              Those trying to expand their abilities beyond the bounds of traditional education.
              <br/>
              (People with too many books).
            </p>

            <h2 className="mt-16 mb-8 xl:w-3/4 text-lg text-600 font-bold text-leading">
              What is Griot Labs?
            </h2>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              We&apos;re a collective of engineers and designers getting creative solving problems we&apos;re drawn to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}