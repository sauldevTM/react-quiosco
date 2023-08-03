import React from "react";
import ReactDOM from "react-dom/client";
import { QuioscoProvider } from "./context";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QuioscoProvider>
      <RouterProvider router={route} />
    </QuioscoProvider>
  </React.StrictMode>
);
