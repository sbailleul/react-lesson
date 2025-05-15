import "@/App.scss";
import { ThemeProvider } from "@/features/students-managment/ThemeContext";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider>
      <div className="d-flex">
        {/* <BurnMyComputer/> */}
        {/* <TicTacToe /> */}
        {/* <Form login={user.login} onLoginChanged={(login) => setUser({ login })} /> */}
        {/* {flag ?<span><Page flag={true} /></span>  : <div><Page flag={false} /></div>} */}
        <Outlet />
        {/* <Employees employees={employees} /> */}
      </div>
    </ThemeProvider>
  );
}
