import React from "react";
import { Outlet } from "react-router-dom";

const SomeLAzyComponent = () => {
  return (
    <div className="text-black text-6xl">Some lazily loaded component</div>
  );
};

export default SomeLAzyComponent;
export const obj = () => {
  console.log("Say Hello");
};
