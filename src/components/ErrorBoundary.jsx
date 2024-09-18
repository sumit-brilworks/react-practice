import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);
  console.log(isRouteErrorResponse(error));
  console.log(error.data?.error.message);
  return <div>{error.data?.error.message}</div>;
}

export default ErrorBoundary;
