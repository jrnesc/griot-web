import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';

export const metadata: Metadata = {
  title: 'Griot',
};

const avenirNext = localFont({
  src: [
    {
      path: './fonts/AvenirNext-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/AvenirNext-Demi.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/AvenirNext-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-avenir-next',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body className={avenirNext.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
