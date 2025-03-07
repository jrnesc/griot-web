import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="fixed top-0 w-full z-30 clearNav bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex max-w-6xl px-4 mx-auto items-center justify-between md:px-6 lg:px-8">
      <div className="p-4">
          <Link href="/">
            <Image src="/griot.png" alt="Griot logo" width={70} height={70} priority />
          </Link>
        </div>

        <nav className="p-4">
          <ul className="flex items-center">
            <li className="mx-4">
              <Link href="/#features" className="hover:underline">Features</Link>
            </li>
            {/* <li className="mx-4">
              <Link href="/pricing" className="hover:underline">Pricing</Link>
            </li> */}
            <li className="mx-4">
              <Link href="https://apps.apple.com/gb/app/griot-ai/id6502509469" className="hover:underline">Download</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
