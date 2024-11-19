'use client';

import { useEffect } from 'react';

export default function PrivacyPolicy() {
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
        data-id="9f297bd6-fcf0-4be4-9154-eac07b68e893"
        className="pt-28"
      />
    </div>
  );
}