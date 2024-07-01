import { App } from "@/App";
import { Account } from "@/features/account/Account.page";
import { Todos } from "@/features/todos/Todos.page";
import "@/index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Todos />,
        path: "todos",
      },
      {
        element: <Account />,
        path: "account",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
