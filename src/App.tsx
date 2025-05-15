import "@/App.scss";
import { Navbar } from "@/features/students-managment/components/Navbar";
import {
  ThemeProvider
} from "@/features/students-managment/context/ThemeContext";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="d-flex">
        <Outlet />
        {/* <Form title="AL1" fired={false}  /> */}
        {/* <TicTacToe/> */}
      </div>
    </ThemeProvider>
  );
}
