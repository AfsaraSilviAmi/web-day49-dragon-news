import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      
      <h2 className="text-2xl font-semibold mt-2">
        Page Not Found
      </h2>
      
      <p className="mt-2 text-base-content/70">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link href="/" className="btn btn-warning mt-6">
        Go Back Home
      </Link>
      
    </div>
        </div>
    );
};

export default NotFoundPage;