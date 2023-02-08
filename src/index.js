import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import routes from "./routes/routes";
import { router } from "./routes/routes";

import { RouterProvider } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
