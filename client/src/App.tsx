import "@/App.scss";
import { Navbar } from "@/core/nav/Navbar";
import { ThemeProvider } from "@/core/theme/ThemeContext";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Navbar />
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </>
  );
}
