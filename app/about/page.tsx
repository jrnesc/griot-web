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
              Griot helps you create your own searchable library of information.
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              The best information comes from our own personal libraries. Whether that&apos;s your books, personal notes or our bookmarks tab.
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              Our aim with Griot is to help you get more from your own library and the content you&apos;re neglecting (that reading list).
              <br/>
              <br/>
              We believe in a simple philosophy of &quot;time under tension&quot; when it comes to learning.
              <br/>
              <br/>
              That means the longer you spend immersing yourself in the content you want to learn, the better you&apos;ll become. So instead of scrolling. We make it easy for you to delve into a book of your choice instead.
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              By using Griot, we help you create a space from your own digital content so you can stay connected to the sources you want shaping your mind.
            </p>

            <h2 className="mt-16 mb-8 xl:w-3/4 text-lg text-600 font-bold text-leading">
              What does Griot AI do?
            </h2>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              Griot takes your books, notes and videos and transforms them into a search engine. We then use AI to contextualise the results for you.
              <br/>
              <br/>
              Right now we&apos;re building AI agent tools to craft your own courses, send you newsletters and more.
            </p>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              Griot is special because it helps you recognise the patterns that exist between seemingly unrelated frameworks of thinking and explore many disciplines with ease.
              <br/>
              <br/>
              All from your own content!
            </p>

            <h2 className="mt-16 mb-8 xl:w-3/4 text-lg text-600 font-bold text-leading">
              Who is Griot AI for?
            </h2>

            <p className="mb-4 xl:w-3/4 text-lg text-gray-600 text-leading">
              • We built Griot for people with too many books.
              <br/>
              • People that are struggling to focus on high quality content.
              <br/>
              • People who want to learn more.
              <br/>
              • People who want to improve.
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