import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Params() {
  const [queryParams, setQueryParams] = useSearchParams();
  return <div>{JSON.stringify(queryParams)}</div>;
}

export default Params;
