import "@/App.scss";
import {Form} from "@/features/students-managment/components/Form";
import { TicTacToe } from "@/features/tic-tac-toe/components/TicTacToe";

export function App() {
  return (
    <div className="d-flex">
      <Form title="AL1" fired={false}  />
      {/* <TicTacToe/> */}
    </div>  
  );
}
