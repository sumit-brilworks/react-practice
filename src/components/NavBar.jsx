import React from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

const arr = [
  { heading: "Home" },
  { heading: "About" },
  { heading: "Contact" },
  { heading: "Billings" },
];
function NavBar() {
  return (
    <>
      <Navigate to={"/Home"} replace={true} />
      <nav>
        {arr.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={`/navbar/${item.heading}`}
              className={({ isActive, isPending }) =>
                `${isActive ? "bg-slate-900 text-white" : ""} ${
                  isPending ? "bg-red-900 text-white" : ""
                }`
              }
            >
              {JSON.stringify(item)}
            </NavLink>
          );
        })}
        <Outlet />
      </nav>
    </>
  );
}

export default NavBar;
