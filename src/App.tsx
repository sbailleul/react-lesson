import "@/App.scss";
import { Navbar } from "@/shared/Navbar";
import { ThemeProvider } from "@/shared/theme/ThemeContext";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider>
      <div className="d-flex">
        <Navbar />
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
