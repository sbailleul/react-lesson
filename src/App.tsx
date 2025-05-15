import "@/App.scss";
import {
  ThemeProvider
} from "@/features/students-managment/context/ThemeContext";
import { Outlet } from "react-router-dom";
type Test = {
  age: number;
  firstname: string;
};


export function App() {
  return (
    <ThemeProvider>
      <div className="d-flex">
        <Outlet />
        {/* <Form title="AL1" fired={false}  /> */}
        {/* <TicTacToe/> */}
      </div>
    </ThemeProvider>
  );
}
