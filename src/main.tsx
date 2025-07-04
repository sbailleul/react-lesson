import { App } from "@/App";
import { Page } from "@/features/students-managment/components/Page";
import { StudentDetailPage } from "@/features/students-managment/components/student-detail/Page";
import { ThemeProvider } from "@/features/students-managment/context/ThemeContext";
import "@/index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}
const routesList = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "students",
        element: <Page />,
      },
      { path: "students/:studentId", element: <StudentDetailPage /> },
    ],
  },
];
const routes =
  import.meta.env.MODE === "development"
    ? createBrowserRouter(routesList)
    : createHashRouter(routesList);

enableMocking().then(() => {
  // Créer une application React et la rattache à l'élément avec l'id "root".
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // Contrôle et log les bugs durant la phase de développement
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={routes} />
        {/* <Page /> */}
        {/* <Form title="AL1" fired={false}  /> */}
        {/* <TicTacToe/> */}
      </ThemeProvider>
    </React.StrictMode>
  );
});
