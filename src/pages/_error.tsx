import React from "react";
import Link from "next/link";

const errorPage = () => {
  return (
    <div>
      <h1>Error, something went wrong</h1>
      <h2>
        This is a 404 page handler for unknown routes, there is a default page
        included by nextjs, but you can override it by creating _error.js file
        in the main 'pages' directory
      </h2>
      <p>
        Try{" "}
        <Link href="/">
          <a>going back</a>
        </Link>
      </p>
    </div>
  );
};

export default errorPage;