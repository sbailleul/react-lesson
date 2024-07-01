import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";
import "@/index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Employees } from "./features/office/Employees";
import { Account } from "./features/account/Account";
import { getUserInfo } from "./features/account/api";


const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { path: "employees", element: <Employees /> },
      { path: "account", element: <Account />, loader: getUserInfo },
    ],
  },
]);
// Créer une application React et la rattache à l'élément avec l'id "root".
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Contrôle et log les bugs durant la phase de développement
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
