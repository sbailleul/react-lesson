import "@/App.scss";
import { Page } from "@/features/students-managment/Page";
import { setupWorker } from 'msw/browser'
 
const worker = setupWorker()
// worker.start()
// worker.use(...handlers)


export function App() {
  return (
    <div className="d-flex">
      {/* <BurnMyComputer/> */}
      {/* <TicTacToe /> */}
      {/* <Form login={user.login} onLoginChanged={(login) => setUser({ login })} /> */}
      <Page/>
      {/* <Employees employees={employees} /> */}
    </div>
  );
}
