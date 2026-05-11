import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">

      <h1 className="text-6xl sm:text-7xl font-bold text-gray-900">
        404
      </h1>

      <h2 className="text-xl sm:text-2xl font-semibold mt-4 text-gray-700">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Go Home
      </Link>

    </div>
  );
};

export default NotFound;