import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="text-center mt-12">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="mt-4 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
