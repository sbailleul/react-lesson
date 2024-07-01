import "@/App.scss";
import { AppNavbar } from "@/core/navigation/Navbar";
import { ThemeContextProvider } from "@/core/theme/ThemeContext";
import { ColorPicker } from "@/shared/ColorPicker";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <ThemeContextProvider>
      <AppNavbar/>
      <ColorPicker />
      <Outlet />
    </ThemeContextProvider>
  );
}
