import { Link, useRouteError } from "react-router-dom";

import React from "react";

const ErrorPage = () => {
  const error = useRouteError() as any;
  return (
    <div>
      <h1>Oops! something went wrong</h1>
      <p>
        <strong>
          Erorr: {error.statusText} {error.status}
        </strong>
      </p>
      <Link to={"/"} className="text-blue-600 underline">
        Back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
