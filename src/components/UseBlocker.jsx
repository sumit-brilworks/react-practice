import React, { useState } from "react";
import { Form, Navigate, useBlocker, useNavigate } from "react-router-dom";

function UseBlocker() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({ pathname: "/" });
  };
  let blocker = useBlocker(({ currentLocation, nextLocation }) => {
    console.log("Location : ", currentLocation, nextLocation);
    return value !== "" && currentLocation.pathname !== nextLocation.pathname;
  });
  console.log(blocker);
  return (
    <div>
      {console.log(blocker)}
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
        {blocker.state === "blocked" ? (
          <div>
            <p>Are you sure you want to leave?</p>
            <button onClick={() => blocker.proceed()}>Proceed</button>
            <button onClick={() => blocker.reset()}>Cancel</button>
          </div>
        ) : null}
      </Form>
      UseBlocker
    </div>
  );
}

export default UseBlocker;
