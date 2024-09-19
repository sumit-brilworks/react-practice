import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  json,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import SpecificTeam from "./components/SpecificTeam.jsx";
import SomeLAzyComponent from "./components/SomeLAzyComponent.jsx";
import Page1 from "./components/Page1.jsx";
import Page2 from "./components/Page2.jsx";
import NavBar from "./components/NavBar.jsx";
import Billings from "./components/Billings.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Params from "./components/Params.jsx";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="/:teamm" element={<Params />}></Route>
      <Route path="/Billings" element={<Billings />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/navbar" element={<NavBar />}></Route>
      <Route path="/page1" element={<Page1 />}></Route>
      <Route path="/page2" element={<Page2 />}></Route>

      <Route
        path="/:teamId"
        loader={async ({ params, request }) => {
          if (params.teamId == 3)
            console.log(
              params,
              request,
              `https://jsonplaceholder.org/posts/${params.teamId}`
            );
          if (params.teamId >= 200)
            throw json(
              {
                error: { message: "Error occured due to invalid userID" },
              },
              { status: "404" }
            );
          // throw new Error("This is a normal error object");
          const data = await fetch(
            `https://jsonplaceholder.org/posts/${params.teamId}`
          );
          console.log("Data", data);
          const data1 = await data.json();
          console.log("Error", data1);
          return data1;
        }}
        element={<SpecificTeam />}
        errorElement={<ErrorBoundary />}
      ></Route>
      <Route
        path="/lazy"
        lazy={() =>
          import("./components/SomeLAzyComponent.jsx").then((a) => {
            console.log("Generally an import consists", a);
            return {
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <a.default />
                </Suspense>
              ),
            };
          })
        }
        // lazy={async () => {
        //   let SomeLAzyComponent = await import(
        //     "./components/SomeLAzyComponent.jsx"
        //   );
        //   return { element: SomeLAzyComponent };
        // }}
      ></Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
