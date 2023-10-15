'use client';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
const GlobalError = ({ error, reset }: ErrorProps) => {
  return (
    <html>
      <body>
        <div className="grid h-screen px-4 bg-white place-content-center">
          <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">401</h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unauthorized!
            </p>

            <p className="mt-4 text-red-500">
              {error.message ||
                'You must be logged in to access the page'}
            </p>

            <button
              type="button"
              onClick={() => reset()}
              className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring cursor-pointer">
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
