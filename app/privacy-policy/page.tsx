'use client';

import { useEffect } from 'react';
import Script from 'next/script';

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
    <div 
      name="termly-embed" 
      data-id="9f297bd6-fcf0-4be4-9154-eac07b68e893"
      className="pt-28"
    />
  );
}