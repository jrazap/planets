import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from "./router";
import "./sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <Suspense fallback={`<h1>Loading...<h1/>`}>
      <RouterProvider router={router} />
    </Suspense>
  </RecoilRoot>
);
