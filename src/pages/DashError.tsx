import React from "react";
import { useRouteError } from "react-router-dom";

const DashError = () => {
  const error = useRouteError() as any;
  return (
    <div>
      <h1>Oops! something went wrong</h1>
      <p>
        <strong>
          Erorr: {error.statusText} {error.status}
        </strong>
      </p>
    </div>
  );
};

export default DashError;
