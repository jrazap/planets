import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import LayoutComponent from "./layout";
import Planet from "./pages/Planet";
import "./main.scss";
import { RecoilRoot } from "recoil";

const router = createHashRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        path: "mercury",
        element: <Planet id={0} planet="mercury" />,
      },
      {
        path: "venus",
        element: <Planet id={1} planet="venus" />,
      },
      {
        path: "earth",
        element: <Planet id={2} planet="earth" />,
      },
      {
        path: "mars",
        element: <Planet id={3} planet="mars" />,
      },
      {
        path: "jupiter",
        element: <Planet id={4} planet="jupiter" />,
      },
      {
        path: "saturn",
        element: <Planet id={5} planet="saturn" />,
      },
      {
        path: "uranus",
        element: <Planet id={6} planet="uranus" />,
      },
      {
        path: "neptune",
        element: <Planet id={7} planet="neptune" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <Suspense fallback={`<h1>Loading...<h1/>`}>
      <RouterProvider router={router} />
    </Suspense>
  </RecoilRoot>
);
