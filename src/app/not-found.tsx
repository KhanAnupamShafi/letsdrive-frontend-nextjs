'use client';

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <html>
      <body>
        <div className="grid h-screen px-4 bg-white place-content-center">
          <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">404</h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Not Found!
            </p>

            <p className="mt-4 text-gray-500">
              {'This page is not available'}
            </p>
            <Link
              href="/"
              className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring cursor-pointer">
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default NotFoundPage;
