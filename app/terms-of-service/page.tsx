'use client';

import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    const loadTermly = () => {
      const script = document.createElement('script');
      script.src = "https://app.termly.io/embed-policy.min.js";
      script.id = "termly-jssdk";
      document.body.appendChild(script);
    };
    
    loadTermly();
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div 
        {...{name: "termly-embed"}} 
        data-id="7b782b32-c6ef-47f9-8724-fb41f1ffea35"
        className="pt-28"
      />
    </div>
  );
}