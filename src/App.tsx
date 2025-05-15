import "@/App.scss";
import { Page } from "@/features/students-managment/Page";
import { setupWorker } from "msw/browser";
import { ThemeProvider } from "@/features/students-managment/ThemeContext";

const worker = setupWorker();
// worker.start()
// worker.use(...handlers)

export function App() {
  return (
  <ThemeProvider>
    <div className="d-flex">
      {/* <BurnMyComputer/> */}
      {/* <TicTacToe /> */}
      {/* <Form login={user.login} onLoginChanged={(login) => setUser({ login })} /> */}
      {/* {flag ?<span><Page flag={true} /></span>  : <div><Page flag={false} /></div>} */}

      <Page flag/>
      {/* <Employees employees={employees} /> */}
    </div>
  </ThemeProvider>
  );
}
