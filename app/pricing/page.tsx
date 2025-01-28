import React from 'react';

const PricingCard = ({ 
  title, 
  price, 
  period, 
  features 
}: { 
  title: string, 
  price: string, 
  period: string, 
  features: string[] 
}) => (
  <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col border border-gray-100">
    <h3 className="text-l mb-2 font-medium font-['Helvetica'] text-gray-600">{title}</h3>
    <div className="text-3xl font-semibold mb-4 font-['Helvetica'] text-gray-600">
      {price}
      {price !== 'Free' && <span className="text-xl font-normal"> /{period}</span>}
    </div>
    <ul className="space-y-4 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Search icon */}
            {feature.includes('searches') && (
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#EF8C00"/>
            )}
            {/* Brain/AI icon */}
            {feature.includes('DeepSeek') && (
              <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9" fill="#EF8C00"/>
            )}
            {/* Storage icon */}
            {feature.includes('storage') && (
              <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" fill="#EF8C00"/>
            )}
            {/* File icon */}
            {feature.includes('file') && (
              <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" fill="#EF8C00"/>
            )}
            {/* Upload icon */}
            {feature.includes('uploads') && (
              <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" fill="#EF8C00"/>
            )}
            {/* Lightbulb icon */}
            {feature.includes('question suggestions') && (
              <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" fill="#EF8C00"/>
            )}
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default function PricingPage() {
  const plans = [
    {
      title: "Try Griot",
      price: "Free",
      period: "",
      features: [
        "75 searches per day",
        "Limited DeepSeek usage",
        "20 file limit",
        "Slow uploads",
        "15 question suggestions per day"
      ]
    },
    {
      title: "Annual (2 months free)",
      price: "£161.99",
      period: "year",
      features: [
        "Unlimited searches",
        "Unlimited DeepSeek usage",
        "45GB storage for PDFs, videos & more",
        "Fast premium uploads",
        "Unlimited question suggestions",
      ]
    },
    {
      title: "Monthly",
      price: "£16.99",
      period: "month",
      features: [
        "Unlimited searches",
        "Unlimited DeepSeek usage", 
        "45GB storage for PDFs, videos & more",
        "Fast premium uploads",
        "Unlimited question suggestions",
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-leading mb-16">
        <h2 className="mt-16 mb-8 xl:w-3/4 text-lg text-600 font-bold text-leading">
        Pricing
            </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
} 