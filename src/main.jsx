import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { BerandaPage } from "./pages/beranda.jsx";
import { HomePage } from "./pages/home.jsx";
import { ScanQR } from "./pages/scanqr.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BerandaPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/scanqr",
    element: <ScanQR />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
