import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";
import "@/index.scss";

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
      <App />
    </React.StrictMode>
  );
});
