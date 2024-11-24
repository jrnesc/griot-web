import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 bg-top border-black lg:flex-row">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link href="/privacy-policy" className="text-md text-black font-semibold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-md text-black font-semibold">
                Terms of Service
              </Link>
            </li>
            {/* <li>
              <Link href="/" className="text-md text-black font-semibold">
                Ad Choices
              </Link>
            </li> */}
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link href="/" className="text-md text-orange-400 font-semibold tracking-tight">
              © 2024 Griot
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
