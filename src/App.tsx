import "@/App.scss";
import {Form} from "@/tic-tac-toe/Form";
import { TicTacToe } from "@/tic-tac-toe/TicTacToe";

export function App() {
  return (
    <div className="d-flex">
      {/* <Form title="AL1" fired={false}  /> */}
      <TicTacToe/>
    </div>
  );
}
