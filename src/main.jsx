import * as React from "react";
import {RouterProvider} from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import router from './route/routers';
import './index.css'
import AuthProvider from "./AuthProvider/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
);