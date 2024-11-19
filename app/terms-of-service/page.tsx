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
    <div 
      name="termly-embed" 
      data-id="7b782b32-c6ef-47f9-8724-fb41f1ffea35"
      className="pt-28"
    />
  );
}