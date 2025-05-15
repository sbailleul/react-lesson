import { App } from "@/App";
import { Page } from "@/features/students-managment/Page";
import { ThemeProvider } from "@/features/students-managment/ThemeContext";
import "@/index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";

const StudentDetail = () => {
  const {studentId} = useParams()
  return <span>STUDENT</span>;
};
const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Page />,
        path: "students",
        children: [],
      },
      { element: <StudentDetail />, path: "students/:studentId" }
    ],
  },
]);

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  // Créer une application React et la rattache à l'élément avec l'id "root".
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // Contrôle et log les bugs durant la phase de développement
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
});
