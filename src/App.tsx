import "@/App.scss";
import { Page } from "@/features/students-managment/Page";
import { setupWorker } from "msw/browser";
import { useState } from "react";

const worker = setupWorker();
// worker.start()
// worker.use(...handlers)

export function App() {
  return (
    <div className="d-flex">
      {/* <BurnMyComputer/> */}
      {/* <TicTacToe /> */}
      {/* <Form login={user.login} onLoginChanged={(login) => setUser({ login })} /> */}
      {/* {flag ?<span><Page flag={true} /></span>  : <div><Page flag={false} /></div>} */}

      <Page flag/>
      {/* <Employees employees={employees} /> */}
    </div>
  );
}
