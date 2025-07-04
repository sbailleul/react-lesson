import { App } from "@/App";
import { Page as AccountPage } from "@/features/account/Page";
import { Page as StudentDetailPage } from "@/features/students-managment/student-detail/Page";
import { Page as StudentsPage } from "@/features/students-managment/students/Page";
import "@/index.scss";
import { ThemeProvider } from "@/shared/theme/ThemeContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <StudentsPage />,
        path: "students",
        children: [],
      },
      { element: <StudentDetailPage />, path: "students/:studentId" },
      { element: <AccountPage />, path: "account" },
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
